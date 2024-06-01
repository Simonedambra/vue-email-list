'use strict'
const { createApp } = Vue;

createApp({
    data() {
        return {
            title: 'Vue email list',
            emails: [],
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            nCall: 10,
        };
    },
    methods: {
        callEmail() {
            axios.get(this.apiUrl).then((response) => {
                this.emails.push(response.data.response);
            });
        },
    },

    created() {
        for (let i = 0; i < this.nCall; i++) {
            this.callEmail();
        }

        // while (this.emails.length < this.nCall) {
        //     this.callEmail();
        // }
    },
}).mount('#app');