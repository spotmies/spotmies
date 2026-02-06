// API base URL - backend running on port 8000
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

// Test function to check if backend is accessible
export const testBackendConnection = async () => {
  try {
    console.log('🔍 Testing backend connection to:', API_BASE_URL);
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
    
    const response = await fetch(`${API_BASE_URL}/blogs`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
    });
    
    clearTimeout(timeoutId);
    
    if (response.ok) {
      console.log('✅ Backend connection successful');
      return true;
    } else {
      console.log('❌ Backend connection failed:', response.status);
      return false;
    }
  } catch (error) {
    console.log('❌ Backend connection error:', error.message);
    if (error.name === 'AbortError') {
      console.log('❌ Backend connection timeout - taking too long to respond. Backend performance needs optimization.');
    }
    return false;
  }
};

// Helper function for API calls
const apiCall = async (endpoint, options = {}) => {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    
    console.log(`🌐 Making API call to: ${url}`);
    console.log(`🌐 URL type:`, typeof url);
    console.log(`🌐 Full URL:`, url);
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...options.headers,
      },
      mode: 'cors',
      credentials: 'omit',
      ...options,
    });
    
    console.log(`✅ API response received: ${response.status} ${response.statusText}`);
    console.log(`✅ Response headers:`, response.headers);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log(`📊 API data received:`, data);
    return { data, status: response.status };
    
  } catch (error) {
    console.error(`❌ API call failed:`, error.message);
    console.error(`❌ Error details:`, error);
    console.error(`❌ Error stack:`, error.stack);
    
    throw error;
  }
};

// Blog API functions
export const blogApi = {
  // Fetch all blogs
  getAllBlogs: async () => {
    try {
      console.log('Making API call to:', `${API_BASE_URL}/blogs`);
      const response = await apiCall('/blogs');
      console.log('Raw API response:', response);
      console.log('Response data:', response.data);
      console.log('Response type:', typeof response);
      const result = response.data || response;
      console.log('Final result:', result);
      return result;
    } catch (error) {
      console.error('Error fetching blogs:', error);
      // Fallback to empty array if API fails
      return [];
    }
  },

  // Fetch single blog by slug
  getBlogBySlug: async (slug) => {
    try {
      const response = await apiCall(`/blogs/slug/${slug}`);
      return response.data || response;
    } catch (error) {
      console.error('Error fetching blog:', error);
      return null;
    }
  },

  // Fetch blog by ID
  getBlogById: async (id) => {
    try {
      const response = await apiCall(`/blogs/${id}`);
      return response.data || response;
    } catch (error) {
      console.error('Error fetching blog by ID:', error);
      return null;
    }
  },

  // Get blog slugs for static generation
  getBlogSlugs: async () => {
    try {
      const response = await apiCall('/blogs/slugs');
      return response.data || response;
    } catch (error) {
      console.error('Error fetching blog slugs:', error);
      return [];
    }
  }
};

export default blogApi;
