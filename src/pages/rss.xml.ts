import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { site } from '@config/site';
import { isPublishedPost } from '@/lib/content';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog'))
    .filter(isPublishedPost)
    .sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());

  return rss({
    title: `${site.name} — Health Blog`,
    description: 'Allergy education and health information from Abhaya Allergy Center.',
    site: context.site ?? site.url,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.publishedAt,
      link: `/blog/${p.id}/`,
    })),
    customData: `<language>en-in</language>`,
  });
}
