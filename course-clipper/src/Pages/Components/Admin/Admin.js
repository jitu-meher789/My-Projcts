import React from "react";
import "../Admin/Admin.css";
import { useState } from "react";

import Button from "@mui/material/Button";
import { Divider } from "@mui/material";

import AddLinkIcon from "@mui/icons-material/AddLink";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Rating from "@mui/material/Rating";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Admin = () => {
  const [isDelete, setIsDelete] = React.useState(false);
  const handleOpenDeleteBox = () => setIsDelete(true);
  const handleCloseDeleteBox = () => setIsDelete(false);

  const [isUpdate, setIsUpdate] = React.useState(false);
  const handleOpenUpdateBox = () => setIsUpdate(true);
  const handleCloseUpdateBox = () => setIsUpdate(false);

  const [openUpdateForm, setIsUpdateForm] = React.useState(false);
  const handleOpenUpdateForm = () => setIsUpdateForm(true);
  //const handleCloseUdateForm = () => setIsUpdateForm(false);
  const handleCloseUdateForm = () => {
    setIsUpdateForm(false);
    setIsUpdate(false);
  };



//   const [isLogout, setIsLogOut] = React.useState(false);
//   const handleOpenLogoutBox = setIsLogOut(true);
//   const handleCloseLogoutBox = setIsLogOut(false);


  const [ratingValue, setRatingValue] = React.useState(2);

  return (
    <>
      <div className="admin-main-div">
        <div className="panel-div">
          <div className="log-btn-dv">
            {" "}
            <Button>LOGOUT</Button>{" "}
          </div>
          <div className="adm-text-div">
            <h3>ADMIN PANEL</h3>
          </div>
          <div className="adm-date-div">
            <input type="date" />
          </div>
        </div>
        <Divider />
        <div className="rev-admin-div">
          <div className="rev-content-ad">
            <div className="rev-icon-star">
              <AccountCircleIcon />
              <Rating
                name="read-only"
                value={3}
                readOnly
                style={{ color: "green" }}
              />
            </div>
            <div className="rev-cust-cont1-ad">
              <span>Maikon Lima</span>
              <span>reviewed</span>
              <span>Freecash.com</span>
            </div>
            <div className="rev-content1-ad">
              <p>
                "Freecash really does provide opportunities for us to make extra
                income. And you really get paid, i hope it stays that ways!"
              </p>
            </div>
            <div>
              <Button id="add-btn" 
              onClick={() => setIsUpdate(true)}
              >
                <AddLinkIcon style={{ fontSize: "1.3rem" }} />
              </Button>
              <Button id="del-btn" onClick={() => setIsDelete(true)}>
                <DeleteOutlineIcon style={{ fontSize: "1.3rem" }} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* delete Dialog */}
      <Dialog
        open={isDelete}
        onClose={handleCloseDeleteBox}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="dialog-box-ad">
          <div className="main-div-dialog-ad">
            <Typography style={{ marginBottom: "25px", fontSize: "1.3rem" }}>
              Are you sure, you want to delete ?
            </Typography>
            <div>
              <Button
                onClick={handleCloseDeleteBox}
                variant="outlined"
                sx={{
                  backgroundColor: "#ffff",
                  color: "black",
                  width: "50px",
                  marginRight: "20px",
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleCloseDeleteBox}
                variant="contained"
                sx={{ backgroundColor: "red", width: "50px" }}
              >
                Yes
              </Button>
            </div>
          </div>
        </Box>
      </Dialog>

      {/* updte Dialog */}
      <Dialog
        open={isUpdate}
        onClose={handleCloseUpdateBox}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="dialog-box-ad">
          <div className="main-div-dialog-ad">
            <Typography style={{ marginBottom: "25px", fontSize: "1.3rem" }}>
              Are you sure, you want to update ?
            </Typography>
            <div>
              <Button
                onClick={handleCloseUpdateBox}
                variant="outlined"
                sx={{
                  backgroundColor: "#ffff",
                  color: "black",
                  width: "50px",
                  marginRight: "20px",
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={() => setIsUpdateForm(true)}
                variant="contained"
                sx={{ backgroundColor: "#0bb980", width: "50px" }}
              >
                Yes
              </Button>
            </div>
          </div>
        </Box>
      </Dialog>

      {/* Update form  Dialog*/}
      <Dialog
        open={openUpdateForm}
        onClose={handleCloseUdateForm}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          style={{
            width: "350px",
            height: "400px",
            padding: "10px",
            textAlign: "center",
            paddingTop: "15px",
          }}
        >
          <div className="main-div-dialog">
            <Box className="dialog-sub-box" style={{ lineHeight: "0" }}>
              <h4>Enter your Affiliate Link</h4>
              <Rating name="read-only" readOnly value={2} />
              {/* <h4>Tell Us More About Your Exerience</h4> */}
            </Box>

            <Box className="dialog-sub-box">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="course-name">Course Name</label>
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
                <label htmlFor="platform-name">Platform name</label>
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
                <label htmlFor="course-url">Course URL</label>
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
                <label htmlFor="course-url">Enter Affiliate Link</label>
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
            </Box>
            <div style={{ margin: "29px 120px 0px" }}>
              <Button
                onClick={handleCloseUdateForm}
                variant="contained"
                sx={{ backgroundColor: "rgb(9, 143, 96)", width: "100px" }}
              >
                Update
              </Button>
            </div>
          </div>
        </Box>
      </Dialog>


       {/* logout  Dialog*/}
      <Dialog
        // open={isLogout}
        // onClose={handleCloseLogoutBox}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="dialog-box-ad">
          <div className="main-div-dialog-ad">
            <Typography style={{ marginBottom: "25px", fontSize: "1.3rem" }}>
              Are you sure, you want to delete ?
            </Typography>
            <div>
              <Button
                // onClick={handleCloseLogoutBox}
                variant="outlined"
                sx={{
                  backgroundColor: "#ffff",
                  color: "black",
                  width: "50px",
                  marginRight: "20px",
                }}
              >
                Cancel
              </Button>
              <Button
                // onClick={handleCloseLogoutBox}
                variant="contained"
                sx={{ backgroundColor: "red", width: "50px" }}
              >
                Yes
              </Button>
            </div>
          </div>
        </Box>
      </Dialog>

    </>
  );
};

export default Admin;
