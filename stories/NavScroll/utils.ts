export function getStorybookExtraStyles() {
  return insideIframe() && insideDocsPage()
    ? {
        maxHeight: 600,
        overflowY: 'scroll' as const
      }
    : {};
}

function insideDocsPage() {
  return document.querySelector('.innerZoomElementWrapper');
}

function insideIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}
