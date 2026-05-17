import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const education_initialSate = {
    education:[],
    loader:false,
    error:''
}


export const fetchEducation = createAsyncThunk('education/fetchEducation', async()=>{
    try{
       const res = fetch('https://portfolioapi-37q9.onrender.com/api/getEducation') 
       return (await res).json()
    }
    catch(e){
        throw new Error('Failed to load education')
    }
})


const education_detailSlice = createSlice({
    name: 'education',
    initialState : education_initialSate,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchEducation.pending,(state)=>{
            state.loader = true
        })
        .addCase(fetchEducation.fulfilled,(state, action)=>{
            state.loader = false
            state.education = action.payload.education
        })
        .addCase(fetchEducation.rejected,(state, action)=>{
            state.loader = false
            state.error = action.error.message || 'Failed to get technologies'
        })
    }
})

export default education_detailSlice.reducer