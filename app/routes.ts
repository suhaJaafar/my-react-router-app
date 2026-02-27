import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
	index('routes/home.tsx'),
	route('gallery', 'routes/gallery.tsx'),
	route('favorites', 'routes/favorites.tsx'),
	route('meaning', 'routes/meaning.tsx'),
	route('memories', 'routes/memories.tsx'),
] satisfies RouteConfig;
