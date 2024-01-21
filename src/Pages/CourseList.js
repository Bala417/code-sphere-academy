import { React, useEffect, useState } from "react";
import {
  collection,
  getDocs,
  where,
  query,
  collectionGroup,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { courseListData } from "../store/reducers/CourseDataSlice";
import { db } from "../config/firebase";

const CourseList = () => {
  const [courseList, setCourseList] = useState([]);
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const courseRef = collection(db, "courseDetails");

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

    getCourseList();
  }, []);

  return (
    <div className="m-5  md:flex md:h-screen md:flex-wrap md:justify-center ">
      {courseList.map((course) => {
        return (
          <div
            key={course.id}
            className="shadow-lg p-3 my-10 rounded-lg cursor-pointer bg-slate-50 md:container  md:bg-slate-100 m-5 md:w-1/4  md:p-5 flex-wrap"
            onClick={() => navigate(`/courseDetailsPage/${course.id}`)}
          >
            <div className="p-5  flex-col flex-1  justify-center text-center ">
              <div>
                <img
                  src={course.thumbnail}
                  alt={course.name}
                  className="w-screen"
                />
              </div>
              <div className="pt-3 font-bold">{course.name}</div>
            </div>

            <div className="line-clamp-3 text-center ">
              {/* <span className="font-semibold line-clamp-3 ">Description: </span> */}
              {course.description}
            </div>
            <div className="text-center pt-3">
              <span className="font-bold text-slate-800">Instructor : </span>
              {course.instructor}
            </div>
            <div className="text-center  text-green-500 font-bold rounded-2xl p-3">
              {course.enrollmentStatus[0]}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CourseList;
