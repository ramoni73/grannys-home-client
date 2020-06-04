export default class DummyService {
    _offers = [
        {
            id: 1,
            name: "this is name",
            type: "it is a type of pet",
            etc: "etc"
        },
        {
            id: 2,
            name: "this is another name",
            type: "another type of pet",
            etc: "etc.. etc... etc..."
        }
    ]

    getAllOffers = async () => {
        return this._offers;
    };

    getOffer = async () => {
        return this._offers[0];
    };
}