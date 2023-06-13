class Movie{
  constructor( movie,studio,rating){
    this.movie = movie;
    this.studio = studio;
    this.rating = rating || "PG";
   }
   getPG(data=[]){
      return data.filter((d)=>d.rating==="PG");
   }
}
  let movieunites = new Movie();
  let movielist = [
      new Movie("Casino Royale","Eon Productions","PG13"),
      new Movie("Ramayana","Nippon Ramayana Film Co",""),
      new Movie("Sita Ramam","Vyjayanthi Movies ","PG"),
      new Movie("Jai Bhim","2D Entertainment","PG13"),
      new Movie("Soorarai Pottru","Goldmines Telefilms","PG"),
      new Movie("Sarpatta Parambarai","k9 Studios","")
      ];
   console.log(movieunites.getPG(movielist));
