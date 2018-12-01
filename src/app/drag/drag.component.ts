import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.css']
})
export class DragComponent implements OnInit {

  count: number = 10;

  items: item[] = [];

  constructor() { }

  ngOnInit() {
    this.items.push({name:"first",id:1})
    this.items.push({name:"second",id:2})
    this.items.push({name:"third",id:3})
    this.items.push({name:"fourth",id:4})
    this.items.push({name:"fifth",id:5})
    this.items.push({name:"sixth",id:6})

  }

  allowDrop(ev) {
    ev.currentTarget.style.background = "lightblue";
    ev.preventDefault();
  }

  leaveDrop(ev){
    ev.currentTarget.style.background = "white";
    ev.preventDefault();
  }



  drag(ev) {
    ev.effectAllowed = "copyMove";
    ev.dataTransfer.setData("text", ev.target.id);
  }

  drop(ev,el) {
    ev.dataTransfer.dropEffect = "link";
    ev.currentTarget.style.background = "white";
    var data = ev.dataTransfer.getData("text");
    var newNode = document.getElementById(data);
    for (var existingNode of el.getElementsByClassName('dragg')) {
       if(existingNode.id === newNode.id)
       return;
     }
    var clonedNode = newNode.cloneNode(true);
    el.appendChild(clonedNode);
  }

}

interface item{
  name: string,
  id: number,
}
