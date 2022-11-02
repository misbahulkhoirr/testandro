import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { API_URL } from '../../../../utils'

export const ATTENDANCES_ATTEMPT = 'ATTENDANCES_ATTEMPT'
export const ATTENDANCES_SUCCESS = 'ATTENDANCES_SUCCESS'
export const ATTENDANCES_FAILED  = 'ATTENDANCES_FAILED'

export const loading = () =>
{
    return {
        type: ATTENDANCES_ATTEMPT,
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
        type: ATTENDANCES_SUCCESS,
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
        type: ATTENDANCES_FAILED,
        payload:
        {
            isLoading: false,
            data: false,
            errorMessage
        }
    }
}

const attendancesAction = () => 
{
    return async (dispatch) =>
    {
        
        dispatch(loading())
        
        const accessToken = await AsyncStorage.getItem('access_token')

        axios({
            method: 'GET',
            url: `${API_URL}/attendances`,
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

export default attendancesAction