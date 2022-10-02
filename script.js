// 1. 최대 숫자 받기
let maximum = parseInt(prompt("최대 숫자를 입력해주세요."));

// 2. 입력값이 숫자가 아닐 시 경고창 띄우기
while(!maximum){
    maximum = parseInt(prompt("정확한 값을 입력해주세요."));
}

// 3. 입력값이 너무 높을 때 경고창 띄우기
while(maximum > 100){
   let warning = confirm("당신은 소중한 하루를 숫자맞추기에만 쓸 예정입니다. 계속 하시겠습니까?");
   if(warning === true){
    break;
   }else if(warning === false){
    maximum = parseInt(prompt("작은 숫자로 다시 입력하세요."));
   }
}

//4. 랜덤숫자 만들기
let randomNum = Math.floor(Math.random()*maximum);

//5. 예측숫자 받기
let guess = prompt("예측한 숫자를 입력해주세요.")
let attempts = 1

// 6.parseInt 로 값을 받으면 quit 문자를 받을 수 없으니 prompt로 받은 후 값 비교할 때만 parseInt로 바꾸기

while(parseInt(guess) !== randomNum) {

    guess = prompt("틀렸습니다. 숫자를 다시 입력해주세요.");
    attempts += 1;
    
    if(guess == "그만할래요") {
        alert("수고하셧습니다.")
    }else if(parseInt(guess) === randomNum){
        break;
    }
}

let end = alert(`정답! 시도한 횟수 : ${attempts} 회`)