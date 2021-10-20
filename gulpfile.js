const { exec } = require("child_process"),
    { series, src, dest, watch } = require("gulp");

const del = require("del"),
    rename = require("gulp-rename"),
    cleanCSS = require("gulp-clean-css"),
    sourcemaps = require("gulp-sourcemaps"),
    sass = require("gulp-sass")(require("node-sass"));

const ts = require("gulp-typescript"),
    tsProject = ts.createProject("tsconfig.json");

const paths = {        
    SCSS: "src/SCSS",
    Typescript: "src/TS",
    Distribution: "dist",
    Development: "src/development",
};

function FileCleanup() {
    return del([
        `${paths["Distribution"]}/**`,
        `${paths["Typescript"]}/**/*.js`],
        { force: true, read: false });
}

function CompileSass() {
    return src([`${paths["SCSS"]}/core.scss`])
        .pipe(sass().on("error", sass.logError))
        .pipe(dest(`${paths["Distribution"]}/Styles`))
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(rename({ suffix: ".min" }))
        .pipe(dest(`${paths["Distribution"]}/Styles`));
}

function CompileSass_Watch() {
    return watch([`${paths["SCSS"]}/**/*.scss`], CompileSass);
}

function CompileTypescript() {
    return tsProject.src().pipe(tsProject()).js
        .pipe(dest((file) => file.base));
}

function CompileTypescript_Watch() {
    return watch([`${paths["Typescript"]}/**/*.ts`, `${paths["Development"]}/**/*.ts`], CompileTypescript);
}

function WebpackDevelopment(done) {
    exec("npm run webpack-development", (error, stdout, stderr) => {
        done(WebpackErrorHandling(error, stdout, stderr));
    });
}

function WebpackProduction(done) {
    exec("npm run webpack-production", (error, stdout, stderr) => {
        done(WebpackErrorHandling(error, stdout, stderr));
    });
}

// Purpose  :   'exec' only logs default error messages without context or reason for the error. Due to this we need to 
//              maintain our own error handling when working with webpack and 'exec'.
function WebpackErrorHandling(error, stdout, stderr) {
    if (stdout) {
        console.log(stdout);
    }

    if (stderr) {
        console.log(stderr);
    }

    return error;
}

// Tasks
exports.cleanup = FileCleanup;
exports.sass_only = CompileSass;
exports.watch_sass = CompileSass_Watch;
exports.watch_typescript = CompileTypescript_Watch;
exports.development = series(CompileSass, CompileTypescript, WebpackDevelopment);
exports.production = series(FileCleanup, CompileSass, CompileTypescript, WebpackProduction);