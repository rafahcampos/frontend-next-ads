import { MdOutlineAutoGraph as LogoHome } from "react-icons/md";
import { FaUserAlt as IconUser} from "react-icons/fa";



export default function Header({isLogged, user}) {
    return (


        <div className="flex bg-black h-14 dark:bg-neutral-800 items-center p-5 justify-between">
            <LogoHome className="text-orange-400 text-3xl" />
            <p>{user?.nome} tem a idade de {user?.idade}</p>
            {isLogged && <IconUser className="text-white text-3xl"/>}
        </div>
    )
}