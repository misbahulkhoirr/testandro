import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { API_URL, storeData } from '../../../../utils'

export const STATISTIC_ATTEMPT = 'STATISTIC_ATTEMPT'
export const STATISTIC_SUCCESS = 'STATISTIC_SUCCESS'
export const STATISTIC_FAILED  = 'STATISTIC_FAILED'

export const loading = () => {
    return {
        type: STATISTIC_ATTEMPT,
        payload: {
            isLoading: true,
            data: false,
            errorMessage: false
        }
    }
}

export const success = data => {
    return {
        type: STATISTIC_SUCCESS,
        payload: {
            isLoading: false,
            data,
            errorMessage: false
        }
    }
}

export const failed = errorMessage => {
    return {
        type: STATISTIC_FAILED,
        payload: {
            isLoading: false,
            data: false,
            errorMessage
        }
    }
}

const statisticAction = () => {

    return async (dispatch) =>
    {
        
        dispatch(loading())
        
        const accessToken = await AsyncStorage.getItem('access_token')

        axios({
            method: 'GET',
            url: `${API_URL}/statistics`,
            headers:
            {
                'Authorization': 'Bearer ' + JSON.parse(accessToken),
            }
        })
        .then(response =>
        {

            dispatch(success(response.data))

        })
        .catch(error =>
        {
            console.log('data error statistics action = ', error);
            dispatch(failed(error.message))
        })
    }
}

export default statisticAction
