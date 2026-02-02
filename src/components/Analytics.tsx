import { useEffect } from 'react';
import ReactGA from 'react-ga4';

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string;

/**
 * Initializes Google Analytics with the configured measurement ID.
 */
export const initGA = () => {
    ReactGA.initialize(MEASUREMENT_ID);
};

/**
 * Logs a pageview event for the current URL path.
 */
export const logPageView = () => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

/**
 * Sends a custom event to Google Analytics.
 * @param {string} category - Event category (e.g. 'Blog', 'Contact')
 * @param {string} action - Event action (e.g. 'View Post', 'Send Message')
 * @param {string} [label] - Optional event label
 */
export const logEvent = (category: string, action: string, label?: string) => {
    ReactGA.event({
        category,
        action,
        label,
    });
};

/**
 * Component that initializes GA and logs the initial pageview on mount.
 * @returns {null}
 */
export const Analytics = () => {
    useEffect(() => {
        initGA();
        logPageView();
    }, []);

    return null;
};
