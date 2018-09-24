import { Component, OnInit, Input } from '@angular/core';
import { Villian } from '../models/Villian';

@Component({
  selector: 'app-view-villian',
  templateUrl: './view-villian.component.html',
  styleUrls: ['./view-villian.component.css']
})
export class ViewVillianComponent implements OnInit {
  @Input()
  datum: Villian;
  constructor() { }
  ngOnInit() { }

}
