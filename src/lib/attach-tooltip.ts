import type { Props } from 'tippy.js';
import tippy from 'tippy.js';

export const attachTooltip = (node: any, t: Partial<Props>) => {
	const interactive = t.interactive;

	if (t.content)
		tippy(node, {
			...t,
			content: t.content,
			allowHTML: true,
			interactive: interactive,
			delay: t.delay ?? 200,
			zIndex: 99999
		});

	return {
		update: (t: Partial<Props>) => {
			const interactive = t.interactive;
			if (node._tippy) node._tippy.destroy();
			if (t.content)
				tippy(node, {
					...t,
					content: t.content,
					allowHTML: true,
					interactive: interactive,
					delay: t.delay ?? 200
				});
		},
		destroy: () => {
			if (node._tippy) node._tippy.destroy();
		}
	};
};
