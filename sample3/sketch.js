let browY = 90;      // 눈썹 
let mouthH = 30;     // 입 웃음
let blinkCount = 0;  // 눈 깜빡임
let bookAngle = 0;   // 책 열림

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255);
  noStroke();
  
  // 마우스와 얼굴 거리
  if (dist(mouseX, mouseY, 300, 140) < 150) {
    browY = 82;   // 눈썹올라감
    mouthH = 55;  // 입 커짐
  } else {
    browY = 90;   // 기본 눈썹
    mouthH = 30;  // 기본 입
  }

  // 눈깜빡임
  if (mouseIsPressed) {
    blinkCount = 2; 
  } else if (blinkCount > 0) {
    blinkCount--; 
  }

  // 책 열림
  if (keyIsPressed && (key === 'o' || key === 'O')) {
    if (bookAngle < PI) bookAngle += 0.1;
  } else {
    if (bookAngle > 0) bookAngle -= 0.1;
  }

  // 뒷머리
  fill(30); 
  rect(180, 40, 240, 360, 80);
  ellipse(300, 95, 240, 230);

  //목
  fill("#ffdcc8"); 
  rect(270, 230, 60, 100, 20);

  //옷
  fill("#fdfdc3"); 
  rect(200, 300, 200, 300, 20);

  // 셔츠 깃,목2
  fill(255); 
  triangle(270, 300, 300, 340, 240, 340); triangle(330, 300, 300, 340, 360, 340);
  fill("#ffdcc8"); triangle(270, 300, 300, 340, 330, 300);
  //목걸이
  stroke(180); strokeWeight(2); noFill();
  arc(300, 301, 90, 140, 0, PI);
  noStroke(); fill(200); ellipse(300, 375, 10, 12);

  //귀
  fill("#ffdcc8"); 
  ellipse(195, 150, 30, 45); // 왼쪽
  ellipse(405, 150, 30, 45); // 오른쪽

  //귀걸이
  noFill(); stroke(255, 215, 0); strokeWeight(4); 
  circle(195, 175, 15); // 왼쪽
  circle(405, 175, 15); // 오른쪽

  //얼굴
  noStroke(); fill("#ffdcc8"); 
  ellipse(300, 140, 220, 260);

  //눈썹
  noFill(); stroke("#78503c"); strokeWeight(7); 
  strokeCap(ROUND);
  arc(255, browY, 50, 20, PI, TWO_PI); // 왼쪽
  arc(345, browY, 50, 20, PI, TWO_PI); // 오른쪽
  //눈
  noStroke(); 
  fill(255); //흰색 눈동자
  ellipse(253, 130, 50, 25); //왼쪽
  ellipse(347, 130, 50, 25); //오른쪽
  fill(50); //검은 눈동자
  circle(253, 130, 20); // 왼쪽
  circle(347, 130, 20); // 오른쪽
  fill(255); //안광
  circle(248, 125, 5); //왼쪽
  circle(342, 125, 5); //오른쪽

  // 눈 깜빡임
  if (blinkCount > 0) {
    noStroke(); 
    fill("#ffdcc8"); 
    rect(220, 115, 65, 35); 
    rect(315, 115, 65, 35);

    //눈꺼풀
    stroke(50); strokeWeight(3); noFill();
    arc(253, 135, 50, 20, 0, PI); //왼쪽
    arc(347, 135, 50, 20, 0, PI); //오른쪽
  }

  // 코
  stroke("#967864"); strokeWeight(2); 
  line(300, 140, 295, 180); 
  line(295, 180, 305, 180);

  //입
  noStroke(); fill("#ff9696"); arc(300, 210, 60, mouthH, 0, PI);

  //안경
  noFill(); stroke(50); strokeWeight(4); 
  circle(253, 130, 65); //왼쪽
  circle(347, 130, 65); //오른쪽
  line(285, 130, 315, 130); //안경테 가운데
  line(220, 130, 190, 125); //안경테 왼쪽
  line(380, 130, 415, 125); //안경테 l

  //책
  let bx = 420, by = 260, bw = 100, bh = 120;

  // 책 속지
  stroke(0); strokeWeight(2); fill(255); 
  rect(bx, by, bw, bh); 
  stroke(220); strokeWeight(1);
  for (let i = by + 20; i < by + bh; i += 15) {
    line(bx + 10, i, bx + bw - 10, i);
  }

  //책 표지
  push();translate(bx, by + bh/2);let sX = cos(bookAngle); scale(sX, 1);

  if (sX > 0) { //앞면 표지
    stroke(0); strokeWeight(2); fill("#558c32"); 
    rect(0, -bh/2, bw, bh);
    fill(255); noStroke(); 
    rect(10, -bh/2 + 20, 80, 35); //제목 칸
  } else { //뒷면 표지
    stroke(0); strokeWeight(2); fill("#3e6324"); 
    rect(0, -bh/2, bw, bh);
  }
  pop();

  // 손(책이 닫혀있을 때만 표시)
  if (sX > 0) {
    noStroke(); 
    fill("#ffdcc8"); 
    ellipse(415, 340, 50, 50);
  }

  //움직이는 해
  push();
  translate(mouseX, mouseY);
  scale(0.6); 

  //햇빛
  fill(252, 244, 186, 150); noStroke();
  triangle(0, -115, -45, -35, 45, -35);
  triangle(110, -35, 25, -55, 45, 25);
  triangle(70, 95, 45, 5, -20, 55);
  triangle(-70, 95, -45, 5, 20, 55);
  triangle(-110, -35, -25, -55, -45, 25);

  //해
  fill(254, 211, 184, 150); circle(0, 0, 110);
  fill(254, 146, 107, 200); circle(0, 0, 85);
  fill(255, 0, 0, 250); circle(0, 0, 60);
  pop();
}
function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 10);
  }
}