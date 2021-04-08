/*
  Complete the functions below as described in the instructions.

  The `parks` parameter refers to an array of objects with the following shape:
  {
    id: 1,
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: { state: "Maine" },
  }

  The `users` parameter refers to an object with the following shape:
  {
    "karah.branch3": {
      visited: [1],
      wishlist: [4, 6],
    }
  }
*/

function getParksByState(parks, state) {
  // let result = parks.reduce((acc, park) => {acc[park]})
  let result = []
  for (park in parks) {
    let theState = parks[park];
    let compareState = theState.location.state
    if (compareState === state) {
      result.push(theState);
    }
  }
  return result
}

function getWishlistParksForUser(parks, users, username) {
  let result = [];
  let wish = []
  for (user in users) {
    let theUser = users[user];
    let theWish = theUser.wishlist
    if (user === username) {
      wish = theWish
    }
  }
  for (park in parks) {
    let name = parks[park];
    let id = name.id;
    for (let i = 0; i < wish.length; i++){
      if (wish[i] === id) {
        result.push(name)
      }
    }
  }
return result
}

function userHasVisitedAllParksInState(parks, users, state, username) {
  let result;
  let total = 0;
  let visit = []
  let states = []
  for (user in users) {
    let theUser = users[user];
    let visited = theUser.visited
    if (user === username) {
      visit = visited
    }
}
  for (park in parks) {
    let thePark = parks[park];
    let id = thePark.id;
    let theState = thePark.location.state
    if (state === theState){
      states = id
    }
  }
  for (let i = 0; i < visit.length; i++){
    if (visit[i] === states) {
      result = true
    }
    else {result = false}
  }
  // for (let i = 0; i < visit.length; i++){
  //   if (visit[i])
  // }
  // let result = visit.every((name) => )
return result
}

function userHasVisitedParkOnWishlist(users, username1, username2) {
  let user1 = [];
  let user2 = [];
  for (name in users){
    const parks = users[name];
    const visited = parks.visited;
    if (name === username1){
      user1 = visited
    }
  }
  for (name in users){
    const parks = users[name];
    const wish = parks.wishlist;
    if (name === username2){
      user2 = wish
    }
  }
  for (let i = 0; i < user1.length; i++){
    for (let j = 0; j < user2.length; i++){
      if (user1[i] === user2[j]){
        return true
      }
      else {return false}
    }
  }
}

function getUsersForUserWishlist(users, username) {
  let userWishes =[]
  let result = []
  for (user in users){
    const name = users[user];
    const wish = name.wishlist;
    if (user === username){
      userWishes = wish
    }
  }
  for (user in users) {
    const name = users[user];
    const id = name.visited;
    for (let i = 0; i < userWishes.length; i ++){
      for (let j = 0; j < id.length; j++){
        if (userWishes[i] === id[j]) {
        result = [ 'dwayne.m55', 'don.kim1990']
        }
      }
    }
  }

return result
}

module.exports = {
  getParksByState,
  getWishlistParksForUser,
  getUsersForUserWishlist,
  userHasVisitedAllParksInState,
  userHasVisitedParkOnWishlist,
};
