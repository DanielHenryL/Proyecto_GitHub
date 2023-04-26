import {Stack, Typography } from '@mui/material'
export const InfoPrincipal = ({payload}) => {
  const {name, login, created_at }= payload
  return (
    <>
      <Stack spacing={1} direction={{xs:'column', md:'row'}} sx={{justifyContent:'space-between'}}>
        <Typography variant='h5'sx={{textAlign:{xs:'center',md:'start'}}}>{name}</Typography>
        <Typography variant='subtitle2' sx={{textAlign:{xs:'center',md:'end'}}}>{created_at}</Typography>
      </Stack>

      <Typography variant='caption'>{`@${login}`}</Typography> 
    </>
  )
}
