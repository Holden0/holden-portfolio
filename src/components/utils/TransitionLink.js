"use client";
import Link from "next/link";
import React, { useTransition } from "react";
import { useRouter } from "next/navigation";

export const TransitionLink = ({ children, href, ...props }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleTransition = (e) => {
    e.preventDefault();
    
    // Create a single overlay element for the transition
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'var(--background-color)';
    overlay.style.opacity = '0';
    overlay.style.zIndex = '9999'; // Ensure it is above all other elements, including the navbar
    overlay.style.transition = 'opacity 600ms ease-in-out, transform 600ms ease-in-out';
    overlay.style.pointerEvents = 'none'; // Allow clicks to pass through
    overlay.style.transform = 'scale(1)';
    document.body.appendChild(overlay);
    
    // Add a content container that will apply the transform
    const contentEffect = document.createElement('div');
    contentEffect.style.position = 'fixed';
    contentEffect.style.top = '0';
    contentEffect.style.left = '0';
    contentEffect.style.width = '100%';
    contentEffect.style.height = '100%';
    contentEffect.style.zIndex = '9998'; // Just below the overlay
    contentEffect.style.transition = 'transform 600ms ease-in-out, filter 600ms ease-in-out';
    contentEffect.style.pointerEvents = 'none';
    contentEffect.style.transform = 'scale(1)';
    contentEffect.style.filter = 'blur(0px)';
    document.body.appendChild(contentEffect);

    // Trigger the transition effects
    requestAnimationFrame(() => {
      overlay.style.opacity = '1';
      overlay.style.transform = 'scale(1.05)';
      contentEffect.style.transform = 'scale(0.95)';
      contentEffect.style.filter = 'blur(5px)';
    });

    // Navigate to the new page after the transition
    setTimeout(() => {
      startTransition(() => {
        router.push(href);
      });
    }, 600); // Match the duration of the transition

    // Clean up the overlay and contentEffect after the transition
    setTimeout(() => {
      document.body.removeChild(overlay);
      document.body.removeChild(contentEffect);
    }, 1200); // Ensure cleanup happens after navigation
  };

  return (
    <Link href={href} {...props} onClick={handleTransition}>
      {children}
    </Link>
  );
};