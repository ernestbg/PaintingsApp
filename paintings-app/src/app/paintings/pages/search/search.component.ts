import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Painting } from '../../interfaces/painting.interface';
import { PaintingsService } from '../../services/paintings.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  term: string = '';
  paintings: Painting[] = [];
  paintingSelected: Painting | undefined;
  

  constructor(private paintingsService: PaintingsService) {}

  ngOnInit(): void {}
  search() {
    this.paintingsService
      .getSuggestions(this.term.trim())
      .subscribe((paintings) => (this.paintings = paintings));
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      this.paintingSelected = undefined;
      return;
    }
    const painting: Painting = event.option.value;

    this.term = painting.title;
    this.paintingsService
      .getPaintingById(painting.id!)
      .subscribe((painting) => (this.paintingSelected = painting));
  }
}
