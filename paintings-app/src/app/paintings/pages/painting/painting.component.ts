import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Painting } from '../../interfaces/painting.interface';
import { PaintingsService } from '../../services/paintings.service';

@Component({
  selector: 'app-painting',
  templateUrl: './painting.component.html',
  styles: [
    `
      img {
        width: 100%;
      }
    `,
  ],
})
export class PaintingComponent implements OnInit {
  painting!: Painting;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private paintingsService: PaintingsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.paintingsService.getPaintingById(id)))
      .subscribe((painting) => (this.painting = painting));
  }

  goBack() {
    this.router.navigate(['paintings/list']);
  }
}
