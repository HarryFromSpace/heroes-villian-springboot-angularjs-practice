import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-flash-message',
  templateUrl: './flash-message.component.html',
  styleUrls: ['./flash-message.component.css']
})
export class FlashMessageComponent implements OnInit, OnDestroy, OnChanges {


  @Input()
  flashObject: any;
  myVar: boolean;// = true;

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    this.myVar = true;
    setTimeout(() => {
      this.myVar = false;
    }, 1500);
  }

  ngOnDestroy() { }

}
