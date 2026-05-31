function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255);
  noStroke();

  // 뒷머리
  fill(30); 
  rect(180, 40, 240, 360, 80); 
  ellipse(300, 95, 240, 230);

  // 목 
  fill("#ffdcc8"); 
  rect(270, 230, 60, 100, 20);
  
  // 옷
  fill("#fdfdc3"); 
  rect(200, 300, 200, 300, 20);

  // 셔츠 깃,목2
  fill(255);
  triangle(270, 300, 300, 340, 240, 340);
  triangle(330, 300, 300, 340, 360, 340);
  fill("#ffdcc8"); 
  triangle(270, 300, 300, 340, 330, 300);

  // 목걸이
  stroke(180); strokeWeight(2); noFill();
  arc(300, 301, 90, 140, 0, PI);
  noStroke(); fill(200); ellipse(300, 375, 10, 12);

  // 귀
  fill("#ffdcc8");
  ellipse(195, 150, 30, 45); // 왼쪽
  ellipse(405, 150, 30, 45); // 오른쪽
  
  noFill();
  stroke(255, 215, 0); // 귀걸이
  strokeWeight(4);
  circle(195, 175, 15); // 왼쪽
  circle(405, 175, 15); // 오른쪽
  noStroke();
  
  // 얼굴
  fill("#ffdcc8"); 
  ellipse(300, 140, 220, 260);

  // 눈썹
  noFill(); stroke("#78503c"); strokeWeight(7); strokeCap(ROUND);
  arc(255, 90, 50, 20, PI, TWO_PI); // 왼쪽
  arc(345, 90, 50, 20, PI, TWO_PI); // 오른쪽

  // 눈
  noStroke();
  fill(255); // 흰색 눈동자
  ellipse(253, 130, 50, 25); // 왼쪽
  ellipse(347, 130, 50, 25); // 오른쪽
  fill(50); // 검은 눈동자
  circle(253, 130, 20); // 왼쪽
  circle(347, 130, 20); // 오른쪽
  fill(255); // 안광
  circle(248, 125, 5); // 왼쪽
  circle(342, 125, 5); // 오른쪽

  // 코
  stroke("#967864");
  strokeWeight(2);
  line(300, 140, 295, 180);
  line(295, 180, 305, 180);
  noStroke();

  // 입
  fill("#ff9696"); 
  arc(300, 210, 60, 30, 0, PI);

  // 안경
  noFill(); stroke(50); strokeWeight(4);
  circle(253, 130, 65); // 왼쪽
  circle(347, 130, 65); // 오른쪽
  line(285, 130, 315, 130); // 안경테 가운데
  line(220, 130, 190, 125); // 안경테 왼쪽
  line(380, 130, 415, 125); // 안경테 
  
  // 책
  stroke(0); strokeWeight(4); strokeJoin(ROUND); fill("#558c32");
  quad(420, 260, 520, 260, 535, 245, 435, 245); // 윗면
  quad(520, 260, 535, 245, 535, 365, 520, 380); // 옆면
  rect(420, 260, 100, 120); // 정면
  fill(255); // 책 디테일
  rect(430,280,80,35);

  // 손
  noStroke(); fill("#ffdcc8");
  ellipse(415, 340, 50, 50); 
}
