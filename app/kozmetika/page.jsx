import { Suspense } from "react";
import CosmeticList from "./CosmeticsList";
import Loading from "../loading";
import "../styles/_index.scss";

export default function Cosmetics() {
    return (
      <main className="teas">
        <nav>
          <div>
            <h1>Naša lista kozmetike</h1>
          </div>
        </nav>

        <Suspense fallback={<Loading />}>
          <CosmeticList />
        </Suspense>
        
      </main>
    )
}
