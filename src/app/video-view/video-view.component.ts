import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { bookmarksService } from '../services/bookmarks.service';
import { historyService } from '../services/history.service';

@Component({
  selector: 'videoView',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.scss']
})

export class VideoViewComponent implements OnInit {

  // Variables
  @Input() url_video; // Url from the input of the SearchBar
  url_verifie: SafeResourceUrl; 
  onBookmarks= false; // Bookmarks component is not shown until the user ask for it
  url_replay; // Url selected in the history


  constructor(private sanitizer: DomSanitizer, public bookmarks_service: bookmarksService, public history_service: historyService) {}

  ngOnInit() {}


  // Function which verifie the url before displaying the video
  verifieUrl(){

  // Verifie if the user has selected an url in the history
  this.url_replay =this.history_service.getReplay();
  if (this.url_replay != 'no'){
    this.url_video=this.url_replay;
  }

  return this.url_verifie=this.sanitizer.bypassSecurityTrustResourceUrl(this.url_video);
  }

  // Function used to add bookmarks
  onAddBM(){
    this.bookmarks_service.add(this.url_video);
  }

  // Function used to show Bookmarks
  onBM(){
    this.onBookmarks=true;
  }

}
