let List = [10, 50, 6, 7, 8, 11, 6, 3, 9];

 function sum1(...numbers){
     let newSum = 0;
     
     for(let item of numbers){
         newSum += item;
     }
    console.log(newSum);
 }

 sum1(List);