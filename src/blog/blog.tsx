import { useEffect, useState } from "react"

// race condition

function PostBody({id} :{id: Number | null}) {

  const [post, setPost] = useState<string | null>(null)

  useEffect(() => {

    const abortController = new AbortController()

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      signal: abortController.signal
    })
    .then(response => response.json())
    .then(json => {
      setPost(json.body)
    })

    return () => abortController.abort();

},[id])

  return (
    <div>
      {id && <p>{post}</p>} 
    </div>
  )
  
}


export default function Blog() {

  const [postId, setPostId] = useState<Number | null>(null)

  return (
    <div>
      <PostBody id={postId} />
      <button onClick={() => setPostId(Math.floor(Math.random() * 100))}>next post</button>
    </div>
  )
}