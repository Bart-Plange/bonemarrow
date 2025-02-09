import { useEffect, useState } from "react";
import axios from "axios";
import { FaEye, FaTrash, FaDownload, FaCheck, FaSearch } from "react-icons/fa";
import { saveAs } from "file-saver";

const ManageContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [modalData, setModalData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, [searchQuery, statusFilter]);

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/api/contact/list?search=${searchQuery}&status=${statusFilter}`);
      setContacts(response.data.contacts || []);
    } catch (err) {
      setError("❌ Failed to load contacts.");
    }
    setLoading(false);
  };

  // ✅ Handle selection
  const toggleSelection = (id) => {
    setSelectedContacts((prev) =>
      prev.includes(id) ? prev.filter((contactId) => contactId !== id) : [...prev, id]
    );
  };

  // ✅ Mark as Read
  const markAsRead = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/api/contact/mark-read/${id}`);
      fetchContacts();
    } catch (err) {
      setError("❌ Failed to mark as read.");
    }
  };

  // ✅ Bulk Mark as Read
  const bulkMarkAsRead = async () => {
    try {
      await Promise.all(selectedContacts.map((id) => axios.patch(`http://localhost:5000/api/contact/mark-read/${id}`)));
      fetchContacts();
      setSelectedContacts([]);
    } catch (err) {
      setError("❌ Failed to mark selected as read.");
    }
  };

  // ✅ Delete Contact
  const deleteContact = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/contact/delete/${id}`);
      fetchContacts();
    } catch (err) {
      setError("❌ Failed to delete contact.");
    }
  };

  // ✅ Bulk Delete Contacts
  const bulkDelete = async () => {
    try {
      await Promise.all(selectedContacts.map((id) => axios.delete(`http://localhost:5000/api/contact/delete/${id}`)));
      fetchContacts();
      setSelectedContacts([]);
    } catch (err) {
      setError("❌ Failed to delete selected contacts.");
    }
  };

  // ✅ Export as CSV
  const exportCSV = () => {
    const csvContent = [
      ["Name", "Email", "Message", "Status"],
      ...contacts.map((contact) => [contact.name, contact.email, contact.message.replace(/\n/g, " "), contact.status]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "contacts.csv");
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-blue-900">Manage Contact Messages</h2>
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
          <option value="Unread">Unread</option>
          <option value="Read">Read</option>
        </select>

        {/* Export Button */}
        <button onClick={exportCSV} className="bg-green-500 text-white px-3 py-2 rounded-md flex items-center">
          <FaDownload className="mr-2" /> Export CSV
        </button>
      </div>

      {/* Bulk Actions */}
      {selectedContacts.length > 0 && (
        <div className="flex gap-4 mb-4">
          <button onClick={bulkMarkAsRead} className="bg-blue-500 text-white px-3 py-2 rounded-md">
            Mark as Read
          </button>
          <button onClick={bulkDelete} className="bg-red-500 text-white px-3 py-2 rounded-md">
            Delete Selected
          </button>
        </div>
      )}

      {/* Contact Messages Table */}
      {loading ? (
        <p>Loading contacts...</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setSelectedContacts(e.target.checked ? contacts.map((contact) => contact._id) : [])
                  }
                  checked={selectedContacts.length === contacts.length}
                />
              </th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Message</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length > 0 ? (
              contacts.map((contact) => (
                <tr key={contact._id} className="border">
                  <td className="border p-2">
                    <input type="checkbox" checked={selectedContacts.includes(contact._id)} onChange={() => toggleSelection(contact._id)} />
                  </td>
                  <td className="border p-2">{contact.name}</td>
                  <td className="border p-2">{contact.email}</td>
                  <td className="border p-2 truncate max-w-xs">{contact.message.substring(0, 50)}...</td>
                  <td className={`border p-2 ${contact.status === "Unread" ? "text-red-600" : "text-green-600"}`}>
                    {contact.status}
                  </td>
                  <td className="border p-2 space-x-2">
                    <button className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600" onClick={() => { setModalData(contact); setShowModal(true); }}>
                      <FaEye /> View
                    </button>
                    <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600" onClick={() => markAsRead(contact._id)}>
                      <FaCheck /> Read
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" onClick={() => deleteContact(contact._id)}>
                      <FaTrash /> Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center p-4 text-gray-600">
                  No contacts found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}

      {/* Modal for Viewing Full Message */}
      {showModal && modalData && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <h2 className="text-2xl font-bold">{modalData.name}'s Message</h2>
            <p>{modalData.message}</p>
            <button className="bg-red-500 text-white px-3 py-2 rounded-md mt-4" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageContacts;
