/**
 * set up empty vanilla JS workspace
 */
const d3Module = () => {

	const init = () => {

		let div = document.createElement('div');
		div.textContent = 'Vanilla JS module initialized.';
		div.classList.add('example-vanilla');
		document.querySelector('#app').appendChild(div);

	};
	
	return {
		init
	};
};

export default d3Module;
