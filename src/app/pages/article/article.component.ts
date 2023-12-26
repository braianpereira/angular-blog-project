import {Component, OnInit} from '@angular/core';
import {Card} from "../../types/card";
import {ActivatedRoute} from "@angular/router";
import {fakedata} from "../../data/fakedata";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{
  card : Card = {
    bigCard: false,
    date: "",
    id: 0,
    image: "",
    reading: 0,
    title: "",
    resume: "",
    article: ''
  }

  constructor(private route: ActivatedRoute) {
  }
  ngOnInit(): void {
     this.route.paramMap.subscribe(
      value => {
        const id = value.get('id')

        if (id){
          const card = fakedata.find(value => value.id == (parseInt(id)))
          if (card) {
            this.card = card
          }
        }
      }
    )
  }


}
