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

 

  function startup() {
    
    main.addEventListener("touchstart", handleStart);
    main.addEventListener("touchend", handleEnd);
    
    main.addEventListener("touchmove", handleMove);
    console.log("Initialized.");
  }
  function handleStart(evt) {
    evt.preventDefault();

    console.log("touchstart.");
    prevX=evt.touches[0].pageX
    prevY=evt.touches[0].pageY
    console.log(prevX)
    console.log(prevY)
    
  }

  document.addEventListener("DOMContentLoaded", startup);

  function handleMove(evt) {
    evt.preventDefault();
    console.log("touchmove.");
nowX=evt.touches[0].pageX
nowY=evt.touches[0].pageY
    console.log(nowX)
    console.log(nowY)
  }

  function handleEnd(evt) {
    evt.preventDefault();
    console.log("touchend");
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