

let tbody=document.querySelector('tbody')
console.log(tbody)
console.log(JSON.parse(localStorage.getItem('userAnswer')))
JSON.parse(localStorage.getItem('userAnswer')).forEach(element => {
    if(element.useAnswer!=undefined){
    if(element.useAnswer!=element.correct){

    tbody.innerHTML += `
         <tr style="color:red;" >
            <td>${element.question}</td>
            <td>${element.useAnswer}</td>
            <td>${element.correct}</td>
        </tr>
    `}
    else{
        
    tbody.innerHTML += `
         <tr style="color:green;" >
            <td>${element.question}</td>
            <td>${element.useAnswer}</td>
            <td>${element.correct}</td>
        </tr>
    `}
    }
}

);