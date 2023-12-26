import {Component, OnInit} from '@angular/core';
import {Card} from "../../types/card";
import {fakedata} from "../../data/fakedata";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'angular-blog-project';
  smallCards: Card[] | undefined;
  bigCard: Card = {
    article: "",
    category: "",
    resume: "",
    bigCard: true,
    id: 0,
    date: "",
    image: "",
    reading: 0,
    title: ""
  }

  ngOnInit(): void {
    this.smallCards = fakedata.filter(article => !article.bigCard)
    this.bigCard = fakedata.filter(article => article.bigCard)[0]
  }


}
