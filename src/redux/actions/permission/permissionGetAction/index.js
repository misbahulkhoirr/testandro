import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { API_URL, storeData } from '../../../../utils'

export const PERMISSION_GET_ATTEMPT = 'PERMISSION_GET_ATTEMPT'
export const PERMISSION_GET_SUCCESS = 'PERMISSION_GET_SUCCESS'
export const PERMISSION_GET_FAILED  = 'PERMISSION_GET_FAILED'

export const loading = () => {
    return {
        type: PERMISSION_GET_ATTEMPT,
        payload: {
            isLoading: true,
            data: false,
            errorMessage: false
        }
    }
}

export const success = data => {
    return {
        type: PERMISSION_GET_SUCCESS,
        payload: {
            isLoading: false,
            data,
            errorMessage: false
        }
    }
}

export const failed = errorMessage => {
    return {
        type: PERMISSION_GET_FAILED,
        payload: {
            isLoading: false,
            data: false,
            errorMessage
        }
    }
}

const permissionGetAction = () => {

    return async (dispatch) =>
    {
        
        dispatch(loading())
        
        const accessToken = await AsyncStorage.getItem('access_token')

        axios({
            method: 'GET',
            url: `${API_URL}/permissions`,
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
            console.log('data error permission action = ', error);
            dispatch(failed(error.message))
        })
    }
}

export default permissionGetAction
