import React from "react";
import { filter, Vector } from "../../../assets";
import "./styles.scss";

function LedgerData() {
  return (
    <>
        <div className="amount">
          <div>
            <p>Nov Expense : <span className="expense">Rs. 2,900,733.00</span></p>
          </div>

          <div>
            <p>Balance : <span className="balance">Rs. 6,600,713.00</span></p>
          </div>
        </div>

        <div className="search-bar" >
          {/* <i className="bi bi-search"></i> */}
          <img className="vector" src={Vector} alt="search" />
          <img src={filter} alt="filter" />
          <p>Search For?</p> 
          <input type="search" placeholder="Voucher, Expense, Labels etc" />
        </div>

        <div className="total-amount">
          <div className="exp">
            <p>Total Expenses : <span className="total-expense">Rs. 2,900,733</span></p>
          </div>

          <div className="bal">
            <p>Total Amount : <span className="total-balance">Rs. 6,600,713</span></p>
          </div>
        </div>

        <div className="table-width">
          <table className="exp-table ">
            <thead>
              <tr>
                <th scope="col">Description</th>
                <th scope="col">Amount Paid</th>
                <th scope="col">Expenses</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="grey-color-custom">
                  <div className="descript">
                    <div className="grid-data">
                      <p>Thurs 10 Nov 22</p>
                      <span><p>V. # : LFT-109</p></span>
                    </div>
                    <p>Unit-2 Petty Cash 10 Nov 22</p>
                    <p>Bal: 6,609,876</p>
                  </div>
                </td>
                <td className="green-color-custom">Rs. 1,256,897.00</td>
                <td className="grey-color-custom"></td>
              </tr>

              <tr>
                <td className="grey-color-custom">
                  <div className="descript">
                    <div className="grid-data">
                      <p>Thurs 10 Nov 22</p>
                      <span><p>V. # : LFT-109</p></span>
                    </div>
                    <p>Unit-2 Petty Cash 10 Nov 22</p>
                    <p>Bal: 6,609,876</p>
                  </div>
                </td>
                <td className="bg-red"></td>
                <td className="red-color-custom">Rs. 1,256,897.00</td>
              </tr>

              <tr>
                <td className="grey-color-custom">
                  <div className="descript">
                    <div>
                      <p>Unit-2 Petty Cash 10 Nov 22 </p>
                      <span><p>V. # : LFT-109</p></span>
                      <p>Bal: 6,609,876</p>
                    </div>
                  </div>
                </td>
                <td className="bg-red"></td>
                <td className="red-color-custom">Rs. 1,256,897.00</td>
              </tr>

              <tr>
                <td className="grey-color-custom">
                  <div className="descript">
                    <div className="grid-data">
                      <p>Thurs 10 Nov 22</p>
                      <span><p>V. # : LFT-109</p></span>
                    </div>
                    <p>Unit-2 Petty Cash 10 Nov 22</p>
                    <p>Bal: 6,609,876</p>
                  </div>
                </td>
                <td className="green-color-custom">Rs. 1,256,897.00</td>
                <td className="grey-color-custom"></td>
              </tr>

              <tr>
                <td className="grey-color-custom">
                  <div className="descript">
                    <div className="grid-data">
                      <p>Thurs 10 Nov 22</p>
                      <span><p>V. # : LFT-109</p></span>
                    </div>
                    <p>Unit-2 Petty Cash 10 Nov 22</p>
                    <p>Bal: 6,609,876</p>
                  </div>
                </td>
                <td className="green-color-custom">Rs. 1,256,897.00</td>
                <td className="grey-color-custom"></td>
              </tr>

              <tr>
                <td className="grey-color-custom">
                  <div className="descript">
                    <div className="grid-data">
                      <p>Thurs 10 Nov 22</p>
                      <span><p>V. # : LFT-109</p></span>
                    </div>
                    <p>Unit-2 Petty Cash on 10 Nov 22</p>
                    <p>Bal: 6,609,876</p>
                  </div>
                </td>
                <td className="bg-red"></td>
                <td className="red-color-custom">Rs. 1,256,897.00</td>
              </tr>

              <tr>
                <td className="grey-color-custom">
                  <div className="descript">
                    <div className="grid-data">
                      <p>Thurs 10 Nov 22</p>
                      <span><p>V. # : LFT-109</p></span>
                    </div>
                    <p>Unit-2 Petty Cash on 10 Nov 22</p>
                    <p>Bal: 6,609,876</p>
                  </div>
                </td>
                <td className="green-color-custom"> Rs. 1,256,897.00</td>
                <td className="grey-color-custom"></td>
              </tr>

              <tr>
                <td className="grey-color-custom">
                  <div className="descript">
                    <div className="grid-data">
                      <p>Thurs 10 Nov 22</p>
                      <span><p>V. # : LFT-109</p></span>
                    </div>
                    <p>Unit-2 Petty Cash on 10 Nov 22</p>
                    <p>Bal: 6,609,876</p>
                  </div>
                </td>
                <td className="bg-red"></td>
                <td className="red-color-custom">Rs. 1,256,897.00</td>
              </tr>

              <tr>
                <td className="grey-color-custom">
                  <div className="descript">
                    <div className="grid-data">
                      <p>Thurs 10 Nov 22</p>
                      <span><p>V. # : LFT-109</p></span>
                    </div>
                    <p>Unit-2 Petty Cash on 10 Nov 22</p>
                    <p>Bal: 6,609,876</p>
                  </div>
                </td>
                <td className="bg-red"></td>
                <td className="red-color-custom">Rs. 1,256,897.00</td>
              </tr>

              <tr>
                <td className="grey-color-custom">
                  <div className="descript">
                    <div className="grid-data">
                      <p>Thurs 10 Nov 22</p>
                      <span><p>V. # : LFT-109</p></span>
                    </div>
                    <p>Unit-2 Petty Cash on 10 Nov 22</p>
                    <p>Bal: 6,609,876</p>
                  </div>
                </td>
                <td className="green-color-custom"> Rs. 1,256,897.00</td>
                <td className="grey-color-custom"></td>
              </tr>

              <tr>
                <td className="grey-color-custom">
                  <div className="descript">
                    <div className="grid-data">
                      <p>Thurs 10 Nov 22</p>
                      <span><p>V. # : LFT-109</p></span>
                    </div>
                    <p>Unit-2 Petty Cash on 10 Nov 22</p>
                    <p>Bal: 6,609,876</p>
                  </div>
                </td>
                <td className="green-color-custom"> Rs. 1,256,897.00</td>
                <td className="grey-color-custom"></td>
              </tr>

            </tbody>
          </table>
        </div >
    </>
  )
}

export default LedgerData;
