import './PostView.css'
import {Postmodel} from "../../models/postmodel";

interface Props{
    model:Postmodel
    onClick: (id:string)=>void,
    OnDeleteClick: (id:string)=>void
}

export function PostView(props:Props) {
    
    return (
        <div className="postView" onClick={()=>props.onClick(props.model.id)} >
            <div className="postView-img" style={{
                width: '100%',
                height: '100%',
                backgroundSize: '100% 100%',
                backgroundImage: `url(${props.model.preview})`
            }}>
                <div className='postView-closeButton'>
                    <button onClick={(e) => {
                        e.stopPropagation()
                        props.OnDeleteClick(props.model.id)
                    }}>
                        X
                    </button>
                </div>
            </div>

            <div className="postView-title">
                <div>{props.model.title}</div>
                <div>{props.model.author}</div>
            </div>
        </div>
    );
}