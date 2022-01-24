import axios from "axios";

export default class CountriesService {
    static async getAll() {
        try {
            const response = await axios.get('https://api.covid19api.com/summary');
            // console.log(response)
            return response.data.Countries;

        } catch (e) {
            console.log(e)
        }
    }
}