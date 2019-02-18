import React from 'react'
import getDummyApi from './getDummyApi'

describe('Dummy API', () => {

    it('should load data and check if the name is Leanne Graham', async () => {
        const data = await getDummyApi()
        expect(data).toBeDefined()
        expect(data.name).toEqual('Leanne Graham')
    })

})