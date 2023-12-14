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
