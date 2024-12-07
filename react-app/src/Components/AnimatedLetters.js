import './AnimatedLetters.scss';

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    return (
        <span>
            {strArray.map((char, i) => (
                <span
                    key={char + i}
                    className={`${letterClass} _${i + idx}`}
                    style={{
                        animationDelay: `${i * 0.5}s` // Adding 1s delay between letters
                    }}
                >
                    {char}
                </span>
            ))}
        </span>
    );
};

export default AnimatedLetters;
