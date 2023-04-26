import { RouterGithub } from "./Github/router/RouterGithub"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AppTheme } from "./theme";
export const GithubApp = () => {
  return (
    <AppTheme>
        <RouterGithub/>
    </AppTheme>
  )
}
