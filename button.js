document.getElementById("sign-in-btn").addEventListener("click",function(){
    const findUserName=document.getElementById("user-name-input");
    const findUserNameValue=findUserName.value;
    console.log(findUserNameValue)
    const findpassword=document.getElementById("password-input");
    const passwordValue=findpassword.value;
    console.log(passwordValue);
    
    if(findUserNameValue==="admin" && passwordValue==="admin123"){
        const findLoginBtn=document.getElementById("login-btn");
        findLoginBtn.classList.add("hidden");
        const findAllSection=document.getElementById("all-body");
        findAllSection.classList.remove("hidden")
        alert('Sign in Successful');
    }
      else if(findUserNameValue==="" && passwordValue===""){
        alert("Please Provide Necessary Information")
    }
    else if(findUserNameValue!="admin"){
        alert("Your User Name is not Matched");
        return;
    }
   else if(passwordValue!="admin123"){
        alert("Your Password is not Matched")
    }
  
   findUserName.value="";
   findpassword.value="";
})
document.getElementById("logout-btn").addEventListener("click",()=>{
      const findAllSection=document.getElementById("all-body");
        findAllSection.classList.add("hidden")
      const findLoginBtn=document.getElementById("login-btn");
        findLoginBtn.classList.remove("hidden");
})