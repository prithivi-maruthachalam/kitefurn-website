import React, { Component, createRef } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

import dropArrow from "../media/icons/icons8-triangle-arrow-96.png";
import homeIcon from "../media/icons/home-icon.png";
import mapIcon from "../media/icons/map_fat_orange.png";
import menuIcon from "../media/icons/menu.png";

import PhoneButton from "./utils/phoneNumber";

import "../styles/animations.css";
import "../styles/header.css";

const content = {
  home: {
    alt: "We design, manufacture and install furniture and interiors.",
  },
  arrow: {
    alt: "We are specialists in hotels, restaurants, bakeries, coffee shops and departmental store interior designs.",
  },
  map: {
    alt: "We are located at Singanallur, Coimbatore, tamilnadu, India.",
  },
  phA: {
    alt: "Call us to get free designs and a quote.",
  },
  phB: {
    alt: "Kite furn and Kite Kitchens has its display showroom at Coimbatore.",
  },
  menu: {
    alt: "Wooden staircase designs in Coimbatore.",
  },
};

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="site-header">
          <div className="col-head-box header-padding">
            {/* Logo */}

            <Link to="/">
              <button className="btn btn-logo mx-2-5" />
            </Link>
            <div className="col-head header-left">
              <WrappedNav />
              <CollapsibleCustomMenu className="mx-2-5 header-button-base hover-flip">
                Customized Interiors
                <img
                  className="top-btn-arrow"
                  src={dropArrow}
                  alt={content.arrow.alt}
                />
              </CollapsibleCustomMenu>
            </div>

            {/* Location */}
            <div className="col-head header-right">
              <div className="nav-container">
                <CollapsibleMenu />
              </div>

              {/* Phone number */}
              <div className="phn-container">
                <PhoneButton
                  employeeName="Sajeesh"
                  employeeNumber="8940401792"
                  alt={content.phA.alt}
                  className="mx-2-5 call-btn-pad call-btn-A"
                />
              </div>
              <div className="phn-container-1">
                <PhoneButton
                  employeeName="Prabhu"
                  employeeNumber="8940401793"
                  alt={content.phB.alt}
                  className="mx-2-5 call-btn-pad call-btn-A"
                />
              </div>
              <a href="https://goo.gl/maps/u4nzcxS5XatMFXyA7" target="_blank">
                <button className="header-button-base map-button">
                  <img
                    src={mapIcon}
                    alt={content.map.alt}
                    className="map-icon hover-shake"
                  />
                </button>
              </a>
            </div>
          </div>
          <div className="hr-line mx-5-ish" />
        </div>
      </div>
    );
  }
}

class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.classNameList = [
      "mx-2-5 btn-nav header-button-base",
      "mx-2-5 btn-nav header-button-base",
      "mx-2-5 btn-nav header-button-base",
    ];
    this.state = {
      baseClassList: "mx-2-5 btn-nav header-button-base",
      classnameslist: this.classNameList,
    };

    this.pathsList = ["/", "/customInteriors", "/modularKitchens"];
  }

  navSwitch = (index) => {
    var i = 0;
    this.classNameList[index] += " btn-nav-target";
    for (; i < this.classNameList.length; i++) {
      if (i !== index) {
        this.classNameList[i] = this.state.baseClassList;
      }
    }
    this.setState({ classnameslist: this.classNameList });
  };

  componentDidUpdate() {
    console.log(window.location.href);
    console.log(this.pathsList);

    let index;
    if (window.location.href.indexOf("/customInteriors/#residence") !== -1) {
      index = 1;
    } else if (window.location.href.indexOf("/customInteriors") !== -1) {
      // do nothing
    } else if (window.location.href.indexOf("/modularKitchens") !== -1) {
      index = 2;
    } else {
      index = 0;
    }

    // let index = this.pathsList.indexOf(this.props.location.pathname);
    if (index === this.currentIndex) return;

    this.currentIndex = index;
    this.navSwitch(index);
  }

  componentDidMount() {
    console.log(window.location.href);
    console.log(this.pathsList);

    let index;
    if (window.location.href.indexOf("/customInteriors/#residence") !== -1) {
      index = 1;
    } else if (window.location.href.indexOf("/customInteriors") !== -1) {
      // do nothing
    } else if (window.location.href.indexOf("/modularKitchens") !== -1) {
      index = 2;
    } else {
      index = 0;
    }

    // let index = this.pathsList.indexOf(this.props.location.pathname);
    if (index === this.currentIndex) return;

    this.currentIndex = index;
    this.navSwitch(index);
  }

  render() {
    return (
      <span>
        <Link to="/" className="resp-block">
          <button
            className={this.state.classnameslist[0]}
            onClick={() => this.navSwitch(0)}
          >
            <img
              className="top-btn-img-home"
              src={homeIcon}
              alt={content.home.alt}
            />
          </button>
        </Link>

        <a
          href="/customInteriors/#residence"
          className="resp-block"
          id="res-nav-btn-id"
        >
          <button
            className={this.state.classnameslist[1]}
            onClick={() => this.navSwitch(1)}
          >
            Residence Interiors
          </button>
        </a>

        <a href="http://www.kitekitchens.com/" className="resp-block">
          <button
            className={this.state.classnameslist[2]}
            onClick={() => this.navSwitch(2)}
          >
            Modular Kitchens
          </button>
        </a>
      </span>
    );
  }
}
// const WrappedNav = withRouter(NavMenu);
const WrappedNav = NavMenu;

class CollapsibleMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleClass: "coll-nav-container",
      inProp: false,
    };

    this.toggleCount = 0;
    this.wrapperRef = createRef(null);
  }

  // componentDidMount() {
  //   window.addEventListener("click", (event) => {
  //     if (
  //       this.wrapperRef.current &&
  //       !this.wrapperRef.current.contains(event.target)
  //     ) {
  //       this.setState({ inProp: false });
  //     }
  //   });
  // }

  render() {
    return (
      <span className="coll-nav">
        <button
          ref={this.wrapperRef}
          className="header-button-base menu-button"
          onClick={() => {
            this.setState({ inProp: !this.state.inProp });
          }}
        >
          <img
            src={menuIcon}
            alt={content.menu.alt}
            className="map-icon hover-shake"
          />
        </button>
        <CSSTransition
          in={this.state.inProp}
          timeout={50}
          unmountOnExit
          classNames="coll-menu-drop"
        >
          <div className={this.state.toggleClass}>
            <div className="menu-top">
              <div className="menu-title">Menu</div>
              <div
                className="menu-title menu-close"
                onClick={() => {
                  this.setState({ inProp: false });
                }}
              >
                X
              </div>
            </div>
            <WrappedNav />
            <CustomMenu className="mx-2-5 header-button-base hover-flip resp-block">
              Customized Interiors
              <img
                className="top-btn-arrow"
                src={dropArrow}
                alt={content.arrow.alt}
              />
            </CustomMenu>
          </div>
        </CSSTransition>
      </span>
    );
  }
}

class CustomMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inProp: false,
      classNames: this.props.className + " btn-nav-inactive",
    };

    this.wrapperRef = createRef(null);
  }

  // componentDidMount() {
  //   window.addEventListener("click", this.handleClickOutside);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("click", this.handleClickOutside);
  // }

  // handleClickOutside = (event) => {
  //   if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
  //     this.setState({
  //       inProp: false,
  //       classNames:
  //         this.props.location?.pathname === "/customInteriors"
  //           ? this.props.className + " btn-nav-active"
  //           : this.props.className + " btn-nav-inactive",
  //     });
  //   }
  // };

  switchIn = () => {
    this.setState({
      inProp: !this.state.inProp,
      classNames: this.state.inProp
        ? this.props.className + " btn-nav-inactive"
        : this.props.className + " btn-nav-active",
    });
  };

  render() {
    return (
      <span className="dropdown-container" ref={this.wrapperRef}>
        <button className={this.state.classNames} onClick={this.switchIn}>
          {this.props.children}
        </button>

        <CSSTransition
          in={this.state.inProp}
          timeout={500}
          unmountOnExit
          classNames="menu-drop"
        >
          <div className="menu-drop-internal text-center">
            <div className="menu-drop-buttons-container">
              <a href="/customInteriors/#hotels">
                <button
                  className="btn btn-light btn-sub-nav"
                  onClick={() => {
                    this.setState({ inProp: false });
                  }}
                >
                  Hotel Interiors
                </button>
              </a>

              <a href="/customInteriors/#eateries">
                <button
                  className="btn btn-light btn-sub-nav"
                  onClick={() => {
                    this.setState({ inProp: false });
                  }}
                >
                  Bakeries
                </button>
              </a>

              <a href="/customInteriors/#retails">
                <button
                  className="btn btn-light btn-sub-nav"
                  onClick={() => {
                    this.setState({ inProp: false });
                  }}
                >
                  Departmentals Stores
                </button>
              </a>

              <a href="/customInteriors/#halls">
                <button
                  className="btn btn-light btn-sub-nav"
                  onClick={() => {
                    this.setState({ inProp: false });
                  }}
                >
                  Banquet &#38; Meeting Halls
                </button>
              </a>

              <a href="/customInteriors/#offices">
                <button
                  className="btn btn-light btn-sub-nav"
                  onClick={() => {
                    this.setState({ inProp: false });
                  }}
                >
                  Offices
                </button>
              </a>

              <Link to="/customInteriors">
                <button
                  className="btn btn-light btn-sub-nav"
                  onClick={() => {
                    this.setState({ inProp: false });
                  }}
                >
                  View More
                </button>
              </Link>
            </div>
          </div>
        </CSSTransition>
      </span>
    );
  }
}

// const CollapsibleCustomMenu = withRouter(CustomMenu);
const CollapsibleCustomMenu = CustomMenu;

export default Header;
