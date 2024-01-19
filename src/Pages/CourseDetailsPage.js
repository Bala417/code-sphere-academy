// import { React, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import {
//   collection,
//   getDocs,
//   where,
//   query,
//   collectionGroup,
// } from "firebase/firestore";
// import { db } from "../config/firebase";

// const CourseDetailsPage = () => {
//   const [courseDetail, setCourseDetail] = useState([]);
//   const [student, setStudent] = useState([]);
//   const { courseId } = useParams();

//   const courseRef = collection(db, "courseDetails");
//   const studentsRef = collectionGroup(db, "students");
//   const syllabusRef = collectionGroup(db, "syllabus");

//   useEffect(() => {
//     const getCourseList = async () => {
//       try {
//         const data = await getDocs(courseRef);

//         const courses = data.docs.map((doc) => ({
//           ...doc.data(),
//           id: doc.id,
//         }));

//         setCourseDetail(courses);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     const getStudents = async () => {
//       const studentsSnapshot = await getDocs(studentsRef);

//       studentsSnapshot.forEach((doc) => {
//         setStudent(() => [...student, doc.data()]);
//       });
//       console.log(student);
//     };

//     const getSyllabus = async () => {
//       const syllabusSnapshot = await getDocs(syllabusRef);
//       syllabusSnapshot.forEach((doc) => console.log(doc.data()));
//     };

//     getCourseList();
//     getStudents();
//     getSyllabus();
//   }, []);

//   console.log(courseDetail);
//   if (courseDetail.length === 0) {
//     return <div>Loading..</div>;
//   }

//   return (
//     <div>
//       {courseDetail.map((detail) => {
//         return (
//           <div key={detail.id} className="p-5">
//             <div>
//               <img src={detail.thumbnail} width={500} />
//             </div>
//             <div>{detail.Title}</div>
//             <div>{detail.description}</div>
//             <div>{detail.instructor}</div>
//             <div>{detail.duration}</div>
//             <div>
//               <ol>
//                 <li>{detail.prerequisites[0]}</li>
//                 <li>{detail.prerequisites[1]}</li>
//               </ol>
//             </div>
//             <div>{detail.schedule}</div>
//             <div>{detail.location}</div>

//             <div></div>
//           </div>
//         );
//       })}
//       <div></div>
//     </div>
//   );
// };

// export default CourseDetailsPage;
import React from "react";

const CourseDetailsPage = () => {
  return <div>CourseDetailsPage</div>;
};

export default CourseDetailsPage;
