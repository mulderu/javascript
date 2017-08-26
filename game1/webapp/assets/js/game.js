var gi = {
  pansize: {w:1200, h:800},
  moveInterval : 300,
  moveOffset: 100,
  moveTimer: null,
  enemy: {
    size: {w: 80, h:80},
    list:[],
    total: 50
  }
};

function random(n_max) {
  return Math.round(Math.random()*10000) % n_max;
}

function enemy() {
  this.alive = true;
  this.top = random(gi.pansize.h - gi.enemy.size.h); 
  this.left = random(gi.pansize.w - gi.enemy.size.w);  
  this.color = "rgb("+random(256)+","+random(256)+","+random(256)+")";
  this.box = $('<div class="enemy">☺</div>').css({color: this.color})
              .css({"font-size": (gi.enemy.size.w-1) + "px"});

  this.sayHello = function() {

  }

  var aaa  = 0;
  bbb = 0;

}

enemy.prototype.addToGame = function() { 
  this.box.css({top: this.top, left: this.left});
  this.box.appendTo($('#gamepan'));
}

enemy.prototype.moveNext = function() {
  this.top += random(gi.moveOffset) - (gi.moveOffset/2);
  this.left += random(gi.moveOffset) - (gi.moveOffset/2);

  this.top = this.top<0 ? 0 : this.top;
  this.left = this.left<0 ? 0 : this.left;

  var esize = gi.enemy.size;
  this.top = gi.pansize.h<this.top+esize.h ? gi.pansize.h - esize.h : this.top;
  this.left = gi.pansize.w<this.left+esize.w ? gi.pansize.w - esize.w : this.left;
  
  this.box.css({top: this.top, left: this.left});
  //console.log(this.top, this.left);
}

function makeEnemy () {
  for(var i=0; i<gi.enemy.total; i++) {
    var eny =new enemy();
    eny.addToGame();
    gi.enemy.list.push(eny); 
  }
}

function runEnemy () {
    gi.moveTimer = setInterval(function() {
        gi.enemy.list.forEach(function(e) { e.moveNext(); });
    }, gi.moveInterval);
}

function initGame () {
  $('#gamepan').width(gi.pansize.w).height(gi.pansize.h);
  makeEnemy();
  runEnemy();
}

$(document).ready(function() {
  
  $('body').append("<h1>hi Mulder</h1>");
  initGame();
  
});

function gameStop () {
  if(gi.moveTimer){
      clearInterval(gi.moveTimer);
      gi.moveTimer = null;
  } else {
      runEnemy();
  }

}