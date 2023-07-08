import React, { useEffect } from 'react'
import Header from 'components/Headers/Header'
import { Container, Row } from 'reactstrap'
import { useState } from "react";
import classnames from "classnames";
import {

  Card,
  Table,
  Button,
  CardHeader,
  Col,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  NavItem,
  NavLink,
  Nav,
  CardBody,
} from "reactstrap";
import { Link } from 'react-router-dom';
export default function Organization() {

  const [Organization, setOrganization] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:8088/api/v1/organization", {

    }).then((result) => {
      result.json().then((resp) => {
        setOrganization(resp);
        console.log("resp", resp);
      })
    })
  }, [])

  return (
    <>
      <Header />

      <Header />
      <Container className="mt--9" fluid>
        <Row>
        </Row>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow table-scroll">

              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col" className='text-dark'>S.No</th>
                    <th scope="col" className='text-dark'>Organization Name</th>
                    <th scope="col" className='text-dark'>Address</th>
                    <th scope="col" className='text-dark'>Action</th>

                  </tr>
                </thead>
                <tbody>
                  {Organization.map((item, index) => {
                    return <tr>
                      <th scope="row" >{index + 1}</th>
                      <td>{item.organization_name}</td>
                      <td>{item.address}</td>
                      <td className="text-justify" >
                        <Link to={`/admin/OrganizationEdit/${item.organization_id}`} >  <i class="fas fa-eye "></i> </Link>
                       
                      </td>

                    </tr>
                  })

                  }

                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}
