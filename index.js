//select all btns and divs
const hidden = document.querySelector(".hidden");
const form = document.querySelector(".form");
const popup = document.querySelector(".popup");
const rating = document.querySelector(".rating");
const submitBtn = document.getElementById("submit-btn");
const ratingOne = document.getElementById("one");
const ratingTwo = document.getElementById("two");
const ratingThree = document.getElementById("three");
const ratingFour = document.getElementById("four");
const ratingFive = document.getElementById("five");
const ratingBtns = document.querySelectorAll(".rating-btn");
let value = "";

// when rating-btn is clicked, select that btn, add the class of selected to change the color of the btn that they selected for them to see and store the number value to be displayed in the html //
 
// constructor function for the rating objects
function RatingObjects (ratingValue, numValue){
    ratingBtns.forEach(function(btn) {
        btn.classList.remove('selected')
    });
    `${ratingValue.classList.add("selected")} ${value = numValue}`
};

// event listeners
ratingOne.addEventListener("click", function () {
    RatingObjects (ratingOne, 1)
});

ratingTwo.addEventListener("click", function () {
    RatingObjects (ratingTwo, 2)
});

ratingThree.addEventListener("click", function () {
    RatingObjects (ratingThree, 3)
});

ratingFour.addEventListener("click", function () {
    RatingObjects (ratingFour, 4)
});

ratingFive.addEventListener("click", function () {
    RatingObjects (ratingFive, 5)
});

//when submit is clicked remove hidden class to push popup into view and add hidden onto .form
submitBtn.addEventListener("click", function () {
  form.classList.add("hidden");
  popup.classList.remove("hidden");
  rating.innerHTML = `
    <p> You selected ${value} out of 5 </p>`;
  // this setTimeout brings the user back to original screen
  setTimeout(function () {
    popup.classList.add("hidden");
    form.classList.remove("hidden");
  }, 10000);
});


