import { Box, Button, List, ListItem, ListItemText } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styles from "./Plans.module.css";
import StarIcon from "@mui/icons-material/Star";

export const Plans = () => {
  return (
    <Box className={styles.container}>
      {/* BASIC PLAN */}
      <Card sx={{maxWidth: 345, display: 'flex', flexDirection: 'column'}} className={styles.card}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: "#E5E7EB", color: "#1F2937" }}
              aria-label="recipe"
            >
              B
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Basic"
          subheader="Ideal para academias pequeñas o proyectos individuales"
        />
        
        <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1}}>
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
          <Box sx={{display: 'flex',  flexDirection: 'column', mt: 'auto'}}>
            <h3>29€/mes</h3>
            <Button variant="contained" sx={{ mt: 2 }}>
              Elegir plan
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* SILVER PLAN */}
      <Card sx={{maxWidth: 345, display: 'flex', flexDirection: 'column'}} className={styles.card}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: "#3B82F6", color: "#FFFFFF" }}
              aria-label="recipe"
            >
              S
            </Avatar>
          }
          action={<StarIcon sx={{ color: "#1E40AF" }}></StarIcon>}
          title="Standard"
          subheader="Perfecto para academias en crecimiento"
        />
        
        <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1}}>
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
          <Box sx={{display: 'flex',  flexDirection: 'column', mt: 'auto'}}>
            <h3>59€/mes (recomendado)</h3>
            <Button variant="contained">
                Elegir plan
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* GOLD PLAN */}
      <Card sx={{maxWidth: 345, display: 'flex', flexDirection: 'column'}} className={styles.card}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: "#F97316", color: "#FFFFFF" }}
              aria-label="recipe"
            >
              P
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Premium"
          subheader="Diseñado para academias consolidadas"
        />
        
        <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1}}>
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
          <Box sx={{display: 'flex', flexDirection: 'column', mt: 'auto'}}>
            <h3>129€/mes</h3>
            <Button variant="contained" sx={{ mt: 2 }}>
              Elegir plan
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
