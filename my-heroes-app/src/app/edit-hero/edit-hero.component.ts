import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../models/hero';
import { NgForm, NgModel } from '@angular/forms';
import { HeroService } from '../services/hero.service';


@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {
  @Input()
  datum: Hero;
  hero: Hero;
  @Output()
  myEmitter2 = new EventEmitter<Object>();
  alertVisibility: boolean = false;
  alertData: any;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.hero = this.datum;
  }

  editHero(hero: NgForm) {
    hero.value.id = this.datum.id;
    this.heroService.updateHero(hero.value).subscribe(data => {
      this.myEmitter2.emit("UpdateHero");
      this.alertData = { flashMessage: "Hero with ID: " + data.json().id + " Updated Successfully", flashClass: "alert-success" };
      this.alertVisibility = true;
    },
      error => {
        this.alertData = { flashMessage: error.json().message, flashClass: "alert-danger" };
        this.alertVisibility = true;
      });
  }
}
