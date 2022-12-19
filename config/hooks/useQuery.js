import { useRouter } from 'next/router'

const useQuery = (key) => {
    const router = useRouter()
    const query = router.query[key]
    if (!query) return ''
    return query
}

export default useQuery