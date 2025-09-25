import React, { useEffect, useState } from "react";

type BackgroundSliderProps = {
    images: string[];        // can be imported URLs or public paths
    intervalMs?: number;     // default 2000
    height?: string;         // default "70vh"
    darkOverlay?: boolean;   // default true
    children?: React.ReactNode;
};

const BackgroundSlider: React.FC<BackgroundSliderProps> = ({
                                                               images,
                                                               intervalMs = 2000,
                                                               height = "70vh",
                                                               darkOverlay = true,
                                                               children,
                                                           }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (!images || images.length === 0) return;
        const id = window.setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, intervalMs);
        return () => window.clearInterval(id);
    }, [images, intervalMs]);

    const container: React.CSSProperties = {
        position: "relative",
        width: "100%",
        height,
        overflow: "hidden",
    };

    const bg: React.CSSProperties = {
        position: "absolute",
        top: 0, right: 0, bottom: 0, left: 0,
        backgroundImage: `url(${images?.[index] ?? ""})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: 0,
    };

    const overlay: React.CSSProperties = {
        position: "absolute",
        top: 0, right: 0, bottom: 0, left: 0,
        background: darkOverlay ? "rgba(0,0,0,0.35)" : "transparent",
        zIndex: 1,
        pointerEvents: "none",
    };

    const content: React.CSSProperties = {
        position: "relative",
        zIndex: 2,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
    };

    return (
        <div style={container}>
            <div style={bg} />
            <div style={overlay} />
            <div style={content}>{children}</div>
        </div>
    );
};

export default BackgroundSlider;
