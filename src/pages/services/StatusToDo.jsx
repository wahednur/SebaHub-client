import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const StatusToDo = () => {
  const [changeStatus, setChangeStatus] = useState("pending");
  const getBookings = useLoaderData();
  const { serviceName, _id } = getBookings;
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const handleUpdateStatus = async (e) => {
    e.preventDefault();
    const update = { status: changeStatus };
    try {
      const { data } = await axiosSecure.patch(
        `/update-bookings/${_id}`,
        update
      );
      navigate("/dashboard/service-to-do");
      toast.success(`${serviceName} status updated successfully`, data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="w-full p-5">
      <div className="w-full  bg-white dark:bg-gray-800 ">
        <h2>Update status to {serviceName}</h2>
        <form onSubmit={handleUpdateStatus}>
          <label htmlFor="status">Status</label>
          <select
            name="status"
            onChange={(e) => setChangeStatus(e.target.value)}
            className="frm-ctr"
          >
            <option value="pending">pending</option>
            <option value="completed">completed</option>
            <option value="cancel">cancel</option>
          </select>
          <button type="submit" className="btn mt-6 ">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default StatusToDo;
