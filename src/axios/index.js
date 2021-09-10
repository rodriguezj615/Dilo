import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://backendproject1.herokuapp.com/api/',
})

const sendForm = async (data) => {
    const response = await instance({
        method: "POST",
        url: "about/save",
        data,
    });
    return response
};

export {
    sendForm
}