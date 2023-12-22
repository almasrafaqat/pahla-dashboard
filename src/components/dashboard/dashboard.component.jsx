import React, { Fragment } from 'react'
import { IoCaretUpSharp } from "react-icons/io5";
import { FaWallet } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { LiaDiscord } from "react-icons/lia";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import './dashboard.style.css';
import ApexChartExample from '../charts/charts.components';

const Dashboard = () => {
  return (
    <Fragment>

      <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
        <div className="col z-dex ">
          <div className="card radius-10 mt-2">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div>
                  <p className="mb-0 text-secondary">Revenue</p>
                  <h4 className="my-1">$4805</h4>
                  <p className="mb-0 font-13 text-success">
                    <IoCaretUpSharp /> $34 Since last week
                  </p>
                </div>
                <div className="widgets-icons bg-light-success text-success ms-auto">
                  <FaWallet />
                </div>
              </div>
              <div id="chart1">
                <ApexChartExample height={150} />
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card radius-10 mt-3">
            <div class="card-body">
              <div class="d-flex align-items-center">
                <div>
                  <p class="mb-0 text-secondary">Total Customers</p>
                  <h4 class="my-1">8.4K</h4>
                  <p class="mb-0 font-13 text-success">
                    <IoCaretUpSharp /> 14% Since last week</p>
                </div>
                <div class="widgets-icons bg-light-warning text-warning ms-auto">
                  <FaUserGroup />
                </div>
              </div>
              <div id="chart2">
                <ApexChartExample height={150} />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12 z-dex">
          <div class="card radius-10 mt-3">
            <div class="card-body">
              <div class="d-flex align-items-center">
                <div>
                  <p class="mb-0 text-secondary">Store Visitors</p>
                  <h4 class="my-1">59K</h4>
                  <p class="mb-0 font-13 text-danger">
                    <IoCaretUpSharp /> 12.4% Since last week</p>
                </div>
                <div class="widgets-icons bg-light-danger text-danger ms-auto">
                  <LiaDiscord />
                </div>
              </div>
              <div id="chart3">
                <ApexChartExample height={150} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-xl-2 mt-4">
        <div class="col d-flex">
          <div class="card radius-10 w-100">
            <div class="card-body">
              <div class="d-flex align-items-center">
                <div>
                  <h5 class="mb-1">Store Metrics</h5>
                  <p class="mb-0 font-13 text-secondary"><i class='bx bxs-calendar'></i>in last 30 days revenue</p>
                </div>
                <div class="font-22 ms-auto"><i class='bx bx-dots-horizontal-rounded'></i>
                </div>
              </div>
              <div class="row row-cols-1 row-cols-sm-3 mt-4">
                <div class="col">
                  <div>
                    <p class="mb-0 text-secondary">Revenue</p>
                    <h4 class="my-1">$4805</h4>
                    <p class="mb-0 font-13 text-success"><i class='bx bxs-up-arrow align-middle'></i>$1458 Since last month</p>
                  </div>
                </div>
                <div class="col">
                  <div>
                    <p class="mb-0 text-secondary">Total Customers</p>
                    <h4 class="my-1">8.4K</h4>
                    <p class="mb-0 font-13 text-success"><i class='bx bxs-up-arrow align-middle'></i>12.3% Since last month</p>
                  </div>
                </div>
                <div class="col">
                  <div>
                    <p class="mb-0 text-secondary">Store Visitors</p>
                    <h4 class="my-1">59K</h4>
                    <p class="mb-0 font-13 text-danger"><i class='bx bxs-down-arrow align-middle'></i>2.4% Since last month</p>
                  </div>
                </div>
              </div>
              <div id="chart4">
                <ApexChartExample height={250} type="bar" />
              </div>
            </div>
          </div>
        </div>
        <div class="col d-flex">
          <div class="card radius-10 w-100">
            <div class="card-body">
              <div class="d-flex align-items-center">
                <div>
                  <h5 class="mb-1">Top Products</h5>
                  <p class="mb-0 font-13 text-secondary">
                    <IoCalendarNumberOutline />in last 30 days revenue</p>
                </div>
                <div class="font-22 ms-auto">
                  <HiOutlineDotsHorizontal />
                </div>
              </div>
            </div>
            <div class="product-list p-3 mb-3">
              <div class="row border mx-0 mb-3 py-2 radius-10 cursor-pointer">
                <div class="col-sm-6">
                  <div class="d-flex align-items-center">
                    <div class="product-img">
                      <img src="./img/product/chair.png" alt="" />
                    </div>
                    <div class="ms-2">
                      <h6 class="mb-1">Light Blue Chair</h6>
                      <p class="mb-0">$240.00</p>
                    </div>
                  </div>
                </div>
                <div class="col-sm">
                  <h6 class="mb-1">$2140.00</h6>
                  <p class="mb-0">345 Sales</p>
                </div>
                <div class="col-sm">
                  <div id="chart5">

                  </div>
                </div>
              </div>
              <div class="row border mx-0 mb-3 py-2 radius-10 cursor-pointer">
                <div class="col-sm-6">
                  <div class="d-flex align-items-center">
                    <div class="product-img">
                      <img src="./img/product/watch.png" alt="" />
                    </div>
                    <div class="ms-2">
                      <h6 class="mb-1">Light Blue Chair</h6>
                      <p class="mb-0">$240.00</p>
                    </div>
                  </div>
                </div>
                <div class="col-sm">
                  <h6 class="mb-1">$2140.00</h6>
                  <p class="mb-0">345 Sales</p>
                </div>
                <div class="col-sm">
                  <div id="chart5">

                  </div>
                </div>
              </div>
              <div class="row border mx-0 mb-3 py-2 radius-10 cursor-pointer">
                <div class="col-sm-6">
                  <div class="d-flex align-items-center">
                    <div class="product-img">
                      <img src="./img/product/shoes.png" alt="" />
                    </div>
                    <div class="ms-2">
                      <h6 class="mb-1">Light Blue Chair</h6>
                      <p class="mb-0">$240.00</p>
                    </div>
                  </div>
                </div>
                <div class="col-sm">
                  <h6 class="mb-1">$2140.00</h6>
                  <p class="mb-0">345 Sales</p>
                </div>
                <div class="col-sm">
                  <div id="chart5">

                  </div>
                </div>
              </div>
              <div class="row border mx-0 mb-3 py-2 radius-10 cursor-pointer">
                <div class="col-sm-6">
                  <div class="d-flex align-items-center">
                    <div class="product-img">
                      <img src="./img/product/headphones.png" alt="" />
                    </div>
                    <div class="ms-2">
                      <h6 class="mb-1">Light Blue Chair</h6>
                      <p class="mb-0">$240.00</p>
                    </div>
                  </div>
                </div>
                <div class="col-sm">
                  <h6 class="mb-1">$2140.00</h6>
                  <p class="mb-0">345 Sales</p>
                </div>
                <div class="col-sm">
                  <div id="chart5">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-xl-8 d-flex">
          <div class="card radius-10 w-100">
            <div class="card-body">
              <div class="d-flex align-items-center">
                <div>
                  <h5 class="mb-1">Transaction History</h5>
                  <p class="mb-0 font-13 text-secondary">
                    <IoCalendarNumberOutline />in last 30 days revenue</p>
                </div>
                <div class="font-22 ms-auto">
                  <HiOutlineDotsHorizontal />
                </div>
              </div>
              <div class="table-responsive mt-4">
                <table class="table align-middle mb-0 table-hover" id="Transaction-History">
                  <thead class="table-light">
                    <tr>
                      <th>Payment Name</th>
                      <th>Date & Time</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="">
                            <img src="./img/avatars/avatar-9.png" class="rounded-circle" width="46" height="46" alt="" />
                          </div>
                          <div class="ms-2">
                            <h6 class="mb-1 font-14">Payment from Michle Jhon</h6>
                            <p class="mb-0 font-13 text-secondary">Refrence Id #8547846</p>
                          </div>
                        </div>
                      </td>
                      <td>Jan 10, 2021</td>
                      <td>+256.00</td>
                      <td>
                        <div class="badge rounded-pill bg-success w-100">Completed</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="">
                            <img src="./img/avatars/avatar-7.png" class="rounded-circle" width="46" height="46" alt="" />
                          </div>
                          <div class="ms-2">
                            <h6 class="mb-1 font-14">Payment from Michle Jhon</h6>
                            <p class="mb-0 font-13 text-secondary">Refrence Id #8547846</p>
                          </div>
                        </div>
                      </td>
                      <td>Jan 10, 2021</td>
                      <td>+256.00</td>
                      <td>
                        <div class="badge rounded-pill bg-success w-100">Completed</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="">
                            <img src="./img/avatars/avatar-4.png" class="rounded-circle" width="46" height="46" alt="" />
                          </div>
                          <div class="ms-2">
                            <h6 class="mb-1 font-14">Payment from Michle Jhon</h6>
                            <p class="mb-0 font-13 text-secondary">Refrence Id #8547846</p>
                          </div>
                        </div>
                      </td>
                      <td>Jan 10, 2021</td>
                      <td>+256.00</td>
                      <td>
                        <div class="badge rounded-pill bg-danger w-100">Declined</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="">
                            <img src="./img/avatars/avatar-13.png" class="rounded-circle" width="46" height="46" alt="" />
                          </div>
                          <div class="ms-2">
                            <h6 class="mb-1 font-14">Payment from Michle Jhon</h6>
                            <p class="mb-0 font-13 text-secondary">Refrence Id #8547846</p>
                          </div>
                        </div>
                      </td>
                      <td>Jan 10, 2021</td>
                      <td>+256.00</td>
                      <td>
                        <div class="badge rounded-pill bg-info w-100">In Progress</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex col-xl-4">
          <div class="card radius-10 w-100">
            <div class="card-body">
              <div class="d-flex align-items-center">
                <div>
                  <h5 class="mb-0">Top Categories</h5>
                </div>
                <div class="font-22 ms-auto">
                <HiOutlineDotsHorizontal />
                </div>
              </div>
              <div class="mt-5" id="chart15">
                <ApexChartExample height={150} type="bar"/>
              </div>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex bg-transparent justify-content-between align-items-center">Kids <span class="badge bg-success rounded-pill">25</span>
              </li>
              <li class="list-group-item d-flex bg-transparent justify-content-between align-items-center">Women <span class="badge bg-danger rounded-pill">10</span>
              </li>
              <li class="list-group-item d-flex bg-transparent justify-content-between align-items-center">Men <span class="badge bg-primary rounded-pill">65</span>
              </li>
              <li class="list-group-item d-flex bg-transparent justify-content-between align-items-center">Furniture <span class="badge bg-warning text-dark rounded-pill">14</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </Fragment>
  )
}

export default Dashboard