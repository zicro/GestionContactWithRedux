import axios from 'axios';

export const  getContacts = () => async dispatch => {
    // get data from API
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch ({
        type: 'GET_CONTACTS',
        payload: res.data
    })
}

// on utilise cette method a pour but de recuprer un seul contact
// dans l'id est passer par parameters
export const  getContact = (id) => async dispatch => {
    // get data from API
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch ({
        type: 'GET_CONTACT',
        payload: res.data
    })
}

export const  deleteContact =  (id) => dispatch => {
    try {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        dispatch({
            type: 'DELETE_CONTACT',
            payload: id
        })
    } catch (error) {
        alert(error);
    }
}


export const  addContact =  (contact) => async dispatch => {
    const res = await axios.post('https://jsonplaceholder.typicode.com/users', contact)
    dispatch ({
        type: 'ADD_CONTACT',
        payload: res.data
    })
}

export const  updateContact =  (contact) => async dispatch => {
    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${contact.id}`, contact)
    dispatch ({
        type: 'EDIT_CONTACT',
        payload: res.data
    })
}