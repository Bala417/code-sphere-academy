import { React, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { db, auth } from "../config/firebase";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const CourseDetailsPage = () => {
  const [courseDetail, setCourseDetail] = useState([]);
  const { courseId } = useParams();
  const courseRef = collection(db, "courseDetails");
  const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    const getCourseList = async () => {
      try {
        const data = await getDocs(courseRef);

        const courses = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setCourseDetail(courses.filter((course) => course.id === courseId));
      } catch (err) {
        console.error(err);
      }
    };

    getCourseList();
  }, []);

  const handleEnroll = async () => {
    try {
      if (!isLoggedIn) {
        toast.info("Login to Enroll", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        // navigate("/loginPage");
      } else {
        const updateStudent = doc(db, "courseDetails", courseId);
        await updateDoc(updateStudent, {
          students: arrayUnion({
            name: auth.currentUser.displayName,
            email: auth.currentUser.email,
          }),
        });
        toast.success("You have enrolled successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleLikes = async () => {
    try {
      if (!isLoggedIn) {
        toast.info("Login to like the course", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } else {
        const updateLikes = doc(db, "courseDetails", courseId);
        const courseDoc = await getDoc(updateLikes);
        const currentLikes = courseDoc.data().likes || 0;

        await updateDoc(updateLikes, {
          likes: currentLikes + 1,
        });
        toast.success("Liked", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (courseDetail.length === 0) {
    return <div>Loading..</div>;
  }

  return (
    <div className="m-5 flex flex-col md:w-1/2 md:justify-center md:m-auto md:shadow-lg  md:text-lg">
      {courseDetail.map((course, index) => {
        return (
          <div key={course.id} className="p-5 container md:flex md:flex-col   ">
            <div className="md:m-auto">
              <img src={course.thumbnail} width={500} />
            </div>
            <div className="pt-3 font-bold text-center pb-2 font-lg">
              {course.name}
            </div>
            <div className="pb-3">{course.description}</div>
            <div>
              <span className="font-semibold mt-3">Instructor:</span>{" "}
              {course.instructor}
            </div>
            <div className="mb-3">
              <span className="font-semibold">Timing: </span>
              {course.duration}
            </div>
            <div className="pb-2">
              <p className="font-semibold">Prerequisites</p>
              <div className="md:w-1/2">
                {course.prerequisites.map((data, index) => {
                  return (
                    <ol key={index}>
                      <li className="list-disc ml-5">{data}</li>
                    </ol>
                  );
                })}
              </div>
            </div>
            <div>{course.schedule}</div>

            <div className="md:mb-5">
              <span className="font-semibold ">Mode :</span>
              {course.location}
            </div>

            <div>
              <div className="font-bold text-lg mt-5 bg-slate-200  md:m-auto">
                Syllabus
              </div>
              <div>
                {course.syllabus.map((item, index) => {
                  return (
                    <div className="   md:m-auto" key={index}>
                      <div className="py-2 font-bold bg-slate-100">
                        Week - {item.week}
                      </div>
                      <div className="font-semibold">{item.topic}</div>
                      <div className="pb-3">{item.content}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <button
        onClick={handleEnroll}
        className="bg-slate-800 text-slate-200 text-lg p-2 mb-3 rounded"
      >
        Enroll
      </button>
      <button
        onClick={handleLikes}
        className="bg-slate-800  text-lg text-red-500  p-2 mb-3 rounded"
      >
        ❤️ Like
      </button>
    </div>
  );
};

export default CourseDetailsPage;
