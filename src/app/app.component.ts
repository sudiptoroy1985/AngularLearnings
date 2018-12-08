import { Component } from '@angular/core';
import { Dropitem, ListItem } from './drop/Dropitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dragAndDrop';

  selectedListItem: ListItem;

  addListItem(item) {
    this.selectedListItem = item;
  }

}
