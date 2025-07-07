function W0(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const i in r)
                if (i !== "default" && !(i in e)) {
                    const s = Object.getOwnPropertyDescriptor(r, i);
                    s && Object.defineProperty(e, i, s.get ? s : {
                        enumerable: !0,
                        get: () => r[i]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver(i => {
        for (const s of i)
            if (s.type === "childList")
                for (const o of s.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(i) {
        const s = {};
        return i.integrity && (s.integrity = i.integrity), i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
    }

    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const s = n(i);
        fetch(i.href, s)
    }
})();

function H0(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var $f = {
        exports: {}
    },
    Hs = {},
    Vf = {
        exports: {}
    },
    $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var di = Symbol.for("react.element"),
    K0 = Symbol.for("react.portal"),
    G0 = Symbol.for("react.fragment"),
    X0 = Symbol.for("react.strict_mode"),
    Y0 = Symbol.for("react.profiler"),
    Q0 = Symbol.for("react.provider"),
    Z0 = Symbol.for("react.context"),
    q0 = Symbol.for("react.forward_ref"),
    J0 = Symbol.for("react.suspense"),
    ey = Symbol.for("react.memo"),
    ty = Symbol.for("react.lazy"),
    qu = Symbol.iterator;

function ny(e) {
    return e === null || typeof e != "object" ? null : (e = qu && e[qu] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Ff = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    zf = Object.assign,
    _f = {};

function ir(e, t, n) {
    this.props = e, this.context = t, this.refs = _f, this.updater = n || Ff
}
ir.prototype.isReactComponent = {};
ir.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
ir.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Of() {}
Of.prototype = ir.prototype;

function vl(e, t, n) {
    this.props = e, this.context = t, this.refs = _f, this.updater = n || Ff
}
var xl = vl.prototype = new Of;
xl.constructor = vl;
zf(xl, ir.prototype);
xl.isPureReactComponent = !0;
var Ju = Array.isArray,
    If = Object.prototype.hasOwnProperty,
    wl = {
        current: null
    },
    Bf = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Uf(e, t, n) {
    var r, i = {},
        s = null,
        o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (s = "" + t.key), t) If.call(t, r) && !Bf.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) i.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
        i.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps, a) i[r] === void 0 && (i[r] = a[r]);
    return {
        $$typeof: di,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: wl.current
    }
}

function ry(e, t) {
    return {
        $$typeof: di,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function kl(e) {
    return typeof e == "object" && e !== null && e.$$typeof === di
}

function iy(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var ec = /\/+/g;

function po(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? iy("" + e.key) : t.toString(36)
}

function Ki(e, t, n, r, i) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var o = !1;
    if (e === null) o = !0;
    else switch (s) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case di:
                case K0:
                    o = !0
            }
    }
    if (o) return o = e, i = i(o), e = r === "" ? "." + po(o, 0) : r, Ju(i) ? (n = "", e != null && (n = e.replace(ec, "$&/") + "/"), Ki(i, t, n, "", function(u) {
        return u
    })) : i != null && (kl(i) && (i = ry(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(ec, "$&/") + "/") + e)), t.push(i)), 1;
    if (o = 0, r = r === "" ? "." : r + ":", Ju(e))
        for (var a = 0; a < e.length; a++) {
            s = e[a];
            var l = r + po(s, a);
            o += Ki(s, t, n, l, i)
        } else if (l = ny(e), typeof l == "function")
            for (e = l.call(e), a = 0; !(s = e.next()).done;) s = s.value, l = r + po(s, a++), o += Ki(s, t, n, l, i);
        else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}

function bi(e, t, n) {
    if (e == null) return e;
    var r = [],
        i = 0;
    return Ki(e, r, "", "", function(s) {
        return t.call(n, s, i++)
    }), r
}

function sy(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var ke = {
        current: null
    },
    Gi = {
        transition: null
    },
    oy = {
        ReactCurrentDispatcher: ke,
        ReactCurrentBatchConfig: Gi,
        ReactCurrentOwner: wl
    };

function Wf() {
    throw Error("act(...) is not supported in production builds of React.")
}
$.Children = {
    map: bi,
    forEach: function(e, t, n) {
        bi(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return bi(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return bi(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!kl(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
$.Component = ir;
$.Fragment = G0;
$.Profiler = Y0;
$.PureComponent = vl;
$.StrictMode = X0;
$.Suspense = J0;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oy;
$.act = Wf;
$.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = zf({}, e.props),
        i = e.key,
        s = e.ref,
        o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref, o = wl.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
        for (l in t) If.call(t, l) && !Bf.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: di,
        type: e.type,
        key: i,
        ref: s,
        props: r,
        _owner: o
    }
};
$.createContext = function(e) {
    return e = {
        $$typeof: Z0,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: Q0,
        _context: e
    }, e.Consumer = e
};
$.createElement = Uf;
$.createFactory = function(e) {
    var t = Uf.bind(null, e);
    return t.type = e, t
};
$.createRef = function() {
    return {
        current: null
    }
};
$.forwardRef = function(e) {
    return {
        $$typeof: q0,
        render: e
    }
};
$.isValidElement = kl;
$.lazy = function(e) {
    return {
        $$typeof: ty,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: sy
    }
};
$.memo = function(e, t) {
    return {
        $$typeof: ey,
        type: e,
        compare: t === void 0 ? null : t
    }
};
$.startTransition = function(e) {
    var t = Gi.transition;
    Gi.transition = {};
    try {
        e()
    } finally {
        Gi.transition = t
    }
};
$.unstable_act = Wf;
$.useCallback = function(e, t) {
    return ke.current.useCallback(e, t)
};
$.useContext = function(e) {
    return ke.current.useContext(e)
};
$.useDebugValue = function() {};
$.useDeferredValue = function(e) {
    return ke.current.useDeferredValue(e)
};
$.useEffect = function(e, t) {
    return ke.current.useEffect(e, t)
};
$.useId = function() {
    return ke.current.useId()
};
$.useImperativeHandle = function(e, t, n) {
    return ke.current.useImperativeHandle(e, t, n)
};
$.useInsertionEffect = function(e, t) {
    return ke.current.useInsertionEffect(e, t)
};
$.useLayoutEffect = function(e, t) {
    return ke.current.useLayoutEffect(e, t)
};
$.useMemo = function(e, t) {
    return ke.current.useMemo(e, t)
};
$.useReducer = function(e, t, n) {
    return ke.current.useReducer(e, t, n)
};
$.useRef = function(e) {
    return ke.current.useRef(e)
};
$.useState = function(e) {
    return ke.current.useState(e)
};
$.useSyncExternalStore = function(e, t, n) {
    return ke.current.useSyncExternalStore(e, t, n)
};
$.useTransition = function() {
    return ke.current.useTransition()
};
$.version = "18.3.1";
Vf.exports = $;
var w = Vf.exports;
const Et = H0(w),
    ay = W0({
        __proto__: null,
        default: Et
    }, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ly = w,
    uy = Symbol.for("react.element"),
    cy = Symbol.for("react.fragment"),
    dy = Object.prototype.hasOwnProperty,
    fy = ly.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    hy = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Hf(e, t, n) {
    var r, i = {},
        s = null,
        o = null;
    n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (o = t.ref);
    for (r in t) dy.call(t, r) && !hy.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: uy,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: fy.current
    }
}
Hs.Fragment = cy;
Hs.jsx = Hf;
Hs.jsxs = Hf;
$f.exports = Hs;
var c = $f.exports,
    Kf = {
        exports: {}
    },
    Ae = {},
    Gf = {
        exports: {}
    },
    Xf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(P, R) {
        var A = P.length;
        P.push(R);
        e: for (; 0 < A;) {
            var Q = A - 1 >>> 1,
                oe = P[Q];
            if (0 < i(oe, R)) P[Q] = R, P[A] = oe, A = Q;
            else break e
        }
    }

    function n(P) {
        return P.length === 0 ? null : P[0]
    }

    function r(P) {
        if (P.length === 0) return null;
        var R = P[0],
            A = P.pop();
        if (A !== R) {
            P[0] = A;
            e: for (var Q = 0, oe = P.length, Ci = oe >>> 1; Q < Ci;) {
                var Xt = 2 * (Q + 1) - 1,
                    ho = P[Xt],
                    Yt = Xt + 1,
                    ji = P[Yt];
                if (0 > i(ho, A)) Yt < oe && 0 > i(ji, ho) ? (P[Q] = ji, P[Yt] = A, Q = Yt) : (P[Q] = ho, P[Xt] = A, Q = Xt);
                else if (Yt < oe && 0 > i(ji, A)) P[Q] = ji, P[Yt] = A, Q = Yt;
                else break e
            }
        }
        return R
    }

    function i(P, R) {
        var A = P.sortIndex - R.sortIndex;
        return A !== 0 ? A : P.id - R.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function() {
            return s.now()
        }
    } else {
        var o = Date,
            a = o.now();
        e.unstable_now = function() {
            return o.now() - a
        }
    }
    var l = [],
        u = [],
        d = 1,
        f = null,
        h = 3,
        p = !1,
        x = !1,
        v = !1,
        S = typeof setTimeout == "function" ? setTimeout : null,
        y = typeof clearTimeout == "function" ? clearTimeout : null,
        m = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function g(P) {
        for (var R = n(u); R !== null;) {
            if (R.callback === null) r(u);
            else if (R.startTime <= P) r(u), R.sortIndex = R.expirationTime, t(l, R);
            else break;
            R = n(u)
        }
    }

    function k(P) {
        if (v = !1, g(P), !x)
            if (n(l) !== null) x = !0, Si(j);
            else {
                var R = n(u);
                R !== null && re(k, R.startTime - P)
            }
    }

    function j(P, R) {
        x = !1, v && (v = !1, y(b), b = -1), p = !0;
        var A = h;
        try {
            for (g(R), f = n(l); f !== null && (!(f.expirationTime > R) || P && !J());) {
                var Q = f.callback;
                if (typeof Q == "function") {
                    f.callback = null, h = f.priorityLevel;
                    var oe = Q(f.expirationTime <= R);
                    R = e.unstable_now(), typeof oe == "function" ? f.callback = oe : f === n(l) && r(l), g(R)
                } else r(l);
                f = n(l)
            }
            if (f !== null) var Ci = !0;
            else {
                var Xt = n(u);
                Xt !== null && re(k, Xt.startTime - R), Ci = !1
            }
            return Ci
        } finally {
            f = null, h = A, p = !1
        }
    }
    var C = !1,
        T = null,
        b = -1,
        D = 5,
        M = -1;

    function J() {
        return !(e.unstable_now() - M < D)
    }

    function xt() {
        if (T !== null) {
            var P = e.unstable_now();
            M = P;
            var R = !0;
            try {
                R = T(!0, P)
            } finally {
                R ? Gt() : (C = !1, T = null)
            }
        } else C = !1
    }
    var Gt;
    if (typeof m == "function") Gt = function() {
        m(xt)
    };
    else if (typeof MessageChannel < "u") {
        var cr = new MessageChannel,
            Zu = cr.port2;
        cr.port1.onmessage = xt, Gt = function() {
            Zu.postMessage(null)
        }
    } else Gt = function() {
        S(xt, 0)
    };

    function Si(P) {
        T = P, C || (C = !0, Gt())
    }

    function re(P, R) {
        b = S(function() {
            P(e.unstable_now())
        }, R)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
        P.callback = null
    }, e.unstable_continueExecution = function() {
        x || p || (x = !0, Si(j))
    }, e.unstable_forceFrameRate = function(P) {
        0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < P ? Math.floor(1e3 / P) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return h
    }, e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }, e.unstable_next = function(P) {
        switch (h) {
            case 1:
            case 2:
            case 3:
                var R = 3;
                break;
            default:
                R = h
        }
        var A = h;
        h = R;
        try {
            return P()
        } finally {
            h = A
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(P, R) {
        switch (P) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                P = 3
        }
        var A = h;
        h = P;
        try {
            return R()
        } finally {
            h = A
        }
    }, e.unstable_scheduleCallback = function(P, R, A) {
        var Q = e.unstable_now();
        switch (typeof A == "object" && A !== null ? (A = A.delay, A = typeof A == "number" && 0 < A ? Q + A : Q) : A = Q, P) {
            case 1:
                var oe = -1;
                break;
            case 2:
                oe = 250;
                break;
            case 5:
                oe = 1073741823;
                break;
            case 4:
                oe = 1e4;
                break;
            default:
                oe = 5e3
        }
        return oe = A + oe, P = {
            id: d++,
            callback: R,
            priorityLevel: P,
            startTime: A,
            expirationTime: oe,
            sortIndex: -1
        }, A > Q ? (P.sortIndex = A, t(u, P), n(l) === null && P === n(u) && (v ? (y(b), b = -1) : v = !0, re(k, A - Q))) : (P.sortIndex = oe, t(l, P), x || p || (x = !0, Si(j))), P
    }, e.unstable_shouldYield = J, e.unstable_wrapCallback = function(P) {
        var R = h;
        return function() {
            var A = h;
            h = R;
            try {
                return P.apply(this, arguments)
            } finally {
                h = A
            }
        }
    }
})(Xf);
Gf.exports = Xf;
var py = Gf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var my = w,
    Re = py;

function N(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Yf = new Set,
    _r = {};

function yn(e, t) {
    Xn(e, t), Xn(e + "Capture", t)
}

function Xn(e, t) {
    for (_r[e] = t, e = 0; e < t.length; e++) Yf.add(t[e])
}
var ft = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    ta = Object.prototype.hasOwnProperty,
    yy = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    tc = {},
    nc = {};

function gy(e) {
    return ta.call(nc, e) ? !0 : ta.call(tc, e) ? !1 : yy.test(e) ? nc[e] = !0 : (tc[e] = !0, !1)
}

function vy(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function xy(e, t, n, r) {
    if (t === null || typeof t > "u" || vy(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function Se(e, t, n, r, i, s, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = o
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    fe[e] = new Se(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    fe[t] = new Se(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    fe[e] = new Se(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    fe[e] = new Se(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    fe[e] = new Se(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    fe[e] = new Se(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    fe[e] = new Se(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    fe[e] = new Se(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    fe[e] = new Se(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Sl = /[\-:]([a-z])/g;

function Cl(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Sl, Cl);
    fe[t] = new Se(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Sl, Cl);
    fe[t] = new Se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Sl, Cl);
    fe[t] = new Se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    fe[e] = new Se(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
fe.xlinkHref = new Se("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    fe[e] = new Se(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function jl(e, t, n, r) {
    var i = fe.hasOwnProperty(t) ? fe[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (xy(t, n, i, r) && (n = null), r || i === null ? gy(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var vt = my.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Ti = Symbol.for("react.element"),
    bn = Symbol.for("react.portal"),
    Tn = Symbol.for("react.fragment"),
    bl = Symbol.for("react.strict_mode"),
    na = Symbol.for("react.profiler"),
    Qf = Symbol.for("react.provider"),
    Zf = Symbol.for("react.context"),
    Tl = Symbol.for("react.forward_ref"),
    ra = Symbol.for("react.suspense"),
    ia = Symbol.for("react.suspense_list"),
    Nl = Symbol.for("react.memo"),
    St = Symbol.for("react.lazy"),
    qf = Symbol.for("react.offscreen"),
    rc = Symbol.iterator;

function dr(e) {
    return e === null || typeof e != "object" ? null : (e = rc && e[rc] || e["@@iterator"], typeof e == "function" ? e : null)
}
var G = Object.assign,
    mo;

function wr(e) {
    if (mo === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        mo = t && t[1] || ""
    }
    return `
` + mo + e
}
var yo = !1;

function go(e, t) {
    if (!e || yo) return "";
    yo = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), s = r.stack.split(`
`), o = i.length - 1, a = s.length - 1; 1 <= o && 0 <= a && i[o] !== s[a];) a--;
            for (; 1 <= o && 0 <= a; o--, a--)
                if (i[o] !== s[a]) {
                    if (o !== 1 || a !== 1)
                        do
                            if (o--, a--, 0 > a || i[o] !== s[a]) {
                                var l = `
` + i[o].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
                            }
                    while (1 <= o && 0 <= a);
                    break
                }
        }
    } finally {
        yo = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? wr(e) : ""
}

function wy(e) {
    switch (e.tag) {
        case 5:
            return wr(e.type);
        case 16:
            return wr("Lazy");
        case 13:
            return wr("Suspense");
        case 19:
            return wr("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = go(e.type, !1), e;
        case 11:
            return e = go(e.type.render, !1), e;
        case 1:
            return e = go(e.type, !0), e;
        default:
            return ""
    }
}

function sa(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Tn:
            return "Fragment";
        case bn:
            return "Portal";
        case na:
            return "Profiler";
        case bl:
            return "StrictMode";
        case ra:
            return "Suspense";
        case ia:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case Zf:
            return (e.displayName || "Context") + ".Consumer";
        case Qf:
            return (e._context.displayName || "Context") + ".Provider";
        case Tl:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Nl:
            return t = e.displayName || null, t !== null ? t : sa(e.type) || "Memo";
        case St:
            t = e._payload, e = e._init;
            try {
                return sa(e(t))
            } catch {}
    }
    return null
}

function ky(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return sa(t);
        case 8:
            return t === bl ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function _t(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function Jf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function Sy(e) {
    var t = Jf(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get,
            s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(o) {
                r = "" + o, s.call(this, o)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function Ni(e) {
    e._valueTracker || (e._valueTracker = Sy(e))
}

function eh(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = Jf(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function us(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function oa(e, t) {
    var n = t.checked;
    return G({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ? ? e._wrapperState.initialChecked
    })
}

function ic(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = _t(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function th(e, t) {
    t = t.checked, t != null && jl(e, "checked", t, !1)
}

function aa(e, t) {
    th(e, t);
    var n = _t(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? la(e, t.type, n) : t.hasOwnProperty("defaultValue") && la(e, t.type, _t(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function sc(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function la(e, t, n) {
    (t !== "number" || us(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var kr = Array.isArray;

function Bn(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + _t(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0, r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}

function ua(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
    return G({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function oc(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(N(92));
            if (kr(n)) {
                if (1 < n.length) throw Error(N(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: _t(n)
    }
}

function nh(e, t) {
    var n = _t(t.value),
        r = _t(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function ac(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function rh(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function ca(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? rh(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Pi, ih = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (Pi = Pi || document.createElement("div"), Pi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Pi.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Or(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var br = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    Cy = ["Webkit", "ms", "Moz", "O"];
Object.keys(br).forEach(function(e) {
    Cy.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), br[t] = br[e]
    })
});

function sh(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || br.hasOwnProperty(e) && br[e] ? ("" + t).trim() : t + "px"
}

function oh(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                i = sh(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
        }
}
var jy = G({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function da(e, t) {
    if (t) {
        if (jy[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(N(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(N(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(N(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(N(62))
    }
}

function fa(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var ha = null;

function Pl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var pa = null,
    Un = null,
    Wn = null;

function lc(e) {
    if (e = pi(e)) {
        if (typeof pa != "function") throw Error(N(280));
        var t = e.stateNode;
        t && (t = Qs(t), pa(e.stateNode, e.type, t))
    }
}

function ah(e) {
    Un ? Wn ? Wn.push(e) : Wn = [e] : Un = e
}

function lh() {
    if (Un) {
        var e = Un,
            t = Wn;
        if (Wn = Un = null, lc(e), t)
            for (e = 0; e < t.length; e++) lc(t[e])
    }
}

function uh(e, t) {
    return e(t)
}

function ch() {}
var vo = !1;

function dh(e, t, n) {
    if (vo) return e(t, n);
    vo = !0;
    try {
        return uh(e, t, n)
    } finally {
        vo = !1, (Un !== null || Wn !== null) && (ch(), lh())
    }
}

function Ir(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Qs(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(N(231, t, typeof n));
    return n
}
var ma = !1;
if (ft) try {
    var fr = {};
    Object.defineProperty(fr, "passive", {
        get: function() {
            ma = !0
        }
    }), window.addEventListener("test", fr, fr), window.removeEventListener("test", fr, fr)
} catch {
    ma = !1
}

function by(e, t, n, r, i, s, o, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (d) {
        this.onError(d)
    }
}
var Tr = !1,
    cs = null,
    ds = !1,
    ya = null,
    Ty = {
        onError: function(e) {
            Tr = !0, cs = e
        }
    };

function Ny(e, t, n, r, i, s, o, a, l) {
    Tr = !1, cs = null, by.apply(Ty, arguments)
}

function Py(e, t, n, r, i, s, o, a, l) {
    if (Ny.apply(this, arguments), Tr) {
        if (Tr) {
            var u = cs;
            Tr = !1, cs = null
        } else throw Error(N(198));
        ds || (ds = !0, ya = u)
    }
}

function gn(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function fh(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function uc(e) {
    if (gn(e) !== e) throw Error(N(188))
}

function Ey(e) {
    var t = e.alternate;
    if (!t) {
        if (t = gn(e), t === null) throw Error(N(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var i = n.return;
        if (i === null) break;
        var s = i.alternate;
        if (s === null) {
            if (r = i.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === s.child) {
            for (s = i.child; s;) {
                if (s === n) return uc(i), e;
                if (s === r) return uc(i), t;
                s = s.sibling
            }
            throw Error(N(188))
        }
        if (n.return !== r.return) n = i, r = s;
        else {
            for (var o = !1, a = i.child; a;) {
                if (a === n) {
                    o = !0, n = i, r = s;
                    break
                }
                if (a === r) {
                    o = !0, r = i, n = s;
                    break
                }
                a = a.sibling
            }
            if (!o) {
                for (a = s.child; a;) {
                    if (a === n) {
                        o = !0, n = s, r = i;
                        break
                    }
                    if (a === r) {
                        o = !0, r = s, n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!o) throw Error(N(189))
            }
        }
        if (n.alternate !== r) throw Error(N(190))
    }
    if (n.tag !== 3) throw Error(N(188));
    return n.stateNode.current === n ? e : t
}

function hh(e) {
    return e = Ey(e), e !== null ? ph(e) : null
}

function ph(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = ph(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var mh = Re.unstable_scheduleCallback,
    cc = Re.unstable_cancelCallback,
    My = Re.unstable_shouldYield,
    Ly = Re.unstable_requestPaint,
    q = Re.unstable_now,
    Ry = Re.unstable_getCurrentPriorityLevel,
    El = Re.unstable_ImmediatePriority,
    yh = Re.unstable_UserBlockingPriority,
    fs = Re.unstable_NormalPriority,
    Ay = Re.unstable_LowPriority,
    gh = Re.unstable_IdlePriority,
    Ks = null,
    nt = null;

function Dy(e) {
    if (nt && typeof nt.onCommitFiberRoot == "function") try {
        nt.onCommitFiberRoot(Ks, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Qe = Math.clz32 ? Math.clz32 : Fy,
    $y = Math.log,
    Vy = Math.LN2;

function Fy(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - ($y(e) / Vy | 0) | 0
}
var Ei = 64,
    Mi = 4194304;

function Sr(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function hs(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        i = e.suspendedLanes,
        s = e.pingedLanes,
        o = n & 268435455;
    if (o !== 0) {
        var a = o & ~i;
        a !== 0 ? r = Sr(a) : (s &= o, s !== 0 && (r = Sr(s)))
    } else o = n & ~i, o !== 0 ? r = Sr(o) : s !== 0 && (r = Sr(s));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, s = t & -t, i >= s || i === 16 && (s & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Qe(t), i = 1 << n, r |= e[n], t &= ~i;
    return r
}

function zy(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function _y(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s;) {
        var o = 31 - Qe(s),
            a = 1 << o,
            l = i[o];
        l === -1 ? (!(a & n) || a & r) && (i[o] = zy(a, t)) : l <= t && (e.expiredLanes |= a), s &= ~a
    }
}

function ga(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function vh() {
    var e = Ei;
    return Ei <<= 1, !(Ei & 4194240) && (Ei = 64), e
}

function xo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function fi(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Qe(t), e[t] = n
}

function Oy(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var i = 31 - Qe(n),
            s = 1 << i;
        t[i] = 0, r[i] = -1, e[i] = -1, n &= ~s
    }
}

function Ml(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - Qe(n),
            i = 1 << r;
        i & t | e[r] & t && (e[r] |= t), n &= ~i
    }
}
var F = 0;

function xh(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var wh, Ll, kh, Sh, Ch, va = !1,
    Li = [],
    Mt = null,
    Lt = null,
    Rt = null,
    Br = new Map,
    Ur = new Map,
    jt = [],
    Iy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function dc(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Mt = null;
            break;
        case "dragenter":
        case "dragleave":
            Lt = null;
            break;
        case "mouseover":
        case "mouseout":
            Rt = null;
            break;
        case "pointerover":
        case "pointerout":
            Br.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Ur.delete(t.pointerId)
    }
}

function hr(e, t, n, r, i, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i]
    }, t !== null && (t = pi(t), t !== null && Ll(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
}

function By(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return Mt = hr(Mt, e, t, n, r, i), !0;
        case "dragenter":
            return Lt = hr(Lt, e, t, n, r, i), !0;
        case "mouseover":
            return Rt = hr(Rt, e, t, n, r, i), !0;
        case "pointerover":
            var s = i.pointerId;
            return Br.set(s, hr(Br.get(s) || null, e, t, n, r, i)), !0;
        case "gotpointercapture":
            return s = i.pointerId, Ur.set(s, hr(Ur.get(s) || null, e, t, n, r, i)), !0
    }
    return !1
}

function jh(e) {
    var t = en(e.target);
    if (t !== null) {
        var n = gn(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = fh(n), t !== null) {
                    e.blockedOn = t, Ch(e.priority, function() {
                        kh(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Xi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = xa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            ha = r, n.target.dispatchEvent(r), ha = null
        } else return t = pi(n), t !== null && Ll(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function fc(e, t, n) {
    Xi(e) && n.delete(t)
}

function Uy() {
    va = !1, Mt !== null && Xi(Mt) && (Mt = null), Lt !== null && Xi(Lt) && (Lt = null), Rt !== null && Xi(Rt) && (Rt = null), Br.forEach(fc), Ur.forEach(fc)
}

function pr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, va || (va = !0, Re.unstable_scheduleCallback(Re.unstable_NormalPriority, Uy)))
}

function Wr(e) {
    function t(i) {
        return pr(i, e)
    }
    if (0 < Li.length) {
        pr(Li[0], e);
        for (var n = 1; n < Li.length; n++) {
            var r = Li[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Mt !== null && pr(Mt, e), Lt !== null && pr(Lt, e), Rt !== null && pr(Rt, e), Br.forEach(t), Ur.forEach(t), n = 0; n < jt.length; n++) r = jt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < jt.length && (n = jt[0], n.blockedOn === null);) jh(n), n.blockedOn === null && jt.shift()
}
var Hn = vt.ReactCurrentBatchConfig,
    ps = !0;

function Wy(e, t, n, r) {
    var i = F,
        s = Hn.transition;
    Hn.transition = null;
    try {
        F = 1, Rl(e, t, n, r)
    } finally {
        F = i, Hn.transition = s
    }
}

function Hy(e, t, n, r) {
    var i = F,
        s = Hn.transition;
    Hn.transition = null;
    try {
        F = 4, Rl(e, t, n, r)
    } finally {
        F = i, Hn.transition = s
    }
}

function Rl(e, t, n, r) {
    if (ps) {
        var i = xa(e, t, n, r);
        if (i === null) Eo(e, t, r, ms, n), dc(e, r);
        else if (By(i, e, t, n, r)) r.stopPropagation();
        else if (dc(e, r), t & 4 && -1 < Iy.indexOf(e)) {
            for (; i !== null;) {
                var s = pi(i);
                if (s !== null && wh(s), s = xa(e, t, n, r), s === null && Eo(e, t, r, ms, n), s === i) break;
                i = s
            }
            i !== null && r.stopPropagation()
        } else Eo(e, t, r, null, n)
    }
}
var ms = null;

function xa(e, t, n, r) {
    if (ms = null, e = Pl(r), e = en(e), e !== null)
        if (t = gn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = fh(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return ms = e, null
}

function bh(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Ry()) {
                case El:
                    return 1;
                case yh:
                    return 4;
                case fs:
                case Ay:
                    return 16;
                case gh:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Tt = null,
    Al = null,
    Yi = null;

function Th() {
    if (Yi) return Yi;
    var e, t = Al,
        n = t.length,
        r, i = "value" in Tt ? Tt.value : Tt.textContent,
        s = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
    return Yi = i.slice(e, 1 < r ? 1 - r : void 0)
}

function Qi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Ri() {
    return !0
}

function hc() {
    return !1
}

function De(e) {
    function t(n, r, i, s, o) {
        this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = s, this.target = o, this.currentTarget = null;
        for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(s) : s[a]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Ri : hc, this.isPropagationStopped = hc, this
    }
    return G(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ri)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ri)
        },
        persist: function() {},
        isPersistent: Ri
    }), t
}
var sr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    Dl = De(sr),
    hi = G({}, sr, {
        view: 0,
        detail: 0
    }),
    Ky = De(hi),
    wo, ko, mr, Gs = G({}, hi, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: $l,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== mr && (mr && e.type === "mousemove" ? (wo = e.screenX - mr.screenX, ko = e.screenY - mr.screenY) : ko = wo = 0, mr = e), wo)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : ko
        }
    }),
    pc = De(Gs),
    Gy = G({}, Gs, {
        dataTransfer: 0
    }),
    Xy = De(Gy),
    Yy = G({}, hi, {
        relatedTarget: 0
    }),
    So = De(Yy),
    Qy = G({}, sr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Zy = De(Qy),
    qy = G({}, sr, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    Jy = De(qy),
    eg = G({}, sr, {
        data: 0
    }),
    mc = De(eg),
    tg = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    ng = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    rg = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function ig(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = rg[e]) ? !!t[e] : !1
}

function $l() {
    return ig
}
var sg = G({}, hi, {
        key: function(e) {
            if (e.key) {
                var t = tg[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = Qi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ng[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: $l,
        charCode: function(e) {
            return e.type === "keypress" ? Qi(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Qi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    og = De(sg),
    ag = G({}, Gs, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    yc = De(ag),
    lg = G({}, hi, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: $l
    }),
    ug = De(lg),
    cg = G({}, sr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    dg = De(cg),
    fg = G({}, Gs, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    hg = De(fg),
    pg = [9, 13, 27, 32],
    Vl = ft && "CompositionEvent" in window,
    Nr = null;
ft && "documentMode" in document && (Nr = document.documentMode);
var mg = ft && "TextEvent" in window && !Nr,
    Nh = ft && (!Vl || Nr && 8 < Nr && 11 >= Nr),
    gc = " ",
    vc = !1;

function Ph(e, t) {
    switch (e) {
        case "keyup":
            return pg.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function Eh(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Nn = !1;

function yg(e, t) {
    switch (e) {
        case "compositionend":
            return Eh(t);
        case "keypress":
            return t.which !== 32 ? null : (vc = !0, gc);
        case "textInput":
            return e = t.data, e === gc && vc ? null : e;
        default:
            return null
    }
}

function gg(e, t) {
    if (Nn) return e === "compositionend" || !Vl && Ph(e, t) ? (e = Th(), Yi = Al = Tt = null, Nn = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Nh && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var vg = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function xc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!vg[e.type] : t === "textarea"
}

function Mh(e, t, n, r) {
    ah(r), t = ys(t, "onChange"), 0 < t.length && (n = new Dl("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var Pr = null,
    Hr = null;

function xg(e) {
    Ih(e, 0)
}

function Xs(e) {
    var t = Mn(e);
    if (eh(t)) return e
}

function wg(e, t) {
    if (e === "change") return t
}
var Lh = !1;
if (ft) {
    var Co;
    if (ft) {
        var jo = "oninput" in document;
        if (!jo) {
            var wc = document.createElement("div");
            wc.setAttribute("oninput", "return;"), jo = typeof wc.oninput == "function"
        }
        Co = jo
    } else Co = !1;
    Lh = Co && (!document.documentMode || 9 < document.documentMode)
}

function kc() {
    Pr && (Pr.detachEvent("onpropertychange", Rh), Hr = Pr = null)
}

function Rh(e) {
    if (e.propertyName === "value" && Xs(Hr)) {
        var t = [];
        Mh(t, Hr, e, Pl(e)), dh(xg, t)
    }
}

function kg(e, t, n) {
    e === "focusin" ? (kc(), Pr = t, Hr = n, Pr.attachEvent("onpropertychange", Rh)) : e === "focusout" && kc()
}

function Sg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Xs(Hr)
}

function Cg(e, t) {
    if (e === "click") return Xs(t)
}

function jg(e, t) {
    if (e === "input" || e === "change") return Xs(t)
}

function bg(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var qe = typeof Object.is == "function" ? Object.is : bg;

function Kr(e, t) {
    if (qe(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!ta.call(t, i) || !qe(e[i], t[i])) return !1
    }
    return !0
}

function Sc(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function Cc(e, t) {
    var n = Sc(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Sc(n)
    }
}

function Ah(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ah(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function Dh() {
    for (var e = window, t = us(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = us(e.document)
    }
    return t
}

function Fl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function Tg(e) {
    var t = Dh(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ah(n.ownerDocument.documentElement, n)) {
        if (r !== null && Fl(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length,
                    s = Math.min(r.start, i);
                r = r.end === void 0 ? s : Math.min(r.end, i), !e.extend && s > r && (i = r, r = s, s = i), i = Cc(n, s);
                var o = Cc(n, r);
                i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), s > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var Ng = ft && "documentMode" in document && 11 >= document.documentMode,
    Pn = null,
    wa = null,
    Er = null,
    ka = !1;

function jc(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ka || Pn == null || Pn !== us(r) || (r = Pn, "selectionStart" in r && Fl(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Er && Kr(Er, r) || (Er = r, r = ys(wa, "onSelect"), 0 < r.length && (t = new Dl("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = Pn)))
}

function Ai(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var En = {
        animationend: Ai("Animation", "AnimationEnd"),
        animationiteration: Ai("Animation", "AnimationIteration"),
        animationstart: Ai("Animation", "AnimationStart"),
        transitionend: Ai("Transition", "TransitionEnd")
    },
    bo = {},
    $h = {};
ft && ($h = document.createElement("div").style, "AnimationEvent" in window || (delete En.animationend.animation, delete En.animationiteration.animation, delete En.animationstart.animation), "TransitionEvent" in window || delete En.transitionend.transition);

function Ys(e) {
    if (bo[e]) return bo[e];
    if (!En[e]) return e;
    var t = En[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in $h) return bo[e] = t[n];
    return e
}
var Vh = Ys("animationend"),
    Fh = Ys("animationiteration"),
    zh = Ys("animationstart"),
    _h = Ys("transitionend"),
    Oh = new Map,
    bc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Ut(e, t) {
    Oh.set(e, t), yn(t, [e])
}
for (var To = 0; To < bc.length; To++) {
    var No = bc[To],
        Pg = No.toLowerCase(),
        Eg = No[0].toUpperCase() + No.slice(1);
    Ut(Pg, "on" + Eg)
}
Ut(Vh, "onAnimationEnd");
Ut(Fh, "onAnimationIteration");
Ut(zh, "onAnimationStart");
Ut("dblclick", "onDoubleClick");
Ut("focusin", "onFocus");
Ut("focusout", "onBlur");
Ut(_h, "onTransitionEnd");
Xn("onMouseEnter", ["mouseout", "mouseover"]);
Xn("onMouseLeave", ["mouseout", "mouseover"]);
Xn("onPointerEnter", ["pointerout", "pointerover"]);
Xn("onPointerLeave", ["pointerout", "pointerover"]);
yn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
yn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
yn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
yn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
yn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
yn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Cr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Mg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Cr));

function Tc(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Py(r, t, void 0, e), e.currentTarget = null
}

function Ih(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var a = r[o],
                        l = a.instance,
                        u = a.currentTarget;
                    if (a = a.listener, l !== s && i.isPropagationStopped()) break e;
                    Tc(i, a, u), s = l
                } else
                    for (o = 0; o < r.length; o++) {
                        if (a = r[o], l = a.instance, u = a.currentTarget, a = a.listener, l !== s && i.isPropagationStopped()) break e;
                        Tc(i, a, u), s = l
                    }
        }
    }
    if (ds) throw e = ya, ds = !1, ya = null, e
}

function O(e, t) {
    var n = t[Ta];
    n === void 0 && (n = t[Ta] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Bh(t, e, 2, !1), n.add(r))
}

function Po(e, t, n) {
    var r = 0;
    t && (r |= 4), Bh(n, e, r, t)
}
var Di = "_reactListening" + Math.random().toString(36).slice(2);

function Gr(e) {
    if (!e[Di]) {
        e[Di] = !0, Yf.forEach(function(n) {
            n !== "selectionchange" && (Mg.has(n) || Po(n, !1, e), Po(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Di] || (t[Di] = !0, Po("selectionchange", !1, t))
    }
}

function Bh(e, t, n, r) {
    switch (bh(t)) {
        case 1:
            var i = Wy;
            break;
        case 4:
            i = Hy;
            break;
        default:
            i = Rl
    }
    n = i.bind(null, t, n, e), i = void 0, !ma || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}

function Eo(e, t, n, r, i) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
            var a = r.stateNode.containerInfo;
            if (a === i || a.nodeType === 8 && a.parentNode === i) break;
            if (o === 4)
                for (o = r.return; o !== null;) {
                    var l = o.tag;
                    if ((l === 3 || l === 4) && (l = o.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i)) return;
                    o = o.return
                }
            for (; a !== null;) {
                if (o = en(a), o === null) return;
                if (l = o.tag, l === 5 || l === 6) {
                    r = s = o;
                    continue e
                }
                a = a.parentNode
            }
        }
        r = r.return
    }
    dh(function() {
        var u = s,
            d = Pl(n),
            f = [];
        e: {
            var h = Oh.get(e);
            if (h !== void 0) {
                var p = Dl,
                    x = e;
                switch (e) {
                    case "keypress":
                        if (Qi(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        p = og;
                        break;
                    case "focusin":
                        x = "focus", p = So;
                        break;
                    case "focusout":
                        x = "blur", p = So;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        p = So;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        p = pc;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        p = Xy;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        p = ug;
                        break;
                    case Vh:
                    case Fh:
                    case zh:
                        p = Zy;
                        break;
                    case _h:
                        p = dg;
                        break;
                    case "scroll":
                        p = Ky;
                        break;
                    case "wheel":
                        p = hg;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        p = Jy;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        p = yc
                }
                var v = (t & 4) !== 0,
                    S = !v && e === "scroll",
                    y = v ? h !== null ? h + "Capture" : null : h;
                v = [];
                for (var m = u, g; m !== null;) {
                    g = m;
                    var k = g.stateNode;
                    if (g.tag === 5 && k !== null && (g = k, y !== null && (k = Ir(m, y), k != null && v.push(Xr(m, k, g)))), S) break;
                    m = m.return
                }
                0 < v.length && (h = new p(h, x, null, n, d), f.push({
                    event: h,
                    listeners: v
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (h = e === "mouseover" || e === "pointerover", p = e === "mouseout" || e === "pointerout", h && n !== ha && (x = n.relatedTarget || n.fromElement) && (en(x) || x[ht])) break e;
                if ((p || h) && (h = d.window === d ? d : (h = d.ownerDocument) ? h.defaultView || h.parentWindow : window, p ? (x = n.relatedTarget || n.toElement, p = u, x = x ? en(x) : null, x !== null && (S = gn(x), x !== S || x.tag !== 5 && x.tag !== 6) && (x = null)) : (p = null, x = u), p !== x)) {
                    if (v = pc, k = "onMouseLeave", y = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (v = yc, k = "onPointerLeave", y = "onPointerEnter", m = "pointer"), S = p == null ? h : Mn(p), g = x == null ? h : Mn(x), h = new v(k, m + "leave", p, n, d), h.target = S, h.relatedTarget = g, k = null, en(d) === u && (v = new v(y, m + "enter", x, n, d), v.target = g, v.relatedTarget = S, k = v), S = k, p && x) t: {
                        for (v = p, y = x, m = 0, g = v; g; g = Cn(g)) m++;
                        for (g = 0, k = y; k; k = Cn(k)) g++;
                        for (; 0 < m - g;) v = Cn(v),
                        m--;
                        for (; 0 < g - m;) y = Cn(y),
                        g--;
                        for (; m--;) {
                            if (v === y || y !== null && v === y.alternate) break t;
                            v = Cn(v), y = Cn(y)
                        }
                        v = null
                    }
                    else v = null;
                    p !== null && Nc(f, h, p, v, !1), x !== null && S !== null && Nc(f, S, x, v, !0)
                }
            }
            e: {
                if (h = u ? Mn(u) : window, p = h.nodeName && h.nodeName.toLowerCase(), p === "select" || p === "input" && h.type === "file") var j = wg;
                else if (xc(h))
                    if (Lh) j = jg;
                    else {
                        j = Sg;
                        var C = kg
                    }
                else(p = h.nodeName) && p.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (j = Cg);
                if (j && (j = j(e, u))) {
                    Mh(f, j, n, d);
                    break e
                }
                C && C(e, h, u),
                e === "focusout" && (C = h._wrapperState) && C.controlled && h.type === "number" && la(h, "number", h.value)
            }
            switch (C = u ? Mn(u) : window, e) {
                case "focusin":
                    (xc(C) || C.contentEditable === "true") && (Pn = C, wa = u, Er = null);
                    break;
                case "focusout":
                    Er = wa = Pn = null;
                    break;
                case "mousedown":
                    ka = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    ka = !1, jc(f, n, d);
                    break;
                case "selectionchange":
                    if (Ng) break;
                case "keydown":
                case "keyup":
                    jc(f, n, d)
            }
            var T;
            if (Vl) e: {
                switch (e) {
                    case "compositionstart":
                        var b = "onCompositionStart";
                        break e;
                    case "compositionend":
                        b = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        b = "onCompositionUpdate";
                        break e
                }
                b = void 0
            }
            else Nn ? Ph(e, n) && (b = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");b && (Nh && n.locale !== "ko" && (Nn || b !== "onCompositionStart" ? b === "onCompositionEnd" && Nn && (T = Th()) : (Tt = d, Al = "value" in Tt ? Tt.value : Tt.textContent, Nn = !0)), C = ys(u, b), 0 < C.length && (b = new mc(b, e, null, n, d), f.push({
                event: b,
                listeners: C
            }), T ? b.data = T : (T = Eh(n), T !== null && (b.data = T)))),
            (T = mg ? yg(e, n) : gg(e, n)) && (u = ys(u, "onBeforeInput"), 0 < u.length && (d = new mc("onBeforeInput", "beforeinput", null, n, d), f.push({
                event: d,
                listeners: u
            }), d.data = T))
        }
        Ih(f, t)
    })
}

function Xr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function ys(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var i = e,
            s = i.stateNode;
        i.tag === 5 && s !== null && (i = s, s = Ir(e, n), s != null && r.unshift(Xr(e, s, i)), s = Ir(e, t), s != null && r.push(Xr(e, s, i))), e = e.return
    }
    return r
}

function Cn(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Nc(e, t, n, r, i) {
    for (var s = t._reactName, o = []; n !== null && n !== r;) {
        var a = n,
            l = a.alternate,
            u = a.stateNode;
        if (l !== null && l === r) break;
        a.tag === 5 && u !== null && (a = u, i ? (l = Ir(n, s), l != null && o.unshift(Xr(n, l, a))) : i || (l = Ir(n, s), l != null && o.push(Xr(n, l, a)))), n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var Lg = /\r\n?/g,
    Rg = /\u0000|\uFFFD/g;

function Pc(e) {
    return (typeof e == "string" ? e : "" + e).replace(Lg, `
`).replace(Rg, "")
}

function $i(e, t, n) {
    if (t = Pc(t), Pc(e) !== t && n) throw Error(N(425))
}

function gs() {}
var Sa = null,
    Ca = null;

function ja(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var ba = typeof setTimeout == "function" ? setTimeout : void 0,
    Ag = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ec = typeof Promise == "function" ? Promise : void 0,
    Dg = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ec < "u" ? function(e) {
        return Ec.resolve(null).then(e).catch($g)
    } : ba;

function $g(e) {
    setTimeout(function() {
        throw e
    })
}

function Mo(e, t) {
    var n = t,
        r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n), i && i.nodeType === 8)
            if (n = i.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(i), Wr(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    Wr(t)
}

function At(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function Mc(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var or = Math.random().toString(36).slice(2),
    tt = "__reactFiber$" + or,
    Yr = "__reactProps$" + or,
    ht = "__reactContainer$" + or,
    Ta = "__reactEvents$" + or,
    Vg = "__reactListeners$" + or,
    Fg = "__reactHandles$" + or;

function en(e) {
    var t = e[tt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[ht] || n[tt]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = Mc(e); e !== null;) {
                    if (n = e[tt]) return n;
                    e = Mc(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function pi(e) {
    return e = e[tt] || e[ht], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Mn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(N(33))
}

function Qs(e) {
    return e[Yr] || null
}
var Na = [],
    Ln = -1;

function Wt(e) {
    return {
        current: e
    }
}

function I(e) {
    0 > Ln || (e.current = Na[Ln], Na[Ln] = null, Ln--)
}

function _(e, t) {
    Ln++, Na[Ln] = e.current, e.current = t
}
var Ot = {},
    ge = Wt(Ot),
    Te = Wt(!1),
    dn = Ot;

function Yn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ot;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        s;
    for (s in n) i[s] = t[s];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
}

function Ne(e) {
    return e = e.childContextTypes, e != null
}

function vs() {
    I(Te), I(ge)
}

function Lc(e, t, n) {
    if (ge.current !== Ot) throw Error(N(168));
    _(ge, t), _(Te, n)
}

function Uh(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t)) throw Error(N(108, ky(e) || "Unknown", i));
    return G({}, n, r)
}

function xs(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ot, dn = ge.current, _(ge, e), _(Te, Te.current), !0
}

function Rc(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(N(169));
    n ? (e = Uh(e, t, dn), r.__reactInternalMemoizedMergedChildContext = e, I(Te), I(ge), _(ge, e)) : I(Te), _(Te, n)
}
var lt = null,
    Zs = !1,
    Lo = !1;

function Wh(e) {
    lt === null ? lt = [e] : lt.push(e)
}

function zg(e) {
    Zs = !0, Wh(e)
}

function Ht() {
    if (!Lo && lt !== null) {
        Lo = !0;
        var e = 0,
            t = F;
        try {
            var n = lt;
            for (F = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            lt = null, Zs = !1
        } catch (i) {
            throw lt !== null && (lt = lt.slice(e + 1)), mh(El, Ht), i
        } finally {
            F = t, Lo = !1
        }
    }
    return null
}
var Rn = [],
    An = 0,
    ws = null,
    ks = 0,
    ze = [],
    _e = 0,
    fn = null,
    ut = 1,
    ct = "";

function Zt(e, t) {
    Rn[An++] = ks, Rn[An++] = ws, ws = e, ks = t
}

function Hh(e, t, n) {
    ze[_e++] = ut, ze[_e++] = ct, ze[_e++] = fn, fn = e;
    var r = ut;
    e = ct;
    var i = 32 - Qe(r) - 1;
    r &= ~(1 << i), n += 1;
    var s = 32 - Qe(t) + i;
    if (30 < s) {
        var o = i - i % 5;
        s = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, ut = 1 << 32 - Qe(t) + i | n << i | r, ct = s + e
    } else ut = 1 << s | n << i | r, ct = e
}

function zl(e) {
    e.return !== null && (Zt(e, 1), Hh(e, 1, 0))
}

function _l(e) {
    for (; e === ws;) ws = Rn[--An], Rn[An] = null, ks = Rn[--An], Rn[An] = null;
    for (; e === fn;) fn = ze[--_e], ze[_e] = null, ct = ze[--_e], ze[_e] = null, ut = ze[--_e], ze[_e] = null
}
var Le = null,
    Me = null,
    B = !1,
    Ye = null;

function Kh(e, t) {
    var n = Oe(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Ac(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Le = e, Me = At(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Le = e, Me = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = fn !== null ? {
                id: ut,
                overflow: ct
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = Oe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Le = e, Me = null, !0) : !1;
        default:
            return !1
    }
}

function Pa(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Ea(e) {
    if (B) {
        var t = Me;
        if (t) {
            var n = t;
            if (!Ac(e, t)) {
                if (Pa(e)) throw Error(N(418));
                t = At(n.nextSibling);
                var r = Le;
                t && Ac(e, t) ? Kh(r, n) : (e.flags = e.flags & -4097 | 2, B = !1, Le = e)
            }
        } else {
            if (Pa(e)) throw Error(N(418));
            e.flags = e.flags & -4097 | 2, B = !1, Le = e
        }
    }
}

function Dc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Le = e
}

function Vi(e) {
    if (e !== Le) return !1;
    if (!B) return Dc(e), B = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ja(e.type, e.memoizedProps)), t && (t = Me)) {
        if (Pa(e)) throw Gh(), Error(N(418));
        for (; t;) Kh(e, t), t = At(t.nextSibling)
    }
    if (Dc(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(N(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Me = At(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Me = null
        }
    } else Me = Le ? At(e.stateNode.nextSibling) : null;
    return !0
}

function Gh() {
    for (var e = Me; e;) e = At(e.nextSibling)
}

function Qn() {
    Me = Le = null, B = !1
}

function Ol(e) {
    Ye === null ? Ye = [e] : Ye.push(e)
}
var _g = vt.ReactCurrentBatchConfig;

function yr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(N(309));
                var r = n.stateNode
            }
            if (!r) throw Error(N(147, e));
            var i = r,
                s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(o) {
                var a = i.refs;
                o === null ? delete a[s] : a[s] = o
            }, t._stringRef = s, t)
        }
        if (typeof e != "string") throw Error(N(284));
        if (!n._owner) throw Error(N(290, e))
    }
    return e
}

function Fi(e, t) {
    throw e = Object.prototype.toString.call(t), Error(N(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function $c(e) {
    var t = e._init;
    return t(e._payload)
}

function Xh(e) {
    function t(y, m) {
        if (e) {
            var g = y.deletions;
            g === null ? (y.deletions = [m], y.flags |= 16) : g.push(m)
        }
    }

    function n(y, m) {
        if (!e) return null;
        for (; m !== null;) t(y, m), m = m.sibling;
        return null
    }

    function r(y, m) {
        for (y = new Map; m !== null;) m.key !== null ? y.set(m.key, m) : y.set(m.index, m), m = m.sibling;
        return y
    }

    function i(y, m) {
        return y = Ft(y, m), y.index = 0, y.sibling = null, y
    }

    function s(y, m, g) {
        return y.index = g, e ? (g = y.alternate, g !== null ? (g = g.index, g < m ? (y.flags |= 2, m) : g) : (y.flags |= 2, m)) : (y.flags |= 1048576, m)
    }

    function o(y) {
        return e && y.alternate === null && (y.flags |= 2), y
    }

    function a(y, m, g, k) {
        return m === null || m.tag !== 6 ? (m = zo(g, y.mode, k), m.return = y, m) : (m = i(m, g), m.return = y, m)
    }

    function l(y, m, g, k) {
        var j = g.type;
        return j === Tn ? d(y, m, g.props.children, k, g.key) : m !== null && (m.elementType === j || typeof j == "object" && j !== null && j.$$typeof === St && $c(j) === m.type) ? (k = i(m, g.props), k.ref = yr(y, m, g), k.return = y, k) : (k = rs(g.type, g.key, g.props, null, y.mode, k), k.ref = yr(y, m, g), k.return = y, k)
    }

    function u(y, m, g, k) {
        return m === null || m.tag !== 4 || m.stateNode.containerInfo !== g.containerInfo || m.stateNode.implementation !== g.implementation ? (m = _o(g, y.mode, k), m.return = y, m) : (m = i(m, g.children || []), m.return = y, m)
    }

    function d(y, m, g, k, j) {
        return m === null || m.tag !== 7 ? (m = an(g, y.mode, k, j), m.return = y, m) : (m = i(m, g), m.return = y, m)
    }

    function f(y, m, g) {
        if (typeof m == "string" && m !== "" || typeof m == "number") return m = zo("" + m, y.mode, g), m.return = y, m;
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case Ti:
                    return g = rs(m.type, m.key, m.props, null, y.mode, g), g.ref = yr(y, null, m), g.return = y, g;
                case bn:
                    return m = _o(m, y.mode, g), m.return = y, m;
                case St:
                    var k = m._init;
                    return f(y, k(m._payload), g)
            }
            if (kr(m) || dr(m)) return m = an(m, y.mode, g, null), m.return = y, m;
            Fi(y, m)
        }
        return null
    }

    function h(y, m, g, k) {
        var j = m !== null ? m.key : null;
        if (typeof g == "string" && g !== "" || typeof g == "number") return j !== null ? null : a(y, m, "" + g, k);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case Ti:
                    return g.key === j ? l(y, m, g, k) : null;
                case bn:
                    return g.key === j ? u(y, m, g, k) : null;
                case St:
                    return j = g._init, h(y, m, j(g._payload), k)
            }
            if (kr(g) || dr(g)) return j !== null ? null : d(y, m, g, k, null);
            Fi(y, g)
        }
        return null
    }

    function p(y, m, g, k, j) {
        if (typeof k == "string" && k !== "" || typeof k == "number") return y = y.get(g) || null, a(m, y, "" + k, j);
        if (typeof k == "object" && k !== null) {
            switch (k.$$typeof) {
                case Ti:
                    return y = y.get(k.key === null ? g : k.key) || null, l(m, y, k, j);
                case bn:
                    return y = y.get(k.key === null ? g : k.key) || null, u(m, y, k, j);
                case St:
                    var C = k._init;
                    return p(y, m, g, C(k._payload), j)
            }
            if (kr(k) || dr(k)) return y = y.get(g) || null, d(m, y, k, j, null);
            Fi(m, k)
        }
        return null
    }

    function x(y, m, g, k) {
        for (var j = null, C = null, T = m, b = m = 0, D = null; T !== null && b < g.length; b++) {
            T.index > b ? (D = T, T = null) : D = T.sibling;
            var M = h(y, T, g[b], k);
            if (M === null) {
                T === null && (T = D);
                break
            }
            e && T && M.alternate === null && t(y, T), m = s(M, m, b), C === null ? j = M : C.sibling = M, C = M, T = D
        }
        if (b === g.length) return n(y, T), B && Zt(y, b), j;
        if (T === null) {
            for (; b < g.length; b++) T = f(y, g[b], k), T !== null && (m = s(T, m, b), C === null ? j = T : C.sibling = T, C = T);
            return B && Zt(y, b), j
        }
        for (T = r(y, T); b < g.length; b++) D = p(T, y, b, g[b], k), D !== null && (e && D.alternate !== null && T.delete(D.key === null ? b : D.key), m = s(D, m, b), C === null ? j = D : C.sibling = D, C = D);
        return e && T.forEach(function(J) {
            return t(y, J)
        }), B && Zt(y, b), j
    }

    function v(y, m, g, k) {
        var j = dr(g);
        if (typeof j != "function") throw Error(N(150));
        if (g = j.call(g), g == null) throw Error(N(151));
        for (var C = j = null, T = m, b = m = 0, D = null, M = g.next(); T !== null && !M.done; b++, M = g.next()) {
            T.index > b ? (D = T, T = null) : D = T.sibling;
            var J = h(y, T, M.value, k);
            if (J === null) {
                T === null && (T = D);
                break
            }
            e && T && J.alternate === null && t(y, T), m = s(J, m, b), C === null ? j = J : C.sibling = J, C = J, T = D
        }
        if (M.done) return n(y, T), B && Zt(y, b), j;
        if (T === null) {
            for (; !M.done; b++, M = g.next()) M = f(y, M.value, k), M !== null && (m = s(M, m, b), C === null ? j = M : C.sibling = M, C = M);
            return B && Zt(y, b), j
        }
        for (T = r(y, T); !M.done; b++, M = g.next()) M = p(T, y, b, M.value, k), M !== null && (e && M.alternate !== null && T.delete(M.key === null ? b : M.key), m = s(M, m, b), C === null ? j = M : C.sibling = M, C = M);
        return e && T.forEach(function(xt) {
            return t(y, xt)
        }), B && Zt(y, b), j
    }

    function S(y, m, g, k) {
        if (typeof g == "object" && g !== null && g.type === Tn && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case Ti:
                    e: {
                        for (var j = g.key, C = m; C !== null;) {
                            if (C.key === j) {
                                if (j = g.type, j === Tn) {
                                    if (C.tag === 7) {
                                        n(y, C.sibling), m = i(C, g.props.children), m.return = y, y = m;
                                        break e
                                    }
                                } else if (C.elementType === j || typeof j == "object" && j !== null && j.$$typeof === St && $c(j) === C.type) {
                                    n(y, C.sibling), m = i(C, g.props), m.ref = yr(y, C, g), m.return = y, y = m;
                                    break e
                                }
                                n(y, C);
                                break
                            } else t(y, C);
                            C = C.sibling
                        }
                        g.type === Tn ? (m = an(g.props.children, y.mode, k, g.key), m.return = y, y = m) : (k = rs(g.type, g.key, g.props, null, y.mode, k), k.ref = yr(y, m, g), k.return = y, y = k)
                    }
                    return o(y);
                case bn:
                    e: {
                        for (C = g.key; m !== null;) {
                            if (m.key === C)
                                if (m.tag === 4 && m.stateNode.containerInfo === g.containerInfo && m.stateNode.implementation === g.implementation) {
                                    n(y, m.sibling), m = i(m, g.children || []), m.return = y, y = m;
                                    break e
                                } else {
                                    n(y, m);
                                    break
                                }
                            else t(y, m);
                            m = m.sibling
                        }
                        m = _o(g, y.mode, k),
                        m.return = y,
                        y = m
                    }
                    return o(y);
                case St:
                    return C = g._init, S(y, m, C(g._payload), k)
            }
            if (kr(g)) return x(y, m, g, k);
            if (dr(g)) return v(y, m, g, k);
            Fi(y, g)
        }
        return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, m !== null && m.tag === 6 ? (n(y, m.sibling), m = i(m, g), m.return = y, y = m) : (n(y, m), m = zo(g, y.mode, k), m.return = y, y = m), o(y)) : n(y, m)
    }
    return S
}
var Zn = Xh(!0),
    Yh = Xh(!1),
    Ss = Wt(null),
    Cs = null,
    Dn = null,
    Il = null;

function Bl() {
    Il = Dn = Cs = null
}

function Ul(e) {
    var t = Ss.current;
    I(Ss), e._currentValue = t
}

function Ma(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function Kn(e, t) {
    Cs = e, Il = Dn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (je = !0), e.firstContext = null)
}

function Ue(e) {
    var t = e._currentValue;
    if (Il !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, Dn === null) {
            if (Cs === null) throw Error(N(308));
            Dn = e, Cs.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else Dn = Dn.next = e;
    return t
}
var tn = null;

function Wl(e) {
    tn === null ? tn = [e] : tn.push(e)
}

function Qh(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, Wl(t)) : (n.next = i.next, i.next = n), t.interleaved = n, pt(e, r)
}

function pt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Ct = !1;

function Hl(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function Zh(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function dt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function Dt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, V & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, pt(e, n)
    }
    return i = r.interleaved, i === null ? (t.next = t, Wl(r)) : (t.next = i.next, i.next = t), r.interleaved = t, pt(e, n)
}

function Zi(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Ml(e, n)
    }
}

function Vc(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var i = null,
            s = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? i = s = o : s = s.next = o, n = n.next
            } while (n !== null);
            s === null ? i = s = t : s = s.next = t
        } else i = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function js(e, t, n, r) {
    var i = e.updateQueue;
    Ct = !1;
    var s = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var l = a,
            u = l.next;
        l.next = null, o === null ? s = u : o.next = u, o = l;
        var d = e.alternate;
        d !== null && (d = d.updateQueue, a = d.lastBaseUpdate, a !== o && (a === null ? d.firstBaseUpdate = u : a.next = u, d.lastBaseUpdate = l))
    }
    if (s !== null) {
        var f = i.baseState;
        o = 0, d = u = l = null, a = s;
        do {
            var h = a.lane,
                p = a.eventTime;
            if ((r & h) === h) {
                d !== null && (d = d.next = {
                    eventTime: p,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var x = e,
                        v = a;
                    switch (h = t, p = n, v.tag) {
                        case 1:
                            if (x = v.payload, typeof x == "function") {
                                f = x.call(p, f, h);
                                break e
                            }
                            f = x;
                            break e;
                        case 3:
                            x.flags = x.flags & -65537 | 128;
                        case 0:
                            if (x = v.payload, h = typeof x == "function" ? x.call(p, f, h) : x, h == null) break e;
                            f = G({}, f, h);
                            break e;
                        case 2:
                            Ct = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64, h = i.effects, h === null ? i.effects = [a] : h.push(a))
            } else p = {
                eventTime: p,
                lane: h,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null
            }, d === null ? (u = d = p, l = f) : d = d.next = p, o |= h;
            if (a = a.next, a === null) {
                if (a = i.shared.pending, a === null) break;
                h = a, a = h.next, h.next = null, i.lastBaseUpdate = h, i.shared.pending = null
            }
        } while (!0);
        if (d === null && (l = f), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = d, t = i.shared.interleaved, t !== null) {
            i = t;
            do o |= i.lane, i = i.next; while (i !== t)
        } else s === null && (i.shared.lanes = 0);
        pn |= o, e.lanes = o, e.memoizedState = f
    }
}

function Fc(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback;
            if (i !== null) {
                if (r.callback = null, r = n, typeof i != "function") throw Error(N(191, i));
                i.call(r)
            }
        }
}
var mi = {},
    rt = Wt(mi),
    Qr = Wt(mi),
    Zr = Wt(mi);

function nn(e) {
    if (e === mi) throw Error(N(174));
    return e
}

function Kl(e, t) {
    switch (_(Zr, t), _(Qr, e), _(rt, mi), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : ca(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ca(t, e)
    }
    I(rt), _(rt, t)
}

function qn() {
    I(rt), I(Qr), I(Zr)
}

function qh(e) {
    nn(Zr.current);
    var t = nn(rt.current),
        n = ca(t, e.type);
    t !== n && (_(Qr, e), _(rt, n))
}

function Gl(e) {
    Qr.current === e && (I(rt), I(Qr))
}
var W = Wt(0);

function bs(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var Ro = [];

function Xl() {
    for (var e = 0; e < Ro.length; e++) Ro[e]._workInProgressVersionPrimary = null;
    Ro.length = 0
}
var qi = vt.ReactCurrentDispatcher,
    Ao = vt.ReactCurrentBatchConfig,
    hn = 0,
    K = null,
    ie = null,
    ae = null,
    Ts = !1,
    Mr = !1,
    qr = 0,
    Og = 0;

function he() {
    throw Error(N(321))
}

function Yl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!qe(e[n], t[n])) return !1;
    return !0
}

function Ql(e, t, n, r, i, s) {
    if (hn = s, K = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, qi.current = e === null || e.memoizedState === null ? Wg : Hg, e = n(r, i), Mr) {
        s = 0;
        do {
            if (Mr = !1, qr = 0, 25 <= s) throw Error(N(301));
            s += 1, ae = ie = null, t.updateQueue = null, qi.current = Kg, e = n(r, i)
        } while (Mr)
    }
    if (qi.current = Ns, t = ie !== null && ie.next !== null, hn = 0, ae = ie = K = null, Ts = !1, t) throw Error(N(300));
    return e
}

function Zl() {
    var e = qr !== 0;
    return qr = 0, e
}

function et() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ae === null ? K.memoizedState = ae = e : ae = ae.next = e, ae
}

function We() {
    if (ie === null) {
        var e = K.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = ie.next;
    var t = ae === null ? K.memoizedState : ae.next;
    if (t !== null) ae = t, ie = e;
    else {
        if (e === null) throw Error(N(310));
        ie = e, e = {
            memoizedState: ie.memoizedState,
            baseState: ie.baseState,
            baseQueue: ie.baseQueue,
            queue: ie.queue,
            next: null
        }, ae === null ? K.memoizedState = ae = e : ae = ae.next = e
    }
    return ae
}

function Jr(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Do(e) {
    var t = We(),
        n = t.queue;
    if (n === null) throw Error(N(311));
    n.lastRenderedReducer = e;
    var r = ie,
        i = r.baseQueue,
        s = n.pending;
    if (s !== null) {
        if (i !== null) {
            var o = i.next;
            i.next = s.next, s.next = o
        }
        r.baseQueue = i = s, n.pending = null
    }
    if (i !== null) {
        s = i.next, r = r.baseState;
        var a = o = null,
            l = null,
            u = s;
        do {
            var d = u.lane;
            if ((hn & d) === d) l !== null && (l = l.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var f = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = f, o = r) : l = l.next = f, K.lanes |= d, pn |= d
            }
            u = u.next
        } while (u !== null && u !== s);
        l === null ? o = r : l.next = a, qe(r, t.memoizedState) || (je = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = l, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        i = e;
        do s = i.lane, K.lanes |= s, pn |= s, i = i.next; while (i !== e)
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function $o(e) {
    var t = We(),
        n = t.queue;
    if (n === null) throw Error(N(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        s = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var o = i = i.next;
        do s = e(s, o.action), o = o.next; while (o !== i);
        qe(s, t.memoizedState) || (je = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s
    }
    return [s, r]
}

function Jh() {}

function ep(e, t) {
    var n = K,
        r = We(),
        i = t(),
        s = !qe(r.memoizedState, i);
    if (s && (r.memoizedState = i, je = !0), r = r.queue, ql(rp.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || ae !== null && ae.memoizedState.tag & 1) {
        if (n.flags |= 2048, ei(9, np.bind(null, n, r, i, t), void 0, null), le === null) throw Error(N(349));
        hn & 30 || tp(n, t, i)
    }
    return i
}

function tp(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = K.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, K.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function np(e, t, n, r) {
    t.value = n, t.getSnapshot = r, ip(t) && sp(e)
}

function rp(e, t, n) {
    return n(function() {
        ip(t) && sp(e)
    })
}

function ip(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !qe(e, n)
    } catch {
        return !0
    }
}

function sp(e) {
    var t = pt(e, 1);
    t !== null && Ze(t, e, 1, -1)
}

function zc(e) {
    var t = et();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Jr,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = Ug.bind(null, K, e), [t.memoizedState, e]
}

function ei(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = K.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, K.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function op() {
    return We().memoizedState
}

function Ji(e, t, n, r) {
    var i = et();
    K.flags |= e, i.memoizedState = ei(1 | t, n, void 0, r === void 0 ? null : r)
}

function qs(e, t, n, r) {
    var i = We();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (ie !== null) {
        var o = ie.memoizedState;
        if (s = o.destroy, r !== null && Yl(r, o.deps)) {
            i.memoizedState = ei(t, n, s, r);
            return
        }
    }
    K.flags |= e, i.memoizedState = ei(1 | t, n, s, r)
}

function _c(e, t) {
    return Ji(8390656, 8, e, t)
}

function ql(e, t) {
    return qs(2048, 8, e, t)
}

function ap(e, t) {
    return qs(4, 2, e, t)
}

function lp(e, t) {
    return qs(4, 4, e, t)
}

function up(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function cp(e, t, n) {
    return n = n != null ? n.concat([e]) : null, qs(4, 4, up.bind(null, t, e), n)
}

function Jl() {}

function dp(e, t) {
    var n = We();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Yl(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function fp(e, t) {
    var n = We();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Yl(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function hp(e, t, n) {
    return hn & 21 ? (qe(n, t) || (n = vh(), K.lanes |= n, pn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, je = !0), e.memoizedState = n)
}

function Ig(e, t) {
    var n = F;
    F = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Ao.transition;
    Ao.transition = {};
    try {
        e(!1), t()
    } finally {
        F = n, Ao.transition = r
    }
}

function pp() {
    return We().memoizedState
}

function Bg(e, t, n) {
    var r = Vt(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, mp(e)) yp(t, n);
    else if (n = Qh(e, t, n, r), n !== null) {
        var i = we();
        Ze(n, e, r, i), gp(n, t, r)
    }
}

function Ug(e, t, n) {
    var r = Vt(e),
        i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (mp(e)) yp(t, i);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
            var o = t.lastRenderedState,
                a = s(o, n);
            if (i.hasEagerState = !0, i.eagerState = a, qe(a, o)) {
                var l = t.interleaved;
                l === null ? (i.next = i, Wl(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
                return
            }
        } catch {} finally {}
        n = Qh(e, t, i, r), n !== null && (i = we(), Ze(n, e, r, i), gp(n, t, r))
    }
}

function mp(e) {
    var t = e.alternate;
    return e === K || t !== null && t === K
}

function yp(e, t) {
    Mr = Ts = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function gp(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Ml(e, n)
    }
}
var Ns = {
        readContext: Ue,
        useCallback: he,
        useContext: he,
        useEffect: he,
        useImperativeHandle: he,
        useInsertionEffect: he,
        useLayoutEffect: he,
        useMemo: he,
        useReducer: he,
        useRef: he,
        useState: he,
        useDebugValue: he,
        useDeferredValue: he,
        useTransition: he,
        useMutableSource: he,
        useSyncExternalStore: he,
        useId: he,
        unstable_isNewReconciler: !1
    },
    Wg = {
        readContext: Ue,
        useCallback: function(e, t) {
            return et().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: Ue,
        useEffect: _c,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, Ji(4194308, 4, up.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return Ji(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return Ji(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = et();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = et();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = Bg.bind(null, K, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = et();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: zc,
        useDebugValue: Jl,
        useDeferredValue: function(e) {
            return et().memoizedState = e
        },
        useTransition: function() {
            var e = zc(!1),
                t = e[0];
            return e = Ig.bind(null, e[1]), et().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = K,
                i = et();
            if (B) {
                if (n === void 0) throw Error(N(407));
                n = n()
            } else {
                if (n = t(), le === null) throw Error(N(349));
                hn & 30 || tp(r, t, n)
            }
            i.memoizedState = n;
            var s = {
                value: n,
                getSnapshot: t
            };
            return i.queue = s, _c(rp.bind(null, r, s, e), [e]), r.flags |= 2048, ei(9, np.bind(null, r, s, n, t), void 0, null), n
        },
        useId: function() {
            var e = et(),
                t = le.identifierPrefix;
            if (B) {
                var n = ct,
                    r = ut;
                n = (r & ~(1 << 32 - Qe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = qr++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = Og++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    Hg = {
        readContext: Ue,
        useCallback: dp,
        useContext: Ue,
        useEffect: ql,
        useImperativeHandle: cp,
        useInsertionEffect: ap,
        useLayoutEffect: lp,
        useMemo: fp,
        useReducer: Do,
        useRef: op,
        useState: function() {
            return Do(Jr)
        },
        useDebugValue: Jl,
        useDeferredValue: function(e) {
            var t = We();
            return hp(t, ie.memoizedState, e)
        },
        useTransition: function() {
            var e = Do(Jr)[0],
                t = We().memoizedState;
            return [e, t]
        },
        useMutableSource: Jh,
        useSyncExternalStore: ep,
        useId: pp,
        unstable_isNewReconciler: !1
    },
    Kg = {
        readContext: Ue,
        useCallback: dp,
        useContext: Ue,
        useEffect: ql,
        useImperativeHandle: cp,
        useInsertionEffect: ap,
        useLayoutEffect: lp,
        useMemo: fp,
        useReducer: $o,
        useRef: op,
        useState: function() {
            return $o(Jr)
        },
        useDebugValue: Jl,
        useDeferredValue: function(e) {
            var t = We();
            return ie === null ? t.memoizedState = e : hp(t, ie.memoizedState, e)
        },
        useTransition: function() {
            var e = $o(Jr)[0],
                t = We().memoizedState;
            return [e, t]
        },
        useMutableSource: Jh,
        useSyncExternalStore: ep,
        useId: pp,
        unstable_isNewReconciler: !1
    };

function Ge(e, t) {
    if (e && e.defaultProps) {
        t = G({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function La(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : G({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Js = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? gn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = we(),
            i = Vt(e),
            s = dt(r, i);
        s.payload = t, n != null && (s.callback = n), t = Dt(e, s, i), t !== null && (Ze(t, e, i, r), Zi(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = we(),
            i = Vt(e),
            s = dt(r, i);
        s.tag = 1, s.payload = t, n != null && (s.callback = n), t = Dt(e, s, i), t !== null && (Ze(t, e, i, r), Zi(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = we(),
            r = Vt(e),
            i = dt(n, r);
        i.tag = 2, t != null && (i.callback = t), t = Dt(e, i, r), t !== null && (Ze(t, e, r, n), Zi(t, e, r))
    }
};

function Oc(e, t, n, r, i, s, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, o) : t.prototype && t.prototype.isPureReactComponent ? !Kr(n, r) || !Kr(i, s) : !0
}

function vp(e, t, n) {
    var r = !1,
        i = Ot,
        s = t.contextType;
    return typeof s == "object" && s !== null ? s = Ue(s) : (i = Ne(t) ? dn : ge.current, r = t.contextTypes, s = (r = r != null) ? Yn(e, i) : Ot), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Js, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = s), t
}

function Ic(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Js.enqueueReplaceState(t, t.state, null)
}

function Ra(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, Hl(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? i.context = Ue(s) : (s = Ne(t) ? dn : ge.current, i.context = Yn(e, s)), i.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (La(e, t, s, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Js.enqueueReplaceState(i, i.state, null), js(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}

function Jn(e, t) {
    try {
        var n = "",
            r = t;
        do n += wy(r), r = r.return; while (r);
        var i = n
    } catch (s) {
        i = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}

function Vo(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ? ? null,
        digest: t ? ? null
    }
}

function Aa(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Gg = typeof WeakMap == "function" ? WeakMap : Map;

function xp(e, t, n) {
    n = dt(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Es || (Es = !0, Ua = r), Aa(e, t)
    }, n
}

function wp(e, t, n) {
    n = dt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }, n.callback = function() {
            Aa(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        Aa(e, t), typeof r != "function" && ($t === null ? $t = new Set([this]) : $t.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }), n
}

function Bc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Gg;
        var i = new Set;
        r.set(t, i)
    } else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
    i.has(n) || (i.add(n), e = a1.bind(null, e, t, n), t.then(e, e))
}

function Uc(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function Wc(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = dt(-1, 1), t.tag = 2, Dt(n, t, 1))), n.lanes |= 1), e)
}
var Xg = vt.ReactCurrentOwner,
    je = !1;

function ve(e, t, n, r) {
    t.child = e === null ? Yh(t, null, n, r) : Zn(t, e.child, n, r)
}

function Hc(e, t, n, r, i) {
    n = n.render;
    var s = t.ref;
    return Kn(t, i), r = Ql(e, t, n, r, s, i), n = Zl(), e !== null && !je ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, mt(e, t, i)) : (B && n && zl(t), t.flags |= 1, ve(e, t, r, i), t.child)
}

function Kc(e, t, n, r, i) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !au(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, kp(e, t, s, r, i)) : (e = rs(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (s = e.child, !(e.lanes & i)) {
        var o = s.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Kr, n(o, r) && e.ref === t.ref) return mt(e, t, i)
    }
    return t.flags |= 1, e = Ft(s, r), e.ref = t.ref, e.return = t, t.child = e
}

function kp(e, t, n, r, i) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (Kr(s, r) && e.ref === t.ref)
            if (je = !1, t.pendingProps = r = s, (e.lanes & i) !== 0) e.flags & 131072 && (je = !0);
            else return t.lanes = e.lanes, mt(e, t, i)
    }
    return Da(e, t, n, r, i)
}

function Sp(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, _(Vn, Ee), Ee |= n;
        else {
            if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, _(Vn, Ee), Ee |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = s !== null ? s.baseLanes : n, _(Vn, Ee), Ee |= r
        }
    else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, _(Vn, Ee), Ee |= r;
    return ve(e, t, i, n), t.child
}

function Cp(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Da(e, t, n, r, i) {
    var s = Ne(n) ? dn : ge.current;
    return s = Yn(t, s), Kn(t, i), n = Ql(e, t, n, r, s, i), r = Zl(), e !== null && !je ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, mt(e, t, i)) : (B && r && zl(t), t.flags |= 1, ve(e, t, n, i), t.child)
}

function Gc(e, t, n, r, i) {
    if (Ne(n)) {
        var s = !0;
        xs(t)
    } else s = !1;
    if (Kn(t, i), t.stateNode === null) es(e, t), vp(t, n, r), Ra(t, n, r, i), r = !0;
    else if (e === null) {
        var o = t.stateNode,
            a = t.memoizedProps;
        o.props = a;
        var l = o.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? u = Ue(u) : (u = Ne(n) ? dn : ge.current, u = Yn(t, u));
        var d = n.getDerivedStateFromProps,
            f = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        f || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== r || l !== u) && Ic(t, o, r, u), Ct = !1;
        var h = t.memoizedState;
        o.state = h, js(t, r, o, i), l = t.memoizedState, a !== r || h !== l || Te.current || Ct ? (typeof d == "function" && (La(t, n, d, r), l = t.memoizedState), (a = Ct || Oc(t, n, a, r, h, l, u)) ? (f || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), o.props = r, o.state = l, o.context = u, r = a) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        o = t.stateNode, Zh(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : Ge(t.type, a), o.props = u, f = t.pendingProps, h = o.context, l = n.contextType, typeof l == "object" && l !== null ? l = Ue(l) : (l = Ne(n) ? dn : ge.current, l = Yn(t, l));
        var p = n.getDerivedStateFromProps;
        (d = typeof p == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== f || h !== l) && Ic(t, o, r, l), Ct = !1, h = t.memoizedState, o.state = h, js(t, r, o, i);
        var x = t.memoizedState;
        a !== f || h !== x || Te.current || Ct ? (typeof p == "function" && (La(t, n, p, r), x = t.memoizedState), (u = Ct || Oc(t, n, u, r, h, x, l) || !1) ? (d || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, x, l), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, x, l)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), o.props = r, o.state = x, o.context = l, r = u) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return $a(e, t, n, r, s, i)
}

function $a(e, t, n, r, i, s) {
    Cp(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return i && Rc(t, n, !1), mt(e, t, s);
    r = t.stateNode, Xg.current = t;
    var a = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = Zn(t, e.child, null, s), t.child = Zn(t, null, a, s)) : ve(e, t, a, s), t.memoizedState = r.state, i && Rc(t, n, !0), t.child
}

function jp(e) {
    var t = e.stateNode;
    t.pendingContext ? Lc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Lc(e, t.context, !1), Kl(e, t.containerInfo)
}

function Xc(e, t, n, r, i) {
    return Qn(), Ol(i), t.flags |= 256, ve(e, t, n, r), t.child
}
var Va = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function Fa(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function bp(e, t, n) {
    var r = t.pendingProps,
        i = W.current,
        s = !1,
        o = (t.flags & 128) !== 0,
        a;
    if ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), a ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), _(W, i & 1), e === null) return Ea(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, o = {
        mode: "hidden",
        children: o
    }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = o) : s = no(o, r, 0, null), e = an(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Fa(n), t.memoizedState = Va, e) : eu(t, o));
    if (i = e.memoizedState, i !== null && (a = i.dehydrated, a !== null)) return Yg(e, t, o, r, a, i, n);
    if (s) {
        s = r.fallback, o = t.mode, i = e.child, a = i.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Ft(i, l), r.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? s = Ft(a, s) : (s = an(s, o, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, o = e.child.memoizedState, o = o === null ? Fa(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        }, s.memoizedState = o, s.childLanes = e.childLanes & ~n, t.memoizedState = Va, r
    }
    return s = e.child, e = s.sibling, r = Ft(s, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function eu(e, t) {
    return t = no({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function zi(e, t, n, r) {
    return r !== null && Ol(r), Zn(t, e.child, null, n), e = eu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function Yg(e, t, n, r, i, s, o) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = Vo(Error(N(422))), zi(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, i = t.mode, r = no({
        mode: "visible",
        children: r.children
    }, i, 0, null), s = an(s, i, o, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && Zn(t, e.child, null, o), t.child.memoizedState = Fa(o), t.memoizedState = Va, s);
    if (!(t.mode & 1)) return zi(e, t, o, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset, r) var a = r.dgst;
        return r = a, s = Error(N(419)), r = Vo(s, r, void 0), zi(e, t, o, r)
    }
    if (a = (o & e.childLanes) !== 0, je || a) {
        if (r = le, r !== null) {
            switch (o & -o) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0
            }
            i = i & (r.suspendedLanes | o) ? 0 : i, i !== 0 && i !== s.retryLane && (s.retryLane = i, pt(e, i), Ze(r, e, i, -1))
        }
        return ou(), r = Vo(Error(N(421))), zi(e, t, o, r)
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = l1.bind(null, e), i._reactRetry = t, null) : (e = s.treeContext, Me = At(i.nextSibling), Le = t, B = !0, Ye = null, e !== null && (ze[_e++] = ut, ze[_e++] = ct, ze[_e++] = fn, ut = e.id, ct = e.overflow, fn = t), t = eu(t, r.children), t.flags |= 4096, t)
}

function Yc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ma(e.return, t, n)
}

function Fo(e, t, n, r, i) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = i)
}

function Tp(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        s = r.tail;
    if (ve(e, t, r.children, n), r = W.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Yc(e, n, t);
            else if (e.tag === 19) Yc(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (_(W, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (i) {
        case "forwards":
            for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && bs(e) === null && (i = n), n = n.sibling;
            n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Fo(t, !1, i, n, s);
            break;
        case "backwards":
            for (n = null, i = t.child, t.child = null; i !== null;) {
                if (e = i.alternate, e !== null && bs(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling, i.sibling = n, n = i, i = e
            }
            Fo(t, !0, n, null, s);
            break;
        case "together":
            Fo(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function es(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function mt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), pn |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(N(153));
    if (t.child !== null) {
        for (e = t.child, n = Ft(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Ft(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function Qg(e, t, n) {
    switch (t.tag) {
        case 3:
            jp(t), Qn();
            break;
        case 5:
            qh(t);
            break;
        case 1:
            Ne(t.type) && xs(t);
            break;
        case 4:
            Kl(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                i = t.memoizedProps.value;
            _(Ss, r._currentValue), r._currentValue = i;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (_(W, W.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? bp(e, t, n) : (_(W, W.current & 1), e = mt(e, t, n), e !== null ? e.sibling : null);
            _(W, W.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return Tp(e, t, n);
                t.flags |= 128
            }
            if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), _(W, W.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Sp(e, t, n)
    }
    return mt(e, t, n)
}
var Np, za, Pp, Ep;
Np = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
za = function() {};
Pp = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode, nn(rt.current);
        var s = null;
        switch (n) {
            case "input":
                i = oa(e, i), r = oa(e, r), s = [];
                break;
            case "select":
                i = G({}, i, {
                    value: void 0
                }), r = G({}, r, {
                    value: void 0
                }), s = [];
                break;
            case "textarea":
                i = ua(e, i), r = ua(e, r), s = [];
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = gs)
        }
        da(n, r);
        var o;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var a = i[u];
                    for (o in a) a.hasOwnProperty(o) && (n || (n = {}), n[o] = "")
                } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (_r.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = i != null ? i[u] : void 0, r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (o in a) !a.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
                        for (o in l) l.hasOwnProperty(o) && a[o] !== l[o] && (n || (n = {}), n[o] = l[o])
                    } else n || (s || (s = []), s.push(u, n)), n = l;
            else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (s = s || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (_r.hasOwnProperty(u) ? (l != null && u === "onScroll" && O("scroll", e), s || a === l || (s = [])) : (s = s || []).push(u, l))
        }
        n && (s = s || []).push("style", n);
        var u = s;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
Ep = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function gr(e, t) {
    if (!B) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function pe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else
        for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function Zg(e, t, n) {
    var r = t.pendingProps;
    switch (_l(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return pe(t), null;
        case 1:
            return Ne(t.type) && vs(), pe(t), null;
        case 3:
            return r = t.stateNode, qn(), I(Te), I(ge), Xl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Vi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ye !== null && (Ka(Ye), Ye = null))), za(e, t), pe(t), null;
        case 5:
            Gl(t);
            var i = nn(Zr.current);
            if (n = t.type, e !== null && t.stateNode != null) Pp(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(N(166));
                    return pe(t), null
                }
                if (e = nn(rt.current), Vi(t)) {
                    r = t.stateNode, n = t.type;
                    var s = t.memoizedProps;
                    switch (r[tt] = t, r[Yr] = s, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            O("cancel", r), O("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            O("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < Cr.length; i++) O(Cr[i], r);
                            break;
                        case "source":
                            O("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            O("error", r), O("load", r);
                            break;
                        case "details":
                            O("toggle", r);
                            break;
                        case "input":
                            ic(r, s), O("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!s.multiple
                            }, O("invalid", r);
                            break;
                        case "textarea":
                            oc(r, s), O("invalid", r)
                    }
                    da(n, s), i = null;
                    for (var o in s)
                        if (s.hasOwnProperty(o)) {
                            var a = s[o];
                            o === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && $i(r.textContent, a, e), i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && $i(r.textContent, a, e), i = ["children", "" + a]) : _r.hasOwnProperty(o) && a != null && o === "onScroll" && O("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            Ni(r), sc(r, s, !0);
                            break;
                        case "textarea":
                            Ni(r), ac(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof s.onClick == "function" && (r.onclick = gs)
                    }
                    r = i, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    o = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = rh(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                        is: r.is
                    }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[tt] = t, e[Yr] = r, Np(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (o = fa(n, r), n) {
                            case "dialog":
                                O("cancel", e), O("close", e), i = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                O("load", e), i = r;
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < Cr.length; i++) O(Cr[i], e);
                                i = r;
                                break;
                            case "source":
                                O("error", e), i = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                O("error", e), O("load", e), i = r;
                                break;
                            case "details":
                                O("toggle", e), i = r;
                                break;
                            case "input":
                                ic(e, r), i = oa(e, r), O("invalid", e);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, i = G({}, r, {
                                    value: void 0
                                }), O("invalid", e);
                                break;
                            case "textarea":
                                oc(e, r), i = ua(e, r), O("invalid", e);
                                break;
                            default:
                                i = r
                        }
                        da(n, i),
                        a = i;
                        for (s in a)
                            if (a.hasOwnProperty(s)) {
                                var l = a[s];
                                s === "style" ? oh(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && ih(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Or(e, l) : typeof l == "number" && Or(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (_r.hasOwnProperty(s) ? l != null && s === "onScroll" && O("scroll", e) : l != null && jl(e, s, l, o))
                            }
                        switch (n) {
                            case "input":
                                Ni(e), sc(e, r, !1);
                                break;
                            case "textarea":
                                Ni(e), ac(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + _t(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, s = r.value, s != null ? Bn(e, !!r.multiple, s, !1) : r.defaultValue != null && Bn(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = gs)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return pe(t), null;
        case 6:
            if (e && t.stateNode != null) Ep(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
                if (n = nn(Zr.current), nn(rt.current), Vi(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[tt] = t, (s = r.nodeValue !== n) && (e = Le, e !== null)) switch (e.tag) {
                        case 3:
                            $i(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && $i(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    s && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[tt] = t, t.stateNode = r
            }
            return pe(t), null;
        case 13:
            if (I(W), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (B && Me !== null && t.mode & 1 && !(t.flags & 128)) Gh(), Qn(), t.flags |= 98560, s = !1;
                else if (s = Vi(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!s) throw Error(N(318));
                        if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(N(317));
                        s[tt] = t
                    } else Qn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    pe(t), s = !1
                } else Ye !== null && (Ka(Ye), Ye = null), s = !0;
                if (!s) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || W.current & 1 ? se === 0 && (se = 3) : ou())), t.updateQueue !== null && (t.flags |= 4), pe(t), null);
        case 4:
            return qn(), za(e, t), e === null && Gr(t.stateNode.containerInfo), pe(t), null;
        case 10:
            return Ul(t.type._context), pe(t), null;
        case 17:
            return Ne(t.type) && vs(), pe(t), null;
        case 19:
            if (I(W), s = t.memoizedState, s === null) return pe(t), null;
            if (r = (t.flags & 128) !== 0, o = s.rendering, o === null)
                if (r) gr(s, !1);
                else {
                    if (se !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (o = bs(e), o !== null) {
                                for (t.flags |= 128, gr(s, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) s = n, e = r, s.flags &= 14680066, o = s.alternate, o === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = o.childLanes, s.lanes = o.lanes, s.child = o.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = o.memoizedProps, s.memoizedState = o.memoizedState, s.updateQueue = o.updateQueue, s.type = o.type, e = o.dependencies, s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return _(W, W.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    s.tail !== null && q() > er && (t.flags |= 128, r = !0, gr(s, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = bs(o), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), gr(s, !0), s.tail === null && s.tailMode === "hidden" && !o.alternate && !B) return pe(t), null
                    } else 2 * q() - s.renderingStartTime > er && n !== 1073741824 && (t.flags |= 128, r = !0, gr(s, !1), t.lanes = 4194304);
                s.isBackwards ? (o.sibling = t.child, t.child = o) : (n = s.last, n !== null ? n.sibling = o : t.child = o, s.last = o)
            }
            return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = q(), t.sibling = null, n = W.current, _(W, r ? n & 1 | 2 : n & 1), t) : (pe(t), null);
        case 22:
        case 23:
            return su(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ee & 1073741824 && (pe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : pe(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(N(156, t.tag))
}

function qg(e, t) {
    switch (_l(t), t.tag) {
        case 1:
            return Ne(t.type) && vs(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return qn(), I(Te), I(ge), Xl(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return Gl(t), null;
        case 13:
            if (I(W), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(N(340));
                Qn()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return I(W), null;
        case 4:
            return qn(), null;
        case 10:
            return Ul(t.type._context), null;
        case 22:
        case 23:
            return su(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var _i = !1,
    me = !1,
    Jg = typeof WeakSet == "function" ? WeakSet : Set,
    E = null;

function $n(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            Y(e, t, r)
        } else n.current = null
}

function _a(e, t, n) {
    try {
        n()
    } catch (r) {
        Y(e, t, r)
    }
}
var Qc = !1;

function e1(e, t) {
    if (Sa = ps, e = Dh(), Fl(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var i = r.anchorOffset,
                    s = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, s.nodeType
                } catch {
                    n = null;
                    break e
                }
                var o = 0,
                    a = -1,
                    l = -1,
                    u = 0,
                    d = 0,
                    f = e,
                    h = null;
                t: for (;;) {
                    for (var p; f !== n || i !== 0 && f.nodeType !== 3 || (a = o + i), f !== s || r !== 0 && f.nodeType !== 3 || (l = o + r), f.nodeType === 3 && (o += f.nodeValue.length), (p = f.firstChild) !== null;) h = f, f = p;
                    for (;;) {
                        if (f === e) break t;
                        if (h === n && ++u === i && (a = o), h === s && ++d === r && (l = o), (p = f.nextSibling) !== null) break;
                        f = h, h = f.parentNode
                    }
                    f = p
                }
                n = a === -1 || l === -1 ? null : {
                    start: a,
                    end: l
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (Ca = {
            focusedElem: e,
            selectionRange: n
        }, ps = !1, E = t; E !== null;)
        if (t = E, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, E = e;
        else
            for (; E !== null;) {
                t = E;
                try {
                    var x = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (x !== null) {
                                var v = x.memoizedProps,
                                    S = x.memoizedState,
                                    y = t.stateNode,
                                    m = y.getSnapshotBeforeUpdate(t.elementType === t.type ? v : Ge(t.type, v), S);
                                y.__reactInternalSnapshotBeforeUpdate = m
                            }
                            break;
                        case 3:
                            var g = t.stateNode.containerInfo;
                            g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(N(163))
                    }
                } catch (k) {
                    Y(t, t.return, k)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, E = e;
                    break
                }
                E = t.return
            }
    return x = Qc, Qc = !1, x
}

function Lr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var s = i.destroy;
                i.destroy = void 0, s !== void 0 && _a(t, n, s)
            }
            i = i.next
        } while (i !== r)
    }
}

function eo(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Oa(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function Mp(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Mp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[tt], delete t[Yr], delete t[Ta], delete t[Vg], delete t[Fg])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Lp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Zc(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || Lp(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Ia(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = gs));
    else if (r !== 4 && (e = e.child, e !== null))
        for (Ia(e, t, n), e = e.sibling; e !== null;) Ia(e, t, n), e = e.sibling
}

function Ba(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (Ba(e, t, n), e = e.sibling; e !== null;) Ba(e, t, n), e = e.sibling
}
var ue = null,
    Xe = !1;

function wt(e, t, n) {
    for (n = n.child; n !== null;) Rp(e, t, n), n = n.sibling
}

function Rp(e, t, n) {
    if (nt && typeof nt.onCommitFiberUnmount == "function") try {
        nt.onCommitFiberUnmount(Ks, n)
    } catch {}
    switch (n.tag) {
        case 5:
            me || $n(n, t);
        case 6:
            var r = ue,
                i = Xe;
            ue = null, wt(e, t, n), ue = r, Xe = i, ue !== null && (Xe ? (e = ue, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ue.removeChild(n.stateNode));
            break;
        case 18:
            ue !== null && (Xe ? (e = ue, n = n.stateNode, e.nodeType === 8 ? Mo(e.parentNode, n) : e.nodeType === 1 && Mo(e, n), Wr(e)) : Mo(ue, n.stateNode));
            break;
        case 4:
            r = ue, i = Xe, ue = n.stateNode.containerInfo, Xe = !0, wt(e, t, n), ue = r, Xe = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!me && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                i = r = r.next;
                do {
                    var s = i,
                        o = s.destroy;
                    s = s.tag, o !== void 0 && (s & 2 || s & 4) && _a(n, t, o), i = i.next
                } while (i !== r)
            }
            wt(e, t, n);
            break;
        case 1:
            if (!me && ($n(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (a) {
                Y(n, t, a)
            }
            wt(e, t, n);
            break;
        case 21:
            wt(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (me = (r = me) || n.memoizedState !== null, wt(e, t, n), me = r) : wt(e, t, n);
            break;
        default:
            wt(e, t, n)
    }
}

function qc(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Jg), t.forEach(function(r) {
            var i = u1.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(i, i))
        })
    }
}

function He(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var s = e,
                    o = t,
                    a = o;
                e: for (; a !== null;) {
                    switch (a.tag) {
                        case 5:
                            ue = a.stateNode, Xe = !1;
                            break e;
                        case 3:
                            ue = a.stateNode.containerInfo, Xe = !0;
                            break e;
                        case 4:
                            ue = a.stateNode.containerInfo, Xe = !0;
                            break e
                    }
                    a = a.return
                }
                if (ue === null) throw Error(N(160));
                Rp(s, o, i), ue = null, Xe = !1;
                var l = i.alternate;
                l !== null && (l.return = null), i.return = null
            } catch (u) {
                Y(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) Ap(t, e), t = t.sibling
}

function Ap(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (He(t, e), Je(e), r & 4) {
                try {
                    Lr(3, e, e.return), eo(3, e)
                } catch (v) {
                    Y(e, e.return, v)
                }
                try {
                    Lr(5, e, e.return)
                } catch (v) {
                    Y(e, e.return, v)
                }
            }
            break;
        case 1:
            He(t, e), Je(e), r & 512 && n !== null && $n(n, n.return);
            break;
        case 5:
            if (He(t, e), Je(e), r & 512 && n !== null && $n(n, n.return), e.flags & 32) {
                var i = e.stateNode;
                try {
                    Or(i, "")
                } catch (v) {
                    Y(e, e.return, v)
                }
            }
            if (r & 4 && (i = e.stateNode, i != null)) {
                var s = e.memoizedProps,
                    o = n !== null ? n.memoizedProps : s,
                    a = e.type,
                    l = e.updateQueue;
                if (e.updateQueue = null, l !== null) try {
                    a === "input" && s.type === "radio" && s.name != null && th(i, s), fa(a, o);
                    var u = fa(a, s);
                    for (o = 0; o < l.length; o += 2) {
                        var d = l[o],
                            f = l[o + 1];
                        d === "style" ? oh(i, f) : d === "dangerouslySetInnerHTML" ? ih(i, f) : d === "children" ? Or(i, f) : jl(i, d, f, u)
                    }
                    switch (a) {
                        case "input":
                            aa(i, s);
                            break;
                        case "textarea":
                            nh(i, s);
                            break;
                        case "select":
                            var h = i._wrapperState.wasMultiple;
                            i._wrapperState.wasMultiple = !!s.multiple;
                            var p = s.value;
                            p != null ? Bn(i, !!s.multiple, p, !1) : h !== !!s.multiple && (s.defaultValue != null ? Bn(i, !!s.multiple, s.defaultValue, !0) : Bn(i, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    i[Yr] = s
                } catch (v) {
                    Y(e, e.return, v)
                }
            }
            break;
        case 6:
            if (He(t, e), Je(e), r & 4) {
                if (e.stateNode === null) throw Error(N(162));
                i = e.stateNode, s = e.memoizedProps;
                try {
                    i.nodeValue = s
                } catch (v) {
                    Y(e, e.return, v)
                }
            }
            break;
        case 3:
            if (He(t, e), Je(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Wr(t.containerInfo)
            } catch (v) {
                Y(e, e.return, v)
            }
            break;
        case 4:
            He(t, e), Je(e);
            break;
        case 13:
            He(t, e), Je(e), i = e.child, i.flags & 8192 && (s = i.memoizedState !== null, i.stateNode.isHidden = s, !s || i.alternate !== null && i.alternate.memoizedState !== null || (ru = q())), r & 4 && qc(e);
            break;
        case 22:
            if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (me = (u = me) || d, He(t, e), me = u) : He(t, e), Je(e), r & 8192) {
                if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1)
                    for (E = e, d = e.child; d !== null;) {
                        for (f = E = d; E !== null;) {
                            switch (h = E, p = h.child, h.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Lr(4, h, h.return);
                                    break;
                                case 1:
                                    $n(h, h.return);
                                    var x = h.stateNode;
                                    if (typeof x.componentWillUnmount == "function") {
                                        r = h, n = h.return;
                                        try {
                                            t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount()
                                        } catch (v) {
                                            Y(r, n, v)
                                        }
                                    }
                                    break;
                                case 5:
                                    $n(h, h.return);
                                    break;
                                case 22:
                                    if (h.memoizedState !== null) {
                                        ed(f);
                                        continue
                                    }
                            }
                            p !== null ? (p.return = h, E = p) : ed(f)
                        }
                        d = d.sibling
                    }
                e: for (d = null, f = e;;) {
                    if (f.tag === 5) {
                        if (d === null) {
                            d = f;
                            try {
                                i = f.stateNode, u ? (s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = f.stateNode, l = f.memoizedProps.style, o = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = sh("display", o))
                            } catch (v) {
                                Y(e, e.return, v)
                            }
                        }
                    } else if (f.tag === 6) {
                        if (d === null) try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (v) {
                            Y(e, e.return, v)
                        }
                    } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                        f.child.return = f, f = f.child;
                        continue
                    }
                    if (f === e) break e;
                    for (; f.sibling === null;) {
                        if (f.return === null || f.return === e) break e;
                        d === f && (d = null), f = f.return
                    }
                    d === f && (d = null), f.sibling.return = f.return, f = f.sibling
                }
            }
            break;
        case 19:
            He(t, e), Je(e), r & 4 && qc(e);
            break;
        case 21:
            break;
        default:
            He(t, e), Je(e)
    }
}

function Je(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (Lp(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(N(160))
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (Or(i, ""), r.flags &= -33);
                    var s = Zc(e);
                    Ba(e, s, i);
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo,
                        a = Zc(e);
                    Ia(e, a, o);
                    break;
                default:
                    throw Error(N(161))
            }
        }
        catch (l) {
            Y(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function t1(e, t, n) {
    E = e, Dp(e)
}

function Dp(e, t, n) {
    for (var r = (e.mode & 1) !== 0; E !== null;) {
        var i = E,
            s = i.child;
        if (i.tag === 22 && r) {
            var o = i.memoizedState !== null || _i;
            if (!o) {
                var a = i.alternate,
                    l = a !== null && a.memoizedState !== null || me;
                a = _i;
                var u = me;
                if (_i = o, (me = l) && !u)
                    for (E = i; E !== null;) o = E, l = o.child, o.tag === 22 && o.memoizedState !== null ? td(i) : l !== null ? (l.return = o, E = l) : td(i);
                for (; s !== null;) E = s, Dp(s), s = s.sibling;
                E = i, _i = a, me = u
            }
            Jc(e)
        } else i.subtreeFlags & 8772 && s !== null ? (s.return = i, E = s) : Jc(e)
    }
}

function Jc(e) {
    for (; E !== null;) {
        var t = E;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        me || eo(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !me)
                            if (n === null) r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : Ge(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = t.updateQueue;
                        s !== null && Fc(t, s, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            Fc(t, o, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    l.autoFocus && n.focus();
                                    break;
                                case "img":
                                    l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var d = u.memoizedState;
                                if (d !== null) {
                                    var f = d.dehydrated;
                                    f !== null && Wr(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(N(163))
                }
                me || t.flags & 512 && Oa(t)
            } catch (h) {
                Y(t, t.return, h)
            }
        }
        if (t === e) {
            E = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, E = n;
            break
        }
        E = t.return
    }
}

function ed(e) {
    for (; E !== null;) {
        var t = E;
        if (t === e) {
            E = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, E = n;
            break
        }
        E = t.return
    }
}

function td(e) {
    for (; E !== null;) {
        var t = E;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        eo(4, t)
                    } catch (l) {
                        Y(t, n, l)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount()
                        } catch (l) {
                            Y(t, i, l)
                        }
                    }
                    var s = t.return;
                    try {
                        Oa(t)
                    } catch (l) {
                        Y(t, s, l)
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        Oa(t)
                    } catch (l) {
                        Y(t, o, l)
                    }
            }
        } catch (l) {
            Y(t, t.return, l)
        }
        if (t === e) {
            E = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return, E = a;
            break
        }
        E = t.return
    }
}
var n1 = Math.ceil,
    Ps = vt.ReactCurrentDispatcher,
    tu = vt.ReactCurrentOwner,
    Ie = vt.ReactCurrentBatchConfig,
    V = 0,
    le = null,
    te = null,
    de = 0,
    Ee = 0,
    Vn = Wt(0),
    se = 0,
    ti = null,
    pn = 0,
    to = 0,
    nu = 0,
    Rr = null,
    Ce = null,
    ru = 0,
    er = 1 / 0,
    at = null,
    Es = !1,
    Ua = null,
    $t = null,
    Oi = !1,
    Nt = null,
    Ms = 0,
    Ar = 0,
    Wa = null,
    ts = -1,
    ns = 0;

function we() {
    return V & 6 ? q() : ts !== -1 ? ts : ts = q()
}

function Vt(e) {
    return e.mode & 1 ? V & 2 && de !== 0 ? de & -de : _g.transition !== null ? (ns === 0 && (ns = vh()), ns) : (e = F, e !== 0 || (e = window.event, e = e === void 0 ? 16 : bh(e.type)), e) : 1
}

function Ze(e, t, n, r) {
    if (50 < Ar) throw Ar = 0, Wa = null, Error(N(185));
    fi(e, n, r), (!(V & 2) || e !== le) && (e === le && (!(V & 2) && (to |= n), se === 4 && bt(e, de)), Pe(e, r), n === 1 && V === 0 && !(t.mode & 1) && (er = q() + 500, Zs && Ht()))
}

function Pe(e, t) {
    var n = e.callbackNode;
    _y(e, t);
    var r = hs(e, e === le ? de : 0);
    if (r === 0) n !== null && cc(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && cc(n), t === 1) e.tag === 0 ? zg(nd.bind(null, e)) : Wh(nd.bind(null, e)), Dg(function() {
            !(V & 6) && Ht()
        }), n = null;
        else {
            switch (xh(r)) {
                case 1:
                    n = El;
                    break;
                case 4:
                    n = yh;
                    break;
                case 16:
                    n = fs;
                    break;
                case 536870912:
                    n = gh;
                    break;
                default:
                    n = fs
            }
            n = Bp(n, $p.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function $p(e, t) {
    if (ts = -1, ns = 0, V & 6) throw Error(N(327));
    var n = e.callbackNode;
    if (Gn() && e.callbackNode !== n) return null;
    var r = hs(e, e === le ? de : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Ls(e, r);
    else {
        t = r;
        var i = V;
        V |= 2;
        var s = Fp();
        (le !== e || de !== t) && (at = null, er = q() + 500, on(e, t));
        do try {
            s1();
            break
        } catch (a) {
            Vp(e, a)
        }
        while (!0);
        Bl(), Ps.current = s, V = i, te !== null ? t = 0 : (le = null, de = 0, t = se)
    }
    if (t !== 0) {
        if (t === 2 && (i = ga(e), i !== 0 && (r = i, t = Ha(e, i))), t === 1) throw n = ti, on(e, 0), bt(e, r), Pe(e, q()), n;
        if (t === 6) bt(e, r);
        else {
            if (i = e.current.alternate, !(r & 30) && !r1(i) && (t = Ls(e, r), t === 2 && (s = ga(e), s !== 0 && (r = s, t = Ha(e, s))), t === 1)) throw n = ti, on(e, 0), bt(e, r), Pe(e, q()), n;
            switch (e.finishedWork = i, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(N(345));
                case 2:
                    qt(e, Ce, at);
                    break;
                case 3:
                    if (bt(e, r), (r & 130023424) === r && (t = ru + 500 - q(), 10 < t)) {
                        if (hs(e, 0) !== 0) break;
                        if (i = e.suspendedLanes, (i & r) !== r) {
                            we(), e.pingedLanes |= e.suspendedLanes & i;
                            break
                        }
                        e.timeoutHandle = ba(qt.bind(null, e, Ce, at), t);
                        break
                    }
                    qt(e, Ce, at);
                    break;
                case 4:
                    if (bt(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, i = -1; 0 < r;) {
                        var o = 31 - Qe(r);
                        s = 1 << o, o = t[o], o > i && (i = o), r &= ~s
                    }
                    if (r = i, r = q() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * n1(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = ba(qt.bind(null, e, Ce, at), r);
                        break
                    }
                    qt(e, Ce, at);
                    break;
                case 5:
                    qt(e, Ce, at);
                    break;
                default:
                    throw Error(N(329))
            }
        }
    }
    return Pe(e, q()), e.callbackNode === n ? $p.bind(null, e) : null
}

function Ha(e, t) {
    var n = Rr;
    return e.current.memoizedState.isDehydrated && (on(e, t).flags |= 256), e = Ls(e, t), e !== 2 && (t = Ce, Ce = n, t !== null && Ka(t)), e
}

function Ka(e) {
    Ce === null ? Ce = e : Ce.push.apply(Ce, e)
}

function r1(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        s = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!qe(s(), i)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function bt(e, t) {
    for (t &= ~nu, t &= ~to, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - Qe(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function nd(e) {
    if (V & 6) throw Error(N(327));
    Gn();
    var t = hs(e, 0);
    if (!(t & 1)) return Pe(e, q()), null;
    var n = Ls(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = ga(e);
        r !== 0 && (t = r, n = Ha(e, r))
    }
    if (n === 1) throw n = ti, on(e, 0), bt(e, t), Pe(e, q()), n;
    if (n === 6) throw Error(N(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, qt(e, Ce, at), Pe(e, q()), null
}

function iu(e, t) {
    var n = V;
    V |= 1;
    try {
        return e(t)
    } finally {
        V = n, V === 0 && (er = q() + 500, Zs && Ht())
    }
}

function mn(e) {
    Nt !== null && Nt.tag === 0 && !(V & 6) && Gn();
    var t = V;
    V |= 1;
    var n = Ie.transition,
        r = F;
    try {
        if (Ie.transition = null, F = 1, e) return e()
    } finally {
        F = r, Ie.transition = n, V = t, !(V & 6) && Ht()
    }
}

function su() {
    Ee = Vn.current, I(Vn)
}

function on(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Ag(n)), te !== null)
        for (n = te.return; n !== null;) {
            var r = n;
            switch (_l(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && vs();
                    break;
                case 3:
                    qn(), I(Te), I(ge), Xl();
                    break;
                case 5:
                    Gl(r);
                    break;
                case 4:
                    qn();
                    break;
                case 13:
                    I(W);
                    break;
                case 19:
                    I(W);
                    break;
                case 10:
                    Ul(r.type._context);
                    break;
                case 22:
                case 23:
                    su()
            }
            n = n.return
        }
    if (le = e, te = e = Ft(e.current, null), de = Ee = t, se = 0, ti = null, nu = to = pn = 0, Ce = Rr = null, tn !== null) {
        for (t = 0; t < tn.length; t++)
            if (n = tn[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var i = r.next,
                    s = n.pending;
                if (s !== null) {
                    var o = s.next;
                    s.next = i, r.next = o
                }
                n.pending = r
            }
        tn = null
    }
    return e
}

function Vp(e, t) {
    do {
        var n = te;
        try {
            if (Bl(), qi.current = Ns, Ts) {
                for (var r = K.memoizedState; r !== null;) {
                    var i = r.queue;
                    i !== null && (i.pending = null), r = r.next
                }
                Ts = !1
            }
            if (hn = 0, ae = ie = K = null, Mr = !1, qr = 0, tu.current = null, n === null || n.return === null) {
                se = 1, ti = t, te = null;
                break
            }
            e: {
                var s = e,
                    o = n.return,
                    a = n,
                    l = t;
                if (t = de, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l,
                        d = a,
                        f = d.tag;
                    if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var h = d.alternate;
                        h ? (d.updateQueue = h.updateQueue, d.memoizedState = h.memoizedState, d.lanes = h.lanes) : (d.updateQueue = null, d.memoizedState = null)
                    }
                    var p = Uc(o);
                    if (p !== null) {
                        p.flags &= -257, Wc(p, o, a, s, t), p.mode & 1 && Bc(s, u, t), t = p, l = u;
                        var x = t.updateQueue;
                        if (x === null) {
                            var v = new Set;
                            v.add(l), t.updateQueue = v
                        } else x.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Bc(s, u, t), ou();
                            break e
                        }
                        l = Error(N(426))
                    }
                } else if (B && a.mode & 1) {
                    var S = Uc(o);
                    if (S !== null) {
                        !(S.flags & 65536) && (S.flags |= 256), Wc(S, o, a, s, t), Ol(Jn(l, a));
                        break e
                    }
                }
                s = l = Jn(l, a),
                se !== 4 && (se = 2),
                Rr === null ? Rr = [s] : Rr.push(s),
                s = o;do {
                    switch (s.tag) {
                        case 3:
                            s.flags |= 65536, t &= -t, s.lanes |= t;
                            var y = xp(s, l, t);
                            Vc(s, y);
                            break e;
                        case 1:
                            a = l;
                            var m = s.type,
                                g = s.stateNode;
                            if (!(s.flags & 128) && (typeof m.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && ($t === null || !$t.has(g)))) {
                                s.flags |= 65536, t &= -t, s.lanes |= t;
                                var k = wp(s, a, t);
                                Vc(s, k);
                                break e
                            }
                    }
                    s = s.return
                } while (s !== null)
            }
            _p(n)
        } catch (j) {
            t = j, te === n && n !== null && (te = n = n.return);
            continue
        }
        break
    } while (!0)
}

function Fp() {
    var e = Ps.current;
    return Ps.current = Ns, e === null ? Ns : e
}

function ou() {
    (se === 0 || se === 3 || se === 2) && (se = 4), le === null || !(pn & 268435455) && !(to & 268435455) || bt(le, de)
}

function Ls(e, t) {
    var n = V;
    V |= 2;
    var r = Fp();
    (le !== e || de !== t) && (at = null, on(e, t));
    do try {
        i1();
        break
    } catch (i) {
        Vp(e, i)
    }
    while (!0);
    if (Bl(), V = n, Ps.current = r, te !== null) throw Error(N(261));
    return le = null, de = 0, se
}

function i1() {
    for (; te !== null;) zp(te)
}

function s1() {
    for (; te !== null && !My();) zp(te)
}

function zp(e) {
    var t = Ip(e.alternate, e, Ee);
    e.memoizedProps = e.pendingProps, t === null ? _p(e) : te = t, tu.current = null
}

function _p(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = qg(n, t), n !== null) {
                n.flags &= 32767, te = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                se = 6, te = null;
                return
            }
        } else if (n = Zg(n, t, Ee), n !== null) {
            te = n;
            return
        }
        if (t = t.sibling, t !== null) {
            te = t;
            return
        }
        te = t = e
    } while (t !== null);
    se === 0 && (se = 5)
}

function qt(e, t, n) {
    var r = F,
        i = Ie.transition;
    try {
        Ie.transition = null, F = 1, o1(e, t, n, r)
    } finally {
        Ie.transition = i, F = r
    }
    return null
}

function o1(e, t, n, r) {
    do Gn(); while (Nt !== null);
    if (V & 6) throw Error(N(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(N(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (Oy(e, s), e === le && (te = le = null, de = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Oi || (Oi = !0, Bp(fs, function() {
            return Gn(), null
        })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
        s = Ie.transition, Ie.transition = null;
        var o = F;
        F = 1;
        var a = V;
        V |= 4, tu.current = null, e1(e, n), Ap(n, e), Tg(Ca), ps = !!Sa, Ca = Sa = null, e.current = n, t1(n), Ly(), V = a, F = o, Ie.transition = s
    } else e.current = n;
    if (Oi && (Oi = !1, Nt = e, Ms = i), s = e.pendingLanes, s === 0 && ($t = null), Dy(n.stateNode), Pe(e, q()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
            componentStack: i.stack,
            digest: i.digest
        });
    if (Es) throw Es = !1, e = Ua, Ua = null, e;
    return Ms & 1 && e.tag !== 0 && Gn(), s = e.pendingLanes, s & 1 ? e === Wa ? Ar++ : (Ar = 0, Wa = e) : Ar = 0, Ht(), null
}

function Gn() {
    if (Nt !== null) {
        var e = xh(Ms),
            t = Ie.transition,
            n = F;
        try {
            if (Ie.transition = null, F = 16 > e ? 16 : e, Nt === null) var r = !1;
            else {
                if (e = Nt, Nt = null, Ms = 0, V & 6) throw Error(N(331));
                var i = V;
                for (V |= 4, E = e.current; E !== null;) {
                    var s = E,
                        o = s.child;
                    if (E.flags & 16) {
                        var a = s.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (E = u; E !== null;) {
                                    var d = E;
                                    switch (d.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Lr(8, d, s)
                                    }
                                    var f = d.child;
                                    if (f !== null) f.return = d, E = f;
                                    else
                                        for (; E !== null;) {
                                            d = E;
                                            var h = d.sibling,
                                                p = d.return;
                                            if (Mp(d), d === u) {
                                                E = null;
                                                break
                                            }
                                            if (h !== null) {
                                                h.return = p, E = h;
                                                break
                                            }
                                            E = p
                                        }
                                }
                            }
                            var x = s.alternate;
                            if (x !== null) {
                                var v = x.child;
                                if (v !== null) {
                                    x.child = null;
                                    do {
                                        var S = v.sibling;
                                        v.sibling = null, v = S
                                    } while (v !== null)
                                }
                            }
                            E = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && o !== null) o.return = s, E = o;
                    else e: for (; E !== null;) {
                        if (s = E, s.flags & 2048) switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Lr(9, s, s.return)
                        }
                        var y = s.sibling;
                        if (y !== null) {
                            y.return = s.return, E = y;
                            break e
                        }
                        E = s.return
                    }
                }
                var m = e.current;
                for (E = m; E !== null;) {
                    o = E;
                    var g = o.child;
                    if (o.subtreeFlags & 2064 && g !== null) g.return = o, E = g;
                    else e: for (o = m; E !== null;) {
                        if (a = E, a.flags & 2048) try {
                            switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    eo(9, a)
                            }
                        } catch (j) {
                            Y(a, a.return, j)
                        }
                        if (a === o) {
                            E = null;
                            break e
                        }
                        var k = a.sibling;
                        if (k !== null) {
                            k.return = a.return, E = k;
                            break e
                        }
                        E = a.return
                    }
                }
                if (V = i, Ht(), nt && typeof nt.onPostCommitFiberRoot == "function") try {
                    nt.onPostCommitFiberRoot(Ks, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            F = n, Ie.transition = t
        }
    }
    return !1
}

function rd(e, t, n) {
    t = Jn(n, t), t = xp(e, t, 1), e = Dt(e, t, 1), t = we(), e !== null && (fi(e, 1, t), Pe(e, t))
}

function Y(e, t, n) {
    if (e.tag === 3) rd(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                rd(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && ($t === null || !$t.has(r))) {
                    e = Jn(n, e), e = wp(t, e, 1), t = Dt(t, e, 1), e = we(), t !== null && (fi(t, 1, e), Pe(t, e));
                    break
                }
            }
            t = t.return
        }
}

function a1(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = we(), e.pingedLanes |= e.suspendedLanes & n, le === e && (de & n) === n && (se === 4 || se === 3 && (de & 130023424) === de && 500 > q() - ru ? on(e, 0) : nu |= n), Pe(e, t)
}

function Op(e, t) {
    t === 0 && (e.mode & 1 ? (t = Mi, Mi <<= 1, !(Mi & 130023424) && (Mi = 4194304)) : t = 1);
    var n = we();
    e = pt(e, t), e !== null && (fi(e, t, n), Pe(e, n))
}

function l1(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Op(e, n)
}

function u1(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(N(314))
    }
    r !== null && r.delete(t), Op(e, n)
}
var Ip;
Ip = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Te.current) je = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return je = !1, Qg(e, t, n);
            je = !!(e.flags & 131072)
        }
    else je = !1, B && t.flags & 1048576 && Hh(t, ks, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            es(e, t), e = t.pendingProps;
            var i = Yn(t, ge.current);
            Kn(t, n), i = Ql(null, t, r, e, i, n);
            var s = Zl();
            return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ne(r) ? (s = !0, xs(t)) : s = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Hl(t), i.updater = Js, t.stateNode = i, i._reactInternals = t, Ra(t, r, e, n), t = $a(null, t, r, !0, s, n)) : (t.tag = 0, B && s && zl(t), ve(null, t, i, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (es(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = d1(r), e = Ge(r, e), i) {
                    case 0:
                        t = Da(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Gc(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Hc(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Kc(null, t, r, Ge(r.type, e), n);
                        break e
                }
                throw Error(N(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ge(r, i), Da(e, t, r, i, n);
        case 1:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ge(r, i), Gc(e, t, r, i, n);
        case 3:
            e: {
                if (jp(t), e === null) throw Error(N(387));r = t.pendingProps,
                s = t.memoizedState,
                i = s.element,
                Zh(e, t),
                js(t, r, null, n);
                var o = t.memoizedState;
                if (r = o.element, s.isDehydrated)
                    if (s = {
                            element: r,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                            transitions: o.transitions
                        }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
                        i = Jn(Error(N(423)), t), t = Xc(e, t, r, n, i);
                        break e
                    } else if (r !== i) {
                    i = Jn(Error(N(424)), t), t = Xc(e, t, r, n, i);
                    break e
                } else
                    for (Me = At(t.stateNode.containerInfo.firstChild), Le = t, B = !0, Ye = null, n = Yh(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (Qn(), r === i) {
                        t = mt(e, t, n);
                        break e
                    }
                    ve(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return qh(t), e === null && Ea(t), r = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, o = i.children, ja(r, i) ? o = null : s !== null && ja(r, s) && (t.flags |= 32), Cp(e, t), ve(e, t, o, n), t.child;
        case 6:
            return e === null && Ea(t), null;
        case 13:
            return bp(e, t, n);
        case 4:
            return Kl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Zn(t, null, r, n) : ve(e, t, r, n), t.child;
        case 11:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ge(r, i), Hc(e, t, r, i, n);
        case 7:
            return ve(e, t, t.pendingProps, n), t.child;
        case 8:
            return ve(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return ve(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, i = t.pendingProps, s = t.memoizedProps, o = i.value, _(Ss, r._currentValue), r._currentValue = o, s !== null)
                    if (qe(s.value, o)) {
                        if (s.children === i.children && !Te.current) {
                            t = mt(e, t, n);
                            break e
                        }
                    } else
                        for (s = t.child, s !== null && (s.return = t); s !== null;) {
                            var a = s.dependencies;
                            if (a !== null) {
                                o = s.child;
                                for (var l = a.firstContext; l !== null;) {
                                    if (l.context === r) {
                                        if (s.tag === 1) {
                                            l = dt(-1, n & -n), l.tag = 2;
                                            var u = s.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var d = u.pending;
                                                d === null ? l.next = l : (l.next = d.next, d.next = l), u.pending = l
                                            }
                                        }
                                        s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), Ma(s.return, n, t), a.lanes |= n;
                                        break
                                    }
                                    l = l.next
                                }
                            } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
                            else if (s.tag === 18) {
                                if (o = s.return, o === null) throw Error(N(341));
                                o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), Ma(o, n, t), o = s.sibling
                            } else o = s.child;
                            if (o !== null) o.return = s;
                            else
                                for (o = s; o !== null;) {
                                    if (o === t) {
                                        o = null;
                                        break
                                    }
                                    if (s = o.sibling, s !== null) {
                                        s.return = o.return, o = s;
                                        break
                                    }
                                    o = o.return
                                }
                            s = o
                        }
                ve(e, t, i.children, n),
                t = t.child
            }
            return t;
        case 9:
            return i = t.type, r = t.pendingProps.children, Kn(t, n), i = Ue(i), r = r(i), t.flags |= 1, ve(e, t, r, n), t.child;
        case 14:
            return r = t.type, i = Ge(r, t.pendingProps), i = Ge(r.type, i), Kc(e, t, r, i, n);
        case 15:
            return kp(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ge(r, i), es(e, t), t.tag = 1, Ne(r) ? (e = !0, xs(t)) : e = !1, Kn(t, n), vp(t, r, i), Ra(t, r, i, n), $a(null, t, r, !0, e, n);
        case 19:
            return Tp(e, t, n);
        case 22:
            return Sp(e, t, n)
    }
    throw Error(N(156, t.tag))
};

function Bp(e, t) {
    return mh(e, t)
}

function c1(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Oe(e, t, n, r) {
    return new c1(e, t, n, r)
}

function au(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function d1(e) {
    if (typeof e == "function") return au(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === Tl) return 11;
        if (e === Nl) return 14
    }
    return 2
}

function Ft(e, t) {
    var n = e.alternate;
    return n === null ? (n = Oe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function rs(e, t, n, r, i, s) {
    var o = 2;
    if (r = e, typeof e == "function") au(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
        case Tn:
            return an(n.children, i, s, t);
        case bl:
            o = 8, i |= 8;
            break;
        case na:
            return e = Oe(12, n, t, i | 2), e.elementType = na, e.lanes = s, e;
        case ra:
            return e = Oe(13, n, t, i), e.elementType = ra, e.lanes = s, e;
        case ia:
            return e = Oe(19, n, t, i), e.elementType = ia, e.lanes = s, e;
        case qf:
            return no(n, i, s, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case Qf:
                    o = 10;
                    break e;
                case Zf:
                    o = 9;
                    break e;
                case Tl:
                    o = 11;
                    break e;
                case Nl:
                    o = 14;
                    break e;
                case St:
                    o = 16, r = null;
                    break e
            }
            throw Error(N(130, e == null ? e : typeof e, ""))
    }
    return t = Oe(o, n, t, i), t.elementType = e, t.type = r, t.lanes = s, t
}

function an(e, t, n, r) {
    return e = Oe(7, e, r, t), e.lanes = n, e
}

function no(e, t, n, r) {
    return e = Oe(22, e, r, t), e.elementType = qf, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function zo(e, t, n) {
    return e = Oe(6, e, null, t), e.lanes = n, e
}

function _o(e, t, n) {
    return t = Oe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function f1(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = xo(0), this.expirationTimes = xo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = xo(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
}

function lu(e, t, n, r, i, s, o, a, l) {
    return e = new f1(e, t, n, a, l), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = Oe(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, Hl(s), e
}

function h1(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: bn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function Up(e) {
    if (!e) return Ot;
    e = e._reactInternals;
    e: {
        if (gn(e) !== e || e.tag !== 1) throw Error(N(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Ne(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(N(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ne(n)) return Uh(e, n, t)
    }
    return t
}

function Wp(e, t, n, r, i, s, o, a, l) {
    return e = lu(n, r, !0, e, i, s, o, a, l), e.context = Up(null), n = e.current, r = we(), i = Vt(n), s = dt(r, i), s.callback = t ? ? null, Dt(n, s, i), e.current.lanes = i, fi(e, i, r), Pe(e, r), e
}

function ro(e, t, n, r) {
    var i = t.current,
        s = we(),
        o = Vt(i);
    return n = Up(n), t.context === null ? t.context = n : t.pendingContext = n, t = dt(s, o), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Dt(i, t, o), e !== null && (Ze(e, i, o, s), Zi(e, i, o)), o
}

function Rs(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function id(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function uu(e, t) {
    id(e, t), (e = e.alternate) && id(e, t)
}

function p1() {
    return null
}
var Hp = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function cu(e) {
    this._internalRoot = e
}
io.prototype.render = cu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(N(409));
    ro(e, t, null, null)
};
io.prototype.unmount = cu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        mn(function() {
            ro(null, e, null, null)
        }), t[ht] = null
    }
};

function io(e) {
    this._internalRoot = e
}
io.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Sh();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < jt.length && t !== 0 && t < jt[n].priority; n++);
        jt.splice(n, 0, e), n === 0 && jh(e)
    }
};

function du(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function so(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function sd() {}

function m1(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var u = Rs(o);
                s.call(u)
            }
        }
        var o = Wp(t, r, e, 0, null, !1, !1, "", sd);
        return e._reactRootContainer = o, e[ht] = o.current, Gr(e.nodeType === 8 ? e.parentNode : e), mn(), o
    }
    for (; i = e.lastChild;) e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = Rs(l);
            a.call(u)
        }
    }
    var l = lu(e, 0, !1, null, null, !1, !1, "", sd);
    return e._reactRootContainer = l, e[ht] = l.current, Gr(e.nodeType === 8 ? e.parentNode : e), mn(function() {
        ro(t, l, n, r)
    }), l
}

function oo(e, t, n, r, i) {
    var s = n._reactRootContainer;
    if (s) {
        var o = s;
        if (typeof i == "function") {
            var a = i;
            i = function() {
                var l = Rs(o);
                a.call(l)
            }
        }
        ro(t, o, e, i)
    } else o = m1(n, t, e, i, r);
    return Rs(o)
}
wh = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Sr(t.pendingLanes);
                n !== 0 && (Ml(t, n | 1), Pe(t, q()), !(V & 6) && (er = q() + 500, Ht()))
            }
            break;
        case 13:
            mn(function() {
                var r = pt(e, 1);
                if (r !== null) {
                    var i = we();
                    Ze(r, e, 1, i)
                }
            }), uu(e, 1)
    }
};
Ll = function(e) {
    if (e.tag === 13) {
        var t = pt(e, 134217728);
        if (t !== null) {
            var n = we();
            Ze(t, e, 134217728, n)
        }
        uu(e, 134217728)
    }
};
kh = function(e) {
    if (e.tag === 13) {
        var t = Vt(e),
            n = pt(e, t);
        if (n !== null) {
            var r = we();
            Ze(n, e, t, r)
        }
        uu(e, t)
    }
};
Sh = function() {
    return F
};
Ch = function(e, t) {
    var n = F;
    try {
        return F = e, t()
    } finally {
        F = n
    }
};
pa = function(e, t, n) {
    switch (t) {
        case "input":
            if (aa(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = Qs(r);
                        if (!i) throw Error(N(90));
                        eh(r), aa(r, i)
                    }
                }
            }
            break;
        case "textarea":
            nh(e, n);
            break;
        case "select":
            t = n.value, t != null && Bn(e, !!n.multiple, t, !1)
    }
};
uh = iu;
ch = mn;
var y1 = {
        usingClientEntryPoint: !1,
        Events: [pi, Mn, Qs, ah, lh, iu]
    },
    vr = {
        findFiberByHostInstance: en,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    g1 = {
        bundleType: vr.bundleType,
        version: vr.version,
        rendererPackageName: vr.rendererPackageName,
        rendererConfig: vr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: vt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = hh(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: vr.findFiberByHostInstance || p1,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ii = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ii.isDisabled && Ii.supportsFiber) try {
        Ks = Ii.inject(g1), nt = Ii
    } catch {}
}
Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = y1;
Ae.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!du(t)) throw Error(N(200));
    return h1(e, t, null, n)
};
Ae.createRoot = function(e, t) {
    if (!du(e)) throw Error(N(299));
    var n = !1,
        r = "",
        i = Hp;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = lu(e, 1, !1, null, null, n, !1, r, i), e[ht] = t.current, Gr(e.nodeType === 8 ? e.parentNode : e), new cu(t)
};
Ae.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(N(188)) : (e = Object.keys(e).join(","), Error(N(268, e)));
    return e = hh(t), e = e === null ? null : e.stateNode, e
};
Ae.flushSync = function(e) {
    return mn(e)
};
Ae.hydrate = function(e, t, n) {
    if (!so(t)) throw Error(N(200));
    return oo(null, e, t, !0, n)
};
Ae.hydrateRoot = function(e, t, n) {
    if (!du(e)) throw Error(N(405));
    var r = n != null && n.hydratedSources || null,
        i = !1,
        s = "",
        o = Hp;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Wp(t, null, e, 1, n ? ? null, i, !1, s, o), e[ht] = t.current, Gr(e), r)
        for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new io(t)
};
Ae.render = function(e, t, n) {
    if (!so(t)) throw Error(N(200));
    return oo(null, e, t, !1, n)
};
Ae.unmountComponentAtNode = function(e) {
    if (!so(e)) throw Error(N(40));
    return e._reactRootContainer ? (mn(function() {
        oo(null, null, e, !1, function() {
            e._reactRootContainer = null, e[ht] = null
        })
    }), !0) : !1
};
Ae.unstable_batchedUpdates = iu;
Ae.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!so(n)) throw Error(N(200));
    if (e == null || e._reactInternals === void 0) throw Error(N(38));
    return oo(e, t, n, !1, r)
};
Ae.version = "18.3.1-next-f1338f8080-20240426";

function Kp() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kp)
    } catch (e) {
        console.error(e)
    }
}
Kp(), Kf.exports = Ae;
var v1 = Kf.exports,
    Gp, od = v1;
Gp = od.createRoot, od.hydrateRoot;
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ni() {
    return ni = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, ni.apply(this, arguments)
}
var Pt;
(function(e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(Pt || (Pt = {}));
const ad = "popstate";

function x1(e) {
    e === void 0 && (e = {});

    function t(i, s) {
        let {
            pathname: o = "/",
            search: a = "",
            hash: l = ""
        } = vn(i.location.hash.substr(1));
        return !o.startsWith("/") && !o.startsWith(".") && (o = "/" + o), Ga("", {
            pathname: o,
            search: a,
            hash: l
        }, s.state && s.state.usr || null, s.state && s.state.key || "default")
    }

    function n(i, s) {
        let o = i.document.querySelector("base"),
            a = "";
        if (o && o.getAttribute("href")) {
            let l = i.location.href,
                u = l.indexOf("#");
            a = u === -1 ? l : l.slice(0, u)
        }
        return a + "#" + (typeof s == "string" ? s : As(s))
    }

    function r(i, s) {
        fu(i.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(s) + ")")
    }
    return k1(t, n, r, e)
}

function ne(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function fu(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}

function w1() {
    return Math.random().toString(36).substr(2, 8)
}

function ld(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function Ga(e, t, n, r) {
    return n === void 0 && (n = null), ni({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? vn(t) : t, {
        state: n,
        key: t && t.key || r || w1()
    })
}

function As(e) {
    let {
        pathname: t = "/",
        search: n = "",
        hash: r = ""
    } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function vn(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
}

function k1(e, t, n, r) {
    r === void 0 && (r = {});
    let {
        window: i = document.defaultView,
        v5Compat: s = !1
    } = r, o = i.history, a = Pt.Pop, l = null, u = d();
    u == null && (u = 0, o.replaceState(ni({}, o.state, {
        idx: u
    }), ""));

    function d() {
        return (o.state || {
            idx: null
        }).idx
    }

    function f() {
        a = Pt.Pop;
        let S = d(),
            y = S == null ? null : S - u;
        u = S, l && l({
            action: a,
            location: v.location,
            delta: y
        })
    }

    function h(S, y) {
        a = Pt.Push;
        let m = Ga(v.location, S, y);
        n && n(m, S), u = d() + 1;
        let g = ld(m, u),
            k = v.createHref(m);
        try {
            o.pushState(g, "", k)
        } catch (j) {
            if (j instanceof DOMException && j.name === "DataCloneError") throw j;
            i.location.assign(k)
        }
        s && l && l({
            action: a,
            location: v.location,
            delta: 1
        })
    }

    function p(S, y) {
        a = Pt.Replace;
        let m = Ga(v.location, S, y);
        n && n(m, S), u = d();
        let g = ld(m, u),
            k = v.createHref(m);
        o.replaceState(g, "", k), s && l && l({
            action: a,
            location: v.location,
            delta: 0
        })
    }

    function x(S) {
        let y = i.location.origin !== "null" ? i.location.origin : i.location.href,
            m = typeof S == "string" ? S : As(S);
        return m = m.replace(/ $/, "%20"), ne(y, "No window.location.(origin|href) available to create URL for href: " + m), new URL(m, y)
    }
    let v = {
        get action() {
            return a
        },
        get location() {
            return e(i, o)
        },
        listen(S) {
            if (l) throw new Error("A history only accepts one active listener");
            return i.addEventListener(ad, f), l = S, () => {
                i.removeEventListener(ad, f), l = null
            }
        },
        createHref(S) {
            return t(i, S)
        },
        createURL: x,
        encodeLocation(S) {
            let y = x(S);
            return {
                pathname: y.pathname,
                search: y.search,
                hash: y.hash
            }
        },
        push: h,
        replace: p,
        go(S) {
            return o.go(S)
        }
    };
    return v
}
var ud;
(function(e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(ud || (ud = {}));

function S1(e, t, n) {
    return n === void 0 && (n = "/"), C1(e, t, n, !1)
}

function C1(e, t, n, r) {
    let i = typeof t == "string" ? vn(t) : t,
        s = hu(i.pathname || "/", n);
    if (s == null) return null;
    let o = Xp(e);
    j1(o);
    let a = null;
    for (let l = 0; a == null && l < o.length; ++l) {
        let u = $1(s);
        a = A1(o[l], u, r)
    }
    return a
}

function Xp(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let i = (s, o, a) => {
        let l = {
            relativePath: a === void 0 ? s.path || "" : a,
            caseSensitive: s.caseSensitive === !0,
            childrenIndex: o,
            route: s
        };
        l.relativePath.startsWith("/") && (ne(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), l.relativePath = l.relativePath.slice(r.length));
        let u = zt([r, l.relativePath]),
            d = n.concat(l);
        s.children && s.children.length > 0 && (ne(s.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), Xp(s.children, t, d, u)), !(s.path == null && !s.index) && t.push({
            path: u,
            score: L1(u, s.index),
            routesMeta: d
        })
    };
    return e.forEach((s, o) => {
        var a;
        if (s.path === "" || !((a = s.path) != null && a.includes("?"))) i(s, o);
        else
            for (let l of Yp(s.path)) i(s, o, l)
    }), t
}

function Yp(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, i = n.endsWith("?"), s = n.replace(/\?$/, "");
    if (r.length === 0) return i ? [s, ""] : [s];
    let o = Yp(r.join("/")),
        a = [];
    return a.push(...o.map(l => l === "" ? s : [s, l].join("/"))), i && a.push(...o), a.map(l => e.startsWith("/") && l === "" ? "/" : l)
}

function j1(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : R1(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const b1 = /^:[\w-]+$/,
    T1 = 3,
    N1 = 2,
    P1 = 1,
    E1 = 10,
    M1 = -2,
    cd = e => e === "*";

function L1(e, t) {
    let n = e.split("/"),
        r = n.length;
    return n.some(cd) && (r += M1), t && (r += N1), n.filter(i => !cd(i)).reduce((i, s) => i + (b1.test(s) ? T1 : s === "" ? P1 : E1), r)
}

function R1(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function A1(e, t, n) {
    let {
        routesMeta: r
    } = e, i = {}, s = "/", o = [];
    for (let a = 0; a < r.length; ++a) {
        let l = r[a],
            u = a === r.length - 1,
            d = s === "/" ? t : t.slice(s.length) || "/",
            f = dd({
                path: l.relativePath,
                caseSensitive: l.caseSensitive,
                end: u
            }, d),
            h = l.route;
        if (!f && u && n && !r[r.length - 1].route.index && (f = dd({
                path: l.relativePath,
                caseSensitive: l.caseSensitive,
                end: !1
            }, d)), !f) return null;
        Object.assign(i, f.params), o.push({
            params: i,
            pathname: zt([s, f.pathname]),
            pathnameBase: _1(zt([s, f.pathnameBase])),
            route: h
        }), f.pathnameBase !== "/" && (s = zt([s, f.pathnameBase]))
    }
    return o
}

function dd(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = D1(e.path, e.caseSensitive, e.end), i = t.match(n);
    if (!i) return null;
    let s = i[0],
        o = s.replace(/(.)\/+$/, "$1"),
        a = i.slice(1);
    return {
        params: r.reduce((u, d, f) => {
            let {
                paramName: h,
                isOptional: p
            } = d;
            if (h === "*") {
                let v = a[f] || "";
                o = s.slice(0, s.length - v.length).replace(/(.)\/+$/, "$1")
            }
            const x = a[f];
            return p && !x ? u[h] = void 0 : u[h] = (x || "").replace(/%2F/g, "/"), u
        }, {}),
        pathname: s,
        pathnameBase: o,
        pattern: e
    }
}

function D1(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0), fu(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = [],
        i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, a, l) => (r.push({
            paramName: a,
            isOptional: l != null
        }), l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r]
}

function $1(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return fu(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
    }
}

function hu(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}

function V1(e, t) {
    t === void 0 && (t = "/");
    let {
        pathname: n,
        search: r = "",
        hash: i = ""
    } = typeof e == "string" ? vn(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : F1(n, t) : t,
        search: O1(r),
        hash: I1(i)
    }
}

function F1(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(i => {
        i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i)
    }), n.length > 1 ? n.join("/") : "/"
}

function Oo(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function z1(e) {
    return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}

function Qp(e, t) {
    let n = z1(e);
    return t ? n.map((r, i) => i === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}

function Zp(e, t, n, r) {
    r === void 0 && (r = !1);
    let i;
    typeof e == "string" ? i = vn(e) : (i = ni({}, e), ne(!i.pathname || !i.pathname.includes("?"), Oo("?", "pathname", "search", i)), ne(!i.pathname || !i.pathname.includes("#"), Oo("#", "pathname", "hash", i)), ne(!i.search || !i.search.includes("#"), Oo("#", "search", "hash", i)));
    let s = e === "" || i.pathname === "",
        o = s ? "/" : i.pathname,
        a;
    if (o == null) a = n;
    else {
        let f = t.length - 1;
        if (!r && o.startsWith("..")) {
            let h = o.split("/");
            for (; h[0] === "..";) h.shift(), f -= 1;
            i.pathname = h.join("/")
        }
        a = f >= 0 ? t[f] : "/"
    }
    let l = V1(i, a),
        u = o && o !== "/" && o.endsWith("/"),
        d = (s || o === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (u || d) && (l.pathname += "/"), l
}
const zt = e => e.join("/").replace(/\/\/+/g, "/"),
    _1 = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    O1 = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
    I1 = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;

function B1(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const qp = ["post", "put", "patch", "delete"];
new Set(qp);
const U1 = ["get", ...qp];
new Set(U1);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ri() {
    return ri = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, ri.apply(this, arguments)
}
const pu = w.createContext(null),
    W1 = w.createContext(null),
    xn = w.createContext(null),
    ao = w.createContext(null),
    wn = w.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    Jp = w.createContext(null);

function H1(e, t) {
    let {
        relative: n
    } = t === void 0 ? {} : t;
    yi() || ne(!1);
    let {
        basename: r,
        navigator: i
    } = w.useContext(xn), {
        hash: s,
        pathname: o,
        search: a
    } = tm(e, {
        relative: n
    }), l = o;
    return r !== "/" && (l = o === "/" ? r : zt([r, o])), i.createHref({
        pathname: l,
        search: a,
        hash: s
    })
}

function yi() {
    return w.useContext(ao) != null
}

function kn() {
    return yi() || ne(!1), w.useContext(ao).location
}

function em(e) {
    w.useContext(xn).static || w.useLayoutEffect(e)
}

function mu() {
    let {
        isDataRoute: e
    } = w.useContext(wn);
    return e ? iv() : K1()
}

function K1() {
    yi() || ne(!1);
    let e = w.useContext(pu),
        {
            basename: t,
            future: n,
            navigator: r
        } = w.useContext(xn),
        {
            matches: i
        } = w.useContext(wn),
        {
            pathname: s
        } = kn(),
        o = JSON.stringify(Qp(i, n.v7_relativeSplatPath)),
        a = w.useRef(!1);
    return em(() => {
        a.current = !0
    }), w.useCallback(function(u, d) {
        if (d === void 0 && (d = {}), !a.current) return;
        if (typeof u == "number") {
            r.go(u);
            return
        }
        let f = Zp(u, JSON.parse(o), s, d.relative === "path");
        e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : zt([t, f.pathname])), (d.replace ? r.replace : r.push)(f, d.state, d)
    }, [t, r, o, s, e])
}

function tm(e, t) {
    let {
        relative: n
    } = t === void 0 ? {} : t, {
        future: r
    } = w.useContext(xn), {
        matches: i
    } = w.useContext(wn), {
        pathname: s
    } = kn(), o = JSON.stringify(Qp(i, r.v7_relativeSplatPath));
    return w.useMemo(() => Zp(e, JSON.parse(o), s, n === "path"), [e, o, s, n])
}

function G1(e, t) {
    return X1(e, t)
}

function X1(e, t, n, r) {
    yi() || ne(!1);
    let {
        navigator: i
    } = w.useContext(xn), {
        matches: s
    } = w.useContext(wn), o = s[s.length - 1], a = o ? o.params : {};
    o && o.pathname;
    let l = o ? o.pathnameBase : "/";
    o && o.route;
    let u = kn(),
        d;
    if (t) {
        var f;
        let S = typeof t == "string" ? vn(t) : t;
        l === "/" || (f = S.pathname) != null && f.startsWith(l) || ne(!1), d = S
    } else d = u;
    let h = d.pathname || "/",
        p = h;
    if (l !== "/") {
        let S = l.replace(/^\//, "").split("/");
        p = "/" + h.replace(/^\//, "").split("/").slice(S.length).join("/")
    }
    let x = S1(e, {
            pathname: p
        }),
        v = J1(x && x.map(S => Object.assign({}, S, {
            params: Object.assign({}, a, S.params),
            pathname: zt([l, i.encodeLocation ? i.encodeLocation(S.pathname).pathname : S.pathname]),
            pathnameBase: S.pathnameBase === "/" ? l : zt([l, i.encodeLocation ? i.encodeLocation(S.pathnameBase).pathname : S.pathnameBase])
        })), s, n, r);
    return t && v ? w.createElement(ao.Provider, {
        value: {
            location: ri({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, d),
            navigationType: Pt.Pop
        }
    }, v) : v
}

function Y1() {
    let e = rv(),
        t = B1(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        i = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        };
    return w.createElement(w.Fragment, null, w.createElement("h2", null, "Unexpected Application Error!"), w.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? w.createElement("pre", {
        style: i
    }, n) : null, null)
}
const Q1 = w.createElement(Y1, null);
class Z1 extends w.Component {
    constructor(t) {
        super(t), this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? w.createElement(wn.Provider, {
            value: this.props.routeContext
        }, w.createElement(Jp.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function q1(e) {
    let {
        routeContext: t,
        match: n,
        children: r
    } = e, i = w.useContext(pu);
    return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), w.createElement(wn.Provider, {
        value: t
    }, r)
}

function J1(e, t, n, r) {
    var i;
    if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
        var s;
        if (!n) return null;
        if (n.errors) e = n.matches;
        else if ((s = r) != null && s.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0) e = n.matches;
        else return null
    }
    let o = e,
        a = (i = n) == null ? void 0 : i.errors;
    if (a != null) {
        let d = o.findIndex(f => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0);
        d >= 0 || ne(!1), o = o.slice(0, Math.min(o.length, d + 1))
    }
    let l = !1,
        u = -1;
    if (n && r && r.v7_partialHydration)
        for (let d = 0; d < o.length; d++) {
            let f = o[d];
            if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = d), f.route.id) {
                let {
                    loaderData: h,
                    errors: p
                } = n, x = f.route.loader && h[f.route.id] === void 0 && (!p || p[f.route.id] === void 0);
                if (f.route.lazy || x) {
                    l = !0, u >= 0 ? o = o.slice(0, u + 1) : o = [o[0]];
                    break
                }
            }
        }
    return o.reduceRight((d, f, h) => {
        let p, x = !1,
            v = null,
            S = null;
        n && (p = a && f.route.id ? a[f.route.id] : void 0, v = f.route.errorElement || Q1, l && (u < 0 && h === 0 ? (x = !0, S = null) : u === h && (x = !0, S = f.route.hydrateFallbackElement || null)));
        let y = t.concat(o.slice(0, h + 1)),
            m = () => {
                let g;
                return p ? g = v : x ? g = S : f.route.Component ? g = w.createElement(f.route.Component, null) : f.route.element ? g = f.route.element : g = d, w.createElement(q1, {
                    match: f,
                    routeContext: {
                        outlet: d,
                        matches: y,
                        isDataRoute: n != null
                    },
                    children: g
                })
            };
        return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0) ? w.createElement(Z1, {
            location: n.location,
            revalidation: n.revalidation,
            component: v,
            error: p,
            children: m(),
            routeContext: {
                outlet: null,
                matches: y,
                isDataRoute: !0
            }
        }) : m()
    }, null)
}
var nm = function(e) {
        return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
    }(nm || {}),
    Ds = function(e) {
        return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
    }(Ds || {});

function ev(e) {
    let t = w.useContext(pu);
    return t || ne(!1), t
}

function tv(e) {
    let t = w.useContext(W1);
    return t || ne(!1), t
}

function nv(e) {
    let t = w.useContext(wn);
    return t || ne(!1), t
}

function rm(e) {
    let t = nv(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || ne(!1), n.route.id
}

function rv() {
    var e;
    let t = w.useContext(Jp),
        n = tv(Ds.UseRouteError),
        r = rm(Ds.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}

function iv() {
    let {
        router: e
    } = ev(nm.UseNavigateStable), t = rm(Ds.UseNavigateStable), n = w.useRef(!1);
    return em(() => {
        n.current = !0
    }), w.useCallback(function(i, s) {
        s === void 0 && (s = {}), n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, ri({
            fromRouteId: t
        }, s)))
    }, [e, t])
}

function sv(e, t) {
    e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath
}

function jn(e) {
    ne(!1)
}

function ov(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: i = Pt.Pop,
        navigator: s,
        static: o = !1,
        future: a
    } = e;
    yi() && ne(!1);
    let l = t.replace(/^\/*/, "/"),
        u = w.useMemo(() => ({
            basename: l,
            navigator: s,
            static: o,
            future: ri({
                v7_relativeSplatPath: !1
            }, a)
        }), [l, a, s, o]);
    typeof r == "string" && (r = vn(r));
    let {
        pathname: d = "/",
        search: f = "",
        hash: h = "",
        state: p = null,
        key: x = "default"
    } = r, v = w.useMemo(() => {
        let S = hu(d, l);
        return S == null ? null : {
            location: {
                pathname: S,
                search: f,
                hash: h,
                state: p,
                key: x
            },
            navigationType: i
        }
    }, [l, d, f, h, p, x, i]);
    return v == null ? null : w.createElement(xn.Provider, {
        value: u
    }, w.createElement(ao.Provider, {
        children: n,
        value: v
    }))
}

function av(e) {
    let {
        children: t,
        location: n
    } = e;
    return G1(Xa(t), n)
}
new Promise(() => {});

function Xa(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return w.Children.forEach(e, (r, i) => {
        if (!w.isValidElement(r)) return;
        let s = [...t, i];
        if (r.type === w.Fragment) {
            n.push.apply(n, Xa(r.props.children, s));
            return
        }
        r.type !== jn && ne(!1), !r.props.index || !r.props.children || ne(!1);
        let o = {
            id: r.props.id || s.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (o.children = Xa(r.props.children, s)), n.push(o)
    }), n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ya() {
    return Ya = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Ya.apply(this, arguments)
}

function lv(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        i, s;
    for (s = 0; s < r.length; s++) i = r[s], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}

function uv(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}

function cv(e, t) {
    return e.button === 0 && (!t || t === "_self") && !uv(e)
}

function Qa(e) {
    return e === void 0 && (e = ""), new URLSearchParams(typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((t, n) => {
        let r = e[n];
        return t.concat(Array.isArray(r) ? r.map(i => [n, i]) : [
            [n, r]
        ])
    }, []))
}

function dv(e, t) {
    let n = Qa(e);
    return t && t.forEach((r, i) => {
        n.has(i) || t.getAll(i).forEach(s => {
            n.append(i, s)
        })
    }), n
}
const fv = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"],
    hv = "6";
try {
    window.__reactRouterVersion = hv
} catch {}
const pv = "startTransition",
    fd = ay[pv];

function mv(e) {
    let {
        basename: t,
        children: n,
        future: r,
        window: i
    } = e, s = w.useRef();
    s.current == null && (s.current = x1({
        window: i,
        v5Compat: !0
    }));
    let o = s.current,
        [a, l] = w.useState({
            action: o.action,
            location: o.location
        }),
        {
            v7_startTransition: u
        } = r || {},
        d = w.useCallback(f => {
            u && fd ? fd(() => l(f)) : l(f)
        }, [l, u]);
    return w.useLayoutEffect(() => o.listen(d), [o, d]), w.useEffect(() => sv(r), [r]), w.createElement(ov, {
        basename: t,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: o,
        future: r
    })
}
const yv = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    gv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    is = w.forwardRef(function(t, n) {
        let {
            onClick: r,
            relative: i,
            reloadDocument: s,
            replace: o,
            state: a,
            target: l,
            to: u,
            preventScrollReset: d,
            viewTransition: f
        } = t, h = lv(t, fv), {
            basename: p
        } = w.useContext(xn), x, v = !1;
        if (typeof u == "string" && gv.test(u) && (x = u, yv)) try {
            let g = new URL(window.location.href),
                k = u.startsWith("//") ? new URL(g.protocol + u) : new URL(u),
                j = hu(k.pathname, p);
            k.origin === g.origin && j != null ? u = j + k.search + k.hash : v = !0
        } catch {}
        let S = H1(u, {
                relative: i
            }),
            y = vv(u, {
                replace: o,
                state: a,
                target: l,
                preventScrollReset: d,
                relative: i,
                viewTransition: f
            });

        function m(g) {
            r && r(g), g.defaultPrevented || y(g)
        }
        return w.createElement("a", Ya({}, h, {
            href: x || S,
            onClick: v || s ? r : m,
            ref: n,
            target: l
        }))
    });
var hd;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
})(hd || (hd = {}));
var pd;
(function(e) {
    e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(pd || (pd = {}));

function vv(e, t) {
    let {
        target: n,
        replace: r,
        state: i,
        preventScrollReset: s,
        relative: o,
        viewTransition: a
    } = t === void 0 ? {} : t, l = mu(), u = kn(), d = tm(e, {
        relative: o
    });
    return w.useCallback(f => {
        if (cv(f, n)) {
            f.preventDefault();
            let h = r !== void 0 ? r : As(u) === As(d);
            l(e, {
                replace: h,
                state: i,
                preventScrollReset: s,
                relative: o,
                viewTransition: a
            })
        }
    }, [u, l, d, r, i, n, e, s, o, a])
}

function xv(e) {
    let t = w.useRef(Qa(e)),
        n = w.useRef(!1),
        r = kn(),
        i = w.useMemo(() => dv(r.search, n.current ? null : t.current), [r.search]),
        s = mu(),
        o = w.useCallback((a, l) => {
            const u = Qa(typeof a == "function" ? a(i) : a);
            n.current = !0, s("?" + u, l)
        }, [s, i]);
    return [i, o]
}
const yu = w.createContext({});

function gu(e) {
    const t = w.useRef(null);
    return t.current === null && (t.current = e()), t.current
}
const vu = typeof window < "u",
    im = vu ? w.useLayoutEffect : w.useEffect,
    lo = w.createContext(null);

function xu(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}

function wu(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
const yt = (e, t, n) => n > t ? t : n < e ? e : n;
let $s = () => {};
const gt = {},
    sm = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);

function om(e) {
    return typeof e == "object" && e !== null
}
const am = e => /^0[^.\s]+$/u.test(e);

function ku(e) {
    let t;
    return () => (t === void 0 && (t = e()), t)
}
const Be = e => e,
    wv = (e, t) => n => t(e(n)),
    gi = (...e) => e.reduce(wv),
    ii = (e, t, n) => {
        const r = t - e;
        return r === 0 ? 1 : (n - e) / r
    };
class Su {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return xu(this.subscriptions, t), () => wu(this.subscriptions, t)
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1) this.subscriptions[0](t, n, r);
            else
                for (let s = 0; s < i; s++) {
                    const o = this.subscriptions[s];
                    o && o(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const it = e => e * 1e3,
    st = e => e / 1e3;

function lm(e, t) {
    return t ? e * (1e3 / t) : 0
}
const um = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
    kv = 1e-7,
    Sv = 12;

function Cv(e, t, n, r, i) {
    let s, o, a = 0;
    do o = t + (n - t) / 2, s = um(o, r, i) - e, s > 0 ? n = o : t = o; while (Math.abs(s) > kv && ++a < Sv);
    return o
}

function vi(e, t, n, r) {
    if (e === t && n === r) return Be;
    const i = s => Cv(s, 0, 1, e, n);
    return s => s === 0 || s === 1 ? s : um(i(s), t, r)
}
const cm = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
    dm = e => t => 1 - e(1 - t),
    fm = vi(.33, 1.53, .69, .99),
    Cu = dm(fm),
    hm = cm(Cu),
    pm = e => (e *= 2) < 1 ? .5 * Cu(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
    ju = e => 1 - Math.sin(Math.acos(e)),
    mm = dm(ju),
    ym = cm(ju),
    jv = vi(.42, 0, 1, 1),
    bv = vi(0, 0, .58, 1),
    gm = vi(.42, 0, .58, 1),
    Tv = e => Array.isArray(e) && typeof e[0] != "number",
    vm = e => Array.isArray(e) && typeof e[0] == "number",
    md = {
        linear: Be,
        easeIn: jv,
        easeInOut: gm,
        easeOut: bv,
        circIn: ju,
        circInOut: ym,
        circOut: mm,
        backIn: Cu,
        backInOut: hm,
        backOut: fm,
        anticipate: pm
    },
    Nv = e => typeof e == "string",
    yd = e => {
        if (vm(e)) {
            $s(e.length === 4);
            const [t, n, r, i] = e;
            return vi(t, n, r, i)
        } else if (Nv(e)) return $s(md[e] !== void 0), md[e];
        return e
    },
    Bi = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"],
    gd = {
        value: null,
        addProjectionMetrics: null
    };

function Pv(e, t) {
    let n = new Set,
        r = new Set,
        i = !1,
        s = !1;
    const o = new WeakSet;
    let a = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        l = 0;

    function u(f) {
        o.has(f) && (d.schedule(f), e()), l++, f(a)
    }
    const d = {
        schedule: (f, h = !1, p = !1) => {
            const v = p && i ? n : r;
            return h && o.add(f), v.has(f) || v.add(f), f
        },
        cancel: f => {
            r.delete(f), o.delete(f)
        },
        process: f => {
            if (a = f, i) {
                s = !0;
                return
            }
            i = !0, [n, r] = [r, n], n.forEach(u), t && gd.value && gd.value.frameloop[t].push(l), l = 0, n.clear(), i = !1, s && (s = !1, d.process(f))
        }
    };
    return d
}
const Ev = 40;

function xm(e, t) {
    let n = !1,
        r = !0;
    const i = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        s = () => n = !0,
        o = Bi.reduce((g, k) => (g[k] = Pv(s, t ? k : void 0), g), {}),
        {
            setup: a,
            read: l,
            resolveKeyframes: u,
            preUpdate: d,
            update: f,
            preRender: h,
            render: p,
            postRender: x
        } = o,
        v = () => {
            const g = gt.useManualTiming ? i.timestamp : performance.now();
            n = !1, gt.useManualTiming || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(g - i.timestamp, Ev), 1)), i.timestamp = g, i.isProcessing = !0, a.process(i), l.process(i), u.process(i), d.process(i), f.process(i), h.process(i), p.process(i), x.process(i), i.isProcessing = !1, n && t && (r = !1, e(v))
        },
        S = () => {
            n = !0, r = !0, i.isProcessing || e(v)
        };
    return {
        schedule: Bi.reduce((g, k) => {
            const j = o[k];
            return g[k] = (C, T = !1, b = !1) => (n || S(), j.schedule(C, T, b)), g
        }, {}),
        cancel: g => {
            for (let k = 0; k < Bi.length; k++) o[Bi[k]].cancel(g)
        },
        state: i,
        steps: o
    }
}
const {
    schedule: U,
    cancel: It,
    state: ce,
    steps: Io
} = xm(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Be, !0);
let ss;

function Mv() {
    ss = void 0
}
const be = {
        now: () => (ss === void 0 && be.set(ce.isProcessing || gt.useManualTiming ? ce.timestamp : performance.now()), ss),
        set: e => {
            ss = e, queueMicrotask(Mv)
        }
    },
    wm = e => t => typeof t == "string" && t.startsWith(e),
    bu = wm("--"),
    Lv = wm("var(--"),
    Tu = e => Lv(e) ? Rv.test(e.split("/*")[0].trim()) : !1,
    Rv = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    ar = {
        test: e => typeof e == "number",
        parse: parseFloat,
        transform: e => e
    },
    si = { ...ar,
        transform: e => yt(0, 1, e)
    },
    Ui = { ...ar,
        default: 1
    },
    Dr = e => Math.round(e * 1e5) / 1e5,
    Nu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function Av(e) {
    return e == null
}
const Dv = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    Pu = (e, t) => n => !!(typeof n == "string" && Dv.test(n) && n.startsWith(e) || t && !Av(n) && Object.prototype.hasOwnProperty.call(n, t)),
    km = (e, t, n) => r => {
        if (typeof r != "string") return r;
        const [i, s, o, a] = r.match(Nu);
        return {
            [e]: parseFloat(i),
            [t]: parseFloat(s),
            [n]: parseFloat(o),
            alpha: a !== void 0 ? parseFloat(a) : 1
        }
    },
    $v = e => yt(0, 255, e),
    Bo = { ...ar,
        transform: e => Math.round($v(e))
    },
    rn = {
        test: Pu("rgb", "red"),
        parse: km("red", "green", "blue"),
        transform: ({
            red: e,
            green: t,
            blue: n,
            alpha: r = 1
        }) => "rgba(" + Bo.transform(e) + ", " + Bo.transform(t) + ", " + Bo.transform(n) + ", " + Dr(si.transform(r)) + ")"
    };

function Vv(e) {
    let t = "",
        n = "",
        r = "",
        i = "";
    return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const Za = {
        test: Pu("#"),
        parse: Vv,
        transform: rn.transform
    },
    xi = e => ({
        test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
        parse: parseFloat,
        transform: t => `${t}${e}`
    }),
    kt = xi("deg"),
    ot = xi("%"),
    L = xi("px"),
    Fv = xi("vh"),
    zv = xi("vw"),
    vd = { ...ot,
        parse: e => ot.parse(e) / 100,
        transform: e => ot.transform(e * 100)
    },
    Fn = {
        test: Pu("hsl", "hue"),
        parse: km("hue", "saturation", "lightness"),
        transform: ({
            hue: e,
            saturation: t,
            lightness: n,
            alpha: r = 1
        }) => "hsla(" + Math.round(e) + ", " + ot.transform(Dr(t)) + ", " + ot.transform(Dr(n)) + ", " + Dr(si.transform(r)) + ")"
    },
    ee = {
        test: e => rn.test(e) || Za.test(e) || Fn.test(e),
        parse: e => rn.test(e) ? rn.parse(e) : Fn.test(e) ? Fn.parse(e) : Za.parse(e),
        transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? rn.transform(e) : Fn.transform(e),
        getAnimatableNone: e => {
            const t = ee.parse(e);
            return t.alpha = 0, ee.transform(t)
        }
    },
    _v = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function Ov(e) {
    var t, n;
    return isNaN(e) && typeof e == "string" && (((t = e.match(Nu)) == null ? void 0 : t.length) || 0) + (((n = e.match(_v)) == null ? void 0 : n.length) || 0) > 0
}
const Sm = "number",
    Cm = "color",
    Iv = "var",
    Bv = "var(",
    xd = "${}",
    Uv = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function oi(e) {
    const t = e.toString(),
        n = [],
        r = {
            color: [],
            number: [],
            var: []
        },
        i = [];
    let s = 0;
    const a = t.replace(Uv, l => (ee.test(l) ? (r.color.push(s), i.push(Cm), n.push(ee.parse(l))) : l.startsWith(Bv) ? (r.var.push(s), i.push(Iv), n.push(l)) : (r.number.push(s), i.push(Sm), n.push(parseFloat(l))), ++s, xd)).split(xd);
    return {
        values: n,
        split: a,
        indexes: r,
        types: i
    }
}

function jm(e) {
    return oi(e).values
}

function bm(e) {
    const {
        split: t,
        types: n
    } = oi(e), r = t.length;
    return i => {
        let s = "";
        for (let o = 0; o < r; o++)
            if (s += t[o], i[o] !== void 0) {
                const a = n[o];
                a === Sm ? s += Dr(i[o]) : a === Cm ? s += ee.transform(i[o]) : s += i[o]
            }
        return s
    }
}
const Wv = e => typeof e == "number" ? 0 : ee.test(e) ? ee.getAnimatableNone(e) : e;

function Hv(e) {
    const t = jm(e);
    return bm(e)(t.map(Wv))
}
const Bt = {
    test: Ov,
    parse: jm,
    createTransformer: bm,
    getAnimatableNone: Hv
};

function Uo(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function Kv({
    hue: e,
    saturation: t,
    lightness: n,
    alpha: r
}) {
    e /= 360, t /= 100, n /= 100;
    let i = 0,
        s = 0,
        o = 0;
    if (!t) i = s = o = n;
    else {
        const a = n < .5 ? n * (1 + t) : n + t - n * t,
            l = 2 * n - a;
        i = Uo(l, a, e + 1 / 3), s = Uo(l, a, e), o = Uo(l, a, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(s * 255),
        blue: Math.round(o * 255),
        alpha: r
    }
}

function Vs(e, t) {
    return n => n > 0 ? t : e
}
const H = (e, t, n) => e + (t - e) * n,
    Wo = (e, t, n) => {
        const r = e * e,
            i = n * (t * t - r) + r;
        return i < 0 ? 0 : Math.sqrt(i)
    },
    Gv = [Za, rn, Fn],
    Xv = e => Gv.find(t => t.test(e));

function wd(e) {
    const t = Xv(e);
    if (!t) return !1;
    let n = t.parse(e);
    return t === Fn && (n = Kv(n)), n
}
const kd = (e, t) => {
        const n = wd(e),
            r = wd(t);
        if (!n || !r) return Vs(e, t);
        const i = { ...n
        };
        return s => (i.red = Wo(n.red, r.red, s), i.green = Wo(n.green, r.green, s), i.blue = Wo(n.blue, r.blue, s), i.alpha = H(n.alpha, r.alpha, s), rn.transform(i))
    },
    qa = new Set(["none", "hidden"]);

function Yv(e, t) {
    return qa.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}

function Qv(e, t) {
    return n => H(e, t, n)
}

function Eu(e) {
    return typeof e == "number" ? Qv : typeof e == "string" ? Tu(e) ? Vs : ee.test(e) ? kd : Jv : Array.isArray(e) ? Tm : typeof e == "object" ? ee.test(e) ? kd : Zv : Vs
}

function Tm(e, t) {
    const n = [...e],
        r = n.length,
        i = e.map((s, o) => Eu(s)(s, t[o]));
    return s => {
        for (let o = 0; o < r; o++) n[o] = i[o](s);
        return n
    }
}

function Zv(e, t) {
    const n = { ...e,
            ...t
        },
        r = {};
    for (const i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = Eu(e[i])(e[i], t[i]));
    return i => {
        for (const s in r) n[s] = r[s](i);
        return n
    }
}

function qv(e, t) {
    const n = [],
        r = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let i = 0; i < t.values.length; i++) {
        const s = t.types[i],
            o = e.indexes[s][r[s]],
            a = e.values[o] ? ? 0;
        n[i] = a, r[s]++
    }
    return n
}
const Jv = (e, t) => {
    const n = Bt.createTransformer(t),
        r = oi(e),
        i = oi(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? qa.has(e) && !i.values.length || qa.has(t) && !r.values.length ? Yv(e, t) : gi(Tm(qv(r, i), i.values), n) : Vs(e, t)
};

function Nm(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? H(e, t, n) : Eu(e)(e, t)
}
const ex = e => {
        const t = ({
            timestamp: n
        }) => e(n);
        return {
            start: (n = !0) => U.update(t, n),
            stop: () => It(t),
            now: () => ce.isProcessing ? ce.timestamp : be.now()
        }
    },
    Pm = (e, t, n = 10) => {
        let r = "";
        const i = Math.max(Math.round(t / n), 2);
        for (let s = 0; s < i; s++) r += Math.round(e(s / (i - 1)) * 1e4) / 1e4 + ", ";
        return `linear(${r.substring(0,r.length-2)})`
    },
    Fs = 2e4;

function Mu(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < Fs;) t += n, r = e.next(t);
    return t >= Fs ? 1 / 0 : t
}

function tx(e, t = 100, n) {
    const r = n({ ...e,
            keyframes: [0, t]
        }),
        i = Math.min(Mu(r), Fs);
    return {
        type: "keyframes",
        ease: s => r.next(i * s).value / t,
        duration: st(i)
    }
}
const nx = 5;

function Em(e, t, n) {
    const r = Math.max(t - nx, 0);
    return lm(n - e(r), t - r)
}
const X = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: .3,
        visualDuration: .3,
        restSpeed: {
            granular: .01,
            default: 2
        },
        restDelta: {
            granular: .005,
            default: .5
        },
        minDuration: .01,
        maxDuration: 10,
        minDamping: .05,
        maxDamping: 1
    },
    Ho = .001;

function rx({
    duration: e = X.duration,
    bounce: t = X.bounce,
    velocity: n = X.velocity,
    mass: r = X.mass
}) {
    let i, s, o = 1 - t;
    o = yt(X.minDamping, X.maxDamping, o), e = yt(X.minDuration, X.maxDuration, st(e)), o < 1 ? (i = u => {
        const d = u * o,
            f = d * e,
            h = d - n,
            p = Ja(u, o),
            x = Math.exp(-f);
        return Ho - h / p * x
    }, s = u => {
        const f = u * o * e,
            h = f * n + n,
            p = Math.pow(o, 2) * Math.pow(u, 2) * e,
            x = Math.exp(-f),
            v = Ja(Math.pow(u, 2), o);
        return (-i(u) + Ho > 0 ? -1 : 1) * ((h - p) * x) / v
    }) : (i = u => {
        const d = Math.exp(-u * e),
            f = (u - n) * e + 1;
        return -Ho + d * f
    }, s = u => {
        const d = Math.exp(-u * e),
            f = (n - u) * (e * e);
        return d * f
    });
    const a = 5 / e,
        l = sx(i, s, a);
    if (e = it(e), isNaN(l)) return {
        stiffness: X.stiffness,
        damping: X.damping,
        duration: e
    }; {
        const u = Math.pow(l, 2) * r;
        return {
            stiffness: u,
            damping: o * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const ix = 12;

function sx(e, t, n) {
    let r = n;
    for (let i = 1; i < ix; i++) r = r - e(r) / t(r);
    return r
}

function Ja(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const ox = ["duration", "bounce"],
    ax = ["stiffness", "damping", "mass"];

function Sd(e, t) {
    return t.some(n => e[n] !== void 0)
}

function lx(e) {
    let t = {
        velocity: X.velocity,
        stiffness: X.stiffness,
        damping: X.damping,
        mass: X.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!Sd(e, ax) && Sd(e, ox))
        if (e.visualDuration) {
            const n = e.visualDuration,
                r = 2 * Math.PI / (n * 1.2),
                i = r * r,
                s = 2 * yt(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
            t = { ...t,
                mass: X.mass,
                stiffness: i,
                damping: s
            }
        } else {
            const n = rx(e);
            t = { ...t,
                ...n,
                mass: X.mass
            }, t.isResolvedFromDuration = !0
        }
    return t
}

function zs(e = X.visualDuration, t = X.bounce) {
    const n = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: t
    } : e;
    let {
        restSpeed: r,
        restDelta: i
    } = n;
    const s = n.keyframes[0],
        o = n.keyframes[n.keyframes.length - 1],
        a = {
            done: !1,
            value: s
        },
        {
            stiffness: l,
            damping: u,
            mass: d,
            duration: f,
            velocity: h,
            isResolvedFromDuration: p
        } = lx({ ...n,
            velocity: -st(n.velocity || 0)
        }),
        x = h || 0,
        v = u / (2 * Math.sqrt(l * d)),
        S = o - s,
        y = st(Math.sqrt(l / d)),
        m = Math.abs(S) < 5;
    r || (r = m ? X.restSpeed.granular : X.restSpeed.default), i || (i = m ? X.restDelta.granular : X.restDelta.default);
    let g;
    if (v < 1) {
        const j = Ja(y, v);
        g = C => {
            const T = Math.exp(-v * y * C);
            return o - T * ((x + v * y * S) / j * Math.sin(j * C) + S * Math.cos(j * C))
        }
    } else if (v === 1) g = j => o - Math.exp(-y * j) * (S + (x + y * S) * j);
    else {
        const j = y * Math.sqrt(v * v - 1);
        g = C => {
            const T = Math.exp(-v * y * C),
                b = Math.min(j * C, 300);
            return o - T * ((x + v * y * S) * Math.sinh(b) + j * S * Math.cosh(b)) / j
        }
    }
    const k = {
        calculatedDuration: p && f || null,
        next: j => {
            const C = g(j);
            if (p) a.done = j >= f;
            else {
                let T = j === 0 ? x : 0;
                v < 1 && (T = j === 0 ? it(x) : Em(g, j, C));
                const b = Math.abs(T) <= r,
                    D = Math.abs(o - C) <= i;
                a.done = b && D
            }
            return a.value = a.done ? o : C, a
        },
        toString: () => {
            const j = Math.min(Mu(k), Fs),
                C = Pm(T => k.next(j * T).value, j, 30);
            return j + "ms " + C
        },
        toTransition: () => {}
    };
    return k
}
zs.applyToOptions = e => {
    const t = tx(e, 100, zs);
    return e.ease = t.ease, e.duration = it(t.duration), e.type = "keyframes", e
};

function el({
    keyframes: e,
    velocity: t = 0,
    power: n = .8,
    timeConstant: r = 325,
    bounceDamping: i = 10,
    bounceStiffness: s = 500,
    modifyTarget: o,
    min: a,
    max: l,
    restDelta: u = .5,
    restSpeed: d
}) {
    const f = e[0],
        h = {
            done: !1,
            value: f
        },
        p = b => a !== void 0 && b < a || l !== void 0 && b > l,
        x = b => a === void 0 ? l : l === void 0 || Math.abs(a - b) < Math.abs(l - b) ? a : l;
    let v = n * t;
    const S = f + v,
        y = o === void 0 ? S : o(S);
    y !== S && (v = y - f);
    const m = b => -v * Math.exp(-b / r),
        g = b => y + m(b),
        k = b => {
            const D = m(b),
                M = g(b);
            h.done = Math.abs(D) <= u, h.value = h.done ? y : M
        };
    let j, C;
    const T = b => {
        p(h.value) && (j = b, C = zs({
            keyframes: [h.value, x(h.value)],
            velocity: Em(g, b, h.value),
            damping: i,
            stiffness: s,
            restDelta: u,
            restSpeed: d
        }))
    };
    return T(0), {
        calculatedDuration: null,
        next: b => {
            let D = !1;
            return !C && j === void 0 && (D = !0, k(b), T(b)), j !== void 0 && b >= j ? C.next(b - j) : (!D && k(b), h)
        }
    }
}

function ux(e, t, n) {
    const r = [],
        i = n || gt.mix || Nm,
        s = e.length - 1;
    for (let o = 0; o < s; o++) {
        let a = i(e[o], e[o + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[o] || Be : t;
            a = gi(l, a)
        }
        r.push(a)
    }
    return r
}

function cx(e, t, {
    clamp: n = !0,
    ease: r,
    mixer: i
} = {}) {
    const s = e.length;
    if ($s(s === t.length), s === 1) return () => t[0];
    if (s === 2 && t[0] === t[1]) return () => t[1];
    const o = e[0] === e[1];
    e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
    const a = ux(t, r, i),
        l = a.length,
        u = d => {
            if (o && d < e[0]) return t[0];
            let f = 0;
            if (l > 1)
                for (; f < e.length - 2 && !(d < e[f + 1]); f++);
            const h = ii(e[f], e[f + 1], d);
            return a[f](h)
        };
    return n ? d => u(yt(e[0], e[s - 1], d)) : u
}

function dx(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = ii(0, t, r);
        e.push(H(n, 1, i))
    }
}

function fx(e) {
    const t = [0];
    return dx(t, e.length - 1), t
}

function hx(e, t) {
    return e.map(n => n * t)
}

function px(e, t) {
    return e.map(() => t || gm).splice(0, e.length - 1)
}

function $r({
    duration: e = 300,
    keyframes: t,
    times: n,
    ease: r = "easeInOut"
}) {
    const i = Tv(r) ? r.map(yd) : yd(r),
        s = {
            done: !1,
            value: t[0]
        },
        o = hx(n && n.length === t.length ? n : fx(t), e),
        a = cx(o, t, {
            ease: Array.isArray(i) ? i : px(t, i)
        });
    return {
        calculatedDuration: e,
        next: l => (s.value = a(l), s.done = l >= e, s)
    }
}
const mx = e => e !== null;

function Lu(e, {
    repeat: t,
    repeatType: n = "loop"
}, r, i = 1) {
    const s = e.filter(mx),
        a = i < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
    return !a || r === void 0 ? s[a] : r
}
const yx = {
    decay: el,
    inertia: el,
    tween: $r,
    keyframes: $r,
    spring: zs
};

function Mm(e) {
    typeof e.type == "string" && (e.type = yx[e.type])
}
class Ru {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(t => {
            this.resolve = t
        })
    }
    notifyFinished() {
        this.resolve()
    }
    then(t, n) {
        return this.finished.then(t, n)
    }
}
const gx = e => e / 100;
class Au extends Ru {
    constructor(t) {
        super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
            var r, i;
            const {
                motionValue: n
            } = this.options;
            n && n.updatedAt !== be.now() && this.tick(be.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), (i = (r = this.options).onStop) == null || i.call(r))
        }, this.options = t, this.initAnimation(), this.play(), t.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {
            options: t
        } = this;
        Mm(t);
        const {
            type: n = $r,
            repeat: r = 0,
            repeatDelay: i = 0,
            repeatType: s,
            velocity: o = 0
        } = t;
        let {
            keyframes: a
        } = t;
        const l = n || $r;
        l !== $r && typeof a[0] != "number" && (this.mixKeyframes = gi(gx, Nm(a[0], a[1])), a = [0, 100]);
        const u = l({ ...t,
            keyframes: a
        });
        s === "mirror" && (this.mirroredGenerator = l({ ...t,
            keyframes: [...a].reverse(),
            velocity: -o
        })), u.calculatedDuration === null && (u.calculatedDuration = Mu(u));
        const {
            calculatedDuration: d
        } = u;
        this.calculatedDuration = d, this.resolvedDuration = d + i, this.totalDuration = this.resolvedDuration * (r + 1) - i, this.generator = u
    }
    updateTime(t) {
        const n = Math.round(t - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n
    }
    tick(t, n = !1) {
        const {
            generator: r,
            totalDuration: i,
            mixKeyframes: s,
            mirroredGenerator: o,
            resolvedDuration: a,
            calculatedDuration: l
        } = this;
        if (this.startTime === null) return r.next(0);
        const {
            delay: u = 0,
            keyframes: d,
            repeat: f,
            repeatType: h,
            repeatDelay: p,
            type: x,
            onUpdate: v,
            finalKeyframe: S
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - i / this.speed, this.startTime)), n ? this.currentTime = t : this.updateTime(t);
        const y = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
            m = this.playbackSpeed >= 0 ? y < 0 : y > i;
        this.currentTime = Math.max(y, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = i);
        let g = this.currentTime,
            k = r;
        if (f) {
            const b = Math.min(this.currentTime, i) / a;
            let D = Math.floor(b),
                M = b % 1;
            !M && b >= 1 && (M = 1), M === 1 && D--, D = Math.min(D, f + 1), !!(D % 2) && (h === "reverse" ? (M = 1 - M, p && (M -= p / a)) : h === "mirror" && (k = o)), g = yt(0, 1, M) * a
        }
        const j = m ? {
            done: !1,
            value: d[0]
        } : k.next(g);
        s && (j.value = s(j.value));
        let {
            done: C
        } = j;
        !m && l !== null && (C = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
        const T = this.holdTime === null && (this.state === "finished" || this.state === "running" && C);
        return T && x !== el && (j.value = Lu(d, this.options, S, this.speed)), v && v(j.value), T && this.finish(), j
    }
    then(t, n) {
        return this.finished.then(t, n)
    }
    get duration() {
        return st(this.calculatedDuration)
    }
    get time() {
        return st(this.currentTime)
    }
    set time(t) {
        var n;
        t = it(t), this.currentTime = t, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), (n = this.driver) == null || n.start(!1)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        this.updateTime(be.now());
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t, n && (this.time = st(this.currentTime))
    }
    play() {
        var i, s;
        if (this.isStopped) return;
        const {
            driver: t = ex,
            startTime: n
        } = this.options;
        this.driver || (this.driver = t(o => this.tick(o))), (s = (i = this.options).onPlay) == null || s.call(i);
        const r = this.driver.now();
        this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = n ? ? r), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
    }
    pause() {
        this.state = "paused", this.updateTime(be.now()), this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null
    }
    finish() {
        var t, n;
        this.notifyFinished(), this.teardown(), this.state = "finished", (n = (t = this.options).onComplete) == null || n.call(t)
    }
    cancel() {
        var t, n;
        this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), (n = (t = this.options).onCancel) == null || n.call(t)
    }
    teardown() {
        this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0, this.tick(t, !0)
    }
    attachTimeline(t) {
        var n;
        return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), (n = this.driver) == null || n.stop(), t.observe(this)
    }
}

function vx(e) {
    for (let t = 1; t < e.length; t++) e[t] ? ? (e[t] = e[t - 1])
}
const sn = e => e * 180 / Math.PI,
    tl = e => {
        const t = sn(Math.atan2(e[1], e[0]));
        return nl(t)
    },
    xx = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
        rotate: tl,
        rotateZ: tl,
        skewX: e => sn(Math.atan(e[1])),
        skewY: e => sn(Math.atan(e[2])),
        skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
    },
    nl = e => (e = e % 360, e < 0 && (e += 360), e),
    Cd = tl,
    jd = e => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
    bd = e => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
    wx = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: jd,
        scaleY: bd,
        scale: e => (jd(e) + bd(e)) / 2,
        rotateX: e => nl(sn(Math.atan2(e[6], e[5]))),
        rotateY: e => nl(sn(Math.atan2(-e[2], e[0]))),
        rotateZ: Cd,
        rotate: Cd,
        skewX: e => sn(Math.atan(e[4])),
        skewY: e => sn(Math.atan(e[1])),
        skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
    };

function rl(e) {
    return e.includes("scale") ? 1 : 0
}

function il(e, t) {
    if (!e || e === "none") return rl(t);
    const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let r, i;
    if (n) r = wx, i = n;
    else {
        const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        r = xx, i = a
    }
    if (!i) return rl(t);
    const s = r[t],
        o = i[1].split(",").map(Sx);
    return typeof s == "function" ? s(o) : o[s]
}
const kx = (e, t) => {
    const {
        transform: n = "none"
    } = getComputedStyle(e);
    return il(n, t)
};

function Sx(e) {
    return parseFloat(e.trim())
}
const lr = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    ur = new Set(lr),
    Td = e => e === ar || e === L,
    Cx = new Set(["x", "y", "z"]),
    jx = lr.filter(e => !Cx.has(e));

function bx(e) {
    const t = [];
    return jx.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
    }), t
}
const ln = {
    width: ({
        x: e
    }, {
        paddingLeft: t = "0",
        paddingRight: n = "0"
    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({
        y: e
    }, {
        paddingTop: t = "0",
        paddingBottom: n = "0"
    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {
        top: t
    }) => parseFloat(t),
    left: (e, {
        left: t
    }) => parseFloat(t),
    bottom: ({
        y: e
    }, {
        top: t
    }) => parseFloat(t) + (e.max - e.min),
    right: ({
        x: e
    }, {
        left: t
    }) => parseFloat(t) + (e.max - e.min),
    x: (e, {
        transform: t
    }) => il(t, "x"),
    y: (e, {
        transform: t
    }) => il(t, "y")
};
ln.translateX = ln.x;
ln.translateY = ln.y;
const un = new Set;
let sl = !1,
    ol = !1,
    al = !1;

function Lm() {
    if (ol) {
        const e = Array.from(un).filter(r => r.needsMeasurement),
            t = new Set(e.map(r => r.element)),
            n = new Map;
        t.forEach(r => {
            const i = bx(r);
            i.length && (n.set(r, i), r.render())
        }), e.forEach(r => r.measureInitialState()), t.forEach(r => {
            r.render();
            const i = n.get(r);
            i && i.forEach(([s, o]) => {
                var a;
                (a = r.getValue(s)) == null || a.set(o)
            })
        }), e.forEach(r => r.measureEndState()), e.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        })
    }
    ol = !1, sl = !1, un.forEach(e => e.complete(al)), un.clear()
}

function Rm() {
    un.forEach(e => {
        e.readKeyframes(), e.needsMeasurement && (ol = !0)
    })
}

function Tx() {
    al = !0, Rm(), Lm(), al = !1
}
class Du {
    constructor(t, n, r, i, s, o = !1) {
        this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = i, this.element = s, this.isAsync = o
    }
    scheduleResolve() {
        this.state = "scheduled", this.isAsync ? (un.add(this), sl || (sl = !0, U.read(Rm), U.resolveKeyframes(Lm))) : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: t,
            name: n,
            element: r,
            motionValue: i
        } = this;
        if (t[0] === null) {
            const s = i == null ? void 0 : i.get(),
                o = t[t.length - 1];
            if (s !== void 0) t[0] = s;
            else if (r && n) {
                const a = r.readValue(n, o);
                a != null && (t[0] = a)
            }
            t[0] === void 0 && (t[0] = o), i && s === void 0 && i.set(t[0])
        }
        vx(t)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(t = !1) {
        this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), un.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (un.delete(this), this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const Nx = e => e.startsWith("--");

function Px(e, t, n) {
    Nx(t) ? e.style.setProperty(t, n) : e.style[t] = n
}
const Ex = ku(() => window.ScrollTimeline !== void 0),
    Mx = {};

function Lx(e, t) {
    const n = ku(e);
    return () => Mx[t] ? ? n()
}
const Am = Lx(() => {
        try {
            document.createElement("div").animate({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            })
        } catch {
            return !1
        }
        return !0
    }, "linearEasing"),
    jr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
    Nd = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: jr([0, .65, .55, 1]),
        circOut: jr([.55, 0, 1, .45]),
        backIn: jr([.31, .01, .66, -.59]),
        backOut: jr([.33, 1.53, .69, .99])
    };

function Dm(e, t) {
    if (e) return typeof e == "function" ? Am() ? Pm(e, t) : "ease-out" : vm(e) ? jr(e) : Array.isArray(e) ? e.map(n => Dm(n, t) || Nd.easeOut) : Nd[e]
}

function Rx(e, t, n, {
    delay: r = 0,
    duration: i = 300,
    repeat: s = 0,
    repeatType: o = "loop",
    ease: a = "easeOut",
    times: l
} = {}, u = void 0) {
    const d = {
        [t]: n
    };
    l && (d.offset = l);
    const f = Dm(a, i);
    Array.isArray(f) && (d.easing = f);
    const h = {
        delay: r,
        duration: i,
        easing: Array.isArray(f) ? "linear" : f,
        fill: "both",
        iterations: s + 1,
        direction: o === "reverse" ? "alternate" : "normal"
    };
    return u && (h.pseudoElement = u), e.animate(d, h)
}

function $m(e) {
    return typeof e == "function" && "applyToOptions" in e
}

function Ax({
    type: e,
    ...t
}) {
    return $m(e) && Am() ? e.applyToOptions(t) : (t.duration ? ? (t.duration = 300), t.ease ? ? (t.ease = "easeOut"), t)
}
class Dx extends Ru {
    constructor(t) {
        if (super(), this.finishedTime = null, this.isStopped = !1, !t) return;
        const {
            element: n,
            name: r,
            keyframes: i,
            pseudoElement: s,
            allowFlatten: o = !1,
            finalKeyframe: a,
            onComplete: l
        } = t;
        this.isPseudoElement = !!s, this.allowFlatten = o, this.options = t, $s(typeof t.type != "string");
        const u = Ax(t);
        this.animation = Rx(n, r, i, u, s), u.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
            if (this.finishedTime = this.time, !s) {
                const d = Lu(i, this.options, a, this.speed);
                this.updateMotionValue ? this.updateMotionValue(d) : Px(n, r, d), this.animation.cancel()
            }
            l == null || l(), this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        var t, n;
        (n = (t = this.animation).finish) == null || n.call(t)
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch {}
    }
    stop() {
        if (this.isStopped) return;
        this.isStopped = !0;
        const {
            state: t
        } = this;
        t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        var t, n;
        this.isPseudoElement || (n = (t = this.animation).commitStyles) == null || n.call(t)
    }
    get duration() {
        var n, r;
        const t = ((r = (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) == null ? void 0 : r.call(n).duration) || 0;
        return st(Number(t))
    }
    get time() {
        return st(Number(this.animation.currentTime) || 0)
    }
    set time(t) {
        this.finishedTime = null, this.animation.currentTime = it(t)
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(t) {
        t < 0 && (this.finishedTime = null), this.animation.playbackRate = t
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return Number(this.animation.startTime)
    }
    set startTime(t) {
        this.animation.startTime = t
    }
    attachTimeline({
        timeline: t,
        observe: n
    }) {
        var r;
        return this.allowFlatten && ((r = this.animation.effect) == null || r.updateTiming({
            easing: "linear"
        })), this.animation.onfinish = null, t && Ex() ? (this.animation.timeline = t, Be) : n(this)
    }
}
const Vm = {
    anticipate: pm,
    backInOut: hm,
    circInOut: ym
};

function $x(e) {
    return e in Vm
}

function Vx(e) {
    typeof e.ease == "string" && $x(e.ease) && (e.ease = Vm[e.ease])
}
const Pd = 10;
class Fx extends Dx {
    constructor(t) {
        Vx(t), Mm(t), super(t), t.startTime && (this.startTime = t.startTime), this.options = t
    }
    updateMotionValue(t) {
        const {
            motionValue: n,
            onUpdate: r,
            onComplete: i,
            element: s,
            ...o
        } = this.options;
        if (!n) return;
        if (t !== void 0) {
            n.set(t);
            return
        }
        const a = new Au({ ...o,
                autoplay: !1
            }),
            l = it(this.finishedTime ? ? this.time);
        n.setWithVelocity(a.sample(l - Pd).value, a.sample(l).value, Pd), a.stop()
    }
}
const Ed = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (Bt.test(e) || e === "0") && !e.startsWith("url("));

function zx(e) {
    const t = e[0];
    if (e.length === 1) return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t) return !0
}

function _x(e, t, n, r) {
    const i = e[0];
    if (i === null) return !1;
    if (t === "display" || t === "visibility") return !0;
    const s = e[e.length - 1],
        o = Ed(i, t),
        a = Ed(s, t);
    return !o || !a ? !1 : zx(e) || (n === "spring" || $m(n)) && r
}

function $u(e) {
    return om(e) && "offsetHeight" in e
}
const Ox = new Set(["opacity", "clipPath", "filter", "transform"]),
    Ix = ku(() => Object.hasOwnProperty.call(Element.prototype, "animate"));

function Bx(e) {
    var u;
    const {
        motionValue: t,
        name: n,
        repeatDelay: r,
        repeatType: i,
        damping: s,
        type: o
    } = e;
    if (!$u((u = t == null ? void 0 : t.owner) == null ? void 0 : u.current)) return !1;
    const {
        onUpdate: a,
        transformTemplate: l
    } = t.owner.getProps();
    return Ix() && n && Ox.has(n) && (n !== "transform" || !l) && !a && !r && i !== "mirror" && s !== 0 && o !== "inertia"
}
const Ux = 40;
class Wx extends Ru {
    constructor({
        autoplay: t = !0,
        delay: n = 0,
        type: r = "keyframes",
        repeat: i = 0,
        repeatDelay: s = 0,
        repeatType: o = "loop",
        keyframes: a,
        name: l,
        motionValue: u,
        element: d,
        ...f
    }) {
        var x;
        super(), this.stop = () => {
            var v, S;
            this._animation && (this._animation.stop(), (v = this.stopTimeline) == null || v.call(this)), (S = this.keyframeResolver) == null || S.cancel()
        }, this.createdAt = be.now();
        const h = {
                autoplay: t,
                delay: n,
                type: r,
                repeat: i,
                repeatDelay: s,
                repeatType: o,
                name: l,
                motionValue: u,
                element: d,
                ...f
            },
            p = (d == null ? void 0 : d.KeyframeResolver) || Du;
        this.keyframeResolver = new p(a, (v, S, y) => this.onKeyframesResolved(v, S, h, !y), l, u, d), (x = this.keyframeResolver) == null || x.scheduleResolve()
    }
    onKeyframesResolved(t, n, r, i) {
        this.keyframeResolver = void 0;
        const {
            name: s,
            type: o,
            velocity: a,
            delay: l,
            isHandoff: u,
            onUpdate: d
        } = r;
        this.resolvedAt = be.now(), _x(t, s, o, a) || ((gt.instantAnimations || !l) && (d == null || d(Lu(t, r, n))), t[0] = t[t.length - 1], r.duration = 0, r.repeat = 0);
        const h = {
                startTime: i ? this.resolvedAt ? this.resolvedAt - this.createdAt > Ux ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
                finalKeyframe: n,
                ...r,
                keyframes: t
            },
            p = !u && Bx(h) ? new Fx({ ...h,
                element: h.motionValue.owner.current
            }) : new Au(h);
        p.finished.then(() => this.notifyFinished()).catch(Be), this.pendingTimeline && (this.stopTimeline = p.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = p
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(t, n) {
        return this.finished.finally(t).then(() => {})
    }
    get animation() {
        var t;
        return this._animation || ((t = this.keyframeResolver) == null || t.resume(), Tx()), this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get time() {
        return this.animation.time
    }
    set time(t) {
        this.animation.time = t
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(t) {
        this.animation.speed = t
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(t) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        var t;
        this._animation && this.animation.cancel(), (t = this.keyframeResolver) == null || t.cancel()
    }
}
const Hx = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function Kx(e) {
    const t = Hx.exec(e);
    if (!t) return [, ];
    const [, n, r, i] = t;
    return [`--${n??r}`, i]
}

function Fm(e, t, n = 1) {
    const [r, i] = Kx(e);
    if (!r) return;
    const s = window.getComputedStyle(t).getPropertyValue(r);
    if (s) {
        const o = s.trim();
        return sm(o) ? parseFloat(o) : o
    }
    return Tu(i) ? Fm(i, t, n + 1) : i
}

function Vu(e, t) {
    return (e == null ? void 0 : e[t]) ? ? (e == null ? void 0 : e.default) ? ? e
}
const zm = new Set(["width", "height", "top", "left", "right", "bottom", ...lr]),
    Gx = {
        test: e => e === "auto",
        parse: e => e
    },
    _m = e => t => t.test(e),
    Om = [ar, L, ot, kt, zv, Fv, Gx],
    Md = e => Om.find(_m(e));

function Xx(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || am(e) : !0
}
const Yx = new Set(["brightness", "contrast", "saturate", "opacity"]);

function Qx(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow") return e;
    const [r] = n.match(Nu) || [];
    if (!r) return e;
    const i = n.replace(r, "");
    let s = Yx.has(t) ? 1 : 0;
    return r !== n && (s *= 100), t + "(" + s + i + ")"
}
const Zx = /\b([a-z-]*)\(.*?\)/gu,
    ll = { ...Bt,
        getAnimatableNone: e => {
            const t = e.match(Zx);
            return t ? t.map(Qx).join(" ") : e
        }
    },
    Ld = { ...ar,
        transform: Math.round
    },
    qx = {
        rotate: kt,
        rotateX: kt,
        rotateY: kt,
        rotateZ: kt,
        scale: Ui,
        scaleX: Ui,
        scaleY: Ui,
        scaleZ: Ui,
        skew: kt,
        skewX: kt,
        skewY: kt,
        distance: L,
        translateX: L,
        translateY: L,
        translateZ: L,
        x: L,
        y: L,
        z: L,
        perspective: L,
        transformPerspective: L,
        opacity: si,
        originX: vd,
        originY: vd,
        originZ: L
    },
    Fu = {
        borderWidth: L,
        borderTopWidth: L,
        borderRightWidth: L,
        borderBottomWidth: L,
        borderLeftWidth: L,
        borderRadius: L,
        radius: L,
        borderTopLeftRadius: L,
        borderTopRightRadius: L,
        borderBottomRightRadius: L,
        borderBottomLeftRadius: L,
        width: L,
        maxWidth: L,
        height: L,
        maxHeight: L,
        top: L,
        right: L,
        bottom: L,
        left: L,
        padding: L,
        paddingTop: L,
        paddingRight: L,
        paddingBottom: L,
        paddingLeft: L,
        margin: L,
        marginTop: L,
        marginRight: L,
        marginBottom: L,
        marginLeft: L,
        backgroundPositionX: L,
        backgroundPositionY: L,
        ...qx,
        zIndex: Ld,
        fillOpacity: si,
        strokeOpacity: si,
        numOctaves: Ld
    },
    Jx = { ...Fu,
        color: ee,
        backgroundColor: ee,
        outlineColor: ee,
        fill: ee,
        stroke: ee,
        borderColor: ee,
        borderTopColor: ee,
        borderRightColor: ee,
        borderBottomColor: ee,
        borderLeftColor: ee,
        filter: ll,
        WebkitFilter: ll
    },
    Im = e => Jx[e];

function Bm(e, t) {
    let n = Im(e);
    return n !== ll && (n = Bt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const e2 = new Set(["auto", "none", "0"]);

function t2(e, t, n) {
    let r = 0,
        i;
    for (; r < e.length && !i;) {
        const s = e[r];
        typeof s == "string" && !e2.has(s) && oi(s).values.length && (i = e[r]), r++
    }
    if (i && n)
        for (const s of t) e[s] = Bm(n, i)
}
class n2 extends Du {
    constructor(t, n, r, i, s) {
        super(t, n, r, i, s, !0)
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: t,
            element: n,
            name: r
        } = this;
        if (!n || !n.current) return;
        super.readKeyframes();
        for (let l = 0; l < t.length; l++) {
            let u = t[l];
            if (typeof u == "string" && (u = u.trim(), Tu(u))) {
                const d = Fm(u, n.current);
                d !== void 0 && (t[l] = d), l === t.length - 1 && (this.finalKeyframe = u)
            }
        }
        if (this.resolveNoneKeyframes(), !zm.has(r) || t.length !== 2) return;
        const [i, s] = t, o = Md(i), a = Md(s);
        if (o !== a)
            if (Td(o) && Td(a))
                for (let l = 0; l < t.length; l++) {
                    const u = t[l];
                    typeof u == "string" && (t[l] = parseFloat(u))
                } else ln[r] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: t,
            name: n
        } = this, r = [];
        for (let i = 0; i < t.length; i++)(t[i] === null || Xx(t[i])) && r.push(i);
        r.length && t2(t, r, n)
    }
    measureInitialState() {
        const {
            element: t,
            unresolvedKeyframes: n,
            name: r
        } = this;
        if (!t || !t.current) return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = ln[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
        const i = n[n.length - 1];
        i !== void 0 && t.getValue(r, i).jump(i, !1)
    }
    measureEndState() {
        var a;
        const {
            element: t,
            name: n,
            unresolvedKeyframes: r
        } = this;
        if (!t || !t.current) return;
        const i = t.getValue(n);
        i && i.jump(this.measuredOrigin, !1);
        const s = r.length - 1,
            o = r[s];
        r[s] = ln[n](t.measureViewportBox(), window.getComputedStyle(t.current)), o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o), (a = this.removedTransforms) != null && a.length && this.removedTransforms.forEach(([l, u]) => {
            t.getValue(l).set(u)
        }), this.resolveNoneKeyframes()
    }
}

function r2(e, t, n) {
    if (e instanceof EventTarget) return [e];
    if (typeof e == "string") {
        const i = document.querySelectorAll(e);
        return i ? Array.from(i) : []
    }
    return Array.from(e)
}
const Um = (e, t) => t && typeof e == "number" ? t.transform(e) : e,
    Rd = 30,
    i2 = e => !isNaN(parseFloat(e));
class s2 {
    constructor(t, n = {}) {
        this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, i = !0) => {
            var o, a;
            const s = be.now();
            if (this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && ((o = this.events.change) == null || o.notify(this.current), this.dependents))
                for (const l of this.dependents) l.dirty();
            i && ((a = this.events.renderRequest) == null || a.notify(this.current))
        }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t, this.updatedAt = be.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = i2(this.current))
    }
    setPrevFrameValue(t = this.current) {
        this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new Su);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(), U.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : r
    }
    clearListeners() {
        for (const t in this.events) this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t, this.stopPassiveEffect = n
    }
    set(t, n = !0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, r) {
        this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t, n = !0) {
        this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        var t;
        (t = this.events.change) == null || t.notify(this.current)
    }
    addDependent(t) {
        this.dependents || (this.dependents = new Set), this.dependents.add(t)
    }
    removeDependent(t) {
        this.dependents && this.dependents.delete(t)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = be.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Rd) return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, Rd);
        return lm(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(), new Promise(n => {
            this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        var t, n;
        (t = this.dependents) == null || t.clear(), (n = this.events.destroy) == null || n.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function tr(e, t) {
    return new s2(e, t)
}
const {
    schedule: zu,
    cancel: Y5
} = xm(queueMicrotask, !1), Ke = {
    x: !1,
    y: !1
};

function Wm() {
    return Ke.x || Ke.y
}

function o2(e) {
    return e === "x" || e === "y" ? Ke[e] ? null : (Ke[e] = !0, () => {
        Ke[e] = !1
    }) : Ke.x || Ke.y ? null : (Ke.x = Ke.y = !0, () => {
        Ke.x = Ke.y = !1
    })
}

function Hm(e, t) {
    const n = r2(e),
        r = new AbortController,
        i = {
            passive: !0,
            ...t,
            signal: r.signal
        };
    return [n, i, () => r.abort()]
}

function Ad(e) {
    return !(e.pointerType === "touch" || Wm())
}

function a2(e, t, n = {}) {
    const [r, i, s] = Hm(e, n), o = a => {
        if (!Ad(a)) return;
        const {
            target: l
        } = a, u = t(l, a);
        if (typeof u != "function" || !l) return;
        const d = f => {
            Ad(f) && (u(f), l.removeEventListener("pointerleave", d))
        };
        l.addEventListener("pointerleave", d, i)
    };
    return r.forEach(a => {
        a.addEventListener("pointerenter", o, i)
    }), s
}
const Km = (e, t) => t ? e === t ? !0 : Km(e, t.parentElement) : !1,
    _u = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1,
    l2 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

function u2(e) {
    return l2.has(e.tagName) || e.tabIndex !== -1
}
const os = new WeakSet;

function Dd(e) {
    return t => {
        t.key === "Enter" && e(t)
    }
}

function Ko(e, t) {
    e.dispatchEvent(new PointerEvent("pointer" + t, {
        isPrimary: !0,
        bubbles: !0
    }))
}
const c2 = (e, t) => {
    const n = e.currentTarget;
    if (!n) return;
    const r = Dd(() => {
        if (os.has(n)) return;
        Ko(n, "down");
        const i = Dd(() => {
                Ko(n, "up")
            }),
            s = () => Ko(n, "cancel");
        n.addEventListener("keyup", i, t), n.addEventListener("blur", s, t)
    });
    n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t)
};

function $d(e) {
    return _u(e) && !Wm()
}

function d2(e, t, n = {}) {
    const [r, i, s] = Hm(e, n), o = a => {
        const l = a.currentTarget;
        if (!$d(a)) return;
        os.add(l);
        const u = t(l, a),
            d = (p, x) => {
                window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", h), os.has(l) && os.delete(l), $d(p) && typeof u == "function" && u(p, {
                    success: x
                })
            },
            f = p => {
                d(p, l === window || l === document || n.useGlobalTarget || Km(l, p.target))
            },
            h = p => {
                d(p, !1)
            };
        window.addEventListener("pointerup", f, i), window.addEventListener("pointercancel", h, i)
    };
    return r.forEach(a => {
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, i), $u(a) && (a.addEventListener("focus", u => c2(u, i)), !u2(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0))
    }), s
}

function Gm(e) {
    return om(e) && "ownerSVGElement" in e
}

function f2(e) {
    return Gm(e) && e.tagName === "svg"
}
const ye = e => !!(e && e.getVelocity),
    h2 = [...Om, ee, Bt],
    p2 = e => h2.find(_m(e)),
    Ou = w.createContext({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: "never"
    });
class m2 extends w.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent) {
            const r = n.offsetParent,
                i = $u(r) && r.offsetWidth || 0,
                s = this.props.sizeRef.current;
            s.height = n.offsetHeight || 0, s.width = n.offsetWidth || 0, s.top = n.offsetTop, s.left = n.offsetLeft, s.right = i - s.width - s.left
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}

function y2({
    children: e,
    isPresent: t,
    anchorX: n,
    root: r
}) {
    const i = w.useId(),
        s = w.useRef(null),
        o = w.useRef({
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            right: 0
        }),
        {
            nonce: a
        } = w.useContext(Ou);
    return w.useInsertionEffect(() => {
        const {
            width: l,
            height: u,
            top: d,
            left: f,
            right: h
        } = o.current;
        if (t || !s.current || !l || !u) return;
        const p = n === "left" ? `left: ${f}` : `right: ${h}`;
        s.current.dataset.motionPopId = i;
        const x = document.createElement("style");
        a && (x.nonce = a);
        const v = r ? ? document.head;
        return v.appendChild(x), x.sheet && x.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${l}px !important;
            height: ${u}px !important;
            ${p}px !important;
            top: ${d}px !important;
          }
        `), () => {
            v.removeChild(x), v.contains(x) && v.removeChild(x)
        }
    }, [t]), c.jsx(m2, {
        isPresent: t,
        childRef: s,
        sizeRef: o,
        children: w.cloneElement(e, {
            ref: s
        })
    })
}
const g2 = ({
    children: e,
    initial: t,
    isPresent: n,
    onExitComplete: r,
    custom: i,
    presenceAffectsLayout: s,
    mode: o,
    anchorX: a,
    root: l
}) => {
    const u = gu(v2),
        d = w.useId();
    let f = !0,
        h = w.useMemo(() => (f = !1, {
            id: d,
            initial: t,
            isPresent: n,
            custom: i,
            onExitComplete: p => {
                u.set(p, !0);
                for (const x of u.values())
                    if (!x) return;
                r && r()
            },
            register: p => (u.set(p, !1), () => u.delete(p))
        }), [n, u, r]);
    return s && f && (h = { ...h
    }), w.useMemo(() => {
        u.forEach((p, x) => u.set(x, !1))
    }, [n]), w.useEffect(() => {
        !n && !u.size && r && r()
    }, [n]), o === "popLayout" && (e = c.jsx(y2, {
        isPresent: n,
        anchorX: a,
        root: l,
        children: e
    })), c.jsx(lo.Provider, {
        value: h,
        children: e
    })
};

function v2() {
    return new Map
}

function Xm(e = !0) {
    const t = w.useContext(lo);
    if (t === null) return [!0, null];
    const {
        isPresent: n,
        onExitComplete: r,
        register: i
    } = t, s = w.useId();
    w.useEffect(() => {
        if (e) return i(s)
    }, [e]);
    const o = w.useCallback(() => e && r && r(s), [s, r, e]);
    return !n && r ? [!1, o] : [!0]
}
const Wi = e => e.key || "";

function Vd(e) {
    const t = [];
    return w.Children.forEach(e, n => {
        w.isValidElement(n) && t.push(n)
    }), t
}
const x2 = ({
        children: e,
        custom: t,
        initial: n = !0,
        onExitComplete: r,
        presenceAffectsLayout: i = !0,
        mode: s = "sync",
        propagate: o = !1,
        anchorX: a = "left",
        root: l
    }) => {
        const [u, d] = Xm(o), f = w.useMemo(() => Vd(e), [e]), h = o && !u ? [] : f.map(Wi), p = w.useRef(!0), x = w.useRef(f), v = gu(() => new Map), [S, y] = w.useState(f), [m, g] = w.useState(f);
        im(() => {
            p.current = !1, x.current = f;
            for (let C = 0; C < m.length; C++) {
                const T = Wi(m[C]);
                h.includes(T) ? v.delete(T) : v.get(T) !== !0 && v.set(T, !1)
            }
        }, [m, h.length, h.join("-")]);
        const k = [];
        if (f !== S) {
            let C = [...f];
            for (let T = 0; T < m.length; T++) {
                const b = m[T],
                    D = Wi(b);
                h.includes(D) || (C.splice(T, 0, b), k.push(b))
            }
            return s === "wait" && k.length && (C = k), g(Vd(C)), y(f), null
        }
        const {
            forceRender: j
        } = w.useContext(yu);
        return c.jsx(c.Fragment, {
            children: m.map(C => {
                const T = Wi(C),
                    b = o && !u ? !1 : f === m || h.includes(T),
                    D = () => {
                        if (v.has(T)) v.set(T, !0);
                        else return;
                        let M = !0;
                        v.forEach(J => {
                            J || (M = !1)
                        }), M && (j == null || j(), g(x.current), o && (d == null || d()), r && r())
                    };
                return c.jsx(g2, {
                    isPresent: b,
                    initial: !p.current || n ? void 0 : !1,
                    custom: t,
                    presenceAffectsLayout: i,
                    mode: s,
                    root: l,
                    onExitComplete: b ? void 0 : D,
                    anchorX: a,
                    children: C
                }, T)
            })
        })
    },
    Ym = w.createContext({
        strict: !1
    }),
    Fd = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    },
    nr = {};
for (const e in Fd) nr[e] = {
    isEnabled: t => Fd[e].some(n => !!t[n])
};

function w2(e) {
    for (const t in e) nr[t] = { ...nr[t],
        ...e[t]
    }
}
const k2 = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function _s(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || k2.has(e)
}
let Qm = e => !_s(e);

function S2(e) {
    typeof e == "function" && (Qm = t => t.startsWith("on") ? !_s(t) : e(t))
}
try {
    S2(require("@emotion/is-prop-valid").default)
} catch {}

function C2(e, t, n) {
    const r = {};
    for (const i in e) i === "values" && typeof e.values == "object" || (Qm(i) || n === !0 && _s(i) || !t && !_s(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}

function j2(e) {
    if (typeof Proxy > "u") return e;
    const t = new Map,
        n = (...r) => e(...r);
    return new Proxy(n, {
        get: (r, i) => i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i))
    })
}
const uo = w.createContext({});

function co(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}

function ai(e) {
    return typeof e == "string" || Array.isArray(e)
}
const Iu = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    Bu = ["initial", ...Iu];

function fo(e) {
    return co(e.animate) || Bu.some(t => ai(e[t]))
}

function Zm(e) {
    return !!(fo(e) || e.variants)
}

function b2(e, t) {
    if (fo(e)) {
        const {
            initial: n,
            animate: r
        } = e;
        return {
            initial: n === !1 || ai(n) ? n : void 0,
            animate: ai(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}

function T2(e) {
    const {
        initial: t,
        animate: n
    } = b2(e, w.useContext(uo));
    return w.useMemo(() => ({
        initial: t,
        animate: n
    }), [zd(t), zd(n)])
}

function zd(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const N2 = Symbol.for("motionComponentSymbol");

function zn(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}

function P2(e, t, n) {
    return w.useCallback(r => {
        r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : zn(n) && (n.current = r))
    }, [t])
}
const Uu = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    E2 = "framerAppearId",
    qm = "data-" + Uu(E2),
    Jm = w.createContext({});

function M2(e, t, n, r, i) {
    var v, S;
    const {
        visualElement: s
    } = w.useContext(uo), o = w.useContext(Ym), a = w.useContext(lo), l = w.useContext(Ou).reducedMotion, u = w.useRef(null);
    r = r || o.renderer, !u.current && r && (u.current = r(e, {
        visualState: t,
        parent: s,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: l
    }));
    const d = u.current,
        f = w.useContext(Jm);
    d && !d.projection && i && (d.type === "html" || d.type === "svg") && L2(u.current, n, i, f);
    const h = w.useRef(!1);
    w.useInsertionEffect(() => {
        d && h.current && d.update(n, a)
    });
    const p = n[qm],
        x = w.useRef(!!p && !((v = window.MotionHandoffIsComplete) != null && v.call(window, p)) && ((S = window.MotionHasOptimisedAnimation) == null ? void 0 : S.call(window, p)));
    return im(() => {
        d && (h.current = !0, window.MotionIsMounted = !0, d.updateFeatures(), zu.render(d.render), x.current && d.animationState && d.animationState.animateChanges())
    }), w.useEffect(() => {
        d && (!x.current && d.animationState && d.animationState.animateChanges(), x.current && (queueMicrotask(() => {
            var y;
            (y = window.MotionHandoffMarkAsComplete) == null || y.call(window, p)
        }), x.current = !1))
    }), d
}

function L2(e, t, n, r) {
    const {
        layoutId: i,
        layout: s,
        drag: o,
        dragConstraints: a,
        layoutScroll: l,
        layoutRoot: u,
        layoutCrossfade: d
    } = t;
    e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : e0(e.parent)), e.projection.setOptions({
        layoutId: i,
        layout: s,
        alwaysMeasureLayout: !!o || a && zn(a),
        visualElement: e,
        animationType: typeof s == "string" ? s : "both",
        initialPromotionConfig: r,
        crossfade: d,
        layoutScroll: l,
        layoutRoot: u
    })
}

function e0(e) {
    if (e) return e.options.allowProjection !== !1 ? e.projection : e0(e.parent)
}

function R2({
    preloadedFeatures: e,
    createVisualElement: t,
    useRender: n,
    useVisualState: r,
    Component: i
}) {
    e && w2(e);

    function s(a, l) {
        let u;
        const d = { ...w.useContext(Ou),
                ...a,
                layoutId: A2(a)
            },
            {
                isStatic: f
            } = d,
            h = T2(a),
            p = r(a, f);
        if (!f && vu) {
            D2();
            const x = $2(d);
            u = x.MeasureLayout, h.visualElement = M2(i, p, d, t, x.ProjectionNode)
        }
        return c.jsxs(uo.Provider, {
            value: h,
            children: [u && h.visualElement ? c.jsx(u, {
                visualElement: h.visualElement,
                ...d
            }) : null, n(i, a, P2(p, h.visualElement, l), p, f, h.visualElement)]
        })
    }
    s.displayName = `motion.${typeof i=="string"?i:`create(${i.displayName??i.name??""})`}`;
    const o = w.forwardRef(s);
    return o[N2] = i, o
}

function A2({
    layoutId: e
}) {
    const t = w.useContext(yu).id;
    return t && e !== void 0 ? t + "-" + e : e
}

function D2(e, t) {
    w.useContext(Ym).strict
}

function $2(e) {
    const {
        drag: t,
        layout: n
    } = nr;
    if (!t && !n) return {};
    const r = { ...t,
        ...n
    };
    return {
        MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
        ProjectionNode: r.ProjectionNode
    }
}
const li = {};

function V2(e) {
    for (const t in e) li[t] = e[t], bu(t) && (li[t].isCSSVariable = !0)
}

function t0(e, {
    layout: t,
    layoutId: n
}) {
    return ur.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!li[e] || e === "opacity")
}
const F2 = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    z2 = lr.length;

function _2(e, t, n) {
    let r = "",
        i = !0;
    for (let s = 0; s < z2; s++) {
        const o = lr[s],
            a = e[o];
        if (a === void 0) continue;
        let l = !0;
        if (typeof a == "number" ? l = a === (o.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
            const u = Um(a, Fu[o]);
            if (!l) {
                i = !1;
                const d = F2[o] || o;
                r += `${d}(${u}) `
            }
            n && (t[o] = u)
        }
    }
    return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r
}

function Wu(e, t, n) {
    const {
        style: r,
        vars: i,
        transformOrigin: s
    } = e;
    let o = !1,
        a = !1;
    for (const l in t) {
        const u = t[l];
        if (ur.has(l)) {
            o = !0;
            continue
        } else if (bu(l)) {
            i[l] = u;
            continue
        } else {
            const d = Um(u, Fu[l]);
            l.startsWith("origin") ? (a = !0, s[l] = d) : r[l] = d
        }
    }
    if (t.transform || (o || n ? r.transform = _2(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
        const {
            originX: l = "50%",
            originY: u = "50%",
            originZ: d = 0
        } = s;
        r.transformOrigin = `${l} ${u} ${d}`
    }
}
const Hu = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});

function n0(e, t, n) {
    for (const r in t) !ye(t[r]) && !t0(r, n) && (e[r] = t[r])
}

function O2({
    transformTemplate: e
}, t) {
    return w.useMemo(() => {
        const n = Hu();
        return Wu(n, t, e), Object.assign({}, n.vars, n.style)
    }, [t])
}

function I2(e, t) {
    const n = e.style || {},
        r = {};
    return n0(r, n, e), Object.assign(r, O2(e, t)), r
}

function B2(e, t) {
    const n = {},
        r = I2(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag==="x"?"y":"x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n
}
const U2 = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    W2 = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function H2(e, t, n = 1, r = 0, i = !0) {
    e.pathLength = 1;
    const s = i ? U2 : W2;
    e[s.offset] = L.transform(-r);
    const o = L.transform(t),
        a = L.transform(n);
    e[s.array] = `${o} ${a}`
}

function r0(e, {
    attrX: t,
    attrY: n,
    attrScale: r,
    pathLength: i,
    pathSpacing: s = 1,
    pathOffset: o = 0,
    ...a
}, l, u, d) {
    if (Wu(e, a, u), l) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style, e.style = {};
    const {
        attrs: f,
        style: h
    } = e;
    f.transform && (h.transform = f.transform, delete f.transform), (h.transform || f.transformOrigin) && (h.transformOrigin = f.transformOrigin ? ? "50% 50%", delete f.transformOrigin), h.transform && (h.transformBox = (d == null ? void 0 : d.transformBox) ? ? "fill-box", delete f.transformBox), t !== void 0 && (f.x = t), n !== void 0 && (f.y = n), r !== void 0 && (f.scale = r), i !== void 0 && H2(f, i, s, o, !1)
}
const i0 = () => ({ ...Hu(),
        attrs: {}
    }),
    s0 = e => typeof e == "string" && e.toLowerCase() === "svg";

function K2(e, t, n, r) {
    const i = w.useMemo(() => {
        const s = i0();
        return r0(s, t, s0(r), e.transformTemplate, e.style), { ...s.attrs,
            style: { ...s.style
            }
        }
    }, [t]);
    if (e.style) {
        const s = {};
        n0(s, e.style, e), i.style = { ...s,
            ...i.style
        }
    }
    return i
}
const G2 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function Ku(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(G2.indexOf(e) > -1 || /[A-Z]/u.test(e))
}

function X2(e = !1) {
    return (n, r, i, {
        latestValues: s
    }, o) => {
        const l = (Ku(n) ? K2 : B2)(r, s, o, n),
            u = C2(r, typeof n == "string", e),
            d = n !== w.Fragment ? { ...u,
                ...l,
                ref: i
            } : {},
            {
                children: f
            } = r,
            h = w.useMemo(() => ye(f) ? f.get() : f, [f]);
        return w.createElement(n, { ...d,
            children: h
        })
    }
}

function _d(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach((n, r) => {
        t[0][r] = n.get(), t[1][r] = n.getVelocity()
    }), t
}

function Gu(e, t, n, r) {
    if (typeof t == "function") {
        const [i, s] = _d(r);
        t = t(n !== void 0 ? n : e.custom, i, s)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
        const [i, s] = _d(r);
        t = t(n !== void 0 ? n : e.custom, i, s)
    }
    return t
}

function as(e) {
    return ye(e) ? e.get() : e
}

function Y2({
    scrapeMotionValuesFromProps: e,
    createRenderState: t
}, n, r, i) {
    return {
        latestValues: Q2(n, r, i, e),
        renderState: t()
    }
}
const o0 = e => (t, n) => {
    const r = w.useContext(uo),
        i = w.useContext(lo),
        s = () => Y2(e, t, r, i);
    return n ? s() : gu(s)
};

function Q2(e, t, n, r) {
    const i = {},
        s = r(e, {});
    for (const h in s) i[h] = as(s[h]);
    let {
        initial: o,
        animate: a
    } = e;
    const l = fo(e),
        u = Zm(e);
    t && u && !l && e.inherit !== !1 && (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
    let d = n ? n.initial === !1 : !1;
    d = d || o === !1;
    const f = d ? a : o;
    if (f && typeof f != "boolean" && !co(f)) {
        const h = Array.isArray(f) ? f : [f];
        for (let p = 0; p < h.length; p++) {
            const x = Gu(e, h[p]);
            if (x) {
                const {
                    transitionEnd: v,
                    transition: S,
                    ...y
                } = x;
                for (const m in y) {
                    let g = y[m];
                    if (Array.isArray(g)) {
                        const k = d ? g.length - 1 : 0;
                        g = g[k]
                    }
                    g !== null && (i[m] = g)
                }
                for (const m in v) i[m] = v[m]
            }
        }
    }
    return i
}

function Xu(e, t, n) {
    var s;
    const {
        style: r
    } = e, i = {};
    for (const o in r)(ye(r[o]) || t.style && ye(t.style[o]) || t0(o, e) || ((s = n == null ? void 0 : n.getValue(o)) == null ? void 0 : s.liveStyle) !== void 0) && (i[o] = r[o]);
    return i
}
const Z2 = {
    useVisualState: o0({
        scrapeMotionValuesFromProps: Xu,
        createRenderState: Hu
    })
};

function a0(e, t, n) {
    const r = Xu(e, t, n);
    for (const i in e)
        if (ye(e[i]) || ye(t[i])) {
            const s = lr.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            r[s] = e[i]
        }
    return r
}
const q2 = {
    useVisualState: o0({
        scrapeMotionValuesFromProps: a0,
        createRenderState: i0
    })
};

function J2(e, t) {
    return function(r, {
        forwardMotionProps: i
    } = {
        forwardMotionProps: !1
    }) {
        const o = { ...Ku(r) ? q2 : Z2,
            preloadedFeatures: e,
            useRender: X2(i),
            createVisualElement: t,
            Component: r
        };
        return R2(o)
    }
}

function ui(e, t, n) {
    const r = e.getProps();
    return Gu(r, t, n !== void 0 ? n : r.custom, e)
}
const ul = e => Array.isArray(e);

function ew(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, tr(n))
}

function tw(e) {
    return ul(e) ? e[e.length - 1] || 0 : e
}

function nw(e, t) {
    const n = ui(e, t);
    let {
        transitionEnd: r = {},
        transition: i = {},
        ...s
    } = n || {};
    s = { ...s,
        ...r
    };
    for (const o in s) {
        const a = tw(s[o]);
        ew(e, o, a)
    }
}

function rw(e) {
    return !!(ye(e) && e.add)
}

function cl(e, t) {
    const n = e.getValue("willChange");
    if (rw(n)) return n.add(t);
    if (!n && gt.WillChange) {
        const r = new gt.WillChange("auto");
        e.addValue("willChange", r), r.add(t)
    }
}

function l0(e) {
    return e.props[qm]
}
const iw = e => e !== null;

function sw(e, {
    repeat: t,
    repeatType: n = "loop"
}, r) {
    const i = e.filter(iw),
        s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !s || r === void 0 ? i[s] : r
}
const ow = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    aw = e => ({
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    lw = {
        type: "keyframes",
        duration: .8
    },
    uw = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    cw = (e, {
        keyframes: t
    }) => t.length > 2 ? lw : ur.has(e) ? e.startsWith("scale") ? aw(t[1]) : ow : uw;

function dw({
    when: e,
    delay: t,
    delayChildren: n,
    staggerChildren: r,
    staggerDirection: i,
    repeat: s,
    repeatType: o,
    repeatDelay: a,
    from: l,
    elapsed: u,
    ...d
}) {
    return !!Object.keys(d).length
}
const Yu = (e, t, n, r = {}, i, s) => o => {
    const a = Vu(r, e) || {},
        l = a.delay || r.delay || 0;
    let {
        elapsed: u = 0
    } = r;
    u = u - it(l);
    const d = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -u,
        onUpdate: h => {
            t.set(h), a.onUpdate && a.onUpdate(h)
        },
        onComplete: () => {
            o(), a.onComplete && a.onComplete()
        },
        name: e,
        motionValue: t,
        element: s ? void 0 : i
    };
    dw(a) || Object.assign(d, cw(e, d)), d.duration && (d.duration = it(d.duration)), d.repeatDelay && (d.repeatDelay = it(d.repeatDelay)), d.from !== void 0 && (d.keyframes[0] = d.from);
    let f = !1;
    if ((d.type === !1 || d.duration === 0 && !d.repeatDelay) && (d.duration = 0, d.delay === 0 && (f = !0)), (gt.instantAnimations || gt.skipAnimations) && (f = !0, d.duration = 0, d.delay = 0), d.allowFlatten = !a.type && !a.ease, f && !s && t.get() !== void 0) {
        const h = sw(d.keyframes, a);
        if (h !== void 0) {
            U.update(() => {
                d.onUpdate(h), d.onComplete()
            });
            return
        }
    }
    return a.isSync ? new Au(d) : new Wx(d)
};

function fw({
    protectedKeys: e,
    needsAnimating: t
}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1, r
}

function u0(e, t, {
    delay: n = 0,
    transitionOverride: r,
    type: i
} = {}) {
    let {
        transition: s = e.getDefaultTransition(),
        transitionEnd: o,
        ...a
    } = t;
    r && (s = r);
    const l = [],
        u = i && e.animationState && e.animationState.getState()[i];
    for (const d in a) {
        const f = e.getValue(d, e.latestValues[d] ? ? null),
            h = a[d];
        if (h === void 0 || u && fw(u, d)) continue;
        const p = {
                delay: n,
                ...Vu(s || {}, d)
            },
            x = f.get();
        if (x !== void 0 && !f.isAnimating && !Array.isArray(h) && h === x && !p.velocity) continue;
        let v = !1;
        if (window.MotionHandoffAnimation) {
            const y = l0(e);
            if (y) {
                const m = window.MotionHandoffAnimation(y, d, U);
                m !== null && (p.startTime = m, v = !0)
            }
        }
        cl(e, d), f.start(Yu(d, f, h, e.shouldReduceMotion && zm.has(d) ? {
            type: !1
        } : p, e, v));
        const S = f.animation;
        S && l.push(S)
    }
    return o && Promise.all(l).then(() => {
        U.update(() => {
            o && nw(e, o)
        })
    }), l
}

function dl(e, t, n = {}) {
    var l;
    const r = ui(e, t, n.type === "exit" ? (l = e.presenceContext) == null ? void 0 : l.custom : void 0);
    let {
        transition: i = e.getDefaultTransition() || {}
    } = r || {};
    n.transitionOverride && (i = n.transitionOverride);
    const s = r ? () => Promise.all(u0(e, r, n)) : () => Promise.resolve(),
        o = e.variantChildren && e.variantChildren.size ? (u = 0) => {
            const {
                delayChildren: d = 0,
                staggerChildren: f,
                staggerDirection: h
            } = i;
            return hw(e, t, u, d, f, h, n)
        } : () => Promise.resolve(),
        {
            when: a
        } = i;
    if (a) {
        const [u, d] = a === "beforeChildren" ? [s, o] : [o, s];
        return u().then(() => d())
    } else return Promise.all([s(), o(n.delay)])
}

function hw(e, t, n = 0, r = 0, i = 0, s = 1, o) {
    const a = [],
        l = e.variantChildren.size,
        u = (l - 1) * i,
        d = typeof r == "function",
        f = d ? h => r(h, l) : s === 1 ? (h = 0) => h * i : (h = 0) => u - h * i;
    return Array.from(e.variantChildren).sort(pw).forEach((h, p) => {
        h.notify("AnimationStart", t), a.push(dl(h, t, { ...o,
            delay: n + (d ? 0 : r) + f(p)
        }).then(() => h.notify("AnimationComplete", t)))
    }), Promise.all(a)
}

function pw(e, t) {
    return e.sortNodePosition(t)
}

function mw(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map(s => dl(e, s, n));
        r = Promise.all(i)
    } else if (typeof t == "string") r = dl(e, t, n);
    else {
        const i = typeof t == "function" ? ui(e, t, n.custom) : t;
        r = Promise.all(u0(e, i, n))
    }
    return r.then(() => {
        e.notify("AnimationComplete", t)
    })
}

function c0(e, t) {
    if (!Array.isArray(t)) return !1;
    const n = t.length;
    if (n !== e.length) return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r]) return !1;
    return !0
}
const yw = Bu.length;

function d0(e) {
    if (!e) return;
    if (!e.isControllingVariants) {
        const n = e.parent ? d0(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial), n
    }
    const t = {};
    for (let n = 0; n < yw; n++) {
        const r = Bu[n],
            i = e.props[r];
        (ai(i) || i === !1) && (t[r] = i)
    }
    return t
}
const gw = [...Iu].reverse(),
    vw = Iu.length;

function xw(e) {
    return t => Promise.all(t.map(({
        animation: n,
        options: r
    }) => mw(e, n, r)))
}

function ww(e) {
    let t = xw(e),
        n = Od(),
        r = !0;
    const i = l => (u, d) => {
        var h;
        const f = ui(e, d, l === "exit" ? (h = e.presenceContext) == null ? void 0 : h.custom : void 0);
        if (f) {
            const {
                transition: p,
                transitionEnd: x,
                ...v
            } = f;
            u = { ...u,
                ...v,
                ...x
            }
        }
        return u
    };

    function s(l) {
        t = l(e)
    }

    function o(l) {
        const {
            props: u
        } = e, d = d0(e.parent) || {}, f = [], h = new Set;
        let p = {},
            x = 1 / 0;
        for (let S = 0; S < vw; S++) {
            const y = gw[S],
                m = n[y],
                g = u[y] !== void 0 ? u[y] : d[y],
                k = ai(g),
                j = y === l ? m.isActive : null;
            j === !1 && (x = S);
            let C = g === d[y] && g !== u[y] && k;
            if (C && r && e.manuallyAnimateOnMount && (C = !1), m.protectedKeys = { ...p
                }, !m.isActive && j === null || !g && !m.prevProp || co(g) || typeof g == "boolean") continue;
            const T = kw(m.prevProp, g);
            let b = T || y === l && m.isActive && !C && k || S > x && k,
                D = !1;
            const M = Array.isArray(g) ? g : [g];
            let J = M.reduce(i(y), {});
            j === !1 && (J = {});
            const {
                prevResolvedValues: xt = {}
            } = m, Gt = { ...xt,
                ...J
            }, cr = re => {
                b = !0, h.has(re) && (D = !0, h.delete(re)), m.needsAnimating[re] = !0;
                const P = e.getValue(re);
                P && (P.liveStyle = !1)
            };
            for (const re in Gt) {
                const P = J[re],
                    R = xt[re];
                if (p.hasOwnProperty(re)) continue;
                let A = !1;
                ul(P) && ul(R) ? A = !c0(P, R) : A = P !== R, A ? P != null ? cr(re) : h.add(re) : P !== void 0 && h.has(re) ? cr(re) : m.protectedKeys[re] = !0
            }
            m.prevProp = g, m.prevResolvedValues = J, m.isActive && (p = { ...p,
                ...J
            }), r && e.blockInitialAnimation && (b = !1), b && (!(C && T) || D) && f.push(...M.map(re => ({
                animation: re,
                options: {
                    type: y
                }
            })))
        }
        if (h.size) {
            const S = {};
            if (typeof u.initial != "boolean") {
                const y = ui(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
                y && y.transition && (S.transition = y.transition)
            }
            h.forEach(y => {
                const m = e.getBaseTarget(y),
                    g = e.getValue(y);
                g && (g.liveStyle = !0), S[y] = m ? ? null
            }), f.push({
                animation: S
            })
        }
        let v = !!f.length;
        return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (v = !1), r = !1, v ? t(f) : Promise.resolve()
    }

    function a(l, u) {
        var f;
        if (n[l].isActive === u) return Promise.resolve();
        (f = e.variantChildren) == null || f.forEach(h => {
            var p;
            return (p = h.animationState) == null ? void 0 : p.setActive(l, u)
        }), n[l].isActive = u;
        const d = o(l);
        for (const h in n) n[h].protectedKeys = {};
        return d
    }
    return {
        animateChanges: o,
        setActive: a,
        setAnimateFunction: s,
        getState: () => n,
        reset: () => {
            n = Od(), r = !0
        }
    }
}

function kw(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !c0(t, e) : !1
}

function Qt(e = !1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function Od() {
    return {
        animate: Qt(!0),
        whileInView: Qt(),
        whileHover: Qt(),
        whileTap: Qt(),
        whileDrag: Qt(),
        whileFocus: Qt(),
        exit: Qt()
    }
}
class Kt {
    constructor(t) {
        this.isMounted = !1, this.node = t
    }
    update() {}
}
class Sw extends Kt {
    constructor(t) {
        super(t), t.animationState || (t.animationState = ww(t))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: t
        } = this.node.getProps();
        co(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: t
        } = this.node.getProps(), {
            animate: n
        } = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var t;
        this.node.animationState.reset(), (t = this.unmountControls) == null || t.call(this)
    }
}
let Cw = 0;
class jw extends Kt {
    constructor() {
        super(...arguments), this.id = Cw++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: t,
            onExitComplete: n
        } = this.node.presenceContext, {
            isPresent: r
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r) return;
        const i = this.node.animationState.setActive("exit", !t);
        n && !t && i.then(() => {
            n(this.id)
        })
    }
    mount() {
        const {
            register: t,
            onExitComplete: n
        } = this.node.presenceContext || {};
        n && n(this.id), t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const bw = {
    animation: {
        Feature: Sw
    },
    exit: {
        Feature: jw
    }
};

function ci(e, t, n, r = {
    passive: !0
}) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
}

function wi(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const Tw = e => t => _u(t) && e(t, wi(t));

function Vr(e, t, n, r) {
    return ci(e, t, Tw(n), r)
}

function f0({
    top: e,
    left: t,
    right: n,
    bottom: r
}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}

function Nw({
    x: e,
    y: t
}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}

function Pw(e, t) {
    if (!t) return e;
    const n = t({
            x: e.left,
            y: e.top
        }),
        r = t({
            x: e.right,
            y: e.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
const h0 = 1e-4,
    Ew = 1 - h0,
    Mw = 1 + h0,
    p0 = .01,
    Lw = 0 - p0,
    Rw = 0 + p0;

function xe(e) {
    return e.max - e.min
}

function Aw(e, t, n) {
    return Math.abs(e - t) <= n
}

function Id(e, t, n, r = .5) {
    e.origin = r, e.originPoint = H(t.min, t.max, e.origin), e.scale = xe(n) / xe(t), e.translate = H(n.min, n.max, e.origin) - e.originPoint, (e.scale >= Ew && e.scale <= Mw || isNaN(e.scale)) && (e.scale = 1), (e.translate >= Lw && e.translate <= Rw || isNaN(e.translate)) && (e.translate = 0)
}

function Fr(e, t, n, r) {
    Id(e.x, t.x, n.x, r ? r.originX : void 0), Id(e.y, t.y, n.y, r ? r.originY : void 0)
}

function Bd(e, t, n) {
    e.min = n.min + t.min, e.max = e.min + xe(t)
}

function Dw(e, t, n) {
    Bd(e.x, t.x, n.x), Bd(e.y, t.y, n.y)
}

function Ud(e, t, n) {
    e.min = t.min - n.min, e.max = e.min + xe(t)
}

function zr(e, t, n) {
    Ud(e.x, t.x, n.x), Ud(e.y, t.y, n.y)
}
const Wd = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    _n = () => ({
        x: Wd(),
        y: Wd()
    }),
    Hd = () => ({
        min: 0,
        max: 0
    }),
    Z = () => ({
        x: Hd(),
        y: Hd()
    });

function Fe(e) {
    return [e("x"), e("y")]
}

function Go(e) {
    return e === void 0 || e === 1
}

function fl({
    scale: e,
    scaleX: t,
    scaleY: n
}) {
    return !Go(e) || !Go(t) || !Go(n)
}

function Jt(e) {
    return fl(e) || m0(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}

function m0(e) {
    return Kd(e.x) || Kd(e.y)
}

function Kd(e) {
    return e && e !== "0%"
}

function Os(e, t, n) {
    const r = e - n,
        i = t * r;
    return n + i
}

function Gd(e, t, n, r, i) {
    return i !== void 0 && (e = Os(e, i, r)), Os(e, n, r) + t
}

function hl(e, t = 0, n = 1, r, i) {
    e.min = Gd(e.min, t, n, r, i), e.max = Gd(e.max, t, n, r, i)
}

function y0(e, {
    x: t,
    y: n
}) {
    hl(e.x, t.translate, t.scale, t.originPoint), hl(e.y, n.translate, n.scale, n.originPoint)
}
const Xd = .999999999999,
    Yd = 1.0000000000001;

function $w(e, t, n, r = !1) {
    const i = n.length;
    if (!i) return;
    t.x = t.y = 1;
    let s, o;
    for (let a = 0; a < i; a++) {
        s = n[a], o = s.projectionDelta;
        const {
            visualElement: l
        } = s.options;
        l && l.props.style && l.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && In(e, {
            x: -s.scroll.offset.x,
            y: -s.scroll.offset.y
        }), o && (t.x *= o.x.scale, t.y *= o.y.scale, y0(e, o)), r && Jt(s.latestValues) && In(e, s.latestValues))
    }
    t.x < Yd && t.x > Xd && (t.x = 1), t.y < Yd && t.y > Xd && (t.y = 1)
}

function On(e, t) {
    e.min = e.min + t, e.max = e.max + t
}

function Qd(e, t, n, r, i = .5) {
    const s = H(e.min, e.max, i);
    hl(e, t, n, s, r)
}

function In(e, t) {
    Qd(e.x, t.x, t.scaleX, t.scale, t.originX), Qd(e.y, t.y, t.scaleY, t.scale, t.originY)
}

function g0(e, t) {
    return f0(Pw(e.getBoundingClientRect(), t))
}

function Vw(e, t, n) {
    const r = g0(e, n),
        {
            scroll: i
        } = t;
    return i && (On(r.x, i.offset.x), On(r.y, i.offset.y)), r
}
const v0 = ({
        current: e
    }) => e ? e.ownerDocument.defaultView : null,
    Zd = (e, t) => Math.abs(e - t);

function Fw(e, t) {
    const n = Zd(e.x, t.x),
        r = Zd(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class x0 {
    constructor(t, n, {
        transformPagePoint: r,
        contextWindow: i = window,
        dragSnapToOrigin: s = !1,
        distanceThreshold: o = 3
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const h = Yo(this.lastMoveEventInfo, this.history),
                    p = this.startEvent !== null,
                    x = Fw(h.offset, {
                        x: 0,
                        y: 0
                    }) >= this.distanceThreshold;
                if (!p && !x) return;
                const {
                    point: v
                } = h, {
                    timestamp: S
                } = ce;
                this.history.push({ ...v,
                    timestamp: S
                });
                const {
                    onStart: y,
                    onMove: m
                } = this.handlers;
                p || (y && y(this.lastMoveEvent, h), this.startEvent = this.lastMoveEvent), m && m(this.lastMoveEvent, h)
            }, this.handlePointerMove = (h, p) => {
                this.lastMoveEvent = h, this.lastMoveEventInfo = Xo(p, this.transformPagePoint), U.update(this.updatePoint, !0)
            }, this.handlePointerUp = (h, p) => {
                this.end();
                const {
                    onEnd: x,
                    onSessionEnd: v,
                    resumeAnimation: S
                } = this.handlers;
                if (this.dragSnapToOrigin && S && S(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const y = Yo(h.type === "pointercancel" ? this.lastMoveEventInfo : Xo(p, this.transformPagePoint), this.history);
                this.startEvent && x && x(h, y), v && v(h, y)
            }, !_u(t)) return;
        this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = r, this.distanceThreshold = o, this.contextWindow = i || window;
        const a = wi(t),
            l = Xo(a, this.transformPagePoint),
            {
                point: u
            } = l,
            {
                timestamp: d
            } = ce;
        this.history = [{ ...u,
            timestamp: d
        }];
        const {
            onSessionStart: f
        } = n;
        f && f(t, Yo(l, this.history)), this.removeListeners = gi(Vr(this.contextWindow, "pointermove", this.handlePointerMove), Vr(this.contextWindow, "pointerup", this.handlePointerUp), Vr(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(), It(this.updatePoint)
    }
}

function Xo(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}

function qd(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}

function Yo({
    point: e
}, t) {
    return {
        point: e,
        delta: qd(e, w0(t)),
        offset: qd(e, zw(t)),
        velocity: _w(t, .1)
    }
}

function zw(e) {
    return e[0]
}

function w0(e) {
    return e[e.length - 1]
}

function _w(e, t) {
    if (e.length < 2) return {
        x: 0,
        y: 0
    };
    let n = e.length - 1,
        r = null;
    const i = w0(e);
    for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > it(t)));) n--;
    if (!r) return {
        x: 0,
        y: 0
    };
    const s = st(i.timestamp - r.timestamp);
    if (s === 0) return {
        x: 0,
        y: 0
    };
    const o = {
        x: (i.x - r.x) / s,
        y: (i.y - r.y) / s
    };
    return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
}

function Ow(e, {
    min: t,
    max: n
}, r) {
    return t !== void 0 && e < t ? e = r ? H(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? H(n, e, r.max) : Math.min(e, n)), e
}

function Jd(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}

function Iw(e, {
    top: t,
    left: n,
    bottom: r,
    right: i
}) {
    return {
        x: Jd(e.x, n, i),
        y: Jd(e.y, t, r)
    }
}

function ef(e, t) {
    let n = t.min - e.min,
        r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
        min: n,
        max: r
    }
}

function Bw(e, t) {
    return {
        x: ef(e.x, t.x),
        y: ef(e.y, t.y)
    }
}

function Uw(e, t) {
    let n = .5;
    const r = xe(e),
        i = xe(t);
    return i > r ? n = ii(t.min, t.max - r, e.min) : r > i && (n = ii(e.min, e.max - i, t.min)), yt(0, 1, n)
}

function Ww(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
}
const pl = .35;

function Hw(e = pl) {
    return e === !1 ? e = 0 : e === !0 && (e = pl), {
        x: tf(e, "left", "right"),
        y: tf(e, "top", "bottom")
    }
}

function tf(e, t, n) {
    return {
        min: nf(e, t),
        max: nf(e, n)
    }
}

function nf(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const Kw = new WeakMap;
class Gw {
    constructor(t) {
        this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Z(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t
    }
    start(t, {
        snapToCursor: n = !1,
        distanceThreshold: r
    } = {}) {
        const {
            presenceContext: i
        } = this.visualElement;
        if (i && i.isPresent === !1) return;
        const s = f => {
                const {
                    dragSnapToOrigin: h
                } = this.getProps();
                h ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(wi(f).point)
            },
            o = (f, h) => {
                const {
                    drag: p,
                    dragPropagation: x,
                    onDragStart: v
                } = this.getProps();
                if (p && !x && (this.openDragLock && this.openDragLock(), this.openDragLock = o2(p), !this.openDragLock)) return;
                this.latestPointerEvent = f, this.latestPanInfo = h, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Fe(y => {
                    let m = this.getAxisMotionValue(y).get() || 0;
                    if (ot.test(m)) {
                        const {
                            projection: g
                        } = this.visualElement;
                        if (g && g.layout) {
                            const k = g.layout.layoutBox[y];
                            k && (m = xe(k) * (parseFloat(m) / 100))
                        }
                    }
                    this.originPoint[y] = m
                }), v && U.postRender(() => v(f, h)), cl(this.visualElement, "transform");
                const {
                    animationState: S
                } = this.visualElement;
                S && S.setActive("whileDrag", !0)
            },
            a = (f, h) => {
                this.latestPointerEvent = f, this.latestPanInfo = h;
                const {
                    dragPropagation: p,
                    dragDirectionLock: x,
                    onDirectionLock: v,
                    onDrag: S
                } = this.getProps();
                if (!p && !this.openDragLock) return;
                const {
                    offset: y
                } = h;
                if (x && this.currentDirection === null) {
                    this.currentDirection = Xw(y), this.currentDirection !== null && v && v(this.currentDirection);
                    return
                }
                this.updateAxis("x", h.point, y), this.updateAxis("y", h.point, y), this.visualElement.render(), S && S(f, h)
            },
            l = (f, h) => {
                this.latestPointerEvent = f, this.latestPanInfo = h, this.stop(f, h), this.latestPointerEvent = null, this.latestPanInfo = null
            },
            u = () => Fe(f => {
                var h;
                return this.getAnimationState(f) === "paused" && ((h = this.getAxisMotionValue(f).animation) == null ? void 0 : h.play())
            }),
            {
                dragSnapToOrigin: d
            } = this.getProps();
        this.panSession = new x0(t, {
            onSessionStart: s,
            onStart: o,
            onMove: a,
            onSessionEnd: l,
            resumeAnimation: u
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: d,
            distanceThreshold: r,
            contextWindow: v0(this.visualElement)
        })
    }
    stop(t, n) {
        const r = t || this.latestPointerEvent,
            i = n || this.latestPanInfo,
            s = this.isDragging;
        if (this.cancel(), !s || !i || !r) return;
        const {
            velocity: o
        } = i;
        this.startAnimation(o);
        const {
            onDragEnd: a
        } = this.getProps();
        a && U.postRender(() => a(r, i))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: t,
            animationState: n
        } = this.visualElement;
        t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        const {
            dragPropagation: r
        } = this.getProps();
        !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const {
            drag: i
        } = this.getProps();
        if (!r || !Hi(t, i, this.currentDirection)) return;
        const s = this.getAxisMotionValue(t);
        let o = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (o = Ow(o, this.constraints[t], this.elastic[t])), s.set(o)
    }
    resolveConstraints() {
        var s;
        const {
            dragConstraints: t,
            dragElastic: n
        } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (s = this.visualElement.projection) == null ? void 0 : s.layout, i = this.constraints;
        t && zn(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = Iw(r.layoutBox, t) : this.constraints = !1, this.elastic = Hw(n), i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && Fe(o => {
            this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = Ww(r.layoutBox[o], this.constraints[o]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: t,
            onMeasureDragConstraints: n
        } = this.getProps();
        if (!t || !zn(t)) return !1;
        const r = t.current,
            {
                projection: i
            } = this.visualElement;
        if (!i || !i.layout) return !1;
        const s = Vw(r, i.root, this.visualElement.getTransformPagePoint());
        let o = Bw(i.layout.layoutBox, s);
        if (n) {
            const a = n(Nw(o));
            this.hasMutatedConstraints = !!a, a && (o = f0(a))
        }
        return o
    }
    startAnimation(t) {
        const {
            drag: n,
            dragMomentum: r,
            dragElastic: i,
            dragTransition: s,
            dragSnapToOrigin: o,
            onDragTransitionEnd: a
        } = this.getProps(), l = this.constraints || {}, u = Fe(d => {
            if (!Hi(d, n, this.currentDirection)) return;
            let f = l && l[d] || {};
            o && (f = {
                min: 0,
                max: 0
            });
            const h = i ? 200 : 1e6,
                p = i ? 40 : 1e7,
                x = {
                    type: "inertia",
                    velocity: r ? t[d] : 0,
                    bounceStiffness: h,
                    bounceDamping: p,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...s,
                    ...f
                };
            return this.startAxisValueAnimation(d, x)
        });
        return Promise.all(u).then(a)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return cl(this.visualElement, t), r.start(Yu(t, r, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        Fe(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        Fe(t => {
            var n;
            return (n = this.getAxisMotionValue(t).animation) == null ? void 0 : n.pause()
        })
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) == null ? void 0 : n.state
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`,
            r = this.visualElement.getProps(),
            i = r[n];
        return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        Fe(n => {
            const {
                drag: r
            } = this.getProps();
            if (!Hi(n, r, this.currentDirection)) return;
            const {
                projection: i
            } = this.visualElement, s = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {
                    min: o,
                    max: a
                } = i.layout.layoutBox[n];
                s.set(t[n] - H(o, a, .5))
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: t,
            dragConstraints: n
        } = this.getProps(), {
            projection: r
        } = this.visualElement;
        if (!zn(n) || !r || !this.constraints) return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        Fe(o => {
            const a = this.getAxisMotionValue(o);
            if (a && this.constraints !== !1) {
                const l = a.get();
                i[o] = Uw({
                    min: l,
                    max: l
                }, this.constraints[o])
            }
        });
        const {
            transformTemplate: s
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = s ? s({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), Fe(o => {
            if (!Hi(o, t, null)) return;
            const a = this.getAxisMotionValue(o),
                {
                    min: l,
                    max: u
                } = this.constraints[o];
            a.set(H(l, u, i[o]))
        })
    }
    addListeners() {
        if (!this.visualElement.current) return;
        Kw.set(this.visualElement, this);
        const t = this.visualElement.current,
            n = Vr(t, "pointerdown", l => {
                const {
                    drag: u,
                    dragListener: d = !0
                } = this.getProps();
                u && d && this.start(l)
            }),
            r = () => {
                const {
                    dragConstraints: l
                } = this.getProps();
                zn(l) && l.current && (this.constraints = this.resolveRefConstraints())
            },
            {
                projection: i
            } = this.visualElement,
            s = i.addEventListener("measure", r);
        i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), U.read(r);
        const o = ci(window, "resize", () => this.scalePositionWithinConstraints()),
            a = i.addEventListener("didUpdate", ({
                delta: l,
                hasLayoutChanged: u
            }) => {
                this.isDragging && u && (Fe(d => {
                    const f = this.getAxisMotionValue(d);
                    f && (this.originPoint[d] += l[d].translate, f.set(f.get() + l[d].translate))
                }), this.visualElement.render())
            });
        return () => {
            o(), n(), s(), a && a()
        }
    }
    getProps() {
        const t = this.visualElement.getProps(),
            {
                drag: n = !1,
                dragDirectionLock: r = !1,
                dragPropagation: i = !1,
                dragConstraints: s = !1,
                dragElastic: o = pl,
                dragMomentum: a = !0
            } = t;
        return { ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: s,
            dragElastic: o,
            dragMomentum: a
        }
    }
}

function Hi(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}

function Xw(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
}
class Yw extends Kt {
    constructor(t) {
        super(t), this.removeGroupControls = Be, this.removeListeners = Be, this.controls = new Gw(t)
    }
    mount() {
        const {
            dragControls: t
        } = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Be
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}
const rf = e => (t, n) => {
    e && U.postRender(() => e(t, n))
};
class Qw extends Kt {
    constructor() {
        super(...arguments), this.removePointerDownListener = Be
    }
    onPointerDown(t) {
        this.session = new x0(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: v0(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: t,
            onPanStart: n,
            onPan: r,
            onPanEnd: i
        } = this.node.getProps();
        return {
            onSessionStart: rf(t),
            onStart: rf(n),
            onMove: r,
            onEnd: (s, o) => {
                delete this.session, i && U.postRender(() => i(s, o))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Vr(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}
const ls = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};

function sf(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const xr = {
        correct: (e, t) => {
            if (!t.target) return e;
            if (typeof e == "string")
                if (L.test(e)) e = parseFloat(e);
                else return e;
            const n = sf(e, t.target.x),
                r = sf(e, t.target.y);
            return `${n}% ${r}%`
        }
    },
    Zw = {
        correct: (e, {
            treeScale: t,
            projectionDelta: n
        }) => {
            const r = e,
                i = Bt.parse(e);
            if (i.length > 5) return r;
            const s = Bt.createTransformer(e),
                o = typeof i[0] != "number" ? 1 : 0,
                a = n.x.scale * t.x,
                l = n.y.scale * t.y;
            i[0 + o] /= a, i[1 + o] /= l;
            const u = H(a, l, .5);
            return typeof i[2 + o] == "number" && (i[2 + o] /= u), typeof i[3 + o] == "number" && (i[3 + o] /= u), s(i)
        }
    };
let of = !1;
class qw extends w.Component {
    componentDidMount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r,
            layoutId: i
        } = this.props, {
            projection: s
        } = t;
        V2(Jw), s && (n.group && n.group.add(s), r && r.register && i && r.register(s), of && s.root.didUpdate(), s.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), s.setOptions({ ...s.options,
            onExitComplete: () => this.safeToRemove()
        })), ls.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {
            layoutDependency: n,
            visualElement: r,
            drag: i,
            isPresent: s
        } = this.props, {
            projection: o
        } = r;
        return o && (o.isPresent = s, of = !0, i || t.layoutDependency !== n || n === void 0 || t.isPresent !== s ? o.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? o.promote() : o.relegate() || U.postRender(() => {
            const a = o.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            projection: t
        } = this.props.visualElement;
        t && (t.root.didUpdate(), zu.postRender(() => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r
        } = this.props, {
            projection: i
        } = t;
        i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i))
    }
    safeToRemove() {
        const {
            safeToRemove: t
        } = this.props;
        t && t()
    }
    render() {
        return null
    }
}

function k0(e) {
    const [t, n] = Xm(), r = w.useContext(yu);
    return c.jsx(qw, { ...e,
        layoutGroup: r,
        switchLayoutGroup: w.useContext(Jm),
        isPresent: t,
        safeToRemove: n
    })
}
const Jw = {
    borderRadius: { ...xr,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: xr,
    borderTopRightRadius: xr,
    borderBottomLeftRadius: xr,
    borderBottomRightRadius: xr,
    boxShadow: Zw
};

function e3(e, t, n) {
    const r = ye(e) ? e : tr(e);
    return r.start(Yu("", r, t, n)), r.animation
}
const t3 = (e, t) => e.depth - t.depth;
class n3 {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(t) {
        xu(this.children, t), this.isDirty = !0
    }
    remove(t) {
        wu(this.children, t), this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(t3), this.isDirty = !1, this.children.forEach(t)
    }
}

function r3(e, t) {
    const n = be.now(),
        r = ({
            timestamp: i
        }) => {
            const s = i - n;
            s >= t && (It(r), e(s - t))
        };
    return U.setup(r, !0), () => It(r)
}
const S0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    i3 = S0.length,
    af = e => typeof e == "string" ? parseFloat(e) : e,
    lf = e => typeof e == "number" || L.test(e);

function s3(e, t, n, r, i, s) {
    i ? (e.opacity = H(0, n.opacity ? ? 1, o3(r)), e.opacityExit = H(t.opacity ? ? 1, 0, a3(r))) : s && (e.opacity = H(t.opacity ? ? 1, n.opacity ? ? 1, r));
    for (let o = 0; o < i3; o++) {
        const a = `border${S0[o]}Radius`;
        let l = uf(t, a),
            u = uf(n, a);
        if (l === void 0 && u === void 0) continue;
        l || (l = 0), u || (u = 0), l === 0 || u === 0 || lf(l) === lf(u) ? (e[a] = Math.max(H(af(l), af(u), r), 0), (ot.test(u) || ot.test(l)) && (e[a] += "%")) : e[a] = u
    }(t.rotate || n.rotate) && (e.rotate = H(t.rotate || 0, n.rotate || 0, r))
}

function uf(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const o3 = C0(0, .5, mm),
    a3 = C0(.5, .95, Be);

function C0(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(ii(e, t, r))
}

function cf(e, t) {
    e.min = t.min, e.max = t.max
}

function Ve(e, t) {
    cf(e.x, t.x), cf(e.y, t.y)
}

function df(e, t) {
    e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin
}

function ff(e, t, n, r, i) {
    return e -= t, e = Os(e, 1 / n, r), i !== void 0 && (e = Os(e, 1 / i, r)), e
}

function l3(e, t = 0, n = 1, r = .5, i, s = e, o = e) {
    if (ot.test(t) && (t = parseFloat(t), t = H(o.min, o.max, t / 100) - o.min), typeof t != "number") return;
    let a = H(s.min, s.max, r);
    e === s && (a -= t), e.min = ff(e.min, t, n, a, i), e.max = ff(e.max, t, n, a, i)
}

function hf(e, t, [n, r, i], s, o) {
    l3(e, t[n], t[r], t[i], t.scale, s, o)
}
const u3 = ["x", "scaleX", "originX"],
    c3 = ["y", "scaleY", "originY"];

function pf(e, t, n, r) {
    hf(e.x, t, u3, n ? n.x : void 0, r ? r.x : void 0), hf(e.y, t, c3, n ? n.y : void 0, r ? r.y : void 0)
}

function mf(e) {
    return e.translate === 0 && e.scale === 1
}

function j0(e) {
    return mf(e.x) && mf(e.y)
}

function yf(e, t) {
    return e.min === t.min && e.max === t.max
}

function d3(e, t) {
    return yf(e.x, t.x) && yf(e.y, t.y)
}

function gf(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}

function b0(e, t) {
    return gf(e.x, t.x) && gf(e.y, t.y)
}

function vf(e) {
    return xe(e.x) / xe(e.y)
}

function xf(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
class f3 {
    constructor() {
        this.members = []
    }
    add(t) {
        xu(this.members, t), t.scheduleRender()
    }
    remove(t) {
        if (wu(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(i => t === i);
        if (n === 0) return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const s = this.members[i];
            if (s.isPresent !== !1) {
                r = s;
                break
            }
        }
        return r ? (this.promote(r), !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
            r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {
                crossfade: i
            } = t.options;
            i === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {
                options: n,
                resumingFrom: r
            } = t;
            n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete()
        })
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        })
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}

function h3(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x,
        s = e.y.translate / t.y,
        o = (n == null ? void 0 : n.z) || 0;
    if ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1/t.x}, ${1/t.y}) `), n) {
        const {
            transformPerspective: u,
            rotate: d,
            rotateX: f,
            rotateY: h,
            skewX: p,
            skewY: x
        } = n;
        u && (r = `perspective(${u}px) ${r}`), d && (r += `rotate(${d}deg) `), f && (r += `rotateX(${f}deg) `), h && (r += `rotateY(${h}deg) `), p && (r += `skewX(${p}deg) `), x && (r += `skewY(${x}deg) `)
    }
    const a = e.x.scale * t.x,
        l = e.y.scale * t.y;
    return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none"
}
const Qo = ["", "X", "Y", "Z"],
    p3 = 1e3;
let m3 = 0;

function Zo(e, t, n, r) {
    const {
        latestValues: i
    } = t;
    i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0))
}

function T0(e) {
    if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
    const {
        visualElement: t
    } = e.options;
    if (!t) return;
    const n = l0(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {
            layout: i,
            layoutId: s
        } = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", U, !(i || s))
    }
    const {
        parent: r
    } = e;
    r && !r.hasCheckedOptimisedAppear && T0(r)
}

function N0({
    attachResizeListener: e,
    defaultParent: t,
    measureScroll: n,
    checkIsScrollRoot: r,
    resetTransform: i
}) {
    return class {
        constructor(o = {}, a = t == null ? void 0 : t()) {
            this.id = m3++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, this.nodes.forEach(v3), this.nodes.forEach(S3), this.nodes.forEach(C3), this.nodes.forEach(x3)
            }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = o, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new n3)
        }
        addEventListener(o, a) {
            return this.eventHandlers.has(o) || this.eventHandlers.set(o, new Su), this.eventHandlers.get(o).add(a)
        }
        notifyListeners(o, ...a) {
            const l = this.eventHandlers.get(o);
            l && l.notify(...a)
        }
        hasListeners(o) {
            return this.eventHandlers.has(o)
        }
        mount(o) {
            if (this.instance) return;
            this.isSVG = Gm(o) && !f2(o), this.instance = o;
            const {
                layoutId: a,
                layout: l,
                visualElement: u
            } = this.options;
            if (u && !u.current && u.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0), e) {
                let d, f = 0;
                const h = () => this.root.updateBlockedByResize = !1;
                U.read(() => {
                    f = window.innerWidth
                }), e(o, () => {
                    const p = window.innerWidth;
                    p !== f && (f = p, this.root.updateBlockedByResize = !0, d && d(), d = r3(h, 250), ls.hasAnimatedSinceResize && (ls.hasAnimatedSinceResize = !1, this.nodes.forEach(Sf)))
                })
            }
            a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && u && (a || l) && this.addEventListener("didUpdate", ({
                delta: d,
                hasLayoutChanged: f,
                hasRelativeLayoutChanged: h,
                layout: p
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const x = this.options.transition || u.getDefaultTransition() || P3,
                    {
                        onLayoutAnimationStart: v,
                        onLayoutAnimationComplete: S
                    } = u.getProps(),
                    y = !this.targetLayout || !b0(this.targetLayout, p),
                    m = !f && h;
                if (this.options.layoutRoot || this.resumeFrom || m || f && (y || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
                    const g = { ...Vu(x, "layout"),
                        onPlay: v,
                        onComplete: S
                    };
                    (u.shouldReduceMotion || this.options.layoutRoot) && (g.delay = 0, g.type = !1), this.startAnimation(g), this.setAnimationOrigin(d, m)
                } else f || Sf(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = p
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const o = this.getStack();
            o && o.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), It(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(j3), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: o
            } = this.options;
            return o && o.getProps().transformTemplate
        }
        willUpdate(o = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && T0(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let d = 0; d < this.path.length; d++) {
                const f = this.path[d];
                f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1)
            }
            const {
                layoutId: a,
                layout: l
            } = this.options;
            if (a === void 0 && !l) return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), o && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(wf);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(kf);
                return
            }
            this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(k3), this.nodes.forEach(y3), this.nodes.forEach(g3)) : this.nodes.forEach(kf), this.clearAllSnapshots();
            const a = be.now();
            ce.delta = yt(0, 1e3 / 60, a - ce.timestamp), ce.timestamp = a, ce.isProcessing = !0, Io.update.process(ce), Io.preRender.process(ce), Io.render.process(ce), ce.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, zu.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(w3), this.sharedNodes.forEach(b3)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, U.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            U.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !xe(this.snapshot.measuredBox.x) && !xe(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
            const o = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = Z(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: a
            } = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0)
        }
        updateScroll(o = "measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (a = !1), a && this.instance) {
                const l = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: o,
                    isRoot: l,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : l
                }
            }
        }
        resetTransform() {
            if (!i) return;
            const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                a = this.projectionDelta && !j0(this.projectionDelta),
                l = this.getTransformTemplate(),
                u = l ? l(this.latestValues, "") : void 0,
                d = u !== this.prevTransformTemplateValue;
            o && this.instance && (a || Jt(this.latestValues) || d) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(o = !0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return o && (l = this.removeTransform(l)), E3(l), {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var u;
            const {
                visualElement: o
            } = this.options;
            if (!o) return Z();
            const a = o.measureViewportBox();
            if (!(((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(M3))) {
                const {
                    scroll: d
                } = this.root;
                d && (On(a.x, d.offset.x), On(a.y, d.offset.y))
            }
            return a
        }
        removeElementScroll(o) {
            var l;
            const a = Z();
            if (Ve(a, o), (l = this.scroll) != null && l.wasRoot) return a;
            for (let u = 0; u < this.path.length; u++) {
                const d = this.path[u],
                    {
                        scroll: f,
                        options: h
                    } = d;
                d !== this.root && f && h.layoutScroll && (f.wasRoot && Ve(a, o), On(a.x, f.offset.x), On(a.y, f.offset.y))
            }
            return a
        }
        applyTransform(o, a = !1) {
            const l = Z();
            Ve(l, o);
            for (let u = 0; u < this.path.length; u++) {
                const d = this.path[u];
                !a && d.options.layoutScroll && d.scroll && d !== d.root && In(l, {
                    x: -d.scroll.offset.x,
                    y: -d.scroll.offset.y
                }), Jt(d.latestValues) && In(l, d.latestValues)
            }
            return Jt(this.latestValues) && In(l, this.latestValues), l
        }
        removeTransform(o) {
            const a = Z();
            Ve(a, o);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l];
                if (!u.instance || !Jt(u.latestValues)) continue;
                fl(u.latestValues) && u.updateSnapshot();
                const d = Z(),
                    f = u.measurePageBox();
                Ve(d, f), pf(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, d)
            }
            return Jt(this.latestValues) && pf(a, this.latestValues), a
        }
        setTargetDelta(o) {
            this.targetDelta = o, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(o) {
            this.options = { ...this.options,
                ...o,
                crossfade: o.crossfade !== void 0 ? o.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ce.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(o = !1) {
            var h;
            const a = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            const l = !!this.resumingFrom || this !== a;
            if (!(o || l && this.isSharedProjectionDirty || this.isProjectionDirty || (h = this.parent) != null && h.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
                layout: d,
                layoutId: f
            } = this.options;
            if (!(!this.layout || !(d || f))) {
                if (this.resolvedRelativeTargetAt = ce.timestamp, !this.targetDelta && !this.relativeTarget) {
                    const p = this.getClosestProjectingParent();
                    p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Z(), this.relativeTargetOrigin = Z(), zr(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), Ve(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Z(), this.targetWithTransforms = Z()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Dw(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ve(this.target, this.layout.layoutBox), y0(this.target, this.targetDelta)) : Ve(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
                    this.attemptToResolveRelativeTarget = !1;
                    const p = this.getClosestProjectingParent();
                    p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Z(), this.relativeTargetOrigin = Z(), zr(this.relativeTargetOrigin, this.target, p.target), Ve(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || fl(this.parent.latestValues) || m0(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var x;
            const o = this.getLead(),
                a = !!this.resumingFrom || this !== o;
            let l = !0;
            if ((this.isProjectionDirty || (x = this.parent) != null && x.isProjectionDirty) && (l = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === ce.timestamp && (l = !1), l) return;
            const {
                layout: u,
                layoutId: d
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || d)) return;
            Ve(this.layoutCorrected, this.layout.layoutBox);
            const f = this.treeScale.x,
                h = this.treeScale.y;
            $w(this.layoutCorrected, this.treeScale, this.path, a), o.layout && !o.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (o.target = o.layout.layoutBox, o.targetWithTransforms = Z());
            const {
                target: p
            } = o;
            if (!p) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (df(this.prevProjectionDelta.x, this.projectionDelta.x), df(this.prevProjectionDelta.y, this.projectionDelta.y)), Fr(this.projectionDelta, this.layoutCorrected, p, this.latestValues), (this.treeScale.x !== f || this.treeScale.y !== h || !xf(this.projectionDelta.x, this.prevProjectionDelta.x) || !xf(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", p))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(o = !0) {
            var a;
            if ((a = this.options.visualElement) == null || a.scheduleRender(), o) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = _n(), this.projectionDelta = _n(), this.projectionDeltaWithTransform = _n()
        }
        setAnimationOrigin(o, a = !1) {
            const l = this.snapshot,
                u = l ? l.latestValues : {},
                d = { ...this.latestValues
                },
                f = _n();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
            const h = Z(),
                p = l ? l.source : void 0,
                x = this.layout ? this.layout.source : void 0,
                v = p !== x,
                S = this.getStack(),
                y = !S || S.members.length <= 1,
                m = !!(v && !y && this.options.crossfade === !0 && !this.path.some(N3));
            this.animationProgress = 0;
            let g;
            this.mixTargetDelta = k => {
                const j = k / 1e3;
                Cf(f.x, o.x, j), Cf(f.y, o.y, j), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (zr(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox), T3(this.relativeTarget, this.relativeTargetOrigin, h, j), g && d3(this.relativeTarget, g) && (this.isProjectionDirty = !1), g || (g = Z()), Ve(g, this.relativeTarget)), v && (this.animationValues = d, s3(d, u, this.latestValues, j, m, y)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = j
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(o) {
            var a, l, u;
            this.notifyListeners("animationStart"), (a = this.currentAnimation) == null || a.stop(), (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || u.stop(), this.pendingAnimation && (It(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = U.update(() => {
                ls.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = tr(0)), this.currentAnimation = e3(this.motionValue, [0, 1e3], { ...o,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: d => {
                        this.mixTargetDelta(d), o.onUpdate && o.onUpdate(d)
                    },
                    onStop: () => {},
                    onComplete: () => {
                        o.onComplete && o.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const o = this.getStack();
            o && o.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(p3), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const o = this.getLead();
            let {
                targetWithTransforms: a,
                target: l,
                layout: u,
                latestValues: d
            } = o;
            if (!(!a || !l || !u)) {
                if (this !== o && this.layout && u && P0(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    l = this.target || Z();
                    const f = xe(this.layout.layoutBox.x);
                    l.x.min = o.target.x.min, l.x.max = l.x.min + f;
                    const h = xe(this.layout.layoutBox.y);
                    l.y.min = o.target.y.min, l.y.max = l.y.min + h
                }
                Ve(a, l), In(a, d), Fr(this.projectionDeltaWithTransform, this.layoutCorrected, a, d)
            }
        }
        registerSharedNode(o, a) {
            this.sharedNodes.has(o) || this.sharedNodes.set(o, new f3), this.sharedNodes.get(o).add(a);
            const u = a.options.initialPromotionConfig;
            a.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const o = this.getStack();
            return o ? o.lead === this : !0
        }
        getLead() {
            var a;
            const {
                layoutId: o
            } = this.options;
            return o ? ((a = this.getStack()) == null ? void 0 : a.lead) || this : this
        }
        getPrevLead() {
            var a;
            const {
                layoutId: o
            } = this.options;
            return o ? (a = this.getStack()) == null ? void 0 : a.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: o
            } = this.options;
            if (o) return this.root.sharedNodes.get(o)
        }
        promote({
            needsReset: o,
            transition: a,
            preserveFollowOpacity: l
        } = {}) {
            const u = this.getStack();
            u && u.promote(this, l), o && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const o = this.getStack();
            return o ? o.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {
                visualElement: o
            } = this.options;
            if (!o) return;
            let a = !1;
            const {
                latestValues: l
            } = o;
            if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a) return;
            const u = {};
            l.z && Zo("z", o, u, this.animationValues);
            for (let d = 0; d < Qo.length; d++) Zo(`rotate${Qo[d]}`, o, u, this.animationValues), Zo(`skew${Qo[d]}`, o, u, this.animationValues);
            o.render();
            for (const d in u) o.setStaticValue(d, u[d]), this.animationValues && (this.animationValues[d] = u[d]);
            o.scheduleRender()
        }
        applyProjectionStyles(o, a) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) {
                o.visibility = "hidden";
                return
            }
            const l = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1, o.visibility = "", o.opacity = "", o.pointerEvents = as(a == null ? void 0 : a.pointerEvents) || "", o.transform = l ? l(this.latestValues, "") : "none";
                return
            }
            const u = this.getLead();
            if (!this.projectionDelta || !this.layout || !u.target) {
                this.options.layoutId && (o.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, o.pointerEvents = as(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !Jt(this.latestValues) && (o.transform = l ? l({}, "") : "none", this.hasProjected = !1);
                return
            }
            o.visibility = "";
            const d = u.animationValues || u.latestValues;
            this.applyTransformsToTarget();
            let f = h3(this.projectionDeltaWithTransform, this.treeScale, d);
            l && (f = l(d, f)), o.transform = f;
            const {
                x: h,
                y: p
            } = this.projectionDelta;
            o.transformOrigin = `${h.origin*100}% ${p.origin*100}% 0`, u.animationValues ? o.opacity = u === this ? d.opacity ? ? this.latestValues.opacity ? ? 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : o.opacity = u === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
            for (const x in li) {
                if (d[x] === void 0) continue;
                const {
                    correct: v,
                    applyTo: S,
                    isCSSVariable: y
                } = li[x], m = f === "none" ? d[x] : v(d[x], u);
                if (S) {
                    const g = S.length;
                    for (let k = 0; k < g; k++) o[S[k]] = m
                } else y ? this.options.visualElement.renderState.vars[x] = m : o[x] = m
            }
            this.options.layoutId && (o.pointerEvents = u === this ? as(a == null ? void 0 : a.pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(o => {
                var a;
                return (a = o.currentAnimation) == null ? void 0 : a.stop()
            }), this.root.nodes.forEach(wf), this.root.sharedNodes.clear()
        }
    }
}

function y3(e) {
    e.updateLayout()
}

function g3(e) {
    var n;
    const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
        const {
            layoutBox: r,
            measuredBox: i
        } = e.layout, {
            animationType: s
        } = e.options, o = t.source !== e.layout.source;
        s === "size" ? Fe(f => {
            const h = o ? t.measuredBox[f] : t.layoutBox[f],
                p = xe(h);
            h.min = r[f].min, h.max = h.min + p
        }) : P0(s, t.layoutBox, r) && Fe(f => {
            const h = o ? t.measuredBox[f] : t.layoutBox[f],
                p = xe(r[f]);
            h.max = h.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + p)
        });
        const a = _n();
        Fr(a, r, t.layoutBox);
        const l = _n();
        o ? Fr(l, e.applyTransform(i, !0), t.measuredBox) : Fr(l, r, t.layoutBox);
        const u = !j0(a);
        let d = !1;
        if (!e.resumeFrom) {
            const f = e.getClosestProjectingParent();
            if (f && !f.resumeFrom) {
                const {
                    snapshot: h,
                    layout: p
                } = f;
                if (h && p) {
                    const x = Z();
                    zr(x, t.layoutBox, h.layoutBox);
                    const v = Z();
                    zr(v, r, p.layoutBox), b0(x, v) || (d = !0), f.options.layoutRoot && (e.relativeTarget = v, e.relativeTargetOrigin = x, e.relativeParent = f)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: t,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: u,
            hasRelativeLayoutChanged: d
        })
    } else if (e.isLead()) {
        const {
            onExitComplete: r
        } = e.options;
        r && r()
    }
    e.options.transition = void 0
}

function v3(e) {
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}

function x3(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}

function w3(e) {
    e.clearSnapshot()
}

function wf(e) {
    e.clearMeasurements()
}

function kf(e) {
    e.isLayoutDirty = !1
}

function k3(e) {
    const {
        visualElement: t
    } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
}

function Sf(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
}

function S3(e) {
    e.resolveTargetDelta()
}

function C3(e) {
    e.calcProjection()
}

function j3(e) {
    e.resetSkewAndRotation()
}

function b3(e) {
    e.removeLeadSnapshot()
}

function Cf(e, t, n) {
    e.translate = H(t.translate, 0, n), e.scale = H(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
}

function jf(e, t, n, r) {
    e.min = H(t.min, n.min, r), e.max = H(t.max, n.max, r)
}

function T3(e, t, n, r) {
    jf(e.x, t.x, n.x, r), jf(e.y, t.y, n.y, r)
}

function N3(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const P3 = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    bf = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
    Tf = bf("applewebkit/") && !bf("chrome/") ? Math.round : Be;

function Nf(e) {
    e.min = Tf(e.min), e.max = Tf(e.max)
}

function E3(e) {
    Nf(e.x), Nf(e.y)
}

function P0(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !Aw(vf(t), vf(n), .2)
}

function M3(e) {
    var t;
    return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot)
}
const L3 = N0({
        attachResizeListener: (e, t) => ci(e, "resize", t),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    qo = {
        current: void 0
    },
    E0 = N0({
        measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
        }),
        defaultParent: () => {
            if (!qo.current) {
                const e = new L3({});
                e.mount(window), e.setOptions({
                    layoutScroll: !0
                }), qo.current = e
            }
            return qo.current
        },
        resetTransform: (e, t) => {
            e.style.transform = t !== void 0 ? t : "none"
        },
        checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
    }),
    R3 = {
        pan: {
            Feature: Qw
        },
        drag: {
            Feature: Yw,
            ProjectionNode: E0,
            MeasureLayout: k0
        }
    };

function Pf(e, t, n) {
    const {
        props: r
    } = e;
    e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
    const i = "onHover" + n,
        s = r[i];
    s && U.postRender(() => s(t, wi(t)))
}
class A3 extends Kt {
    mount() {
        const {
            current: t
        } = this.node;
        t && (this.unmount = a2(t, (n, r) => (Pf(this.node, r, "Start"), i => Pf(this.node, i, "End"))))
    }
    unmount() {}
}
class D3 extends Kt {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }!t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = gi(ci(this.node.current, "focus", () => this.onFocus()), ci(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}

function Ef(e, t, n) {
    const {
        props: r
    } = e;
    if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
    e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
    const i = "onTap" + (n === "End" ? "" : n),
        s = r[i];
    s && U.postRender(() => s(t, wi(t)))
}
class $3 extends Kt {
    mount() {
        const {
            current: t
        } = this.node;
        t && (this.unmount = d2(t, (n, r) => (Ef(this.node, r, "Start"), (i, {
            success: s
        }) => Ef(this.node, i, s ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const ml = new WeakMap,
    Jo = new WeakMap,
    V3 = e => {
        const t = ml.get(e.target);
        t && t(e)
    },
    F3 = e => {
        e.forEach(V3)
    };

function z3({
    root: e,
    ...t
}) {
    const n = e || document;
    Jo.has(n) || Jo.set(n, {});
    const r = Jo.get(n),
        i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(F3, {
        root: e,
        ...t
    })), r[i]
}

function _3(e, t, n) {
    const r = z3(t);
    return ml.set(e, n), r.observe(e), () => {
        ml.delete(e), r.unobserve(e)
    }
}
const O3 = {
    some: 0,
    all: 1
};
class I3 extends Kt {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: t = {}
        } = this.node.getProps(), {
            root: n,
            margin: r,
            amount: i = "some",
            once: s
        } = t, o = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof i == "number" ? i : O3[i]
        }, a = l => {
            const {
                isIntersecting: u
            } = l;
            if (this.isInView === u || (this.isInView = u, s && !u && this.hasEnteredView)) return;
            u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {
                onViewportEnter: d,
                onViewportLeave: f
            } = this.node.getProps(), h = u ? d : f;
            h && h(l)
        };
        return _3(this.node.current, o, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: t,
            prevProps: n
        } = this.node;
        ["amount", "margin", "root"].some(B3(t, n)) && this.startObserver()
    }
    unmount() {}
}

function B3({
    viewport: e = {}
}, {
    viewport: t = {}
} = {}) {
    return n => e[n] !== t[n]
}
const U3 = {
        inView: {
            Feature: I3
        },
        tap: {
            Feature: $3
        },
        focus: {
            Feature: D3
        },
        hover: {
            Feature: A3
        }
    },
    W3 = {
        layout: {
            ProjectionNode: E0,
            MeasureLayout: k0
        }
    },
    yl = {
        current: null
    },
    M0 = {
        current: !1
    };

function H3() {
    if (M0.current = !0, !!vu)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)"),
                t = () => yl.current = e.matches;
            e.addEventListener("change", t), t()
        } else yl.current = !1
}
const K3 = new WeakMap;

function G3(e, t, n) {
    for (const r in t) {
        const i = t[r],
            s = n[r];
        if (ye(i)) e.addValue(r, i);
        else if (ye(s)) e.addValue(r, tr(i, {
            owner: e
        }));
        else if (s !== i)
            if (e.hasValue(r)) {
                const o = e.getValue(r);
                o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i)
            } else {
                const o = e.getStaticValue(r);
                e.addValue(r, tr(o !== void 0 ? o : i, {
                    owner: e
                }))
            }
    }
    for (const r in n) t[r] === void 0 && e.removeValue(r);
    return t
}
const Mf = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class X3 {
    scrapeMotionValuesFromProps(t, n, r) {
        return {}
    }
    constructor({
        parent: t,
        props: n,
        presenceContext: r,
        reducedMotionConfig: i,
        blockInitialAnimation: s,
        visualState: o
    }, a = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = Du, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const h = be.now();
            this.renderScheduledAt < h && (this.renderScheduledAt = h, U.render(this.render, !1, !0))
        };
        const {
            latestValues: l,
            renderState: u
        } = o;
        this.latestValues = l, this.baseTarget = { ...l
        }, this.initialValues = n.initial ? { ...l
        } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!s, this.isControllingVariants = fo(n), this.isVariantNode = Zm(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
        const {
            willChange: d,
            ...f
        } = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const h in f) {
            const p = f[h];
            l[h] !== void 0 && ye(p) && p.set(l[h], !1)
        }
    }
    mount(t) {
        this.current = t, K3.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), M0.current || H3(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : yl.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
    }
    unmount() {
        this.projection && this.projection.unmount(), It(this.notifyUpdate), It(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
        for (const t in this.events) this.events[t].clear();
        for (const t in this.features) {
            const n = this.features[t];
            n && (n.unmount(), n.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(t, n) {
        this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
        const r = ur.has(t);
        r && this.onBindTransform && this.onBindTransform();
        const i = n.on("change", a => {
                this.latestValues[t] = a, this.props.onUpdate && U.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0)
            }),
            s = n.on("renderRequest", this.scheduleRender);
        let o;
        window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
            i(), s(), o && o(), n.owner && n.stop()
        })
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    updateFeatures() {
        let t = "animation";
        for (t in nr) {
            const n = nr[t];
            if (!n) continue;
            const {
                isEnabled: r,
                Feature: i
            } = n;
            if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)), this.features[t]) {
                const s = this.features[t];
                s.isMounted ? s.update() : (s.mount(), s.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Z()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
        for (let r = 0; r < Mf.length; r++) {
            const i = Mf[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
            const s = "on" + i,
                o = t[s];
            o && (this.propEventSubscriptions[i] = this.on(i, o))
        }
        this.prevMotionValues = G3(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t]) return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = tr(n === null ? void 0 : n, {
            owner: this
        }), this.addValue(t, r)), r
    }
    readValue(t, n) {
        let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ? ? this.readValueFromInstance(this.current, t, this.options);
        return r != null && (typeof r == "string" && (sm(r) || am(r)) ? r = parseFloat(r) : !p2(r) && Bt.test(n) && (r = Bm(t, n)), this.setBaseTarget(t, ye(r) ? r.get() : r)), ye(r) ? r.get() : r
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var s;
        const {
            initial: n
        } = this.props;
        let r;
        if (typeof n == "string" || typeof n == "object") {
            const o = Gu(this.props, n, (s = this.presenceContext) == null ? void 0 : s.custom);
            o && (r = o[t])
        }
        if (n && r !== void 0) return r;
        const i = this.getBaseTargetFromProps(this.props, t);
        return i !== void 0 && !ye(i) ? i : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new Su), this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class L0 extends X3 {
    constructor() {
        super(...arguments), this.KeyframeResolver = n2
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {
        vars: n,
        style: r
    }) {
        delete n[t], delete r[t]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: t
        } = this.props;
        ye(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }))
    }
}

function R0(e, {
    style: t,
    vars: n
}, r, i) {
    const s = e.style;
    let o;
    for (o in t) s[o] = t[o];
    i == null || i.applyProjectionStyles(s, r);
    for (o in n) s.setProperty(o, n[o])
}

function Y3(e) {
    return window.getComputedStyle(e)
}
class Q3 extends L0 {
    constructor() {
        super(...arguments), this.type = "html", this.renderInstance = R0
    }
    readValueFromInstance(t, n) {
        var r;
        if (ur.has(n)) return (r = this.projection) != null && r.isProjecting ? rl(n) : kx(t, n); {
            const i = Y3(t),
                s = (bu(n) ? i.getPropertyValue(n) : i[n]) || 0;
            return typeof s == "string" ? s.trim() : s
        }
    }
    measureInstanceViewportBox(t, {
        transformPagePoint: n
    }) {
        return g0(t, n)
    }
    build(t, n, r) {
        Wu(t, n, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return Xu(t, n, r)
    }
}
const A0 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function Z3(e, t, n, r) {
    R0(e, t, void 0, r);
    for (const i in t.attrs) e.setAttribute(A0.has(i) ? i : Uu(i), t.attrs[i])
}
class q3 extends L0 {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Z
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (ur.has(n)) {
            const r = Im(n);
            return r && r.default || 0
        }
        return n = A0.has(n) ? n : Uu(n), t.getAttribute(n)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return a0(t, n, r)
    }
    build(t, n, r) {
        r0(t, n, this.isSVGTag, r.transformTemplate, r.style)
    }
    renderInstance(t, n, r, i) {
        Z3(t, n, r, i)
    }
    mount(t) {
        this.isSVGTag = s0(t.tagName), super.mount(t)
    }
}
const J3 = (e, t) => Ku(e) ? new q3(t) : new Q3(t, {
        allowProjection: e !== w.Fragment
    }),
    e5 = J2({ ...bw,
        ...U3,
        ...R3,
        ...W3
    }, J3),
    t5 = j2(e5);
var D0 = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0
    },
    Lf = Et.createContext && Et.createContext(D0),
    n5 = ["attr", "size", "title"];

function r5(e, t) {
    if (e == null) return {};
    var n = i5(e, t),
        r, i;
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (i = 0; i < s.length; i++) r = s[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}

function i5(e, t) {
    if (e == null) return {};
    var n = {};
    for (var r in e)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
            if (t.indexOf(r) >= 0) continue;
            n[r] = e[r]
        }
    return n
}

function Is() {
    return Is = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Is.apply(this, arguments)
}

function Rf(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function Bs(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Rf(Object(n), !0).forEach(function(r) {
            s5(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rf(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}

function s5(e, t, n) {
    return t = o5(t), t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function o5(e) {
    var t = a5(e, "string");
    return typeof t == "symbol" ? t : t + ""
}

function a5(e, t) {
    if (typeof e != "object" || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function $0(e) {
    return e && e.map((t, n) => Et.createElement(t.tag, Bs({
        key: n
    }, t.attr), $0(t.child)))
}

function Sn(e) {
    return t => Et.createElement(l5, Is({
        attr: Bs({}, e.attr)
    }, t), $0(e.child))
}

function l5(e) {
    var t = n => {
        var {
            attr: r,
            size: i,
            title: s
        } = e, o = r5(e, n5), a = i || n.size || "1em", l;
        return n.className && (l = n.className), e.className && (l = (l ? l + " " : "") + e.className), Et.createElement("svg", Is({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, n.attr, r, o, {
            className: l,
            style: Bs(Bs({
                color: e.color || n.color
            }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg"
        }), s && Et.createElement("title", null, s), e.children)
    };
    return Lf !== void 0 ? Et.createElement(Lf.Consumer, null, n => t(n)) : t(D0)
}

function u5(e) {
    return Sn({
        tag: "svg",
        attr: {
            viewBox: "0 0 576 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55"
            },
            child: []
        }]
    })(e)
}

function Af(e) {
    return Sn({
        tag: "svg",
        attr: {
            viewBox: "0 0 384 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
            },
            child: []
        }]
    })(e)
}

function c5(e) {
    return Sn({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z"
            },
            child: []
        }]
    })(e)
}

function Us(e) {
    return Sn({
        tag: "svg",
        attr: {
            viewBox: "0 0 640 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
            },
            child: []
        }]
    })(e)
}

function d5(e) {
    return Sn({
        tag: "svg",
        attr: {
            viewBox: "0 0 384 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4.7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9.7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"
            },
            child: []
        }]
    })(e)
}

function f5(e) {
    return Sn({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"
            },
            child: []
        }]
    })(e)
}

function h5(e) {
    return Sn({
        tag: "svg",
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"
            },
            child: []
        }]
    })(e)
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var p5 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m5 = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(),
    z = (e, t) => {
        const n = w.forwardRef(({
            color: r = "currentColor",
            size: i = 24,
            strokeWidth: s = 2,
            absoluteStrokeWidth: o,
            className: a = "",
            children: l,
            ...u
        }, d) => w.createElement("svg", {
            ref: d,
            ...p5,
            width: i,
            height: i,
            stroke: r,
            strokeWidth: o ? Number(s) * 24 / Number(i) : s,
            className: ["lucide", `lucide-${m5(e)}`, a].join(" "),
            ...u
        }, [...t.map(([f, h]) => w.createElement(f, h)), ...Array.isArray(l) ? l : [l]]));
        return n.displayName = `${e}`, n
    };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y5 = z("AlertCircle", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["line", {
        x1: "12",
        x2: "12",
        y1: "8",
        y2: "12",
        key: "1pkeuh"
    }],
    ["line", {
        x1: "12",
        x2: "12.01",
        y1: "16",
        y2: "16",
        key: "4dfq90"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g5 = z("AlertTriangle", [
    ["path", {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
        key: "c3ski4"
    }],
    ["path", {
        d: "M12 9v4",
        key: "juzpu7"
    }],
    ["path", {
        d: "M12 17h.01",
        key: "p32p05"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V0 = z("CheckCircle", [
    ["path", {
        d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
        key: "g774vq"
    }],
    ["path", {
        d: "m9 11 3 3L22 4",
        key: "1pflzl"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Df = z("Check", [
    ["path", {
        d: "M20 6 9 17l-5-5",
        key: "1gmf2c"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v5 = z("ChevronDown", [
    ["path", {
        d: "m6 9 6 6 6-6",
        key: "qrunsl"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F0 = z("Code", [
    ["polyline", {
        points: "16 18 22 12 16 6",
        key: "z7tu5w"
    }],
    ["polyline", {
        points: "8 6 2 12 8 18",
        key: "1eg1df"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z0 = z("Copy", [
    ["rect", {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2",
        key: "17jyea"
    }],
    ["path", {
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
        key: "zix9uf"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x5 = z("Crown", [
    ["path", {
        d: "m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",
        key: "zkxr6b"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w5 = z("DollarSign", [
    ["line", {
        x1: "12",
        x2: "12",
        y1: "2",
        y2: "22",
        key: "7eqyqh"
    }],
    ["path", {
        d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
        key: "1b0p4s"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _0 = z("Download", [
    ["path", {
        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
        key: "ih7n3h"
    }],
    ["polyline", {
        points: "7 10 12 15 17 10",
        key: "2ggqvy"
    }],
    ["line", {
        x1: "12",
        x2: "12",
        y1: "15",
        y2: "3",
        key: "1vk2je"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qu = z("ExternalLink", [
    ["path", {
        d: "M15 3h6v6",
        key: "1q9fwt"
    }],
    ["path", {
        d: "M10 14 21 3",
        key: "gplh6r"
    }],
    ["path", {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
        key: "a6xqqp"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k5 = z("Gauge", [
    ["path", {
        d: "m12 14 4-4",
        key: "9kzdfg"
    }],
    ["path", {
        d: "M3.34 19a10 10 0 1 1 17.32 0",
        key: "19p75a"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S5 = z("Gift", [
    ["rect", {
        x: "3",
        y: "8",
        width: "18",
        height: "4",
        rx: "1",
        key: "bkv52"
    }],
    ["path", {
        d: "M12 8v13",
        key: "1c76mn"
    }],
    ["path", {
        d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",
        key: "6wjy6b"
    }],
    ["path", {
        d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
        key: "1ihvrl"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C5 = z("Infinity", [
    ["path", {
        d: "M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z",
        key: "1z0uae"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O0 = z("Key", [
    ["circle", {
        cx: "7.5",
        cy: "15.5",
        r: "5.5",
        key: "yqb3hr"
    }],
    ["path", {
        d: "m21 2-9.6 9.6",
        key: "1j0ho8"
    }],
    ["path", {
        d: "m15.5 7.5 3 3L22 7l-3-3",
        key: "1rn1fs"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j5 = z("Lock", [
    ["rect", {
        width: "18",
        height: "11",
        x: "3",
        y: "11",
        rx: "2",
        ry: "2",
        key: "1w4ew1"
    }],
    ["path", {
        d: "M7 11V7a5 5 0 0 1 10 0v4",
        key: "fwvmzm"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b5 = z("Menu", [
    ["line", {
        x1: "4",
        x2: "20",
        y1: "12",
        y2: "12",
        key: "1e0a9i"
    }],
    ["line", {
        x1: "4",
        x2: "20",
        y1: "6",
        y2: "6",
        key: "1owob3"
    }],
    ["line", {
        x1: "4",
        x2: "20",
        y1: "18",
        y2: "18",
        key: "yk5zj1"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T5 = z("Minus", [
    ["path", {
        d: "M5 12h14",
        key: "1ays0h"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N5 = z("Palette", [
    ["circle", {
        cx: "13.5",
        cy: "6.5",
        r: ".5",
        fill: "currentColor",
        key: "1okk4w"
    }],
    ["circle", {
        cx: "17.5",
        cy: "10.5",
        r: ".5",
        fill: "currentColor",
        key: "f64h9f"
    }],
    ["circle", {
        cx: "8.5",
        cy: "7.5",
        r: ".5",
        fill: "currentColor",
        key: "fotxhn"
    }],
    ["circle", {
        cx: "6.5",
        cy: "12.5",
        r: ".5",
        fill: "currentColor",
        key: "qy21gx"
    }],
    ["path", {
        d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
        key: "12rzf8"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P5 = z("Play", [
    ["polygon", {
        points: "5 3 19 12 5 21 5 3",
        key: "191637"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E5 = z("Plus", [
    ["path", {
        d: "M5 12h14",
        key: "1ays0h"
    }],
    ["path", {
        d: "M12 5v14",
        key: "s699le"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cn = z("Shield", [
    ["path", {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I0 = z("Sparkles", [
    ["path", {
        d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
        key: "17u4zn"
    }],
    ["path", {
        d: "M5 3v4",
        key: "bklmnn"
    }],
    ["path", {
        d: "M19 17v4",
        key: "iiml17"
    }],
    ["path", {
        d: "M3 5h4",
        key: "nem4j1"
    }],
    ["path", {
        d: "M17 19h4",
        key: "lbex7p"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gl = z("Star", [
    ["polygon", {
        points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
        key: "8f66p6"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M5 = z("Terminal", [
    ["polyline", {
        points: "4 17 10 11 4 5",
        key: "akl6gq"
    }],
    ["line", {
        x1: "12",
        x2: "20",
        y1: "19",
        y2: "19",
        key: "q2wloq"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L5 = z("Users", [
    ["path", {
        d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
        key: "1yyitq"
    }],
    ["circle", {
        cx: "9",
        cy: "7",
        r: "4",
        key: "nufk8"
    }],
    ["path", {
        d: "M22 21v-2a4 4 0 0 0-3-3.87",
        key: "kshegd"
    }],
    ["path", {
        d: "M16 3.13a4 4 0 0 1 0 7.75",
        key: "1da9ce"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ws = z("X", [
    ["path", {
        d: "M18 6 6 18",
        key: "1bl5f8"
    }],
    ["path", {
        d: "m6 6 12 12",
        key: "d8bk6v"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rr = z("Zap", [
        ["polygon", {
            points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
            key: "45s27k"
        }]
    ]),
    B0 = w.createContext(void 0),
    ea = {
        purple: {
            primary: "#8B5CF6",
            primaryLight: "#A78BFA",
            primaryDark: "#5B21B6",
            gradient: "from-purple-400 via-purple-500 to-purple-700",
            border: "border-purple-500/30",
            borderHover: "border-purple-500/80",
            glow: "shadow-purple-500/20"
        },
        gray: {
            primary: "#6B7280",
            primaryLight: "#9CA3AF",
            primaryDark: "#374151",
            gradient: "from-gray-400 via-gray-500 to-gray-700",
            border: "border-gray-500/30",
            borderHover: "border-gray-500/80",
            glow: "shadow-gray-500/20"
        },
        green: {
            primary: "#10B981",
            primaryLight: "#34D399",
            primaryDark: "#047857",
            gradient: "from-green-400 via-green-500 to-green-700",
            border: "border-green-500/30",
            borderHover: "border-green-500/80",
            glow: "shadow-green-500/20"
        },
        red: {
            primary: "#EF4444",
            primaryLight: "#F87171",
            primaryDark: "#B91C1C",
            gradient: "from-red-400 via-red-500 to-red-700",
            border: "border-red-500/30",
            borderHover: "border-red-500/80",
            glow: "shadow-red-500/20"
        },
        blue: {
            primary: "#3B82F6",
            primaryLight: "#60A5FA",
            primaryDark: "#1D4ED8",
            gradient: "from-blue-400 via-blue-500 to-blue-700",
            border: "border-blue-500/30",
            borderHover: "border-blue-500/80",
            glow: "shadow-blue-500/20"
        }
    },
    R5 = ({
        children: e
    }) => {
        const [t, n] = w.useState(() => localStorage.getItem("ronix-theme") || "purple"), r = o => {
            n(o), localStorage.setItem("ronix-theme", o), i(ea[o])
        }, i = o => {
            const a = document.createElement("style");
            a.textContent = `
      ::-webkit-scrollbar-thumb {
        background: ${o.primary}50 !important;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: ${o.primary}80 !important;
      }
      ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.1) !important;
      }
    `;
            const l = document.getElementById("scrollbar-theme");
            l && l.remove(), a.id = "scrollbar-theme", document.head.appendChild(a)
        };
        w.useEffect(() => {
            i(ea[t])
        }, [t]);
        const s = () => ea[t];
        return c.jsx(B0.Provider, {
            value: {
                theme: t,
                setTheme: r,
                getThemeColors: s
            },
            children: e
        })
    },
    $e = () => {
        const e = w.useContext(B0);
        if (e === void 0) throw new Error("useTheme must be used within a ThemeProvider");
        return e
    },
    A5 = () => {
        const [e, t] = w.useState(!1), [n, r] = w.useState(!1), [i, s] = w.useState(!1), {
            theme: o,
            setTheme: a,
            getThemeColors: l
        } = $e();
        kn();
        const u = l();
        w.useEffect(() => {
            const p = () => {
                t(window.scrollY > 20)
            };
            return window.addEventListener("scroll", p), () => window.removeEventListener("scroll", p)
        }, []);
        const d = [{
                name: "Home",
                path: "/"
            }, {
                name: "Download",
                path: "/download"
            }, {
                name: "Script",
                path: "/script"
            }, {
                name: "Get Key",
                path: "/get-key"
            }, {
                name: "Premium",
                path: "/premium"
            }],
            f = [{
                name: "Purple",
                value: "purple",
                color: "#8B5CF6"
            }, {
                name: "Gray",
                value: "gray",
                color: "#6B7280"
            }, {
                name: "Green",
                value: "green",
                color: "#10B981"
            }, {
                name: "Red",
                value: "red",
                color: "#EF4444"
            }, {
                name: "Blue",
                value: "blue",
                color: "#3B82F6"
            }],
            h = p => {
                if (p.includes("#")) {
                    const x = document.querySelector(p.split("#")[1]);
                    x && x.scrollIntoView({
                        behavior: "smooth"
                    })
                }
                s(!1)
            };
        return c.jsxs(c.Fragment, {
            children: [c.jsx("nav", {
                className: `fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${e?"glass-effect-nav shadow-xl scale-95":"bg-black/30 border backdrop-blur-md"} rounded-2xl px-8 py-4`,
                style: {
                    borderColor: e ? `${u.primary}40` : `${u.primary}20`,
                    boxShadow: e ? `0 25px 50px ${u.primary}20` : void 0,
                    minWidth: "900px",
                    maxWidth: "950px"
                },
                children: c.jsxs("div", {
                    className: "flex items-center justify-between gap-8",
                    children: [c.jsx(is, {
                        to: "/",
                        className: "flex items-center",
                        children: c.jsx("h1", {
                            className: "font-orbitron font-black text-xl transition-all duration-200 hover:scale-105 cursor-pointer",
                            style: {
                                color: u.primary,
                                textShadow: `0 0 20px ${u.primary}50`
                            },
                            children: "RONIX"
                        })
                    }), c.jsx("div", {
                        className: "hidden sm:flex items-center space-x-6",
                        children: d.map(p => c.jsxs(is, {
                            to: p.path,
                            onClick: () => h(p.path),
                            className: "relative text-gray-300 hover:text-white transition-all duration-300 font-medium text-sm tracking-wide group py-2 font-orbitron",
                            children: [p.name, c.jsx("span", {
                                className: "absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full",
                                style: {
                                    background: `linear-gradient(90deg, transparent, ${u.primaryLight}, ${u.primary}, ${u.primaryLight}, transparent)`,
                                    boxShadow: `0 0 8px ${u.primary}60`
                                }
                            }), c.jsx("span", {
                                className: "absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-0 h-1 transition-all duration-300 group-hover:w-3/4 rounded-full blur-sm opacity-0 group-hover:opacity-100",
                                style: {
                                    background: `linear-gradient(90deg, transparent, ${u.primary}80, transparent)`
                                }
                            })]
                        }, p.name))
                    }), c.jsxs("div", {
                        className: "flex items-center space-x-3",
                        children: [c.jsxs("div", {
                            className: "relative",
                            children: [c.jsx("button", {
                                onClick: () => r(!n),
                                className: "flex items-center justify-center w-10 h-10 bg-black/30 border rounded-xl transition-all duration-200 hover:scale-105",
                                style: {
                                    borderColor: `${u.primary}30`,
                                    backgroundColor: n ? `${u.primary}15` : void 0
                                },
                                children: c.jsx(N5, {
                                    size: 16,
                                    style: {
                                        color: u.primaryLight
                                    }
                                })
                            }), n && c.jsx("div", {
                                className: "absolute top-12 right-0 bg-black/95 backdrop-blur-md border rounded-xl p-3 min-w-[140px] animate-slideDown",
                                style: {
                                    borderColor: `${u.primary}30`
                                },
                                children: f.map(p => c.jsxs("button", {
                                    onClick: () => {
                                        a(p.value), r(!1)
                                    },
                                    className: `w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-all duration-150 font-orbitron ${o===p.value?"bg-white/10":"hover:bg-white/5"}`,
                                    children: [c.jsx("div", {
                                        className: "w-3 h-3 rounded-full",
                                        style: {
                                            backgroundColor: p.color
                                        }
                                    }), c.jsx("span", {
                                        className: "text-gray-300",
                                        children: p.name
                                    })]
                                }, p.value))
                            })]
                        }), c.jsx("button", {
                            className: "flex items-center justify-center w-10 h-10 bg-black/30 border rounded-xl transition-all duration-200 hover:scale-105 group",
                            style: {
                                borderColor: `${u.primary}30`
                            },
                            onMouseEnter: p => {
                                p.currentTarget.style.backgroundColor = `${u.primary}15`, p.currentTarget.style.borderColor = `${u.primary}60`
                            },
                            onMouseLeave: p => {
                                p.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.3)", p.currentTarget.style.borderColor = `${u.primary}30`
                            },
                            children: c.jsx(Us, {
                                className: "text-gray-300 group-hover:text-white transition-colors duration-200",
                                size: 14
                            })
                        }), c.jsx("button", {
                            onClick: () => s(!i),
                            className: "sm:hidden flex items-center justify-center w-10 h-10 bg-black/30 border rounded-xl transition-all duration-200",
                            style: {
                                borderColor: `${u.primary}30`
                            },
                            children: i ? c.jsx(Ws, {
                                size: 16,
                                style: {
                                    color: u.primaryLight
                                }
                            }) : c.jsx(b5, {
                                size: 16,
                                style: {
                                    color: u.primaryLight
                                }
                            })
                        })]
                    })]
                })
            }), i && c.jsxs("div", {
                className: "fixed inset-0 z-40 sm:hidden",
                children: [c.jsx("div", {
                    className: "absolute inset-0 bg-black/80 backdrop-blur-sm",
                    onClick: () => s(!1)
                }), c.jsxs("div", {
                    className: "absolute top-20 left-4 right-4 bg-black/95 backdrop-blur-md border rounded-2xl p-6 animate-slideDown",
                    style: {
                        borderColor: `${u.primary}40`,
                        boxShadow: `0 25px 50px ${u.primary}30`
                    },
                    children: [c.jsxs("div", {
                        className: "flex items-center justify-between mb-6",
                        children: [c.jsx("h3", {
                            className: "font-orbitron font-bold text-lg",
                            style: {
                                color: u.primary,
                                textShadow: `0 0 15px ${u.primary}50`
                            },
                            children: "Menu"
                        }), c.jsx("button", {
                            onClick: () => s(!1),
                            className: "flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 hover:bg-white/10",
                            children: c.jsx(Ws, {
                                size: 16,
                                style: {
                                    color: u.primaryLight
                                }
                            })
                        })]
                    }), c.jsx("div", {
                        className: "space-y-3 mb-6",
                        children: d.map(p => c.jsxs(is, {
                            to: p.path,
                            onClick: () => h(p.path),
                            className: "flex items-center justify-between p-4 rounded-xl transition-all duration-200 group border font-orbitron",
                            style: {
                                borderColor: `${u.primary}20`,
                                background: `linear-gradient(135deg, ${u.primary}05, transparent)`
                            },
                            onMouseEnter: x => {
                                x.currentTarget.style.borderColor = `${u.primary}60`, x.currentTarget.style.background = `linear-gradient(135deg, ${u.primary}15, ${u.primaryLight}05)`
                            },
                            onMouseLeave: x => {
                                x.currentTarget.style.borderColor = `${u.primary}20`, x.currentTarget.style.background = `linear-gradient(135deg, ${u.primary}05, transparent)`
                            },
                            children: [c.jsx("span", {
                                className: "text-white font-medium text-base",
                                children: p.name
                            }), c.jsx("div", {
                                className: "w-2 h-2 rounded-full transition-all duration-200 group-hover:scale-125",
                                style: {
                                    backgroundColor: u.primary
                                }
                            })]
                        }, p.name))
                    }), c.jsxs("div", {
                        className: "border-t pt-4",
                        style: {
                            borderColor: `${u.primary}20`
                        },
                        children: [c.jsx("h4", {
                            className: "text-gray-300 font-medium mb-3 text-sm font-orbitron",
                            children: "Choose Theme"
                        }), c.jsx("div", {
                            className: "grid grid-cols-5 gap-2",
                            children: f.map(p => c.jsxs("button", {
                                onClick: () => {
                                    a(p.value), s(!1)
                                },
                                className: `flex flex-col items-center p-3 rounded-xl transition-all duration-200 border font-orbitron ${o===p.value?"border-white/30 bg-white/10":"border-transparent hover:bg-white/5"}`,
                                children: [c.jsx("div", {
                                    className: "w-4 h-4 rounded-full mb-1",
                                    style: {
                                        backgroundColor: p.color
                                    }
                                }), c.jsx("span", {
                                    className: "text-gray-300 text-xs",
                                    children: p.name
                                })]
                            }, p.value))
                        })]
                    })]
                })]
            })]
        })
    },
    D5 = () => {
        const {
            getThemeColors: e
        } = $e(), t = e();
        return c.jsx("section", {
            id: "home",
            className: "min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-4 sm:px-6",
            children: c.jsxs("div", {
                className: "text-center z-10 max-w-4xl mx-auto w-full",
                children: [c.jsxs("div", {
                    className: "mb-8 animate-float",
                    children: [c.jsxs("h1", {
                        className: "font-orbitron font-black text-5xl sm:text-6xl md:text-7xl mb-6 relative",
                        style: {
                            color: t.primary,
                            textShadow: `0 0 30px ${t.primary}50, 0 0 60px ${t.primary}30`
                        },
                        children: ["RONIX", c.jsx("div", {
                            className: "absolute inset-0 font-orbitron font-black text-5xl sm:text-6xl md:text-7xl opacity-30 blur-sm -z-10",
                            style: {
                                color: t.primary
                            },
                            children: "RONIX"
                        })]
                    }), c.jsx("div", {
                        className: "w-32 sm:w-40 h-1 mx-auto rounded-full animate-pulse",
                        style: {
                            background: `linear-gradient(to right, ${t.primaryLight}, ${t.primary}, ${t.primaryDark})`
                        }
                    })]
                }), c.jsx("h2", {
                    className: "text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 animate-fadeInUp leading-tight",
                    children: "The Best Roblox Utility."
                }), c.jsx("p", {
                    className: "text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-fadeInUp",
                    children: "The ultimate solution for undetected, stable, and performant automation"
                }), c.jsx("div", {
                    className: "flex justify-center animate-fadeInUp",
                    children: c.jsxs(is, {
                        to: "/download",
                        className: "group relative flex items-center gap-3 text-white px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 hover:scale-105 overflow-hidden",
                        style: {
                            background: `linear-gradient(135deg, ${t.primary}90, ${t.primaryDark}80)`,
                            boxShadow: `0 8px 25px ${t.primary}40, inset 0 1px 0 rgba(255,255,255,0.1)`,
                            border: `1px solid ${t.primary}60`
                        },
                        onMouseEnter: n => {
                            n.currentTarget.style.background = `linear-gradient(135deg, ${t.primaryLight}95, ${t.primary}85)`, n.currentTarget.style.boxShadow = `0 12px 30px ${t.primary}60, inset 0 1px 0 rgba(255,255,255,0.2), 0 0 25px ${t.primary}50`, n.currentTarget.style.transform = "scale(1.05) translateY(-2px)", n.currentTarget.style.border = `1px solid ${t.primaryLight}80`
                        },
                        onMouseLeave: n => {
                            n.currentTarget.style.background = `linear-gradient(135deg, ${t.primary}90, ${t.primaryDark}80)`, n.currentTarget.style.boxShadow = `0 8px 25px ${t.primary}40, inset 0 1px 0 rgba(255,255,255,0.1)`, n.currentTarget.style.transform = "scale(1)", n.currentTarget.style.border = `1px solid ${t.primary}60`
                        },
                        children: [c.jsx("div", {
                            className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                            style: {
                                background: `radial-gradient(circle at 30% 30%, ${t.primaryLight}20, transparent 50%), radial-gradient(circle at 70% 70%, ${t.primary}15, transparent 50%)`
                            }
                        }), c.jsx("div", {
                            className: "absolute top-1 left-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                            children: c.jsx(rr, {
                                size: 12,
                                style: {
                                    color: t.primaryLight
                                },
                                className: "animate-pulse"
                            })
                        }), c.jsx("div", {
                            className: "absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                            children: c.jsx(I0, {
                                size: 10,
                                style: {
                                    color: t.primaryLight
                                }
                            })
                        }), c.jsxs("div", {
                            className: "relative z-10 flex items-center gap-3",
                            children: [c.jsx("div", {
                                className: "flex items-center justify-center w-8 h-8 rounded-full",
                                style: {
                                    background: "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))",
                                    boxShadow: `0 0 15px ${t.primary}60, inset 0 1px 0 rgba(255,255,255,0.3)`,
                                    border: "1px solid rgba(255,255,255,0.2)"
                                },
                                children: c.jsx(_0, {
                                    size: 16,
                                    className: "text-white drop-shadow-lg"
                                })
                            }), c.jsx("span", {
                                className: "font-semibold tracking-wide text-shadow",
                                children: "Download"
                            })]
                        }), c.jsx("div", {
                            className: "absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                            style: {
                                background: `linear-gradient(to right, transparent, ${t.primaryLight}80, transparent)`
                            }
                        }), c.jsx("div", {
                            className: "absolute -left-1 top-1/2 transform -translate-y-1/2 w-0.5 h-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                            style: {
                                background: `linear-gradient(to bottom, ${t.primaryLight}, ${t.primary})`,
                                boxShadow: `0 0 8px ${t.primary}`
                            }
                        }), c.jsx("div", {
                            className: "absolute -right-1 top-1/2 transform -translate-y-1/2 w-0.5 h-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                            style: {
                                background: `linear-gradient(to bottom, ${t.primaryLight}, ${t.primary})`,
                                boxShadow: `0 0 8px ${t.primary}`
                            }
                        })]
                    })
                })]
            })
        })
    },
    $5 = () => {
        const {
            getThemeColors: e
        } = $e(), t = e(), n = [{
            icon: c.jsx(cn, {
                size: 20
            }),
            title: "Undetected",
            description: "Fully undetected by games and the platform itself, giving you a safe experience with our utilities. Thanks to our dedicated developers constantly monitoring for detections and working proactively to maintain security, you can use our tools with confidence and peace of mind."
        }, {
            icon: c.jsx(rr, {
                size: 20
            }),
            title: "Stable",
            description: "A stable experience is provided by our utilities, with minimal crashes or issues. Our responsive support team actively receives reports of any problems to immediately notify our developers, ensuring quick resolutions and maintaining the highest quality standards for all users."
        }, {
            icon: c.jsx(k5, {
                size: 20
            }),
            title: "Performant",
            description: "Lightning-fast execution with exceptional performance optimization. Our utilities are engineered for speed and efficiency, delivering rapid results while maintaining minimal resource usage, so you can enjoy smooth operation without compromising your devices performance."
        }, {
            icon: c.jsx(F0, {
                size: 20
            }),
            title: "Script Support",
            description: "Amazing script support which allows you to run nearly every script available, with limitations only being the script itself and its current status. Any reports of scripts not working are addressed actively by our development team, ensuring maximum compatibility and functionality."
        }];
        return c.jsx("section", {
            id: "features",
            className: "py-16 px-4 sm:px-6 relative",
            children: c.jsxs("div", {
                className: "max-w-6xl mx-auto",
                children: [c.jsxs("div", {
                    className: "text-center mb-12",
                    children: [c.jsx("h2", {
                        className: "text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-orbitron",
                        style: {
                            color: t.primary,
                            textShadow: `0 0 30px ${t.primary}50`
                        },
                        children: "Why Choose Ronix Hub?"
                    }), c.jsx("p", {
                        className: "text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto",
                        children: "Here are some feautes, why you should choose Ronix."
                    })]
                }), c.jsx("div", {
                    className: "flex justify-center",
                    children: c.jsx("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl",
                        children: n.map((r, i) => c.jsxs("div", {
                            className: "group relative bg-black/30 backdrop-blur-sm rounded-2xl p-6 transition-all duration-500 border overflow-hidden hover:scale-[1.02]",
                            style: {
                                borderColor: `${t.primary}20`,
                                background: "linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.2))"
                            },
                            onMouseEnter: s => {
                                s.currentTarget.style.borderColor = t.primary, s.currentTarget.style.background = `linear-gradient(135deg, ${t.primary}08, rgba(0,0,0,0.3))`, s.currentTarget.style.boxShadow = `0 20px 40px ${t.primary}25`
                            },
                            onMouseLeave: s => {
                                s.currentTarget.style.borderColor = `${t.primary}20`, s.currentTarget.style.background = "linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.2))", s.currentTarget.style.boxShadow = "none"
                            },
                            children: [c.jsx("div", {
                                className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl",
                                style: {
                                    background: `linear-gradient(135deg, ${t.primary}10, transparent, ${t.primaryLight}10)`,
                                    filter: "blur(1px)"
                                }
                            }), c.jsxs("div", {
                                className: "relative z-10",
                                children: [c.jsx("div", {
                                    className: "relative mb-5",
                                    children: c.jsx("div", {
                                        className: "flex items-center justify-center w-12 h-12 border rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3",
                                        style: {
                                            backgroundColor: `${t.primary}10`,
                                            borderColor: `${t.primary}30`
                                        },
                                        onMouseEnter: s => {
                                            s.currentTarget.style.backgroundColor = `${t.primary}20`, s.currentTarget.style.borderColor = t.primary, s.currentTarget.style.boxShadow = `0 0 20px ${t.primary}40`
                                        },
                                        onMouseLeave: s => {
                                            s.currentTarget.style.backgroundColor = `${t.primary}10`, s.currentTarget.style.borderColor = `${t.primary}30`, s.currentTarget.style.boxShadow = "none"
                                        },
                                        children: c.jsx("div", {
                                            style: {
                                                color: t.primaryLight
                                            },
                                            className: "group-hover:text-white transition-colors duration-500",
                                            children: r.icon
                                        })
                                    })
                                }), c.jsx("h3", {
                                    className: "text-lg font-bold text-white mb-3 transition-colors duration-500",
                                    children: r.title
                                }), c.jsx("p", {
                                    className: "text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors duration-500 text-sm",
                                    children: r.description
                                })]
                            }), c.jsx("div", {
                                className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none",
                                style: {
                                    boxShadow: `0 25px 50px ${t.primary}20`
                                }
                            })]
                        }, i))
                    })
                })]
            })
        })
    },
    V5 = () => {
        const [e, t] = w.useState(null), {
            getThemeColors: n
        } = $e(), r = n(), i = [{
            question: "Is Ronix Hub safe to use?",
            answer: "Yes, Ronix Hub uses advanced anti-detection technology and is regularly updated to ensure maximum safety and security for all users."
        }, {
            question: "Which platforms are supported?",
            answer: "Ronix Hub supports Windows, macOS, iOS, and Android. Download the appropriate version for your device from the download page."
        }, {
            question: "Do I need to pay for Ronix Hub?",
            answer: "Ronix Hub offers both free and premium tiers. The free version includes core functionality, while premium unlocks advanced features and priority support."
        }, {
            question: "How do I get support?",
            answer: "Join our Discord community for instant support, updates, and to connect with other users. Our team is active and ready to help!"
        }], s = o => {
            t(e === o ? null : o)
        };
        return c.jsx("section", {
            id: "faq",
            className: "py-12 px-4 sm:px-6 relative",
            children: c.jsxs("div", {
                className: "max-w-3xl mx-auto",
                children: [c.jsxs("div", {
                    className: "text-center mb-10",
                    children: [c.jsx("h2", {
                        className: "text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-orbitron",
                        style: {
                            color: r.primary,
                            textShadow: `0 0 30px ${r.primary}50`
                        },
                        children: "Frequently Asked Questions"
                    }), c.jsx("p", {
                        className: "text-base sm:text-lg text-gray-300",
                        children: "Got questions? We've got answers. Find everything you need to know about Ronix."
                    })]
                }), c.jsx("div", {
                    className: "space-y-3",
                    children: i.map((o, a) => c.jsxs("div", {
                        className: `group relative bg-black/30 backdrop-blur-sm rounded-xl border transition-all duration-500 overflow-hidden ${e===a?"shadow-lg":""}`,
                        style: {
                            borderColor: e === a ? r.primary : `${r.primary}20`,
                            boxShadow: e === a ? `0 10px 25px ${r.primary}20` : void 0
                        },
                        children: [c.jsx("div", {
                            className: `absolute inset-0 transition-all duration-500 ${e===a?"opacity-100":"opacity-0"}`,
                            style: {
                                background: `linear-gradient(135deg, ${r.primary}03, transparent, ${r.primaryLight}03)`
                            }
                        }), c.jsxs("button", {
                            onClick: () => s(a),
                            className: "relative w-full flex items-center justify-between p-4 text-left transition-all duration-300",
                            children: [c.jsx("h3", {
                                className: "text-sm sm:text-base font-semibold pr-4 text-white",
                                children: o.question
                            }), c.jsx("div", {
                                className: `flex items-center justify-center w-7 h-7 rounded-lg border transition-all duration-500 flex-shrink-0 ${e===a?"rotate-180":""}`,
                                style: {
                                    borderColor: e === a ? r.primary : `${r.primary}30`,
                                    backgroundColor: e === a ? `${r.primary}15` : "transparent"
                                },
                                children: e === a ? c.jsx(T5, {
                                    size: 14,
                                    style: {
                                        color: r.primary
                                    }
                                }) : c.jsx(E5, {
                                    size: 14,
                                    style: {
                                        color: r.primaryLight
                                    }
                                })
                            })]
                        }), c.jsx("div", {
                            className: `transition-all duration-500 ease-in-out overflow-hidden ${e===a?"max-h-40 opacity-100":"max-h-0 opacity-0"}`,
                            children: c.jsx("div", {
                                className: "px-4 pb-4",
                                children: c.jsx("div", {
                                    className: "border-t pt-3",
                                    style: {
                                        borderColor: `${r.primary}15`
                                    },
                                    children: c.jsx("div", {
                                        className: `transform transition-all duration-500 ${e===a?"translate-y-0 scale-100":"translate-y-2 scale-95"}`,
                                        children: c.jsx("p", {
                                            className: "text-gray-300 leading-relaxed text-xs sm:text-sm",
                                            children: o.answer
                                        })
                                    })
                                })
                            })
                        })]
                    }, a))
                })]
            })
        })
    },
    ki = () => {
        const {
            getThemeColors: e
        } = $e(), t = e(), n = () => {
            window.open("https://discord.com/invite/ronix", "_blank")
        }, r = {
            "Quick Links": ["Features", "Download"]
        };
        return c.jsxs("footer", {
            className: "bg-black/95 border-t py-8 px-4 sm:px-6 relative overflow-hidden",
            style: {
                borderColor: `${t.primary}20`
            },
            children: [c.jsx("div", {
                className: "absolute inset-0 opacity-30",
                style: {
                    background: `linear-gradient(135deg, ${t.primary}05, transparent, ${t.primaryLight}05)`
                }
            }), c.jsxs("div", {
                className: "max-w-6xl mx-auto relative z-10",
                children: [c.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6",
                    children: [c.jsxs("div", {
                        className: "lg:col-span-1",
                        children: [c.jsx("h3", {
                            className: "font-orbitron font-black text-2xl sm:text-3xl mb-3",
                            style: {
                                color: t.primary,
                                textShadow: `0 0 20px ${t.primary}50`
                            },
                            children: "RONIX"
                        }), c.jsx("p", {
                            className: "text-gray-300 mb-4 leading-relaxed text-sm font-orbitron",
                            children: "A Roblox Utility"
                        }), c.jsx("div", {
                            className: "flex space-x-3",
                            children: c.jsx("button", {
                                onClick: n,
                                className: "flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 hover:scale-110 border group",
                                style: {
                                    backgroundColor: `${t.primary}15`,
                                    borderColor: `${t.primary}30`
                                },
                                onMouseEnter: i => {
                                    i.currentTarget.style.backgroundColor = t.primary, i.currentTarget.style.borderColor = t.primary, i.currentTarget.style.boxShadow = `0 0 20px ${t.primary}50`
                                },
                                onMouseLeave: i => {
                                    i.currentTarget.style.backgroundColor = `${t.primary}15`, i.currentTarget.style.borderColor = `${t.primary}30`, i.currentTarget.style.boxShadow = "none"
                                },
                                children: c.jsx(Us, {
                                    className: "text-gray-300 group-hover:text-white transition-colors duration-300",
                                    size: 16
                                })
                            })
                        })]
                    }), Object.entries(r).map(([i, s]) => c.jsxs("div", {
                        children: [c.jsx("h4", {
                            className: "text-white font-semibold mb-3 text-sm uppercase tracking-wide font-orbitron",
                            style: {
                                color: t.primaryLight
                            },
                            children: i
                        }), c.jsx("ul", {
                            className: "space-y-2",
                            children: s.map(o => c.jsx("li", {
                                children: c.jsxs("button", {
                                    onClick: o === "Discord" ? n : void 0,
                                    className: "text-gray-400 hover:text-white transition-all duration-300 text-sm relative group inline-block font-orbitron cursor-pointer",
                                    children: [c.jsx("span", {
                                        className: "relative z-10",
                                        children: o
                                    }), c.jsx("span", {
                                        className: "absolute -bottom-0.5 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full",
                                        style: {
                                            background: `linear-gradient(90deg, ${t.primaryLight}, ${t.primary}, ${t.primaryLight})`,
                                            boxShadow: `0 0 6px ${t.primary}60`
                                        }
                                    })]
                                })
                            }, o))
                        })]
                    }, i))]
                }), c.jsxs("div", {
                    className: "border-t pt-4 flex flex-col lg:flex-row justify-between items-center gap-3",
                    style: {
                        borderColor: `${t.primary}20`
                    },
                    children: [c.jsx("div", {
                        className: "text-gray-400 text-sm font-orbitron text-center lg:text-left",
                        children: "© 2025 Ronix Hub. All rights reserved."
                    }), c.jsxs("div", {
                        className: "flex flex-col sm:flex-row items-center gap-3 sm:gap-4",
                        children: [c.jsxs("div", {
                            className: "text-gray-400 text-sm font-orbitron text-center",
                            children: ["Designed by", " ", c.jsxs("a", {
                                href: "https://github.com/AdvanceFTeam",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "transition-all duration-300 hover:scale-105 relative group",
                                style: {
                                    color: t.primary
                                },
                                onMouseEnter: i => {
                                    i.currentTarget.style.color = t.primaryLight, i.currentTarget.style.textShadow = `0 0 10px ${t.primary}60`
                                },
                                onMouseLeave: i => {
                                    i.currentTarget.style.color = t.primary, i.currentTarget.style.textShadow = "none"
                                },
                                children: ["AdvanceFalling Team", c.jsx("span", {
                                    className: "absolute -bottom-0.5 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full",
                                    style: {
                                        background: `linear-gradient(90deg, ${t.primaryLight}, ${t.primary}, ${t.primaryLight})`,
                                        boxShadow: `0 0 6px ${t.primary}60`
                                    }
                                })]
                            })]
                        }), c.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [c.jsx("div", {
                                className: "w-2 h-2 rounded-full animate-pulse",
                                style: {
                                    backgroundColor: t.primary
                                }
                            }), c.jsxs("div", {
                                className: "flex items-center space-x-2 text-gray-400 text-sm font-orbitron",
                                children: [c.jsx(f5, {
                                    className: "animate-spin",
                                    style: {
                                        color: t.primaryLight,
                                        animationDuration: "3s"
                                    },
                                    size: 16
                                }), c.jsx("span", {
                                    children: "React"
                                })]
                            })]
                        })]
                    })]
                })]
            })]
        })
    },
    U0 = ({
        message: e,
        isVisible: t,
        onClose: n
    }) => {
        const {
            getThemeColors: r
        } = $e(), i = r();
        return w.useEffect(() => {
            if (t) {
                const s = setTimeout(() => {
                    n()
                }, 3e3);
                return () => clearTimeout(s)
            }
        }, [t, n]), t ? c.jsx("div", {
            className: "fixed top-4 right-4 z-50 animate-slideDown",
            children: c.jsxs("div", {
                className: "flex items-center gap-3 bg-black/90 backdrop-blur-sm border rounded-xl p-4 min-w-[300px] shadow-lg",
                style: {
                    borderColor: `${i.primary}60`,
                    boxShadow: `0 10px 30px ${i.primary}30`
                },
                children: [c.jsx("div", {
                    className: "flex items-center justify-center w-8 h-8 rounded-full",
                    style: {
                        backgroundColor: `${i.primary}20`
                    },
                    children: c.jsx(V0, {
                        size: 18,
                        style: {
                            color: i.primary
                        }
                    })
                }), c.jsx("div", {
                    className: "flex-1",
                    children: c.jsx("p", {
                        className: "text-white font-medium text-sm",
                        children: e
                    })
                }), c.jsx("button", {
                    onClick: n,
                    className: "flex items-center justify-center w-6 h-6 rounded-full transition-all duration-200 hover:bg-white/10",
                    children: c.jsx(Ws, {
                        size: 14,
                        className: "text-gray-400 hover:text-white"
                    })
                })]
            })
        }) : null
    },
    F5 = () => {
        const [e, t] = xv();
        mu();
        const [n, r] = w.useState("android"), [i, s] = w.useState(!1), [o, a] = w.useState(!1), [l, u] = w.useState(""), [d, f] = w.useState(!1), {
            getThemeColors: h
        } = $e(), p = h(), x = [{
            id: "windows",
            name: "Windows",
            icon: c.jsx(h5, {
                size: 18
            }),
            version: "v.1.0.0",
            status: "W.I.P",
            statusColor: "#F59E0B"
        }, {
            id: "macos",
            name: "macOS",
            icon: c.jsx(Af, {
                size: 18
            }),
            version: "v.1.0.0",
            status: "Released",
            statusColor: "#10B981"
        }, {
            id: "ios",
            name: "iOS",
            icon: c.jsx(Af, {
                size: 18
            }),
            version: "v.1.0.0",
            status: "W.I.P",
            statusColor: "#F59E0B"
        }, {
            id: "android",
            name: "Android",
            icon: c.jsx(u5, {
                size: 18
            }),
            version: "v.1.0.0",
            status: "Released",
            statusColor: "#10B981"
        }];
        w.useEffect(() => {
            const C = e.get("platform");
            C && x.some(T => T.id === C) ? r(C) : C || t({
                platform: "android"
            })
        }, [e, t]);
        const v = x.find(C => C.id === n),
            S = x.filter(C => C.id !== n),
            y = 'cd ~/ && curl -s "https://raw.githubusercontent.com/Nexus42Dev/RonixMac/refs/heads/main/install.sh" | bash </dev/tty',
            m = C => {
                f(!0), t({
                    platform: C
                }), setTimeout(() => {
                    r(C), s(!1), setTimeout(() => {
                        f(!1)
                    }, 150)
                }, 150)
            },
            g = () => {
                n === "macos" ? (navigator.clipboard.writeText(y), u("Installation command copied to clipboard!")) : n === "android" ? (window.open("https://loot-link.com/s?wRE8XUuO", "_blank"), u("Redirecting to Android installation...")) : u(`${v==null?void 0:v.name} is currently ${v==null?void 0:v.status.toLowerCase()}`), a(!0)
            },
            j = (() => {
                switch (n) {
                    case "android":
                        return [{
                            icon: c.jsx(cn, {
                                size: 16
                            }),
                            text: "100% UNC"
                        }, {
                            icon: c.jsx(rr, {
                                size: 16
                            }),
                            text: "100% rUNC"
                        }, {
                            icon: c.jsx(gl, {
                                size: 16
                            }),
                            text: "Free with Key"
                        }, {
                            icon: c.jsx(j5, {
                                size: 16
                            }),
                            text: "Undetected and Stable"
                        }];
                    case "macos":
                        return [{
                            icon: c.jsx(cn, {
                                size: 16
                            }),
                            text: "98% UNC"
                        }];
                    default:
                        return [{
                            icon: c.jsx(cn, {
                                size: 16
                            }),
                            text: "N/A"
                        }, {
                            icon: c.jsx(rr, {
                                size: 16
                            }),
                            text: "N/A"
                        }, {
                            icon: c.jsx(L5, {
                                size: 16
                            }),
                            text: "N/A"
                        }, {
                            icon: c.jsx(gl, {
                                size: 16
                            }),
                            text: "N/A"
                        }]
                }
            })();
        return c.jsxs(c.Fragment, {
            children: [c.jsx(U0, {
                message: l,
                isVisible: o,
                onClose: () => a(!1)
            }), c.jsx("section", {
                className: "min-h-screen flex items-center justify-center relative overflow-hidden pt-32 pb-12 px-4 sm:px-6",
                children: c.jsxs("div", {
                    className: "text-center z-10 max-w-4xl mx-auto w-full",
                    children: [c.jsxs("div", {
                        className: "mb-8",
                        children: [c.jsx("h1", {
                            className: "font-orbitron font-black text-3xl sm:text-4xl md:text-5xl mb-6",
                            style: {
                                color: p.primary,
                                textShadow: `0 0 30px ${p.primary}50`
                            },
                            children: "Download Ronix"
                        }), c.jsx("p", {
                            className: "text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto",
                            children: "Choose your platform and download the utility you want."
                        })]
                    }), c.jsx("div", {
                        className: "mb-12 animate-float",
                        children: c.jsxs("div", {
                            className: "relative max-w-2xl mx-auto",
                            children: [c.jsx("img", {
                                src: "https://files.catbox.moe/puvtcw.png",
                                alt: "Ronix Banner",
                                className: "w-full h-auto rounded-2xl shadow-2xl border",
                                style: {
                                    borderColor: `${p.primary}30`,
                                    boxShadow: `0 25px 50px ${p.primary}20, 0 0 100px ${p.primary}10`,
                                    maxHeight: "300px",
                                    objectFit: "contain"
                                }
                            }), c.jsx("div", {
                                className: "absolute inset-0 rounded-2xl blur-2xl opacity-30 -z-10",
                                style: {
                                    background: `linear-gradient(135deg, ${p.primary}40, ${p.primaryLight}30, ${p.primary}40)`,
                                    transform: "scale(1.1)"
                                }
                            })]
                        })
                    }), c.jsx("div", {
                        className: "max-w-lg mx-auto mb-12",
                        children: c.jsxs("div", {
                            className: "bg-black/40 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:border-opacity-60",
                            style: {
                                borderColor: `${p.primary}30`,
                                background: "linear-gradient(135deg, rgba(0,0,0,0.5), rgba(0,0,0,0.3))"
                            },
                            children: [c.jsxs("div", {
                                className: "mb-6",
                                children: [c.jsx("label", {
                                    className: "block text-white font-medium mb-3 text-left text-sm",
                                    children: "Select Platform"
                                }), c.jsxs("div", {
                                    className: "relative",
                                    children: [c.jsxs("button", {
                                        onClick: () => s(!i),
                                        className: "w-full flex items-center justify-between p-3 bg-black/50 border rounded-xl text-left transition-all duration-300",
                                        style: {
                                            borderColor: `${p.primary}30`
                                        },
                                        onMouseEnter: C => {
                                            C.currentTarget.style.borderColor = `${p.primary}60`, C.currentTarget.style.backgroundColor = `${p.primary}05`
                                        },
                                        onMouseLeave: C => {
                                            C.currentTarget.style.borderColor = `${p.primary}30`, C.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
                                        },
                                        children: [c.jsxs("div", {
                                            className: `flex items-center space-x-3 transition-all duration-300 ${d?"opacity-0 scale-95":"opacity-100 scale-100"}`,
                                            children: [c.jsx("div", {
                                                className: "flex items-center justify-center w-8 h-8 rounded-lg",
                                                style: {
                                                    color: p.primaryLight,
                                                    backgroundColor: `${p.primary}15`
                                                },
                                                children: v == null ? void 0 : v.icon
                                            }), c.jsxs("div", {
                                                children: [c.jsxs("div", {
                                                    className: "flex items-center space-x-2",
                                                    children: [c.jsx("span", {
                                                        className: "text-white font-medium text-sm",
                                                        children: v == null ? void 0 : v.name
                                                    }), c.jsx("span", {
                                                        className: "text-xs px-2 py-0.5 rounded-full font-medium",
                                                        style: {
                                                            backgroundColor: `${v==null?void 0:v.statusColor}20`,
                                                            color: v == null ? void 0 : v.statusColor
                                                        },
                                                        children: v == null ? void 0 : v.status
                                                    })]
                                                }), c.jsx("div", {
                                                    className: "text-gray-400 text-xs",
                                                    children: v == null ? void 0 : v.version
                                                })]
                                            })]
                                        }), c.jsx(v5, {
                                            className: `transform transition-transform duration-300 ${i?"rotate-180":""}`,
                                            style: {
                                                color: p.primaryLight
                                            },
                                            size: 18
                                        })]
                                    }), i && c.jsx("div", {
                                        className: "absolute bottom-full left-0 right-0 mb-2 bg-black/95 backdrop-blur-sm border rounded-xl overflow-hidden z-20 animate-slideDown",
                                        style: {
                                            borderColor: `${p.primary}30`
                                        },
                                        children: S.map(C => c.jsxs("button", {
                                            onClick: () => m(C.id),
                                            className: "w-full flex items-center space-x-3 p-3 text-left transition-all duration-300 hover:bg-white/5",
                                            children: [c.jsx("div", {
                                                className: "flex items-center justify-center w-7 h-7 rounded-lg",
                                                style: {
                                                    color: p.primaryLight,
                                                    backgroundColor: `${p.primary}15`
                                                },
                                                children: C.icon
                                            }), c.jsxs("div", {
                                                className: "flex-1",
                                                children: [c.jsxs("div", {
                                                    className: "flex items-center space-x-2",
                                                    children: [c.jsx("span", {
                                                        className: "text-white font-medium text-sm",
                                                        children: C.name
                                                    }), c.jsx("span", {
                                                        className: "text-xs px-2 py-0.5 rounded-full font-medium",
                                                        style: {
                                                            backgroundColor: `${C.statusColor}20`,
                                                            color: C.statusColor
                                                        },
                                                        children: C.status
                                                    })]
                                                }), c.jsx("div", {
                                                    className: "text-gray-400 text-xs",
                                                    children: C.version
                                                })]
                                            })]
                                        }, C.id))
                                    })]
                                })]
                            }), n === "macos" && c.jsxs("div", {
                                className: `mb-6 p-5 bg-black/30 rounded-xl border transition-all duration-300 ${d?"opacity-0 scale-95":"opacity-100 scale-100"}`,
                                style: {
                                    borderColor: `${p.primary}20`
                                },
                                children: [c.jsxs("div", {
                                    className: "flex items-center gap-3 mb-4",
                                    children: [c.jsx("div", {
                                        className: "flex items-center justify-center w-10 h-10 rounded-xl",
                                        style: {
                                            backgroundColor: `${p.primary}15`,
                                            color: p.primary
                                        },
                                        children: c.jsx(M5, {
                                            size: 20
                                        })
                                    }), c.jsxs("div", {
                                        children: [c.jsx("h4", {
                                            className: "text-white font-semibold text-base",
                                            children: "Installation Setup"
                                        }), c.jsx("p", {
                                            className: "text-gray-400 text-sm",
                                            children: "Run this command in Terminal"
                                        })]
                                    })]
                                }), c.jsxs("div", {
                                    className: "bg-black/60 p-4 rounded-lg border font-mono text-sm text-gray-300 cursor-pointer hover:bg-black/70 transition-all duration-200 group relative overflow-hidden max-h-32",
                                    style: {
                                        borderColor: `${p.primary}30`
                                    },
                                    onClick: () => {
                                        navigator.clipboard.writeText(y), u("Command copied to clipboard!"), a(!0)
                                    },
                                    children: [c.jsxs("div", {
                                        className: "flex items-start justify-between gap-3",
                                        children: [c.jsx("div", {
                                            className: "flex-1 overflow-y-auto custom-scrollbar max-h-24",
                                            children: c.jsx("code", {
                                                className: "break-all leading-relaxed block",
                                                children: y
                                            })
                                        }), c.jsx("div", {
                                            className: "flex items-center justify-center w-8 h-8 rounded-lg border transition-all duration-200 group-hover:scale-110 flex-shrink-0",
                                            style: {
                                                borderColor: `${p.primary}40`,
                                                backgroundColor: `${p.primary}10`
                                            },
                                            children: c.jsx(z0, {
                                                size: 14,
                                                style: {
                                                    color: p.primaryLight
                                                }
                                            })
                                        })]
                                    }), c.jsx("div", {
                                        className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg",
                                        style: {
                                            background: `linear-gradient(135deg, ${p.primary}05, transparent, ${p.primaryLight}05)`
                                        }
                                    })]
                                }), c.jsxs("div", {
                                    className: "mt-3 flex items-center gap-2 text-xs text-gray-400",
                                    children: [c.jsx("div", {
                                        className: "w-2 h-2 rounded-full",
                                        style: {
                                            backgroundColor: p.primary
                                        }
                                    }), c.jsx("span", {
                                        children: "Click the code block above to copy"
                                    })]
                                })]
                            }), c.jsxs("button", {
                                onClick: g,
                                disabled: (v == null ? void 0 : v.status) === "Discontinued" || (v == null ? void 0 : v.status) === "W.I.P",
                                className: "w-full flex items-center justify-center gap-3 text-white px-6 py-3 rounded-xl font-semibold text-base transition-all duration-500 group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed",
                                style: {
                                    background: (v == null ? void 0 : v.status) === "Discontinued" || (v == null ? void 0 : v.status) === "W.I.P" ? "#6B7280" : `linear-gradient(135deg, ${p.primary}, ${p.primaryDark})`,
                                    boxShadow: (v == null ? void 0 : v.status) === "Discontinued" || (v == null ? void 0 : v.status) === "W.I.P" ? "none" : `0 8px 25px ${p.primary}30`
                                },
                                children: [c.jsx("div", {
                                    className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500",
                                    style: {
                                        background: `linear-gradient(135deg, ${p.primaryLight}, ${p.primary}, ${p.primaryLight})`
                                    }
                                }), c.jsx("div", {
                                    className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700",
                                    style: {
                                        background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)",
                                        transform: "translateX(-100%)",
                                        animation: "shimmer 1.5s ease-in-out infinite"
                                    }
                                }), c.jsx("div", {
                                    className: "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300",
                                    children: c.jsx("div", {
                                        className: "absolute inset-0 rounded-xl animate-ping",
                                        style: {
                                            background: `linear-gradient(135deg, ${p.primary}40, transparent)`,
                                            animationDuration: "2s"
                                        }
                                    })
                                }), c.jsxs("div", {
                                    className: `relative z-10 flex items-center gap-3 transition-all duration-300 ${d?"opacity-0 scale-95":"opacity-100 scale-100"}`,
                                    children: [c.jsx("div", {
                                        className: "flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 group-hover:rotate-12",
                                        style: {
                                            background: "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))",
                                            boxShadow: `0 0 15px ${p.primary}60`
                                        },
                                        children: c.jsx(_0, {
                                            size: 16,
                                            className: "text-white drop-shadow-lg"
                                        })
                                    }), c.jsx("span", {
                                        className: "font-semibold tracking-wide",
                                        children: n === "macos" ? "Copy Install Command" : (v == null ? void 0 : v.status) === "Discontinued" ? "Discontinued" : (v == null ? void 0 : v.status) === "W.I.P" ? "In Development" : `Download for ${v==null?void 0:v.name}`
                                    })]
                                }), c.jsx("div", {
                                    className: "absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                    style: {
                                        background: `linear-gradient(to right, transparent, ${p.primary}, transparent)`,
                                        boxShadow: `0 0 10px ${p.primary}`
                                    }
                                })]
                            })]
                        })
                    }), c.jsx("div", {
                        className: "max-w-2xl mx-auto",
                        children: c.jsxs("div", {
                            className: "bg-black/30 backdrop-blur-sm rounded-2xl p-6 border",
                            style: {
                                borderColor: `${p.primary}20`
                            },
                            children: [c.jsx("h3", {
                                className: "font-semibold mb-6 text-lg text-center",
                                style: {
                                    color: p.primary
                                },
                                children: "Features"
                            }), c.jsx("div", {
                                className: `grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-300 ${d?"opacity-0 scale-95":"opacity-100 scale-100"}`,
                                children: j.map((C, T) => c.jsxs("div", {
                                    className: "flex items-center space-x-3 group p-3 rounded-xl transition-all duration-300 hover:bg-white/5",
                                    children: [c.jsx("div", {
                                        className: "flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300 group-hover:scale-110",
                                        style: {
                                            backgroundColor: `${p.primary}15`,
                                            color: p.primaryLight
                                        },
                                        children: C.icon
                                    }), c.jsx("span", {
                                        className: "text-gray-300 group-hover:text-white transition-colors duration-300 text-sm font-medium",
                                        children: C.text
                                    })]
                                }, T))
                            })]
                        })
                    })]
                })
            }), c.jsx(ki, {})]
        })
    },
    z5 = () => {
        const [e, t] = w.useState(!1), {
            getThemeColors: n
        } = $e(), r = n(), i = 'loadstring(game:HttpGet("https://api.luarmor.net/files/v3/loaders/7d8a2a1a9a562a403b52532e58a14065.lua"))()', s = [{
            name: "Dead Rails",
            thumbnail: "https://tr.rbxcdn.com/180DAY-f1fc69ef143ef773afb49f5b9f739e77/500/280/Image/Jpeg/noFilter",
            url: "https://www.roblox.com/games/116495829188952"
        }, {
            name: "Steal a Brainrot",
            thumbnail: "https://tr.rbxcdn.com/180DAY-ed9d6bce77bef487c201322fd2c26812/512/512/Image/Webp/noFilter",
            url: "https://www.roblox.com/games/109983668079237"
        }, {
            name: "Grow a Garden",
            thumbnail: "https://tr.rbxcdn.com/180DAY-c010566cf71816eb7b727ecf935d6e67/768/432/Image/Webp/noFilter",
            url: "https://www.roblox.com/games/126884695634066"
        }, {
            name: "Bloxfruits",
            thumbnail: "https://tr.rbxcdn.com/180DAY-e1ce51abae5188805c3fee78ec7f4d08/768/432/Image/Webp/noFilter",
            url: "https://www.roblox.com/games/2753915549"
        }, {
            name: "DIG",
            thumbnail: "https://static.beebom.com/wp-content/uploads/2025/06/Roblox-Dig-Release-Date-and-Time-event-page-image.jpg?quality=75&strip=all",
            url: "https://www.roblox.com/games/126244816328678"
        }], o = () => {
            navigator.clipboard.writeText(i), t(!0)
        }, a = l => {
            window.open(l, "_blank")
        };
        return c.jsxs(c.Fragment, {
            children: [c.jsx(U0, {
                message: "Script copied to clipboard!",
                isVisible: e,
                onClose: () => t(!1)
            }), c.jsx("section", {
                className: "min-h-screen flex items-center justify-center relative overflow-hidden pt-32 pb-12 px-4 sm:px-6",
                children: c.jsxs("div", {
                    className: "text-center z-10 max-w-5xl mx-auto w-full",
                    children: [c.jsxs("div", {
                        className: "mb-12",
                        children: [c.jsx("h1", {
                            className: "font-orbitron font-black text-3xl sm:text-4xl md:text-5xl mb-6",
                            style: {
                                color: r.primary,
                                textShadow: `0 0 30px ${r.primary}50`
                            },
                            children: "Ronix Script"
                        }), c.jsx("p", {
                            className: "text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto",
                            children: "Copy our script and execute it in your Roblox executor."
                        })]
                    }), c.jsx("div", {
                        className: "max-w-3xl mx-auto mb-12",
                        children: c.jsxs("div", {
                            className: "bg-black/40 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300",
                            style: {
                                borderColor: `${r.primary}30`,
                                background: "linear-gradient(135deg, rgba(0,0,0,0.5), rgba(0,0,0,0.3))"
                            },
                            children: [c.jsxs("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [c.jsxs("h3", {
                                    className: "font-semibold text-lg flex items-center gap-2",
                                    style: {
                                        color: r.primary
                                    },
                                    children: [c.jsx(F0, {
                                        size: 20
                                    }), "Ronix Script"]
                                }), c.jsxs("div", {
                                    className: "flex items-center gap-2 text-sm text-gray-400",
                                    children: [c.jsx(P5, {
                                        size: 14
                                    }), c.jsx("span", {
                                        children: "Ready to Execute"
                                    })]
                                })]
                            }), c.jsxs("div", {
                                className: "bg-black/60 p-4 rounded-lg border font-mono text-sm text-gray-300 mb-4 relative group max-h-32 overflow-hidden",
                                style: {
                                    borderColor: `${r.primary}20`
                                },
                                children: [c.jsx("div", {
                                    className: "absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200",
                                    children: c.jsx("div", {
                                        className: "w-2 h-2 rounded-full animate-pulse",
                                        style: {
                                            backgroundColor: r.primary
                                        }
                                    })
                                }), c.jsx("div", {
                                    className: "overflow-y-auto custom-scrollbar max-h-24",
                                    children: c.jsx("code", {
                                        className: "break-all leading-relaxed block",
                                        children: i
                                    })
                                })]
                            }), c.jsxs("button", {
                                onClick: o,
                                className: "w-full flex items-center justify-center gap-3 text-white px-6 py-3 rounded-xl font-semibold text-base transition-all duration-700 group relative overflow-hidden",
                                style: {
                                    background: `linear-gradient(135deg, ${r.primary}, ${r.primaryDark})`,
                                    boxShadow: `0 8px 25px ${r.primary}30`
                                },
                                children: [c.jsx("div", {
                                    className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700",
                                    style: {
                                        background: `linear-gradient(135deg, ${r.primaryLight}, ${r.primary}, ${r.primaryLight})`
                                    }
                                }), c.jsx("div", {
                                    className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000",
                                    style: {
                                        background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)",
                                        transform: "translateX(-100%)",
                                        animation: "shimmer 2s ease-in-out infinite"
                                    }
                                }), c.jsx("div", {
                                    className: "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500",
                                    children: c.jsx("div", {
                                        className: "absolute inset-0 rounded-xl animate-ping",
                                        style: {
                                            background: `linear-gradient(135deg, ${r.primary}30, transparent)`,
                                            animationDuration: "2.5s"
                                        }
                                    })
                                }), c.jsxs("div", {
                                    className: "relative z-10 flex items-center gap-3 group-hover:scale-105 transition-transform duration-500",
                                    children: [c.jsx("div", {
                                        className: "flex items-center justify-center w-8 h-8 rounded-full transition-all duration-500 group-hover:rotate-12",
                                        style: {
                                            background: "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))",
                                            boxShadow: `0 0 15px ${r.primary}60`
                                        },
                                        children: c.jsx(z0, {
                                            size: 16,
                                            className: "text-white drop-shadow-lg"
                                        })
                                    }), c.jsx("span", {
                                        className: "font-semibold tracking-wide",
                                        children: "Copy Script"
                                    })]
                                }), c.jsx("div", {
                                    className: "absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                                    style: {
                                        background: `linear-gradient(to right, transparent, ${r.primary}, transparent)`,
                                        boxShadow: `0 0 10px ${r.primary}`
                                    }
                                })]
                            })]
                        })
                    }), c.jsx("div", {
                        className: "max-w-4xl mx-auto",
                        children: c.jsxs("div", {
                            className: "bg-black/30 backdrop-blur-sm rounded-2xl p-6 border",
                            style: {
                                borderColor: `${r.primary}20`
                            },
                            children: [c.jsxs("h3", {
                                className: "font-semibold mb-6 text-lg text-center flex items-center justify-center gap-2",
                                style: {
                                    color: r.primary
                                },
                                children: [c.jsx(gl, {
                                    size: 20
                                }), "Supported Games"]
                            }), c.jsx("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
                                children: s.map((l, u) => c.jsxs("div", {
                                    className: "group relative bg-black/40 rounded-xl p-4 border transition-all duration-300 hover:scale-105 overflow-hidden cursor-pointer",
                                    style: {
                                        borderColor: `${r.primary}20`
                                    },
                                    onClick: () => a(l.url),
                                    onMouseEnter: d => {
                                        d.currentTarget.style.borderColor = `${r.primary}60`, d.currentTarget.style.background = `linear-gradient(135deg, ${r.primary}08, rgba(0,0,0,0.4))`
                                    },
                                    onMouseLeave: d => {
                                        d.currentTarget.style.borderColor = `${r.primary}20`, d.currentTarget.style.background = "rgba(0, 0, 0, 0.4)"
                                    },
                                    children: [c.jsx("div", {
                                        className: "w-full h-32 rounded-lg mb-3 flex items-center justify-center border overflow-hidden",
                                        style: {
                                            backgroundColor: "rgba(0, 0, 0, 0.6)",
                                            borderColor: `${r.primary}30`
                                        },
                                        children: l.thumbnail ? c.jsx("img", {
                                            src: l.thumbnail,
                                            alt: l.name,
                                            className: "w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110",
                                            style: {
                                                objectFit: "cover"
                                            }
                                        }) : c.jsx("div", {
                                            className: "text-gray-500 text-sm",
                                            children: "No Image"
                                        })
                                    }), c.jsxs("div", {
                                        className: "flex items-center justify-between",
                                        children: [c.jsx("h4", {
                                            className: "text-white font-medium text-sm group-hover:text-gray-100 transition-colors duration-300",
                                            children: l.name
                                        }), c.jsx("div", {
                                            className: "flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300 group-hover:scale-110",
                                            style: {
                                                backgroundColor: `${r.primary}20`
                                            },
                                            children: c.jsx(V0, {
                                                size: 12,
                                                style: {
                                                    color: r.primaryLight
                                                }
                                            })
                                        })]
                                    }), c.jsx("div", {
                                        className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none",
                                        style: {
                                            boxShadow: `0 15px 30px ${r.primary}20`
                                        }
                                    })]
                                }, u))
                            }), c.jsx("div", {
                                className: "mt-6 p-4 bg-black/20 rounded-xl border",
                                style: {
                                    borderColor: `${r.primary}15`
                                },
                                children: c.jsx("p", {
                                    className: "text-gray-300 text-sm text-center",
                                    children: "Copy the script above and paste it into your executor that supported these games."
                                })
                            })]
                        })
                    })]
                })
            }), c.jsx(ki, {})]
        })
    },
    _5 = ({
        isVisible: e,
        onClose: t,
        onConfirm: n,
        providerName: r
    }) => {
        const {
            getThemeColors: i
        } = $e(), s = i();
        return w.useEffect(() => (e ? (document.body.style.overflow = "hidden", window.scrollTo({
            top: 0,
            behavior: "instant"
        })) : document.body.style.overflow = "", () => {
            document.body.style.overflow = ""
        }), [e]), e ? c.jsxs("div", {
            className: "fixed inset-0 z-[9999] flex items-start justify-center pt-80 p-4 overflow-auto",
            children: [c.jsx("div", {
                className: "absolute inset-0 bg-black/85 backdrop-blur-sm",
                onClick: t
            }), c.jsxs("div", {
                className: "relative bg-black/95 backdrop-blur-md border rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto animate-slideDown shadow-2xl",
                style: {
                    borderColor: `${s.primary}40`,
                    boxShadow: `0 25px 50px ${s.primary}30, 0 0 100px ${s.primary}20`
                },
                children: [c.jsxs("div", {
                    className: "flex items-center justify-between mb-6",
                    children: [c.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [c.jsx("div", {
                            className: "w-10 h-10 rounded-xl border flex items-center justify-center",
                            style: {
                                borderColor: `${s.primary}40`,
                                backgroundColor: `${s.primary}15`
                            },
                            children: c.jsx(y5, {
                                size: 20,
                                style: {
                                    color: s.primary
                                }
                            })
                        }), c.jsxs("div", {
                            children: [c.jsx("h3", {
                                className: "font-orbitron font-bold text-lg",
                                style: {
                                    color: s.primary
                                },
                                children: "Key Information"
                            }), c.jsxs("p", {
                                className: "text-gray-400 text-sm",
                                children: ["Provider: ", r]
                            })]
                        })]
                    }), c.jsx("button", {
                        onClick: t,
                        className: "flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 hover:bg-white/10",
                        children: c.jsx(Ws, {
                            size: 16,
                            style: {
                                color: s.primaryLight
                            }
                        })
                    })]
                }), c.jsxs("div", {
                    className: "mb-6",
                    children: [c.jsxs("div", {
                        className: "bg-black/40 border rounded-xl p-4 mb-4",
                        style: {
                            borderColor: `${s.primary}20`
                        },
                        children: [c.jsxs("div", {
                            className: "flex items-center gap-3 mb-3",
                            children: [c.jsx("div", {
                                className: "w-8 h-8 rounded-lg border flex items-center justify-center",
                                style: {
                                    borderColor: `${s.primary}40`,
                                    backgroundColor: `${s.primary}15`
                                },
                                children: c.jsx(O0, {
                                    size: 16,
                                    style: {
                                        color: s.primary
                                    }
                                })
                            }), c.jsxs("div", {
                                children: [c.jsx("h4", {
                                    className: "text-white font-semibold",
                                    children: "Ronix Hub Access Key"
                                }), c.jsx("p", {
                                    className: "text-gray-400 text-sm",
                                    children: "Secure authentication key"
                                })]
                            })]
                        }), c.jsx("div", {
                            className: "border-t pt-3",
                            style: {
                                borderColor: `${s.primary}15`
                            },
                            children: c.jsxs("p", {
                                className: "text-gray-300 text-sm leading-relaxed",
                                children: ["This key is specifically for ", c.jsx("strong", {
                                    style: {
                                        color: s.primary
                                    },
                                    children: "Ronix Hub."
                                })]
                            })
                        })]
                    }), c.jsx("div", {
                        className: "space-y-3",
                        children: ["Works for Ronix Hub", "Easy & Fast"].map((o, a) => c.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [c.jsx("div", {
                                className: "w-2 h-2 rounded-full",
                                style: {
                                    backgroundColor: "#10B981"
                                }
                            }), c.jsx("span", {
                                className: "text-gray-300 text-sm",
                                children: o
                            })]
                        }, a))
                    })]
                }), c.jsxs("div", {
                    className: "flex gap-3",
                    children: [c.jsx("button", {
                        onClick: t,
                        className: "flex-1 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 border",
                        style: {
                            borderColor: `${s.primary}30`,
                            backgroundColor: "rgba(0, 0, 0, 0.4)",
                            color: s.primaryLight
                        },
                        onMouseEnter: o => {
                            o.currentTarget.style.borderColor = `${s.primary}60`, o.currentTarget.style.backgroundColor = `${s.primary}10`
                        },
                        onMouseLeave: o => {
                            o.currentTarget.style.borderColor = `${s.primary}30`, o.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.4)"
                        },
                        children: "Cancel"
                    }), c.jsxs("button", {
                        onClick: n,
                        className: "flex-1 flex items-center justify-center gap-2 text-white px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-500 group relative overflow-hidden",
                        style: {
                            background: `linear-gradient(135deg, ${s.primary}, ${s.primaryDark})`,
                            boxShadow: `0 8px 25px ${s.primary}30`
                        },
                        children: [c.jsx("div", {
                            className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500",
                            style: {
                                background: `linear-gradient(135deg, ${s.primaryLight}, ${s.primary})`
                            }
                        }), c.jsx("div", {
                            className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700",
                            style: {
                                background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)",
                                transform: "translateX(-100%)",
                                animation: "shimmer 1.5s ease-in-out infinite"
                            }
                        }), c.jsxs("div", {
                            className: "relative z-10 flex items-center gap-2",
                            children: [c.jsx("span", {
                                children: "Continue"
                            }), c.jsx(Qu, {
                                size: 14
                            })]
                        })]
                    })]
                }), c.jsx("div", {
                    className: "mt-4 p-3 bg-black/20 rounded-lg border",
                    style: {
                        borderColor: `${s.primary}15`
                    },
                    children: c.jsxs("p", {
                        className: "text-gray-400 text-xs text-center",
                        children: ["You will be redirected to a website and do a ", r, " to get your key."]
                    })
                })]
            })]
        }) : null
    },
    O5 = () => {
        const {
            getThemeColors: e
        } = $e(), t = e(), [n, r] = w.useState(!1), [i, s] = w.useState(""), o = [{
            name: "Lootlab",
            logo: "https://s3-eu-west-1.amazonaws.com/tpd/logos/65786726ba1241d21ae5bdd3/0x0.png",
            url: "https://ads.luarmor.net/get_key?for=Ronix_Script_Hub_Access-FIDnQWNJRPDQ",
            color: "#8B5CF6",
            description: "Fast and reliable",
            features: ["Quick Setup", "High Success Rate", "Mobile Friendly"]
        }, {
            name: "Linkvertise",
            logo: "https://www.stepstone.de/upload_de/logo/E/logoLinkvertise-Inh-Marc-Winter-255864DE-2101131647.gif",
            url: "https://ads.luarmor.net/get_key?for=Ronix_Script_Hub_Access_2-dAMNMVvIzQxg",
            color: "#F97316",
            description: "Fast and reliable",
            features: ["Easy Process", "Secure Links", "Fast Delivery"]
        }], a = d => {
            s(d.name), r(!0)
        }, l = () => {
            const d = o.find(f => f.name === i);
            d && window.open(d.url, "_blank"), r(!1), s("")
        }, u = () => {
            r(!1), s("")
        };
        return c.jsxs(c.Fragment, {
            children: [c.jsx(_5, {
                isVisible: n,
                onClose: u,
                onConfirm: l,
                providerName: i
            }), c.jsx("section", {
                className: "min-h-screen flex items-center justify-center relative overflow-hidden pt-32 pb-12 px-4 sm:px-6 page-transition",
                children: c.jsxs("div", {
                    className: "text-center z-10 max-w-5xl mx-auto w-full",
                    children: [c.jsxs("div", {
                        className: "mb-12",
                        children: [c.jsx("h1", {
                            className: "font-orbitron font-black text-3xl sm:text-4xl md:text-5xl mb-6",
                            style: {
                                color: t.primary,
                                textShadow: `0 0 30px ${t.primary}50`
                            },
                            children: "Get Your Key"
                        }), c.jsx("p", {
                            className: "text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto",
                            children: "Choose a key provider below to get your access key for Ronix."
                        })]
                    }), c.jsx("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12",
                        children: o.map((d, f) => c.jsxs("div", {
                            className: "relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 overflow-hidden",
                            style: {
                                borderColor: `${d.color}30`,
                                background: "linear-gradient(135deg, rgba(0,0,0,0.5), rgba(0,0,0,0.3))"
                            },
                            children: [c.jsx("div", {
                                className: "mb-6",
                                children: c.jsx("div", {
                                    className: "w-16 h-16 mx-auto rounded-xl border flex items-center justify-center overflow-hidden",
                                    style: {
                                        borderColor: `${d.color}40`,
                                        backgroundColor: `${d.color}10`
                                    },
                                    children: c.jsx("img", {
                                        src: d.logo,
                                        alt: `${d.name} logo`,
                                        className: "w-12 h-12 object-contain"
                                    })
                                })
                            }), c.jsxs("div", {
                                className: "mb-6",
                                children: [c.jsx("h3", {
                                    className: "text-xl font-bold mb-2",
                                    style: {
                                        color: d.color
                                    },
                                    children: d.name
                                }), c.jsx("p", {
                                    className: "text-gray-300 text-sm mb-4",
                                    children: d.description
                                }), c.jsx("div", {
                                    className: "space-y-2",
                                    children: d.features.map((h, p) => c.jsxs("div", {
                                        className: "flex items-center gap-2",
                                        children: [c.jsx("div", {
                                            className: "w-4 h-4 rounded-full flex items-center justify-center",
                                            style: {
                                                backgroundColor: `${d.color}20`
                                            },
                                            children: c.jsx("div", {
                                                className: "w-2 h-2 rounded-full",
                                                style: {
                                                    backgroundColor: d.color
                                                }
                                            })
                                        }), c.jsx("span", {
                                            className: "text-gray-400 text-sm",
                                            children: h
                                        })]
                                    }, p))
                                })]
                            }), c.jsxs("button", {
                                onClick: () => a(d),
                                className: "get-key-button w-full flex items-center justify-center gap-3 text-white px-6 py-3 rounded-xl font-semibold text-base transition-all duration-500 relative overflow-hidden group",
                                style: {
                                    background: `linear-gradient(135deg, ${d.color}, ${d.color}CC)`,
                                    boxShadow: `0 8px 25px ${d.color}30`
                                },
                                children: [c.jsx("div", {
                                    className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500",
                                    style: {
                                        background: `linear-gradient(135deg, ${d.color}DD, ${d.color}AA, ${d.color}DD)`
                                    }
                                }), c.jsx("div", {
                                    className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700",
                                    style: {
                                        background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)",
                                        transform: "translateX(-100%)",
                                        animation: "shimmer 1.5s ease-in-out infinite"
                                    }
                                }), c.jsx("div", {
                                    className: "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300",
                                    children: c.jsx("div", {
                                        className: "absolute inset-0 rounded-xl animate-ping",
                                        style: {
                                            background: `linear-gradient(135deg, ${d.color}40, transparent)`,
                                            animationDuration: "2s"
                                        }
                                    })
                                }), c.jsxs("div", {
                                    className: "relative z-10 flex items-center gap-3 group-hover:scale-105 transition-transform duration-300",
                                    children: [c.jsx("div", {
                                        className: "flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 group-hover:rotate-12",
                                        style: {
                                            background: "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))",
                                            boxShadow: `0 0 15px ${d.color}60`
                                        },
                                        children: c.jsx(O0, {
                                            size: 16,
                                            className: "text-white drop-shadow-lg"
                                        })
                                    }), c.jsx("span", {
                                        className: "font-semibold tracking-wide",
                                        children: "Get Key"
                                    }), c.jsx("div", {
                                        className: "transition-transform duration-300 group-hover:translate-x-1",
                                        children: c.jsx(Qu, {
                                            size: 16
                                        })
                                    })]
                                }), c.jsx("div", {
                                    className: "absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                    style: {
                                        background: `linear-gradient(to right, transparent, ${d.color}, transparent)`,
                                        boxShadow: `0 0 10px ${d.color}`
                                    }
                                })]
                            })]
                        }, f))
                    }), c.jsx("div", {
                        className: "max-w-3xl mx-auto",
                        children: c.jsxs("div", {
                            className: "bg-black/30 backdrop-blur-sm rounded-2xl p-6 border",
                            style: {
                                borderColor: `${t.primary}20`
                            },
                            children: [c.jsxs("h3", {
                                className: "font-semibold mb-4 text-lg text-center flex items-center justify-center gap-2",
                                style: {
                                    color: t.primary
                                },
                                children: [c.jsx(cn, {
                                    size: 20
                                }), "How to Get Your Key"]
                            }), c.jsxs("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-6 text-left",
                                children: [c.jsxs("div", {
                                    className: "flex flex-col items-center text-center",
                                    children: [c.jsx("div", {
                                        className: "w-12 h-12 rounded-xl border flex items-center justify-center mb-3",
                                        style: {
                                            borderColor: `${t.primary}40`,
                                            backgroundColor: `${t.primary}15`
                                        },
                                        children: c.jsx("span", {
                                            className: "font-bold text-lg",
                                            style: {
                                                color: t.primary
                                            },
                                            children: "1"
                                        })
                                    }), c.jsx("h4", {
                                        className: "text-white font-medium mb-2",
                                        children: "Choose Provider"
                                    }), c.jsx("p", {
                                        className: "text-gray-400 text-sm",
                                        children: "Select either Lootlab or Linkvertise based on your preference."
                                    })]
                                }), c.jsxs("div", {
                                    className: "flex flex-col items-center text-center",
                                    children: [c.jsx("div", {
                                        className: "w-12 h-12 rounded-xl border flex items-center justify-center mb-3",
                                        style: {
                                            borderColor: `${t.primary}40`,
                                            backgroundColor: `${t.primary}15`
                                        },
                                        children: c.jsx("span", {
                                            className: "font-bold text-lg",
                                            style: {
                                                color: t.primary
                                            },
                                            children: "2"
                                        })
                                    }), c.jsx("h4", {
                                        className: "text-white font-medium mb-2",
                                        children: "Complete Tasks"
                                    }), c.jsx("p", {
                                        className: "text-gray-400 text-sm",
                                        children: "Follow the instructions on the key provider's website."
                                    })]
                                }), c.jsxs("div", {
                                    className: "flex flex-col items-center text-center",
                                    children: [c.jsx("div", {
                                        className: "w-12 h-12 rounded-xl border flex items-center justify-center mb-3",
                                        style: {
                                            borderColor: `${t.primary}40`,
                                            backgroundColor: `${t.primary}15`
                                        },
                                        children: c.jsx("span", {
                                            className: "font-bold text-lg",
                                            style: {
                                                color: t.primary
                                            },
                                            children: "3"
                                        })
                                    }), c.jsx("h4", {
                                        className: "text-white font-medium mb-2",
                                        children: "Use Your Key"
                                    }), c.jsx("p", {
                                        className: "text-gray-400 text-sm",
                                        children: "Copy the generated key and use it in for Ronix."
                                    })]
                                })]
                            }), c.jsxs("div", {
                                className: "mt-6 p-4 bg-black/20 rounded-xl border flex items-center gap-3",
                                style: {
                                    borderColor: `${t.primary}15`
                                },
                                children: [c.jsx(rr, {
                                    size: 16,
                                    style: {
                                        color: t.primary
                                    }
                                }), c.jsxs("p", {
                                    className: "text-gray-300 text-sm",
                                    children: [c.jsx("strong", {
                                        children: "Note:"
                                    }), " Keys help maintain our service for ronix."]
                                })]
                            })]
                        })
                    })]
                })
            }), c.jsx(ki, {})]
        })
    },
    I5 = () => {
        const {
            getThemeColors: e
        } = $e(), t = e(), n = () => {
            window.open("https://discord.gg/mAUPTKht", "_blank")
        }, r = [{
            icon: c.jsx(cn, {
                size: 18
            }),
            title: "No Key System",
            description: "Skip the key system completely",
            color: "#10B981"
        }, {
            icon: c.jsx(C5, {
                size: 18
            }),
            title: "Unlimited Farming",
            description: "Farm for hours without restrictions",
            color: "#8B5CF6"
        }, {
            icon: c.jsx(rr, {
                size: 18
            }),
            title: "Future Features",
            description: "Instant access to new features",
            color: "#F59E0B"
        }], i = [{
            name: "PayPal",
            icon: c.jsx(d5, {
                size: 18
            }),
            color: "#0070BA",
            description: "Secure payment processing"
        }, {
            name: "Cryptocurrency",
            icon: c.jsx(c5, {
                size: 18
            }),
            color: "#F7931A",
            description: "Any cryptocurrency accepted"
        }, {
            name: "Server Boosting",
            icon: c.jsx(Us, {
                size: 18
            }),
            color: "#5865F2",
            description: "2x Basic • 10x Premium"
        }];
        return c.jsxs(c.Fragment, {
            children: [c.jsx("section", {
                className: "min-h-screen relative overflow-hidden pt-32 pb-16 px-4 sm:px-6",
                children: c.jsxs("div", {
                    className: "max-w-6xl mx-auto",
                    children: [c.jsxs("div", {
                        className: "text-center mb-16 animate-fadeInUp",
                        children: [c.jsx("div", {
                            className: "flex items-center justify-center mb-6",
                            children: c.jsxs("div", {
                                className: "relative p-4 rounded-2xl border group",
                                style: {
                                    background: `linear-gradient(135deg, ${t.primary}15, rgba(0,0,0,0.4))`,
                                    borderColor: `${t.primary}40`,
                                    boxShadow: `0 15px 30px ${t.primary}25`
                                },
                                children: [c.jsx(x5, {
                                    size: 32,
                                    className: "text-yellow-400 group-hover:scale-110 transition-transform duration-500"
                                }), c.jsx("div", {
                                    className: "absolute inset-0 rounded-2xl opacity-40 blur-lg animate-pulse",
                                    style: {
                                        background: `radial-gradient(circle, ${t.primary}40, transparent)`
                                    }
                                })]
                            })
                        }), c.jsx("h1", {
                            className: "font-orbitron font-black text-3xl sm:text-4xl md:text-5xl mb-4",
                            style: {
                                color: t.primary,
                                textShadow: `0 0 30px ${t.primary}50`
                            },
                            children: "Ronix Premium"
                        }), c.jsx("p", {
                            className: "text-lg sm:text-xl text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed",
                            children: "Unlock the full potential of Ronix with premium features and unlimited access"
                        }), c.jsxs("div", {
                            className: "inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm",
                            style: {
                                backgroundColor: "#F59E0B10",
                                borderColor: "#F59E0B30",
                                color: "#F59E0B"
                            },
                            children: [c.jsx(g5, {
                                size: 16
                            }), c.jsx("span", {
                                className: "font-medium",
                                children: "Currently Android Only"
                            })]
                        })]
                    }), c.jsxs("div", {
                        className: "mb-16",
                        children: [c.jsx("div", {
                            className: "text-center mb-10",
                            children: c.jsxs("h2", {
                                className: "text-xl sm:text-2xl font-bold mb-4 font-orbitron flex items-center justify-center gap-2",
                                style: {
                                    color: t.primary
                                },
                                children: [c.jsx(I0, {
                                    size: 20
                                }), "Premium Benefits"]
                            })
                        }), c.jsx("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto",
                            children: r.map((s, o) => c.jsxs("div", {
                                className: "group relative bg-black/40 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 overflow-hidden",
                                style: {
                                    borderColor: `${t.primary}20`,
                                    background: "linear-gradient(135deg, rgba(0,0,0,0.5), rgba(0,0,0,0.3))"
                                },
                                onMouseEnter: a => {
                                    a.currentTarget.style.borderColor = `${s.color}60`, a.currentTarget.style.background = `linear-gradient(135deg, ${s.color}08, rgba(0,0,0,0.4))`, a.currentTarget.style.boxShadow = `0 20px 40px ${s.color}20`
                                },
                                onMouseLeave: a => {
                                    a.currentTarget.style.borderColor = `${t.primary}20`, a.currentTarget.style.background = "linear-gradient(135deg, rgba(0,0,0,0.5), rgba(0,0,0,0.3))", a.currentTarget.style.boxShadow = "none"
                                },
                                children: [c.jsx("div", {
                                    className: "w-10 h-10 rounded-xl flex items-center justify-center mb-4 mx-auto transition-all duration-300 group-hover:scale-110",
                                    style: {
                                        backgroundColor: `${s.color}15`,
                                        border: `1px solid ${s.color}30`
                                    },
                                    children: c.jsx("div", {
                                        style: {
                                            color: s.color
                                        },
                                        children: s.icon
                                    })
                                }), c.jsx("h3", {
                                    className: "text-white font-semibold mb-2 text-center",
                                    children: s.title
                                }), c.jsx("p", {
                                    className: "text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-center text-sm",
                                    children: s.description
                                })]
                            }, o))
                        })]
                    }), c.jsxs("div", {
                        className: "mb-16",
                        children: [c.jsx("div", {
                            className: "text-center mb-10",
                            children: c.jsxs("h2", {
                                className: "text-xl sm:text-2xl font-bold mb-4 font-orbitron flex items-center justify-center gap-2",
                                style: {
                                    color: t.primary
                                },
                                children: [c.jsx(w5, {
                                    size: 20
                                }), "Choose Your Plan"]
                            })
                        }), c.jsxs("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto",
                            children: [c.jsxs("div", {
                                className: "relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:scale-105",
                                style: {
                                    borderColor: `${t.primary}20`,
                                    background: "linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.4))"
                                },
                                children: [c.jsxs("div", {
                                    className: "text-center mb-6",
                                    children: [c.jsxs("div", {
                                        className: "flex items-center justify-center gap-2 mb-3",
                                        children: [c.jsx("div", {
                                            className: "w-3 h-3 rounded-full bg-orange-500"
                                        }), c.jsx("h3", {
                                            className: "text-lg font-bold text-white font-orbitron",
                                            children: "Early Access BASIC"
                                        })]
                                    }), c.jsxs("div", {
                                        className: "flex items-baseline justify-center gap-1 mb-4",
                                        children: [c.jsx("span", {
                                            className: "text-3xl font-black text-white",
                                            children: "$5"
                                        }), c.jsx("span", {
                                            className: "text-gray-400 text-sm",
                                            children: "one-time"
                                        })]
                                    })]
                                }), c.jsx("div", {
                                    className: "space-y-3 mb-6",
                                    children: c.jsxs("div", {
                                        className: "flex items-center gap-3 p-3 rounded-lg bg-black/30",
                                        children: [c.jsx(Df, {
                                            size: 16,
                                            className: "text-green-500 flex-shrink-0"
                                        }), c.jsx("span", {
                                            className: "text-gray-300 text-sm",
                                            children: "Ronix Android No-Key Version"
                                        })]
                                    })
                                })]
                            }), c.jsxs("div", {
                                className: "relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:scale-105",
                                style: {
                                    borderColor: `${t.primary}60`,
                                    background: `linear-gradient(135deg, ${t.primary}10, rgba(0,0,0,0.4))`
                                },
                                children: [c.jsx("div", {
                                    className: "absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold",
                                    style: {
                                        backgroundColor: t.primary,
                                        color: "white"
                                    },
                                    children: "MOST POPULAR"
                                }), c.jsxs("div", {
                                    className: "text-center mb-6",
                                    children: [c.jsxs("div", {
                                        className: "flex items-center justify-center gap-2 mb-3",
                                        children: [c.jsx("div", {
                                            className: "w-3 h-3 rounded-full bg-purple-500"
                                        }), c.jsx("h3", {
                                            className: "text-lg font-bold text-white font-orbitron",
                                            children: "Early Access Premium"
                                        })]
                                    }), c.jsxs("div", {
                                        className: "flex items-baseline justify-center gap-1 mb-4",
                                        children: [c.jsx("span", {
                                            className: "text-3xl font-black text-white",
                                            children: "$30"
                                        }), c.jsx("span", {
                                            className: "text-gray-400 text-sm",
                                            children: "one-time"
                                        })]
                                    })]
                                }), c.jsx("div", {
                                    className: "space-y-3 mb-6",
                                    children: ["Ronix Android No-Key Version", "Includes 8 permanent keys", "Infinite HlWD RESETS!", "Early access to updates"].map((s, o) => c.jsxs("div", {
                                        className: "flex items-center gap-3 p-3 rounded-lg bg-black/30",
                                        children: [c.jsx(Df, {
                                            size: 16,
                                            className: "text-green-500 flex-shrink-0"
                                        }), c.jsx("span", {
                                            className: "text-gray-300 text-sm",
                                            children: s
                                        })]
                                    }, o))
                                })]
                            })]
                        })]
                    }), c.jsxs("div", {
                        className: "mb-16",
                        children: [c.jsx("div", {
                            className: "text-center mb-10",
                            children: c.jsx("h2", {
                                className: "text-xl sm:text-2xl font-bold mb-4 font-orbitron",
                                style: {
                                    color: t.primary
                                },
                                children: "Payment Options"
                            })
                        }), c.jsx("div", {
                            className: "grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-6",
                            children: i.map((s, o) => c.jsxs("div", {
                                className: "bg-black/30 backdrop-blur-sm rounded-xl p-4 border text-center transition-all duration-300 hover:scale-105",
                                style: {
                                    borderColor: `${s.color}30`,
                                    background: `linear-gradient(135deg, ${s.color}05, rgba(0,0,0,0.3))`
                                },
                                children: [c.jsx("div", {
                                    className: "w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3",
                                    style: {
                                        backgroundColor: `${s.color}20`
                                    },
                                    children: c.jsx("div", {
                                        style: {
                                            color: s.color
                                        },
                                        children: s.icon
                                    })
                                }), c.jsx("h4", {
                                    className: "text-white font-semibold text-sm mb-1",
                                    children: s.name
                                }), c.jsx("p", {
                                    className: "text-gray-400 text-xs",
                                    children: s.description
                                })]
                            }, o))
                        }), c.jsxs("div", {
                            className: "bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 max-w-2xl mx-auto",
                            children: [c.jsxs("div", {
                                className: "flex items-center justify-center gap-2 mb-2",
                                children: [c.jsx(S5, {
                                    size: 16,
                                    className: "text-blue-400"
                                }), c.jsx("span", {
                                    className: "text-blue-300 font-semibold",
                                    children: "Ready to upgrade?"
                                })]
                            }), c.jsx("p", {
                                className: "text-blue-200 text-center text-sm",
                                children: "Open a premium ticket in our Discord server to get started"
                            })]
                        })]
                    }), c.jsxs("div", {
                        className: "text-center mb-16",
                        children: [c.jsxs("button", {
                            onClick: n,
                            className: "group relative flex items-center justify-center gap-3 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 hover:scale-105 overflow-hidden mx-auto",
                            style: {
                                background: `linear-gradient(135deg, ${t.primary}, ${t.primaryDark})`,
                                boxShadow: `0 12px 30px ${t.primary}40`
                            },
                            children: [c.jsx("div", {
                                className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700",
                                style: {
                                    background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)",
                                    transform: "translateX(-100%)",
                                    animation: "shimmer 2s ease-in-out infinite"
                                }
                            }), c.jsxs("div", {
                                className: "relative z-10 flex items-center gap-3",
                                children: [c.jsx(Us, {
                                    size: 20
                                }), c.jsx("span", {
                                    children: "Open Premium Ticket"
                                }), c.jsx(Qu, {
                                    size: 18
                                })]
                            })]
                        }), c.jsx("p", {
                            className: "text-gray-400 mt-3 text-base",
                            children: "Join our Discord and create a ticket to purchase"
                        })]
                    }), c.jsx("div", {
                        className: "max-w-2xl mx-auto",
                        children: c.jsxs("div", {
                            className: "bg-red-500/10 border border-red-500/30 rounded-xl p-6",
                            children: [c.jsxs("div", {
                                className: "flex items-center justify-center gap-2 mb-4",
                                children: [c.jsx(cn, {
                                    size: 20,
                                    className: "text-red-500"
                                }), c.jsx("h3", {
                                    className: "text-red-400 font-bold text-lg font-orbitron",
                                    children: "IMPORTANT"
                                })]
                            }), c.jsxs("div", {
                                className: "text-center space-y-2",
                                children: [c.jsxs("p", {
                                    className: "text-red-200 text-base",
                                    children: [c.jsx("strong", {
                                        children: "REMEMBER"
                                    }), " If you use any fraudulent money, you will be refunded and reported for fraud."]
                                }), c.jsxs("p", {
                                    className: "text-red-300 text-sm",
                                    children: ["We do ", c.jsx("strong", {
                                        children: "NOT"
                                    }), " allow fraud under any circumstances."]
                                })]
                            })]
                        })
                    })]
                })
            }), c.jsx(ki, {})]
        })
    },
    B5 = () => {
        const {
            getThemeColors: e
        } = $e(), t = e();
        return c.jsxs("div", {
            className: "fixed inset-0 pointer-events-none overflow-hidden",
            children: [
                [...Array(3)].map((n, r) => c.jsx("div", {
                    className: "absolute w-1 h-1 rounded-full animate-shooting-star opacity-60",
                    style: {
                        backgroundColor: t.primaryLight,
                        left: `${Math.random()*100}%`,
                        top: `${Math.random()*100}%`,
                        animationDelay: `${r*1.2}s`,
                        animationDuration: `${3+Math.random()*2}s`,
                        boxShadow: `0 0 6px ${t.primaryLight}`
                    },
                    children: c.jsx("div", {
                        className: "absolute inset-0 rounded-full blur-sm",
                        style: {
                            backgroundColor: t.primaryLight
                        }
                    })
                }, `regular-${r}`)), [...Array(4)].map((n, r) => c.jsxs("div", {
                    className: "absolute w-1.5 h-1.5 rounded-full animate-shooting-star opacity-80",
                    style: {
                        backgroundColor: "#FFFFFF",
                        left: `${Math.random()*100}%`,
                        top: `${Math.random()*100}%`,
                        animationDelay: `${r*.8+.5}s`,
                        animationDuration: `${2.5+Math.random()*1.5}s`,
                        boxShadow: `0 0 12px ${t.primary}, 0 0 24px ${t.primaryLight}, 0 0 36px #FFFFFF`,
                        filter: "brightness(1.5)"
                    },
                    children: [c.jsx("div", {
                        className: "absolute inset-0 rounded-full blur-sm animate-pulse",
                        style: {
                            backgroundColor: "#FFFFFF",
                            animationDuration: "0.8s"
                        }
                    }), c.jsx("div", {
                        className: "absolute -inset-2 rounded-full blur-md animate-pulse",
                        style: {
                            backgroundColor: t.primaryLight,
                            opacity: .6,
                            animationDuration: "1.2s",
                            animationDelay: "0.3s"
                        }
                    })]
                }, `bright-${r}`)), [...Array(2)].map((n, r) => c.jsx("div", {
                    className: "absolute w-0.5 h-0.5 rounded-full animate-shooting-star opacity-40",
                    style: {
                        backgroundColor: t.primary,
                        left: `${Math.random()*100}%`,
                        top: `${Math.random()*100}%`,
                        animationDelay: `${r*2+1}s`,
                        animationDuration: `${4+Math.random()*2}s`,
                        boxShadow: `0 0 4px ${t.primary}`
                    },
                    children: c.jsx("div", {
                        className: "absolute inset-0 rounded-full blur-xs",
                        style: {
                            backgroundColor: t.primary
                        }
                    })
                }, `faint-${r}`))
            ]
        })
    },
    U5 = () => {
        const {
            getThemeColors: e
        } = $e(), t = e();
        return c.jsxs("div", {
            className: "fixed inset-0 pointer-events-none overflow-hidden",
            children: [c.jsx("div", {
                className: "absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-32 rounded-full blur-3xl",
                style: {
                    background: `radial-gradient(ellipse, ${t.primary}25, ${t.primaryLight}15, transparent)`,
                    zIndex: 5
                }
            }), c.jsx("div", {
                className: "absolute -top-40 -left-40 w-80 sm:w-96 h-80 sm:h-96 rounded-full blur-3xl animate-blob",
                style: {
                    background: `radial-gradient(circle, ${t.primary}30, ${t.primary}20, transparent)`
                }
            }), c.jsx("div", {
                className: "absolute -top-20 -right-20 w-60 sm:w-72 h-60 sm:h-72 rounded-full blur-3xl animate-blob animation-delay-2000",
                style: {
                    background: `radial-gradient(circle, ${t.primaryLight}25, ${t.primary}15, transparent)`
                }
            }), c.jsx("div", {
                className: "absolute -bottom-40 -right-40 w-72 sm:w-80 h-72 sm:h-80 rounded-full blur-3xl animate-blob animation-delay-4000",
                style: {
                    background: `radial-gradient(circle, ${t.primaryDark}35, ${t.primary}25, transparent)`
                }
            }), c.jsx("div", {
                className: "absolute -bottom-20 -left-20 w-56 sm:w-64 h-56 sm:h-64 rounded-full blur-3xl animate-blob animation-delay-6000",
                style: {
                    background: `radial-gradient(circle, ${t.primary}20, ${t.primaryLight}15, transparent)`
                }
            }), c.jsx("div", {
                className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 sm:w-48 h-40 sm:h-48 rounded-full blur-2xl animate-float-slow",
                style: {
                    background: `radial-gradient(circle, ${t.primary}10, ${t.primaryLight}10, transparent)`
                }
            }), c.jsx("div", {
                className: "absolute top-1/4 left-1/4 w-32 h-32 rounded-full blur-2xl animate-float animation-delay-2000",
                style: {
                    background: `radial-gradient(circle, ${t.primaryLight}15, transparent)`
                }
            }), c.jsx("div", {
                className: "absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full blur-xl animate-float-slow animation-delay-4000",
                style: {
                    background: `radial-gradient(circle, ${t.primaryDark}20, transparent)`
                }
            }), c.jsx("div", {
                className: "absolute top-1/3 right-1/3 w-16 h-16 rounded-full blur-lg animate-pulse",
                style: {
                    background: `radial-gradient(circle, ${t.primary}25, transparent)`,
                    animationDuration: "3s"
                }
            }), c.jsx("div", {
                className: "absolute bottom-1/3 left-1/3 w-20 h-20 rounded-full blur-lg animate-pulse animation-delay-2000",
                style: {
                    background: `radial-gradient(circle, ${t.primaryLight}20, transparent)`,
                    animationDuration: "4s"
                }
            }), c.jsx("div", {
                className: "absolute top-1/2 -left-10 w-28 h-40 rounded-full blur-2xl animate-drift",
                style: {
                    background: `linear-gradient(45deg, ${t.primary}15, ${t.primaryLight}10, transparent)`
                }
            }), c.jsx("div", {
                className: "absolute top-1/2 -right-10 w-28 h-40 rounded-full blur-2xl animate-drift animation-delay-4000",
                style: {
                    background: `linear-gradient(-45deg, ${t.primary}15, ${t.primaryLight}10, transparent)`
                }
            }), c.jsx("div", {
                className: "absolute top-3/4 left-1/6 w-36 h-36 rounded-full blur-3xl animate-float animation-delay-6000",
                style: {
                    background: `radial-gradient(circle, ${t.primary}12, transparent)`
                }
            }), c.jsx("div", {
                className: "absolute top-1/6 right-1/6 w-44 h-44 rounded-full blur-3xl animate-blob animation-delay-8000",
                style: {
                    background: `radial-gradient(circle, ${t.primaryLight}10, transparent)`
                }
            }), c.jsx("div", {
                className: "absolute top-10 left-10 w-20 h-20 rounded-full blur-xl animate-pulse",
                style: {
                    background: `radial-gradient(circle, ${t.primary}18, transparent)`,
                    animationDuration: "5s"
                }
            }), c.jsx("div", {
                className: "absolute bottom-10 right-10 w-24 h-24 rounded-full blur-xl animate-pulse animation-delay-3000",
                style: {
                    background: `radial-gradient(circle, ${t.primaryLight}15, transparent)`,
                    animationDuration: "6s"
                }
            })]
        })
    };

function W5() {
    return c.jsxs(c.Fragment, {
        children: [c.jsx(D5, {}), c.jsx($5, {}), c.jsx(V5, {}), c.jsx(ki, {})]
    })
}
const H5 = {
        initial: {
            opacity: 0,
            y: 30,
            scale: .95
        },
        in: {
            opacity: 1,
            y: 0,
            scale: 1
        },
        out: {
            opacity: 0,
            y: -30,
            scale: 1.05
        }
    },
    K5 = {
        type: "tween",
        ease: [.25, .46, .45, .94],
        duration: .8
    };

function G5() {
    const e = kn();
    return c.jsx(x2, {
        mode: "wait",
        children: c.jsx(t5.div, {
            initial: "initial",
            animate: "in",
            exit: "out",
            variants: H5,
            transition: K5,
            className: "will-change-transform",
            children: c.jsxs(av, {
                location: e,
                children: [c.jsx(jn, {
                    path: "/",
                    element: c.jsx(W5, {})
                }), c.jsx(jn, {
                    path: "/download",
                    element: c.jsx(F5, {})
                }), c.jsx(jn, {
                    path: "/script",
                    element: c.jsx(z5, {})
                }), c.jsx(jn, {
                    path: "/get-key",
                    element: c.jsx(O5, {})
                }), c.jsx(jn, {
                    path: "/premium",
                    element: c.jsx(I5, {})
                })]
            })
        }, e.pathname)
    })
}

function X5() {
    return c.jsx(R5, {
        children: c.jsx(mv, {
            children: c.jsxs("div", {
                className: "min-h-screen bg-black relative overflow-hidden",
                children: [c.jsx(U5, {}), c.jsx(B5, {}), c.jsxs("div", {
                    className: "relative z-10",
                    children: [c.jsx(A5, {}), c.jsx(G5, {})]
                })]
            })
        })
    })
}
Gp(document.getElementById("root")).render(c.jsx(w.StrictMode, {
    children: c.jsx(X5, {})
}));
