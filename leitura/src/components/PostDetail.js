import React, { Component } from 'react'
import Header from './header'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadCategories } from '../actions/categoryActions'
import { loadPost } from '../actions/postActions'
import { Grid, Row, Col } from 'react-bootstrap'

class PostDetail extends Component {

    componentWillMount() {
        this.props.loadCategories()

        const urlParams = this.props.match.params
        const postID = urlParams.id

        console.log(postID)

        if (postID !== undefined) {
            console.log('loading post')
            this.props.loadPost(postID)
        }
    }

    render() {
        const {categories, post} = this.props
        return (
            <div>
                <Header categories={categories}></Header>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                            <div>
                                <h1>
                                    {post.title}
                                </h1>
                                <div>
                                    <ul>
                                        <li>
                                            Created : {post.timestamp}
                                        </li>
                                        <li>
                                            Author : {post.author}
                                        </li>
                                        <li>
                                            Category : {post.category}
                                        </li>
                                        <li>
                                            Comments : {post.commentCount}
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    {post.body}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    categories: state.categoryList.categories,
    post : state.postList.post
})
const mapDispatchToProps = dispatch => bindActionCreators({ loadCategories, loadPost }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
