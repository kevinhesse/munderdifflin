
//scrolls to specific section upon scrolling
document.addEventListener("scroll", event => {
  if(( window.scrollY < 25) && (window.scrollY >= 20 )) {
console.log("")
    window.scroll({
      top: 900,
      left: 0,
      behavior: 'smooth'
    });

} if(( window.scrollY > 950) && (window.scrollY < 1000 )) {
  window.scroll({
    top: 1800,
    left: 0,
    behavior: 'smooth'
  });

} if (( window.scrollY > 1800) && (window.scrollY < 1860)) {
    window.scroll({
      top: 2600,
      left: 0,
      behavior: 'smooth'
  });
} if (( window.scrollY > 2700) && (window.scrollY < 2750)) {
    window.scroll({
      top: 3500,
      left: 0,
      behavior: 'smooth'
    });
}
})

alert("Orlando, please view this in full screen, Thanks!!!");
