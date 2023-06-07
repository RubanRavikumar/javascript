function findoddeven(num = 0){
    return new Promise( (resolve = () =>{},reject = () => {}) =>{
        setTimeout(() =>{
            if(num % 2 ==0){
                resolve("even");
            } else{
                reject("odd");
            }
        }, 5000);
    });
}

findoddeven(15)
.then((result) => console.log(result))
.catch((error) => console.log(error)); 