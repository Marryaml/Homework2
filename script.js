// // Exercise 1

function sum(...numbers){
    let newSum = 0


    for (let item of numbers){
        if (item > 0) {
            newSum += item;
        }
    }
console.log(newSum);
}

sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);


// Exercise 2

let List = [10, 50, 6, 7, 8, 11, 6, 3, 9];

 function sum1(...numbers){
     let newSum = 0;
     
     for(let item of numbers){
         newSum += item;
     }
    console.log(newSum);
 }

 sum1(List)

// Exercise 3

let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }
   function something ( object){
       if(object.isloggedin == true) {
           return object.firstname + '  ' + object.lastname;
       } 
       return false;

   }
   let result = something(user);
   console.log (result);


// Exercise 4

function maxValue(nums) {
    let max = 0;

    for (let i = 0; i < nums.length; i++) {
        const x = nums[i];
        
        if (x > max) {
            max =  x;
        }
    return max;


    }

}

console.log(maxValue([5, 77, 57, 227, 45, 67]));