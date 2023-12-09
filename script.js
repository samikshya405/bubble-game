const hit = document.querySelector(".hit-1")
const timer = document.querySelector(".time-1")
const score = document.querySelector(".score-1")
// const bubble = document.querySelector(".bubble")
const screen = document.querySelector(".bottom")

let s=0
score.innerHTML=s
const createBubble=()=>{
    for(let i = 0;i<176;i++){
        const circle =document.createElement('div');
        screen.appendChild(circle)
        circle.setAttribute('class', 'bubble')
        circle.innerHTML =Math.floor(Math.random()*50)
    }

}
createBubble()


let num=0
const hitnumber =()=>{
    num = Math.floor(Math.random()*50)
    hit.innerHTML = Number(num)

}
hitnumber()
let timeNum=60;

const f=()=>{
    if(timeNum>=0){
        timer.innerHTML=timeNum
        timeNum--
    }
    else{
        screen.innerHTML="Game Over!"
        
    }
}
setInterval(f,1000)
// setInterval()
screen.addEventListener('click',(b)=>{
    let a=b.target.innerHTML
    if(Number(a)===num){
        s = s+10
        score.innerHTML=s
        hitnumber()
        

    }
     
 
 })

