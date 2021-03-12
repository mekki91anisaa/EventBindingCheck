import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-biding',
  templateUrl: './event-biding.component.html',
  styleUrls: ['./event-biding.component.css']
})
export class EventBidingComponent implements OnInit {
  colors= 'black';
  defaultColors = 'black'

  constructor() { }

  ngOnInit() {
  }
 
  onBlurEvent(newColor){
     console.log(newColor);
     this.colors=newColor;
  }

  defaultColor(){
    
    this.colors=this.defaultColors;
  }

}
