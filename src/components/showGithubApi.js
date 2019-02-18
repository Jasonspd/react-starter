import React from 'react'
import getGithubApi from '../api/getGithubApi'

class showGithubApi extends React.Component {

    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        getGithubApi('nodejs')
            .then(data => {
                this.setState({data: data})
                console.log("state", this.state.data)
            })
    }

    render() {

        return (
            <div>
                {this.state.data.map((obj, index) => (
                    <p key={index}>{obj.name}</p>
                ))}
            </div>
        )
    }
}

export default showGithubApi