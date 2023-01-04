import { configureStore } from '@reduxjs/toolkit'
import personalInfoSlice from './slices/personalIfoSlice'
import serviceSlice from './slices/services'


const Store = configureStore({
    reducer:{
        personalInfo: personalInfoSlice,
        service: serviceSlice
    }

})


export default Store