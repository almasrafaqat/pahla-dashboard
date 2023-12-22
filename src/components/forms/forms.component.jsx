import React, { Fragment } from 'react'
import { IoHomeOutline } from "react-icons/io5";

const FormsComponent = () => {
  return (
    <Fragment>
      <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
        <div class="breadcrumb-title pe-3">Forms</div>
        <div class="ps-3">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-0 p-0">
              <li class="breadcrumb-item"><IoHomeOutline />
              </li>
              <li class="breadcrumb-item active" aria-current="page">Input Group</li>
            </ol>
          </nav>
        </div>
        <div class="ms-auto">
          <div class="btn-group">
            <button type="button" class="btn btn-primary">Settings</button>
            <button type="button" class="btn btn-primary split-bg-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">	<span class="visually-hidden">Toggle Dropdown</span>
            </button>
            
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-9 mx-auto">
          <h6 class="mb-0 text-uppercase">Basic example</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <div class="input-group mb-3"> <span class="input-group-text" id="basic-addon1">@</span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
              </div>
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/> <span class="input-group-text" id="basic-addon2">@example.com</span>
              </div>
              <label for="basic-url" class="form-label">Your vanity URL</label>
              <div class="input-group mb-3"> <span class="input-group-text" id="basic-addon3"></span>
                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
              </div>
              <div class="input-group mb-3"> <span class="input-group-text">$</span>
                <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/> <span class="input-group-text">.00</span>
              </div>
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Username" aria-label="Username"/> <span class="input-group-text">@</span>
                  <input type="text" class="form-control" placeholder="Server" aria-label="Server"/>
                  </div>
                  <div class="input-group"> <span class="input-group-text">With textarea</span>
                    <textarea class="form-control" aria-label="With textarea"></textarea>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  )
}

export default FormsComponent