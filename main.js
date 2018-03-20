//let scrollOne = window.scrollTo(0,500);
//let scrollTwo = wondow.scrollTo(0,1000);
//let scrollThree = window.scrollTo(1500);
//let scrillFour = window.scrollTo(2000);


document.addEventListener("scroll", event => {
  if(window.scrollY < 20) {
  window.scrollTo(0,1000);
}
})

console.log("I work!");
