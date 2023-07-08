// import { useState } from "react";
// // react component that copies the given text inside your clipboard
// import { CopyToClipboard } from "react-copy-to-clipboard";
// import AdminNavbar from "components/Navbars/AdminNavbar.js";
// import AdminFooter from "components/Footers/AdminFooter.js";
// // import Header from "components/Headers/Header.js";
// import { CardTitle } from "reactstrap";
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// // reactstrap components
// // import './Show.css';

// import {
// 	Card,
// 	CardHeader,
// 	CardBody,
// 	Container,
// 	Row,
// 	Col,
// 	UncontrolledTooltip,
// 	Input,
// } from "reactstrap";

// import $ from "jquery";
// import AdminLayout from "layouts/Admin.js";
// // core components
// import Header from "components/Headers/Header.js";
// import "../examples/Test.css";
// const UserDetails = () => {
// 	const [copiedText, setCopiedText] = useState();
// 	$('.form-control').on('focus blur', function (e) {
// 		$(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
// 	}).trigger('blur');

// 	return (
// 		<>

// 			<Header />
// 			<Container className="mt--4" fluid>
// 				<Card>
// 					<CardBody>
// 						<div class="row">
// 							<div class="col-12 mb-5">
// 								<div class="">
// 									{/* <h3 className="text-center " style={{ fontSize: "30px" }}>User Details</h3> */}
// 									<CardTitle
// 										tag="h2"
// 										className="text-uppercase text-center mb-3"
// 									>
// 										Organizations
// 									</CardTitle>
// 								</div>
// 								<form class="file-upload ">
// 									<div class="row ">
// 										<div class="col-12 ">
// 											<div class="bg-secondary-soft  rounded">
// 												<div class="row ">
// 													<div class="col-md-6 form-group mt-4">
// 														<input type="text" id="name" class="form-control" required />
// 														<label class="form-control-placeholder " for="name">Organization Name *</label>
// 													</div>
// 													<div class="col-md-6 form-group mt-4">
// 														<input type="text" id="name" class="form-control" required />
// 														<label class="form-control-placeholder " for="name">User Name *</label>
// 													</div>
// 													<div class="col-md-6 form-group mt-4">
// 														<input type="text" id="name" class="form-control" required />
// 														<label class="form-control-placeholder " for="name">Phone number *</label>
// 													</div>
// 													<div class="col-md-6 form-group mt-4">
// 														<input type="text" id="name" class="form-control" required />
// 														<label class="form-control-placeholder " for="name">Email *</label>
// 													</div>
// 													<div class="col-md-6 form-group mt-4">
// 														<input type="text" id="name" class="form-control" required />
// 														{/* 
// 												<Input
// 													className="form-control"
// 													defaultValue="lucky.jesse"
// 													id="name"
// 													placeholder="Username"
// 													type="text"
// 												/> */}
// 														<label class="form-control-placeholder " for="name">Address *</label>

// 													</div>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</form>
// 							</div>
// 						</div>
// 						<div class="row">
// 							<div class="col-12">
// 								<div class="">
// 									{/* <h3 className="text-center " style={{ fontSize: "30px" }}>Additional Information</h3>
// 							<hr /> */}
// 									<CardTitle
// 										tag="h2"
// 										className="text-uppercase text-center mb-0"
// 									>
// 										Additional Information
// 									</CardTitle>
// 								</div>
// 								<form class="file-upload p-5">
// 									<div class="row ">
// 										<div class="col-xxl-8 ">
// 											<div class="bg-secondary-soft  rounded">
// 												<div class="row ">
// 													<div class="col-md-6 form-group mt-4">
// 														<input type="text" id="name" class="form-control" required />
// 														<label class="form-control-placeholder " for="name">Secondary Name  *</label>
// 													</div>
// 													<div class="col-md-6 form-group mt-4">
// 														<input type="text" id="name" class="form-control" required />
// 														<label class="form-control-placeholder " for="name">Secondary Phone number *</label>
// 													</div>
// 													<div class="col-md-6 form-group mt-4">
// 														<input type="text" id="name" class="form-control" required />
// 														<label class="form-control-placeholder " for="name">	Secondary Address  *</label>
// 													</div>
// 													<div class="col-md-6 form-group mt-4">
// 														<input type="text" id="name" class="form-control" required />
// 														<label class="form-control-placeholder " for="name">Secondary Email *</label>
// 													</div>

// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</form>
// 							</div>
// 						</div>
// 					</CardBody>
// 				</Card>


// 			</Container>
// 		</>
// 	);
// };

// export default UserDetails;


import { useEffect, useState } from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
// import Header from "components/Headers/Header.js";
import { CardTitle, FormGroup,Button } from "reactstrap";
import { BrowserRouter, Route, Switch, Redirect, useHistory, useParams } from "react-router-dom";
// reactstrap components
// import './Show.css';

import {
	Card,
	CardHeader,
	CardBody,
	Container,
	Row,
	Col,
	UncontrolledTooltip,
	Input,
} from "reactstrap";

import $ from "jquery";
import AdminLayout from "layouts/Admin.js";
// core components
import Header from "components/Headers/Header.js";
import ApiService from "./Service/ApiService";
// import { useParams} from 'react-router-dom';

