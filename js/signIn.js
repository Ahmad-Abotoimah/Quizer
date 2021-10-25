
const removePopup2=e=>{
    location.href="./landing/landing.html"
        }
    
    const signIn=(e)=>{
        let userName1;
        let email=document.getElementById('emailSignIn')
        let password=document.getElementById('passSignIn')
        let formData=JSON.parse(localStorage.getItem('formData'))||[]
        if (localStorage.length==0){
           alert("You Must Register first")
              document.getElementById("signin-form").action="../landing/landing.html"
        }
        let exist=formData.length && JSON.parse(localStorage.getItem('formData')).some(data=>data.email.toLowerCase()==email.value.toLowerCase()&&data.password===password.value)
      JSON.parse(localStorage.getItem('formData')).forEach(data=> {
          if(data.email.toLowerCase()==email.value.toLowerCase()){
              userName1=data.userName
          }
    
      })
    if(!exist){
        console.log(userName1)
    
        document.getElementById("signinError").style.color="red"
        document.getElementById("signinError").style.marginTop="1rem"
        document.getElementById("signinError").innerHTML="Email or Password is incorrect"
    
    }
    else{
        localStorage.setItem('username',userName1)
        location.href="index.html"
    }
    e.preventDefault()
    
    
    }

    
