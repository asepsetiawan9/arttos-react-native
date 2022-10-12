import PushNotification from 'react-native-push-notification';
import {store} from '../redux/store';
import {saveToken} from '../redux/reducers/auth';

PushNotification.configure({
  onRegister: ({token}) => {
    // console.log('testes');
    store.dispatch(saveToken(token));
    console.log(token);
    // store.dispatch();
  },
});

PushNotification.createChannel({
  channelId: 'general',
  channelName: 'General Notification',
},
e => {
  console.log(e);
});
