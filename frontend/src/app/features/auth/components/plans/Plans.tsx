import { Box, List, ListItem, ListItemText } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styles from "./Plans.module.css";

export const Plans = () => {
  return (
    <>
      {/* BASIC PLAN */}
      <Card sx={{ maxWidth: 345 }} className={styles.card}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              B
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Basic"
          subheader="Ideal Para academias pequeñas o proyectos individuales"
        />
        <CardMedia
          component="img"
          height="194"
          image="/static/images/cards/paella.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <h3>
            Digitaliza tu academia y gestiona tus clases sin complicaciones
          </h3>

          <Typography variant="body2" sx={{ color: "text.secondary" }}>
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
          </Typography>
          <h3>29€/mes</h3>
        </CardContent>
      </Card>

      {/* SILVER PLAN */}
      <Card sx={{ maxWidth: 345 }} className={styles.card}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              S
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Silver"
          subheader="Perfecto para academias en crecimiento"
        />
        <CardMedia
          component="img"
          height="194"
          image="/static/images/cards/paella.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <h3>
            Lleva tu academia al siguiente nivel con automatización y control
          </h3>

          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <List sx={{ listStyleType: "disc", pl: 2 }}>
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
          </Typography>
          <h3>59€/mes</h3>
        </CardContent>
      </Card>

      {/* GOLD PLAN */}
      <Card sx={{ maxWidth: 345 }} className={styles.card}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              G
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Gold"
          subheader="Diseñado para academias consolidadas"
        />
        <CardMedia
          component="img"
          height="194"
          image="/static/images/cards/paella.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <h3>
            Control total, automatizaciones avanzadas y analítica profesional
          </h3>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <List sx={{ listStyleType: "disc", pl: 2 }}>
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
          </Typography>
          <h3>129€/mes</h3>
        </CardContent>
      </Card>
    </>
  );
};
