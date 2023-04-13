import FilterableProductTable from "./components/FilterableProductTable";
import { POSTS, PRODUCTS } from './data';
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import './App.css'

const wait = (time: number) => new Promise((resolve, reject) => setTimeout(resolve, time))

declare type PostType = {id: string, title: string}

const App = () => {
  const queryClient = useQueryClient()

  const { isLoading, data, isError, error } = useQuery({
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
      <br />
      <hr />
      <FilterableProductTable products={ PRODUCTS } />
    </div>
  )
}

export default App