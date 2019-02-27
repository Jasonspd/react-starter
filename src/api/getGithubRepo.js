import React from 'react'
import axios from 'axios'

const getGithubRepo = (org, repo) => {
    const api = `https://api.github.com/repos/${org}/${repo}/`
    return axios(api)
        .then(res => res.data)
        .catch(err => console.log('error'))
}

export default getGithubRepo
