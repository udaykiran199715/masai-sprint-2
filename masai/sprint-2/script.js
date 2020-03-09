var idlyQuantity = document.getElementById("idlyQuantity")
var idlyPrice = document.getElementById("idlyPrice")

var dosaQuantity = document.getElementById("dosaQuantity")
var dosaPrice = document.getElementById("dosaPrice")

var chapathiQuantity = document.getElementById("chapathiQuantity")
var chapathiPrice = document.getElementById("chapathiPrice")

var puriQuantity = document.getElementById("puriQuantity")
var puriPrice = document.getElementById("puriPrice")

var noodlesQuantity = document.getElementById("noodlesQuantity")
var noodlesPrice = document.getElementById("noodlesPrice")

var parathaQuantity = document.getElementById("parathaQuantity")
var parathaPrice = document.getElementById("parathaPrice")

function idly() {

    var bill = document.getElementById("bill")
    bill.setAttribute('class', 'add')

    //print the headings

    // var row1 = document.createElement('tr')
    // var col11 = document.createElement('td')
    // col11.textContent = "Item"
    // col11.style.color = "tomato"
    // col11.setAttribute('class','col')

    // var col12 = document.createElement('td')
    // col12.textContent = "QTY"
    // col12.style.color = "tomato"
    // col12.setAttribute('class','col')

    // var col13 = document.createElement('td')
    // col13.textContent = "Cost/plate"
    // col13.style.color = "tomato"
    // col13.setAttribute('class','col')

    // var col14 = document.createElement('td')
    // col14.textContent = "Price"
    // col14.style.color = "tomato"
    // col14.setAttribute('class','col')

    // row1.append(col11)
    // row1.append(col12)
    // row1.append(col13)
    // row1.append(col14)

    // bill.append(row1)


    //print idly

    var row2 = document.createElement('tr')
    var col2_1 = document.createElement('td')
    col2_1.textContent = "Idly"
    col2_1.setAttribute('class', 'col')

    var col2_2 = document.createElement('td')
    col2_2.textContent = idlyQuantity.value
    col2_2.setAttribute('class', 'col')

    var col2_3 = document.createElement('td')
    col2_3.textContent = idlyPrice.value
    col2_3.setAttribute('class', 'col')

    var col2_4 = document.createElement('td')
    col2_4.textContent = (idlyQuantity.value * idlyPrice.value)
    col2_4.setAttribute('class', 'col')

    row2.append(col2_1)
    row2.append(col2_2)
    row2.append(col2_3)
    row2.append(col2_4)

    bill.append(row2)


}


function dosa() {

    var row3 = document.createElement('tr')
    var col31 = document.createElement('td')
    col31.textContent = "Dosa"
    col31.setAttribute('class', 'col')

    var col32 = document.createElement('td')
    col32.textContent = dosaQuantity.value
    col32.setAttribute('class', 'col')

    var col33 = document.createElement('td')
    col33.textContent = dosaPrice.value
    col33.setAttribute('class', 'col')

    var col34 = document.createElement('td')
    col34.textContent = (dosaQuantity.value * dosaPrice.value)
    col34.setAttribute('class', 'col')

    row3.append(col31)
    row3.append(col32)
    row3.append(col33)
    row3.append(col34)

    bill.append(row3)


}

function chapathi() {

    var row4 = document.createElement('tr')
    var col41 = document.createElement('td')
    col41.textContent = "Chapathi"
    col41.setAttribute('class', 'col')

    var col42 = document.createElement('td')
    col42.textContent = chapathiQuantity.value
    col42.setAttribute('class', 'col')

    var col43 = document.createElement('td')
    col43.textContent = chapathiPrice.value
    col43.setAttribute('class', 'col')

    var col44 = document.createElement('td')
    col44.textContent = (chapathiQuantity.value * chapathiPrice.value)
    col44.setAttribute('class', 'col')

    row4.append(col41)
    row4.append(col42)
    row4.append(col43)
    row4.append(col44)

    bill.append(row4)


}

function puri() {

    var row5 = document.createElement('tr')
    var col51 = document.createElement('td')
    col51.textContent = "Puri"
    col51.setAttribute('class', 'col')

    var col52 = document.createElement('td')
    col52.textContent = puriQuantity.value
    col52.setAttribute('class', 'col')

    var col53 = document.createElement('td')
    col53.textContent = puriPrice.value
    col53.setAttribute('class', 'col')

    var col54 = document.createElement('td')
    col54.textContent = (puriQuantity.value * puriPrice.value)
    col54.setAttribute('class', 'col')

    row5.append(col51)
    row5.append(col52)
    row5.append(col53)
    row5.append(col54)

    bill.append(row5)

}

