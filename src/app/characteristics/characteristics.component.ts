import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.css']
})
export class CharacteristicsComponent {
  public newEntry: string = '';

  @Output() public addCharacteristic: EventEmitter<string> = new EventEmitter<string>();

  public onAddCharacteristic() {
    if (this.newEntry.trim() !== '') {
      this.addCharacteristic.emit(this.newEntry);
      this.newEntry = '';
    }
  }
}
