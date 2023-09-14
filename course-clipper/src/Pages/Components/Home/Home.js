import React from "react";
// import "../Home/Home.css";
import "../Home/Home.css";

import { Drawer, Box, Typography, TextField } from "@mui/material";
import { useState } from "react";

import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import StarIcon from "@mui/icons-material/Star";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";



import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Rating from "@mui/material/Rating";

function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [dialoglOpen, setDialogOpen] = React.useState(false);
  const handleOpen = () => setDialogOpen(true);
  const handleClose = () => setDialogOpen(false);

  const [value, setValue] = React.useState(2);
  
  const list = (anchor) => (
    <Box>
      <List>
        {[
          "Home",
          "About Us",
          "Reviews",
          "Comparison",
          "Blogs",
          "Privacy Policy",
          "Contact Us",
          "Terms & Conditions",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

      <Box style={{ marginTop: "10px", width: "230px" }}>
        <Button
          style={{
            fontSize: "17px",
            color: "white",
            backgroundColor: "#0BB980",
          }}
          onClick={handleOpen}
        >
          Add Review <AddCircleIcon />
        </Button>
      </Box>
    </Box>
  );

  return (
    <div style={{width:"100%", height:"100%"}}>
      <div className="home-top-bar">
        <div className="home-top-bar-section logo-section">courseClipper</div>

        <div className="home-top-bar-section button-section">
          <Button variant="outlined">REVIEW</Button>

          <Button onClick={() => setIsDrawerOpen(true)}>
            <MenuIcon style={{ color: "#707070", fontSize: "3.5rem" }} />
          </Button>
        </div>
      </div>

      <div className="home-main-section">
        <div className="inreview">
          <div className="text-rev">
            <div id="tex-font-31">IN</div>
            <div id="tex-font-32">REVIEWS</div>
            <div id="tex-font-33">WE TRUST</div>
          </div>
          <div className="para-text">
            <p>
              Get the best course with great content from best platform with
              students reviews
            </p>
          </div>
        </div>

        <div className="all-reviews">
          <div className="single-reviews blur-div">
            <div className="reviews-title"> Vance- NeoBank for NRIs</div>

            <div className="reviews-stats">
              <div className="reviews-stars">
                <Rating name="read-only" value={value} readOnly style={{color:"green"}}/>
              </div>
              <div className="reviews-rat">4.7</div>{" "}
              <span> &nbsp; | &nbsp; </span>
              <div className="reviews-count">75 reviews</div>
            </div>

            <div className="review-text1">
              Monery Transfer Service - Investment
            </div>

            <div className="small-reviews">
              <div className="times">3 days</div>

              <div className="reviews-admin">
                <span>
                  <AccountCircleIcon />
                </span>

                <Rating name="read-only" value={3} readOnly style={{color:"green"}}/>
              </div>

              <div className="reviews-text">
                <span>
                  First transfer and they made me mad, worse service and{" "}
                </span>
              </div>
            </div>
          </div>

          <div className="single-reviews">
            <div className="reviews-title"> Vance- NeoBank for NRIs</div>

            <div className="reviews-stats">
              <div className="reviews-stars">
                <Rating name="read-only" value={value} readOnly style={{color:"green"}}/>
              </div>
              <div className="reviews-rat">4.7</div>{" "}
              <span> &nbsp; | &nbsp; </span>
              <div className="reviews-count">75 reviews</div>
            </div>

            <div className="review-text1">
              Monery Transfer Service - Investment
            </div>

            <div className="small-reviews">
              <div className="times">3 days</div>

              <div className="reviews-admin">
                <span>
                  <AccountCircleIcon />
                </span>

                <Rating name="read-only" value={3} readOnly style={{color:"green"}}/>
              </div>

              <div className="reviews-text">
                <span>
                  First transfer and they made me mad, worse service and{" "}
                </span>
              </div>
            </div>
          </div>

          <div className="single-reviews blur-div">
            <div className="reviews-title"> Vance- NeoBank for NRIs</div>

            <div className="reviews-stats">
              <div className="reviews-stars">
                <Rating name="read-only" value={value} readOnly style={{color:"green"}}/>
              </div>
              <div className="reviews-rat">4.7</div>{" "}
              <span> &nbsp; | &nbsp; </span>
              <div className="reviews-count">75 reviews</div>
            </div>

            <div className="review-text1">
              Monery Transfer Service - Investment
            </div>

            <div className="small-reviews">
              <div className="times">3 days</div>

              <div className="reviews-admin">
                <span>
                  <AccountCircleIcon />
                </span>

                <Rating name="read-only" value={3} readOnly style={{color:"green"}}/>
              </div>

              <div className="reviews-text">
                <span>
                  First transfer and they made me mad, worse service and{" "}
                </span>
              </div>
            </div>
          </div>
          
        </div>
      </div>



      {/* drawer */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="265px" textAlign="center" role="presentation">
          {list()}
        </Box>
      </Drawer>



      {/* Dialog box */}
      <Dialog
        open={dialoglOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="dialog-box">
          <div className="main-div-dialog">
            <Box className="dialog-sub-box" style={{ lineHeight: "0" }}>
              <h4>Rate Your Recent Experience</h4>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <h4>Tell Us More About Your Exerience</h4>
            </Box>

            <Box className="dialog-sub-box" style={{ lineHeight: "0" }}>
              <h4>
                <a href="">Read Our Guidelines for Reviewers</a>
              </h4>
              <textarea name="" id=""></textarea>
              <h4>
                <a href="">How to write a useful review</a>
              </h4>
            </Box>

            <Box className="dialog-sub-box">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="course-name">Enter Your Course Name</label>
                <input
                  type="text"
                  id="course-name"
                  style={{
                    width: "325px",
                    height: "35px",
                    borderRadius: "5px",
                    border: "1px solid grey",
                  }}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="platform-name">Give your platform name</label>
                <input
                  type="text"
                  id="platform-name"
                  style={{
                    width: "325px",
                    height: "35px",
                    borderRadius: "5px",
                    border: "1px solid grey",
                  }}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="course-url">Enter Course URL</label>
                <input
                  type="url"
                  id="course-url"
                  style={{
                    width: "325px",
                    height: "35px",
                    borderRadius: "5px",
                    border: "1px solid grey",
                  }}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="purchase-date">Enter purchased date</label>
                <input
                  type="date"
                  id="purchase-date"
                  style={{
                    width: "325px",
                    height: "35px",
                    borderRadius: "5px",
                    border: "1px solid grey",
                  }}
                />
              </div>
            </Box>
            <div style={{ margin: "29px 120px 0px" }}>
              <Button
                onClick={handleClose}
                variant="contained"
                sx={{ backgroundColor: "rgb(9, 143, 96)", width: "100px" }}
              >
                Save
              </Button>
            </div>
          </div>
        </Box>
      </Dialog>
      
    </div>
  );
}

export default Home;
