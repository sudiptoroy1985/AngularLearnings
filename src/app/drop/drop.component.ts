import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Dropitem, ListItem } from './Dropitem';

@Component({
  selector: 'app-drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.css']
})
export class DropComponent implements OnInit, OnChanges {

  Drops: Dropitem[] = [];

  selectedDropItem: Dropitem;

  @Input()
  selectedListItem: ListItem;

  constructor() { }

  ngOnInit() {
    this.Drops.push({id: 1, name: 'dry Aisle', list: []});
    this.Drops.push({id: 2, name: 'Freezing Area', list: []});
    this.Drops.push({id: 3, name: 'Trifecta', list: []});
  }

  setCurrentDropItemEvent(item) {
    this.selectedDropItem = this.Drops.find(p => p.id === item.id);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.selectedDropItem) {
       this.selectedDropItem.list.push(changes.selectedListItem.currentValue);
      console.log(this.selectedDropItem);
    }

  }



}


