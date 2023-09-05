import './try.css'
import { useRef, useEffect } from 'react';

const Try = () => {

    const myRef = useRef();
    

    return (
        <>
            <section>
                <h1>
                    Hi Mom
                </h1>
                <p>This is my website</p>
            </section>

            <section>
                <h2 className='hidden'>Buy my product</h2>
                <p>please</p>
            </section>
            <section>
                <h1>
                    Hi Mom
                </h1>
                <p>This is my website</p>
            </section>
            <section>
                <h1>
                    Hi Mom
                </h1>
                <p>This is my website</p>
            </section>
        </>
    )
}

export default Try;