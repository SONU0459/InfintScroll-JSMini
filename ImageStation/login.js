const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const submitsignBtn = document.getElementById("sing-up");

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click',()=>{

    container.classList.remove("right-panel-active");
})
	 
 

submitsignBtn.addEventListener('click',getValeSign)
	 
 
// function gologin() {

//     container.classList.remove("right-panel-active");
     

// }

// -----signup 

 

let signDdata = JSON.parse(localStorage.getItem("Data"))||[];

 

function getValeSign(event){


   
  event.preventDefault(); 

    let Name = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(signDdata.some((elem)=>{return elem.email==email})){

        alert("allready SignUped !")
    }else{
    

        if(Name=="" && lastName=="" && email=="" && password =="" ){

            alert("filled the details")
        }
else{
        let obj = {

            Name,
            lastName,
            email,
            password
    
    
    
        };
    
        signDdata.push(obj);
    
        
        localStorage.setItem("Data",JSON.stringify(signDdata));

        container.classList.remove("right-panel-active");
    }
}

     

    

     

    // console.log(signDdata)


}

document.getElementById("logingSub") .addEventListener("click",loginSubmitBtn)

 

function loginSubmitBtn(){

     

    let logEmail = document.getElementById("logEmail").value;
    let logPassword = document.getElementById("logPassword").value;

    // console.log(signDdata)

    if(signDdata.some((elem)=>{return elem.email==logEmail && elem.password==logPassword}))
    {

        alert("You have successfully logged in.");
         
        window.location.href = "index.html";

    }
     else{

        alert("Wrong Email !")

     }

   

    
    

}

// getValeSign();
