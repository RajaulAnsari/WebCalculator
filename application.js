let buttons = document.querySelectorAll("button");
let inp = document.querySelector(".input");
let calcln = document.querySelector(".calcln");

let X = [];
let Y = [];
var oper = [];
let Ans = 0;


[...buttons].map(x => {
    x.addEventListener("click", function (e) {
        switch (this.innerHTML) {
            case "C":
                clear();
                break;
            case "DEL":
                del();
                break;
            case "+/-":
                negPositv();
                break;
            case "=":
                total();
                break;    
            case "+":
                oper.splice(0, 1, this.innerHTML)
                console.log(oper);
                storeValue();
                break;
            case "*":
                oper.splice(0, 1, this.innerHTML)
                console.log(oper);
                storeValue();
                break;
            case "/":
                oper.splice(0, 1, this.innerHTML)
                console.log(oper);
                storeValue();
                break;
            case "-":
                oper.splice(0, 1, this.innerHTML);
                console.log(oper);
                storeValue();
                break;
            default:
                 if (X.length >11) {
                    alert("Values Limit: 12");
                }
                 else {
                    X.push(this.innerText);
                    inp.textContent = X.join("");
                    console.log(X);
                }
                break;
            case ".":
                if (X.includes(".")) {
                    alert("Sorry, You can use only one decimal");
                } else {
                    X.push(this.innerText);
                    inp.textContent = X.join("");
                }
                break;
        }
    })
})
function clear() {
    inp.textContent = "";
    calcln.textContent = ""
    X = [];
    Y = [];
    oper = [];
}
function del(e) {
    X.pop();
    inp.textContent = X.join("");
}
function negPositv() {

    if (X.length < 1) {
        return false;
    }else if(X[0] == "-") {
        X.shift()

    } else {
        X.unshift("-")
    }
    inp.textContent = X.join("");
}

function total() {

    if (Y.length > 0 && oper.length!==0) {
        Ans = eval(Y + oper + X.join(""));
        calcln.textContent = "";
        calcln.textContent = eval(Ans).toFixed(2);
        inp.textContent = "";
        Y = eval(Ans);
        X = [];

    } else if (oper.length == 0) {
        alert("Invalid calculation there is no operator");
    }
    else {
        Ans = Ans = eval(Y + oper + X.join(""));

        console.log("final answer");
        console.log(Ans);
        calcln.textContent = "";
        inp.textContent = "";
        calcln.textContent = eval(Ans).toFixed(2);
        Y = eval(Ans);
        X = [];
    }
}
function storeValue() {
        if (X.length == 0 && Y.length==0) {
            return false;
        } else if (Y.length > 0) {
            calcln.textContent = Y + " " + oper;

        }else if(Y.length==0) {
            Y.push(X.join(""));
            X = [];
            inp.textContent = "";
            calcln.textContent = "";
            calcln.textContent = Y + " " + oper
    }
        calcln.textContent = Y + " " + oper;  
}