import { useNavigate, useLocation } from "react-router-dom";
import "./LoginPromptModal.css";

export const LoginPromptModal = ({ setShowLoginModal }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="outer-modal">
      <div className="inner-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <span className="modal-title">Want to watch this again later?</span>
          <p className="modal-description">
            Login to add this video to a playlist
          </p>
        </div>

        <div className="login-action-btn-container">
          <button
            className="user-action-btn login-btn"
            onClick={() => {
              setShowLoginModal(false);
              navigate("/login", { state: { from: pathname } });
            }}
          >
            LOGIN
          </button>
          <button
            className="user-action-btn cancel-btn"
            onClick={() => setShowLoginModal(false)}
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};
