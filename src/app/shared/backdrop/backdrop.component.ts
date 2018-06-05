import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.css']
})
export class BackdropComponent {

  @Input() show: boolean;
  @Output() closeEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  public close() {
    this.closeEvent.emit(true);
  }

}
