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
  followingCount: 1,
  followersCount: 1,
  tuits: '1,234'
};

const profileSlice = createSlice({
  name: 'profile',
  initialState: currentProfile
});

export default profileSlice.reducer;