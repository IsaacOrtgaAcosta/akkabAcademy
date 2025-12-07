import { ModalComponent } from "@/app/shared/components/ui/modal/Modal";
import { Box, DialogContent, DialogTitle, Typography } from "@mui/material";
import type { idPlan } from "@/app/shared/types/common";
import HorizontalMonochrome from "@/assets/logo/logo-monochrome.svg";

interface RegisterFromProps {
  idPlan: idPlan;
  isOpen: boolean;
  onClose: () => void;
}

export const RegisterForm: React.FC<RegisterFromProps> = ({
  idPlan,
  isOpen,
  onClose,
}) => {
  return (
    <>
      <ModalComponent open={isOpen} onClose={onClose} idPlan={idPlan}>
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
      </ModalComponent>
    </>
  );
};
