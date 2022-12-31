// for each number
const numbers = document.querySelectorAll(".num");
const field = document.querySelector(".inputs");



// for the toggle light and dark theme
const main = document.querySelector(".main");
const icons = document.querySelectorAll(".fa-solid");
const themes = document.querySelector(".themes");

themes.addEventListener("click", (e) => {
    main.classList.toggle("light");
    icons[0].classList.toggle("fa-lightbulb");

    if(!icons[0].classList.contains("fa-lightbulb")){
            icons[1].style.display = "contents";
    }

    else{
        icons[1].style.display = "none";
    }
})

// for the buttons displaying in the field for calculation
const btnPrimary = document.querySelectorAll(".btn__primary");
btnPrimary.forEach(btn =>{
    btn.addEventListener("click", (e) => {
        field.textContent += e.target.textContent;
    })
})

// reset
const resetBtn = document.querySelector(".btn__reset");
resetBtn.addEventListener("click", (e) => {
                field.textContent = "";
})

// delete button
const deleteBtn = document.querySelector(".delete__btn");
deleteBtn.addEventListener("click", (e) => {
    let fieldContent = field.textContent;
   let splitted =  fieldContent.split("");
   splitted.pop();
   field.textContent = splitted.join("");
   
})

// equals button

const equalBtn = document.querySelector(".btn__equal");
equalBtn.addEventListener("click", (e) => {
   let evaluate = eval(field.textContent);
   field.textContent = evaluate;
})