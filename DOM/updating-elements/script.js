let crt = 0;
function call() {
    document.querySelectorAll("h4")[1].innerHTML = crt;
    crt++;
}

setInterval(call, 1000)