//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Anonymous Function <<<<<<<<<<<<<<<<<<<<<<<

// 1.Print odd numbers in an array
     let oddnum=function(array){
        for(var i = 0 ; i< array.length ; i++){
           if(array[i]%2!=0){
              console.log(array[i]);
            } 
         }
      }
      oddnum([0,1,2,3,4,5,6,7,8,9]);
//................................................................
// 2.Convert all the strings to title caps in a string array
          let  titlecaps = function (str) {
            str = str.toLowerCase().split(' ');
            for (var i = 0; i < str.length; i++) {
               str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
             } 
             return str.join(' ');
          }
          console.log(titlecaps("Convert all the strings to title caps"));                  
///................................................................
// 3.Sum of all numbers in an array
     let sumofarr= function(array){
          var sum = 0;
          for(var i = 0 ; i< array.length ; i++){
             sum = sum + array[i];
           }
           console.log(sum);
      }
    sumofarr([1,2,3,4,5,6,7,8,9])
//................................................................
// 4.Return all the prime numbers in an array
      let primenum =function(numArray){
      numArray = numArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
             if (number % i === 0) return false;
            }
             return true;
        });
        console.log(numArray);
    }
    primenum([1,2,3,4,5,6,7,8,9])
//................................................................
// 5.Return all the palindromes in an array
     let palindromes= function (arr, n){
         for (let i = 0; i < n; i++){
           let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
         }
          console.log(true);
      };
     palindromes (["hello", "noon"]) 
//................................................................ 
// 6.Return median of two sorted arrays of the same size.
     let arr =function getMedian(ar1, ar2,n)
{
    var i = 0; 
    var j = 0;
    var count;
    var m1 = -1, m2 = -1;
    for (count = 0; count <= n; count++)
    {
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        if (ar1[i] <= ar2[j])
        {
            m1 = m2;
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2;
            m2 = ar2[j];
            j++;
        }
    }
    return (m1 + m2)/2;
}
console.log(arr([1, 12, 15, 26, 38],[2, 13, 17, 30, 45],[5]))
//................................................................
// 7.Remove duplicates from an array
    let duplicate= function(array){
      let dup = [...new Set(array)];
      console.log(dup);
    }
   duplicate('Remove duplicates from an array')
//................................................................
// 8.Rotate an array by k times
let rotateArray = function(nums, k) {

  for (let i = 0; i < k; i++) {
      nums.unshift(nums.pop());
  }

  console.log(nums);
}
rotateArray([1,2,3,4] , 2)



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> IIFE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// 1.Print odd numbers in an array
       (function(array){
             for(var i = 0 ; i< array.length ; i++){
               if(array[i]%2!=0){
                  console.log(array[i])
                } 
              }
        })([1,2,3,4,5,6,7,8,9])
//................................................................
// 2.Convert all the strings to title caps in a string array
      (function (str) {
           str = str.toLowerCase().split(' ');
            for (var i = 0; i < str.length; i++) {
                str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
             } 
             console.log(str.join(' '));
       }) ("Convert all the strings to title caps");
//................................................................
// 3.Sum of all numbers in an array
      (function(array){
           var sum = 0;
           for(var i = 0 ; i< array.length ; i++){
              sum = sum + array[i];
             }
             console.log(sum);
       })([1,2,3,4,5,6,7,8,9])
//................................................................
// 4.Return all the prime numbers in an array
          ( function(numArray){
              numArray = numArray.filter((number) => {
                for (var i = 2; i <= Math.sqrt(number); i++) {
                 if (number % i === 0) return false;
                 }
                return true;
              });
              console.log(numArray)
          })([1,2,3,4,5,6,7,8,9]) 
//................................................................
// 5.Return all the palindromes in an array
     (function(arr, n){
       for (let i = 0; i < n; i++){
          let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        console.log(true);
     })(["hello", "noon"])
//................................................................ 
// 6.Return median of two sorted arrays of the same size.
      (function(ar1, ar2,n){
    var i = 0; 
    var j = 0;
    var count;
    var m1 = -1, m2 = -1;
    for (count = 0; count <= n; count++)
    {
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        if (ar1[i] <= ar2[j])
        {
            m1 = m2;
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2;
            m2 = ar2[j];
            j++;
        }
    }
    console.log((m1 + m2)/2);
})([1, 12, 15, 26, 38],[2, 13, 17, 30, 45],[5])
//................................................................
// 7.Remove duplicates from an array
     (function(array){
        let dup = [...new Set(array)];
        console.log(dup);
     })('Remove duplicates from an array')
//................................................................
// 8.Rotate an array by k times
 (function(nums, k) {

  for (let i = 0; i < k; i++) {
      nums.unshift(nums.pop());
  }

  console.log(nums);
})([1,2,3,4] , 2)