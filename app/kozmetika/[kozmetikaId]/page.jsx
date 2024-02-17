import { notFound } from "next/navigation";
import { Metadata } from "next";

// Postavljanje da li su parametri dinamički
export const dynamicParams = true;

// Funkcija koja generira statičke parametre
export async function generateStaticParams() {
  const res = await fetch('http://localhost:4003/Kozmetika');

  const cosmeticss = await res.json();

  // Mapiranje proizvoda na objekte sa id-om
  return cosmeticss.map((cosmetics) => ({
    id: cosmetics.cosmeticsId
  }));
}

// Funkcija za dohvat pojedinog proizvoda
async function getProduct(id) {
  // Imitacija kašnjenja
  await new Promise(resolve => setTimeout(resolve, 1000));
  const res = await fetch('http://localhost:4003/Kozmetika/' + id, {
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
      resolve(`Cosmetic ${params.cosmeticsId}`);
    }, 100);
  });

  return {
    title: `Cosmetic ${title}`,
  };
};

// Glavna funkcija komponente koja prikazuje detalje proizvoda
export default async function ProductDetails({ params }) {
    // Dohvata proizvod na osnovu njegovog identifikatora
    const cosmetics = await getProduct(params.cosmeticsId);

  return (
    <main>
        <nav>
            <h2>Product details</h2>
        </nav>
        <div className="card">
            <h3>{cosmetics.title}</h3>
            <p>{cosmetics.body}</p>
            <div className={`pill ${cosmetics.priority}`}>
              {cosmetics.priority} priority
            </div>
        </div>
    </main>
  );
}
