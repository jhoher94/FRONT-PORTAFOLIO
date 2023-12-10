import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Paper, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Appbar() {

    const paperStyle= {padding:'50px 20px', width:600,margin:'20px auto'}
    const [proyecto,setProyectos]=React.useState([])

    React.useEffect(()=>{
        fetch("")
        .then(res=>res.json())
        .then((result)=>{
            setProyectos(result);
        }
        )
    },[])

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
            <Paper elevation={3} style={paperStyle}>
                {proyecto.map(proyecto=>(
                    <Paper elevation={6} style={{margin:"10px",padding:"15px",textAlign:"left"}} key={proyecto.id}>
                    Id:{proyecto.id}
                    Nombre:{proyecto.nombre}
                    Descripcion:{proyecto.descripcion}
                    Imagen:{proyecto.imagen}
                    LinkGitHub:{proyecto.linkgithub}
                    Fecha:{proyecto.fecha}
                    Lenguaje:{proyecto.lenguaje}
                    </Paper>
                )
                )}
            </Paper>
    </Box>
    
  );
}
