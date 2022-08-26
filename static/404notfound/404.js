document.addEventListener("DOMContentLoaded", function(){
   let button = document.getElementById("moveTop");
   let body = document.getElementById("fadeout");
   
   button.addEventListener("click", function(){
      body.style.background = "#000000";
      setTimeout(function(){
      window.location.href = "TOP.html";  // 0.8秒後に取得したURLに遷移
      }, 800);
   })
   
});

