import { ModalComponent } from "@/app/shared/components/ui/modal/Modal";
import {
  Box,
  DialogContent,
  DialogTitle,
  Typography,
  Stepper,
  Step,
  StepLabel,
  stepClasses,
  Button,
} from "@mui/material";
import HorizontalMonochrome from "@/assets/logo/logo-monochrome.svg";
import React, { useEffect, useState, type ReactNode } from "react";
import {
  getPlan,
  type PlanResponseProps,
} from "@/app/features/auth/components/plans/getPlans";
import { Loading } from "@/app/shared/components/ui/loading/Loading";
import { ErrorView } from "@/app/shared/components/ui/error/Error";
import { RegistrationForm } from "../../components/registration-form/RegistrationForm";
import styles from "./RegistrationPage.module.css";
import { areAllFieldsFilled } from "@/app/shared/lib/validators";
interface RegistrationFromProps {
  idPlan: string | undefined;
  isOpen: boolean;
  onClose: () => void;
}

interface PersonalDataProps {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const steps = ["Datos personales", "Datos de academia", "Resumen"];

export const RegistrationPage: React.FC<RegistrationFromProps> = ({
  idPlan,
  isOpen,
  onClose,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [alertIsVisible, setAlertIsVisible] = useState<boolean>(false);
  const [plan, setPlan] = useState<PlanResponseProps | null>(null);
  const [status, setStatus] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [skipped, setSkipped] = useState<Set<number>>(new Set<number>());
  const [personalData, setPersonalData] = useState<PersonalDataProps>({
    name: '',
    email: '',
    password: '',
    repeatPassword: ''
  })

  const canContinue = areAllFieldsFilled(personalData);

  const handleNext = () => {
    let newSkipped = skipped;
    if(canContinue){
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }else{
      console.log('NO PUEDES CONTINUAR')
    }
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    if (!isOpen || !idPlan) return;
    const fetchPlan = async () => {
      setLoading(true);
      try {
        const data = await getPlan(idPlan);
        setPlan(data);
      } catch (error: any) {
        setStatus(error.status ?? 500);
      } finally {
        setLoading(false);
      }
    };
    fetchPlan();
  }, [idPlan, isOpen]);

  if (loading) {
    return <Loading />;
  }

  if (status && status !== 200) {
    return <ErrorView status={status} />;
  }
  
  return (
    <ModalComponent open={isOpen} onClose={onClose} className={styles.modal}>
      <Box>
        <Box>
          {/* HEADER */}
          <DialogTitle
            sx={{
              px: 3,
              pb: 3,
              borderBottom: "1px solid #E5E7EB",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
              }}
            >
              {/* Logo + nombre app */}

              <Box
                component="img"
                src={HorizontalMonochrome}
                alt="Akkab"
                sx={{
                  height: 28,
                  display: "block",
                }}
              />
              <Typography
                variant="subtitle2"
                sx={{ color: "#6B7280", fontWeight: "bold" }}
              >
                Formulario de registro - Plan {plan && plan.name}
              </Typography>
            </Box>
          </DialogTitle>
          <Stepper sx={{ mt: 4 }} activeStep={activeStep}>
            {steps.map((label) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: {
                optional?: ReactNode;
              } = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                Envíar a la pasarela de Stripe
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {/* CONTENIDO DEL MODAL */}
              <DialogContent sx={{ mt: 2, mb: 1 }}>
                {plan && <RegistrationForm plan={plan} personalData={personalData} setPersonalData={setPersonalData}/>}
              </DialogContent>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Atrás
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Finalizar" : "Siguiente"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </Box>
    </ModalComponent>
  );
};
