import React from 'react'

export const Display = () => {
    return (
        <div>
            <div className="d-inline p-2 mr-2 bg-primary text-white">d-inline</div>
            <div className="d-inline p-2 bg-dark text-white">d-inline</div>
            <span className="d-block p-2 mt-4 bg-primary text-white">d-block</span>
            <span className="d-block p-2 bg-dark text-white">d-block</span>

            <div className="d-lg-none"><p>
            LG NONE
            hide on lg and wider screens hide on lg and wider screenshide on lg and wider screenshide on lg and wider screenshide on lg and wider screenshide on lg and wider screenshide on lg and wider screenshide on lg and wider screenshide on lg and wider screenshide on lg and wider screenshide on lg and wider screenshide on lg and wider screenshide on lg and wider screenshide on lg and wider screenshide on lg and wider screens
            </p></div>
            <div className="d-sm-none"><p>
            SMAL NONE
            hide on screens smaller than lg hide on screens smaller than lghide on screens smaller than lghide on screens smaller than lghide on screens smaller than lghide on screens smaller than lghide on screens smaller than lghide on screens smaller than lghide on screens smaller than lghide on screens smaller than lghide on screens smaller than lghide on screens smaller than lghide on screens smaller than lg
            </p></div>

            <div className="d-lg-none d-xl-block"><p>
            Hidden only on lg
            hide on screens smaller than lg hide on screens smaller than lghide on screens smaller than lghide on screens smaller than lghide on screens smaller than lghide on screens smaller than lghide on screens smaller than lghide on screens smaller than lghide on screens smaller than lghide on screens smaller than lghide on screens smaller than lghide on screens smaller than lghide on screens smaller than lg
            </p></div>


            <div className="d-print-none">Ocultar el div solo en impresion </div>
            <div className="d-none d-print-block">No se vera en la web pero si cuadno este en impresion</div>
            <div className="d-none d-lg-block d-print-block">Hide up to large on screen, but always show on print</div>
        </div>
    )
}
