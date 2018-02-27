(function() {
  console.log('----------------')

  let list = [4, 5, 6];
  
  for (let i in list) {
     console.log(i); // "0", "1", "2",
  }
  
  for (let i of list) {
     console.log(i); // "4", "5", "6"
  }

  // Built-in objects like Map and Set implement Symbol.iterator property allowing access to stored values.
  let pets = new Set(["Cat", "Dog", "Hamster"]);
  pets["species"] = "mammals";
  
  for (let pet in pets) {
     console.log(pet); // "species"
  }
  
  for (let pet of pets) {
      console.log(pet); // "Cat", "Dog", "Hamster"
  }
  let numbers = [1, 2, 3];
  for (let num of numbers) {
      console.log(num);
  }

})();