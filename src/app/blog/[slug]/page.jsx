'use client';

import FooterBar from '@/components/footer';
import { Navbarr } from '@/components/landing_slide';
import React, { useEffect, useState } from 'react';
import { CiMail } from "react-icons/ci";
import { blogApi } from '@/lib/blogApi';
import { blogData } from '@/constants/blogData';
import { sanitizeContent, extractReadableContent } from '@/lib/contentSanitizer';

export default function BlogDetailPage({ params }) {
    const [blog, setBlog] = useState(null);
    const [recentBlogs, setRecentBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const allBlogsResponse = await blogApi.getAllBlogs();
                const allBlogs = allBlogsResponse.data || allBlogsResponse;

                const matchingBlog = allBlogs.find(b => b._id.toString() === params.slug);

                if (matchingBlog) {
                    setBlog(matchingBlog);
                    setRecentBlogs(allBlogs.filter(b => b._id.toString() !== matchingBlog._id.toString()).slice(0, 4));
                } else {
                    setBlog(null);
                    setRecentBlogs([]);
                }
            } catch (error) {
                setError(error.message || 'Failed to load blog.');
                setBlog(null);
                setRecentBlogs([]);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogData();
    }, [params.slug]);

    if (loading) {
        return (
            <div className='bg-white text-black min-h-screen'>
                <Navbarr noScrollEffect={true} career={true} />
                {/* Loading Skeleton */}
                <div className='relative h-[60vh] md:h-[70vh] overflow-hidden bg-gray-200 animate-pulse'>
                    <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent'></div>
                    <div className='absolute bottom-0 left-0 right-0 px-6 md:px-16 pb-12'>
                        <div className='max-w-4xl mx-auto'>
                            <div className='h-12 md:h-16 lg:h-20 bg-gray-300 rounded animate-pulse mb-4'></div>
                        </div>
                    </div>
                </div>
                <div className='max-w-4xl mx-auto px-6 md:px-16 py-12'>
                    <div className='flex items-center gap-6 mb-8'>
                        <div className='h-16 w-16 rounded-full bg-gray-200 animate-pulse'></div>
                        <div>
                            <div className='h-6 bg-gray-200 rounded w-32 mb-2 animate-pulse'></div>
                            <div className='h-4 bg-gray-200 rounded w-24 animate-pulse'></div>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <div className='h-4 bg-gray-200 rounded animate-pulse'></div>
                        <div className='h-4 bg-gray-200 rounded animate-pulse'></div>
                        <div className='h-4 bg-gray-200 rounded w-3/4 animate-pulse'></div>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className='bg-white text-black min-h-screen'>
                <Navbarr noScrollEffect={true} career={true} />
                <div className='flex justify-center items-center min-h-[60vh]'>
                    <div className='text-center'>
                        <h1 className='text-3xl font-bold text-gray-900 mb-4'>Connection Error</h1>
                        <p className='text-gray-600 mb-6'>{error}</p>
                        <div className='space-y-4'>
                            <p className='text-sm text-gray-500'>Please check:</p>
                            <ul className='text-sm text-gray-500 text-left max-w-md mx-auto'>
                                <li>• Backend server is running on port 8000</li>
                                <li>• CORS is configured on the backend</li>
                                <li>• API endpoint is accessible</li>
                            </ul>
                            <button 
                                onClick={() => window.location.reload()} 
                                className='inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'
                            >
                                Try Again
                            </button>
                            <a href="/blog" className='block mt-2 text-blue-600 hover:underline'>
                                View All Blogs
                            </a>
                        </div>
                    </div>
                </div>
                <FooterBar />
            </div>
        );
    }

    if (!blog) {
        return (
            <div className='bg-white text-black min-h-screen'>
                <Navbarr noScrollEffect={true} career={true} />
                <div className='flex justify-center items-center min-h-[60vh]'>
                    <div className='text-center'>
                        <h1 className='text-3xl font-bold text-gray-900 mb-4'>Blog Not Found</h1>
                        <p className='text-gray-600 mb-6'>This blog doesn't exist or has been removed.</p>
                        <a href="/blog" className='inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'>
                            View All Blogs
                        </a>
                    </div>
                </div>
                <FooterBar />
            </div>
        );
    }

    return (
        <div className='bg-white text-black min-h-screen'>
            <Navbarr noScrollEffect={true} career={true} />
            
            {/* Hero Section with Full Width Featured Image */}
            <div className='relative h-[60vh] md:h-[70vh] overflow-hidden'>
                <img 
                    className='w-full h-full object-cover' 
                    src={blog.featuredImage || blog.image} 
                    alt={blog.title} 
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent'></div>
                <div className='absolute bottom-0 left-0 right-0 px-6 md:px-16 pb-12'>
                    <div className='max-w-4xl mx-auto'>
                        <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6'>
                            {blog.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Author Information */}
            <div className='max-w-4xl mx-auto px-6 md:px-16 py-12'>
                <div className='flex items-center gap-6'>
                    <div className='relative h-16 w-16 rounded-full border-2 border-gray-300 overflow-hidden flex-shrink-0 bg-blue-600 flex items-center justify-center'>
                        {blog.author_image && blog.author_image !== '/favicon.ico' ? (
                            <img 
                                className='absolute inset-0 w-full h-full object-cover object-top scale-125'
                                src={blog.author_image} 
                                alt={blog.author?.name || 'Author'}
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                }}
                            />
                        ) : null}
                        <div className='text-white text-xl font-bold' style={{display: blog.author_image && blog.author_image !== '/favicon.ico' ? 'none' : 'block'}}>
                            {blog.author?.name?.charAt(0) || blog.author?.charAt(0) || 'S'}
                        </div>
                    </div>
                    <div>
                        <p className='text-gray-900 font-bold text-xl'>Author by {blog.author?.name || blog.author || 'Spotmies Team'}</p>
                        <p className='text-gray-600'>Technical Writer</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className='max-w-4xl mx-auto px-6 md:px-16 pb-16'>
                <div className='prose prose-lg md:prose-xl max-w-none'>
                    {(!blog.content && (!blog.excerpt || blog.excerpt === "No excerpt available for this blog post.")) ? (
                        <div className='text-center py-12'>
                            <div className='bg-yellow-50 border border-yellow-200 rounded-lg p-6'>
                                <h3 className='text-lg font-semibold text-yellow-800 mb-2'>Content Not Available</h3>
                                <p className='text-yellow-600 mb-4'>
                                    This blog doesn't have any content yet. The blog object is missing the 'content' and 'excerpt' fields.
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div 
                            className='text-gray-700 leading-relaxed text-lg'
                            dangerouslySetInnerHTML={{ __html: sanitizeContent(blog.content || blog.excerpt) }}
                        ></div>
                    )}
                </div>

                {/* Author Description */}
                <div className='mt-12 pt-8 border-t border-gray-200'>
                    <h3 className='text-2xl font-bold text-gray-900 mb-6'>About the Author</h3>
                    <div className='flex items-start gap-6'>
                        <div className='relative h-16 w-16 rounded-full border-2 border-gray-300 overflow-hidden flex-shrink-0 bg-blue-600 flex items-center justify-center'>
                            {blog.author_image && blog.author_image !== '/favicon.ico' ? (
                                <img 
                                    className='absolute inset-0 w-full h-full object-cover object-top scale-125'
                                    src={blog.author_image} 
                                    alt={blog.author?.name || 'Author'}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            ) : null}
                            <div className='text-white text-xl font-bold' style={{display: blog.author_image && blog.author_image !== '/favicon.ico' ? 'none' : 'block'}}>
                                {blog.author?.name?.charAt(0) || blog.author?.charAt(0) || 'S'}
                            </div>
                        </div>
                        <div className='flex-1'>
                            <h4 className='text-xl font-bold text-gray-900 mb-2'>{blog.author?.name || blog.author || 'Spotmies Team'}</h4>
                            <p className='text-gray-600 mb-4'>Technical Writer & Industry Expert</p>
                            <p className='text-gray-700 leading-relaxed'>
                                Passionate about technology and innovation, with expertise in blockchain, AI, and emerging technologies. 
                                Dedicated to sharing insights and helping readers understand complex technical concepts in simple, 
                                accessible ways. Regular contributor to tech publications and speaker at industry conferences.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Recent Articles */}
                {recentBlogs && recentBlogs.length > 0 && (
                    <div className='mt-16 pt-8 border-t border-gray-200'>
                        <h3 className='text-2xl font-bold text-gray-900 mb-8'>Recent Articles</h3>
                        <div className='grid grid-cols-4 gap-6'>
                            {recentBlogs.slice(0, 4).map((item, index) => (
                                <a href={`/blog/${item._id}`} key={index} className='group block'>
                                    <div className='bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300'>
                                        <div className='relative h-32 overflow-hidden'>
                                            <img 
                                                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300' 
                                                src={item.featuredImage || item.image} 
                                                alt={item.title} 
                                            />
                                            <span className="absolute top-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded-full text-xs font-medium">
                                                {item.category}
                                            </span>
                                        </div>
                                        <div className='p-3'>
                                            <h4 className='font-bold text-sm text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2'>
                                                {item.title}
                                            </h4>
                                            <p className='text-xs text-gray-500'>
                                                {new Date(item.updatedAt).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            
            <FooterBar />
        </div>
    )
}
