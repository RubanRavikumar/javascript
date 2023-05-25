..............................................................................
 1.Print odd numbers in an array
    let oddnum =(n)=>{
      for(let i=0;i<n.length;i++){
        if(n[i]%2 == 1){
        console.log(n[i]+' odd number');
        }
      }
   }
   oddnum(['0','1','2','3','4','5','6','7','8','9']);
...............................................................................
2.Convert all the strings to title caps in a string array
     let string = (str)=>{
       str = str.toLowerCase().split(' ');
       for(let i=0 ; i<str.length ; i++){
          str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
       }
       return str.join(' ');
     }
     console.log(string("Convert all the strings to title caps"));
...............................................................................
 3.Sum of all numbers in an array
    let sumofarr=(num)=>{
       let sum = 0 ;
       for(let i=0;i<num.length;i++){
         sum= sum+num[i];
        }
        console.log(sum);
     }
     sumofarr([0,1,2,3,4,5,6,7,8,9]);
...............................................................................
 4.Return all the prime numbers in an array
     function sumPrimes(num) {
       let numArray = [];
       for (let i = 1; i <= num; i++) {
          numArray.push(i);
       }    
    numArray.map((number) => {
      for (let i = 2; i < number; i++) {
        if(number % i === 0) {
            let index = numArray.indexOf(number);
            return numArray.splice(index, 1);       
         }
       }   
     });
    return numArray;
   }
   console.log(sumPrimes(10));
...............................................................................
 5.Return all the palindromes in an array
      const getAllPalindromes = (words) =>
      words.filter((word) => word.split("").reverse().join("") === word);

      console.log(getAllPalindromes(["hello", "noon"]));
...............................................................................