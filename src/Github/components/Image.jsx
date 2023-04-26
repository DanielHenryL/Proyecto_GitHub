import { Avatar, Grid } from "@mui/material"

export const Image = ({payload}) => {

  const {avatar_url} = !!payload && payload;

  return (
    <Grid
      item
      xs={12}
      md={3}
      alignSelf={{xs:'center', md:'start'}}
    >
      <Avatar
        alt="Remy Sharp"
        src={avatar_url}
        sx={{ width:{ xs:'200px', sm:'250px', md:'100%'}, height:'auto' }}
      />
    </Grid>
  )
}
