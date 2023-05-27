import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import OrderProduct from "../../src/pages/OrderProduct";
import {
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  TextField,
} from "@mui/material";
import { createRoot } from "react-dom/client";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card1 = ({ productName, category, description, price,quantity }) => {
  return(
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 30 }} color="black" gutterBottom>
        <b>{productName}</b>
      </Typography>
      <Typography sx={{ fontSize: 15 }} component="div" color="black">
        Quantity :<b>{quantity}</b>
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="black">
        Category : <b>{category}</b>
      </Typography>
      <Typography variant="body2">
        <i>
          {description}
        </i>
      </Typography>
      <Typography sx={{ fontSize: 25 }} color="red">
        Total Price : &#8377;{price}
      </Typography>
    </CardContent>
  </React.Fragment>
);
}

const card2 = ({ housename,address,contact,state,PIN }) => {
  return(
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 30 }} color="black" gutterBottom>
        <b>Address Details:</b>
      </Typography>
      <Typography sx={{ fontSize: 15 }} color="black">
        {housename}
        <br />
        {contact}
        <br />
        {address}
        <br />
        {state}
        <br />
        {PIN}
      </Typography>
    </CardContent>
  </React.Fragment>
);
}
function OutlinedCard() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Box sx={{ minWidth: 275, display: "flex" }}>
          <Card variant="outlined">{card1()}</Card>
<Card variant="outlined">{card2()}</Card>

        </Box>
        <div>
          <Button variant="text">Back</Button>
          <Button variant="contained">Place Order</Button>
        </div>
      </Box>
    </>
  );
}

// Component for displaying product details
const ProductDetails = ({ productName, category, description, price }) => {
  return (
    <div style={styles.productcontainer}>
      <div style={styles.imagecontainer}>
        <img
          src=""
          alt="mobile"
        />
      </div>
      <div style={styles.productdetailsclass}>
        <div className="productheader" fontSize="20px">
          <h1>{(productName)}</h1>
        </div>
        <div className="productinfocontainer">
          <div className="productiteminfo">
            <p>
              Category: <b>{(category )}</b>
            </p>
          </div>
          <div className="productiteminfo">
            <p>
              <i>
                {(description )}
              </i>
            </p>
          </div>
          <div
            className="productinfoitem"
            style={{ color: "red", fontSize: "20px" }}
          >
            <span>Total Price : &#8377;{(price )}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  productcontainer: {
    display: "flex",
  },
  imagecontainer: {
    flex: "0 0 auto",
    marginRight: "20px",
  },
  productdetailsclass: {
    flex: "1 1 auto",
  },
};

export default function HorizontalLinearStepper({
  productName,
  category,
  description,
  price,
  housename,
  address,
}) {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [alignment, setAlignment] = useState("default"); // Initialize the alignment state variable
  const [cardContent, setCardContent] = useState();
  const [textFieldValues, setTextFieldValues] = useState({
    textField1: "",
    textField2: "",
    textField3: "",
    textField4: "",
    textField5: "",
    textField6: "",
    textField7: "",
  });

  const steps = ["Items", "Select Address", "Confirm Order"];

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleChange = (event) => {
    setAlignment(event.target.value);
  };

  const handleTextFieldChange = (event, field) => {
    setTextFieldValues((prevValues) => ({
      ...prevValues,
      [field]: event.target.value,
    }));
  };

  const handleSelectAddress = () => {
    // Assuming the selected address index is stored in the `alignment` variable
    // Navigate to the next step (Confirm Order)
    setActiveStep(2); // Navigate to the next step (Confirm Order)
    
  }
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Box sx={{ width: "60%" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};

              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>

          {activeStep === 0 && (
            <Box sx={{ flex: "1 1 auto", mt: 2 }}>
              <ProductDetails
                productName={productName}
                category={category}
                description={description}
                price={price}
              />
              <div
                class="container"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button disabled >Back</Button>

                <Button variant="contained" onClick={handleSelectAddress}>
                  Next
                </Button>
              </div>
            </Box>
          )}

          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />

                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Box sx={{ flex: "1 1 auto", mt: 2 }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}
              {activeStep === 1 && (
                <React.Fragment>
                  <Box
                    sx={{ display: "flex", justifyContent: "center", mt: 2 }}
                  >
                    <FormControl>
                      <InputLabel id="demo-simple-select-label">
                        Select address
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={alignment}
                        onChange={handleChange}
                        style={{ width: "500px" }}
                      >
                        <MenuItem>
                          {housename} --{">"} {address}
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "center", mt: 2 }}
                  >
                    {"-OR-"}
                    <br />
                    <br />
                    {"Add Address"}
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <TextField
                      label="Name*"
                      value={textFieldValues.textField1}
                      onChange={(event) =>
                        handleTextFieldChange(event, "textField1")
                      }
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <TextField
                      label="Contact Number*"
                      value={textFieldValues.textField2}
                      onChange={(event) =>
                        handleTextFieldChange(event, "textField2")
                      }
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <TextField
                      label="Street*"
                      value={textFieldValues.textField3}
                      onChange={(event) =>
                        handleTextFieldChange(event, "textField3")
                      }
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <TextField
                      label="City*"
                      value={textFieldValues.textField4}
                      onChange={(event) =>
                        handleTextFieldChange(event, "textField4")
                      }
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <TextField
                      label="State*"
                      value={textFieldValues.textField5}
                      onChange={(event) =>
                        handleTextFieldChange(event, "textField5")
                      }
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <TextField
                      label="Landmark*"
                      value={textFieldValues.textField6}
                      onChange={(event) =>
                        handleTextFieldChange(event, "textField6")
                      }
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <TextField
                      label="Zip Code*"
                      value={textFieldValues.textField7}
                      onChange={(event) =>
                        handleTextFieldChange(event, "textField7")
                      }
                    />
                    <Button
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "10px",
                        margin: "16px",
                      }}
                      variant="contained"
                    >
                      Save Address
                    </Button>
                    <div className="container">
                      <Button style={{ color: "black" }} variant="text">
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        display="flex"
                        justifyContent="center"
                      >
                        Next
                      </Button>
                    </div>
                  </Box>
                </React.Fragment>
              )}
            </React.Fragment>
          )}
          {activeStep === 2 && <OutlinedCard />}
        </Box>
      </Box>
    </React.Fragment>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<OrderProduct />);

