import { BsLink } from 'react-icons/bs'

export const Ressources = () => {
    return (
        <main>
            <h3 className="font-extrabold text-3xl mb-4">Ressources de la chaine</h3>

            <ul>
                <li className='flex items-center'><BsLink className='mr-3'/> <a className="hover:underline" href="https//python.org">Telecharger Python</a></li>
                <li className='flex items-center'><BsLink className='mr-3'/><a className="hover:underline" href="https//github.com/">Telecharger pack ressouces pygame</a></li>
                <li className='flex items-center'><BsLink className='mr-3'/><a className="hover:underline" href="https//youtube.com/">Voir ma derniere video</a></li>
            </ul>
        </main>
    )
} 