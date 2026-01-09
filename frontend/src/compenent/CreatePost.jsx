import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CreatePost = () => {
    const [newPost,setNewPost] = useState({
        title: "",
        content: "",
    })
    const navigate = useNavigate()
    const handlePost = async (e) => {
        e.preventDefault()
        if(newPost.title === "" || newPost.content === "") {
            alert("the title or the content should not be empty !")
            return
        }
        const token = localStorage.getItem("token")
        if (!token) {
            alert("you need to be logged in to create a new post !")
            return
        }
        try {
            const res = await axios.post("http://localhost:8080/api/posts/createPost"
                ,newPost,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                }
            )
            console.log(res.data)
            navigate("/")
        }catch(error){
            console.log(error)
        }
        

    }
  return (
    <StyledWrapper>
        <div className="form-container">
            <p className="title">Create a new post</p>
            <form className="form" onSubmit={handlePost}>
            <div className="input-group">
                <label htmlFor="username">title</label>
                <input onChange={(e) => setNewPost({...newPost,title:e.target.value})} type="text" name="username" id="username" placeholder />
            </div>
            <div className="input-group">
                <label htmlFor="password">contenet</label>
                <textarea onChange={(e) => setNewPost({...newPost,content:e.target.value})} className='textplace' name="password" id="password" placeholder />
                <div className="forgot">
                
                </div>
            </div>
                <button className="sign">Post</button>
            </form>
        </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
    margin: 0;
    display: flex;
align-items: center;      /* vertical */
justify-content: center;  /* horizontal */

    background-color: #242424;
    min-height: 90vh;
    .form-container {
        width: 320px;
        height: 100%;
        border-radius: 0.75rem;
        background-color: rgba(17, 24, 39, 1);
        padding: 2rem;
        color: rgba(243, 244, 246, 1);
    }

    .title {
        text-align: center;
        font-size: 1.5rem;
        line-height: 2rem;
        font-weight: 700;
    }

    .form {
        margin-top: 1.5rem;
    }

    .input-group {
        margin-top: 0.25rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
    }

    .input-group label {
        display: block;
        color: rgba(156, 163, 175, 1);
        margin-bottom: 4px;
    }

    .input-group input {
        width: 90%;
        border-radius: 0.375rem;
        border: 1px solid rgba(55, 65, 81, 1);
        outline: 0;
        background-color: rgba(17, 24, 39, 1);
        padding: 0.75rem 1rem;
        color: rgba(243, 244, 246, 1);
    }
    .textplace {
        width: 90%;
        height: 100px;
        border-radius: 0.375rem;
        border: 1px solid rgba(55, 65, 81, 1);
        outline: 0;
        background-color: rgba(17, 24, 39, 1);
        padding: 0.75rem 1rem;
        color: rgba(243, 244, 246, 1);
    }

    .input-group input:focus {
        border-color: rgba(167, 139, 250);
    }

    .forgot {
        display: flex;
        justify-content: flex-end;
        font-size: 0.75rem;
        line-height: 1rem;
        color: rgba(156, 163, 175,1);
        margin: 8px 0 14px 0;
    }

    .forgot a,.signup a {
        color: rgba(243, 244, 246, 1);
        text-decoration: none;
        font-size: 14px;
    }

    .forgot a:hover, .signup a:hover {
        text-decoration: underline rgba(167, 139, 250, 1);
    }

    .sign {
        display: block;
        width: 100%;
        background-color: rgba(167, 139, 250, 1);
        padding: 0.75rem;
        text-align: center;
        color: rgba(17, 24, 39, 1);
        border: none;
        border-radius: 0.375rem;
        font-weight: 600;
    }

    .social-message {
        display: flex;
        align-items: center;
        padding-top: 1rem;
    }

    .line {
        height: 1px;
        flex: 1 1 0%;
        background-color: rgba(55, 65, 81, 1);
    }

    .social-message .message {
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        color: rgba(156, 163, 175, 1);
    }

    .social-icons {
        display: flex;
        justify-content: center;
    }

    .social-icons .icon {
        border-radius: 0.125rem;
        padding: 0.75rem;
        border: none;
        background-color: transparent;
        margin-left: 8px;
    }

    .social-icons .icon svg {
        height: 1.25rem;
        width: 1.25rem;
        fill: #fff;
    }

    .signup {
        text-align: center;
        font-size: 0.75rem;
        line-height: 1rem;
        color: rgba(156, 163, 175, 1);
    }`;

export default CreatePost;
