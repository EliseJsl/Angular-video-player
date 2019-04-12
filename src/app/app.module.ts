import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { VideoViewComponent } from './video-view/video-view.component';
import { FormsModule } from '@angular/forms';
import { HistoryComponent } from './history/history.component';
import { historyService } from './services/history.service';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { bookmarksService } from './services/bookmarks.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    VideoViewComponent,
    HistoryComponent,
    BookmarksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    historyService,
    bookmarksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
