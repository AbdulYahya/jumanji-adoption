//Objects
function AdoptionRegister(adoptionRegisterDate, AdoptionRegisterDescription, animalId, userId){
  this.adoptionRegisterDate = adoptionRegisterDate;
  this.AdoptionRegisterDescription = AdoptionRegisterDescription;
  this.animalId = animalId;
  this.userId = userId;
}
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
