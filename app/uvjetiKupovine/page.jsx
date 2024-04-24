import Loading from '../loading';

import './_privacy-policy.scss';
import '../components/organism/footer/_footer.scss';
import '../styles/_index.scss';
import '../styles/layout/_breakpoint.scss';
import '../styles/layout/_grid.scss';

import FollowSocial from '../components/organism/followSocial/followSocial';
import Footer from '../components/organism/footer/footer';



export default function PrivacyPolicy() {

  return (
      <div className='privacy-policy-page'>


        <main className="privacy-policy-page-contianer">
          <div className="faq-title col-7-lg">
            <span className='faq-text-container'>
              <h4 className='title-gooey'>Pravila privatnosti</h4>
              <p>Ažurirano: 19. travnja 2024.</p>
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

            <div className="column col-7-lg">
                <div className="privacy-description">
                    <p> Ovo obavijest o privatnosti za COLOIDAG d.o.o. (poslovni naziv Dr. Hertzeg) ("mi," "nas," ili "naš"), opisuje kako i zašto možemo prikupljati, pohranjivati, koristiti i/ili dijeliti ("obrađivati") vaše informacije kada koristite naše usluge ("Usluge"), kao što su:</p>
                    <p> Posjeta našoj web stranici na http://www.drhertzeg.hr ili bilo kojoj drugoj našoj web stranici koja povezuje s ovom obavijesti o privatnosti</p>
                    <p>Sudjelovanje s nama na drugim povezanim načinima, uključujući prodaju, marketing ili događaje</p>
                    <p>Imate pitanja ili zabrinutosti? Čitanjem ove obavijesti o privatnosti razumjet ćete svoja prava privatnosti i mogućnosti. Ako se ne slažete s našim pravilima i praksom, molimo vas da ne koristite naše Usluge. Ako imate bilo kakvih pitanja ili zabrinutosti, kontaktirajte nas na privacy@drhertzeg.hr.</p>
                </div>

                <div className="privacy">
                    <h4>SAŽETAK KLJUČNIH TOČAKA</h4>
                    <p> Ovaj sažetak pruža ključne točke iz naše obavijesti o privatnosti. Više pojedinosti o bilo kojoj od ovih tema možete saznati klikom na poveznicu iza svake ključne točke ili korištenjem naše tablice sadržaja.</p>
                </div>
                <div className="privacy">
                    <h5> 1. KOJE INFORMACIJE PRIKUPLJAMO</h5>
                    <p> Prikupljamo osobne informacije koje nam pružite, kao što su imena, e-mail adrese i poštanske adrese.</p>
                </div>
                <div className="privacy">
                    <h5> 2. KAKO OBRAĐUJEMO VAŠE INFORMACIJE?</h5>
                    <p> Obrađujemo vaše informacije kako bismo pružili, poboljšali i upravljali našim Uslugama, komunicirali s vama te osigurali sigurnost i sprječavali prijevare.</p>
                </div>
                <div className="privacy">
                    <h5> 3. KADA I S KIME DIJELIMO VAŠE OSOBNE INFORMACIJE?</h5>
                    <p> Možemo dijeliti informacije u određenim situacijama, primjerice s poslovnim partnerima.</p>
                </div>
                <div className="privacy">
                    <h5> 4. KOLIKO DUGO ČUVAMO VAŠE INFORMACIJE?</h5>
                    <p> Čuvamo vaše informacije samo onoliko dugo koliko je potrebno da bismo ispunili svrhe navedene u ovoj obavijesti o privatnosti.</p>
                </div>
                <div className="privacy">
                    <h5> 5. KAKO ČUVAMO VAŠE INFORMACIJE SIGURNIMA?</h5>
                    <p> Imamo sustav sigurnosnih mjera, ali ne možemo jamčiti 100% sigurnost.</p>
                </div>
                <div className="privacy">
                    <h5> 6. PRIKUPLJAMO LI INFORMACIJE O MALOLJETNICIMA?</h5>
                    <p> Ne prikupljamo namjerno podatke o maloljetnicima mlađima od 18 godina.</p>
                </div>
                <div className="privacy">
                    <h5> 7. KOJA SU VAŠA PRIVATNOST PRAVA?</h5>
                    <p> Uvijek možete pregledati, promijeniti ili završiti svoj račun te povući svoj pristanak za obradu podataka.</p>
                </div>
                <div className="privacy">
                    <h5> 8. KONTROLE ZA ZNAČAJKE DO-NOT-TRACK</h5>
                    <p> Ne reagiramo na Do-Not-Track (DNT) postavke preglednika jer nije usvojen standard za praćenje na mreži.</p>
                </div>
                <div className="privacy">
                    <h5> 9. AŽURIRAMO LI OVU OBAVIJEST?</h5>
                    <p> Da, ažurirat ćemo ovu obavijest po potrebi kako bismo ostali usklađeni s relevantnim zakonima.</p>
                </div>
                <div className="privacy">
                    <h5> 10. KAKO NAS MOŽETE KONTAKTIRATI VEZANO S OVOM OBAVIJESTI?</h5>
                    <p> Ako imate pitanja ili komentara o ovoj obavijesti, možete nam poslati e-mail ili kontaktirati poštom.</p>
                </div>
                <div className="privacy">
                    <h5> 11. KAKO NAS MOŽETE KONTAKTIRATI VEZANO S OVOM OBAVIJESTI?</h5>
                    <p> Ako imate pitanja ili komentara o ovoj obavijesti, možete nam poslati e-mail na privacy@drhertzeg.hr ili nas kontaktirati poštom na adresi:</p>
                    <p>COLOIDAG d.o.o.</p>
                    <p>Pantovčak 48</p>
                    <p>Zagreb 10000</p>
                    <p>Hrvatska</p>
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