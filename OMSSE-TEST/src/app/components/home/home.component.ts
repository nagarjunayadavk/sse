import { Component, OnInit } from '@angular/core';
import { CardDataService } from '../../services/card-data.service';
import { Card} from '../../services/card'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private carDataService: CardDataService) { }
  cards: Card[];

  ngOnInit() {
    this.carDataService.cards.subscribe(x => {
      this.cards = x;
    });
  }

}
