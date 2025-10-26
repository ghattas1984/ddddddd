const img = document.querySelector('.img');
console.log(img);
function phones(phone){
    img.src = phone;
}

let container = document.querySelector('.container'); 
console.log(container)
function color(colors){

    container.style.backgroundColor = colors;

}

const h2 = document.getElementById("h2");
h2.addEventListener("mouseover",function(){
    h2.style.color = "#bf9e32";
    
})

const h = document.getElementById("h2");
h.addEventListener("mouseout",function(){
    h.style.color = "#fff";
})
