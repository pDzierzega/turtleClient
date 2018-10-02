import { Component } from '@angular/core';
// import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { Stomp} from 'stompjs/lib/stomp.js';
import {UserService} from '../_services/user.service';



@Component({
  selector: 'app-web-socket',
  templateUrl: './web-socket.component.html',
  styleUrls: ['./web-socket.component.css']
})
export class WebSocketComponent {

  greetings: string[] = [];
  showConversation: boolean = false;
  ws: any;
  name: string;
  disabled: boolean;

  constructor(private service: UserService ) { }

  connect() {
    // let ws = new SockJS('http://localhost:8099/greeting');

    let socket = new WebSocket("ws://localhost:8099/greeting");
    this.ws = Stomp.over(socket);

    let that = this;
    this.ws.connect({}, function(frame) {
      that.ws.subscribe("/errors", function(message) {
        alert("Error " + message.body);
      });
      that.ws.subscribe("/topic/reply", function(message) {
        console.log(message)
        that.showGreeting(message.body);
      });
      that.disabled = true;
    }, function(error) {
      alert("STOMP error " + error);
    });
  }

  disconnect() {
    if (this.ws != null) {
      this.ws.ws.close();
    }
    this.setConnected(false);
    console.log("Disconnected");
  }

  sendName() {
    let data = JSON.stringify({
      'name' : this.name
    })
    this.ws.send("/app/message", {}, data);
  }

  showGreeting(message) {
    this.showConversation = true;
    console.log(message);
    this.greetings.push(message);
  }

  setConnected(connected) {
    this.disabled = connected;
    this.showConversation = connected;
    this.greetings = [];
  }

  sendNameWithREST() {
      this.service.sendNameWithREST();
  }
}
