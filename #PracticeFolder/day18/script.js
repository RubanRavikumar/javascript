function promise(input=0) {
    return new Promise( (resolve=()=>{}, reject=()=>{}) =>{
    if(input % 2==0)
    {
        resolve("even number");
    } else {
        reject("odd number");
    }
})
}
console.log(promise(45));