import './App.css';
import PriceCard from './Components/PriceCard/PriceCard';

const pricedetails =[
  {
    pricetype : "FREE",
    pricing :"$0",
    features : [
      {feature :"Single User" ,isAvailable : true},
      {feature :"5GB Storage" ,isAvailable : true},
      {feature :"Unlimited Public Projects" ,isAvailable : true},
      {feature :"Community Access" ,isAvailable : true},
      {feature :"Unlimited Private Projects" ,isAvailable : false},
      {feature :"Dedicated Phone Support" ,isAvailable : false},
      {feature :"Free Subdomain" ,isAvailable : false},
      {feature :"Monthly Status Reports" ,isAvailable : false},
    ]
  },
  {
    pricetype : "PLUS",
    pricing : "$9",
    features : [
      {feature :"5 User" ,isAvailable : true},
      {feature :"50GB Storage" ,isAvailable : true},
      {feature :"Unlimited Public Projects" ,isAvailable : true},
      {feature :"Community Access" ,isAvailable : true},
      {feature :"Unlimited Private Projects" ,isAvailable : true},
      {feature :"Dedicated Phone Support" ,isAvailable : true},
      {feature :"Free Subdomain" ,isAvailable : true},
      {feature :"Monthly Status Reports" ,isAvailable : false},
    ]
  },
  {
    pricetype : "PRO",
    pricing : "$49",
    features : [
      {feature :"Unlimited User" ,isAvailable : true},
      {feature :"150GB Storage" ,isAvailable : true},
      {feature :"Unlimited Public Projects" ,isAvailable : true},
      {feature :"Community Access" ,isAvailable : true},
      {feature :"Unlimited Private Projects" ,isAvailable : true},
      {feature :"Dedicated Phone Support" ,isAvailable : true},
      {feature :"Unlimited Free Subdomain" ,isAvailable : true},
      {feature :"Monthly Status Reports" ,isAvailable : true},
    ]
  }
];

function App() {
  return(
    <div className='App'>
     <section className="pricing py-5">
       <div className="container">
         <div className="row">
          {
            pricedetails.map((d, i) => (
              < PriceCard data={d} key ={`pricing-card-${i}`} />
            ))
          }
         </div>
       </div>
     </section>
    </div>
  );
}

export default App;
