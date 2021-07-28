import { React, useState } from "react";
import { Stepper, Step, StepLabel, Typography } from "@material-ui/core";
import Information from "./Information";
import UploadPic from "./UploadPic";
import Edit from "./Edit";

function getSteps() {
  return ["Basic Information", "Upload Photo", "Edit & Submit"];
}
function getStepContent(activeStep, setActiveStep) {
  switch (activeStep) {
    case 0:
      return (
        <>
          <Information activeStep={activeStep} setActiveStep={setActiveStep} />
        </>
      );
    case 1:
      return (
        <UploadPic activeStep={activeStep} setActiveStep={setActiveStep} />
      );
    case 2:
      return <Edit activeStep={activeStep} setActiveStep={setActiveStep} />;
    default:
      return "unknown input";
  }
}
const LinearStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = getSteps();

  return (
    <div>
      {activeStep === 3 ? (
        <Typography variant="h5" align="center">
          Submitted!!
        </Typography>
      ) : (
        <>
          <Stepper activeStep={activeStep}>
            {steps.map((step) => {
              return (
                <Step>
                  <StepLabel>{step}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <form>{getStepContent(activeStep, setActiveStep)}</form>
        </>
      )}
    </div>
  );
};

export default LinearStepper;
