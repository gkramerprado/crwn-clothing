const INITIAL_STATE = {
    sections: [
        {
            title: 'chapeus',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1,
            size: 'normal',
            linkUrl: 'shop/hats'
        },
        {
            title: 'tenis',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 2,
            size: 'normal',
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'jaquetas',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 3,
            size: 'normal',
            linkUrl: 'shop/jackets'
        },
        {
            title: 'feminino',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            id: 4,
            size: 'large',
            linkUrl: 'shop/womens'
        },
        {
            title: 'masculino',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            id: 5,
            size: 'large',
            linkUrl: 'shop/mens'
        }
    ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case '':
            return {};
        default:
            return state;
    }
};

export default directoryReducer;