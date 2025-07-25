import {
  _ as U,
  o as M,
  c as B,
  a as t,
  t as D,
  q as W,
  D as G,
  i as x,
  F as pt,
  u as j,
  e as N,
  r as m,
  f as Y,
  g as Z,
  h as c,
  b as q,
  d as X,
  k as F,
  n as rt,
  w as it,
  E as gt,
  l as lt,
  p as ft,
  A as ht,
  v as mt,
  x as _t,
  B as yt,
  Y as vt,
  C as wt
} from "./BXQMaeyj.js";
import {
  u as Q,
  S as O
} from "./BGjYj7bP.js";
import {
  m as bt,
  S as V,
  b as Ct,
  a as kt
} from "./Dkp8x4GF.js";
import {
  _ as $t
} from "./B_cpn0MM.js";
import {
  u as xt
} from "./BdBWOcvB.js";
import {
  u as Tt
} from "./ChwHoJXA.js";
const At = (e, o, u) => {
    const {
      top: n,
      bottom: _
    } = e.getBoundingClientRect();
    return n < o && _ >= u
  },
  Rt = {
    class: "contact"
  },
  St = {
    class: "parent"
  },
  Lt = ["href"],
  Pt = {
    class: "parent"
  },
  Ht = ["href"],
  Mt = {
    __name: "AboutContact",
    props: {
      email: String,
      phone: String
    },
    setup(e) {
      return (o, u) => (M(), B("div", Rt, [t("div", St, [t("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        class: "link child",
        href: `mailto:${e.email}`
      }, D(e.email), 9, Lt)]), t("div", Pt, [t("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        class: "link child",
        href: `tel:${e.phone}`
      }, D(e.phone), 9, Ht)]), u[0] || (u[0] = t("div", {
        class: "parent"
      }, [t("div", {
        class: "label child"
      }, " contact. ")], -1))]))
    }
  },
  Ot = U(Mt, [
    ["__scopeId", "data-v-c6004557"]
  ]),
  zt = {
    class: "social"
  },
  It = {
    class: "parent"
  },
  Bt = ["href"],
  Et = {
    class: "parent"
  },
  qt = ["href"],
  Dt = {
    __name: "AboutSocial",
    props: {
      instagram: String,
      facebook: String
    },
    setup(e) {
      return (o, u) => (M(), B("div", zt, [t("div", It, [t("a", {
        target: "_blank",
        rel: "noopener",
        class: "link child",
        href: e.instagram
      }, "Instagram", 8, Bt)]), t("div", Et, [t("a", {
        target: "_blank",
        rel: "noopener",
        class: "link child",
        href: e.facebook
      }, "Facebook", 8, qt)]), u[0] || (u[0] = t("div", {
        class: "parent"
      }, [t("div", {
        class: "label child"
      }, " social. ")], -1))]))
    }
  },
  Ut = U(Dt, [
    ["__scopeId", "data-v-09ad4c11"]
  ]),
  Vt = {
    class: "visit"
  },
  jt = ["href", "innerHTML"],
  Nt = {
    class: "studio"
  },
  Yt = ["href", "innerHTML"],
  Zt = {
    __name: "AboutAddress",
    props: {
      content: Object
    },
    setup(e) {
      const o = e,
        u = W(() => G(o.content.addressOne)),
        n = W(() => G(o.content.addressTwo));
      return (_, g) => (M(), B(pt, null, [t("div", Vt, [t("a", {
        class: "link",
        target: "_blank",
        rel: "noopener noreferrer",
        href: e.content.mapsOne,
        innerHTML: x(u)
      }, null, 8, jt), g[0] || (g[0] = t("div", {
        class: "label"
      }, " visit. ", -1))]), t("div", Nt, [t("a", {
        class: "link",
        target: "_blank",
        rel: "noopener noreferrer",
        href: e.content.mapsTwo,
        innerHTML: x(n)
      }, null, 8, Yt), g[1] || (g[1] = t("div", {
        class: "label"
      }, " studio. ", -1))])], 64))
    }
  },
  Ft = U(Zt, [
    ["__scopeId", "data-v-61d5736b"]
  ]),
  Qt = {
    class: "content"
  },
  Kt = {
    class: "row"
  },
  Wt = {
    class: "row"
  },
  Gt = ["innerHTML"],
  Jt = {
    class: "text"
  },
  Xt = {
    class: "label"
  },
  te = {
    class: "row"
  },
  ee = ["src", "srcset"],
  ot = "",
  oe = "",
  ne = {
    __name: "AboutOtto",
    props: {
      story: Object
    },
    setup(e) {
      const o = j(),
        {
          isMobile: u
        } = Q(),
        {
          callHook: n,
          hook: _,
          hooks: g
        } = N(),
        l = e,
        T = m(null),
        k = m(null),
        y = m(null),
        v = m(null),
        i = m(null),
        h = m(null),
        w = m(null),
        d = l.story.content.ottoImage.filename;
      let p;
      Y(() => {
        b(), _("window:raf", R), _("aboutOtto:data", $), _("aboutOtto:enter", a), $()
      }), Z(() => {
        g.removeHook("window:raf", R), g.removeHook("aboutOtto:data", $), g.removeHook("aboutOtto:enter", a)
      });
      const $ = () => {
          const r = {
            title: l.story.content.ottoTitle,
            image: 0
          };
          n("navigationAbout:dataActive", r)
        },
        b = () => {
          const r = o.windowSize.width / (u ? 375 : 1440) * 500;
          p = c.timeline({
            paused: !0
          }).fromTo(T.value, {
            y: 0
          }, {
            y: r,
            ease: "none"
          })
        },
        A = r => {
          const f = r.getBoundingClientRect(),
            P = f.height,
            S = f.bottom - f.height;
          return bt(-S, 0, P)
        },
        R = () => {
          const r = o.windowSize.height;
          At(k.value, r, 0) && p.progress(A(k.value))
        },
        a = () => {
          c.fromTo(i.value.$el.querySelectorAll(".child"), {
            yPercent: 100
          }, {
            yPercent: 0,
            ease: "power3.out",
            delay: .4,
            stagger: .08,
            duration: o.popstate ? 0 : 1
          }), c.fromTo(v.value.$el.querySelectorAll(".child"), {
            yPercent: 100
          }, {
            yPercent: 0,
            ease: "power3.out",
            delay: .4,
            stagger: .08,
            duration: o.popstate ? 0 : 1
          });
          const r = new O(h.value, {
            type: "chars",
            charsClass: "char"
          });
          c.fromTo(r.chars, {
            yPercent: 100
          }, {
            yPercent: 0,
            ease: "power3.out",
            delay: .2,
            stagger: .08,
            duration: o.popstate ? 0 : 1
          });
          const f = new O(y.value, {
            type: "lines",
            linesClass: "child"
          });
          c.fromTo(f.lines, {
            yPercent: 100
          }, {
            yPercent: 0,
            ease: "power3.out",
            delay: .5,
            stagger: .08,
            duration: o.popstate ? 0 : 1
          }), new O(y.value, {
            type: "lines",
            linesClass: "parent"
          }), c.fromTo(w.value, {
            y: -o.windowSize.height / 2
          }, {
            y: 0,
            ease: "power3.inOut",
            duration: o.popstate ? 0 : 1
          })
        };
      return (r, f) => {
        const P = Ot,
          S = Ut,
          H = Ft;
        return e.story ? (M(), B("div", {
          key: 0,
          ref_key: "ottoRef",
          ref: k,
          class: "otto"
        }, [t("div", Qt, [t("div", Kt, [q(P, {
          ref_key: "contactRef",
          ref: i,
          email: e.story.content.email,
          phone: e.story.content.phone
        }, null, 8, ["email", "phone"]), q(S, {
          ref_key: "socialRef",
          ref: v,
          instagram: e.story.content.instagram,
          facebook: e.story.content.facebook
        }, null, 8, ["instagram", "facebook"])]), t("div", Wt, [t("h2", {
          ref_key: "headingRef",
          ref: h,
          class: "heading",
          innerHTML: e.story.content.ottoHeading
        }, null, 8, Gt), f[1] || (f[1] = t("div", {
          class: "chapter"
        }, " (§1) ", -1)), t("p", Jt, [t("span", Xt, D(e.story.content.ottoTitle) + ".", 1), t("span", {
          ref_key: "textRef",
          ref: y,
          class: "paragraph"
        }, [f[0] || (f[0] = t("span", {
          class: "spacer"
        }, " ", -1)), X(" " + D(e.story.content.ottoText), 1)], 512)])]), t("div", te, [q(H, {
          ref: "addressRef",
          content: e.story.content
        }, null, 8, ["content"])])]), t("div", {
          ref_key: "backgroundRef",
          ref: w,
          class: "background"
        }, [t("img", {
          ref_key: "imgRef",
          ref: T,
          class: "img",
          src: x(d) + ot,
          srcset: `
          ${x(d)+oe} 1200w,
          ${x(d)+ot} 1920w,
        `
        }, null, 8, ee)], 512)], 512)) : F("", !0)
      }
    }
  },
  se = U(ne, [
    ["__scopeId", "data-v-cdfb2cd0"]
  ]),
  ae = {
    class: "content"
  },
  re = {
    class: "row"
  },
  ie = ["innerHTML"],
  le = {
    class: "text-one"
  },
  ce = {
    class: "label"
  },
  ue = {
    class: "row"
  },
  de = ["innerHTML"],
  pe = {
    class: "background"
  },
  ge = ["src", "srcset"],
  nt = "",
  fe = "",
  he = {
    __name: "AboutStory",
    props: {
      story: Object
    },
    setup(e) {
      const o = j(),
        {
          isMobile: u
        } = Q(),
        {
          callHook: n,
          hooks: _,
          hook: g
        } = N(),
        l = e,
        T = m(null),
        k = m(null),
        y = m(null),
        v = m(null);
      let i, h, w, d, p, $;
      const b = l.story.content.storyImage.filename;
      Y(() => {
        g("aboutStory:data", A), rt(() => {
          R()
        })
      }), Z(() => {
        _.removeHook("aboutStory:data", A), i == null || i.kill(), h == null || h.kill(), w == null || w.kill(), d == null || d.kill()
      });
      const A = () => {
          const S = {
            title: l.story.content.storyTitle,
            image: 1
          };
          n("navigationAbout:dataActive", S)
        },
        R = () => {
          const S = o.windowSize.width / (u ? 375 : 1440) * 500;
          p = new O(y.value, {
            type: "chars",
            charsClass: "char"
          }), c.set(p.chars, {
            yPercent: 100
          }), w = c.to(p.chars, {
            yPercent: 0,
            stagger: .08,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: y.value,
              start: "top center",
              toggleActions: "play none none none"
            }
          }), $ = new O(v.value, {
            type: "lines",
            linesClass: "child"
          }), new O(v.value, {
            type: "lines",
            linesClass: "parent"
          }), c.set($.lines, {
            yPercent: 100
          }), d = c.to($.lines, {
            yPercent: 0,
            stagger: .08,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: v.value,
              start: "center bottom",
              toggleActions: "play none none none"
            }
          }), i = c.timeline({
            paused: !0
          }).fromTo(T.value, {
            y: -S
          }, {
            y: S,
            ease: "none",
            scrollTrigger: {
              scrub: !0,
              trigger: k.value,
              start: "top bottom",
              end: "bottom top"
            }
          }), h = V.create({
            trigger: k.value,
            start: "top bottom",
            end: "bottom bottom",
            onEnter: a,
            onEnterBack: r,
            onLeave: f,
            onLeaveBack: P
          })
        },
        a = () => {
          n("aboutStory:data")
        },
        r = () => {
          n("aboutStory:data")
        },
        f = () => {
          n("aboutPartners:data")
        },
        P = () => {
          n("aboutOtto:data")
        };
      return (S, H) => e.story ? (M(), B("div", {
        key: 0,
        ref_key: "storyRef",
        ref: k,
        class: "story"
      }, [t("div", ae, [t("div", re, [t("h2", {
        ref_key: "headingRef",
        ref: y,
        class: "heading",
        innerHTML: e.story.content.storyHeading
      }, null, 8, ie), H[1] || (H[1] = t("div", {
        class: "chapter"
      }, " (§2) ", -1)), t("p", le, [t("span", ce, D(e.story.content.storyTitle) + ".", 1), t("span", {
        ref_key: "paragraphRef",
        ref: v,
        class: "paragraph"
      }, [H[0] || (H[0] = t("span", {
        class: "spacer"
      }, " ", -1)), X(" " + D(e.story.content.storyTextOne), 1)], 512)])]), t("div", ue, [t("p", {
        class: "text-two",
        innerHTML: e.story.content.storyTextTwo
      }, null, 8, de)])]), t("div", pe, [t("img", {
        ref_key: "imgRef",
        ref: T,
        class: "img",
        src: x(b) + nt,
        srcset: `
          ${x(b)+fe} 1200w,
          ${x(b)+nt} 1920w,
        `
      }, null, 8, ge)])], 512)) : F("", !0)
    }
  },
  me = U(he, [
    ["__scopeId", "data-v-287715f8"]
  ]),
  _e = {
    viewBox: "0 0 40 41",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };

