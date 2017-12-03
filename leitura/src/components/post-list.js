import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Grid, Row, Col } from 'react-bootstrap';
import { loadPosts } from '../actions/postActions'

class PostList extends Component {

    componentWillMount() {
        this.props.loadPosts()
    }

    render() {
        const {posts} = this.props
        return (
            <Grid>
                <Row className="show-grid">
                    {posts.map(post =>
                            (
                                <Col key={post.id} xs={12} md={8} >
                                    {post.title}
                                </Col>
                            )
                        )}
                </Row>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({posts: state.postList.posts})
const mapDispatchToProps = dispatch => bindActionCreators({ loadPosts }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PostList)