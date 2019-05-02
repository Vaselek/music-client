import React, {Component} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";

class AlbumForm extends Component {
    state = {
        title: '',
        artist: '' ,
        issuedAt: '',
        image: ''
    };

    submitFormHandler = event => {
        event.preventDefault();

        const formData = new FormData();

        Object.keys(this.state).forEach(key => {
            formData.append(key, this.state[key]);
        });

        this.props.onSubmit(formData);
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    fileChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.files[0]
        });
    };

    render() {
        return (
            <Form onSubmit={this.submitFormHandler}>
                <FormGroup row>
                    <Label sm={2} for="artist">Artist</Label>
                    <Col sm={10}>
                        <Input
                            type="select" required
                            name="artist" id="artist"
                            value={this.state.artist}
                            onChange={this.inputChangeHandler}>
                            <option></option>
                            {this.props.artists.map(artist => (
                                <option key={artist._id} value={artist._id}>{artist.name}</option>
                            ))}
                        </Input>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label sm={2} for="title">Title</Label>
                    <Col sm={10}>
                        <Input
                            type="text" required
                            name="title" id="title"
                            placeholder="Enter album title"
                            value={this.state.title}
                            onChange={this.inputChangeHandler}
                        />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label sm={2} for="issuedAt">Issued At</Label>
                    <Col sm={10}>
                        <Input
                            type="date" required
                            name="issuedAt" id="issuedAt"
                            placeholder="Enter album issued date"
                            value={this.state.issuedAt}
                            onChange={this.inputChangeHandler}
                        />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label sm={2} for="image">Image</Label>
                    <Col sm={10}>
                        <Input
                            type="file"
                            name="image" id="image"
                            onChange={this.fileChangeHandler}
                        />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Col sm={{offset: 2, size: 10}}>
                        <Button type="submit" color="primary">Save</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default AlbumForm;
