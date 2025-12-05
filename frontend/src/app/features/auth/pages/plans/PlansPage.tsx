import { Box } from "@mui/material";
import { Plans } from "../../components/plans/Plans";
import styles from "./PlansPage.module.css";

export const PlansPage = () => {
  return (
    <Box className={styles.box}>
      <Plans />
    </Box>
  );
};