import { useRef, useState, useEffect } from 'react';
import { dockApps } from '#constants';
import { Tooltip } from 'react-tooltip';
import { useGSAP } from '@gsap/react';
import useWindowStore from '#store/window';
import gsap from 'gsap';

const Dock = () => {
    const { openWindow, closeWindow, windows } = useWindowStore();
    const dockRef = useRef(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        setReady(true);
    }, []);

    useGSAP(() => {
        const dock = dockRef.current;
        if (!dock) return;

        const icons = dock.querySelectorAll('.dock-icon');
        if (!icons.length) return;

        const animateIcons = (mouseX) => {
            const { left: dockLeft } = dock.getBoundingClientRect();
            icons.forEach((icon) => {
                const { left: iconLeft, width } = icon.getBoundingClientRect();
                const center = iconLeft - dockLeft + width / 2;
                const distance = Math.abs(mouseX - center);
                const intensity = Math.exp(-(distance ** 2) / 2000);

                gsap.to(icon, {
                    scale: 1 + 0.25 * intensity,
                    y: -15 * intensity,
                    duration: 0.2,
                    ease: "power1.out",
                    transformOrigin: "center bottom",
                });
            });
        };

        const resetIcons = () => {
            icons.forEach((icon) => {
                gsap.to(icon, { scale: 1, y: 0, duration: 0.3, ease: "power1.out" });
            });
        };

        const handleMouseMove = (e) => {
            const { left } = dock.getBoundingClientRect();
            animateIcons(e.clientX - left);
        };

        dock.addEventListener('mousemove', handleMouseMove);
        dock.addEventListener('mouseleave', resetIcons);

        return () => {
            dock.removeEventListener('mousemove', handleMouseMove);
            dock.removeEventListener('mouseleave', resetIcons);
        };
    }, [ready]);

    const toggleApp = (appId, canOpen) => {
        if (!canOpen) return;

        const win = windows?.[appId];
        if (!win) return;

        if (win.isOpen) {
            closeWindow(appId);
        } else {
            openWindow(appId);
        }
    };

    return <section id="dock">
        <div ref={dockRef} className="dock-container">
            {dockApps.map(({id, name, icon, canOpen}) => (
                <div key={id} className="relative flex justify-center">
                    <button 
                    type="button" 
                    className="dock-icon" 
                    aria-label={name}
                    data-tooltip-id="dock-tooltip"
                    data-tooltip-content={name}
                    data-tooltip-delay-show={150}
                    disabled={!canOpen}
                    onClick={() => toggleApp(id, canOpen)}>

                        <img src={`/images/${icon}`} alt={name} loading="lazy" className={canOpen ? "" : "opacity-60"}/>
                    </button>
                </div>
            ))}
        </div>
        <Tooltip id="dock-tooltip" className="tooltip" delayShow={150} />
    </section>;
};

export default Dock;