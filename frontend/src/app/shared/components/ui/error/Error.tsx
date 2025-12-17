import { Avatar, Box, Button, Card, CardContent, CardHeader, Typography } from '@mui/material'
import styles from "./Error.module.css";

export const Error = () => {
  return (
    <Box>
      <Card
            sx={{ maxWidth: 345, display: "flex", flexDirection: "column" }}
            className={styles.card}
            data-idPlan={"1"}
          >
            <CardHeader
              avatar={
                <Avatar
                  sx={{ bgcolor: "#E5E7EB", color: "#1F2937", fontSize: '14px' }}
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
                Error
              </Typography>
              <Box
                sx={{ display: "flex", flexDirection: "column", mt: "auto" }}
              >
                <Typography component="h3" className={styles.price}>
                  Algo no ha ido como esperábamos. Estamos trabajando para solucionarlo
                </Typography>
                <Button
                  variant="contained"
                  sx={{ mt: 2 }}
                  onClick={() => ('')}
                >
                 Volver al inicio
                </Button>
              </Box>
            </CardContent>
          </Card>
    </Box>
  )
}
