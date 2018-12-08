import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import { ListItem } from './drop/Dropitem';

@Injectable()
export class ItemService {

  // Observable string sources
  private itemAdded = new Subject<ListItem>();

  // Observable string streams
  itemAdded$ = this.itemAdded.asObservable();

  // Service message commands
  addItem(item: ListItem) {
    this.itemAdded.next(item);
}

}
