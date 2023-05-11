import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

//will return the fields extracted from useSWR  library
const useUsers = () => {
    //SWR will fetch api/users and store it in its global store
    const { data, error, isLoading, mutate } = useSWR('/api/users', fetcher);

    return {
        data,
        error,
        isLoading,
        mutate
    }
};

export default useUsers;