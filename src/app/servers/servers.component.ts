import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
/*   template: `
    <app-server></app-server>
    <app-server></app-server>`, */
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No Server Was Created";
  serverName = 'Test Server';
  serverCreated = false;  //to ngIf directive
  servers = ['TestServer', 'Test Server 2']

  constructor() {
    //arrow function give true to allowNewServer, arrow function is function only by body 
    setTimeout( ()=>{this.allowNewServer=true;}, 2000);
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;  //to ngIf directive
    this.servers.push(this.serverName);
    this.serverCreationStatus = "server was created";
  }

  onUpdateServerName(event: Event){
    // console.log(event);
  }

}
