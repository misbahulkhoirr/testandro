import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { API_URL, storeData } from '../../../../utils'

export const PERMISSION_STORE_ATTEMPT = 'PERMISSION_STORE_ATTEMPT'
export const PERMISSION_STORE_SUCCESS = 'PERMISSION_STORE_SUCCESS'
export const PERMISSION_STORE_FAILED  = 'PERMISSION_STORE_FAILED'

export const loading = () => {
    return {
        type: PERMISSION_STORE_ATTEMPT,
        payload: {
            isLoading: true,
            data: false,
            errorMessage: false
        }
    }
}

export const success = data => {
    return {
        type: PERMISSION_STORE_SUCCESS,
        payload: {
            isLoading: false,
            data,
            errorMessage: false
        }
    }
}

export const failed = errorMessage => {
    return {
        type: PERMISSION_STORE_FAILED,
        payload: {
            isLoading: false,
            data: false,
            errorMessage
        }
    }
}

const permissionStoreAction =(data,navigation, process) => {
    console.log('process', process)
    return async dispatch => {
        dispatch(loading())

        const accessToken = await AsyncStorage.getItem('access_token')

        axios({
            method: 'POST',
            url: `${API_URL}/permissions`,
            headers: {
                Authorization: 'Bearer ' + JSON.parse(accessToken)
            },
            data: {
                permission_type: data.permission_type.id,
                description: data.description,
                from_date: data.from_date,
                to_date: data.to_date
            }
        })
            .then(response => {
                console.log('response', response.data)
                dispatch(success(response.data))
                navigation.navigate('History')
                process.success()
                process.setForm('reset')
            })
            .catch(errorMessage => {
                console.log('response action errorMessageMessage = ', errorMessage.response.data);
                dispatch(failed(errorMessage.response))
            })
    }
}

export default permissionStoreAction
