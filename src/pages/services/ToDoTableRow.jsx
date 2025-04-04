import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ToDoTableRow = ({ booking }) => {
  return (
    <>
      <tr className="text-left p-5 odd:bg-primary/5 dark:text-text-dark text-text-light even:bg-primary/0">
        <td>{booking?.serviceName}</td>
        <td>{booking?.client?.name}</td>
        <td>{booking?.customerName}</td>
        <td>{booking?.host?.email}</td>
        <td>{booking?.price}</td>
        <td>
          <span
            className={`${booking?.status === "pending" && "bg-primary/20 text-primary"} ${booking?.status === "completed" && "bg-success/20 text-success"} ${booking?.status === "cancel" && "bg-error/20 text-error"}  px-3 py-2 rounded-md`}
          >
            {booking?.status}
          </span>
        </td>
        <td className="flex items-center gap-2 justify-center">
          <Link to={`/services/${booking.serviceId}`} className={`btn`}>
            <FaRegEye />
          </Link>
          {booking?.status === "cancel" ? (
            <button disabled className="btn-disable">
              {" "}
              <FaRegEdit />
            </button>
          ) : (
            <Link
              to={`/dashboard/update/${booking?._id}`}
              className={`${booking?.status === "cancel" ? "btn-disable" : "btn-green"}`}
            >
              <FaRegEdit />
            </Link>
          )}
        </td>
      </tr>
    </>
  );
};

export default ToDoTableRow;
