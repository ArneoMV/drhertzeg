import { notFound } from "next/navigation";
import { Metadata } from "next";

// Postavljanje da li su parametri dinamički
export const dynamicParams = true;

// Funkcija koja generira statičke parametre
export async function generateStaticParams() {
  const res = await fetch('http://localhost:4002/cajevi');

  const teas = await res.json();

  // Mapiranje proizvoda na objekte sa id-om
  return teas.map((tea) => ({
    id: tea.teaId
  }));
}

// Funkcija za dohvat pojedinog proizvoda
async function getProduct(id) {
  // Imitacija kašnjenja
  await new Promise(resolve => setTimeout(resolve, 1000));
  const res = await fetch('http://localhost:4002/cajevi/' + id, {
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
      resolve(`Tea ${params.teaId}`);
    }, 100);
  });

  return {
    title: `Tea ${title}`,
  };
};

// Glavna funkcija komponente koja prikazuje detalje proizvoda
export default async function ProductDetails({ params }) {
    // Dohvata proizvod na osnovu njegovog identifikatora
    const tea = await getProduct(params.teaId);

  return (
    <main>
        <nav>
            <h2>Product details</h2>
        </nav>
        <div className="card">
            <h3>{tea.title}</h3>
            <p>{tea.body}</p>
            <div className={`pill ${tea.priority}`}>
              {tea.priority} priority
            </div>
        </div>
    </main>
  );
}
