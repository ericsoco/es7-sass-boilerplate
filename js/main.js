import 'babel-polyfill';
import module_vanilla from './example-vanilla';
import module_d3 from './example-d3';
import d3_modules_test from './d3-modules-test';

const init = (module) => {

	switch (module) {
		case "vanilla":
			return module_vanilla().init();
		case "d3":
			return module_d3().init();
		case "d3-modules-test":
			return d3_modules_test().init();
	}

	console.error(`No module matching ${ module } found.`);

}

let containingScriptTag = document.querySelector('script[data-module]') || {};
init(containingScriptTag.dataset && containingScriptTag.dataset.module);
