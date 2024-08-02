'use client'
import { useState } from "react";
import './_collapse.scss';
import { useRouter } from 'next/navigation'


const Collapse = ({ sections }) => {


  //Old
  const router = useRouter()
  // Toggle 
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (

    <div className='collapse-container'>
        <div className={`collapse-header ${isOpen ? "active_Collapse" : ""}`} onClick={toggleCollapse}>
            <h5>Dodatne informacije</h5>
        </div>
        <div
            className="collapse-content"
            style={{
                display:  isOpen ? "flex" : "none",
            }}
        >
            {sections.map((section, index) => (
                <div className="collapse-item" key={index}>
                    <p className="collapse-title">{section.title}</p>
                    <p className="collapse-description">{section.description}</p>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Collapse;
