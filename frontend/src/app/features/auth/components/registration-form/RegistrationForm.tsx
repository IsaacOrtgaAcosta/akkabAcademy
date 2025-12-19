import { type PlanResponseProps } from "@/app/features/auth/components/plans/getPlans";
import { Typography } from "@mui/material";


interface RegistrationFormProps {
  plan: PlanResponseProps;
}

export const RegistrationForm = ({plan}: RegistrationFormProps) => {
  console.log('AQUÍ NEWPLAN: ', plan)
  return (
  <>
  <Typography variant="h6" component='h1' sx={{mt: 2}}>
    Has elegido el Plan {plan.name}
    </Typography>

  </>
);
};

