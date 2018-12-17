import { Component } from '@angular/core';

@Component({
  selector: 'my-announcements',
  templateUrl: '../templates/announcements.component.html',
  styleUrls: ['../styles/announcements.component.css']
})

export class AnnouncementsComponent implements OnInit {
  options = {};
  elems = {};

  ngOnInit() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, this.options);
  }
