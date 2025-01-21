var varHeader = `    
<nav class="bg-yellow-200">
        <div class="bg-yellow-200 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="/src/img/vinillo.png" class="h-16" alt="Logo">
                <span class="self-center text-2xl font-semibold whitespace-nowrap">Disco Barber</span>
            </a>
            <div class="bg-yellow-200 max-w-screen-xl px-4 py-3 mx-auto">
                <div class="flex items-center">
                    <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                        <li>
                            <a id="red" href="#" class="text-gray-900 hover:underline">AGENDAR CITA</a>
                        </li>
                        <li>
                            <a id="red" href="#" class="text-gray-900 hover:underline">INFORMACION</a>
                        </li>
                        <li>
                            <a id="red" href="#" class="text-gray-900 hover:underline">PRODUCTOS</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>`;
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