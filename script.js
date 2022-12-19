const inText=document.getElementById("text");
const form =document.getElementById("form");
const todoEl=document.querySelector(".todo");
const icon_moon=document.getElementById("icon-moon");
const icon_sun=document.getElementById("icon-sun");
const body=document.getElementById("body");
const items_leftEl=document.getElementById("items-left");
const activeBtn=document.getElementById("active");
const allBtn=document.getElementById("all");
const completedBtn=document.getElementById("completed");
const clearcompletedbtn=document.getElementById("clear-completed");
const lightbgimg=document.querySelector(".light-background-container")
const darkbgimg=document.querySelector(".dark-background-container")
let count=0;
let myarr=[]


form.addEventListener("submit",(e)=>{
    e.preventDefault()
    text=inText.value;
    if(text){
            todoEl.insertAdjacentHTML("beforeend",`
                   <div class="whole-todo"  draggable="true">
                        <span class="circle-todo">
                            <img src="images/icon-check.svg" alt="icon-check">
                        </span>
                        <p class="todo-text ">${text}</p>
                    </div>
    `)
    count++;
    items_leftEl.innerHTML=count;
    }
    

    myarr.push(text)
    console.log(myarr)
    localStorage.setItem("value", JSON.stringify(myarr))
    console.log(text)
    inText.value=""



      // code for whole todo element click event
       const whole_todoEl= document.querySelectorAll(".whole-todo");
       
    whole_todoEl.forEach(function(block, index) {
        
      
        block.addEventListener('click', function() {

            const circle_todo=block.querySelector(".circle-todo");
            const todo_text=block.querySelector(".todo-text");
            circle_todo.classList.toggle("completed");
            todo_text.classList.toggle("checked");
            if(todo_text.classList.contains("checked")){
                count=count-1;
               items_leftEl.innerHTML=count;
            }
            else{
                count++;
                items_leftEl.innerHTML=count;
            }


            //  to clear completed 
             clearcompletedbtn.addEventListener("click",()=>{
                if(todo_text.classList.contains("checked")){
                    block.parentNode.removeChild(block)
                   
                }
                else{
                    
                }
            })
           
            // all button clicked events 
            allBtn.addEventListener("click",()=>{
                if(block.classList.contains("inactive")){
                    block.classList.remove("inactive");
                }
            })
            completedBtn.addEventListener("click",()=>{
               
                if(todo_text.classList.contains("checked")){
                    block.classList.remove("inactive");
                   
                }
                else{ 
                    block.classList.add("inactive");
                    console.log("completed btn clicked");
            }

            })
             // active button clicked  events
             activeBtn.addEventListener("click",()=>{
                if(todo_text.classList.contains("checked")){
                    block.classList.add("inactive");
                    console.log("active btn clicked");
                }
                else{
                   

                }
            })
             console.log(`Block ${index} was clicked`);
        });
      });
})


function handleThemeChange(iconMoon, iconSun, lightBgImg, darkBgImg, body, text) {
    iconMoon.classList.toggle("inactive");
    iconSun.classList.toggle("inactive");
    lightBgImg.classList.toggle("inactive");
    darkBgImg.classList.toggle("inactive");
    body.classList.toggle("body-darktheme");
    text.classList.toggle("darktheme-container");
  }
// optimized the below code using chatgpt 


icon_moon.addEventListener("click",()=>{
    // icon_sun.classList.toggle("inactive");
    // icon_moon.classList.toggle("inactive");
    // lightbgimg.classList.toggle("inactive");
    // darkbgimg.classList.toggle("inactive");
    // body.classList.toggle("body-darktheme");
    // text.classList.toggle("darktheme-container");
    handleThemeChange(icon_moon, icon_sun, lightbgimg, darkbgimg, body, text);
})
icon_sun.addEventListener("click",()=>{
    // icon_sun.classList.toggle("inactive");
    // icon_moon.classList.toggle("inactive");
    // body.classList.toggle("body-darktheme");
    // lightbgimg.classList.toggle("inactive");
    // darkbgimg.classList.toggle("inactive");
    // text.classList.toggle("darktheme-container");
    handleThemeChange(icon_moon, icon_sun, lightbgimg, darkbgimg, body, text);


});

function handleDragStart(event) {
    // Set the data that will be transferred when the element is dropped
    event.dataTransfer.setData("text/plain", event.target.id);
  
    // Set the visual appearance of the element while it is being dragged
    event.target.style.opacity = "0.5";
  }
  const todo =document.querySelector(".todo");
       new Sortable(todo,{
           animation:350
       });