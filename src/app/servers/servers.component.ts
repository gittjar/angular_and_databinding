import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // backticks template!
  //selector: '[app-servers]',
  //selector: '.app-servers',
  templateUrl: './servers.component.html',

  /*
  template: `

<section>
<h1>I'm in the Servers Component</h1>
<h1>NET22S. Jarno</h1>
<p>Below this I have 2 Server Components. And I'm in Servers Component Template! Backticks template!</p>
<app-server></app-server>
<app-server></app-server>
</section>
  
  `
  ,
  */

  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer:boolean = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';


constructor(){
  setTimeout(() =>{this.allowNewServer = true}, 2500);

}

ngOnInit(): void {
  
}

onCreateServer(){
  this.serverCreationStatus = 'Server was created!';
}

onUpdateServeName(event:Event){
  this.serverName = (<HTMLInputElement>event.target).value;
}
}
