import React from "react";
import { Typography, Box, Paper, Button, makeStyles } from "@material-ui/core";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";

const useStyle = makeStyles((theme) => ({
  paper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));

const UploadPic = (props) => {
  const classes = useStyle();
  const { activeStep, setActiveStep } = props;
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <div>
      <Box p={5} m={5}>
        <Paper  p={5} m={5} className={classes.paper}>
          <Button>
            <AddAPhotoIcon />
          </Button>
          <Typography variant="subtitle1">Upload photo</Typography>
        </Paper>
      </Box>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleBack}
      >
        {activeStep === 2 ? "Edit" : "Back"}
      </Button>
      <Button variant="contained" color="primary" onClick={handleNext}>
        {activeStep === 2 ? "Submit" : "Next"}
      </Button>
    </div>
  );
};

export default UploadPic;
