import { configureStore } from '@reduxjs/toolkit'
import personalInfoSlice from './slices/personalIfoSlice'
const Store = configureStore({
    reducer:{
        personalInfo: personalInfoSlice
    }

})


export default Store