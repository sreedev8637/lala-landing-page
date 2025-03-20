// Create Vue app
const { createApp } = Vue;

createApp({
    data() {
        return {
            companyName: '',
            logoUrl: './images/golden_lala.png',
            socialIcons: [
                {
                    name: 'Facebook',
                    url: 'https://facebook.com/thelalashop.online',
                    class: 'fab fa-facebook'
                },
                {
                    name: 'Instagram',
                    url: 'https://instagram.com/thelalashop.online/',
                    class: 'fab fa-instagram'
                },
                {
                    name: 'YouTube',
                    url: 'https://youtube.com/@TheLaLaShop.online',
                    class: 'fab fa-youtube'
                },
            ]
        }
    }
}).mount('#app');
