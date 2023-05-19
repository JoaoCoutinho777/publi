import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

//will return the fields extracted from useSWR  library
const usePost = (postId: string) => {
    const url = postId ? `/api/posts/${postId}` : null;
    //SWR will fetch api/posts and store it in its global store
    const { data, error, isLoading, mutate } = useSWR(url, fetcher);

    return {
        data,
        error,
        isLoading,
        mutate
    }
};

export default usePost;