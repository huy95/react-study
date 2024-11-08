import instance from "./axio.customize";


const createUserAPI = (fullName, email, password, phone) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    return instance.post(URL_BACKEND, data);
}

const updateUserAPI = () => {

}

export {
    createUserAPI, updateUserAPI
}
