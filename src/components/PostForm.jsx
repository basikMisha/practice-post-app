import React from "react";
import { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost);
        setPost({title: '', body: ''})
       }

    return (

        

        <form>
            <MyInput
            type= "text" 
            placeholder = "Post title"
            value = {post.title}
            onChange = {event => setPost({...post, title: event.target.value})}
            />
            
            <MyInput
            type= "text"
            placeholder = "Post description"
            value = {post.body}
            onChange = {event => setPost({...post, body: event.target.value})}
            
            />
            <MyButton onClick = {addNewPost}>Add post</MyButton>
      </form>
    )
};

export default PostForm;