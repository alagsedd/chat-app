import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

function StaticExample() {
  const navigate = useNavigate();
  const handleChatEntry = () => {
    navigate("/chats");
  };
  return (
    <div
      className="modal show modal"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title className="text-primary">Welcome to A-Chats</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            This is just a test app simulating all real-world based chatting
            experiences. Adhere to the following rules.
          </p>
          <ol>
            <li>
              Be Respectful: Treat others with courtesy and respect. Avoid
              offensive language, insults, or harassment.
            </li>
            <li>
              No Discrimination: Do not discriminate against anyone based on
              race, ethnicity, gender, religion, or any other personal
              characteristic.
            </li>
            <li>
              Keep it Civil: Engage in constructive discussions. Disagreements
              are fine, but maintain a civil tone.
            </li>
            <li>
              Privacy Matters: Refrain from sharing personal information or
              sensitive data about yourself or others.
            </li>
            <li>
              No Spamming: Avoid sending repetitive or irrelevant messages.
              Respect others' space in the chat.
            </li>
            No Inappropriate Content: Do not share or post explicit, offensive,
            or inappropriate material.
          </ol>
        </Modal.Body>

        <Modal.Footer>
          {/* <Button variant="secondary">Close</Button> */}
          <Button onClick={handleChatEntry} variant="primary">
            Agree
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default StaticExample;
