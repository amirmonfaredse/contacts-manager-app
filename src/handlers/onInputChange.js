const onInputChange = (e, contact, setContact) => {
    setContact({
        ...contact,
        [e.target.name]: e.target.value
    });
}

export default onInputChange;