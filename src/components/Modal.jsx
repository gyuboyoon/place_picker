import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

function Modal({ open, children }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal(); // 모달로 열기
    } else {
      dialog.current.close();
    }
  }, [open]);

  // effect dependency란 속성이나 상태값으로 이해 할 수 있다.
  // 컴포넌트 함수를 다시 실행하도록 하는 값 -> 해당 함수가 실행될때마다 작동해야하기 때문

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
