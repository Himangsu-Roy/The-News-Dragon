import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment/moment";
import { Container, Button } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { useContext } from "react";
import { AuthContex } from "../../../providers/AuthProvider";

const Header = () => {

  const {user} = useContext(AuthContex)

  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favor</small>
        </p>
        <p>{moment().format("dddd, MMMM DD, YYYY")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger" speed={50}>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;
