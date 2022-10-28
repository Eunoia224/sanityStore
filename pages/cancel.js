import React from "react";
import Link from "next/link";
import { FcCancel } from "react-icons/fc";

const Cancel = () => {
  return (
    <div className="fail-wrapper">
      <div className="cancel">
        <p className="icon"></p>
        <h2> You canceled your order.</h2>
        <p className="icon">
          <FcCancel />
        </p>
        <p className="description">
          {" "}
          If you got questions, please contact us at{" "}
          <a className="email" href="mailto:michael.alazar@gmail.com">
            michael.alazar@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Cancel;
