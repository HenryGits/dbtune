// Copyright 2012 Google Inc. All rights reserved.
(function () {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{"function": "__e"}, {"function": "__cid"}],
            "tags": [{"function": "__rep", "once_per_event": true, "vtp_containerId": ["macro", 1], "tag_id": 1}],
            "predicates": [{"function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.js"}],
            "rules": [[["if", 0], ["add", 0]]]
        },
        "runtime": []


    };


    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var h, aa = function (a) {
        var b = 0;
        return function () {
            return b < a.length ? {done: !1, value: a[b++]} : {done: !0}
        }
    }, ba = "function" == typeof Object.create ? Object.create : function (a) {
        var b = function () {
        };
        b.prototype = a;
        return new b
    }, ca;
    if ("function" == typeof Object.setPrototypeOf) ca = Object.setPrototypeOf; else {
        var da;
        a:{
            var ea = {a: !0}, fa = {};
            try {
                fa.__proto__ = ea;
                da = fa.a;
                break a
            } catch (a) {
            }
            da = !1
        }
        ca = da ? function (a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ha = ca, ka = function (a, b) {
        a.prototype = ba(b.prototype);
        a.prototype.constructor = a;
        if (ha) ha(a, b); else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d)
        } else a[c] = b[c];
        a.nk = b.prototype
    }, la = this || self, ma = function (a) {
        return a
    };
    var na = function () {
        }, pa = function (a) {
            return "function" === typeof a
        }, l = function (a) {
            return "string" === typeof a
        }, qa = function (a) {
            return "number" === typeof a && !isNaN(a)
        }, ra = Array.isArray, sa = function (a, b) {
            if (a && ra(a)) for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c]
        }, ta = function (a, b) {
            if (!qa(a) || !qa(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        }, va = function (a, b) {
            for (var c = new ua, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
            return !1
        }, B = function (a,
                         b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        }, wa = function (a) {
            return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        }, xa = function (a) {
            return Math.round(Number(a)) || 0
        }, za = function (a) {
            return "false" === String(a).toLowerCase() ? !1 : !!a
        }, Aa = function (a) {
            var b = [];
            if (ra(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        }, Ba = function (a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        }, Ca = function () {
            return new Date(Date.now())
        },
        Da = function () {
            return Ca().getTime()
        }, ua = function () {
            this.prefix = "gtm.";
            this.values = {}
        };
    ua.prototype.set = function (a, b) {
        this.values[this.prefix + a] = b
    };
    ua.prototype.get = function (a) {
        return this.values[this.prefix + a]
    };
    var Ea = function (a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        }, Fa = function (a) {
            var b = a;
            return function () {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {
                    }
                }
            }
        }, Ga = function (a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        }, Ha = function (a) {
            for (var b in a) if (a.hasOwnProperty(b)) return !0;
            return !1
        }, Ia = function (a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        }, Ja = function (a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        }, La = /^\w{1,9}$/,
        Ma = function (a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            B(a, function (d, e) {
                La.test(d) && e && c.push(d)
            });
            return c.join(b)
        };/*

 SPDX-License-Identifier: Apache-2.0
*/
    var Na, Oa = function () {
        if (void 0 === Na) {
            var a = null, b = la.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {createHTML: ma, createScript: ma, createScriptURL: ma})
                } catch (c) {
                    la.console && la.console.error(c.message)
                }
                Na = a
            } else Na = a
        }
        return Na
    };
    var Qa = function (a, b) {
        this.g = b === Pa ? a : ""
    };
    Qa.prototype.toString = function () {
        return this.g + ""
    };
    var Pa = {};
    var Ra = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function Sa() {
        var a = la.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }

    function Ta(a) {
        return -1 != Sa().indexOf(a)
    };var Ua = {}, Va = function (a, b) {
        this.g = b === Ua ? a : ""
    };
    Va.prototype.toString = function () {
        return this.g.toString()
    };
    var Wa = function (a) {
        return a instanceof Va && a.constructor === Va ? a.g : "type_error:SafeHtml"
    }, Xa = function (a) {
        var b = a, c = Oa(), d = c ? c.createHTML(b) : b;
        return new Va(d, Ua)
    };

    function Ya(a) {
        if ("script" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeScript.");
        if ("style" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeStyleSheet.");
    };var G = window, H = document, Za = navigator, $a = H.currentScript && H.currentScript.src, ab = function (a, b) {
            var c = G[a];
            G[a] = void 0 === c ? b : c;
            return G[a]
        }, bb = function (a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function () {
                a.readyState in {loaded: 1, complete: 1} && (a.onreadystatechange = null, b())
            })
        }, cb = {async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1},
        db = {onload: 1, src: 1, width: 1, height: 1, style: 1};

    function eb(a, b, c) {
        b && B(b, function (d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }

    var fb = function (a, b, c, d) {
            var e = H.createElement("script");
            eb(e, d, cb);
            e.type = "text/javascript";
            e.async = !0;
            var f, g = a, k = Oa(), m = k ? k.createScriptURL(g) : g;
            f = new Qa(m, Pa);
            e.src = f instanceof Qa && f.constructor === Qa ? f.g : "type_error:TrustedResourceUrl";
            var n, p, q,
                r = null == (q = (p = (e.ownerDocument && e.ownerDocument.defaultView || window).document).querySelector) ? void 0 : q.call(p, "script[nonce]");
            (n = r ? r.nonce || r.getAttribute("nonce") || "" : "") && e.setAttribute("nonce", n);
            bb(e, b);
            c && (e.onerror = c);
            var t = H.getElementsByTagName("script")[0] ||
                H.body || H.head;
            t.parentNode.insertBefore(e, t);
            return e
        }, gb = function () {
            if ($a) {
                var a = $a.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        }, hb = function (a, b, c, d, e) {
            var f = e, g = !1;
            f || (f = H.createElement("iframe"), g = !0);
            eb(f, c, db);
            d && B(d, function (m, n) {
                f.dataset[m] = n
            });
            f.height = "0";
            f.width = "0";
            f.style.display = "none";
            f.style.visibility = "hidden";
            if (g) {
                var k = H.body && H.body.lastChild || H.body || H.head;
                k.parentNode.insertBefore(f, k)
            }
            bb(f, b);
            void 0 !== a && (f.src = a);
            return f
        },
        ib = function (a, b, c) {
            var d = new Image(1, 1);
            d.onload = function () {
                d.onload = null;
                b && b()
            };
            d.onerror = function () {
                d.onerror = null;
                c && c()
            };
            d.src = a;
            return d
        }, jb = function (a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        }, kb = function (a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        }, J = function (a) {
            G.setTimeout(a, 0)
        }, lb = function (a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        }, mb = function (a) {
            var b =
                a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        }, nb = function (a) {
            var b = H.createElement("div"), c = b, d = Xa("A<div>" + a + "</div>");
            void 0 !== c.tagName && Ya(c);
            c.innerHTML = Wa(d);
            b = b.lastChild;
            for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
            return e
        }, ob = function (a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        pb = function (a) {
            var b;
            try {
                b = Za.sendBeacon && Za.sendBeacon(a)
            } catch (c) {
            }
            b || ib(a)
        }, qb = function (a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        };/*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var rb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/, sb = function (a) {
        if (null == a) return String(a);
        var b = rb.exec(Object.prototype.toString.call(Object(a)));
        return b ? b[1].toLowerCase() : "object"
    }, tb = function (a, b) {
        return Object.prototype.hasOwnProperty.call(Object(a), b)
    }, ub = function (a) {
        if (!a || "object" != sb(a) || a.nodeType || a == a.window) return !1;
        try {
            if (a.constructor && !tb(a, "constructor") && !tb(a.constructor.prototype, "isPrototypeOf")) return !1
        } catch (c) {
            return !1
        }
        for (var b in a) ;
        return void 0 ===
            b || tb(a, b)
    }, N = function (a, b) {
        var c = b || ("array" == sb(a) ? [] : {}), d;
        for (d in a) if (tb(a, d)) {
            var e = a[d];
            "array" == sb(e) ? ("array" != sb(c[d]) && (c[d] = []), c[d] = N(e, c[d])) : ub(e) ? (ub(c[d]) || (c[d] = {}), c[d] = N(e, c[d])) : c[d] = e
        }
        return c
    };
    var vb = function (a) {
        if (void 0 === a || ra(a) || ub(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    };
    var wb = function () {
        var a = function (b) {
            return {
                toString: function () {
                    return b
                }
            }
        };
        return {
            wh: a("consent"),
            xh: a("consent_always_fire"),
            Af: a("convert_case_to"),
            Bf: a("convert_false_to"),
            Cf: a("convert_null_to"),
            Df: a("convert_true_to"),
            Ef: a("convert_undefined_to"),
            Sj: a("debug_mode_metadata"),
            ub: a("function"),
            Je: a("instance_name"),
            hi: a("live_only"),
            ii: a("malware_disabled"),
            ji: a("metadata"),
            oi: a("original_activity_id"),
            dk: a("original_vendor_template_id"),
            ck: a("once_on_load"),
            ni: a("once_per_event"),
            ig: a("once_per_load"),
            ek: a("priority_override"),
            fk: a("respected_consent_types"),
            og: a("setup_tags"),
            qg: a("tag_id"),
            rg: a("teardown_tags")
        }
    }();
    var Tb;
    var Ub = [], Vb = [], Wb = [], Xb = [], Yb = [], Zb = {}, $b, ac, bc, cc = function (a, b) {
        var c = a["function"], d = b && b.event;
        if (!c) throw Error("Error: No function name given for function call.");
        var e = Zb[c], f = {}, g;
        for (g in a) if (a.hasOwnProperty(g)) if (0 === g.indexOf("vtp_")) e && d && d.Eg && d.Eg(a[g]), f[void 0 !== e ? g : g.substr(4)] = a[g]; else if (g === wb.xh.toString() && a[g]) {
        }
        e && d && d.Dg && (f.vtp_gtmCachedValues = d.Dg);
        if (b) {
            if (null == b.name) {
                var k;
                a:{
                    var m = b.index;
                    if (null == m) k = ""; else {
                        var n;
                        switch (b.type) {
                            case 2:
                                n = Ub[m];
                                break;
                            case 1:
                                n = Xb[m];
                                break;
                            default:
                                k = "";
                                break a
                        }
                        var p = n && n[wb.Je];
                        k = p ? String(p) : ""
                    }
                }
                b.name = k
            }
            e && (f.vtp_gtmEntityIndex = b.index, f.vtp_gtmEntityName = b.name)
        }
        return void 0 !== e ? e(f) : Tb(c, f, b)
    }, ec = function (a, b, c) {
        c = c || [];
        var d = {}, e;
        for (e in a) a.hasOwnProperty(e) && (d[e] = dc(a[e], b, c));
        return d
    }, dc = function (a, b, c) {
        if (ra(a)) {
            var d;
            switch (a[0]) {
                case "function_id":
                    return a[1];
                case "list":
                    d = [];
                    for (var e = 1; e <
                    a.length; e++) d.push(dc(a[e], b, c));
                    return d;
                case "macro":
                    var f = a[1];
                    if (c[f]) return;
                    var g = Ub[f];
                    if (!g || b.af(g)) return;
                    c[f] = !0;
                    var k = String(g[wb.Je]);
                    try {
                        var m = ec(g, b, c);
                        m.vtp_gtmEventId = b.id;
                        b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                        d = cc(m, {event: b, index: f, type: 2, name: k});
                        bc && (d = bc.Ci(d, m))
                    } catch (w) {
                        b.Wg && b.Wg(w, Number(f), k), d = !1
                    }
                    c[f] = !1;
                    return d;
                case "map":
                    d = {};
                    for (var n = 1; n < a.length; n += 2) d[dc(a[n], b, c)] = dc(a[n + 1], b, c);
                    return d;
                case "template":
                    d = [];
                    for (var p = !1, q = 1; q < a.length; q++) {
                        var r = dc(a[q],
                            b, c);
                        ac && (p = p || r === ac.yd);
                        d.push(r)
                    }
                    return ac && p ? ac.Gi(d) : d.join("");
                case "escape":
                    d = dc(a[1], b, c);
                    if (ac && ra(a[1]) && "macro" === a[1][0] && ac.Zi(a)) return ac.rj(d);
                    d = String(d);
                    for (var t = 2; t < a.length; t++) xb[a[t]] && (d = xb[a[t]](d));
                    return d;
                case "tag":
                    var u = a[1];
                    if (!Xb[u]) throw Error("Unable to resolve tag reference " + u + ".");
                    return d = {Lg: a[2], index: u};
                case "zb":
                    var v = {arg0: a[2], arg1: a[3], ignore_case: a[5]};
                    v["function"] = a[1];
                    var y = fc(v, b, c), z = !!a[4];
                    return z || 2 !== y ? z !== (1 === y) : null;
                default:
                    throw Error("Attempting to expand unknown Value type: " +
                        a[0] + ".");
            }
        }
        return a
    }, fc = function (a, b, c) {
        try {
            return $b(ec(a, b, c))
        } catch (d) {
            JSON.stringify(a)
        }
        return 2
    };
    var jc = function (a) {
        function b(r) {
            for (var t = 0; t < r.length; t++) d[r[t]] = !0
        }

        for (var c = [], d = [], e = hc(a), f = 0; f < Vb.length; f++) {
            var g = Vb[f], k = ic(g, e);
            if (k) {
                for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                b(g.block || [])
            } else null === k && b(g.block || []);
        }
        for (var p = [], q = 0; q < Xb.length; q++) c[q] && !d[q] && (p[q] = !0);
        return p
    }, ic = function (a, b) {
        for (var c = a["if"] || [], d = 0; d < c.length; d++) {
            var e = b(c[d]);
            if (0 === e) return !1;
            if (2 === e) return null
        }
        for (var f =
            a.unless || [], g = 0; g < f.length; g++) {
            var k = b(f[g]);
            if (2 === k) return null;
            if (1 === k) return !1
        }
        return !0
    }, hc = function (a) {
        var b = [];
        return function (c) {
            void 0 === b[c] && (b[c] = fc(Wb[c], a));
            return b[c]
        }
    };
    var kc = {
        Ci: function (a, b) {
            b[wb.Af] && "string" === typeof a && (a = 1 == b[wb.Af] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(wb.Cf) && null === a && (a = b[wb.Cf]);
            b.hasOwnProperty(wb.Ef) && void 0 === a && (a = b[wb.Ef]);
            b.hasOwnProperty(wb.Df) && !0 === a && (a = b[wb.Df]);
            b.hasOwnProperty(wb.Bf) && !1 === a && (a = b[wb.Bf]);
            return a
        }
    };

    var Lc = function (a) {
        return Kc ? H.querySelectorAll(a) : null
    }, Mc = function (a, b) {
        if (!Kc) return null;
        if (Element.prototype.closest) try {
            return a.closest(b)
        } catch (e) {
            return null
        }
        var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
            d = a;
        if (!H.documentElement.contains(d)) return null;
        do {
            try {
                if (c.call(d, b)) return d
            } catch (e) {
                break
            }
            d = d.parentElement || d.parentNode
        } while (null !== d && 1 === d.nodeType);
        return null
    }, Nc = !1;
    if (H.querySelectorAll) try {
        var Oc = H.querySelectorAll(":root");
        Oc && 1 == Oc.length && Oc[0] == H.documentElement && (Nc = !0)
    } catch (a) {
    }
    var Kc = Nc;
    var Pc = {}, Qc = function (a, b) {
        Pc[a] = Pc[a] || [];
        Pc[a][b] = !0
    }, Rc = function (a) {
        for (var b = [], c = Pc[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
        for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
        return b.join("")
    }, Sc = function () {
        for (var a = [], b = Pc.GA4_EVENT || [], c = 0; c < b.length; c++) b[c] && a.push(c);
        return 0 < a.length ? a : void 0
    };
    var Q = function (a) {
        Qc("GTM", a)
    };
    var T = {
        Ub: "_ee",
        hg: "_is_passthrough_cid",
        gg: "_is_linker_valid",
        Qb: "event_callback",
        ld: "event_timeout",
        za: "gtag.config",
        Ga: "gtag.get",
        xa: "purchase",
        Mb: "refund",
        ob: "begin_checkout",
        Jb: "add_to_cart",
        Kb: "remove_from_cart",
        Gh: "view_cart",
        Gf: "add_to_wishlist",
        ya: "view_item",
        Lb: "view_promotion",
        fe: "select_promotion",
        ee: "select_item",
        pb: "view_item_list",
        Ff: "add_payment_info",
        Fh: "add_shipping_info",
        Ia: "value_key",
        Qa: "value_callback",
        U: "allow_ad_personalization_signals",
        xc: "restricted_data_processing",
        oc: "allow_google_signals",
        oa: "cookie_expires",
        rb: "cookie_update",
        yc: "session_duration",
        sd: "session_engaged_time",
        jd: "engagement_time_msec",
        Ka: "user_properties",
        V: "transport_url",
        aa: "ads_data_redaction",
        la: "user_data",
        uc: "first_party_collection",
        D: "ad_storage",
        M: "analytics_storage",
        yf: "region",
        zf: "wait_for_update",
        ia: "conversion_linker",
        Aa: "conversion_cookie_prefix",
        da: "value",
        qa: "currency",
        bg: "trip_type",
        W: "items",
        Tf: "passengers",
        ad: "allow_custom_scripts",
        hb: "session_id",
        Be: "quantity",
        Sa: "transaction_id",
        Ra: "language",
        Ob: "country",
        bd: "allow_enhanced_conversions",
        oe: "aw_merchant_id",
        me: "aw_feed_country",
        ne: "aw_feed_language",
        ke: "discount",
        P: "developer_id",
        Qf: "global_developer_id_string",
        Of: "event_developer_id_string",
        ud: "delivery_postal_code",
        ve: "estimated_delivery_date",
        te: "shipping",
        ze: "new_customer",
        pe: "customer_lifetime_value",
        ue: "enhanced_conversions",
        nc: "page_view",
        ka: "linker",
        N: "domains",
        Sb: "decorate_forms",
        Nf: "enhanced_conversions_automatic_settings",
        Nh: "auto_detection_enabled",
        xe: "ga_temp_client_id",
        he: "user_engagement",
        Ah: "app_remove",
        Bh: "app_store_refund",
        Ch: "app_store_subscription_cancel",
        Dh: "app_store_subscription_convert",
        Eh: "app_store_subscription_renew",
        Hh: "first_open",
        Ih: "first_visit",
        Jh: "in_app_purchase",
        Kh: "session_start",
        Lh: "allow_display_features",
        qc: "campaign",
        cd: "campaign_content",
        dd: "campaign_id",
        ed: "campaign_medium",
        fd: "campaign_name",
        gd: "campaign_source",
        hd: "campaign_term",
        na: "client_id",
        ja: "cookie_domain",
        Nb: "cookie_name",
        Za: "cookie_path",
        Ha: "cookie_flags",
        Pb: "custom_map",
        od: "groups",
        Sf: "non_interaction",
        eb: "page_location",
        Ae: "page_path",
        fb: "page_referrer",
        qd: "page_title",
        Ca: "send_page_view",
        tb: "send_to",
        zc: "session_engaged",
        sc: "euid_logged_in_state",
        Ac: "session_number",
        bi: "tracking_id",
        Ta: "url_passthrough",
        Rb: "accept_incoming",
        wc: "url_position",
        Wf: "phone_conversion_number",
        Uf: "phone_conversion_callback",
        Vf: "phone_conversion_css_class",
        Xf: "phone_conversion_options",
        Wh: "phone_conversion_ids",
        Vh: "phone_conversion_country_code",
        qb: "aw_remarketing",
        je: "aw_remarketing_only",
        ie: "gclid",
        Mh: "auid",
        Qh: "affiliation",
        Mf: "tax",
        se: "list_name",
        Lf: "checkout_step",
        Kf: "checkout_option",
        Rh: "coupon",
        Sh: "promotions",
        Ja: "user_id",
        Zh: "retoken",
        Ba: "cookie_prefix",
        Hf: "disable_merchant_reported_purchases",
        Jf: "dc_natural_search",
        If: "dc_custom_params",
        Rf: "method",
        ai: "search_term",
        Ph: "content_type",
        Uh: "optimize_id",
        Th: "experiments",
        cb: "google_signals"
    };
    T.nd = "google_tld";
    T.vd = "update";
    T.we = "firebase_id";
    T.vc = "ga_restrict_domain";
    T.kd = "event_settings";
    T.qe = "dynamic_event_settings";
    T.Tb = "user_data_settings";
    T.Zf = "screen_name";
    T.De = "screen_resolution";
    T.sb = "_x_19";
    T.ab = "enhanced_client_id";
    T.md = "_x_20";
    T.ye = "internal_traffic_results";
    T.Ee = "traffic_type";
    T.rd = "referral_exclusion_definition";
    T.pd = "ignore_referrer";
    T.Oh = "content_group";
    T.ma = "allow_interest_groups";
    T.Vj = "debug_mode";
    T.Ce = "redact_device_info", T.Pf = "geo_granularity";
    var od = {};
    T.eg = Object.freeze((od[T.Ff] = 1, od[T.Fh] = 1, od[T.Jb] = 1, od[T.Kb] = 1, od[T.Gh] = 1, od[T.ob] = 1, od[T.ee] = 1, od[T.pb] = 1, od[T.fe] = 1, od[T.Lb] = 1, od[T.xa] = 1, od[T.Mb] = 1, od[T.ya] = 1, od[T.Gf] = 1, od));
    T.Ge = Object.freeze([T.U, T.oc, T.rb]);
    T.li = Object.freeze([].concat(T.Ge));
    T.He = Object.freeze([T.oa, T.ld, T.yc, T.sd, T.jd]);
    T.mi = Object.freeze([].concat(T.He));
    var pd = {};
    T.ce = (pd[T.D] = "1", pd[T.M] = "2", pd);
    var rd = {}, U = G.google_tag_manager = G.google_tag_manager || {}, sd = Math.random();
    rd.Ed = "6d0";
    rd.Z = "dataLayer";
    rd.zh = "ChEI8OOglQYQ77jnv6aZ2cTAARImAO1ZiG8QZaZyE74nKijOMerBSimKOM3ib26TpzOFck/A6STG62UaAniP";
    var td = {
        __cl: !0,
        __ecl: !0,
        __ehl: !0,
        __evl: !0,
        __fal: !0,
        __fil: !0,
        __fsl: !0,
        __hl: !0,
        __jel: !0,
        __lcl: !0,
        __sdl: !0,
        __tl: !0,
        __ytl: !0
    }, ud = {__paused: !0, __tg: !0}, vd;
    for (vd in td) td.hasOwnProperty(vd) && (ud[vd] = !0);
    rd.mc = "www.googletagmanager.com";
    var wd, xd = rd.mc + "/gtm.js";
    xd = rd.mc + "/gtag/js";
    wd = xd;
    var yd = za("true"), zd = za(""), Ad = null, Bd = null, Cd = {}, Dd = {}, Ed = function () {
        var a = U.sequence || 1;
        U.sequence = a + 1;
        return a
    };
    rd.yh = "";
    var Fd = "";
    rd.Fd = Fd;
    var Hd = new ua, Id = {}, Jd = {}, Md = {
        name: rd.Z, set: function (a, b) {
            N(Ja(a, b), Id);
            Kd()
        }, get: function (a) {
            return Ld(a, 2)
        }, reset: function () {
            Hd = new ua;
            Id = {};
            Kd()
        }
    }, Ld = function (a, b) {
        return 2 != b ? Hd.get(a) : Nd(a)
    }, Nd = function (a) {
        var b, c = a.split(".");
        b = b || [];
        for (var d = Id, e = 0; e < c.length; e++) {
            if (null === d) return !1;
            if (void 0 === d) break;
            d = d[c[e]];
            if (-1 !== b.indexOf(d)) return
        }
        return d
    }, Od = function (a, b) {
        Jd.hasOwnProperty(a) || (Hd.set(a, b), N(Ja(a, b), Id), Kd())
    }, Pd = function () {
        delete Id.eventModel;
        Kd()
    }, Qd = function () {
        for (var a = ["gtm.allowlist",
            "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], b = 0; b < a.length; b++) {
            var c = a[b], d = Ld(c, 1);
            if (ra(d) || ub(d)) d = N(d);
            Jd[c] = d
        }
    }, Kd = function (a) {
        B(Jd, function (b, c) {
            Hd.set(b, c);
            N(Ja(b), Id);
            N(Ja(b, c), Id);
            a && delete Jd[b]
        })
    }, Rd = function (a, b) {
        var c, d = 1 !== (void 0 === b ? 2 : b) ? Nd(a) : Hd.get(a);
        "array" === sb(d) || "object" === sb(d) ? c = N(d) : c = d;
        return c
    };
    var Sd, Td = !1, Ud = function (a) {
        if (!Td) {
            Td = !0;
            Sd = Sd || {}
        }
        return Sd[a]
    };
    var Vd = function (a) {
        if (H.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !G.getComputedStyle) return !0;
        var c = G.getComputedStyle(a, null);
        if ("hidden" === c.visibility) return !0;
        for (var d = a, e = c; d;) {
            if ("none" === e.display) return !0;
            var f = e.opacity, g = e.filter;
            if (g) {
                var k = g.indexOf("opacity(");
                0 <= k && (g = g.substring(k + 8, g.indexOf(")", k)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g, f))
            }
            if (void 0 !== f && 0 >= f) return !0;
            (d = d.parentElement) && (e = G.getComputedStyle(d,
                null))
        }
        return !1
    };
    var de = /:[0-9]+$/, ee = function (a, b, c) {
        for (var d = a.split("&"), e = 0; e < d.length; e++) {
            var f = d[e].split("=");
            if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                var g = f.slice(1).join("=");
                return c ? g : decodeURIComponent(g).replace(/\+/g, " ")
            }
        }
    }, he = function (a, b, c, d, e) {
        b && (b = String(b).toLowerCase());
        if ("protocol" === b || "port" === b) a.protocol = fe(a.protocol) || fe(G.location.protocol);
        "port" === b ? a.port = String(Number(a.hostname ? a.port : G.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" ===
            b && (a.hostname = (a.hostname || G.location.hostname).replace(de, "").toLowerCase());
        return ge(a, b, c, d, e)
    }, ge = function (a, b, c, d, e) {
        var f, g = fe(a.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
            case "url_no_fragment":
                f = ie(a);
                break;
            case "protocol":
                f = g;
                break;
            case "host":
                f = a.hostname.replace(de, "").toLowerCase();
                if (c) {
                    var k = /^www\d*\./.exec(f);
                    k && k[0] && (f = f.substr(k[0].length))
                }
                break;
            case "port":
                f = String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
                break;
            case "path":
                a.pathname || a.hostname || Qc("TAGGING",
                    1);
                f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                var m = f.split("/");
                0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
                f = m.join("/");
                break;
            case "query":
                f = a.search.replace("?", "");
                e && (f = ee(f, e));
                break;
            case "extension":
                var n = a.pathname.split(".");
                f = 1 < n.length ? n[n.length - 1] : "";
                f = f.split("/")[0];
                break;
            case "fragment":
                f = a.hash.replace("#", "");
                break;
            default:
                f = a && a.href
        }
        return f
    }, fe = function (a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    }, ie = function (a) {
        var b = "";
        if (a && a.href) {
            var c = a.href.indexOf("#");
            b = 0 > c ? a.href : a.href.substr(0, c)
        }
        return b
    }, je = function (a) {
        var b = H.createElement("a");
        a && (b.href = a);
        var c = b.pathname;
        "/" !== c[0] && (a || Qc("TAGGING", 1), c = "/" + c);
        var d = b.hostname.replace(de, "");
        return {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: d,
            pathname: c,
            search: b.search,
            hash: b.hash,
            port: b.port
        }
    }, ke = function (a) {
        function b(n) {
            var p = n.split("=")[0];
            return 0 > d.indexOf(p) ? n : p + "=0"
        }

        function c(n) {
            return n.split("&").map(b).filter(function (p) {
                return void 0 !== p
            }).join("&")
        }

        var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
            e = je(a), f = a.split(/[?#]/)[0], g = e.search, k = e.hash;
        "?" === g[0] && (g = g.substring(1));
        "#" === k[0] && (k = k.substring(1));
        g = c(g);
        k = c(k);
        "" !== g && (g = "?" + g);
        "" !== k && (k = "#" + k);
        var m = "" + f + g + k;
        "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
        return m
    };
    var le = {};
    var Ne = {}, Oe = function (a, b) {
        if (G._gtmexpgrp && G._gtmexpgrp.hasOwnProperty(a)) return G._gtmexpgrp[a];
        void 0 === Ne[a] && (Ne[a] = Math.floor(Math.random() * b));
        return Ne[a]
    };
    var Qe = [];
    Qe[6] = !0;
    Qe[5] = !0;
    Qe[8] = !0;
    Qe[9] = !0;
    Qe[10] = !0;
    Qe[11] = !0;
    Qe[12] = !0;
    Qe[14] = !0;
    var Re = /[A-Z]+/, Se = /\s/, Te = function (a) {
        if (l(a)) {
            a = Ba(a);
            var b = a.indexOf("-");
            if (!(0 > b)) {
                var c = a.substring(0, b);
                if (Re.test(c)) {
                    for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++) if (!d[e] || Se.test(d[e]) && ("AW" !== c || 1 !== e)) return;
                    return {id: a, prefix: c, containerId: c + "-" + d[0], J: d}
                }
            }
        }
    }, Ve = function (a) {
        for (var b = {}, c = 0; c < a.length; ++c) {
            var d = Te(a[c]);
            d && (b[d.id] = d)
        }
        Ue(b);
        var e = [];
        B(b, function (f, g) {
            e.push(g)
        });
        return e
    };

    function Ue(a) {
        var b = [], c;
        for (c in a) if (a.hasOwnProperty(c)) {
            var d = a[c];
            "AW" === d.prefix && d.J[1] && b.push(d.containerId)
        }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };var We = function (a, b) {
        var c = function () {
        };
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    }, Xe = function (a) {
        var b = a;
        return function () {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };
    var Ye = function (a, b) {
        a.addEventListener && a.addEventListener.call(a, "message", b, !1)
    };

    function Ze() {
        return Ta("iPhone") && !Ta("iPod") && !Ta("iPad")
    };Ta("Opera");
    Ta("Trident") || Ta("MSIE");
    Ta("Edge");
    !Ta("Gecko") || -1 != Sa().toLowerCase().indexOf("webkit") && !Ta("Edge") || Ta("Trident") || Ta("MSIE") || Ta("Edge");
    -1 != Sa().toLowerCase().indexOf("webkit") && !Ta("Edge") && Ta("Mobile");
    Ta("Macintosh");
    Ta("Windows");
    Ta("Linux") || Ta("CrOS");
    var $e = la.navigator || null;
    $e && ($e.appVersion || "").indexOf("X11");
    Ta("Android");
    Ze();
    Ta("iPad");
    Ta("iPod");
    Ze() || Ta("iPad") || Ta("iPod");
    Sa().toLowerCase().indexOf("kaios");
    var af = function (a) {
        if (!a || !H.head) return null;
        var b, c;
        c = void 0 === c ? document : c;
        b = c.createElement("meta");
        H.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    };
    var bf = {Fi: "CN", yj: ""};
    var cf = new function (a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var ef = function () {
        var a = df, b = "Ye";
        if (a.Ye && a.hasOwnProperty(b)) return a.Ye;
        var c = new a;
        a.Ye = c;
        a.hasOwnProperty(b);
        return c
    };
    var df = function () {
        var a = {};
        this.g = function () {
            var b = cf.g, c = cf.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.o = function () {
            a[cf.g] = !0
        }
    };
    var ff = [];

    function gf() {
        var a = ab("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: hf,
            update: jf,
            addListener: kf,
            notifyListeners: lf,
            active: !1,
            usedDefault: !1,
            usedUpdate: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }

    function hf(a, b, c, d, e, f) {
        var g = gf();
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var k = g.entries, m = k[a] || {}, n = m.region, p = c && l(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var q = !!(f && 0 < f && void 0 === m.update),
                    r = {region: p, initial: "granted" === b, update: m.update, quiet: q};
                if ("" !== d || !1 !== m.initial) k[a] = r;
                q && G.setTimeout(function () {
                    k[a] === r && r.quiet && (r.quiet = !1, mf(a), lf(), Qc("TAGGING",
                        2))
                }, f)
            }
        }
    }

    function jf(a, b) {
        var c = gf();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = nf(c, a), e = c.entries, f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = nf(c, a);
            f.quiet ? (f.quiet = !1, mf(a)) : g !== d && mf(a)
        }
    }

    function kf(a, b) {
        ff.push({Se: a, Ni: b})
    }

    function mf(a) {
        for (var b = 0; b < ff.length; ++b) {
            var c = ff[b];
            ra(c.Se) && -1 !== c.Se.indexOf(a) && (c.bh = !0)
        }
    }

    function lf(a, b) {
        for (var c = 0; c < ff.length; ++c) {
            var d = ff[c];
            if (d.bh) {
                d.bh = !1;
                try {
                    d.Ni({consentEventId: a, consentPriorityId: b})
                } catch (e) {
                }
            }
        }
    }

    function nf(a, b) {
        var c = a.entries[b] || {};
        return void 0 !== c.update ? c.update : c.initial
    }

    var of = function (a) {
        var b = gf();
        b.accessedAny = !0;
        return nf(b, a)
    }, pf = function (a) {
        var b = gf();
        b.accessedDefault = !0;
        return (b.entries[a] || {}).initial
    }, qf = function (a) {
        var b = gf();
        b.accessedAny = !0;
        return !(b.entries[a] || {}).quiet
    }, rf = function () {
        if (!ef().g()) return !1;
        var a = gf();
        a.accessedAny = !0;
        return a.active
    }, sf = function () {
        var a = gf();
        a.accessedDefault = !0;
        return a.usedDefault
    }, tf = function (a, b) {
        gf().addListener(a, b)
    }, uf = function (a, b) {
        gf().notifyListeners(a, b)
    }, vf = function (a, b) {
        function c() {
            for (var e = 0; e < b.length; e++) if (!qf(b[e])) return !0;
            return !1
        }

        if (c()) {
            var d = !1;
            tf(b, function (e) {
                d || c() || (d = !0, a(e))
            })
        } else a({})
    }, wf = function (a, b) {
        function c() {
            for (var f = [], g = 0; g < d.length; g++) {
                var k = d[g];
                !1 === of(k) || e[k] || (f.push(k), e[k] = !0)
            }
            return f
        }

        var d = l(b) ? [b] : b, e = {};
        c().length !== d.length && tf(d, function (f) {
            var g = c();
            0 < g.length && (f.Se = g, a(f))
        })
    };

    function xf() {
    }

    function yf() {
    };

    function zf(a) {
        for (var b = [], c = 0; c < Af.length; c++) {
            var d = a(Af[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }

    var Af = [T.D, T.M], Bf = function (a) {
            var b = a[T.yf];
            b && Q(40);
            var c = a[T.zf];
            c && Q(41);
            for (var d = ra(b) ? b : [b], e = {hc: 0}; e.hc < d.length; e = {hc: e.hc}, ++e.hc) B(a, function (f) {
                return function (g, k) {
                    if (g !== T.yf && g !== T.zf) {
                        var m = d[f.hc], n = bf.Fi, p = bf.yj;
                        gf().set(g, k, m, n, p, c)
                    }
                }
            }(e))
        }, Cf = 0, Df = function (a, b) {
            B(a, function (e, f) {
                gf().update(e, f)
            });
            uf(b.eventId, b.priorityId);
            var c = Da(), d = c - Cf;
            Cf && 0 <= d && 1E3 > d && Q(66);
            Cf = c
        }, Ef = function (a) {
            var b = of(a);
            return void 0 != b ? b : !0
        }, Ff = function () {
            return "G1" + zf(of)
        }, Gf = function (a, b) {
            wf(a, b)
        },
        Hf = function (a, b) {
            vf(a, b)
        };
    var If = function (a) {
        var b = 1, c, d, e;
        if (a) for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
        return b
    };
    var Jf = function (a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="), k = g[0].replace(/^\s*|\s*$/g, "");
            if (k && k == a) {
                var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                m && c && (m = decodeURIComponent(m));
                d.push(m)
            }
        }
        return d
    };

    function Kf(a) {
        return "null" !== a.origin
    };var Nf = function (a, b, c, d) {
        return Lf(d) ? Jf(a, String(b || Mf()), c) : []
    }, Qf = function (a, b, c, d, e) {
        if (Lf(e)) {
            var f = Of(a, d, e);
            if (1 === f.length) return f[0].id;
            if (0 !== f.length) {
                f = Pf(f, function (g) {
                    return g.Nd
                }, b);
                if (1 === f.length) return f[0].id;
                f = Pf(f, function (g) {
                    return g.Nc
                }, c);
                return f[0] ? f[0].id : void 0
            }
        }
    };

    function Rf(a, b, c, d) {
        var e = Mf(), f = window;
        Kf(f) && (f.document.cookie = a);
        var g = Mf();
        return e != g || void 0 != c && 0 <= Nf(b, g, !1, d).indexOf(c)
    }

    var Vf = function (a, b, c) {
        function d(t, u, v) {
            if (null == v) return delete g[u], t;
            g[u] = v;
            return t + "; " + u + "=" + v
        }

        function e(t, u) {
            if (null == u) return delete g[u], t;
            g[u] = !0;
            return t + "; " + u
        }

        if (!Lf(c.Va)) return 2;
        var f;
        void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Sf(b), f = a + "=" + b);
        var g = {};
        f = d(f, "path", c.path);
        var k;
        c.expires instanceof Date ? k = c.expires.toUTCString() : null != c.expires && (k = "" + c.expires);
        f = d(f, "expires", k);
        f = d(f, "max-age", c.jk);
        f = d(f, "samesite",
            c.lk);
        c.mk && (f = e(f, "secure"));
        var m = c.domain;
        if (m && "auto" === m.toLowerCase()) {
            for (var n = Tf(), p = 0; p < n.length; ++p) {
                var q = "none" !== n[p] ? n[p] : void 0, r = d(f, "domain", q);
                r = e(r, c.flags);
                if (!Uf(q, c.path) && Rf(r, a, b, c.Va)) return 0
            }
            return 1
        }
        m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
        f = e(f, c.flags);
        return Uf(m, c.path) ? 1 : Rf(f, a, b, c.Va) ? 0 : 1
    }, Wf = function (a, b, c) {
        null == c.path && (c.path = "/");
        c.domain || (c.domain = "auto");
        return Vf(a, b, c)
    };

    function Pf(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var k = a[g], m = b(k);
            m === c ? d.push(k) : void 0 === f || m < f ? (e = [k], f = m) : m === f && e.push(k)
        }
        return 0 < d.length ? d : e
    }

    function Of(a, b, c) {
        for (var d = [], e = Nf(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."), k = g.shift();
            if (!b || -1 !== b.indexOf(k)) {
                var m = g.shift();
                m && (m = m.split("-"), d.push({id: g.join("."), Nd: 1 * m[0] || 1, Nc: 1 * m[1] || 1}))
            }
        }
        return d
    }

    var Sf = function (a) {
        a && 1200 < a.length && (a = a.substring(0, 1200));
        return a
    }, Xf = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/, Yf = /(^|\.)doubleclick\.net$/i, Uf = function (a, b) {
        return Yf.test(window.document.location.hostname) || "/" === b && Xf.test(a)
    }, Mf = function () {
        return Kf(window) ? window.document.cookie : ""
    }, Tf = function () {
        var a = [], b = window.document.location.hostname.split(".");
        if (4 === b.length) {
            var c = b[b.length - 1];
            if (parseInt(c, 10).toString() === c) return ["none"]
        }
        for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
        var e = window.document.location.hostname;
        Yf.test(e) || Xf.test(e) || a.push("none");
        return a
    }, Lf = function (a) {
        if (!ef().g() || !a || !rf()) return !0;
        if (!qf(a)) return !1;
        var b = of(a);
        return null == b ? !0 : !!b
    };
    var Zf = function (a) {
        var b = Math.round(2147483647 * Math.random());
        return a ? String(b ^ If(a) & 2147483647) : String(b)
    }, $f = function (a) {
        return [Zf(a), Math.round(Da() / 1E3)].join(".")
    }, cg = function (a, b, c, d, e) {
        var f = ag(b);
        return Qf(a, f, bg(c), d, e)
    }, dg = function (a, b, c, d) {
        var e = "" + ag(c), f = bg(d);
        1 < f && (e += "-" + f);
        return [b, e, a].join(".")
    }, ag = function (a) {
        if (!a) return 1;
        a = 0 === a.indexOf(".") ? a.substr(1) : a;
        return a.split(".").length
    }, bg = function (a) {
        if (!a || "/" === a) return 1;
        "/" !== a[0] && (a = "/" + a);
        "/" !== a[a.length - 1] && (a += "/");
        return a.split("/").length -
            1
    };

    function eg(a, b, c) {
        var d, e = Number(null != a.lb ? a.lb : void 0);
        0 !== e && (d = new Date((b || Da()) + 1E3 * (e || 7776E3)));
        return {path: a.path, domain: a.domain, flags: a.flags, encode: !!c, expires: d}
    };var fg = ["1"], gg = {}, hg = {}, jg = function (a) {
        return gg[ig(a)]
    }, mg = function (a, b) {
        b = void 0 === b ? !0 : b;
        var c = ig(a.prefix);
        if (!gg[c] && !kg(c, a.path, a.domain) && b) {
            var d = ig(a.prefix), e = $f();
            if (0 === lg(d, e, a)) {
                var f = ab("google_tag_data", {});
                f._gcl_au ? Qc("GTM", 57) : f._gcl_au = e
            }
            kg(c, a.path, a.domain)
        }
    };

    function lg(a, b, c, d) {
        var e = dg(b, "1", c.domain, c.path), f = eg(c, d);
        f.Va = "ad_storage";
        return Wf(a, e, f)
    }

    function kg(a, b, c) {
        var d = cg(a, b, c, fg, "ad_storage");
        if (!d) return !1;
        var e = d.split(".");
        5 === e.length ? (gg[a] = e.slice(0, 2).join("."), hg[a] = {
            id: e.slice(2, 4).join("."),
            Vg: Number(e[4]) || 0
        }) : 3 === e.length ? hg[a] = {id: e.slice(0, 2).join("."), Vg: Number(e[2]) || 0} : gg[a] = d;
        return !0
    }

    function ig(a) {
        return (a || "_gcl") + "_au"
    };var ng = function (a) {
        for (var b = [], c = H.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({tf: f[1], value: f[2], timestamp: Number(f[2].split(".")[1]) || 0})
        }
        b.sort(function (g, k) {
            return k.timestamp - g.timestamp
        });
        return b
    };

    function og(a, b) {
        var c = ng(a), d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].tf] || (d[c[e].tf] = []);
                var g = {version: f[0], timestamp: 1E3 * Number(f[1]), Da: f[2]};
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].tf].push(g)
            }
        }
        return d
    };

    function pg() {
        for (var a = qg, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function rg() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }

    var qg, sg;

    function tg(a) {
        function b(m) {
            for (; d < a.length;) {
                var n = a.charAt(d++), p = sg[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }

        qg = qg || rg();
        sg = sg || pg();
        for (var c = "", d = 0; ;) {
            var e = b(-1), f = b(0), g = b(64), k = b(64);
            if (64 === k && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != k && (c += String.fromCharCode(g << 6 & 192 | k)))
        }
    };var ug;
    var yg = function () {
        var a = vg, b = wg, c = xg(), d = function (g) {
            a(g.target || g.srcElement || {})
        }, e = function (g) {
            b(g.target || g.srcElement || {})
        };
        if (!c.init) {
            jb(H, "mousedown", d);
            jb(H, "keyup", d);
            jb(H, "submit", e);
            var f = HTMLFormElement.prototype.submit;
            HTMLFormElement.prototype.submit = function () {
                b(this);
                f.call(this)
            };
            c.init = !0
        }
    }, zg = function (a, b, c, d, e) {
        var f = {callback: a, domains: b, fragment: 2 === c, placement: c, forms: d, sameHost: e};
        xg().decorators.push(f)
    }, Ag = function (a, b, c) {
        for (var d = xg().decorators, e = {}, f = 0; f < d.length; ++f) {
            var g =
                d[f], k;
            if (k = !c || g.forms) a:{
                var m = g.domains, n = a, p = !!g.sameHost;
                if (m && (p || n !== H.location.hostname)) for (var q = 0; q < m.length; q++) if (m[q] instanceof RegExp) {
                    if (m[q].test(n)) {
                        k = !0;
                        break a
                    }
                } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
                    k = !0;
                    break a
                }
                k = !1
            }
            if (k) {
                var r = g.placement;
                void 0 == r && (r = g.fragment ? 2 : 1);
                r === b && Ga(e, g.callback())
            }
        }
        return e
    };

    function xg() {
        var a = ab("google_tag_data", {}), b = a.gl;
        b && b.decorators || (b = {decorators: []}, a.gl = b);
        return b
    };var Bg = /(.*?)\*(.*?)\*(.*)/, Lg = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Mg = /^(?:www\.|m\.|amp\.)+/, Ng = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Og(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }

    var Qg = function (a) {
        var b = [], c;
        for (c in a) if (a.hasOwnProperty(c)) {
            var d = a[c];
            if (void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString()) {
                b.push(c);
                var e = b, f = e.push, g, k = String(d);
                qg = qg || rg();
                sg = sg || pg();
                for (var m = [], n = 0; n < k.length; n += 3) {
                    var p = n + 1 < k.length, q = n + 2 < k.length, r = k.charCodeAt(n),
                        t = p ? k.charCodeAt(n + 1) : 0, u = q ? k.charCodeAt(n + 2) : 0, v = r >> 2,
                        y = (r & 3) << 4 | t >> 4, z = (t & 15) << 2 | u >> 6, w = u & 63;
                    q || (w = 64, p || (z = 64));
                    m.push(qg[v], qg[y], qg[z], qg[w])
                }
                g = m.join("");
                f.call(e, g)
            }
        }
        var A = b.join("*");
        return ["1", Pg(A),
            A].join("*")
    };

    function Pg(a, b) {
        var c = [G.navigator.userAgent, (new Date).getTimezoneOffset(), Za.userLanguage || Za.language, Math.floor(Da() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = ug)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, k = 0; 8 > k; k++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        ug = d;
        for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ ug[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }

    function Rg() {
        return function (a) {
            var b = je(G.location.href), c = b.search.replace("?", ""), d = ee(c, "_gl", !0) || "";
            a.query = Sg(d) || {};
            var e = he(b, "fragment").match(Og("_gl"));
            a.fragment = Sg(e && e[3] || "") || {}
        }
    }

    function Tg(a, b) {
        var c = Og(a).exec(b), d = b;
        if (c) {
            var e = c[2], f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }

    var Ug = function (a, b) {
        b || (b = "_gl");
        var c = Ng.exec(a);
        if (!c) return "";
        var d = c[1], e = Tg(b, (c[2] || "").slice(1)), f = Tg(b, (c[3] || "").slice(1));
        e.length && (e = "?" + e);
        f.length && (f = "#" + f);
        return "" + d + e + f
    }, Vg = function (a) {
        var b = Rg(), c = xg();
        c.data || (c.data = {query: {}, fragment: {}}, b(c.data));
        var d = {}, e = c.data;
        e && (Ga(d, e.query), a && Ga(d, e.fragment));
        return d
    }, Sg = function (a) {
        try {
            var b = Wg(a, 3);
            if (void 0 !== b) {
                for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                    var f = d[e], g = tg(d[e + 1]);
                    c[f] = g
                }
                Qc("TAGGING", 6);
                return c
            }
        } catch (k) {
            Qc("TAGGING",
                8)
        }
    };

    function Wg(a, b) {
        if (a) {
            var c;
            a:{
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = Bg.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && "1" === g[1]) {
                var k = g[3], m;
                a:{
                    for (var n = g[2], p = 0; p < b; ++p) if (n === Pg(k, p)) {
                        m = !0;
                        break a
                    }
                    m = !1
                }
                if (m) return k;
                Qc("TAGGING", 7)
            }
        }
    }

    function Xg(a, b, c, d) {
        function e(p) {
            p = Tg(a, p);
            var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&");
            return p + n
        }

        d = void 0 === d ? !1 : d;
        var f = Ng.exec(c);
        if (!f) return "";
        var g = f[1], k = f[2] || "", m = f[3] || "", n = a + "=" + b;
        d ? m = "#" + e(m.substring(1)) : k = "?" + e(k.substring(1));
        return "" + g + k + m
    }

    function Yg(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(), d = Ag(b, 1, c), e = Ag(b, 2, c), f = Ag(b, 3, c);
        if (Ha(d)) {
            var g = Qg(d);
            c ? Zg("_gl", g, a) : $g("_gl", g, a, !1)
        }
        if (!c && Ha(e)) {
            var k = Qg(e);
            $g("_gl", k, a, !0)
        }
        for (var m in f) if (f.hasOwnProperty(m)) a:{
            var n = m, p = f[m], q = a;
            if (q.tagName) {
                if ("a" === q.tagName.toLowerCase()) {
                    $g(n, p, q);
                    break a
                }
                if ("form" === q.tagName.toLowerCase()) {
                    Zg(n, p, q);
                    break a
                }
            }
            "string" == typeof q && Xg(n, p, q)
        }
    }

    function $g(a, b, c, d) {
        if (c.href) {
            var e = Xg(a, b, c.href, void 0 === d ? !1 : d);
            Ra.test(e) && (c.href = e)
        }
    }

    function Zg(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var k = e[g];
                    if (k.name === a) {
                        k.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var m = H.createElement("input");
                    m.setAttribute("type", "hidden");
                    m.setAttribute("name", a);
                    m.setAttribute("value", b);
                    c.appendChild(m)
                }
            } else if ("post" === d) {
                var n = Xg(a, b, c.action);
                Ra.test(n) && (c.action = n)
            }
        }
    }

    function vg(a) {
        try {
            var b;
            a:{
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || Yg(e, e.hostname)
            }
        } catch (g) {
        }
    }

    function wg(a) {
        try {
            if (a.action) {
                var b = he(je(a.action), "host");
                Yg(a, b)
            }
        } catch (c) {
        }
    }

    var ah = function (a, b, c, d) {
        yg();
        zg(a, b, "fragment" === c ? 2 : 1, !!d, !1)
    }, bh = function (a, b) {
        yg();
        zg(a, [ge(G.location, "host", !0)], b, !0, !0)
    }, ch = function () {
        var a = H.location.hostname, b = Lg.exec(H.referrer);
        if (!b) return !1;
        var c = b[2], d = b[1], e = "";
        if (c) {
            var f = c.split("/"), g = f[1];
            e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
        } else if (d) {
            if (0 === d.indexOf("xn--")) return !1;
            e = d.replace(/-/g, ".").replace(/\.\./g, "-")
        }
        var k = a.replace(Mg, ""), m = e.replace(Mg, ""), n;
        if (!(n = k === m)) {
            var p = "." + m;
            n = k.substring(k.length - p.length,
                k.length) === p
        }
        return n
    }, dh = function (a, b) {
        return !1 === a ? !1 : a || b || ch()
    };
    var eh = {};
    var fh = /^\w+$/, gh = /^[\w-]+$/, hh = {aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb"},
        ih = function () {
            if (!ef().g() || !rf()) return !0;
            var a = of("ad_storage");
            return null == a ? !0 : !!a
        }, jh = function (a, b) {
            qf("ad_storage") ? ih() ? a() : wf(a, "ad_storage") : b ? Qc("TAGGING", 3) : vf(function () {
                jh(a, !0)
            }, ["ad_storage"])
        }, lh = function (a) {
            return kh(a).map(function (b) {
                return b.Da
            })
        }, kh = function (a) {
            var b = [];
            if (!Kf(G) || !H.cookie) return b;
            var c = Nf(a, H.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d =
                {Wc: d.Wc}, e++) {
                var f = mh(c[e]);
                if (null != f) {
                    var g = f, k = g.version;
                    d.Wc = g.Da;
                    var m = g.timestamp, n = g.labels, p = sa(b, function (q) {
                        return function (r) {
                            return r.Da === q.Wc
                        }
                    }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, m), p.labels = nh(p.labels, n || [])) : b.push({
                        version: k,
                        Da: d.Wc,
                        timestamp: m,
                        labels: n
                    })
                }
            }
            b.sort(function (q, r) {
                return r.timestamp - q.timestamp
            });
            return oh(b)
        };

    function nh(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function ph(a) {
        return a && "string" == typeof a && a.match(fh) ? a : "_gcl"
    }

    var rh = function () {
        var a = je(G.location.href), b = he(a, "query", !1, void 0, "gclid"), c = he(a, "query", !1, void 0, "gclsrc"),
            d = he(a, "query", !1, void 0, "wbraid"), e = he(a, "query", !1, void 0, "dclid");
        if (!b || !c || !d) {
            var f = a.hash.replace("#", "");
            b = b || ee(f, "gclid");
            c = c || ee(f, "gclsrc");
            d = d || ee(f, "wbraid")
        }
        return qh(b, c, e, d)
    }, qh = function (a, b, c, d) {
        var e = {}, f = function (g, k) {
            e[k] || (e[k] = []);
            e[k].push(g)
        };
        e.gclid = a;
        e.gclsrc = b;
        e.dclid = c;
        void 0 !== d && gh.test(d) && (e.gbraid = d, f(d, "gb"));
        if (void 0 !== a && a.match(gh)) switch (b) {
            case void 0:
                f(a,
                    "aw");
                break;
            case "aw.ds":
                f(a, "aw");
                f(a, "dc");
                break;
            case "ds":
                f(a, "dc");
                break;
            case "3p.ds":
                f(a, "dc");
                break;
            case "gf":
                f(a, "gf");
                break;
            case "ha":
                f(a, "ha")
        }
        c && f(c, "dc");
        return e
    }, th = function (a) {
        var b = rh();
        jh(function () {
            sh(b, !1, a)
        })
    };

    function sh(a, b, c, d, e) {
        function f(y, z) {
            var w = uh(y, g);
            w && (Wf(w, z, k), m = !0)
        }

        c = c || {};
        e = e || [];
        var g = ph(c.prefix);
        d = d || Da();
        var k = eg(c, d, !0);
        k.Va = "ad_storage";
        var m = !1, n = Math.round(d / 1E3), p = function (y) {
            var z = ["GCL", n, y];
            0 < e.length && z.push(e.join("."));
            return z.join(".")
        };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if ((void 0 == eh.enable_gbraid_cookie_write ? 0 : eh.enable_gbraid_cookie_write) && !m && a.gb) {
            var q = a.gb[0], r = uh("gb",
                g), t = !1;
            if (!b) for (var u = kh(r), v = 0; v < u.length; v++) u[v].Da === q && u[v].labels && 0 < u[v].labels.length && (t = !0);
            t || f("gb", p(q))
        }
    }

    var wh = function (a, b) {
        var c = Vg(!0);
        jh(function () {
            for (var d = ph(b.prefix), e = 0; e < a.length; ++e) {
                var f = a[e];
                if (void 0 !== hh[f]) {
                    var g = uh(f, d), k = c[g];
                    if (k) {
                        var m = Math.min(vh(k), Da()), n;
                        b:{
                            var p = m;
                            if (Kf(G)) for (var q = Nf(g, H.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r) if (vh(q[r]) > p) {
                                n = !0;
                                break b
                            }
                            n = !1
                        }
                        if (!n) {
                            var t = eg(b, m, !0);
                            t.Va = "ad_storage";
                            Wf(g, k, t)
                        }
                    }
                }
            }
            sh(qh(c.gclid, c.gclsrc), !1, b)
        })
    }, uh = function (a, b) {
        var c = hh[a];
        if (void 0 !== c) return b + c
    }, vh = function (a) {
        return 0 !== xh(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
            0) : 0
    };

    function mh(a) {
        var b = xh(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            Da: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function xh(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !gh.test(a[2]) ? [] : a
    }

    var yh = function (a, b, c, d, e) {
        if (ra(b) && Kf(G)) {
            var f = ph(e), g = function () {
                for (var k = {}, m = 0; m < a.length; ++m) {
                    var n = uh(a[m], f);
                    if (n) {
                        var p = Nf(n, H.cookie, void 0, "ad_storage");
                        p.length && (k[n] = p.sort()[p.length - 1])
                    }
                }
                return k
            };
            jh(function () {
                ah(g, b, c, d)
            })
        }
    }, oh = function (a) {
        return a.filter(function (b) {
            return gh.test(b.Da)
        })
    }, zh = function (a, b) {
        if (Kf(G)) {
            for (var c = ph(b.prefix), d = {}, e = 0; e < a.length; e++) hh[a[e]] && (d[a[e]] = hh[a[e]]);
            jh(function () {
                B(d, function (f, g) {
                    var k = Nf(c + g, H.cookie, void 0, "ad_storage");
                    k.sort(function (t,
                                     u) {
                        return vh(u) - vh(t)
                    });
                    if (k.length) {
                        var m = k[0], n = vh(m), p = 0 !== xh(m.split(".")).length ? m.split(".").slice(3) : [], q = {},
                            r;
                        r = 0 !== xh(m.split(".")).length ? m.split(".")[2] : void 0;
                        q[f] = [r];
                        sh(q, !0, b, n, p)
                    }
                })
            })
        }
    };

    function Ah(a, b) {
        for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
        return !1
    }

    var Bh = function (a) {
        function b(e, f, g) {
            g && (e[f] = g)
        }

        if (rf()) {
            var c = rh();
            if (Ah(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.gbraid);
                bh(function () {
                    return d
                }, 3);
                bh(function () {
                    var e = {};
                    return e._up = "1", e
                }, 1)
            }
        }
    };

    function Ch(a, b) {
        var c = ph(b), d = uh(a, c);
        if (!d) return 0;
        for (var e = kh(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function Dh(a) {
        var b = 0, c;
        for (c in a) for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    };var Sh = function () {
        var a = !1;
        return a
    };
    var Th = {H: "UA-4067813-27", kc: ""}, Uh = {Zg: "UA-4067813-27", ah: "UA-4067813-27"}, Vh = function () {
        var a = [Th.H];
        return a
    }, Wh = function () {
        var a = [Th.H];
        return a
    }, Xh = function () {
        this.container = {};
        this.destination = {};
        this.canonical = {}
    }, Zh = function (a) {
        return Yh().container.hasOwnProperty(a)
    };

    function Yh() {
        var a = U.tidr;
        a || (a = new Xh, U.tidr = a);
        return a
    }

    var $h;
    if (3 === rd.Ed.length) $h = "g"; else {
        var ai = "G";
        ai = "g";
        $h = ai
    }
    var bi = {"": "n", UA: "u", AW: "a", DC: "d", G: "e", GF: "f", HA: "h", GTM: $h, OPT: "o"}, ci = function (a) {
        var b = Th.H.split("-"), c = b[0].toUpperCase(), d = bi[c] || "i",
            e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "", f;
        if (3 === rd.Ed.length) {
            var g = "w";
            g = Sh() ? "s" : "o";
            f = "2" + g
        } else f = "";
        return f + d + rd.Ed + e
    };
    var di = !1;
    var ei = function () {
        this.g = {}
    }, fi = function (a, b, c) {
        null != c && (a.g[b] = c)
    }, gi = function (a) {
        return Object.keys(a.g).map(function (b) {
            return encodeURIComponent(b) + "=" + encodeURIComponent(a.g[b])
        }).join("&")
    }, ii = function (a, b, c, d, e) {
    };
    var ki = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/), li = {
        cl: ["ecl"],
        customPixels: ["nonGooglePixels"],
        ecl: ["cl"],
        ehl: ["hl"],
        hl: ["ehl"],
        html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        nonGooglePixels: [],
        nonGoogleScripts: ["nonGooglePixels"],
        nonGoogleIframes: ["nonGooglePixels"]
    }, mi = {
        cl: ["ecl"],
        customPixels: ["customScripts", "html"],
        ecl: ["cl"],
        ehl: ["hl"],
        hl: ["ehl"],
        html: ["customScripts"],
        customScripts: ["html"],
        nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
        nonGoogleScripts: ["customScripts", "html"],
        nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    }, ni = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var oi = function () {
        var a = !1;
        a = !0;
        return a
    }, qi = function (a) {
        var b = Ld("gtm.allowlist") || Ld("gtm.whitelist");
        b && Q(9);
        oi() && (b = ["google", "gtagfl", "lcl", "zone"]);
        var c = b && Ia(Aa(b), li), d = Ld("gtm.blocklist") ||
            Ld("gtm.blacklist");
        d || (d = Ld("tagTypeBlacklist")) && Q(3);
        d ? Q(8) : d = [];
        pi() && (d = Aa(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
        0 <= Aa(d).indexOf("google") && Q(2);
        var e = d && Ia(Aa(d), mi), f = {};
        return function (g) {
            var k = g && g[wb.ub];
            if (!k || "string" != typeof k) return !0;
            k = k.replace(/^_*/, "");
            if (void 0 !== f[k]) return f[k];
            var m = Dd[k] || [], n = a(k, m);
            if (b) {
                var p;
                if (p = n) a:{
                    if (0 > c.indexOf(k)) if (m && 0 < m.length) for (var q = 0; q < m.length; q++) {
                        if (0 > c.indexOf(m[q])) {
                            Q(11);
                            p = !1;
                            break a
                        }
                    } else {
                        p = !1;
                        break a
                    }
                    p = !0
                }
                n = p
            }
            var r = !1;
            if (d) {
                var t = 0 <= e.indexOf(k);
                if (t) r = t; else {
                    var u = va(e, m || []);
                    u && Q(10);
                    r = u
                }
            }
            var v = !n || r;
            v || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = va(e, ni));
            return f[k] = v
        }
    }, pi = function () {
        return ki.test(G.location && G.location.hostname)
    };
    var ti = function (a) {
    }, xi = function (a) {
    }, yi =
        function () {
            return "&tc=" + Xb.filter(function (a) {
                return a
            }).length
        }, Bi = function () {
        2022 <= zi().length && Ai()
    }, Ci = function (a) {
        return a.match(/^(gtm|gtag)\./) ? encodeURIComponent(a) : "*"
    }, Ei = function () {
        Di || (Di = G.setTimeout(Ai, 500))
    }, Ai = function () {
        Di && (G.clearTimeout(Di), Di = void 0);
        if (void 0 !== Fi && (!Gi[Fi] || Hi || Ii)) if (Ji[Fi] || Ki.aj() || 0 >= Li--) Q(1), Ji[Fi] = !0; else {
            Ki.zj();
            var a = zi(!0);
            ib(a);
            if (Mi || Ni && 0 < Oi.length) {
                var b = a.replace("/a?", "/td?");
                ib(b)
            }
            Gi[Fi] = !0;
            Ni = Mi = Pi = Qi = Ri = Ii = Hi = "";
            Oi = []
        }
    }, zi = function (a) {
        var b =
            Fi;
        if (void 0 === b) return "";
        var c = Rc("GTM"), d = Rc("TAGGING");
        return [Si, Gi[b] ? "" : "&es=1", Ti[b], ti(b), c ? "&u=" + c : "", d ? "&ut=" + d : "", yi(), Hi, Ii, Ri, Qi, xi(a), Pi, Mi, Ni ? "&dl=" + encodeURIComponent(Ni) : "", 0 < Oi.length ? "&tdp=" + Oi.join(".") : "", "&z=0"].join("")
    }, Vi = function () {
        Si = Ui()
    }, Ui = function () {
        return [Wi, "&v=3&t=t", "&pid=" + ta(), "&rv=" + rd.Ed].join("")
    }, wi = ["L", "S", "Y"], si = ["S", "E"], Xi = {sampleRate: "0.005000", sh: "", rh: Number("5")}, Yi =
        0 <= H.location.search.indexOf("?gtm_latency=") || 0 <= H.location.search.indexOf("&gtm_latency="), Zi;
    if (!(Zi = Yi)) {
        var $i = Math.random(), aj = Xi.sampleRate;
        Zi = $i < aj
    }
    var bj = Zi, Wi = "https://www.googletagmanager.com/a?id=" + Th.H + "&cv=1",
        cj = {label: Th.H + " Container", children: [{label: "Initialization", children: []}]}, Si = Ui(), Gi = {},
        Hi = "", Ii = "", Pi = "", Qi = "", Mi = "", Oi =
            [], Ni = "", vi = {}, ui = !1, ri = {}, dj = {}, Ri = "", Fi = void 0, Ti = {}, Ji = {}, Di = void 0, ej = 5;
    0 < Xi.rh && (ej = Xi.rh);
    var Ki = function (a, b) {
        for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
        return {
            aj: function () {
                return c < a ? !1 : Da() - d[c % a] < b
            }, zj: function () {
                var f = c++ % a;
                d[f] = Da()
            }
        }
    }(ej, 1E3), Li = 1E3, gj = function (a, b) {
        if (bj && void 0 !== a && !Ji[a] && Fi !== a) {
            Ai();
            Fi = a;
            Pi = Hi = "";
            Ti[a] = "&e=" + Ci(b) + "&eid=" + a;
            Ei();
        }
    }, hj = function (a, b, c, d) {
        if (bj && b) {
            var e, f = String(b[wb.ub] || "").replace(/_/g, "");
            0 === f.indexOf("cvt") && (f = "cvt");
            e = f;
            var g = c + e;
            if (!Ji[a]) {
                a !== Fi && (Ai(), Fi = a);
                Hi = Hi ? Hi + "." + g : "&tr=" + g;
                var k = b["function"];
                if (!k) throw Error("Error: No function name given for function call.");
                var m = (Zb[k] ? "1" : "2") + e;
                Pi = Pi ? Pi + "." + m : "&ti=" + m;
                Ei();
                Bi()
            }
        }
    };
    var oj = function (a, b, c) {
        if (bj && void 0 !== a && !Ji[a]) {
            a !== Fi && (Ai(), Fi = a);
            var d = c + b;
            Ii = Ii ? Ii + "." + d : "&epr=" + d;
            Ei();
            Bi()
        }
    }, pj = function (a, b, c) {
    };
    var qj = {initialized: 11, complete: 12, interactive: 13}, rj = {}, sj = Object.freeze((rj[T.Ub] = !0, rj)),
        tj = {}, uj = Object.freeze((tj[T.Ca] = !0, tj)),
        vj = 0 <= H.location.search.indexOf("?gtm_diagnostics=") || 0 <= H.location.search.indexOf("&gtm_diagnostics="),
        xj = function (a, b, c) {
            if ("config" !== a) return;
            var d, e = ab("google_tag_data", {});
            e.td || (e.td = {});
            d = e.td;
            var f = N(c.globalConfig);
            N(c.eventModel, f);
            var g = [], k;
            for (k in d) {
                var m =
                    wj(d[k], f);
                m.length && (vj && console.log(m), g.push(k))
            }
            if (g.length) {
                if (g.length) {
                    var n = b + "*" + g.join(".");
                    Mi = Mi ? Mi + "!" + n : "&tdc=" + n
                }
                Qc("TAGGING", qj[H.readyState] || 14)
            }
            d[b] = f;
        }, yj = function () {
            var a = Th.H;
        };

    function zj(a, b) {
        var c = {}, d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function wj(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b) return [];
        var e = function (q, r) {
            var t = r[q];
            return void 0 === t ? uj[q] : t
        }, f;
        for (f in zj(a, b)) if (!sj[f]) {
            var g = (d ? d + "." : "") + f, k = e(f, a), m = e(f, b), n = "object" === sb(k) || "array" === sb(k),
                p = "object" === sb(m) || "array" === sb(m);
            if (n && p) wj(k, m, c, g); else if (n || p || k !== m) c[g] = !0
        }
        return Object.keys(c)
    };var Aj = !1, Bj = 0, Cj = [];

    function Dj(a) {
        if (!Aj) {
            var b = H.createEventObject, c = "complete" == H.readyState, d = "interactive" == H.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Aj = !0;
                for (var e = 0; e < Cj.length; e++) J(Cj[e])
            }
            Cj.push = function () {
                for (var f = 0; f < arguments.length; f++) J(arguments[f]);
                return 0
            }
        }
    }

    function Ej() {
        if (!Aj && 140 > Bj) {
            Bj++;
            try {
                H.documentElement.doScroll("left"), Dj()
            } catch (a) {
                G.setTimeout(Ej, 50)
            }
        }
    }

    var Fj = function (a) {
        Aj ? a() : Cj.push(a)
    };
    var Gj = function (a, b) {
        return {entityType: 1, indexInOriginContainer: a, nameInOriginContainer: b, originContainerId: Th.H}
    };
    var Ij = function (a, b) {
        this.g = !1;
        this.C = [];
        this.I = {tags: []};
        this.X = !1;
        this.o = this.s = 0;
        Hj(this, a, b)
    }, Jj = function (a, b, c, d) {
        if (ud.hasOwnProperty(b) || "__zone" === b) return -1;
        var e = {};
        ub(d) && (e = N(d, e));
        e.id = c;
        e.status = "timeout";
        return a.I.tags.push(e) - 1
    }, Kj = function (a, b, c, d) {
        var e = a.I.tags[b];
        e && (e.status = c, e.executionTime = d)
    }, Lj = function (a) {
        if (!a.g) {
            for (var b = a.C, c = 0; c < b.length; c++) b[c]();
            a.g = !0;
            a.C.length = 0
        }
    }, Hj = function (a, b, c) {
        void 0 !== b && Mj(a, b);
        c && G.setTimeout(function () {
            return Lj(a)
        }, Number(c))
    }, Mj =
        function (a, b) {
            var c = Fa(function () {
                return J(function () {
                    b(Th.H, a.I)
                })
            });
            a.g ? c() : a.C.push(c)
        }, dk = function (a) {
        a.s++;
        return Fa(function () {
            a.o++;
            a.X && a.o >= a.s && Lj(a)
        })
    }, ek = function (a) {
        a.X = !0;
        a.o >= a.s && Lj(a)
    };
    var fk = function () {
        function a(d) {
            return !qa(d) || 0 > d ? 0 : d
        }

        if (!U._li && G.performance && G.performance.timing) {
            var b = G.performance.timing.navigationStart, c = qa(Md.get("gtm.start")) ? Md.get("gtm.start") : 0;
            U._li = {cst: a(c - b), cbt: a(Bd - b)}
        }
    }, gk = function (a) {
        G.performance && G.performance.mark(Th.H + "_" + a + "_start")
    }, hk = function (a) {
        if (G.performance) {
            var b = Th.H + "_" + a + "_start", c = Th.H + "_" + a + "_duration";
            G.performance.measure(c, b);
            var d = G.performance.getEntriesByName(c)[0];
            G.performance.clearMarks(b);
            G.performance.clearMeasures(c);
            var e = U._p || {};
            void 0 === e[a] && (e[a] = d.duration, U._p = e);
            return d.duration
        }
    }, ik = function () {
        if (G.performance && G.performance.now) {
            var a = U._p || {};
            a.PAGEVIEW = G.performance.now();
            U._p = a
        }
    };
    var jk = {}, kk = function () {
        return G.GoogleAnalyticsObject && G[G.GoogleAnalyticsObject]
    }, lk = !1;
    var mk = function (a) {
        G.GoogleAnalyticsObject || (G.GoogleAnalyticsObject = a || "ga");
        var b = G.GoogleAnalyticsObject;
        if (G[b]) G.hasOwnProperty(b) || Q(12); else {
            var c = function () {
                c.q = c.q || [];
                c.q.push(arguments)
            };
            c.l = Number(Ca());
            G[b] = c
        }
        fk();
        return G[b]
    }, nk = function (a) {
        if (rf()) {
            var b = kk();
            b(a + "require", "linker");
            b(a + "linker:passthrough", !0)
        }
    };

    function ok() {
        return G.GoogleAnalyticsObject || "ga"
    }

    var pk = function (a) {
    }, qk = function (a, b) {
        return function () {
            var c = kk(), d = c && c.getByName && c.getByName(a);
            if (d) {
                var e = d.get("sendHitTask");
                d.set("sendHitTask", function (f) {
                    var g = f.get("hitPayload"), k = f.get("hitCallback"), m = 0 > g.indexOf("&tid=" + b);
                    m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                    e(f);
                    m && (f.set("hitPayload",
                        g, !0), f.set("hitCallback", k, !0), f.set("_x_19", void 0, !0), e(f))
                })
            }
        }
    };

    function vk(a, b, c, d) {
        var e = Xb[a], f = wk(a, b, c, d);
        if (!f) return null;
        var g = dc(e[wb.og], c, []);
        if (g && g.length) {
            var k = g[0];
            f = vk(k.index, {onSuccess: f, onFailure: 1 === k.Lg ? b.terminate : f, terminate: b.terminate}, c, d)
        }
        return f
    }

    function wk(a, b, c, d) {
        function e() {
            if (f[wb.ii]) k(); else {
                var y = ec(f, c, []);
                var z = y[wb.wh];
                if (null != z) for (var w = 0; w < z.length; w++) if (!Ef(z[w])) {
                    k();
                    return
                }
                var A = Jj(c.xb, String(f[wb.ub]), Number(f[wb.qg]), y[wb.ji]), x = !1;
                y.vtp_gtmOnSuccess = function () {
                    if (!x) {
                        x = !0;
                        var F = Da() - E;
                        hj(c.id, Xb[a], "5", F);
                        Kj(c.xb, A, "success",
                            F);
                        g()
                    }
                };
                y.vtp_gtmOnFailure = function () {
                    if (!x) {
                        x = !0;
                        var F = Da() - E;
                        hj(c.id, Xb[a], "6", F);
                        Kj(c.xb, A, "failure", F);
                        k()
                    }
                };
                y.vtp_gtmTagId = f.tag_id;
                y.vtp_gtmEventId = c.id;
                c.priorityId && (y.vtp_gtmPriorityId = c.priorityId);
                hj(c.id, f, "1");
                var C = function () {
                    var F = Da() - E;
                    hj(c.id, f, "7", F);
                    Kj(c.xb, A, "exception",
                        F);
                    x || (x = !0, k())
                };
                var E = Da();
                try {
                    cc(y, {event: c, index: a, type: 1})
                } catch (F) {
                    C(F)
                }
            }
        }

        var f = Xb[a], g = b.onSuccess, k = b.onFailure, m = b.terminate;
        if (c.af(f)) return null;
        var n = dc(f[wb.rg], c, []);
        if (n && n.length) {
            var p = n[0], q = vk(p.index, {
                onSuccess: g, onFailure: k,
                terminate: m
            }, c, d);
            if (!q) return null;
            g = q;
            k = 2 === p.Lg ? m : q
        }
        if (f[wb.ig] || f[wb.ni]) {
            var r = f[wb.ig] ? Yb : c.Mj, t = g, u = k;
            if (!r[a]) {
                e = Fa(e);
                var v = xk(a, r, e);
                g = v.onSuccess;
                k = v.onFailure
            }
            return function () {
                r[a](t, u)
            }
        }
        return e
    }

    function xk(a, b, c) {
        var d = [], e = [];
        b[a] = yk(d, e, c);
        return {
            onSuccess: function () {
                b[a] = zk;
                for (var f = 0; f < d.length; f++) d[f]()
            }, onFailure: function () {
                b[a] = Ak;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function yk(a, b, c) {
        return function (d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function zk(a) {
        a()
    }

    function Ak(a, b) {
        b()
    };

    function Bk(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return je("" + c + b).href
        }
    }

    function Ck(a, b) {
        return Dk() ? Bk(a, b) : void 0
    }

    function Dk() {
        var a = !1;
        return a
    }

    function Ek() {
        return !!rd.Fd && "SGTM_TOKEN" !== rd.Fd.split("@@").join("")
    };var Gk = function (a, b, c, d) {
        return (2 === Fk() || d || "http:" != G.location.protocol ? a : b) + c
    }, Fk = function () {
        var a = gb(), b;
        if (1 === a) a:{
            var c = wd;
            c = c.toLowerCase();
            for (var d = "https://" + c, e = "http://" + c, f = 1, g = H.getElementsByTagName("script"), k = 0; k < g.length && 100 > k; k++) {
                var m = g[k].src;
                if (m) {
                    m = m.toLowerCase();
                    if (0 === m.indexOf(e)) {
                        b = 3;
                        break a
                    }
                    1 === f && 0 === m.indexOf(d) && (f = 2)
                }
            }
            b = f
        } else b = a;
        return b
    };
    var Hk = !1;
    var Jk = function (a, b, c) {
        if (!Ik() && !Zh(a)) {
            var d = c ? "/gtag/js" : "/gtm.js", e = "?id=" + encodeURIComponent(a) + "&l=" + rd.Z,
                f = 0 === a.indexOf("GTM-");
            f || (e += "&cx=c");
            var g = Ek();
            g && (e += "&sign=" + rd.Fd);
            var k = Ck(b, d + e);
            if (!k) {
                var m = rd.mc + d;
                g && $a && f && (m = $a.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                k = Gk("https://", "http://", m + e)
            }
            Yh().container[a] = !0;
            fb(k)
        }
    }, Kk = function (a, b) {
        if (Hk) {
            var c;
            if (c = !Ik()) c = !Yh().destination.hasOwnProperty(a);
            if (c) {
                var d = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + rd.Z + "&cx=c";
                Ek() && (d += "&sign=" + rd.Fd);
                var e = Ck(b, d);
                e || (e = Gk("https://", "http://", rd.mc + d));
                Yh().destination[a] = !0;
                fb(e)
            }
        } else Jk(a, b, !0)
    };

    function Ik() {
        if (Sh()) {
            return !0
        }
        return !1
    }

    var Mk = function (a, b) {
        return 1 === arguments.length ? Lk("config", a) : Lk("config", a, b)
    }, Nk = function (a, b, c) {
        c = c || {};
        c[T.tb] = a;
        if ("G" === a.split("-")[0]) for (var d in c) "_" === d[0] && delete c[d];
        return Lk("event", b, c)
    };

    function Lk(a) {
        return arguments
    }

    var Ok = function () {
        this.g = [];
        this.o = []
    };
    Ok.prototype.enqueue = function (a, b, c) {
        var d = this.g.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.fromMessageBus = !0;
        c.priorityId = d;
        var e = {message: a, notBeforeEventId: b, priorityId: d, messageContext: c};
        this.g.push(e);
        for (var f = 0; f < this.o.length; f++) try {
            this.o[f](e)
        } catch (g) {
        }
    };
    Ok.prototype.listen = function (a) {
        this.o.push(a)
    };
    Ok.prototype.get = function () {
        for (var a = {}, b = 0; b < this.g.length; b++) {
            var c = this.g[b], d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    var Qk = function (a, b, c) {
        Pk().enqueue(a, b, c)
    }, Sk = function () {
        var a = Rk;
        Pk().listen(a)
    };

    function Pk() {
        var a = U.mb;
        a || (a = new Ok, U.mb = a);
        return a
    }

    var $k = function (a) {
        var b = U.zones;
        return b ? b.getIsAllowedFn(Vh(), a) : function () {
            return !0
        }
    }, al = function (a) {
        var b = U.zones;
        return b ? b.isActive(Vh(), a) : !0
    };
    var dl = function (a, b) {
        for (var c = [], d = 0; d < Xb.length; d++) if (a[d]) {
            var e = Xb[d];
            var f = dk(b.xb);
            try {
                var g = vk(d, {onSuccess: f, onFailure: f, terminate: f}, b, d);
                if (g) {
                    var k = c, m = k.push, n = d, p = e["function"];
                    if (!p) throw"Error: No function name given for function call.";
                    var q = Zb[p];
                    m.call(k, {mh: n, dh: q ? q.priorityOverride || 0 : 0, execute: g})
                } else bl(d, b), f()
            } catch (t) {
                f()
            }
        }
        c.sort(cl);
        for (var r = 0; r < c.length; r++) c[r].execute();
        return 0 <
            c.length
    };

    function cl(a, b) {
        var c, d = b.dh, e = a.dh;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c; else {
            var g = a.mh, k = b.mh;
            f = g > k ? 1 : g < k ? -1 : 0
        }
        return f
    }

    function bl(a, b) {
        if (!bj) return;
        var c = function (d) {
            var e = b.af(Xb[d]) ? "3" : "4", f = dc(Xb[d][wb.og], b, []);
            f && f.length && c(f[0].index);
            hj(b.id, Xb[d], e);
            var g = dc(Xb[d][wb.rg], b, []);
            g && g.length && c(g[0].index)
        };
        c(a);
    }

    var gl = !1, el;
    var ll = function (a) {
        var b = Da(), c = a["gtm.uniqueEventId"], d = a["gtm.priorityId"], e = a.event;
        if ("gtm.js" === e) {
            if (gl) return !1;
            gl = !0;
        }
        var k, m = !1;
        if (al(c)) k = $k(c); else {
            if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e) return !1;
            m = !0;
            k = $k(Number.MAX_SAFE_INTEGER)
        }
        gj(c, e);
        var n = a.eventCallback, p = a.eventTimeout, q = n;
        var r = {
            id: c, priorityId: d, name: e, af: qi(k), Mj: [], Wg: function () {
                Q(6)
            }, Dg: hl(), Eg: il(c), xb: new Ij(q, p)
        }, t = jc(r);
        m && (t = jl(t));
        var u = dl(t, r), v = !1;
        ek(r.xb);
        "gtm.js" !== e && "gtm.sync" !== e || pk(Th.H);
        return kl(t, u) || v
    };

    function il(a) {
        return function (b) {
            bj && (vb(b) || pj(a, "input", b))
        }
    }

    function hl() {
        var a = {};
        a.event = Rd("event", 1);
        a.ecommerce = Rd("ecommerce", 1);
        a.gtm = Rd("gtm");
        a.eventModel = Rd("eventModel");
        return a
    }

    function jl(a) {
        for (var b = [], c = 0; c < a.length; c++) a[c] && (td[String(Xb[c][wb.ub])] && (b[c] = !0), void 0 !== Xb[c][wb.oi] && (b[c] = !0));
        return b
    }

    function kl(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++) if (a[c] && Xb[c] && !ud[String(Xb[c][wb.ub])]) return !0;
        return !1
    }

    var ml = function (a, b) {
        this.eventId = a;
        this.priorityId = b;
        this.eventModel = {};
        this.targetConfig = {};
        this.containerConfig = {};
        this.globalConfig = {};
        this.dataLayerConfig = {};
        this.remoteConfig = {};
        this.eventMetadata = {};
        this.onSuccess = function () {
        };
        this.onFailure = function () {
        };
        this.setContainerTypeLoaded = function () {
        };
        this.getContainerTypeLoaded = function () {
        };
        this.isGtmEvent = !1
    }, nl = function (a, b) {
        a.eventModel = b;
        return a
    }, ol = function (a, b) {
        a.targetConfig = b;
        return a
    }, pl = function (a, b) {
        a.containerConfig = b;
        return a
    }, ql = function (a,
                      b) {
        a.globalConfig = b;
        return a
    }, rl = function (a, b) {
        a.dataLayerConfig = b;
        return a
    }, sl = function (a, b) {
        a.remoteConfig = b;
        return a
    }, tl = function (a, b) {
        a.eventMetadata = b || {};
        return a
    }, ul = function (a, b) {
        a.onSuccess = b;
        return a
    }, vl = function (a, b) {
        a.setContainerTypeLoaded = b;
        return a
    }, wl = function (a, b) {
        a.getContainerTypeLoaded = b;
        return a
    }, xl = function (a, b) {
        a.onFailure = b;
        return a
    };
    ml.prototype.getWithConfig = function (a) {
        if (void 0 !== this.eventModel[a]) return this.eventModel[a];
        if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
        if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
        yl(this, this.globalConfig[a], this.dataLayerConfig[a]) && (Q(71), Q(79));
        if (void 0 !==
            this.globalConfig[a]) return this.globalConfig[a];
        if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a]
    };
    ml.prototype.getTopLevelKeys = function () {
        function a(f) {
            for (var g = Object.keys(f), k = 0; k < g.length; ++k) b[g[k]] = 1
        }

        var b = {};
        a(this.eventModel);
        a(this.targetConfig);
        a(this.containerConfig);
        a(this.globalConfig);
        for (var c = Object.keys(this.dataLayerConfig), d = 0; d < c.length; d++) {
            var e = c[d];
            if ("event" !== e && "gtm" !== e && "tagTypeBlacklist" !== e && !b.hasOwnProperty(e)) {
                Q(71);
                Q(80);
                break
            }
        }
        return Object.keys(b)
    };
    ml.prototype.getMergedValues = function (a, b) {
        function c(k) {
            ub(k) && B(k, function (m, n) {
                e = !0;
                d[m] = n
            })
        }

        var d = {}, e = !1;
        b && 1 !== b || (c(this.remoteConfig[a]), c(this.globalConfig[a]), c(this.containerConfig[a]), c(this.targetConfig[a]));
        b && 2 !== b || c(this.eventModel[a]);
        var f = e, g = d;
        d = {};
        e = !1;
        b && 1 !== b || (c(this.remoteConfig[a]), c(this.dataLayerConfig[a]), c(this.containerConfig[a]), c(this.targetConfig[a]));
        b && 2 !==
        b || c(this.eventModel[a]);
        if (e !== f || yl(this, d, g)) Q(71), Q(81);
        e = f;
        d = g;
        return e ? d : void 0
    };
    ml.prototype.getKeysFromFirstOfAnyScope = function (a) {
        var b = {}, c = !1, d = function (g) {
            for (var k = 0; k < a.length; k++) void 0 !== g[a[k]] && (b[a[k]] = g[a[k]], c = !0);
            return c
        };
        if (d(this.eventModel) || d(this.targetConfig) || d(this.containerConfig)) return b;
        d(this.globalConfig);
        var e = b, f = c;
        b = {};
        c = !1;
        d(this.dataLayerConfig);
        yl(this, b, e) && (Q(71), Q(82));
        b = e;
        c = f;
        if (c) return b;
        d(this.remoteConfig);
        return b
    };
    var yl = function (a, b, c) {
        try {
            if (b === c) return !1;
            var d = sb(b);
            if (d !== sb(c) || !(ub(b) && ub(c) || "array" === d)) return !0;
            if ("array" === d) {
                if (b.length !== c.length) return !0;
                for (var e = 0; e < b.length; e++) if (yl(a, b[e], c[e])) return !0
            } else {
                for (var f in c) if (!b.hasOwnProperty(f)) return !0;
                for (var g in b) if (!c.hasOwnProperty(g) || yl(a, b[g], c[g])) return !0
            }
        } catch (k) {
            Q(72)
        }
        return !1
    };
    var zl = function () {
        U.dedupe_gclid || (U.dedupe_gclid = "" + $f());
        return U.dedupe_gclid
    };

    function Al(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };var Bl = function () {
    };
    var Cl = function (a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }, Dl = function (a, b, c) {
        this.o = a;
        this.g = null;
        this.I = {};
        this.Na = 0;
        this.X = void 0 === b ? 500 : b;
        this.C = void 0 === c ? !1 : c;
        this.s = null
    };
    ka(Dl, Bl);
    Dl.prototype.addEventListener = function (a) {
        var b = this, c = {internalBlockOnErrors: this.C}, d = Xe(function () {
            return a(c)
        }), e = 0;
        -1 !== this.X && (e = setTimeout(function () {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.X));
        var f = function (g, k) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = Cl(c), c.internalBlockOnErrors = b.C, k && 0 === c.internalErrorState || (c.tcString = "tcunavailable", k || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            El(this, "addEventListener", f)
        } catch (g) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    Dl.prototype.removeEventListener = function (a) {
        a && a.listenerId && El(this, "removeEventListener", null, a.listenerId)
    };
    var Gl = function (a, b, c) {
        var d;
        d = void 0 === d ? "755" : d;
        var e;
        a:{
            if (a.publisher && a.publisher.restrictions) {
                var f = a.publisher.restrictions[b];
                if (void 0 !== f) {
                    e = f[void 0 === d ? "755" : d];
                    break a
                }
            }
            e = void 0
        }
        var g = e;
        if (0 === g) return !1;
        var k = c;
        2 === c ? (k = 0, 2 === g && (k = 1)) : 3 === c && (k = 1, 1 === g && (k = 0));
        var m;
        if (0 === k) if (a.purpose && a.vendor) {
            var n = Fl(a.vendor.consents, void 0 === d ? "755" : d);
            m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Fl(a.purpose.consents, b)
        } else m = !0; else m = 1 === k ? a.purpose && a.vendor ? Fl(a.purpose.legitimateInterests,
            b) && Fl(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
        return m
    }, Fl = function (a, b) {
        return !(!a || !a[b])
    }, El = function (a, b, c, d) {
        c || (c = function () {
        });
        if ("function" === typeof a.o.__tcfapi) {
            var e = a.o.__tcfapi;
            e(b, 2, c, d)
        } else if (Hl(a)) {
            Il(a);
            var f = ++a.Na;
            a.I[f] = c;
            if (a.g) {
                var g = {};
                a.g.postMessage((g.__tcfapiCall = {command: b, version: 2, callId: f, parameter: d}, g), "*")
            }
        } else c({}, !1)
    }, Hl = function (a) {
        if (a.g) return a.g;
        var b;
        a:{
            for (var c = a.o, d = 0; 50 > d; ++d) {
                var e;
                try {
                    e = !(!c.frames || !c.frames.__tcfapiLocator)
                } catch (k) {
                    e =
                        !1
                }
                if (e) {
                    b = c;
                    break a
                }
                var f;
                b:{
                    try {
                        var g = c.parent;
                        if (g && g != c) {
                            f = g;
                            break b
                        }
                    } catch (k) {
                    }
                    f = null
                }
                if (!(c = f)) break
            }
            b = null
        }
        a.g = b;
        return a.g
    }, Il = function (a) {
        a.s || (a.s = function (b) {
            try {
                var c;
                c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.I[c.callId](c.returnValue, c.success)
            } catch (d) {
            }
        }, Ye(a.o, a.s))
    };
    var Jl = !0;
    Jl = !1;
    var Kl = {1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3}, Ll = Al("", 550), Ml = Al("", 500);

    function Nl() {
        var a = U.tcf || {};
        return U.tcf = a
    }

    var Sl = function () {
        var a = Nl(), b = new Dl(G, Jl ? 3E3 : -1);
        if (!0 === G.gtag_enable_tcf_support && !a.active && ("function" === typeof G.__tcfapi || "function" === typeof b.o.__tcfapi || null != Hl(b))) {
            a.active = !0;
            a.Pc = {};
            Ol();
            var c = null;
            Jl ? c = G.setTimeout(function () {
                Pl(a);
                Ql(a);
                c = null
            }, Ml) : a.tcString = "tcunavailable";
            try {
                b.addEventListener(function (d) {
                    c && (clearTimeout(c), c = null);
                    if (0 !== d.internalErrorState) Pl(a), Ql(a); else {
                        var e;
                        a.gdprApplies = d.gdprApplies;
                        if (!1 === d.gdprApplies) e = Rl(), b.removeEventListener(d); else if ("tcloaded" ===
                            d.eventStatus || "useractioncomplete" === d.eventStatus || "cmpuishown" === d.eventStatus) {
                            var f = {}, g;
                            for (g in Kl) if (Kl.hasOwnProperty(g)) if ("1" === g) {
                                var k = d, m = !0;
                                m = void 0 === m ? !1 : m;
                                var n;
                                var p = k;
                                !1 === p.gdprApplies ? n = !0 : (void 0 === p.internalErrorState && (p.internalErrorState = Cl(p)), n = "error" === p.cmpStatus || 0 !== p.internalErrorState ? !p.internalBlockOnErrors : "loaded" !== p.cmpStatus || "tcloaded" !== p.eventStatus && "useractioncomplete" !== p.eventStatus ? !1 : !0);
                                f["1"] = n ? !1 === k.gdprApplies || "tcunavailable" === k.tcString ||
                                void 0 === k.gdprApplies && !m || "string" !== typeof k.tcString || !k.tcString.length ? !0 : Gl(k, "1", 0) : !1
                            } else f[g] = Gl(d, g, Kl[g]);
                            e = f
                        }
                        e && (a.tcString = d.tcString || "tcempty", a.Pc = e, Ql(a))
                    }
                })
            } catch (d) {
                c && (clearTimeout(c), c = null), Pl(a), Ql(a)
            }
        }
    };

    function Pl(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        Jl && (a.Pc = Rl())
    }

    function Ol() {
        var a = {}, b = (a.ad_storage = "denied", a.wait_for_update = Ll, a);
        Bf(b)
    }

    function Rl() {
        var a = {}, b;
        for (b in Kl) Kl.hasOwnProperty(b) && (a[b] = !0);
        return a
    }

    function Ql(a) {
        var b = {}, c = (b.ad_storage = a.Pc["1"] ? "granted" : "denied", b);
        Df(c, {eventId: 0}, {gdprApplies: a ? a.gdprApplies : void 0, tcString: Tl()})
    }

    var Tl = function () {
        var a = Nl();
        return a.active ? a.tcString || "" : ""
    }, Ul = function () {
        var a = Nl();
        return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
    }, Vl = function (a) {
        if (!Kl.hasOwnProperty(String(a))) return !0;
        var b = Nl();
        return b.active && b.Pc ? !!b.Pc[String(a)] : !0
    };
    var bm = function (a, b, c) {
            if (G[a.functionName]) return b.jf && J(b.jf), G[a.functionName];
            var d = am();
            G[a.functionName] = d;
            if (a.Jd) for (var e = 0; e < a.Jd.length; e++) G[a.Jd[e]] = G[a.Jd[e]] || am();
            a.Ud && void 0 === G[a.Ud] && (G[a.Ud] = c);
            fb(Gk("https://", "http://", a.sf), b.jf, b.mj);
            return d
        }, am = function () {
            var a = function () {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        }, cm = {functionName: "_googWcmImpl", Ud: "_googWcmAk", sf: "www.gstatic.com/wcm/loader.js"},
        dm = {functionName: "_gaPhoneImpl", Ud: "ga_wpid", sf: "www.gstatic.com/gaphone/loader.js"},
        em = {vh: "", ri: "5"}, fm = {
            functionName: "_googCallTrackingImpl",
            Jd: [dm.functionName, cm.functionName],
            sf: "www.gstatic.com/call-tracking/call-tracking_" + (em.vh || em.ri) + ".js"
        }, gm = {}, hm = function (a, b, c, d) {
            Q(22);
            if (c) {
                d = d || {};
                var e = bm(cm, d, a), f = {ak: a, cl: b};
                void 0 === d.Ua && (f.autoreplace = c);
                e(2, d.Ua, f, c, 0, Ca(), d.options)
            }
        }, im = function (a, b, c, d) {
            Q(21);
            if (b && c) {
                d = d || {};
                for (var e = {countryNameCode: c, destinationNumber: b, retrievalTime: Ca()}, f = 0; f < a.length; f++) {
                    var g = a[f];
                    gm[g.id] ||
                    (g && "AW" === g.prefix && !e.adData && 2 <= g.J.length ? (e.adData = {
                        ak: g.J[0],
                        cl: g.J[1]
                    }, gm[g.id] = !0) : g && "UA" === g.prefix && !e.gaData && (e.gaData = {gaWpid: g.containerId}, gm[g.id] = !0))
                }
                (e.gaData || e.adData) && bm(fm, d)(d.Ua, e, d.options)
            }
        }, jm = function () {
            var a = !1;
            return a
        }, km = function (a, b) {
            if (a) if (Sh()) {
            } else {
                if (l(a)) {
                    var c =
                        Te(a);
                    if (!c) return;
                    a = c
                }
                var d = void 0, e = !1, f = b.getWithConfig(T.Wh);
                if (f && ra(f)) {
                    d = [];
                    for (var g = 0; g < f.length; g++) {
                        var k = Te(f[g]);
                        k && (d.push(k), (a.id === k.id || a.id === a.containerId && a.containerId === k.containerId) && (e = !0))
                    }
                }
                if (!d || e) {
                    var m = b.getWithConfig(T.Wf), n;
                    if (m) {
                        ra(m) ? n = m : n = [m];
                        var p = b.getWithConfig(T.Uf), q = b.getWithConfig(T.Vf), r = b.getWithConfig(T.Xf),
                            t = b.getWithConfig(T.Vh), u = p || q, v = 1;
                        "UA" !== a.prefix || d || (v = 5);
                        for (var y = 0; y < n.length; y++) if (y < v) if (d) im(d, n[y], t, {
                            Ua: u,
                            options: r
                        }); else if ("AW" === a.prefix &&
                            a.J[1]) jm() ? im([a], n[y], t || "US", {Ua: u, options: r}) : hm(a.J[0], a.J[1], n[y], {
                            Ua: u,
                            options: r
                        }); else if ("UA" === a.prefix) if (jm()) im([a], n[y], t || "US", {Ua: u}); else {
                            var z = a.containerId, w = n[y], A = {Ua: u};
                            Q(23);
                            if (w) {
                                A = A || {};
                                var x = bm(dm, A, z), C = {};
                                void 0 !== A.Ua ? C.receiver = A.Ua : C.replace = w;
                                C.ga_wpid = z;
                                C.destination = w;
                                x(2, Ca(), C)
                            }
                        }
                    }
                }
            }
        };

    function sm() {
        return "attribution-reporting"
    }

    function tm(a) {
        var b;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    };var um = !1;

    function vm() {
        if (tm("join-ad-interest-group") && pa(Za.joinAdInterestGroup)) return !0;
        um || (af('A9wkrvp9y21k30U9lU7MJMjBj4USjLrGwV+Z8zO3J3ZBH139DOnCv3XLK2Ii40S94HG1SZ/Zeg2GSHOD3wlWngYAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), um = !0);
        return tm("join-ad-interest-group") && pa(Za.joinAdInterestGroup)
    }

    function wm(a, b) {
        var c = void 0;
        try {
            c = H.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {
        }
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > Da() - d) {
                Qc("TAGGING", 9);
                return
            }
        } else try {
            if (50 <= H.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                Qc("TAGGING", 10);
                return
            }
        } catch (e) {
        }
        hb(a, void 0, {allow: "join-ad-interest-group"}, {taggingId: b, loadTime: Da()}, c)
    };var Tm = function (a, b, c) {
        this.C = a;
        this.eventName = b;
        this.g = c;
        this.o = {};
        this.metadata = N(c.eventMetadata || {});
        this.s = !1
    }, Um = function (a, b, c) {
        var d = a.g.getWithConfig(b);
        void 0 !== d ? a.o[b] = d : void 0 !== c && (a.o[b] = c)
    }, Vm = function (a, b, c) {
        var d = Ud(a.C);
        return d && d.hasOwnProperty(b) ? d[b] : c
    };

    function Wm(a) {
        return {
            getDestinationId: function () {
                return a.C
            }, getEventName: function () {
                return a.eventName
            }, setEventName: function (b) {
                return void (a.eventName = b)
            }, getHitData: function (b) {
                return a.o[b]
            }, setHitData: function (b, c) {
                return void (a.o[b] = c)
            }, setHitDataIfNotDefined: function (b, c) {
                void 0 === a.o[b] && (a.o[b] = c)
            }, copyToHitData: function (b, c) {
                Um(a, b, c)
            }, getMetadata: function (b) {
                return a.metadata[b]
            }, setMetadata: function (b, c) {
                return void (a.metadata[b] = c)
            }, abort: function () {
                return void (a.s = !0)
            }, getProcessedEvent: function () {
                return a
            }
        }
    }
    ;var Ln = function () {
        var a = !0;
        Vl(7) && Vl(9) && Vl(10) || (a = !1);
        return a
    }, Mn = function () {
        var a = !0;
        Vl(3) && Vl(4) || (a = !1);
        return a
    };
    var Qn = function (a, b) {
        if (b.isGtmEvent) return;
        var c = b.getWithConfig(T.Ia), d = b.getWithConfig(T.Qa), e = b.getWithConfig(c);
        if (void 0 === e) {
            var f = void 0;
            Nn.hasOwnProperty(c) ? f = Nn[c] : On.hasOwnProperty(c) && (f = On[c]);
            1 === f && (f = Pn(c));
            l(f) ? kk()(function () {
                var g = kk().getByName(a).get(f);
                d(g)
            }) : d(void 0)
        } else d(e);
    }, Rn = function (a, b) {
        var c = a[T.wc], d = b + ".", e = a[T.N] || "", f = void 0 === c ? !!a.use_anchor : "fragment" ===
            c, g = !!a[T.Sb];
        e = String(e).replace(/\s+/g, "").split(",");
        var k = kk();
        k(d + "require", "linker");
        k(d + "linker:autoLink", e, f, g)
    }, Vn = function (a, b, c) {
        if (rf() && (!c.isGtmEvent || !Sn[a])) {
            var d = !Ef(T.M), e = function (f) {
                var g, k, m = kk(), n = Tn(b, "", c), p, q = n.createOnlyFields._useUp;
                if (c.isGtmEvent || Un(b, n.createOnlyFields)) {
                    c.isGtmEvent && (g = "gtm" + Ed(), k = n.createOnlyFields, n.gtmTrackerName && (k.name = g));
                    m(function () {
                        var t = m.getByName(b);
                        t && (p = t.get("clientId"));
                        c.isGtmEvent || m.remove(b)
                    });
                    m("create", a, c.isGtmEvent ? k : n.createOnlyFields);
                    d && Ef(T.M) && (d = !1, m(function () {
                        var t = kk().getByName(c.isGtmEvent ? g : b);
                        !t || t.get("clientId") == p && q || (c.isGtmEvent ? (n.fieldsToSet["&gcu"] = "1", n.fieldsToSet["&gcut"] = T.ce[f]) : (n.fieldsToSend["&gcu"] = "1", n.fieldsToSend["&gcut"] = T.ce[f]), t.set(n.fieldsToSet), c.isGtmEvent ? t.send("pageview") : t.send("pageview", n.fieldsToSend))
                    }));
                    c.isGtmEvent && m(function () {
                        m.remove(g)
                    })
                }
            };
            Gf(function () {
                return e(T.M)
            }, T.M);
            Gf(function () {
                return e(T.D)
            }, T.D);
            c.isGtmEvent && (Sn[a] = !0)
        }
    }, Wn = function (a, b) {
        Ek() && b && (a[T.sb] = b)
    }, fo = function (a, b, c) {
        function d() {
            var I = c.getWithConfig(T.Pb);
            k(function () {
                if (!c.isGtmEvent && ub(I)) {
                    var M = u.fieldsToSend, P = m().getByName(n), O;
                    for (O in I) if (I.hasOwnProperty(O) && /^(dimension|metric)\d+$/.test(O) && void 0 != I[O]) {
                        var K = P.get(Pn(I[O]));
                        Xn(M, O, K)
                    }
                }
            })
        }

        function e() {
            if (u.displayfeatures) {
                var I = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g,
                    "");
                p("require", "displayfeatures", void 0, {cookieName: I})
            }
        }

        var f = a, g = "https://www.google-analytics.com/analytics.js",
            k = c.isGtmEvent ? mk(c.getWithConfig("gaFunctionName")) : mk();
        if (pa(k)) {
            var m = kk, n;
            c.isGtmEvent ? n = c.getWithConfig("name") || c.getWithConfig("gtmTrackerName") : n = "gtag_" + f.split("-").join("_");
            var p = function (I) {
                var M = [].slice.call(arguments, 0);
                M[0] = n ? n + "." + M[0] : "" + M[0];
                k.apply(window, M)
            }, q = function (I) {
                var M = function (R, ja) {
                    for (var oa = 0; ja && oa < ja.length; oa++) p(R, ja[oa])
                }, P = c.isGtmEvent, O = P ? Yn(u) :
                    Zn(b, c);
                if (O) {
                    var K = {};
                    Wn(K, I);
                    p("require", "ec", "ec.js", K);
                    P && O.Te && p("set", "&cu", O.Te);
                    var S = O.action;
                    if (P || "impressions" === S) if (M("ec:addImpression", O.Ug), !P) return;
                    if ("promo_click" === S || "promo_view" === S || P && O.Oc) {
                        var V = O.Oc;
                        M("ec:addPromo", V);
                        if (V && 0 < V.length && "promo_click" === S) {
                            P ? p("ec:setAction", S, O.ib) : p("ec:setAction", S);
                            return
                        }
                        if (!P) return
                    }
                    "promo_view" !== S && "impressions" !== S && (M("ec:addProduct", O.Eb), p("ec:setAction", S, O.ib))
                }
            }, r = function (I) {
                if (I) {
                    var M = {};
                    if (ub(I)) for (var P in $n) $n.hasOwnProperty(P) &&
                    ao($n[P], P, I[P], M);
                    Wn(M, z);
                    p("require", "linkid", M)
                }
            }, t = function () {
                if (Sh()) {
                } else {
                    var I = c.getWithConfig(T.Uh);
                    I && (p("require", I, {dataLayer: rd.Z}), p("require", "render"))
                }
            }, u = Tn(n, b, c), v = function (I, M, P) {
                P && (M = "" + M);
                u.fieldsToSend[I] = M
            };
            !c.isGtmEvent && Un(n, u.createOnlyFields) && (k(function () {
                m() && m().remove(n)
            }), bo[n] = !1);
            k("create", f, u.createOnlyFields);
            if (u.createOnlyFields[T.sb] && !c.isGtmEvent) {
                var y = Ck(u.createOnlyFields[T.sb],
                    "/analytics.js");
                y && (g = y)
            }
            var z = c.isGtmEvent ? u.fieldsToSet[T.sb] : u.createOnlyFields[T.sb];
            if (z) {
                var w = c.isGtmEvent ? u.fieldsToSet[T.md] : u.createOnlyFields[T.md];
                w && !bo[n] && (bo[n] = !0, k(qk(n, w)))
            }
            c.isGtmEvent ? u.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(), r(u.linkAttribution));
            var A = u[T.ka];
            A && A[T.N] && Rn(A, n);
            p("set", u.fieldsToSet);
            if (c.isGtmEvent) {
                if (u.enableLinkId) {
                    var x = {};
                    Wn(x, z);
                    p("require", "linkid", "linkid.js", x)
                }
                rf() && Vn(f, n, c)
            }
            if (b === T.nc) if (c.isGtmEvent) {
                e();
                if (u.remarketingLists) {
                    var C =
                        "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                    p("require", "adfeatures", {cookieName: C})
                }
                q(z);
                p("send", "pageview");
                u.createOnlyFields._useUp && nk(n + ".")
            } else t(), p("send", "pageview", u.fieldsToSend); else b === T.za ? (t(), km(f, c), c.getWithConfig(T.Ta) && (Bh(["aw", "dc"]), nk(n + ".")), 0 != u.sendPageView && p("send", "pageview", u.fieldsToSend), Vn(f, n, c)) : b === T.Ga ? Qn(n, c) : "screen_view" === b ? p("send", "screenview", u.fieldsToSend) : "timing_complete" === b ? (u.fieldsToSend.hitType = "timing", v("timingCategory", u.eventCategory, !0),
                c.isGtmEvent ? v("timingVar", u.timingVar, !0) : v("timingVar", u.name, !0), v("timingValue", xa(u.value)), void 0 !== u.eventLabel && v("timingLabel", u.eventLabel, !0), p("send", u.fieldsToSend)) : "exception" === b ? p("send", "exception", u.fieldsToSend) : "" === b && c.isGtmEvent || ("track_social" === b && c.isGtmEvent ? (u.fieldsToSend.hitType = "social", v("socialNetwork", u.socialNetwork, !0), v("socialAction", u.socialAction, !0), v("socialTarget", u.socialTarget, !0)) : ((c.isGtmEvent || co[b]) && q(z), c.isGtmEvent && e(), u.fieldsToSend.hitType =
                "event", v("eventCategory", u.eventCategory, !0), v("eventAction", u.eventAction || b, !0), void 0 !== u.eventLabel && v("eventLabel", u.eventLabel, !0), void 0 !== u.value && v("eventValue", xa(u.value))), p("send", u.fieldsToSend));
            var E = !1;
            var F = eo;
            E && (F = c.getContainerTypeLoaded("UA"));
            if (!F && !c.isGtmEvent) {
                eo = !0;
                E && c.setContainerTypeLoaded("UA", !0);
                fk();
                var D = function () {
                    E &&
                    c.setContainerTypeLoaded("UA", !1);
                    c.onFailure()
                }, L = function () {
                    m().loaded || D()
                };
                Sh() ? J(L) : fb(g, L, D)
            }
        } else J(c.onFailure)
    }, go = function (a, b, c, d) {
        Hf(function () {
            fo(a, b, d)
        }, [T.M, T.D])
    }, io = function (a, b) {
        function c(f) {
            function g(p, q) {
                for (var r = 0; r < q.length; r++) {
                    var t = q[r];
                    if (f[t]) {
                        m[p] = f[t];
                        break
                    }
                }
            }

            function k() {
                if (f.category) m.category = f.category; else {
                    for (var p = "", q = 0; q < ho.length; q++) void 0 !== f[ho[q]] && (p && (p += "/"), p += f[ho[q]]);
                    p && (m.category = p)
                }
            }

            var m = N(f), n = !1;
            if (n || b) g("id", ["id", "item_id", "promotion_id"]), g("name", ["name", "item_name", "promotion_name"]), g("brand", ["brand", "item_brand"]), g("variant", ["variant", "item_variant"]), g("list", ["list_name", "item_list_name"]), g("position", ["list_position", "creative_slot", "index"]), k();
            g("listPosition", ["list_position"]);
            g("creative", ["creative_name"]);
            g("list", ["list_name"]);
            g("position", ["list_position", "creative_slot"]);
            return m
        }

        b = void 0 ===
        b ? !1 : b;
        for (var d = [], e = 0; a && e < a.length; e++) a[e] && ub(a[e]) && d.push(c(a[e]));
        return d.length ? d : void 0
    }, jo = function (a) {
        return Ef(a)
    }, ko = !1;
    var eo, bo = {}, Sn = {}, lo = {},
        Nn = Object.freeze((lo.client_storage = "storage", lo.sample_rate = 1, lo.site_speed_sample_rate = 1, lo.store_gac = 1, lo.use_amp_client_id = 1, lo[T.na] = 1, lo[T.ia] = "storeGac", lo[T.ja] = 1, lo[T.oa] = 1, lo[T.Ha] = 1, lo[T.Nb] = 1, lo[T.Za] = 1, lo[T.rb] = 1, lo)),
        mo = {},
        no = Object.freeze((mo._cs = 1, mo._useUp = 1, mo.allowAnchor = 1, mo.allowLinker = 1, mo.alwaysSendReferrer = 1, mo.clientId = 1, mo.cookieDomain = 1, mo.cookieExpires = 1, mo.cookieFlags = 1, mo.cookieName = 1, mo.cookiePath = 1, mo.cookieUpdate = 1, mo.legacyCookieDomain = 1, mo.legacyHistoryImport = 1, mo.name = 1, mo.sampleRate = 1, mo.siteSpeedSampleRate = 1, mo.storage = 1, mo.storeGac = 1, mo.useAmpClientId = 1, mo._cd2l = 1, mo)),
        oo = Object.freeze({anonymize_ip: 1}), po = {}, On = Object.freeze((po.campaign = {
            content: "campaignContent", id: "campaignId", medium: "campaignMedium",
            name: "campaignName", source: "campaignSource", term: "campaignKeyword"
        }, po.app_id = 1, po.app_installer_id = 1, po.app_name = 1, po.app_version = 1, po.description = "exDescription", po.fatal = "exFatal", po.language = 1, po.page_hostname = "hostname", po.transport_type = "transport", po[T.qa] = "currencyCode", po[T.Sf] = 1, po[T.eb] = "location", po[T.Ae] = "page", po[T.fb] = "referrer", po[T.qd] = "title", po[T.Zf] = 1, po[T.Ja] = 1, po)),
        qo = {},
        ro = Object.freeze((qo.content_id = 1, qo.event_action = 1, qo.event_category = 1, qo.event_label = 1, qo.link_attribution =
            1, qo.name = 1, qo[T.ka] = 1, qo[T.Rf] = 1, qo[T.Ca] = 1, qo[T.da] = 1, qo)), so = Object.freeze({
            displayfeatures: 1,
            enableLinkId: 1,
            enableRecaptcha: 1,
            eventAction: 1,
            eventCategory: 1,
            eventLabel: 1,
            gaFunctionName: 1,
            gtmEcommerceData: 1,
            gtmTrackerName: 1,
            linker: 1,
            remarketingLists: 1,
            socialAction: 1,
            socialNetwork: 1,
            socialTarget: 1,
            timingVar: 1,
            value: 1
        }), ho = Object.freeze(["item_category", "item_category2", "item_category3", "item_category4", "item_category5"]),
        to = {}, $n = Object.freeze((to.levels = 1, to[T.oa] = "duration", to[T.Nb] = 1, to)), uo =
            {},
        vo = Object.freeze((uo.anonymize_ip = 1, uo.fatal = 1, uo.send_page_view = 1, uo.store_gac = 1, uo.use_amp_client_id = 1, uo[T.ia] = 1, uo[T.Sf] = 1, uo)),
        ao = function (a, b, c, d) {
            if (void 0 !== c) if (vo[b] && (c = za(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a) d[Pn(b)] = c; else if (l(a)) d[a] = c; else for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
        }, Pn = function (a) {
            return a && l(a) ? a.replace(/(_[a-z])/g, function (b) {
                return b[1].toUpperCase()
            }) : a
        }, wo = {}, co = Object.freeze((wo.checkout_progress = 1, wo.select_content = 1, wo.set_checkout_option =
            1, wo[T.Jb] = 1, wo[T.Kb] = 1, wo[T.ob] = 1, wo[T.pb] = 1, wo[T.Lb] = 1, wo[T.xa] = 1, wo[T.Mb] = 1, wo[T.ya] = 1, wo)),
        xo = {},
        yo = Object.freeze((xo.checkout_progress = 1, xo.set_checkout_option = 1, xo[T.Ff] = 1, xo[T.Jb] = 1, xo[T.Kb] = 1, xo[T.ob] = 1, xo[T.xa] = 1, xo[T.Mb] = 1, xo[T.Gf] = 1, xo)),
        zo = {},
        Ao = Object.freeze((zo.generate_lead = 1, zo.login = 1, zo.search = 1, zo.select_content = 1, zo.share = 1, zo.sign_up = 1, zo.view_search_results = 1, zo[T.pb] = 1, zo[T.Lb] = 1, zo[T.ya] = 1, zo)),
        Bo = function (a) {
            var b = "general";
            yo[a] ? b = "ecommerce" : Ao[a] ? b = "engagement" : "exception" ===
                a && (b = "error");
            return b
        }, Co = {}, Do = Object.freeze((Co.view_search_results = 1, Co[T.pb] = 1, Co[T.Lb] = 1, Co[T.ya] = 1, Co)),
        Xn = function (a, b, c) {
            a.hasOwnProperty(b) || (a[b] = c)
        }, Eo = function (a) {
            if (ra(a)) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (void 0 != d) {
                        var e = d.id, f = d.variant;
                        void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
                    }
                }
                return 0 < b.length ? b.join("!") : void 0
            }
        }, Tn = function (a, b, c) {
            var d = function (L) {
                return c.getWithConfig(L)
            }, e = {}, f = {}, g = {}, k = {}, m = Eo(d(T.Th));
            !c.isGtmEvent && m && Xn(f, "exp", m);
            g["&gtm"] =
                ci(!0);
            rf() && (k._cs = jo);
            var n = d(T.Pb);
            if (!c.isGtmEvent && ub(n)) for (var p in n) if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != n[p]) {
                var q = d(String(n[p]));
                void 0 !== q && Xn(f, p, q)
            }
            for (var r = c.getTopLevelKeys(), t = 0; t < r.length; ++t) {
                var u = r[t];
                if (c.isGtmEvent) {
                    var v = d(u);
                    so.hasOwnProperty(u) ? e[u] = v : no.hasOwnProperty(u) ? k[u] = v : g[u] = v
                } else {
                    var y = void 0;
                    y = u !== T.P ? d(u) : c.getMergedValues(u);
                    if (ro.hasOwnProperty(u)) ao(ro[u], u, y, e); else if (oo.hasOwnProperty(u)) ao(oo[u], u, y, g); else if (On.hasOwnProperty(u)) ao(On[u],
                        u, y, f); else if (Nn.hasOwnProperty(u)) ao(Nn[u], u, y, k); else if (/^(dimension|metric|content_group)\d+$/.test(u)) ao(1, u, y, f); else if (u === T.P) {
                        if (!ko) {
                            var z = Ma(y);
                            z && (f["&did"] = z)
                        }
                        var w = void 0, A = void 0;
                        b === T.za ? w = Ma(c.getMergedValues(u), ".") : (w = Ma(c.getMergedValues(u, 1), "."), A = Ma(c.getMergedValues(u, 2), "."));
                        w && (f["&gdid"] = w);
                        A && (f["&edid"] = A)
                    } else u === T.Ba && 0 > r.indexOf(T.Nb) && (k.cookieName = y + "_ga")
                }
            }
            !1 !== d(T.Lh) && !1 !== d(T.oc) && Ln() || (g.allowAdFeatures = !1);
            !1 !== d(T.U) && Mn() || (g.allowAdPersonalizationSignals =
                !1);
            !c.isGtmEvent && d(T.Ta) && (k._useUp = !0);
            if (c.isGtmEvent) {
                k.name = k.name || e.gtmTrackerName;
                var x = g.hitCallback;
                g.hitCallback = function () {
                    pa(x) && x();
                    c.onSuccess()
                }
            } else {
                Xn(k, "cookieDomain", "auto");
                Xn(g, "forceSSL", !0);
                Xn(e, "eventCategory", Bo(b));
                Do[b] && Xn(f, "nonInteraction", !0);
                "login" === b || "sign_up" === b || "share" === b ? Xn(e, "eventLabel", d(T.Rf)) : "search" === b || "view_search_results" === b ? Xn(e, "eventLabel", d(T.ai)) : "select_content" === b && Xn(e, "eventLabel", d(T.Ph));
                var C = e[T.ka] || {}, E = C[T.Rb];
                E || 0 != E && C[T.N] ?
                    k.allowLinker = !0 : !1 === E && Xn(k, "useAmpClientId", !1);
                f.hitCallback = c.onSuccess;
                k.name = a
            }
            rf() && (g["&gcs"] = Ff(), Ef(T.M) || (k.storage = "none"), Ef(T.D) || (g.allowAdFeatures = !1, k.storeGac = !1));
            var F = d(T.V) || d(T.sb), D = d(T.md);
            F && (c.isGtmEvent || (k[T.sb] = F), k._cd2l = !0);
            D && !c.isGtmEvent && (k[T.md] = D);
            e.fieldsToSend = f;
            e.fieldsToSet = g;
            e.createOnlyFields = k;
            return e
        }, Yn = function (a) {
            var b = a.gtmEcommerceData;
            if (!b) return null;
            var c = {};
            b.currencyCode && (c.Te = b.currencyCode);
            if (b.impressions) {
                c.action = "impressions";
                var d =
                    b.impressions;
                c.Ug = "impressions" === b.translateIfKeyEquals ? io(d, !0) : d
            }
            if (b.promoView) {
                c.action = "promo_view";
                var e = b.promoView.promotions;
                c.Oc = "promoView" === b.translateIfKeyEquals ? io(e, !0) : e
            }
            if (b.promoClick) {
                c.action = "promo_click";
                var f = b.promoClick.promotions;
                c.Oc = "promoClick" === b.translateIfKeyEquals ? io(f, !0) : f;
                c.ib = b.promoClick.actionField;
                return c
            }
            for (var g in b) if (b.hasOwnProperty(g) && "translateIfKeyEquals" !== g && "impressions" !== g && "promoView" !== g && "promoClick" !== g && "currencyCode" !== g) {
                c.action =
                    g;
                var k = b[g].products;
                c.Eb = "products" === b.translateIfKeyEquals ? io(k, !0) : k;
                c.ib = b[g].actionField;
                break
            }
            return Object.keys(c).length ? c : null
        }, Zn = function (a, b) {
            function c(t) {
                return {
                    id: d(T.Sa),
                    affiliation: d(T.Qh),
                    revenue: d(T.da),
                    tax: d(T.Mf),
                    shipping: d(T.te),
                    coupon: d(T.Rh),
                    list: d(T.se) || t
                }
            }

            for (var d = function (t) {
                return b.getWithConfig(t)
            }, e = d(T.W), f, g = 0; e && g < e.length && !(f = e[g][T.se]); g++) ;
            var k = d(T.Pb);
            if (ub(k)) for (var m = 0; e && m < e.length; ++m) {
                var n = e[m], p;
                for (p in k) k.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) &&
                void 0 != k[p] && Xn(n, p, n[k[p]])
            }
            var q = null, r = d(T.Sh);
            a === T.xa || a === T.Mb ? q = {action: a, ib: c(), Eb: io(e)} : a === T.Jb ? q = {
                action: "add",
                Eb: io(e)
            } : a === T.Kb ? q = {action: "remove", Eb: io(e)} : a === T.ya ? q = {
                action: "detail",
                ib: c(f),
                Eb: io(e)
            } : a === T.pb ? q = {action: "impressions", Ug: io(e)} : "view_promotion" === a ? q = {
                action: "promo_view",
                Oc: io(r)
            } : "select_content" === a && r && 0 < r.length ? q = {
                action: "promo_click",
                Oc: io(r)
            } : "select_content" === a ? q = {
                action: "click",
                ib: {list: d(T.se) || f},
                Eb: io(e)
            } : a === T.ob || "checkout_progress" === a ? q = {
                action: "checkout",
                Eb: io(e), ib: {step: a === T.ob ? 1 : d(T.Lf), option: d(T.Kf)}
            } : "set_checkout_option" === a && (q = {action: "checkout_option", ib: {step: d(T.Lf), option: d(T.Kf)}});
            q && (q.Te = d(T.qa));
            return q
        }, Fo = {}, Un = function (a, b) {
            var c = Fo[a];
            Fo[a] = N(b);
            if (!c) return !1;
            for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
            for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
            return !1
        };
    var Go = null, Ho = !1;

    function Io(a) {
        return Ho && !a ? Go = Go || new Jo : U.gcq = U.gcq || new Jo
    }

    var Ko = function (a, b, c) {
        Io().register(a, b, c)
    }, Lo = function (a, b, c, d) {
        Io().push("event", [b, a], c, d)
    }, Mo = function (a, b, c) {
        Io().push("config", [a], b, c)
    }, No = function (a, b, c, d) {
        Io().push("get", [a, b], c, d)
    }, Oo = function () {
        var a = T.V;
        return Io().getGlobalConfigValue && Io().getGlobalConfigValue(a)
    }, Po = {}, Qo = function () {
        this.status = 1;
        this.containerConfig = {};
        this.targetConfig = {};
        this.remoteConfig = {};
        this.o = {};
        this.s = null;
        this.claimed = this.g = !1
    }, Ro = function (a, b, c, d, e) {
        this.type = a;
        this.o = b;
        this.K = c || "";
        this.g = d;
        this.messageContext =
            e
    }, Jo = function () {
        this.o = {};
        this.s = {};
        this.g = [];
        this.C = {AW: !1, UA: !1}
    }, So = function (a, b) {
        var c = Te(b);
        return a.o[c.containerId] = a.o[c.containerId] || new Qo
    }, To = function (a, b, c, d) {
        if (b) {
            var e = Te(b);
            if (e && 1 === So(a, b).status) {
                So(a, b).status = 2;
                var f = {};
                bj && (f.timeoutId = G.setTimeout(function () {
                    Q(38);
                    Ei()
                }, 3E3));
                a.push("require", [f], e.containerId, {});
                Po[e.containerId] = Da();
                if (Sh()) {
                } else 2 === d ? Kk(e.containerId, c) : Jk(e.containerId, c, !0)
            }
        }
    }, Uo = function (a, b, c, d) {
        if (d.K) {
            var e = So(a, d.K), f = e.s;
            if (f) {
                var g = N(c), k = N(e.targetConfig[d.K]), m = N(e.containerConfig), n = N(e.remoteConfig), p = N(a.s),
                    q = {};
                try {
                    q = N(Id)
                } catch (v) {
                    Q(72)
                }
                var r = Te(d.K).prefix, t = function (v) {
                        oj(d.messageContext.eventId, r, v);
                        var y = g[T.Qb];
                        y && J(y)
                    },
                    u = wl(vl(xl(ul(tl(rl(ql(sl(pl(ol(nl(new ml(d.messageContext.eventId, d.messageContext.priorityId), g), k), m), n), p), q), d.messageContext.eventMetadata), function () {
                        if (t) {
                            var v = t;
                            t = void 0;
                            v("2")
                        }
                    }), function () {
                        if (t) {
                            var v = t;
                            t = void 0;
                            v("3")
                        }
                    }), function (v, y) {
                        a.C[v] = y
                    }), function (v) {
                        return a.C[v]
                    });
                try {
                    oj(d.messageContext.eventId, r, "1"), xj(d.type, d.K, u);
                    f(d.K, b, d.o, u)
                } catch (v) {
                    oj(d.messageContext.eventId, r, "4");
                }
            }
        }
    };
    h = Jo.prototype;
    h.register = function (a, b, c) {
        var d = So(this, a);
        if (3 !== d.status) {
            d.s = b;
            d.status = 3;
            c && (N(d.remoteConfig, c), d.remoteConfig = c);
            var e = Te(a), f = Po[e.containerId];
            if (void 0 !== f) {
                var g = U[e.containerId].bootstrap, k = e.prefix.toUpperCase();
                U[e.containerId]._spx && (k = k.toLowerCase());
                var m = Ld("gtm.uniqueEventId"), n = k, p = Da() - g;
                if (bj && !Ji[m]) {
                    m !== Fi && (Ai(), Fi = m);
                    var q = n + "." + Math.floor(g - f) + "." + Math.floor(p);
                    Qi = Qi ? Qi + "," + q : "&cl=" + q
                }
                delete Po[e.containerId]
            }
            this.flush()
        }
    };
    h.notifyContainerLoaded = function (a, b) {
        var c = this, d = function (f) {
            if (Te(f)) {
                var g = So(c, f);
                g.status = 3;
                g.claimed = !0
            }
        };
        d(a);
        for (var e = 0; e < b.length; e++) d(b[e]);
        this.flush()
    };
    h.push = function (a, b, c, d) {
        null == d ? d = {} : "boolean" === typeof d && (d = {deferrable: d});
        if (void 0 !== c) {
            if (!Te(c)) return;
            To(this, c, b[0][T.V] || this.s[T.V], "event" === a ? 2 : 1);
            So(this, c).g && (d.deferrable = !1)
        }
        this.g.push(new Ro(a, Math.floor(Da() / 1E3), c, b, d));
        d.deferrable || this.flush()
    };
    h.insert = function (a, b, c, d) {
        null == d && (d = {});
        var e = Math.floor(Da() / 1E3);
        0 < this.g.length ? this.g.splice(1, 0, new Ro(a, e, c, b, d)) : this.g.push(new Ro(a, e, c, b, d))
    };
    h.flush = function (a) {
        for (var b = this, c = [], d = !1, e = {}; this.g.length;) {
            var f = this.g[0];
            if (f.messageContext.deferrable) !f.K || So(this, f.K).g ? (f.messageContext.deferrable = !1, this.g.push(f)) : c.push(f), this.g.shift(); else {
                var g = void 0;
                switch (f.type) {
                    case "require":
                        g = So(this, f.K);
                        if (3 !== g.status && !a) {
                            this.g.push.apply(this.g, c);
                            return
                        }
                        bj && G.clearTimeout(f.g[0].timeoutId);
                        break;
                    case "set":
                        B(f.g[0], function (r, t) {
                            N(Ja(r, t), b.s)
                        });
                        break;
                    case "config":
                        g = So(this, f.K);
                        if (g.claimed) break;
                        e.Pa = {};
                        B(f.g[0], function (r) {
                            return function (t,
                                             u) {
                                N(Ja(t, u), r.Pa)
                            }
                        }(e));
                        var k = !!e.Pa[T.vd];
                        delete e.Pa[T.vd];
                        var m = Te(f.K), n = m.containerId === m.id;
                        k || (n ? g.containerConfig = {} : g.targetConfig[f.K] = {});
                        g.g && k || Uo(this, T.za, e.Pa, f);
                        g.g = !0;
                        delete e.Pa[T.Ub];
                        n ? N(e.Pa, g.containerConfig) : (N(e.Pa, g.targetConfig[f.K]), Q(70));
                        d = !0;
                        break;
                    case "event":
                        g = So(this, f.K);
                        if (g.claimed) break;
                        e.Vc = {};
                        B(f.g[0], function (r) {
                            return function (t, u) {
                                N(Ja(t, u), r.Vc)
                            }
                        }(e));
                        Uo(this, f.g[1], e.Vc, f);
                        break;
                    case "get":
                        if (g = So(this, f.K), !g.claimed) {
                            var p = {}, q = (p[T.Ia] = f.g[0], p[T.Qa] =
                                f.g[1], p);
                            Uo(this, T.Ga, q, f)
                        }
                }
                this.g.shift();
                Vo(this, f)
            }
            e = {Pa: e.Pa, Vc: e.Vc}
        }
        this.g.push.apply(this.g, c);
        d && this.flush()
    };
    var Vo = function (a, b) {
        if ("require" !== b.type) if (b.K) for (var c = a.getCommandListeners(b.K)[b.type] || [], d = 0; d < c.length; d++) c[d](); else for (var e in a.o) if (a.o.hasOwnProperty(e)) {
            var f = a.o[e];
            if (f && f.o) for (var g = f.o[b.type] || [], k = 0; k < g.length; k++) g[k]()
        }
    };
    Jo.prototype.getRemoteConfig = function (a) {
        return So(this, a).remoteConfig
    };
    Jo.prototype.getCommandListeners = function (a) {
        return So(this, a).o
    };
    Jo.prototype.getGlobalConfigValue = function (a) {
        return this.s[a]
    };
    var Wo = !1;
    var Xo = !1;
    var Yo = {}, Zo = {}, $o = {}, ap = function (a, b) {
        var c = Zo[b] || [];
        c.push(a);
        Zo[b] = c
    }, cp = function () {
        U.addTargetToGroup = function (e) {
            bp(e, "default")
        };
        U.addDestinationToContainer = function (e, f) {
            ap(e, f)
        };
        var a = U.pendingDefaultTargets;
        delete U.pendingDefaultTargets;
        if (Array.isArray(a)) for (var b = 0; b < a.length; ++b) bp(a[b], "default");
        var c = U.pendingDestinationIds;
        delete U.pendingDestinationIds;
        if (Array.isArray(c)) for (var d = 0; d < c.length; ++d) ap(c[d][0], c[d][1])
    }, bp = function (a, b) {
        b = b.toString().split(",");
        for (var c = 0; c < b.length; c++) {
            var d =
                Yo[b[c]] || [];
            Yo[b[c]] = d;
            0 > d.indexOf(a) && d.push(a)
        }
    }, dp = function (a, b) {
        b = String(b).split(",");
        for (var c = 0; c < b.length; c++) {
            var d = $o[b[c]] || [];
            $o[b[c]] = d;
            0 > d.indexOf(a) && d.push(a)
        }
    }, ep = function (a) {
        for (var b = [], c = [], d = {}, e = 0; e < a.length; d = {jc: d.jc, Xc: d.Xc}, e++) {
            var f = a[e];
            if (0 <= f.indexOf("-")) if (Xo) {
                if (d.jc = Te(f), d.jc) if (Wo) {
                    var g = Wh();
                    sa(g, function (u) {
                        return function (v) {
                            return u.jc.containerId === v
                        }
                    }(d)) ? b.push(f) : c.push(f)
                } else d.jc.containerId === Th.H || Sh() ? b.push(f) : c.push(f)
            } else b.push(f); else {
                var k =
                    Yo[f] || [];
                if (Xo) if (Wo) {
                    d.Xc = {};
                    k.forEach(function (u) {
                        return function (v) {
                            return u.Xc[v] = !0
                        }
                    }(d));
                    for (var m = Vh(), n = 0; n < m.length; n++) if (d.Xc[m[n]]) {
                        var p = Wh();
                        p && p.length && (b = b.concat(p));
                        break
                    }
                    var q = $o[f] || [];
                    q.length && (b = b.concat(q))
                } else for (var r = 0; r < k.length; r++) {
                    var t = Te(k[r]);
                    (t && t.containerId === Th.H || Sh()) && b.push(t.id)
                } else k && k.length && (b = b.concat(k))
            }
        }
        return {jj: b, lj: c}
    }, fp = function (a) {
        B(Yo, function (b, c) {
            var d = c.indexOf(a);
            0 <= d && c.splice(d, 1)
        })
    }, gp = function (a) {
        B($o, function (b, c) {
            var d = c.indexOf(a);
            0 <= d && c.splice(d, 1)
        })
    };
    var hp = !1;
    var ip = "HA GF G UA AW DC".split(" "), jp = !1, kp = !1, lp = !1;

    function mp(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {value: Ed()});
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {eventId: b.eventId, priorityId: b.priorityId}
    }

    function np() {
        if (Ho) return !1;
        jp || U.gtagRegistered || (jp = U.gtagRegistered = !0, cp());
        return jp
    }

    var op = {
        config: function (a, b) {
            var c = mp(a, b);
            if (2 > a.length || !l(a[1])) return;
            var d = {};
            if (2 < a.length) {
                if (void 0 != a[2] && !ub(a[2]) || 3 < a.length) return;
                d = a[2]
            }
            var e = Te(a[1]);
            if (!e) return;
            gj(c.eventId, "gtag.config");
            var f = e.id !== e.containerId, g = !1, k = -1 !== Vh().indexOf(e.containerId);
            k && (g = lp, lp = !0);
            if (Qe[12] && zd && !f && g) return;
            if (Ho) {
                var m = d[T.V] || Oo();
                if (hp && f) {
                    if (!sa(Wh(), function (y) {
                        return y === e.containerId
                    })) {
                        Kk(e.containerId, m);
                        return
                    }
                } else if (!k && !Sh()) {
                    Jk(e.containerId,
                        m, !0);
                    return
                }
            }
            var n = np() || Ho;
            b.noTargetGroup || (hp && f ? (gp(e.id), dp(e.id, d[T.od] || "default")) : (fp(e.id), bp(e.id, d[T.od] || "default")));
            delete d[T.od];
            kp || Q(43);
            if (n) {
                var p = [e.id];
                hp && !f && (p = Wh());
                for (var q = !1, r = 0; r < p.length; r++) {
                    var t = Te(p[r]), u = N(b);
                    if (t && -1 !== ip.indexOf(t.prefix)) {
                        "G" === t.prefix && (d[T.Ub] = !0);
                        var v = u.eventMetadata || {};
                        v.hasOwnProperty("is_external_event") || (v.is_external_event = !u.fromContainerExecution);
                        u.eventMetadata = v;
                        delete d[T.Qb];
                        Mo(d, t.id, u);
                        q = !0
                    }
                }
                if (q) return
            }
            Od("gtag.targets." +
                e.id);
            Od("gtag.targets." + e.id, N(d));
        }, consent: function (a, b) {
            if (3 === a.length) {
                Q(39);
                var c = mp(a, b), d = a[1];
                "default" === d ? Bf(a[2]) : "update" === d && Df(a[2], c)
            }
        }, event: function (a, b) {
            var c = a[1];
            if (!(2 > a.length) && l(c)) {
                var d;
                if (2 < a.length) {
                    if (!ub(a[2]) && void 0 != a[2] || 3 < a.length) return;
                    d = a[2]
                }
                var e = d, f = {}, g = (f.event = c, f);
                e && (g.eventModel = N(e), e[T.Qb] && (g.eventCallback = e[T.Qb]), e[T.ld] && (g.eventTimeout = e[T.ld]));
                var k = mp(a, b), m = k.eventId, n = k.priorityId;
                g["gtm.uniqueEventId"] =
                    m;
                n && (g["gtm.priorityId"] = n);
                if ("optimize.callback" === c) return g.eventModel = g.eventModel || {}, g;
                var p;
                var q = d, r = q && q[T.tb];
                void 0 === r && (r = Ld(T.tb, 2), void 0 === r && (r = "default"));
                if (l(r) || ra(r)) {
                    var t = r.toString().replace(/\s+/g, "").split(","), u = ep(t), v = u.jj, y = u.lj;
                    if (y.length) for (var z = q && q[T.V] || Oo(), w = 0; w < y.length; w++) {
                        var A = Te(y[w]);
                        A && (hp ? Kk(A.containerId, z) : Jk(A.containerId, z, !0))
                    }
                    p = Ve(v)
                } else p = void 0;
                var x = p;
                if (!x) return;
                gj(m, c);
                for (var C =
                    np() || Ho, E = [], F = 0; C && F < x.length; F++) {
                    var D = x[F], L = N(b);
                    if (-1 !== ip.indexOf(D.prefix)) {
                        var I = N(d);
                        "G" !== D.prefix || L.fromMessageBus || (I[T.Ub] = !0);
                        var M = L.eventMetadata || {};
                        M.hasOwnProperty("is_external_event") || (M.is_external_event = !L.fromContainerExecution);
                        L.eventMetadata = M;
                        delete I[T.Qb];
                        Lo(c, I, D.id, L)
                    }
                    E.push(D.id)
                }
                g.eventModel = g.eventModel || {};
                0 < x.length ? g.eventModel[T.tb] = E.join() : delete g.eventModel[T.tb];
                kp || Q(43);
                return b.noGtmEvent ? void 0 :
                    g
            }
        }, get: function (a, b) {
            Q(53);
            if (4 !== a.length || !l(a[1]) || !l(a[2]) || !pa(a[3])) return;
            var c = Te(a[1]), d = String(a[2]), e = a[3];
            if (!c) return;
            kp || Q(43);
            if (Ho) {
                var f = Oo();
                if (hp) {
                    if (!sa(Wh(), function (k) {
                        return c.containerId === k
                    })) {
                        Kk(c.containerId, f);
                        return
                    }
                } else if (c.containerId !== Th.H && !Sh()) {
                    Jk(c.containerId, f, !0);
                    return
                }
            } else if (!np()) return;
            if (-1 === ip.indexOf(c.prefix)) return;
            mp(a, b);
            var g = {};
            xf(N((g[T.Ia] = d, g[T.Qa] = e, g)));
            No(d, function (k) {
                    J(function () {
                        return e(k)
                    })
                },
                c.id, b);
        }, js: function (a, b) {
            if (2 == a.length && a[1].getTime) {
                kp = !0;
                np();
                var c = mp(a, b), d = c.eventId, e = c.priorityId, f = {};
                return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
            }
        }, policy: function () {
        }, set: function (a, b) {
            var c;
            2 == a.length && ub(a[1]) ? c = N(a[1]) : 3 == a.length && l(a[1]) && (c = {}, ub(a[2]) || ra(a[2]) ? c[a[1]] = N(a[2]) : c[a[1]] = a[2]);
            if (c) {
                var d = mp(a, b), e = d.eventId, f = d.priorityId;
                N(c);
                if (np() || Ho) {
                    var g = N(c);
                    Io().push("set", [g], void 0, b)
                }
                c["gtm.uniqueEventId"] = e;
                f && (c["gtm.priorityId"] = f);
                b.overwriteModelFields = !0;
                return c
            }
        }
    }, Rp = {policy: !0}, Sp = function (a, b) {
        if (a.length && l(a[0])) {
            var c = op[a[0]];
            if (c && (!b.fromContainerExecution || !Rp[a[0]])) return c(a, b)
        }
    };
    var Tp = function (a) {
        var b = G[rd.Z].hide;
        if (b && void 0 !== b[a] && b.end) {
            b[a] = !1;
            var c = !0, d;
            for (d in b) if (b.hasOwnProperty(d) && !0 === b[d]) {
                c = !1;
                break
            }
            c && (b.end(), b.end = null)
        }
    }, Up = function (a) {
        var b = G[rd.Z], c = b && b.hide;
        c && c.end && (c[a] = !0)
    };
    var Vp = !1, Wp = [];

    function Xp() {
        if (!Vp) {
            Vp = !0;
            for (var a = 0; a < Wp.length; a++) J(Wp[a])
        }
    }

    var Yp = function (a) {
        Vp ? J(a) : Wp.push(a)
    };
    var oq = function (a) {
        if (nq(a)) return a;
        this.g = a
    };
    oq.prototype.getUntrustedMessageValue = function () {
        return this.g
    };
    var nq = function (a) {
        return !a || "object" !== sb(a) || ub(a) ? !1 : "getUntrustedMessageValue" in a
    }, pq = function (a) {
        if (nq(a)) return a.getUntrustedMessageValue()
    };
    oq.prototype.getUntrustedMessageValue = oq.prototype.getUntrustedMessageValue;
    var qq = 0, rq = {}, sq = [], tq = [], uq = !1, vq = !1;

    function wq(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }

    var xq = function (a) {
        return G[rd.Z].push(a)
    }, yq = function (a, b) {
        var c = U[rd.Z], d = c ? c.subscribers : 1, e = 0, f = !1, g = void 0;
        b && (g = G.setTimeout(function () {
            f || (f = !0, a());
            g = void 0
        }, b));
        return function () {
            ++e === d && (g && (G.clearTimeout(g), g = void 0), f || (a(), f = !0))
        }
    };

    function zq(a, b) {
        var c = !!Qe[10] && a._clear || b.overwriteModelFields;
        B(a, function (e, f) {
            "_clear" !== e && (c && Od(e), Od(e, f))
        });
        Ad || (Ad = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        "number" !== typeof d && (d = Ed(), a["gtm.uniqueEventId"] = d, Od("gtm.uniqueEventId", d));
        return ll(a)
    }

    var Aq = function (a) {
        if (l(a[0])) {
            var b = a[0].split("."), c = b.pop(), d = a.slice(1), e = Ld(b.join("."), 2);
            if (null != e) try {
                e[c].apply(e, d)
            } catch (f) {
            }
        }
    };

    function Bq(a) {
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (wa(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b) return !0
        }
        return !1
    }

    function Cq() {
        var a;
        if (tq.length) a = tq.shift(); else if (sq.length) a = {message: sq.shift(), messageContext: {}}; else return;
        nq(a.message) && (a.message = pq(a.message), a.messageContext.fromContainerExecution = !0);
        var b;
        var c = a;
        if (uq || !Bq(c.message)) b = c; else {
            uq = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Ed());
            var e = {}, f = (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e), g = {},
                k = (g.event = "gtm.init", g["gtm.uniqueEventId"] = d - 1, g);
            sq.unshift(k, c.message);
            b = {message: f, messageContext: {}}
        }
        return b
    }

    function Dq() {
        for (var a = !1, b; !vq && (b = Cq());) {
            vq = !0;
            Pd();
            var c = b, d = c.message, e = c.messageContext;
            if (null != d) {
                e.fromContainerExecution && Qd();
                try {
                    if (pa(d)) try {
                        d.call(Md)
                    } catch (k) {
                    } else if (ra(d)) Aq(d); else {
                        var f = void 0;
                        wa(d) ? f = Sp(d, e) : f = d;
                        f && (a = zq(f, e) || a);
                        if (Bq(d)) {
                            var g = d["gtm.uniqueEventId"];
                            void 0 !== g && (Eq(g), qq = g)
                        }
                    }
                } finally {
                    e.fromContainerExecution && Kd(!0)
                }
            }
            vq = !1
        }
        return !a
    }

    function Fq() {
        for (var a = !1; !vq && (0 < sq.length || 0 < tq.length);) {
            if (!uq && Bq(sq[0])) {
                var b = {}, c = (b.event = "gtm.init_consent", b), d = {}, e = (d.event = "gtm.init", d),
                    f = sq[0]["gtm.uniqueEventId"];
                Qe[8] && "number" !== typeof f && (f = sq[0]["gtm.uniqueEventId"] = Ed());
                "number" === typeof f && (c["gtm.uniqueEventId"] = f - 2, e["gtm.uniqueEventId"] = f - 1);
                sq.unshift(c, e);
                uq = !0;
            }
            vq = !0;
            Pd();
            var g = null, k = void 0;
            if (tq.length) {
                var m = tq.shift();
                g = m.message;
                k = m.messageContext
            }
            null == g && (g = sq.shift(), k = {});
            if (null != g) {
                nq(g) && (g = pq(g), k.fromContainerExecution = !0);
                k.fromContainerExecution && Qd();
                try {
                    if (pa(g)) try {
                        g.call(Md)
                    } catch (q) {
                    } else if (ra(g)) Aq(g); else {
                        var n = void 0;
                        wa(g) ? n = Sp(g, k) : n = g;
                        n && (a = zq(n, k) || a);
                        if (Bq(g)) {
                            var p = g["gtm.uniqueEventId"];
                            void 0 !== p && (Eq(p), qq = p)
                        }
                    }
                } finally {
                    k.fromContainerExecution &&
                    Kd(!0)
                }
            }
            vq = !1
        }
        return !a
    }

    function Gq() {
        var b = Qe[11] ? Dq() : Fq();
        try {
            Tp(Th.H)
        } catch (c) {
        }
        return b
    }

    function Rk(a) {
        if (qq < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            rq[b] = rq[b] || [];
            rq[b].push(a)
        } else tq.push(Iq(a)), tq.sort(wq), J(function () {
            vq || (Qe[11] ? Dq() : Fq())
        })
    }

    function Iq(a) {
        return {message: a.message, messageContext: a.messageContext}
    }

    function Eq(a) {
        for (var b = rq[String(a)] || [], c = 0; c < b.length; c++) tq.push(Iq(b[c]));
        b.length && tq.sort(wq);
        delete rq[String(a)]
    }

    var Jq = function () {
        var a = ab(rd.Z, []), b = U[rd.Z] = U[rd.Z] || {};
        !0 === b.pruned && Q(83);
        rq = Pk().get();
        Sk();
        Fj(function () {
            if (!b.gtmDom) {
                b.gtmDom = !0;
                var e = {};
                a.push((e.event = "gtm.dom", e))
            }
        });
        Yp(function () {
            if (!b.gtmLoad) {
                b.gtmLoad = !0;
                var e = {};
                a.push((e.event = "gtm.load", e))
            }
        });
        b.subscribers = (b.subscribers || 0) + 1;
        var c = a.push;
        a.push = function () {
            var e;
            if (0 < U.SANDBOXED_JS_SEMAPHORE) {
                e = [];
                for (var f = 0; f < arguments.length; f++) e[f] = new oq(arguments[f])
            } else e = [].slice.call(arguments, 0);
            sq.push.apply(sq, e);
            var g = c.apply(a,
                e), k = 300;
            Qe[16] && (k = Math.max(100, Number("1000") || k));
            if (this.length > k) for (Q(4), b.pruned = !0; this.length > k;) this.shift();
            var m = "boolean" !== typeof g || g;
            return (Qe[11] ? Dq() : Fq()) && m
        };
        var d = a.slice(0);
        sq.push.apply(sq, d);
        if (Hq()) {
            J(Gq)
        }
    }, Hq = function () {
        var a = !0;
        return a
    };

    function Kq(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a), c = Da();
        return b < c + 3E5 && b > c - 9E5
    };var Lq = {};
    Lq.yd = new String("undefined");
    var lr = G.clearTimeout, mr = G.setTimeout, W = function (a, b, c, d) {
        if (Sh()) {
            b && J(b)
        } else return fb(a, b, c, d)
    }, nr = function () {
        return new Date
    }, or = function () {
        return G.location.href
    }, pr = function (a) {
        return he(je(a), "fragment")
    }, qr = function (a) {
        return ie(je(a))
    }, rr = function (a, b) {
        return Ld(a, b || 2)
    }, sr = function (a, b, c) {
        var d;
        b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = xq(a)) : d = xq(a);
        return d
    }, tr = function (a, b) {
        G[a] = b
    }, X = function (a, b, c) {
        b &&
        (void 0 === G[a] || c && !G[a]) && (G[a] = b);
        return G[a]
    }, ur = function (a, b, c) {
        return Nf(a, b, void 0 === c ? !0 : !!c)
    }, vr = function (a, b, c) {
        return 0 === Wf(a, b, c)
    }, wr = function (a, b) {
        if (Sh()) {
            b && J(b)
        } else hb(a, b)
    }, xr = function (a) {
        return !!Sq(a, "init", !1)
    }, yr = function (a) {
        Qq(a, "init", !0)
    }, zr = function (a, b, c) {
        bj && (vb(a) || pj(c, b, a))
    };
    var Xr = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function Yr(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }

    var Zr = new ua;

    function $r(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d, f = Zr.get(e);
            f || (f = new RegExp(b, d), Zr.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function as(a, b) {
        function c(g) {
            var k = je(g), m = he(k, "protocol"), n = he(k, "host", !0), p = he(k, "port"),
                q = he(k, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default";
            return [m, n, p, q]
        }

        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++) if (d[f] !== e[f]) return !1;
        return !0
    }

    function bs(a) {
        return cs(a) ? 1 : 0
    }

    function cs(a) {
        var b = a.arg0, c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = N(a, {});
                N({arg1: c[d], any_of: void 0}, e);
                if (bs(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a:{
                    if (b) try {
                        for (var g = 0; g < Xr.length; g++) {
                            var k = Xr[g];
                            if (b[k]) {
                                f = b[k](c);
                                break a
                            }
                        }
                    } catch (m) {
                    }
                    f = !1
                }
                return f;
            case "_ew":
                return Yr(b, c);
            case "_eq":
                return String(b) === String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                return $r(b, c, a.ignore_case);
            case "_sw":
                return 0 === String(b).indexOf(String(c));
            case "_um":
                return as(b, c)
        }
        return !1
    };Object.freeze({dl: 1, id: 1});
    Object.freeze(["config", "event", "get", "set"]);
    var is = encodeURI, Y = encodeURIComponent, js = ib;
    var ks = function (a, b) {
        if (!a) return !1;
        var c = he(je(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f) return !0
            }
        }
        return !1
    }, ls = function (a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
        return e ? d : null
    };

    function Jt() {
        return G.gaGlobal = G.gaGlobal || {}
    }

    var Kt = function () {
        var a = Jt();
        a.hid = a.hid || ta();
        return a.hid
    }, Lt = function (a, b) {
        var c = Jt();
        if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
    };
    var pu = function () {
        if (pa(G.__uspapi)) {
            var a = "";
            try {
                G.__uspapi("getUSPData", 1, function (b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {
            }
            return a
        }
    };
    var Uu = window, Vu = document, Wu = function (a) {
        var b = Uu._gaUserPrefs;
        if (b && b.ioo && b.ioo() || a && !0 === Uu["ga-disable-" + a]) return !0;
        try {
            var c = Uu.external;
            if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
        } catch (f) {
        }
        for (var d = Jf("AMP_TOKEN", String(Vu.cookie), !0), e = 0; e < d.length; e++) if ("$OPT_OUT" == d[e]) return !0;
        return Vu.getElementById("__gaOptOutExtension") ? !0 : !1
    };
    var Xu = {};

    function ev(a) {
        delete a.eventModel[T.Ub];
        lv(a.eventModel)
    }

    var lv = function (a) {
        B(a, function (c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[T.Ka] || {};
        B(b, function (c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var Hv = function (a, b, c, d) {
        d = d || {};
        d.fromContainerExecution = !0;
        Lo(b, c, a, d)
    }, Iv = function (a, b, c, d) {
        d = d || {};
        d.deferrable = !0;
        d.fromContainerExecution = !0;
        Lo(b, c, a, d)
    }, Kv = function (a, b) {
    };

    function Jv(a, b) {
    }

    var Z = {h: {}};


    Z.h.e = ["google"], function () {
        (function (a) {
            Z.__e = a;
            Z.__e.m = "e";
            Z.__e.isVendorTemplate = !0;
            Z.__e.priorityOverride = 0
        })(function (a) {
            return String(a.vtp_gtmCachedValues.event)
        })
    }();


    Z.h.v = ["google"], function () {
        (function (a) {
            Z.__v = a;
            Z.__v.m = "v";
            Z.__v.isVendorTemplate = !0;
            Z.__v.priorityOverride = 0
        })(function (a) {
            var b = a.vtp_name;
            if (!b || !b.replace) return !1;
            var c = rr(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1), d = void 0 !== c ? c : a.vtp_defaultValue;
            zr(d, "v", a.vtp_gtmEventId);
            return d
        })
    }();

    Z.h.rep = ["google"], function () {
        var a = !1;
        (function (b) {
            Z.__rep = b;
            Z.__rep.m = "rep";
            Z.__rep.isVendorTemplate = !0;
            Z.__rep.priorityOverride = 0
        })(function (b) {
            var c = Te(b.vtp_containerId), d;
            switch (c.prefix) {
                case "AW":
                    d = Sm;
                    break;
                case "DC":
                    d = xn;
                    break;
                case "GF":
                    d = Cn;
                    break;
                case "HA":
                    d = Hn;
                    break;
                case "UA":
                    d = go;
                    break;
                default:
                    J(b.vtp_gtmOnFailure);
                    return
            }
            J(b.vtp_gtmOnSuccess);
            if (a) {
                var e = c.containerId,
                    f = Wh();
                Io(!0).notifyContainerLoaded(e, f)
            }
            Ko(b.vtp_containerId, d, b.vtp_remoteConfig || {})
        });
    }();

    Z.h.cid = ["google"], function () {
        (function (a) {
            Z.__cid = a;
            Z.__cid.m = "cid";
            Z.__cid.isVendorTemplate = !0;
            Z.__cid.priorityOverride = 0
        })(function () {
            return Th.H
        })
    }();


    Z.h.get = ["google"], function () {
        (function (a) {
            Z.__get = a;
            Z.__get.m = "get";
            Z.__get.isVendorTemplate = !0;
            Z.__get.priorityOverride = 0
        })(function (a) {
            var b = a.vtp_settings;
            (a.vtp_deferrable ? Iv : Hv)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {}, {});
            a.vtp_gtmOnSuccess()
        })
    }();


    var Lv = {};
    Lv.dataLayer = Md;
    Lv.callback = function (a) {
        Cd.hasOwnProperty(a) && pa(Cd[a]) && Cd[a]();
        delete Cd[a]
    };
    Lv.bootstrap = 0;
    Lv._spx = !1;
    (function (a) {
        if (!G["__TAGGY_INSTALLED"]) {
            var b = !1;
            if (H.referrer) {
                var c = je(H.referrer);
                b = "cct.google" === ge(c, "host")
            }
            if (!b) {
                var d = Nf("googTaggyReferrer");
                b = d.length && d[0].length
            }
            b && (G["__TAGGY_INSTALLED"] = !0, fb("https://cct.google/taggy/agent.js"))
        }
        var f = function (q) {
            var r = "GTM", t = "GTM";
            r = "OGT", t = "GTAG";
            var u = G["google.tagmanager.debugui2.queue"];
            u || (u = [], G["google.tagmanager.debugui2.queue"] = u, fb("https://" + rd.mc + "/debug/bootstrap?id=" + Th.H + "&src=" + t + "&cond=" + q + "&gtm=" + ci()));
            var v = {
                messageType: "CONTAINER_STARTING",
                data: {scriptSource: $a, containerProduct: r, debug: !1, id: Th.H}
            };
            v.data.resume = function () {
                a()
            };
            rd.yh && (v.data.initialPublish =
                !0);
            u.push(v)
        }, g = void 0, k = he(G.location, "query", !1, void 0, "gtm_debug");
        Kq(k) && (g = 2);
        if (!g && H.referrer) {
            var m = je(H.referrer);
            "tagassistant.google.com" === ge(m, "host") && (g = 3)
        }
        if (!g) {
            var n = Nf("__TAG_ASSISTANT");
            n.length && n[0].length && (g = 4)
        }
        if (!g) {
            var p = H.documentElement.getAttribute("data-tag-assistant-present");
            Kq(p) && (g = 5)
        }
        g && $a ? f(g) : a()
    })(function () {
        var a = !1;
        a && gk("INIT");
        ef().o();
        Sl();
        eh.enable_gbraid_cookie_write = !0;
        var b = !!U[Th.H];
        if (b) {
            var c = U.zones;
            c && c.unregisterChild(Vh());
        } else {
            for (var d = Wh(), e = 0; e < d.length; e++) {
                var f = d[e], g = Th.H;
                U.addDestinationToContainer ? U.addDestinationToContainer(f, g) : (U.pendingDestinationIds = U.pendingDestinationIds || [], U.pendingDestinationIds.push([f, g]))
            }
            for (var k = data.resource || {}, m = k.macros || [], n = 0; n < m.length; n++) Ub.push(m[n]);
            for (var p = k.tags || [], q = 0; q < p.length; q++) Xb.push(p[q]);
            for (var r = k.predicates || [], t = 0; t < r.length; t++) Wb.push(r[t]);
            for (var u = k.rules || [], v = 0; v < u.length; v++) {
                for (var y =
                    u[v], z = {}, w = 0; w < y.length; w++) z[y[w][0]] = Array.prototype.slice.call(y[w], 1);
                Vb.push(z)
            }
            Zb = Z;
            $b = bs;
            U[Th.H] = Lv;
            for (var A = Yh(), x = Vh(), C = 0; C < x.length; C++) A.container[x[C]] = !0;
            for (var E = Wh(), F = 0; F < E.length; F++) A.destination[E[F]] = !0;
            A.canonical[Th.kc] = !0;
            Ga(Dd, Z.h);
            bc = kc;
            Jq();
            Aj = !1;
            Bj = 0;
            if ("interactive" == H.readyState && !H.createEventObject || "complete" == H.readyState) Dj(); else {
                jb(H, "DOMContentLoaded", Dj);
                jb(H, "readystatechange", Dj);
                if (H.createEventObject && H.documentElement.doScroll) {
                    var D = !0;
                    try {
                        D = !G.frameElement
                    } catch (O) {
                    }
                    D && Ej()
                }
                jb(G, "load", Dj)
            }
            Vp = !1;
            "complete" === H.readyState ? Xp() : jb(G, "load", Xp);
            bj && G.setInterval(Vi, 864E5);
            Bd = Da();
            Lv.bootstrap = Bd;
            if (a) {
                var P = hk("INIT");
            }
        }
    });

})()
