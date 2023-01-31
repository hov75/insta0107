import { createSlice } from "@reduxjs/toolkit";
import { deletPost } from "../posts/postsSlice";
import { fetchUsers } from "./usersAPI";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        currentUser: null,
        botMess: null
    },
    reducers:{
        toggleCurrentUser(state, {payload}){
            const user = state.data.find(user =>(user.email === payload.login || user.username === payload.login) && user.password === payload.password)
            state.currentUser = user ? user : null
        },
        logOut(state) {
            state.currentUser = null
        },
    
    addNewMessage(state, {payload}) {
        const index = state.data.findIndex(user => user.id === state.currentUser.id)
        const answers = [
            {
                user:'barev',
                bot:'barev'
            },

            {
                user:'vonces',
                bot:'lav du asa'
            },
        ]

        if (payload === '') {
            state.currentUser.messages.push({
                id: new Date().getTime().toString(),
                user: '❤️',
                bot:'❤️'
                
            })

            state.data[index].messages.push({
                id: new Date().getTime().toString(),
                user: '❤️',
                bot:'❤️'
                
            })
        } else {
            state.currentUser.messages.push({
                id: new Date().getTime().toString(),
                user: payload,
                bot: answers.some(el => el.user === payload.toLowerCase()) ?
                answers.find(el => el.user === payload.toLowerCase()).bot :
                'chem manm'
            })

            state.data[index].messages.push({
                id: new Date().getTime().toString(),
                user: payload,
                bot: answers.some(el => el.user === payload.toLowerCase()) ?
                answers.find(el => el.user === payload.toLowerCase()).bot :
                'chem manm'
            })
        }
    },

    addPost(state, {payload}) {
        let index = state.data.findIndex(user => user.id === state.currentUser.id)
        state.data[index].posts.unshift({...payload})
        state.currentUser.posts.unshift({...payload})
    },
       
    deletePost(state, {payload}) {
        let index = state.data.findIndex(user => user.id === state.currentUser.id)
        state.data[index].posts = [...state.data[index].posts.filter(post => post.id !== payload)]
        state.currentUser.posts = [...state.currentUser.posts.filter(post => post.id !== payload)]
    }
        
    },
    extraReducers:{
        [fetchUsers.fulfilled]: (state, {payload}) => {
            return {
                ...state,
                data: [...payload]
            }
        }
    }
})


export const selectUsers = state => state.users

export const {toggleCurrentUser, logOut, addNewMessage, addPost, deletePost } = usersSlice.actions

export const usersReducer = usersSlice.reducer