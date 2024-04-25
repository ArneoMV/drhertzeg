"use client"
import React, { useState } from 'react';
import Loading from '../loading';

import './_faq.scss';
// import "../styles/pages/_products-page.scss";
import '../styles/_index.scss';
import '../styles/layout/_breakpoint.scss';
import '../styles/layout/_grid.scss';



export default function Faq() {

  const [openQuestion, setOpenQuestion] = useState(null);

  // Funkcija za otvaranje ili zatvaranje pitanja
  const toggleQuestion = (questionId) => {
    if (openQuestion === questionId) {
      // Zatvori pitanje ako je već otvoreno
      setOpenQuestion(null);
    } else {
      // Inače otvori novo pitanje
      setOpenQuestion(questionId);
    }
  };
  // Definicija pitanja i odgovora
  const questions = [
    { id: 1, question: "Koja je priča iza osnivanja brenda?", answer: "Pudding gummi bears jelly croissant marzipan gingerbread soufflé fruitcake. Croissant muffin carrot cake bear claw marshmallow liquorice. " },
    { id: 2, question: "Koja je filozofija brenda Dr. Hertzeg u proizvodnji čajeva i kozmetike?", answer: "Pudding gummi bears jelly croissant marzipan gingerbread soufflé fruitcake. Croissant muffin carrot cake bear claw marshmallow liquorice. " },
    { id: 3, question: "Koji su glavni sastojci koji se koriste u proizvodnji čajeva i kozmetike ovog brenda?", answer: "Pudding gummi bears jelly croissant marzipan gingerbread soufflé fruitcake. Croissant muffin carrot cake bear claw marshmallow liquorice. " },
    { id: 4, question: "Kakav je proces proizvodnje čajeva u kompaniji Dr. Hertzeg i kako se osigurava kvalitet proizvoda?", answer: "Pudding gummi bears jelly croissant marzipan gingerbread soufflé fruitcake. Croissant muffin carrot cake bear claw marshmallow liquorice. " },
    { id: 5, question: "Koje su glavne kategorije čajeva koje nudi Dr. Hertzeg i koje su njihove karakteristike?", answer: "Odgovor na drugo pitanje." },
    { id: 6, question: "Kako brend Dr. Hertzeg balansira tradicionalne metode proizvodnje s modernim trendovima u industriji čajeva i kozmetike?", answer: "Odgovor na drugo pitanje." },
    { id: 7, question: "Koja je ciljna publika kompanije Dr. Hertzeg i kako brend pristupa zadovoljenju njihovih potreba?", answer: "Odgovor na drugo pitanje." },
    { id: 8, question: "Kako kompanija Dr. Hertzeg promoviše održivost i ekološku odgovornost u proizvodnji svojih proizvoda?", answer: "Odgovor na drugo pitanje." },
    // Dodaj ostala pitanja ovdje...
  ];

  return (
      <div className='faq-page'>


        <main className="faq-page-contianer">
          <div className="faq-title">
            <span>
              <h3 className='title-gooey'>Česta pitanja</h3>
            </span>
          </div>

          <div className="content-container">
            <ul className="col-7-lg">
              {questions.map((q) => (
                <li key={q.id}>
                  <div className="question" onClick={() => toggleQuestion(q.id)}>
                    <h5>{q.question}</h5>
                  </div>

                  {openQuestion === q.id && <li className="answer"><span></span><p>{q.answer}</p></li>}
                </li>
              ))}
            </ul>

            <div className="column related">
              <h5>Povezani blogovi</h5>
              <ul>
                <li className="link">Otkrite čarobnu prošlost slatkog pelina</li>
                <li className="link">Hidrolati: Prirodna čarolija za savršenu kožu</li>
                <li className="link">Organski trendovi koji očaravaju svijet</li>
              </ul>
            </div>
          </div>
        </main>
    </div>
  )
}