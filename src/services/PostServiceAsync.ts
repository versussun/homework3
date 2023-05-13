import {Postmodel} from "../models/postmodel";
import {json} from "stream/consumers";
const path:string="https://localhost:7178/posts"


    export async function GetPostsAsync(){
        const res = await fetch(`${path}`);
        return res.json();
    }
    export async function CreatePostAsync(model:Postmodel):Promise<Postmodel> {
        const res = await  fetch(`${path}`,
            {
                method:'POST',
                body:JSON.stringify(model),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });
        return  res.json();
    }
    export async function UpdatePostAsync(model:Postmodel):Promise<Postmodel>{
        const res = await  fetch(`${path}/${model.id}`,
            {
                method:'PUT',
                body:JSON.stringify(model),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });
        return res.json()
    }
    export async function DeletePostAsync(id:string) {
        await fetch(`${path}/${id}`, {
            method: 'DELETE'
        });
    }
