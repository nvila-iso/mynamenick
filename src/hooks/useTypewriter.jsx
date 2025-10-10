import { useState, useEffect, useRef } from "react";

const useTypewriter = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);
    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);
  return displayText;
};

const Typewriter = ({ text, speed, onTypingChange }) => {
  const displayText = useTypewriter(text, speed);
  const typedLength = displayText.length;
  const fullLength = text.length;
  const isTyping = typedLength < fullLength;
  const lastSent = useRef(undefined);

  useEffect(() => {
    if (!onTypingChange) return;

    if (lastSent.current !== isTyping) {
      onTypingChange(isTyping);
      lastSent.current = isTyping;
    }

  }, [isTyping, onTypingChange]);

  return <p>{displayText}</p>;
};
export default Typewriter;
