import React from 'react'

export const Toasts = () => {
    return (
        <div>
            <button className="btn btn-danger" id="button">Show Toast</button>
            {/* <!-- Flexbox container for aligning the toasts --> */}
                <div aria-live="polite" aria-atomic="true" class="d-flex justify-content-center align-items-center" style={{"height":"200px"}}>

                {/* <!-- Then put toasts within --> */}
                <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/F1_light_blue_flag.svg/1200px-F1_light_blue_flag.svg.png" class="rounded mr-2" alt="..."/>
                    <strong class="mr-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div class="toast-body">
                    Hello, world! This is a toast message.
                    </div>
                </div>
                </div>
        </div>
    )
}
