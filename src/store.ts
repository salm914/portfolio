import { configureStore } from '@reduxjs/toolkit'

import  contact_detailSlice  from './features/contact_detailSlice'
import education_detailSlice  from './features/education_detailSlice'
import experience_detailSlice  from './features/experience_Slice'
import personalInfoSlice  from './features/personal_infoSlice'
import  projects_detailSlice  from './features/projects_detailSlice'
import technologies_detailSlice  from  './features/technologies_detailSlice'

const store = configureStore({
    reducer:{
        contact:contact_detailSlice,
        education:education_detailSlice,
        experiencedata:experience_detailSlice,
        personal:personalInfoSlice,
        projects:projects_detailSlice,
        technologies:technologies_detailSlice
    }
})

export default store;