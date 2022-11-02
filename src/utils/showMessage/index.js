import { showMessage } from 'react-native-flash-message';
import {colors} from '../colors';

export const showError = message => {
  showMessage({
    message: message,
    type: 'default',
    backgroundColor: colors.error,
    color: 'white',
    zIndex:99
  });
};

export const showSuccess = message => {
  showMessage({
    message: message,
    type: 'default',
    backgroundColor: colors.success,
    color: 'white',
  });
};

export const showWarning = message => {
  showMessage({
    message: message,
    type: 'default',
    backgroundColor: colors.warning,
    color: 'white',
  });
};
