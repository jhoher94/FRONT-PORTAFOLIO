import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Typography, Button } from '@mui/material';

export default function Programador() {

    const paperStyle= {padding:'50px 20px', width:600,margin:'20px auto'}
    const [nombre,setNombre]= React.useState('')
    const [email,setEmail]=React.useState('')
    const [telefono,setTelefono]=React.useState('')
    const [descripcion,setDescripcion]= React.useState('')
    const [imagen,setImagen]= React.useState('')
    
    const handleClick=(e)=>{
        e.preventDefault()
        const programador={nombre,email,telefono,descripcion,imagen}
        console.log(programador)
        fetch("http://localhost:8080/programador/add" ,{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(programador)
        }).then(()=>{
            console.log("Nuevo Programador Agregado")
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
      Crear Nuevo Programador
    </Typography>
    <br/>
      <div>
        <TextField
          required
          id="outlined-nombre"
          label="Nombre"
          Value={nombre}
          onChange={(e)=>setNombre(e.target.value)}
        />
        <TextField
          required
          id="outlined-email"
          label="Email"
          type='email'
          Value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <br/>
        <TextField
        required
          id="outlined-telefono"
          label="Telefono"
          Value={telefono}
          onChange={(e)=>setTelefono(e.target.value)}
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
      </div>
      <Button variant="contained" color="success" onClick={handleClick}>
        Agregar
      </Button>
    </Box>
    </Paper>





    </Container>
  );
}
