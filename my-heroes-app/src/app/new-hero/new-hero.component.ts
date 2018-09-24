import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroService } from '../services/hero.service';
import { error } from 'protractor';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.css']
})
export class NewHeroComponent implements OnInit {

  @Output()
  myEmitter2 = new EventEmitter<Object>();
  alertData: any;
  alertVisibility: boolean = false;



  constructor(private heroService: HeroService) { }

  ngOnInit() { }

  addHero(HeroTemplate: NgForm) {
    this.heroService.createHero(HeroTemplate.value).subscribe(data => {
      this.myEmitter2.emit("Hero");
      HeroTemplate.reset();
      this.alertData = { flashMessage: data.json().name + " Added Successfully", flashClass: "alert-success" };
      this.alertVisibility = true;
    }, error => {
      this.alertData = { flashMessage: error.json().message, flashClass: "alert-danger" };
      this.alertVisibility = true;
    });
  }

  closeButton() {
    this.myEmitter2.emit(false);
  }

}
