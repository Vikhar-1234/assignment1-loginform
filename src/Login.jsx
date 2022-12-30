import React from "react";
import {
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { useState } from "react";

export const Login = () => {
  const [fName, setFname] = useState("");
  const [mName, setMname] = useState("");
  const [lName, setLname] = useState("");
  const [dOb, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(+91 );
  const [add, setAdd] = useState("");
  const [offAdd, setOffadd] = useState("");

  const oldAge = dOb.split("").splice(0, 4).join("");
  const ageYear = -oldAge + 2022;

  const [alldetails, setAlldetails] = useState([]);
  console.log(alldetails);

  const handleDelete = (index) => {
    const deleted = alldetails.filter((elem, i) => i !== index);
    setAlldetails(deleted);
  };

  const handlesave = () => {
    if (fName.trim() !== ""){
        setAlldetails([
            ...alldetails,
            { fName, lName, mName, ageYear, email, phone, add, offAdd },
          ]);
          setFname('');
          setMname('');
          setLname('');
          setEmail('');
          setPhone(+91 );
          setAdd('');
          setOffadd('');
    }
   
  };
  return (
    <div className="main">
      <Grid container spacing={2} sx={{ padding: 5 }}>
        <Grid item xs={4}>
          {" "}
          <TextField
            id="outlined-basic"
            label=" First Name"
            variant="outlined"
            value={fName}
            fullWidth
            onChange={(e) => setFname(e.target.value)}
          />{" "}
        </Grid>
        <Grid item xs={4}>
          {" "}
          <TextField
            id="outlined-basic"
            label="Middle Name"
            variant="outlined"
            value={mName}
            fullWidth
            onChange={(e) => setMname(e.target.value)}
          />{" "}
        </Grid>
        <Grid item xs={4}>
          {" "}
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            value={lName}
            fullWidth
            onChange={(e) => setLname(e.target.value)}
          />{" "}
        </Grid>

        <Grid item xs={4}>
          {" "}
          <TextField
            id="outlined-basic"
            type={"date"}
            variant="outlined"
            fullWidth
            onChange={(e) => setDob(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          {" "}
          <TextField
            id="outlined-basic"
            type="email"
            label="email"
            variant="outlined"
            value={email}
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          {" "}
          <TextField
            id="outlined-basic"
            type="number"
            label="Mobile number"
            variant="outlined"
            value={phone}
            fullWidth
            onChange={(e) => setPhone(e.target.value)}
          />
        </Grid>

        <Grid item xs={2}></Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-basic"
            label="Permanent Address"
            variant="outlined"
            value={add}
            fullWidth
            onChange={(e) => setAdd(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-basic"
            label="Office Address"
            variant="outlined"
            value={offAdd}
            fullWidth
            onChange={(e) => setOffadd(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          {" "}
          <Button
            variant="contained"
            fullWidth
            onClick={handlesave}
          >
            {" "}
            Save
          </Button>{" "}
        </Grid>

        <Grid item xs={4}></Grid>
      </Grid>
      <br />

      <h1>Your Detailes</h1>
      <Grid container spacing={4}>
        {alldetails.map((item, index) => {
          return (
            <Grid item xs={3}>
              <Card sx={{ bgcolor: "aqua" }}>
                <CardContent align="center">
                  <Avatar />
                  <h2>
                    Full Name:{`${item.fName} ${item.mName} ${item.lName}`}
                  </h2>
                  <h3>DOB:{item.ageYear}</h3>
                  <h4>Email:{item.email}</h4>
                  <h5>Phone{item.phone}:</h5>
                  <h6>Address:{item.add}</h6>
                  <h6>office Address:{item.offAdd}</h6>
                  <Button
                    variant="contained"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

    </div>
  );
};
