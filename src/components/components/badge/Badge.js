import React from 'react'

export const Badge = () => {
    return (
        <div>
            <h1>Example heading <span className="badge badge-secondary">New</span></h1>
            <h2>Example heading <span className="badge badge-secondary">New</span></h2>
            <h3>Example heading <span className="badge badge-secondary">New</span></h3>
            <h4>Example heading <span className="badge badge-secondary">New</span></h4>
            <h5>Example heading <span className="badge badge-secondary">New</span></h5>
            <h6>Example heading <span className="badge badge-secondary">New</span></h6>

            <button type="button" className="btn btn-secondary mb-3">
                Notifications <span className="badge badge-primary">4</span>
            </button>
            <span className="badge badge-primary">Primary</span>
            <span className="badge badge-secondary">Secondary</span>
            <span className="badge badge-success">Success</span>
            <span className="badge badge-danger">Danger</span>
            <span className="badge badge-warning">Warning</span>
            <span className="badge badge-info">Info</span>
            <span className="badge badge-light">Light</span>
            <span className="badge badge-dark">Dark</span>
        </div>
    )
}
