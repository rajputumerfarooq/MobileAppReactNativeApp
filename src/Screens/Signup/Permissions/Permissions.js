import { Alert, PermissionsAndroid, Platform } from 'react-native';

export const androidCameraPermission = () => new Promise(async (resolve, reject) => {
    try {
        if (Platform.OS === 'android' && Platform.Version > 22) {
            const granted = await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.CAMERA,
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
            ]);
            console.log(granted, 'granted response')
            if (
                granted['android.permission.CAMERA'] !== 'granted' ||
                granted['android.permission.WRITE_EXTERNAL_STORAGE'] !== 'granted' ||
                granted['android.permission.READ_EXTERNAL_STORAGE'] !== 'granted'
            ) {
                showError("Don't have required permission.Please allow permissions")
                return resolve(false);
            }
            return resolve(true);
        }

        return resolve(true);
    } catch (error) {
        return resolve(false);
    }
});


export const request_location_runtime_permission = () => new Promise(async (resolve, reject) => {
    try {
        if (Platform.OS === 'android' && Platform.Version > 22) {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': 'ReactNativeCode Location Permission',
                    'message': 'App needs to access your location'
                }

            );
            console.log(granted, 'granted response')
            if (
                granted === PermissionsAndroid.RESULTS.GRANTED
         
            ) {
                Alert.alert("Location Permission Granted")
                return resolve(true);
            }
            else {
                Alert.alert("Location Permission Not Granted")
                return resolve(false);
            }
         
        }

        return resolve(true);
    } catch (error) {
        return resolve(false);
    }
});
