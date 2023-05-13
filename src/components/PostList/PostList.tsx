import {useEffect, useState} from "react"
import { PostView } from "../PostView/PostView"
import { EditForm } from "../EditForm/EditForm"
import './PostList.css'
import {Postmodel} from "../../models/postmodel";
import {CreatePostAsync, DeletePostAsync, GetPostsAsync, UpdatePostAsync} from "../../services/PostServiceAsync"

export function PostList() {
    let [posts, setPosts] = useState<Postmodel[]>([])
    let [post, setPost] = useState<Postmodel|undefined>()

    async function initPosts(){
        const posts = await GetPostsAsync();
        console.log(posts);
        setPosts(posts);
    }
    useEffect(()=>{
        initPosts();
    },[])
    function createPost() {
        setPost({
            id: "none",
            title: " ",
            description: " ",
            author: " ",
            preview:" "
        })
    } 


    async function addPost(model:Postmodel) {
        const result = await CreatePostAsync(model);
        setPosts([...posts, result])
        createPost()
    }
    async function updatePost(model:Postmodel) {
        const result = await UpdatePostAsync(model)
        const newPosts = posts.map((i:Postmodel)=>{
            if(i.id === result.id){
                return result;
            }
            return i;
        });
        setPosts(newPosts)
        createPost()
    }

    async function removePost(id:string) {
        await DeletePostAsync(id)
        setPosts(posts.filter(i => i.id !== id))
    }

    function selectForEdit(id:string) {
        const post = posts.filter(i => i.id === id)[0];
        setPost(post)
    }


    return (
        <div>
            <div>
                <button className="crt-btn" onClick={(e) => { createPost(); } }>Create post</button>
            </div>
            <div className="newList">
                {posts?.map((i) => <PostView key={i.id}
                    onClick={selectForEdit}
                                             model={i}
                                             OnDeleteClick={removePost} />)}
            </div>
            <EditForm model={post} onAdd={addPost} onEdit={updatePost}></EditForm>
        </div>
    )
}