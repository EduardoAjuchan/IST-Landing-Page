// src/components/ContactSection.tsx
"use client";

import { Box, Container, Typography, Button, TextField, Stack } from '@mui/material';

const ContactSection = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom textAlign="center">
          Contáctanos
        </Typography>
        <Stack spacing={3}>
          <TextField label="Nombre" variant="outlined" fullWidth />
          <TextField label="Correo Electrónico" variant="outlined" fullWidth />
          <TextField label="Mensaje" variant="outlined" multiline rows={4} fullWidth />
          <Button variant="contained" color="primary">
            Enviar Mensaje
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default ContactSection;
