//business logic for AllPlaces database

function AllPlaces(){
  this.places=[];
  this.currentId=0;
}

AllPlaces.prototype.addPlace = function (place){
  place.id=this.assignId();
  this.places.push(place);
}

AllPlaces.prototype.assignId = function(){
  this.currentId++;
  return this.currentId;
}

AllPlaces.prototype.findPlace=function(id){
  for(var i=0;i<this.places.length; i++){
    if(this.places[i].id == id){
      return this.places[i];
    }
  }
  return false;
}

//business logic for individual place

function Place(placeName, placeLocation, placeYear){
  this.placeName = placeName;
  this.placeLocation = placeLocation;
  this.placeYear = placeYear;
}

Place.prototype.fullInfo = function(){
  return this.placeName + "is located in " + this.placeLocation + ". I was there in " + this.placeYear;
}

var allPlaces = new AllPlaces();
var place  = new Place("Buenos Aires", "Argentina", "2019");
var place2 = new Place("Montevideo", "Uruguay", "2019");
var place3 = new Place("New York", "New York", "2018");

allPlaces.addPlace(place);
allPlaces.addPlace(place2);
allPlaces.addPlace(place3);