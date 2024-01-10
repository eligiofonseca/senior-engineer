class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <nav>
                <ul>
                    <li><a href="./index.html" target='_self'>Home</a></li>
                    <li><a href="./about.html" target='_self'>About</a></li>
                    <li><a href="./media.html" target='_self'>Media</a></li>
                    <li><a href="./portfolio.html" target='_self'>Portfolio</a></li>
                    <li style="float:right"><a href="./contactme.html" target='_self'>Contact Me</a></li>
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
        <figure class='footerIcons'>
          <a href='./index.html' target='_self'>
          <img src='./icons/footer/iconmonstr-home-6.svg'>
          </a>

          <a href='https://www.linkedin.com/in/eligio-fonseca/' target='_blank'>
          <img src='./icons/footer/iconmonstr-linkedin-3.svg'>
          </a>

          <a href='https://github.com/eligiofonseca' target='_blank'>
          <img src='./icons/footer/iconmonstr-github-1.svg'>
          </a>

          <a href='https://www.codecademy.com/profiles/eligiofonseca' target='_blank'>
          <img src='./icons/footer/iconmonstr-learning-3.svg'>
          </a>
        </figure>
            &copy; <span id="copyright-year">2023</span>. All Rights Reserved.
            
        </footer>
        `
    }
}
customElements.define('my-footer', MyFooter)
document.querySelector('#copyright-year').innerText = new Date().getFullYear();