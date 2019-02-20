import React from 'react'
import axios from 'axios'

const getGithubApi = (org, repo) => {
    const api = `https://api.github.com/repos/${org}/${repo}`
    const api2 = `https://api.github.com/orgs/${org}/repos`
    return axios(api2)
        .then(res => res.data)
        .catch(err => console.log('error'))
}

export default getGithubApi