import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { API_URL, storeData } from '../../../../utils'

export const PERMISSION_TYPE_ATTEMPT = 'PERMISSION_TYPE_ATTEMPT'
export const PERMISSION_TYPE_SUCCESS = 'PERMISSION_TYPE_SUCCESS'
export const PERMISSION_TYPE_FAILED  = 'PERMISSION_TYPE_FAILED'

export const loading = () => {
    return {
        type: PERMISSION_TYPE_ATTEMPT,
        payload: {
            isLoading: true,
            data: false,
            errorMessage: false
        }
    }
}

export const success = data => {
    return {
        type: PERMISSION_TYPE_SUCCESS,
        payload: {
            isLoading: false,
            data,
            errorMessage: false
        }
    }
}

export const failed = errorMessage => {
    return {
        type: PERMISSION_TYPE_FAILED,
        payload: {
            isLoading: false,
            data: false,
            errorMessage
        }
    }
}

const permissionTypeAction = () => {

    return async (dispatch) =>
    {
        
        dispatch(loading())
        
        const accessToken = await AsyncStorage.getItem('access_token')

        axios({
            method: 'GET',
            url: `${API_URL}/permission-types`,
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
            console.log('data error permission-types action = ', error);
            dispatch(failed(error.message))
        })
    }
}

export default permissionTypeAction
