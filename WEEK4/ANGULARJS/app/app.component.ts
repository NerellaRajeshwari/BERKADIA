import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  public itemslist : any =[
    {item : '1',price : 10},
    {item : '2',price : 20},
    {item: '3', price : 30},
    {item : '4',price : 40},
    {item : '5',price : 50},
    {item : '6',price : 60},
    {item : '7',price : 70},
    {item : '8',price : 80},
    {item : '9',price : 90},
    {item:'10',price : 100},
    
  ];
  public list:any={
    it:0,tc:0
  };
  public gettotalitems(data:any) :void{
      this.list.it=this.list.it+1;
      this.list.tc=this.list.tc+data.tc;
  }
}
