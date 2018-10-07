import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCaseComponent } from './title-case/title-case.component';
import { FormsModule} from '@angular/forms';
import { TitleCasePrepPipe } from './title-case-prep.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    TitleCaseComponent,
    TitleCasePrepPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
