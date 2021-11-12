import React from 'react';

import '../../../style/styles.css';

export const Breadcrump = () => {
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">Home</li>
                </ol>
                </nav>

                <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">FF</li>
                    <li className="breadcrumb-item active" aria-current="page">Library</li>
                </ol>
                </nav>

                <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">FF</li>
                    <li className="breadcrumb-item">FF2</li>
                    <li className="breadcrumb-item active" aria-current="page">Data</li>
                </ol>
                </nav>
        </div>
    )
}
