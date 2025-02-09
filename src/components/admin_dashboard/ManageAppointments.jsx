import { useEffect, useState } from "react";
import axios from "axios";
import { FaCheck, FaTimes, FaDownload, FaTrash, FaEye, FaSearch } from "react-icons/fa";
import { saveAs } from "file-saver";

const ManageAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [selectedAppointments, setSelectedAppointments] = useState([]);
  const [modalData, setModalData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchAppointments();
  }, [statusFilter, dateFilter, searchQuery]);

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/appointments/list?status=${statusFilter}&date=${dateFilter}&search=${searchQuery}`
      );
      setAppointments(response.data.appointments || []);
    } catch (err) {
      setError("❌ Failed to load appointments.");
    }
    setLoading(false);
  };

  // ✅ Handle single and bulk selection
  const toggleSelection = (id) => {
    setSelectedAppointments((prev) =>
      prev.includes(id) ? prev.filter((appId) => appId !== id) : [...prev, id]
    );
  };

  // ✅ Handle Bulk Approval
  const bulkApprove = async () => {
    try {
      await Promise.all(selectedAppointments.map((id) => axios.patch(`http://localhost:5000/api/appointments/approve/${id}`)));
      fetchAppointments();
      setSelectedAppointments([]);
    } catch (err) {
      setError("❌ Failed to approve selected appointments.");
    }
  };

  // ✅ Handle Bulk Deletion
  const bulkDelete = async () => {
    try {
      await Promise.all(selectedAppointments.map((id) => axios.delete(`http://localhost:5000/api/appointments/cancel/${id}`)));
      fetchAppointments();
      setSelectedAppointments([]);
    } catch (err) {
      setError("❌ Failed to delete selected appointments.");
    }
  };

  // ✅ Export as CSV
  const exportCSV = () => {
    const csvContent = [
      ["Name", "Email", "Phone", "Date", "Time", "Status"],
      ...appointments.map((app) => [app.name, app.email, app.phone, app.date, app.time, app.status]),
    ]
      .map((row) => row.join(","))
      .join("\n");
    
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "appointments.csv");
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-blue-900">Manage Appointments</h2>
      {error && <p className="text-red-500">{error}</p>}

      {/* Search & Filter Section */}
      <div className="flex flex-wrap gap-4 mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border p-2 rounded-md pl-8"
          />
          <FaSearch className="absolute left-2 top-3 text-gray-500" />
        </div>

        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="border p-2 rounded-md">
          <option value="">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Cancelled">Cancelled</option>
        </select>

        <input type="date" value={dateFilter} onChange={(e) => setDateFilter(e.target.value)} className="border p-2 rounded-md" />

        {/* Export Button */}
        <button onClick={exportCSV} className="bg-green-500 text-white px-3 py-2 rounded-md flex items-center">
          <FaDownload className="mr-2" /> Export CSV
        </button>
      </div>

      {/* Bulk Actions */}
      {selectedAppointments.length > 0 && (
        <div className="flex gap-4 mb-4">
          <button onClick={bulkApprove} className="bg-blue-500 text-white px-3 py-2 rounded-md">
            Bulk Approve
          </button>
          <button onClick={bulkDelete} className="bg-red-500 text-white px-3 py-2 rounded-md">
            Bulk Delete
          </button>
        </div>
      )}

      {/* Appointment Table */}
      {loading ? (
        <p>Loading appointments...</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setSelectedAppointments(e.target.checked ? appointments.map((app) => app._id) : [])
                  }
                  checked={selectedAppointments.length === appointments.length}
                />
              </th>
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
                  <td className="border p-2">
                    <input type="checkbox" checked={selectedAppointments.includes(app._id)} onChange={() => toggleSelection(app._id)} />
                  </td>
                  <td className="border p-2">{app.name}</td>
                  <td className="border p-2">{app.date}</td>
                  <td className="border p-2">{app.time}</td>
                  <td className={`border p-2 ${app.status === "Pending" ? "text-yellow-600" : "text-green-600"}`}>
                    {app.status}
                  </td>
                  <td className="border p-2 space-x-2">
                    <button className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600" onClick={() => { setModalData(app); setShowModal(true); }}>
                      <FaEye /> View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center p-4 text-gray-600">
                  No appointments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}

      {/* Modal for Viewing Appointment Details */}
      {showModal && modalData && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <h2 className="text-2xl font-bold">{modalData.name}'s Appointment</h2>
            <p><strong>Date:</strong> {modalData.date}</p>
            <p><strong>Time:</strong> {modalData.time}</p>
            <p><strong>Status:</strong> {modalData.status}</p>
            <button className="bg-red-500 text-white px-3 py-2 rounded-md mt-4" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageAppointments;
