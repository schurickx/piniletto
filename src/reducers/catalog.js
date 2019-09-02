const ADD_BADS = 'ADD_BADS';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]

};

const catalog = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BADS:
            return {
                ...state,
                messages: [...state.messages, { id: state.messages.length + 1, message: action.payload }]
            };
        default:
            return state;
    }
}

export const addBads = (payload) => ({type: ADD_BADS, payload})

export default catalog;