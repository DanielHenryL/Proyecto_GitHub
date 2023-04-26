
export const useFetchUser = async(user) => {
  
    
    const resp1 = await fetch(`https://api.github.com/users/${user}`,{method:'GET'});
  
    const userApi = await resp1.json();

    if(!userApi.message)
    {
      const {repos_url, avatar_url, bio, blog, created_at, email, followers, following, location, login, name, public_repos, twitter_username } = userApi
      const dataUser = {
        avatar_url,
        bio,
        blog,
        created_at,
        email,
        followers,
        following,
        location,
        login,
        name,
        public_repos,
        twitter_username,
        repos_url
      }
      return {dataUser}
    }
    else{
      return { dataUser:{userApi, user}}
    }

}


export const useFetchRepo = async(url) => {

  const resp = await fetch(url,{method:'GET'})
  const resp2 = await resp.json()
  const dataRepos = resp2.map( repo => {
    return { 
        id:repo.id,
        name:repo.name,
        description:repo.description,
        created_at:repo.created_at,
        forks:repo.forks,
        html_url:repo.html_url,
        language:repo.language,
        pushed_at:repo.pushed_at,
     }
  })
  return {dataRepos }
}
