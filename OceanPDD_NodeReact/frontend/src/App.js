import React, { useEffect, useState } from 'react';

function App() {
    const [parallels, setParallels] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/parallels')
            .then(response => response.json())
            .then(data => setParallels(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f8ff', padding: '20px' }}>
            <h1 style={{ color: '#006994' }}>Ocean as a Human Body</h1>
            <p>Discover fascinating parallels between human body systems and oceanic processes!</p>
            <div>
                {parallels.map((item, index) => (
                    <div key={index} style={{ margin: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                        <h2>{item.human} ↔ {item.ocean}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
