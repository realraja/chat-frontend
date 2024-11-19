import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { server } from "../../constants/config";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: server }),
  tagTypes: ["Chat"],

  endpoints: (builder) => ({
    myChats: builder.query({
      query: () => ({
        url: "/chat/my",
        credentials: "include",
      }),
      providesTags: ["Chat"],
    }),

    searchUser: builder.query({
      query: (name) => ({
        url: `/user/search?name=${name}`,
        credentials: "include",
      }),
      providesTags: ["User"],
    }),

    sendGroupJoinRequest: builder.mutation({
      query: (data) => ({
        url: "/request/send",
        method: "POST",
        credentials: "include",
        body: data,
      }),
      invalidatesTags: ["Chat"],
    }),

    getNotifications: builder.query({
      query: () => ({
        url: "/request/notifications",
        credentials: "include",
      }),
      keepUnusedDataFor: 0,
    }),

    acceptRequest: builder.mutation({
        query: (data) => ({
          url: "/request/accept",
          method: "PUT",
          credentials: "include",
          body: data,
        }),
        invalidatesTags: ["Chat"],
      }),

      getChatDetails: builder.query({
        query: ({chatId,populate = false}) => {
          let url = 'chat/'+chatId;
          if(populate) url += '?populate=true';


          return{
          url,
          credentials: "include",
        }},
        providesTags: ['Chat'],
      }),


  }),
});

export const {
  useMyChatsQuery,
  useLazySearchUserQuery,
  useSendGroupJoinRequestMutation,
  useGetNotificationsQuery,
  useAcceptRequestMutation,
  useGetChatDetailsQuery
} = api;
export default api;
