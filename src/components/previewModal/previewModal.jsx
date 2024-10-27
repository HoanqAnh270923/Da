function PreviewModal(props) {
  return (
    <div className="preview-modal">
      <div className="preview-modal__content">
        <div className="preview-modal__content__header">
          <h1>Preview</h1>
          <button>X</button>
        </div>
        <div className="preview-modal__content__body">{props.content}</div>
      </div>
    </div>
  );
}

export default PreviewModal;
