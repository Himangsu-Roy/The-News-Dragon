import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci tenetur eligendi illo, nisi cum facere eius amet praesentium! Eligendi a iusto doloremque est at voluptates? Alias numquam explicabo accusantium consequatur?</p>
            <p>Go back to <Link to="/register">Register</Link> </p>
        </div>
    );
}

export default Terms;
