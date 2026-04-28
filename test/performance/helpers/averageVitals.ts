import type { Vitals } from './collectWebVitals';

type CompleteVitals = {
    FCP: number,
    LCP: number,
    TTFB: number,
    CLS: number
};

export function isCompleteVitals(v: Vitals): v is CompleteVitals {
    return(
        v.FCP !==  null &&
        v.LCP !== null && 
        v.TTFB !== null
    );
}

export function averageVitals(vitalsArray: CompleteVitals[]): CompleteVitals {
    const sum = vitalsArray.reduce(
        (acc, v) => ({
            FCP: acc.FCP + (v.FCP ?? 0),
            LCP: acc.LCP + (v.LCP ?? 0),
            TTFB: acc.TTFB + (v.TTFB ?? 0),
            CLS: acc.CLS + v.CLS
        }),
        {
            FCP: 0,
            LCP: 0,
            TTFB: 0,
            CLS: 0
        }
    );

    const count = vitalsArray.length;

    return {
        FCP: sum.FCP / count,
        LCP: sum.LCP / count,
        TTFB: sum.TTFB / count,
        CLS: sum.CLS / count
    };
}