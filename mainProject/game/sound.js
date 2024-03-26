const usualAudio=new Audio('shooting-sound-fx-159024.mp3')

function usualPlay() {
    usualAudio.play()
    window.navigator.vibrate(200);
}
