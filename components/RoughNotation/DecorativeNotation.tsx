import { ReactNode, useEffect, useRef } from "react";

type DecorativeNotationProps = {
  children: ReactNode;
};

export default function DecorativeNotation({ children }: DecorativeNotationProps) {
  const wrapperRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const hideAnnotations = () => {
      wrapper.querySelectorAll("svg.rough-annotation").forEach((svg) => {
        svg.setAttribute("aria-hidden", "true");
      });
    };

    hideAnnotations();
    const observer = new MutationObserver(hideAnnotations);
    observer.observe(wrapper, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return <span ref={wrapperRef}>{children}</span>;
}
