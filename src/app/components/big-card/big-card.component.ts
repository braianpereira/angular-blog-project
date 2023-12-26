import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import * as moment from 'moment';
import {Card} from "../../types/card";

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnChanges {
  @Input()
  card: Card = {
    bigCard: false,
    id: 0,
    image: "",
    category: '',
    title: '',
    date: '',
    reading: 0,
    article: ''
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['card'] !== undefined)
      this.card.date = moment(changes['card'].currentValue.date).format('MMM DD')
  }
}
