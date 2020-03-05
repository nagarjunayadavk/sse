import { Component, OnInit, Input } from '@angular/core';
import { CardDataService } from '../../services/card-data.service';
import { Card} from '../../services/card'
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private cardDataService: CardDataService) { }
  cardList: Card[];
  @Input() componentNumber: number = 0;
  ngOnInit() {

    this.cardDataService.cards.subscribe(x => {
      this.cardList = x;
    });
  }

  showHideCard(cardName) {
    this.cardList.forEach(x => {
      if (cardName == x.name ) {
        x.isShow = !x.isShow;
      }
    });

    this.cardDataService.cards.next(
      this.cardList
    )
  }
}
