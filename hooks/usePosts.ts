import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

//will return the fields extracted from useSWR  library
const usePosts = (userId?: string) => {
    const url = userId ? `/api/posts?userId=${userId}` : '/api/posts';
    //SWR will fetch api/users and store it in its global store
    const { data, error, isLoading, mutate } = useSWR(url, fetcher);

    return {
        data,
        error,
        isLoading,
        mutate
    }
};

export default usePosts;