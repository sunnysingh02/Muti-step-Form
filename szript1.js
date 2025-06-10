const button=document.getElementById("btn");
const name = document.getElementById("form-name");
const email = document.getElementById("form-email");


button.addEventListener("click", function(event){
    event.preventDefault()
    if(name.value!=="" && email.value!==""){
        document.querySelector(".form-container").style.display="none";
         document.querySelector(".step-container").style.display = "none";
        document.getElementById("step2").style.display="block";

         //store the value for step 3
    localStorage.setItem("userName", name.value);
    localStorage.setItem("userEmail", email.value);

    } else{
        alert("enter the details");
    }
});

