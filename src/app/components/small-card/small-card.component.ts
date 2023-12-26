import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Card} from "../../types/card";
import * as moment from "moment";

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnChanges {
  @Input()
  card: Card = {
    bigCard: false,
    id: 0,
    image: "default-image.png",
    date: "",
    reading: 0,
    title: "",
    article: ''
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['card'] !== undefined)
      this.card.date = moment(changes['card'].currentValue.date).format('MMM DD')
  }

}
