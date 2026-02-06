// Content Sanitizer Utility
// Handles corrupted content from admin panel rich text editor

export const sanitizeContent = (content) => {
    if (!content || typeof content !== 'string') return '';
    
    // Only remove the specific corrupted base64 string at the very end
    // Preserve ALL other content including HTML, formatting, etc.
    let cleaned = content
        // Remove only the specific corrupted base64 string with trailing HTML
        .replace(/K47rSRD3I2JUeG9FFdGa4RzcT90ircnvxjoEx\/wDpqFJyKKKyP5M2fxHSUzkAaKKGCEPOmj\/20h8WFFFA\/Bp8MYiyC9MmsmcYnkA5Bz\+NFFWZvxxKMH5ZjBzoOx2oorKaxKUEjlRRQMVRqzknYbUAbGiigQho1kCiigD\/2Q=="><p><\/p>"$/g, '')
        // Remove any trailing empty HTML tags
        .replace(/<p><\/p>$/g, '')
        .trim();
    
    return cleaned;
};

export const extractReadableContent = (content) => {
    const sanitized = sanitizeContent(content);
    
    // If content is empty after sanitization, provide fallback
    if (!sanitized || sanitized.length < 10) {
        return 'This blog content is currently being processed and will be available soon.';
    }
    
    // Extract first readable sentence
    const sentences = sanitized.split(/[.!?]+/);
    const firstSentence = sentences[0]?.trim();
    
    if (firstSentence && firstSentence.length > 20) {
        return firstSentence + '.';
    }
    
    return sanitized.substring(0, 200) + (sanitized.length > 200 ? '...' : '');
};

export const createExcerpt = (content, maxLength = 150) => {
    const sanitized = sanitizeContent(content);
    
    if (!sanitized) {
        return 'Discover insights and trends in technology and innovation...';
    }
    
    if (sanitized.length <= maxLength) {
        return sanitized;
    }
    
    return sanitized.substring(0, maxLength) + '...';
};
