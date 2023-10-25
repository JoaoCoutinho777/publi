import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { FaFeather } from "react-icons/fa";
import { GiPublicSpeaker } from "react-icons/gi";

const SidebarPublishButton = () => {
    const router = useRouter();
    const loginModal = useLoginModal();

    const onClick = useCallback(() => {
        loginModal.onOpen();
    }, [loginModal]);

    return (
        //mobile version
        <div onClick={onClick}>
            <div className="
                mt-6
                lg:hidden
                rounded-full
                h-14
                w-14
                p-4
                flex
                items-center
                justify-center
                bg-red-500
                hover:bg-opacity-80
                transition
                cursor-pointer">
                    <GiPublicSpeaker size={24} color="white"/>
            </div>
            {/* desktop version */}
            <div className="
                mt-6
                hidden
                lg:block
                px-4
                py-2
                rounded-full
                bg-red-500
                hover:bg-opacity-90
                cursor-pointer
                transition">
                    <p className="
                        hidden
                        lg:block
                        text-center
                        font-semibold
                        text-white
                        text-[20px]">
                        Publi
                    </p>
            </div>
        </div>
    );
}

export default SidebarPublishButton;