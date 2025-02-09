import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5000/api/messages", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    fetchMessages();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">💬 Messages</h2>
      <ul className="mt-2 space-y-1">
        {messages.length > 0 ? (
          messages.map((msg) => (
            <li key={msg._id} className="text-gray-700">
              📩 {msg.sender}: {msg.text}
            </li>
          ))
        ) : (
          <p>No new messages</p>
        )}
      </ul>
      <button
        onClick={() => navigate("/messages")}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
      >
        View Messages
      </button>
    </div>
  );
};

export default Messages;
