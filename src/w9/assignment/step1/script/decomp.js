!(function (e) {
  if ('object' == typeof exports && 'undefined' != typeof module)
    module.exports = e();
  else if ('function' == typeof define && define.amd) define([], e);
  else {
    var f;
    'undefined' != typeof window
      ? (f = window)
      : 'undefined' != typeof global
      ? (f = global)
      : 'undefined' != typeof self && (f = self),
      (f.decomp = e());
  }
})(function () {
  return (function e(f, o, n) {
    function d(t, l) {
      if (!o[t]) {
        if (!f[t]) {
          var u = 'function' == typeof require && require;
          if (!l && u) return u(t, !0);
          if (i) return i(t, !0);
          throw new Error("Cannot find module '" + t + "'");
        }
        var p = (o[t] = { exports: {} });
        f[t][0].call(
          p.exports,
          function (e) {
            var o = f[t][1][e];
            return d(o ? o : e);
          },
          p,
          p.exports,
          e,
          f,
          o,
          n
        );
      }
      return o[t].exports;
    }
    for (
      var i = 'function' == typeof require && require, t = 0;
      t < n.length;
      t++
    )
      d(n[t]);
    return d;
  })(
    {
      1: [
        function (e, f, o) {
          function n(e, f, o) {
            o = o || 0;
            var n,
              d,
              i,
              t,
              l,
              u,
              p,
              s = [0, 0];
            return (
              (n = e[1][1] - e[0][1]),
              (d = e[0][0] - e[1][0]),
              (i = n * e[0][0] + d * e[0][1]),
              (t = f[1][1] - f[0][1]),
              (l = f[0][0] - f[1][0]),
              (u = t * f[0][0] + l * f[0][1]),
              (p = n * l - t * d),
              D(p, 0, o) ||
                ((s[0] = (l * i - d * u) / p), (s[1] = (n * u - t * i) / p)),
              s
            );
          }
          function d(e, f, o, n) {
            var d = f[0] - e[0],
              i = f[1] - e[1],
              t = n[0] - o[0],
              l = n[1] - o[1];
            if (t * i - l * d === 0) return !1;
            var u = (d * (o[1] - e[1]) + i * (e[0] - o[0])) / (t * i - l * d),
              p = (t * (e[1] - o[1]) + l * (o[0] - e[0])) / (l * d - t * i);
            return u >= 0 && 1 >= u && p >= 0 && 1 >= p;
          }
          function i(e, f, o) {
            return (
              (f[0] - e[0]) * (o[1] - e[1]) - (o[0] - e[0]) * (f[1] - e[1])
            );
          }
          function t(e, f, o) {
            return i(e, f, o) > 0;
          }
          function l(e, f, o) {
            return i(e, f, o) >= 0;
          }
          function u(e, f, o) {
            return i(e, f, o) < 0;
          }
          function p(e, f, o) {
            return i(e, f, o) <= 0;
          }
          function s(e, f, o, n) {
            if (n) {
              var d = F,
                t = G;
              (d[0] = f[0] - e[0]),
                (d[1] = f[1] - e[1]),
                (t[0] = o[0] - f[0]),
                (t[1] = o[1] - f[1]);
              var l = d[0] * t[0] + d[1] * t[1],
                u = Math.sqrt(d[0] * d[0] + d[1] * d[1]),
                p = Math.sqrt(t[0] * t[0] + t[1] * t[1]),
                s = Math.acos(l / (u * p));
              return n > s;
            }
            return 0 === i(e, f, o);
          }
          function c(e, f) {
            var o = f[0] - e[0],
              n = f[1] - e[1];
            return o * o + n * n;
          }
          function y(e, f) {
            var o = e.length;
            return e[0 > f ? (f % o) + o : f % o];
          }
          function a(e) {
            e.length = 0;
          }
          function m(e, f, o, n) {
            for (var d = o; n > d; d++) e.push(f[d]);
          }
          function r(e) {
            for (var f = 0, o = e, n = 1; n < e.length; ++n)
              (o[n][1] < o[f][1] ||
                (o[n][1] === o[f][1] && o[n][0] > o[f][0])) &&
                (f = n);
            return t(y(e, f - 1), y(e, f), y(e, f + 1)) ? !1 : (w(e), !0);
          }
          function w(e) {
            for (var f = [], o = e.length, n = 0; n !== o; n++) f.push(e.pop());
            for (var n = 0; n !== o; n++) e[n] = f[n];
          }
          function b(e, f) {
            return u(y(e, f - 1), y(e, f), y(e, f + 1));
          }
          function g(e, f, o) {
            var d,
              i,
              t = H,
              u = I;
            if (
              l(y(e, f + 1), y(e, f), y(e, o)) &&
              p(y(e, f - 1), y(e, f), y(e, o))
            )
              return !1;
            i = c(y(e, f), y(e, o));
            for (var s = 0; s !== e.length; ++s)
              if (
                (s + 1) % e.length !== f &&
                s !== f &&
                l(y(e, f), y(e, o), y(e, s + 1)) &&
                p(y(e, f), y(e, o), y(e, s)) &&
                ((t[0] = y(e, f)),
                (t[1] = y(e, o)),
                (u[0] = y(e, s)),
                (u[1] = y(e, s + 1)),
                (d = n(t, u)),
                c(y(e, f), d) < i)
              )
                return !1;
            return !0;
          }
          function x(e, f, o) {
            for (var n = 0; n !== e.length; ++n)
              if (
                n !== f &&
                n !== o &&
                (n + 1) % e.length !== f &&
                (n + 1) % e.length !== o &&
                d(y(e, f), y(e, o), y(e, n), y(e, n + 1))
              )
                return !1;
            return !0;
          }
          function j(e, f, o, n) {
            var d = n || [];
            if ((a(d), o > f)) for (var i = f; o >= i; i++) d.push(e[i]);
            else {
              for (var i = 0; o >= i; i++) d.push(e[i]);
              for (var i = f; i < e.length; i++) d.push(e[i]);
            }
            return d;
          }
          function v(e) {
            for (
              var f = [], o = [], n = [], d = [], i = Number.MAX_VALUE, t = 0;
              t < e.length;
              ++t
            )
              if (b(e, t))
                for (var l = 0; l < e.length; ++l)
                  if (g(e, t, l)) {
                    (o = v(j(e, t, l, d))), (n = v(j(e, l, t, d)));
                    for (var u = 0; u < n.length; u++) o.push(n[u]);
                    o.length < i &&
                      ((f = o), (i = o.length), f.push([y(e, t), y(e, l)]));
                  }
            return f;
          }
          function h(e) {
            var f = v(e);
            return f.length > 0 ? k(e, f) : [e];
          }
          function k(e, f) {
            if (0 === f.length) return [e];
            if (
              f instanceof Array &&
              f.length &&
              f[0] instanceof Array &&
              2 === f[0].length &&
              f[0][0] instanceof Array
            ) {
              for (var o = [e], n = 0; n < f.length; n++)
                for (var d = f[n], i = 0; i < o.length; i++) {
                  var t = o[i],
                    l = k(t, d);
                  if (l) {
                    o.splice(i, 1), o.push(l[0], l[1]);
                    break;
                  }
                }
              return o;
            }
            var d = f,
              n = e.indexOf(d[0]),
              i = e.indexOf(d[1]);
            return -1 !== n && -1 !== i ? [j(e, n, i), j(e, i, n)] : !1;
          }
          function q(e) {
            var f,
              o = e;
            for (f = 0; f < o.length - 1; f++)
              for (var n = 0; f - 1 > n; n++)
                if (d(o[f], o[f + 1], o[n], o[n + 1])) return !1;
            for (f = 1; f < o.length - 2; f++)
              if (d(o[0], o[o.length - 1], o[f], o[f + 1])) return !1;
            return !0;
          }
          function z(e, f, o, n, d) {
            d = d || 0;
            var i = f[1] - e[1],
              t = e[0] - f[0],
              l = i * e[0] + t * e[1],
              u = n[1] - o[1],
              p = o[0] - n[0],
              s = u * o[0] + p * o[1],
              c = i * p - u * t;
            return D(c, 0, d)
              ? [0, 0]
              : [(p * l - t * s) / c, (i * s - u * l) / c];
          }
          function A(e, f, o, n, d, i, s) {
            (i = i || 100),
              (s = s || 0),
              (d = d || 25),
              (f = 'undefined' != typeof f ? f : []),
              (o = o || []),
              (n = n || []);
            var a = [0, 0],
              r = [0, 0],
              w = [0, 0],
              g = 0,
              j = 0,
              v = 0,
              h = 0,
              k = 0,
              q = 0,
              B = 0,
              C = [],
              D = [],
              E = e,
              F = e;
            if (F.length < 3) return f;
            if ((s++, s > i))
              return (
                console.warn('quickDecomp: max level (' + i + ') reached.'), f
              );
            for (var G = 0; G < e.length; ++G)
              if (b(E, G)) {
                o.push(E[G]), (g = j = Number.MAX_VALUE);
                for (var H = 0; H < e.length; ++H)
                  t(y(E, G - 1), y(E, G), y(E, H)) &&
                    p(y(E, G - 1), y(E, G), y(E, H - 1)) &&
                    ((w = z(y(E, G - 1), y(E, G), y(E, H), y(E, H - 1))),
                    u(y(E, G + 1), y(E, G), w) &&
                      ((v = c(E[G], w)), j > v && ((j = v), (r = w), (q = H)))),
                    t(y(E, G + 1), y(E, G), y(E, H + 1)) &&
                      p(y(E, G + 1), y(E, G), y(E, H)) &&
                      ((w = z(y(E, G + 1), y(E, G), y(E, H), y(E, H + 1))),
                      t(y(E, G - 1), y(E, G), w) &&
                        ((v = c(E[G], w)),
                        g > v && ((g = v), (a = w), (k = H))));
                if (q === (k + 1) % e.length)
                  (w[0] = (r[0] + a[0]) / 2),
                    (w[1] = (r[1] + a[1]) / 2),
                    n.push(w),
                    k > G
                      ? (m(C, E, G, k + 1),
                        C.push(w),
                        D.push(w),
                        0 !== q && m(D, E, q, E.length),
                        m(D, E, 0, G + 1))
                      : (0 !== G && m(C, E, G, E.length),
                        m(C, E, 0, k + 1),
                        C.push(w),
                        D.push(w),
                        m(D, E, q, G + 1));
                else {
                  if ((q > k && (k += e.length), (h = Number.MAX_VALUE), q > k))
                    return f;
                  for (var H = q; k >= H; ++H)
                    l(y(E, G - 1), y(E, G), y(E, H)) &&
                      p(y(E, G + 1), y(E, G), y(E, H)) &&
                      ((v = c(y(E, G), y(E, H))),
                      h > v && x(E, G, H) && ((h = v), (B = H % e.length)));
                  B > G
                    ? (m(C, E, G, B + 1),
                      0 !== B && m(D, E, B, F.length),
                      m(D, E, 0, G + 1))
                    : (0 !== G && m(C, E, G, F.length),
                      m(C, E, 0, B + 1),
                      m(D, E, B, G + 1));
                }
                return (
                  C.length < D.length
                    ? (A(C, f, o, n, d, i, s), A(D, f, o, n, d, i, s))
                    : (A(D, f, o, n, d, i, s), A(C, f, o, n, d, i, s)),
                  f
                );
              }
            return f.push(e), f;
          }
          function B(e, f) {
            for (var o = 0, n = e.length - 1; e.length > 3 && n >= 0; --n)
              s(y(e, n - 1), y(e, n), y(e, n + 1), f) &&
                (e.splice(n % e.length, 1), o++);
            return o;
          }
          function C(e, f) {
            for (var o = e.length - 1; o >= 1; --o)
              for (var n = e[o], d = o - 1; d >= 0; --d)
                E(n, e[d], f) && e.splice(o, 1);
          }
          function D(e, f, o) {
            return (o = o || 0), Math.abs(e - f) <= o;
          }
          function E(e, f, o) {
            return D(e[0], f[0], o) && D(e[1], f[1], o);
          }
          f.exports = {
            decomp: h,
            quickDecomp: A,
            isSimple: q,
            removeCollinearPoints: B,
            removeDuplicatePoints: C,
            makeCCW: r,
          };
          var F = [],
            G = [],
            H = [],
            I = [];
        },
        {},
      ],
    },
    {},
    [1]
  )(1);
});
