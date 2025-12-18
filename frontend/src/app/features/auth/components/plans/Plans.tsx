import { useState } from "react";
import {
  Box,
  Button,
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
import { RegisterForm } from "../register-form/RegisterForm";
import type { PlanResponseProps} from "./getPlans";
import {PLAN_COLORS} from './getPlans';

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
            const isRecommended = plan.code === "PRO";

            const color = PLAN_COLORS[plan.code]
            return (
              <Card
                sx={{ maxWidth: 345, display: "flex", flexDirection: "column" }}
                className={styles.card}
                data-idPlan={"1"}
              >
                <CardHeader
                  avatar={
                    <Avatar
                      sx={{
                        bgcolor: color,
                        color: "#1F2937",
                        fontSize: "14px",
                      }}
                      aria-label="basic-plan"
                    >
                      {plan.code}
                    </Avatar>
                  }
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
                  {plan.services.length > 0 ? (
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
                      29€/mes
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
            );
          })}
          {/* BASIC PLAN */}
          {/* <Card
              sx={{ maxWidth: 345, display: "flex", flexDirection: "column" }}
              className={styles.card}
              data-idPlan={"1"}
            >
              <CardHeader
                avatar={
                  <Avatar
                    sx={{
                      bgcolor: "#E5E7EB",
                      color: "#1F2937",
                      fontSize: "14px",
                    }}
                    aria-label="basic-plan"
                  >
                    BAS
                  </Avatar>
                }
                title="Basic"
                subheader="Ideal para academias pequeñas o proyectos individuales"
                slotProps={{
                  title: { sx: { fontWeight: "bold", fontSize: "20px" } },
                }}
              />

              <CardContent
                sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
              >
                <Typography component="h3" className={styles.cardHeading}>
                  Digitaliza tu academia y gestiona tus clases sin
                  complicaciones
                </Typography>

                <List sx={{ listStyleType: "disc", pl: 2 }}>
                  <ListItem sx={{ display: "list-item" }}>
                    <ListItemText primary="Hasta 50 alumnos registrados" />
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <ListItemText primary="1 profesor / 1 administrador" />
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <ListItemText primary="Calendario y control de asistencia" />
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <ListItemText primary="Soporte por email" />
                  </ListItem>
                </List>

                <Box
                  sx={{ display: "flex", flexDirection: "column", mt: "auto" }}
                >
                  <Typography component="h3" className={styles.price}>
                    29€/mes
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
            </Card> */}

          {/* PROFESSIONAL PLAN */}
          {/* <Card
              sx={{ maxWidth: 345, display: "flex", flexDirection: "column" }}
              className={`${styles.card} ${styles.cardFeatured}`}
              data-idPlan={"2"}
            >
              <CardHeader
                avatar={
                  <Avatar
                    sx={{
                      bgcolor: "#3B82F6",
                      color: "#FFFFFF",
                      fontSize: "14px",
                    }}
                    aria-label="Profesional-plan"
                  >
                    PRO
                  </Avatar>
                }
                action={<StarIcon sx={{ color: "#1E40AF" }} />}
                title="Profesional"
                subheader="Perfecto para academias en crecimiento"
                slotProps={{
                  title: { sx: { fontWeight: "bold", fontSize: "20px" } },
                }}
              />

              <CardContent
                sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
              >
                <Typography component="h3" className={styles.cardHeading}>
                  Lleva tu academia al siguiente nivel con automatización y
                  control
                </Typography>

                <List sx={{ listStyleType: "disc", pl: 2 }}>
                  <ListItem sx={{ display: "list-item" }}>
                    <ListItemText primary="Todos los servicios Basic y, además:" />
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <ListItemText primary="Hasta 300 alumnos registrados" />
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <ListItemText primary="5 profesores" />
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <ListItemText primary="Pagos con RedSyS y gestión de tarifas" />
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <ListItemText primary="Dashboard con estadísticas" />
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <ListItemText primary="Comunicación segmentada" />
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <ListItemText primary="Exportación de datos" />
                  </ListItem>
                </List>

                <Box
                  sx={{ display: "flex", flexDirection: "column", mt: "auto" }}
                >
                  <Typography component="h3" className={styles.price}>
                    59€/mes (recomendado)
                  </Typography>
                  <Button variant="contained" onClick={handleOpenModal}>
                    Elegir plan
                  </Button>
                </Box>
              </CardContent>
            </Card> */}

          {/* PREMIUM PLAN */}
          {/* <Card
              sx={{ maxWidth: 345, display: "flex", flexDirection: "column" }}
              className={styles.card}
              data-idPlan={"3"}
            >
              <CardHeader
                avatar={
                  <Avatar
                    sx={{
                      bgcolor: "#F97316",
                      color: "#FFFFFF",
                      fontSize: "14px",
                    }}
                    aria-label="premium-plan"
                  >
                    PRE
                  </Avatar>
                }
                title="Premium"
                subheader="Diseñado para academias consolidadas"
                slotProps={{
                  title: { sx: { fontWeight: "bold", fontSize: "20px" } },
                }}
              />

              <CardContent
                sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
              >
                <Typography component="h3" className={styles.cardHeading}>
                  Control total, automatizaciones avanzadas y analítica
                  profesional
                </Typography>

                <List sx={{ listStyleType: "disc", pl: 2 }}>
                  <ListItem sx={{ display: "list-item" }}>
                    <ListItemText primary="Todos los servicios del plan Profesional y, además:" />
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <ListItemText primary="Alumnos y profesores ilimitados" />
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <ListItemText primary="Módulo multi-centro" />
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <ListItemText primary="Portal de alumnos y familiares" />
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <ListItemText primary="Analítica avanzada e informes" />
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <ListItemText primary="Automatización de recordatorios" />
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <ListItemText primary="Soporte premium (chat + onboarding)" />
                  </ListItem>
                </List>

                <Box
                  sx={{ display: "flex", flexDirection: "column", mt: "auto" }}
                >
                  <Typography component="h3" className={styles.price}>
                    129€/mes
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
            </Card> */}
        </Box>

        {/* TEXTO FINAL OPCIONAL */}
        <Typography variant="body2" className={styles.helperText}>
          ¿Tienes dudas sobre qué plan elegir? Escríbenos y te ayudamos a
          escoger el ideal para tu academia.
        </Typography>
      </Box>
      <RegisterForm
        isOpen={isOpen}
        onClose={handleCloseModal}
        idPlan={idPlan}
      />
    </Box>
  );
};
