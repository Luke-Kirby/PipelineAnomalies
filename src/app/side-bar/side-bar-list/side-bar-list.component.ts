import { Component, OnInit } from '@angular/core';
import { SideBarItems } from 'src/app/sideBar';
import { sideBarNavList } from 'src/app/sideBar';

@Component({
  selector: 'app-side-bar-list',
  templateUrl: './side-bar-list.component.html',
  styleUrls: ['./side-bar-list.component.scss'],
})
export class SideBarListComponent implements OnInit {
  listItem = SideBarItems;
  selectedItem?: sideBarNavList;
  activeButton = 'unClickedButton';

  constructor() {}

  ngOnInit(): void {}

  onSelect(item: sideBarNavList): void {
    this.selectedItem = item;
    this.activeButton = 'clickedButton';
  }
}
