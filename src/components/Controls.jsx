import { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  ButtonGroup,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  ButtonDropdown,
} from "reactstrap";

const propTypes = {
  raiseHand: PropTypes.func.isRequired,
};

const Controls = ({ raiseHand }) => {
  const [currentCamera, setCurrentCamera] = useState(1);
  const [currentMic, setCurrentMic] = useState(1);
  const [isRecording, setIsRecording] = useState(false);
  const [moreDropdownOpen, setMoreOpen] = useState(false);

  return (
    <div className="controls">
      <div className="controls__cell">
        <Button color="danger">
          <i className="fas fa-sign-out-alt fa-flip-horizontal"></i>
        </Button>

        <ButtonGroup>
          <Button outline color="light">
            <i className="fas fa-microphone-alt"></i>
          </Button>
          <Button outline color="light">
            <i className="fas fa-desktop"></i>
          </Button>
          <Button outline color="light">
            <i className="fas fa-video"></i>
          </Button>
          <ButtonDropdown
            isOpen={moreDropdownOpen}
            toggle={() => setMoreOpen(!moreDropdownOpen)}
          >
            <DropdownToggle color="light" outline caret>
              <i className="fas fa-ellipsis-v"></i>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Select Device</DropdownItem>
              <DropdownItem onClick={() => setCurrentCamera(1)}>
                <span style={{ visibility: currentCamera !== 1 && "hidden" }}>
                  ✓
                </span>{" "}
                <i className="fas fa-video"></i> Front Camera
              </DropdownItem>
              <DropdownItem onClick={() => setCurrentCamera(2)}>
                <span style={{ visibility: currentCamera !== 2 && "hidden" }}>
                  ✓
                </span>{" "}
                <i className="fas fa-video"></i> Back Camera
              </DropdownItem>
              <DropdownItem onClick={() => setCurrentMic(1)}>
                <span style={{ visibility: currentMic !== 1 && "hidden" }}>
                  ✓
                </span>{" "}
                <i className="fas fa-microphone-alt"></i> Built-in Microphone
              </DropdownItem>
              <DropdownItem onClick={() => setCurrentMic(2)}>
                <span style={{ visibility: currentMic !== 2 && "hidden" }}>
                  ✓
                </span>{" "}
                <i className="fas fa-microphone-alt"></i> Air Pods
              </DropdownItem>
              <DropdownItem header>Other Actions</DropdownItem>
              <DropdownItem>Action 1</DropdownItem>
              <DropdownItem>Action 2</DropdownItem>
              <DropdownItem>Action 3</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </ButtonGroup>

        <Button
          color="warning"
          onClick={() => {
            raiseHand(true);

            setTimeout(() => {
              raiseHand(false);
            }, 5000);
          }}
        >
          <i className="far fa-hand-paper"></i>
        </Button>
      </div>

      <div className="controls__cell">
        <Button
          color={isRecording ? "danger" : "white"}
          className={isRecording ? "pulse recording" : null}
          onClick={() => setIsRecording(!isRecording)}
        >
          <i
            className="fas fa-circle"
            style={{ color: isRecording ? "white" : "crimson" }}
          ></i>{" "}
          {isRecording ? "ON" : "OFF"} The Record
        </Button>

        <UncontrolledDropdown>
          <DropdownToggle color="dark" caret>
            <i className="fas fa-door-open"></i> SIDEBAR
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Enter Sidebar 1</DropdownItem>
            <DropdownItem>Enter Sidebar 2</DropdownItem>
            <DropdownItem>Enter Sidebar 3</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

        <Button color="danger">
          End Deposition <i className="fas fa-times"></i>
        </Button>
      </div>
    </div>
  );
};

Controls.propTypes = propTypes;

export default Controls;
