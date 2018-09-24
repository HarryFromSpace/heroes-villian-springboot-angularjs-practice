import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Villian } from '../models/Villian';
import { VillanService } from '../services/villian.service';
import { error } from 'protractor';

@Component({
  selector: 'app-new-villian',
  templateUrl: './new-villian.component.html',
  styleUrls: ['./new-villian.component.css']
})
export class NewVillianComponent implements OnInit {
  @Output()
  myEmitter2 = new EventEmitter();
  villian: Villian;
  alertData: any;
  alertVisibility: boolean = false;
  constructor(private villianService: VillanService) { }

  ngOnInit() {
  }

  addVillian(formObject: NgForm) {
    console.log(formObject.value);
    this.villianService.addVillian(formObject.value).subscribe(data => {
      this.myEmitter2.emit("Villian");
      formObject.reset();
      this.alertData = { flashMessage: data.json().name + " Added Successfully", flashClass: "alert-success" };
      this.alertVisibility = true;
    }, error => {
      this.alertData = { flashMessage: error.json().message, flashClass: "alert-danger" };
      this.alertVisibility = true;
    });
  }

}
