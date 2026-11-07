class Footer extends HTMLElement {
  constructor() {
    super();
  }


  connectedCallback(){
    this.innerHTML = `
      <div class="footer">
        <div class="footer-content">
          <div class="footer-links">
              <a href="about.html">O Nas</a>
              <a href="#politykajakości">Polityka jakości i ochrony środowiska</a>
              <a href="RODO.pdf">RODO</a>
          </div>
          <div class="footer-contact">
            Odlewnia Żeliwa Simiński-Ordon S. K. A.
            <br>
            ul. Jałowcowa 12, 42-262 Poczesna
            <br>
            Telefon: +48 34 327 48 95
            <br>
            E-mail: obrobka@odlewy.com
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('footer-component', Footer);
