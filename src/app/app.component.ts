import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'play-bs3';
  post = {
    title: 'burak',
    isSelected: true
  };

  onFavoriteChange(eventArg: FavoriteChangedEventArgs) {
    console.log('favorite changed ' , eventArg);
  }
}
