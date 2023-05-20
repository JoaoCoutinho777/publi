
import Header from "@/components/Header";
import NotificationsFeed from "@/components/NotificationsFeed";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

//protect notifications from outside users
//BEGIN
export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    return {
        props: {
            session
        }
    }
}
//END

const Notifications = () => {
    return (
        <>
            <Header label="Notifications" showBackArrow/>
            <NotificationsFeed />
        </>
    )
}

export default Notifications;