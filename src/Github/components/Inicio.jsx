import { Alert, Container, Stack } from "@mui/material"

export const Inicio = ({username=''}) => {
  const message = username.length == 0 ? 'Busque a un usuario de GitHub':`No se encontro el usuario`
  
  return (
    <Container >
      <Stack sx={{marginY:'50px'}}>
          <Alert severity={username == '' ? 'info':'error' } sx={{justifyContent:'center'}} >{message} <b> {username}</b></Alert>
      </Stack>
    </Container>
  )
}
