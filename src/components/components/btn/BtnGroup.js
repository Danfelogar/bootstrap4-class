import React from 'react'

export const BtnGroup = () => {
    return (
        <div>
            <div className="btn-group btn-group-xl" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary">Left</button>
                <button type="button" className="btn btn-secondary">Middle</button>
                <button type="button" className="btn btn-secondary">Right</button>
            </div>
            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div className="btn-group mr-2" role="group" aria-label="First group">
                <button type="button" className="btn btn-secondary">1</button>
                <button type="button" className="btn btn-secondary">2</button>
                <button type="button" className="btn btn-secondary">3</button>
                <button type="button" className="btn btn-secondary">4</button>
            </div>
            <div className="btn-group mr-2" role="group" aria-label="Second group">
                <button type="button" className="btn btn-secondary">5</button>
                <button type="button" className="btn btn-secondary">6</button>
                <button type="button" className="btn btn-secondary">7</button>
            </div>
            <div className="btn-group" role="group" aria-label="Third group">
                <button type="button" className="btn btn-secondary">8</button>
            </div>
            </div>
            <div className="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
        <div className="btn-group mr-2" role="group" aria-label="First group">
            <button type="button" className="btn btn-secondary">1</button>
            <button type="button" className="btn btn-secondary">2</button>
            <button type="button" className="btn btn-secondary">3</button>
            <button type="button" className="btn btn-secondary">4</button>
        </div>
        <div className="input-group">
            <div className="input-group-prepend">
            <div className="input-group-text" id="btnGroupAddon">@</div>
            </div>
            <input type="text" className="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon"/>
        </div>
        </div>

        <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
        <div className="btn-group" role="group" aria-label="First group">
            <button type="button" className="btn btn-secondary">1</button>
            <button type="button" className="btn btn-secondary">2</button>
            <button type="button" className="btn btn-secondary">3</button>
            <button type="button" className="btn btn-secondary">4</button>
        </div>
        <div className="input-group">
            <div className="input-group-prepend">
            <div className="input-group-text" id="btnGroupAddon2">@</div>
            </div>
            <input type="text" className="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon2"/>
        </div>
        </div>
        <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
        <button type="button" className="btn btn-secondary">1</button>
        <button type="button" className="btn btn-secondary">2</button>

        <div className="btn-group" role="group">
            <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
            Dropdown
            </button>
        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <p className="dropdown-item" >a</p>
            <p className="dropdown-item" >bb</p>
            </div>
        </div>
        </div>
        <div className="btn-group-vertical" role="group" aria-label="Button group with nested dropdown">
        <button type="button" className="btn btn-secondary">1</button>
        <button type="button" className="btn btn-secondary">2</button>

        <div className="btn-group" role="group">
            <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
            Dropdown
            </button>
        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <p className="dropdown-item" >a</p>
            <p className="dropdown-item" >bb</p>
            </div>
        </div>
        </div>
        </div>
    )
}
