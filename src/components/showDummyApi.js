import React from 'react'
import getDummyApi from '../api/getDummyApi'

class showDummyApi extends React.Component {

    constructor() {
        super()
        this.state = {
            dummyData: []
        }
    }

    componentDidMount() {
        getDummyApi()
            .then(data => {
                this.setState({dummyData: data})
                console.log("state", this.state.dummyData)
            })
    }

    render() {

        const fullName = `Name: ${this.state.dummyData.name}`

        return (
            <div><p>{fullName}</p></div>
        )
    }
}

export default showDummyApi