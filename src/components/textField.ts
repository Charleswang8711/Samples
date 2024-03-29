import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";

export const CssTextField = styled(TextField)({
 
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E0E3E7',
      // backgroundColor: '#F0F8FF',
      margin: '0px 10px 0px 0px',
     
   
    },
    '&:hover fieldset': {
      borderColor: '#B2BAC2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6F7E8C',
    },
  },
});