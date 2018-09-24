import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-view-hero',
  templateUrl: './view-hero.component.html',
  styleUrls: ['./view-hero.component.css']
})
export class ViewHeroComponent implements OnInit {
  @Input()
  datum: Hero;

  constructor() { }
  ngOnInit() { }

}
