var box1 = document.getElementById("box1")
var box2 = document.getElementById("box2")
var box3 = document.getElementById("box3")
var box4 = document.getElementById("box4")
var box5 = document.getElementById("box5")
var box6 = document.getElementById("box6")
var box7 = document.getElementById("box7")
var box8 = document.getElementById("box8")
var box9 = document.getElementById("box9")

var count = 1

var count1 = 1
var count2 = 1
var count3 = 1
var count4 = 1
var count5 = 1
var count6 = 1
var count7 = 1
var count8 = 1
var count9 = 1

var checkCount = 0

box1.addEventListener('click', function () {
    if (count1 == 1) {
        if (count == 1) {
            box1.innerHTML = "X"
            //console.log(box1)
            count++
        } else if (count % 2 == 0) {
            box1.innerHTML = "O"
            count--
        }
        count1++
    }
checkCount++
check()

})
box2.addEventListener('click', function () {

    if (count2 == 1) {
        if (count == 1) {
            box2.innerHTML = "X"
            console.log(box2)
            count++
        } else if (count % 2 == 0) {
            box2.innerHTML = "O"
            count--
        }
        count2++
    }
checkCount++
 check()
})

box3.addEventListener('click', function () {

    if (count3 == 1) {
        if (count == 1) {
            box3.innerHTML = "X"
            console.log(box3)
            count++
        } else if (count % 2 == 0) {
            box3.innerHTML = "O"
            count--
        }
        count3++
    }
checkCount++
check()
})
box4.addEventListener('click', function () {

    if (count4 == 1) {
        if (count == 1) {
            box4.innerHTML = "X"
            console.log(box4)
            count++
        } else if (count % 2 == 0) {
            box4.innerHTML = "O"
            count--
        }
        count4++
    }
    checkCount++
    check()
})
box5.addEventListener('click', function () {

    if (count5 == 1) {

        if (count == 1) {
            box5.innerHTML = "X"
            console.log(box4)
            count++
        } else if (count % 2 == 0) {
            box5.innerHTML = "O"
            count--
        }
        count5++
    }
    checkCount++
    check()
})
box6.addEventListener('click', function () {

    if (count6 == 1) {
        if (count == 1) {
            box6.innerHTML = "X"
            console.log(box4)
            count++
        } else if (count % 2 == 0) {
            box6.innerHTML = "O"
            count--
        }
        count6++
    }
    checkCount++
    check()
})
box7.addEventListener('click', function () {

    if (count7 == 1) {
        if (count == 1) {
            box7.innerHTML = "X"
            console.log(box4)
            count++
        } else if (count % 2 == 0) {
            box7.innerHTML = "O"
            count++
        }
        count7++
    }
checkCount++
check()
})
box8.addEventListener('click', function () {
    if (count8 == 1) {
        if (count == 1) {
            box8.innerHTML = "X"
            console.log(box4)
            count++
        } else if (count % 2 == 0) {
            box8.innerHTML = "O"
            count--
        }
        count8++
    }
checkCount++
check()
})
box9.addEventListener('click', function () {
    if (count9 == 1) {
        if (count == 1) {
            box9.innerHTML = "X"
            console.log(box4)
            count++
            
        } else if (count % 2 == 0) {
            box9.innerHTML = "O"
            count--
        }
        count9++
    }
checkCount++
check()
})

function check() {

    var out = document.getElementById("output")

if(box1.textContent=='X' && box2.textContent=='X' && box3.textContent=='X' || box4.textContent=='X' && box5.textContent=='X' && box6.textContent=='X' ||
box7.textContent=='X' && box8.textContent=='X' && box9.textContent=='X' || box1.textContent=='X' && box4.textContent=='X' && box7.textContent=='X' ||
box3.textContent=='X' && box6.textContent=='X' && box9.textContent=='X' || box2.textContent=='X' && box5.textContent=='X' && box8.textContent=='X' ||
box1.textContent=='X' && box5.textContent=='X' && box9.textContent=='X' ||box3.textContent=='X' && box5.textContent=='X' && box7.textContent=='X' ) {
    
    out.textContent = "Player1 won"
}
else if(box1.textContent=='O' && box2.textContent=='O' && box3.textContent=='O' || box4.textContent=='O' && box5.textContent=='O' && box6.textContent=='O' ||
box7.textContent=='O' && box8.textContent=='O' && box9.textContent=='O' || box1.textContent=='O' && box4.textContent=='O' && box7.textContent=='O' ||
box3.textContent=='O' && box6.textContent=='O' && box9.textContent=='O' || box2.textContent=='O' && box5.textContent=='O' && box8.textContent=='O' ||
box1.textContent=='O' && box5.textContent=='O' && box9.textContent=='O' ||box3.textContent=='O' && box5.textContent=='O' && box7.textContent=='O' ) {
    
    out.textContent = "Player2 won"
}else if(checkCount >=9) {
    out.textContent="DRAW"
}
}