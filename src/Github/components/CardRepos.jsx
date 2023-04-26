import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material"

export const CardRepos = ({ repoApi }) => {
  // const {name, description, created_at, forks, html_url, language, pushed_at} = !!repoApi && repoApi;
  return (
    <Grid 
      container   
      spacing={1}
    >
      
        {
          repoApi.map(repo => {
            return (
              <Grid
                key={repo.id}
                item
                xs={12}
                md={6}
                align={'center'}
              >
                <Card sx={{ height:'300px', width:{xs:'240px',md:'100%'}}} >
                  <CardContent sx={{ height:'200px', margin:1,textAlign:'start'}}>
                    <Typography variant="h6" component="span">
                      {  repo.name?.length  > 20 ? `${repo.name.substr(0,20)}...`: repo.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5, fontSize:'15px' }} color="text.secondary">
                      {  repo.description?.length  > 90 ? `${repo.description.substr(0,100)}...`: repo.description}
                    </Typography>
                    <Typography variant="body2">
                      Lenguaje :{repo.language}
                    </Typography>
                  </CardContent>
                  <CardActions >
                    <Button variant="contained" href={repo.html_url} sx={{marginLeft:'10px'}} target="_blank" color="tercero"> Ir GitHub</Button>
                  </CardActions>
                </Card>
              </Grid>
              )
            })
          }

        
      
    </Grid>
  )








}
