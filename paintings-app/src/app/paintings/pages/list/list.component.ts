import { Component, OnInit } from '@angular/core';
import { Painting } from '../../interfaces/painting.interface';
import { PaintingsService } from '../../services/paintings.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  
})
export class ListComponent implements OnInit {
  paintings: Painting[] = [];

  constructor(private paintingsService: PaintingsService) {}

  ngOnInit(): void {
    this.paintingsService
      .getPaintings()
      .subscribe((paintings) => (this.paintings = paintings));
    // .subscribe(console.log);
  }
}
