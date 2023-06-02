let count = 0
let i = 0; 
let widthCard = document.querySelector(".event1").offsetWidth
// console.log(widthCard);

document.getElementById("next_bttn").addEventListener("click", function () {
    console.log("fi"+count)
    if(count !=1 ){
        console.log(widthCard);
        count++
        console.log(count)
        i=widthCard*count
        console.log(i)
        document.querySelector(".events").style=`transform:translateX(${-i}px)`  
        console.log("f")    
        if(count==1){
            toggleClasses1()
        }
    }
    
})

document.getElementById("prev_bttn").addEventListener("click", function () {
    if (count != 0){
        console.log(widthCard);
        count--
        console.log(count)
        i = widthCard*count
        console.log(i)
        document.querySelector(".events").style=`transform:translateX(${-i}px)`  
        if(count==0){
            toggleClasses2()
        }  
    }

})

function toggleClasses1(){
    
    next_bttn.classList.remove("abled_bttn")
    next_bttn.classList.add("disabled_bttn")
    prev_bttn.classList.remove("disabled_bttn")
    prev_bttn.classList.add("abled_bttn")
}

function toggleClasses2(){
    
    next_bttn.classList.remove("disabled_bttn")
    next_bttn.classList.add("abled_bttn")
    prev_bttn.classList.remove("abled_bttn")
    prev_bttn.classList.add("disabled_bttn")
}



// window.addEventListener('resize', function() {
//     console.log('window was resized');
//   });
  

// window.addEventListener("resize", function(event) {
//     let screenWidth = document.body.clientWidth

//     document.querySelectorAll(".event").forEach(element => {
//         if (screenWidth >= 992 ) {
//             element.style.width = screenWidth/3,5 + "px"
//         }
//         else if(screenWidth <= 992 && screenWidth >= 768){
//             element.style.width = screenWidth/2 + "px"
//         }else{
//             element.style.width = screenWidth-70 + "px"
//         }
        
//     })
// })