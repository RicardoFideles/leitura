import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types'

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} type={type}/>
                {touched &&
                    ((error && <span className="text-uppercase erroInput">{error}</span>) ||
                    (warning && <span>{warning}</span>))}
        </div>
    </div>
)

class PostForm extends Component {

    componentWillMount() {
        if(this.props.post.id !== undefined) {
            this.props.initialize(this.props.post)
            this.props.setSelected(this.props.post.category)
        }
    }

    render() {

        const { handleSubmit,
                categories,
                pristine,
                submitting,
                post } = this.props

        const button = post.id ? 'Edit' : 'Create'

        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <Field
                        name="title"
                        component={renderField}
                        type="text"
                        placeholder="Title..."
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <Field
                        name="author"
                        component={renderField}
                        type="text"
                        placeholder="Author..."
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <Field
                        name="body"
                        component={renderField}
                        type="text"
                        />
                    </div>
                </div>
                <div>
                    <label>Category</label>
                    <div>
                        <Field name="category" component="select">
                        <option />
                        {categories.map(category => (
                            <option value={category.path} key={category.path}>{category.name}</option>
                        ))}
                        </Field>
                    </div>
                </div>
                <div>
                    <button type="submit" disabled={pristine || submitting}>
                        {button}
                    </button>
                </div>
            </form>
        )
    }
}

function validate(values) {
    const errors = {};

    if (!values.title || values.title.trim() === '') {
        errors.title = 'Enter a Title';
    }

    if(values.title && values.title.length > 25) {
        errors.title = 'Too big, max 25 characters';
    }

    if (!values.author || values.author.trim() === '') {
        errors.author = 'Enter an Author';
    }

    if(values.author && values.author.length > 10) {
        errors.author = 'Too big, max 10 characters';
    }

    if(values.body && values.body.length > 50) {
        errors.body = 'Too big, max 50 characters';
    }
    return errors;
}

PostForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    selected: PropTypes.string.isRequired,
    setSelected: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired
}

export default
PostForm = reduxForm({
  form: 'createPost',
  validate
})(PostForm)