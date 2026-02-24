import { useState, useEffect } from 'react'

export default function FlipWords({ words = [], duration = 3000, className = '' }) {
  const [currentWord, setCurrentWord] = useState(words[0] || '')
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      
      setTimeout(() => {
        const currentIndex = words.indexOf(currentWord)
        const nextWord = words[currentIndex + 1] || words[0]
        setCurrentWord(nextWord)
        setIsVisible(true)
      }, 600)
    }, duration)

    return () => clearInterval(interval)
  }, [currentWord, words, duration])

  const splitWords = currentWord.split(' ').map((word) => ({
    word,
    letters: word.split(''),
  }))

  return (
    <div className={`relative inline-block px-2 ${className}`}>
      <div
        className={`relative z-10 inline-block text-left transition-all duration-600 ${
          isVisible ? 'opacity-100' : 'opacity-0 scale-150 blur-sm'
        }`}
      >
        {splitWords.map((wordObj, wordIndex) => (
          <span
            key={wordObj.word + wordIndex}
            className="inline-block whitespace-nowrap"
            style={{
              animation: isVisible ? `fadeInWord 0.3s ease forwards` : 'none',
              animationDelay: `${wordIndex * 0.3}s`,
              opacity: isVisible ? 1 : 0,
            }}
          >
            {wordObj.letters.map((letter, letterIndex) => (
              <span
                key={wordObj.word + letterIndex}
                className="inline-block"
                style={{
                  animation: isVisible ? `fadeInLetter 0.2s ease forwards` : 'none',
                  animationDelay: `${wordIndex * 0.3 + letterIndex * 0.05}s`,
                  opacity: isVisible ? 1 : 0,
                }}
              >
                {letter}
              </span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </div>
    </div>
  )
}
