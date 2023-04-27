import React from 'react';
import { useState } from 'react';
const Home = () => {

    const [name, setname] = useState('Daniel')

    const testz = () => {
        setname('Blaze');
        alert('Welcomez ' + name)
    }

    return (
        <>
        <div className="Home">
            <div>
                <p>Welcome { name }</p>
                <button onClick={ testz }>Clicky</button>
            </div>
        </div>
        </>
    );
}
export default Home;
