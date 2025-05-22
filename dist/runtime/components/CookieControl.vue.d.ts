import { type Cookie, type Locale } from '#cookie-control/types';
type __VLS_Props = {
    locale?: Locale;
};
declare var __VLS_9: {}, __VLS_11: {}, __VLS_17: {}, __VLS_19: {
    cookie: Cookie;
};
type __VLS_Slots = {} & {
    bar?: (props: typeof __VLS_9) => any;
} & {
    controlButton?: (props: typeof __VLS_11) => any;
} & {
    modal?: (props: typeof __VLS_17) => any;
} & {
    cookie?: (props: typeof __VLS_19) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {
    accept: () => void;
    acceptPartial: () => void;
    decline: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
