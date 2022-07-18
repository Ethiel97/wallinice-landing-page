// import Ico from '../assets/zeus-assets/logo/ico.png'
// import Image from 'next/image'
import {
    PhotographIcon
} from "@heroicons/react/outline";

const Logo = () => {
    return (
        <>
            <a className="text-lg font-medium flex items-center" href="#">
                <PhotographIcon className='h-6 text-[#c471ed]'/>
                <span className='ml-2 font-bold'>wallinice</span>
                {/* <Image className="h-7 rounded-full" src={Ico} height={60} width={60} alt="" /> */}
            </a>
        </>
    )
}

export default Logo
