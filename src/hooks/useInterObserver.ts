import { useEffect, useState, useRef } from "react";
// @ts-ignore
export const useNearScreen = () => {
  const [show, setShow] = useState(false);
  const articleRef = useRef<Element>();

  useEffect(() => {
    Promise.resolve(window.IntersectionObserver).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });
      observer.observe(articleRef.current);
    });
  }, [articleRef]);

  return [show, articleRef];
};
