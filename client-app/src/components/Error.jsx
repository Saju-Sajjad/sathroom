import React from 'react';

const Error = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <div className="alert alert-danger" role="alert" style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
                <strong>Oops! Something went wrong.</strong> Please try again later or contact support.
            </div>
        </div>
    );
}

export default Error;
