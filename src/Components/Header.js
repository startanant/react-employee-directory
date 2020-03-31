import React from 'react';

function Header() {

    const aboutStyle = {
        height: '50vh',
        backgroundImage: 'url("https://i.imgur.com/NXskfGq.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return (
        <div>
            <div class="jumbotron jumbotron-fluid" style={aboutStyle}>
                <div class="container text-center text-white">
                    <h1 class="display-4">Employee Directory</h1>
                    <p class="lead">You can sort by ID and filter by name.</p>
                </div>
            </div>
            
        </div>
    );

}

export default Header;

