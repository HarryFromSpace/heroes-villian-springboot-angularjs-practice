import { Component } from "@angular/core";
import { Villian } from "../models/Villian";
import { VillanService } from "../services/villian.service";

@Component({
    templateUrl: './villian.component.html'
})
export class VillianComponent {
    villians: Villian[];
    modalGenerator: Boolean = false;
    modalCategory: String;
    alertData: any;
    alertVisibility: boolean = false;

    constructor(private villianService: VillanService) { }

    ngOnInit() {
        this.populateLatestVillian();
    }

    populateLatestVillian() {
        this.villianService.getAllVillians().subscribe(data => {
            this.villians = data.json();
        });
    }

    modalOpen(targetId) {
        this.modalGenerator = true;
        this.modalCategory = targetId;
    }
    populateData(event) {
        if (event === false)
            this.closeModal();
        else if (event === "Villian")
            this.populateLatestVillian();
        else if (event === "UpdateVillian")
            this.populateLatestVillian();
    }
    closeModal() {
        this.modalGenerator = false;
    }


    deleteVillian(villian: Villian) {
        this.villianService.deleteVillian(villian).subscribe(data => {
            this.populateLatestVillian();
            this.alertData = { flashMessage: data.text(), flashClass: "alert-success" };
            this.alertVisibility = true;
        },
            error => {
                this.alertData = { flashMessage: error.json().message, flashClass: "alert-danger" };
                this.alertVisibility = true;
            });
    }

    transfer(villian: Villian) {
        this.villianService.transferVillianToHero(villian).subscribe(data => {
            this.populateLatestVillian();
            this.alertData = { flashMessage: data.text(), flashClass: "alert-success" };
            this.alertVisibility = true;
        },
            error => {
                this.alertData = { flashMessage: error.json().message, flashClass: "alert-danger" };
                this.alertVisibility = true;
            })
    }


}