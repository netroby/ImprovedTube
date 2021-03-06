/*--------------------------------------------------------------
>>> FIX:
----------------------------------------------------------------
This script replaces YouTube page with improvedTube fullscreen menu
--------------------------------------------------------------*/

if (location.pathname == '/improvedtube') {
  	document.documentElement.setAttribute('improvedtube-page', '');
  	document.documentElement.style.setProperty('display', 'none', 'important');

	document.addEventListener('DOMContentLoaded', function() {
		document.documentElement.innerHTML = '<head><title>ImprovedTube</title><link rel=stylesheet href=https://fonts.googleapis.com/css?family=Roboto:400,500></head><body data-path=/><div class=dialog><div class=dialog__backdrop></div></div><div class=app><header class=header><section class=header__section><span class="header__button header__button_back"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg></span><span class=header__title>ImprovedTube</span><input id=header__input-search class=header__input type=text placeholder=Search></section><section class=header__section><a id=header__button-search class=header__button title=Search><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0a4.5 4.5 0 1 1-.01-8.99A4.5 4.5 0 0 1 9.5 14z"/></svg></a><a id=header__button-search-clear class=header__button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg></a><a id=header__button-menu class=header__button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg></a></section></header><main class=main><div class=main__container></div></main></div><input type=file id=import-settings accept=".json" multiple=false></body>';

		document.documentElement.style.setProperty('display', '');
	});
  }
