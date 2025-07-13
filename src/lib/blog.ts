import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const blogDirectory = path.join(process.cwd(), 'blog');

export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  publication_date: string;
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  summary: string;
  publication_date: string;
}

export function getAllBlogPosts(language: 'en' | 'tr' = 'en'): BlogPostMeta[] {
  try {
    const fileNames = fs.readdirSync(blogDirectory);
    const extension = language === 'tr' ? '.tr.md' : '.md';
    const allPostsData = fileNames
      .filter(fileName => {
        if (language === 'tr') {
          return fileName.endsWith('.tr.md');
        } else {
          return fileName.endsWith('.md') && !fileName.endsWith('.tr.md');
        }
      })
      .map((fileName) => {
        const slug = fileName.replace(/\.tr\.md$/, '').replace(/\.md$/, '');
        const fullPath = path.join(blogDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        return {
          slug,
          title: matterResult.data.title || 'Untitled',
          summary: matterResult.data.summary || 'No summary available',
          publication_date: matterResult.data.publication_date || new Date().toISOString().split('T')[0],
        };
      });

    return allPostsData.sort((a, b) => {
      return new Date(b.publication_date).getTime() - new Date(a.publication_date).getTime();
    });
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export async function getBlogPost(slug: string, language: 'en' | 'tr' = 'en'): Promise<BlogPost | null> {
  try {
    const fileName = language === 'tr' ? `${slug}.tr.md` : `${slug}.md`;
    const fullPath = path.join(blogDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      title: matterResult.data.title || 'Untitled',
      summary: matterResult.data.summary || 'No summary available',
      publication_date: matterResult.data.publication_date || new Date().toISOString().split('T')[0],
      content: contentHtml,
    };
  } catch (error) {
    console.error('Error reading blog post:', error);
    return null;
  }
}

export function getAllBlogSlugs(language: 'en' | 'tr' = 'en'): string[] {
  try {
    const fileNames = fs.readdirSync(blogDirectory);
    return fileNames
      .filter(fileName => {
        if (language === 'tr') {
          return fileName.endsWith('.tr.md');
        } else {
          return fileName.endsWith('.md') && !fileName.endsWith('.tr.md');
        }
      })
      .map(fileName => fileName.replace(/\.tr\.md$/, '').replace(/\.md$/, ''));
  } catch (error) {
    console.error('Error reading blog slugs:', error);
    return [];
  }
} 