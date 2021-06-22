import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  receivedData:any[]=[];
  constructor(private ds:DataService) { }

  ngOnInit(): void {
    this.ds.makeHttpReq().subscribe((result)=>{console.log(result);
      this.receivedData=result;
    });
    
 
  }

}
