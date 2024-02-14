import replace from 'gulp-replace';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import newer from 'gulp-newer';
import ifPlugin from 'gulp-if';
import babel from 'gulp-babel';

// экспорт объекта
export const plugins = {
	replace: replace,
	plumber: plumber,
	notify: notify,
	newer: newer,
	if: ifPlugin,
	babel: babel,
};
