var varHeader = `    
    <header class="header">
        <div id="nav-container" class="bg-yellow-200 flex flex-wrap items-center p-4">
            <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="/src/img/vinillo.png" class="h-16" alt="Logo">
                <span class="self-center text-2xl font-semibold whitespace-nowrap">Disco Barber</span>
            </a>
            <nav id="supernav" class="supernav">
                <ul class="nav--ul__one">
                    <li class="nav-link">
                        <a id="red" href="#" class="text-gray-900 hover:underline">AGENDAR CITA</a>
                    </li>
                    <li class="nav-link">
                        <a id="red" href="#" class="text-gray-900 hover:underline">PRODUCTOS</a>
                    </li>
                    <li class="nav-link">
                        <a id="red" href="#" class="text-gray-900 hover:underline">INFORMACION</a>
                    </li>
                </ul>
            </nav>
            <span id="hamburgerSuperMenu">menu</span>
        </div>
    </header>
`;
class supaHeader extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = varHeader;
    }
}

window.customElements.define("supa-header",supaHeader)


var varFooter=`
    <footer class="bg-yellow-200 pb-5">
    <div class="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center sm:justify-between">
    <div class="flex justify-center text-teal-300 sm:justify-start">
    <img class="rounded-full" src="/src/img/vinillo.png" width="40" height="40" />
    </div>
    <div>
        <p class="mt-4 text-sm text-center text-gray-900 lg:text-right lg:mt-0">INFORMACION</p>
        <p class="mt-4 text-sm text-center text-gray-900 lg:text-right lg:mt-0">POLITICA DE PRIVACIDAD</p>
        <p class="mt-4 text-sm text-center text-gray-900 lg:text-right lg:mt-0">POLITICA DE COOKIES</p>
    </div>
    </div>
    </div>
        <p class="font-sans p-8 text-start md:text-center md:text-lg md:p-4">© 2025 Disco Barber Shop Inc. All rights reserved.</p>
    </footer>`;
class supaFooter extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = varFooter;
    }
}

window.customElements.define("supa-footer",supaFooter)