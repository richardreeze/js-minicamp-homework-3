// Do not change any of the function names

function makeCat(name, age) {
  var cat = {
    name: name,
    age: age,
    meow: function(){
      return 'Meow!';
    }
  };
  return cat;
}

function addProperty(object, property) {
  object[property] = null;
  return object;
}

function invokeMethod(object, method) {
  object[method]();
}

function multiplyMysteryNumberByFive(mysteryNumberObject) {
  mysteryNumberObject.mysteryNumber = mysteryNumberObject.mysteryNumber * 5;
  return mysteryNumberObject.mysteryNumber; 
}

function deleteProperty(object, property) {
  delete object[property];
  return object;
}

function newUser(name, email, password) {
  var object = {
    name: name,
    email: email,
    password: password
  };
  return object;
}

function hasEmail(user) {
  if(user.email){
    return true;
  } else {
    return false;
  }
}

function hasProperty(object, property) {
  if(object[property]){
    return true;
  } else {
    return false;
  }
}

function verifyPassword(user, password) {
  if(password === user['password']){
    return true;
  } else {
    return false;
  }
}

function updatePassword(user, newPassword) {
  user['password'] = newPassword;
  return user;
}

function addFriend(user, newFriend) {
  user['friends'].push(newFriend);
  return user; 
}

function setUsersToPremium(users) {
  for(var i = 0; i < users.length; i++){
    users[i].isPremium = true;
  }
  return users;
}

function sumUserPostLikes(user) {
  var sum = 0;
  for(var i = 0; i < user['posts'].length; i++){
    sum += user['posts'][i]['likes'];
  }
  return sum;
}

function addCalculateDiscountPriceMethod(storeItem) {
  storeItem.calculateDiscountPrice = function(){
    var discount = this.price * this.discountPercentage;
    var discountPrice = this.price - discount;
    return discountPrice;
  };
  return storeItem;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  makeCat: makeCat,
  addProperty: addProperty,
  invokeMethod: invokeMethod,
  multiplyMysteryNumberByFive: multiplyMysteryNumberByFive,
  deleteProperty: deleteProperty,
  newUser: newUser,
  hasEmail: hasEmail,
  hasProperty: hasProperty,
  verifyPassword: verifyPassword,
  updatePassword: updatePassword,
  addFriend: addFriend,
  setUsersToPremium: setUsersToPremium,
  sumUserPostLikes: sumUserPostLikes,
  addCalculateDiscountPriceMethod: addCalculateDiscountPriceMethod
};
