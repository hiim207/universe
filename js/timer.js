// 소멘텀 메인에 뜨는 시계

//시간
const clock = document.getElementById("clock");

function getClock(){
    const date = new Date();
    clock.innerText = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
}

getClock();
setInterval(getClock, 1000);