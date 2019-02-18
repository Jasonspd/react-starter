import React from 'react'
import axios from 'axios'

const getGithubApi = (org, repo) => {
    return axios(`https://api.github.com/repos/${org}/${repo}`)
        .then(res => res.data)
        .catch(err => console.log('error'))
}

export default getGithubApi