import { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  ButtonGroup,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";

const propTypes = {
  raiseHand: PropTypes.func.isRequired,
};

const Controls = ({ raiseHand }) => {
  const [currentCamera, setCurrentCamera] = useState(1);
  const [currentMic, setCurrentMic] = useState(1);
  const [isRecording, setIsRecording] = useState(false);

  return (
    <div className="controls">
      <div className="controls__cell">
        <Button color="danger">
          <i class="fas fa-sign-out-alt fa-flip-horizontal"></i> Leave
        </Button>
        <Button
          color="warning"
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
      <div className="controls__cell">
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

        <UncontrolledDropdown>
          <DropdownToggle color="dark" caret>
            <i class="fas fa-door-open"></i> Enter Sidebar
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem header>Enter Sidebar 1</DropdownItem>
            <DropdownItem header>Enter Sidebar 2</DropdownItem>
            <DropdownItem header>Enter Sidebar 3</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown>
          <DropdownToggle color="info" caret>
            Select Device
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem header>Camera</DropdownItem>
            <DropdownItem onClick={() => setCurrentCamera(1)}>
              <span style={{ visibility: currentCamera !== 1 && "hidden" }}>
                ✓
              </span>{" "}
              <i class="fas fa-video"></i> Front Camera
            </DropdownItem>
            <DropdownItem onClick={() => setCurrentCamera(2)}>
              <span style={{ visibility: currentCamera !== 2 && "hidden" }}>
                ✓
              </span>{" "}
              <i class="fas fa-video"></i> Back Camera
            </DropdownItem>
            <DropdownItem header>Microphone</DropdownItem>
            <DropdownItem onClick={() => setCurrentMic(1)}>
              <span style={{ visibility: currentMic !== 1 && "hidden" }}>
                ✓
              </span>{" "}
              <i class="fas fa-microphone-alt"></i> Built-in Microphone
            </DropdownItem>
            <DropdownItem onClick={() => setCurrentMic(2)}>
              <span style={{ visibility: currentMic !== 2 && "hidden" }}>
                ✓
              </span>{" "}
              <i class="fas fa-microphone-alt"></i> Air Pods
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
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
