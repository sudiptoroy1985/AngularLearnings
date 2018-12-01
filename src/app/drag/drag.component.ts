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
    ev.preventDefault();
  }



  drag(ev) {
    ev.dataTransfer.dropEffect = "copy";
    ev.dataTransfer.setData("text", ev.target.id);
  }

  drop(ev,el) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    el.appendChild(document.getElementById(data));
  }

}

interface item{
  name: string,
  id: number,
}
