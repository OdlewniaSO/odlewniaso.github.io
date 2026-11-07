class Header extends HTMLElement {
    constructor() {
      super();
    }
  
  
    connectedCallback(){
      this.innerHTML = `
              <div id="mySidebar"class="sidebar">
                <a href=""><img src="Images/Obrobka_logo_2.png" width="210px" height="auto" alt="odlewy"></a>
                <ul>
                <li><a href="#about">O Nas</a></li>
                <li><a href="#services">Nasze Usługi</a></li>
                <li><a href="#materials">Obrabiane Materiały</a></li>
                <li><a href="#technology">Park Maszynowy</a></li>
                <li><a href="#contact">Kontakt</a></li>
                </ul>
              </div>
      `;
    }
  }
  
  customElements.define('header-component', Header);