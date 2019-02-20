import React from 'react'
import axios from 'axios'

const getGithubOrg = (org) => {
    const oauth_token = '25a93a54c0ef2274d9507a66c8f3b1495093f9bf'
    const api = `https://api.github.com/orgs/${org}/repos/?access_token=${oauth_token}`
    return axios(api)
        .then(res => res.data)
        .catch(err => console.log('error'))
}

export default getGithubOrg