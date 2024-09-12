'use client'
import React, { useEffect, useState } from 'react'
interface TypewriterEffectProps {
  strings: string[];
  autoStart?: boolean;
  loop?: boolean;
  typingSpeed?: number;
  pauseDuration?: number;
}

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  strings,
  autoStart = true,
  loop = true,
  typingSpeed = 150,
  pauseDuration = 2500,
}) => {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingIndex, setTypingIndex] = useState(0)

  useEffect(() => {
    if (autoStart) {
      const handleTyping = () => {
        const currentString = strings[loopNum % strings.length]
        const updatedText = isDeleting
          ? currentString.substring(0, text.length - 1)
          : currentString.substring(0, text.length + 1);

        setText(updatedText)

        if (!isDeleting && updatedText === currentString) {
          setTimeout(() => setIsDeleting(true), pauseDuration)
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false)
          setLoopNum(loopNum + 1)
        }
      };

      const typingTimeout = setTimeout(handleTyping, isDeleting ? typingSpeed / 2 : typingSpeed)

      return () => clearTimeout(typingTimeout)
    }
  }, [text, isDeleting, loopNum, autoStart, strings, typingSpeed, pauseDuration])

  return <span>{text}</span>;
}