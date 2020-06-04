import React, {Component} from "react";
import './ItemDetails.css'

export default class ItemDetails extends Component {
    constructor() {
        super();
        this.state = {
            id: null,
            name: null,
            type: null,
            etc: null
        }
    }

    componentDidMount() {
        const {id, name, type, etc} = this.props.data;
        this.setState({
            id: id,
            name: name,
            type: type,
            etc: etc
        })
    }

    render() {
        const {name, type, etc} = this.state;

        return(
            <li className="list-group-item">
                <div>{name}</div>
                <div>{type}</div>
                <div>{etc}</div>
            </li>
        )
    }
}
