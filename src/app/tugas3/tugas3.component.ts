import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas3',
  templateUrl: './tugas3.component.html',
  //styleUrls: ['./tugas3.component.css']
  styles:[`
        .online {
            color:  white;
        }
    `]
})
export class Tugas3Component implements OnInit {
  
allowNewServer = false;
serverCreationStatus = '';
serverName = '';
serverCreated = false;
servers = [];
  constructor() { 
    // () => adalah arrow function atau lamda --> fitur ES6 javascript
      }
  ngOnInit() {
  }

  onCreationStatus(){
  if(this.serverCreated == false){
    this.serverName = 'Politeknik Negeri Malang';
      this.serverCreated = true;
   } else{
     this.serverCreated = false;
     this.serverName = '';
   }
   this.onarray();
  }  
  onarray(){
    this.servers.push(this.servers.length+1);
  }
}
 