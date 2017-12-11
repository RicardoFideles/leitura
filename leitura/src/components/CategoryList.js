import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Grid, Row, ButtonToolbar, Button } from 'react-bootstrap';
import { loadCategories } from '../actions/categoryActions'

class CategoryList extends Component {

    componentWillMount() {
        this.props.loadCategories()
    }

    render() {
        const {categories} = this.props
        return (
            <Grid>
                <Row className="show-grid">
                    <ButtonToolbar>
                        {categories.map(category =>
                            (
                                <Button key={category.react} bsStyle="info" bsSize="large">
                                    {category.name}
                                </Button>
                            )
                        )}
                    </ButtonToolbar>
                </Row>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({categories: state.categoryList.categories})
const mapDispatchToProps = dispatch => bindActionCreators({ loadCategories }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)