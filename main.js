const celciusInput = document.getElementById("celcius");
const farenheitInput = document.getElementById("farenheit");
const kelvinInput = document.getElementById("kelvin");

const inputs = document.getElementsByClassName("input");

for (let i = 0; i <= inputs.length; i++) {
    let input = inputs[i];
    input.addEventListener("input", (e) => {
        let enterValue = parseFloat(e.target.value);
        // console.log(e.target.name + enterValue )
        switch (e.target.name) {
            case 'celcius': 
            farenheitInput.value =(enterValue *1.8) + 32
            kelvinInput.value =(enterValue +273.15)
                break;
            case 'farenheit':
                celciusInput.value = (enterValue-32)/1.8
                kelvinInput.value = ((enterValue-32)/1.8) + 273.15
                break;
            case 'kelvin':
                celciusInput.value = enterValue -273.15
                farenheitInput.value= ((enterValue-273.15)*1.8)+32
                break;
        }
    });
}
