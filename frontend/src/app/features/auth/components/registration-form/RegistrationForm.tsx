import { ModalComponent } from "@/app/shared/components/ui/modal/Modal";
import { Box, DialogContent, DialogTitle, Typography } from "@mui/material";
import HorizontalMonochrome from "@/assets/logo/logo-monochrome.svg";
import React, { useEffect, useState } from "react";
import {
  getPlan,
  type PlanResponseProps,
} from "@/app/features/auth/components/plans/getPlans";

interface RegistrationFromProps {
  idPlan: string | undefined;
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationForm: React.FC<RegistrationFromProps> = ({
  idPlan,
  isOpen,
  onClose,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [plan, setPlan] = useState<PlanResponseProps[]>([])
  const [status, setStatus] = useState<number | null>(null);
  
  useEffect(() => {
    if(!isOpen || !idPlan) return;
    const fetchPlan = async () => {
      setLoading(true);
      try {
          const data = await getPlan(idPlan);
          console.log('AQUÍ LA DATA. ', data)
          setPlan(data.newPlan)
      } catch (error: any) {
        setStatus(error.status ?? 500);
      }
    };
    fetchPlan();
  }, [idPlan, isOpen]);
  return (
    <>
      <ModalComponent open={isOpen} onClose={onClose}>
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
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
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
                    sx={{ color: "#6B7280", fontWeight: 500 }}
                  >
                    Registro y pago Plan Premium
                  </Typography>
                </Box>
              </Box>
            </DialogTitle>

            {/* CONTENIDO DEL MODAL */}
            <DialogContent sx={{ px: 3, py: 3 }}>
              CONTENIDO DEL MODAL
            </DialogContent>
          </Box>
        </React.Fragment>
      </ModalComponent>
    </>
  );
};
