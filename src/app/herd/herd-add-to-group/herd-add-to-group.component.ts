import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  templateUrl: './herd-add-to-group.component.html',
  styleUrls: ['./herd-add-to-group.component.css']
})
export class HerdAddToGroupComponent {

  constructor(
    private bottomSheetRef: MatBottomSheetRef<HerdAddToGroupComponent>
  ) { }

  public addToGroup(result) {
    this.bottomSheetRef.dismiss(result);
  }

}
