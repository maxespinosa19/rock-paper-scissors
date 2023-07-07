const getFullYear = new Date().getFullYear()
const gitHubUrl= "https://github.com/maxespinosaschool19"


export default function Footer(){
    return(
        <footer>
            <p>  &copy;{getFullYear}</p>
            <br/>
            <p><a href={gitHubUrl} target ="_blank" rel="noreferrer">See Code in Github.com</a>
            </p>
          
        </footer>
    )
}