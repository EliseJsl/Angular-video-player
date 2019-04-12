import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { historyService } from '../services/history.service';

@Component({
  selector: 'searchBar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit {

 // Variables
 videoOn= false; // False at the beginning to hide videoView if there is no video to display
 urlvideo; // Store the url of the video


constructor(public history_service: historyService) { }

ngOnInit() {}

// Function which run when the user click the button
onSubmit(form: NgForm){

  this.videoOn=true; // Mean that we can show the VideoView Component
	this.urlvideo= form.value['urlvideo']; // Get the value in the input of the searchBar

  // Transform the url of the video so that we can correctly display it
	this.urlvideo= this.urlvideo.split('=');
  this.urlvideo= this.urlvideo[1];
  this.urlvideo= this.urlvideo.split('&');
  this.urlvideo= this.urlvideo[0];
  this.urlvideo= 'https://www.youtube.com/embed/' + this.urlvideo;

  this.history_service.add(this.urlvideo); //Add the video to the history
}

}
