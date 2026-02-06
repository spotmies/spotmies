'use client';

import FooterBar from '@/components/footer'
import { Navbarr } from '@/components/landing_slide'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { blogApi } from '@/lib/blogApi'
import { sanitizeContent, createExcerpt } from '@/lib/contentSanitizer'

export default function BlogPage() {
    console.log('🔥 BlogPage component rendering');
    const [blogs, setBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [mounted, setMounted] = useState(false);
    const blogsPerPage = 9;

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    // Get unique categories from blogs
    const getCategories = () => {
        if (!blogs || blogs.length === 0) return ['All Categories'];
        
        const categories = blogs
            .map(blog => {
                const category = blog.category;
                // Simple safe extraction
                if (typeof category === 'string') return category;
                if (category && typeof category === 'object' && category.name) return category.name;
                return 'Uncategorized';
            })
            .filter(cat => cat && cat !== 'Uncategorized');
        
        return ['All Categories', ...new Set(categories)];
    };

    // Filter blogs based on search and category
    useEffect(() => {
        console.log('🔍 Filter useEffect triggered:', {
            blogsLength: blogs.length,
            searchTerm: `'${searchTerm}'`,
            selectedCategory: `'${selectedCategory}'`
        });
        
        let filtered = blogs;
        console.log('🔍 Starting filter with blogs:', filtered.length);
        
        // Filter by search term
        if (searchTerm) {
            const searchTermLower = searchTerm.toLowerCase();
            console.log('🔍 Applying search filter for:', searchTermLower);
            filtered = filtered.filter(blog => 
                blog.title.toLowerCase().includes(searchTermLower) ||
                (blog.excerpt && blog.excerpt.toLowerCase().includes(searchTermLower)) ||
                (blog.content && sanitizeContent(blog.content).toLowerCase().includes(searchTermLower))
            );
            console.log('🔍 After search filter:', filtered.length);
        }
        
        // Filter by category
        if (selectedCategory !== 'all') {
            console.log('🔍 Applying category filter for:', selectedCategory);
            filtered = filtered.filter(blog => {
                const category = blog.category;
                if (typeof category === 'string') return category === selectedCategory;
                if (category && typeof category === 'object' && category.name) return category.name;
                return false;
            });
            console.log('🔍 After category filter:', filtered.length);
        }
        
        console.log('🔍 Final filtered result:', filtered.length);
        console.log('🔍 Setting filteredBlogs to:', filtered);
        setFilteredBlogs(filtered);
        setCurrentPage(1); // Reset to first page when filtering
    }, [blogs, searchTerm, selectedCategory]); // Added blogs dependency

    useEffect(() => {
        if (!mounted) return;
        
        console.log('🚀 useEffect triggered - Blog page mounted, starting fetch...');
        const fetchBlogs = async () => {
            try {
                console.log('📡 Fetching blogs from API...');
                setLoading(true);
                const fetchedBlogs = await blogApi.getAllBlogs();
                console.log('✅ API Response:', fetchedBlogs);
                
                // Handle the actual backend response structure
                let blogsArray = [];
                if (fetchedBlogs?.data && Array.isArray(fetchedBlogs.data)) {
                    blogsArray = fetchedBlogs.data;
                    console.log('📝 Using fetchedBlogs.data:', blogsArray);
                } else if (Array.isArray(fetchedBlogs)) {
                    blogsArray = fetchedBlogs;
                    console.log('📝 Using fetchedBlogs directly:', blogsArray);
                } else {
                    console.log('❌ No valid blog data found in response');
                }
                
                console.log('📊 Final Blogs Array:', blogsArray);
                console.log('📊 Blogs count:', blogsArray.length);
                setBlogs(blogsArray);
            } catch (error) {
                console.error('❌ Failed to fetch blogs:', error);
                console.log('🔄 Setting empty blogs array due to error');
                setBlogs([]);
            } finally {
                console.log('🏁 Setting loading to false');
                setLoading(false);
            }
        };

        fetchBlogs();
    }, [mounted]); // Run once after mounting

    // Calculate pagination
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

    // Debug logs
    console.log('🔍 State debug:', {
        blogs: blogs.length,
        filteredBlogs: filteredBlogs.length,
        currentBlogs: currentBlogs.length,
        loading,
        searchTerm,
        selectedCategory
    });
    
    console.log('🔍 Blog data details:', blogs.map((blog, index) => ({
        index,
        title: blog?.title,
        id: blog?._id,
        hasContent: !!blog?.content,
        contentLength: blog?.content?.length
    })));
    
    console.log('🔍 Filtered blogs details:', filteredBlogs.map((blog, index) => ({
        index,
        title: blog?.title,
        id: blog?._id
    })));
    
    console.log('🔍 Current blogs for rendering:', currentBlogs.map((blog, index) => ({
        index,
        title: blog?.title,
        id: blog?._id
    })));

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    // Prevent hydration mismatch - don't render until mounted
    if (!mounted) {
        return (
            <div className='bg-white text-black min-h-screen'>
                <div className='flex justify-center items-center min-h-screen'>
                    <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
                </div>
            </div>
        );
    }
    return (
        <div className='bg-white text-black'>
            <Navbarr noScrollEffect={true} career={true} />
            
            {/* Hero Section */}
            <div className='h-[60vh] bg-gradient-to-br from-blue-50 to-indigo-100 flex justify-center flex-col items-center px-4'>
                <h1 className='text-black text-center md:text-6xl lg:text-7xl text-4xl gil-bold mb-6'>
                    Our Blog & Insights
                </h1>
                <p className='text-center md:text-xl lg:text-2xl text-base gil-medium opacity-80 max-w-3xl mx-auto leading-relaxed'>
                    Stay updated with the latest trends in technology, blockchain, and innovation. 
                    Our experts share insights, tutorials, and industry news to help you stay ahead in the digital world.
                </p>
                <div className='mt-8 flex flex-wrap gap-4 justify-center'>
                    <span className='bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium'>
                        Technology Trends
                    </span>
                    <span className='bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium'>
                        Blockchain Insights
                    </span>
                    <span className='bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium'>
                        Innovation Stories
                    </span>
                </div>
            </div>

            {/* Search and Filter Section */}
            <div className='bg-white py-12 px-8'>
                <div className='mx-auto flex flex-col md:flex-row items-center justify-between gap-8'>
                    {/* Search Bar */}
                    <div className='relative w-full md:w-1/2 lg:w-1/3'>
                        <input
                            type="text"
                            placeholder="Search articles by title, author, or content..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className='w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none text-gray-700 placeholder-gray-400 bg-white shadow-sm'
                        />
                        <svg className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    
                    {/* Category Dropdown */}
                    <div className='relative w-full md:w-48'>
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className='w-full px-4 py-3 pr-10 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none text-gray-700 bg-white appearance-none shadow-sm'
                        >
                            <option value="all">All Categories</option>
                            {getCategories().map((category, index) => (
                                <option key={index} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                        <svg className="absolute right-3 top-3.5 h-5 w-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Blogs Grid Section */}
            <div className='bg-gray-50 px-4 py-16'>
                <div className='max-w-7xl mx-auto'>
                    {console.log('Rendering condition - loading:', loading, 'currentBlogs.length:', currentBlogs.length)}
                    {loading ? (
                        // Loading state - 9 skeleton cards
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                            {Array.from({ length: 9 }).map((_, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
                                    <div className='h-48 bg-gray-300'></div>
                                    <div className='p-6'>
                                        <div className='h-6 bg-gray-300 rounded mb-3'></div>
                                        <div className='h-4 bg-gray-300 rounded mb-2 w-3/4'></div>
                                        <div className='h-4 bg-gray-300 rounded w-1/2'></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                                {currentBlogs.map((item, index) => {
                                    console.log('Rendering blog item:', item); // Debug log
                                    console.log('Item keys:', Object.keys(item)); // Debug log
                                    console.log('updatedAt value:', item.updatedAt); // Debug log
                                    console.log('Image fields:', {
                                        featuredImage: item.featuredImage,
                                        image: item.image,
                                        author_image: item.author_image
                                    });
                                    
                                    // Determine image source
                                    const getImageSrc = (blog) => {
                                        // Use featuredImage first (actual blog images)
                                        if (blog.featuredImage && blog.featuredImage !== '/favicon.ico') {
                                            return blog.featuredImage;
                                        }
                                        // Fallback to image field
                                        if (blog.image && blog.image !== '/favicon.ico') {
                                            return blog.image;
                                        }
                                        // Final fallback to placeholder
                                        return 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=' + encodeURIComponent(blog.title || 'Blog');
                                    };
                                    
                                    return (
                                    <Link href={`/blog/${item._id}`} key={item._id} className="group">
                                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                            <div className='relative h-48 overflow-hidden'>
                                                <img 
                                                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300' 
                                                    src={getImageSrc(item)} 
                                                    alt={item.title} 
                                                    onError={(e) => {
                                                        console.log('Image failed to load, using fallback');
                                                        e.target.src = 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Blog+Image';
                                                    }}
                                                />
                                                <span className="absolute top-4 right-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded-full text-xs font-medium">
                                                    {(() => {
                                                        const category = item.category;
                                                        if (typeof category === 'string') return category;
                                                        if (category && typeof category === 'object' && category.name) return category.name;
                                                        return 'Category';
                                                    })()}
                                                </span>
                                            </div>
                                            <div className='p-6'>
                                                <h3 className='font-bold text-lg mb-3 text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors'>
                                                    {item.title}
                                                </h3>
                                                <p className='text-gray-600 text-sm mb-4 line-clamp-3'>
                                                    {item.excerpt || createExcerpt(item.content)}
                                                </p>
                                                <div className='flex items-center justify-between text-xs text-gray-500'>
                                                    <span>By {item.author?.name || item.author || 'Spotmies Team'}</span>
                                                    <span>{item.updatedAt ? new Date(item.updatedAt).toLocaleDateString() : 'No date'}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    );
                                })}
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className='flex justify-center mt-12 space-x-2'>
                                    <button
                                        onClick={() => paginate(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className='px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'
                                    >
                                        Previous
                                    </button>
                                    {Array.from({ length: totalPages }, (_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => paginate(index + 1)}
                                            className={`px-4 py-2 rounded-lg ${currentPage === index + 1 
                                                ? 'bg-blue-600 text-white' 
                                                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                                            }`}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}
                                    <button
                                        onClick={() => paginate(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        className='px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'
                                    >
                                        Next
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
            
            <FooterBar />
        </div>
    )
}
