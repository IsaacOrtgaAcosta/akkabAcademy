import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Plans } from "../../components/plans/Plans";
import {
  getPlans,
  type PlanResponseProps,
} from "@/app/features/auth/components/plans/getPlans";
import { Loading } from "@/app/shared/components/ui/loading/Loading";
import { ErrorView } from "@/app/shared/components/ui/error/Error";
import styles from "./PlansPage.module.css";

export const PlansPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [plans, setPlans] = useState<PlanResponseProps[]>([]);
  const [status, setStatus] = useState<number | null>(null);

  // Llamada a getPlans para obtener los datos de cada plan:
  useEffect(() => {
    const fetchPlans = async () => {
      setLoading(true);
      try {
        const data = await getPlans("services");
        setPlans(data.newPlan);
      } catch (error: any) {
        setStatus(error.status ?? 500);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);
  console.log("PLANS: ", plans);

  if (loading) {
    return (
      <Loading />
    );
  }
  
  if (status && status !== 200) {
    return <ErrorView status={status} />;
  }

  return (
    <Box className={styles.box}>
      <Plans plans={plans}/>
      <Box className={styles.faq}>
        <Typography variant="subtitle1" className={styles.faqTitle}>
          Preguntas frecuentes
        </Typography>
        <ul className={styles.faqList}>
          <li>
            <strong>¿Puedo cambiar de plan cuando quiera?</strong>
            <br />
            Sí, puedes subir o bajar de plan en cualquier momento. El cambio se
            aplica al siguiente ciclo de facturación.
          </li>
          <li>
            <strong>¿Hay permanencia o contrato mínimo?</strong>
            <br />
            No. Puedes cancelar en cualquier momento desde tu panel de
            administración.
          </li>
          <li>
            <strong>¿Qué pasa con mis datos si dejo de usar Akkab?</strong>
            <br />
            Siempre podrás exportar tus datos antes de cancelar tu cuenta.
          </li>
        </ul>
      </Box>
    </Box>
  );
};
