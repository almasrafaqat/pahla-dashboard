import React, { Fragment } from 'react'
import { IoHomeOutline } from "react-icons/io5";

const Todo = () => {
 
  return (
    <Fragment>
      <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
        <div class="breadcrumb-title pe-3">Applications</div>
        <div class="ps-3">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-0 p-0">
              <li class="breadcrumb-item">
              <IoHomeOutline />
              </li>
              <li class="breadcrumb-item active" aria-current="page">To Do List</li>
              
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
      <div class="card">
        <div class="card-body">
          <h4 class="mb-0">To Do List</h4>
          <hr />
          <div class="row gy-3">
            <div class="col-md-10">
              <input id="todo-input" type="text" class="form-control" value="" />
            </div>
            <div class="col-md-2 text-end d-grid">
              <button type="button"  class="btn btn-primary">Add todo</button>
            </div>
          </div>
          <div class="form-row mt-3">
            <div class="col-12">
              <div id="todo-container">
                <div class="pb-3 todo-item" todo-id="0">
                  <div class="input-group">

                    <div class="input-group-text">
                      <input type="checkbox" aria-label="Checkbox for following text input" false="" />
                    </div>

                    <input type="text" readonly="" class="form-control false " aria-label="Text input with checkbox" value="take out the trash" />

                    <button todo-id="0" class="btn btn-outline-secondary bg-danger text-white" type="button" onclick="DeleteTodo(this);" id="button-addon2 ">X</button>

                  </div>
                </div>
              </div>
              <div id="todo-container">
                <div class="pb-3 todo-item" todo-id="0">
                  <div class="input-group">

                    <div class="input-group-text">
                      <input type="checkbox" aria-label="Checkbox for following text input" false="" />
                    </div>

                    <input type="text" readonly="" class="form-control false " aria-label="Text input with checkbox" value="take out the trash" />

                    <button todo-id="0" class="btn btn-outline-secondary bg-danger text-white" type="button" onclick="DeleteTodo(this);" id="button-addon2 ">X</button>

                  </div>
                </div>
              </div>
              <div id="todo-container">
                <div class="pb-3 todo-item" todo-id="0">
                  <div class="input-group">

                    <div class="input-group-text">
                      <input type="checkbox" aria-label="Checkbox for following text input" false="" />
                    </div>

                    <input type="text" readonly="" class="form-control false " aria-label="Text input with checkbox" value="take out the trash" />

                    <button todo-id="0" class="btn btn-outline-secondary bg-danger text-white" type="button" onclick="DeleteTodo(this);" id="button-addon2 ">X</button>

                  </div>
                </div>
              </div>
              <div id="todo-container">
                <div class="pb-3 todo-item" todo-id="0">
                  <div class="input-group">

                    <div class="input-group-text">
                      <input type="checkbox" aria-label="Checkbox for following text input" false="" />
                    </div>

                    <input type="text" readonly="" class="form-control false " aria-label="Text input with checkbox" value="take out the trash" />

                    <button todo-id="0" class="btn btn-outline-secondary bg-danger text-white" type="button" onclick="DeleteTodo(this);" id="button-addon2 ">X</button>

                  </div>
                </div>
              </div>
              <div id="todo-container">
                <div class="pb-3 todo-item" todo-id="0">
                  <div class="input-group">

                    <div class="input-group-text">
                      <input type="checkbox" aria-label="Checkbox for following text input" false="" />
                    </div>

                    <input type="text" readonly="" class="form-control false " aria-label="Text input with checkbox" value="take out the trash" />

                    <button todo-id="0" class="btn btn-outline-secondary bg-danger text-white" type="button" onclick="DeleteTodo(this);" id="button-addon2 ">X</button>

                  </div>
                </div>
              </div>
              <div id="todo-container">
                <div class="pb-3 todo-item" todo-id="0">
                  <div class="input-group">

                    <div class="input-group-text">
                      <input type="checkbox" aria-label="Checkbox for following text input" false="" />
                    </div>

                    <input type="text" readonly="" class="form-control false " aria-label="Text input with checkbox" value="take out the trash" />

                    <button todo-id="0" class="btn btn-outline-secondary bg-danger text-white" type="button" onclick="DeleteTodo(this);" id="button-addon2 ">X</button>

                  </div>
                </div>
              </div>
              <div id="todo-container">
                <div class="pb-3 todo-item" todo-id="0">
                  <div class="input-group">

                    <div class="input-group-text">
                      <input type="checkbox" aria-label="Checkbox for following text input" false="" />
                    </div>

                    <input type="text" readonly="" class="form-control false " aria-label="Text input with checkbox" value="take out the trash" />

                    <button todo-id="0" class="btn btn-outline-secondary bg-danger text-white" type="button" onclick="DeleteTodo(this);" id="button-addon2 ">X</button>

                  </div>
                </div>
              </div>
              <div id="todo-container">
                <div class="pb-3 todo-item" todo-id="0">
                  <div class="input-group">

                    <div class="input-group-text">
                      <input type="checkbox" aria-label="Checkbox for following text input" false="" />
                    </div>

                    <input type="text" readonly="" class="form-control false " aria-label="Text input with checkbox" value="take out the trash" />

                    <button todo-id="0" class="btn btn-outline-secondary bg-danger text-white" type="button" onclick="DeleteTodo(this);" id="button-addon2 ">X</button>

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

export default Todo