const UserDetails = () => {

	const params = useParams();

	const history = useHistory();
	const [copiedText, setCopiedText] = useState();
	const [staticData, SetstaticData] = useState([])
	const [DynamicData, setDynamicData] = useState([])

	const [id, setid] = useState()
	const [additiditionalFields, setadditiditionalFields] = useState()
	const [data, setdata] = useState({

	})

	$('.form-control').on('focus blur', function (e) {
		$(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
	}).trigger('blur');


	const [test, settest] = useState()

	useEffect(() => {

		var url = window.location.pathname
		var idds = url.substring(url.lastIndexOf('/') + 1);

		// setid(idds)

		console.log("asffasf", params)

		ApiService.getUserDetails_id(params.id).then((res) => {

			console.log("useresss", res)
			settest(res)

			SetstaticData([res])
			console.log("userDetails", res);
			setDynamicData(res.organization.user_profile[0].custom_data)

			// console.log("setDynamicDazdvdgfta", res.organization.user_profile[0].custom_data)

		})

	}, [])


	let DynamicFn = (e) => {


		setdata((old) => ({

			...old, [e.target.name]: e.target.value,

		}))

		// setdata(())

	}

	useEffect(() => {
		setadditiditionalFields({
			"updated_by": "test",
			"address": "test",
			"gender": "testing",
			"additional_feilds": [data]
		})
	}, [])


	let onSubmit = () => {
		console.log("onSubmit", data);

		history.push('/admin/index')

	}

	return (
		<>
			<Header />
			<Container className="mt--4 " fluid>
				<Card className="p-3">
					<CardBody>
						<div class="row">
							<div class="col-12 mb-5 mt-3">
								<div class="">
									{/* <h3 className="text-center " style={{ fontSize: "30px" }}>User Details</h3> */}
									{/* <CardTitle
										tag="h2"
										className="text-uppercase text-center mb-3"
									>
										User Details
									</CardTitle> */}
								</div>

								<div class="row ">
									<div class="col-12 ">
										<div class="bg-secondary-soft  rounded">
											{staticData.map((item, index) => {
												return <>
													<Row>
														<Col lg="6">
															<FormGroup>
																<label
																	className="form-control-label"
																	htmlFor="input-city"
																>
																	<b>Organization Name</b>
																</label>
																<Input
																	className="form-control-alternative text-dark"
																	value={item.organization.organization_name}
																	id="input-city"
																	type="text"
																/>
															</FormGroup>
														</Col>
														<Col lg="6">
															<FormGroup>
																<label
																	className="form-control-label"
																	htmlFor="input-city"
																>
																	<b>User Name </b>
																</label>
																<Input
																	className="form-control-alternative text-dark"
																	value={item.username}
																	id="input-city"
																	type="text"
																/>
															</FormGroup>
														</Col>
														<Col lg="6">
															<FormGroup>
																<label
																	className="form-control-label"
																	htmlFor="input-city"
																>
																	<b>Phone number</b>
																</label>
																<Input
																	className="form-control-alternative text-dark"
																	value={item.phone_number}
																	id="input-city"
																	type="text"
																/>
															</FormGroup>
														</Col>
														<Col lg="6">
															<FormGroup>
																<label
																	className="form-control-label"
																	htmlFor="input-city"
																>
																	<b>Email</b>
																</label>
																<Input
																	className="form-control-alternative text-dark"
																	value={item.phone_number}
																	id="input-city"
																	type="text"
																/>
															</FormGroup>
														</Col>
														<Col lg="6">
															<FormGroup>
																<label
																	className="form-control-label"
																	htmlFor="input-city"
																>
																	<b>Address</b>
																</label>
																<Input
																	className="form-control-alternative text-dark"
																	value={item.address}
																	id="input-city"
																	type="text"
																/>
															</FormGroup>
														</Col>
													</Row>

												</>
											})}
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="row mt-4">
							<div class="col-12">
								<div class="">
									<CardTitle
										tag="h2"
										className="text-uppercase text-center  mb-5"
									>
										Additional Information
									</CardTitle>
								</div>
								<form class="">
									<div class="row ">
										<div class="col-xl-12 ">
											<div class="bg-secondary-soft  rounded">
												<Row>
													{DynamicData.map((item, index) => {
														return <>
															{/* <div class="col-md-6 form-group mt-4">
															<label class="form-control-placeholder " for="name"> {item.parameter}*</label>
															<input type="text" id="name" class="form-control" disabled />
														</div> */}

															<Col lg="6">
																<FormGroup>
																	<label
																		className="form-control-label"
																		htmlFor="input-city"
																	>
																		<b>{item.parameter}</b>
																	</label>
																	<Input
																		className="form-control-alternative text-dark"
																		disabled
																		id="input-city"
																		type="text"
																	/>
																</FormGroup>
															</Col>

														</>
													})}
												</Row>
											</div>
										</div>
										<Button color="danger"
											size="sm"
											className='mt-3 float-right mb-2 ml-3' onClick={onSubmit}>cancel</Button>
										{/* <button className="btn btn-danger" >cancel</button> */}
									</div>
								</form>
							</div>
						</div>
					</CardBody>
				</Card>


			</Container>
		</>
	);
};

export default UserDetails;





