import axios from "axios";
const SERVER_URL = "http://localhost:9000";

// @desc Get All Contacts Service 
// @route http://localhost:9000/contacts
export const serveGetAllContacts = () => {
    const url = `${SERVER_URL}/contacts`;
    return axios.get(url)
}
// @desc Get Single Contact Service 
// @route http://localhost:9000/contacts/:contactId
export const serveGetContact = (contactId) => {
    const url = `${SERVER_URL}/contacts/${contactId}`;
    return axios.get(url)
}
// @desc Get All Groups Service 
// @route http://localhost:9000/groups
export const serveGetAllGroups = () => {
    const url = `${SERVER_URL}/groups`;
    return axios.get(url)
}
// @desc Get Single Group Service 
// @route http://localhost:9000/groups/:groupId
export const serveGetGroup = (groupId) => {
    const url = `${SERVER_URL}/groups/${groupId}`;
    return axios.get(url)
}

// @desc POST Contact Service 
// @route http://localhost:9000/contacts
export const serveCreateContact = (contact) => {
    const url = `${SERVER_URL}/contacts`;
    return axios.post(url, contact)
}
// @desc PUT Contact Service 
// @route http://localhost:9000/contacts/:contactId
export const serveEditContact = (contact, contactId) => {
    const url = `${SERVER_URL}/contacts/${contactId}`;
    return axios.put(url, contact)
}
// @desc DELETE Contact Service 
// @route http://localhost:9000/contacts/:contactId
export const serveDeleteContact = (contactId) => {
    const url = `${SERVER_URL}/contacts/${contactId}`;
    return axios.delete(url)
}