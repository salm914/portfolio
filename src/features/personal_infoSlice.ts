import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// create initial state of personal infor
const personalInfoInitialState = {
    name: '',
    designation: '',
    projectsCount: '',
    experienceYears: '',
    resumeButtonText: '',
    about: '',
    loading: false,
    error: '',
    location: '',
    
}


// create function to fetch personal info data from api
export const fetchPersonalInfo = createAsyncThunk(
    'personalInfo/fetchPersonalInfo',
    async () => {
        try{  
            const personalInformation = await fetch('https://portfolioapi-37q9.onrender.com/api/personalInfo')
            if(personalInformation.ok){
                return personalInformation.json();
            }
        } catch(error){
            throw new Error('Failed to fetch personal info  data')
        }
    }
)
    
const personalInfoSlice = createSlice({
    name: 'personalInfo',
    initialState: personalInfoInitialState,
    reducers: {},
    extraReducers:(builder) => {
        builder
        .addCase(fetchPersonalInfo.pending, (state)=>{
            state.loading = true;
            state.error = '';
        })

        .addCase(fetchPersonalInfo.fulfilled, (state, action)=>{
            state.loading = false;
            state.name = action.payload.personalInfo.name;
            state.designation = action.payload.personalInfo.designation;
            state.projectsCount = action.payload.personalInfo.projectsCount;
            state.experienceYears = action.payload.personalInfo.experienceYears;
            state.resumeButtonText = action.payload.personalInfo.resumeButtonText;
            state.about = action.payload.personalInfo.about;
            state.location = action.payload.personalInfo.location;
        })

        .addCase(fetchPersonalInfo.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message || '';
        })
    }
})

export default personalInfoSlice.reducer;