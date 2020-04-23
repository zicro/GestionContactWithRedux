const initialState = {
    // [] signifie un tableau d'objet
    contacts: [],
    // {} signifie un objet
    contact: {}

};

export default function(state = initialState, action){
    switch (action.type) {
        case 'GET_CONTACTS': return {
            ...state,
            // on recupere les donnes et on lui affecte au tableau contacts
            // via la methode payload, qui arrive from contactActions.js from (getContacts())
            contacts: action.payload
        }
        // on peut aussi utiliser une deuxieme ecriture qui est
        /**
         * case 'GET_contacts': return {
         *      ...state
         * }
         * */
            
            break;
        case 'GET_CONTACT': return {
            ...state,
            contact: action.payload
        }
        case 'DELETE_CONTACT': 
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)

        }
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [
                    // ...state.contacts // cette ecriture signifie qu'on veut seulement
                    // les donnes qui se trouve dans le tableau contact et ne return pas
                    // le tableau elle meme
                    action.payload, ...state.contacts
                ]
            }
        case 'EDIT_CONTACT':
            return {
                ...state,
                contacts: state.contacts.map(contact => contact.id === action.payload.id ? 
                    (contact = action.payload) : contact)
            }    
        default:
            {
                return state;
            }
            break;
    }
}