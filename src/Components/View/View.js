import React,{useEffect,useState,useContext} from 'react';


import './View.css';
import { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/FirebaseContext';

function View() {
const [userDetails, setUserDetails] = useState(null)
const { postDetails } = useContext(PostContext);
const {firebase} = useContext(FirebaseContext)


useEffect(() => {
  if (postDetails && postDetails.userId) {
    const { userId } = postDetails;
    console.log(userId);
    firebase
      .firestore()
      .collection("users")
      .where("id", "==", userId)
      .get()
      .then((res) => {
        res.forEach((doc) => {
          setUserDetails(doc.data());
        });
      })
      .catch((error) => {
        console.log("Error getting user details:", error);
      });
  }
}, [postDetails, firebase]);

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        {postDetails && <img src={postDetails.url} alt="" />}
      </div>
      <div className="rightSection">
        {postDetails && (
          <div className="productDetails">
            <p>&#x20B9; {postDetails.price} </p>
            <span>{postDetails.name}</span>
            <p>{postDetails.category}</p>
            <span>{postDetails.createdAt}</span>
          </div>
        )}
        {userDetails && (
          <div className="contactDetails">
            <h1 style={{ fontWeight: 800 }}>Owner</h1>
            <p> <i>Name : </i> <i>{userDetails.username}</i></p>
            

            <p>
              
              <i>mobile: </i>
              {userDetails.phone}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
export default View;


// useEffect(() => {
//    const {userId} = postDetails
//   console.log("hello");
//   firebase
//     .firestore()
//     .collection("users")
//     .where("id", "==", userId)
//     .get()
//     .then((res) => {
//       res.forEach((doc) => {
//         setUserDetails(doc.data());
//       });
//     })
//     .catch((error) => {
//       console.log("Error getting user details:", error);
//     });
// }, [postDetails, firebase]);