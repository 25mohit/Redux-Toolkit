import { useDispatch } from "react-redux"
import { reactionAdded } from "./postSlice"

const reactionEmoji = {
    thumsUp: "👍",
    wow: "😮",
    heart: "💓",
    rocket: "🚀",
    coffee: "🍵"
}
const ReactionButtons = ({ post }) => {

    const dispatch = useDispatch()

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {

        return (
            <div>ReactionButtons</div>
            )
    })

    return <div>{ reactionButtons }</div>
}

export default ReactionButtons