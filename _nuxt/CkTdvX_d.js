import {
  e as X,
  O as Co,
  P as To,
  _ as K,
  o as M,
  c as H,
  r as u,
  z as Be,
  v as So,
  i as R,
  F as xe,
  s as ke,
  a as c,
  k as Ce,
  u as le,
  A as Qe,
  B as qt,
  C as Bt,
  f as J,
  n as Te,
  g as et,
  h as n,
  t as pe,
  l as Ue,
  w as $o,
  Y as bo,
  p as De,
  I as tt,
  x as lt,
  m as He,
  b as D,
  q as Mo,
  Q as Ho,
  R as No
} from "./BXQMaeyj.js";
import {
  u as ce,
  S as _t
} from "./BGjYj7bP.js";
import {
  _ as zo
} from "./B_cpn0MM.js";
import {
  a as Io,
  b as rt,
  m as Lo,
  S as Vo
} from "./Dkp8x4GF.js";
import {
  D as Dt
} from "./DInpGGAu.js";
const Oo = h => {
    const e = h.split("");
    let o = "";
    for (let t = 0; t < e.length; t++) e[t] === " " ? o += '<div class="char">&nbsp;</div>' : o += `<div class="char">${e[t]}</div>`;
    return o
  },
  ot = h => {
    const {
      left: e,
      top: o,
      width: t,
      height: i
    } = h.getBoundingClientRect(), a = window.innerWidth / 2, l = window.innerHeight / 2, r = e + t / 2, s = o + i / 2, v = a - r, g = l - s, m = 50 + v / t * 100 + "%", p = 50 + g / i * 100 + "%";
    return `${m} ${p}`
  };
