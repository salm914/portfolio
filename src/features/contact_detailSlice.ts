import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const contactiInitialState  = {
    phone:'',
    email:'',
    location:'',
    loading:false,
    error:''
}

export const contactInfo = createAsyncThunk('contactInfo/fetchContactInfo',async ()=>{
    try {
        const contactInfoData = fetch('https://portfolioapi-37q9.onrender.com/api/contactDetails')
        if(contactInfoData){
            return (await contactInfoData).json()
        }

    }catch(e) {
        throw new Error("Failed to fetch contact details")
    }

})

 const contact_detailSlice = createSlice({
    name:'contacts',
    initialState:contactiInitialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(contactInfo.pending, (state)=>{
            state.loading=true
            state.error = ''
        })

        .addCase(contactInfo.fulfilled, (state, action)=>{
            state.loading = false;
            state.phone = action.payload.contactDetails.phone
            state.email = action.payload.contactDetails.email
            state.location = action.payload.contactDetails.location
        })

      .addCase(contactInfo.rejected, (state, action)=>{
             state.loading = false;
            state.error = action.error.message || '';
        })

    }

})

export default contact_detailSlice.reducer