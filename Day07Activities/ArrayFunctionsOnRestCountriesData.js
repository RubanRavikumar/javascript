//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Get all the countries from Asia continent /region using Filter function

var request = new XMLHttpRequest();
request.addEventListener("load",Asiaregion);
request.open('GET','https://restcountries.com/v3.1/all');
request.send();

function Asiaregion(){
       let countrydata = JSON.parse(this.response);
       let asia = countrydata.filter((element)=>{
            if(element.region === 'Asia'){
                 return element.name;
            }
       })
       console.log(asia);
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Get all the countries with a population of less than 2 lakhs using Filter function

let request = new XMLHttpRequest();
request.addEventListener("load",Asiaregion);
request.open('GET','https://restcountries.com/v3.1/all');
request.send();

function Asiaregion(){
       let countrydata = JSON.parse(this.response);
       let asia = countrydata.filter((element)=>{
            if(element.population <= 200000){
                 return element.name;
            }
       })
       console.log(asia);
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Print the following details name, capital, flag using forEach function

function printData() {
  let countrydata = JSON.parse(this.response);
  countrydata.forEach((data) =>
  console.log(data.name.common,data.capital,data.flags.png))}

let request = new XMLHttpRequest();
request.addEventListener("load", printData);
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Print the total population of countries using reduce function

function printData() {
  let countrydata = JSON.parse(this.response);
  var totalpopulation = countrydata.reduce((currpopulation, nextpopulation) =>
    { return currpopulation + nextpopulation.population;},0)
    console.log('total population of countries is '+totalpopulation);
 }
let request = new XMLHttpRequest();
request.addEventListener("load", printData);
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Print the country which uses US Dollars as currency.
function printData() {
   var data = JSON.parse(this.response);
        for(let i=0;i<data.length;i++){
            if(data.currencies=='USD');
            {
                console.log(data.currencies);
            }
        }
 }
let request = new XMLHttpRequest();
request.addEventListener("load", printData);
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>