function noodles() {

    var row6 = document.createElement('tr')
    var col61 = document.createElement('td')
    col61.textContent = "Noodles"
    col61.setAttribute('class', 'col')

    var col62 = document.createElement('td')
    col62.textContent = noodlesQuantity.value
    col62.setAttribute('class', 'col')

    var col63 = document.createElement('td')
    col63.textContent = noodlesPrice.value
    col63.setAttribute('class', 'col')

    var col64 = document.createElement('td')
    col64.textContent = (noodlesQuantity.value * noodlesPrice.value)
    col64.setAttribute('class', 'col')

    row6.append(col61)
    row6.append(col62)
    row6.append(col63)
    row6.append(col64)

    bill.append(row6)

}

function paratha() {

    var row7 = document.createElement('tr')
    var col71 = document.createElement('td')
    col71.textContent = "Paratha"
    col71.setAttribute('class', 'col')

    var col72 = document.createElement('td')
    col72.textContent = parathaQuantity.value
    col72.setAttribute('class', 'col')

    var col73 = document.createElement('td')
    col73.textContent = parathaPrice.value
    col73.setAttribute('class', 'col')

    var col74 = document.createElement('td')
    col74.textContent = (parathaQuantity.value * parathaPrice.value)
    col74.setAttribute('class', 'col')

    row7.append(col71)
    row7.append(col72)
    row7.append(col73)
    row7.append(col74)

    bill.append(row7)

}



function total() {

    var num1 = idlyQuantity.value * idlyPrice.value

    var num2 = dosaQuantity.value * dosaPrice.value

    var num3 = chapathiQuantity.value * chapathiPrice.value

    var num4 = puriQuantity.value * puriPrice.value

    var num5 = noodlesQuantity.value * noodlesPrice.value

    var num6 = parathaQuantity.value * parathaPrice.value

    var sum = num1 + num2 + num3 + num4 + num5 + num6
    console.log(sum)

    // var sel = document.getElementById("sel").value
    // console.log(sel)

    var gst = sum + (sum * 5 / 100)
    console.log(gst)

    var bill = document.getElementById("bill")
    bill.setAttribute('class', 'add')

    var row8 = document.createElement('tr')
    var col8_1 = document.createElement('td')
    col8_1.textContent = "GST"
    col8_1.colSpan = 2

    var col8_2 = document.createElement('td')
    col8_2.textContent = "5%"
    col8_2.colSpan = 2

    var row9 = document.createElement('tr')
    var col9_1 = document.createElement('td')
    //col9_1.textContent = "DISCOUNT"
    col9_1.setAttribute('class', 'col')

    var col9_2 = document.createElement('td')
    //col9_2.textContent = "10% with No gst"
    col9_2.colSpan = 3
    col9_2.setAttribute('class', 'col')

    var row10 = document.createElement('tr')
    var col10_1 = document.createElement('td')
    col10_1.textContent = "Total"
    col10_1.colSpan = 3
    col10_1.setAttribute('class', 'col')

    col10_2 = document.createElement('td')
    col10_2.setAttribute('class', 'col')



    row8.append(col8_1)
    row8.append(col8_2)
    row9.append(col9_1)
    row9.append(col9_2)
    row10.append(col10_1)
    row10.append(col10_2)

    bill.append(row8)
    bill.append(row9)
    bill.append(row10)

    var sel = document.getElementById("sel").value
    console.log(sel)

    var discount = sum - (sum * 10 / 100)
    console.log(discount)

    if (sum < 100) {
        row8.remove()   
        col9_1.remove()
        col9_2.remove()
        col10_2.textContent = sum

    } else if (sum > 100 & sel == 'SELECT') {
        col9_1.remove()
        col9_2.remove()
        col10_2.textContent = gst
    } else if (sel == 'WEDNESDAY HUNGAMA' & sum > 100) {
        row8.remove()
        col9_1.textContent = "DISCOUNT"
        col9_2.textContent = "10% with No GST"
        col10_2.textContent = discount
    }
    else if (sel == 'FRIDAY FUN' & sum > 100) {
        row8.remove()
        col9_1.textContent = "DISCOUNT"
        col9_2.textContent = "10% with No GST"
        col10_2.textContent = discount
    } else if (sel == 'SUNDAY DHAMAKA' & sum > 100) {
        row8.remove()
        col9_1.textContent = "DISCOUNT"
        col9_2.textContent = "10% with No GST"
        col10_2.textContent = discount
    }

}
