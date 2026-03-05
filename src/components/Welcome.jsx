import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const FONT_WEIGHT = {
    subtitle: {min: 100, max: 400, default: 100},
    title: {min: 400, max: 900, default: 400},
};

const renderText = (text, className, baseWeight = 400) => {
    return [...text].map((char, i) => (
        <span 
        key={i} 
        className={className} 
        style={{ fontVariationSettings: '"wght" var(--wght)', '--wght': baseWeight }}>
            {char == " " ? "\u00A0" : char}
        </span>
    ));
};

const setupTextHover = (container, type) => {
    if (!container) return;

    const letters = container.querySelectorAll('span');
    const { min, max, default: base } = FONT_WEIGHT[type];


    const animateLetters = (letter, weight, duration = 0.25) => {
        return gsap.to(letter, { 
            duration,
            ease: "power2.out",
            "--wght": weight,
        });
    };

    const handleMouseMove = (e) => {
        const mouseX = e.clientX;

        letters.forEach((letter) => {
            const { left: l, width: w } = letter.getBoundingClientRect();
            const distance = Math.abs(mouseX - (l + w / 2));
            const intensity = Math.exp(-(distance ** 2) / 2000);

            animateLetters(letter, min + (max - min) * intensity);
        })
    };

    const handleMouseLeave = () => {
        letters.forEach((letter) => animateLetters(letter, base));
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

};    

const Welcome = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        setReady(true);
    }, []);

    useGSAP(() => {
        if (titleRef.current) setupTextHover(titleRef.current, 'title');
        if (subtitleRef.current) setupTextHover(subtitleRef.current, 'subtitle');
    }, [ready]);
  
    return (
    <section id="welcome">
        <p ref={subtitleRef}>
            {renderText(
                "Hey, I'm Nigel! Welcome to my",
                'text-3xl font-georama',
                100
                )} 
                </p>
        <h1 ref={titleRef} className="mt-7">
            {renderText(
                "Portfolio",
                'text-9xl italic font-georama'
                )} 
                </h1>

        <div className="small-screen">
            <p>This Portfolio is designed for desktop/tablet screens only.</p>
        </div>
        </section>
    );
};

export default Welcome;