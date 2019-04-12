import { Component, OnInit } from '@angular/core';
import { bookmarksService } from '../services/bookmarks.service';

@Component({
  selector: 'bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})

export class BookmarksComponent implements OnInit {

  constructor(public bookmarks_service: bookmarksService) { }

  ngOnInit() {}

}
