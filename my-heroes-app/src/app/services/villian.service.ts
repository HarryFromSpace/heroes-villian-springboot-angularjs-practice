import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Villian } from "../models/Villian";
import { Observable } from "rxjs/Observable";

@Injectable()
export class VillanService {

    constructor(private http: Http) { }

    addVillian(formObject: Villian) {
        return this.http.post("http://localhost:8090/api/villians/createVillian", formObject);
    }
    getAllVillians(): Observable<any> {
        return this.http.get("http://localhost:8090/api/villians/getAllVillians");
    }
    deleteVillian(villian: Villian) {
        return this.http.get("http://localhost:8090/api/villians/deleteVillian/" + villian.id);
    }
    updateVillian(villian: Villian) {
        return this.http.post("http://localhost:8090/api/villians/updateVillian", villian);
    }
    transferVillianToHero(villian:Villian){
        return this.http.post("http://localhost:8090/api/villians/transferVillian", villian);
    }

}