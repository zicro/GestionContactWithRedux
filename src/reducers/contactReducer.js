const initialState = {
    contacts: [
        {
            id: 1,
            name: "test Toto",
            email: "test@gmau.gg",
            phone: "+966554412"
        },
        {
            id: 2,
            name: "2 test Toto",
            email: "test@gmau.gg",
            phone: "+966554412"
        },
        {
            id: 3,
            name: "3 test Toto",
            email: "test@gmau.gg",
            phone: "+966554412"
        }
    ]
};

export default function(state = initialState, action){
    switch (action.type) {
        case 'GET_CONTACTS': {
            return state;
        }
        // on peut aussi utiliser une deuxieme ecriture qui est
        /**
         * case 'GET_contacts': return {
         *      ...state
         * }
         * */
            
            break;
    
        default:
            {
                return state;
            }
            break;
    }
}