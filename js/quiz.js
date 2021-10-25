
//Fill html with question and choice
const question=document.getElementById('question')
const aText=document.getElementById("a-text")
const bText=document.getElementById("b-text")
const cText=document.getElementById("c-text")
const dText=document.getElementById("d-text")


const submitBtn=document.getElementById('submit')
const resultBtn=document.getElementById('submit2')
const reload=document.getElementById('reload')
let quizContainer2=document.querySelector('.quiz-container2')
let correctAnswer1=document.querySelector('.correctAnswer1')
let backContainer=document.querySelector('.backContainer')
console.log(correctAnswer1)


//know what is the answer was clicked by user
const answerEls=document.querySelectorAll('.answer')
const quiz=document.getElementById("quiz")

const resultPage=document.getElementById('resultPage')

// start pop Up info/
const reloadWindow=e=>{
    location.href="quiz.html"
}
const reloadPag=e=>{
location.reload();
}
// End pop Up info/


function getJson(path){
    let jsonObj=path.split('/')[1].split('.')[0]
    fetch(path)
    .then(function(resp){
        return resp.json()
    })
    .then(function(data){
        let score=0;
      let currentQuiz=0

    //    path.split('/')[1].split('.')[0]
    let str=`${jsonObj}`

    console.log(data[str])
    
        loadData()
    
        
    var resultHistory=[]
    
    
    function HistoryAnswer(question,useAnswer,correct){
    this.question=question;
    this.useAnswer=useAnswer;
    this.correct=correct;
    resultHistory.push(this)
    }
    
    function loadData(){
        removeSelect()
        const currentQuizData=data[str][currentQuiz];
        question.innerText=currentQuizData.question
        aText.innerText=currentQuizData.a
        bText.innerText=currentQuizData.b
        cText.innerText=currentQuizData.c
        dText.innerText=currentQuizData.d
    }
    
    
    
    function getUserAnswer(){
        let firstAnswer=undefined;
        answerEls.forEach(x=>{
            if(x.checked){
                firstAnswer=x.id
            }
        })
        console.log(firstAnswer)
        new HistoryAnswer(data[str][currentQuiz].question,firstAnswer,data[str][currentQuiz].correct)
    
        return firstAnswer
    
    }
    
    function removeSelect(){
        answerEls.forEach(x=>{
            x.checked=false
        })
    }

    function renderQuizzes(e){  
        let correctAnswer=getUserAnswer();
        console.log(resultHistory)
        if(correctAnswer){
            if(correctAnswer===data[str][currentQuiz].correct){
                score++
            }
            currentQuiz++;
            if(currentQuiz==data[str].length-1){
                submitBtn.innerHTML="Submit"
            }
       if(currentQuiz<data[str].length){
           loadData()
       }else{
        e.preventDefault()
        let nameSign=localStorage.getItem('username')
        backContainer.style.display="flex"

           if(score>=3){
quizContainer2.style.backgroundImage="linear-gradient(315deg,#1e4d2c 0%,#23f056 100%)";
correctAnswer1.innerHTML=`<p > <span style='font-size:50px;'>&#128512;</span> Good Job <mark>
${nameSign} </mark> ! </p>
 You answered correctly : ${score} out ${data[str].length} questions.`

         }else{

            quizContainer2.style.backgroundImage="linear-gradient(315deg,#91091d 0%,#f62c36 100%)"
            correctAnswer1.innerHTML=`<p> <span style='font-size:50px;'>&#128577;</span> Hard Luck <mark>
            ${nameSign} </mark> ! </p>
             You answered correctly : ${score} out ${data[str].length} questions.`;

        }

        setLocalStorage()
        resultBtn.innerText='Show all result'
        resultPage.setAttribute('href','result.html')
        console.log(resultPage)
        submitBtn.removeEventListener('click',renderQuizzes)

            
     }
     
     }
       

    }
    
    submitBtn.addEventListener('click',renderQuizzes)
    
    
    function setLocalStorage(){
        var convertToJson=JSON.stringify(resultHistory)
        localStorage.setItem('userAnswer',convertToJson)
    }
    
   
    
    
    })


}

let idName=localStorage.getItem('id')
if(idName !=null){
    console.log(idName)
    if(idName=="javascr"){
        
        getJson('json/javascript.json')
    }
   else if(idName=='cssStyle'){

    getJson('json/css.json')


   }
   else{
    getJson('json/html.json')

   }
}





