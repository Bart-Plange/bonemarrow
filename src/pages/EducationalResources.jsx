import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { FAQS } from "../components";

const backgroundAnimation = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 6, repeat: Infinity, repeatType: "reverse" },
  },
};

const articles = [
  {
    title: "Understanding Bone Marrow Transplants",
    description:
      "An in-depth look at the process and benefits of bone marrow transplants.",
    content:
      `Introduction
Bone marrow transplants are a critical medical intervention designed to treat patients with life-threatening blood disorders such as leukemia, lymphoma, and aplastic anemia. By replacing damaged or diseased bone marrow with healthy cells, these transplants offer patients a renewed chance at life. This article provides a thorough exploration of what bone marrow transplants are, why they are needed, the step-by-step process involved, and the benefits and challenges associated with the procedure.

What Is a Bone Marrow Transplant?
A bone marrow transplant is a procedure in which a patient’s faulty or damaged bone marrow is replaced with healthy hematopoietic (blood-forming) stem cells. There are two primary types of transplants:

Autologous Transplant:
The patient’s own stem cells are collected, stored, and then re-infused after intensive treatment. This method is often used when the risk of graft-versus-host disease (GVHD) is a concern.

Allogeneic Transplant:
Stem cells are donated by a compatible donor. Matching is based on human leukocyte antigen (HLA) markers to ensure the best possible compatibility. This method can also provide a graft-versus-tumor effect, which may help eliminate any remaining cancer cells.

Why Are Bone Marrow Transplants Needed?
For many patients with aggressive blood cancers or bone marrow failure syndromes, conventional treatments such as chemotherapy or radiation are not enough. A bone marrow transplant can:
• Restore Healthy Blood Cell Production: Re-establish the body’s ability to produce healthy red blood cells, white blood cells, and platelets.
• Offer the Potential for a Cure: In certain cancers and disorders, a transplant may be the only chance for long-term remission or even a cure.
• Boost Immune Function: Particularly in allogeneic transplants, the donor’s immune cells can help fight residual cancer cells.

The Bone Marrow Transplant Process
The procedure involves several stages:
1. Pre-Transplant Evaluation – Includes medical history, physical examination, laboratory tests, and psychosocial assessment.
2. Donor Matching (For Allogeneic Transplants) – HLA typing and registry searches are performed.
3. Stem Cell Collection – Either via Peripheral Blood Stem Cell (PBSC) collection or bone marrow harvest.
4. The Transplant Procedure – Involves a conditioning regimen (chemotherapy and/or radiation) followed by infusion of healthy stem cells.
5. Post-Transplant Care – Includes hospitalization, regular follow-ups, and medication to manage side effects and prevent complications.

Benefits and Challenges
Benefits:
• Life-Saving Potential
• Restored Health and Improved Immune Function
• Potential for a Cure
Challenges:
• Risk of Complications such as infections, organ damage, and GVHD.
• An Intensive and Lengthy Recovery Process
• Emotional and Physical Strain

Conclusion
Understanding bone marrow transplants helps patients and families make informed decisions about treatment options. Despite the risks, the potential to save lives and restore health makes bone marrow transplants a cornerstone of modern medicine.`,
  },
  {
    title: "Life After a Bone Marrow Transplant",
    description:
      "What to expect and how to manage your health post-transplant.",
    content:
      `Introduction
Undergoing a bone marrow transplant is a life-changing experience that offers new hope for patients battling life-threatening blood disorders such as leukemia, lymphoma, and aplastic anemia. While the transplant itself is a major medical procedure, the journey of recovery and adjustment afterwards is equally important. Life after a bone marrow transplant is a gradual process that involves medical monitoring, lifestyle adjustments, and emotional support. This guide provides an in-depth look at what you can expect during the recovery period, strategies to manage your health, and tips to help you embrace a new chapter in your life.

The Recovery Timeline
Recovery after a bone marrow transplant is long and unique:
• Immediate Post-Transplant Phase: Hospital stay and early recovery with close monitoring.
• Intermediate Recovery Phase: Gradual improvement at home with regular follow-ups.
• Long-Term Recovery and Adjustment: Ongoing care, lifestyle changes, and rebuilding normalcy.

Medical Follow-Ups and Medications
• Frequent clinic visits for blood tests and health monitoring.
• Strict adherence to prescribed medications such as immunosuppressants and antibiotics.
• Regular screenings for complications.

Lifestyle Adjustments for a Healthy Recovery
• Nutrition: A balanced diet rich in fruits, vegetables, lean proteins, and whole grains.
• Exercise: Gentle physical activities like walking or yoga.
• Rest: Adequate sleep and gradual increase in activity levels.
• Infection Prevention: Good hygiene and avoiding crowded places.

Emotional and Psychological Support
• Counseling and support groups to manage emotional stress.
• Leaning on family and friends for support.

Long-Term Outlook and Quality of Life
• Ongoing medical monitoring to ensure sustained health.
• Embracing a healthier lifestyle and resuming normal activities over time.

Conclusion
Life after a bone marrow transplant involves significant adjustments but offers the opportunity for a renewed life. With proper medical care, lifestyle modifications, and emotional support, many patients achieve a high quality of life post-transplant.`,
  },
  {
    title: "Donating Bone Marrow: What You Need to Know",
    description:
      "A guide for potential donors on the donation process and its impact.",
    content: `Donating bone marrow is a selfless act that can save lives. For patients suffering from conditions such as leukemia, lymphoma, and other serious blood disorders, a bone marrow transplant can be a vital, life-saving treatment. This guide is designed to provide potential donors with all the necessary information about the donation process, its benefits, potential risks, and what to expect before, during, and after donation.

What is Bone Marrow?
Bone marrow is a soft, spongy tissue located in the center of most bones, particularly in the pelvis. It produces red blood cells, white blood cells, and platelets. When damaged, replacing it with healthy marrow can restore the body’s ability to produce these cells.

Why Consider Donating?
• Life-Saving Impact: A single donation can give someone a second chance at life.
• Community Contribution: Make a significant difference in someone’s life.
• Minimal Long-Term Risk: Bone marrow donation is generally safe and well-tolerated.

The Bone Marrow Donation Process
There are two main methods:

Peripheral Blood Stem Cell (PBSC) Donation:
- Preparation: Donors receive injections (e.g., G-CSF) to mobilize stem cells.
- Collection: Stem cells are collected through apheresis.
- Recovery: Side effects are typically mild and temporary.

Traditional Bone Marrow Harvest:
- Procedure: A needle extracts marrow directly from the pelvic bone under anesthesia.
- Recovery: The procedure is brief, with soreness and fatigue lasting a few days.

Steps to Become a Donor
1. Registration and Testing: Register with a bone marrow registry and get your tissue type determined.
2. Matching Process: A match is made based on genetic compatibility.
3. Medical Evaluation: Further tests ensure you’re fit to donate.
4. Donation Day: Receive detailed support and instructions from your medical team.

What to Expect Before, During, and After Donation
- Before: Understand the procedure, side effects, and recovery expectations.
- During: The process is performed under strict medical supervision.
- After: Recovery is typically quick, with most donors resuming normal activities within a few weeks.

Potential Risks and Considerations
- Short-Term Side Effects: Mild pain, fatigue, and temporary flu-like symptoms.
- Emotional Considerations: Many donors feel profound fulfillment.
- Eligibility: Generally, healthy individuals aged 18 to 60 can donate.

The Impact of Your Donation
Your donation provides a vital lifeline to patients in need, offering hope and a chance for renewed life.

Conclusion
Donating bone marrow is a powerful act of compassion that saves lives and strengthens communities. If you’re considering donation, consult healthcare professionals, review registry guidelines, and take the step to become someone’s hero.`,
  },
];

