
function Register(animalId, date, userId, description){
  this.animalId = animalId;
  this.date = date;
  this.userId = userId;
  this.description = description;
//Objects
function Animal(animalName, animalAge, animalSpecies, animalColor, animalDescription, animalId){
  this.animalName = animalName;
  this.animalAge = animalAge;
  this.animalSpecies = animalSpecies;
  this.animalColor = animalColor;
  this.animalDescription = animalDescription ;
  this.animalId = animalId;
}
function User(userFirstName, userLastName, userEmail, userPhone, userId ){
  this.userFirstName = userFirstName;
  this.userLastName = userLastName;
  this.userEmail = userEmail;
  this.userPhone = userPhone;
  this.userId = userId;
}
//Prototype
User.prototype.fullName = function() {
  return this.userFirstName + " " + this.userLastName;

}
