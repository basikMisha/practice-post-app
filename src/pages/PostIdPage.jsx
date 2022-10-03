import React from "react";
import {useParams} from "react-router-dom";
import { useEffect } from "react"
import { useFetching } from "../hooks/useFetching";
import { useState } from "react";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    //posts
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });
    //posts comment
    const [fetchComment, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id);
        setComments(response.data)
    });

    useEffect(() => {
        fetchPostById(params.id);
        fetchComment(params.id)
    }, [])

    return (
        <div>
            <h1>Post Page with ID = {params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div>{post.id}. {post.title}</div>
            }
            <h1>
                Comments
            </h1>
            {isComLoading
                ? <Loader/>
                : <div>
                    {comments.map(comm =>
                        <div key={comm.id} style={{marginTop: 20}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                        
                    )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;