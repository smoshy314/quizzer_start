import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export const AddQuizModal = () => {
    const [title, setTitle] = useState<string>("Example Quiz");

    // const saveChanges = () => {
    //     addQuiz(title, body);
    //     setTitle("Example Quiz");
    //     setBody("Example Description");
    //     handleClose();
    // };

    return (
        <div>
            <Modal>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Quiz</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formQuizId">
                        <Form.Label>Title: </Form.Label>
                        <Form.Control
                            value={title}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setTitle(e.target.value)}
                        ></Form.Control>
                        <Form.Label>Description: </Form.Label>
                        <Form.Control
                            
                        ></Form.Control>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        
                    >
                        Close
                    </Button>
                    <Button variant="primary">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
