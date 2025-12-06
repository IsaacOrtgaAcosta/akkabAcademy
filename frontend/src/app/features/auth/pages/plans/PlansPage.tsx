import { Box, Typography } from "@mui/material";
import { Plans } from "../../components/plans/Plans";
import styles from "./PlansPage.module.css";

export const PlansPage = () => {
  return (
    <Box className={styles.box}>
      <Plans />
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