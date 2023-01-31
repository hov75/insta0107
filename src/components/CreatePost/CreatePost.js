import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import IMAGES from '../../images';
import { selectUsers } from '../../store/slices/users/usersSlice';
import './CreatePost.css'
import { addPost as addPostUsers } from '../../store/slices/users/usersSlice';
import { addPost as addPostPost } from '../../store/slices/posts/postsSlice';

const CreatePost = () => {
    const dispatch = useDispatch()

    const {currentUser} = useSelector(selectUsers)
    const navigation = useNavigate()

    useEffect(() => {
        if (!currentUser) {
            navigation('/login')
        }
    },[currentUser])
    const formRef = useRef(null)
    const handelSubmit = (e) => {
        e.preventDefault()
        const {img:{value:img}, desc:{value:desc}} = formRef.current

        const post = {
            id: new Date().getTime().toString(),
            name: currentUser.username.toLowerCase(),
            likesCount: Math.round(Math.random() * 3000 + 3000),
            timeAgo:Math.round(Math.random() * 8 + 2) + 'Minute Ago',
            postText: desc,
            img: img,
            comments: []
        }

        dispatch(addPostUsers(post))
        dispatch(addPostPost(post))
        navigation('/')
    
    }
    return (
        <div style={{marginTop: '100px', textAlign: 'center'}} className='container'>
            <h1 style={{fontSize: '50px' }}>Create Post</h1>
            <br/>
            <img style={{margin:'auto'}} width='100px' src={IMAGES.createPost} alt="" />   
            <br/>
            <form onSubmit={(handelSubmit)} ref={formRef}>
                <input name='img' type="text"  placeholder='img' /><br/><br/>
                <input name='desc' type="text"  placeholder='desc'/><br/><br/>
                <button>ADD</button>
            </form>
        </div>
    );
}

export default CreatePost;
