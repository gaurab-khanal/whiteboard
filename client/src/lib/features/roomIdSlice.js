const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    roomId: null,
}


export const roomIdSlice = createSlice({
    name: "roomId",
    initialState ,
    reducers:{
        setRoomId: (state, action) => {
            state.roomId = action.payload;
        }
    }
});


export const { setRoomId } = roomIdSlice.actions;

export default roomIdSlice.reducer;