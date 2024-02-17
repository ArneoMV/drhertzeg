import { notFound } from "next/navigation";
import { Metadata } from "next";

// Postavljanje da li su parametri dinamički
export const dynamicParams = true;

// Funkcija koja generira statičke parametre
export async function generateStaticParams() {
  const res = await fetch('http://localhost:4000/products');

  const products = await res.json();

  // Mapiranje proizvoda na objekte sa id-om
  return products.map((product) => ({
    id: product.productId
  }));
}

// Funkcija za dohvat pojedinog proizvoda
async function getProduct(id) {
  // Imitacija kašnjenja
  await new Promise(resolve => setTimeout(resolve, 1000));
  const res = await fetch('http://localhost:4000/products/' + id, {
    next: {
      revalidate: 60
    }
  });
  
  // Provera da li je zahtev uspešan, u suprotnom prikazuje se greška 404
  if (!res.ok) {
    notFound();
  }

  return res.json();
}

// Funkcija za generiranje  metapodataka
export const generateMetadata = async ({ params }) => {
  // Simulacija kašnjenja od 100ms
  const title = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`Caj ${params.productId}`);
    }, 100);
  });

  return {
    title: `Product ${title}`,
  };
};

// Glavna funkcija komponente koja prikazuje detalje proizvoda
export default async function ProductDetails({ params }) {
    // Dohvata proizvod na osnovu njegovog identifikatora
    const product = await getProduct(params.productId);

  return (
    <main>
        <nav>
            <h2>Product details</h2>
        </nav>
        <div className="card">
            <h3>{product.title}</h3>
            <p>{product.body}</p>
            <div className={`pill ${product.priority}`}>
              {product.priority} priority
            </div>
        </div>
    </main>
  );
}
