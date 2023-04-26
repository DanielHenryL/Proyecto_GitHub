import { Grid, Link, Stack, Typography } from "@mui/material"
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import BookIcon from '@mui/icons-material/Book';
import TwitterIcon from '@mui/icons-material/Twitter';

export const LocationInfo = ({payload}) => {
  const {location, twitter_username, email, blog } = !!payload && payload

  return (
    <Grid
      container
      spacing={2}
      sx={{paddingBottom:'20px'}}
    >
      <Grid 
        item
        xs={12}
        sm={6}
      >
        <Stack direction={'row'} spacing={1} marginLeft={{xs:3, sm:0}}>
          <PlaceIcon/>
          <Typography>{location ? `${location.substr(0,15)}` : 'Not available'}</Typography>
        </Stack>
      </Grid>

      <Grid 
        item
        xs={12}
        sm={6}
      >
        <Stack direction={'row'} spacing={1} marginLeft={{xs:3, sm:0}}>
          <TwitterIcon/>
          <Link href={twitter_username} color={'inherit'} underline="none" target="_blank"><Typography>{twitter_username ? `${twitter_username.substr(0,15)}...`: 'Not available'}</Typography></Link>
        </Stack>
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
      >
        <Stack direction={'row'} spacing={1} marginLeft={{xs:3, sm:0}}>
          <EmailIcon/>
          <Typography>{email ? `${email.substr(0,15)}...` : 'Not available'}</Typography>
        </Stack>
      </Grid>

      <Grid 
        item
        xs={12}  
        sm={6}
      >
        <Stack direction={'row'} spacing={1} marginLeft={{xs:3, sm:0}} >
          <BookIcon/>
          <Link href={blog ? blog:'#'} color={'inherit'} underline="none" target={blog ? '_blank':'_parent'}><Typography>{blog ? `www.${blog.substr(8,8)}...` : 'Not available'}</Typography></Link>
        </Stack>
      </Grid>

    </Grid>
  )
}
