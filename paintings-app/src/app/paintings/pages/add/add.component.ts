import { Component, OnInit } from '@angular/core';
import { Painting, Technique } from '../../interfaces/painting.interface';
import { PaintingsService } from '../../services/paintings.service';
import { switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../components/confirm/confirm.component';
import { Overlay } from '@angular/cdk/overlay';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
    `
      img {
        width: 100%;
      }
    `,
  ],
})
export class AddComponent implements OnInit {
  constructor(
    private paintingsService: PaintingsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    if (this.router.url.includes('edit')) {
      this.activatedRoute.params
        .pipe(switchMap(({ id }) => this.paintingsService.getPaintingById(id)))
        .subscribe((painting) => (this.painting = painting));
    }
  }

  technique = [
    {
      id: 'DC Comics',
      desc: 'Dc - Comics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics',
    },
  ];

  painting: Painting = {
    title: '',
    artist: '',
    style: '',
    location: '',
    date: '',
    technique: Technique.DCComics,
    description: '',
    url_img: '',
  };

  save() {
    if (this.painting.title.trim().length === 0) {
      return;
    }

    if (this.painting.id) {
      this.paintingsService
        .updatePainting(this.painting)
        .subscribe((painting) => {
          this.showSnackBar('Updated!');
        });
    } else {
      this.paintingsService.addPainting(this.painting).subscribe((painting) => {
        this.router.navigate(['/paintings/edit', painting.id]);
        this.showSnackBar('Created!');
      });
    }
  }

  delete() {
    const dialog = this.dialog.open(ConfirmComponent, {
      width: '200px',
      data: this.painting,
    });

    dialog.afterClosed().subscribe((result) => {
      if (result)
        this.paintingsService
          .deletePainting(this.painting.id!)
          .subscribe((resp) => {
            this.router.navigate(['/paintings']);
          });
    });
  }

  showSnackBar(message: string) {
    this._snackBar.open(message, 'OK', {
      duration: 2500,
    });
  }
}
