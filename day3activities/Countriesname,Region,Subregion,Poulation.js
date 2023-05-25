//.......... countriesname,region,subregion,population  ..........................
 function printData() {
   const countries = JSON.parse(this.responseText);
  countries.forEach((coun) =>
  console.log(coun.name.official,coun.region,coun.subregion,coun.population));
  
}

let request = new XMLHttpRequest();
request.addEventListener("load", printData);
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();