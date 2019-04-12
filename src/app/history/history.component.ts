import { Component, Input, OnInit } from '@angular/core';
import { historyService } from '../services/history.service';

@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})

export class HistoryComponent implements OnInit {

  constructor(public history_service: historyService) { }

  ngOnInit() {  }  

  // Function which give the url selected by the user in the history to the service  
  onPlayAgain(url_history){
  this.history_service.replay= url_history;
  }

}