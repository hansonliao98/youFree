import axios from "axios";
// base URL extracted from RapidApi const options
const Base_URL = 'https://youtube-v31.p.rapidapi.com'
// we removed /search, from link ^. Because we need it to be open (look in Feed)

// what we pasted in from RapidAPI
const options = {
    // method: 'GET',
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': '6a438e8573msh3ec6982eaee139bp10e94ejsnc1f1f7fa57ce',
        // alternative:
        // 'X-RapidAPI-Key':
        // 'e8a7dbdeccmsh509fc436927e56ep135564jsn27479d7fbd19'

        // 'X-RapidAPI-Key': process.env.ENV_Rapid_API_Key,

        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const FetchFromAPI = async (url) => {
    const { data } = await axios.get(`${Base_URL}/${url}`, options);
    return data;
}

