const iconList: Record<string, boolean> = {
  'it-android-square': true,
  'it-android': true,
  'it-apple-square': true,
  'it-apple': true,
  'it-arrow-down-circle': true,
  'it-arrow-down-triangle': true,
  'it-arrow-down': true,
  'it-arrow-left-circle': true,
  'it-arrow-left-triangle': true,
  'it-arrow-left': true,
  'it-arrow-right-circle': true,
  'it-arrow-right-triangle': true,
  'it-arrow-right': true,
  'it-arrow-up-circle': true,
  'it-arrow-up-triangle': true,
  'it-arrow-up': true,
  'it-ban': true,
  'it-behance': true,
  'it-bookmark': true,
  'it-box': true,
  'it-burger': true,
  'it-calendar': true,
  'it-camera': true,
  'it-card': true,
  'it-chart-line': true,
  'it-check-circle': true,
  'it-check': true,
  'it-chevron-left': true,
  'it-chevron-right': true,
  'it-clip': true,
  'it-clock': true,
  'it-close-big': true,
  'it-close-circle': true,
  'it-close': true,
  'it-code-circle': true,
  'it-collapse': true,
  'it-comment': true,
  'it-copy': true,
  'it-delete': true,
  'it-designers-italia': true,
  'it-download': true,
  'it-error': true,
  'it-exchange-circle': true,
  'it-expand': true,
  'it-external-link': true,
  'it-facebook-square': true,
  'it-facebook': true,
  'it-figma-square': true,
  'it-figma': true,
  'it-file-audio': true,
  'it-file-compressed': true,
  'it-file-csv': true,
  'it-file-json': true,
  'it-file-odp': true,
  'it-file-ods': true,
  'it-file-odt': true,
  'it-file-pdf-ext': true,
  'it-file-pdf': true,
  'it-file-ppt': true,
  'it-file-sheet': true,
  'it-file-slides': true,
  'it-file-txt': true,
  'it-file-video': true,
  'it-file-xml': true,
  'it-file': true,
  'it-files': true,
  'it-flag': true,
  'it-flickr-square': true,
  'it-flickr': true,
  'it-folder': true,
  'it-fullscreen': true,
  'it-funnel': true,
  'it-github': true,
  'it-google': true,
  'it-hearing': true,
  'it-help-circle': true,
  'it-help': true,
  'it-horn': true,
  'it-inbox': true,
  'it-info-circle': true,
  'it-instagram': true,
  'it-key': true,
  'it-less-circle': true,
  'it-link': true,
  'it-linkedin-square': true,
  'it-linkedin': true,
  'it-list': true,
  'it-lock': true,
  'it-locked': true,
  'it-logout': true,
  'it-mail-open': true,
  'it-mail': true,
  'it-map-marker-circle': true,
  'it-map-marker-minus': true,
  'it-map-marker-plus': true,
  'it-map-marker': true,
  'it-mastodon-square': true,
  'it-mastodon': true,
  'it-maximize-alt': true,
  'it-maximize': true,
  'it-medium-square': true,
  'it-medium': true,
  'it-minimize': true,
  'it-minus-circle': true,
  'it-minus': true,
  'it-moodle-square': true,
  'it-moodle': true,
  'it-more-actions': true,
  'it-more-items': true,
  'it-note': true,
  'it-open-source': true,
  'it-pa': true,
  'it-password-invisible': true,
  'it-password-visible': true,
  'it-pencil': true,
  'it-piattaforme': true,
  'it-pin': true,
  'it-pinterest-square': true,
  'it-pinterest': true,
  'it-plug': true,
  'it-plus-circle': true,
  'it-plus': true,
  'it-presentation': true,
  'it-print': true,
  'it-quora-square': true,
  'it-quora': true,
  'it-reddit-square': true,
  'it-reddit': true,
  'it-refresh': true,
  'it-restore': true,
  'it-rss-square': true,
  'it-rss': true,
  'it-search': true,
  'it-settings': true,
  'it-share': true,
  'it-slack-square': true,
  'it-slack': true,
  'it-snapchat-square': true,
  'it-snapchat': true,
  'it-software': true,
  'it-stackexchange-square': true,
  'it-stackexchange': true,
  'it-stackoverflow-square': true,
  'it-stackoverflow': true,
  'it-star-full': true,
  'it-star-outline': true,
  'it-team-digitale': true,
  'it-telegram': true,
  'it-telephone': true,
  'it-tiktok-square': true,
  'it-tiktok': true,
  'it-tool': true,
  'it-twitter-square': true,
  'it-twitter': true,
  'it-unlocked': true,
  'it-upload': true,
  'it-user': true,
  'it-video': true,
  'it-vimeo-square': true,
  'it-vimeo': true,
  'it-warning-circle': true,
  'it-warning': true,
  'it-whatsapp-square': true,
  'it-whatsapp': true,
  'it-wifi': true,
  'it-youtube': true,
  'it-zoom-in': true,
  'it-zoom-out': true
};
export type IconName = keyof typeof iconList;

