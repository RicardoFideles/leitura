import React from 'react'
import { Link } from 'react-router-dom'


const PostList = props => {

    const {posts} = props

    return (
            <ul className="list-itens">
                {posts.map(post =>
                    <li className="item" key={post.id}>
                        <span className="rank">1</span>
                        <div className="midcol unvoted">
                            <div className="arrow up" role="button"></div>
                            <div className="score">{post.voteScore}</div>
                            <div className="arrow down"></div>
                        </div>
                        <div className="item-holder">
                            <div className="title">
                                <Link to={`/post/${post.id}`}>
                                    {post.title}
                                </Link>
                                <br></br>
                                <span>Category : <Link to={`/${post.category}`}> {post.category}</Link></span>
                            </div>
                        </div>
                        <ul className="flat-list buttons">
                            <li className="first">
                                <Link className="bylink comments" to={`/post/${post.id}`}>{post.commentCount} comment(s)</Link>
                            </li>
                            <li>
                                <Link className="bylink comments" to={`/post/${post.id}`}>Editar</Link>
                            </li>
                        </ul>
                    </li>
                )}
            </ul>
    )
}

export default PostList