import React, {Component} from "react";
import './ItemDetails.css'

export default class ItemDetails extends Component {
    constructor() {
        super();
        this.state = {
            id: null,
            name: null,
            type: null
        }
    }

    componentDidMount() {
        this.updateItem();
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.data.id !== prevProps.data.id ||
    //         this.props.data.name !== prevProps.data.name ||
    //         this.props.data.type !== prevProps.data.type) {
    //         this.updateItem();
    //     }
    // }

    updateItem() {
        this.getData();
        // const {id, name, type} = this.props.data;
        // if (!id) {
        //     return;
        // }
        //
        // this.setState({
        //     id: id,
        //     name: name,
        //     type: type,
        // })
    }

    getData() {
        this.setState({
            id: 1,
            name: "this is name",
            type: "it is a type of pet"
        })
    }

    render() {
        const {name, type} = this.state;
        if (!name) {
            return <span>Select a item from a list</span>;
        }

        return(
            <li className="list-group-item">
                <div>{name}</div>
                <div>{type}</div>
            </li>
        )
    }
}
