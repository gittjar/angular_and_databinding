import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // backticks template!
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

  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

constructor(){}

ngOnInit(): void {
  
}
}
