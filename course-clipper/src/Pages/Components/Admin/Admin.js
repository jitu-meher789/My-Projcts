import React from 'react';
import "../Admin/Admin.css";




import Button from "@mui/material/Button";
import { Divider } from '@mui/material';

import AddLinkIcon from '@mui/icons-material/AddLink';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Rating from "@mui/material/Rating";


const Admin = () => {
  return (
   
    <>
        <div className="admin-main-div">
            <div className="panel-div">
                <div className="log-btn-dv"> <Button>LOGOUT</Button> </div>
                <div className="adm-text-div">
                    <h3>ADMIN PANEL</h3>
                </div>
                <div className="adm-date-div">
                    <input type="date" />
                </div>
            </div>
            <Divider/>
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
                        <Button id='add-btn'><AddLinkIcon style={{fontSize:"1.3rem"}}/></Button>
                        <Button id='del-btn'><DeleteOutlineIcon style={{fontSize:"1.3rem"}}/></Button>
                    </div>
                </div>

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
                </div>


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
                </div>


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
                </div>


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
                </div>



            </div>
        </div>
    </>
  )
}

export default Admin