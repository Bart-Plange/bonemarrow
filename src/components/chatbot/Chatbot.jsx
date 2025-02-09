import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll chat to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!userMessage.trim()) return;

    const newMessages = [...messages, { type: "user", text: userMessage }];
    setMessages(newMessages);
    setUserMessage("");
    setIsTyping(true);

    try {
        const response = await axios.post("http://localhost:5000/api/chatbot/query", {
            userId: "65a1b9d2e4b0e78a2f3c8a9f",  // 🔹 Ensure userId is included
            userMessage,
        });

        setMessages([...newMessages, { type: "bot", text: response.data.botResponse }]);
    } catch (error) {
        console.error("Chatbot API Error:", error.response?.data || error.message);
        setMessages([...newMessages, { type: "bot", text: "❌ Error: Unable to fetch response." }]);
    }

    setIsTyping(false);
};


  // Clear Chat History
  const clearChatHistory = () => {
    setMessages([]);
    setShowModal(false);
  };

  return (
    <div>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-7 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          💬
        </button>
      )}
      {isOpen && (
        <div className="fixed bottom-0 right-0 w-80 h-96 shadow-lg bg-white rounded-lg flex flex-col">
          <div className="flex justify-between items-center p-3 border-b">
            <h2 className="text-lg font-semibold">Chatbot</h2>
            <button onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-gray-800">✖</button>
          </div>
          
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-3">
            {messages.length === 0 && <p className="text-gray-500 text-sm">Start a conversation...</p>}
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.type === "user" ? "text-right" : "text-left"}`}>
                <span className={`inline-block px-3 py-2 rounded-lg ${msg.type === "user" ? "bg-blue-600 text-white" : "bg-gray-300 text-black"}`}>
                  {msg.text}
                </span>
              </div>
            ))}
            {isTyping && <div className="text-gray-500 text-sm animate-pulse">🤖 Bot is typing...</div>}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input & Send Button */}
          <div className="p-3 border-t flex items-center">
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 p-2 border rounded-lg outline-none"
              placeholder="Type a message..."
            />
            <button onClick={sendMessage} className="ml-2 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition">➤</button>
          </div>
        </div>
      )}

      {/* Clear Chat Confirmation Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center"
              initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}>
              <h3 className="text-lg font-semibold">Clear Chat History?</h3>
              <p className="text-gray-600 mt-2">This action cannot be undone.</p>
              <div className="mt-4 flex justify-between">
                <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition">Cancel</button>
                <button onClick={clearChatHistory} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">Confirm</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
