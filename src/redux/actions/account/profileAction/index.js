import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { API_URL } from '../../../../utils'

export const PROFILE_ATTEMPT = 'PROFILE_ATTEMPT'
export const PROFILE_SUCCESS = 'PROFILE_SUCCESS'
export const PROFILE_FAILED  = 'PROFILE_FAILED'

export const loading = () =>
{
    return {
        type: PROFILE_ATTEMPT,
        payload:
        {
            isLoading: true,
            data: false,
            errorMessage: false
        }
    }
}

export const success = (data) =>
{
    return {
        type: PROFILE_SUCCESS,
        payload:
        {
            isLoading: false,
            data,
            errorMessage: false
        }
    }
}

export const failed = (errorMessage) =>
{
    return {
        type: PROFILE_FAILED,
        payload:
        {
            isLoading: false,
            data: false,
            errorMessage
        }
    }
}

const profileAction = () => 
{
    return async (dispatch) =>
    {
        
        dispatch(loading())
        
        const accessToken = await AsyncStorage.getItem('access_token')

        axios({
            method: 'GET',
            url: `${API_URL}/profile`,
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
            console.log('data error profile action = ', error);
            dispatch(failed(error.message))
        })
    }
}

export default profileAction