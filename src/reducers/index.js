const initialState = {
    offers: [],
    loading: true,
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OFFERS_REQUESTED':
            return {
                offers: [],
                loading: true,
                error: null
            };
        case 'OFFERS_LOADED':
            return {
                offers: action.payload,
                loading: false,
                error: null
            };
        case 'OFFERS_ERROR':
            return {
                offers: [],
                loading: false,
                error: action.payload
            };
        default:
            return state
    }
};

export default reducer