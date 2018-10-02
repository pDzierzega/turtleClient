import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TableService} from '../_services/table.service';
import {GameBuilder} from '../models/game-builder';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  game: GameBuilder;
  uuid: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private service: TableService) { }

  ngOnInit() {
    this.uuid = this.route.snapshot.paramMap.get('id');
    this.service.get(this.uuid).then(response => this.game = response);
  }

}
