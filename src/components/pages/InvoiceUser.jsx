import React from 'react';
import {
  faCircleCheck,
  faDownload,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import progress from '../svg/progress-3.svg';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Invoice } from './Report/Invoice';

import { PDFViewer } from '@react-pdf/renderer';

export default function InvoiceUser() {
  return (
    <>
      <div className="bg-lightGrey">
        <div className="container" id="top">
          <div className="row">
            <div className="col-lg-1">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="custom-size-aweseome-1"
              />
            </div>
            <div className="col-lg-3">
              <h6>Tiket</h6>
              <p>Order ID: xxxxxx</p>
            </div>
            <div className="col-lg-8 my-auto">
              <div className="d-flex justify-content-end">
                <img src={progress} alt="Progress 3" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <p className="text-center mt-5">
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="text-success custom-size-aweseome-2"
          />
        </p>

        <p className="font-weight-bold text-center custom-font-3">
          Pembayaran Berhasil!
        </p>

        <p className="text-muted text-center custom-font-4">
          Tunjukkan invoice ini ke petugas BCR di titik temu.
        </p>
        <div className="mx-auto p-4 mt-5 border rounded custom-box-download">
          <div className="row">
            <div className="col-md-6 text-left">
              <p className="font-weight-bold custom-font-3">Invoice</p>
            </div>

            <div className="col-md-6 text-right">
              <PDFDownloadLink
                document={<Invoice />}
                fileName="Binar Car Rental"
              >
                {({ loading }) =>
                  loading ? (
                    <button className="btn btn-outline-primary">
                      <span>
                        <FontAwesomeIcon
                          icon={faDownload}
                          className="custom-font-5"
                        />
                      </span>
                      <span className="custom-font-5">
                        Loading document....
                      </span>
                    </button>
                  ) : (
                    <button className="btn btn-outline-primary">
                      <span>
                        <FontAwesomeIcon
                          icon={faDownload}
                          className="custom-font-5"
                        />
                      </span>
                      <span className="custom-font-5">Unduh</span>
                    </button>
                  )
                }
              </PDFDownloadLink>
            </div>

            <p className="text-muted custom-font-4">*no invoice</p>

            <div className="container rounded custom-bg-upload d-flex justify-content-center">
              <PDFViewer style={{ width: '100%', height: '100%' }}>
                <Invoice />
              </PDFViewer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
