import React from 'react'

export const Progress = () => {
    return (
        <div className="container border">
            <div class="progress">
                <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="progress">
                <div class="progress-bar" role="progressbar" style={{"width": "38%"}} aria-valuenow="38" aria-valuemin="0" aria-valuemax="100">38%</div>
            </div>
            <div class="progress">
                <div class="progress-bar" role="progressbar" style={{"width": "100%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                <div class="progress-bar bg-success" role="progressbar" style={{"width": "200%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                <div class="progress-bar bg-info" role="progressbar" style={{"width": "150%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{"width": "150%"}}>150%</div>
            </div>
        </div>
    )
}
