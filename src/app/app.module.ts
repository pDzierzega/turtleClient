import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { JwtInterceptor} from './_helpers/JwtInterceptor';
import { RouterModule, Routes} from '@angular/router';
import { NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DataTableModule} from 'angular-6-datatable';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { AuthorizationModalComponent } from './authorization-modal/authorization-modal.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { TableComponent } from './table/table.component';
import { TableBuilderComponent } from './table-builder/table-builder.component';
import { TableListComponent } from './table-list/table-list.component';
import { GameComponent } from './game/game.component';
import { TurtleComponent } from './turtle/turtle.component';
import { WebSocketComponent } from './web-socket/web-socket.component';

import { AuthenticationService} from './_services/authentication.service';
import { UserService} from './_services/user.service';
import { TableService} from './_services/table.service';
import { TurtleService} from './_services/turtle.service';
import { ChatComponent } from './chat/chat.component';
import {ChatService} from './_services/chat.service';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'sign-in', component: SigninComponent},
  { path: 'sign-up', component: SignupComponent},
  { path: 'user', component: UserComponent},
  { path: 'table/:id', component: TableComponent},
  { path: 'table', component: TableListComponent},
  { path: 'game', component: GameComponent},
  { path: 'socket', component: WebSocketComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    UserComponent,
    WebSocketComponent,
    BsNavbarComponent,
    TableListComponent,
    TurtleComponent,
    GameComponent,
    TableComponent,
    TableBuilderComponent,
    AuthorizationModalComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },

    AuthenticationService,
    UserService,
    TableService,
    TurtleService,
    NgbModal,
    ChatService
  ],
  entryComponents: [
    TableBuilderComponent,
    AuthorizationModalComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
