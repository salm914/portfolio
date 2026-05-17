import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const tech_initialState = {
    technology :[],
    loader:false,
    error:''
}

export const technologiesThunk = createAsyncThunk(
    'technologies/technologiesThunk', async()=>{
        try{
            const res = fetch('https://portfolioapi-37q9.onrender.com/api/getTechnologies')
            return (await res).json()
        }
        catch(e){
            throw new Error('Faioled to get technologies')
        }
    }
)

const technologies_detailSlice = createSlice({
    name:'technology',
    initialState:tech_initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(technologiesThunk.pending, (state)=>{
            state.loader = true
        })
        .addCase(technologiesThunk.fulfilled, (state, action)=>{
            state.loader = false
            state.technology = action.payload.technologies;
            
        })
        .addCase(technologiesThunk.rejected, (state, action)=>{
            state.loader = false
            state.error = action.error.message || 'Failed to get technologies'
        })

    }
})

export default technologies_detailSlice.reducer