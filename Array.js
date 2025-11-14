// Task:
// Tak 1.Group students based on Marks
// a.Input: [40, 85, 90, 33, 72]
// b.Output:    i.Pass: >= 40
//             ii.Fail < 40.

// Task 2.(Count how many numbers in an array are greater than 50.)

// Task 3.Find all Prime numbers in an array

// Task 4.Swap the First and last element of an array

// Task 5.Find the second highest number in an array

// Task 6.Move all zeros to the end of the array
// a.Input [1,0,5,0,9], 
// Output [1,5,9,0,0]



//Task 1:
// 1.Group students based on Marks
// a.Input: [40, 85, 90, 33, 72]

// b.Output  i.Pass: >= 40
//          ii.Fail < 40.



let marks = [40, 85, 90, 33, 72];

let pass = marks.filter(m => m >= 40);
let Fail = marks.filter(m => m < 40);

console.log("pass:",pass);
console.log("Fail:",Fail);

  
//Task 4
// Swap the First and last element of an array



    let swap = [35,42,54,65,73,81];

    let prime = swap[0];                
    swap[0] = swap [swap.length - 1];   
    swap[swap.length-1] = prime;            

    console.log(swap);                


// Task 2
// Count how many numbers in an array are greater than 50.

let numberss = [40, 85, 90, 33, 72,34,55,66,78,21,66];

let above50 = numberss.filter(k => k >= 50);

console.log("above50:",above50);
    