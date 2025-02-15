import { useEffect, useState } from "react";
import axios from "axios";
import { FaUserMd, FaCalendarCheck, FaUser, FaCog, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const AdminDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/appointments/list`);
      setAppointments(response.data.appointments || []);
    } catch (err) {
      setError("❌ Failed to load appointments.");
    }
    setLoading(false);
  };

  const handleCancel = async (id) => {
    try {
      await axios.delete(`${backendUrl}/api/appointments/cancel/${id}`);
      setAppointments(appointments.filter((app) => app._id !== id));
    } catch (err) {
      setError("❌ Failed to cancel appointment.");
    }
  };

  const handleApprove = async (id) => {
    try {
      await axios.patch(`${backendUrl}/api/appointments/approve/${id}`);
      setAppointments(
        appointments.map((app) =>
          app._id === id ? { ...app, status: "Confirmed" } : app
        )
      );
    } catch (err) {
      setError("❌ Failed to approve appointment.");
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed md:relative h-screen w-64 bg-blue-900 text-white transition-all ${sidebarOpen ? "left-0" : "-left-64"} md:left-0`}>
        <div className="p-6 text-center text-2xl font-bold border-b border-blue-800">Admin Panel</div>
        <nav className="mt-6 space-y-2">
          <NavLink to="/admin/appointments" className="block p-4 flex items-center space-x-3 hover:bg-blue-700">
            <FaCalendarCheck /> <span>Appointments</span>
          </NavLink>
          <NavLink to="/admin/doctors" className="block p-4 flex items-center space-x-3 hover:bg-blue-700">
            <FaUserMd /> <span>Doctors</span>
          </NavLink>
          <NavLink to="/admin/patients" className="block p-4 flex items-center space-x-3 hover:bg-blue-700">
            <FaUser /> <span>Patients</span>
          </NavLink>
          <NavLink to="/admin/settings" className="block p-4 flex items-center space-x-3 hover:bg-blue-700">
            <FaCog /> <span>Settings</span>
          </NavLink>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Top Navbar */}
        <div className="flex justify-between items-center bg-white p-4 shadow-md">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <button
            className="md:hidden p-2 bg-blue-900 text-white rounded"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Main Dashboard Content */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Appointments</h2>
          {error && <p className="text-red-500">{error}</p>}
          {loading ? (
            <p>Loading appointments...</p>
          ) : (
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
                {appointments.length > 0 ? (
                  appointments.map((app) => (
                    <tr key={app._id} className="border">
                      <td className="border p-2">{app.name}</td>
                      <td className="border p-2">{app.date}</td>
                      <td className="border p-2">{app.time}</td>
                      <td className={`border p-2 font-semibold ${app.status === "Pending" ? "text-yellow-600" : "text-green-600"}`}>
                        {app.status}
                      </td>
                      <td className="border p-2 space-x-2">
                        {app.status === "Pending" && (
                          <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition" onClick={() => handleApprove(app._id)}>
                            Approve
                          </button>
                        )}
                        <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition" onClick={() => handleCancel(app._id)}>
                          Cancel
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center p-4 text-gray-600">
                      No appointments found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
