const textInput = document.getElementById('textInput');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');


// Function to handle button clicks (you'll define the actions here)


function display1()
    {
        var sourceValue = document.getElementById("textInput").value;

        var outputField = document.getElementById("output");
        outputField.textContent = sourceValue;
        outputField.className = 'styled-input ';
    }

    function display2()
    {
        var sourceValue = document.getElementById("textInput").value;

        var outputField = document.getElementById("output");
        outputField.textContent = sourceValue;
        outputField.className = 'styled-input-2 ';
    }

    function display3()
    {
        var sourceValue = document.getElementById("textInput").value;

        var outputField = document.getElementById("output");
        outputField.textContent = sourceValue;
        outputField.className = 'styled-input-3 ';
    }

    function display4()
    {
        var sourceValue = document.getElementById("textInput").value;

        var outputField = document.getElementById("output");
        outputField.textContent = sourceValue;
        outputField.className = 'styled-input-4 ';
    }

    function display5()
    {
        var sourceValue = document.getElementById("textInput").value;

        var outputField = document.getElementById("output");
        outputField.textContent = sourceValue;
        outputField.className = 'styled-input-5 ';
    }


button1.addEventListener('click', () => {
  handleButtonClick('1', textInput.value); 
});



button2.addEventListener('click', () => {
  handleButtonClick('2', textInput.value);
});


button3.addEventListener('click', () => {
  handleButtonClick('3', textInput.value);
});


button4.addEventListener('click', () => {
  handleButtonClick('4', textInput.value);
});


button5.addEventListener('click', () => {
  handleButtonClick('5', textInput.value);
});