import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dropitem } from '../Dropitem';

@Component({
  selector: 'app-drop-component-item',
  templateUrl: './drop-component-item.component.html',
  styleUrls: ['./drop-component-item.component.css']
})
export class DropComponentItemComponent implements OnInit {

  @Input()
  dropItem: Dropitem;

  @Output()
  setCurrentDropItemEvent: EventEmitter<Dropitem> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  setCurrentDropItem(dropitem) {
    this.setCurrentDropItemEvent.next(dropitem);
  }

}
