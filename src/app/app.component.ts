import { Component, OnInit, ViewChild } from '@angular/core';
import { Note } from './types/note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  clickedNote: Note;
  opened = true;
  @ViewChild('sidenav', { static: true }) sideNav;

  constructor() { }

  ngOnInit() {
    // Check window size for adjusting menu
    window.onresize = (e) => {
      this.checkMenuSize();
    };
    this.checkMenuSize();
  }

  checkMenuSize() {
      const w = window.innerWidth;
      if (w > 576) {
        this.sideNav.open();
      } else {
        this.sideNav.close();
      }
  }
}
