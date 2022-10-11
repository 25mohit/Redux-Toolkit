import { useSelector, useDispatch } from "react-redux"
import { selectAllPosts } from "./postSlice"

const PostLists = () => {
  const posts = useSelector(selectAllPosts)
    console.log(posts);
  const renderedPosts = posts?.map(post => (
    <article key={post.id}>
        <h3>{ post.name }</h3>
        <p>{ post.content }</p>
    </article>
  ))

  return (
    <section>
        <h2>Posts</h2>
        { renderedPosts }
    </section>
  )
}

export default PostLists