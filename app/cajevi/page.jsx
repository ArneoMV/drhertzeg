import { Suspense } from "react";
import TeaList from "./TeaList";
import Loading from "../loading";
import "../styles/_index.scss";

export default function Teas() {
    return (
      <main className="teas">
        <nav>
          <div>
            <h1>Naša lista čajeva</h1>
          </div>
        </nav>

        <Suspense fallback={<Loading />}>
          <TeaList />
        </Suspense>
        
      </main>
    )
}
