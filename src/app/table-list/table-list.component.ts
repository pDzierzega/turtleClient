import { Component, OnInit } from '@angular/core';
import {TableService} from '../_services/table.service';
import {GameBuilder} from '../models/game-builder';
import { Router } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TableBuilderComponent} from '../table-builder/table-builder.component';

@Component({
  selector: 'app-game-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  games: GameBuilder[] = [];

  constructor(private service: TableService,
              private modalService: NgbModal,
              private router: Router) { }

  async ngOnInit() {
    this.populateGames();
  }

  create( ) {
    const modalRef = this.modalService.open(TableBuilderComponent, { size: 'lg'});
  }

  populateGames() {
    this.service.getAll().then(games => this.games = games);
  }

  join(uuid: string) {
    this.service.join(uuid);
    this.router.navigate(['/table/' + uuid]);
  }
}
