import 'babel-polyfill';
import module_vanilla from './example-vanilla';
import module_d3 from './example-d3';

const init = (module) => {

	switch (module) {
		case "vanilla":
			return module_vanilla().init();
		case "d3":
			return module_d3().init();
	}

	console.error(`No module matching ${ module } found.`);

}

let containingScriptTag = document.querySelector('script[data-module]') || {};
init(containingScriptTag.dataset && containingScriptTag.dataset.module);
