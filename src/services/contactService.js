import axios from "axios";
const SERVER_URL = "http://localhost:9000";

// @desc Get All Contacts Service 
// @route http://localhost:9000/contacts
export const serviceGetAllContacts = () => {
    const url = `${SERVER_URL}/contacts`;
    return axios.get(url)
}
// @desc Get Single Contact Service 
// @route http://localhost:9000/contacts/:contactId
export const serviceGetContact = (contactId) => {
    const url = `${SERVER_URL}/contacts/${contactId}`;
    return axios.get(url)
}
// @desc Get All Groups Service 
// @route http://localhost:9000/groups
export const serviceGetAllGroups = () => {
    const url = `${SERVER_URL}/groups`;
    return axios.get(url)
}
// @desc Get Single Group Service 
// @route http://localhost:9000/groups/:groupId
export const serviceGetGroup = (groupId) => {
    const url = `${SERVER_URL}/groups/${groupId}`;
    return axios.get(url)
}

// @desc POST Contact Service 
// @route http://localhost:9000/contacts
export const serviceCreateContact = (contact) => {
    const url = `${SERVER_URL}/contacts`;
    return axios.post(url, contact)
}
// @desc PUT Contact Service 
// @route http://localhost:9000/contacts/:contactId
export const serviceEditContact = (contact, contactId) => {
    const url = `${SERVER_URL}/contacts/${contactId}`;
    return axios.put(url, contact)
}
// @desc DELETE Contact Service 
// @route http://localhost:9000/contacts/:contactId
export const serviceDeleteContact = (contactId) => {
    const url = `${SERVER_URL}/contacts/${contactId}`;
    return axios.delete(url)
}