import React from 'react'

export const Float = () => {
    return (
        <div>
            <div className="float-left">Float left on all viewport sizes</div>
            <br></br>
            <div className="float-right">Float right on all viewport sizes</div>
            <br></br>
            <div className="float-none">Don't float on all viewport sizes</div>
            <br></br>
            <div class="float-sm-right">Float right on viewports sized SM (small) or wider</div>
            <br></br>
            <div class="float-md-right">Float right on viewports sized MD (medium) or wider</div>
            <br></br>
            <div class="float-lg-right">Float right on viewports sized LG (large) or wider</div>
            <br></br>
            <div class="float-xl-right">Float right on viewports sized XL (extra-large) or wider</div>
            <br></br>
        </div>
    )
}
