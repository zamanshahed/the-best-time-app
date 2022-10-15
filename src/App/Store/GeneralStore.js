import axios from 'axios'
import create from 'zustand'
import { ADD_PLACE, GET_ALL_DATA } from '../Utility/Url'

const useGeneralStore = create((set) => ({

    mainData: {},
    setMainData: (value) => set({ mainData: value }),

    selectedSection: {},
    setSelectedSection: (value) => set({ selectedSection: value }),

}))

export default useGeneralStore

// idea: get basic data
export const GetData = async () => {
    const { setMainData } = useGeneralStore.getState();
    try {
        fetch(
            `https://besttime.app/api/v1/keys/pri_c69a34b9bfb742828cb48061e4798b39`, {
            method: 'GET'
        }).then(function (data) {
            console.log(data);
        });
    } catch (error) {
        console.log(error);
        return false;
    }
}


// idea: add new place to account
export const AddPlace = async () => {
    const { setMainData } = useGeneralStore.getState();
    try {
        const params = new URLSearchParams({
            'api_key_private': 'pri_c69a34b9bfb742828cb48061e4798b39',
            'venue_name': 'Novela',
            'venue_address': '662 Mission St San Francisco, CA 94105 United States'
        });

        fetch(`https://besttime.app/api/v1/forecasts?${params}`, {
            method: 'POST'
        }).then(function (data) {
            console.log(data);
        });
    } catch (error) {
        console.log(error);
        return false;
    }
}

