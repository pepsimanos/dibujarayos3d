var winWidth = 1200, winHeight = 600;

var mW = 10, mH = 10, mS =60;

var map = [
  '#','#','#','#','#','#','#','#','#','#',
  '#','&','&','&','&','&','&','&','&','#',
  '#','&','#','#','#','#','#','#','&','#',
  '#','&','#','&','&','&','&','#','&','#',
  '#','&','#','&','#','#','&','#','&','#',
  '#','&','#','#','#','#','&','#','&','#',
  '#','&','&','&','&','&','&','#','&','#',
  '#','#','#','#','#','#','#','#','&','#',
  '#','&','&','&','&','&','&','&','&','#',
  '#','#','#','#','#','#','#','#','#','#'
];

function preload(){
}

function setup(){
  createCanvas(winWidth,winHeight);
}

function drawMap(){
  var w, h, wo, ho;
  for(w = 0; w < mW; w++){
    for(h = 0; h < mH; h++){
      if(map[h*mW+w]=='#'){
        fill(color('#FFFFFF'));
      } else {
        fill(color('#000000'));
      }
      wo = w * mS, ho = h * mS;
      beginShape(QUADS);
      vertex(wo   , ho   );
      vertex(wo   , ho+mS);
      vertex(wo+mS, ho+mS);
      vertex(wo+mS, ho   );
      endShape();
    }
  }
}

function draw() {
  background(color('#AFCCFF'));
  drawMap();
  drawSprites();
}