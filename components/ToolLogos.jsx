import React from "react"

// Clean, high-fidelity brand SVGs for all digital marketing tools
export const ToolLogos = {
  ahrefs: (props) => (
    <svg viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M10 5 L22 25 L34 5" stroke="#FF7A00" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 15 L34 25 L46 5" stroke="#00B9FF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <text x="54" y="21" fill="currentColor" fontSize="15" fontWeight="bold" fontFamily="sans-serif">Ahrefs</text>
    </svg>
  ),

  semrush: (props) => (
    <svg viewBox="0 0 110 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="15" cy="15" r="10" fill="#FF642C" />
      <path d="M15 8 A 7 7 0 0 1 22 15 L 18 15 A 3 3 0 0 0 15 12 Z" fill="#FFF" />
      <path d="M15 15 L 22 15 A 7 7 0 0 1 15 22 L 15 18 A 3 3 0 0 0 18 15 Z" fill="#FFF" />
      <text x="32" y="21" fill="currentColor" fontSize="15" fontWeight="bold" fontFamily="sans-serif">SEMrush</text>
    </svg>
  ),

  screamingfrog: (props) => (
    <svg viewBox="0 0 140 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="5" y="5" width="20" height="20" rx="6" fill="#24B14C" />
      <path d="M11 12 C11 10, 19 10, 19 12 M11 15 C11 18, 19 18, 19 15" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="11" cy="12" r="1.5" fill="#FFF" />
      <circle cx="19" cy="12" r="1.5" fill="#FFF" />
      <text x="32" y="21" fill="currentColor" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Screaming Frog</text>
    </svg>
  ),

  surferseo: (props) => (
    <svg viewBox="0 0 110 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M5 20 Q 12 10, 18 20 T 30 20" stroke="#FF007A" strokeWidth="4" strokeLinecap="round" />
      <path d="M8 15 Q 15 5, 21 15 T 33 15" stroke="#FF7A00" strokeWidth="4" strokeLinecap="round" />
      <text x="38" y="21" fill="currentColor" fontSize="14" fontWeight="bold" fontFamily="sans-serif">Surfer SEO</text>
    </svg>
  ),

  googlesearchconsole: (props) => (
    <svg viewBox="0 0 150 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M5 22 L13 10 L20 16 L28 6" stroke="#4285F4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="28" cy="6" r="3" fill="#EA4335" />
      <circle cx="13" cy="10" r="3" fill="#FBBC05" />
      <circle cx="20" cy="16" r="3" fill="#34A853" />
      <text x="36" y="20" fill="currentColor" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Google Search Console</text>
    </svg>
  ),

  bingwebmastertools: (props) => (
    <svg viewBox="0 0 150 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M7 6 L21 11 L14 24 L7 17 Z" fill="#0078D4" />
      <path d="M14 24 L21 11 L25 19 Z" fill="#00BCF2" />
      <text x="32" y="20" fill="currentColor" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Bing Webmaster Tools</text>
    </svg>
  ),

  googleanalytics4: (props) => (
    <svg viewBox="0 0 130 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="5" y="17" width="5" height="8" rx="1.5" fill="#F9AB00" />
      <rect x="13" y="11" width="5" height="14" rx="1.5" fill="#E37400" />
      <rect x="21" y="5" width="5" height="20" rx="1.5" fill="#EA4335" />
      <text x="32" y="21" fill="currentColor" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Google Analytics 4</text>
    </svg>
  ),

  hotjar: (props) => (
    <svg viewBox="0 0 90 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M10 24 C10 24, 8 16, 12 10 C16 4, 20 8, 20 14 C20 20, 18 24, 18 24" stroke="#FF1244" strokeWidth="4" strokeLinecap="round" />
      <path d="M15 24 C15 24, 13 19, 15 15 C17 11, 19 12, 19 16" stroke="#FF7A00" strokeWidth="3" strokeLinecap="round" />
      <text x="28" y="21" fill="currentColor" fontSize="15" fontWeight="bold" fontFamily="sans-serif">Hotjar</text>
    </svg>
  ),

  microsoftclarity: (props) => (
    <svg viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="5" y="5" width="20" height="20" rx="4" fill="#0078D4" />
      <path d="M10 15 L14 19 L20 11" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="32" y="20" fill="currentColor" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Microsoft Clarity</text>
    </svg>
  ),

  lookerstudio: (props) => (
    <svg viewBox="0 0 110 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="15" r="7" stroke="#4285F4" strokeWidth="3" />
      <circle cx="22" cy="15" r="7" stroke="#34A853" strokeWidth="3" />
      <circle cx="17" cy="10" r="4" fill="#EA4335" />
      <text x="36" y="20" fill="currentColor" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Looker Studio</text>
    </svg>
  ),

  vwo: (props) => (
    <svg viewBox="0 0 80 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M5 8 L13 22 L21 8" stroke="#FF3B30" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 14 L23 22 L29 8" stroke="#FF9500" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <text x="38" y="21" fill="currentColor" fontSize="16" fontWeight="bold" fontFamily="sans-serif">VWO</text>
    </svg>
  ),

  optimizely: (props) => (
    <svg viewBox="0 0 110 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M5 8 H15 V22 H5 Z" fill="#0037FF" />
      <path d="M15 12 H23 V22 H15 Z" fill="#7A00FF" />
      <path d="M23 16 H30 V22 H23 Z" fill="#FF00D6" />
      <text x="38" y="21" fill="currentColor" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Optimizely</text>
    </svg>
  ),

  googleads: (props) => (
    <svg viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M6 20 L16 6 L26 20 Z" fill="#4285F4" />
      <path d="M16 6 L26 20 H6 Z" fill="#FBBC05" opacity="0.8" />
      <circle cx="16" cy="11" r="3" fill="#34A853" />
      <text x="32" y="21" fill="currentColor" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Google Ads</text>
    </svg>
  ),

  metaadsmanager: (props) => (
    <svg viewBox="0 0 130 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8 15 C8 11, 16 11, 19 15 C22 19, 30 19, 30 15 C30 11, 22 11, 19 15 C16 19, 8 19, 8 15 Z" stroke="#0081FB" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="38" y="21" fill="currentColor" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Meta Ads Manager</text>
    </svg>
  ),

  linkedin: (props) => (
    <svg viewBox="0 0 95 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="5" y="5" width="20" height="20" rx="4" fill="#0077B5" />
      <text x="9" y="20" fill="#FFF" fontSize="14" fontWeight="bold" fontFamily="sans-serif">in</text>
      <text x="32" y="21" fill="currentColor" fontSize="14" fontWeight="bold" fontFamily="sans-serif">LinkedIn</text>
    </svg>
  ),

  tiktokads: (props) => (
    <svg viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="5" y="5" width="20" height="20" rx="5" fill="#000" />
      <path d="M17 9 C15 11, 12 11, 12 11 V17 C12 19, 14 21, 16 21 C18 21, 20 19, 20 17 V12 C18 12, 17 10, 17 9 Z" stroke="#00F2FE" strokeWidth="2" strokeLinejoin="round" />
      <path d="M16 9 C14 11, 11 11, 11 11 V17 C11 19, 13 21, 15 21 C17 21, 19 19, 19 17 V12" stroke="#FE2C55" strokeWidth="2" strokeLinejoin="round" />
      <text x="32" y="21" fill="currentColor" fontSize="13" fontWeight="bold" fontFamily="sans-serif">TikTok Ads</text>
    </svg>
  ),

  microsoftadvertising: (props) => (
    <svg viewBox="0 0 140 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="5" y="5" width="9" height="9" fill="#F25022" />
      <rect x="16" y="5" width="9" height="9" fill="#7FBA00" />
      <rect x="5" y="16" width="9" height="9" fill="#00A4EF" />
      <rect x="16" y="16" width="9" height="9" fill="#FFB900" />
      <text x="32" y="20" fill="currentColor" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Microsoft Advertising</text>
    </svg>
  ),

  hubspot: (props) => (
    <svg viewBox="0 0 95 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="15" cy="15" r="8" stroke="#FF7A59" strokeWidth="3" />
      <circle cx="15" cy="15" r="3" fill="#FF7A59" />
      <line x1="15" y1="7" x2="15" y2="2" stroke="#FF7A59" strokeWidth="2" />
      <line x1="21" y1="21" x2="25" y2="25" stroke="#FF7A59" strokeWidth="2" />
      <text x="28" y="21" fill="currentColor" fontSize="14" fontWeight="bold" fontFamily="sans-serif">HubSpot</text>
    </svg>
  ),

  mailchimp: (props) => (
    <svg viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="15" cy="15" r="9" fill="#FFE01B" stroke="#000" strokeWidth="1.5" />
      <path d="M11 14 C11 12, 19 12, 19 14 M12 18 Q 15 21, 18 18" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="13" cy="14" r="1" fill="#000" />
      <circle cx="17" cy="14" r="1" fill="#000" />
      <text x="28" y="21" fill="currentColor" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Mailchimp</text>
    </svg>
  ),

  activecampaign: (props) => (
    <svg viewBox="0 0 130 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="10" cy="10" r="3" fill="#356AE6" />
      <circle cx="20" cy="10" r="3" fill="#356AE6" />
      <circle cx="10" cy="20" r="3" fill="#356AE6" />
      <circle cx="20" cy="20" r="3" fill="#356AE6" />
      <line x1="10" y1="10" x2="20" y2="20" stroke="#356AE6" strokeWidth="2" />
      <text x="28" y="20" fill="currentColor" fontSize="12" fontWeight="bold" fontFamily="sans-serif">ActiveCampaign</text>
    </svg>
  ),

  klaviyo: (props) => (
    <svg viewBox="0 0 90 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="5" y="5" width="20" height="20" rx="4" fill="#153A2D" />
      <text x="11" y="20" fill="#FFF" fontSize="14" fontWeight="bold" fontFamily="serif">K</text>
      <text x="32" y="21" fill="currentColor" fontSize="14" fontWeight="bold" fontFamily="sans-serif">Klaviyo</text>
    </svg>
  ),

  brevo: (props) => (
    <svg viewBox="0 0 80 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="15" cy="15" r="9" fill="#00E676" />
      <path d="M15 9 C12 12, 12 18, 15 21 C18 18, 18 12, 15 9 Z" fill="#FFF" />
      <text x="28" y="21" fill="currentColor" fontSize="15" fontWeight="bold" fontFamily="sans-serif">Brevo</text>
    </svg>
  ),

  pardot: (props) => (
    <svg viewBox="0 0 90 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M15 6 C10 6, 6 10, 6 15 C6 20, 10 24, 15 24 C18 24, 21 21, 23 18 C25 15, 23 6, 15 6 Z" fill="#00A1E0" />
      <circle cx="15" cy="15" r="4" fill="#FFF" />
      <text x="28" y="21" fill="currentColor" fontSize="15" fontWeight="bold" fontFamily="sans-serif">Pardot</text>
    </svg>
  ),
}
