import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.css']
})
export class DragComponent implements OnInit {

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

  overDrop(ev) {
    ev.currentTarget.setAttribute('class','dock hoverDock');
    ev.preventDefault();
  }

  leaveDrop(ev){
    ev.currentTarget.setAttribute('class','dock stableDock');
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  drop(ev,el) {
    var data = ev.dataTransfer.getData("text");
    var newNode = document.getElementById(data);
    for (var existingNode of el.getElementsByClassName('dragg')) {
       if(existingNode.id === newNode.id){
         console.log(ev.currentTarget);
         ev.currentTarget.setAttribute('class','dock erroredDock');
       return;
       }
     }
    var clonedNode = newNode.cloneNode(true);
    el.appendChild(clonedNode);
    ev.currentTarget.setAttribute('class','dock stableDock');
  }

}

interface item{
  name: string,
  id: number,
}
