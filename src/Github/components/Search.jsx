import { IconButton, InputAdornment, Stack, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';


export const Search = ({user, onInputChange, handleSubmit}) => {

  return (
    <Stack
        alignItems={'center'}
        xs={'100'}
        sx={{
            marginTop:'30px',
            width:{xs:'100%'}
        }}
    >
        <TextField 
            id="input-with-icon-textfield"
            size='small'
            label="GitHub User"
            variant="outlined"
            name={'user'}
            value={user}
            onChange={ onInputChange }
            placeholder='Buscar usuario de GitHub'
            sx={{
                width:{xs:'100%',sm:'70%',borderColor:'primary'}
            }}
            InputProps={{
                endAdornment: 
                    <InputAdornment position="end">
                        <IconButton 
                          onClick={handleSubmit}
                        >
                            <SearchIcon/>
                        </IconButton>
                    </InputAdornment>,
              }}
        /> 
    </Stack>
  )
}
