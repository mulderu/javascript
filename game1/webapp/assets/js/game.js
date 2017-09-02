var gi = {
  pansize: { w: 1200, h: 800 },
  moveInterval: 1000,  // 적들이 움직이는 시간간격.
  moveOffset: 100,
  moveTimer: null,
  enemy: {
    size: { w: 40, h: 40 },
    list: [],
    total: 40
  },
  cellWidth: 1.2
  
};

function random(n_max) {
  return Math.round(Math.random() * n_max);
}

function enemy() {
  this.id = gi.enemy.list.length; // id 
  this.alive = true;

  var cellCnt = Math.floor((gi.pansize.w - gi.enemy.size.w) / (gi.enemy.size.w * gi.cellWidth));
  var cellWidth = gi.enemy.size.w * gi.cellWidth;

  this.top = gi.enemy.size.h / 2 + Math.floor(gi.enemy.list.length / cellCnt) * gi.enemy.size.h * gi.cellWidth;
  this.left = gi.enemy.size.w / 2 + Math.floor(gi.enemy.list.length % cellCnt) * gi.enemy.size.w * gi.cellWidth;

  this.color = "rgb(" + random(256) + "," + random(256) + "," + random(256) + ")";
  this.box = $('<div class="enemy">☺</div>').css({ color: this.color })
    //this.box = $('<div class="enemy"><span style="font-size:25px;">'+gi.enemy.list.length+'</span></div>').css({color: this.color})
    .css({ "font-size": (gi.enemy.size.w - 1) + "px" });

  // 파라미터박스에 중첨된 (충돌된) bbox를 리턴함.
  this.checkBBoxOvered = function (me) {
    var gsize = gi.enemy.size;
    return gi.enemy.list.filter(function (ot) {
      if (!ot.alive || me.id == ot.id) return false;
      else {
        var d = distanceFromTwoPoint({ x: me.left, y: me.top }, { x: ot.left, y: ot.top });
        return d <= gsize.w;
      }
    });
  }

  this.addToGame = function () {
    this.box.css({ top: this.top, left: this.left });
    this.box.appendTo($('#gamepan'));
  }

  this.moveNext = function () {
    var old = {};

    old.top = this.top;
    old.left = this.left;

    var ok = false, idx = 0;
    while (!ok && ++idx < 10) {
      this.top += random(gi.moveOffset) - (gi.moveOffset / 2);
      this.left += random(gi.moveOffset) - (gi.moveOffset / 2);

      this.top = this.top < 0 ? 0 : this.top;
      this.left = this.left < 0 ? 0 : this.left;

      var esize = gi.enemy.size;
      this.top = gi.pansize.h < this.top + esize.h ? gi.pansize.h - esize.h * 1.5 : this.top;
      this.left = gi.pansize.w < this.left + esize.w ? gi.pansize.w - esize.w * 1.5 : this.left;

      ok = this.checkBBoxOvered(this).length == 0;
    }

    if (!ok) {
      this.top = old.top;
      this.left = old.left;
    }
    this.box.css({ top: this.top, left: this.left });
  }

}

function distanceFromTwoPoint(p1, p2) {
  return Math.round(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
}

function makeEnemy() {
  for (var i = 0; i < gi.enemy.total; i++) {
    var eny = new enemy();
    eny.addToGame();
    gi.enemy.list.push(eny);
  }
}

function runEnemy() {
  gi.moveTimer = setInterval(function () {
    gi.enemy.list.forEach(function (e) { e.moveNext(); });
  }, gi.moveInterval);
}

function initGame() {
  $('#gamepan').width(gi.pansize.w).height(gi.pansize.h);
  makeEnemy();
  runEnemy();
}

$(document).ready(function () {

  $('body').append("<h1>hi Mulder</h1>");
  initGame();

});

function gameStop() {
  if (gi.moveTimer) {
    clearInterval(gi.moveTimer);
    gi.moveTimer = null;
  } else {
    runEnemy();
  }

}