/*!
 * DrawSVGPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var ve, mt, Xe, jt, Ft, Ct, ct, Zt, Wt = function () {
    return typeof window < "u"
  },
  Yt = function () {
    return ve || Wt() && (ve = window.gsap) && ve.registerPlugin && ve
  },
  Eo = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
  nt = {
    rect: ["width", "height"],
    circle: ["r", "r"],
    ellipse: ["rx", "ry"],
    line: ["x2", "y2"]
  },
  Pe = function (e) {
    return Math.round(e * 1e4) / 1e4
  },
  ge = function (e) {
    return parseFloat(e) || 0
  },
  Tt = function (e, o) {
    var t = ge(e);
    return ~e.indexOf("%") ? t / 100 * o : t
  },
  Ze = function (e, o) {
    return ge(e.getAttribute(o))
  },
  We = Math.sqrt,
  St = function (e, o, t, i, a, l) {
    return We(Math.pow((ge(t) - ge(e)) * a, 2) + Math.pow((ge(i) - ge(o)) * l, 2))
  },
  $t = function (e) {
    return console.warn(e)
  },
  Ut = function (e) {
    return e.getAttribute("vector-effect") === "non-scaling-stroke"
  },
  Go = 1,
  qo = function (e, o, t) {
    var i = e.indexOf(" "),
      a, l;
    return i < 0 ? (a = t !== void 0 ? t + "" : e, l = e) : (a = e.substr(0, i), l = e.substr(i + 1)), a = Tt(a, o), l = Tt(l, o), a > l ? [l, a] : [a, l]
  },
  Ye = function (e) {
    if (e = mt(e)[0], !e) return 0;
    var o = e.tagName.toLowerCase(),
      t = e.style,
      i = 1,
      a = 1,
      l, r, s, v, g, m, p;
    Ut(e) && (a = e.getScreenCTM(), i = We(a.a * a.a + a.b * a.b), a = We(a.d * a.d + a.c * a.c));
    try {
      r = e.getBBox()
    } catch {
      $t("Some browsers won't measure invisible elements (like display:none or masks inside defs).")
    }
    var _ = r || {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      },
      y = _.x,
      d = _.y,
      f = _.width,
      k = _.height;
    if ((!r || !f && !k) && nt[o] && (f = Ze(e, nt[o][0]), k = Ze(e, nt[o][1]), o !== "rect" && o !== "line" && (f *= 2, k *= 2), o === "line" && (y = Ze(e, "x1"), d = Ze(e, "y1"), f = Math.abs(f - y), k = Math.abs(k - d))), o === "path") v = t.strokeDasharray, t.strokeDasharray = "none", l = e.getTotalLength() || 0, Pe(i) !== Pe(a) && !Ct && (Ct = 1) && $t("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."), l *= (i + a) / 2, t.strokeDasharray = v;
    else if (o === "rect") l = f * 2 * i + k * 2 * a;
    else if (o === "line") l = St(y, d, y + f, d + k, i, a);
    else if (o === "polyline" || o === "polygon")
      for (s = e.getAttribute("points").match(Eo) || [], o === "polygon" && s.push(s[0], s[1]), l = 0, g = 2; g < s.length; g += 2) l += St(s[g - 2], s[g - 1], s[g], s[g + 1], i, a) || 0;
    else(o === "circle" || o === "ellipse") && (m = f / 2 * i, p = k / 2 * a, l = Math.PI * (3 * (m + p) - We((3 * m + p) * (m + 3 * p))));
    return l || 0
  },
  bt = function (e, o) {
    if (e = mt(e)[0], !e) return [0, 0];
    o || (o = Ye(e) + 1);
    var t = Xe.getComputedStyle(e),
      i = t.strokeDasharray || "",
      a = ge(t.strokeDashoffset),
      l = i.indexOf(",");
    return l < 0 && (l = i.indexOf(" ")), i = l < 0 ? o : ge(i.substr(0, l)), i > o && (i = o), [-a || 0, i - a || 0]
  },
  Mt = function () {
    Wt() && (Xe = window, Ft = ve = Yt(), mt = ve.utils.toArray, ct = ve.core.getStyleSaver, Zt = ve.core.reverting || function () {}, jt = ((Xe.navigator || {}).userAgent || "").indexOf("Edge") !== -1)
  },
  Xt = {
    version: "3.12.5",
    name: "drawSVG",
    register: function (e) {
      ve = e, Mt()
    },
    init: function (e, o, t, i, a) {
      if (!e.getBBox) return !1;
      Ft || Mt();
      var l = Ye(e),
        r, s, v;
      return this.styles = ct && ct(e, "strokeDashoffset,strokeDasharray,strokeMiterlimit"), this.tween = t, this._style = e.style, this._target = e, o + "" == "true" ? o = "0 100%" : o ? (o + "").indexOf(" ") === -1 && (o = "0 " + o) : o = "0 0", r = bt(e, l), s = qo(o, l, r[0]), this._length = Pe(l), this._dash = Pe(r[1] - r[0]), this._offset = Pe(-r[0]), this._dashPT = this.add(this, "_dash", this._dash, Pe(s[1] - s[0]), 0, 0, 0, 0, 0, 1), this._offsetPT = this.add(this, "_offset", this._offset, Pe(-s[0]), 0, 0, 0, 0, 0, 1), jt && (v = Xe.getComputedStyle(e), v.strokeLinecap !== v.strokeLinejoin && (s = ge(v.strokeMiterlimit), this.add(e.style, "strokeMiterlimit", s, s + .01))), this._live = Ut(e) || ~(o + "").indexOf("live"), this._nowrap = ~(o + "").indexOf("nowrap"), this._props.push("drawSVG"), Go
    },
    render: function (e, o) {
      if (o.tween._time || !Zt()) {
        var t = o._pt,
          i = o._style,
          a, l, r, s;
        if (t) {
          for (o._live && (a = Ye(o._target), a !== o._length && (l = a / o._length, o._length = a, o._offsetPT && (o._offsetPT.s *= l, o._offsetPT.c *= l), o._dashPT ? (o._dashPT.s *= l, o._dashPT.c *= l) : o._dash *= l)); t;) t.r(e, t.d), t = t._next;
          r = o._dash || e && e !== 1 && 1e-4 || 0, a = o._length - r + .1, s = o._offset, r && s && r + Math.abs(s % o._length) > o._length - .2 && (s += s < 0 ? .1 : -.1) && (a += .1), i.strokeDashoffset = r ? s : s + .001, i.strokeDasharray = a < .2 ? "none" : r ? r + "px," + (o._nowrap ? 999999 : a) + "px" : "0px, 999999px"
        }
      } else o.styles.revert()
    },
    getLength: Ye,
    getPosition: bt
  };
Yt() && ve.registerPlugin(Xt);
/*!
 * VelocityTracker: 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var ue, ut, Oe, Kt, Me, Ne, vt, Jt, Qt = function () {
    return ue || typeof window < "u" && (ue = window.gsap)
  },
  ft = {},
  Bo = function (e) {
    return Math.round(e * 1e4) / 1e4
  },
  dt = function (e) {
    return Jt(e).id
  },
  Ve = function (e) {
    return ft[dt(typeof e == "string" ? Oe(e)[0] : e)]
  },
  Ht = function (e) {
    var o = Me,
      t;
    if (e - vt >= .05)
      for (vt = e; o;) t = o.g(o.t, o.p), (t !== o.v1 || e - o.t1 > .2) && (o.v2 = o.v1, o.v1 = t, o.t2 = o.t1, o.t1 = e), o = o._next
  },
  Do = {
    deg: 360,
    rad: Math.PI * 2
  },
  at = function () {
    ue = Qt(), ue && (Oe = ue.utils.toArray, Kt = ue.utils.getUnit, Jt = ue.core.getCache, Ne = ue.ticker, ut = 1)
  },
  jo = function (e, o, t, i) {
    this.t = e, this.p = o, this.g = e._gsap.get, this.rCap = Do[t || Kt(this.g(e, o))], this.v1 = this.v2 = 0, this.t1 = this.t2 = Ne.time, i && (this._next = i, i._prev = this)
  },
  je = function () {
    function h(o, t) {
      ut || at(), this.target = Oe(o)[0], ft[dt(this.target)] = this, this._props = {}, t && this.add(t)
    }
    h.register = function (t) {
      ue = t, at()
    };
    var e = h.prototype;
    return e.get = function (t, i) {
      var a = this._props[t] || console.warn("Not tracking " + t + " velocity."),
        l, r, s;
      return l = parseFloat(i ? a.v1 : a.g(a.t, a.p)), r = l - parseFloat(a.v2), s = a.rCap, s && (r = r % s, r !== r % (s / 2) && (r = r < 0 ? r + s : r - s)), Bo(r / ((i ? a.t1 : Ne.time) - a.t2))
    }, e.getAll = function () {
      var t = {},
        i = this._props,
        a;
      for (a in i) t[a] = this.get(a);
      return t
    }, e.isTracking = function (t) {
      return t in this._props
    }, e.add = function (t, i) {
      t in this._props || (Me || (Ne.add(Ht), vt = Ne.time), Me = this._props[t] = new jo(this.target, t, i, Me))
    }, e.remove = function (t) {
      var i = this._props[t],
        a, l;
      i && (a = i._prev, l = i._next, a && (a._next = l), l ? l._prev = a : Me === i && (Ne.remove(Ht), Me = 0), delete this._props[t])
    }, e.kill = function (t) {
      for (var i in this._props) this.remove(i);
      t || delete ft[dt(this.target)]
    }, h.track = function (t, i, a) {
      ut || at();
      for (var l = [], r = Oe(t), s = i.split(","), v = (a || "").split(","), g = r.length, m, p; g--;) {
        for (m = Ve(r[g]) || new h(r[g]), p = s.length; p--;) m.add(s[p], v[p] || v[0]);
        l.push(m)
      }
      return l
    }, h.untrack = function (t, i) {
      var a = (i || "").split(",");
      Oe(t).forEach(function (l) {
        var r = Ve(l);
        r && (a.length ? a.forEach(function (s) {
          return r.remove(s)
        }) : r.kill(1))
      })
    }, h.isTracking = function (t, i) {
      var a = Ve(t);
      return a && a.isTracking(i)
    }, h.getVelocity = function (t, i) {
      var a = Ve(t);
      return !a || !a.isTracking(i) ? console.warn("Not tracking velocity of " + i) : a.get(i)
    }, h
  }();
je.getByTarget = Ve;
Qt() && ue.registerPlugin(je);
/*!
 * InertiaPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Y, eo, Nt, to, pt, Ee, oo, no, ao, yt, io, Ge, gt, so, Ke = je.getByTarget,
  lo = function () {
    return Y || typeof window < "u" && (Y = window.gsap) && Y.registerPlugin && Y
  },
  Fo = function (e) {
    return typeof e == "string"
  },
  qe = function (e) {
    return typeof e == "number"
  },
  we = function (e) {
    return typeof e == "object"
  },
  ht = function (e) {
    return typeof e == "function"
  },
  Zo = 1,
  ro = Array.isArray,
  Wo = function (e) {
    return e
  },
  Re = 1e10,
  zt = 1 / Re,
  co = .05,
  Yo = function (e) {
    return Math.round(e * 1e4) / 1e4
  },
  Uo = function (e, o, t) {
    for (var i in o) !(i in e) && i !== t && (e[i] = o[i]);
    return e
  },
  Xo = function h(e) {
    var o = {},
      t, i;
    for (t in e) o[t] = we(i = e[t]) && !ro(i) ? h(i) : i;
    return o
  },
  It = function (e, o, t, i, a) {
    var l = o.length,
      r = 0,
      s = Re,
      v, g, m, p;
    if (we(e)) {
      for (; l--;) {
        v = o[l], g = 0;
        for (m in e) p = v[m] - e[m], g += p * p;
        g < s && (r = l, s = g)
      }
      if ((a || Re) < Re && a < Math.sqrt(s)) return e
    } else
      for (; l--;) v = o[l], g = v - e, g < 0 && (g = -g), g < s && v >= i && v <= t && (r = l, s = g);
    return o[r]
  },
  uo = function (e, o, t, i, a, l, r) {
    if (e.end === "auto") return e;
    var s = e.end,
      v, g;
    if (t = isNaN(t) ? Re : t, i = isNaN(i) ? -Re : i, we(o)) {
      if (v = o.calculated ? o : (ht(s) ? s(o, r) : It(o, s, t, i, l)) || o, !o.calculated) {
        for (g in v) o[g] = v[g];
        o.calculated = !0
      }
      v = v[a]
    } else v = ht(s) ? s(o, r) : ro(s) ? It(o, s, t, i, l) : parseFloat(s);
    return v > t ? v = t : v < i && (v = i), {
      max: v,
      min: v,
      unitFactor: e.unitFactor
    }
  },
  Je = function (e, o, t) {
    return isNaN(e[o]) ? t : +e[o]
  },
  wt = function (e, o) {
    return o * co * e / yt
  },
  Lt = function (e, o, t) {
    return Math.abs((o - e) * yt / t / co)
  },
  vo = {
    resistance: 1,
    checkpoint: 1,
    preventOvershoot: 1,
    linkedProps: 1,
    radius: 1,
    duration: 1
  },
  fo = function (e, o, t, i) {
    if (o.linkedProps) {
      var a = o.linkedProps.split(","),
        l = {},
        r, s, v, g, m, p;
      for (r = 0; r < a.length; r++) s = a[r], v = o[s], v && (qe(v.velocity) ? g = v.velocity : (m = m || Ke(e), g = m && m.isTracking(s) ? m.get(s) : 0), p = Math.abs(g / Je(v, "resistance", i)), l[s] = parseFloat(t(e, s)) + wt(g, p));
      return l
    }
  },
  Ko = function (e, o, t, i, a, l) {
    if (t === void 0 && (t = 10), i === void 0 && (i = .2), a === void 0 && (a = 1), Fo(e) && (e = to(e)[0]), !e) return 0;
    var r = 0,
      s = Re,
      v = o.inertia || o,
      g = ao(e).get,
      m = Je(v, "resistance", Ee.resistance),
      p, _, y, d, f, k, P, C, T, S;
    S = fo(e, v, g, m);
    for (p in v) vo[p] || (_ = v[p], we(_) || (C = C || Ke(e), C && C.isTracking(p) ? _ = qe(_) ? {
      velocity: _
    } : {
      velocity: C.get(p)
    } : (d = +_ || 0, y = Math.abs(d / m))), we(_) && (qe(_.velocity) ? d = _.velocity : (C = C || Ke(e), d = C && C.isTracking(p) ? C.get(p) : 0), y = io(i, t, Math.abs(d / Je(_, "resistance", m))), f = parseFloat(g(e, p)) || 0, k = f + wt(d, y), "end" in _ && (_ = uo(_, S && p in S ? S : k, _.max, _.min, p, v.radius, d), Ge === o && (Ge = v = Xo(o)), v[p] = Uo(_, v[p], "end")), "max" in _ && k > +_.max + zt ? (T = _.unitFactor || Ee.unitFactors[p] || 1, P = f > _.max && _.min !== _.max || d * T > -15 && d * T < 45 ? i + (t - i) * .1 : Lt(f, _.max, d), P + a < s && (s = P + a)) : "min" in _ && k < +_.min - zt && (T = _.unitFactor || Ee.unitFactors[p] || 1, P = f < _.min && _.min !== _.max || d * T > -45 && d * T < 15 ? i + (t - i) * .1 : Lt(f, _.min, d), P + a < s && (s = P + a)), P > r && (r = P)), y > r && (r = y));
    return r > s && (r = s), r > t ? t : r < i ? i : r
  },
  Vt = function () {
    Y = lo(), Y && (Nt = Y.parseEase, to = Y.utils.toArray, oo = Y.utils.getUnit, ao = Y.core.getCache, io = Y.utils.clamp, gt = Y.core.getStyleSaver, so = Y.core.reverting || function () {}, pt = Nt("power3"), yt = pt(.05), no = Y.core.PropTween, Y.config({
      resistance: 100,
      unitFactors: {
        time: 1e3,
        totalTime: 1e3,
        progress: 1e3,
        totalProgress: 1e3
      }
    }), Ee = Y.config(), Y.registerPlugin(je), eo = 1)
  },
  xt = {
    version: "3.12.5",
    name: "inertia",
    register: function (e) {
      Y = e, Vt()
    },
    init: function (e, o, t, i, a) {
      eo || Vt();
      var l = Ke(e);
      if (o === "auto") {
        if (!l) {
          console.warn("No inertia tracking on " + e + ". InertiaPlugin.track(target) first.");
          return
        }
        o = l.getAll()
      }
      this.styles = gt && typeof e.style == "object" && gt(e), this.target = e, this.tween = t, Ge = o;
      var r = e._gsap,
        s = r.get,
        v = o.duration,
        g = we(v),
        m = o.preventOvershoot || g && v.overshoot === 0,
        p = Je(o, "resistance", Ee.resistance),
        _ = qe(v) ? v : Ko(e, o, g && v.max || 10, g && v.min || .2, g && "overshoot" in v ? +v.overshoot : m ? 0 : 1),
        y, d, f, k, P, C, T, S, b;
      o = Ge, Ge = 0, b = fo(e, o, s, p);
      for (y in o) vo[y] || (d = o[y], ht(d) && (d = d(i, e, a)), qe(d) ? P = d : we(d) && !isNaN(d.velocity) ? P = +d.velocity : l && l.isTracking(y) ? P = l.get(y) : console.warn("ERROR: No velocity was defined for " + e + " property: " + y), C = wt(P, _), S = 0, f = s(e, y), k = oo(f), f = parseFloat(f), we(d) && (T = f + C, "end" in d && (d = uo(d, b && y in b ? b : T, d.max, d.min, y, o.radius, P)), "max" in d && +d.max < T ? m || d.preventOvershoot ? C = d.max - f : S = d.max - f - C : "min" in d && +d.min > T && (m || d.preventOvershoot ? C = d.min - f : S = d.min - f - C)), this._props.push(y), this.styles && this.styles.save(y), this._pt = new no(this._pt, e, y, f, 0, Wo, 0, r.set(e, y, this)), this._pt.u = k || 0, this._pt.c1 = C, this._pt.c2 = S);
      return t.duration(_), Zo
    },
    render: function (e, o) {
      var t = o._pt;
      if (e = pt(o.tween._time / o.tween._dur), e || !so())
        for (; t;) t.set(t.t, t.p, Yo(t.s + t.c1 * e + t.c2 * e * e) + t.u, t.d, e), t = t._next;
      else o.styles.revert()
    }
  };
"track,untrack,isTracking,getVelocity,getByTarget".split(",").forEach(function (h) {
  return xt[h] = je[h]
});
lo() && Y.registerPlugin(xt);
const Jo = "$s";

function Qo(...h) {
  const e = typeof h[h.length - 1] == "string" ? h.pop() : void 0;
  typeof h[0] != "string" && h.unshift(e);
  const [o, t] = h;
  if (!o || typeof o != "string") throw new TypeError("[nuxt] [useState] key must be a string: " + o);
  if (t !== void 0 && typeof t != "function") throw new Error("[nuxt] [useState] init must be a function: " + t);
  const i = Jo + o,
    a = X(),
    l = Co(a.payload.state, i);
  if (l.value === void 0 && t) {
    const r = t();
    if (To(r)) return a.payload.state[i] = r, r;
    l.value = r
  }
  return l
}
const en = {},
  tn = {
    class: "notification"
  };

function on(h, e) {
  return M(), H("div", tn, " (Please rotate your device) ")
}
const nn = K(en, [
    ["render", on],
    ["__scopeId", "data-v-116d422f"]
  ]),
  an = {
    __name: "Grid",
    setup(h) {
      const e = u(null),
        o = u(null);
      Be(() => {
        window.addEventListener("keyup", t)
      }), So(() => {
        window.removeEventListener("keyup", t)
      });
      const t = ({
        key: i
      }) => {
        i === "g" && (e.value = !e.value)
      };
      return (i, a) => R(e) ? (M(), H("div", {
        key: 0,
        ref_key: "gridRef",
        ref: o,
        class: "grid"
      }, [(M(), H(xe, null, ke(12, l => c("div", {
        key: l,
        class: "column"
      })), 64))], 512)) : Ce("", !0)
    }
  },
  sn = K(an, [
    ["__scopeId", "data-v-608fe5c9"]
  ]),
  ln = {
    class: "images"
  },
  rn = ["src", "srcset"],
  cn = {
    class: "categories"
  },
  un = {
    class: "digit"
  },
  vn = {
    class: "digit"
  },
  be = "",
  it = "",
  fn = {
    __name: "Loader",
    async setup(h) {
      let e, o;
      const t = le(),
        {
          isMobile: i
        } = ce(),
        {
          callHook: a,
          hook: l,
          hooks: r,
          $preview: s
        } = X(),
        v = s ? "draft" : "published",
        {
          data: g
        } = ([e, o] = Qe(async () => qt("global", async () => {
          const {
            data: $
          } = await Bt().get("cdn/stories/global", {
            version: v
          });
          return $ == null ? void 0 : $.story
        })), e = await e, o(), e),
        m = ["Campaigns", "Editorial", "Celebrities", "Beauty"],
        p = u([]),
        _ = u([]),
        y = u([]),
        d = u([]),
        f = u([]),
        k = u(null),
        P = u(null),
        C = u(0),
        T = u(0),
        S = u(0),
        b = u(0),
        V = u(1),
        N = u(null);
      let z, x, w = 0,
        O, E, G, j;
      J(() => {
        L(), F(), re(), l("loader:skip", ae), l("window:resize", L), Te(() => {
          fe()
        })
      }), et(() => {
        r.removeHook("loader:skip", ae), r.removeHook("window:resize", L)
      });
      const L = () => {
          const $ = t.windowSize.width / (i ? 375 : 1440),
            B = i ? 100 : 375;
          O = `polygon(
    ${$*B}px ${t.windowSize.height}px,
    ${t.windowSize.width-$*B}px ${t.windowSize.height}px,
    ${t.windowSize.width-$*B}px ${t.windowSize.height}px,
    ${$*B}px ${t.windowSize.height}px
  )`, E = `polygon(
    0px 0px,
    ${t.windowSize.width}px 0px,
    ${t.windowSize.width}px ${t.windowSize.height}px,
    0px ${t.windowSize.height}px
  )`
        },
        F = () => {
          const $ = g.value.content.images;
          d.value = Array.from({
            length: Math.min(3, $.length)
          }, () => $.splice(Math.floor(Math.random() * $.length), 1)[0])
        },
        ae = () => {
          G.kill(), j.kill(), n.delayedCall(.1, ie)
        },
        re = () => {
          z = new _t(P.value, {
            type: "chars",
            charsClass: "char"
          }), n.set(z.chars, {
            yPercent: 100
          }), n.fromTo(N.value.children, {
            yPercent: 100,
            autoAlpha: 1
          }, {
            yPercent: 0,
            duration: 1,
            stagger: .1,
            ease: "power3.inOut"
          }), n.fromTo(f.value, {
            yPercent: 100,
            autoAlpha: 1
          }, {
            yPercent: 0,
            duration: 1,
            stagger: .1,
            ease: "power3.out"
          }), n.delayedCall(1, he)
        },
        fe = () => {
          t.cases.forEach(({
            story: $
          }) => {
            var W, se;
            const B = (se = (W = $ == null ? void 0 : $.content) == null ? void 0 : W.cover) == null ? void 0 : se.filename;
            B && p.value.push({
              src: `${B}`,
              srcset: `${B} 1200w, ${B} 1920w`
            })
          }), d.value.forEach(({
            filename: $
          }) => {
            $ && p.value.push({
              src: `${$}`,
              srcset: `${$} 1200w, ${$} 1920w`
            })
          }), x = p.value.length, p.value.forEach(({
            src: $,
            srcset: B
          }) => {
            const W = new Image;
            B && (W.srcset = B), W.src = $, W.onload = W.onerror = () => {
              w++, V.value = Math.round(w / x * 99)
            }
          })
        },
        ie = () => {
          n.set(k.value, {
            zIndex: 1
          }), n.delayedCall(1, () => {
            t.setLoader(0), t.setLoading(0)
          }), a("header:intro"), a("navigationSkip:leave"), a("navigationArrows:intro"), a("navigationShape:default"), t.navigation === "categories" && (a("categories:intro"), a("navigationCategories:intro")), t.navigation === "case" && (a("navigation:left"), a("navigationCase:intro"), a("navigationClose:show")), t.navigation === "about" && (a("navigation:left"), a("navigationAbout:intro"), a("navigationClose:show"))
        },
        de = () => {
          a("navigationSkip:enter"), a("navigationShape:enter"), n.to(P.value, {
            y: -t.windowSize.height / 2,
            duration: 1,
            ease: "power3.inOut"
          }), j = n.timeline(), _.value.forEach(($, B) => {
            j.fromTo($, {
              yPercent: 50
            }, {
              yPercent: 0,
              duration: 1,
              ease: "power3.inOut"
            }, B), j.fromTo($, {
              scale: 1,
              autoAlpha: 1
            }, {
              scale: 1.2,
              autoAlpha: .5,
              duration: 3,
              ease: "none"
            }, B)
          }), y.value.forEach(($, B) => {
            j.fromTo($, {
              autoAlpha: 1,
              clipPath: O
            }, {
              stagger: 1,
              clipPath: E,
              duration: 1,
              ease: "power3.inOut"
            }, B)
          }), G = n.delayedCall(y.value.length, () => {
            ie()
          })
        },
        he = () => {
          const $ = V.value.toString().padStart(2, "0");
          T.value = $[0], b.value = $[1], n.fromTo(N.value.children, {
            yPercent: 0
          }, {
            stagger: .1,
            yPercent: -100,
            duration: .8,
            ease: "power3.inOut",
            onComplete: () => {
              C.value = T.value, S.value = b.value
            }
          }), n.delayedCall(1, w === x ? _e : he)
        },
        _e = () => {
          n.to(N.value.children, {
            yPercent: -200,
            duration: 1,
            stagger: .1,
            ease: "power3.inOut"
          }), n.to(f.value, {
            yPercent: -100,
            duration: 1,
            ease: "power3.inOut"
          }), n.to(z.chars, {
            yPercent: 0,
            duration: 1,
            stagger: .04,
            ease: "power3.inOut",
            onComplete: () => {
              de()
            }
          }), n.set(P.value, {
            autoAlpha: 1
          })
        };
      return ($, B) => (M(), H("div", {
        ref_key: "elRef",
        ref: k,
        class: "loader"
      }, [c("div", ln, [(M(!0), H(xe, null, ke(R(d), (W, se) => (M(), H("div", {
        key: se,
        ref_for: !0,
        ref_key: "imageRef",
        ref: y,
        class: "image"
      }, [c("img", {
        ref_for: !0,
        ref_key: "imgRef",
        ref: _,
        class: "img",
        src: W.filename + be,
        srcset: `
            ${W.filename+it} 1200w,
            ${W.filename+be} 1920w,
          `
      }, null, 8, rn)]))), 128))]), c("div", {
        ref_key: "titleRef",
        ref: P,
        class: "title"
      }, " Ottografie ", 512), c("ul", cn, [(M(), H(xe, null, ke(m, (W, se) => c("li", {
        key: se,
        class: "category"
      }, [c("div", {
        ref_for: !0,
        ref_key: "labelRef",
        ref: f,
        class: "label"
      }, pe(W), 513)])), 64))]), c("div", {
        ref_key: "percentageRef",
        ref: N,
        class: "percentage"
      }, [c("div", un, [c("div", null, pe(R(C)), 1), c("div", null, pe(R(T)), 1)]), c("div", vn, [c("div", null, pe(R(S)), 1), c("div", null, pe(R(b)), 1)])], 512)], 512))
    }
  },
  dn = K(fn, [
    ["__scopeId", "data-v-28528cc8"]
  ]),
  pn = ["innerHTML"],
  gn = ["src"],
  hn = ["src", "srcset"],
  Ot = "",
  _n = "",
  mn = "",
  yn = {
    __name: "CategoriesCover",
    props: {
      story: Object
    },
    setup(h) {
      const e = le(),
        {
          callHook: o,
          hook: t,
          hooks: i
        } = X(),
        {
          isMobile: a,
          isSafari: l,
          isDesktopOrTablet: r
        } = ce(),
        s = h,
        v = u(null),
        g = u(null),
        m = u(null),
        p = s.story.content.cover.filename;
      let _;
      J(() => {
        e.setCases({
          story: s.story,
          name: s.story.name,
          dom: v.value.$el
        }), a && (Te(() => {
          y()
        }), t("categoriesCover:show", d), t("categoriesCover:hide", f))
      }), et(() => {
        !a || e.isTouch || (i.removeHook("categoriesCover:show", d), i.removeHook("categoriesCover:hide", f))
      });
      const y = () => {
          _ = new _t(g.value, {
            type: "lines,words",
            linesClass: "line",
            wordsClass: "word"
          })
        },
        d = () => {
          n.to(_.words, {
            yPercent: 0
          })
        },
        f = () => {
          n.to(_.words, {
            yPercent: 100
          })
        },
        k = () => {
          e.loader || e.navigation === "categoriesNext" || a || e.isTouch || (o("cursor:show"), o("navigationShape:focus"), o("navigationArrows:focus"), o("navigationCategories:project"), o("navigationCategories:dataProject", s.story), o("navigationCase:dataActive", s.story, 0))
        },
        P = () => {
          e.loader || e.navigation === "categoriesNext" || a || e.isTouch || (o("cursor:hide"), o("navigationShape:default"), o("navigationArrows:default"), o("navigationCategories:active"))
        },
        C = S => {
          e.setNavigation("case"), T(S), o("navigation:left"), o("navigationCase:enter"), o("navigationCategories:leave"), l && r && P(), !(!a || !e.isTouch) && o("navigationCase:dataActive", s.story, 0)
        },
        T = S => {
          const b = S.target.getBoundingClientRect();
          e.setTransition({
            type: "categories-case",
            bounds: b
          })
        };
      return (S, b) => {
        const V = zo;
        return h.story ? (M(), Ue(V, {
          key: 0,
          ref_key: "coverRef",
          ref: v,
          class: "cover",
          to: `/${h.story.full_slug}`,
          tabindex: "-1",
          onClick: C,
          onMouseenter: k,
          onMouseleave: P
        }, {
          default: $o(() => [c("div", {
            ref_key: "titleRef",
            ref: g,
            class: "title",
            innerHTML: h.story.name
          }, null, 8, pn), c("img", {
            class: "preview",
            src: R(p) + mn
          }, null, 8, gn), c("img", {
            ref_key: "imgRef",
            ref: m,
            class: "img",
            src: R(p) + Ot,
            srcset: `
        ${R(p)+_n} 1200w,
        ${R(p)+Ot} 1920w,
      `
          }, null, 8, hn)]),
          _: 1
        }, 8, ["to"])) : Ce("", !0)
      }
    }
  },
  wn = K(yn, [
    ["__scopeId", "data-v-706e628d"]
  ]),
  kt = async (h, e = {}, o = {}) => {
    var l;
    const t = Bt(),
      i = `${JSON.stringify(e)}${h}`,
      a = Qo(`${i}-state`);
    if (J(() => {
        a.value && a.value.id && bo(a.value.id, r => a.value = r, o)
      }), !a.value) {
      const {
        data: r
      } = await qt(i, () => t.get(`cdn/stories/${h}`, e), "$k7eHiIhaiP");
      r && (a.value = (l = r.value) == null ? void 0 : l.data.story)
    }
    return a
  }, xn = ["innerHTML"], kn = {
    class: "count"
  }, An = "CategoriesCategory.cases", Pn = {
    __name: "Categories",
    async setup(h) {
      let e, o;
      const t = le(),
        i = De(),
        {
          isMobile: a
        } = ce(),
        {
          callHook: l,
          hook: r
        } = X(),
        s = ([e, o] = Qe(() => kt("categories", {
          version: "draft",
          resolve_relations: An
        })), e = await e, o(), e),
        v = u([]),
        g = u([]),
        m = u([]),
        p = u([]),
        _ = u([]),
        y = u(0);
      let d = 0,
        f = 0,
        k = 0;
      const P = u(0),
        C = u(0),
        T = u(0),
        S = u(0);
      let b, V, N, z, x;
      const w = u(0),
        O = u(0);
      let E, G = 0,
        j = 0,
        L = 0;
      const F = a ? 1 : 2;
      let ae = 0,
        re = 0,
        fe = 0,
        ie = 0,
        de = 0;
      tt(() => i.path, () => {
        t.popstate && (_e(), $(), At())
      }), Be(() => {
        t.setCategories(Array.from(s.value.content.blocks))
      }), J(() => {
        r("window:raf", Ie), r("window:resize", $), r("categories:index", me), r("categories:show", _o), r("categories:hide", mo), r("categories:enter", wo), r("categories:leave", xo), r("categories:intro", yo), r("categories:enterCase", ko), r("categories:leaveCase", Ao), r("categories:enterSlider", Po), r("categories:leaveSlider", Pt), r("categories:next", ho), r("categories:slide", Ae), window.addEventListener("keydown", he), Te(() => {
          _e(), $()
        })
      });
      const he = ({
          key: A,
          shiftKey: I
        }) => {
          if (!(t.navigation !== "categories" && t.navigation !== "categoriesNext") && ((A === "ArrowUp" || A === "ArrowDown") && (G += A === "ArrowUp" ? -500 : 500), A === " ")) {
            const Z = t.windowSize.width / 1440 * (I ? -500 : 500);
            G += Z
          }
        },
        _e = () => {
          const A = t.categories.findIndex(I => I.title.toLowerCase() === i.params.slug);
          w.value = A === -1 ? 0 : A, Q(), ne(), n.set(y.value, {
            autoAlpha: 1
          })
        },
        $ = () => {
          $e(), ee(), oe()
        },
        B = A => {
          ae = A.clientY || A.touches[0].clientY, f = 1
        },
        W = A => {
          f && (re = A.clientY || A.touches[0].clientY, G -= (re - ae) * 2.5, ae = re)
        },
        se = () => {
          f = 0
        },
        ze = A => {
          if (C.value || T.value || d) return;
          const {
            deltaY: I
          } = A;
          G += I / F
        },
        Ie = () => {
          C.value || T.value || t.loader || t.navigation === "about" || t.navigation === "case" || t.navigation === "caseGallery" || (Le(), G = Io(G, 0, E), j = rt(j, G, .1), L = Lo(j, 0, E), N.progress(L), j >= de ? (ie = Math.min(1, (j - de) / t.windowSize.height), Se(ie), P.value || (Ro(), t.setNavigation("categoriesNext"))) : (ie = 0, P.value && (Rt(), t.setNavigation("categories"))), !(d || k) && (b.progress(ie), x.progress(ie), z.progress(ie), Math.round(j) === E && (Se(1), t.setCategoriesNext(1), Ae(1), Rt())))
        },
        me = A => {
          w.value = A, $(), G = j = t.scrollCategories
        },
        Le = () => {
          Math.abs(G - j) > .5 ? (S.value = 1, q()) : S.value = 0
        },
        Se = A => {
          const I = Math.round(A * 100);
          fe !== I && (fe = I, l("navigationIndicator:count", fe))
        },
        $e = () => {
          E = m.value[w.value].clientHeight, de = E - t.windowSize.height
        },
        Q = () => {
          t.popstate || p.value.forEach(A => {
            A.innerHTML = Oo(A.innerHTML)
          })
        },
        q = () => {
          t.cursor && (l("cursor:hide"), l("navigationShape:default"), l("navigationArrows:default"), l("navigationCategories:active"))
        },
        ne = () => {
          w.value === _.value.length - 1 ? O.value = 0 : O.value = w.value + 1;
          const A = s.value.content.blocks[w.value],
            I = s.value.content.blocks[O.value];
          l("navigationCategories:dataNext", I), l("navigationCategories:dataActive", A), l("navigationCategories:dataSlider", A, 1)
        },
        ee = () => {
          p.value.forEach((A, I) => {
            if (I === w.value) {
              t.popstate && n.set(A.children, {
                yPercent: 0
              });
              return
            }
            const Z = A.children;
            n.set(Z, {
              x: 0,
              yPercent: 100
            });
            const U = A.getBoundingClientRect(),
              te = Z[0].getBoundingClientRect();
            n.set(Z[0], {
              x: t.windowSize.width / 2 - (U.left + te.width / 2)
            }), n.set(v.value[I], {
              yPercent: 100
            })
          }), n.set(g.value, {
            y: 0
          }), n.set(m.value, {
            autoAlpha: 0
          }), n.set(m.value[w.value], {
            clearProps: "all"
          }), [...g.value].forEach(A => {
            n.set(A.children, {
              y: 0
            })
          })
        },
        oe = () => {
          const A = m.value[w.value].children,
            I = Array.from(A),
            Z = p.value[w.value].children,
            U = Z[0].getBoundingClientRect(),
            te = p.value[w.value].getBoundingClientRect();
          N = n.timeline({
            paused: !0
          }).fromTo(I, {
            y: 0
          }, {
            y: -E,
            ease: "none"
          }, 0), z = n.timeline({
            paused: !0
          }).fromTo(Array.from(Z).slice(1), {
            yPercent: 0
          }, {
            yPercent: 100,
            ease: "power3.inOut",
            stagger: .02
          }), x = n.timeline({
            paused: !0
          }).fromTo(Z[0], {
            x: 0
          }, {
            x: t.windowSize.width / 2 - (te.left + U.width / 2),
            ease: "power3.inOut",
            delay: .08
          }), b = n.timeline({
            paused: !0
          }).fromTo(v.value[w.value], {
            yPercent: 0
          }, {
            yPercent: 100,
            ease: "power3.inOut"
          }), d && (b.progress(1), x.progress(1), z.progress(1))
        },
        Ae = A => {
          if (T.value) return;
          t.setTransition(0), T.value = 1;
          const I = p.value[w.value].children;
          n.to(I[0], {
            yPercent: A ? -100 : 100,
            ease: "power3.inOut",
            duration: 1
          }), [...m.value[w.value].children].forEach(U => {
            const te = U.firstChild.getBoundingClientRect();
            te.bottom >= 0 && te.top <= t.windowSize.height && n.to(U.firstChild, {
              y: A ? -te.bottom : t.windowSize.height - te.top,
              ease: "power3.inOut",
              duration: 1
            })
          }), ye(A);
          const Z = p.value[w.value].children;
          n.fromTo(Z[0], {
            yPercent: A ? 100 : -100
          }, {
            yPercent: 0,
            ease: "power3.inOut",
            duration: 1
          }), d || (n.to(Z[0], {
            x: 0,
            ease: "power3.inOut",
            duration: 1,
            delay: 1
          }), n.to(Z, {
            yPercent: 0,
            stagger: -.02,
            ease: "power3.inOut",
            duration: 1,
            delay: 1
          }), n.fromTo(v.value[w.value], {
            yPercent: A ? 100 : -100
          }, {
            yPercent: 0,
            ease: "power3.inOut",
            duration: 1,
            delay: 1
          })), [...m.value[w.value].children].forEach(U => {
            const te = U.firstChild.getBoundingClientRect();
            te.bottom >= 0 && te.top <= t.windowSize.height && n.fromTo(U.firstChild, {
              y: A ? t.windowSize.height - te.top : -te.bottom
            }, {
              y: 0,
              ease: "power3.inOut",
              duration: 1
            })
          }), n.set(m.value[w.value], {
            autoAlpha: 1
          }), n.delayedCall(d ? 1 : 2, () => {
            $e(), oe(), ee(), At()
          }), l("navigationCategories:slide", A)
        },
        ye = A => {
          A ? _.value.length - 1 === w.value ? w.value = 0 : w.value += 1 : w.value === 0 ? w.value = _.value.length - 1 : w.value -= 1, lt(`/${s.value.content.blocks[w.value].title.toLowerCase()}`), ne()
        },
        ho = () => {
          G = E
        },
        At = () => {
          T.value = 0, G = 0, j = 0, L = 0, t.setCategoriesNext(0)
        },
        _o = () => {
          n.set(y.value, {
            autoAlpha: 1
          })
        },
        mo = () => {
          n.set(y.value, {
            autoAlpha: 0
          })
        },
        yo = () => {
          C.value = 1;
          const A = t.windowSize.width / (a ? 375 : 1440),
            I = a ? 100 : 375,
            Z = `polygon(
    ${A*I}px ${t.windowSize.height}px,
    ${t.windowSize.width-A*I}px ${t.windowSize.height}px,
    ${t.windowSize.width-A*I}px ${t.windowSize.height}px,
    ${A*I}px ${t.windowSize.height}px
  )`,
            U = `polygon(
    0px 0px,
    ${t.windowSize.width}px 0px,
    ${t.windowSize.width}px ${t.windowSize.height}px,
    0px ${t.windowSize.height}px
  )`;
          n.fromTo(y.value, {
            clipPath: Z
          }, {
            clipPath: U,
            duration: 1,
            ease: "power3.inOut",
            clearProps: "clipPath"
          });
          const te = p.value[w.value].children;
          n.fromTo(te, {
            yPercent: 100
          }, {
            yPercent: 0,
            duration: 1,
            stagger: .04,
            ease: "power3.inOut"
          });
          const Fe = [...m.value[w.value].children].slice(0, 4);
          n.fromTo(Fe, {
            yPercent: 200
          }, {
            yPercent: 0,
            duration: 1,
            stagger: .08,
            onComplete: () => {
              C.value = 0
            }
          })
        },
        wo = () => {
          n.fromTo(y.value, {
            y: t.windowSize.height / 2
          }, {
            y: 0,
            ease: "power3.inOut",
            duration: t.popstate ? 0 : 1
          })
        },
        xo = () => {
          n.fromTo(y.value, {
            y: 0
          }, {
            y: t.windowSize.height / 2,
            ease: "power3.inOut",
            duration: t.popstate ? 0 : 1
          })
        },
        ko = () => {
          k = 1;
          const A = p.value[w.value].children;
          if (n.fromTo(A, {
              yPercent: 100
            }, {
              yPercent: 0,
              ease: "power3.inOut",
              stagger: .02,
              delay: .2,
              duration: 1,
              onComplete: () => {
                k = 0
              }
            }), [...m.value[w.value].children].forEach(Z => {
              n.fromTo(Z.children, {
                scale: 1.2
              }, {
                scale: 1,
                clearProps: "all",
                ease: "power3.inOut",
                transformOrigin: ot(Z),
                duration: 1
              })
            }), t.loader || t.transition.type === "case-categories-fade") return;
          const I = t.cases.find(Z => Z.name === t.case.name);
          I != null && I.dom && (n.set(I.dom.lastChild, {
            autoAlpha: 0
          }), n.delayedCall(1, () => {
            n.set(I.dom.lastChild, {
              autoAlpha: 1
            })
          }))
        },
        Ao = () => {
          k = 0, [...m.value[w.value].children].forEach(I => {
            n.to(I.children, {
              scale: 1.2,
              clearProps: "all",
              transformOrigin: ot(I),
              duration: 1,
              onComplete: () => {
                k = 0
              }
            })
          });
          const A = t.cases.find(I => I.name === t.case.name);
          n.set(A.dom, {
            autoAlpha: 0
          })
        },
        Po = () => {
          if (!T.value) {
            if (d = 1, V && V.kill(), [...g.value].forEach(A => {
                n.to(A.children, {
                  scale: (Math.random() * (.9 - .7) + .7).toFixed(2),
                  transformOrigin: ot(A)
                })
              }), b.duration(1).play(), a) {
              l("categoriesCover:hide");
              return
            }
            x.duration(1).play(), z.duration(1).play()
          }
        },
        Pt = () => {
          if (T.value) {
            n.delayedCall(.5, Pt);
            return
          }
          if ([...g.value].forEach(A => {
              n.to(A.children, {
                scale: 1
              })
            }), V = n.delayedCall(1, () => {
              d = 0, b.paused(!0), !a && (x.paused(!0), z.paused(!0))
            }), b.duration(1).reverse(), a) {
            l("categoriesCover:show");
            return
          }
          x.duration(1).reverse(), z.duration(1).reverse()
        },
        Ro = () => {
          l("cursor:hide"), l("navigation:disable"), l("navigationShape:focus"), l("navigationCategories:next"), l("navigationIndicator:enter"), l("navigationArrows:indicator"), P.value = 1
        },
        Rt = () => {
          l("navigation:enable"), l("navigationShape:default"), l("navigationCategories:active"), l("navigationIndicator:leave"), l("navigationArrows:default"), P.value = 0
        };
      return (A, I) => {
        const Z = wn;
        return M(), H("div", {
          ref_key: "categoriesRef",
          ref: y,
          class: He(["categories", {
            "is-next": R(P),
            "is-sliding": R(T),
            "is-scrolling": R(S)
          }]),
          onWheelPassive: ze,
          onTouchstart: B,
          onTouchmove: W,
          onTouchend: se,
          onMousedown: B,
          onMousemove: W,
          onMouseleave: se,
          onMouseup: se
        }, [(M(!0), H(xe, null, ke(R(s).content.blocks, (U, te) => (M(), H("div", {
          key: U._uid,
          ref_for: !0,
          ref_key: "categoryRef",
          ref: _,
          class: He(["category", {
            "is-active": R(w) === te
          }])
        }, [c("div", {
          class: He(["heading", `is-${U.title.toLowerCase()}`])
        }, [c("h2", {
          ref_for: !0,
          ref_key: "titleRef",
          ref: p,
          class: "title",
          innerHTML: U.title
        }, null, 8, xn), c("div", kn, [c("div", {
          ref_for: !0,
          ref_key: "nrRef",
          ref: v,
          class: "nr"
        }, " (" + pe(U.cases.length.toString().padStart(2, "0")) + ") ", 513)])], 2), c("ul", {
          ref_for: !0,
          ref_key: "casesRef",
          ref: m,
          class: He(["cases", `is-${U.layout}`])
        }, [(M(!0), H(xe, null, ke(U.cases, Fe => (M(), H("li", {
          key: Fe.uuid,
          ref_for: !0,
          ref_key: "caseRef",
          ref: g,
          class: "case"
        }, [D(Z, {
          story: Fe
        }, null, 8, ["story"])]))), 128))], 2)], 2))), 128))], 34)
      }
    }
  }, Rn = K(Pn, [
    ["__scopeId", "data-v-5f228d6d"]
  ]), Cn = {
    viewBox: "0 0 10 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };

function Tn(h, e) {
  return M(), H("svg", Cn, e[0] || (e[0] = [c("path", {
    d: "M4.99996 9.24267L4.99996 5.00003M4.99996 5.00003L0.757324 5.00003M4.99996 5.00003V0.757385M4.99996 5.00003H9.24261",
    stroke: "currentcolor"
  }, null, -1)]))
}
const po = {
    render: Tn
  },
  Sn = {
    class: "icon"
  },
  $n = {
    __name: "Cursor",
    setup(h) {
      const e = le(),
        {
          isMobile: o
        } = ce(),
        {
          hook: t,
          hooks: i
        } = X(),
        a = u(null),
        l = u(null),
        r = u(null);
      let s = [0, 0],
        v = [0, 0];
      J(() => {
        o || e.isTouch || (t("window:raf", m), t("window:mousemove", g), t("cursor:show", p), t("cursor:hide", _))
      }), et(() => {
        o || e.isTouch || (i.removeHook("window:raf", m), i.removeHook("window:mousemove", g), i.removeHook("cursor:show", p), i.removeHook("cursor:hide", _))
      });
      const g = y => {
          s = y
        },
        m = () => {
          v = [rt(v[0], s[0], .1), rt(v[1], s[1], .1)], a.value.style.transform = `translate3d(${v[0]}px, ${v[1]}px, 0)`
        },
        p = () => {
          e.setCursor(1), n.to(l.value, {
            scale: 1
          })
        },
        _ = () => {
          e.setCursor(0), n.to(l.value, {
            scale: 0
          })
        };
      return (y, d) => (M(), H("div", {
        ref_key: "cursorRef",
        ref: a,
        class: "cursor"
      }, [c("div", {
        ref_key: "innerRef",
        ref: l,
        class: "inner"
      }, [c("div", Sn, [D(R(po), {
        ref_key: "crossSvgRef",
        ref: r,
        class: "cross-svg"
      }, null, 512)]), d[0] || (d[0] = c("div", {
        class: "shape"
      }, null, -1))], 512)], 512))
    }
  },
  bn = K($n, [
    ["__scopeId", "data-v-5a0b773e"]
  ]),
  Mn = {
    class: "text"
  },
  Hn = {
    __name: "NavigationSkip",
    setup(h) {
      const {
        callHook: e,
        hook: o
      } = X(), t = u(null), i = u(null);
      J(() => {
        o("navigationSkip:enter", l), o("navigationSkip:leave", r)
      });
      const a = () => {
          r(), e("loader:skip")
        },
        l = () => {
          n.set(t.value, {
            pointerEvents: "all"
          }), n.fromTo(i.value, {
            yPercent: 100,
            autoAlpha: 1
          }, {
            yPercent: 0,
            duration: 1,
            ease: "power3.inOut"
          })
        },
        r = () => {
          n.set(t.value, {
            pointerEvents: "none"
          }), n.to(i.value, {
            yPercent: -100
          })
        };
      return (s, v) => (M(), H("div", {
        ref_key: "elRef",
        ref: t,
        class: "skip",
        onClick: a
      }, [c("div", Mn, [c("div", {
        ref_key: "titleRef",
        ref: i,
        class: "title"
      }, " Skip ", 512)])], 512))
    }
  },
  Nn = K(Hn, [
    ["__scopeId", "data-v-7629ee89"]
  ]),
  zn = {
    class: "active"
  },
  In = ["src"],
  Ln = {
    class: "text"
  },
  Vn = {
    class: "title"
  },
  On = {
    class: "label"
  },
  En = {
    class: "title"
  },
  Gn = "",
  qn = {
    __name: "NavigationAbout",
    async setup(h) {
      let e, o;
      const t = le(),
        {
          isMobile: i
        } = ce(),
        {
          hook: a
        } = X(),
        l = ([e, o] = Qe(() => kt("about", {
          version: "draft"
        })), e = await e, o(), e),
        r = Mo(() => [l.value.content.ottoImage, l.value.content.storyImage, l.value.content.partnersImage]);
      let s;
      const v = u(null),
        g = u(null),
        m = u(null),
        p = u(null),
        _ = u(null),
        y = u(null),
        d = u(null),
        f = u(null),
        k = u(null);
      J(() => {
        a("window:resize", C), a("navigationAbout:dataActive", z), a("navigationAbout:intro", T), a("navigationAbout:enter", S), a("navigationAbout:leave", b), a("navigationAbout:link", V), a("navigationAbout:active", N), C(), P()
      });
      const P = () => {
          N()
        },
        C = () => {
          s = t.windowSize.width / (i ? 375 : 1440), n.set(g.value, {
            x: s * 31
          })
        },
        T = () => {
          n.to(v.value, {
            autoAlpha: 1,
            duration: 1,
            ease: "power3.inOut"
          }), n.fromTo(g.value, {
            autoAlpha: 0,
            x: s * 115
          }, {
            autoAlpha: 1,
            x: s * 31,
            duration: 1,
            ease: "power3.inOut"
          }), n.fromTo(f.value, {
            yPercent: 300
          }, {
            yPercent: 0,
            duration: 1,
            ease: "power3.inOut"
          })
        },
        S = () => {
          n.to(v.value, {
            autoAlpha: 1,
            duration: t.popstate ? 0 : .5
          })
        },
        b = () => {
          n.to(g.value, {
            x: s * 31
          }), n.to(v.value, {
            autoAlpha: 0,
            duration: t.popstate ? 0 : .5
          })
        },
        V = () => {
          n.fromTo(g.value, {
            x: s * 31
          }, {
            x: 0
          }), n.to(m.value, {
            scale: 1
          }), n.to(_.value, {
            autoAlpha: 1
          }), n.to(y.value, {
            autoAlpha: 0
          }), n.fromTo(f.value, {
            yPercent: 0
          }, {
            yPercent: -100
          }), n.fromTo([d.value, k.value], {
            yPercent: 100
          }, {
            yPercent: 0
          })
        },
        N = () => {
          n.to(g.value, {
            x: s * 31
          }), n.to(m.value, {
            scale: s * 29 / (s * 40)
          }), n.to(_.value, {
            autoAlpha: 0
          }), n.to(y.value, {
            autoAlpha: 1
          }), n.fromTo([d.value, k.value], {
            yPercent: 0
          }, {
            yPercent: -100
          }), n.fromTo(f.value, {
            yPercent: 100
          }, {
            yPercent: 0
          })
        },
        z = x => {
          p.value = x.title;
          const w = f.value.children.length;
          n.to(f.value, {
            yPercent: -(100 / w) * x.image
          }), n.to(m.value.children, {
            autoAlpha: 0,
            ease: "none"
          }), n.to(m.value.children[x.image], {
            autoAlpha: 1,
            ease: "none"
          })
        };
      return (x, w) => (M(), H("div", {
        ref_key: "aboutRef",
        ref: v,
        class: "about"
      }, [c("div", {
        ref_key: "imagesRef",
        ref: g,
        class: "images"
      }, [c("div", zn, [c("div", {
        ref_key: "imageActiveRef",
        ref: m,
        class: "image"
      }, [(M(!0), H(xe, null, ke(R(r), (O, E) => (M(), H("img", {
        key: E,
        src: O.filename + Gn,
        class: "img"
      }, null, 8, In))), 128))], 512)])], 512), c("div", Ln, [c("div", {
        ref_key: "textActiveRef",
        ref: y,
        class: "active"
      }, [c("div", Vn, [c("div", {
        ref_key: "titleActiveRef",
        ref: f
      }, w[0] || (w[0] = [c("div", {
        class: "child",
        innerHTML: "About"
      }, null, -1), c("div", {
        class: "child",
        innerHTML: "Background"
      }, null, -1), c("div", {
        class: "child",
        innerHTML: "Clients"
      }, null, -1)]), 512)])], 512), c("div", {
        ref_key: "textLinkRef",
        ref: _,
        class: "link"
      }, [c("div", On, [c("div", {
        ref_key: "labelLinkRef",
        ref: d,
        innerHTML: "About"
      }, null, 512)]), c("div", En, [c("div", {
        ref_key: "titleLinkRef",
        ref: k,
        innerHTML: "Otto van den Toorn"
      }, null, 512)])], 512)])], 512))
    }
  },
  Bn = K(qn, [
    ["__scopeId", "data-v-eadbea4a"]
  ]),
  Dn = ["innerHTML"],
  jn = {
    __name: "NavigationMarquee",
    props: {
      title: String
    },
    setup(h) {
      const e = De(),
        {
          hook: o
        } = X(),
        t = u(null);
      J(() => {
        o("navigationMarquee:init", i)
      }), tt(() => e.path, () => {
        n.killTweensOf(t.value), t.value.classList.contains("marquee-active") && n.set(t.value, {
          x: 0
        })
      });
      const i = () => {
        const a = t.value.parentElement,
          l = a.clientWidth,
          r = t.value.clientWidth;
        if (n.killTweensOf(t.value), r > l) {
          a.classList.add("is-marquee");
          const s = r - l + r / 6,
            v = s / 1e3 * 100;
          n.fromTo(t.value, {
            x: 0
          }, {
            x: -s,
            delay: 1.3,
            repeat: -1,
            duration: v,
            yoyo: !0,
            ease: "none"
          })
        } else a.classList.remove("is-marquee"), n.set(t.value, {
          x: 0
        })
      };
      return (a, l) => (M(), H("div", {
        ref_key: "marqueeRef",
        ref: t,
        class: "marquee",
        innerHTML: h.title
      }, null, 8, Dn))
    }
  },
  go = K(jn, [
    ["__scopeId", "data-v-fe10d1c1"]
  ]),
  Fn = ["src"],
  Zn = ["src"],
  Wn = {
    class: "title"
  },
  Yn = ["innerHTML"],
  Un = {
    class: "label"
  },
  Xn = {
    class: "title"
  },
  Kn = ["innerHTML"],
  Jn = {
    class: "label"
  },
  Qn = {
    class: "title"
  },
  ea = {
    class: "label"
  },
  ta = {
    class: "title"
  },
  oa = ["innerHTML"],
  Et = "",
  na = {
    __name: "NavigationCategories",
    async setup(h) {
      let e, o;
      const t = le(),
        i = De(),
        {
          hook: a
        } = X(),
        {
          isMobile: l
        } = ce(),
        r = ([e, o] = Qe(() => kt("categories", {
          version: "draft"
        })), e = await e, o(), e);
      let s;
      const v = u(null),
        g = u(null),
        m = u(null),
        p = u(null),
        _ = u(null),
        y = u(null),
        d = u(null),
        f = u([]),
        k = u(null),
        P = u(null),
        C = u(null),
        T = u(null),
        S = u(null),
        b = u(null),
        V = u(null),
        N = u(null),
        z = u(null),
        x = u(null),
        w = u(null),
        O = u(null),
        E = u(null),
        G = u(null),
        j = u(null);
      let L = 0,
        F = 0;
      tt(() => i.path, () => {
        t.popstate && (re(), ae())
      }), Be(() => {
        a("window:resize", re), a("navigationCategories:dataIndex", Ie), a("navigationCategories:dataNext", Le), a("navigationCategories:dataActive", Se), a("navigationCategories:dataSlider", $e), a("navigationCategories:dataProject", Q), a("navigationCategories:show", ie), a("navigationCategories:hide", de), a("navigationCategories:enter", he), a("navigationCategories:leave", _e), a("navigationCategories:intro", fe), a("navigationCategories:slide", ze), a("navigationCategories:next", se), a("navigationCategories:active", $), a("navigationCategories:slider", B), a("navigationCategories:project", W)
      }), J(() => {
        F = r.value.content.blocks.length, re(), ae()
      });
      const ae = () => {
          const q = r.value.content.blocks.findIndex(ne => ne.title.toLowerCase() === i.params.slug);
          L = q === -1 ? 0 : q, $()
        },
        re = () => {
          s = t.windowSize.width / (l ? 375 : 1440), n.set(d.value, {
            x: s * 31
          }), me(0)
        },
        fe = () => {
          n.to(v.value, {
            autoAlpha: 1,
            duration: 1,
            ease: "power3.inOut"
          }), n.fromTo(P.value, {
            autoAlpha: 0,
            x: s * 85
          }, {
            autoAlpha: 1,
            x: 0,
            duration: 1,
            ease: "power3.inOut"
          }), n.fromTo(x.value, {
            yPercent: 300
          }, {
            yPercent: 0,
            duration: 1,
            ease: "power3.inOut"
          })
        },
        ie = () => {
          n.to(v.value, {
            autoAlpha: 1,
            duration: t.popstate ? 0 : .5
          })
        },
        de = () => {
          n.to(v.value, {
            autoAlpha: 0,
            duration: t.popstate ? 0 : .5
          })
        },
        he = () => {
          n.timeline({
            defaults: {
              duration: t.popstate ? 0 : .5
            }
          }).to(v.value, {
            autoAlpha: 1
          }, 0).to(d.value, {
            x: s * 31
          }, 0).set(f.value, {
            x: 0
          }, 0).to([f.value, k.value], {
            scale: s * 29 / (s * 40)
          }, 0).to(k.value, {
            x: s * 20
          }, 0).fromTo(x.value, {
            yPercent: 100
          }, {
            yPercent: 0
          }, 0), me()
        },
        _e = () => {
          n.to(v.value, {
            autoAlpha: 0
          }), l || n.to(d.value, {
            x: 0
          }), n.to(f.value, {
            scale: 1
          }), n.fromTo(x.value, {
            yPercent: 0
          }, {
            yPercent: -100
          })
        },
        $ = () => {
          n.timeline({
            defaults: {
              duration: t.popstate ? 0 : .5
            }
          }).to(d.value, {
            x: s * 31
          }, 0).to(P.value, {
            autoAlpha: 1
          }, 0).to(C.value, {
            autoAlpha: 0
          }, 0).to([f.value, k.value], {
            scale: s * 29 / (s * 40)
          }, 0), me(), n.timeline({
            defaults: {
              duration: t.popstate ? 0 : .5
            }
          }).to([V.value, N.value, S.value], {
            autoAlpha: 0
          }, 0).to(b.value, {
            autoAlpha: 1
          }, 0).fromTo(x.value, {
            yPercent: 100
          }, {
            yPercent: 0
          }, 0).fromTo([E.value, G.value, j.value, z.value, w.value, O.value], {
            yPercent: 0
          }, {
            yPercent: -100
          }, 0)
        },
        B = () => {
          n.to(d.value, {
            x: s * 45
          }), n.to(P.value, {
            autoAlpha: 1
          }), n.to(C.value, {
            autoAlpha: 0
          }), n.to([f.value, k.value], {
            scale: 1
          }), n.to(f.value[L], {
            x: s * 16
          }), n.to(f.value[(L + 1) % F], {
            x: s * 8
          }), n.to(f.value[(L + 2) % F], {
            x: s * 0
          }), n.to(f.value[(L + 3) % F], {
            x: s * -8
          }), n.to([b.value, N.value, S.value], {
            autoAlpha: 0
          }), n.to(V.value, {
            autoAlpha: 1
          }), n.fromTo(x.value, {
            yPercent: 0
          }, {
            yPercent: -100
          }), n.fromTo([G.value, w.value], {
            yPercent: 100
          }, {
            yPercent: 0
          })
        },
        W = () => {
          n.to(d.value, {
            x: 0
          }), n.to(P.value, {
            autoAlpha: 0
          }), n.to(C.value, {
            autoAlpha: 1
          }), n.to([f.value, k.value], {
            x: 0,
            scale: 1
          }), n.to([b.value, V.value, S.value], {
            autoAlpha: 0
          }), n.to(N.value, {
            autoAlpha: 1
          }), n.fromTo(x.value, {
            yPercent: 0
          }, {
            yPercent: -100
          }), n.fromTo([j.value, O.value], {
            yPercent: 100
          }, {
            yPercent: 0
          })
        },
        se = () => {
          n.to(d.value, {
            x: 0
          }), n.to([f.value, k.value], {
            scale: 1
          }), n.to([b.value, V.value, N.value], {
            autoAlpha: 0
          }), n.to(S.value, {
            autoAlpha: 1
          }), n.fromTo([j.value, x.value, O.value], {
            yPercent: 0
          }, {
            yPercent: -100
          }), n.fromTo([E.value, z.value], {
            yPercent: 100
          }, {
            yPercent: 0
          })
        },
        ze = q => {
          n.killTweensOf(f.value), q ? (n.fromTo(f.value[L], {
            x: s * 16,
            autoAlpha: 1,
            zIndex: 4
          }, {
            x: s * 24,
            autoAlpha: 0
          }), n.fromTo(f.value[(L + 1) % F], {
            x: s * 8,
            zIndex: 3
          }, {
            x: s * 16
          }), n.fromTo(f.value[(L + 2) % F], {
            x: s * 0,
            zIndex: 2
          }, {
            x: s * 8
          }), n.fromTo(f.value[(L + 3) % F], {
            x: s * -8,
            autoAlpha: 0,
            zIndex: 1
          }, {
            x: s * 0,
            autoAlpha: 1
          })) : (n.fromTo(f.value[L], {
            x: s * 16,
            zIndex: 3
          }, {
            x: s * 8
          }), n.fromTo(f.value[(L + 1) % F], {
            x: s * 8,
            zIndex: 2
          }, {
            x: s * 0
          }), n.fromTo(f.value[(L + 2) % F], {
            x: s * 0,
            autoAlpha: 1,
            zIndex: 1
          }, {
            x: s * -8,
            autoAlpha: 0
          }), n.fromTo(f.value[(L + 3) % F], {
            x: s * 24,
            autoAlpha: 0,
            zIndex: 4
          }, {
            x: s * 16,
            autoAlpha: 1
          })), L = (L + (q ? 1 : -1) + F) % F
        },
        Ie = q => {
          L = q, me(0)
        },
        me = (q = .5) => {
          n.killTweensOf(f.value), n.timeline({
            defaults: {
              duration: t.popstate ? 0 : q
            }
          }).to(f.value, {
            scale: s * 29 / (s * 40)
          }, 0).to(f.value[L], {
            zIndex: 4,
            x: s * 20,
            autoAlpha: 1
          }, 0).to(f.value[(L + 1) % F], {
            zIndex: 3,
            x: s * 10,
            autoAlpha: 1
          }, 0).to(f.value[(L + 2) % F], {
            zIndex: 2,
            x: s * 0,
            autoAlpha: 1
          }, 0).to(f.value[(L + 3) % F], {
            zIndex: 1,
            x: s * -10,
            autoAlpha: 0
          }, 0)
        },
        Le = q => {
          g.value = q.title
        },
        Se = q => {
          m.value = q.title
        },
        $e = (q, ne) => {
          const ee = w.value.parentElement,
            oe = document.createElement("div");
          oe.innerHTML = q.title, n.set(oe, {
            position: "absolute",
            yPercent: 100,
            inset: 0
          }), ee.appendChild(oe), n.timeline({
            defaults: {
              duration: ne
            }
          }).to(ee.firstChild, {
            yPercent: -100
          }, 0).to(oe, {
            yPercent: 0,
            onComplete: () => {
              p.value = q.title, n.set(ee.firstChild, {
                yPercent: 0
              }), ee.removeChild(oe)
            }
          }, 0)
        },
        Q = q => {
          _.value = q.name, y.value = q.content.cover.filename + Et
        };
      return (q, ne) => {
        const ee = go;
        return R(r) ? (M(), H("div", {
          key: 0,
          ref_key: "categoriesRef",
          ref: v,
          class: "categories"
        }, [c("div", {
          ref_key: "imagesRef",
          ref: d,
          class: "images"
        }, [c("div", {
          ref_key: "imagesSliderRef",
          ref: P,
          class: "slider"
        }, [(M(!0), H(xe, null, ke(R(r).content.blocks, (oe, Ae) => (M(), H("div", {
          ref_for: !0,
          ref_key: "imageSliderRef",
          ref: f,
          key: Ae,
          class: "image"
        }, [c("img", {
          src: oe.thumbnail.filename + Et,
          class: "img"
        }, null, 8, Fn)]))), 128))], 512), c("div", {
          ref_key: "imagesProjectRef",
          ref: C,
          class: "project"
        }, [c("div", {
          ref_key: "imageProjectRef",
          ref: k,
          class: "image"
        }, [R(y) ? (M(), H("img", {
          key: 0,
          class: "img",
          src: R(y)
        }, null, 8, Zn)) : Ce("", !0)], 512)], 512)], 512), c("div", {
          ref_key: "textRef",
          ref: T,
          class: "text"
        }, [c("div", {
          ref_key: "textActiveRef",
          ref: b,
          class: "active"
        }, [c("div", Wn, [c("div", {
          ref_key: "titleActiveRef",
          ref: x,
          innerHTML: R(m)
        }, null, 8, Yn)])], 512), c("div", {
          ref_key: "textSliderRef",
          ref: V,
          class: "slider"
        }, [c("div", Un, [c("div", {
          ref_key: "labelSliderRef",
          ref: G,
          innerHTML: "Category"
        }, null, 512)]), c("div", Xn, [c("div", {
          ref_key: "titleSliderRef",
          ref: w,
          innerHTML: R(p)
        }, null, 8, Kn)])], 512), c("div", {
          ref_key: "textProjectRef",
          ref: N,
          class: "project"
        }, [c("div", Jn, [c("div", {
          ref_key: "labelProjectRef",
          ref: j,
          innerHTML: "View Project"
        }, null, 512)]), c("div", Qn, [c("div", {
          ref_key: "titleProjectRef",
          ref: O
        }, [D(ee, {
          title: R(_),
          class: "marquee-project"
        }, null, 8, ["title"])], 512)])], 512), c("div", {
          ref_key: "textNextRef",
          ref: S,
          class: "next"
        }, [c("div", ea, [c("div", {
          ref_key: "labelNextRef",
          ref: E,
          innerHTML: "Next Category"
        }, null, 512)]), c("div", ta, [c("div", {
          ref_key: "titleNextRef",
          ref: z,
          innerHTML: R(g)
        }, null, 8, oa)])], 512)], 512)], 512)) : Ce("", !0)
      }
    }
  },
  aa = K(na, [
    ["__scopeId", "data-v-9b20b112"]
  ]),
  ia = ["src"],
  sa = ["src"],
  la = ["src"],
  ra = ["src"],
  ca = {
    class: "text"
  },
  ua = {
    class: "title"
  },
  va = {
    class: "label"
  },
  fa = {
    class: "title"
  },
  da = {
    class: "label"
  },
  pa = {
    class: "title"
  },
  ga = {
    class: "label"
  },
  ha = {
    class: "title"
  },
  _a = {
    class: "label"
  },
  ma = {
    class: "title"
  },
  st = "",
  ya = {
    __name: "NavigationCase",
    setup(h) {
      const e = le(),
        {
          isMobile: o
        } = ce(),
        {
          callHook: t,
          hook: i
        } = X();
      let a;
      const l = u(null),
        r = u(null),
        s = u(null),
        v = u(null),
        g = u(null),
        m = u(null),
        p = u(null),
        _ = u(null),
        y = u(null),
        d = u(null),
        f = u(null),
        k = u(null),
        P = u(null),
        C = u(null),
        T = u(null),
        S = u(null),
        b = u(null),
        V = u(null),
        N = u(null),
        z = u(null),
        x = u(null),
        w = u(null),
        O = u(null),
        E = u(null),
        G = u(null),
        j = u(null),
        L = u(null),
        F = u(null),
        ae = u(null),
        re = u(null);
      J(() => {
        Te(() => {
          ie(), fe()
        }), i("window:resize", ie), i("navigationCase:dataActive", Le), i("navigationCase:dataGallery", Se), i("navigationCase:dataNext", $e), i("navigationCase:show", de), i("navigationCase:hide", he), i("navigationCase:intro", _e), i("navigationCase:enter", $), i("navigationCase:leave", B), i("navigationCase:active", W), i("navigationCase:slider", se), i("navigationCase:gallery", ze), i("navigationCase:player", Ie), i("navigationCase:next", me)
      });
      const fe = () => {
          W()
        },
        ie = () => {
          a = e.windowSize.width / (o ? 375 : 1440), n.set(r.value, {
            x: a * 31
          })
        },
        de = (Q = .5) => {
          n.to(l.value, {
            autoAlpha: 1,
            duration: e.popstate ? 0 : Q
          })
        },
        he = (Q = .5) => {
          n.to(l.value, {
            autoAlpha: 0,
            duration: e.popstate ? 0 : Q
          })
        },
        _e = () => {
          n.timeline({
            defaults: {
              duration: 1,
              ease: "power3.inOut"
            }
          }).to(l.value, {
            autoAlpha: 1
          }, 0).fromTo(r.value, {
            autoAlpha: 0,
            x: a * 115
          }, {
            autoAlpha: 1,
            x: a * 31
          }, 0).fromTo(w.value, {
            yPercent: 300
          }, {
            yPercent: 0
          }, 0)
        },
        $ = () => {
          n.timeline().to(l.value, {
            autoAlpha: 1
          }, 0).fromTo(r.value, {
            x: 0
          }, {
            x: a * 31
          }, 0).to([p.value, _.value, y.value, d.value], {
            scale: a * 29 / (a * 40)
          }, 0).fromTo(w.value, {
            yPercent: 100
          }, {
            yPercent: 0
          }, 0)
        },
        B = () => {
          n.timeline().to(l.value, {
            autoAlpha: 0
          }, 0).to([p.value, _.value, y.value, d.value], {
            scale: 1
          }, 0).fromTo(w.value, {
            yPercent: 0
          }, {
            yPercent: -100
          }, 0)
        },
        W = () => {
          n.timeline({
            defaults: {
              duration: e.popstate ? 0 : .5
            }
          }).to(r.value, {
            x: a * 31
          }, 0).to([v.value, g.value, m.value], {
            autoAlpha: 0
          }, 0).to(s.value, {
            autoAlpha: 1
          }, 0).to([p.value, _.value, y.value, d.value], {
            scale: a * 29 / (a * 40)
          }, 0).to([V.value, N.value, z.value, x.value], {
            autoAlpha: 0
          }, 0).to(b.value, {
            autoAlpha: 1
          }, 0).fromTo(w.value, {
            yPercent: 100
          }, {
            yPercent: 0
          }, 0).fromTo([L.value, F.value, ae.value, re.value, O.value, E.value, G.value, j.value], {
            yPercent: 0
          }, {
            yPercent: -100
          }, 0)
        },
        se = () => {
          n.timeline().to(r.value, {
            x: a * 45
          }, 0).to(s.value, {
            autoAlpha: 1
          }, 0).to([p.value, _.value, y.value, d.value], {
            scale: 1
          }, 0).to([b.value, N.value, z.value, x.value], {
            autoAlpha: 0
          }, 0).to(V.value, {
            autoAlpha: 1
          }, 0).fromTo(w.value, {
            yPercent: 0
          }, {
            yPercent: -100
          }, 0).fromTo([L.value, O.value], {
            yPercent: 100
          }, {
            yPercent: 0
          }, 0)
        },
        ze = () => {
          n.timeline().to(r.value, {
            x: 0
          }, 0).to(s.value, {
            autoAlpha: 0
          }, 0).to(v.value, {
            autoAlpha: 1
          }, 0).to([p.value, _.value, y.value, d.value], {
            scale: 1
          }, 0).to([b.value, V.value, z.value, x.value], {
            autoAlpha: 0
          }, 0).to(N.value, {
            autoAlpha: 1
          }, 0).fromTo(w.value, {
            yPercent: 0
          }, {
            yPercent: -100
          }, 0).fromTo([F.value, E.value], {
            yPercent: 100
          }, {
            yPercent: 0
          }, 0)
        },
        Ie = () => {
          n.timeline().to(r.value, {
            x: 0
          }, 0).to(s.value, {
            autoAlpha: 0
          }, 0).to(g.value, {
            autoAlpha: 1
          }, 0).to([p.value, _.value, y.value, d.value], {
            scale: 1
          }, 0).to([b.value, V.value, N.value, x.value], {
            autoAlpha: 0
          }, 0).to(z.value, {
            autoAlpha: 1
          }, 0).fromTo(w.value, {
            yPercent: 0
          }, {
            yPercent: -100
          }, 0).fromTo([ae.value, G.value], {
            yPercent: 100
          }, {
            yPercent: 0
          }, 0)
        },
        me = () => {
          n.timeline().to(r.value, {
            x: 0
          }, 0).to([s.value, v.value, g.value], {
            autoAlpha: 0
          }, 0).to(m.value, {
            autoAlpha: 1
          }, 0).to([p.value, _.value, y.value, d.value], {
            scale: 1
          }, 0).to([b.value, V.value, N.value, z.value], {
            autoAlpha: 0
          }, 0).to(x.value, {
            autoAlpha: 1
          }, 0).fromTo([L.value, F.value, ae.value, w.value, O.value, E.value, G.value], {
            yPercent: 0
          }, {
            yPercent: -100
          }, 0).fromTo([re.value, j.value], {
            yPercent: 100
          }, {
            yPercent: 0
          }, 0)
        },
        Le = (Q, q) => {
          const ne = O.value.parentElement,
            ee = document.createElement("div"),
            oe = document.createElement("div");
          n.set(ee, {
            position: "absolute",
            yPercent: 100,
            inset: 0
          }), n.set(oe, {
            whiteSpace: "nowrap",
            display: "inline-flex"
          }), oe.classList.add("marquee"), oe.innerHTML = Q.name, ee.appendChild(oe), ne.appendChild(ee), oe.clientWidth > ee.clientWidth && ee.classList.add("is-marquee"), n.timeline({
            defaults: {
              duration: q
            }
          }).to(ne.firstChild, {
            yPercent: -100
          }, 0).to(ee, {
            yPercent: 0,
            onComplete: () => {
              T.value = Q.name, n.set(ne.firstChild, {
                yPercent: 0
              }), ee.remove(), t("navigationMarquee:init")
            }
          }, 0);
          const Ae = Q.content.cover.filename + st,
            ye = new Image;
          ye.src = Ae, n.set(ye, {
            position: "absolute",
            top: 0,
            zIndex: 1,
            autoAlpha: 0
          }), ye.onload = () => {
            n.to(ye, {
              autoAlpha: 1,
              duration: q,
              onComplete: () => {
                f.value = Ae, ye.remove()
              }
            })
          }, p.value.appendChild(ye)
        },
        Se = Q => {
          k.value = Q.filename + st
        },
        $e = Q => {
          S.value = Q.name, C.value = Q.content.cover.filename + st
        };
      return (Q, q) => {
        const ne = go;
        return M(), H("div", {
          ref_key: "caseRef",
          ref: l,
          class: "case"
        }, [c("div", {
          ref_key: "imagesRef",
          ref: r,
          class: "images"
        }, [c("div", {
          ref_key: "imagesActiveRef",
          ref: s,
          class: "active"
        }, [c("div", {
          ref_key: "imageActiveRef",
          ref: p,
          class: "image"
        }, [c("img", {
          class: "img",
          src: R(f)
        }, null, 8, ia)], 512)], 512), c("div", {
          ref_key: "imagesGalleryRef",
          ref: v,
          class: "gallery"
        }, [c("div", {
          ref_key: "imageGalleryRef",
          ref: _,
          class: "image"
        }, [c("img", {
          class: "img",
          src: R(k) || R(f)
        }, null, 8, sa)], 512)], 512), c("div", {
          ref_key: "imagesPlayerRef",
          ref: g,
          class: "player"
        }, [c("div", {
          ref_key: "imagePlayerRef",
          ref: y,
          class: "image"
        }, [c("img", {
          class: "img",
          src: R(P) || R(f)
        }, null, 8, la)], 512)], 512), c("div", {
          ref_key: "imagesNextRef",
          ref: m,
          class: "next"
        }, [c("div", {
          ref_key: "imageNextRef",
          ref: d,
          class: "image"
        }, [c("img", {
          class: "img",
          src: R(C)
        }, null, 8, ra)], 512)], 512)], 512), c("div", ca, [c("div", {
          ref_key: "textActiveRef",
          ref: b,
          class: "active"
        }, [c("div", ua, [c("div", {
          ref_key: "titleActiveRef",
          ref: w
        }, [D(ne, {
          title: R(T),
          class: "marquee-active"
        }, null, 8, ["title"])], 512)])], 512), c("div", {
          ref_key: "textSliderRef",
          ref: V,
          class: "slider"
        }, [c("div", va, [c("div", {
          ref_key: "labelSliderRef",
          ref: L
        }, " Project ", 512)]), c("div", fa, [c("div", {
          ref_key: "titleSliderRef",
          ref: O
        }, [D(ne, {
          title: R(T),
          class: "marquee-slider"
        }, null, 8, ["title"])], 512)])], 512), c("div", {
          ref_key: "textGalleryRef",
          ref: N,
          class: "gallery"
        }, [c("div", da, [c("div", {
          ref_key: "labelGalleryRef",
          ref: F
        }, " View ", 512)]), c("div", pa, [c("div", {
          ref_key: "titleGalleryRef",
          ref: E
        }, " Gallery ", 512)])], 512), c("div", {
          ref_key: "textPlayerRef",
          ref: z,
          class: "player"
        }, [c("div", ga, [c("div", {
          ref_key: "labelPlayerRef",
          ref: ae
        }, " Play ", 512)]), c("div", ha, [c("div", {
          ref_key: "titlePlayerRef",
          ref: G
        }, " Video ", 512)])], 512), c("div", {
          ref_key: "textNextRef",
          ref: x,
          class: "next"
        }, [c("div", _a, [c("div", {
          ref_key: "labelNextRef",
          ref: re
        }, " Next Project ", 512)]), c("div", ma, [c("div", {
          ref_key: "titleNextRef",
          ref: j
        }, [D(ne, {
          title: R(S),
          class: "marquee-next"
        }, null, 8, ["title"])], 512)])], 512)])], 512)
      }
    }
  },
  wa = K(ya, [
    ["__scopeId", "data-v-90d8ad1b"]
  ]),
  xa = {
    __name: "NavigationIndicator",
    setup(h) {
      const e = le(),
        {
          isMobile: o
        } = ce(),
        {
          hook: t
        } = X();
      let i;
      const a = u(0),
        l = u(null);
      J(() => {
        r(), t("navigationIndicator:count", s), t("navigationIndicator:enter", v), t("navigationIndicator:leave", g), t("navigationIndicator:show", m), t("navigationIndicator:hide", p), Te(() => {
          t("window:resize", r)
        })
      }), et(() => {
        hooks.removeHook("window:resize", r)
      });
      const r = () => {
          i = e.windowSize.width / (o ? 375 : 1440)
        },
        s = _ => {
          a.value = _
        },
        v = () => {
          n.to(l.value, {
            x: 0,
            scale: 1,
            autoAlpha: 1
          })
        },
        g = () => {
          n.to(l.value, {
            x: -i * 26,
            autoAlpha: 0,
            scale: i * 29 / (i * 40)
          })
        },
        m = () => {
          n.fromTo(l.value, {
            x: 0,
            scale: 1
          }, {
            autoAlpha: 1
          })
        },
        p = () => {
          n.to(l.value, {
            autoAlpha: 0
          })
        };
      return (_, y) => (M(), H("div", {
        ref_key: "indicatorRef",
        ref: l,
        class: "indicator"
      }, pe(R(a)), 513))
    }
  },
  ka = K(xa, [
    ["__scopeId", "data-v-fc7cae64"]
  ]),
  Aa = {
    viewBox: "0 0 105 3",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };

function Pa(h, e) {
  return M(), H("svg", Aa, e[0] || (e[0] = [Ho('<circle cx="1.5" cy="1.5" r="1.5" fill="white"></circle><path d="M6 1H7V2H6V1Z" fill="white"></path><path d="M9 1H10V2H9V1Z" fill="white"></path><path d="M12 1H13V2H12V1Z" fill="white"></path><path d="M15 1H16V2H15V1Z" fill="white"></path><path d="M18 1H19V2H18V1Z" fill="white"></path><path d="M21 1H22V2H21V1Z" fill="white"></path><path d="M24 1H25V2H24V1Z" fill="white"></path><path d="M27 1H28V2H27V1Z" fill="white"></path><path d="M30 1H31V2H30V1Z" fill="white"></path><circle cx="35.5" cy="1.5" r="1.5" fill="white"></circle><path d="M40 1H41V2H40V1Z" fill="white"></path><path d="M43 1H44V2H43V1Z" fill="white"></path><path d="M46 1H47V2H46V1Z" fill="white"></path><path d="M49 1H50V2H49V1Z" fill="white"></path><path d="M52 1H53V2H52V1Z" fill="white"></path><path d="M55 1H56V2H55V1Z" fill="white"></path><path d="M58 1H59V2H58V1Z" fill="white"></path><path d="M61 1H62V2H61V1Z" fill="white"></path><path d="M64 1H65V2H64V1Z" fill="white"></path><circle cx="69.5" cy="1.5" r="1.5" fill="white"></circle><path d="M74 1H75V2H74V1Z" fill="white"></path><path d="M77 1H78V2H77V1Z" fill="white"></path><path d="M80 1H81V2H80V1Z" fill="white"></path><path d="M83 1H84V2H83V1Z" fill="white"></path><path d="M86 1H87V2H86V1Z" fill="white"></path><path d="M89 1H90V2H89V1Z" fill="white"></path><path d="M92 1H93V2H92V1Z" fill="white"></path><path d="M95 1H96V2H95V1Z" fill="white"></path><path d="M98 1H99V2H98V1Z" fill="white"></path><circle cx="103.5" cy="1.5" r="1.5" fill="white"></circle>', 31)]))
}
const Ra = {
    render: Pa
  },
  Ca = {
    viewBox: "0 0 22 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };

function Ta(h, e) {
  return M(), H("svg", Ca, e[0] || (e[0] = [c("circle", {
    cx: "11",
    cy: "11",
    r: "10.5",
    fill: "white",
    stroke: "white"
  }, null, -1), c("path", {
    opacity: "0.6",
    d: "M11 8V14.5",
    stroke: "#201512"
  }, null, -1), c("path", {
    opacity: "0.6",
    d: "M8.5 8V14.5",
    stroke: "#201512"
  }, null, -1), c("path", {
    opacity: "0.6",
    d: "M13.5 8V14.5",
    stroke: "#201512"
  }, null, -1)]))
}
const Sa = {
    render: Ta
  },
  $a = ["src", "alt"],
  ba = {
    class: "indicator"
  },
  Ma = "",
  Ha = {
    __name: "NavigationGallery",
    setup(h) {
      const e = le(),
        {
          callHook: o,
          hook: t
        } = X(),
        i = u(null),
        a = u(null),
        l = u(null),
        r = u(null),
        s = u(null),
        v = u(null),
        g = u(null);
      let m, p;
      J(() => {
        y(), t("navigationGallery:enter", f), t("navigationGallery:leave", k), t("navigationGallery:init", _), t("navigationGallery:reset", d), t("navigationGallery:activeImage", T), t("window:resize", y)
      });
      const _ = x => {
          a.value = x
        },
        y = () => {
          P(), C()
        },
        d = (x = 0) => {
          const w = p.maxX / 3 * 1;
          S(w / p.maxX, w, x)
        },
        f = () => {
          n.to(l.value, {
            autoAlpha: 1
          }), n.fromTo(g.value.$el, {
            scale: 0,
            pointerEvents: "all"
          }, {
            scale: 1,
            delay: .5,
            duration: 1
          }), n.fromTo(s.value.$el.querySelectorAll("circle"), {
            scale: 0
          }, {
            scale: 1,
            duration: 1,
            stagger: .2
          })
        },
        k = () => {
          n.to(l.value, {
            autoAlpha: 0
          }), n.to(r.value.children, {
            autoAlpha: 0
          }), n.to(g.value.$el, {
            scale: 0,
            pointerEvents: ""
          })
        },
        P = () => {
          const x = s.value.$el,
            w = x.querySelectorAll("path"),
            O = x.querySelectorAll("circle");
          m = n.timeline({
            paused: !0,
            defaults: {
              opacity: 1,
              duration: 0,
              ease: "none",
              immediateRender: !1
            }
          }).fromTo(w, {
            opacity: .3
          }, {
            stagger: .1
          }, 0).fromTo(O, {
            opacity: .6
          }, {
            stagger: .9
          }, 0)
        },
        C = () => {
          p = Dt.create(g.value.$el, {
            type: "x",
            bounds: v.value,
            zIndexBoost: !1,
            onPress: b,
            onRelease: V,
            onDrag: N,
            onDragEnd: z
          })[0], d()
        },
        T = x => {
          n.killTweensOf(r.value.children), n.to(r.value.children, {
            autoAlpha: 0
          }), n.to(r.value.children[x], {
            autoAlpha: 1
          })
        },
        S = (x, w, O = 0) => {
          const E = Math.abs(x * 1.5 + .5).toFixed(1);
          i.value = E, m.progress(x), n.to(g.value.$el, {
            x: w,
            duration: O
          }), !(e.loading || e.navigation === "case") && o("caseGallery:zoom", E)
        },
        b = () => {
          n.to(g.value.$el.firstChild, {
            scale: 1.2,
            transformOrigin: "center"
          })
        },
        V = () => {
          n.to(g.value.$el.firstChild, {
            scale: 1
          })
        },
        N = () => {
          const x = p.x / p.maxX;
          S(x)
        },
        z = () => {
          const {
            maxX: x,
            x: w
          } = p, O = [0, x / 3, 2 * x / 3, x].reduce((E, G) => Math.abs(G - w) < Math.abs(E - w) ? G : E);
          S(O / x, O, .5)
        };
      return (x, w) => (M(), H("div", {
        ref_key: "galleryRef",
        ref: l,
        class: "gallery"
      }, [c("div", {
        ref_key: "imagesRef",
        ref: r,
        class: "images"
      }, [(M(!0), H(xe, null, ke(R(a), (O, E) => (M(), H("img", {
        key: E,
        src: O.filename + Ma,
        alt: O.alt,
        class: "img"
      }, null, 8, $a))), 128))], 512), c("div", {
        ref_key: "draggerRef",
        ref: v,
        class: "dragger"
      }, [D(R(Sa), {
        ref_key: "grabberRef",
        ref: g,
        class: "grabber-svg"
      }, null, 512), D(R(Ra), {
        ref_key: "zoomRef",
        ref: s,
        class: "zoom-svg"
      }, null, 512)], 512), c("div", ba, pe(R(i)), 1)], 512))
    }
  },
  Na = K(Ha, [
    ["__scopeId", "data-v-8fa8da99"]
  ]),
  za = {
    class: "timeline"
  },
  Ia = ["max"],
  La = ["max"],
  Va = {
    class: "time"
  },
  Oa = {
    __name: "NavigationPlayer",
    setup(h) {
      const {
        callHook: e,
        hook: o
      } = X(), t = u("00:00"), i = u(100), a = u(null), l = u(null), r = u(null);
      J(() => {
        o("navigationPlayer:max", m), o("navigationPlayer:time", p), o("navigationPlayer:progress", _), o("navigationPlayer:enter", s), o("navigationPlayer:leave", v)
      });
      const s = () => {
          n.to(l.value, {
            autoAlpha: 1
          })
        },
        v = () => {
          n.to(l.value, {
            autoAlpha: 0
          })
        },
        g = () => {
          e("casePlayer:range", a.value.value)
        },
        m = y => {
          i.value = y
        },
        p = y => {
          t.value = y
        },
        _ = y => {
          a.value.value = y, r.value.value = y
        };
      return (y, d) => (M(), H("div", {
        ref_key: "playerRef",
        ref: l,
        class: "player"
      }, [c("div", za, [c("input", {
        ref_key: "rangeRef",
        ref: a,
        min: "0",
        max: R(i),
        step: "0.5",
        type: "range",
        class: "range",
        onInput: g
      }, null, 40, Ia), c("progress", {
        ref_key: "progressRef",
        ref: r,
        class: "progress",
        max: R(i)
      }, null, 8, La)]), c("div", Va, pe(R(t)), 1)], 512))
    }
  },
  Ea = K(Oa, [
    ["__scopeId", "data-v-ee842edf"]
  ]),
  Ga = {
    viewBox: "0 0 11 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };

function qa(h, e) {
  return M(), H("svg", Ga, e[0] || (e[0] = [c("path", {
    d: "M7 7L10 4L7 1",
    stroke: "white"
  }, null, -1), c("path", {
    d: "M10 4L0 4",
    stroke: "white",
    opacity: "0"
  }, null, -1)]))
}
const Gt = {
    render: qa
  },
  Ba = {
    __name: "NavigationArrows",
    setup(h) {
      const e = le(),
        {
          isMobile: o
        } = ce(),
        {
          callHook: t,
          hook: i
        } = X();
      let a;
      const l = u(null),
        r = u(null),
        s = u(null),
        v = u(null),
        g = u(null),
        m = u(null),
        p = u(null);
      J(() => {
        i("window:resize", _), i("navigationArrows:show", V), i("navigationArrows:hide", b), i("navigationArrows:intro", S), i("navigationArrows:focus", k), i("navigationArrows:slider", P), i("navigationArrows:default", C), i("navigationArrows:indicator", T), _()
      });
      const _ = () => {
          a = e.windowSize.width / (o ? 375 : 1440), n.set(l.value, {
            x: a * 26
          }), n.set(r.value, {
            x: -a * 26
          }), n.set(g.value.$el, {
            y: -a * 2
          })
        },
        y = (N, z) => {
          if (e.loading || !e.navigationActive) return;
          const x = s.value.children[N].lastChild;
          n.killTweensOf(x), n.to(x, {
            scale: 1,
            ease: "power3.in",
            duration: .1
          }), n.to(x, {
            scale: 1.2,
            ease: "power3.out",
            delay: .1,
            duration: .4
          }), e.navigation === "categories" && t("categories:slide", z), e.navigation === "case" && t("casePage:load", z)
        },
        d = N => {
          n.to(N.target.lastChild, {
            scale: 1.2
          })
        },
        f = N => {
          n.to(N.target.lastChild, {
            scale: 1
          })
        },
        k = () => {
          n.to(r.value, {
            scale: a * 32 / (a * 29)
          }), n.to(r.value, {
            x: 0,
            autoAlpha: 1
          }), n.to(g.value.$el, {
            y: 0,
            rotate: 0
          }), n.to(g.value.$el.lastChild, {
            autoAlpha: 1
          }), n.to(p.value, {
            backgroundColor: "rgba(255, 255, 255, 0)"
          })
        },
        P = () => {
          n.to([l.value, r.value], {
            x: 0,
            scale: 1,
            autoAlpha: 1
          }), n.to(g.value.$el, {
            x: -a * 3,
            y: 0,
            rotate: 0
          }), n.to(g.value.$el.lastChild, {
            autoAlpha: 0
          }), n.to([m.value, p.value], {
            backgroundColor: "rgba(255, 255, 255, 0.1)"
          })
        },
        C = () => {
          e.loader || n.timeline({
            defaults: {
              duration: e.popstate ? 0 : .5
            }
          }).to([l.value, r.value], {
            scale: a * 29 / (a * 32)
          }, 0).to(l.value, {
            autoAlpha: 0,
            x: a * 26
          }, 0).to(r.value, {
            autoAlpha: 1,
            x: -a * 26
          }, 0).to(g.value.$el, {
            x: 0,
            y: -a * 2,
            rotate: 90
          }, 0).to(g.value.$el.lastChild, {
            autoAlpha: 0
          }, 0).to([m.value, p.value], {
            backgroundColor: "rgba(255, 255, 255, 0.1)"
          }, 0)
        },
        T = () => {
          n.to(r.value, {
            x: 0,
            autoAlpha: 0,
            scale: a * 40 / (a * 32)
          })
        },
        S = () => {
          e.navigation !== "about" && n.fromTo(r.value, {
            autoAlpha: 0,
            x: -a * 110
          }, {
            autoAlpha: 1,
            x: -a * 26,
            duration: 1,
            ease: "power3.inOut"
          })
        },
        b = () => {
          n.to(s.value, {
            autoAlpha: 0,
            duration: e.popstate ? 0 : .5
          })
        },
        V = () => {
          n.to(s.value, {
            autoAlpha: 1,
            duration: e.popstate ? 0 : .5
          })
        };
      return (N, z) => (M(), H("div", {
        ref_key: "arrowsRef",
        ref: s,
        class: "arrows"
      }, [c("div", {
        ref_key: "prevRef",
        ref: l,
        class: "arrow",
        onClick: z[0] || (z[0] = x => y(0, 0)),
        onMouseenter: d,
        onMouseleave: f
      }, [D(R(Gt), {
        ref_key: "prevArrowRef",
        ref: v,
        class: "arrow-svg"
      }, null, 512), c("div", {
        ref_key: "prevCircleRef",
        ref: m,
        class: "circle"
      }, null, 512)], 544), c("div", {
        ref_key: "nextRef",
        ref: r,
        class: "arrow",
        onClick: z[1] || (z[1] = x => y(1, 1)),
        onMouseenter: d,
        onMouseleave: f
      }, [D(R(Gt), {
        ref_key: "nextArrowRef",
        ref: g,
        class: "arrow-svg"
      }, null, 512), c("div", {
        ref_key: "nextCircleRef",
        ref: p,
        class: "circle"
      }, null, 512)], 544)], 512))
    }
  },
  Da = K(Ba, [
    ["__scopeId", "data-v-d29eb404"]
  ]),
  ja = {
    __name: "NavigationShape",
    setup(h) {
      const e = le(),
        {
          hook: o
        } = X(),
        {
          isMobile: t
        } = ce();
      let i;
      const a = u(null);
      J(() => {
        l(), o("window:resize", l), o("navigationShape:enter", r), o("navigationShape:focus", v), o("navigationShape:default", g)
      });
      const l = () => {
          i = e.windowSize.width / (t ? 375 : 1440), g(0)
        },
        r = () => {
          n.fromTo(a.value, {
            scale: 0,
            autoAlpha: 0,
            width: i * 53,
            height: i * 53
          }, {
            scale: 1,
            duration: 1,
            autoAlpha: 1,
            width: i * 80,
            autoRound: !1
          })
        },
        s = (m, p, _) => {
          n.to(a.value, {
            width: m,
            height: p,
            borderRadius: p,
            autoRound: !1,
            duration: _
          })
        },
        v = (m = .5) => {
          const p = i * 289,
            _ = i * 68;
          s(p, _, m)
        },
        g = (m = .5) => {
          const p = i * 222,
            _ = i * 53;
          s(p, _, m)
        };
      return (m, p) => (M(), H("div", {
        ref_key: "shapeRef",
        ref: a,
        class: "shape"
      }, null, 512))
    }
  },
  Fa = K(ja, [
    ["__scopeId", "data-v-b9984f80"]
  ]),
  Za = {
    __name: "NavigationClose",
    setup(h) {
      const e = le(),
        {
          isMobile: o
        } = ce(),
        {
          callHook: t,
          hook: i
        } = X();
      let a;
      const l = u(null),
        r = u(null),
        s = u(null);
      J(() => {
        i("navigationClose:show", _), i("navigationClose:hide", y), Te(() => {
          v(), g()
        })
      });
      const v = () => {
          a = e.windowSize.width / (o ? 375 : 1440)
        },
        g = () => {
          e.navigation === "categories" && y(0)
        },
        m = () => {
          if (!e.loading) {
            if (e.navigation === "about") {
              const d = e.pageFrom.path === "/about" ? "/" : e.pageFrom.path;
              lt(d)
            }
            if (e.navigation === "case") {
              const f = e.cases.find(k => k.name === e.case.name).dom.getBoundingClientRect();
              e.setTransition({
                type: "case-categories",
                bounds: f
              }), lt(`/${e.category||""}`), t("navigationCase:leave")
            }
            e.navigation === "caseGallery" && t("caseGallery:leave"), e.navigation === "casePlayer" && t("casePlayer:leave"), n.timeline().to(r.value, {
              scale: .8,
              duration: .2,
              ease: "power3.in"
            }).to(r.value, {
              scale: 1,
              duration: .3,
              ease: "power3.out"
            })
          }
        },
        p = () => {
          e.loading || o || n.fromTo(s.value.$el, {
            rotate: -45
          }, {
            rotate: 135,
            duration: 1,
            ease: "power3.out"
          })
        },
        _ = (d = .5, f = 0) => {
          n.set(l.value, {
            autoAlpha: 1,
            transformOrigin: f ? "right center" : "center"
          }), n.to(l.value, {
            x: 0,
            scale: 1,
            duration: e.popstate ? 0 : d
          })
        },
        y = (d = .5, f = 0) => {
          n.set(l.value, {
            transformOrigin: f ? "right center" : "center"
          }), n.to(l.value, {
            x: a * 10,
            scale: 0,
            duration: e.popstate ? 0 : d
          })
        };
      return (d, f) => (M(), H("div", {
        ref_key: "closeRef",
        ref: l,
        class: "close",
        onClick: m,
        onMouseenter: p
      }, [D(R(po), {
        ref_key: "crossSvgRef",
        ref: s,
        class: "cross-svg"
      }, null, 512), c("div", {
        ref_key: "circleRef",
        ref: r,
        class: "circle"
      }, null, 512)], 544))
    }
  },
  Wa = K(Za, [
    ["__scopeId", "data-v-c37bd8c1"]
  ]),
  Ya = {
    class: "pages"
  },
  Ua = {
    class: "ui"
  },
  Xa = {
    __name: "Navigation",
    setup(h) {
      const e = le(),
        o = De(),
        {
          isMobile: t
        } = ce(),
        {
          callHook: i,
          hook: a
        } = X(),
        l = u(null),
        r = u(null);
      let s, v;
      Be(() => {
        a("window:resize", m), a("navigation:blur", P), a("navigation:left", d), a("navigation:center", y), a("navigation:enable", _), a("navigation:disable", p)
      }), J(() => {
        m(), g()
      });
      const g = () => {
          i("navigationShape:default"), (o.name === "group-slug" || o.name === "about") && y(), o.name !== "about" && i("navigationArrows:default")
        },
        m = () => {
          v = e.windowSize.width / (t ? 375 : 1440), s = e.windowSize.width / 2 - l.value.clientWidth / 2, ["group-slug", "about"].includes(o.name) ? (n.set(l.value, {
            x: s
          }), n.set(r.value, {
            x: -v * 30
          })) : n.set(l.value, {
            x: s
          })
        },
        p = () => {
          r.value.style.pointerEvents = "none"
        },
        _ = () => {
          r.value.style.pointerEvents = ""
        },
        y = () => {
          n.to(l.value, {
            x: s,
            duration: e.popstate ? 0 : .5
          }), n.to(r.value, {
            x: 0,
            duration: e.popstate ? 0 : .5
          })
        },
        d = () => {
          n.to(r.value, {
            x: -v * 30,
            duration: e.popstate ? 0 : .5
          })
        },
        f = () => {
          ["about", "caseGallery", "casePlayer"].includes(e.navigation) || e.loading || e.navigationActive || (e.setNavigationActive(1), e.navigation === "categories" && (i("categories:enterSlider"), i("navigationShape:focus"), i("navigationArrows:slider"), i("navigationCategories:slider")), e.navigation === "categoriesNext" && i("categories:next"), e.navigation === "case" && (y(), i("navigationClose:hide", .5, 1), i("navigationShape:focus"), i("navigationArrows:slider"), i("navigationCase:slider")), e.navigation === "caseNext" && (i("casePage:scroll"), e.setNavigationActive(0)))
        },
        k = () => {
          e.isTouch || t || !e.navigationActive || P()
        },
        P = () => {
          e.navigationActive && (e.setNavigationActive(0), e.navigation === "categories" && (i("categories:leaveSlider"), i("navigationShape:default"), i("navigationArrows:default"), i("navigationCategories:active")), e.navigation === "case" && (d(), i("navigationClose:show", .5, 1), i("navigationShape:default"), i("navigationArrows:default"), i("navigationCase:active")))
        };
      return (C, T) => {
        const S = Nn,
          b = Bn,
          V = aa,
          N = wa,
          z = ka,
          x = Na,
          w = Ea,
          O = Da,
          E = Fa,
          G = Wa;
        return M(), H("div", {
          ref_key: "elRef",
          ref: l,
          class: "navigation"
        }, [c("div", {
          class: He(["overlay", {
            "is-active": R(e).navigationActive
          }]),
          onClick: P,
          onTouchmove: P
        }, null, 34), c("div", {
          ref_key: "islandRef",
          ref: r,
          class: "island",
          onClick: f,
          onMouseleave: k
        }, [c("div", Ya, [R(e).loader ? (M(), Ue(S, {
          key: 0
        })) : Ce("", !0), D(b), D(V), D(N)]), c("div", Ua, [D(z), D(x), D(w), D(O), D(E)])], 544), D(G), T[0] || (T[0] = c("div", {
          class: "box"
        }, null, -1))], 512)
      }
    }
  },
  Ka = K(Xa, [
    ["__scopeId", "data-v-ca0433d5"]
  ]),
  Ja = {
    class: "pages"
  },
  ai = {
    __name: "default",
    setup(h) {
      const e = le(),
        o = De(),
        {
          callHook: t
        } = X(),
        {
          isMobile: i,
          isDesktopOrTablet: a
        } = ce(),
        l = u("");
      tt(() => o.path, () => {
        r(), e.setLoading(1), Te(() => {
          e.setPopstate(0)
        }), n.delayedCall(1, () => {
          e.setLoading(0), e.setTransition(0)
        })
      }), Be(() => {
        s(), v(), g(), window.addEventListener("popstate", p), window.addEventListener("mousemove", d), window.addEventListener("resize", _), m()
      }), J(() => {
        r(), requestAnimationFrame(y)
      });
      const r = () => {
          const f = o.path.replace(/^\//, "").replace(/\//g, "-") || "home";
          l.value = `app-${f}`
        },
        s = () => {
          n.registerPlugin(Dt, Xt, xt, Vo, _t), n.defaults({
            ease: "power3.out",
            duration: .5
          })
        },
        v = () => {
          const {
            innerWidth: f,
            innerHeight: k
          } = window;
          e.setWindowSize({
            width: f,
            height: k
          });
          const P = k * .01;
          document.documentElement.style.setProperty("--vh", `${P}px`)
        },
        g = () => {
          const f = window.matchMedia("(orientation: landscape)").matches,
            k = f && i || !f && a;
          e.setNotification(k ? 1 : 0)
        },
        m = () => {
          const f = !window.matchMedia("(pointer: fine)").matches;
          e.setTouch(f ? 1 : 0), document.body.classList.toggle("is-touch", f)
        },
        p = () => {
          e.setPopstate(1), e.gallery && (t("caseGallery:leave"), e.setPopstate(0)), e.player && (t("casePlayer:leave"), e.setPopstate(0))
        },
        _ = () => {
          v(), g(), t("window:resize")
        },
        y = f => {
          t("window:raf", f), requestAnimationFrame(y)
        },
        d = f => {
          const {
            clientX: k,
            clientY: P
          } = f;
          t("window:mousemove", [k, P])
        };
      return (f, k) => {
        const P = nn,
          C = sn,
          T = dn,
          S = Rn,
          b = bn,
          V = Ka,
          N = No;
        return M(), H("div", {
          class: He(["app", {
            "is-loading": R(e).loading,
            "is-intro": R(e).loader,
            [R(l)]: !0
          }])
        }, [R(e).notification ? (M(), Ue(P, {
          key: 0
        })) : Ce("", !0), D(C), R(e).loader ? (M(), Ue(T, {
          key: 1
        })) : Ce("", !0), D(S), D(b), D(V), c("div", Ja, [D(N)])], 2)
      }
    }
  };
export {
  ai as
  default
};