import { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  ButtonGroup,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from "reactstrap";

const propTypes = {
  raiseHand: PropTypes.func.isRequired,
};

const Controls = ({ raiseHand }) => {
  const [currentCamera, setCurrentCamera] = useState(1);
  const [currentMic, setCurrentMic] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="controls">
      <div className="controls__cell">
        <div>
          <Button
            color="warning"
            size="lg"
            onClick={() => {
              raiseHand(true);

              setTimeout(() => {
                raiseHand(false);
              }, 2000);
            }}
          >
            <i className="far fa-hand-paper"></i>
          </Button>
        </div>
      </div>
      <div className="controls__cell">
        <div>
          <Button
            color="white"
            onClick={() => setIsRecording(!isRecording)}
            style={{
              backgroundColor: isRecording && "crimson",
              color: isRecording && "white",
              transition: "color",
            }}
          >
            <i
              className="fas fa-circle"
              style={{ color: isRecording ? "white" : "crimson" }}
            ></i>{" "}
            Start Recording
          </Button>
        </div>
        <div
          style={{
            height: "100%",
            display: "flex",
            flexFlow: "column",
            alignItems: "center",
            fontSize: "0.75em",
          }}
        >
          <div>
            <i className="fas fa-user-secret"></i> Enter Sidebar
          </div>
          <ButtonGroup>
            <Button color="info">1</Button>
            <Button color="info">2</Button>
            <Button color="info">3</Button>
          </ButtonGroup>
        </div>
        <Dropdown isOpen={dropdownOpen} toggle={() => {}}>
          <DropdownToggle color="info" caret onClick={() => toggle()}>
            Select Device
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem header>Camera</DropdownItem>
            <DropdownItem onClick={() => setCurrentCamera(1)}>
              <span style={{ visibility: currentCamera !== 1 && "hidden" }}>
                ✓
              </span>{" "}
              🎥 Camera 1
            </DropdownItem>
            <DropdownItem onClick={() => setCurrentCamera(2)}>
              <span style={{ visibility: currentCamera !== 2 && "hidden" }}>
                ✓
              </span>{" "}
              🎥 Camera 2
            </DropdownItem>
            <DropdownItem header>Microphone</DropdownItem>
            <DropdownItem onClick={() => setCurrentMic(1)}>
              <span style={{ visibility: currentMic !== 1 && "hidden" }}>
                ✓
              </span>{" "}
              🎙 Built-in Microphone
            </DropdownItem>
            <DropdownItem onClick={() => setCurrentMic(2)}>
              <span style={{ visibility: currentMic !== 2 && "hidden" }}>
                ✓
              </span>{" "}
              🎙 Air Pods
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <div>
          <Button color="danger">
            End Deposition <i className="fas fa-times"></i>
          </Button>
        </div>
      </div>
    </div>
  );
};

Controls.propTypes = propTypes;

export default Controls;
