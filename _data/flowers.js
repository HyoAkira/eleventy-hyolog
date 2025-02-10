import axios from "axios";
export default async function () {
    try {
        const response = await axios.get('https://flowers-mock-data.firebaseio.com/flowers.json');
        return response.data;
    } catch (error) {
        console.error('Error:', error);
    }
}