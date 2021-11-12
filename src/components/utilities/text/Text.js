import React from 'react'

export const Text = () => {
    return (
        <div>
            <div className="container">
                <p className="text-justify mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deserunt non dignissimos illum deleniti enim quaerat incidunt minima rerum ea, ex, suscipit quidem cum, modi delectus iusto cupiditate quas veritatis.
                </p>
                <p className="text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deserunt non dignissimos illum deleniti enim quaerat incidunt minima rerum ea, ex, suscipit quidem cum, modi delectus iusto cupiditate quas veritatis.
                </p>
                <p className="text-center mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deserunt non dignissimos illum deleniti enim quaerat incidunt minima rerum ea, ex, suscipit quidem cum, modi delectus iusto cupiditate quas veritatis.
                </p>
                <p className="text-sm-right">right aligned text on viewports sized SM (small) or wider.</p>
                <p className="text-md-right">right aligned text on viewports sized MD (medium) or wider.</p>
                <p className="text-lg-right">right aligned text on viewports sized LG (large) or wider.</p>
                <p className="text-xl-right mb-5">right aligned text on viewports sized XL (extra-large) or wider.</p>
                <p className="text-lowercase">Lowercased text.</p>
                <p className="text-uppercase">Uppercased text.</p>
                <p className="text-capitalize">CapiTaliZed text.</p>

                <p className="font-weight-bold">Bold text.</p>
                <p className="font-weight-bolder">Bolder weight text (relative to the parent element).</p>
                <p className="font-weight-normal">Normal weight text.</p>
                <p className="font-weight-light">Light weight text.</p>
                <p className="font-weight-lighter">Lighter weight text (relative to the parent element).</p>
                <p className="font-italic">Italic text.</p>
                <p className="text-muted">
                Muted text with a <a href="#" className="text-reset">reset link</a>.
                </p>
                </div>
        </div>
    )
}
