for(var links=document.getElementsByTagName("a"),i=0;i<links.length;i++)links[i].addEventListener("click",function(e){e.preventDefault()});var points=document.querySelectorAll(".points"),BtnStartGame=document.getElementById("StartGame");function addScript(e){let t=document.createElement("script");t.src=e,document.body.appendChild(t)}document.addEventListener("DOMContentLoaded",function(e){addScript("questions.js")});var GameBegin=function(e){document.querySelector(".game").classList.add("hidden"),document.querySelector(".Start-One").classList.remove("hidden")};(All=document.querySelectorAll(".points")).forEach(function(t){t.addEventListener("click",function(e){t.style.opacity="0",t.style.visibility="hidden"})});var All=document.querySelectorAll(".game .points"),FirstTheme=document.querySelectorAll(".one .points"),SecondTheme=document.querySelectorAll(".two .points"),ThirdTheme=document.querySelectorAll(".three .points"),FourTheme=document.querySelectorAll(".four .points"),FiveTheme=document.querySelectorAll(".five .points"),GetPointsButton=function(e,n,o){var l=document.getElementById(e);l.addEventListener("click",function(e){var t=document.querySelector(o);"0"===t.textContent&&(t.textContent=0),t.textContent=Number(t.textContent)+Number(n),l.disabled=!0})},NewButton=function(e,t,n){var o=document.createElement(n);o.className="image-output",HTMLElement.tabIndex="1",o.id="Qestion-Delete";o=document.createElement("button");o.type="button",o.id=t,o.textContent=e,n.appendChild(o)},Question=function(e,t,n){var o=document.createElement("div");o.className="image-output",o.id="Qestion-Delete";var l=document.createElement("h1");if(l.textContent=e,l.className="Text-Qestion",o.appendChild(l),""!==n){let e=document.createElement("img");e.className="Image-Of-Question",e.src=n,o.appendChild(e)}n=document.createElement("span");n.className="TextCloseButton",n.innerHTML="крест",n.textContent="крест",o.appendChild(n);n=document.createElement("button");n.type="button",n.id="Left-Button",n.textContent="очки синим",o.appendChild(n);n=document.createElement("button");n.type="button",n.id="Right-Button",n.textContent="очки красным",o.appendChild(n),document.body.appendChild(o),document.querySelector(".TextCloseButton").addEventListener("click",function(e){let t=document.getElementById("Qestion-Delete");t&&t.parentNode.removeChild(t)}),GetPointsButton("Left-Button",t,".blue"),GetPointsButton("Right-Button",t,".red")};let ESC_KEY_CODE=27,ENTER_KEY_CODE=13,TAB_KEY_CODE=38,PAGEUP_KEY_CODE=37,PAGEDOWN_KEY_CODE=40,testDiologDelete=function(){var e=document.getElementById("Qestion-Delete");e&&e.parentNode.removeChild(e)};document.onkeydown=function(e){e.keyCode!=ESC_KEY_CODE&&e.keyCode!=ENTER_KEY_CODE&&e.keyCode!=PAGEUP_KEY_CODE&&e.keyCode!=PAGEDOWN_KEY_CODE&&e.keyCode!=TAB_KEY_CODE||(e=document.getElementById("Qestion-Delete"))&&e.parentNode.removeChild(e)};var ArrayOfQuestions=[],ArrayOfQuestions=Array.from(All);let AllButtons=document.querySelectorAll(".points");for(let t=0;t<AllButtons.length;t++)AllButtons[t].addEventListener("click",function(e){Question(AllQuestion[t].question,AllQuestion[t].points,AllQuestion[t].image)});console.log("all fine");