import { Component } from '@angular/core';
import { Dropitem, ListItem } from './drop/Dropitem';
import { Subscription } from 'rxjs';
import { ItemService } from './item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dragAndDrop';

  subscription: Subscription;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private ItemService: ItemService) {

  }


  selectedListItem: ListItem;

  addListItem(item) {
    this.ItemService.addItem(item);
  }

}
