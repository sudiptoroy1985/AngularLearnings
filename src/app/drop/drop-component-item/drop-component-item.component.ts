import { DropItemSelectionService } from './../../drop-item-selection.service';
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


  constructor(private dropItemSelectionService: DropItemSelectionService) { }

  ngOnInit() {
  }

  setCurrentDropItem(dropitem) {
    this.dropItemSelectionService.setDropItem(dropitem);
  }

}
