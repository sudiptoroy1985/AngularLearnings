import { ItemService } from './../item.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Dropitem, ListItem } from './Dropitem';

@Component({
  selector: 'app-drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.css']
})
export class DropComponent implements OnInit {

  Drops: Dropitem[] = [];

  selectedDropItem: Dropitem;

  subscription: Subscription;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private ItemService: ItemService) {
    this.subscription = ItemService.itemAdded$.subscribe(
      item => {
        console.log(item);
        this.selectedDropItem.list.push(item);
    });
   }

  ngOnInit() {
    this.Drops.push({id: 1, name: 'dry Aisle', list: []});
    this.Drops.push({id: 2, name: 'Freezing Area', list: []});
    this.Drops.push({id: 3, name: 'Trifecta', list: []});
  }

  setCurrentDropItemEvent(item) {
    this.selectedDropItem = this.Drops.find(p => p.id === item.id);
    console.log(this.selectedDropItem);
  }





}

