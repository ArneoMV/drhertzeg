import { notFound } from "next/navigation"

export const dynamicParams = true

export async function generateStaticParams() {
  const res = await fetch('http://localhost:4002/clanci')

  const blogs = await res.json()

  return blogs.map((blog) => ({
    id: blog.blogId
  }))
}


async function getBlog(id) {
  // imitate delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  const res = await fetch('http://localhost:4002/clanci/' + id, {
    next: {
      revalidate: 60
    }
  })
  
  if (!res.ok) {
    notFound()
  }

  return res.json()
}


export default async function BlogDetails({ params }) {

    const blog = await getBlog(params.blogId)

  return (
    <main>
        <nav>
            <h2>blog details</h2>
        </nav>
        <div className="card">
            <h3>{blog.title}</h3>
            <small>Created by {blog.user_email}</small>
            <p>{blog.body}</p>
            <div className={`pill ${blog.priority}`}>
              {blog.priority} priority
            </div>
        </div>
    </main>
  )
}
