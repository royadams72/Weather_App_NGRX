import { Component, OnChanges, Input, ChangeDetectionStrategy } from '@angular/core';
import { Cities } from '../../../model/weather';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultsComponent implements OnChanges {
  constructor() { }
@Input() cities:Array<Cities> = [];

  ngOnChanges() {
   
    console.log(this.cities)
    // IMPLEMENT ANYTHING YOU BEKIEVE YOU MIGHT NEED HERE
  }
}
