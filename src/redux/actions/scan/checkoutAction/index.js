import axios from 'axios';
import {API_URL, storeData} from '../../../../utils';
import AsyncStorage from '@react-native-async-storage/async-storage'


export const CHECKOUT_ATTEMPT = 'CHECKOUT_ATTEMPT';
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS';
export const CHECKOUT_FAILED = 'CHECKOUT_FAILED';

export const loading = () => {
  return {
    type: CHECKOUT_ATTEMPT,
    payload: {
      isLoading: true,
      data: false,
      errorMessage: false,
    },
  };
};

export const success = data => {
  return {
    type: CHECKOUT_SUCCESS,
    payload: {
      isLoading: false,
      data,
      errorMessage: false,
    },
  };
};

export const failed = errorMessage => {
  return {
    type: CHECKOUT_FAILED,
    payload: {
      isLoading: false,
      data: false,
      errorMessage,
    },
  };
};

const checkoutAction = (code, navigation, proccess) => {
  console.log('DATA ACTION', code);
  return async dispatch => {
    dispatch(loading());
    dispatch({type: 'SET_LOADING', value: true});
    const accessToken = await AsyncStorage.getItem('access_token')
    const deviceName = await AsyncStorage.getItem('deviceName')
    const deviceId = await AsyncStorage.getItem('deviceId')

    axios({
      method: 'POST',
      url: `${API_URL}/check-out`,
      headers: {
        'Authorization': 'Bearer ' + JSON.parse(accessToken),
        'device-name': JSON.parse(deviceName),
        'device-id': JSON.parse(deviceId),
    },
      data: {
        check_out: code,
      },
    })
      .then(response => {
        console.log('response action = ', response);
        if (response.status < 300) {
          dispatch(success(response.data));
          dispatch({type: 'SET_LOADING', value: false});
          navigation.navigate('Kehadiran')
          proccess.checkoutSuccess()
        }
      })
      .catch(errorMessage => {
        console.log(
          'response action errorMessage = ',
          errorMessage.response.data,
        );
        dispatch(failed(errorMessage.response));
        dispatch({type: 'SET_LOADING', value: false});
        navigation.navigate('ScanScreen')
        proccess.checkoutFailed()
      });
  };
};

export default checkoutAction;
