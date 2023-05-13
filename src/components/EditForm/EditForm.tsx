import { useEffect } from "react";
import { useState } from "react";
import './EditForm.css'
import {Postmodel} from "../../models/postmodel";

interface Props{
    model:Postmodel|undefined,
    onEdit:(model:Postmodel)=>void,
    onAdd:(model:Postmodel)=>void
}
export function EditForm({ model, onEdit, onAdd }:Props) {
    let [id, setId] = useState("none")
    let [title, setTitle] = useState("new")
    let [description, setDescription] = useState("new")
    let [preview, setPreview] = useState("new")
    let [author, setAuthor] = useState("new") 

    useEffect(() => {
        console.log("use effect")
        if (model != null) {
            setId(model?.id)
            setTitle(model?.title)
            setDescription(model?.description)
            setAuthor(model?.author)
            setPreview(model?.preview)
        }
    },[model])

    function Submit(e:any) {
        e.preventDefault();
        const model:Postmodel = { id: id, title: title, description: description, preview: preview, author: author };
        if (model.id === 'none') {
            onAdd(model)
        } else {
            onEdit(model)
        }
    }

    return (
        <div className="editform-body">
            <div>Form for news</div>
            <form>
                <label>Id:</label>
                <label>{id}</label>
                <label>Title:</label>
                <input value={title} type='text' onChange={e => setTitle(e.target.value)} />
                <label>Description:</label>
                <input value={description} type='text' onChange={e => setDescription(e.target.value)} />
                <label>Preview:</label>
                <input value={preview} type='text' onChange={e => setPreview(e.target.value)} />
                <img src={preview} alt={preview}></img>
                <label>Author</label>
                <input value={author} type='text' onChange={e => setAuthor(e.target.value)} />
                <div className="submitButton">
                    <input className="submitButton" type='submit' onClick={e => Submit(e)}
                        value={model?.id === 'none' || model?.id==null  ? "Create" : "Apply"} />
                </div>
            </form>
        </div>
    );
}