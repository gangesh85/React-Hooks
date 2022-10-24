import axios from 'axios'
import React, {useReducer, useEffect} from 'react'

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'Some thing went wrong !'
            }
        default:
            return state
    }
}

function DataFetchingTwo() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios
        .get('https://jsonplaceholder.typicode.com/posts/1')
        .then(responce => {
            dispatch({type: 'FETCH_SUCCESS', payload: responce.data})
        })
        .catch(error => {
            dispatch({type: 'FETCH_ERROR'})
        })
    },[])

  return (
    <div>
        {state.loading ? 'Loading' : state.post.title}
        {state.error ? error : null}
    </div>
  )
}

export default DataFetchingTwo