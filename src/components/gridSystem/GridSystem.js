import React from 'react'

export const GridSystem = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col border">1</div>
                    <div className="col border">1</div>
                    <div className="col border">1</div>
                    <div className="col border">1</div>
                    <div className="col border">1</div>
                    <div className="col border">1</div>
                    <div className="col border">1</div>
                    <div className="col border">1</div>
                    <div className="col border">1</div>
                    <div className="col border">1</div>
                    <div className="col border">1</div>
                    <div className="col border">1</div>
                </div>
                <div className="row">
                    <div className="col border">3</div>
                    <div className="col border">3</div>
                    <div className="col border">3</div>
                    <div className="col border">3</div>
                </div>
                <div className="row">
                    <div className="col-4 border">4</div>
                    <div className="col-8 border">8</div>
                </div>
                <div className="row">
                    <div className="col-6 border">6</div>
                    <div className="col-6 border">6</div>
                </div>
                <div className="row">
                    <div className="col-12 border">12</div>
                </div>
            </div>
        </div>
    )
}
