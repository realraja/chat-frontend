import { createSlice } from "@reduxjs/toolkit";

const chatSlicer = createSlice({
  name: "chat",
  initialState: {
    notificationCount: 0,
    newMessageAlert:[{
        chatId: '',
        count:0,
    }]
  },
  reducers: {
    incrementNotification: (state,action) =>{
        state.notificationCount += 1;
    },
    resetNotification: (state,action) =>{
        state.notificationCount = 0;
    },
    setNotification: (state,action) =>{
        state.notificationCount = action.payload;
    },
    setNewMessageAleart: (state,action) =>{
        const chatId = action?.payload?.chatId;
        const intex = state.newMessageAlert.findIndex((item)=> item.chatId === chatId);

        if(intex !== -1){
            state.newMessageAlert[intex].count += 1;
        }else{
            state.newMessageAlert.push({chatId,count:1});
        }
    },
  },
  extraReducers(builder){}
});


export const {incrementNotification,resetNotification,setNotification,setNewMessageAleart} = chatSlicer.actions;

export default chatSlicer;