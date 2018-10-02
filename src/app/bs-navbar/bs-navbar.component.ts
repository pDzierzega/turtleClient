import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../_services/authentication.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TableBuilderComponent} from '../table-builder/table-builder.component';
import {AuthorizationModalComponent} from '../authorization-modal/authorization-modal.component';


@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {


  constructor(public authService: AuthenticationService,
              private modalService: NgbModal) {
  }

  async ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

  sign_in() {
    const modalRef = this.modalService.open(AuthorizationModalComponent);
  }
}
