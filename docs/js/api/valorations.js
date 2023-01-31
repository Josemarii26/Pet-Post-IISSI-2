" use_strict ";
import {
    BASE_URL,
    requestOptions
} from "./common.js";
const valorationsAPI = {
    getAll: function () {
        return new Promise(function (resolve, reject) {
            axios
                .get(`${ BASE_URL }/photosvaloration`, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },
    getavg: function (photoId) {
        return new Promise(function (resolve, reject) {
            axios
                .get(`${ BASE_URL }/photosvaloration/${photoId}`, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },
    getcount: function (userId, photoId) {
        return new Promise(function (resolve, reject) {
            axios
                .get(`${ BASE_URL }/photosvaloration/contador/${userId}/${photoId}`, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },
    getvalorationbyid: function (userId, photoId) {
        return new Promise(function (resolve, reject) {
            axios
                .get(`${ BASE_URL }/photosvaloration/${userId}/${photoId}`, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },

    create: function (formData) {
        return new Promise(function (resolve, reject) {
            axios
                .post(`${BASE_URL}/photosvaloration`, formData, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },
    update: function (valorationId, formData) {
        return new Promise(function (resolve, reject) {
            axios
                .put(`${ BASE_URL }/photosvaloration/${valorationId}`, formData,
                    requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },
    delete: function (valorationId) {
        return new Promise(function (resolve, reject) {
            axios
                .delete(`${ BASE_URL }/photosvaloration/${ valorationId }`, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },
};



export {
    valorationsAPI
};