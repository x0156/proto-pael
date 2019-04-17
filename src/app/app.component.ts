import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html'
})
export class AppComponent {
  expanded = new Array(3).fill(false);
  icon = "fork";

allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
   this.icon = (data.split("://")[1]);
  }

  toggle(open: boolean, group: number) {
    if (open) {
      // Collapse everything then open the one we want
      this.expanded = new Array(3).fill(false);
      this.expanded[group] = true;
    } else {
      this.expanded[group] = false;
    }
  }
}
