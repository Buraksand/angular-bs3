import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

  @Input('is-favorite') isSelected: boolean;
  // tslint:disable-next-line:no-output-rename
  @Output('change') click = new EventEmitter();

  onClick() {
    this.isSelected = !this.isSelected;
    console.log('clicked');
    this.click.emit({ newValue: this.isSelected });
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}

