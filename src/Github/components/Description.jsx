import { Stack, Typography } from "@mui/material"

export const Description = ({payload}) => {
  const {bio} = !!payload && payload

  return (
    <Stack sx={{paddingY:'10px'}}>
        <Typography variant="body1">{bio? bio:'not available'}</Typography>
    </Stack>
  )
}
