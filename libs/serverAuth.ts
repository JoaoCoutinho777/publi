import { NextApiRequest } from "next";
import { getSession } from 'next-auth/react';

import prisma from '@/libs/prismadb';

const serverAuth = async (req: NextApiRequest) => {
    const session = await getSession({ req });

    //checks if there's any user logged in
    if (!session?.user?.email) {
        throw new Error('Not signed in');
    }

    //find the current user using the email
    const currentUser = await prisma.user.findUnique({
        where: {
            email: session.user.email
        }
    });

    if (!currentUser) {
        throw new Error('Not sign in')
    }

    return { currentUser };
};

export default serverAuth;