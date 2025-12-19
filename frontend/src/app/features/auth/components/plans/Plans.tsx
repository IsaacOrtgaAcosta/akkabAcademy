import React, { useState } from "react";
import {
  Box,
  Button,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import StarIcon from "@mui/icons-material/Star";
import HorizontalLogo from "@/assets/logo/logo-horizontal.svg";
import styles from "./Plans.module.css";
import { RegistrationForm } from "../registration-form/RegistrationForm";
import type { PlanResponseProps} from "./getPlans";
import {PLAN_COLORS} from './getPlans';
import { priceFormatter, currentFormatter } from "@/app/shared/lib/formatters/price";


interface PlansProps {
  plans: PlanResponseProps[];
}

export const Plans = ({ plans }: PlansProps) => {
  const [idPlan, setIdPlan] = useState<string | undefined>("");
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    const idPlan = (e.currentTarget.closest("[data-idplan]") as HTMLElement)
      ?.dataset.idplan;

    setIsOpen(true);
    setIdPlan(idPlan);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Box component="section" className={styles.section}>
      <Box className={styles.inner}>
        <Box
          component="img"
          src={HorizontalLogo}
          alt="Akkab"
          sx={{
            height: 40,
            display: "block",
          }}
        />
        <Box className={styles.heading}>
          <Typography variant="h4" component="h1" className={styles.title}>
            Elige el plan ideal para tu academia
          </Typography>
          <Typography variant="subtitle1" className={styles.subtitle}>
            Sin permanencia · Cambia o cancela cuando quieras
          </Typography>
        </Box>

        {/* CARDS O ERROR */}
        <Box className={styles.container}>
          {plans.map((plan) => {
            // Se filtra si es el PRO para ajustar estilos como plan recomendado
            const isRecommended = plan.code === "PRO";
            const color = PLAN_COLORS[plan.code]
            return (
              <React.Fragment key={plan.id}>
              <Card
                sx={{ maxWidth: 345, display: "flex", flexDirection: "column" }}
                className={isRecommended ? `${styles.card} ${styles.cardFeatured}` : `${styles.card}`}
                data-idplan={plan.id}
              >
                <CardHeader
                  avatar={
                    <Avatar
                      sx={{
                        bgcolor: color,
                        color: "#1F2937",
                        fontSize: "14px",
                      }}
                      aria-label={plan.code}
                    >
                      {plan.code}
                    </Avatar>
                  }
                  action={ isRecommended ? <StarIcon sx={{ color: "#1E40AF" }} /> : ''}

                  title={plan.name}
                  subheader={plan.short_description}
                  slotProps={{
                    title: { sx: { fontWeight: "bold", fontSize: "20px" } },
                  }}
                />

                <CardContent
                  sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
                >
                  <Typography component="h3" className={styles.cardHeading}>
                    {plan.long_description}
                  </Typography>

                  {/* Pintamos los servicios de cada plan */}
                  {plan.services && plan.services.length > 0 ? (
                    <List sx={{ listStyleType: "disc", pl: 2 }}>
                      {plan.services.map((service, serviceIndex) => (
                        <ListItem
                          key={`${plan.id}-${serviceIndex}`}
                          sx={{ display: "list-item" }}
                        >
                          <ListItemText primary={service} />
                        </ListItem>
                      ))}
                    </List>
                  ) : (
                    ""
                  )}

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      mt: "auto",
                    }}
                  >
                    <Typography component="h3" className={styles.price}>
                      {`${priceFormatter(plan.price_cents)} ${currentFormatter(plan.currency)} / mes`}
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{ mt: 2 }}
                      onClick={handleOpenModal}
                    >
                      Elegir plan
                    </Button>
                  </Box>
                </CardContent>
              </Card>
              </React.Fragment>
            );
          })}
        </Box>

        {/* TEXTO FINAL OPCIONAL */}
        <Typography variant="body2" sx={{fontSize: 20, mt: 2, color: '#6b7280'}} className={styles.helperText}>
          ¿Tienes dudas sobre qué plan elegir? <Link href="/contacto" underline="hover">Escríbenos</Link> y te ayudamos a
          escoger el ideal para tu academia.
        </Typography>
      </Box>
      <RegistrationForm
        isOpen={isOpen}
        onClose={handleCloseModal}
        idPlan={idPlan}
      />
    </Box>
  );
};
