import './_workInProgress.scss'
import Image from 'next/image';
// import { Construction } from "../../../utilities/images.js";


export default function WorkInProgress() {

  return (
    <div className="work-in-progress">
        <div className="card">
            {/* <Image
                src={Construction.animacija}
                alt='unser construction'
                quality={100}
                width={100}
                height={100}
            /> */}
            <img src="/images/animacija-2.gif" alt="under construction" />
            <br/><br/>
            <h5>Unser Construction</h5>
            <p>We are currently working on awsome new site.</p>
        </div>
    </div>

  )
}
