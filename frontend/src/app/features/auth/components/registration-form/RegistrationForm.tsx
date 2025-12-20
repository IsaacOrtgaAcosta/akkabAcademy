import { TextFieldComponent as TextField } from "@/app/shared/components/ui/text-field/TextField";
import { ButtonVisibleIcon } from "@/app/shared/components/ui/buttonVisibleIcon/ButtonVisibleIcon";
import { Box, Collapse, Grid, Typography } from "@mui/material";
import { type PlanResponseProps } from "@/app/features/auth/components/plans/getPlans";
import usePasswordToggle from "@/app/shared/hooks/usePasswordToggle";
import styles from "./RegistrationForm.module.css";
import { AlertComponent } from "@/app/shared/components/ui/alert/Alert";

interface PersonalData {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

interface RegistrationFormProps {
  plan: PlanResponseProps;
  errorVisible: boolean;
  personalData: PersonalData;
  setPersonalData: React.Dispatch<React.SetStateAction<PersonalData>>;
}

export const RegistrationForm = ({
  plan,
  errorVisible,
  personalData,
  setPersonalData,
}: RegistrationFormProps) => {
  const { type, visible, toggle } = usePasswordToggle();

  console.log("AQUÍ NEWPLAN: ", plan);


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
              label={"Nombre"}
              type="text"
              value={personalData.name}
              onChange={(e) =>
                setPersonalData((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
            ></TextField>
            <TextField
              fullWidth
              label={"Email"}
              type="email"
              value={personalData.email}
              onChange={(e) =>
                setPersonalData((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
            ></TextField>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: "flex", flexDirection: "column", alignItems: "end" }}
          >
            <Box className={styles.inputWrapper}>
              <TextField
                fullWidth
                label={"Contraseña"}
                type={type}
                value={personalData.password}
                onChange={(e) =>
                  setPersonalData((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
              ></TextField>
              <ButtonVisibleIcon
                isVisible={visible}
                passwordToggle={toggle}
                className={styles.buttonVisibleIcon}
              />
            </Box>
            <Box className={styles.inputWrapper}>
              <TextField
                fullWidth
                label={"Repetir contraseña"}
                type={type}
                value={personalData.repeatPassword}
                onChange={(e) =>
                  setPersonalData((prev) => ({
                    ...prev,
                    repeatPassword: e.target.value,
                  }))
                }
              ></TextField>
              <ButtonVisibleIcon
                isVisible={visible}
                passwordToggle={toggle}
                className={styles.buttonVisibleIcon}
              />
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
