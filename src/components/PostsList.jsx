import NavFilter from './components/NavFilter'
import Card from './components/Card'
import { posts } from './assets/data'

const PostsList = () => {
    return (
        <div className="posts-list-container">
            <NavFilter />
            <div className="post-list">
                {posts.map((post, index) => (
                    <Card key={index} {...post} />
                ))}
            </div>
        </div>
    )
}

export default PostsList
