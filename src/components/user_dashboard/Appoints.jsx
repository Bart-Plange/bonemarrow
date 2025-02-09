import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Appoints = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5000/api/appointments", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setAppointments(response.data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };
    fetchAppointments();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">📅 Your Appointments</h2>
      <ul className="mt-2 space-y-1">
        {appointments.length > 0 ? (
          appointments.map((appt) => (
            <li key={appt._id} className="text-gray-700">
              ✅ {appt.date} at {appt.time} - {appt.status}
            </li>
          ))
        ) : (
          <p>No upcoming appointments</p>
        )}
      </ul>
      <button
        onClick={() => navigate("/appointments")}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        View Appointments
      </button>
    </div>
  );
};

export default Appoints;
