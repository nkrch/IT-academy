const gameField = document.getElementById("gameField");
const main=document.getElementsByTagName('main')[0]
console.log(main)
console.log(gameField);
gameField.onpointerdown = console.log("a");
let upObj={
    type: 'noPrev',
    key: 'ArrowUp'
},downObj={
    type: 'noPrev',
    key: 'ArrowDown'
},leftObj={
    type: 'noPrev',
    key: 'ArrowLeft'
},rightObj={
    type: 'noPrev',
    key: 'ArrowRight'
};
let prevX = 0,
  prevY = 0,
  nowX = 0,
  nowY = 0;

function touchStart(event) {
  console.log("begin");
  prevX = event.clientX;
  prevY = event.clientY;
  console.log(event.clientX);
  console.log(event.clientY);
}

function touchMove(event) {
  console.log(event.clientX);
  console.log(event.clientY);
  nowX = event.clientX;
  nowY = event.clientY;
}
function touchEnd(event) {
  console.log(event);
  console.log(event.clientX);
  console.log(event.clientY);

  findTheWay()
}

function findTheWay(params) {
    let percentOfChange={
        x: (nowX-prevX),
        y: (nowY-prevY)
    }
console.log(percentOfChange)



    if (Math.abs(percentOfChange.x)>Math.abs(percentOfChange.y)) {
        if (percentOfChange.x<0) {
            console.log('left');
            
            onKey(leftObj)
        }
        else{
            console.log('right')
            onKey(rightObj)
        }
    }
    else{
        if (percentOfChange.y<0) {
            console.log('up')
            onKey(upObj)
        }
        else{
            console.log('down')
            onKey(downObj)
        }
    }
    prevX = 0,
  prevY = 0,
  nowX = 0,
  nowY = 0;


}