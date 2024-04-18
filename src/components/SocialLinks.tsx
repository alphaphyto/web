import { FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa'


export const SocialLinks = () => {
    return(
        <section className="mt-5">
            <h3 className="text-2xl font-extrabold">Mes reseaux sociaux</h3>

            <ul className="mt-5">
                <li className='flex items-center'><FaYoutube className='mr-2'/><a className="hover:text-[#336BFF]" href="https//youtube.com/user/alphaphyto">Youtube</a></li>
                <li className='flex items-center'><FaTwitter className='mr-2'/><a className="hover:text-[#FFAD33]" href="https//twitter.com/alphaphyto">Twitter</a></li>
                <li className='flex items-center'><FaInstagram className='mr-2'/><a className="hover:text-[#1ABB37]" href="https//instagram.com/alphaphyto">Instagram</a></li>
            </ul>
        </section>
    )
}