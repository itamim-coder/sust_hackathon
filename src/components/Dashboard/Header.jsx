import React from 'react'
import { FaForumbee } from 'react-icons/fa';
import useFirebase from '../../hooks/useFirebase';
import { Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./dashboard.css"
function Header() {
    const { user, logOut } = useFirebase();
    console.log(user);
    const imageClick = () => {
      console.log("click");
    };
    const ProfilePic = "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1666274295~exp=1666274895~hmac=0fb8a3a693608581b6bf002c04354b3fc84c6b8d2790137458e8eefba7d925cf"
    return (
        <>
            <div className="container-fluid d-flex justify-content-between align-items-center py-1 header-container">
                <a className="text-decoration-none text-white fs-4 fw-bold ms-4" href="/"><FaForumbee /> ErrandBee</a>
                <input className="form-control rounded-pill w-25" type="search" placeholder="Type to search" aria-label="Search" />
                <div className="btn-group dropstart">
                <Dropdown>
                    <Dropdown.Toggle variant="dark">
                      <img
                        onClick={() => imageClick()}
                        src={user?.photoURL}
                        width="50"
                        height="50"
                        style={{ borderRadius: "50px" }}
                      ></img>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>
                        {/* <NavLink
                          to="/dashboard"
                          className="fs-5 btn bg-white text-dark fs-6 fw-bold rounded-pill m-1"
                        >Dashboard</NavLink> */}
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="fs-5 btn bg-white text-dark fs-6 fw-bold rounded-pill m-1"
                        onClick={logOut}
                      >
                        Signout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
            </div>
        </>
    )
}

export default Header