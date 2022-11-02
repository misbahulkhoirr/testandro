import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { API_URL } from '../../../../utils'


export const LOGOUT_ATTEMPT = 'LOGOUT_ATTEMPT'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILED  = 'LOGOUT_FAILED'

export const loading = () =>
{
    return {
        type: LOGOUT_ATTEMPT,
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
        type: LOGOUT_SUCCESS,
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
        type: LOGOUT_FAILED,
        payload:
        {
            isLoading: false,
            data: false,
            errorMessage
        }
    }
}

const logoutAction = ({ navigation }) => 
{
    return async (dispatch) =>
    {
        dispatch(loading())

        const accessToken = await AsyncStorage.getItem('access_token')

        axios({
            method: 'POST',
            url: `${API_URL}/auth/signout`,
            headers:
            {
                Authorization: 'Bearer ' + JSON.parse(accessToken),
                Accept: 'application/json',
            }
        })
        .then(response =>
        {
            AsyncStorage.removeItem('access_token')
            AsyncStorage.removeItem('deviceName')
            AsyncStorage.removeItem('deviceId')
            navigation.replace('Login')
            dispatch(success(response.data))
        })
        .catch(error =>
        {
            dispatch(failed(error.message))
        })
    }
}

export default logoutAction