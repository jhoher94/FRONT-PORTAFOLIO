import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Paper, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';


export default function Appbar() {

    const paperStyle= {padding:'20px 20px', width:1000,margin:'10px auto', display: 'flex',
    flexDirection: 'column',
  }

    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

    const [proyecto,setProyectos]=React.useState([])
    const [programador,setProgramadores]=React.useState([])

    useEffect(() => {
      const fetchData = async () => {
        try {
          const proyectosResponse = await fetch("http://localhost:8080/proyecto/getAll");
          const proyectosResult = await proyectosResponse.json();
          setProyectos(proyectosResult);
          console.log(proyectosResult);

          const programadoresResponse = await fetch("http://localhost:8080/programador/getAll");
          const programadoresResult = await programadoresResponse.json();
          setProgramadores(programadoresResult);
          console.log(programadoresResult);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
    
      fetchData(); 
    
    }, []);



    const isValidUrl = (url) => {
    return urlRegex.test(url);
    };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PORTAFOLIO
          </Typography>
          <Link to="/Proyecto">
          <Button color="inherit"style={{ backgroundColor: 'white', color: 'black',margin:'10px' }}>Crear Proyecto</Button>
          </Link>
          <Link to="/Programador">
          <Button color="inherit" style={{ backgroundColor: 'white', color: 'black', margin:'10px' }}>Crear Programador</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <h1>PROYECTOS</h1>
      <Paper elevation={1} style={paperStyle}>
        <Grid container spacing={2}>
          {proyecto.map((proyecto, index) => (
            <Grid item xs={12} sm={6} key={proyecto.id}>
              <Paper
                elevation={6}
                style={{
                  margin: '10px',
                  padding: '15px',
                  textAlign: 'left',
                  backgroundColor: '#1976d2', // Color de fondo del proyecto,
                }}
              >
                <div style={{ flex: 1, borderRadius: '5px', overflow: 'hidden' }}>
                  <img
                    src={proyecto.imagen}
                    alt={`Imagen del proyecto ${proyecto.nombre}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
                  {proyecto.nombre}
                </div>
                <div>
                  Id: {proyecto.id}
                </div>
                <div>
                  Descripcion: {proyecto.descripcion}
                </div>
                <div>
                  LinkGitHub: {isValidUrl(proyecto.linkgithub) ? (
                    <a href={proyecto.linkgithub} target="_blank" rel="noopener noreferrer">
                      {proyecto.linkgithub}
                    </a>
                  ) : (
                    "URL no válida"
                  )}
                </div>
                <div>
                  Fecha: {proyecto.fecha}
                </div>
                <div>
                  Lenguaje: {proyecto.lenguaje}
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>


      <h1>PROGRAMADORES</h1>
      <Paper elevation={1} style={paperStyle}>
        <Grid container spacing={2}>
          {programador.map((programador, index) => (
            <Grid item xs={12} sm={6} key={proyecto.id}>
              <Paper
                elevation={6}
                style={{
                  margin: '10px',
                  padding: '15px',
                  textAlign: 'left',
                  backgroundColor: '#1976d2',
                }}
              >
                <div style={{ flex: 1, borderRadius: '5px', overflow: 'hidden' }}>
                  <img
                    src={programador.imagen}
                    alt={`Imagen del programador ${programador.imagen}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
                  {programador.nombre}
                </div>
                <div>
                  Id: {programador.id}
                </div>
                <div>
                  Descripcion: {programador.descripcion}
                </div>
                <div>
                  Email: {programador.email}
                </div>
                <div>
                  Telefono: {programador.telefono}
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>

    </Box>
    
  );
}
