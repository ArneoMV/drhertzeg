import Link from 'next/link'

async function getBlogs() {

    // imitate delay
    await new Promise(resolve => setTimeout(resolve, 3000))
    

    const res = await fetch('http://localhost:4002/clanci', {
      next: {
        revalidate: 0 // use 0 to opt out of using cache
      }
    })
  
    return res.json()
  }
  
  export default async function BlogList() {
    const blog = await getBlogs()
  
    return (
      <>
        {blog.map((blog) => (
          <div key={blog.id} className="card my-5">
            <Link href={`/blog/${blog.id} `}>
                <h3>{blog.title}</h3>
                <p>{blog.body.slice(0, 200)}...</p>
            </Link>

          </div>
        ))}
        {blog.length === 0 && (
          <p className="text-center">There are no open blog, yay!</p>
        )}
      </>
    )
  }