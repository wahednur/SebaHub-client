import { FaRegEdit } from "react-icons/fa";
import { FaRegEye, FaTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";

const TableRow = ({ service }) => {
  return (
    <tr className="text-left p-5 odd:bg-primary/5 even:bg-primary/0">
      <td>{service.title}</td>
      <td>{service.category}</td>
      <td>{service.area}</td>
      <td>{service.price}</td>
      <td className="flex items-center gap-2 justify-center">
        <Link to={`/services/${service._id}`} className="btn">
          <FaRegEye />
        </Link>
        <Link
          to={`/dashboard/services/edit/${service._id}`}
          className="btn-green"
        >
          <FaRegEdit />
        </Link>
        <button className="btn-delete">
          <FaTrashCan />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
