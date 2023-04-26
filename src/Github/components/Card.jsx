import { Grid } from '@mui/material'

import { Image } from './Image';
import { Info } from './Info';

export const Card = ({payload = {}, repoApi=[]}) => {

  return ( 
    <Grid
      container  
      spacing={2}   
      sx={{marginTop:'15px'}}   
      direction={{xs:'column',md:'row'}}  

    >
      
      <Image payload={payload}/>

      <Info payload={payload} repoApi={repoApi}/>
      
      
    </Grid>
  )
}
