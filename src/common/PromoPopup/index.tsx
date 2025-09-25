import React, { useEffect, useState } from "react";
import { Button } from "../../common/Button";
import { Modal, Typography } from "antd";

type PromoPopupProps = {
    title?: string;
    message?: React.ReactNode;
    ctaText?: string;
    onCta?: () => void;
    delayMs?: number;          // show after delay (default 6000)
    cooldownHours?: number;    // don't show again for this long (default 24)
    localStorageKey?: string;  // override key if you want multiple promos
};

const DEFAULT_KEY = "promo_discount_last_dismissed_at";

const PromoPopup: React.FC<PromoPopupProps> = ({
                                                   title = "Limited-time discount",
                                                   message = (
                                                       <>
                                                           Book this week and get <strong>10% off</strong> installation.
                                                           <br />
                                                           Mention code <code style={{ fontWeight: 700 }}>AJ10</code> at checkout.
                                                       </>
                                                   ),
                                                   ctaText = "Claim Discount",
                                                   onCta,
                                                   delayMs = 6000,
                                                   cooldownHours = 24,
                                                   localStorageKey = DEFAULT_KEY,
                                               }) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        // Check cooldown
        const lastTs = Number(localStorage.getItem(localStorageKey) || 0);
        const now = Date.now();
        const ms = cooldownHours * 60 * 60 * 1000;
        if (lastTs && now - lastTs < ms) return; // still cooling down

        const timer = window.setTimeout(() => setOpen(true), delayMs);
        return () => window.clearTimeout(timer);
    }, [delayMs, cooldownHours, localStorageKey]);

    const closeWithCooldown = () => {
        localStorage.setItem(localStorageKey, String(Date.now()));
        setOpen(false);
    };

    const handleCta = () => {
        closeWithCooldown();
        onCta?.();
    };

    return (
        <Modal
            open={open}
            onCancel={closeWithCooldown}
            footer={null}
            centered
        >
            <Typography.Title level={4} style={{ marginBottom: 8, textAlign: "center"}}>
                {title}
            </Typography.Title>
            <Typography.Paragraph style={{ marginBottom: 16, textAlign: "center"}}>
                {message}
            </Typography.Paragraph>
            <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
                <Button onClick={closeWithCooldown}>Maybe later</Button>
                <Button onClick={handleCta}>
                    {ctaText}
                </Button>
            </div>
        </Modal>
    );
};

export default PromoPopup;
