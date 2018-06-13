import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  // IMPLEMENT ANY INPUT OR OUTPUT YOU MIGHT NEED
@Output() onSearchCity = new EventEmitter()
  constructor() { }

  search(city) {
    // console.log(city)
    this.onSearchCity.emit(city)
    // TO BE IMPLEMENTED
  }
}
