import Nav from "react-bootstrap/Nav";
import pwa from "../pwa.svg";
import Container from "react-bootstrap/Container";

const Header = () => {
  return (
    <Container>
      <div className="d-flex align-items-center px-4 py-3">
        <img className="logo" src={pwa} alt="logo" />
        <Nav
          activeKey="/home"
          className="justify-content-end flex-fill "
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link className="text-white fs-5" href="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-white fs-5" eventKey="link-1">
              Link
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-white fs-5" eventKey="link-2">
              Link
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </Container>
  );
};

export default Header;
