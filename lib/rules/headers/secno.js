'use strict';

/**
 * Check (more or less) if items in the TOC and headings are wrapped inside <code>&lt;span class="secno"&gt;</code>.
 */

exports.name  = 'headers.secno';

exports.check = function (sr, done) {

    var secnos = sr.$('h1 span.secno, h2 span.secno, h3 span.secno, h4 span.secno, h5 span.secno, h6 span.secno, #toc span.secno');

    if (!secnos || secnos.length < 1) {
	sr.warning(exports.name, 'not-found');
    }

    done();

};