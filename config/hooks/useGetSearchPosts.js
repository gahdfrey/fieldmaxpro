import services from '../services'
import constants from '../constants'
import { useState } from 'react'
import useSWR from 'swr'

const { API_ROUTES } = constants

const useSearchPosts = (search, limit) => {
    const [pagination, setPagination] = useState({ page: 1, pageLimit: limit ?? 10 })
    const { page, pageLimit } = pagination
    const [filter, setFilter] = useState({})
    const fetcher = async () => {
        const response = await services.searchPosts({ ...pagination, filter }, search)
        if (response.status !== 'success') {
            console.log({ response })
        }
        return response
    }

    const { data } = useSWR([API_ROUTES.searchPosts, page, pageLimit, filter], fetcher)

    return {
        data,
        pagination,
        setPagination,
        filter,
        setFilter
    }
}

export default useSearchPosts
