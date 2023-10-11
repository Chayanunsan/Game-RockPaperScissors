// สร้างตัวเลือกสำหรับการเล่มเกมส์ โดยเก็บในรูปแบบ Array
let choices = ["rock", "paper", "scissors"];

// สร้างเทิร์นของคู่ต่อสู้ โดยจะให้สุ่มตัวเลขใน Array ที่เก็บตัวเลือกของเรา
let opponentchoice = () => {
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// ฟังก์ชั่นสำหรับตรวจสอบผลลัพท์
let checkResult = (mychoice, opponentchoice) => {
    if (mychoice === opponentchoice) {
        return "เสมอ";
    } else if (
        (mychoice === 'rock' && opponentchoice === 'scissors') || 
        (mychoice === 'scissors' && opponentchoice === 'paper') || 
        (mychoice === 'paper' && opponentchoice === 'rock')
    ) {
        return "คุณชนะ!";
    } else {
        return "คุณแพ้!";
        }
}

//ฟังก์ชั่นสำหรับเลือกภาพ
function displayComputerChoiceImage(choice) {
    var imgSrc = "img/" + choice + ".svg"; // ตั้งชื่อไฟล์รูปภาพตามต้องการ
    document.getElementById("opponent-choice-img").src = imgSrc;
    document.getElementById("opponent-choice-img").style.display = "block";
}


// ฟังก์ชันสำหรับเล่นเกม
function playGame(mychoice) {
    var opponent = opponentchoice();
    var result = checkResult(mychoice, opponent);
    var txtresult = document.getElementById('txtresult');
    txtresult.innerHTML = result; //แสดงผลลัพท์
    displayComputerChoiceImage(opponent);
}