let APIURL = "https://api.openbrewerydb.org/v1/breweries";

async function fetchbrewerylist(api){
    let getapiresponce = await fetch(api);
    let stringtojson = getapiresponce.json();
    return stringtojson;
}

async function renderbrewerylist(){
    let data =await fetchbrewerylist(APIURL);
     
    try {
        let createbreweryheadder = document.getElementsByClassName('headder')[0];
        const breweryheadder = document.createElement('div');
        breweryheadder.innerHTML = `
          <div class="heading">
              <h1>Brewery List</h1>
              <form action="" id="search-form"> 
                <span id="span-filter">
                    <label for="filter">filter</label>  
                    <span id="filter-select"> 
                      <select name="filter-value" id="filterby">
                          <option value="name" >Brewery Name</option>
                          <option value="type" >Brewery Type </option>
                          <option value="city">City</option>
                          <option value="state">State</option>
                      </select>                 
                    </span>                               
                </span> 
                <span id="span-search">
                   <label for="search">Search</label>
                   <input type="text" id="search-term" placeholder="find breweries " minlength="2" value="" required>  
                   <button type="submit">Find</button>
                </span>
                                
              </form>
          </div> `;
        createbreweryheadder.appendChild(breweryheadder);

        let createbrewerylist =document.getElementsByClassName('container')[0];
        data.forEach(element => {
            const createbrewery = document.createElement('div');
            createbrewery.innerHTML =`
            <div> 
              <div class="row">
                <div class="col-lg-4 col-sm-12">
                  <div class="box">
                    <div class="inside-box">
                      <div>- Name : ${element.name}</div>
                      <div>- Phone no : ${element.phone}</div>
                      <div>- Type : ${element.brewery_type}</div>
                      <div>- Address : ${element.address_1}</div>
                      <div>- Website url : ${element.website_url}</div>
                    </div>
                  </div>
                </div>
               </div>
            </div>`;
            createbrewerylist.appendChild(createbrewery);
        }); 
    } catch (error) {
        console.log('Error',error);
    }

    
} 

renderbrewerylist();