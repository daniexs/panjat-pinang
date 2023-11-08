const buttonStart = document.querySelector(".pushable");
const buttonReset = document.querySelector(".pushable2");


const homePage = document.querySelector('.home');
const gamePage = document.querySelector('.game');
const body = document.querySelector('body');
const winner = document.querySelector('.winner');
const spanWinnerResult = document.querySelector('.winner-result');
const plyvid = document.querySelector(".vidwinresult")
const count = document.querySelector("#countdown")
const audioo = document.querySelector(".auuu")

var timeleft = 5;


buttonStart.addEventListener('click', () => {
    count.style.display = 'block'
    var downloadTimer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "MULAII";
            homePage.style.display = 'none';
            count.style.display = 'none'
            gamePage.style.display = 'block';
            body.addEventListener('keydown', event => {
                if (event.keyCode === 77) {
                    playSound("sound1.mp3")
                    let awal = document.querySelector(".img2").style.top
                    let numb = awal.replace(/\D+/g, "")
                    let a = (-numb)
                    if (a < (-480)) {
                        gamePage.style.display = 'none';
                        spanWinnerResult.innerText = 'Red Team Win';
                        spanWinnerResult.style.color = 'red';
                        winner.style.display = 'block';
                        plyvid.controls = "true"
                    } else {
                        a += (-15)
                    }
                    let hasil = a.toString() + "px"
                    document.querySelector(".img2").style.top = hasil
                }
                if (event.keyCode === 90) {
                    playSound("sound2.mp3")
                    let awal = document.querySelector(".img3").style.top
                    let numb = awal.replace(/\D+/g, "")
                    let a = (-numb)
                    if (a < (-620)) {
                        gamePage.style.display = 'none';
                        spanWinnerResult.innerText = 'Blue Team Win';
                        spanWinnerResult.style.color = 'blue';
                        winner.style.display = 'block';
                    } else {
                        a += (-15)
                    }
                    let hasil = a.toString() + "px"
                    document.querySelector(".img3").style.top = hasil
                }
            })
        } else {
          document.getElementById("countdown").innerHTML = timeleft + " detik";
        }
        timeleft -= 1;
    }, 1000);
    if (timeleft <= 0) {
        
    }
    

})

buttonReset.addEventListener('click', () => {
    location.reload();

})

function playSound(params){
    let audio = new Audio(params)
    audio.loop = false
    audio.play()
}

function int(params) {
    var timeleft = params;
    var downloadTimer = setInterval(function(){
    if(timeleft <= 0){
        clearInterval(downloadTimer);
    }
    timeleft -= 15;
    }, 500);
}


// aaaa.addEventListener("click", function() {
//     let awal = document.querySelector(".img2").style.top
//     let numb = awal.replace(/\D+/g, "")
//     let a = (-numb)
//     console.log("ss")
//     a += (-15)
//     if (a < (-480)) {
//         alert("menaang")
//     }
//     let hasil = a.toString()+"px"
//     document.querySelector(".img2").style.top = hasil
//     }
// )