import { useSelector } from "react-redux"
import { selectAllPosts } from "./postSlice"
import PostAuthor from "./PostAuthor"
import TimeAgo from "./TimeAgo"
import ReactionButtons from "./ReactionButtons"

const PostLists = () => {
  const posts = useSelector(selectAllPosts)

  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
  
  const renderedPosts = orderedPosts?.map(post => (
    <article key={post.id}>
        <h3>{ post.name }</h3>
        <p>{ post.content }</p>
        <p className="postCredit">
            <PostAuthor userId={post.userId}/>
            <TimeAgo timeStamp={post.date}/>
        </p>
        <ReactionButtons post={ post }/>
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