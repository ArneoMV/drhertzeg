import { Suspense } from "react";
import ProductList from "./ProductList";
import Loading from "../loading";
import "../styles/_index.scss";

export default function Products() {
    return (
      <main className="products">
        <nav>
          <div>
            <h1>Products</h1>
            <p><small>Our Products list</small></p>
          </div>
        </nav>

        <Suspense fallback={<Loading />}>
          <ProductList />
        </Suspense>
        
      </main>
    )
}
