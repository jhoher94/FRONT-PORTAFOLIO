import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Typography, Button } from '@mui/material';

export default function Proyecto() {

    const paperStyle= {padding:'50px 20px', width:600,margin:'20px auto'}
    const [nombre,setNombre]= React.useState('')
    const [descripcion,setDescripcion]= React.useState('')
    const [imagen,setImagen]= React.useState('')
    const [linkgithub,setLinkGitHub]=React.useState('')
    const [fecha,setFecha]=React.useState('')
    const [lenguaje,setLenguaje]=React.useState('')
    

    const handleClick=(e)=>{
        e.preventDefault()
        const proyecto={nombre,descripcion,imagen,linkgithub,fecha,lenguaje}
        console.log(proyecto)
        fetch("http://localhost:8080/proyecto/add" ,{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(proyecto)
        }).then(()=>{
            console.log("Nuevo Proyecto Agregado")
            }
        )
        }

return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <Typography variant="h4" component="div">
      Crear Nuevo Proyecto
    </Typography>

    <br/>
      <div>
        <TextField
          required
          id="outlined-basic"
          label="Nombre"
          Value={nombre}
          onChange={(e)=>setNombre(e.target.value)}
        />
        <TextField
          required
          id="outlined-descripcion"
          label="Descripcion"
          Value={descripcion}
          onChange={(e)=>setDescripcion(e.target.value)}
        />
        <br/>
        <TextField
          required  
          id="outlined-imagen"
          label="Imagen"
          type='url'
          Value={imagen}
          onChange={(e)=>setImagen(e.target.value)}
        />
         <TextField
        required
          id="outlined-linkgithub"
          label="Link Git Hub"
          type='url'
          Value={linkgithub}
          onChange={(e)=>setLinkGitHub(e.target.value)}
        />
        <br/>
         <TextField
        required
          id="outlined-fecha"
          type='date'
          Value={fecha}
          onChange={(e)=>setFecha(e.target.value)}
        />
         <TextField
        required
          id="outlined-lenguaje"
          label="Lenguaje"
          Value={lenguaje}
          onChange={(e)=>setLenguaje(e.target.value)}
        />
      </div>
      <Button variant="contained" color="success" onClick={handleClick}>
        Agregar
      </Button>
    </Box>
    </Paper>
    </Container>
  );
}
