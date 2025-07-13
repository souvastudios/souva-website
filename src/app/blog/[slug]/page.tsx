'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { getBlogPost, BlogPost } from "@/lib/blog";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BlogPostPage() {
  const { t, language } = useLanguage();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const params = useParams();
  const slug = params.slug as string;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/blog/${slug}?lang=${language}`);
        if (!response.ok) {
          throw new Error('Post not found');
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error('Error fetching blog post:', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug, language]);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#121212] text-white">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#EAEAEA] mx-auto"></div>
            <p className="text-[#A0A0A0] mt-4">{t.blog.loadingPost}</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-[#121212] text-white">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="text-center py-12">
            <h1 className="text-4xl font-bold mb-4 text-[#EAEAEA]">{t.blog.postNotFound}</h1>
            <p className="text-[#A0A0A0] mb-8">{t.blog.postNotFoundDescription}</p>
            <Link 
              href="/blog"
              className="inline-flex items-center text-[#EAEAEA] hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {t.blog.backToBlog}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <motion.div 
        className="max-w-3xl mx-auto px-6 py-16"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        {/* Back to Blog Link */}
        <motion.div 
          className="mb-8"
          variants={fadeInUp}
        >
          <Link 
            href="/blog"
            className="inline-flex items-center text-[#A0A0A0] hover:text-[#EAEAEA] transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t.blog.backToBlog}
          </Link>
        </motion.div>

        {/* Post Header */}
        <motion.header 
          className="mb-12"
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#EAEAEA] leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center text-[#A0A0A0] text-sm">
            <span>{formatDate(post.publication_date)}</span>
          </div>
        </motion.header>

        {/* Post Content */}
        <motion.article 
          className="prose prose-invert prose-lg max-w-none"
          variants={fadeInUp}
        >
          <div 
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.article>
      </motion.div>
    </div>
  );
} 