import React from 'react';
import './Layout.css';
import { FaHome, FaFire, FaUsers, FaHistory, FaBookmark, FaCogs, FaPlusCircle, FaLanguage, FaPalette, FaSpellCheck, FaQuestionCircle, FaRegCommentDots } from 'react-icons/fa';

const Layout = () => {
  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <span className="logo">College</span>
        </div>
        {/* <ul className="sidebar-menu">
          <li><a href="#home"><FaHome /> Home</a></li>
        </ul> */}
        <div className="sidebar-separator">Explore</div>
        <ul className="sidebar-marketing">
          <li><a href="#product"><FaFire /> Trending</a></li>
          <li><a href="#emails"><FaUsers /> Culturals</a></li>
          <li><a href="#integration"><FaPlusCircle /> Webinar</a></li>
          <li><a href="#contacts"><FaUsers /> Jobs</a></li>
        </ul>
        <div className="sidebar-separator">Myself</div>
        <ul className="sidebar-favorites">
          <li><a href="#opportunity"><FaHistory /> History</a></li>
          <li><a href="#metrics"><FaBookmark /> Bookmarks</a></li>
        </ul>
        <div className="sidebar-separator">Settings</div>
        <ul className="sidebar-marketing">
          <li><a href="#appearance"><FaCogs /> Appearance & Accessibility</a></li>
          <li><a href="#language"><FaLanguage /> Language</a></li>
          <li><a href="#theme"><FaPalette /> Theme</a></li>
          <li><a href="#spellcheck"><FaSpellCheck /> Spell Check</a></li>
          <li><a href="#report"><FaHistory /> Report History</a></li>
          <li><a href="#help"><FaQuestionCircle /> Help</a></li>
          <li><a href="#feedback"><FaRegCommentDots /> Send Feedback</a></li>
        </ul>
        <div className="sidebar-separator">Create</div>
        <ul className="sidebar-marketing">
          <li><a href="#webinar"><FaPlusCircle /> Webinar</a></li>
          <li><a href="#hackathon"><FaUsers /> Hackathon</a></li>
          <li><a href="#culturals"><FaFire /> Culturals</a></li>
        </ul>
      </aside>

      {/* sri changes */}
      {/* sri changes */}
      {/* sri changes */}

      <main className="main-content">
        <div className="navbar">
          <input className="navbar-search" type="text" placeholder="Search Settings" />
          <button className="navbar-save">Save Changes</button>
          <button className="navbar-cancel">Cancel</button>
        </div>
        <div className="content">
          <h1>Billing & Subscription</h1>
          <p>Keep track of your subscription details, update billing information, and control your account's payment method.</p>
        </div>
      </main>
    </div>
  );
};

export default Layout;
