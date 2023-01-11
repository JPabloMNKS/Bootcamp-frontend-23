class YuGiOhCard extends HTMLElement {
    constructor() {
        super();

        let shadow = this.attachShadow({ mode: 'closed' });

        let templateElem = document.getElementById('yuGiOhCardTemplate');
        let content = templateElem.content.cloneNode(true);

        content.querySelector('.card-header>.monster-name').innerText =
            this.getAttribute('monsterName');

        content
            .querySelector('img.monster-stars')
            .setAttribute('src', this.getAttribute('monsterStars'));

        content
            .querySelector('img.monster-power')
            .setAttribute('src', this.getAttribute('monsterPower'));

        content
            .querySelector('img.monster-image')
            .setAttribute('src', this.getAttribute('monsterImage'));

        content.querySelector('.serie>.monster-serie').innerText =
            this.getAttribute('monsterSerie');

        content.querySelector('.card-description>.monster-type').innerText =
            this.getAttribute('monsterType');

        content.querySelector(
            '.card-description>.monster-description'
        ).innerText = this.getAttribute('monsterDescription');

        content.querySelector(
            '.card-description>.power>.monster-atk'
        ).innerText = this.getAttribute('monsterATK');

        content.querySelector(
            '.card-description>.power>.monster-def'
        ).innerText = this.getAttribute('monsterDEF');
        shadow.appendChild(content);
    }
}
customElements.define('yugioh-card', YuGiOhCard);
