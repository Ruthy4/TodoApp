
import axios, { AxiosResponse } from "axios";
import {useMutation, useQuery, useQueryClient} from 'react-query'
import { END_POINT, FETCH_TODO } from "../constants";
import {ITodo, ITodoResponseType, ITodoUpdatedList} from '../store/types'


export const usePostTodo = () =>{
    const client = useQueryClient()
    return useMutation((payload: ITodo) => {
    return axios.post(`${END_POINT}?ownerEmail=ify@gmail.com`, payload)
}, {
    onSuccess: () =>{
        client.invalidateQueries(FETCH_TODO)
    }
})
}

export const useFetchTodos = () =>{
    return useQuery<AxiosResponse<ITodoResponseType>>([FETCH_TODO], ()=>{
        return axios.get(`${END_POINT}?ownerEmail=ify@gmail.com`)
    })
}

export const useDeleteTodos = ()=>{
    const client = useQueryClient()
    return useMutation((title: string) => {
       return axios.delete(`${END_POINT}?ownerEmail=ify@gmail.com&todoTitle=${title}`)
    },
    {
        onSuccess: ()=>{
            client.invalidateQueries(FETCH_TODO)
        }
    })
}

export const useEditTodos = () =>{
    const client =useQueryClient()
    return useMutation((payload: ITodoUpdatedList) =>{
        return axios.put(`${END_POINT}?ownerEmail=ify@gmail.com`, payload)
    }, {
        onSuccess: () =>{
            client.invalidateQueries(FETCH_TODO)
        }
        }) 
}