import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadCategories, loadPostsFromCategory} from '../actions/categoryActions'
import { loadPosts } from '../actions/postActions'
import Header from './header'
import PostList from './PostList'
import If from '../utils/If'
import { Grid, Row, Col } from 'react-bootstrap'

class App extends Component {

  componentWillMount() {
    const urlParams = this.props.match.params
    const category = urlParams.category
    this.props.loadCategories()
    this.props.loadPostsFromCategory(category)
  }

  render() {
    const {categories, postsFromCategory, history} = this.props
    let postsToShow = postsFromCategory
    return (
      <div>
        <Header categories={categories} history={history}></Header>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8} >
                <PostList posts={postsToShow}></PostList>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    categories: state.categoryList.categories,
    postsFromCategory : state.categoryList.postsFromCategory
})
const mapDispatchToProps = dispatch => bindActionCreators({ loadCategories, loadPostsFromCategory }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