function ye(e, o) {
  return M(), B("svg", _e, o[0] || (o[0] = [t("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M36.3741 6.43339C36.3987 6.36568 36.44 6.36568 36.4661 6.43339L37.2661 8.60612C37.3737 8.8537 37.5709 9.05109 37.8178 9.15853L39.9801 9.96177C40.0491 9.98792 40.0491 10.0295 39.9801 10.0541L37.8178 10.8558C37.5709 10.9632 37.3737 11.1606 37.2661 11.4082L36.4661 13.5794C36.44 13.6486 36.3987 13.6486 36.3741 13.5794L35.5742 11.4082C35.4657 11.1611 35.2688 10.964 35.0225 10.8558L32.8601 10.051C32.7911 10.0264 32.7911 9.98485 32.8601 9.95869L35.0225 9.16315C35.2688 9.05494 35.4657 8.85779 35.5742 8.61073L36.3741 6.43339ZM31.4548 4.5561C31.3908 4.70475 31.273 4.82352 31.1253 4.88847L29.8273 5.3701C29.7859 5.38549 29.7859 5.41011 29.8273 5.4255L31.1253 5.90713C31.2724 5.97297 31.3899 6.09145 31.4548 6.2395L31.936 7.54283C31.9513 7.58438 31.9758 7.58438 31.9912 7.54283L32.4708 6.2395C32.536 6.09109 32.654 5.97253 32.8019 5.90713L34.0999 5.4255C34.1397 5.41011 34.1397 5.38549 34.0999 5.3701L32.8019 4.88847C32.6534 4.8241 32.5349 4.70521 32.4708 4.5561L31.985 3.25277C31.9697 3.21122 31.9452 3.21122 31.9299 3.25277L31.4548 4.5561ZM28.5813 20.4223C28.9583 20.1145 29.3675 19.3882 29.5637 18.8481C27.7415 19.7237 26.9278 18.5065 25.5791 18.7927C23.38 19.2543 22.577 20.2668 19.5441 19.5852C20.479 20.2299 21.7831 21.007 22.8513 21.344C21.5088 22.7073 20.6506 24.5169 20.1663 26.922C21.4291 27.0913 22.8942 26.7019 24.5278 26.3373C23.9011 25.3263 23.5946 23.9768 23.4857 22.4165C24.1007 23.8349 25.0764 25.066 26.3148 25.9864C28.2672 25.6787 30.4157 25.6648 32.713 26.7558C31.5988 22.338 28.5813 20.4223 28.5813 20.4223ZM4.13323 14.1703C4.688 15.2587 5.27393 16.3312 5.89102 17.3878C7.96297 12.83 10.7598 8.30914 15.3343 4.67612C11.169 9.177 8.648 14.2257 7.12316 19.4082C7.45724 19.9345 7.80206 20.4561 8.15147 20.9747C9.55678 16.7277 11.6119 12.453 15.3175 8.77846C12.0302 13.2178 10.2694 17.9849 9.41579 22.7735C9.75907 23.2444 10.109 23.7096 10.4656 24.1691C11.2226 20.3576 12.5498 16.4646 15.3006 12.8793C12.962 17.1339 11.9552 21.4963 11.7345 25.7633C13.0167 27.3144 14.3775 28.8162 15.8171 30.2688C16.9971 31.4536 18.2149 32.5851 19.4706 33.6633L19.5503 33.6925C17.6408 30.5381 15.7297 26.7127 14.7995 23.3198C15.909 20.55 17.4415 17.5602 19.2621 16.5907C21.0828 15.6213 23.3018 17.8602 25.7232 17.5017C27.0028 17.3124 28.5032 15.1335 30.1338 17.3909C32.8463 14.6981 26.14 9.94176 23.7907 4.3022C22.767 1.84018 20.7042 1.10466 17.6377 1.24776C10.6219 1.57244 4.63283 13.0808 4.13323 14.1703ZM23.9593 39.1582C15.3545 33.2291 8.28161 25.3255 3.32713 16.103C2.88861 17.2472 2.5151 18.4154 2.2084 19.6021C4.5608 23.5259 6.60517 25.8449 10.0334 29.4409C6.64961 27.1143 4.02596 24.3461 1.77164 21.5486C1.67049 22.0718 1.52031 22.9089 1.39617 23.9722C1.35769 24.299 1.39694 24.6304 1.51069 24.9391C1.62444 25.2477 1.80945 25.5249 2.05055 25.7479C8.3886 31.6418 15.838 36.2015 23.9593 39.1582ZM32.7406 28.2438C29.5836 25.9141 24.2091 28.3253 19.5503 28.6946C23.2574 29.8195 27.3231 28.0484 30.9 29.1563C30.3928 31.5614 29.2602 34.0695 27.8871 36.6162C30.1797 34.3988 32.0739 31.5337 32.7406 28.2438ZM27.055 22.6689C26.3966 22.4976 25.7604 22.2497 25.1592 21.9303L24.5754 23.0074C24.9891 23.2167 26.8097 23.4982 27.5775 23.4444C27.6873 23.4359 27.7897 23.3859 27.8641 23.3044C28.3591 22.7612 28.7499 22.0734 29.1162 21.4409C28.5371 21.9085 27.9098 22.3124 27.245 22.6458C27.1863 22.6755 27.1192 22.6842 27.055 22.6704V22.6689Z",
    fill: "currentcolor"
  }, null, -1)]))
}
const ve = {
    render: ye
  },
  we = {
    class: "content"
  },
  be = {
    class: "row"
  },
  Ce = ["innerHTML"],
  ke = {
    class: "text"
  },
  $e = {
    class: "label"
  },
  xe = ["innerHTML"],
  Te = {
    class: "row"
  },
  Ae = ["innerHTML"],
  Re = ["innerHTML"],
  Se = {
    class: "background"
  },
  Le = ["src", "srcset"],
  st = "",
  Pe = "",
  He = {
    __name: "AboutPartners",
    props: {
      story: Object
    },
    setup(e) {
      const o = j(),
        {
          isMobile: u
        } = Q(),
        {
          callHook: n,
          hooks: _,
          hook: g
        } = N(),
        l = e,
        T = W(() => G(l.story.content.partnersList)),
        k = W(() => G(l.story.content.partnersQuote)),
        y = m(null),
        v = m(null),
        i = m(null),
        h = m(null),
        w = m(null),
        d = m(null);
      let p, $, b, A, R, a, r, f;
      const P = l.story.content.partnersImage.filename;
      Y(() => {
        g("aboutPartners:data", S), rt(() => {
          H()
        })
      }), Z(() => {
        _.removeHook("aboutPartners:data", S), p == null || p.kill(), $ == null || $.kill(), b == null || b.kill(), A == null || A.kill(), R == null || R.kill()
      });
      const S = () => {
          const z = {
            title: l.story.content.partnersTitle,
            image: 2
          };
          n("navigationAbout:dataActive", z)
        },
        H = () => {
          const z = o.windowSize.width / (u ? 375 : 1440) * 500;
          r = new O(h.value, {
            type: "chars",
            charsClass: "char"
          }), c.set(r.chars, {
            yPercent: 100
          }), A = c.to(r.chars, {
            yPercent: 0,
            stagger: .08,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: h.value,
              start: "top center",
              toggleActions: "play none none none"
            }
          }), f = new O(d.value, {
            type: "lines",
            linesClass: "child"
          }), new O(d.value, {
            type: "lines",
            linesClass: "parent"
          }), c.set(f.lines, {
            yPercent: 100
          }), R = c.to(f.lines, {
            yPercent: 0,
            stagger: .08,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: d.value,
              start: "center bottom",
              toggleActions: "play none none none"
            }
          });
          const I = v.value.querySelectorAll("p");
          c.set(I, {
            yPercent: 100
          }), $ = c.to(I, {
            yPercent: 0,
            stagger: .08,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: v.value,
              start: "center bottom",
              toggleActions: "play none none none"
            }
          }), a = new O(i.value.firstChild, {
            type: "lines,words",
            linesClass: "line",
            wordsClass: "word"
          }), c.set(a.words, {
            yPercent: 100
          }), b = c.to(a.words, {
            yPercent: 0,
            stagger: .04,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: i.value,
              start: "bottom bottom",
              toggleActions: "play none none none"
            }
          }), p = c.timeline({
            paused: !0
          }).fromTo(y.value, {
            y: -z
          }, {
            y: z / 2,
            ease: "none",
            scrollTrigger: {
              scrub: !0,
              trigger: w.value,
              start: "top bottom",
              end: "bottom bottom"
            }
          })
        };
      return (z, I) => {
        const K = $t;
        return e.story ? (M(), B("div", {
          key: 0,
          ref_key: "partnersRef",
          ref: w,
          class: "partners"
        }, [t("div", we, [t("div", be, [t("h2", {
          ref_key: "headingRef",
          ref: h,
          class: "heading",
          innerHTML: e.story.content.partnersHeading
        }, null, 8, Ce), I[1] || (I[1] = t("div", {
          class: "chapter"
        }, " (§3) ", -1)), t("p", ke, [t("span", $e, D(e.story.content.partnersTitle) + ".", 1), t("span", {
          ref_key: "paragraphRef",
          ref: d,
          class: "paragraph"
        }, [I[0] || (I[0] = t("span", {
          class: "spacer"
        }, " ", -1)), X(" " + D(e.story.content.partnersText), 1)], 512)]), t("div", {
          ref_key: "listRef",
          ref: v,
          class: "list",
          innerHTML: x(T)
        }, null, 8, xe)]), t("div", Te, [t("div", {
          ref_key: "quoteRef",
          ref: i,
          class: "quote",
          innerHTML: x(k)
        }, null, 8, Ae), t("div", {
          class: "quotee",
          innerHTML: e.story.content.partnersQuotee
        }, null, 8, Re), q(K, {
          to: "https://www.exoape.com/",
          target: "_blank"
        }, {
          default: it(() => [q(x(ve), {
            class: "exoape-svg"
          })]),
          _: 1
        })])]), t("div", Se, [t("img", {
          ref_key: "imgRef",
          ref: y,
          class: "img",
          src: x(P) + st,
          srcset: `
          ${x(P)+Pe} 1200w,
          ${x(P)+st} 1920w,
        `
        }, null, 8, Le)])], 512)) : F("", !0)
      }
    }
  },
  Me = U(He, [
    ["__scopeId", "data-v-b9f18a40"]
  ]),
  at = 100,
  Oe = {
    __name: "Scroll",
    setup(e) {
      const o = j(),
        {
          isMobile: u
        } = Q(),
        {
          hook: n,
          hooks: _
        } = N(),
        g = m(null);
      let l, T, k = 0,
        y = 0,
        v = 0,
        i = 0,
        h, w, d = 0,
        p = 0;
      const $ = u ? 1 : 2,
        b = [];
      let A = 0,
        R = 0;
      Y(() => {
        P(), n("window:raf", tt), n("window:resize", K), !(u || o.isTouch) && window.addEventListener("keydown", f)
      }), Z(() => {
        _.removeHook("window:raf", tt), _.removeHook("window:resize", K), !(u | o.isTouch) && window.removeEventListener("keydown", f)
      });
      const a = () => {
          w = T[l - 1].getBoundingClientRect().bottom, h = w - window.innerHeight
        },
        r = () => {
          [...T].forEach(s => {
            s.style.transform = "translate3d(0, 0, 0)";
            const {
              top: C,
              bottom: L
            } = s.getBoundingClientRect(), E = {
              el: s,
              bounds: {
                top: C,
                bottom: L
              },
              out: !0
            };
            b.push(E)
          })
        },
        f = ({
          key: s,
          shiftKey: C
        }) => {
          if ((s === "ArrowUp" || s === "ArrowDown") && (d += s === "ArrowUp" ? -500 : 500), s === " ") {
            const L = o.windowSize.width / 1440 * (C ? -500 : 500);
            d += L
          }
        },
        P = () => {
          T = g.value.children, l = T.length, a(), r(), ct()
        },
        S = s => {
          k = s.clientY || s.touches[0].clientY, i = 1
        },
        H = s => {
          i && (y = s.clientY || s.touches[0].clientY, d -= (y - k) * 2.5, k = y)
        },
        z = () => {
          i = 0
        },
        I = s => {
          const {
            deltaY: C
          } = s;
          d += C / $
        },
        K = () => {
          v = !0, b.forEach(({
            el: s,
            bounds: C
          }) => {
            s.style.transform = "translate3d(0, 0, 0)";
            const {
              top: L,
              bottom: E
            } = s.getBoundingClientRect();
            C.top = L, C.bottom = E
          }), a(), et(), V.refresh(), v = !1
        },
        tt = s => {
          R = s - A, A = s;
          const C = R / (1e3 / 60);
          d = kt(d, 0, h), p = Ct(p, d, .1 * C), p < .1 && (p = 0), V.update(), et()
        },
        et = () => {
          const s = `translate3d(0, ${-p}px, 0)`;
          for (let C = 0; C < l; C++) {
            const L = b[C],
              {
                el: E,
                bounds: J
              } = L;
            ut(J) || v ? (Object.assign(L, {
              out: !1
            }), E.style.transform = s) : L.out || (Object.assign(L, {
              out: !0
            }), E.style.transform = s)
          }
        },
        ct = () => {
          const s = g.value;
          V.defaults({
            scroller: s,
            invalidateOnRefresh: !0
          }), V.scrollerProxy(s, {
            scrollTop: () => p,
            setBoundingClientRect() {
              return {
                top: 0,
                left: 0,
                width: o.windowSize.width,
                height: o.windowSize.height
              }
            }
          })
        },
        ut = s => {
          const {
            top: C,
            bottom: L
          } = s, E = C - p, J = L - p;
          return E < at + window.innerHeight && J > -at
        };
      return (s, C) => (M(), B("div", {
        ref_key: "scrollRef",
        ref: g,
        onWheelPassive: I,
        onTouchstart: S,
        onTouchmove: H,
        onTouchend: z,
        onMousedown: S,
        onMousemove: H,
        onMouseleave: z,
        onMouseup: z
      }, [gt(s.$slots, "default")], 544))
    }
  },
  ze = {
    __name: "AboutPage",
    props: {
      story: Object
    },
    setup(e) {
      return (o, u) => {
        const n = se,
          _ = me,
          g = Me,
          l = Oe;
        return e.story ? (M(), lt(l, {
          key: 0,
          class: "about"
        }, {
          default: it(() => [q(n, {
            story: e.story
          }, null, 8, ["story"]), q(_, {
            story: e.story
          }, null, 8, ["story"]), q(g, {
            story: e.story
          }, null, 8, ["story"])]),
          _: 1
        })) : F("", !0)
      }
    }
  },
  Ie = U(ze, [
    ["__scopeId", "data-v-2aff8195"]
  ]),
  Be = {
    class: "page-about"
  },
  Ee = {
    __name: "about",
    async setup(e) {
      let o, u;
      const n = j(),
        _ = ft(),
        {
          isMobile: g
        } = Q(),
        {
          callHook: l,
          hook: T,
          hooks: k,
          $preview: y
        } = N(),
        v = y ? "draft" : "published",
        {
          data: i
        } = ([o, u] = ht(async () => yt("about", async () => {
          const {
            data: a
          } = await wt().get("cdn/stories/about", {
            version: v
          });
          return a == null ? void 0 : a.story
        })), o = await o, u(), o);
      let h, w;
      xt({
        title: i == null ? void 0 : i.value.name,
        meta: [{
          name: "description",
          content: i == null ? void 0 : i.value.content.description
        }]
      });
      const d = () => {
        y && i.value && i.value.id && vt(i.value.id, a => i.value = a)
      };
      Y(() => {
        d(), n.popstate && p(), n.setNavigation("about"), $(), T("about:enter", A), T("about:leave", R), window.addEventListener("keyup", b), !n.loader && (l("navigation:left"), l("navigationArrows:hide"), l("navigationClose:show"), l("navigationAbout:enter"))
      }), mt(() => {
        l("navigationAbout:leave")
      }), Z(() => {
        k.removeHook("about:enter", A), k.removeHook("about:leave", R), window.removeEventListener("keyup", b)
      });
      const p = () => {
          l("navigation:left"), l("navigationCase:hide"), l("navigationCategories:hide")
        },
        $ = () => {
          const a = n.windowSize.width / (g ? 375 : 1440),
            r = g ? 100 : 375;
          w = `polygon(
    ${a*r}px 0px,
    ${n.windowSize.width-a*r}px 0px,
    ${n.windowSize.width-a*r}px 0px,
    ${a*r}px 0px
  )`, h = `polygon(
    0px 0px,
    ${n.windowSize.width}px 0px,
    ${n.windowSize.width}px ${n.windowSize.height}px,
    0px ${n.windowSize.height}px
  )`
        },
        b = ({
          key: a
        }) => {
          a === "Escape" && _t("/")
        },
        A = (a, r) => {
          c.fromTo(a.firstChild, {
            clipPath: w
          }, {
            clipPath: h,
            onComplete: r,
            ease: "power3.inOut",
            clearProps: "all",
            duration: n.popstate ? 0 : 1
          }), c.fromTo(a.lastChild, {
            autoAlpha: 0
          }, {
            autoAlpha: 1,
            ease: "power3.inOut",
            duration: n.popstate ? 0 : 1
          })
        },
        R = (a, r) => {
          c.fromTo(a.firstChild, {
            clipPath: h
          }, {
            clipPath: w,
            onComplete: r,
            ease: "power3.inOut",
            duration: n.popstate ? 0 : 1
          }), c.fromTo(a.lastChild, {
            autoAlpha: 1
          }, {
            autoAlpha: 0,
            ease: "power3.inOut",
            duration: n.popstate ? 0 : 1
          })
        };
      return Tt(i, _), (a, r) => {
        const f = Ie;
        return M(), B("div", Be, [x(i) ? (M(), lt(f, {
          key: 0,
          story: x(i)
        }, null, 8, ["story"])) : F("", !0), r[0] || (r[0] = t("div", {
          class: "overlay"
        }, null, -1))])
      }
    }
  },
  Ye = U(Ee, [
    ["__scopeId", "data-v-37f8fff1"]
  ]);
export {
  Ye as
  default
};