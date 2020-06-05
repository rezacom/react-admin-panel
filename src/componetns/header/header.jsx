import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import PersonIcon from "@material-ui/icons/Person";

export default function Header() {
  const [openSideState, setOpenSideState] = useState(false);
  const [dropdwonOpenState, setDropdwonOpenState] = useState(false);
  
  const handleClickBtn = () => {
    document.getElementById("side").classList.toggle("side-active");
    // console.log(document.getElementsByClassName('side'));
    [...document.querySelectorAll(".side__nav-item")].map((item) => {
      item.classList.toggle("side__nav-item-hover");
    });

    if (document.getElementById("side").classList.contains("side-active"))
      setOpenSideState(true);
    else setOpenSideState(false);
  };

  // const handleDropdownClick = (e) => {
  //   // if(e.target.id)
  //   // console.log(e.target.id)
  //   const element = document.getElementById('userDropDown');
  //   element.classList.add('header__btns-user__dropdown-open')

  // }

  function handleToggleClass() {
    document.getElementById("userDropDown").classList.toggle("dropdown-open");

 

  };

  

  // window.addEventListener('mouseup', function(event){
  //   const checkClass = document.getElementById("userDropDown").classList.contains("dropdown-open")

  //   if (checkClass && event.target.id !== checkClass.id && checkClass.id === 'userDropDown1' && checkClass.id === 'userDropDown2') {
  //     document.getElementById("userDropDown").classList.remove("dropdown-open");
  //   };
  // })

   

  
 



  return (
    <div className="header">
      <div className="col-12" style={{ height: "100%" }}>
        <div className="row" style={{ height: "100%" }}>
          <div className="col-2">
            <div className="header__sidebtn">
              <button className="header__sidebtn-btn" onClick={handleClickBtn}>
                {!openSideState ? <MenuIcon /> : <CloseIcon />}
              </button>
            </div>
          </div>
          <div className="col-10">
            <div className="header__btns">
              <div className="header__btns-user">
                <a
                  href="#"
                  id="userDropDownBtn"
                  className="dropbtn"
                  onClick={() => handleToggleClass()}
                >
                  <PersonIcon />
                </a>
                <div className="header__btns-user__dropdown" id="userDropDown">
                  <ul>
                    <li><a href="#" id="userDropDown2">profile</a></li>
                    <li><a href="#" id="userDropDown3">setting</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
