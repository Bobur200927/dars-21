let headH1 = document.querySelector(".head");
let inp = document.querySelector("input");

console.log(inp);

// headH1.addEventListener("click", clickFunc);
// headH1.addEventListener("mouseover", clickFunc);
headH1.addEventListener("dblclick", clickFunc);
// inp.addEventListener("focus", clickFunc);
// inp.addEventListener("keydown", clickFunc);
// inp.addEventListener("keyup", clickFunc);

function clickFunc() {
    console.log("tugma bosildi");
}

// ?
let containerJs = document.querySelector('.container')
let name = "Zarrux";
let age = '25';

let result = `My name is ${name}, I am ${age} years old`

containerJs.innerHTML = `
    <h1 class="head">Hello Template</h1>
    <h2 style="color: red; font-size: 40px;">${result}</h2>
`

// Vazifa

let contactJs = document.querySelector('.contact')

contactJs.innerHTML = `

        <div class="head">
            <h1>Contact Form</h1>
            <h2>Please fill all entries.</h2>
        </div>

        <div class="foot">
            <div class="foot1">
                <p>Name:</p>
                <input type="text">
            </div>
            

            <div class="foot1">
                <p>Email:</p>
                <input type="text">
            </div>
            

            <div class="foot2">
                <p>Gender:</p>
                <div>
                    <input type="radio" id="male">
                    <label for="male">Male</label><br>

                    <input type="radio" id="female">
                    <label for="female">Female</label>
                </div>
                
            </div>

            <div class="foot1">
                <p>Message:</p>
                <textarea cols="30" rows="10"></textarea>
            </div>

            <button class="foot4">Send</button>
            
        </div>
`