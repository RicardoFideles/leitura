import React from 'react'
import { Link } from 'react-router-dom'


const PostList = props => {

    const {posts} = props

    return (
            <ul>
                {posts.map(post =>
                    <li>
                        <div class="list-title">
                            {post.title}
                        </div>
                        <span>{post.category}</span>

                    </li>
                )}
            </ul>
    )
}

export default PostList