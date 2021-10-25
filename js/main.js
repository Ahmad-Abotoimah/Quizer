

let welcomeQuiz = document.querySelector(".welcomeQuiz");
////popUp////
const registerNow = (e) => {
  document.querySelector(".popUpSignUp1").style.display = "flex";
  e.preventDefault();
};
const removePopup = (e) => {
  document.querySelector(".popUpSignUp1").style.display = "none";
};

///////////popUp////


function loadName() {
  console.log(localStorage.getItem("username"));
  let nameSign = localStorage.getItem("username");
  try {
    var x = nameSign.length;
  } catch {
    console.log("");
  }
  if (!x) {
    
    welcomeQuiz.innerHTML =
      `<h1 class="welCUser">Welcome to Web Developer position</h1>
      <br>
      please Answer all the Quizzes to get the interview Job !`
  } else {
      try{
    welcomeQuiz.innerHTML = `<h1 class="welCUser">Welcome <mark>${nameSign}</mark>!</h1>
    <br> please Answer all the Quizzes to get the interview Job !`;
      }
      catch {console.log("")}
  }
}
loadName();

///////////Sign In Page'////////////