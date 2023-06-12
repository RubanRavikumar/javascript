fetch('https://restcountries.com/v3.1/all')
.then(response=> response.json())
.then(data =>{
    country = document.getElementsByClassName('container')[0];
    data.forEach(element => {
        const restcountries = document.createElement('div');
        restcountries.innerHTML = `
        <div class="row">
          <div class="col-lg-4 col-sm-12">
            <div class="card ">
               <div class="card-header">
                  <div class="p-3"><h1 id="title" class="text-center">${element.name.common}</h1></div>
                </div>  
               <div class="card-body">
                 <img src="${element.flags.png}" class="card-img-top">
                 <div class="card-bady card-txt" style="text-align:center;">
                    <div class="card-text">capital:${element.capital}</div>
                    <div class="card-text">Regian:${element.region}</div>
                    <div class="card-text">country code:${element.cca3}</div>
                    <div class="card-text">LatAng:${element.latlng}</div>
                    <div class="mt-3 weatherbtn">
                      <a href="" class="btn btn-primary">Click for Weather</a>
                    </div>
                 </div>
                </div>
            </div>
          </div>
        </div> `;
        country.appendChild(restcountries);
    });
})
.catch(error =>{
    console.log('Error',error)
});