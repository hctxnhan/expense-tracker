import { createPortal } from 'react-dom';

function createWrapperAndAppendToBody(id) {
  const wrapper = document.createElement('div');
  wrapper.id = id;
  document.body.appendChild(wrapper);

  return wrapper;
}

export default function Portal({ children, wrapperId = 'portal' }) {
  let element = document.getElementById(wrapperId);
  // if element is not found with wrapperId,
  // create and append to body
  if (!element) {
    element = createWrapperAndAppendToBody(wrapperId);
  }

  return createPortal(children, element);
}
