import React, {Component} from "react";
import './ItemList.css'
import WithService from "../hoc/WithService"
import {connect} from "react-redux";
import {offersError, offersLoaded, offersRequested} from "../../actions";

class ItemList extends Component {
    componentDidMount() {
        const { service, offersRequested, offersLoaded, offersError } = this.props;
        offersRequested();
        service.getAllOffers()
            .then((data) => offersLoaded(data))
            .catch((err) => offersError(err))
    }

    render() {
        const {offers, loading, error} = this.props;

        if (loading) {
            return "Loading..."
        }

        if (error) {
            return "Error..."
        }

        return(
            <ul className="list-group">
                {
                    offers.map(offer => {
                        return(
                            <li className="list-group-item" key={offer.id}>{offer.etc}</li>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        offers: state.offers,
        loading: state.loading,
        error: state.error
    }
};

const mapDispatchToProps = {
    offersRequested,
    offersLoaded,
    offersError
};

export default WithService()(connect(mapStateToProps, mapDispatchToProps)(ItemList))