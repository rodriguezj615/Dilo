import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://joseamietta-laravel-api.herokuapp.com/api/',
    //ruta del backend (poner la propia) proporcionada por el server
})

const sendForm = async (data) => {
    const response = await instance({
        method: "POST",
        url: "contact/store",
        //resto de la ruta mia del back para la funcion store
        // about/save
        data,
    });
    return response
};

export {
    sendForm
}