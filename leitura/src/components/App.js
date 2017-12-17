import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadCategories } from '../actions/categoryActions'
import { loadPosts } from '../actions/postActions'
import Header from './header'
import PostList from './PostList'
import { Grid, Row, Col } from 'react-bootstrap'
import ModalForm from './ModalForm'
import { openModal } from '../actions/modalActions'

class App extends Component {

  componentWillMount() {
    this.props.loadCategories()
    this.props.loadPosts()
  }

  open() {
    console.log('cliqueo para abrir o modal')
    this.props.openModal()
  }

  render() {
    const {categories, posts} = this.props
    return (
      <div>
        <Header categories={categories}></Header>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8} >
                <PostList posts={posts}></PostList>
            </Col>

            <div className="open-search">
              <button onClick={() => this.open()}>Add Post</button>
            </div>
          </Row>
        </Grid>
        <ModalForm />
      </div>
    )
  }
}

const mapStateToProps = state => ({
    categories: state.categoryList.categories,
    posts : state.postList.posts
})
const mapDispatchToProps = dispatch => bindActionCreators({ openModal, loadCategories, loadPosts }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
