import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import './App.css'

const wait = (time: number) => new Promise((resolve, reject) => setTimeout(resolve, time))

declare type PostType = {id: string, title: string}

const POSTS = [
  {id: '1', title: 'POST 1'},
  {id: '2', title: 'POST 2'},
  {id: '3', title: 'POST 3'}
]

function App() {

  const queryClient = useQueryClient()

  const {isLoading, data, status, isError, error} = useQuery({
    queryKey: ['posts'],
    queryFn: () => wait(500).then(() => [...POSTS])
  })

  const postMutation = useMutation({
    mutationFn: (title: string) => wait(500).then(() => {
      return POSTS.push({ id: crypto.randomUUID(), title: title });
    }),
    onSuccess: () => queryClient.invalidateQueries(["posts"])
  })

  if (isLoading) return <h1>Loading...</h1>
  if (isError) return <pre>{JSON.stringify(error)}</pre>
  return (
    <div className="App">
      <p>{ data.map(p => (<h3 key={p.id}>{p.title}</h3>)) }</p>
      <button disabled={postMutation.isLoading} onClick={() => postMutation.mutate("New Post")}>
        Add Post
      </button>
    </div>
  )
}

export default App