

document.addEventListener("scroll", event => {
  if(( window.scrollY < 25) && (window.scrollY >= 20 )) {
    window.scrollTo(0,900);
} if(( window.scrollY > 950) && (window.scrollY < 1000 )) {
    window.scrollTo(0,1700);
} if (( window.scrollY > 1800) && (window.scrollY < 1860)) {
    window.scrollTo (0,2600);
} if (( window.scrollY > 2700) && (window.scrollY < 2750)) {
    window.scrollTo(0,3500);
}
})

console.log("I work!");
