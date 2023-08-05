import "./chatBodyStyle.css";
import Mogo from './Mogo.png';

function ChatBody() {
  return (
    <div className="col-12 col-sm-8 col-md-8 col-lg-8 col-xl-10 pl-0 pr-0">
      {/* Header section */}
      <div className="py-2 px-4 border-bottom d-none d-lg-block">
        <div className="d-flex align-items-center py-1">
          <div className="position-relative">
            {/* User avatar */}
            <img
              src={Mogo}
              className="rounded-circle mr-1"
              alt="User"
              width="80"
              height="40"
            />
          </div>
          <div className="flex-grow-1 pl-3">
            {/* User name */}
            <strong>Mokx</strong>
          </div>
        </div>
      </div>
      <div className="position-relative">
        {/* Chat messages container */}
        <div
          id="chat-message-container"
          className="chat-messages pl-4 pt-4 pr-4 pb-1 d-flex flex-column-reverse"
        >
          {/* Typing indicator */}
          <div className="chat-message-left chat-bubble mb-1">
            <div className="typing">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
          <div>
            <div>
              {/* Timestamp */}
              <div className="text-muted small text-nowrap mt-2">
                03/03/2023 03:05:00
              </div>
            </div>
            {/* Received message */}
            <div className="flex-shrink-1 bg-light ml-1 rounded py-2 px-3 mr-3">
              <div className="font-weight-bold mb-1">Arya</div>
              Hey! How can I help you?
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow-0 py-3 px-4 border-top">
        <form>
          {/* Input field and send button */}
          <div className="input-group">
            <input
              id="chat-message-input"
              type="text"
              className="form-control"
              placeholder="Type your message"
              autoComplete="off"
            />
            <button
              id="chat-message-submit"
              className="btn btn-outline-warning"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>

  );
}

export default ChatBody;
