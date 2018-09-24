import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { Hero } from "../models/hero";
import { error } from "protractor";
import { Observable } from "rxjs/Observable";
//import { }
@Injectable()
export class HeroService {
    constructor(private http: Http) { }
    createHero(hero) {
        return this.http.post("http://localhost:8090/api/heroes/createHero", hero);
    }
    getAllHeroes(): Observable<any> {
        return this.http.get("http://localhost:8090/api/heroes/getAllHeroes");
    }
    deleteHero(hero: Hero) {
        return this.http.get("http://localhost:8090/api/heroes/deleteHero/" + hero.id);
    }
    updateHero(hero: Hero) {
        return this.http.post("http://localhost:8090/api/heroes/updateHero", hero);
    }
    transferHeroToVillian(hero: Hero){
        return this.http.post("http://localhost:8090/api/heroes/transferHero", hero);
    }
}