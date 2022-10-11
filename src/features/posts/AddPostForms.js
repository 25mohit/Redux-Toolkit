import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { postAdded } from "./postSlice"
import { selectAllUsers } from "../users/userSlice"

const AddPostForms = () => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const users = useSelector(selectAllUsers)

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)

    const onPostSave = (e) => {
        e.preventDefault();
        if( title && content ) {
            dispatch(
                postAdded (title, content, userId)
            )
            setTitle('')
            setContent('')
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
    
    const usersOptions = users?.map(user => (
        <option key={user.id} value={user.id}>
            { user.name }
        </option>
    ))

  return (
    <section>
        <h2>Add a New Post</h2>
        <form>
            <label>Post Title :</label>
            <input type="text" name="postTitle" value={ title } onChange={ onTitleChanged }/>

            <label>Author :</label>
            <select value={userId} onChange={onAuthorChanged}>
                <option value=""></option>
                {usersOptions}
            </select>
            
            <label>Content :</label>
            <textarea value={content} onChange={onContentChanged}/>
            <button onClick={ onPostSave } disabled={!canSave}>Save Post</button>
        </form>
    </section>
  )
}

export default AddPostForms