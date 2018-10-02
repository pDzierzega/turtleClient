import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {TableService} from '../_services/table.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-table-builder',
  templateUrl: './table-builder.component.html',
  styleUrls: ['./table-builder.component.css']
})
export class TableBuilderComponent implements OnInit {


  constructor(public activeModal: NgbActiveModal,
              private service: TableService,
              private router: Router) { }

  ngOnInit() {
  }

  create(name, number) {
    this.service.create(name, number).then(response => {
      this.activeModal.close();
      this.router.navigate(['/table/' + response.uuid]);
    });
  }

}
