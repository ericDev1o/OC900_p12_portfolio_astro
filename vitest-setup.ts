import './src/config/i18next';
import 'html-validate/vitest';

import { expect, vi } from 'vitest';
import * as matchers from 'vitest-axe/matchers';

expect.extend(matchers);

HTMLCanvasElement.prototype.getContext = () => null as any;   

const MockIntersectionObserver = vi.fn().mockImplementation( 
    class {
        constructor(public callback: IntersectionObserverCallback) {}

        readonly root: Element | null = null;
        readonly rootMargin: string = '';
        readonly thresholds: ReadonlyArray<number> = [];

        observe = vi.fn();
        unobserve = vi.fn();
        disconnect = vi.fn();
        takeRecords = vi.fn();
        trigger = (isIntersecting: boolean) => {
            this.callback([{
                isIntersecting,
                intersectionRatio: 1,
                intersectionRect: {} as DOMRectReadOnly,
                target: document.createElement('div'),
                time: 0,
                boundingClientRect: {} as DOMRectReadOnly,
                rootBounds: null
            }], this);
        };
    // Vitest limitation: the type system expects a function; not a class constructor
    // Sadly, 'as any' is here unavoidable.
    } as any
);

Object.defineProperty(global, 'IntersectionObserver', { 
    value: MockIntersectionObserver 
});
