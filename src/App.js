import React, { useState } from "react";
import "./BusinessCard.css";

function App() {

  const [isFollowed1, setIsFollowed1] = useState(false);
  const [isFollowed2, setIsFollowed2] = useState(false);
  const [isFollowed3, setIsFollowed3] = useState(false);
  const [isFollowed4, setIsFollowed4] = useState(false);
  const [isFollowed5, setIsFollowed5] = useState(false);
  const [isFollowed6, setIsFollowed6] = useState(false);
  const [isFollowed7, setIsFollowed7] = useState(false);
  const [isFollowed8, setIsFollowed8] = useState(false);
  const [isFollowed9, setIsFollowed9] = useState(false);
  const [isFollowed10, setIsFollowed10] = useState(false);


  const [followText1, setFollowText1] = useState("Unfollow");
  const [followText2, setFollowText2] = useState("Unfollow");
  const [followText3, setFollowText3] = useState("Unfollow");
  const [followText4, setFollowText4] = useState("Unfollow");
  const [followText5, setFollowText5] = useState("Unfollow");
  const [followText6, setFollowText6] = useState("Unfollow");
  const [followText7, setFollowText7] = useState("Unfollow");
  const [followText8, setFollowText8] = useState("Unfollow");
  const [followText9, setFollowText9] = useState("Unfollow");
  const [followText10, setFollowText10] = useState("Unfollow");



  const handleFollowToggle1 = () => {
    setIsFollowed1((prevIsFollowed) => !prevIsFollowed);
    setFollowText1((prevText) => (prevText === "Follow" ? "Unfollow" : "Follow"));
  };
  const handleFollowToggle2 = () => {
    setIsFollowed2((prevIsFollowed) => !prevIsFollowed);
    setFollowText2((prevText) => (prevText === "Follow" ? "Unfollow" : "Follow"));
  };
  const handleFollowToggle3 = () => {
    setIsFollowed3((prevIsFollowed) => !prevIsFollowed);
    setFollowText3((prevText) => (prevText === "Follow" ? "Unfollow" : "Follow"));
  };
  const handleFollowToggle4 = () => {
    setIsFollowed4((prevIsFollowed) => !prevIsFollowed);
    setFollowText4((prevText) => (prevText === "Follow" ? "Unfollow" : "Follow"));
  };
  const handleFollowToggle5 = () => {
    setIsFollowed5((prevIsFollowed) => !prevIsFollowed);
    setFollowText5((prevText) => (prevText === "Follow" ? "Unfollow" : "Follow"));
  };
  const handleFollowToggle6 = () => {
    setIsFollowed6((prevIsFollowed) => !prevIsFollowed);
    setFollowText6((prevText) => (prevText === "Follow" ? "Unfollow" : "Follow"));
  };
  const handleFollowToggle7 = () => {
    setIsFollowed7((prevIsFollowed) => !prevIsFollowed);
    setFollowText7((prevText) => (prevText === "Follow" ? "Unfollow" : "Follow"));
  };
  const handleFollowToggle8 = () => {
    setIsFollowed8((prevIsFollowed) => !prevIsFollowed);
    setFollowText8((prevText) => (prevText === "Follow" ? "Unfollow" : "Follow"));
  };
  const handleFollowToggle9 = () => {
    setIsFollowed9((prevIsFollowed) => !prevIsFollowed);
    setFollowText9((prevText) => (prevText === "Follow" ? "Unfollow" : "Follow"));
  };
  const handleFollowToggle10 = () => {
    setIsFollowed10((prevIsFollowed) => !prevIsFollowed);
    setFollowText10((prevText) => (prevText === "Follow" ? "Unfollow" : "Follow"));
  };


  const [isDeleted1, setIsDeleted1] = useState(false);
  const [isDeleted2, setIsDeleted2] = useState(false);
  const [isDeleted3, setIsDeleted3] = useState(false);
  const [isDeleted4, setIsDeleted4] = useState(false);
  const [isDeleted5, setIsDeleted5] = useState(false);
  const [isDeleted6, setIsDeleted6] = useState(false);
  const [isDeleted7, setIsDeleted7] = useState(false);
  const [isDeleted8, setIsDeleted8] = useState(false);
  const [isDeleted9, setIsDeleted9] = useState(false);
  const [isDeleted10, setIsDeleted10] = useState(false);

  const handleDelete1 = () => {
    setIsDeleted1(true);
  };

  const handleDelete2 = () => {
    setIsDeleted2(true);
  };

  const handleDelete3 = () => {
    setIsDeleted3(true);
  };

  const handleDelete4 = () => {
    setIsDeleted4(true);
  };

  const handleDelete5 = () => {
    setIsDeleted5(true);
  };

  const handleDelete6 = () => {
    setIsDeleted6(true);
  };

  const handleDelete7 = () => {
    setIsDeleted7(true);
  };

  const handleDelete8 = () => {
    setIsDeleted8(true);
  };

  const handleDelete9 = () => {
    setIsDeleted9(true);
  };

  const handleDelete10 = () => {
    setIsDeleted10(true);
  };

  return (
    <div className="screen">
      {!isDeleted1 && (
        <div className="Card">
          <div className="top">
            <div className="purple">SM</div>
            <div className="top-text">
              <p>Sahil Mishra</p>
            </div>
          </div>

          <div className="middle">
            <p><a href="mailto:sahilmishra1408@gmail.com">sahilmishra1408@gmail.com</a></p>
            <p><a href="tel: +91-74-3957-14-62">+91-74-3957-14-62</a></p>
            <p><a href="https://sahilmishra.org">sahilmishra.org</a></p>
          </div>

          <div className="button-container">
          <button className={isFollowed1 ? "selected" : ""} onClick={handleFollowToggle1}>{followText1}</button>
            <button onClick={handleDelete1}>Delete</button>
          </div>
        </div>
      )}

     {!isDeleted2 && (
        <div className="Card">
          <div className="top">
            <div className="blue">EH</div>
            <div className="top-text">
              <p>Ervin Howell</p>
            </div>
          </div>

          <div className="middle">
            <p><a href="mailto:sahilmishra1408@gmail.com">sahilmishra1408@gmail.com</a></p>
            <p><a href="tel: +91-74-3957-14-62">+91-74-3957-14-62</a></p>
            <p><a href="https://sahilmishra.org">sahilmishra.org</a></p>
          </div>

          <div className="button-container">
          <button className={isFollowed2 ? "selected" : ""} onClick={handleFollowToggle2}>{followText2}</button>
            <button onClick={handleDelete2}>Delete</button>
          </div>
        </div>
      )}

       {!isDeleted3 && (
        <div className="Card">
          <div className="top">
            <div className="purple">CB</div>
            <div className="top-text">
              <p>Clementine Bauch</p>
            </div>
          </div>

          <div className="middle">
            <p><a href="mailto:sahilmishra1408@gmail.com">sahilmishra1408@gmail.com</a></p>
            <p><a href="tel: +91-74-3957-14-62">+91-74-3957-14-62</a></p>
            <p><a href="https://sahilmishra.org">sahilmishra.org</a></p>
          </div>

          <div className="button-container">
          <button className={isFollowed3 ? "selected" : ""} onClick={handleFollowToggle3}>{followText3}</button>
            <button onClick={handleDelete3}>Delete</button>
          </div>
        </div>
      )}

      {!isDeleted4 && (
        <div className="Card">
          <div className="top">
            <div className="orange">PL</div>
            <div className="top-text">
              <p>Patricia Lebsack</p>
            </div>
          </div>

          <div className="middle">
            <p><a href="mailto:sahilmishra1408@gmail.com">sahilmishra1408@gmail.com</a></p>
            <p><a href="tel: +91-74-3957-14-62">+91-74-3957-14-62</a></p>
            <p><a href="https://sahilmishra.org">sahilmishra.org</a></p>
          </div>

          <div className="button-container">
          <button className={isFollowed4 ? "selected" : ""} onClick={handleFollowToggle4}>{followText4}</button>
            <button onClick={handleDelete4}>Delete</button>
          </div>
        </div>
      )}

      {!isDeleted5 && (
        <div className="Card">
          <div className="top">
            <div className="orange">CD</div>
            <div className="top-text">
              <p>Chelsey Dietrich</p>
            </div>
          </div>

          <div className="middle">
            <p><a href="mailto:sahilmishra1408@gmail.com">sahilmishra1408@gmail.com</a></p>
            <p><a href="tel: +91-74-3957-14-62">+91-74-3957-14-62</a></p>
            <p><a href="https://sahilmishra.org">sahilmishra.org</a></p>
          </div>

          <div className="button-container">
          <button className={isFollowed5 ? "selected" : ""} onClick={handleFollowToggle5}>{followText5}</button>
            <button onClick={handleDelete5}>Delete</button>
          </div>
        </div>
      )}

      {!isDeleted6 && (
        <div className="Card">
          <div className="top">
            <div className="red">MS</div>
            <div className="top-text">
              <p>Mrs. Dennis Schulist</p>
            </div>
          </div>

          <div className="middle">
            <p><a href="mailto:sahilmishra1408@gmail.com">sahilmishra1408@gmail.com</a></p>
            <p><a href="tel: +91-74-3957-14-62">+91-74-3957-14-62</a></p>
            <p><a href="https://sahilmishra.org">sahilmishra.org</a></p>
          </div>

          <div className="button-container">
          <button className={isFollowed6 ? "selected" : ""} onClick={handleFollowToggle6}>{followText6}</button>
            <button onClick={handleDelete6}>Delete</button>
          </div>
        </div>
      )}

      {!isDeleted7 && (
        <div className="Card">
          <div className="top">
            <div className="orange">KW</div>
            <div className="top-text">
              <p>Kurtis Weissnat</p>
            </div>
          </div>

          <div className="middle">
            <p><a href="mailto:sahilmishra1408@gmail.com">sahilmishra1408@gmail.com</a></p>
            <p><a href="tel: +91-74-3957-14-62">+91-74-3957-14-62</a></p>
            <p><a href="https://sahilmishra.org">sahilmishra.org</a></p>
          </div>

          <div className="button-container">
          <button className={isFollowed7 ? "selected" : ""} onClick={handleFollowToggle7}>{followText7}</button>
            <button onClick={handleDelete7}>Delete</button>
          </div>
        </div>
      )}


     {!isDeleted8 && (
        <div className="Card">
          <div className="top">
            <div className="purple">NV</div>
            <div className="top-text">
              <p>Nicholas Runolfsdottir V</p>
            </div>
          </div>

          <div className="middle">
            <p><a href="mailto:sahilmishra1408@gmail.com">sahilmishra1408@gmail.com</a></p>
            <p><a href="tel: +91-74-3957-14-62">+91-74-3957-14-62</a></p>
            <p><a href="https://sahilmishra.org">sahilmishra.org</a></p>
          </div>

          <div className="button-container">
          <button className={isFollowed8 ? "selected" : ""} onClick={handleFollowToggle8}>{followText8}</button>
            <button onClick={handleDelete8}>Delete</button>
          </div>
        </div>
      )}


     {!isDeleted9 && (
        <div className="Card">
          <div className="top">
            <div className="red">GR</div>
            <div className="top-text">
              <p>Glenna Reichert</p>
            </div>
          </div>

          <div className="middle">
            <p><a href="mailto:sahilmishra1408@gmail.com">sahilmishra1408@gmail.com</a></p>
            <p><a href="tel: +91-74-3957-14-62">+91-74-3957-14-62</a></p>
            <p><a href="https://sahilmishra.org">sahilmishra.org</a></p>
          </div>

          <div className="button-container">
          <button className={isFollowed9 ? "selected" : ""} onClick={handleFollowToggle9}>{followText9}</button>
            <button onClick={handleDelete9}>Delete</button>
          </div>
        </div>
      )}


      {!isDeleted10 && (
        <div className="Card">
          <div className="top">
            <div className="orange">CD</div>
            <div className="top-text">
              <p>Clementina DuBuque</p>
            </div>
          </div>

          <div className="middle">
            <p><a href="mailto:sahilmishra1408@gmail.com">sahilmishra1408@gmail.com</a></p>
            <p><a href="tel: +91-74-3957-14-62">+91-74-3957-14-62</a></p>
            <p><a href="https://sahilmishra.org">sahilmishra.org</a></p>
          </div>

          <div className="button-container">
          <button className={isFollowed10 ? "selected" : ""} onClick={handleFollowToggle10}>{followText10}</button>
            <button onClick={handleDelete10}>Delete</button>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
