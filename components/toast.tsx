import { color, greaterThan } from 'react-native-reanimated'
import {WToast} from 'react-native-smart-tip'

export const showToast = (message: string) =>{
    const toastOptions ={
        data: message,
        textColor: 'green',
        backgroundColor:'#ccc', 
        duration: WToast.duration.SHORT,
        position: WToast.position.BOTTOM

    } 
    WToast.show(toastOptions)
}
export default showToast