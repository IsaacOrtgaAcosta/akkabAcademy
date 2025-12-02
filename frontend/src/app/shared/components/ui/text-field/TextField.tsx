import Box from '@mui/material/Box';
import TextField, { type TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';

export type OutlineTextFieldProps = MuiTextFieldProps & {
    myProps?: string;
};

export const TextFieldComponent: React.FC<OutlineTextFieldProps> = (
  {
    label,
  }
) => {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label={label} variant="outlined"/>
    </Box>
  );
};