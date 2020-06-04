import React from "react";
import {ServiceConsumer} from "../../serviceContext/ServiceContext";

const WithStoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <ServiceConsumer>
                {
                    (service) => {
                        return(<Wrapped {...props} service={service}/>)
                    }
                }
            </ServiceConsumer>
        )
    }
};

export default WithStoreService