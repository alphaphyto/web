import { About } from "../components/About"
import { YoutubeVideo } from "./YoutubeVideo"
import { SocialLinks } from "../components/SocialLinks"


export const Home = () => {
    return (
        <main>
            <About/>
            <YoutubeVideo id="Oybe_KfOMhQ"/>
            <YoutubeVideo id="yHoI0n2VxMU"/>
            <SocialLinks/>
            
        </main>
    )
}