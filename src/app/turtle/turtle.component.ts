import { Component, OnInit , Input} from '@angular/core';
import {Turtle} from '../models/turtle';
import {TurtleService} from '../_services/turtle.service';

@Component({
  selector: 'app-turtle',
  templateUrl: './turtle.component.html',
  styleUrls: ['./turtle.component.css']
})
export class TurtleComponent implements OnInit {

  @Input() turtle: Turtle;

  constructor() { }

  ngOnInit() {

  }

}
