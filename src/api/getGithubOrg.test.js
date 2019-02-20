import React from 'react'
import getGithubOrg from './getGithubOrg'

describe('Github API', () => {

    it('should check if organisation is nodejs', async () => {
        const data = await getGithubOrg('nodejs')
        const org = data[0].full_name.split('/').shift()
        expect(data).toBeDefined()
        expect(org).toEqual('nodejs')
    })

    it('should check if the first repo is http-parser', async () => {
        const data = await getGithubOrg('nodejs')
        const repo = data[0].name
        expect(data).toBeDefined()
        expect(repo).toEqual('http-parser')
    })

})