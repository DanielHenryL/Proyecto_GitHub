import { Route, Routes} from "react-router-dom";
import { GithubPage } from "../pages/GithubPage";


export const RouterGithub = () => {
  return (
    <Routes>
        <Route path="/" element={<GithubPage/>}/>
    </Routes>
  )
}
