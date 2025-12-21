import { TextFieldComponent as TextField } from "@/app/shared/components/ui/text-field/TextField";
import { Box, Collapse, Grid, Typography } from "@mui/material";
import styles from "./RegistrationForm.module.css";
import { AlertComponent } from "@/app/shared/components/ui/alert/Alert";

interface BusinessFormProps {
  errorVisible: boolean;
}

export const BusinessForm = ({errorVisible}: BusinessFormProps) => {

  return (
    <>
        <Collapse in={errorVisible} timeout={300} unmountOnExit>
          <Box sx={{ mb: 2}}>
            <AlertComponent severity="error" variant="filled">
              Rellene todos los campos para continuar
            </AlertComponent>
          </Box>
        </Collapse>
      <Box>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label={"Nombre del centro"}
              type="text"
              // value={personalData.name}
              // onChange={(e) =>
              //   setPersonalData((prev) => ({
              //     ...prev,
              //     name: e.target.value,
              //   }))
              // }
            ></TextField>
            <TextField
              fullWidth
              label={"Tipo de centro"}
              type="email"
              // value={personalData.email}
              // onChange={(e) =>
              //   setPersonalData((prev) => ({
              //     ...prev,
              //     email: e.target.value,
              //   }))
              // }
            ></TextField>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: "flex", flexDirection: "column", alignItems: "end" }}
          >
            <Box className={styles.inputWrapper}>
              <TextField
                fullWidth
                label={"País"}
                // type={type}
                // value={personalData.password}
                // onChange={(e) =>
                //   setPersonalData((prev) => ({
                //     ...prev,
                //     password: e.target.value,
                //   }))
                // }
              ></TextField>
            </Box>
            <Box className={styles.inputWrapper}>
              <TextField
                fullWidth
                label={"Ciudad"}
                // type={type}
                // value={personalData.repeatPassword}
                // onChange={(e) =>
                //   setPersonalData((prev) => ({
                //     ...prev,
                //     repeatPassword: e.target.value,
                //   }))
                // }
              ></TextField>
            </Box>
            <Box sx={{ width: "80%" }}>
              <Typography fontSize={14} className={styles.errorPassword}>
                Las contraseñas no coinciden
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
