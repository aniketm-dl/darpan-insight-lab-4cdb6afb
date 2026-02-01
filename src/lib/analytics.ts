// First-party analytics tracking system
const EVENTS_ENDPOINT = "https://zoro-production-e8aa.up.railway.app/api/events";
const SESSION_TIMEOUT_MS = 30 * 60 * 1000; // 30 minutes

// Get or create anonymous ID
const getAnonId = (): string => {
  const stored = localStorage.getItem("darpan_anon_id");
  if (stored) return stored;
  
  const newId = crypto.randomUUID();
  localStorage.setItem("darpan_anon_id", newId);
  return newId;
};

// Get or refresh session ID
const getSessionId = (): string => {
  const now = Date.now();
  const stored = localStorage.getItem("darpan_session_id");
  const lastActivity = localStorage.getItem("darpan_last_activity");
  
  const lastActivityTime = lastActivity ? parseInt(lastActivity, 10) : 0;
  const isExpired = now - lastActivityTime > SESSION_TIMEOUT_MS;
  
  if (!stored || isExpired) {
    const newSessionId = crypto.randomUUID();
    localStorage.setItem("darpan_session_id", newSessionId);
    localStorage.setItem("darpan_last_activity", now.toString());
    return newSessionId;
  }
  
  localStorage.setItem("darpan_last_activity", now.toString());
  return stored;
};

// Get UTM parameters from URL
const getUtmParams = () => {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") || undefined,
    utm_medium: params.get("utm_medium") || undefined,
    utm_campaign: params.get("utm_campaign") || undefined,
    utm_content: params.get("utm_content") || undefined,
    utm_term: params.get("utm_term") || undefined,
  };
};

// Build event payload
interface EventProperties {
  button_name?: string;
  section_name?: string;
  [key: string]: unknown;
}

interface EventPayload {
  event_name: string;
  anon_id: string;
  session_id: string;
  timestamp_client: string;
  page_url: string;
  page_path: string;
  referrer: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  properties: EventProperties;
  user_agent: string;
}

const buildPayload = (eventName: string, properties: EventProperties = {}): EventPayload => {
  const utmParams = getUtmParams();
  
  return {
    event_name: eventName,
    anon_id: getAnonId(),
    session_id: getSessionId(),
    timestamp_client: new Date().toISOString(),
    page_url: window.location.href,
    page_path: window.location.pathname,
    referrer: document.referrer || "",
    ...utmParams,
    properties,
    user_agent: navigator.userAgent,
  };
};

// Send event with keepalive for navigation safety
const sendEvent = async (eventName: string, properties: EventProperties = {}): Promise<void> => {
  const payload = buildPayload(eventName, properties);
  
  try {
    // Use fetch with keepalive for click events that may trigger navigation
    const response = await fetch(EVENTS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      keepalive: true, // Ensures request survives page navigation
    });
    
    if (!response.ok) {
      console.warn("[Analytics] Failed to send event:", eventName);
    }
  } catch (error) {
    // Fallback to sendBeacon if fetch fails
    try {
      navigator.sendBeacon(EVENTS_ENDPOINT, JSON.stringify(payload));
    } catch {
      console.warn("[Analytics] Event tracking failed:", eventName);
    }
  }
};

// Public API
export const analytics = {
  // Track page view
  pageView: () => sendEvent("page_view"),
  
  // Track CTA click
  ctaClick: (buttonName: string, sectionName?: string) => 
    sendEvent("cta_click", { button_name: buttonName, section_name: sectionName }),
  
  // Track playground open click
  playgroundOpenClick: (sectionName?: string) => 
    sendEvent("playground_open_click", { section_name: sectionName }),
  
  // Track playground loaded (call from playground app)
  playgroundLoaded: () => sendEvent("playground_loaded"),
  
  // Generic event tracking
  track: (eventName: string, properties?: EventProperties) => 
    sendEvent(eventName, properties),
};

// Initialize on page load
export const initAnalytics = () => {
  // Track page view on initial load
  analytics.pageView();
  
  // Track page views on route changes (for SPAs)
  let lastPath = window.location.pathname;
  
  const observer = new MutationObserver(() => {
    if (window.location.pathname !== lastPath) {
      lastPath = window.location.pathname;
      analytics.pageView();
    }
  });
  
  observer.observe(document.body, { childList: true, subtree: true });
};

export default analytics;
