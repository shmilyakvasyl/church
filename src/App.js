import "./App.css";
import {
  Typography,
  Select,
  MenuItem,
  ListSubheader,
  InputLabel,
  FormControl,
} from "@mui/material";
import Data from "./Data/Data";
import Map from "./Components/Map";
import { useState } from "react";

function App() {
  const [data, setData] = useState("");
  const handleChange = (name) => {
    console.log("value changed");
  };

  // console.log(data)

  function Filter() {
    let ch;
    Data.map((obj) =>
      obj.churches.map((church) => {
        if (church.name == data) {
          ch = church;
        }
      })
    );

    console.log(ch.img);
    return (
      <div>
        <div>{ch.name}</div>
        <div>{ch.address}</div>
        {ch.src < 20 ? (
          <div> No map </div>
        ) : (
          <iframe
            src={ch.src}
            style={{ border: "0", width: "500px", height: "500px", marginTop:"20px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        
        )}
        {/* <div>

				<img src={"./img/свято-троїцький-ужгород.jpg"} />
				</div> */}
      </div>
    );
  }

  return (
    <div className="App">
      <Map />
      {/* <FormControl variant="filled" sx={{ m: 1, minWidth: "300px" }}>
        <InputLabel id="locality-label">Населений пункт</InputLabel>
        <Select
          labelId="locality-label"
          value={data}
          onClick={() => handleChange()}
        >
          {Data.map((city) => (
            <div key={city.city}>
              <ListSubheader>{city.city}</ListSubheader>
              {city.churches.map((church) => (
                <MenuItem
                  key={church.name}
                  value={church.name}
                >
                  {church.name}
                </MenuItem>
              ))}
            </div>
          ))}
        </Select>
      </FormControl> */}
      <div style={{ margin: "50px auto" }}>
        <InputLabel id="demo-simple-select-label">UPZ Churches</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data}
          label="Data"
          onChange={(e) => setData(e.target.value)}
          style={{ margin: "10px auto", width: "50%" }}
        >
          {Data.map((city) =>
            city.churches.map((church) => (
              <MenuItem key={church.name} value={church.name}>
                <ListSubheader>{city.city}</ListSubheader>
                {church.name}
              </MenuItem>
            ))
          )}
        </Select>
      </div>
      {data ? Filter() : <></>}
      
    </div>
  );
}

export default App;
