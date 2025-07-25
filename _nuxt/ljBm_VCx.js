import {
  _ as te,
  u as ue,
  e as ie,
  r as u,
  f as re,
  n as Te,
  g as de,
  h as o,
  o as M,
  c as V,
  a as d,
  i as k,
  j as ot,
  k as Q,
  l as he,
  m as Ie,
  p as be,
  q as Pe,
  F as Re,
  s as $e,
  t as je,
  v as Me,
  b as ce,
  d as nt,
  x as qe,
  y as at,
  z as Ve,
  A as st,
  B as it,
  Y as rt,
  C as lt
} from "./BXQMaeyj.js";
import {
  u as pe,
  S as He
} from "./BGjYj7bP.js";
import {
  _ as Le
} from "./DKbNgrut.js";
import {
  m as De,
  S as ke,
  a as We,
  b as Xe
} from "./Dkp8x4GF.js";
import {
  D as ct
} from "./DInpGGAu.js";
import {
  u as ut
} from "./BdBWOcvB.js";
import {
  u as dt
} from "./ChwHoJXA.js";
import "./B_cpn0MM.js";
const ft = l => {
    let e = 0;
    for (; l;) e += l.offsetTop, l = l.offsetParent;
    return e
  },
  gt = ["src"],
  vt = ["src", "alt", "srcset"],
  Ne = "",
  ht = "",
  pt = "",
  mt = {
    __name: "CaseImagesImage",
    props: {
      image: Object,
      cover: Boolean
    },
    setup(l) {
      const e = ue(),
        {
          callHook: n,
          hook: t,
          hooks: a
        } = ie(),
        {
          isMobile: i,
          isSafari: h,
          isDesktopOrTablet: c
        } = pe(),
        p = l,
        g = u(null),
        x = u(0),
        O = u(0),
        s = p.image.filename;
      let P;
      re(() => {
        Te(() => {
          $(), T(), t("window:resize", T)
        })
      }), de(() => {
        m(), a.removeHook("window:resize", T)
      });
      const $ = () => {
          const _ = s.split("/")[5].split("x");
          x.value = _[0], O.value = _[1]
        },
        T = () => {
          B()
        },
        L = () => {
          n("casePage:resize"), B()
        },
        v = () => {
          if (e.loading || e.navigationActive) return;
          const _ = g.value;
          o.set(g.value, {
            zIndex: 3
          }), e.setLoading(1), e.setGallery({
            dom: _,
            active: 1,
            image: p.image,
            bounds: _.getBoundingClientRect()
          }), h && c && S()
        },
        w = () => {
          i || e.isTouch || (n("cursor:show"), n("navigationClose:hide", .5, 1), n("navigation:center"), n("navigationCase:gallery"), n("navigationCase:dataGallery", p.image), n("navigationArrows:focus"), n("navigationShape:focus"))
        },
        S = () => {
          i || e.isTouch || (n("cursor:hide"), n("navigationClose:show", .5, 1), n("navigation:left"), n("navigationCase:active"), n("navigationArrows:default"), n("navigationShape:default"))
        },
        B = () => {
          i || p.cover || (m(), g.value && (o.set(g.value, {
            y: 0
          }), P = o.fromTo(g.value, {
            y: e.windowSize.width / 1440 * 100
          }, {
            y: 0,
            ease: "none",
            scrollTrigger: {
              scrub: !0,
              trigger: g.value,
              start: "top bottom",
              end: "top top"
            }
          })))
        },
        m = () => {
          P == null || P.kill()
        };
      return (_, C) => l.image ? (M(), V("div", {
        key: 0,
        ref_key: "imageRef",
        ref: g,
        class: "image js-image",
        onClick: v,
        onMouseenter: w,
        onMouseleave: S
      }, [d("img", {
        class: "preview",
        src: k(s) + pt
      }, null, 8, gt), d("img", {
        class: "img",
        style: ot(`aspect-ratio: ${k(x)}/${k(O)}`),
        src: k(s) + Ne,
        alt: l.image.alt,
        srcset: `
        ${k(s)+ht} 1200w,
        ${k(s)+Ne} 1920w,
      `,
        onLoad: L
      }, null, 44, vt)], 544)) : Q("", !0)
    }
  },
  Fe = te(mt, [
    ["__scopeId", "data-v-28c3708c"]
  ]),
  yt = {
    __name: "CaseImages",
    props: {
      blok: Object
    },
    setup(l) {
      return (e, n) => {
        const t = Fe;
        return l.blok ? (M(), V("div", {
          key: 0,
          class: Ie(["images", [`layout-${l.blok.layout}`, {
            "is-one": !l.blok.imageOne.id || !l.blok.imageTwo.id
          }]])
        }, [l.blok.imageOne.id ? (M(), he(t, {
          key: 0,
          class: "image-one",
          image: l.blok.imageOne
        }, null, 8, ["image"])) : Q("", !0), l.blok.imageTwo.id ? (M(), he(t, {
          key: 1,
          class: "image-two",
          image: l.blok.imageTwo
        }, null, 8, ["image"])) : Q("", !0)], 2)) : Q("", !0)
      }
    }
  },
  wt = te(yt, [
    ["__scopeId", "data-v-a8f71fcc"]
  ]),
  _t = ["src"],
  kt = {
    __name: "CaseVideo",
    props: {
      blok: Object
    },
    setup(l) {
      const e = ue(),
        n = be(),
        {
          isMobile: t
        } = pe(),
        {
          callHook: a
        } = ie(),
        i = l,
        h = u(null),
        c = i.blok.start,
        p = i.blok.stop;
      re(() => {
        h.value.currentTime = c
      });
      const g = () => {
          h.value && h.value.currentTime >= p && (h.value.currentTime = c)
        },
        x = () => {
          if (e.loading) return;
          const P = `${n.fullPath}/player`;
          history.pushState({
            ...history.state
          }, "", P);
          const $ = h.value;
          e.setPlayer({
            active: 1,
            video: i.blok.vimeo,
            bounds: $.getBoundingClientRect()
          })
        },
        O = () => {
          e.navigation != "case" || t || (a("cursor:show"), a("navigationClose:hide", .5, 1), a("navigation:center"), a("navigationCase:player"), a("navigationArrows:focus"), a("navigationShape:focus"))
        },
        s = () => {
          e.navigation != "case" || t || (a("cursor:hide"), a("navigationClose:show", .5, 1), a("navigation:left"), a("navigationCase:active"), a("navigationArrows:default"), a("navigationShape:default"))
        };
      return (P, $) => l.blok ? (M(), V("div", {
        key: 0,
        class: Ie(["video", `layout-${l.blok.layout}`])
      }, [d("video", {
        ref_key: "vimeoRef",
        ref: h,
        class: "vimeo",
        muted: "",
        loop: "",
        autoplay: "",
        playsinline: "",
        onClick: x,
        onMouseenter: O,
        onMouseleave: s,
        onTimeupdate: g
      }, [d("source", {
        src: l.blok.vimeo,
        type: "video/mp4"
      }, null, 8, _t)], 544)], 2)) : Q("", !0)
    }
  },
  xt = te(kt, [
    ["__scopeId", "data-v-ba14d8f8"]
  ]),
  Ct = {
    class: "list"
  },
  Rt = {
    class: "line"
  },
  $t = {
    class: "type"
  },
  Tt = ["innerHTML"],
  bt = {
    class: "item"
  },
  Pt = {
    class: "line"
  },
  St = ["innerHTML"],
  At = {
    __name: "CaseHeroList",
    props: {
      story: Object,
      category: String
    },
    setup(l) {
      const e = l,
        n = Pe(() => {
          const a = {
              For: e.story.for,
              Model: e.story.model,
              Styling: e.story.styling,
              Makeup: e.story.makeup,
              Video: e.story.video
            },
            i = e.story.details.reduce((c, p) => (c[p.title] = p.value, c), {}),
            h = {
              ...a,
              ...i
            };
          return Object.fromEntries(Object.entries(h).filter(([c, p]) => p))
        }),
        t = a => (a == null ? void 0 : a.replace(/\n/g, "<br>")) || "";
      return (a, i) => (M(), V("ul", Ct, [(M(!0), V(Re, null, $e(k(n), (h, c) => (M(), V("li", {
        key: c,
        class: "item"
      }, [d("div", Rt, [d("div", $t, je(c), 1), d("div", {
        class: "detail",
        innerHTML: t(h)
      }, null, 8, Tt)])]))), 128)), d("li", bt, [d("div", Pt, [i[0] || (i[0] = d("div", {
        class: "type"
      }, " Category ", -1)), d("div", {
        class: "detail",
        innerHTML: l.category
      }, null, 8, St)])])]))
    }
  },
  zt = te(At, [
    ["__scopeId", "data-v-bca2b53e"]
  ]),
  Ht = ["innerHTML"],
  It = ["innerHTML"],
  Mt = ["src", "srcset"],
  Ye = "",
  Lt = "",
  Ot = {
    __name: "CaseHero",
    props: {
      story: Object
    },
    setup(l) {
      const e = ue(),
        {
          isMobile: n
        } = pe(),
        {
          callHook: t,
          hook: a,
          hooks: i
        } = ie(),
        h = l,
        c = h.story.full_slug.split("/")[0],
        p = u(null),
        g = u(null),
        x = u(null),
        O = u(null),
        s = u(null),
        P = u(null),
        $ = u(null),
        T = u(null),
        L = u(null),
        v = u(null),
        w = u(null);
      let S, B, m, _, C, U, E, D = 0,
        j = 0,
        ee = 0;
      const G = h.story.content.cover.filename;
      re(() => {
        fe(), b(), q(), Te(() => {
          a("window:raf", W), a("window:resize", R), a("caseHero:show", y)
        })
      }), Me(() => {
        F()
      }), de(() => {
        S = 0, i.removeHook("window:raf", W), i.removeHook("window:resize", R), i.removeHook("caseHero:show", y)
      });
      const b = () => {
          oe(), U = $.value.$el.querySelectorAll(".line")
        },
        R = () => {
          fe(), me(), C = e.windowSize.width / (n ? 375 : 1440)
        },
        W = () => {
          e.loading || K()
        },
        K = () => {
          const r = e.scrollCase;
          D = De(r, 0, E), m == null || m.progress(D), !n && (g.value.style.transform = `translate3d(0, ${r}px, 0)`, j = De(r, 0, E - e.windowSize.height), _ == null || _.progress(j), !ee && j > .8 ? ae() : ee && j < .8 && le())
        },
        ae = () => {
          ee = 1, o.to([P.value, $.value.$el], {
            autoAlpha: 1
          }), o.fromTo(U, {
            y: C * 20
          }, {
            y: 0,
            stagger: .05
          })
        },
        le = () => {
          ee = 0, o.to([P.value, $.value.$el], {
            autoAlpha: 0
          }), o.fromTo(U, {
            y: 0
          }, {
            y: -C * 20
          })
        },
        oe = () => {
          S = new He(O.value, {
            type: "chars",
            charsClass: "char"
          });
          const r = N => {
            const {
              right: A,
              left: z
            } = N.getBoundingClientRect();
            return A > 0 && z < e.windowSize.width
          };
          B = S.chars.filter(r), o.set(S.chars, {
            yPercent: 100
          })
        },
        fe = () => {
          E = p.value.clientHeight
        },
        ge = () => {
          const r = [O.value, s.value, B];
          o.set(r, {
            x: 0,
            yPercent: 0,
            y: 0
          }), m.kill(), _.kill()
        },
        me = () => {
          if (!S || (m && _ && ge(), m = o.timeline({
              paused: !0,
              onComplete: () => {
                t("casePage:resize")
              }
            }).fromTo(v.value, {
              y: 0
            }, {
              y: e.windowSize.width * .2,
              ease: "none"
            }).fromTo(T.value, {
              autoAlpha: 0
            }, {
              autoAlpha: .6,
              ease: "none"
            }, 0), n)) return;
          const r = B,
            N = r[0].getBoundingClientRect(),
            A = x.value.getBoundingClientRect(),
            z = s.value.getBoundingClientRect(),
            X = -z.top + A.height / 2 - z.height / 2 + A.top;
          _ = o.timeline({
            paused: !0
          }).fromTo(Array.from(r).slice(1), {
            yPercent: 0
          }, {
            stagger: .02,
            yPercent: 100,
            ease: "power3.inOut"
          }, 0).fromTo(r[0], {
            yPercent: 0,
            x: 0
          }, {
            x: e.windowSize.width / 2 - (N.left + N.width / 2),
            ease: "power3.inOut"
          }, .06).fromTo(O.value, {
            y: 0
          }, {
            y: e.windowSize.height / 2 - (N.top + N.height / 2),
            ease: "none"
          }, .5).fromTo(s.value, {
            y: X
          }, {
            y: 0,
            ease: "power3.inOut"
          }, .5)
        },
        y = () => {
          o.fromTo(L.value, {
            autoAlpha: 0
          }, {
            autoAlpha: 1,
            duration: 1,
            ease: "none"
          })
        },
        q = () => {
          if (t("casePage:resize"), e.transition.type !== "categories-case" && (o.set(S.chars, {
              yPercent: 0
            }), R()), e.transition.type === "about-case" && K(), e.transition.type === "case-slide") {
            const r = e.windowSize.width;
            o.fromTo([x.value, s.value, w.value], {
              x: e.transition.direction ? r / 3 : -r / 3
            }, {
              x: 0,
              ease: "power3.inOut",
              duration: 1
            }), o.fromTo(v.value, {
              x: e.transition.direction ? r / 2 : -r / 2
            }, {
              x: 0,
              ease: "power3.inOut",
              duration: 1
            })
          }
          if (e.transition.type === "categories-case") {
            const r = e.transition.bounds,
              N = w.value.getBoundingClientRect();
            let A, z, X;
            n ? (A = r.width / N.width, z = -N.left + r.left, X = r.top - N.top) : (z = r.left, X = r.top, A = r.width / e.windowSize.width), o.fromTo(n ? w.value : v.value, {
              transformOrigin: "top left",
              scale: A,
              x: z,
              y: X
            }, {
              x: 0,
              y: 0,
              scale: 1,
              duration: .8,
              clearProps: "all"
            });
            const ne = .03,
              Z = (B.length - 1) * ne,
              J = Math.max(0, 1 - Z);
            o.fromTo(B, {
              yPercent: 100
            }, {
              yPercent: 0,
              stagger: ne,
              duration: J,
              onComplete: R
            })
          }
          o.set(p.value, {
            autoAlpha: 1
          })
        },
        F = () => {
          if (e.transition.type === "case-categories") {
            const r = e.transition.bounds,
              N = p.value.getBoundingClientRect(),
              A = w.value.getBoundingClientRect();
            let z, X, ne;
            if (n) {
              X = -A.left + r.left;
              const Z = -A.top + r.top,
                J = e.windowSize.height / 2 - A.top - r.height / 2;
              ne = Math.min(Z - e.scrollCase, J - e.scrollCase), z = r.width / A.width
            } else {
              X = r.left;
              const Z = r.top,
                J = e.windowSize.height / 2 - r.height / 2;
              ne = Math.min(Z, J), z = r.width / e.windowSize.width
            }
            if (o.to(g.value, {
                y: 0,
                ease: "power3.inOut",
                duration: 1
              }), o.to([g.value, T.value], {
                autoAlpha: 0
              }), n || o.fromTo(w.value, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
              }, {
                y: -e.scrollCase,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                ease: "power3.inOut",
                duration: 1
              }), o.to(n ? w.value : L.value, {
                transformOrigin: "top left",
                y: ne,
                x: X,
                scale: z,
                clearProps: "all",
                ease: "power3.inOut",
                duration: 1
              }), n) {
              const {
                left: Z,
                top: J,
                width: ye,
                height: we
              } = r, ve = e.scrollCategories, {
                width: _e
              } = e.windowSize, Se = `polygon(
        ${Z}px ${J-ve}px,
        ${Z+ye}px ${J-ve}px,
        ${Z+ye}px ${J+we-ve}px,
        ${Z}px ${J+we-ve}px
      )`, Ae = `polygon(
        0px 0px,
        ${_e}px 0px,
        ${_e}px ${N.height}px,
        0px ${N.height}px
      )`;
              o.fromTo(L.value, {
                clipPath: Ae
              }, {
                clipPath: Se,
                ease: "power3.inOut",
                duration: 1
              })
            }
            o.to(v.value, {
              y: 0,
              ease: "power3.inOut",
              duration: 1
            })
          }
          if (e.transition.type === "case-slide") {
            const r = e.windowSize.width;
            o.fromTo([x.value, s.value, w.value], {
              x: 0
            }, {
              x: e.transition.direction ? -r / 3 : r / 3,
              ease: "power3.inOut",
              duration: 1
            }), o.fromTo(v.value, {
              x: 0
            }, {
              x: e.transition.direction ? -r / 2 : r / 2,
              ease: "power3.inOut",
              duration: 1
            })
          }
        };
      return (r, N) => {
        const A = Le,
          z = zt,
          X = Fe;
        return l.story ? (M(), V("div", {
          key: 0,
          ref_key: "heroRef",
          ref: p,
          class: "hero"
        }, [d("div", {
          ref_key: "contentRef",
          ref: g,
          class: "content"
        }, [ce(A), d("div", {
          ref_key: "headRef",
          ref: x,
          class: "head"
        }, [d("div", {
          ref_key: "titleRef",
          ref: O,
          class: "title",
          innerHTML: l.story.content.title || l.story.name
        }, null, 8, Ht)], 512), d("div", {
          ref_key: "detailsRef",
          ref: s,
          class: "details"
        }, [d("h1", {
          ref_key: "headingRef",
          ref: P,
          class: "heading",
          innerHTML: l.story.name
        }, null, 8, It), ce(z, {
          ref_key: "listRef",
          ref: $,
          category: k(c),
          story: l.story.content
        }, null, 8, ["category", "story"])], 512)], 512), d("div", {
          ref_key: "thumbnailRef",
          ref: w,
          class: "thumbnail"
        }, [l.story.content.cover ? (M(), he(X, {
          key: 0,
          class: "image-one",
          image: l.story.content.cover,
          cover: !0
        }, null, 8, ["image"])) : Q("", !0)], 512), d("div", {
          ref_key: "imageRef",
          ref: L,
          class: "image"
        }, [d("div", {
          ref_key: "overlayRef",
          ref: T,
          class: "overlay"
        }, null, 512), d("img", {
          ref_key: "imgRef",
          ref: v,
          class: "img",
          src: k(G) + Ye,
          srcset: `
          ${k(G)+Lt} 1200w,
          ${k(G)+Ye} 1920w,
        `
        }, null, 8, Mt)], 512)], 512)) : Q("", !0)
      }
    }
  },
  Bt = te(Ot, [
    ["__scopeId", "data-v-b7d3c402"]
  ]),
  Et = ["innerHTML"],
  Dt = ["src", "srcset"],
  Nt = ["src", "srcset"],
  xe = "",
  Ge = "",
  Yt = {
    __name: "CaseNext",
    props: {
      story: Object
    },
    setup(l) {
      const e = ue(),
        {
          isMobile: n
        } = pe(),
        {
          callHook: t,
          hook: a,
          hooks: i
        } = ie(),
        h = l,
        c = Pe(() => {
          var R;
          const b = (e.cases.findIndex(W => W.story.uuid === h.story.uuid) + 1) % e.cases.length;
          return (R = e.cases[b]) == null ? void 0 : R.story
        }),
        p = u(null),
        g = u(null),
        x = u(null),
        O = u(null),
        s = u(null),
        P = u(null),
        $ = u(null);
      let T, L, v, w, S;
      re(() => {
        Te(() => {
          B(), m(), a("window:resize", m)
        })
      }), de(() => {
        j(), i.removeHook("window:resize", m)
      });
      const B = () => {
          w = new He(x == null ? void 0 : x.value, {
            type: "chars",
            charsClass: "char"
          }), S = new He(s == null ? void 0 : s.value, {
            type: "chars",
            charsClass: "char"
          }), o.set(S == null ? void 0 : S.chars, {
            yPercent: 100
          }), t("navigationCase:dataNext", c.value)
        },
        m = () => {
          T = e.windowSize.width / (n ? 375 : 1440), ee()
        },
        _ = () => {
          t("casePage:scroll")
        },
        C = () => {
          E(), t("navigationCase:dataActive", c.value, 0);
          const G = x.value.getBoundingClientRect();
          o.timeline({
            defaults: {
              duration: 1,
              ease: "power3.inOut"
            },
            onComplete: () => {
              e.setTransition({
                type: "case-next"
              }), qe(`/${c.value.full_slug}`)
            }
          }).to(O.value, {
            y: -G.top + T * (n ? 48 : 30)
          }, 0).to(w.chars, {
            yPercent: -100,
            stagger: .02
          }, 0).to(S.chars, {
            yPercent: 0,
            stagger: .02
          }, 0).fromTo($.value, {
            yPercent: 50,
            autoAlpha: 0
          }, {
            yPercent: 0,
            autoAlpha: 1
          }, .1), j()
        },
        U = () => {
          e.setNavigation("caseNext"), t("navigationClose:hide", .5, 1), t("navigation:center"), t("navigationShape:focus"), t("navigationCase:next"), t("navigationIndicator:enter"), t("navigationArrows:indicator")
        },
        E = () => {
          e.setNavigation("case"), D(0), t("navigationClose:show", .5, 1), t("navigation:left"), t("navigationShape:default"), t("navigationCase:active"), t("navigationIndicator:leave"), t("navigationArrows:default")
        },
        D = G => {
          const b = Math.round(G * 100);
          v !== b && (v = b, t("navigationIndicator:count", v))
        },
        j = () => {
          L == null || L.kill()
        },
        ee = () => {
          j();
          const G = e.windowSize.width,
            b = e.windowSize.height,
            R = n ? 100 : 375,
            W = `polygon(
    ${T*R}px ${b}px,
    ${G-T*R}px ${b}px,
    ${G-T*R}px ${b}px,
    ${T*R}px ${b}px
  )`,
            K = `polygon(
    0px 0px,
    ${G}px 0px,
    ${G}px ${b}px,
    0px ${b}px
  )`,
            ae = w.chars,
            le = ae[0].getBoundingClientRect();
          L = o.timeline({
            paused: !0,
            onComplete: () => {
              C()
            },
            scrollTrigger: {
              scrub: !0,
              start: "top top",
              end: "bottom bottom",
              trigger: p.value,
              onEnter: U,
              onLeaveBack: E,
              onUpdate: ({
                progress: oe
              }) => {
                D(oe)
              }
            }
          }).fromTo(P.value, {
            y: 0,
            clipPath: W
          }, {
            y: e.windowSize.height,
            clipPath: K,
            ease: "none",
            duration: 1
          }, 0).fromTo(g.value, {
            y: e.windowSize.height / 2
          }, {
            y: 0,
            ease: "none",
            duration: 1
          }, 0).fromTo(x.value, {
            x: e.windowSize.width / 2 - (le.left + le.width / 2)
          }, {
            x: 0,
            ease: "power3.inOut",
            delay: .4,
            duration: .6
          }, 0).fromTo(ae.slice(1), {
            yPercent: 100
          }, {
            yPercent: 0,
            ease: "power3.inOut",
            delay: .5,
            stagger: .02,
            duration: .34
          }, 0)
        };
      return (G, b) => {
        const R = Le;
        return k(c) ? (M(), V("div", {
          key: 0,
          ref_key: "nextRef",
          ref: p,
          class: "next",
          onClick: _
        }, [d("div", {
          ref_key: "containerRef",
          ref: P,
          class: "container"
        }, [ce(R), d("div", {
          ref_key: "contentRef",
          ref: O,
          class: "content"
        }, [d("div", {
          ref_key: "titleRef",
          ref: x,
          class: "title"
        }, b[0] || (b[0] = [nt(" Next "), d("span", null, "Case", -1)]), 512), d("div", {
          ref_key: "headingRef",
          ref: s,
          class: "heading",
          innerHTML: k(c).content.title || k(c).name
        }, null, 8, Et)], 512), d("div", {
          ref_key: "thumbnailRef",
          ref: $,
          class: "thumbnail"
        }, [d("img", {
          class: "img",
          src: k(c).content.cover.filename + xe,
          srcset: `
            ${k(c).content.cover.filename+Ge} 1200w,
            ${k(c).content.cover.filename+xe} 1920w,
          `
        }, null, 8, Dt)], 512), d("div", {
          ref_key: "imageRef",
          ref: g,
          class: "image"
        }, [d("img", {
          class: "img",
          src: k(c).content.cover.filename + xe,
          srcset: `
            ${k(c).content.cover.filename+Ge} 1200w,
            ${k(c).content.cover.filename+xe} 1920w,
          `
        }, null, 8, Nt)], 512)], 512)], 512)) : Q("", !0)
      }
    }
  },
  Gt = te(Yt, [
    ["__scopeId", "data-v-a5d8ec4b"]
  ]),
  Ut = {
    class: "char"
  },
  jt = {
    __name: "CaseChar",
    props: {
      letter: String
    },
    setup(l) {
      const {
        hook: e,
        hooks: n
      } = ie(), t = u(null);
      let a;
      re(() => {
        a = t.value, e("caseChar:leave", i)
      }), de(() => {
        n.removeHook("caseChar:leave", i)
      });
      const i = () => {
        o.to(a, {
          yPercent: -100,
          ease: "power3.inOut",
          duration: 1
        })
      };
      return (h, c) => (M(), V("div", Ut, [d("div", {
        ref_key: "charRef",
        ref: t
      }, je(l.letter), 513)]))
    }
  },
  qt = te(jt, [
    ["__scopeId", "data-v-423c18bc"]
  ]),
  Vt = {
    __name: "CasePage",
    props: {
      story: Object
    },
    setup(l) {
      const e = l,
        n = ue(),
        {
          isMobile: t
        } = pe(),
        {
          callHook: a,
          hook: i,
          hooks: h
        } = ie(),
        c = Pe(() => {
          var y;
          return ((y = e.story.content.title) == null ? void 0 : y[0]) || e.story.name[0]
        }),
        p = u(null),
        g = u(null),
        x = u(null),
        O = u(null),
        s = u(null),
        P = u(null),
        $ = u(0);
      let T = 0,
        L, v = 0,
        w = 0;
      const S = t ? 1 : 2;
      let B = 0,
        m = 0;
      const _ = new Map([
        ["CaseImages", wt],
        ["CaseVideo", xt]
      ]);
      re(() => {
        G(), i("window:raf", oe), i("window:resize", b), i("casePage:load", fe), i("casePage:enter", ge), i("casePage:resize", b), i("casePage:scroll", ae), window.addEventListener("keydown", ee)
      }), Me(() => {
        n.transition.type === "case-categories" && me()
      }), de(() => {
        h.removeHook("window:raf", oe), h.removeHook("window:resize", b), h.removeHook("casePage:load", fe), h.removeHook("casePage:enter", ge), h.removeHook("casePage:resize", b), h.removeHook("casePage:scroll", ae), window.removeEventListener("keydown", ee)
      });
      const C = () => {
          !n.cursor || t || n.isTouch || (a("cursor:hide"), a("navigation:left"), a("navigationCase:active"), a("navigationShape:default"), a("navigationArrows:default"), a("navigationClose:show", .5, 1))
        },
        U = () => {
          var y;
          L = ((y = s.value) == null ? void 0 : y.clientHeight) - n.windowSize.height
        },
        E = () => {
          const y = p.value;
          ke.defaults({
            scroller: y,
            invalidateOnRefresh: !0
          }), ke.scrollerProxy(y, {
            scrollTop: () => w,
            setBoundingClientRect() {
              return {
                top: 0,
                left: 0,
                width: n.windowSize.width,
                height: n.windowSize.height
              }
            }
          }), b()
        },
        D = () => {
          n.transition.type === "about-case" && n.scrollCase && (v = w = n.scrollCase, s.value.style.transform = `translate3d(0, ${-w}px, 0)`)
        },
        j = () => {
          Math.abs(v - w) > .5 ? ($.value = 1, C()) : $.value = 0
        },
        ee = ({
          key: y,
          shiftKey: q
        }) => {
          if (!(n.loading || n.gallery || n.player) && ((y === "ArrowUp" || y === "ArrowDown") && (v += y === "ArrowUp" ? -500 : 500), y === " ")) {
            const F = n.windowSize.width / 1440 * (q ? -500 : 500);
            v += F
          }
        },
        G = () => {
          U(), E(), D()
        },
        b = () => {
          U(), ke.refresh()
        },
        R = y => {
          B = y.clientY || y.touches[0].clientY, T = 1
        },
        W = y => {
          T && (m = y.clientY || y.touches[0].clientY, v -= (m - B) * 2.5, B = m)
        },
        K = () => {
          T = 0
        },
        ae = (y = L) => {
          v = y
        },
        le = y => {
          if (n.loading) return;
          const {
            deltaY: q
          } = y;
          v += q / S
        },
        oe = () => {
          n.loader || n.loading || (j(), v = We(v, 0, L), w = Xe(w, v, .1), w < .1 && (w = 0), ke.update(), s.value.style.transform = `translate3d(0, ${-w}px, 0)`, n.setScrollCase(w))
        },
        fe = y => {
          const q = n.cases,
            F = q.findIndex(z => z.story.id === n.case.id),
            r = (F - 1 + q.length) % q.length,
            N = (F + 1) % q.length,
            A = y ? q[N] : q[r];
          n.setTransition({
            type: "case-slide",
            direction: y
          }), qe(`/${A.story.full_slug}`)
        },
        ge = (y, q) => {
          const F = s.value.querySelectorAll(".js-image"),
            r = F[y];
          v = w = ft(r);
          const A = q.getBoundingClientRect(),
            z = r.getBoundingClientRect();
          F.forEach((X, ne) => {
            ne !== y && o.fromTo(X, {
              autoAlpha: 0
            }, {
              autoAlpha: 1,
              duration: 1,
              ease: "none"
            })
          }), o.fromTo(r, {
            zIndex: 3,
            autoAlpha: 1,
            transformOrigin: "0% 0%",
            y: A.top,
            x: A.left - z.left,
            scaleX: A.width / z.width,
            scaleY: A.height / z.height
          }, {
            x: 0,
            y: 0,
            scaleX: 1,
            scaleY: 1,
            duration: 1,
            clearProps: "zIndex",
            ease: "power3.inOut"
          })
        },
        me = () => {
          x.value.$el.getBoundingClientRect().bottom <= 0 ? (n.setTransition({
            type: "case-categories-fade"
          }), a("caseChar:leave"), a("categories:enterCase"), o.to([s.value, P.value], {
            autoAlpha: 0,
            ease: "none"
          })) : (o.to(s.value, {
            y: 0,
            duration: 1,
            ease: "power3.inOut"
          }), o.to([g.value.$el, P.value], {
            autoAlpha: 0,
            ease: "none"
          }))
        };
      return (y, q) => {
        const F = Le,
          r = Bt,
          N = Gt,
          A = qt;
        return M(), V("div", {
          ref_key: "pageRef",
          ref: p,
          class: Ie(["case", {
            "is-scrolling": k($)
          }]),
          onWheelPassive: le,
          onTouchstart: R,
          onTouchmove: W,
          onTouchend: K,
          onMousedown: R,
          onMousemove: W,
          onMouseleave: K,
          onMouseup: K
        }, [ce(F, {
          ref_key: "headerRef",
          ref: O
        }, null, 512), d("div", {
          ref_key: "containerRef",
          ref: s,
          class: "container"
        }, [ce(r, {
          ref_key: "heroRef",
          ref: x,
          story: l.story
        }, null, 8, ["story"]), (M(!0), V(Re, null, $e(l.story.content.media, z => (M(), he(at(k(_).get(z.component)), {
          key: z._uid,
          blok: z
        }, null, 8, ["blok"]))), 128)), ce(N, {
          story: l.story
        }, null, 8, ["story"])], 512), ce(A, {
          ref_key: "charRef",
          ref: g,
          letter: k(c)
        }, null, 8, ["letter"]), d("div", {
          ref_key: "backgroundRef",
          ref: P,
          class: "background"
        }, null, 512)], 34)
      }
    }
  },
  Wt = te(Vt, [
    ["__scopeId", "data-v-6830b829"]
  ]),
  Xt = {
    class: "thumbnails"
  },
  Ft = ["onClick"],
  Kt = ["src", "srcset"],
  Zt = ["src", "srcset"],
  Ce = "",
  Ue = "",
  Jt = {
    __name: "CaseGallery",
    props: {
      story: Object
    },
    setup(l) {
      const e = ue(),
        n = be(),
        {
          isMobile: t
        } = pe(),
        {
          callHook: a,
          hook: i,
          hooks: h
        } = ie(),
        c = l,
        p = Pe(() => {
          var f, H;
          return [((f = c.story.content.cover) == null ? void 0 : f.filename) && c.story.content.cover, ...((H = c.story.content.media) == null ? void 0 : H.flatMap(Y => [Y.imageOne, Y.imageTwo].filter(I => I == null ? void 0 : I.filename))) || []].filter(Boolean)
        }),
        g = u([]),
        x = u([]),
        O = u(null),
        s = u(null),
        P = u(null),
        $ = u(null),
        T = u(null),
        L = u(null),
        v = u(null),
        w = u(null),
        S = u(null),
        B = u(null),
        m = u(0),
        _ = u(0);
      let C = 0,
        U = 0,
        E, D = 0,
        j = 0;
      const ee = t ? 1 : 2;
      let G = 0,
        b = 0,
        R = 0,
        W = 0,
        K;
      Ve(() => {
        const f = `${n.fullPath}/gallery`;
        history.pushState({
          ...history.state
        }, "", f), a("navigationGallery:reset")
      }), re(() => {
        le(), i("caseGallery:zoom", Oe), i("caseGallery:leave", q), a("navigationGallery:init", p.value), window.addEventListener("keydown", X), J(), !t && (oe(), i("window:raf", Z), i("window:resize", oe))
      }), Me(() => {
        const f = n.fullPath;
        history.replaceState({
          ...history.state
        }, "", f)
      }), de(() => {
        h.removeHook("caseGallery:zoom", Oe), h.removeHook("caseGallery:leave", q), window.removeEventListener("keydown", X), !t && (h.removeHook("window:raf", Z), h.removeHook("window:resize", oe))
      });
      const ae = () => {
          U === g.value.length && (o.set(s.value, {
            autoAlpha: 1
          }), o.delayedCall(.1, () => {
            y()
          }))
        },
        le = () => {
          g.value.forEach(f => {
            f.onload = () => {
              U++, ae(), f.classList.add(f.naturalHeight > f.naturalWidth ? "portrait" : "landscape")
            }
          })
        },
        oe = () => {
          _e(), Be()
        },
        fe = f => {
          m.value || (G = f.clientY || f.touches[0].clientY, C = 1)
        },
        ge = f => {
          C && (b = f.clientY || f.touches[0].clientY, D -= (b - G) * 2.5, G = b)
        },
        me = () => {
          C = 0
        },
        y = () => {
          o.delayedCall(1, () => {
            e.setLoading(0), _.value = 1
          });
          const {
            value: f
          } = p, {
            bounds: H,
            image: Y
          } = e.gallery, I = f.findIndex(tt => tt.id === Y.id), se = g.value[I].getBoundingClientRect();
          R = W = I;
          const ze = H.width / se.width,
            Je = -se.left + H.left,
            Qe = H.top - se.top,
            et = f.length - 1;
          if (j = D = E / et * I, o.set(x.value, {
              autoAlpha: 0
            }), o.set(x.value[I], {
              autoAlpha: 1
            }), o.fromTo(g.value[I], {
              transformOrigin: "top left",
              scale: ze,
              x: Je,
              y: Qe
            }, {
              x: 0,
              y: 0,
              scale: 1,
              duration: 1,
              ease: "power3.inOut",
              clearProps: "all"
            }), o.fromTo(P.value, {
              scale: 0,
              autoAlpha: 1
            }, {
              scale: 1
            }), o.to(S.value, {
              autoAlpha: 1,
              duration: 1
            }), o.set(e.gallery.dom, {
              autoAlpha: 0
            }), a("navigationGallery:activeImage", R), t && e.galleryInstructions) {
            o.timeline().fromTo(B.value, {
              autoAlpha: 0
            }, {
              autoAlpha: 1
            }, 1).to(B.value, {
              autoAlpha: 0
            }, 4), e.setGalleryInstructions(0);
            return
          }
          o.fromTo(L.value, {
            autoAlpha: 0
          }, {
            delay: .5,
            autoAlpha: 1,
            duration: 1,
            ease: "power3.out"
          }), o.fromTo(w.value, {
            yPercent: 100,
            autoAlpha: 0
          }, {
            yPercent: 0,
            autoAlpha: 1,
            duration: 1,
            stagger: .05,
            ease: "power3.out"
          })
        },
        q = () => {
          if (e.navigation !== "case") {
            if (_.value = 0, ye(), o.to(P.value, {
                scale: 0
              }), o.set([s.value, S.value], {
                delay: .1,
                autoAlpha: 0
              }), a("caseHero:show"), a("casePage:enter", R, g.value[R]), o.delayedCall(1, () => {
                e.setGallery(0)
              }), t) {
              o.to(B.value, {
                autoAlpha: 0
              });
              return
            }
            o.killTweensOf($.value), o.to($.value, {
              autoAlpha: 0,
              duration: 1
            })
          }
        },
        F = f => {
          D = E / (p.value.length - 1) * f
        },
        r = () => {
          a("cursor:show")
        },
        N = () => {
          a("cursor:hide")
        },
        A = () => {
          T.value.classList.toggle("is-dark")
        },
        z = () => {
          t && (W = ++W % (p.value.length - 1), Ee())
        },
        X = f => {
          _.value && (f.key === "ArrowUp" && (D -= 100), f.key === "ArrowDown" && (D += 100), f.key === "Escape" && q())
        },
        ne = f => {
          if (!_.value) return;
          const {
            deltaY: H
          } = f;
          D += H / ee
        },
        Z = () => {
          D = We(D, 0, E), j = Xe(j, D, .1), j < .1 && (j = 0), Ee(), Be()
        },
        J = () => {
          e.setNavigation("caseGallery"), a("navigationCase:hide"), a("navigationArrows:hide"), a("navigationGallery:enter")
        },
        ye = () => {
          e.setNavigation("case"), a("navigationCase:show"), a("navigationArrows:show"), a("navigationGallery:leave")
        },
        we = () => {
          o.killTweensOf($.value), o.to($.value, {
            autoAlpha: 1,
            ease: "none",
            duration: .3
          })
        },
        ve = () => {
          o.killTweensOf($.value), o.to($.value, {
            autoAlpha: 0,
            ease: "none",
            duration: .3
          })
        },
        _e = () => {
          E = v.value.clientHeight - e.windowSize.height
        },
        Se = f => {
          m.value = 1;
          const H = g.value[R];
          o.set(H, {
            pointerEvents: "all"
          }), K = ct.create(H, {
            type: f,
            inertia: !0,
            zIndexBoost: !1,
            bounds: H.parentNode
          })[0], !t && ve()
        },
        Ae = () => {
          K && (m.value = 0, o.set(K.target, {
            pointerEvents: ""
          }), K.kill()), !(t || !_.value) && we()
        },
        Ke = f => {
          const H = [.5, 1, 1.5, 2],
            Y = [.5, 1, 2, 3];
          for (let I = 0; I < H.length - 1; I++)
            if (f >= H[I] && f <= H[I + 1]) {
              const se = H[I + 1] - H[I],
                ze = Y[I + 1] - Y[I];
              return Y[I] + ze * (f - H[I]) / se
            }
        },
        Oe = f => {
          const H = g.value[R];
          o.killTweensOf(H), o.to(H, {
            y: 0,
            x: 0,
            scale: Ke(f),
            onComplete: Ze,
            duration: 1
          })
        },
        Ze = () => {
          const {
            width: f,
            height: H
          } = g.value[R].getBoundingClientRect(), {
            width: Y,
            height: I
          } = e.windowSize, se = (f > Y ? "x" : "") + (H > I ? "y" : "");
          se ? Se(se) : Ae()
        },
        Be = () => {
          const f = L.value.clientHeight / E;
          O.value.style.transform = `translate3d(0, ${f*j}px, 0)`, v.value.style.transform = `translate3d(0, ${-j}px, 0)`
        },
        Ee = () => {
          t || (W = Math.round(j / E * (p.value.length - 1))), W != R && (R = W, a("navigationGallery:reset", 1), a("navigationGallery:activeImage", R), o.killTweensOf([x.value, g.value]), o.set(g.value, {
            x: 0,
            y: 0,
            scale: 1
          }), o.set(x.value, {
            y: 0,
            autoAlpha: 0
          }), o.fromTo(x.value[R], {
            y: 50,
            autoAlpha: 0
          }, {
            y: 0,
            autoAlpha: 1,
            duration: 1
          }))
        };
      return (f, H) => l.story ? (M(), V("div", {
        key: 0,
        ref_key: "galleryRef",
        ref: T,
        class: "gallery",
        onWheelPassive: ne,
        onTouchstart: fe,
        onTouchmove: ge,
        onTouchend: me
      }, [d("button", {
        ref_key: "modeRef",
        ref: P,
        class: "mode",
        "aria-label": "toggle mode",
        onClick: A
      }, null, 512), d("div", {
        ref_key: "previewRef",
        ref: $,
        class: "preview"
      }, [d("div", {
        ref_key: "containerRef",
        ref: v,
        class: "container"
      }, [d("div", {
        ref_key: "indicatorRef",
        ref: L,
        class: "indicator"
      }, [d("div", {
        ref_key: "barRef",
        ref: O,
        class: "bar"
      }, null, 512)], 512), d("div", Xt, [(M(!0), V(Re, null, $e(k(p), (Y, I) => (M(), V("div", {
        key: Y._uid,
        ref_for: !0,
        ref_key: "thumbnailRef",
        ref: w,
        class: "thumbnail",
        onClick: se => F(I),
        onMouseenter: r,
        onMouseleave: N
      }, [d("img", {
        class: "img",
        src: Y.filename + Ce,
        srcset: `
                ${Y.filename+Ue} 1200w,
                ${Y.filename+Ce} 1920w,
              `
      }, null, 8, Kt)], 40, Ft))), 128))])], 512)], 512), d("div", {
        ref_key: "instructionsRef",
        ref: B,
        class: "instructions"
      }, " (Tap for next) ", 512), d("div", {
        ref_key: "viewRef",
        ref: s,
        class: "view",
        onClick: z
      }, [(M(!0), V(Re, null, $e(k(p), Y => (M(), V("div", {
        ref_for: !0,
        ref_key: "viewImageRef",
        ref: x,
        key: Y._uid,
        class: "image"
      }, [d("img", {
        ref_for: !0,
        ref_key: "viewImgRef",
        ref: g,
        class: "img",
        src: Y.filename + Ce,
        srcset: `
            ${Y.filename+Ue} 1200w,
            ${Y.filename+Ce} 1920w,
          `
      }, null, 8, Zt)]))), 128))], 512), d("div", {
        ref_key: "backgroundRef",
        ref: S,
        class: "background"
      }, null, 512)], 544)) : Q("", !0)
    }
  },
  Qt = te(Jt, [
    ["__scopeId", "data-v-81842435"]
  ]),
  eo = ["src"],
  to = {
    __name: "CasePlayer",
    setup(l) {
      const e = ue(),
        n = be(),
        {
          callHook: t,
          hook: a,
          hooks: i
        } = ie(),
        h = u(null),
        c = u(null);
      re(() => {
        p(), a("window:raf", O), a("casePlayer:enter", p), a("casePlayer:leave", g), a("casePlayer:range", s), o.delayedCall(.5, () => {
          T()
        })
      }), de(() => {
        const v = n.fullPath;
        history.replaceState({
          ...history.state
        }, "", v), i.removeHook("window:raf", O), i.removeHook("casePlayer:enter", p), i.removeHook("casePlayer:leave", g), i.removeHook("casePlayer:range", s)
      });
      const p = () => {
          o.timeline({
            defaults: {
              duration: .5,
              ease: "linear"
            }
          }).fromTo(h.value, {
            autoAlpha: 0
          }, {
            autoAlpha: 1
          }).fromTo(c.value, {
            autoAlpha: 0
          }, {
            autoAlpha: 1
          })
        },
        g = () => {
          e.navigation !== "case" && o.to(h.value, {
            autoAlpha: 0,
            ease: "linear",
            onComplete: x
          })
        },
        x = () => {
          e.setPlayer(0), L()
        },
        O = () => {
          t("navigationPlayer:progress", c.value.currentTime)
        },
        s = v => {
          c.value.currentTime = v
        },
        P = () => {
          if (!c.value) return;
          const v = Math.floor(c.value.currentTime),
            w = String(Math.floor(v / 60)).padStart(2, "0"),
            S = String(v % 60).padStart(2, "0");
          t("navigationPlayer:time", `${w}:${S}`)
        },
        $ = () => {
          c.value.duration && t("navigationPlayer:max", c.value.duration)
        },
        T = () => {
          e.setNavigation("casePlayer"), t("navigationCase:hide"), t("navigationArrows:hide"), t("navigationPlayer:enter")
        },
        L = () => {
          e.setNavigation("case"), t("navigationCase:show"), t("navigationArrows:show"), t("navigationPlayer:leave")
        };
      return (v, w) => (M(), V("div", {
        ref_key: "elRef",
        ref: h,
        class: "player"
      }, [d("video", {
        ref_key: "videoRef",
        ref: c,
        class: "video",
        autoplay: "",
        playsinline: "",
        onTimeupdate: P,
        onCanplay: $,
        onEnded: g
      }, [d("source", {
        src: k(e).player.video,
        type: "video/mp4"
      }, null, 8, eo)], 544)], 512))
    }
  },
  oo = te(to, [
    ["__scopeId", "data-v-2b9389ef"]
  ]),
  no = {
    key: 0,
    class: "group-slug"
  },
  ao = {
    __name: "[slug]",
    async setup(l) {
      let e, n;
      const t = ue(),
        a = be(),
        {
          callHook: i,
          hook: h,
          hooks: c,
          $preview: p
        } = ie(),
        g = a.params.slug,
        x = a.params.group,
        O = p ? "draft" : "published",
        {
          data: s
        } = ([e, n] = st(async () => it(`${x}/${g}`, async () => {
          const {
            data: m
          } = await lt().get(`cdn/stories/${x}/${g}`, {
            version: O
          });
          return m == null ? void 0 : m.story
        })), e = await e, n(), e);
      ut({
        title: s == null ? void 0 : s.value.name,
        meta: [{
          name: "description",
          content: s == null ? void 0 : s.value.content.description
        }]
      });
      const P = () => {
        p && s.value && s.value.id && rt(s.value.id, m => s.value = m)
      };
      Ve(() => {
        t.setCase(s.value), t.setNavigation("case"), t.setCategory(t.case.full_slug.split("/")[0])
      }), re(() => {
        P(), t.popstate && $(), h("case:enter", v), h("case:enterCase", S), h("case:enterCategories", B), window.addEventListener("keyup", w), Te(() => {
          L()
        }), (t.transition.type === "categories-case" || t.transition.type === "about-case" || t.popstate) && (i("navigationClose:show"), i("navigationCase:show"), i("navigationCase:active"), i("navigationArrows:show"), i("navigationArrows:default"))
      }), de(() => {
        c.removeHook("case:enter", v), c.removeHook("case:enterCase", S), c.removeHook("case:enterCategories", B), window.removeEventListener("keyup", w)
      });
      const $ = () => {
          i("navigation:left"), i("navigationCategories:hide")
        },
        T = m => {
          const _ = t.cases.find(D => D.name === t.case.name),
            C = t.categories.findIndex(D => D.title.toLowerCase() === t.category),
            U = _.dom.parentElement,
            E = Math.max(0, U.offsetTop - t.windowSize.height / 2 + U.clientHeight / 2);
          t.setScrollCategories(E), i("categories:index", C), i("navigationCategories:dataIndex", C), m && m()
        },
        L = () => {
          i("navigationCase:dataActive", s.value, t.transition.type ? 1 : 0), t.loader && T()
        },
        v = (m, _) => {
          T(_)
        },
        w = ({
          key: m
        }) => {},
        S = (m, _) => {
          o.fromTo(m, {
            clipPath: t.transition.direction ? "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" : "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
            zIndex: 4
          }, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power3.inOut",
            duration: 1,
            clearProps: "all",
            onComplete: () => {
              T(_)
            }
          })
        },
        B = (m, _) => {
          const C = t.transition.bounds,
            U = `polygon(
      ${C.left}px ${C.top}px,
      ${C.left+C.width}px ${C.top}px,
      ${C.left+C.width}px ${C.top+C.height}px,
      ${C.left}px ${C.top+C.height}px
    )`,
            E = `polygon(
      0px 0px,
      ${t.windowSize.width}px 0px,
      ${t.windowSize.width}px ${t.windowSize.height}px,
      0px ${t.windowSize.height}px
    )`;
          o.fromTo(m, {
            clipPath: U
          }, {
            clipPath: E,
            clearProps: "clipPath",
            duration: 1,
            onComplete: () => {
              T(_)
            }
          })
        };
      return dt(s, a), (m, _) => {
        const C = Wt,
          U = Qt,
          E = oo;
        return k(s) ? (M(), V("div", no, [ce(C, {
          story: k(s)
        }, null, 8, ["story"]), k(t).gallery.active ? (M(), he(U, {
          key: 0,
          story: k(s)
        }, null, 8, ["story"])) : Q("", !0), k(t).player.active ? (M(), he(E, {
          key: 1,
          story: k(s)
        }, null, 8, ["story"])) : Q("", !0)])) : Q("", !0)
      }
    }
  },
  vo = te(ao, [
    ["__scopeId", "data-v-d85b7d97"]
  ]);
export {
  vo as
  default
};