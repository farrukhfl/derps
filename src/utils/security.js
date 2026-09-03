/**
 * Security and Anti-Bot Utilities for DERPS
 */

// Strip potentially malicious HTML/Script tags to prevent XSS
export function sanitizeInput(input) {
  if (typeof input !== 'string') return input
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/on\w+="[^"]*"/gi, '')
    .replace(/javascript:[^"']*/gi, '')
    .trim()
}

// Check if string contains known injection signatures
export function hasSuspiciousPatterns(input) {
  if (!input || typeof input !== 'string') return false
  const suspiciousRegex = /(\b(SELECT|INSERT|DELETE|UPDATE|DROP|ALTER|EXEC|UNION)\b|<script>|<\/script>|javascript:|data:text\/html)/i
  return suspiciousRegex.test(input)
}

// Validate email format strictly
export function isValidEmail(email) {
  if (!email || typeof email !== 'string') return false
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email.trim()) && email.length <= 150
}

// Rate limiting check using sessionStorage
export function checkRateLimit(actionKey = 'lead_form_submit', cooldownMs = 10000) {
  try {
    const lastSubmit = sessionStorage.getItem(`last_${actionKey}`)
    const now = Date.now()
    if (lastSubmit && now - parseInt(lastSubmit, 10) < cooldownMs) {
      const remainingSeconds = Math.ceil((cooldownMs - (now - parseInt(lastSubmit, 10))) / 1000)
      return { allowed: false, remainingSeconds }
    }
    sessionStorage.setItem(`last_${actionKey}`, now.toString())
    return { allowed: true, remainingSeconds: 0 }
  } catch {
    return { allowed: true, remainingSeconds: 0 }
  }
}
