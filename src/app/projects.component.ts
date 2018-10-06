import { Component, OnInit } from '@angular/core';
import * as M from '../../node_modules/materialize-css/dist/js/materialize.min.js';

@Component({
  selector: 'my-projects',
  templateUrl: '../templates/projects.component.html',
  styleUrls: ['../styles/projects.component.css']
})

export class ProjectsComponent implements OnInit {
  // options = [indicators = true];
  options = {};
  elems = {};


  ngOnInit() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, this.options);

    var elems1 = document.querySelectorAll('.carousel');
    var instances1 = M.Carousel.init(elems1, this.options);
  }

}
