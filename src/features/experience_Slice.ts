import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const experice_initialState = {
    experince_details:[],
    loader:false,
    error:''
}
    
export const experience = createAsyncThunk('experience/fetchExperience',
    async()=>{
        try{
            const experience = fetch('https://portfolioapi-37q9.onrender.com/api/getExperience')
            if(experience){
                return (await experience).json()
            }
        }
        catch(e){
            throw new Error("Failed to load experience")
        }

    }
)

const experience_Slice = createSlice({
    name:'experienceInfo',
    initialState: experice_initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(experience.pending, (state)=>{
            state.loader = true
        })
        .addCase(experience.fulfilled, (state, action)=>{
            state.loader = false
            state.experince_details = action.payload.experience
        })
        .addCase(experience.rejected, (state, action)=>{
            state.loader= false
            state.error= action.error.message || '';
        })
    }
})

export default experience_Slice.reducer