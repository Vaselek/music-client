import React, {Component, Fragment} from 'react';
import {Alert, Button, Col, Form, FormGroup} from "reactstrap";
import {connect} from "react-redux";
import FormElement from "../../components/UI/Form/FormElement";
import {registerUser} from "../../store/actions/usersActions";
import FacebookLogin from "../../components/FacebookLogin/FacebookLogin";

class Register extends Component {
    state = {
        username: '',
        password: '',
        avatar: null,
        displayName: ''
    }

    inputChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    fileChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.files[0]
        })
    };

    submitFormHandler = e => {
        e.preventDefault();

        const formData = new FormData();

        Object.keys(this.state).forEach(key => {
            formData.append(key, this.state[key]);
        });

        this.props.registerUser(formData)
    }

    getFieldError = fieldName => {
        return this.props.error && this.props.error.errors && this.props.error.errors[fieldName] && this.props.error.errors[fieldName].message;
    }

    render() {
        return (
            <Fragment>
                <h2>Register new user</h2>
                {this.props.error && this.props.error.global && (
                    <Alert color="danger" >
                        {this.props.error.global}
                    </Alert>
                )}
                <Form onSubmit={this.submitFormHandler}>

                    <FormElement propertyName='username'
                                 title='Username'
                                 type='text'
                                 value={this.state.username}
                                 onChange={this.inputChangeHandler}
                                 error={this.getFieldError('username')}
                                 placeholder='Enter username'
                                 autoComplete='new-username'

                    />

                    <FormElement propertyName='displayName'
                                 title='Display Name'
                                 type='text'
                                 value={this.state.displayName}
                                 onChange={this.inputChangeHandler}
                                 error={this.getFieldError('displayName')}
                                 placeholder='Enter name to display'
                                 autoComplete='new-displayName'

                    />

                    <FormElement propertyName='password'
                                 title='Password'
                                 type='password'
                                 value={this.state.password}
                                 onChange={this.inputChangeHandler}
                                 error={this.getFieldError('password')}
                                 placeholder='Enter password'
                                 autoComplete='new password'

                    />
                    <FormElement propertyName='avatar'
                                 title='Avatar'
                                 type='file'
                                 onChange={this.fileChangeHandler}
                                 error={this.getFieldError('avatar')}

                    />

                    <FormGroup row>
                        <Col sm={{ offset: 2, size: 10 }}>
                            <Button type="submit" color="primary">Register</Button>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <FacebookLogin/>
                    </FormGroup>
                </Form>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    error: state.users.registerError
});

const mapDispatchToProps = dispatch => ({
    registerUser: userData => dispatch(registerUser(userData))
})


export default connect(mapStateToProps, mapDispatchToProps)(Register);