import React, { Fragment } from 'react';
import { Breadcrumb, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NotificationList = () => (
  <Fragment>
    <div className="page-header">
      <div>
        <h2 className="main-content-title tx-24 mg-b-5">Notification List</h2>
        <Breadcrumb>
          <Breadcrumb.Item href="#">
            Pages
          </Breadcrumb.Item>
          <Breadcrumb.Item active > Notification List  </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="d-flex">
        <div className="justify-content-center">
          <Button variant="white"
            type="button"
            className=" btn-icon-text my-2 me-2"
          >
            <i className="fe fe-download me-2"></i> Import
          </Button>
          <Button variant="white"
            type="button"
            className=" btn-icon-text my-2 me-2"
          >
            <i className="fe fe-filter me-2"></i> Filter
          </Button>
          <Button variant="primary" type="button" className="my-2 btn-icon-text">
            <i className="fe fe-download-cloud me-2"></i> Download Report
          </Button>
        </div>
      </div>
    </div>

    <div className="container">
      <ul className="notification">
        <li>
          <div className="notification-time">
            <span className="date">Today</span>
            <span className="time"> 02:31</span>
          </div>
          <div className="notification-icon">
            <Link to="#"></Link>
          </div>
          <div className="notification-time-date mb-2 d-block d-md-none">
            <span className="date">Today</span>
            <span className="time ms-2"> 02:31</span>
          </div>
          <div className="notification-body">
            <div className="media mt-0">
              <div className="main-avatar avatar-md online">
                <img
                  alt="avatar"
                  className="rounded-6"
                  src={require("../../../assets/img/users/1.jpg")}
                />
              </div>
              <div className="media-body ms-3 d-flex">
                <div className="">
                  <p className="tx-14 text-dark mb-0 tx-semibold">
                    Dennis Trexy
                  </p>
                  <p className="mb-0 tx-13 text-muted">
                    2 Members Accepted your Request.
                  </p>
                </div>
                <div className="notify-time">
                  <p className="mb-0 text-muted tx-11">2 Hrs ago</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="notification-time">
            <span className="date">Yesterday</span>
            <span className="time"> 18:47</span>
          </div>
          <div className="notification-icon">
            <Link to="#"></Link>
          </div>
          <div className="notification-time-date mb-2 d-block d-md-none">
            <span className="date">Yesterday</span>
            <span className="time ms-2"> 18:47</span>
          </div>
          <div className="notification-body">
            <div className="media mt-0">
              <div className="main-avatar avatar-md offline">
                <img
                  alt="avatar"
                  className="rounded-6"
                  src={require("../../../assets/img/users/2.jpg")}
                />
              </div>
              <div className="media-body ms-3 d-flex">
                <div className="">
                  <p className="tx-14 text-dark mb-0 tx-semibold">
                    Robbie Ruder
                  </p>
                  <p className="mb-0 tx-13 text-muted">
                    Created New Template for Designing Department.
                  </p>
                </div>
                <div className="notify-time">
                  <p className="mb-0 text-muted tx-11">18:47</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="notification-time">
            <span className="date">Yesterday</span>
            <span className="time"> 06:43</span>
          </div>
          <div className="notification-icon">
            <Link to="#"></Link>
          </div>
          <div className="notification-time-date mb-2 d-block d-md-none">
            <span className="date">Yesterday</span>
            <span className="time ms-2"> 06:43</span>
          </div>
          <div className="notification-body">
            <div className="media mt-0">
              <div className="main-avatar avatar-md online">
                <img
                  alt="avatar"
                  className="rounded-6"
                  src={require("../../../assets/img/users/3.jpg")}
                />
              </div>
              <div className="media-body ms-3 d-flex">
                <div className="">
                  <p className="tx-14 text-dark mb-0 tx-semibold">
                    Elida Distefa
                  </p>
                  <p className="mb-0 tx-13 text-muted">
                    Shipment is Out for Delivery.
                  </p>
                </div>
                <div className="notify-time">
                  <p className="mb-0 text-muted tx-11">06:43</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="notification-time">
            <span className="date">23Oct</span>
            <span className="time"> 03:15</span>
          </div>
          <div className="notification-icon">
            <Link to="#"></Link>
          </div>
          <div className="notification-time-date mb-2 d-block d-md-none">
            <span className="date">23Oct</span>
            <span className="time ms-2"> 03:15</span>
          </div>
          <div className="notification-body">
            <div className="media mt-0">
              <div className="main-avatar avatar-md online">
                <img
                  alt="avatar"
                  className="rounded-6"
                  src={require("../../../assets/img/users/4.jpg")}
                />
              </div>
              <div className="media-body ms-3 d-flex">
                <div className="">
                  <p className="tx-14 text-dark mb-0 tx-semibold">
                    Harvey Mattos
                  </p>
                  <p className="mb-0 tx-13 text-muted">
                    Mentioned you in a post.
                  </p>
                </div>
                <div className="notify-time">
                  <p className="mb-0 text-muted tx-11">03:15</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="notification-time">
            <span className="date">15Oct</span>
            <span className="time"> 12:14</span>
          </div>
          <div className="notification-icon">
            <Link to="#"></Link>
          </div>
          <div className="notification-time-date mb-2 d-block d-md-none">
            <span className="date">15Oct</span>
            <span className="time ms-2"> 12:14</span>
          </div>
          <div className="notification-body">
            <div className="media mt-0">
              <div className="main-avatar avatar-md offline">
                <img
                  alt="avatar"
                  className="rounded-6"
                  src={require("../../../assets/img/users/5.jpg")}
                />
              </div>
              <div className="media-body ms-3 d-flex">
                <div className="">
                  <p className="tx-14 text-dark mb-0 tx-semibold">
                    Catrice Doshier
                  </p>
                  <p className="mb-0 tx-13 text-muted">
                    2 Members Accepted your Request.
                  </p>
                </div>
                <div className="notify-time">
                  <p className="mb-0 text-muted tx-11">12:14</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="notification-time">
            <span className="date">30Sep</span>
            <span className="time"> 14:04</span>
          </div>
          <div className="notification-icon">
            <Link to="#"></Link>
          </div>
          <div className="notification-time-date mb-2 d-block d-md-none">
            <span className="date">30Sep</span>
            <span className="time ms-2"> 14:04</span>
          </div>
          <div className="notification-body">
            <div className="media mt-0">
              <div className="main-avatar avatar-md offline">
                <img
                  alt="avatar"
                  className="rounded-6"
                  src={require("../../../assets/img/users/6.jpg")}
                />
              </div>
              <div className="media-body ms-3 d-flex">
                <div className="">
                  <p className="tx-14 text-dark mb-0 tx-semibold">
                    Mercy Ritia
                  </p>
                  <p className="mb-0 tx-13 text-muted">
                    Created New Template for Designing Department.
                  </p>
                </div>
                <div className="notify-time">
                  <p className="mb-0 text-muted tx-11">14:04</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="notification-time">
            <span className="date">18Sep</span>
            <span className="time"> 12:26</span>
          </div>
          <div className="notification-icon">
            <Link to="#"></Link>
          </div>
          <div className="notification-time-date mb-2 d-block d-md-none">
            <span className="date">18Sep</span>
            <span className="time ms-2"> 12:26</span>
          </div>
          <div className="notification-body">
            <div className="media mt-0">
              <div className="main-avatar avatar-md online">
                <img
                  alt="avatar"
                  className="rounded-6"
                  src={require("../../../assets/img/users/7.jpg")}
                />
              </div>
              <div className="media-body ms-3 d-flex">
                <div className="">
                  <p className="tx-14 text-dark mb-0 tx-semibold">Mark Jhon</p>
                  <p className="mb-0 tx-13 text-muted">
                    Shipment is Out for Delivery.
                  </p>
                </div>
                <div className="notify-time">
                  <p className="mb-0 text-muted tx-11">12:26</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="notification-time">
            <span className="date">03Sep</span>
            <span className="time"> 05:37</span>
          </div>
          <div className="notification-icon">
            <Link to="#"></Link>
          </div>
          <div className="notification-time-date mb-2 d-block d-md-none">
            <span className="date">03Sep</span>
            <span className="time ms-2"> 05:37</span>
          </div>
          <div className="notification-body">
            <div className="media mt-0">
              <div className="main-avatar avatar-md offline">
                <img
                  alt="avatar"
                  className="rounded-6"
                  src={require("../../../assets/img/users/8.jpg")}
                />
              </div>
              <div className="media-body ms-3 d-flex">
                <div className="">
                  <p className="tx-14 text-dark mb-0 tx-semibold">
                    Benedict Vallone
                  </p>
                  <p className="mb-0 tx-13 text-muted">
                    Thanking you for Accepting Request.
                  </p>
                </div>
                <div className="notify-time">
                  <p className="mb-0 text-muted tx-11">05:37</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="notification-time">
            <span className="date">28Aug</span>
            <span className="time"> 15:24</span>
          </div>
          <div className="notification-icon">
            <Link to="#"></Link>
          </div>
          <div className="notification-time-date mb-2 d-block d-md-none">
            <span className="date">28Aug</span>
            <span className="time ms-2"> 15:24</span>
          </div>
          <div className="notification-body">
            <div className="media mt-0">
              <div className="main-avatar avatar-md online">
                <img
                  alt="avatar"
                  className="rounded-6"
                  src={require("../../../assets/img/users/9.jpg")}
                />
              </div>
              <div className="media-body ms-3 d-flex">
                <div className="">
                  <p className="tx-14 text-dark mb-0 tx-semibold">Paul Johny</p>
                  <p className="mb-0 tx-13 text-muted">
                    Invited you to a Group.
                  </p>
                </div>
                <div className="notify-time">
                  <p className="mb-0 text-muted tx-11">15:24</p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="text-center mb-4">
        <Link to="#" className="btn ripple btn-primary w-md" role="button">
          Load more
        </Link>
      </div>
    </div>
  </Fragment>
); NotificationList.propTypes = {};

NotificationList.defaultProps = {};

export default NotificationList;