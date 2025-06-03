import './MessageModal.css'

export const MessageModal = ({ message, toggleModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <p>{message}</p>
        <button className="modal-btn" onClick={toggleModal}>
          Ok
        </button>
      </div>
    </div>
  )
}
