import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminorders',
  templateUrl: './adminorders.component.html',
  styleUrls: ['./adminorders.component.css']
})
export class AdminordersComponent implements OnInit {
toggle=true;
toggle1=true;
toggle2=true;
toggle3=true;
toggle4=true;
toggle5=true;
status='Pending';
status1='Pending';
status2='Pending';
status3='Pending';
status4='Pending';
status5='Pending';
  constructor() { }

  ngOnInit(): void {
  }
change(){
  this.toggle=!this.toggle;
  this.status=this.toggle?'Pending':'completed';
}
change1(){
  this.toggle1=!this.toggle1;
  this.status1=this.toggle1?'Pending':'completed';
}
change2(){
  this.toggle2=!this.toggle2;
  this.status2=this.toggle2?'Pending':'completed';
}
change3(){
  this.toggle3=!this.toggle3;
  this.status3=this.toggle3?'Pending':'completed';
}
change4(){
  this.toggle4=!this.toggle4;
  this.status4=this.toggle4?'Pending':'completed';
}
change5(){
  this.toggle5=!this.toggle5;
  this.status5=this.toggle5?'Pending':'completed';
}
}

