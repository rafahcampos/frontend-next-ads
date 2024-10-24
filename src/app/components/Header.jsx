import { MdOutlineAutoGraph as LogoHome } from "react-icons/md";
import Logo from './Logo'
import { FaUserAlt as IconUser} from "react-icons/fa";
import { NavBar } from "./NavBar";



export default function Header({isLogged, user}) {
    return (
        <div className="flex bg-black h-14 dark:bg-neutral-800 items-center p-5 justify-between">
            <Logo/>
           <NavBar/>
        </div>
    )
}