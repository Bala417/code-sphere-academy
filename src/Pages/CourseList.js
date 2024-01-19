import { React, useEffect, useState } from "react";
import {
  collection,
  getDocs,
  where,
  query,
  collectionGroup,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { courseListData } from "../store/reducers/CourseDataSlice";

const CourseList = () => {
  const [courseList, setCourseList] = useState([]);
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const courseRef = collection(db, "courseDetails");
  const studentsRef = collectionGroup(db, "students");
  const syllabusRef = collectionGroup(db, "syllabus");

  useEffect(() => {
    const getCourseList = async () => {
      try {
        const data = await getDocs(courseRef);

        const courses = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setCourseList(courses);
        dispatch(courseListData(courses));
      } catch (err) {
        console.error(err);
      }
    };
    console.log(courseList);
    const getStudents = async () => {
      const studentsSnapshot = await getDocs(studentsRef);
      studentsSnapshot.forEach((doc) => console.log(doc.data()));
    };

    const getSyllabus = async () => {
      const syllabusSnapshot = await getDocs(syllabusRef);

      syllabusSnapshot.forEach((doc) => console.log(doc.data()));
    };

    getCourseList();
    getStudents();
    getSyllabus();
  }, []);

  // console.log(useSelector((store) => store.coursesData.courses));
  return (
    <div>
      {courseList.map((course) => {
        return (
          <div key={course.id}>
            {/* <div onClick={() => navigate(`/courseDetailsPage/${course.id}`)}>
              <img src={course.thumbnail} width={200} />
            </div>
            <div>{course.Title}</div>
            <div>{course.descritpion}</div>
            <div>{course.instructor}</div>
            <div>{course.enrollmentStatus[0]}</div> */}
          </div>
        );
      })}
    </div>
  );
};

export default CourseList;
