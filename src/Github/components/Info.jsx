import { Grid, Stack } from "@mui/material"
import { InfoPrincipal } from "./InfoPrincipal"
import { Description } from "./Description"
import { PaperInfo } from "./PaperInfo"
import { LocationInfo } from "./LocationInfo"
import { CardRepos } from "./CardRepos"

export const Info = ({payload , repoApi}) => {
  return (
    <Grid
      container
      item
      xs={11}
      md={9}
    >
      <Stack direction={'column'} spacing={1} sx={{marginX:'15px'}}>
        <InfoPrincipal payload={payload}/>
        <Description payload={payload}/>
        <PaperInfo payload={payload}/>
        <CardRepos repoApi={repoApi}/>
        <LocationInfo payload={payload}/>
      </Stack>
    </Grid>
  )
}
