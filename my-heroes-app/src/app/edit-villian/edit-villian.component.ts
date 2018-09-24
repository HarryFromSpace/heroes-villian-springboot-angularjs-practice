import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Villian } from '../models/Villian';
import { VillanService } from '../services/villian.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-villian',
  templateUrl: './edit-villian.component.html',
  styleUrls: ['./edit-villian.component.css']
})
export class EditVillianComponent implements OnInit {
  @Input()
  datum: Villian;
  villian: Villian;
  @Output()
  myEmitter2 = new EventEmitter<Object>();
  alertVisibility: boolean = false;
  alertData: any;

  constructor(private villianService: VillanService) { }

  ngOnInit() {
    this.villian = this.datum;
  }

  editVillian(villian: NgForm) {
    villian.value.id = this.datum.id;
    this.villianService.updateVillian(villian.value).subscribe(data => {
      this.myEmitter2.emit("UpdateVillian");
      this.alertData = { flashMessage: "Villian with ID: " + data.json().id + " Updated Successfully", flashClass: "alert-success" };
      this.alertVisibility = true;
    },
      error => {
        this.alertData = { flashMessage: error.json().message, flashClass: "alert-danger" };
        this.alertVisibility = true;
      });
  }

}
