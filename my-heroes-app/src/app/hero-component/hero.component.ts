import { Component, OnDestroy, OnInit } from "@angular/core";
import { HeroService } from "../services/hero.service";
import { Hero } from "../models/hero";

import { VillianComponent } from "../villian-component/villian.component";



@Component({
    moduleId: module.id.toString(),
    templateUrl: "./hero.component.html",
    styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
    heroes: Hero[];
    modalCategory: any;
    modalGenerator: Boolean = false;
    alertVisibility: any = false;
    alertData: any;

    constructor(private heroService: HeroService) {
    }

    ngOnInit() {
        this.populateLatestHeroes();
    }
    populateLatestHeroes() {
        this.heroService.getAllHeroes().subscribe(data => {
            this.heroes = data.json();
        });
    }

    modalOpen(targetId) {
        this.modalGenerator = true;
        this.modalCategory = targetId;
    }
    populateData(event) {
        if (event === false)
            this.closeModal();
        else if (event === "Hero")
            this.populateLatestHeroes();
        else if (event === "UpdateHero")
            this.populateLatestHeroes();
    }
    closeModal() {
        this.modalGenerator = false;
    }




    deleteHero(hero: Hero) {
        this.heroService.deleteHero(hero).subscribe(data => {
            this.populateLatestHeroes();
            this.alertData = { flashMessage: data.text(), flashClass: "alert-success" };
            this.alertVisibility = true;
        },
            error => {
                this.alertData = { flashMessage: error.json().message, flashClass: "alert-danger" };
                this.alertVisibility = true;
            });
    }

    transfer(hero: Hero) {
        this.heroService.transferHeroToVillian(hero).subscribe(data => {
            this.populateLatestHeroes();
            this.alertData = { flashMessage: data.text(), flashClass: "alert-success" };
            this.alertVisibility = true;
        },
            error => {
                this.alertData = { flashMessage: error.json().message, flashClass: "alert-danger" };
                this.alertVisibility = true;
            })
    }

}
