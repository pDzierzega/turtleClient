import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {TableBuilderComponent} from '../table-builder/table-builder.component';

@Component({
  selector: 'app-authorization-modal',
  templateUrl: './authorization-modal.component.html',
  styleUrls: ['./authorization-modal.component.css']
})
export class AuthorizationModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
