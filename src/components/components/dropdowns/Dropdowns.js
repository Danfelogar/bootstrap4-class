import React from 'react'

export const Dropdowns = () => {
    return (
        <div>
            <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                Dropdown button
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
            </div>
            </div>
            {/* Large button groups (default and split) */}
            <div class="btn-group">
            <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                Large button
            </button>
            <div class="dropdown-menu">
                ...
            </div>
            </div>
            <div class="btn-group">
            <button class="btn btn-secondary btn-lg" type="button">
                Large split button
            </button>
            <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
            </button>
            <div class="dropdown-menu">
                ...
            </div>
            </div>
             {/* Default dropleft button  */}
            <div class="btn-group dropleft">
            <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                Dropleft
            </button>
            <div class="dropdown-menu">
                {/* <!-- Dropdown menu links --> */}
            </div>
            </div>

            {/* <!-- Split dropleft button --> */}
            <div class="btn-group">
            <div class="btn-group dropleft" role="group">
                <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-expanded="false">
                <span class="sr-only">Toggle Dropleft</span>
                </button>
                <div class="dropdown-menu">
                {/* <!-- Dropdown menu links --> */}
                </div>
            </div>
            <button type="button" class="btn btn-secondary">
                Split dropleft
            </button>
            </div>
        </div>
    )
}
