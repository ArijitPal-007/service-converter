// import React from "react";

// function Document({ document }) {
//   return (
//     <div>
//       <div className="details-section">
//         <h2>Document Details</h2>
//         {{document} ? (
//           <div className="cv-details">
//             <div className="cv-details-content">
//               <h3>Document Information</h3>
//               <div className="detail-row">
//                 <ul>
//                   <h3>
//                     <strong>Document Type:</strong> {document.docType}
//                   </h3>

//                   {Object.entries(document.extracted_data[0] || {}).map(
//                     ([key, value], idx) => (
//                       <li key={idx}>
//                         <strong>{key}</strong>: {value}
//                       </li>
//                     )
//                   )}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="no-cv-message">
//             <p>
//               Select a document type and upload to see extracted details here
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Document;