export const loadIcon = (name: IconName) => {
  switch (name) {
    case 'it-android-square': {
      return import('./ItAndroidSquare');
    }
    case 'it-android': {
      return import('./ItAndroid');
    }
    case 'it-apple-square': {
      return import('./ItAppleSquare');
    }
    case 'it-apple': {
      return import('./ItApple');
    }
    case 'it-arrow-down-circle': {
      return import('./ItArrowDownCircle');
    }
    case 'it-arrow-down-triangle': {
      return import('./ItArrowDownTriangle');
    }
    case 'it-arrow-down': {
      return import('./ItArrowDown');
    }
    case 'it-arrow-left-circle': {
      return import('./ItArrowLeftCircle');
    }
    case 'it-arrow-left-triangle': {
      return import('./ItArrowLeftTriangle');
    }
    case 'it-arrow-left': {
      return import('./ItArrowLeft');
    }
    case 'it-arrow-right-circle': {
      return import('./ItArrowRightCircle');
    }
    case 'it-arrow-right-triangle': {
      return import('./ItArrowRightTriangle');
    }
    case 'it-arrow-right': {
      return import('./ItArrowRight');
    }
    case 'it-arrow-up-circle': {
      return import('./ItArrowUpCircle');
    }
    case 'it-arrow-up-triangle': {
      return import('./ItArrowUpTriangle');
    }
    case 'it-arrow-up': {
      return import('./ItArrowUp');
    }
    case 'it-ban': {
      return import('./ItBan');
    }
    case 'it-behance': {
      return import('./ItBehance');
    }
    case 'it-bookmark': {
      return import('./ItBookmark');
    }
    case 'it-box': {
      return import('./ItBox');
    }
    case 'it-burger': {
      return import('./ItBurger');
    }
    case 'it-calendar': {
      return import('./ItCalendar');
    }
    case 'it-camera': {
      return import('./ItCamera');
    }
    case 'it-card': {
      return import('./ItCard');
    }
    case 'it-chart-line': {
      return import('./ItChartLine');
    }
    case 'it-check-circle': {
      return import('./ItCheckCircle');
    }
    case 'it-check': {
      return import('./ItCheck');
    }
    case 'it-chevron-left': {
      return import('./ItChevronLeft');
    }
    case 'it-chevron-right': {
      return import('./ItChevronRight');
    }
    case 'it-clip': {
      return import('./ItClip');
    }
    case 'it-clock': {
      return import('./ItClock');
    }
    case 'it-close-big': {
      return import('./ItCloseBig');
    }
    case 'it-close-circle': {
      return import('./ItCloseCircle');
    }
    case 'it-close': {
      return import('./ItClose');
    }
    case 'it-code-circle': {
      return import('./ItCodeCircle');
    }
    case 'it-collapse': {
      return import('./ItCollapse');
    }
    case 'it-comment': {
      return import('./ItComment');
    }
    case 'it-copy': {
      return import('./ItCopy');
    }
    case 'it-delete': {
      return import('./ItDelete');
    }
    case 'it-designers-italia': {
      return import('./ItDesignersItalia');
    }
    case 'it-download': {
      return import('./ItDownload');
    }
    case 'it-error': {
      return import('./ItError');
    }
    case 'it-exchange-circle': {
      return import('./ItExchangeCircle');
    }
    case 'it-expand': {
      return import('./ItExpand');
    }
    case 'it-external-link': {
      return import('./ItExternalLink');
    }
    case 'it-facebook-square': {
      return import('./ItFacebookSquare');
    }
    case 'it-facebook': {
      return import('./ItFacebook');
    }
    case 'it-figma-square': {
      return import('./ItFigmaSquare');
    }
    case 'it-figma': {
      return import('./ItFigma');
    }
    case 'it-file-audio': {
      return import('./ItFileAudio');
    }
    case 'it-file-compressed': {
      return import('./ItFileCompressed');
    }
    case 'it-file-csv': {
      return import('./ItFileCsv');
    }
    case 'it-file-json': {
      return import('./ItFileJson');
    }
    case 'it-file-odp': {
      return import('./ItFileOdp');
    }
    case 'it-file-ods': {
      return import('./ItFileOds');
    }
    case 'it-file-odt': {
      return import('./ItFileOdt');
    }
    case 'it-file-pdf-ext': {
      return import('./ItFilePdfExt');
    }
    case 'it-file-pdf': {
      return import('./ItFilePdf');
    }
    case 'it-file-ppt': {
      return import('./ItFilePpt');
    }
    case 'it-file-sheet': {
      return import('./ItFileSheet');
    }
    case 'it-file-slides': {
      return import('./ItFileSlides');
    }
    case 'it-file-txt': {
      return import('./ItFileTxt');
    }
    case 'it-file-video': {
      return import('./ItFileVideo');
    }
    case 'it-file-xml': {
      return import('./ItFileXml');
    }
    case 'it-file': {
      return import('./ItFile');
    }
    case 'it-files': {
      return import('./ItFiles');
    }
    case 'it-flag': {
      return import('./ItFlag');
    }
    case 'it-flickr-square': {
      return import('./ItFlickrSquare');
    }
    case 'it-flickr': {
      return import('./ItFlickr');
    }
    case 'it-folder': {
      return import('./ItFolder');
    }
    case 'it-fullscreen': {
      return import('./ItFullscreen');
    }
    case 'it-funnel': {
      return import('./ItFunnel');
    }
    case 'it-github': {
      return import('./ItGithub');
    }
    case 'it-google': {
      return import('./ItGoogle');
    }
    case 'it-hearing': {
      return import('./ItHearing');
    }
    case 'it-help-circle': {
      return import('./ItHelpCircle');
    }
    case 'it-help': {
      return import('./ItHelp');
    }
    case 'it-horn': {
      return import('./ItHorn');
    }
    case 'it-inbox': {
      return import('./ItInbox');
    }
    case 'it-info-circle': {
      return import('./ItInfoCircle');
    }
    case 'it-instagram': {
      return import('./ItInstagram');
    }
    case 'it-key': {
      return import('./ItKey');
    }
    case 'it-less-circle': {
      return import('./ItLessCircle');
    }
    case 'it-link': {
      return import('./ItLink');
    }
    case 'it-linkedin-square': {
      return import('./ItLinkedinSquare');
    }
    case 'it-linkedin': {
      return import('./ItLinkedin');
    }
    case 'it-list': {
      return import('./ItList');
    }
    case 'it-lock': {
      return import('./ItLock');
    }
    case 'it-locked': {
      return import('./ItLocked');
    }
    case 'it-logout': {
      return import('./ItLogout');
    }
    case 'it-mail-open': {
      return import('./ItMailOpen');
    }
    case 'it-mail': {
      return import('./ItMail');
    }
    case 'it-map-marker-circle': {
      return import('./ItMapMarkerCircle');
    }
    case 'it-map-marker-minus': {
      return import('./ItMapMarkerMinus');
    }
    case 'it-map-marker-plus': {
      return import('./ItMapMarkerPlus');
    }
    case 'it-map-marker': {
      return import('./ItMapMarker');
    }
    case 'it-mastodon-square': {
      return import('./ItMastodonSquare');
    }
    case 'it-mastodon': {
      return import('./ItMastodon');
    }
    case 'it-maximize-alt': {
      return import('./ItMaximizeAlt');
    }
    case 'it-maximize': {
      return import('./ItMaximize');
    }
    case 'it-medium-square': {
      return import('./ItMediumSquare');
    }
    case 'it-medium': {
      return import('./ItMedium');
    }
    case 'it-minimize': {
      return import('./ItMinimize');
    }
    case 'it-minus-circle': {
      return import('./ItMinusCircle');
    }
    case 'it-minus': {
      return import('./ItMinus');
    }
    case 'it-moodle-square': {
      return import('./ItMoodleSquare');
    }
    case 'it-moodle': {
      return import('./ItMoodle');
    }
    case 'it-more-actions': {
      return import('./ItMoreActions');
    }
    case 'it-more-items': {
      return import('./ItMoreItems');
    }
    case 'it-note': {
      return import('./ItNote');
    }
    case 'it-open-source': {
      return import('./ItOpenSource');
    }
    case 'it-pa': {
      return import('./ItPa');
    }
    case 'it-password-invisible': {
      return import('./ItPasswordInvisible');
    }
    case 'it-password-visible': {
      return import('./ItPasswordVisible');
    }
    case 'it-pencil': {
      return import('./ItPencil');
    }
    case 'it-piattaforme': {
      return import('./ItPiattaforme');
    }
    case 'it-pin': {
      return import('./ItPin');
    }
    case 'it-pinterest-square': {
      return import('./ItPinterestSquare');
    }
    case 'it-pinterest': {
      return import('./ItPinterest');
    }
    case 'it-plug': {
      return import('./ItPlug');
    }
    case 'it-plus-circle': {
      return import('./ItPlusCircle');
    }
    case 'it-plus': {
      return import('./ItPlus');
    }
    case 'it-presentation': {
      return import('./ItPresentation');
    }
    case 'it-print': {
      return import('./ItPrint');
    }
    case 'it-quora-square': {
      return import('./ItQuoraSquare');
    }
    case 'it-quora': {
      return import('./ItQuora');
    }
    case 'it-reddit-square': {
      return import('./ItRedditSquare');
    }
    case 'it-reddit': {
      return import('./ItReddit');
    }
    case 'it-refresh': {
      return import('./ItRefresh');
    }
    case 'it-restore': {
      return import('./ItRestore');
    }
    case 'it-rss-square': {
      return import('./ItRssSquare');
    }
    case 'it-rss': {
      return import('./ItRss');
    }
    case 'it-search': {
      return import('./ItSearch');
    }
    case 'it-settings': {
      return import('./ItSettings');
    }
    case 'it-share': {
      return import('./ItShare');
    }
    case 'it-slack-square': {
      return import('./ItSlackSquare');
    }
    case 'it-slack': {
      return import('./ItSlack');
    }
    case 'it-snapchat-square': {
      return import('./ItSnapchatSquare');
    }
    case 'it-snapchat': {
      return import('./ItSnapchat');
    }
    case 'it-software': {
      return import('./ItSoftware');
    }
    case 'it-stackexchange-square': {
      return import('./ItStackexchangeSquare');
    }
    case 'it-stackexchange': {
      return import('./ItStackexchange');
    }
    case 'it-stackoverflow-square': {
      return import('./ItStackoverflowSquare');
    }
    case 'it-stackoverflow': {
      return import('./ItStackoverflow');
    }
    case 'it-star-full': {
      return import('./ItStarFull');
    }
    case 'it-star-outline': {
      return import('./ItStarOutline');
    }
    case 'it-team-digitale': {
      return import('./ItTeamDigitale');
    }
    case 'it-telegram': {
      return import('./ItTelegram');
    }
    case 'it-telephone': {
      return import('./ItTelephone');
    }
    case 'it-tiktok-square': {
      return import('./ItTiktokSquare');
    }
    case 'it-tiktok': {
      return import('./ItTiktok');
    }
    case 'it-tool': {
      return import('./ItTool');
    }
    case 'it-twitter-square': {
      return import('./ItTwitterSquare');
    }
    case 'it-twitter': {
      return import('./ItTwitter');
    }
    case 'it-unlocked': {
      return import('./ItUnlocked');
    }
    case 'it-upload': {
      return import('./ItUpload');
    }
    case 'it-user': {
      return import('./ItUser');
    }
    case 'it-video': {
      return import('./ItVideo');
    }
    case 'it-vimeo-square': {
      return import('./ItVimeoSquare');
    }
    case 'it-vimeo': {
      return import('./ItVimeo');
    }
    case 'it-warning-circle': {
      return import('./ItWarningCircle');
    }
    case 'it-warning': {
      return import('./ItWarning');
    }
    case 'it-whatsapp-square': {
      return import('./ItWhatsappSquare');
    }
    case 'it-whatsapp': {
      return import('./ItWhatsapp');
    }
    case 'it-wifi': {
      return import('./ItWifi');
    }
    case 'it-youtube': {
      return import('./ItYoutube');
    }
    case 'it-zoom-in': {
      return import('./ItZoomIn');
    }
    case 'it-zoom-out': {
      return import('./ItZoomOut');
    }
    default:
      throw Error(`It should not land here. Requested icon: "${name}"`);
  }
};

export function isBundledIcon(name: string): name is IconName {
  return name in iconList;
}

export const allIcons = Object.keys(iconList);
