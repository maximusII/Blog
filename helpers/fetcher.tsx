const axios = require('axios');

export function get() {
    return axios
        .get(`https://simple-blog-api.crew.red/posts`)
        .then(function(response: { [key: string]: string | number }) {
            return {
                posts: response.data,
            };
        })
        .catch(function(error: { [key: string]: string | number }): void {
            console.log(error);
        });
}

export function post(title: string, body: string) {
    return axios
        .post(`https://simple-blog-api.crew.red/posts`, {
            title: title,
            body: body,
        })
        .then(function(): void {
            alert('Post successfully added!');
        })
        .catch(function(error: { [key: string]: string | number }): void {
            console.log(error);
        });
}
