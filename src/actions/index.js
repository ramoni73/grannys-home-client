const offersRequested = () => {
    return {
        type: 'OFFERS_REQUESTED'
    }
};
const offersLoaded = (newOffers) => {
    return {
        type: 'OFFERS_LOADED',
        payload: newOffers
    }
};
const offersError = (error) => {
    return {
        type: 'OFFERS_ERROR',
        payload: error
    }
};

export {
    offersRequested,
    offersLoaded,
    offersError
}