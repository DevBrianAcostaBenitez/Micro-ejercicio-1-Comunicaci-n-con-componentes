import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {
  @Input() public dataList: any[] = [];

  public addCharacteristic(newEntry: string, index: number) {
    if (!this.dataList[index].characteristics) {
      this.dataList[index].characteristics = [];
    }
    this.dataList[index].characteristics.push(newEntry);
  }
}