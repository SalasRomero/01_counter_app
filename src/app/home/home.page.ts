import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public n:number;
  public showNumber:string;

  constructor() {
    this.n = 0;
    this.showNumber = "00";
  }


  up():void{
    this.n = this.n + 1;
    this.formatShowHNumber();
  }

  down():void{
    this.n = this.n - 1;
    this.formatShowHNumber();

  }

  formatShowHNumber(){
    if(this.n < 10){
      this.showNumber = '0'+this.n;
    }else{
      this.showNumber = this.n.toString();
    }
  }

}
