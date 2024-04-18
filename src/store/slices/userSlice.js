import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

// const initialState = {
//     email: null,
//     token: null,
//     id: null,
// };

// const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         setUser(state, action) {
//             state.email = action.payload.email;
//             state.token = action.payload.token;
//             state.id = action.payload.id;
//         },
//         removeUser(state) {
//             state.email = null;
//             state.token = null;
//             state.id = null;
//         },
//     }
// });

// export const { setUser, removeUser } = userSlice.actions;

// export default userSlice.reducer;


const initialState = {
    data: null,
    status: 'loading',
};

export const fetchUserData= createAsyncThunk('news/fetchNews', async (params) => {
    const {data} = await axios.post('/authorization/login/', params);
    return data;
});

const authSlice= createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.pending, (state) => {
                state.status = 'loading';
                state.data = null;
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.status = 'loaded';
                state.items = action.payload;
            })
            .addCase(fetchUserData.rejected, (state, action) => {
                state.status = 'error';
                state.data = null;
            });
    },
});

export const authReducer = authSlice.reducer;


