import { Suspense } from "react";
import BlogList from "./BlogList";
import Loading from "../loading";
import { Metadata } from "next";

export const metadata = {
  title: "Blog",
};


export default function Blogs() {
    return (
      <main>
        <nav>
          <div>
            <h1>Blogs</h1>
            <p><small>Our blogs</small></p>
          </div>
        </nav>

        <Suspense fallback={<Loading />}>
          <BlogList />
        </Suspense>
        
      </main>
    )
  }