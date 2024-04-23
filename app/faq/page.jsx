"use client"
import React, { useState } from "react";

import Icon from "../components/atoms/icon/Icon";


import Button from '../components/atoms/button/button';
import Loading from "../loading";

import "./_faq.scss";
import '../components/organism/footer/_footer.scss'
// import "../styles/pages/_products-page.scss";
import "../styles/_index.scss";
import "../styles/layout/_breakpoint.scss";
import "../styles/layout/_grid.scss";

import FollowSocial from "../components/organism/followSocial/followSocial";
import Footer from '../components/organism/footer/footer';



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
            <span className='faq-text-container'>
              <h3 className='title-gooey'>Česta pitanja</h3>
              <p>Sve što trebate znati o našim čajevima i kozmetici Dr. Hertzeg! Potražite rješenja za svoje potrebe ovdje.</p>
            </span>
            
            {/* Filter: https://css-tricks.com/gooey-effect/ */}
            <svg className="gooey-svg" width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="title-gooey">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />    
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="title-gooey" />
                  <feComposite in="SourceGraphic" in2="title-gooey" operator="atop"/>
                </filter>
              </defs>
            </svg>
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

      <div>
        <Footer 
          color="primary-800"
        />
      </div>
    </div>
  )
}