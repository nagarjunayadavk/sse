import { Injectable } from '@angular/core';
import { Card} from '../services/card'
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CardDataService {
  // Deafult by 4 components
  public cards = new BehaviorSubject<Card[]>(
    [
      {
        isShow: true,
        name: "Component 1"
      },
      {
        isShow: true,
        name: "Component 2"
      },
      {
        isShow: true,
        name: "Component 3"
      },
      {
        isShow: true,
        name: "Component 4"
      },
    ]
  );
}
