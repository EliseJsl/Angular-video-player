export class historyService{

	// Variables
	liste_url=[];
	replay= 'no';
	replay2;

// Function to add an url to the history
add(url){

	this.liste_url.push(url);

}

// Function which return the url selected in the history by the user
getReplay(){
    this.replay2=this.replay;
    this.replay='no';
	return this.replay2;
	
}

}