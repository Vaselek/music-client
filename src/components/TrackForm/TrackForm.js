import React, {Component} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";

class TrackForm extends Component {
    state = {
        title: '',
        album: '' ,
        duration: '',
        sequence: ''
    };

    submitFormHandler = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    render() {
        return (
            <Form onSubmit={this.submitFormHandler}>
                <FormGroup row>
                    <Label sm={2} for="album">Album</Label>
                    <Col sm={10}>
                        <Input
                            type="select" required
                            name="album" id="album"
                            value={this.state.album}
                            onChange={this.inputChangeHandler}>
                            <option></option>
                            {this.props.albums.map(album => (
                                <option key={album._id} value={album._id}>{album.title}</option>
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
                            placeholder="Enter track title"
                            value={this.state.title}
                            onChange={this.inputChangeHandler}
                        />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label sm={2} for="sequence">Sequence</Label>
                    <Col sm={10}>
                        <Input
                            type="number" required min="0"
                            name="sequence" id="sequence"
                            placeholder="Enter track sequence"
                            value={this.state.sequence}
                            onChange={this.inputChangeHandler}
                        />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label sm={2} for="duration">Duration</Label>
                    <Col sm={10}>
                        <Input
                            type="number" required min="0"
                            name="duration" step="0.01" id="duration"
                            placeholder="Enter track duration"
                            value={this.state.duration}
                            onChange={this.inputChangeHandler}
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

export default TrackForm;
