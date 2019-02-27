import React from 'react'
import axios from 'axios'

const getGithubOrg = (org) => {
    const api = `https://api.github.com/orgs/${org}/repos/`
    return axios(api)
        .then(res => res.data)
        .catch(err => console.log('error'))
}

export default getGithubOrg
