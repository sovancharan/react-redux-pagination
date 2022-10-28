import React from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DataTable = ({ props }) => {
//     console.log(props);
    const value = useSelector((state) => state.paginationReducer.data);
    console.log('value', value);
    return (
        <Container>
            <Row className="border ">
                <Col lg={1} className="text-center border-end py-2">
                    User Id
                </Col>
                <Col lg={4} className="text-center border-end py-2">
                    Title
                </Col>
                <Col lg={7} className="text-center border-end py-2">
                    Body
                </Col>
                {/* <th>Username</th> */}
            </Row>

            {/* <tbody> */}
            {value &&
                value.map((data, index) => {
                    return (
                        <Row key={index} className="border ">
                            <Col lg={1} className="border-end text-center">
                                {data.id}
                            </Col>
                            <Col lg={4} className="border-end">
                                {data.title}
                            </Col>
                            <Col lg={7} className="border-end">
                                {data.body}
                            </Col>
                        </Row>
                    );
                })}
            {/* </tbody> */}
        </Container>
    );
};

export default DataTable;