const EducationalResources = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-red-900 text-white text-center py-20 px-6 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mt-5"
        >
          Educational Resources
        </motion.h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Learn more about bone marrow transplants, donations, and post-transplant care.
        </p>
      </section>

      {/* Articles Section */}
      <section className="py-16 px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center text-red-900 mb-8">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-red-900 mb-2">{article.title}</h3>
              <p className="text-gray-700 mb-4 line-clamp-3">{article.description}</p>
              <div className="mt-auto">
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="text-red-600 font-semibold hover:underline"
                >
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal for Reading Articles */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            className="fixed inset-0 flex justify-center items-center px-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArticle(null)}
          >
            {/* Animated Background */}
            <motion.div className="absolute inset-0 bg-red-900 flex overflow-hidden" initial="hidden" animate="visible">
              {[...Array(5)].map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute bg-red-500 opacity-30 rounded-full"
                  variants={backgroundAnimation}
                  style={{
                    width: `${60 + index * 30}px`,
                    height: `${60 + index * 30}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </motion.div>

            {/* Modal Content */}
            <motion.div
              className="bg-white rounded-lg p-8 max-w-3xl w-full max-h-[80vh] overflow-y-auto relative z-10"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelectedArticle(null)} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800">
                <FaTimes size={20} />
              </button>
              <h2 className="text-2xl font-bold text-red-900 mb-4">{selectedArticle.title}</h2>
              <div className="text-gray-700 whitespace-pre-wrap leading-relaxed text-base">{selectedArticle.content}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <FAQS />
    </div>
  );
};

export default EducationalResources;
