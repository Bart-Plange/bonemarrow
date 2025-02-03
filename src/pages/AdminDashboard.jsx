import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/appointments/list");
      setAppointments(response.data);
    } catch (err) {
      setError("Failed to load appointments.");
    }
    setLoading(false);
  };

  const handleCancel = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/appointments/cancel/${id}`);
      setAppointments(appointments.filter(app => app._id !== id));
    } catch (err) {
      setError("Failed to cancel appointment.");
    }
  };

  const handleApprove = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/api/appointments/approve/${id}`);
      setAppointments(appointments.map(app => app._id === id ? { ...app, status: "Confirmed" } : app));
    } catch (err) {
      setError("Failed to approve appointment.");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Admin Dashboard</h1>
      {error && <p className="text-red-500">{error}</p>}
      {loading ? <p>Loading appointments...</p> : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Time</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map(app => (
              <tr key={app._id} className="border">
                <td className="border p-2">{app.name}</td>
                <td className="border p-2">{app.date}</td>
                <td className="border p-2">{app.time}</td>
                <td className="border p-2">{app.status}</td>
                <td className="border p-2">
                  <button className="bg-green-500 text-white p-1 rounded mr-2" onClick={() => handleApprove(app._id)}>Approve</button>
                  <button className="bg-red-500 text-white p-1 rounded" onClick={() => handleCancel(app._id)}>Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminDashboard;
