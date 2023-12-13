class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <nav>
                <ul>
                    <li><a href="./index.html" target='_self'>Home</a></li>
                    <li><a href="./about.html" target='_self'>About</a></li>
                    <li><a href="./media.html" target='_self'>Media</a></li>
                    <li><a href="./contactme.html" target='_self'>Contact</a></li>
                </ul>
            </nav>
        </header>
        `
    }
}
customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <p>&copy; 2023 My Website. All rights reserved.</p>
        </footer>
        `
    }
}
customElements.define('my-footer', MyFooter)

//Option 1 - Contact Form Submission Success Event Listener
window.addEventListener("load", function () {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = e.target.action;
        fetch(action, {
            method: 'POST',
            body: data,
        })
            .then(() => {
                alert("Success!");
            })
    });
});


//Option 2 - Contact Form Submission Success Event Listener
window.addEventListener("DOMContentLoaded", function () { // 'window.onload = function...' also works 
    const yourForm = document.getElementById('my-form');
    yourForm.addEventListener("submit", function (e) { // 'yourForm.onsubmit = function...` also works too
        e.preventDefault();
        const data = new FormData(yourForm);
        const action = e.target.action;
        fetch(action, {
            method: 'POST',
            body: data,
        }).then((response) => {
            response.json();
        }).then((data) => {
            if (data.result == "success") {
                // finished, you can do whatever you want here
                alert("Success!")
            }
        })
    })
});

//Option 3 - User comment suggestion
var date_today = new Date().toISOString().slice(0, 10)
document.getElementById("Date").value = date_today.toString();

var form = document.getElementById('my-form1');
form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById("my-form")),
    }).then(
        response => response.json()
    ).then((html) => {
        // you can put any JS code here
        window.location.replace('https://www.WEBSITE.com/thank-you')
    });
});