function setup() {
  createCanvas(600, 400);
}
function draw(){
  background('#a0e7fd');
  //햇빛
  fill(252,244,186,150);noStroke();
  rect(450,0,50,50);rect(450,50,50,50);rect(500,100,50,50);rect(550,100,50,50);
  rect(500,0,50,50);rect(500,50,50,50);rect(550,0,50,50);rect(550,50,50,50);
  fill('#a0e7fd');noStroke();arc(450,0,100,100,radians(0),radians(90));
  arc(450,100,100,100,radians(270),radians(0));
  arc(500,150,100,100,radians(270),radians(0));
  arc(600,150,100,100,radians(180),radians(270));
  //해
  fill(254,211,184,150); noStroke(); circle(550,50,100);
  fill(254,146,107,200);noStroke();circle(550,50,80);
  fill(255,0,0,250);noStroke();circle(550,50,50);

  //바다
  fill(52,159,253);noStroke();
  circle(0,400,200);circle(150,400,200);circle(300,400,200);
  circle(450,400,200);circle(600,400,200);
  
  fill(1,125,233);noStroke();
  circle(30,400,130);circle(100,400,130);circle(200,400,130);circle(300,400,130);
  circle(400,400,130);circle(500,400,130);circle(600,400,130);
  
    fill(1,47,233);noStroke();
  circle(60,400,90);circle(140,400,90);circle(220,400,90);circle(300,400,90);
  circle(380,400,90);circle(460,400,90);circle(540,400,90);circle(600,400,90);
  
  // 폭죽
 noStroke();fill("#ffa500");circle(300,100,20);  triangle(350,150,325,125,375,150);ellipse(362,150,25,25);
  triangle(250,150,275,125,225,150);ellipse(238,150,25,25); 
  triangle(250,50,275,75,225,50);ellipse(237,46,25,25);
  triangle(350,50,325,75,375,50);ellipse(362,50,25,25);
  strokeWeight(2);stroke("#f8fe52");line(250,100,200,100);line(300,50,300,0);
  line(350,100,400,100);line(300,150,300,200);
  strokeWeight(1); // 햇빛에 영향가지 않도록
  
  noStroke();fill('#fc5454');
  quad(200,70,175,75,200,80,225,75);quad(400,70,375,75,400,80,425,75);
  quad(250,175,250,190,225,200,225,185);quad(350,175,350,190,375,200,375,185);
  
  noStroke();fill('#fac1a2');triangle(275,25,260,15,275,10);
  fill('#fc7977');triangle(325,35,330,35,325,10);
  fill('#fc7977');triangle(220,125,225,125,210,150);
  fill('#f9f38a');triangle(380,125,385,125,400,150);
  fill('#fde6e2');triangle(275,175,285,175,280,200);
  fill('#fddfc3');triangle(325,175,335,175,350,200);
  
  noStroke();fill('#f8fe52');
  square(200,200,10);square(400,200,10);square(300,230,10);
  square(150,120,10);square(450,110,10);square(140,40,10);
  square(200,10,10);square(420,10,10);
  
  stroke('#fbf6ee');strokeWeight(8);
  point(190,120);point(150,80);point(170,40);
  point(265,210);point(180,190);point(220,160);
  point(350,120);point(390,200);point(420,150);
  point(350,10);point(400,30);point(440,60);
  
  strokeWeight(1);//햇빛에 영향가지 않도록
  
  //배
  noStroke();fill(255,255,255);triangle(75,195,125,245,75,295);
  fill('#bb812a');quad(0,295,50,345,100,345,150,295);
  fill('#9e6d22');quad(25,295,25,320,75,320,75,295);
  fill('#80591d');rectMode(CENTER);rect(90,331,25,25);
  rectMode(CORNER); // 햇빛에 영향가지 않도록
  
}