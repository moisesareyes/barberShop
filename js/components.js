var varHeader = `
<header class="header">
    <div class="nav-container">
        <span class="logo">NavBar</span>
        <nav class="nav">
            <ul class="nav--ul__one">
                <li class="nav-link"><a href="#">Home</a></li>
                <li class="nav-link"><a href="#">Contact</a></li>
                <li class="nav-link"><a href="#">About Us</a></li>
            </ul>
            <ul class="nav--ul__two">
                <li class="nav-link"><a href="#">Login</a></li>
                <li class="nav-link"><a href="#">Signup</a></li>
            </ul>
        </nav>
        <span id="hamburgerSuperMenu">menu</span>
    </div>
</header>`;
class supaHeader extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = varHeader;
    }
}
window.customElements.define("supa-header",supaHeader)