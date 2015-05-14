/*!
 * event-helpers - Utils and decorators to help with event handling.
 * 
 * Copyright (c) 2015, Fusionbox, Inc.
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * 
 * - Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 * - Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):"object"==typeof exports?exports.EventHelpers=t():e.EventHelpers=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return l(function(t){return function(){return e.apply(this,arguments)?t.apply(this,arguments):void 0}})}function i(e){return!(e.altKey||e.ctrlKey||e.shiftKey||e.metaKey)}function o(e){return 0===e.button&&i(e)}function u(e,t){return o(t)}function f(e){e.preventDefault(),e.stopPropagation()}function c(e){if(!Array.isArray(e))throw new TypeError("isKeyOf expects an array");return function(t){return-1!==e.indexOf(t.key)}}function s(e){return r(c(e))}Object.defineProperty(t,"__esModule",{value:!0}),t.ifFn=r,t.isUnmodified=i,t.isLeftClick=o,t.isLeftClick2=u,t.killEvent=f,t.isKeyOf=c,t.ifKeyOf=s;var l=n(1),a=r(o);t.ifLeftClick=a;var p=r(u);t.ifLeftClick2=p;var d=a(f);t.killLeftClickEvent=d},function(e,t,n){"use strict";function r(e){return function(t,n,r){return"undefined"!=typeof r?(r.value=e(r.value),r):e(t)}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r,e.exports=t["default"]}])});