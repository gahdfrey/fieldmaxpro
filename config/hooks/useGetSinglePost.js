import services from '../services'
import constants from '../constants'
import { useState } from 'react'
import useSWR from 'swr'

const { API_ROUTES } = constants

const useGetSinglePost = (id) => {
    const [filter, setFilter] = useState({})
    const fetcher = async () => {
        const response = await services.getSinglePost(filter, id)
        if (response.status !== 'success') {
            console.log({ response })
        }
        return response
    }

    const { data } = useSWR([API_ROUTES.getSinglePost, filter], fetcher)

    return {
        data,
        filter,
        setFilter
    }
}

export default useGetSinglePost
