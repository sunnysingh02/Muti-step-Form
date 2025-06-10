document.addEventListener("DOMContentLoaded", function(){
    //retrive values from localstorage
    setTimeout(()=>{
    const savedName= localStorage.getItem("userName");
    const savedEmail=localStorage.getItem("userEmail");
    const savedTopic=localStorage.getItem("userTopic");
console.log("Retrieved data:", savedName, savedEmail, savedTopic); // Debugging
    //populate the summary
     if (savedName && savedEmail && savedTopic) {
    document.getElementById("summary-name").innerText=savedName;
    document.getElementById("summary-email").innerText=savedEmail;
    document.getElementById("summary-topic").innerText=savedTopic;
     } else {
        console.error("Missing data for Step 3.");
    }
    }, 100);
  document.getElementById("submit").addEventListener("click", function () {
    const popup = document.getElementById("reward-popup");
    popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
    }, 5000); // Hide after 3 seconds
});

});