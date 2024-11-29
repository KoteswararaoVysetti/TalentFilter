"use client";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

export default function Dropdown(props: any) {
  const [value, setValue] = useState<string>("");
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
    props?.onChange(value);
  };

  return (
    <div>
      <Box sx={{ minWidth: 120, width: "300px", margin: "8px" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{props?.label}</InputLabel>
          <Select
            sx={{
              ".MuiSelect-outlined": {
                border: "1px solid #e5e7eb",
              },
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label={props?.label}
            onChange={handleChange}
          >
            {props?.list?.map((item: any) => {
              <MenuItem value={item?.id}>{item?.value}</MenuItem>;
            })}
            {props?.list &&
              props?.list?.length > 0 &&
              props?.list?.map((menuItem: any) => (
                <MenuItem key={menuItem?.id} value={menuItem?.id}>
                  {menuItem?.value}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
