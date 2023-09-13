import React from "react";
import "../Comparison/Comparison.css";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Rating from "@mui/material/Rating";

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};
const Comparison = () => {
    const [value, setValue] = React.useState(2);
  return (
    <>
      <div className="comp-main-cont">
        <div className="comp-left-cont">
          <div className="list-container">
            <div className="search-box">
              <form
                className="example"
                action=""
                style={{maxWidth: "320px" }}
              >
                <input type="text" placeholder="Search.." name="search2" />
                <button type="submit">
                  Search
                </button>
              </form>
            </div>
            <div style={{color:"black", fontSize:"1.2rem", marginTop:"2rem", marginBottom:"0.5rem", fontWeight:"600"}}>
              Related Course
            </div>
            <div style={{ width: "20rem" }}>
              <List sx={style} component="nav" aria-label="mailbox folders">
                <ListItem button>
                  <ListItemText primary="Web Development" />
                </ListItem>
                <Divider />
                <ListItem button divider>
                  <ListItemText primary="Data Science" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Mobile Development" />
                </ListItem>
                <Divider light />
                <ListItem button>
                  <ListItemText primary="Programming Languages" />
                </ListItem>
                <Divider light />
                <ListItem button>
                  <ListItemText primary="Game Development" />
                </ListItem>
                <Divider />
                <ListItem button divider>
                  <ListItemText primary="Database Design & Developement" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Software Testing" />
                </ListItem>
                <Divider light />
                <ListItem button>
                  <ListItemText primary="Software Engineering" />
                </ListItem>
                <Divider />
                <ListItem button divider>
                  <ListItemText primary="Software Development Tools" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="No-Code Development" />
                </ListItem>
              </List>
            </div>
          </div>
        </div>

        <div className="comp-right-cont">
            <div className="comp-text-cont1">
                <h1>Best In Course</h1>
                <p>Compare the best course</p>
            </div>
            <div className="comp-reviews-cont">
                <div className="each-reviews">
                    <div className="cust-img232"><img src="https://play-lh.googleusercontent.com/dsCkmJE2Fa8IjyXERAcwc5YeQ8_NvbZ4_OI8LgqyjILpXUfS5YhEcnAMajKPrZI-og" alt="" /></div>
                    <div className="cust-reviews232">
                        <div className="cust-rev-course">Javascript</div>
                        <div className="cust-rev-reviews549">
                            <span><Rating name="read-only" value={3} readOnly style={{color:"green"}}/></span>
                            <span style={{fontWeight:"600"}}>TrustScores 4.0</span>
                            <span>3,302 reviews</span>
                        </div>
                    </div>
                </div>


                <div className="each-reviews">
                    <div className="cust-img232"><img src="https://play-lh.googleusercontent.com/dsCkmJE2Fa8IjyXERAcwc5YeQ8_NvbZ4_OI8LgqyjILpXUfS5YhEcnAMajKPrZI-og" alt="" /></div>
                    <div className="cust-reviews232">
                        <div className="cust-rev-course">Javascript-mastry course</div>
                        <div className="cust-rev-reviews549">
                            <span><Rating name="read-only" value={3} readOnly style={{color:"green"}}/></span>
                            <span style={{fontWeight:"600"}}>TrustScores 4.0</span>
                            <span>3,302 reviews</span>
                        </div>
                    </div>
                </div>


                <div className="each-reviews">
                    <div className="cust-img232"><img src="https://play-lh.googleusercontent.com/dsCkmJE2Fa8IjyXERAcwc5YeQ8_NvbZ4_OI8LgqyjILpXUfS5YhEcnAMajKPrZI-og" alt="" /></div>
                    <div className="cust-reviews232">
                        <div className="cust-rev-course">Javascript</div>
                        <div className="cust-rev-reviews549">
                            <span><Rating name="read-only" value={3} readOnly style={{color:"green"}}/></span>
                            <span style={{fontWeight:"600"}}>TrustScores 4.0</span>
                            <span>3,302 reviews</span>
                        </div>
                    </div>
                </div>


                <div className="each-reviews">
                    <div className="cust-img232"><img src="https://play-lh.googleusercontent.com/dsCkmJE2Fa8IjyXERAcwc5YeQ8_NvbZ4_OI8LgqyjILpXUfS5YhEcnAMajKPrZI-og" alt="" /></div>
                    <div className="cust-reviews232">
                        <div className="cust-rev-course">Javascript</div>
                        <div className="cust-rev-reviews549">
                            <span><Rating name="read-only" value={3} readOnly style={{color:"green"}}/></span>
                            <span style={{fontWeight:"600"}}>TrustScores 4.0</span>
                            <span>3,302 reviews</span>
                        </div>
                    </div>
                </div>


                <div className="each-reviews">
                    <div className="cust-img232"><img src="https://play-lh.googleusercontent.com/dsCkmJE2Fa8IjyXERAcwc5YeQ8_NvbZ4_OI8LgqyjILpXUfS5YhEcnAMajKPrZI-og" alt="" /></div>
                    <div className="cust-reviews232">
                        <div className="cust-rev-course">Javascript</div>
                        <div className="cust-rev-reviews549">
                            <span><Rating name="read-only" value={3} readOnly style={{color:"green"}}/></span>
                            <span style={{fontWeight:"600"}}>TrustScores 4.0</span>
                            <span>3,302 reviews</span>
                        </div>
                    </div>
                </div>


                <div className="each-reviews">
                    <div className="cust-img232"><img src="https://play-lh.googleusercontent.com/dsCkmJE2Fa8IjyXERAcwc5YeQ8_NvbZ4_OI8LgqyjILpXUfS5YhEcnAMajKPrZI-og" alt="" /></div>
                    <div className="cust-reviews232">
                        <div className="cust-rev-course">Javascript</div>
                        <div className="cust-rev-reviews549">
                            <span><Rating name="read-only" value={3} readOnly style={{color:"green"}}/></span>
                            <span style={{fontWeight:"600"}}>TrustScores 4.0</span>
                            <span>3,302 reviews</span>
                        </div>
                    </div>
                </div>


                <div className="each-reviews">
                    <div className="cust-img232"><img src="https://play-lh.googleusercontent.com/dsCkmJE2Fa8IjyXERAcwc5YeQ8_NvbZ4_OI8LgqyjILpXUfS5YhEcnAMajKPrZI-og" alt="" /></div>
                    <div className="cust-reviews232">
                        <div className="cust-rev-course">Javascript</div>
                        <div className="cust-rev-reviews549">
                            <span><Rating name="read-only" value={3} readOnly style={{color:"green"}}/></span>
                            <span style={{fontWeight:"600"}}>TrustScores 4.0</span>
                            <span>3,302 reviews</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Comparison;
