import React, {useState} from "react";
import "./index.css";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {editProfile} from "../profile/profile-reducer";


const EditProfile = () => {
  const profile = useSelector(state => state.profile);
  let [name, setName] = useState(`${profile.firstName} ${profile.lastName}`);
  let [profileBio, setProfileBio] = useState("" + profile.bio);
  let [profileLocation, setProfileLocation] = useState("" + profile.location);
  let [profileWebsite, setProfileWebsite] = useState("" + profile.website);
  let [isBirthDateEdit, setIsBirthDateEdit] = useState(false);
  let [profileBirthDate, setProfileBirthDate] = useState("" + profile.dateOfBirth)
  const dispatch = useDispatch();

  const saveEditsHandler = () => {
    const nameSplit = name.split(" ");
    const newProfile = {
      firstName: nameSplit[0],
      lastName: nameSplit.length !== 1 ? nameSplit[nameSplit.length - 1] : "",
      bio: profileBio,
      location: profileLocation,
      website: profileWebsite,
      dateOfBirth: profileBirthDate
    }
    dispatch(editProfile(newProfile));
  }

  return (
    <div className="border rounded">
      <div className="row align-items-center">
        <div className="col-1">
          <Link to="/tuiter/profile" className="btn"><i className="bi bi-x-lg"></i></Link>
        </div>
        <div className="col-9 mb-1">
          <div className="fw-bolder">Edit profile</div>
        </div>
        <div className="col-2 mb-1">
          <Link to="/tuiter/profile" className="btn btn-outline-dark float-end rounded-pill fw-bolder
              mt-2 mb-2 me-2 px-3" onClick={() => saveEditsHandler()}>Save</Link>
        </div>
      </div>
        <div className="position-relative">
          <img src={`/images/${profile.bannerPicture}`} className="w-100"/>
          <img className="rounded-circle position-absolute wd-profile-picture-nudge-down"
               src={`/images/${profile.profilePicture}`} width={130}/>
        </div>
        <div className="ms-3 me-3 position-relative wd-profile-info-nudge-down">
          <form className="form-floating mb-3">
            <input className="form-control" id="floatingInputName" value={name}
                   onChange={(e) => setName(e.target.value)}/>
            <label htmlFor="floatingInputName">Name</label>
          </form>

          <form className="form-floating mb-3">
            <textarea className="form-control" id="floatingInputBio" value={profileBio}
                   onChange={(e) => setProfileBio(e.target.value)}/>
            <label htmlFor="floatingInputBio">Bio</label>
          </form>

          <form className="form-floating mb-3">
            <input className="form-control" id="floatingInputLocation" value={profileLocation}
                   onChange={(e) => setProfileLocation(e.target.value)}/>
            <label htmlFor="floatingInputLocation">Location</label>
          </form>

          <form className="form-floating mb-3">
            <input className="form-control" id="floatingInputWebsite" value={profileWebsite}
                   onChange={(e) => setProfileWebsite(e.target.value)}/>
            <label htmlFor="floatingInputWebsite">Website</label>
          </form>

          <label className="small fw-bolder ms-1 text-secondary" htmlFor="inputBirthDate">Birth date</label> &bull;
          <button className="btn btn-link text-decoration-none small p-0 ms-1 mb-1" onClick={() => setIsBirthDateEdit(!isBirthDateEdit)}>Edit</button>
          {isBirthDateEdit
            ? <input type="date" id="inputBirthDate" className="form-control ms-1"
                     value={new Date(profileBirthDate).toLocaleDateString("en-CA", {timeZone: 'UTC'})}
                     onChange={(e) => setProfileBirthDate(e.target.value)}/>
            : <div className="ms-1">{new Date(profileBirthDate).toLocaleDateString("en-US", {
                timeZone: 'UTC',
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}</div>}

          <div className="ms-1 mt-3 pb-3">
            Switch to professional
            <i className="bi bi-chevron-right float-end"></i>
          </div>
        </div>
      </div>
  );
};
export default EditProfile;