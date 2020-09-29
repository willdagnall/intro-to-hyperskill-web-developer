document.addEventListener("keydown", function(event) {
    if (event.keyCode === 65 || event.keyCode === 97) {
        console.log("The 'A' key is pressed.")
        let audio = new Audio("A.mp3")
        audio.play()
    }
    else if (event.key === 's') {
        console.log("The 'S' key is pressed.")
        let audio = new Audio("S.mp3")
        audio.play()
    }
    else if (event.key === 'd') {
        console.log("The 'D' key is pressed.")
        let audio = new Audio("D.mp3")
        audio.play()
    }
    else if (event.key === 'f') {
        console.log("The 'F' key is pressed.")
        let audio = new Audio("F.mp3")
        audio.play()
    }
    else if (event.key === 'g') {
        console.log("The 'G' key is pressed.")
        let audio = new Audio("G.mp3")
        audio.play()
    }
    else if (event.key === 'h') {
        console.log("The 'H' key is pressed.")
        let audio = new Audio("H.mp3")
        audio.play()
    }
     else if (event.key === 'j') {
        console.log("The 'J' key is pressed.")
        let audio = new Audio("J.mp3")
        audio.play()
    }
     else if (event.key === 'w') {
        console.log("The 'W' key is pressed.")
        let audio = new Audio("W.mp3")
        audio.play()
    }
    else if (event.key === 'e') {
        console.log("The 'E' key is pressed.")
        let audio = new Audio("E.mp3")
        audio.play()
    }
    else if (event.key === 't') {
        console.log("The 'T' key is pressed.")
        let audio = new Audio("T.mp3")
        audio.play()
    }
    else if (event.key === 'y') {
        console.log("The 'Y' key is pressed.")
        let audio = new Audio("Y.mp3")
        audio.play()
    }
    else if (event.key === 'u') {
        console.log("The 'U' key is pressed.")
        let audio = new Audio("U.mp3")
        audio.play()
    } else {
        console.log("That is not an acceptable key!")
    }
});