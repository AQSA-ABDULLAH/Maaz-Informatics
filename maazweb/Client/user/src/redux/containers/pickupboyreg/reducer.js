import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
  name: "root",
  initialState: {
    email: "",
    name:"",
    city:"",
    phoneNumber:"",
    cnicNumber:"",
    picture:"",
    cnicFront:"",
    cnicBack:"",
    drivingLicense:"",
    vehiclePapers:"",
  },
  reducers: {
    chooseEmail: (state, action) => { state.email = action.payload },
    chooseName: (state, action) => { state.name = action.payload },
    chooseCity: (state, action) => { state.city = action.payload },
    choosePhoneNumber: (state, action) => { state.phoneNumber = action.payload },
    choosePhoneNumber: (state, action) => { state.phoneNumber = action.payload },
    chooseCNIC: (state, action) => { state.cnicNumber = action.payload },
    choosePicture: (state, action) => { state.picture = action.payload },
    chooseCnicFront:(state, action) => { state.cnicFront = action.payload },
    chooseCnicBack:(state, action) => { state.cnicBack = action.payload },
    chooseDrivingLicense:(state, action) => { state. drivingLicense = action.payload },
    chooseVehiclePapers:(state, action) => { state.vehiclePapers = action.payload },
  }
})

export const reducer = rootSlice.reducer;

export const {chooseEmail,chooseName ,chooseCity, choosePhoneNumber,chooseCNIC,choosePicture, chooseCnicFront,chooseCnicBack,chooseDrivingLicense,chooseVehiclePapers} = rootSlice.actions;
