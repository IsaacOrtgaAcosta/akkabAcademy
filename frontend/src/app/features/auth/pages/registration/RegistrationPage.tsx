import { ModalComponent } from "@/app/shared/components/ui/modal/Modal";
import { Box, DialogContent, DialogTitle, Typography } from "@mui/material";
import HorizontalMonochrome from "@/assets/logo/logo-monochrome.svg";
import React, { useEffect, useState } from "react";
import {
  getPlan,
  type PlanResponseProps,
} from "@/app/features/auth/components/plans/getPlans";
import { Loading } from "@/app/shared/components/ui/loading/Loading";
import { ErrorView } from "@/app/shared/components/ui/error/Error";
import { RegistrationForm } from "../../components/registration-form/RegistrationForm";
import styles from "./RegistrationPage.module.css";
interface RegistrationFromProps {
  idPlan: string | undefined;
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationPage: React.FC<RegistrationFromProps> = ({
  idPlan,
  isOpen,
  onClose,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [plan, setPlan] = useState<PlanResponseProps | null>(null);
  const [status, setStatus] = useState<number | null>(null);

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
      <React.Fragment>
        <Box>
          {/* HEADER */}
          <DialogTitle
            sx={{
              px: 3,
              py: 2,
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
                Datos personales
              </Typography>
            </Box>
          </DialogTitle>

          {/* CONTENIDO DEL MODAL */}
          <DialogContent sx={{ px: 3, py: 3 }}>
            {plan && <RegistrationForm plan={plan} />}
          </DialogContent>
        </Box>
      </React.Fragment>
    </ModalComponent>
  );
};
