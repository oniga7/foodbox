import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function TableInput(props) {
    const {value, name} = props;
    const [currentValue, setCurrentValue] = useState("")

    useEffect(()=> {
        if(value) {
          setCurrentValue(value)
        } else {
          setCurrentValue('')
        }
    }, [value, setCurrentValue])

    return (
        <TextField
          name={name}
          fullWidth
          onChange={(e) => {
            const selectedValue = e.target.value;
            setCurrentValue(selectedValue)
          }}
          value={currentValue}
          {...props}
        />
    );
}