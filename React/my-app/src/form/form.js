export function Form(props) {
  console.log(props)

  return <div class="section-1-container section-container">
    <div class="container">
      <div class="row">
        <div class="col section-1 section-description">
          <h1>Login Page</h1>
          <div class="divider-1"><span></span></div>
          {/* <p>A tutorial on how to align a "div" element vertically and horizontally in Bootstrap 4.</p> */}
        </div>
      </div>
      <div class="row">
        <div class="col-10 offset-1 col-lg-8 offset-lg-2 div-wrapper d-flex justify-content-center align-items-center">

          <div class="div-to-align">
            <p></p>

            <div id="Form " class="row g-3 bg-primary-subtle border border-primary-subtle rounded-3 col-md-auto row justify-content-md-center">

              <div> <form class="row g-3 bg-primary-subtle border border-primary-subtle rounded-3">



                <div class="col-md-6">
                  <label for="inputEmail4" class="form-label">Email</label>
                  <input type="email" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">Password</label>
                  <input type="password" class="form-control" id="inputPassword4" />
                </div>
                <div class="col-12">
                  <label for="inputAddress" class="form-label">Address</label>
                  <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div class="col-12">
                  <label for="inputAddress2" class="form-label">Address 2</label>
                  <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div class="col-md-6">
                  <label for="inputCity" class="form-label">City</label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>
                <div class="col-md-4">
                  <label for="inputState" class="form-label">State</label>
                  <select id="inputState" class="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="col-md-2">
                  <label for="inputZip" class="form-label">Zip</label>
                  <input type="text" class="form-control" id="inputZip" />
                </div>
                <div class="col-12">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                    <label class="form-check-label" for="gridCheck">
                      Check me out
                    </label>
                  </div>
                </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-primary">Sign in</button>
                </div>
              </form>
              </div>
            </div>




          </div>

        </div>
      </div>
    </div>
  </div>
}
