import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const updateUser2 = createAsyncThunk('users/update', async (user) => {
  const response = await axios.post(
    'http://localhost:8800/api/users/1/update',
    user
  );
  return response.data;
});

export const deleteUser2 = createAsyncThunk('users/delete', async (user) => {
  const response = await axios.delete(
    'http://localhost:8800/api/users/1/delete',
    user
  );
  return response.data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: {
      name: 'Bora',
      email: 'bora@gmail.com',
    },
    pending: null,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [updateUser2.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [updateUser2.fulfilled]: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
      state.error = false;
    },
    [updateUser2.rejected]: (state) => {
      state.pending = null;
      state.error = true;
    },
    [deleteUser2.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [deleteUser2.fulfilled]: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
      state.error = false;
    },
    [deleteUser2.rejected]: (state) => {
      state.pending = null;
      state.error = true;
    },
  },
  // reducers: {
  //   updateStart: (state) => {
  //     state.pending = true;
  //   },
  //   updateSuccess: (state, action) => {
  //     state.pending = false;
  //     state.userInfo = action.payload;
  //   },
  //   updateError: (state) => {
  //     state.error = true;
  //     state.pending = false;
  //   },
  // },
});

export const { updateStart, updateSuccess, updateError } = userSlice.actions;
export default userSlice.reducer;
