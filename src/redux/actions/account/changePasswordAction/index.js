import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { API_URL } from '../../../../utils'

export const CHANGE_PASSWORD_ATTEMPT = 'CHANGE_PASSWORD_ATTEMPT'
export const CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS'
export const CHANGE_PASSWORD_FAILED = 'CHANGE_PASSWORD_FAILED'

export const loading = () => {
    return {
        type: CHANGE_PASSWORD_ATTEMPT,
        payload: {
            isLoading: true,
            data: false,
            errorMessage: false
        }
    }
}

export const success = data => {
    return {
        type: CHANGE_PASSWORD_SUCCESS,
        payload: {
            isLoading: false,
            data,
            errorMessage: false
        }
    }
}

export const failed = errorMessage => {
    return {
        type: CHANGE_PASSWORD_FAILED,
        payload: {
            isLoading: false,
            data: false,
            errorMessage
        }
    }
}

const changePasswordAction = (data, navigation, process) =>
{
    console.log('data action = ', data);
    return async dispatch => {
        dispatch(loading())

        const accessToken = await AsyncStorage.getItem('access_token')

        axios({
            method: 'POST',
            url: `${API_URL}/change-password`,
            headers: {
                Authorization: 'Bearer ' + JSON.parse(accessToken)
            },
            data: {
                old_password: data.old_password,
                new_password: data.new_password,
                password_confirmation: data.password_confirmation
            }
        })
            .then(response => {
                console.log('respones action =', response);
                if (response.status < 300) {
                    dispatch(success(response.data))
                    process.setForm('reset')
                    process.success()
                }
            })
            .catch(errorMessage => {
                dispatch(failed(errorMessage.response))
                navigation.navigate('ChangePassword')
            })
    }
}

export default changePasswordAction
