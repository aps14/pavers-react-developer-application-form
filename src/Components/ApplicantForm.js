import React, {useState} from "react";
import {Form, Row, Col,Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux'

function ApplicantForm() {
    const [applicantName, setApplicantName] = useState("");
    const [applicantEmail, setApplicantEmail] = useState("");
    const [dateOfApplication, setDateOfApplication] = useState(new Date().toISOString().split('T')[0]);
    const [aboutYou, setAboutYou] = useState("");
    const [reasonForApplying, setReasonForApplying] = useState("");
    const [whatYouKnowAboutPavers, setWhatYouKnowAboutPavers] = useState("");
    const [file, setFile] = useState();

    const dispatch = useDispatch()

    function submitForm(e){
        e.preventDefault()
        console.log("submit")

        let sendData = [
            {key: "applicantName",
            value: applicantName,
            type: "text"},

            {key: "applicantEmail",
            value: applicantEmail,
            type:"text"},

            {key: "dateOfApplication",
            value: dateOfApplication,
            type: "text"},

            {key: "aboutYou",
            value: aboutYou,
            type: "text"},

            {key: "reasonForApplying",
            value: reasonForApplying,
            type: "text"},

            {key: "whatYouKnowAboutPavers",
            value: whatYouKnowAboutPavers,
            type: "text"},

            {key: "file",
            src: [file],
            type: "file"}
        ]
        console.log("dispatching")
        dispatch({
            type: "submit",
            formData: sendData
        })
    }

    function readFile(event){
        event.preventDefault()

        console.log("readFile")
        if (event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                console.log("reader data")
                console.log(e.target.result)
                setFile(e.target.result)
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    function clearFile(){
        console.log("clearFile")
        setFile("")
    }

        return (
            <div style={{width: '100%',
                height: '100%',
                objectFit: 'contain',
                overflow: 'hidden',
                MozBoxShadow: '0 0 3px #ccc',
                WebkitBoxShadow: '0 0 3px #ccc',
                boxShadow: '0 0 3px #ccc',
            padding: '50px'}}>
                <div style={{textAlign: 'center', marginBottom: '40px'}}>
                    <h3>Applicant Form</h3>
                </div>
            <Form onSubmit={submitForm}>
                <Form.Group className="mb-3" controlId="userForm">
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <Form.Label>Name</Form.Label>
                                <Form.Control required
                                    maxLength={50} type="text" placeholder="Enter full name..."
                                    onChange={(e) => setApplicantName(e.target.value)}/>
                            </Col>
                            <Col>
                                <Form.Label>Date of Application</Form.Label>
                                <Form.Control required
                                    type="date"
                                    defaultValue={new Date().toISOString().split('T')[0]}
                                    onChange={(e) => setDateOfApplication(e.target.value)}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{marginTop: '20px'}}>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control required
                                    maxLength={100} type="email" placeholder="Enter email..."
                                    onChange={(e) => setApplicantEmail(e.target.value)}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col style={{textAlign: 'left'}}>
                        <Form.Label>Picture of candidate</Form.Label>
                        <div style={{width: '200px', height: '200px',
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}>
                            <img src={file} alt="No image selected" style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                overflow: 'hidden',
                                MozBoxShadow: '0 0 3px #ccc',
                                WebkitBoxShadow: '0 0 3px #ccc',
                                boxShadow: '0 0 3px #ccc',
                                display: 'block',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                textAlign: 'center',
                                lineHeight: '180px',
                            }}/>
                        </div>
                        <Form.Control type="file"
                                      accept="image/*"
                                      onChange={(event)=> {
                                          readFile(event)
                                      }}
                                      onClick={(event)=> {
                                          event.target.value = null; clearFile()
                                      }}
                                      style={{marginTop: '20px'}}/>
                    </Col>
                </Row>
                    <Form.Label>About you</Form.Label>
                    <Form.Control required
                                  maxLength={255} as="textarea"
                                  placeholder="Tell us about yourself..."
                                  rows={3}
                                  onChange={(e) => setAboutYou(e.target.value)}/>
                    <Form.Label>Reason for applying</Form.Label>
                    <Form.Control required
                                  maxLength={255} as="textarea"
                                  placeholder="What is your reason for applying..."
                                  rows={3}
                                  onChange={(e) => setReasonForApplying(e.target.value)}/>
                    <Form.Label>What do you know about Pavers Ltd?</Form.Label>
                    <Form.Control required
                                  maxLength={255} as="textarea"
                                  placeholder="Tell us what you know about us..."
                                  rows={3}
                                  onChange={(e) => setWhatYouKnowAboutPavers(e.target.value)}/>
                    <div style={{
                        justifyContent: "center",
                        display: "flex",
                        alignContent: "center"
                    }}>
                        <Button variant="primary" type="submit" style={{marginTop: '50px'}}>Submit</Button>
                    </div>
                    </Form.Group>
            </Form>
            </div>
        );
}

export default ApplicantForm;