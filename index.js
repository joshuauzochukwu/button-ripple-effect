const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event) =>{
    const x = event.pageX - btnEl.offsetleft;
    const y = event.pageY - btnEl.offsettop;

    btnEl.style.setproperty("--xpos", x +"px")
    btnEl.style.setproperty("--ypos", y +"px")

})