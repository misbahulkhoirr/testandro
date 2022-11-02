import axios from 'axios';
import {API_URL, storeData} from '../../../../utils';
import AsyncStorage from '@react-native-async-storage/async-storage'


export const CHECKIN_ATTEMPT = 'CHECKIN_ATTEMPT';
export const CHECKIN_SUCCESS = 'CHECKIN_SUCCESS';
export const CHECKIN_FAILED = 'CHECKIN_FAILED';

export const loading = () => {
  return {
    type: CHECKIN_ATTEMPT,
    payload: {
      isLoading: true,
      data: false,
      errorMessage: false,
    },
  };
};

export const success = data => {
  return {
    type: CHECKIN_SUCCESS,
    payload: {
      isLoading: false,
      data,
      errorMessage: false,
    },
  };
};

export const failed = errorMessage => {
  return {
    type: CHECKIN_FAILED,
    payload: {
      isLoading: false,
      data: false,
      errorMessage,
    },
  };
};

const checkinAction = (code, latitude, longitude, navigation, process) => {
  console.log('CODE ACTION', code);
  console.log('DATA latitude', latitude);
  console.log('DATA longitude', longitude);
  return async dispatch => {
    dispatch(loading());
    dispatch({type: 'SET_LOADING', value: true});
    const accessToken = await AsyncStorage.getItem('access_token')
    const deviceName = await AsyncStorage.getItem('deviceName')
    const deviceId = await AsyncStorage.getItem('deviceId')
    console.log('device.', JSON.parse(deviceId), JSON.parse(deviceName));
    axios({
      method: 'POST',
      url: `${API_URL}/check-in`,
      headers: {
        'Authorization': 'Bearer ' + JSON.parse(accessToken),
        'device-name': JSON.parse(deviceName),
        'device-id': JSON.parse(deviceId),
    },
      data: {
        check_in: code,
        longitude: longitude,
        latitude: latitude,
      },
    })
      .then(response => {
        console.log('response action = ', response);
        if (response.status < 300) {
          dispatch(success(response.data));
          dispatch({type: 'SET_LOADING', value: false});
          navigation.navigate('Kehadiran')
          process.checkinSuccess()
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
        process.checkinFailed()
      });
  };
};

export default checkinAction;
