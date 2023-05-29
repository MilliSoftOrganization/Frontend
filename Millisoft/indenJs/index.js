// $("#toggle").click(function () {
//   $(this).toggleClass("active");
// });

document.querySelector("#toggle").addEventListener("click",function(){
    this.classList.toggle("active");
    document.querySelector("nav").classList.toggle("block")
    document.querySelector("nav").classList.toggle("top");
})
