import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.css']
})
export class DragComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("init")
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
