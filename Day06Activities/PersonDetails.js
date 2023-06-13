class person{
     constructor(fname,lname,age,dob,nationality,addres){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.dob = dob;
        this.nationality = nationality;
        this.addres = addres;
     }
}

let persondetails = new person('ruban','r',23,'06/08/2000','indian','7/189,manivizhanthon colony, attur, salem-636112');
console.log(persondetails);