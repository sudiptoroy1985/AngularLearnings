import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ListItem } from '../drop/Dropitem';

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.css']
})
export class DragComponent implements OnInit {

  items: ListItem[] = [];

  @Output()
  addListItemEvnt: EventEmitter<ListItem> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.items.push({ itemName: 'first', id: 1 });
    this.items.push({ itemName: 'second', id: 2 });
    this.items.push({ itemName: 'third', id: 3 });
    this.items.push({ itemName: 'fourth', id: 4 });
    this.items.push({ itemName: 'fifth', id: 5 });
    this.items.push({ itemName: 'sixth', id: 6 });

  }

  // tslint:disable-next-line:no-shadowed-variable
  addPromotion(item: ListItem) {
     this.addListItemEvnt.next(item);
  }

}


