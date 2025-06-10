const button2 = document.getElementById("btn2");

button2.addEventListener("click", function(event){
    event.preventDefault();

     const selectedTopic = document.querySelector('input[name="topic"]:checked');
    
     if(selectedTopic){

    //store seled topic for step 3
    localStorage.setItem("userTopic", selectedTopic.value);
    document.getElementById("step2").style.display="none";
    document.getElementById("step3").style.display="block";
     } else{
        alert("please select a topic");
     }


   
});