import React from 'react'
import axios from 'axios'

// async and await
// const getDummyApi = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
//     return await res.json();
// }

// fetch
// const getDummyApi = () => {
//     return fetch('https://jsonplaceholder.typicode.com/users/1')
//         .then(res => res.json());
// }

//axios
const getDummyApi = () => {
    return axios('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        // .catch(err => console.log('error'))
}

// class getDummyApi {
//     static all() {
//         return axios('https://jsonplaceholder.typicode.com/users/1')
//         .then(res => res.data)
//         .catch(err => console.log('error'))
//     }
// }

export default getDummyApi