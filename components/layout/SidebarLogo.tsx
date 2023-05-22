import { useRouter } from "next/router";
import { BsTwitter } from "react-icons/bs";
import { GiBookmark } from "react-icons/gi";
import { ImBooks } from "react-icons/im";

const SidebarLogo = () => {
    const router = useRouter();
    return (
        <div 
        onClick={() => router.push('/')}
        className="
        rounded-full 
        h-16 
        w-16 
        p-4 
        flex 
        items-center 
        justify-center 
        hover:bg-blue-300 
        hover:bg-opacity-10 
        cursor-pointer 
        transition">
            <ImBooks size={40} color="white"/>

        </div>
    );

}

export default SidebarLogo;