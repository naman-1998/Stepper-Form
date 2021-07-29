import React from "react";
import { Button, Box, Typography, Paper, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "15px",
    padding: "15px ",
  },
  typographyStyle: {
    margin: "5px 0 5px 10px",
  },
  typographyTitle: {
    textAlign: "center",
    padding: "10px",
  },
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
        <Typography variant="h5" className={classes.typographyTitle}>
          Preview
        </Typography>
        <div style={{ display: "flex", height: "100%" }}>
          <div style={{ width: "70%" }}>
            <Typography className={classes.typographyStyle} variant="subtitle1">
              {" "}
              First Name: {value.firstName}
            </Typography>
            <Typography className={classes.typographyStyle} variant="subtitle1">
              {" "}
              Last Name: {value.lastName}
            </Typography>
            <Typography className={classes.typographyStyle} variant="subtitle1">
              {" "}
              Phone: {`+${value.phoneNumber}`}
            </Typography>
            <Typography className={classes.typographyStyle} variant="subtitle1">
              {" "}
              Email: {value.email}
            </Typography>
            <Typography className={classes.typographyStyle} variant="subtitle1">
              {" "}
              Address1: {value.address1}
            </Typography>
            <Typography className={classes.typographyStyle} variant="subtitle1">
              {" "}
              Address2: {value.address2}
            </Typography>
            <Typography className={classes.typographyStyle} variant="subtitle1">
              {" "}
              Country: {value.country}
            </Typography>
          </div>

          <div style={{ height: "100%" }}>
            <img
              src="data:image/jpeg;base64,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"
              alt="Avatar"
              height="200px"
            />
          </div>
        </div>
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
