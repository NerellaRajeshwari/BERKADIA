import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-viewitem',
  templateUrl: './viewitem.component.html',
  styleUrls: ['./viewitem.component.css']
})
export class ViewitemComponent implements OnInit {

  constructor() { }

  @Input('name') itemname:String;
  @Input('price') itemprice:number;
  @Output() totalitems: EventEmitter<any>=new EventEmitter();
  
  public sendtotalproducts(){
    let total:any={
      tc:this.itemprice
    };
    this.totalitems.emit(total);
  }
  ngOnInit() {
  }

}
