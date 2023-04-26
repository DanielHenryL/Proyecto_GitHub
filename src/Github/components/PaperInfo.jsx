import { Paper, Stack, Typography } from "@mui/material"

export const PaperInfo = ({payload}) => {
  const { public_repos, followers, following } = payload
  return (
    <Paper >
      <Stack direction={{xs:'column',sm:'row'}} textAlign={'center'} justifyContent={'space-evenly'}  spacing={3} >
        <Stack direction={{xs:'row', sm:'column'}} justifyContent={'space-evenly'} >
          <Typography variant="h6" >Repositorio</Typography>
          <Typography variant="h6">{public_repos}</Typography>
        </Stack>
       
        <Stack direction={{xs:'row', sm:'column'}} justifyContent={'space-evenly'} >
          <Typography variant="h6">Followers</Typography>
          <Typography variant="h6">{followers}</Typography>
        </Stack>
        

        <Stack direction={{xs:'row', sm:'column'}} justifyContent={'space-evenly'} >
          <Typography variant="h6">Following</Typography>
          <Typography variant="h6">{following}</Typography>
        </Stack>
      </Stack>
    </Paper>
  )
}
