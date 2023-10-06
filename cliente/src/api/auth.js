import axios from "axios";

const URL = 'http://localhost:3000/app'

export const soliRegistro = user=> axios.post(`${URL}/register`, user)