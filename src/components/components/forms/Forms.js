import React from 'react'

export const Forms = () => {
    return (
        <div>
            <form className="container">
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg"/>
            <input class="form-control" type="text" placeholder="Default input"/>
            <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm"></input>
            <form>
            <div class="form-row">
                <div class="col">
                <input type="text" class="form-control" placeholder="First name"/>
                </div>
                <div class="col">
                <input type="text" class="form-control" placeholder="Last name"/>
                </div>
            </div>
            </form>
            <form className="container">
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input type="email" class="form-control" id="inputEmail4"/>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="inputPassword4">Password</label>
                    <input type="password" class="form-control" id="inputPassword4"/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                <div class="form-group">
                    <label for="inputAddress2">Address 2</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" class="form-control" id="inputCity"/>
                    </div>
                    <div class="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                    </div>
                    <div class="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" class="form-control" id="inputZip"/>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck"/>
                    <label class="form-check-label" for="gridCheck">
                        Check me out
                    </label>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Sign in</button>
                </form>
                <form class="container was-validated">
        <div class="mb-3">
            <label for="validationTextarea">Textarea</label>
            <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></textarea>
            <div class="invalid-feedback">
            Please enter a message in the textarea.
            </div>
        </div>

        <div class="custom-control custom-checkbox mb-3">
            <input type="checkbox" class="custom-control-input" id="customControlValidation1" required/>
            <label class="custom-control-label" for="customControlValidation1">Check this custom checkbox</label>
            <div class="invalid-feedback">Example invalid feedback text</div>
        </div>

        <div class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" id="customControlValidation2" name="radio-stacked" required/>
            <label class="custom-control-label" for="customControlValidation2">Toggle this custom radio</label>
        </div>
        <div class="custom-control custom-radio mb-3">
            <input type="radio" class="custom-control-input" id="customControlValidation3" name="radio-stacked" required/>
            <label class="custom-control-label" for="customControlValidation3">Or toggle this other custom radio</label>
            <div class="invalid-feedback">More example invalid feedback text</div>
        </div>

        <div class="mb-3">
            <select class="custom-select" required>
            <option value="">Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </select>
            <div class="invalid-feedback">Example invalid custom select feedback</div>
        </div>

        <div class="custom-file mb-3">
            <input type="file" class="custom-file-input" id="validatedCustomFile" required/>
            <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
            <div class="invalid-feedback">Example invalid custom file feedback</div>
        </div>

        <div class="mb-3">
            <div class="input-group is-invalid">
            <div class="input-group-prepend">
                <span class="input-group-text" id="validatedInputGroupPrepend">@</span>
            </div>
            <input type="text" class="form-control is-invalid" aria-describedby="validatedInputGroupPrepend" required/>
            </div>
            <div class="invalid-feedback">
            Example invalid input group feedback
            </div>
        </div>

        <div class="mb-3">
            <div class="input-group is-invalid">
            <div class="input-group-prepend">
                <label class="input-group-text" for="validatedInputGroupSelect">Options</label>
            </div>
            <select class="custom-select" id="validatedInputGroupSelect" required>
                <option value="">Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            </div>
            <div class="invalid-feedback">
            Example invalid input group feedback
            </div>
        </div>

        <div class="input-group is-invalid">
            <div class="custom-file">
            <input type="file" class="custom-file-input" id="validatedInputGroupCustomFile" required/>
            <label class="custom-file-label" for="validatedInputGroupCustomFile">Choose file...</label>
            </div>
            <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">Button</button>
            </div>
        </div>
        <div class="invalid-feedback">
            Example invalid input group feedback
        </div>
        </form>
        </div>
    )
}
