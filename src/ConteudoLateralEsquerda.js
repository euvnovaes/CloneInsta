import logo from './imagens/images.png';
import Menu from './TextMenu';
import './ConteudoLateralEsquerda.css';
import { CgAddR } from "react-icons/cg";
import { GoHomeFill } from "react-icons/go";
import { RiMessengerLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { CgProfile } from "react-icons/cg";


export default function ConteudoLateralEsquerda() {
    return (
        <div className='conteudoLateralEsquerda'>
            <img src={logo} alt='Logo' />
            
                <ul>
                    <Menu nome="Home" classes="textmenu" icone={<GoHomeFill />} icon={<IoIosArrowDown />}/>
                    
                    <Menu nome="Explore" classes="textmenu" icone={<IoSearch />}/>

                    <Menu nome="Messages" classes="textmenu" icone={<RiMessengerLine />}/>

                    <Menu nome="Notifications" classes="textmenu" icone={<FaRegHeart />}/>

                    <Menu nome="Criate" classes="textmenu" icone={<CgAddR />} icon={<IoIosArrowDown />}/>
                
                    <Menu nome="Profile" classes="textmenu" icone={<CgProfile />}/>
                </ul>


            
        </div>
    )
}

// export default ConteudoLateralEsquerda;