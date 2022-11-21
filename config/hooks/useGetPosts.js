import services from '../services'
import constants from '../constants'
import { useState } from 'react'
import useSWR from 'swr'

const { API_ROUTES } = constants

const useGetPosts = (limit) => {
    const [pagination, setPagination] = useState({ page: 1, pageLimit: limit ?? 10 })
    const { page, pageLimit } = pagination
    const [filter, setFilter] = useState({})
    const fetcher = async () => {
        const response = await services.getPosts({ ...pagination, filter })
        if (response.status !== 'success') {
            console.log({ response })
        }
        return response
    }

    const { data } = useSWR([API_ROUTES.getPosts, page, pageLimit, filter], fetcher)

    return {
        data,
        pagination,
        setPagination,
        filter,
        setFilter
    }
}

export default useGetPosts
