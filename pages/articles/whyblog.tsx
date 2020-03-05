import WhyblogMarkdown from '../../content/newblog.mdx';
import { StyledBlogPost } from '../../components/StyledComps';

export default function whyblog() {
	return (
		<StyledBlogPost>
			<WhyblogMarkdown />
		</StyledBlogPost>
	);
}
