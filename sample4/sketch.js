let boatX = 0; // 배의 위치

function setup() {
  createCanvas(600, 400);
}

function draw() {
  // 배경 색상 변화
  let timeVal = frameCount * 0.004; 
  let cycle = (sin(timeVal - 1.5708) + 1) / 2; // 0에서 1까지 반복되는 주기
  
  let bgColor;
  if (cycle < 0.5) {
    bgColor = lerpColor(color('#a0e7fd'), color('#fc5454'), cycle * 2);
  } else {
    bgColor = lerpColor(color('#fc5454'), color(0), (cycle - 0.5) * 2);
  }
  background(bgColor);

  // 해와 햇빛 투명도
  let sunAlpha = map(cycle, 0, 0.7, 255, 0, true);

  // 해와 햇빛
  if (sunAlpha > 0) {
    push();
    // 좌-우 이동
    let sunX = 550 - cycle * 700; 
    let sunY = 100;
    translate(sunX, sunY); // 해와 햇빛의 중심을 완전히 일치시킴

    // 햇빛 형태 변경
    fill(252, 244, 186, sunAlpha * 0.7); noStroke();
    
    push();
    rotate(frameCount * 0.01);
    for (let a = 0; a < TWO_PI; a += HALF_PI) { 
      push();
      rotate(a);
      triangle(-25, -50, 25, -50, 0, -90);
      pop();
    }
    pop();
    
    fill(254, 211, 184, sunAlpha * 0.6); circle(0, 0, 100);
    fill(254, 146, 107, sunAlpha * 0.8); circle(0, 0, 80);
    fill(255, 0, 0, sunAlpha); circle(0, 0, 50);
    pop();
    rectMode(CORNER);
  }

  // 바다
  let seaMove1 = sin(frameCount * 0.02) * 20;
  let seaMove2 = cos(frameCount * 0.02) * 15;
  let seaMove3 = sin(frameCount * 0.03) * 10;

  fill(52, 159, 253); noStroke();
  circle(0 + seaMove1, 400, 200); circle(150 + seaMove1, 400, 200); circle(300 + seaMove1, 400, 200); circle(450 + seaMove1, 400, 200); circle(600 + seaMove1, 400, 200);
  fill(1, 125, 233); circle(30 + seaMove2, 400, 130); circle(100 + seaMove2, 400, 130); circle(200 + seaMove2, 400, 130); circle(300 + seaMove2, 400, 130); circle(400 + seaMove2, 400, 130); circle(500 + seaMove2, 400, 130); circle(600 + seaMove2, 400, 130);
  fill(1, 47, 233); circle(60 + seaMove3, 400, 90); circle(140 + seaMove3, 400, 90); circle(220 + seaMove3, 400, 90); circle(300 + seaMove3, 400, 90); circle(380 + seaMove3, 400, 90); circle(460 + seaMove3, 400, 90); circle(540 + seaMove3, 400, 90); circle(600 + seaMove3, 400, 90);

  // 폭죽
  let fwAlpha = map(cycle, 0.2, 0.8, 0, 255, true); 

  if (fwAlpha > 0) {
    // 반짝임 변수 지정
    let p1 = sin(frameCount * 0.1) * 5;
    let p2 = cos(frameCount * 0.15) * 5;
    let p3 = sin(frameCount * 0.08) * 5;
    let p4 = cos(frameCount * 0.12) * 5;

    rectMode(CENTER);

    noStroke(); 
    fill(255, 165, 0, fwAlpha); 
    circle(300, 100, 20 + p1);  
    
    triangle(350, 150, 325, 125, 375, 150); ellipse(362, 150, 25 + p2, 25 + p2);
    triangle(250, 150, 275, 125, 225, 150); ellipse(238, 150, 25 + p3, 25 + p3); 
    triangle(250, 50, 275, 75, 225, 50); ellipse(237, 46, 25 + p4, 25 + p4);
    triangle(350, 50, 325, 75, 375, 50); ellipse(362, 50, 25 + p1, 25 + p1);
    
    strokeWeight(2); 
    stroke(248, 254, 82, fwAlpha); 

    line(250, 100, 200 - p1, 100); line(300, 50, 300, 0 - p2);
    line(350, 100, 400 + p3, 100); line(300, 150, 300, 200 + p4);
    strokeWeight(1); 
    
    noStroke(); 
    fill(252, 84, 84, fwAlpha); 

    quad(200, 70 - p1, 175 - p1, 75, 200, 80 + p1, 225 + p1, 75); 
    quad(400, 70 - p2, 375 - p2, 75, 400, 80 + p2, 425 + p2, 75);
    quad(250, 175 - p3, 250, 190, 225 - p3, 200, 225, 185 + p3); 
    quad(350, 175 - p4, 350, 190, 375 + p4, 200, 375, 185 + p4);
    
    noStroke(); 
    fill(250, 193, 162, fwAlpha); 
    triangle(275, 25, 260, 15, 275, 10);
    fill(252, 121, 119, fwAlpha); 
    triangle(325, 35, 330, 35, 325, 10);
    triangle(220, 125, 225, 125, 210, 150);
    fill(249, 243, 138, fwAlpha); 
    triangle(380, 125, 385, 125, 400, 150);
    fill(253, 230, 226, fwAlpha); 
    triangle(275, 175, 285, 175, 280, 200);
    fill(253, 223, 195, fwAlpha); 
    triangle(325, 175, 335, 175, 350, 200);
    
    noStroke(); 
    fill(248, 254, 82, fwAlpha); 
    square(205, 205, 10 + p1); square(405, 205, 10 + p2); square(305, 235, 10 + p3);
    square(155, 125, 10 + p4); square(455, 115, 10 + p1); square(145, 45, 10 + p2);
    square(205, 15, 10 + p3); square(425, 15, 10 + p4);
    
    stroke(251, 246, 238, fwAlpha); 
    strokeWeight(8 + p1); point(190, 120); 
    strokeWeight(8 + p2); point(150, 80); point(170, 40);
    strokeWeight(8 + p3); point(265, 210); point(180, 190); 
    strokeWeight(8 + p4); point(220, 160); point(350, 120); 
    strokeWeight(8 + p1); point(390, 200); point(420, 150);
    strokeWeight(8 + p2); point(350, 10); point(400, 30); point(440, 60);
    
    rectMode(CORNER);
    strokeWeight(1);
  }
boatX = ((frameCount * 0.5) % 800) - 150; 
  let totalBoatX = boatX + seaMove1;
  push();
  translate(totalBoatX, 0);
  
  // 배
  colorMode(RGB);
  
  let cleanSail = color(255, 255, 255); // 새 돛
  let oldSail = color(70, 70, 70);      // 낡은 돛
  let ageAmount = (frameCount % 1600) / 1600; 
  let baseColor = lerpColor(cleanSail, oldSail, ageAmount);
  let stain = random(-30, 10) * ageAmount; 
  
  strokeWeight(1); noStroke(); 
  fill(red(baseColor) + stain, green(baseColor) + stain, blue(baseColor) + stain); 
  triangle(75, 195, 125, 245, 75, 295); 
  fill('#bb812a'); quad(0, 295, 50, 345, 100, 345, 150, 295);
  fill('#9e6d22'); quad(25, 295, 25, 320, 75, 320, 75, 295);
  fill('#80591d'); rectMode(CENTER); rect(90, 331, 25, 25);
  pop();
}
  // gif 저장
function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 25);
  }
}