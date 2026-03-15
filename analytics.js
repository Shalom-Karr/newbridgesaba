/* analytics.js - Supabase Tracking integration */

let userIP = null;
let startTime = Date.now();
let maxScroll = 0;

// ---------- 1. Helpers ----------
function getSessionID() {
  let sid = sessionStorage.getItem("analytics_session_id");
  if (!sid) {
    sid = crypto.randomUUID();
    sessionStorage.setItem("analytics_session_id", sid);
  }
  return sid;
}

async function getIP() {
  if (userIP) return userIP;
  try {
    const r = await fetch("https://api.ipify.org?format=json");
    const d = await r.json();
    userIP = d.ip;
    return userIP;
  } catch {
    return "unknown";
  }
}

function getBrowserInfo() {
  const ua = navigator.userAgent;
  if (ua.includes("Firefox")) return "Firefox";
  if (ua.includes("SamsungBrowser")) return "Samsung Internet";
  if (ua.includes("Opera") || ua.includes("OPR")) return "Opera";
  if (ua.includes("Edge")) return "Edge";
  if (ua.includes("Chrome")) return "Chrome";
  if (ua.includes("Safari")) return "Safari";
  return "Unknown";
}

function getOSInfo() {
  const ua = navigator.userAgent;
  if (ua.includes("Win")) return "Windows";
  if (ua.includes("Mac")) return "MacOS";
  if (ua.includes("Linux")) return "Linux";
  if (ua.includes("Android")) return "Android";
  if (ua.includes("like Mac")) return "iOS";
  return "Unknown OS";
}

function getPageName() {
  const path = window.location.pathname;
  if (path === "/" || path.endsWith("/") || path.endsWith("index.html")) return "Home";
  if (path.includes("services")) return "Services";
  if (path.includes("about")) return "Our Approach";
  if (path.includes("locations")) return "Locations";
  if (path.includes("blog") || path.includes("post")) return "Blog";
  if (path.includes("faq")) return "FAQ";
  if (path.includes("contact")) return "Contact";
  if (path.includes("careers")) return "Careers";
  if (path.includes("admin")) return "Admin Portal";
  return document.title || "Unknown Page";
}

// ---------- 2. Main tracking ----------
window.trackEvent = async function (eventType, extraData = {}) {
  const ip = await getIP();

  const payload = {
    event_type: eventType,
    page_name: getPageName(),
    page_url: window.location.href,
    ip_address: ip,
    session_id: getSessionID(),
    meta_browser: getBrowserInfo(),
    meta_os: getOSInfo(),
    meta_screen: window.screen.width + "x" + window.screen.height,
    meta_language: navigator.language,
    meta_referrer: document.referrer || "Direct",
    event_data: extraData,
  };

  try {
    if (window.supabaseClient) {
      await window.supabaseClient.from('newbridges_tracking').insert([payload]);
    }
  } catch (err) {
    console.error("Analytics send failed:", err);
  }
};

// ---------- 3. Automatic event listeners ----------

// A. Page load
(async () => {
  if (!window.location.search.includes("action=")) {
    window.trackEvent("page_view", {
      load_time: window.performance?.now() || 0,
    });
  }
})();

// B. Click tracking
document.addEventListener("click", (e) => {
  const target = e.target.closest("a, button, input[type='submit'], .clickable");
  if (target) {
    const label =
      target.innerText ||
      target.id ||
      target.getAttribute("aria-label") ||
      "Unknown Element";
    const type = target.tagName.toLowerCase();

    window.trackEvent("click", {
      element_text: label.substring(0, 50),
      element_type: type,
      element_id: target.id || null,
      target_url: target.href || null,
    });
  }
});

// C. Scroll depth
window.addEventListener("scroll", () => {
  const d = document.documentElement;
  const b = document.body;
  const percent = Math.round(
    ((d.scrollTop || b.scrollTop) /
      ((d.scrollHeight || b.scrollHeight) - d.clientHeight)) *
      100
  );
  if (percent > maxScroll) maxScroll = percent;
});

// D. Page leave
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    if (timeSpent > 2) {
      window.trackEvent("page_leave", {
        time_on_page_sec: timeSpent,
        max_scroll_pct: maxScroll,
      });
    }
  }
});
