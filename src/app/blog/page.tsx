'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { getAllBlogPosts, BlogPostMeta } from "@/lib/blog";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BlogIndex() {
  const { t, language } = useLanguage();
  const [posts, setPosts] = useState<BlogPostMeta[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Since we're using client-side rendering, we need to fetch posts dynamically
    const fetchPosts = async () => {
      try {
        const response = await fetch(`/api/blog?lang=${language}`);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [language]);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <motion.div 
        className="max-w-3xl mx-auto px-6 py-16"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#EAEAEA]">
            {t.blog.title}
          </h1>
          <p className="text-lg text-[#A0A0A0] max-w-2xl mx-auto">
            {t.blog.subtitle}
          </p>
        </motion.div>

        {/* Blog Posts */}
        <motion.div 
          className="space-y-6"
          variants={fadeInUp}
        >
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#EAEAEA] mx-auto"></div>
              <p className="text-[#A0A0A0] mt-4">{t.blog.loading}</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#A0A0A0] text-lg">{t.blog.noPosts}</p>
              <p className="text-[#A0A0A0] text-sm mt-2">{t.blog.noPostsSubtitle}</p>
            </div>
          ) : (
            posts.map((post) => (
              <motion.div
                key={post.slug}
                className="group"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <Link 
                  href={`/blog/${post.slug}`}
                  className="block bg-[#1C1C1C] rounded-2xl p-6 hover:bg-[#252525] transition-colors duration-300"
                >
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-semibold text-[#EAEAEA] group-hover:text-white transition-colors">
                        {post.title}
                      </h2>
                      <span className="text-sm text-[#A0A0A0] flex-shrink-0">
                        {formatDate(post.publication_date)}
                      </span>
                    </div>
                    <p className="text-[#A0A0A0] leading-relaxed">
                      {post.summary}
                    </p>
                    <div className="flex items-center text-[#A0A0A0] group-hover:text-[#EAEAEA] transition-colors">
                      <span className="text-sm font-medium">{t.blog.readMore}</span>
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          )}
        </motion.div>
      </motion.div>
    </div>
  );
} 