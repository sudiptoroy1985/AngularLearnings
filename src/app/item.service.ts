import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Dropitem} from './drop/Dropitem';

@Injectable()
export class ItemService {

  // Observable string sources
  private itemAdded = new Subject < Dropitem > ();

  // Observable string streams
  itemAdded$ = this
    .itemAdded
    .asObservable();

  // Service message commands addItem(item: string) {
  // this.missionAnnouncedSource.next(mission); } confirmMission(astronaut:
  // string) {   this.missionConfirmedSource.next(astronaut); }
}
