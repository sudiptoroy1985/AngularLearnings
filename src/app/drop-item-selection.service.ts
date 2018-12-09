import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Dropitem } from './drop/Dropitem';

@Injectable({
  providedIn: 'root'
})
export class DropItemSelectionService {

  private dropItemSelected = new Subject<Dropitem>();

  // Observable string streams
  dropItemSelected$ = this.dropItemSelected.asObservable();

  // Service message commands
  setDropItem(dropItem: Dropitem) {
    this.dropItemSelected.next(dropItem);
}

}
