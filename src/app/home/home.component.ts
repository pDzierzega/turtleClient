import { Component } from '@angular/core';
import { HttpClient} from '../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  url = 'http://localhost:8099/api/turtle/'

  constructor(private http: HttpClient) { }

}
