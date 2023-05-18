import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Select, FormControl, MenuItem, InputLabel } from "@mui/material";
import "../../src/Home.css";
import Navbar from "../../src/Common/Navbar/Navbar";
import Layout from "../Common/Navbar/Layout";

<Navbar />;
export default function MultiActionAreaCard() {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Layout>
    <>
      <Navbar></Navbar>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          display="flex"
        >
          <div>
            <ToggleButton value="all">All</ToggleButton>
            <ToggleButton value="apparel">Apparel</ToggleButton>
            <ToggleButton value="electronics">Electronics</ToggleButton>
            <ToggleButton value="personalcare">Personal Care</ToggleButton>
          </div>
        </ToggleButtonGroup>
      </div>

      {/* Move the SelectBar component here */}
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <FormControl>
          <InputLabel
            id="demo-simple-select-label"
            style={{ fontSize: "20px", lineHeight: "5.4375em" }}
          >
            Select...
          </InputLabel>
          <Select
            style={{ width: "200px", lineHeight: "0.4375em" }}
            value={alignment}
            onChange={handleChange}
          >
            <MenuItem value="default">Default</MenuItem>
            <MenuItem value="hightolow">Price:High to Low</MenuItem>
            <MenuItem value="lowtohigh">Price:Low to High</MenuItem>
            <MenuItem value="newest">Price:Low to High</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* Card Container */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: "1041px",
          margin: "0 auto",
        }}
      >
        {/* {Card Number: 1 */}
        <Card sx={{ maxWidth: 294, margin: "38px 20px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>Shoes</span>
                <span>&#8377;1000</span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                wndr-13 sports shoes for men | Latest Stylish Casual sports
                shoes for men |running shoes for boys | Lace up Lightweight grey
                for running, walking, gym, trekking, hiking & party
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" variant="contained">
              BUY
            </Button>
            <div style={{ marginLeft: "auto" }}>
              <EditIcon />
              <DeleteIcon />
            </div>
          </CardActions>
        </Card>

        {/* Card Number: 2 */}
        <Card sx={{ maxWidth: 294, margin: "38px 20px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>Shoes</span>
                <span>&#8377;1000</span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                wndr-13 sports shoes for men | Latest Stylish Casual sports
                shoes for men |running shoes for boys | Lace up Lightweight grey
                for running, walking, gym, trekking, hiking & party
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" variant="contained">
              BUY
            </Button>
            <div style={{ marginLeft: "auto" }}>
              <EditIcon />
              <DeleteIcon />
            </div>
          </CardActions>
        </Card>

        {/* Card Number: 3 */}
        <Card sx={{ maxWidth: 294, margin: "38px 20px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>Shoes</span>
                <span>&#8377;1000</span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                wndr-13 sports shoes for men | Latest Stylish Casual sports
                shoes for men |running shoes for boys | Lace up Lightweight grey
                for running, walking, gym, trekking, hiking & party
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" variant="contained">
              BUY
            </Button>
            <div style={{ marginLeft: "auto" }}>
              <EditIcon />
              <DeleteIcon />
            </div>
          </CardActions>
        </Card>

        {/* Card Number :  4   */}
        <Card sx={{ maxWidth: 294, margin: "38px 20px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>Shoes</span>
                <span>&#8377;1000</span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                wndr-13 sports shoes for men | Latest Stylish Casual sports
                shoes for men |running shoes for boys | Lace up Lightweight grey
                for running, walking, gym, trekking, hiking & party
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" variant="contained">
              BUY
            </Button>
            <div style={{ marginLeft: "auto" }}>
              <EditIcon />
              <DeleteIcon />
            </div>
          </CardActions>
        </Card>

        {/* Card Number : 5  */}
        <Card sx={{ maxWidth: 294, margin: "38px 20px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>Shoes</span>
                <span>&#8377;1000</span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                wndr-13 sports shoes for men | Latest Stylish Casual sports
                shoes for men |running shoes for boys | Lace up Lightweight grey
                for running, walking, gym, trekking, hiking & party
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" variant="contained">
              BUY
            </Button>
            <div style={{ marginLeft: "auto" }}>
              <EditIcon />
              <DeleteIcon />
            </div>
          </CardActions>
        </Card>

        {/* Card Number : 6  */}
        <Card sx={{ maxWidth: 294, margin: "38px 20px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>Shoes</span>
                <span>&#8377;1000</span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                wndr-13 sports shoes for men | Latest Stylish Casual sports
                shoes for men |running shoes for boys | Lace up Lightweight grey
                for running, walking, gym, trekking, hiking & party
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" variant="contained">
              BUY
            </Button>
            <div style={{ marginLeft: "auto" }}>
              <EditIcon />
              <DeleteIcon />
            </div>
          </CardActions>
        </Card>
      </div>
    </>
    </Layout>
  );
}
