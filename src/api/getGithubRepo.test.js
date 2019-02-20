import React from 'react'
import getGithubRepo from './getGithubRepo'

describe('Github API', () => {

    it('should check if organisation is nodejs', async () => {
        const data = await getGithubRepo('nodejs', 'http-parser')
        console.log('repo data: ', data)
        const org = data.full_name.split('/').shift()
        expect(data).toBeDefined()
        expect(org).toEqual('nodejs')
    })

    it('should check if repo is http-parser', async () => {
        const data = await getGithubRepo('nodejs', 'http-parser')
        const repo = data.name
        expect(data).toBeDefined()
        expect(repo).toEqual('http-parser')
    })

})