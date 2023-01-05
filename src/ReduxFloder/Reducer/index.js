import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Data from './Data';
import Step1 from './Step1';
import Step2 from './Step2';
import list from './list'
import Other from './Other';
import OneToOne from './OneToOne';
import Vehicle from './Vehicle';
import Business from './Business';
import House from './House';
import Spouse from './Spouse';
import Names from './Names';
import Editname from './Editname';
import EditNameChange from './EditNameChange';
import ProfileImage from './ProfileImage';
import Element from './Element';
import Ele from './Ele';
import TravelData from './TravelData';
import Edit from './Edit';


const persistConfig = {
    key:'root',
    storage:AsyncStorage,
    whitelist:['Data']
}
const allReducers = combineReducers({
    // ALL REDUCERS 
    Data:Data,
    Step1:Step1,
    list:list,
    Step2:Step2,
    Other:Other,
    OneToOne:OneToOne,
    Vehicle:Vehicle,
    Business:Business,
    House:House,
    Spouse:Spouse,
    Names:Names,
    Editname:Editname,
    EditNameChange:EditNameChange,
    ProfileImage:ProfileImage,
    Element:Element,
    Ele:Ele,
    TravelData:TravelData,
    Edit:Edit
})

export default persistReducer(persistConfig, allReducers);