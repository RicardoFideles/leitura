import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux'
import { Modal, Button, FormGroup, ControlLabel, HelpBlock, FormControl } from 'react-bootstrap'
import  { closeModal } from '../actions/modalActions'
import PostForm from './PostForm'
import classNames from 'classnames'
import uuid from 'uuid'

class ModalForm extends Component {

    constructor(props) {
        super(props);
        this.close = this.close.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            selected: ''
        }
    }

    setSelected(selected) {
        this.setState(state => ({
            ...state,
            category: selected
        }))
    }

    setClass(current) {
        let flag = false

        if(current.code === this.state.post.category){
            flag = true
        }

        return classNames(
            'card',
            { 'selected': flag }
        );
    }

    close() {
        console.log(this.props.closeModal())
    }

    handleSubmit() {

    }

    setSelected = (selected) => {
        this.setState({ selected })
    }

    submit = (values) => {
        const post = {
            id: values.id || uuid().split("-").join(""),
            timestamp: values.timestamp || Date.now(),
            title: values.title,
            body: values.body,
            author: values.author,
            category: values.category,
            comments: values.comments || []
        }

        console.log(post)

        this.props.closeModal()
    }

    render() {
        const {showModal, closeModal, categories} = this.props
        const { selected } = this.state

        let post = {}
        console.log(categories)
        return (
            <div>
                <Modal show={showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <PostForm
                            onSubmit={ this.submit }
                            selected={ selected }
                            setSelected={ this.setSelected }
                            closeModal={ closeModal }
                            post = { post }
                            categories={ categories }/>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    showModal: state.modal.showModal,
    categories: state.categoryList.categories,
})
const mapDispatchToProps = dispatch => bindActionCreators({ closeModal }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ModalForm)