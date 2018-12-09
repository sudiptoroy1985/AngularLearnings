import { DropItemSelectionService } from './../drop-item-selection.service';
import { ItemService } from './../item.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Dropitem } from './Dropitem';

@Component({
  selector: 'app-drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.css']
})
export class DropComponent implements OnInit, OnDestroy {

  Drops: Dropitem[] = [];

  selectedDropItem: Dropitem;

  listItemSubscription: Subscription;

  dropItemSubscription: Subscription;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private ItemService: ItemService, private DropItemSelectionService: DropItemSelectionService) {
    this.subscribeToListItemSet(ItemService);
    this.subscribeToDropItemSet(DropItemSelectionService);
   }

  private subscribeToDropItemSet(dropItemSelectionService) {
    this.dropItemSubscription = dropItemSelectionService.dropItemSelected$.subscribe(dropItem => {
      this.selectedDropItem = this.Drops.find(p => p.id === dropItem.id);
    });
  }

  private subscribeToListItemSet(itemService) {
    this.listItemSubscription = itemService.itemAdded$.subscribe(item => {
      const dropItem = this.selectedDropItem;
      if (dropItem && !dropItem.list.find(p => p.id === item.id)) {
        dropItem.list.push(item);
      }
    });
  }

  ngOnInit() {
    this.Drops.push({id: 1, name: 'dry Aisle', list: []});
    this.Drops.push({id: 2, name: 'Freezing Area', list: []});
    this.Drops.push({id: 3, name: 'Trifecta', list: []});
  }

  ngOnDestroy() {
    this.listItemSubscription.unsubscribe();
    this.dropItemSubscription.unsubscribe();
  }





}


