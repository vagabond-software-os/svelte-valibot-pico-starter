// TODO: Stop Gap: Not our favorite modal solution.
import hotkeys from 'hotkeys-js';

const isOpenClass = 'modal-is-open';
const openingClass = 'modal-is-opening';
const closingClass = 'modal-is-closing';
const scrollbarWidthCssVar = '--pico-scrollbar-width';
const animationDuration = 400; // ms

export let visibleModal = get_visible_modal().state;
export function get_visible_modal() {
	let state = $state(null);

	return {
		get state() {
			return state;
		}
	};
}

// Toggle modal
export const toggleModal = (event) => {
	event.preventDefault();
	const modal = document.getElementById(event.currentTarget.dataset.target);
	if (!modal) return;
	modal && (modal.open ? closeModal(modal) : openModal(modal));
};

// NOTE: These scopes are based on original app this is forked from
// - When tasks was open we changed hotkeys
// - When tasks was closed we defaulted to timer hotkeys

// Open modal
export const openModal = (modal) => {
	const { documentElement: html } = document;
	const scrollbarWidth = getScrollbarWidth();
	if (scrollbarWidth) {
		html.style.setProperty(scrollbarWidthCssVar, `${scrollbarWidth}px`);
	}
	html.classList.add(isOpenClass, openingClass);
	if (modal.id === 'task-modal') {
		hotkeys.setScope('tasks');
	} else {
		hotkeys.setScope('none');
	}
	setTimeout(() => {
		visibleModal = modal;
		html.classList.remove(openingClass);
	}, animationDuration);
	modal.showModal();
};

// Close modal
export const closeModal = (modal) => {
	visibleModal = null;
	const { documentElement: html } = document;
	html.classList.add(closingClass);
	hotkeys.setScope('timer');
	setTimeout(() => {
		html.classList.remove(closingClass, isOpenClass);
		html.style.removeProperty(scrollbarWidthCssVar);
		modal.close();
	}, animationDuration);
};

// Get scrollbar width
const getScrollbarWidth = () => {
	const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
	return scrollbarWidth;
};

// Is scrollbar visible
const isScrollbarVisible = () => {
	return document.body.scrollHeight > screen.height;
};
