import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { MatTooltip } from '@angular/material';

@Component({
  selector: 'app-herd-fab',
  templateUrl: './herd-fab.component.html',
  styleUrls: ['./herd-fab.component.css']
})
export class HerdFabComponent implements OnInit {

  @Input() selectedNo: number;
  @Output() showAddEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() openEditDialogEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() addToGroupEvent: EventEmitter<void> = new EventEmitter<void>();
  @ViewChild('editTooltip') editTooltip: MatTooltip;
  @ViewChild('groupTooltip') groupTooltip: MatTooltip;
  @ViewChild('treatmentTooltip') treatmentTooltip: MatTooltip;

  public open: boolean;

  constructor() {  }

  ngOnInit() {

  }

  public clickFab() {
    if (this.selectedNo === 0) {
      this.showAddEvent.emit();
    } else if (!this.open) {
        setTimeout(() => {
          this.showTooltips();
        }, 0);
    } else {
      this.hideTooltips();
    }
  }

  public close($event) {
    this.open = $event ? !$event : $event;
  }

  public addTreatment(dialog?) {
    this.hideTooltips();
  }

  public openEditDialog(dialog?) {
    this.hideTooltips();
    this.openEditDialogEvent.emit();
  }

  public addToGroup() {
    this.hideTooltips();
    this.addToGroupEvent.emit();
  }

  private showTooltips() {
    if (this.editTooltip) { this.editTooltip.show(100); }
    if (this.groupTooltip) { this.groupTooltip.show(100); }
    if (this.treatmentTooltip) { this.treatmentTooltip.show(100); }
  }

  private hideTooltips() {
    if (this.editTooltip) { this.editTooltip.hide(); }
    if (this.groupTooltip) { this.groupTooltip.hide(); }
    if (this.treatmentTooltip) { this.treatmentTooltip.hide(); }
  }

}
