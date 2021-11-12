import React from 'react'

export const Spacing = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                <p className="m-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deserunt non dignissimos illum deleniti enim quaerat incidunt minima rerum ea, ex, suscipit quidem cum, modi delectus iusto cupiditate quas veritatis.
                </p>
                <p className="m-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deserunt non dignissimos illum deleniti enim quaerat incidunt minima rerum ea, ex, suscipit quidem cum, modi delectus iusto cupiditate quas veritatis.
                </p>
                <p className="pl-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deserunt non dignissimos illum deleniti enim quaerat incidunt minima rerum ea, ex, suscipit quidem cum, modi delectus iusto cupiditate quas veritatis.
                </p>

                <div className="mx-auto bg-info" style={{"width": "200px"}}>
                Centered element
                </div>
                <div className="container bg-secondary mt-2">
                <p className="ml-n5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deserunt non dignissimos illum deleniti enim quaerat incidunt minima rerum ea, ex, suscipit quidem cum, modi delectus iusto cupiditate quas veritatis.
                </p>
                </div>
                </div>
            </div>
        </div>
    )
}
