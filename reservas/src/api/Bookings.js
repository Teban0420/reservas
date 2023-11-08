import axios from 'axios'

export const Bookings = axios.create({
    baseURL: 'https://api-gateway.champ.aero/booking/v2'
});