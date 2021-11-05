const flashcards= document.getElementByClassName("flashcards")[0];
const creatBox= document.getElementByClassName("creatBox")[0];
const qusetion=document.getElementById("qusetion");
const answer=document.getElementById("answer");
let contentArray= localStorage.getItem('items')?JSON.parse(localStorage.getItem('items')):[];

contentArray.forEach(divMaker);
function divMaker(text){
  var viv= document.createElement("div");
  var h2_question= document.createElement("h2");
  var h2_answer= document.createElement("h2");

  div.className='flashcard';

  h2_question.setAttribute('style',"border-top:1px solid red; padding: 15px; margin-top:30px");

  h2_question.innerHTML= text.my_qusetion;

  h2_answer.setAttribute("style", "text-align:center; display:none; color:red");

  h2_answer.innerHTML=text.my_answer;

  div.appendChild(h2_question);
  div.appendChild(h2_answer);

  div.addEventListener("click", function(){
      if(h2_answer.style.display=="none")
        h2_answer.style.display="block";
       else
         h2_answer.style.display="none";
  })

  flashcards.appendChild(div);
  

}
function addFlashcards(){
  /*dictionar*/ var flashcards_info={
   'my_qusetion': qusetion.value, 'my_answer':answer.value
   }

   contentArray.push(flashcards_info);
  /*key*/ localStorage.setItem('items', JSON.stringify(contentArray));
  divMaker(contentArray[contentArray.lenght-1]);
  question.value='';
  answer.value='';
}

/*Face sa dispara cardurile*/
function delFlashcards(){
localStorage.clear();
flashcards.innerHTML='';//empty string
contentArray=[];
}
function showCreateBox(){
   creatBox.style.display="block";
}

function hideCreateBox(){
  creatBox.style.display="none";
}
