var points=document.querySelectorAll(".points"),BtnStartGame=document.getElementById("StartGame");function addScript(e){let t=document.createElement("script");t.src=e,document.body.appendChild(t)}document.addEventListener("DOMContentLoaded",function(e){addScript("questions.js")});var StayOfCloseAnswer=0,GameBegin=function(e){document.querySelector(".game").classList.add("hidden"),document.querySelector(".Start-One").classList.remove("hidden")};(All=document.querySelectorAll(".points")).forEach(function(t){t.addEventListener("click",function(e){t.style.opacity="0",t.style.visibility="hidden"})});var ArrayOfButtonsVote,All=document.querySelectorAll(".game .points"),FirstTheme=document.querySelectorAll(".one .points"),SecondTheme=document.querySelectorAll(".two .points"),ThirdTheme=document.querySelectorAll(".three .points"),FourTheme=document.querySelectorAll(".four .points"),FiveTheme=document.querySelectorAll(".five .points"),GetPointsButton=function(e,n,o){let l=document.getElementById(e);l.addEventListener("click",function(e){var t=document.querySelector(o);"0"===t.textContent&&(t.textContent=0),t.textContent=Number(t.textContent)+Number(n),l.disabled=!0,".red"===o?document.getElementById("Right-Button-Minus").disabled=!0:".blue"===o&&(document.getElementById("Left-Button-Minus").disabled=!0)})},LosePointsButton=function(e,n,o){let l=document.getElementById(e);l.addEventListener("click",function(e){var t=document.querySelector(o);"0"===t.textContent&&(t.textContent=0),t.textContent=Number(t.textContent)-Number(n),l.disabled=!0,".red"===o?document.getElementById("Right-Button").disabled=!0:".blue"===o&&(document.getElementById("Left-Button").disabled=!0)})},NewButton=function(e,t,n){var o=document.createElement(n);o.className="image-output",o.tabIndex="1",o.id="Qestion-Delete";o=document.createElement("button");o.type="button",o.id=t,o.textContent=e,n.appendChild(o)},ShowAnswer=function(e,t){var n=document.createElement("div");n.className="AnswerImage",n.id="AnswerSee";let o=document.createElement("span");if(o.innerHTML="ответ:<br>",o.className="AnswerMsg",n.appendChild(o),""!==t){let e=document.createElement("img");e.className="Image-Of-Answer",e.src=t,n.appendChild(e)}t=document.createElement("span");t.className="AnswerCloseButton",t.innerHTML="крест",t.addEventListener("click",function(){document.querySelector(".AnswerImage")&&document.querySelector(".AnswerImage").parentNode.removeChild(document.querySelector(".AnswerImage"))}),n.appendChild(t);t=document.createElement("h1");t.innerHTML=e,t.className="Text_Of_Answer",n.appendChild(t),document.body.appendChild(n)},Question=function(e,t,n,o,l,d){var u=document.createElement("div");u.className="image-output",u.id="Qestion-Delete";var s=document.createElement("h1");if(s.innerHTML=e,s.className="Text-Qestion",u.appendChild(s),""!==n){let e=document.createElement("img");e.className="Image-Of-Question",e.src=n,e.width="45%",u.appendChild(e)}if(""!==o){let e=document.createElement("audio");e.controls=!0,e.className="Audio-Of-Question",e.src=o,e.volume=.1,u.appendChild(e)}o=document.createElement("span");o.className="TextCloseButton",o.innerHTML="крест",o.textContent="крест",u.appendChild(o);o=document.createElement("button");o.type="button",o.id="Left-Button-Minus",o.className="VoteButton",o.tabIndex="1",o.textContent=" - синим",u.appendChild(o);o=document.createElement("button");o.type="button",o.id="Left-Button",o.className="VoteButton",o.tabIndex="1",o.textContent="+  синим",u.appendChild(o);o=document.createElement("button");o.type="button",o.id="Right-Button-Minus",o.className="VoteButton",o.tabIndex="1",o.textContent="- красным",u.appendChild(o);o=document.createElement("button");o.type="button",o.id="Right-Button",o.className="VoteButton",o.tabIndex="1",o.textContent="+ красным",u.appendChild(o),document.body.appendChild(u),document.querySelector(".TextCloseButton").addEventListener("click",function(e){let t=document.getElementById("Qestion-Delete");t&&(t.parentNode.removeChild(t),StayOfCloseAnswer=1,console.log(StayOfCloseAnswer)),""!==l&&ShowAnswer(l,d),StayOfCloseAnswer=1}),GetPointsButton("Left-Button",t,".blue"),GetPointsButton("Right-Button",t,".red"),LosePointsButton("Left-Button-Minus",t,".blue"),LosePointsButton("Right-Button-Minus",t,".red")};let ESC_KEY_CODE=27,ENTER_KEY_CODE=13,TAB_KEY_CODE=9,UP_ARROW_KEY_CODE=38,DOWN_ARROW_KEY_CODE=40,testDiologDelete=function(){var e=document.getElementById("Qestion-Delete");e&&e.parentNode.removeChild(e)},StayOfButton,StayOfButtonRightSide=1;document.onkeydown=function(e){var t;e.keyCode!=ESC_KEY_CODE&&e.keyCode!=TAB_KEY_CODE||((t=document.getElementById("Qestion-Delete"))&&(t.parentNode.removeChild(t),StayOfCloseAnswer=1,console.log(StayOfCloseAnswer)),(t=document.querySelector(".AnswerImage"))&&t.parentNode.removeChild(t)),e.keyCode==UP_ARROW_KEY_CODE&&document.querySelector(".image-output")&&(ArrayOfButtonsVote=document.querySelectorAll(".VoteButton"),StayOfButton=0,ArrayOfButtonsVote[1].focus()),e.keyCode,DOWN_ARROW_KEY_CODE};var ArrayOfQuestions=[],ArrayOfQuestions=Array.from(All);let AllButtons=document.querySelectorAll(".points");for(let t=0;t<AllButtons.length;t++)AllButtons[t].addEventListener("click",function(e){Question(AllQuestion[t].question,AllQuestion[t].points,AllQuestion[t].image,AllQuestion[t].audio,AllQuestion[t].answer,AllQuestion[t].imageOfAnswer),StayOfCloseAnswer=0,console.log(StayOfCloseAnswer)});console.log("all fine");