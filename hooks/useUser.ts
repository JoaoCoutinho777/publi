import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

//will return the fields extracted from useSWR  library
const useUser = (userId: string) => {
    //SWR will fetch api/currente and store it in its global store
    const { data, error, isLoading, mutate } = useSWR(userId ? `/api/users/${userId}` : null, fetcher);

    return {
        data,
        error,
        isLoading,
        mutate
    }
};

export default useUser;