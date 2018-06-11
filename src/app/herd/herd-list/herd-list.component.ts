import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { MatSelectionList } from '@angular/material/list';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { HerdService } from '../herd.service';
import { HerdAddAnimalComponent } from '../herd-add-animal/herd-add-animal.component';
import { HerdEditAnimalComponent } from '../herd-edit-animal/herd-edit-animal.component';
import { HerdAddToGroupComponent } from '../herd-add-to-group/herd-add-to-group.component';
import { HerdCreateGroupComponent } from '../herd-create-group/herd-create-group.component';
import { HerdChooseGroupComponent } from '../herd-choose-group/herd-choose-group.component';

@Component({
  templateUrl: './herd-list.component.html',
  styleUrls: ['./herd-list.component.css']
})
export class HerdListComponent implements OnInit {

  @ViewChild('animalList') animalList: MatSelectionList;

  public filteredList = [];
  public selectedNo: number;
  private selectAll$;
  private deselectAll$;
  private searchInHerd$;
  private cachedUrl: string;
  private currentUrl: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public herdService: HerdService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private bottomSheet: MatBottomSheet
  ) {
    this.currentUrl = this.router.url;
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.cachedUrl = this.currentUrl;
        this.currentUrl = event.url;
      }
    });
  }

  ngOnInit() {
    this.selectedNo = 0;
    this.route.params.subscribe(params => {
      this.herdService.getAnimals(params['tab']).then(data => {
        this.filteredList = data.docs;
      });
      if (this.selectedNo > 0) {
        setTimeout(() => {
          this.deselectAll();
        }, 0);
      }
    });
    this.selectAll$ = this.herdService.selectAll$.subscribe(() => this.selectAll());
    this.deselectAll$ = this.herdService.deselectAll$.subscribe(() => this.deselectAll());
    this.searchInHerd$ = this.herdService.searchInHerd$.subscribe((value) => this.searchInList(value));
  }

  public refreshList() {
    let activeTab = this.route.snapshot.params.tab;
    this.herdService.getAnimals(activeTab).then(data => {this.filteredList = data.docs; });
  }

  public selectionChange($event) {
    if ($event) {
      if ($event.option.selected) {
        this.herdService.currentSelection.push($event.option.value);
      } else if (!$event.option.selected) {
        let index = this.herdService.currentSelection.indexOf($event.option.value);
        this.herdService.currentSelection.splice(index, 1);
      }
    }
    this.setSelectedNo();
  }

  public selectAll() {
    this.animalList.selectAll();
    let list = [];
    for (let option of this.animalList.selectedOptions.selected) {
      list.push(option.value);
    }
    for (let item of list) {
      if (this.herdService.currentSelection.indexOf(item) === -1) {
        this.herdService.currentSelection.push(item);
      }
    }
    this.setSelectedNo();
  }

  public deselectAll() {
    this.animalList.deselectAll();
    for (let item of this.filteredList) {
      let index = this.herdService.currentSelection.indexOf(item['tag']);
      if (index > -1) {
        this.herdService.currentSelection.splice(index, 1);
      }
    }
    this.setSelectedNo();
  }

  private setSelectedNo() {
    this.selectedNo = this.herdService.currentSelection.length;
    this.herdService.setSelectedNo();
  }

  private searchInList(value) {
    let activeTab = this.route.snapshot.params.tab;
    this.herdService.getAnimals(activeTab).then(data => {
      this.filteredList = data.docs.filter(
        item =>
          item.tag.toLowerCase().indexOf(value) > -1 ||
          item.purpose.toLowerCase().indexOf(value) > -1 ||
          item.category.toLowerCase().indexOf(value) > -1 ||
          item.breed.toLowerCase().indexOf(value) > -1 ||
          item.brand.toLowerCase().indexOf(value) > -1
      );
    });
  }

  public showAdd() {
    let dialog = this.dialog.open(HerdAddAnimalComponent, {
      width: '100%',
      height: '100%',
      maxWidth: '100%',
      panelClass: 'fa-fullscreen-dialog'
    });

    dialog.afterClosed().subscribe(result => {
      if (result) {
        if (result.success) {
          this.refreshList();
          this.showNotification(result.tag + ' successfully added to herd.');
        }
      }
    });
  }

  public showEdit() {
    let animal = {};
    if (this.herdService.currentSelection.length === 1) {
      animal['tag'] = this.herdService.currentSelection[0];
    }
    this.deselectAll();
    let dialog = this.dialog.open(HerdEditAnimalComponent, {
      width: '100%',
      height: '100%',
      maxWidth: '100%',
      panelClass: 'fa-fullscreen-dialog',
      autoFocus: false,
      data: animal
    });

    dialog.afterClosed().subscribe(result => {
      if (result) {
        if (result.success) {
          this.refreshList();
          if (result.deleted) {
            this.showNotification(result.tag + ' successfully removed from herd.');
          } else {
            this.showNotification('Changes for ' + result.tag + ' saved.');
          }
        }
      }
    });
  }

  private showNotification(message) {
    this.snackBar.open(message, '', {
      duration: 3000,
    });
  }

  public openEditDialog() {
    setTimeout(() => {
      this.showEdit();
    }, 200);
  }

  public addToGroup() {
    setTimeout(() => {
      let bottomSheet = this.bottomSheet.open(HerdAddToGroupComponent);
      bottomSheet.afterDismissed().subscribe(result => {
        if (result === 'existing') {
          let dialog = this.dialog.open(HerdChooseGroupComponent);
          dialog.afterClosed().subscribe(res => {
            if (res) {
              if (res.success) {
                this.showNotification('Successfully added to "' + res.name + '".');
              }
            }
          });
        } else if (result === 'new') {
          let dialog = this.dialog.open(HerdCreateGroupComponent, {
            width: '100%',
            height: '100%',
            maxWidth: '100%',
            panelClass: 'fa-fullscreen-dialog',
            data: this.herdService.currentSelection
          });

          dialog.afterClosed().subscribe(res => {
            if (res) {
              if (res.success) {
                this.refreshList();
                this.showNotification('Group "' + res.name + '" created.');
              }
            }
          });
        }
      });
    }, 200);
  }

}
