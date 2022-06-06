/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faPenToSquare,
  faKey,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import load from '../../svg/pacman-loading.svg';
import notimage from '../../svg/notimage.svg';
import { useSelector } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import ModalImage from 'react-modal-image';

export default function ListCar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function useCarAdmin() {
    const { data } = useSelector((state) => ({
      ...state.combineReducers,
      ...state.car,
    }));
    return { data };
  }
  function useLoadingStatus() {
    const { loading } = useSelector((state) => ({
      ...state.combineReducers,
      ...state.car,
    }));
    return { loading };
  }
  const { loading } = useLoadingStatus();
  const { data } = useCarAdmin();

  let formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <p className="text-dark custom-font-1">
            <span className="font-weight-bold text-dark">Cars &gt; </span>List
            Car
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <h6 className="font-weight-bold custom-font-2">List Car</h6>
        <a className="btn text-white custom-add" href="/add-new-car">
          + &nbsp; Add New Car
        </a>
      </div>

      <div className="d-flex justify-content-start mb-4 mt-2">
        <button className="btn custom-btn-car custom-btn-car-active mr-2">
          All
        </button>
        <button className="btn custom-btn-car mr-2">Small</button>
        <button className="btn custom-btn-car mr-2">Medium</button>
        <button className="btn custom-btn-car mr-2">Large</button>
      </div>
      <div className="row">
        {loading === 'loading' ? (
          <>
            <div className="container margin-top-custom d-flex justify-content-center">
              <img src={load} alt="" />
            </div>
          </>
        ) : data !== null ? (
          data.map((lists, index) => (
            <>
              <div className="col-md-4 d-flex align-items-stretch">
                <div
                  className="card p-3 mb-4"
                  style={{ width: '22rem' }}
                  key={index}
                >
                  <div className="mx-auto">
                    {lists.image === null ? (
                      <ModalImage
                        className="card-img-top"
                        small={notimage}
                        large={notimage}
                        alt="Mobil"
                      />
                    ) : (
                      <ModalImage
                        className="card-img-top"
                        small={lists.image}
                        large={lists.image}
                        alt="Mobil"
                      />
                    )}
                  </div>
                  <div className="card-body">
                    <p className="card-text custom-font-3">{lists.name}</p>
                    <p className="card-text font-weight-bold text-dark">
                      {formatter.format(lists.price)}/ hari
                    </p>
                    <p className="card-text custom-font-4">
                      <span>
                        <FontAwesomeIcon
                          icon={faKey}
                          className="custom-size-aweseome"
                        />
                      </span>
                      &nbsp;Start rent - Finish rent
                    </p>
                    <p className="card-text custom-font-4">
                      <span>
                        <FontAwesomeIcon
                          icon={faClock}
                          className="custom-size-aweseome"
                        />
                      </span>
                      &nbsp;Updated at 4 Apr 2022, 09.00
                    </p>
                    <div className="row">
                      <div className="col-6">
                        <span>
                          <a
                            href="#"
                            className="btn btn-outline-danger custom-font-4 w-100 py-2"
                            onClick={handleShow}
                          >
                            <FontAwesomeIcon
                              icon={faTrash}
                              className="custom-size-aweseome"
                            />
                            &nbsp;Delete
                          </a>
                          <Modal
                            show={show}
                            onHide={handleClose}
                            animation={false}
                          >
                            <Modal.Header closeButton>
                              <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              Woohoo, you're reading this text in a modal!
                            </Modal.Body>
                            <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose}>
                                Close
                              </Button>
                              <Button variant="primary" onClick={handleClose}>
                                Save Changes
                              </Button>
                            </Modal.Footer>
                          </Modal>
                        </span>
                      </div>
                      <div className="col-6">
                        <span>
                          <a
                            href="/edit-car"
                            className="btn btn-success custom-font-4 w-100 py-2"
                          >
                            <FontAwesomeIcon
                              icon={faPenToSquare}
                              className="custom-size-aweseome"
                            />
                            &nbsp;Edit
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))
        ) : (
          <>
            <div className="container margin-top-custom d-flex justify-content-center">
              <h1 className="display-4">--Data tidak ditemukan--</h1>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
