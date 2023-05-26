import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import postService from "../../services/posts";
import Post from "../../components/Post/Post";


const SinglePostPage = () => {
    
    const [post, setPost] = useState({});
    const { id } = useParams();

    useEffect(() => {
        postService.getPost(id).then((res) => setPost(res.data));
    }, []);
    return (
        <div>
            <Post
            id={id}
            post={post}
            title={post.title}
            img={post.img}
            price={post.price}
            date={post.date}
            location={post.location}
            descr={post.descr}
            link={post.link}
            />
        </div>
    );
};

export default SinglePostPage;
