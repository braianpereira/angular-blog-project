import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Card} from "../../types/card";
import * as moment from "moment";

@Component({
  selector: 'app-normal-card',
  templateUrl: './normal-card.component.html',
  styleUrls: ['./normal-card.component.css']
})
export class NormalCardComponent implements OnChanges {
  @Input()
  card: Card = {
    bigCard: false,
    id: 0,
    title: '',
    category: '',
    resume: '',
    date: '',
    reading: 0,
    image: '',
    article: ''
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['card'] !== undefined)
      this.card.date = moment(changes['card'].currentValue.date).format('MMM DD')
  }
}
