import React from "react";
import "./index.css";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
  const profile = useSelector(state => state.profile);

  return (
    <div className="border rounded">
      <div className="row align-items-center">
        <div className="col-1">
          <i className="bi bi-arrow-left-short wd-font-larger ps-2"></i>
        </div>
        <div className="col-11 mb-1">
          <div className="fw-bolder">{`${profile.firstName} ${profile.lastName}`}</div>
          <div className="text-secondary small">{`${profile.tuits} Tuits`}</div>
        </div>
      </div>
      <div className="position-relative">
        <img src={`/images/${profile.bannerPicture}`} className="w-100"/>
        <img className="rounded-circle position-absolute wd-profile-picture-nudge-down"
             src={`/images/${profile.profilePicture}`} width={130}/>
        <Link to="/tuiter/edit-profile" className="btn btn-outline-dark float-end rounded-pill fw-bolder
              mt-2 me-2">Edit profile</Link>
      </div>
      <div className="ms-3 me-3 position-relative wd-profile-info-nudge-down">
        <div className="fw-bolder">{`${profile.firstName} ${profile.lastName}`}</div>
        <div className="text-secondary">{profile.handle}</div>
        <div className="pt-2 overflow-auto">{profile.bio}</div>
      </div>
      <div className="row ms-3 me-3">
        <div className="col-auto text-secondary ps-0 me-2">
          <i className="bi bi-geo-alt pe-2"></i>
          {profile.location}
        </div>
        <div className="col-auto text-secondary ps-0 me-2">
          <i className="bi bi-balloon pe-2"></i>
          {`Born ${new Date(profile.dateOfBirth).toLocaleDateString("en-US", {
            timeZone: 'UTC',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })}`}
        </div>
        <div className="col-auto text-secondary ps-0 me-2">
          <i className="bi bi-calendar3 pe-2"></i>
          {`Joined ${new Date(
              parseInt(profile.dateJoined.split('/')[1]),
              parseInt(profile.dateJoined.split('/')[0]) - 1
          ).toLocaleDateString("en-US", {
            timeZone: 'UTC',
            month: 'long',
            year: 'numeric'
          })}`}
        </div>
        <div className="row mt-2 mb-3">
          <div className="col-auto ps-0">
            <span className="fw-bolder pe-1">{profile.followingCount}</span>
            <span className="text-secondary">Following</span>
          </div>
          <div className="col-auto ps-0">
            <span className="fw-bolder pe-1">{profile.followersCount}</span>
            <span className="text-secondary">Followers</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileComponent;