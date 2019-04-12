export class bookmarksService{

  // Variables
  liste_url=[];
  nbBookmarks=0;
  double_url=0;

  // Function to add an url to bookmarks
  add(new_url){

  	// Verifie that the url is not already in the list
  	for(URL of this.liste_url){
  		if(URL == new_url){
  			this.double_url=1;
  		}
  	}

  	if(this.double_url == 0){
 	this.liste_url.push(new_url);
	this.nbBookmarks= this.nbBookmarks +1; 	
  	}

  	this.double_url=0;

}

}