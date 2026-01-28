import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { getSite } from '../utils/consts';

export async function GET(context) {
	const posts = await getCollection('blog');
	const site = await getSite();
	return rss({
		title: site.author?.name ?? 'The Sophomore',
		// RSS requires a non-empty description string.
		description:
			site.author?.role ??
			site.author?.bio ??
			'Writing and projects from The Sophomore.',
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.id}/`,
		})),
	});
}
