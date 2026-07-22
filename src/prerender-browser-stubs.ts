/**
 * Browser globals for Angular prerender/SSR workers.
 * Acorex + maska touch window/document/localStorage/dataset without platform guards.
 */
const g = globalThis as typeof globalThis & Record<string, unknown>;

function createClassList() {
  return {
    add() {},
    remove() {},
    toggle() {},
    contains() {
      return false;
    },
  };
}

function createElement(tag: string) {
  const attrs = new Map<string, string>();
  return {
    tagName: String(tag).toUpperCase(),
    nodeType: 1,
    style: {} as Record<string, string>,
    classList: createClassList(),
    dataset: {} as Record<string, string>,
    children: [] as unknown[],
    childNodes: [] as unknown[],
    parentNode: null as unknown,
    parentElement: null as unknown,
    textContent: '',
    innerHTML: '',
    value: '',
    checked: false,
    disabled: false,
    hidden: false,
    id: '',
    className: '',
    dir: 'ltr',
    setAttribute(name: string, value: string) {
      attrs.set(name, String(value));
    },
    getAttribute(name: string) {
      return attrs.has(name) ? attrs.get(name)! : null;
    },
    hasAttribute(name: string) {
      return attrs.has(name);
    },
    removeAttribute(name: string) {
      attrs.delete(name);
    },
    appendChild(child: unknown) {
      return child;
    },
    removeChild(child: unknown) {
      return child;
    },
    insertBefore(child: unknown) {
      return child;
    },
    remove() {},
    focus() {},
    blur() {},
    click() {},
    addEventListener() {},
    removeEventListener() {},
    dispatchEvent() {
      return true;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: 0,
        height: 0,
        x: 0,
        y: 0,
        toJSON() {},
      };
    },
    getClientRects() {
      return [];
    },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    closest() {
      return null;
    },
    matches() {
      return false;
    },
    cloneNode() {
      return createElement(tag);
    },
  };
}

function createStorage() {
  const data = new Map<string, string>();
  return {
    get length() {
      return data.size;
    },
    getItem(key: string) {
      return data.has(key) ? data.get(key)! : null;
    },
    setItem(key: string, value: string) {
      data.set(key, String(value));
    },
    removeItem(key: string) {
      data.delete(key);
    },
    clear() {
      data.clear();
    },
    key(index: number) {
      return [...data.keys()][index] ?? null;
    },
  };
}

function ensureDataset(proto: object | undefined) {
  if (!proto) {
    return;
  }
  try {
    const desc = Object.getOwnPropertyDescriptor(proto, 'dataset');
    if (desc?.get) {
      return;
    }
  } catch {
    // ignore
  }
  try {
    Object.defineProperty(proto, 'dataset', {
      configurable: true,
      get() {
        const target = this as { __dataset?: Record<string, string> };
        if (!target.__dataset) {
          target.__dataset = {};
        }
        return target.__dataset;
      },
    });
  } catch {
    // ignore non-configurable prototypes
  }
}

function defineGlobal(name: string, value: unknown) {
  try {
    Object.defineProperty(g, name, {
      value,
      writable: true,
      configurable: true,
    });
  } catch {
    g[name] = value;
  }
  const nodeGlobal = (g as { global?: Record<string, unknown> }).global;
  if (nodeGlobal && nodeGlobal !== g) {
    try {
      nodeGlobal[name] = value as never;
    } catch {
      // ignore
    }
  }
}

