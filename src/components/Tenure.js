import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const Tenure = ({ handleChange, period }) => {
  return (
    <>
      <FormControl fullWidth>
        <InputLabel>Tenure</InputLabel>
        <Select
          label="Tenure"
          value={period}
          onChange={(e) => handleChange(e.target.value)}
        >
          <MenuItem value={5}>5 Years</MenuItem>
          <MenuItem value={10}>10 Years</MenuItem>
          <MenuItem value={15}>15 Years</MenuItem>
          <MenuItem value={20}>20 Years</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default Tenure;
