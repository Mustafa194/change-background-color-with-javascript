// targeting the color picker input
const colorPicker = document.getElementById('color-picker');

// targeting the random background color button
const randomColorBtn = document.getElementById('btn');

// targeting the span with the color-name class
const colorName = document.querySelector('.color-name');

// the hex color string length
const hexStringLength = 6;

// hexadecimal digits
const hexDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

// generating hexadecimal number with a certain length
let generatRandomHexString = (len) => {
    let generatedHexNum = '#';

    while (generatedHexNum.length <= len) {
        generatedHexNum += hexDigits[Math.floor(Math.random() * hexDigits.length)];
    }

    return generatedHexNum;
};

/* declaring this variable before the function so it does not take lot of memory */
let generatedColor;

/* function to get random generated hex string and makes as the background color */
let setBgColor = () => {
    generatedColor = generatRandomHexString(hexStringLength);
    colorName.innerText = generatedColor;
    document.body.style.backgroundColor = generatedColor;
};

// event for changing the background when clicking the button
randomColorBtn.addEventListener('click', setBgColor);

/* function to set the value of the color picker input as the background color */
let setBgColorInput = () => {
    colorName.innerText = colorPicker.value;
    document.body.style.backgroundColor = colorPicker.value;
};

/* event for changing the background when getting user input from the color picker */
colorPicker.addEventListener('input', setBgColorInput)
