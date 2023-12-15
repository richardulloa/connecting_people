import React from "react";
import "./css/Intereses.css";
import AddBoxIcon from '@mui/icons-material/AddBox';

const Intereses = ({usuario}) => {
  return (
    <div className="intereses">
      <div className="interes">
        <a>Futbol</a>
      </div>
      <AddBoxIcon  sx={{fontSize:30}}/>
    </div>
  );
};

export default Intereses;