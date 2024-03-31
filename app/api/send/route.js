import { useEffect } from 'react';
import { EmailTemplate } from '../../../components/EmailTemplate';
import Resend from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default function MyComponent() {
  useEffect(() => {
    async function sendEmail() {
      try {
        const data = await resend.emails.send({
          from: 'Acme <onboarding@resend.dev>',
          to: ['delivered@resend.dev'],
          subject: 'Hello world',
          react: EmailTemplate({ firstName: 'John' }),
        });
        console.log(data); // Ovdje možete manipulirati podacima odgovora
      } catch (error) {
        console.error(error); // Ovdje možete rukovati greškama
      }
    }
    
    sendEmail();
  }, []);

  return (
    <div>
      {/* Dodajte svoj JSX ovdje */}
    </div>
  );
}