/** Call at module load and again right before bootstrap (after Domino may load). */
export function applyPrerenderBrowserStubs(): void {
  if (typeof g.window === 'undefined') {
    const documentElement = createElement('html');
    const body = createElement('body');
    const head = createElement('head');
    const storage = createStorage();

    const doc = {
      documentElement,
      body,
      head,
      dir: 'ltr',
      readyState: 'complete',
      visibilityState: 'visible',
      hidden: false,
      title: '',
      cookie: '',
      location: {
        href: 'http://localhost/',
        pathname: '/',
        search: '',
        hash: '',
        origin: 'http://localhost',
        protocol: 'http:',
        host: 'localhost',
        hostname: 'localhost',
        port: '',
        assign() {},
        replace() {},
        reload() {},
      },
      createElement,
      createElementNS(_ns: string, tag: string) {
        return createElement(tag);
      },
      createTextNode(text: string) {
        return { nodeType: 3, textContent: text, data: text };
      },
      createComment(text: string) {
        return { nodeType: 8, textContent: text };
      },
      createDocumentFragment() {
        return {
          appendChild(child: unknown) {
            return child;
          },
          childNodes: [],
        };
      },
      createEvent() {
        return {
          initEvent() {},
          preventDefault() {},
          stopPropagation() {},
        };
      },
      querySelector() {
        return null;
      },
      querySelectorAll() {
        return [];
      },
      getElementById() {
        return null;
      },
      getElementsByTagName() {
        return [];
      },
      getElementsByClassName() {
        return [];
      },
      addEventListener() {},
      removeEventListener() {},
      dispatchEvent() {
        return true;
      },
    };

    const win = {
      document: doc,
      navigator: {
        userAgent: 'AngularPrerender',
        language: 'en-US',
        languages: ['en-US'],
        platform: 'Win32',
        standalone: false,
        maxTouchPoints: 0,
      },
      location: doc.location,
      localStorage: storage,
      sessionStorage: storage,
      history: {
        length: 1,
        state: null,
        pushState() {},
        replaceState() {},
        go() {},
        back() {},
        forward() {},
      },
      matchMedia() {
        return {
          matches: false,
          media: '',
          onchange: null,
          addListener() {},
          removeListener() {},
          addEventListener() {},
          removeEventListener() {},
          dispatchEvent() {
            return false;
          },
        };
      },
      getComputedStyle() {
        return {
          getPropertyValue() {
            return '';
          },
          setProperty() {},
          removeProperty() {
            return '';
          },
          item() {
            return '';
          },
          length: 0,
        };
      },
      innerWidth: 1280,
      innerHeight: 720,
      outerWidth: 1280,
      outerHeight: 720,
      devicePixelRatio: 1,
      scrollX: 0,
      scrollY: 0,
      pageXOffset: 0,
      pageYOffset: 0,
      screen: {
        width: 1280,
        height: 720,
        availWidth: 1280,
        availHeight: 720,
        colorDepth: 24,
        pixelDepth: 24,
      },
      requestAnimationFrame(cb: (time: number) => void) {
        return setTimeout(() => cb(Date.now()), 16) as unknown as number;
      },
      cancelAnimationFrame(id: number) {
        clearTimeout(id);
      },
      requestIdleCallback(cb: () => void) {
        return setTimeout(cb, 1) as unknown as number;
      },
      cancelIdleCallback(id: number) {
        clearTimeout(id);
      },
      setTimeout,
      clearTimeout,
      setInterval,
      clearInterval,
      addEventListener() {},
      removeEventListener() {},
      dispatchEvent() {
        return true;
      },
      getSelection() {
        return null;
      },
      scrollTo() {},
      scrollBy() {},
      open() {
        return null;
      },
      close() {},
      focus() {},
      blur() {},
      CSS: {
        supports() {
          return false;
        },
      },
    };

    defineGlobal('window', win);
    defineGlobal('self', win);
    defineGlobal('document', doc);
    defineGlobal('navigator', win.navigator);
    defineGlobal('location', win.location);
    defineGlobal('localStorage', storage);
    defineGlobal('sessionStorage', storage);
    defineGlobal('getComputedStyle', win.getComputedStyle);
    defineGlobal('requestAnimationFrame', win.requestAnimationFrame);
    defineGlobal('cancelAnimationFrame', win.cancelAnimationFrame);
    defineGlobal(
      'HTMLElement',
      g.HTMLElement ??
        class HTMLElement {
          dataset: Record<string, string> = {};
        },
    );
    defineGlobal('Element', g.Element ?? class Element {});
    defineGlobal('SVGElement', g.SVGElement ?? class SVGElement {});
    defineGlobal(
      'Node',
      g.Node ?? {
        TEXT_NODE: 3,
        ELEMENT_NODE: 1,
        COMMENT_NODE: 8,
        DOCUMENT_NODE: 9,
      },
    );
    defineGlobal(
      'MutationObserver',
      g.MutationObserver ??
        class MutationObserver {
          observe() {}
          disconnect() {}
          takeRecords() {
            return [];
          }
        },
    );
    defineGlobal(
      'ResizeObserver',
      g.ResizeObserver ??
        class ResizeObserver {
          observe() {}
          unobserve() {}
          disconnect() {}
        },
    );
    defineGlobal(
      'IntersectionObserver',
      g.IntersectionObserver ??
        class IntersectionObserver {
          observe() {}
          unobserve() {}
          disconnect() {}
          takeRecords() {
            return [];
          }
        },
    );
    defineGlobal(
      'CustomEvent',
      g.CustomEvent ??
        class CustomEvent {
          type: string;
          detail: unknown;
          constructor(type: string, init?: { detail?: unknown }) {
            this.type = type;
            this.detail = init?.detail;
          }
        },
    );
    defineGlobal(
      'Event',
      g.Event ??
        class Event {
          type: string;
          constructor(type: string) {
            this.type = type;
          }
          preventDefault() {}
          stopPropagation() {}
        },
    );
  } else if (typeof g.document === 'undefined' && g.window) {
    defineGlobal('document', (g.window as { document?: unknown }).document);
  }

  if (typeof g.localStorage === 'undefined') {
    const storage = createStorage();
    defineGlobal('localStorage', storage);
    defineGlobal('sessionStorage', storage);
    const win = g.window as
      | { localStorage?: unknown; sessionStorage?: unknown }
      | undefined;
    if (win) {
      win.localStorage = storage;
      win.sessionStorage = storage;
    }
  }

  ensureDataset((g.HTMLElement as { prototype?: object } | undefined)?.prototype);
  ensureDataset((g.Element as { prototype?: object } | undefined)?.prototype);

  const doc = g.document as
    | {
        documentElement?: { constructor?: { prototype?: object } };
        body?: { constructor?: { prototype?: object } };
        createElement?: (tag: string) => {
          constructor?: { prototype?: object };
          dataset?: unknown;
        };
      }
    | undefined;
  if (doc?.createElement) {
    try {
      const sample = doc.createElement('div');
      ensureDataset(sample?.constructor?.prototype);
      if (sample && sample.dataset == null) {
        (sample as { dataset: Record<string, string> }).dataset = {};
      }
    } catch {
      // ignore
    }
  }
  ensureDataset(doc?.documentElement?.constructor?.prototype);
  ensureDataset(doc?.body?.constructor?.prototype);
}

applyPrerenderBrowserStubs();
