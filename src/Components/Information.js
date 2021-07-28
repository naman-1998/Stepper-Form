import React, { useState } from "react";
import { TextField, Box, Button } from "@material-ui/core";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FormControl } from "@material-ui/core";
const formObject = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  address1: "",
  address2: "",
  country: "",
};
const Information = (props) => {
  const storageValue = JSON.parse(window.localStorage.getItem("formValue"));
  // checking and saving previous value in storage value from local storage.

  
  const [formValue, setFormValue] = useState(storageValue || formObject);
  // initializing the current state as storage value(if it contains value) OR formObject.
  const { activeStep, setActiveStep } = props;

  const handleChange = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };
  const handlePhoneNumber = (phone) => {
    setFormValue({ ...formValue, phoneNumber: phone });
  };
  const handleNext = () => {
    setActiveStep(activeStep + 1);
    window.localStorage.setItem("formValue", JSON.stringify(formValue));
    // setting data to local storage - key, value pair
  };

  return (
    <Box maxWidth="md">
      <FormControl fullWidth>
        <TextField
          id="first-name"
          label="First Name"
          variant="outlined"
          placeholder="Enter Your First Name"
          fullWidth
          margin="normal"
          name="firstName"
          onChange={handleChange}
          values={formValue.firstName}
          defaultValue={formValue.firstName}
        />
        <TextField
          id="last-name"
          label="Last Name"
          variant="outlined"
          placeholder="Enter Your Last Name"
          fullWidth
          margin="normal"
          name="lastName"
          onChange={handleChange}
          values={formValue.lastName}
          defaultValue={formValue.lastName}
        />
        <TextField
          id="email"
          label="E-mail"
          variant="outlined"
          placeholder="Enter Your E-mail Address"
          fullWidth
          margin="normal"
          name="email"
          defaultValue={formValue.email}
          onChange={handleChange}
          values={formValue.email}
        />
        <PhoneInput
  name="phoneNumber"
  value={formValue.number}
  placeholder="Phone Number"
  onChange={(phone)=>handlePhoneNumber(phone)}
  defaultValue={formValue.number}
/>

        <TextField
          id="address1"
          label="Address 1"
          variant="outlined"
          placeholder="Enter Your House Number/Lane"
          fullWidth
          margin="normal"
          name="address1"
          onChange={handleChange}
          defaultValue={formValue.address1}
          values={formValue.address1}
        />
        <TextField
          id="address2"
          label="Address 2"
          variant="outlined"
          placeholder="Town/State"
          fullWidth
          margin="normal"
          name="address2"
          onChange={handleChange}
          defaultValue={formValue.address2}
          values={formValue.address2}
        />
        <TextField
          id="country"
          label="Country"
          variant="outlined"
          placeholder="Enter Your Country Name"
          fullWidth
          margin="normal"
          name="country"
          onChange={handleChange}
          defaultValue={formValue.country}
          values={formValue.country}
        />
      </FormControl>
      {activeStep === 2 ? null : (
        <Button variant="contained" color="primary" onClick={handleNext}>
          Next
        </Button>
      )}
    </Box>
  );
};

export default Information;
