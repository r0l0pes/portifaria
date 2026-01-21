import { useEffect } from 'react';
import ReactGA from 'react-ga4';

// Replace with your actual Measurement ID
const MEASUREMENT_ID = "G-FJ9DNTJJR6";

export const initGA = () => {
    ReactGA.initialize(MEASUREMENT_ID);
};

export const logPageView = () => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

export const logEvent = (category: string, action: string, label?: string) => {
    ReactGA.event({
        category,
        action,
        label,
    });
};

export const Analytics = () => {
    useEffect(() => {
        initGA();
        logPageView();
    }, []);

    return null;
};
