$(document).ready(function(){
    $("button").click(function(){
        convertRomNum();
    });

    $("form").submit(function(){
        convertRomNum()
      });
});
function formSubmitromNumConversion() {
    convertRomNum();
}

function convertRomNum() {
    //converts a number value into roman numerals
    let num = $("#number-input-text").val();
    let numStr = num.toString();

    let romNum = "";

    //Convert thousands digit
    if (numStr.length > 3) {
        thousandsDigit = parseInt(numStr.substring(0, numStr.length - 3));
        for (let i = 0; i < thousandsDigit; i++) {
            romNum += "M";
        }
    }
    //Convert hundreds digit
    if (numStr.length > 2) {
        let hundredsDigit = numStr[numStr.length-3];
        romNum += convertRomDigit(hundredsDigit, "C", "D", "M");
    }
    //Convert tens digit
    if (numStr.length > 1) {
        let tensDigit = numStr[numStr.length-2];
        romNum += convertRomDigit(tensDigit, "X", "L", "C");
    }
    if (numStr.length > 0) {
        let onesDigit = numStr[numStr.length-1];
        romNum += convertRomDigit(onesDigit, "I", "V", "X");
    }
    $("#converted-roman-num").text(romNum);
}

//This function converts a single digit to roman numerals based on letters passed into the function
function convertRomDigit(romDigit, romLet1, romLet2, romLet3) {
    console.log(romDigit);
    romDigitInt = Number(romDigit);
    let romNum = "";
    switch(romDigitInt) {
        case 0:
            break;
        case 1:
            romNum = romLet1;
            break;
        case 2:
            romNum = romLet1+romLet1;
            break;
        case 3:
            romNum = romLet1+romLet1+romLet1;
            break;
        case 4:
            romNum = romLet1+romLet2;
            break;
        case 5:
            romNum = romLet2;
            break;
        case 6:
            romNum = romLet2 + romLet1;
            break;
        case 7:
            romNum = romLet2 + romLet1 + romLet1;
            break;
        case 8:
            romNum = romLet2 + romLet1 + romLet1 + romLet1;
            break;
        case 9:
            romNum = romLet1 + romLet3;
            break;
        default:
            romNum = "error";
    }
    return romNum;
}