import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const projectinitialState = {
    projects:[],
    loader:false,
    error:''
}


export const projects_details = createAsyncThunk('projects/fetchProjects', async()=>{
    try{
        const projects = fetch('https://portfolioapi-37q9.onrender.com/api/getProjects')
        if(projects){
            return (await projects).json()
        }
    }
    catch(e){
        throw new Error('Failed to load Projects')
    }
})

const projects_detailSlice = createSlice({
    name:'projects',
    initialState : projectinitialState,
    reducers:{},
    extraReducers:(builder)=>{
    builder
    .addCase(projects_details.pending,(state)=>{
        state.loader = true
        state.error = ''
    })
    .addCase(projects_details.fulfilled,(state, action)=>{
        state.loader = false
        state.projects = action.payload.projects
    })
    .addCase(projects_details.rejected,(state, action)=>{
        state.loader = true
        state.error = action.error.message || 'Failed to get technologies'
    })
    }

    })

export default projects_detailSlice.reducer