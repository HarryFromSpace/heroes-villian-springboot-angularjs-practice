import { Component, OnInit, EventEmitter, Output, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { Hero } from '../models/hero';
import { equalSegments } from '@angular/router/src/url_tree';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit, OnChanges {
  @Input()
  clickedOption: any;
  @Output()
  myEmitter = new EventEmitter<Object>();
  modalHeader: String;

  constructor() { }

  ngOnInit() {
    if (typeof this.clickedOption === 'object')
      this.modalHeader = this.clickedOption.operation;
    else
      this.modalHeader = this.clickedOption;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.modalHeader = changes.clickedOption.currentValue;
  }

  commitResultToParent(event) {
    this.myEmitter.emit(event);
  }
  removeModal() {
    this.myEmitter.emit(false);
  }
  myFunction(operation) {
    if ((typeof this.clickedOption === 'object') && (operation === this.clickedOption.operation))
      return true;

    return false;
  }
}
