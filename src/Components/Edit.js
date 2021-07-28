import React from "react";
import { Button, Box, Typography, Paper, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    marginBottom:"15px",
    paddingBottom:"15px "
  },
  typographyStyle:{
    margin: "5px 0 5px 10px",
  },
  typographyTitle:{
    textAlign:"center",
    marginTop:"10px"
  }
}));
const Edit = (props) => {
  const classes = useStyle();
  const { activeStep, setActiveStep } = props;
  const onSubmit = () => {
    setActiveStep(activeStep + 1);
  };
  const handleEdit = () => {
    setActiveStep(0);
  };
  const storageValue = JSON.parse(window.localStorage.getItem("formValue"));
  const value = storageValue;
  return (
    <Box m={3} p={3}>
     <Paper className={classes.paper}>
        <Typography variant="h5" className={classes.typographyTitle} >
          Preview
        </Typography>
        <Typography className={classes.typographyStyle} variant="subtitle1"> First Name: {value.firstName}</Typography>
        <Typography className={classes.typographyStyle} variant="subtitle1"> Last Name:  {value.lastName}</Typography>
        <Typography className={classes.typographyStyle} variant="subtitle1"> Phone: {`+${value.phoneNumber}`}</Typography>
        <Typography className={classes.typographyStyle} variant="subtitle1"> Email: {value.email}</Typography>
        <Typography className={classes.typographyStyle} variant="subtitle1"> Address1: {value.address1}</Typography>
        <Typography className={classes.typographyStyle} variant="subtitle1"> Address2: {value.address2}</Typography>
        <Typography className={classes.typographyStyle} variant="subtitle1"> Country: {value.country}</Typography>
        
      </Paper>

      <Button variant="contained" color="secondary" onClick={handleEdit}>
        Edit
      </Button>
      <Button variant="contained" color="primary" onClick={onSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default Edit;
