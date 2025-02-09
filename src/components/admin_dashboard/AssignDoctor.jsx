import { useEffect, useState } from "react";
import axios from "axios";

const AssignDoctor = () => {
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    fetchAppointments();
    fetchDoctors();
  }, []);

  // ✅ Fetch Appointments (Only Unassigned)
  const fetchAppointments = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/appointments/list?status=Pending");
      setAppointments(response.data.appointments);
    } catch (err) {
      setError("❌ Failed to load appointments.");
    }
  };

  // ✅ Fetch Doctors
  const fetchDoctors = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/doctors");
      setDoctors(response.data);
    } catch (err) {
      setError("❌ Failed to load doctors.");
    }
  };

  // ✅ Assign Doctor
  const handleAssignDoctor = async (appointmentId, doctorId) => {
    if (!doctorId) return;

    try {
      await axios.patch(`http://localhost:5000/api/appointments/assign/${appointmentId}`, { doctorId });
      setSuccess("✅ Doctor assigned successfully!");
      fetchAppointments(); // Refresh appointment list
    } catch (err) {
      setError("❌ Failed to assign doctor.");
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-blue-900">Assign Doctor to Appointments</h2>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}

      {loading ? (
        <p>Loading data...</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Patient</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Time</th>
              <th className="border p-2">Assign Doctor</th>
            </tr>
          </thead>
          <tbody>
            {appointments.length > 0 ? (
              appointments.map((app) => (
                <tr key={app._id} className="border">
                  <td className="border p-2">{app.name}</td>
                  <td className="border p-2">{app.date}</td>
                  <td className="border p-2">{app.time}</td>
                  <td className="border p-2">
                    <select
                      onChange={(e) => handleAssignDoctor(app._id, e.target.value)}
                      className="p-2 border rounded-md"
                    >
                      <option value="">Select Doctor</option>
                      {doctors.map((doc) => (
                        <option key={doc._id} value={doc._id}>
                          Dr. {doc.name}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center p-4 text-gray-600">
                  No pending appointments.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AssignDoctor;
