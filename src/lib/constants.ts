/**
 * App store links — override with NEXT_PUBLIC_* env in deployment if needed.
 * Apple: https://apps.apple.com/app/your-app-id
 * Google: https://play.google.com/store/apps/details?id=com.oogyy.android
 */
export const APP_STORE_LINK =
  process.env.NEXT_PUBLIC_APP_STORE_LINK ?? "#";
export const PLAY_STORE_LINK =
  process.env.NEXT_PUBLIC_PLAY_STORE_LINK ??
  "https://play.google.com/store/apps/details?id=com.oogyy.android";

/** Decode base64 to string (works in browser and Node) */
function decodeBase64(s: string): string {
  try {
    if (typeof Buffer !== "undefined") {
      return Buffer.from(s, "base64").toString("utf-8");
    }
    return atob(s);
  } catch {
    return "";
  }
}

/**
 * Kill switch — base64-encoded URL to app-status.json (URL not exposed in source).
 * Encode your URL: Buffer.from("https://your-domain.com/app-status.json").toString("base64")
 */
const APP_STATUS_URL_B64 =
  process.env.NEXT_PUBLIC_APP_STATUS_URL_B64 ??
  "aHR0cHM6Ly9hcGkub29neXkuY29tL2FwcC1zdGF0dXMuanNvbg==";
export const APP_STATUS_URL = decodeBase64(APP_STATUS_URL_B64);
