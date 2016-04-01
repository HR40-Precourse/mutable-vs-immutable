var str = "Hello";
var str2 = str;
//What is str2?
//console.log(str2);

str.concat(" World");
// What is str?
//console.log(str);
// What is str2
//console.log(str2);

str = str.concat(" World");
//What is str2?
//console.log(str2);

var arr = [1,2,3,4,5];
var anotherArray = arr;
arr.push(6);
//What is arr?
//console.log(arr)
//What is anotherArray?
//console.log(anotherArray)

arr = [1,2,3,4,5,6,7];
// What is anotherArray?
//console.log(anotherArray)

// Why is the function below considered impure?
var addOne = function(numOrArray) {
  if(Array.isArray(numOrArray)) {
    numOrArray.push(1);
    return numOrArray;
  } else {
    numOrArray++;
    return numOrArray;
  }
};

var num = 5;
var array = [1,2,3];
addOne(num);
addOne(array);

//console.log(num);
//console.log(array);

//How do we make changes to an array without mutating it? Can you refactor addOne to make it a pure function?