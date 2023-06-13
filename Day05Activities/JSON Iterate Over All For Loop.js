//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FOR LOOP <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

 
const resume =[ {
  "Name" : "Ruban",
  "Email" : "rruban006@gmail.com"
 },
 {
  "SSLC" : "Maruthi Matric Higher Secondary School with 72.8 percentage passed in 2015 ",   
  "HSC" : "Tagore Matric Higher Secondary School with 67.5 percentage passed in 2017 ",
  "college" : "Velalar college of engineering technology with CGPA 7.45 pased in 2021",
  "Aditional cource" : " Complete fullstack developer in GUVI"
 },
 {
  "Personal Detials" : "",
  "Date of Birth" : "06/08/2000",
  "Father’s Name" : "Ravikumar M",
  "Mother’s Name" : "Kanagam R",
  "Current Address" : "7/189,Manivizhanthan colony,Attur, Salem-636112 ",
  "PermanentAddres" : "7/189,Manivizhanthan colony,Attur, salem-636112",
  "Work experiance" : "A year of experiance in SURFIN TOOLS PVT LIMMITED",
  "Programing language" : " Javascript,HTML,CSS,AngularJS,NodeJS,MongoDB,SQL"
 }]
for (let i=0 ; i<resume.length ; i++){
     console.log(resume[i]);
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FOR IN LOOP <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


const resume1 =[ {
  "Name" : "Ruban",
  "Email" : "rruban006@gmail.com"
 },
 {
  "SSLC" : "Maruthi Matric Higher Secondary School with 72.8 percentage passed in 2015 ",   
  "HSC" : "Tagore Matric Higher Secondary School with 67.5 percentage passed in 2017 ",
  "college" : "Velalar college of engineering technology with CGPA 7.45 pased in 2021",
  "Aditional cource" : " Complete fullstack developer in GUVI"
 },
 {
  "Personal Detials" : "",
  "Date of Birth" : "06/08/2000",
  "Father’s Name" : "Ravikumar M",
  "Mother’s Name" : "Kanagam R",
  "Current Address" : "7/189,Manivizhanthan colony,Attur, Salem-636112 ",
  "PermanentAddres" : "7/189,Manivizhanthan colony,Attur, salem-636112",
  "Work experiance" : "A year of experiance in SURFIN TOOLS PVT LIMMITED",
  "Programing language" : " Javascript,HTML,CSS,AngularJS,NodeJS,MongoDB,SQL"
 }]
for (let i in resume1){
   console.log(resume1[i]);
 }

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>FOR EACH LOOP<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
let resume2 =[ {
  "Name" : "Ruban",
  "Email" : "rruban006@gmail.com"
 },
 {
  "SSLC" : "Maruthi Matric Higher Secondary School with 72.8 percentage passed in 2015 ",   "HSC" : "Tagore Matric Higher Secondary School with 67.5 percentage passed in 2017 ",
  "college" : "Velalar college of engineering technology with CGPA 7.45 pased in 2021",
  "Aditional cource" : " Complete fullstack developer in GUVI"
 },
 {
  "Date of Birth" : "06/08/2000",
  "Father’s Name" : "Ravikumar M",
  "Mother’s Name" : "Kanagam R",
  "Current Address" : "7/189,Manivizhanthan colony,Attur, Salem-636112 ",
  "PermanentAddres" : "7/189,Manivizhanthan colony,Attur, salem-636112",
  "Work experiance" : "A year of experiance in SURFIN TOOLS PVT LIMMITED",
  "Programing language" : " Javascript,HTML,CSS,AngularJS,NodeJS,MongoDB,SQL"
 }]
resume2.forEach((detials)=>{
   console.log(detials.Name);
});