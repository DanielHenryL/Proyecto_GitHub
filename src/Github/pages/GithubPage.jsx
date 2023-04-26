import Container from "@mui/material/Container"
import { Search } from "../components/Search"
import { Card } from "../components/Card"
import { useForm } from "../hooks/useForm"
import { useFetchRepo, useFetchUser } from "../helpers/useFetch"
import { useState } from "react"
import { Inicio } from "../components/Inicio"

export const GithubPage = () => {
  const { user, onInputChange, onResetForm } = useForm({
    user:''
  })

  const [userApi, setUserApi] = useState('')
  const [repoApi, setRepoApi] = useState([])

  const handleSubmit = async() =>{
    if( user.length < 1 ) return;
    const { dataUser } = await useFetchUser(user);
    
    setUserApi(dataUser)
    if( dataUser ){
      const { dataRepos } = await useFetchRepo(dataUser.repos_url);
      setRepoApi(dataRepos)
    }
    onResetForm()
  }
  return (
    <Container sx={{
      background:'#F4F7FF',
      width:{xs:'95vw',sm:'70vw'},
      borderRadius:'10px',
      marginY:'50px',
      display:'flex',
      flexDirection:'column',
    }}>
      <Search user={user} onInputChange={onInputChange} handleSubmit={handleSubmit}/>
      {userApi?.length===0 ? <Inicio /> : userApi.userApi ? <Inicio username={userApi.user}/>:<Card payload={userApi} repoApi={repoApi} />}    
    </Container>
  )
}
