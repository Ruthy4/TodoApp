import {atom} from 'recoil'
import {ITodo} from "./types"
import { TODO_ATOM_KEY } from '../constants'

export const todoState = atom<ITodo[]>({
    key: TODO_ATOM_KEY,
    default: []
})