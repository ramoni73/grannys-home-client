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
        },
        {
            id: 3,
            name: "this is the third name",
            type: "another type of pet... yes you already know that",
            etc: "it's for test redux"
        }
    ]

    getAllOffers = async () => {
        return this._offers;
    };

    getOffer = async () => {
        // this._offers.forEach(offer => {
        //     if (offer.id === id) {
        //         return offer
        //     }
        // })

        return this._offers[0];
    };
}