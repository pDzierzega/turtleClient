import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  ws: any;

  constructor() { }

  // connect() {
  //
  //   let socket = new WebSocket("ws://localhost:8099/greeting");
  //   this.ws = Stomp.over(socket);
  //
  //   let that = this;
  //   this.ws.connect(
  //     {},
  //     function(frame) {
  //       that.ws.subscribe("/errors", function(message) {
  //       alert("Error " + message.body);
  //     });
  //
  //       that.ws.subscribe("/topic/reply", function(message) {
  //         console.log(message)
  //         that.showGreeting(message.body);
  //     });
  //
  //   }, function(error) {
  //     alert('STOMP error ' + error);
  //   });
  // }
  //
  // disconnect() {
  //   if (this.ws != null) {
  //     this.ws.ws.close();
  //   }
  //   this.setConnected(false);
  // }
}
