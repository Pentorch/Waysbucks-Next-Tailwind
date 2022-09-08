import { Fragment, useEffect } from 'react';

const Modal = ({ size, children, visible, className }) => {
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [visible]);

  return (
    <Fragment>
      {visible && (
        <div
          className={`fixed  w-full h-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-black bg-opacity-80 z-[60]`}
        >
          <div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl ${
              size ? size : `w-[488px] h-[488px]`
            } ${className}`}
          >
            {children}
          </div>
        </div>
      )}
    </Fragment>
  );
};

Modal.defaultProps = {
  visible: false,
  className: '',
  size: null,
};

export default Modal;
