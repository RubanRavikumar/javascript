let calculation = '';

function appendvalue(value) {
    calculation = calculation + value;
    document.getElementById('result').value = calculation;
}

function appendoperator(operator){
    calculation = calculation + operator;
    document.getElementById('result').value = calculation;
}

function calculate(){
    try{
        const result =eval(calculation);
        document.getElementById('result').value = result;
        calculation = '';
    } catch(error){
        document.getElementById('result').value = 'Only numbers are allowed';
    }
}

function cleareresult (){
    calculation = '';
    document.getElementById('result').value ='';
}