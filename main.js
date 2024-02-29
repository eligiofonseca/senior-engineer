// * IMPORTANT
// ! DEPRECATED
// TODO 
// ? SHOULD THIS
// @param innerHTML blah

class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header>
            <nav id='menu'>
                <ul>
                    <!-- <li><a href="./index.html" target='_self'>Home</a></li> -->
                    <li><a href="./about.html" target='_self'>About</a></li>
                    <!-- <li><a href="./portfolio.html" target='_self'>Portfolio</a></li> -->
                    <!-- <li><a href="./media.html" target='_self'>Media</a></li> -->
                    <li><a href="./contactme.html" target='_self'>Contact Me</a></li>
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
    <button onclick="topFunction()" id="bttb" title="Back to the Top">Top &uarr;   
    </button>
        <footer>
        <figure class='footerIcons'>

          <a href='https://www.linkedin.com/in/eligio-fonseca/' target='_blank'>
          <img src='./icons/footer/iconmonstr-linkedin-3.svg'>
          </a>

          <a href='https://github.com/eligiofonseca' target='_blank'>
          <img src='./icons/footer/iconmonstr-github-1.svg'>
          </a>

          <a href='https://www.codecademy.com/profiles/eligiofonseca' target='_blank'>
          <img src='./icons/footer/iconmonstr-learning-3.svg'>
          </a>

          <a href='https://www.coursera.org/learner/eligio-fonseca' target='_blank'>
          <img src='./icons/footer/iconmonstr-coursera-1.svg'>
          </a>

          <a href='https://testautomationu.applitools.com/me.html#eligio-fonseca' target='_blank'>
          <img src='./icons/footer/iconmonstr-applitools.svg'>
          </a>
          
        </figure>
            &copy; <span id="copyright-year">2023</span>. All Rights Reserved.
        </footer>
        `
  }
}
customElements.define('my-footer', MyFooter)
document.querySelector('#copyright-year').innerText = new Date().getFullYear();

// Get the button:
let mybutton = document.getElementById("bttb");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}