import React, { useState, useEffect } from 'react';
import bannerImg from '../assets/vedic_group_banner.jpeg';

const BannerModal = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Small delay so the modal animates in smoothly after page load
        const timer = setTimeout(() => setVisible(true), 400);
        return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    return (
        <>
            {/* Overlay */}
            <div
                className="banner-overlay"
                onClick={() => setVisible(false)}
            />

            {/* Modal */}
            <div className="banner-modal">
                {/* Close Button */}
                <button
                    className="banner-close"
                    onClick={() => setVisible(false)}
                    aria-label="Close banner"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                {/* Banner Image */}
                <div className="banner-image-wrapper">
                    <img
                        src={bannerImg}
                        alt="Vedic Group of Institutions – Admissions Open"
                        className="banner-image"
                    />
                </div>

                {/* CTA Button */}
                <div className="banner-cta-wrapper">
                    <a
                        href="https://updeled.gov.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="banner-cta-btn"
                    >
                        <span className="banner-btn-shine" />
                        <span className="banner-btn-text">
                            🎓 Apply for D.El.Ed Admissions Now
                        </span>
                    </a>
                </div>
            </div>

            <style>{`
                .banner-overlay {
                    position: fixed;
                    inset: 0;
                    background: rgba(10, 15, 30, 0.75);
                    backdrop-filter: blur(4px);
                    z-index: 9998;
                    animation: fadeIn 0.3s ease;
                }

                .banner-modal {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 9999;
                    width: min(92vw, 580px);
                    height: 92vh;
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    background: linear-gradient(145deg, #0f172a, #1e293b);
                    border-radius: 20px;
                    border: 1px solid rgba(245, 158, 11, 0.3);
                    box-shadow:
                        0 0 0 1px rgba(245, 158, 11, 0.1),
                        0 25px 60px rgba(0, 0, 0, 0.6),
                        0 0 80px rgba(245, 158, 11, 0.08);
                    animation: slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
                }

                .banner-close {
                    position: absolute;
                    top: 12px;
                    right: 12px;
                    z-index: 10;
                    width: 34px;
                    height: 34px;
                    border-radius: 50%;
                    border: none;
                    background: rgba(15, 23, 42, 0.85);
                    color: #f1f5f9;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background 0.2s, transform 0.2s, color 0.2s;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.4);
                }
                .banner-close:hover {
                    background: #ef4444;
                    color: #fff;
                    transform: scale(1.1) rotate(90deg);
                }

                .banner-image-wrapper {
                    flex: 1;
                    min-height: 0;
                    overflow: hidden;
                    display: block;
                }

                .banner-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center top;
                    display: block;
                }

                .banner-cta-wrapper {
                    flex-shrink: 0;
                    padding: 16px 24px 20px;
                    display: flex;
                    justify-content: center;
                    background: linear-gradient(to top, #0f172a 60%, transparent);
                }

                .banner-cta-btn {
                    position: relative;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    padding: 14px 32px;
                    background: linear-gradient(135deg, #d97706, #f59e0b, #fbbf24);
                    color: #0f172a;
                    font-weight: 700;
                    font-size: 0.95rem;
                    letter-spacing: 0.02em;
                    border-radius: 50px;
                    text-decoration: none;
                    overflow: hidden;
                    box-shadow:
                        0 4px 20px rgba(245, 158, 11, 0.45),
                        0 0 0 0 rgba(245, 158, 11, 0.4);
                    transition: transform 0.25s ease, box-shadow 0.25s ease;
                    animation: pulse-glow 2.5s ease-in-out infinite;
                }

                .banner-cta-btn:hover {
                    transform: translateY(-2px) scale(1.03);
                    box-shadow:
                        0 8px 30px rgba(245, 158, 11, 0.6),
                        0 0 40px rgba(245, 158, 11, 0.3);
                    animation: none;
                }

                /* Shine sweep effect */
                .banner-btn-shine {
                    position: absolute;
                    top: 0;
                    left: -75%;
                    width: 50%;
                    height: 100%;
                    background: linear-gradient(
                        120deg,
                        transparent 0%,
                        rgba(255,255,255,0.55) 50%,
                        transparent 100%
                    );
                    transform: skewX(-20deg);
                    animation: shine-sweep 2.8s ease-in-out infinite;
                }

                .banner-btn-text {
                    position: relative;
                    z-index: 1;
                }

                /* ── Animations ── */
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to   { opacity: 1; }
                }

                @keyframes slideUp {
                    from { opacity: 0; transform: translate(-50%, -44%) scale(0.92); }
                    to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                }

                @keyframes pulse-glow {
                    0%, 100% {
                        box-shadow: 0 4px 20px rgba(245, 158, 11, 0.45), 0 0 0 0 rgba(245, 158, 11, 0.3);
                    }
                    50% {
                        box-shadow: 0 4px 20px rgba(245, 158, 11, 0.6), 0 0 20px 6px rgba(245, 158, 11, 0.2);
                    }
                }

                @keyframes shine-sweep {
                    0%   { left: -75%; }
                    40%, 100% { left: 130%; }
                }

                /* ── Responsive ── */
                @media (max-width: 600px) {
                    .banner-modal {
                        width: 82vw;
                        height: auto;
                        border-radius: 14px;
                    }
                    .banner-image-wrapper {
                        flex: none;
                        height: auto;
                        overflow: visible;
                    }
                    .banner-image {
                        height: auto;
                        object-fit: unset;
                    }
                    .banner-close {
                        width: 28px;
                        height: 28px;
                        top: 8px;
                        right: 8px;
                    }
                    .banner-cta-btn {
                        font-size: 0.78rem;
                        padding: 10px 16px;
                        border-radius: 40px;
                    }
                    .banner-cta-wrapper {
                        padding: 10px 12px 14px;
                        background: #0f172a;
                    }
                }
            `}</style>
        </>
    );
};

export default BannerModal;
