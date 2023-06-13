import axios from "axios";

axios.defaults.baseURL = 'https://6488234f0e2469c038fd0ab2.mockapi.io';


export async function getContacts() {
    const { data } = await axios.get('/contacts');
    return data;
};

export async function addContacts(contact) {
    const { data } = await axios.post('/contacts', contact);
    return data;
};

export async function deleteContacts(id) {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
};