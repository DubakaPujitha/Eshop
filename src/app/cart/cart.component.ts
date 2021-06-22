import { BuiltinTypeName } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
quantity:number=1;
inc(){
  this.quantity+=1;
}
dec(){
  this.quantity-=1;

}
quantity1:number=1;
inc1(){
  this.quantity1+=1;
}
dec1(){
  this.quantity1-=1;

}
quantity2:number=3;
inc2(){
  this.quantity2+=3;
}
dec2(){
  this.quantity2-=3;

}
del1(){
  document.getElementById('row1')?.remove();
  this.quantity=0;
}
del2(){
  document.getElementById('row2')?.remove();
  this.quantity1=0;
}
del3(){
  document.getElementById('row3')?.remove();
  this.quantity2=0;
}
}