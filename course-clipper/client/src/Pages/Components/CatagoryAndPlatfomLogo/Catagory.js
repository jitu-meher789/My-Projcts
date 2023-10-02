import React from "react";
import "../CatagoryAndPlatfomLogo/Catagory.css";
import { useState } from "react";

import Button from "@mui/material/Button";
import { Divider } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import DeleteIcon from "@mui/icons-material/Delete";

function Catagory() {
  const [isAddCatagoryOpen, setIsAddCatagoryOpen] = React.useState(false);
  const handleOpenAddCatagory = () => setIsAddCatagoryOpen(true);
  const handleCloseAddCatagory = () => setIsAddCatagoryOpen(false);

  const [isCatagoryDelete, setCatagoryDelete] = React.useState(false);
  const handleOpenCatagoryDelete = () => setCatagoryDelete(true);
  const handleCloseCatagoryDelete = () => setCatagoryDelete(false);

  const [isPlatformOpen, setIsPlatformOpen] = React.useState(false);
  const handleOpenAddPlatformLogo = () => setIsPlatformOpen(true);
  const handleCloseAddPlatformLogo = () => setIsPlatformOpen(false);

  const [isLogoDeleteOpen, setIsLogoDeleteOpen] = React.useState(false);
  const handleOpenDeleteLogo = () => setIsLogoDeleteOpen(true);
  const handleCloseDeleteLogo = () => setIsLogoDeleteOpen(false);

  return (
    <>
      <div className="main-catag">
        <div className="cata-logo">
          <div className="catagory">
            <div className="cata-btn">
              <Button
                onClick={() => {
                  handleOpenAddCatagory(true);
                }}
                variant="contained"
              >
                Add Catagory
              </Button>
            </div>

            <Divider style={{ marginTop: "5px" }}></Divider>

            <div>
              <ul>
                <li>
                  Web Development{" "}
                  <DeleteIcon
                    onClick={() => {
                      handleOpenCatagoryDelete(true);
                    }}
                    className="del-cata"
                    style={{
                      color: "red",
                      fontSize: "20px",
                      backgroundColor: "  rgb(184, 180, 180)",
                      borderRadius: "5px",
                      marginLeft: "10px",
                      verticalAlign: "bottom",
                    }}
                  />
                </li>
                <Divider style={{ marginTop: "5px" }}></Divider>
              </ul>
            </div>
          </div>
        </div>

        <div className="logo-logo">
          <div className="logo">
            <div className="cata-btn">
              <Button
                onClick={() => {
                  handleOpenAddPlatformLogo(true);
                }}
                variant="contained"
              >
                Add Platform Logo
              </Button>
            </div>

            <Divider style={{ marginTop: "5px" }}></Divider>

            <div className="cata-list">
              <div className="log-div">
                <img
                  src="https://play-lh.googleusercontent.com/dsCkmJE2Fa8IjyXERAcwc5YeQ8_NvbZ4_OI8LgqyjILpXUfS5YhEcnAMajKPrZI-og"
                  alt="platform-logo"
                />
                <DeleteIcon
                  onClick={() => {
                    handleOpenDeleteLogo(true);
                  }}
                  className="del-cata"
                  style={{
                    color: "red",
                    fontSize: "20px",
                    backgroundColor: "  rgb(184, 180, 180)",
                    borderRadius: "5px",
                    marginLeft: "10px",
                    verticalAlign: "bottom",
                  }}
                />
              </div>
              <div className="log-div">
                <img
                  src="https://play-lh.googleusercontent.com/AZW3Q9fPfsjhJncEpiAEsfteaz3pep88Tfy2-sjjf4Ib7wfM0M6B0TcRuW3-JJsS2oVz"
                  alt="platform-logo"
                />
                <DeleteIcon
                  onClick={() => {
                    handleOpenDeleteLogo(true);
                  }}
                  className="del-cata"
                  style={{
                    color: "red",
                    fontSize: "20px",
                    backgroundColor: "  rgb(184, 180, 180)",
                    borderRadius: "5px",
                    marginLeft: "10px",
                    verticalAlign: "bottom",
                  }}
                />
              </div>
              <div className="log-div">
                <img
                  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera.s3.amazonaws.com/media/coursera-rebrand-logo-square.png?auto=format%2Ccompress&dpr=1"
                  alt="platform-logo"
                />
                <DeleteIcon
                onClick={() => {
                    handleOpenDeleteLogo(true);
                  }}
                  className="del-cata"
                  style={{
                    color: "red",
                    fontSize: "20px",
                    backgroundColor: "  rgb(184, 180, 180)",
                    borderRadius: "5px",
                    marginLeft: "10px",
                    verticalAlign: "bottom",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* add catagory dialog */}
      <Dialog
        open={isAddCatagoryOpen}
        onClose={handleCloseAddCatagory}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="dialog-box-ad"
          style={{ width: "380px", height: "200px", paddingTop: "25px" }}
        >
          <div className="main-div-dialog-ad">
            <Typography
              style={{
                marginBottom: "25px",
                fontSize: "1.3rem",
                textAlign: "center",
              }}
            >
              Do you want to add a catagory ?
            </Typography>
            <input
              type="text"
              placeholder="Enter Catagory"
              style={{
                width: "300px",
                margin: "auto",
                height: "40px",
                borderRadius: "5px",
                fontSize: "18px",
                paddingLeft: "5px",
                border: "1px solid rgb(184, 180, 180)",
              }}
            />
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <Button
                onClick={handleCloseAddCatagory}
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
                onClick={() => handleCloseAddCatagory(true)}
                variant="contained"
                sx={{ backgroundColor: "#0bb980", width: "50px" }}
              >
                Add
              </Button>
            </div>
          </div>
        </Box>
      </Dialog>

      {/* delete catagory */}
      <Dialog
        open={isCatagoryDelete}
        onClose={handleCloseCatagoryDelete}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="dialog-box-ad"
          style={{ width: "380px", height: "160px", paddingTop: "25px" }}
        >
          <div className="main-div-dialog-ad">
            <Typography
              style={{
                marginBottom: "25px",
                fontSize: "1.3rem",
                textAlign: "center",
              }}
            >
              Are you sure, you want to delete the catagory?
            </Typography>
            <div style={{ textAlign: "center" }}>
              <Button
                onClick={handleCloseCatagoryDelete}
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
                onClick={() => {
                  handleCloseCatagoryDelete();
                }}
                variant="contained"
                sx={{ backgroundColor: "red", width: "50px" }}
              >
                Delete
              </Button>
            </div>
          </div>
        </Box>
      </Dialog>

      {/* add platform logo */}
      <Dialog
        open={isPlatformOpen}
        onClose={handleCloseAddPlatformLogo}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="dialog-box-ad"
          style={{ width: "380px", height: "250px", paddingTop: "25px" }}
        >
          <div className="main-div-dialog-ad">
            <Typography
              style={{
                marginBottom: "25px",
                fontSize: "1.3rem",
                textAlign: "center",
              }}
            >
              Enter Platform logo's Url

              <input
                type="text"
                placeholder="Enter platform name... ex-udemy,pluralsight..."
                style={{
                  width: "300px",
                  margin: "auto",
                  height: "40px",
                  borderRadius: "5px",
                  paddingLeft: "5px",
                  border: "1px solid rgb(184, 180, 180)",
                  marginTop: "20px",
                }}
              />
              <input
                type="text"
                placeholder="Enter Logo's Url"
                style={{
                  width: "300px",
                  margin: "auto",
                  height: "40px",
                  borderRadius: "5px",
                  paddingLeft: "5px",
                  border: "1px solid rgb(184, 180, 180)",
                  marginTop: "20px",
                }}
              />
               
            </Typography>
            <div style={{ textAlign: "center" }}>
              <Button
                onClick={handleCloseAddPlatformLogo}
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
                onClick={() => {
                  handleCloseAddPlatformLogo();
                }}
                variant="contained"
                sx={{ backgroundColor: "red", width: "50px" }}
              >
                Add
              </Button>
            </div>
          </div>
        </Box>
      </Dialog>


      {/* delete logo */}
      <Dialog
        open={isLogoDeleteOpen}
        onClose={handleCloseDeleteLogo}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="dialog-box-ad"
          style={{ width: "380px", height: "160px", paddingTop: "25px" }}
        >
          <div className="main-div-dialog-ad">
            <Typography
              style={{
                marginBottom: "25px",
                fontSize: "1.3rem",
                textAlign: "center",
              }}
            >
              Are you sure, you want to delete the logo ?
            </Typography>
            <div style={{ textAlign: "center" }}>
              <Button
                onClick={handleCloseDeleteLogo}
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
                onClick={() => {
                    handleCloseDeleteLogo();
                }}
                variant="contained"
                sx={{ backgroundColor: "red", width: "50px" }}
              >
                Delete
              </Button>
            </div>
          </div>
        </Box>
      </Dialog>
    </>
  );
}

export default Catagory;
