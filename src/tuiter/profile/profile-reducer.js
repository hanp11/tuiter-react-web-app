import {createSlice} from "@reduxjs/toolkit";

const currentProfile = {
  firstName: 'Phyu',
  lastName: 'Han',
  handle: '@phan',
  profilePicture: 'react.jpg',
  bannerPicture: 'fall.jpg',
  bio: 'Student, Software Developer',
  website: 'youtube.com/webdevtv',
  location: 'Boston, MA',
  dateOfBirth: '10/31/2022',
  dateJoined: '10/2022',
  followingCount: 340,
  followersCount: 223,
  tuits: '6,114'
};

const profileSlice = createSlice({
  name: 'profile',
  initialState: currentProfile,
  reducers: {
    editProfile(state, action) {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.bio = action.payload.bio;
      state.location = action.payload.location;
      state.website = action.payload.website;
      state.dateOfBirth = action.payload.dateOfBirth;
    }
  }
});

export const {editProfile} = profileSlice.actions;
export default profileSlice.reducer;