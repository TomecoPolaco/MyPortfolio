function displayNav() {
    var nav = document.getElementById('nav');

    if (nav.style.display === 'block'){
        nav.style.display = 'none'
        nav.style.opacity = '0'
    } else {
        nav.style.display = 'block'
        nav.style.opacity = '1'
    }
}

function disableButton() {
    var button = document.querySelectorAll('.projektBtn');
    var width = 1366;
    

    if (window.innerWidth < width) {
        button.forEach(button => {
            button.disabled = true
        })

    } else {
        button.forEach(button => {
            button.disabled = false
        })
    }
}
window.addEventListener("resize", disableButton)

function sendmail(){
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const textarea = document.getElementById('message').value;

    const mailtoLink = `mailto:thomasfrontendjobs@gmail.com?subject=Nachricht von ${encodeURIComponent(name)}&body=${encodeURIComponent(textarea)}%0A%0ASent from: ${encodeURIComponent(email)}`;

    window.location.href = mailtoLink;
}

function displayzert(elementId) {
    var popboxes = document.querySelectorAll(".popoverbox");

    popboxes.forEach(function(box){
        box.style.visibility = "hidden"
        box.style.opacity = "0"
    });

    var chosenBox = document.getElementById(elementId);
    if (chosenBox) {
        chosenBox.style.visibility = "visible";
        chosenBox.style.opacity = "1";
    }
}

function closepop(){
    var popbox = document.querySelectorAll(".popoverbox")

    popbox.forEach(function(popbox){
        popbox.style.visibility = "hidden"
        popbox.style.opacity = "0"
    })
}

document.querySelectorAll('.kritik').forEach(element => {
    element.innerHTML = "Eloquenz"})