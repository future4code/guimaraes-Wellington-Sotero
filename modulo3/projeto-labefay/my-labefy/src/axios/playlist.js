import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";
import ListenPlaylist from "../components/Playlists";


export const baseURL = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'



export const setPlaylists = (list) => ({
    type: 'SET_PLAYLISTS',
    payload: {
        list
    }
});


export const fetchAllPlaylists = () => async (dispatch) => {
    const token = 'wellington-marcelino-guimaraes'

    const axiosConfig = {
        headers: {
            auth: token
        }
    };

    try {
        const response = await axios.get(`${baseURL}/playlists/getAllPlaylists`, axiosConfig);

        dispatch(setPlaylists(response.data));
    } catch (error) {
        window.alert("Ocorreu um erro ao tentar mostrar playlist")
    }
}



export const createPlaylist = (playlistName) => async (dispatch) => {
    const token = 'wellington-marcelino-guimaraes';

    const axiosConfig = {
        headers: {
            auth: token
        }
    };

    const playlistInformation = {
        name: playlistName,
    }

    try {
        await axios.post(`${baseURL}/playlists/createPlaylist`, playlistInformation, axiosConfig);

        dispatch(fetchAllPlaylists());
    } catch (error) {
        window.alert("Ocorreu um erro ao tentar criar sua playlist")
    }
}