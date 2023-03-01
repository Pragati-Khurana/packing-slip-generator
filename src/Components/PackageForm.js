import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import PrintPreviewPage from "./PrintPreviewPage";
import './PrintPreviewPage.css'


const PackageForm = () => {
    let [showPP, setShowPP] = useState(false);
    let [name, setName] = useState("");
    let [address, setAddress] = useState("");
    let [city, setCity] = useState("");
    let [state1, setState1] = useState("");
    let [pincode, setPincode] = useState("");
    let [mobileNo, setMobileNo] = useState("");
    let [packageCount, setPackageCount] = useState("");


    // useEffect(() => {
    //     alert(showPP);
    // }, [showPP])

    function printPreviewDocument(e) {
        e.preventDefault();
        // const name = document.querySelector("#name").value;
        // const address = document.querySelector("#address").value;
        // const pincode = document.querySelector("#pincode").value;
        // const mobileNo = document.querySelector("#mobileNo").value;
        // const packageCount = document.querySelector("#packageCount").value;

        // setName(name);
        // setShowPP(true);
        // alert("aa");
        document.querySelector("#formCol").style.display = "none";
        document.querySelector("#printBtn").style.display = "none";
        window.print();
        document.querySelector("#formCol").style.display = "block";
        document.querySelector("#printBtn").style.display = "block";
    }

    return (
        <Row>
            <Col xs={6} id="formCol" className="m-3">
                <Container>
                <h1>Package Details</h1>
                <Form>
                    <Form.Group as={Row} className="mb-3 mt-5" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Name
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="Enter Name" id="name" value={name} onChange={(e)=>setName(e.target.value)} />  
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Address
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                as="textarea"
                                rows={2}
                                placeholder="Enter Address"
                                id="address"
                                value={address} onChange={(e)=>setAddress(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            City
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="Enter City" id="city" value={city} onChange={(e)=>setCity(e.target.value)} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            State
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="Enter State" id="state" value={state1} onChange={(e)=>setState1(e.target.value)} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Pincode
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="number"
                                placeholder="Enter Pincode"
                                min={100000}
                                max={999999}
                                id="pincode"
                                value={pincode} onChange={(e)=>setPincode(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Mobile No.
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="number"
                                placeholder="Enter Mobile No."
                                min={1000000000}
                                max={9999999999}
                                id="mobileNo"
                                value={mobileNo} onChange={(e)=>setMobileNo(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Number of Package
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="number"
                                placeholder="Enter Package Count."
                                min={1}
                                id="packageCount"
                                value={packageCount} onChange={(e)=>setPackageCount(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                </Form>
                </Container>
            </Col>
            <Col>
                <Container>
                    <PrintPreviewPage name={name} address={address} pincode={pincode} mobileNo={mobileNo} packageCount={packageCount} className="pp" /> 
                    <Button
                        variant="outline-primary"
                        type="submit"
                        id="printBtn"
                        onClick={(e) => printPreviewDocument(e)}
                    >
                        Print
                    </Button>
                </Container>
            </Col>
        </Row>
    );
};

export default PackageForm;
