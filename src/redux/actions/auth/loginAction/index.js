import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { API_URL, storeData } from '../../../../utils'

export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED  = 'LOGIN_FAILED'

export const loading = () => {
    return {
        type: LOGIN_ATTEMPT,
        payload: {
            isLoading: true,
            data: false,
            errorMessage: false
        }
    }
}

export const success = data => {
    return {
        type: LOGIN_SUCCESS,
        payload: {
            isLoading: false,
            data,
            errorMessage: false
        }
    }
}

export const failed = errorMessage => {
    return {
        type: LOGIN_FAILED,
        payload: {
            isLoading: false,
            data: false,
            errorMessage
        }
    }
}

const loginAction = (data, navigation) => {
    return async dispatch => {
        dispatch(loading())
        dispatch({ type: 'SET_LOADING', value: true })
        const deviceName = await AsyncStorage.getItem('deviceName')
        const deviceId = await AsyncStorage.getItem('deviceId')
       
        axios({
            method: 'POST',
            url: `${API_URL}/auth/signin`,
            headers:
            {
                'device-name': JSON.parse(deviceName),
                'device-id': JSON.parse(deviceId),
            },
            data: {
                username: data.username,
                password: data.password
            }
        })
            .then(response => {
                console.log('response action = ', response);
                if (response.status < 300) {
                    dispatch(success(response.data))
                    dispatch({ type: 'SET_LOADING', value: false })
                    storeData('access_token', response.data.token)
                    navigation.replace('MainApp')
                }
            })
            .catch(errorMessage => {
                console.log('response action errorMessage = ', errorMessage.response.data);
                dispatch(failed(errorMessage.response))
                dispatch({ type: 'SET_LOADING', value: false })
                AsyncStorage.removeItem('access_token')
            })
    }
}

export default loginAction
