import { Component, OnInit } from '@angular/core';
import {Turtle} from '../models/turtle';
import {TurtleService} from '../_services/turtle.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  turtle: Turtle;

  constructor(private service: TurtleService) { }

  async ngOnInit() {
    await this.populateTurtle();
  }

  private populateTurtle() {
    this.service.get().then(turtle => this.turtle = turtle);
  }

}
