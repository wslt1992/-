import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  active($event) {
    let el = $event.target;
    
    let parent = el.parentNode;
    for (const element of parent.children) {
      element.classList.remove("active");
    }
    el.classList.add("active");
  }


}
