//.......... Display All The Country Flags  .........................

 function printData() {
   const flags = JSON.parse(this.responseText);
  flags.forEach((flg) => console.log(flg.flags.png));
  
}

let request = new XMLHttpRequest();
request.addEventListener("load", printData);
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
 