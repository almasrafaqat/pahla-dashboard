import React, { Fragment } from 'react'
import { IoHomeOutline } from "react-icons/io5";
import './product.style.css';

const Product = () => {
  return (
    <Fragment>
      <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
        <div classNameName="breadcrumb-title pe-3">Product</div>
        <div className="ps-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 p-0">
              <li className="breadcrumb-item"><IoHomeOutline/>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Add New Product</li>
            </ol>
          </nav>
        </div>
        <div className="ms-auto">
          <div className="btn-group">
            <button type="button" className="btn btn-primary">Settings</button>
            <button type="button" className="btn btn-primary split-bg-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">	<span className="visually-hidden">Toggle Dropdown</span>
            </button>
            
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body p-4">
          <h5 className="card-title">Add New Product</h5>
          <hr />
          <div className="form-body mt-4">
            <div className="row">
              <div className="col-lg-8">
                <div className="border border-3 p-4 rounded">
                  <div className="mb-3">
                    <label for="inputProductTitle" className="form-label">Product Title</label>
                    <input type="email" className="form-control" id="inputProductTitle" placeholder="Enter product title" />
                  </div>
                  <div className="mb-3">
                    <label for="inputProductDescription" className="form-label">Description</label>
                    <textarea className="form-control" id="inputProductDescription" rows="3"></textarea>
                  </div>
                  <div className="mb-3">
                    <label for="inputProductDescription" className="form-label">Product Images</label>
                    <input id="image-uploadify" type="file" accept=".xlsx,.xls,image/*,.doc,audio/*,.docx,video/*,.ppt,.pptx,.txt,.pdf" multiple/>
                    <div className="imageuploadify well"><div className="imageuploadify-overlay"><i className="fa fa-picture-o"></i></div><div className="imageuploadify-images-list text-center"><i className="bx bxs-cloud-upload"></i><span className="imageuploadify-message">Drag&amp;Drop Your File(s)Here To Upload</span><button type="button" className="btn btn-default" style={{background: "white", color: "rgb(58, 160, 255)"}}>or select file to upload</button></div></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="border border-3 p-4 rounded">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label for="inputPrice" className="form-label">Price</label>
                      <input type="email" className="form-control" id="inputPrice" placeholder="00.00"/>
                    </div>
                    <div className="col-md-6">
                      <label for="inputCompareatprice" className="form-label">Compare at Price</label>
                      <input type="password" className="form-control" id="inputCompareatprice" placeholder="00.00"/>
                    </div>
                    <div className="col-md-6">
                      <label for="inputCostPerPrice" className="form-label">Cost Per Price</label>
                      <input type="email" className="form-control" id="inputCostPerPrice" placeholder="00.00"/>
                    </div>
                    <div className="col-md-6">
                      <label for="inputStarPoints" className="form-label">Star Points</label>
                      <input type="password" className="form-control" id="inputStarPoints" placeholder="00.00"/>
                    </div>
                    <div className="col-12">
                      <label for="inputProductType" className="form-label">Product Type</label>
                      <select className="form-select" id="inputProductType">
                        <option></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label for="inputVendor" className="form-label">Vendor</label>
                      <select className="form-select" id="inputVendor">
                        <option></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label for="inputCollection" className="form-label">Collection</label>
                      <select className="form-select" id="inputCollection">
                        <option></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label for="inputProductTags" className="form-label">Product Tags</label>
                      <input type="text" className="form-control" id="inputProductTags" placeholder="Enter Product Tags" />
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button type="button" className="btn btn-primary">Save Product</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Product