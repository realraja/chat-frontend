import { createSlice } from "@reduxjs/toolkit";
import { getOrSaveLocalStorage } from "../../lib/features";
import { NEW_MESSAGE_ALERT } from "../../constants/events";

const chatSlicer = createSlice({
  name: "chat",
  initialState: {
    notificationCount: 0,
    newMessageAlert: getOrSaveLocalStorage({key:NEW_MESSAGE_ALERT,get:true}) ||[{
        chatId: '',
        count:0,
    }],
    Typing:[{
        chatId: '',
        name: '',
        typing: false
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
    removeNewMessageAleart: (state,action) =>{
        const chatId = action?.payload?.chatId;
        state.newMessageAlert = state.newMessageAlert.filter(x => x.chatId !== chatId);
    },
    setTyping: (state,action) =>{
        const chatId = action?.payload?.chatId;
        const intex = state.Typing.findIndex((item)=> item.chatId === chatId);

        if(intex !== -1){
            state.Typing[intex].typing = action?.payload?.typing;
            state.Typing[intex].name = action?.payload?.name;
        }else{
            state.Typing.push({chatId,typing:true,name:action?.payload?.name});
        }
    },
  },
  extraReducers(builder){}
});


export const {incrementNotification,resetNotification,setNotification,setNewMessageAleart,removeNewMessageAleart,setTyping} = chatSlicer.actions;

export default chatSlicer;