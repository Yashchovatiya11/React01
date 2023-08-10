import { configureStore } from '@reduxjs/toolkit'
import First from './Component/First'

export default configureStore({
     reducer: {
       conter : First,
  },
})