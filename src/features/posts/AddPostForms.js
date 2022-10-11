import { useState } from "react"
import { useDispatch } from "react-redux"
import { nanoid } from "@reduxjs/toolkit"
import { postAdded } from "./postSlice"

const AddPostForms = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const dispatch = useDispatch()

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const onPostSave = (e) => {
        e.preventDefault();
        if( title && content ) {
            dispatch(
                postAdded (title, content)
            )
            setTitle('')
            setContent('')
        }
    }
    console.log(title, content);

  return (
    <section>
        <h2>Add a New Post</h2>
        <form>
            <label>Post Title :</label>
            <input type="text" name="postTitle" value={ title } onChange={ onTitleChanged }/>
            <label>Content :</label>
            <textarea value={content} onChange={onContentChanged}/>
            <button onClick={ onPostSave }>Save Post</button>
        </form>
    </section>
  )
}

export default AddPostForms