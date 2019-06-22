!(function(t) {
  var e = {};
  function r(n) {
    if (e[n]) return e[n].exports;
    var i = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  (r.m = t),
    (r.c = e),
    (r.d = function(t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function(t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (r.t = function(t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var i in t)
          r.d(
            n,
            i,
            function(e) {
              return t[e];
            }.bind(null, i)
          );
      return n;
    }),
    (r.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return r.d(e, 'a', e), e;
    }),
    (r.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = ''),
    r((r.s = 10));
})([
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.create2dArray = function(t, e) {
        return []
          .concat(
            (function(t) {
              if (Array.isArray(t)) {
                for (var e = 0, r = Array(t.length); e < t.length; e++)
                  r[e] = t[e];
                return r;
              }
              return Array.from(t);
            })(Array(t).keys())
          )
          .map(function(t) {
            return Array(e).fill(0);
          });
      }),
      (e.degrees = function(t, e) {
        var r = Array(t.length).fill(0);
        e.forEach(function(t) {
          (r[t.source.index] += 1), (r[t.target.index] += 1);
        });
        var n = r.map(function(t, e) {
          return { index: e, value: t };
        });
        n.sort(function(t, e) {
          return +(t.value < e.value) || +(t.value === e.value) - 1;
        });
        var i = n.map(function(t) {
          return r[t.index];
        });
        return { nodes: n, degrees: i };
      }),
      (e.getDepth = function t(e) {
        var r = 0;
        e.children &&
          e.children.forEach(function(e) {
            if (1 == e.depth_visited)
              throw new Error('This layout is only for trees acyclic graphs');
            e.depth_visited = !0;
            var n = t(e);
            n > r && (r = n);
          });
        return 1 + r;
      }),
      (e.getRanges = function(t) {
        if ((t = Math.abs(t)) <= 1) return { start: 0.5, step: 1 };
        return { start: 0.05, step: 0.9 / (t - 1) };
      });
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (function() {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      return function(e, r, n) {
        return r && t(e.prototype, r), n && t(e, n), e;
      };
    })();
    var i = (function() {
      function t() {
        !(function(t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, t);
      }
      return (
        n(t, null, [
          {
            key: 'extend',
            value: function(t) {
              for (var e = 1; e < arguments.length; e++)
                for (var r in arguments[e]) t[r] = arguments[e][r];
              return t;
            },
          },
          {
            key: 'isObject',
            value: function(t) {
              return t === Object(t);
            },
          },
          {
            key: 'emptyObject',
            value: function(e) {
              if (!t.isObject(e)) return !1;
              for (var r in e) return !1;
              return !0;
            },
          },
          {
            key: 'ajax',
            value: function(t, e, r) {
              var n;
              ((n = new XMLHttpRequest()).onreadystatechange = (function(t) {
                return function() {
                  4 == n.readyState &&
                    200 == n.status &&
                    t('arraybuffer' == r ? n.response : n.responseText);
                };
              })(e)),
                r && (n.responseType = r),
                n.open('GET', t, !0),
                n.send();
            },
          },
        ]),
        t
      );
    })();
    e.default = i;
  },
  function(t, e, r) {
    'use strict';
    const n = Object.prototype.toString;
    t.exports = function(t) {
      return n.call(t).endsWith('Array]');
    };
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (function() {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      return function(e, r, n) {
        return r && t(e.prototype, r), n && t(e, n), e;
      };
    })();
    var i = (function() {
      function t() {
        !(function(t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, t);
      }
      return (
        n(t, null, [
          {
            key: 'initExtensions',
            value: function(t) {
              for (
                var e = t.getSupportedExtensions(), r = {}, n = 1;
                n < arguments.length;
                n++
              ) {
                var i = arguments[n];
                (r[i] = e.indexOf(i) >= 0) && t.getExtension(i);
              }
              return r;
            },
          },
          {
            key: 'createShader',
            value: function(t, e, r) {
              var n = t.createShader(e);
              return (
                t.shaderSource(n, r),
                t.compileShader(n),
                t.getShaderParameter(n, t.COMPILE_STATUS)
                  ? n
                  : (console.log(t.getShaderInfoLog(n)), null)
              );
            },
          },
          {
            key: 'createTexture',
            value: function(t, e, r, n) {
              var i = t.createTexture(),
                o = new Image(),
                s = function() {
                  (o.onload = null),
                    t.bindTexture(t.TEXTURE_2D, i),
                    (n || {}).sdf
                      ? (t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !1),
                        t.texImage2D(
                          t.TEXTURE_2D,
                          0,
                          t.LUMINANCE,
                          t.LUMINANCE,
                          t.UNSIGNED_BYTE,
                          o
                        ),
                        t.texParameteri(
                          t.TEXTURE_2D,
                          t.TEXTURE_MAG_FILTER,
                          t.LINEAR
                        ),
                        t.texParameteri(
                          t.TEXTURE_2D,
                          t.TEXTURE_MIN_FILTER,
                          t.LINEAR
                        ),
                        t.texParameteri(
                          t.TEXTURE_2D,
                          t.TEXTURE_WRAP_S,
                          t.CLAMP_TO_EDGE
                        ),
                        t.texParameteri(
                          t.TEXTURE_2D,
                          t.TEXTURE_WRAP_T,
                          t.CLAMP_TO_EDGE
                        ))
                      : (t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !0),
                        t.texImage2D(
                          t.TEXTURE_2D,
                          0,
                          t.RGBA,
                          t.RGBA,
                          t.UNSIGNED_BYTE,
                          o
                        ),
                        t.texParameteri(
                          t.TEXTURE_2D,
                          t.TEXTURE_MAG_FILTER,
                          t.LINEAR
                        ),
                        t.texParameteri(
                          t.TEXTURE_2D,
                          t.TEXTURE_MIN_FILTER,
                          t.LINEAR
                        ),
                        t.texParameteri(
                          t.TEXTURE_2D,
                          t.TEXTURE_WRAP_S,
                          t.CLAMP_TO_EDGE
                        ),
                        t.texParameteri(
                          t.TEXTURE_2D,
                          t.TEXTURE_WRAP_T,
                          t.CLAMP_TO_EDGE
                        )),
                    t.bindTexture(t.TEXTURE_2D, null),
                    r && r();
                };
              return (
                (o.onload = s),
                (o.src = e),
                o.naturalWidth && o.naturalHeight && s(),
                (i.image = o),
                i
              );
            },
          },
          {
            key: 'uniformColor',
            value: function(t, e, r) {
              t.uniform4f(e, r.r, r.g, r.b, r.a);
            },
          },
          {
            key: 'ortho',
            value: function(t, e, r, n, i, o) {
              var s = 1 / (t - e),
                a = 1 / (r - n),
                u = 1 / (i - o),
                f = new Float32Array(16);
              return (
                (f[0] = -2 * s),
                (f[1] = 0),
                (f[2] = 0),
                (f[3] = 0),
                (f[4] = 0),
                (f[5] = -2 * a),
                (f[6] = 0),
                (f[7] = 0),
                (f[8] = 0),
                (f[9] = 0),
                (f[10] = 2 * u),
                (f[11] = 0),
                (f[12] = (t + e) * s),
                (f[13] = (n + r) * a),
                (f[14] = (o + i) * u),
                (f[15] = 1),
                f
              );
            },
          },
        ]),
        t
      );
    })();
    e.default = i;
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.getPartitionStyle = e.partitionByStyle = void 0);
    var n = (function(t) {
      return t && t.__esModule ? t : { default: t };
    })(r(6));
    (e.partitionByStyle = function(t) {
      for (var e = {}, r = {}, n = 0; n < t.length; n++) {
        var i = t[n],
          o = (e[i.style] = e[i.style] || []);
        void 0 === o.idx && (o.idx = []),
          o.idx.push(n),
          (i.sI = r[i.style] = void 0 === r[i.style] ? 0 : r[i.style] + 1),
          o.push(i);
      }
      return e;
    }),
      (e.getPartitionStyle = function(t, e, r) {
        var i = {},
          o = function(t) {
            if (t) for (var e in t) i[e] = t[e];
          };
        return (
          o(e),
          o(t),
          r && (o(e[r]), t && o(t[r])),
          (i.color = i.color && new n.default(i.color)),
          (i.animateColor = i.animateColor && new n.default(i.animateColor)),
          i
        );
      });
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (function() {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      return function(e, r, n) {
        return r && t(e.prototype, r), n && t(e, n), e;
      };
    })();
    var i = (function() {
      function t() {
        !(function(t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, t);
      }
      return (
        n(t, null, [
          {
            key: 'edgeSource',
            value: function(t) {
              if (t.source.source) {
                var e = this.edgeSource(t.source),
                  r = this.edgeTarget(t.source);
                return {
                  x: (e.x + r.x) / 2,
                  y: (e.y + r.y) / 2,
                  uniqid: t.uniqid,
                  index: t.index,
                  is_edge: !0,
                  e: t.source,
                };
              }
              return t.source;
            },
          },
          {
            key: 'edgeTarget',
            value: function(t) {
              if (t.target.source) {
                var e = this.edgeSource(t.target),
                  r = this.edgeTarget(t.target);
                return {
                  x: (e.x + r.x) / 2,
                  y: (e.y + r.y) / 2,
                  uniqid: t.uniqid,
                  index: t.index,
                  is_edge: !0,
                  e: t.target,
                };
              }
              return t.target;
            },
          },
          {
            key: 'getCurveShift',
            value: function(t, e) {
              if ((((e = e || {}).x = e.y = e.cx = e.cy = 0), !t)) return e;
              if (t.t && t.t >= 1)
                if (t.t >= 2) {
                  var r = this.edgeSource(t).y < 0.5 ? 1 : -1;
                  (e.cx = 1.25 * r), (e.cy = 0);
                } else {
                  var n = this.edgeSource(t),
                    i = this.edgeTarget(t);
                  (e.x = n.x - i.x), (e.y = n.y - i.y);
                }
              return e;
            },
          },
        ]),
        t
      );
    })();
    e.default = i;
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    e.default = function t(e) {
      if (
        ((function(t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, t),
        (this.r = this.g = this.b = 0),
        (this.a = 1),
        e instanceof t)
      )
        (this.r = e.r), (this.g = e.g), (this.b = e.b), (this.a = e.a);
      else if (arguments.length >= 3)
        (this.r = arguments[0]),
          (this.g = arguments[1]),
          (this.b = arguments[2]),
          arguments.length > 3 && (this.a = arguments[3]);
      else if (/^rgba\((\d+), ?(\d+), ?(\d+), ?(\d+)\)$/i.test(e)) {
        e = /^rgba\((\d+), ?(\d+), ?(\d+), ?(\d+)\)$/i.exec(e);
        var r = function(t) {
          return parseInt(t, 10) / 255;
        };
        (this.r = r(e[1])),
          (this.g = r(e[2])),
          (this.b = r(e[3])),
          (this.a = r(e[4]));
      } else if (/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.test(e)) {
        e = /^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.exec(e);
        var n = function(t) {
          return parseInt(t, 10) / 255;
        };
        (this.r = n(e[1])), (this.g = n(e[2])), (this.b = n(e[3]));
      } else if (/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.test(e)) {
        e = /^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.exec(e);
        var i = function(t) {
          return parseInt(t, 10) / 100;
        };
        (this.r = i(e[1])), (this.g = i(e[2])), (this.b = i(e[3]));
      } else
        /^\#([0-9a-f]{6})$/i.test(e) &&
          ((e = parseInt(e.substring(1), 16)),
          (this.r = ((e >> 16) & 255) / 255),
          (this.g = ((e >> 8) & 255) / 255),
          (this.b = (255 & e) / 255));
    };
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      i = g(r(15)),
      o = g(r(17)),
      s = g(r(18)),
      a = g(r(19)),
      u = g(r(20)),
      f = g(r(21)),
      h = g(r(22)),
      c = g(r(23)),
      l = g(r(24)),
      d = g(r(25)),
      v = g(r(26));
    function g(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var m = (function() {
      function t() {
        !(function(t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, t);
      }
      return (
        n(t, null, [
          {
            key: 'normalize',
            value: function(t, e) {
              var r = void 0,
                n = void 0,
                i = t.length;
              if (e) (r = e.minX), (n = e.minY);
              else {
                var o = -1 / 0,
                  s = -1 / 0;
                r = n = 1 / 0;
                for (var a = 0; a < i; a++) {
                  var u = t[a];
                  (o = Math.max(o, u.x)),
                    (s = Math.max(s, u.y)),
                    (r = Math.min(r, u.x)),
                    (n = Math.min(n, u.y));
                }
                e = { maxX: o, maxY: s, minX: r, minY: n };
              }
              for (
                var f = r !== e.maxX ? 1 / (e.maxX - r) : ((r -= 0.5), 1),
                  h = n !== e.maxY ? 1 / (e.maxY - n) : ((n -= 0.5), 1),
                  c = 0;
                c < i;
                c++
              ) {
                var l = t[c];
                (l.x = f * (l.x - r)), (l.y = h * (l.y - n));
              }
              return e;
            },
          },
          {
            key: 'force',
            get: function() {
              return i.default;
            },
          },
          {
            key: 'random',
            get: function() {
              return o.default;
            },
          },
          {
            key: 'circular',
            get: function() {
              return s.default;
            },
          },
          {
            key: 'tree',
            get: function() {
              return a.default;
            },
          },
          {
            key: 'tree2',
            get: function() {
              return u.default;
            },
          },
          {
            key: 'hierarchical',
            get: function() {
              return f.default;
            },
          },
          {
            key: 'spectral',
            get: function() {
              return h.default;
            },
          },
          {
            key: 'spectral2',
            get: function() {
              return c.default;
            },
          },
          {
            key: 'hive',
            get: function() {
              return l.default;
            },
          },
          {
            key: 'grid',
            get: function() {
              return d.default;
            },
          },
          {
            key: 'versinus',
            get: function() {
              return v.default;
            },
          },
        ]),
        t
      );
    })();
    e.default = m;
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      i = u(r(9)),
      o = u(r(5)),
      s = (u(r(1)), r(4)),
      a = r(27);
    function u(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function f(t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    }
    var h = {};
    function c(t, e, r, n) {
      o.default.getCurveShift(r, n);
      var i,
        s,
        u = void 0,
        f = void 0;
      (u = -n.y), (f = n.x * t.aspect2);
      var h = u * t.width * u * t.width + f * t.height * f * t.height;
      if ((0, a.eq)(h, 0)) (u = 0), (f = 0);
      else {
        var c = Math.sqrt(h);
        (u *= (0.25 * t.curveExc * e) / c), (f *= (0.25 * t.curveExc * e) / c);
      }
      var l = (2.5 * t.nodeSize * e) / t.width,
        d = (2.5 * t.nodeSize * e) / t.height;
      (i = 0.5 * -n.cy * l), (s = 0.5 * n.cx * d), (n.x = u + i), (n.y = f + s);
    }
    var l = (function() {
        function t(e) {
          f(this, t), (this.e = e);
        }
        return (
          n(t, [
            {
              key: 'getBBox',
              value: function() {
                return [
                  this.e.x - a.EPS,
                  this.e.y - a.EPS,
                  this.e.x + a.EPS,
                  this.e.y + a.EPS,
                ];
              },
            },
            {
              key: 'intersectsRect',
              value: function(t, e, r, n) {
                return (0, a.pointInRect)(this.e.x, this.e.y, t, e, r, n);
              },
            },
            {
              key: 'dist2',
              value: function(t, e, r) {
                return (0, a.distance2)(t, e, this.e.x, this.e.y);
              },
            },
            {
              key: 'isNode',
              get: function() {
                return !0;
              },
            },
          ]),
          t
        );
      })(),
      d = (function() {
        function t(e, r, n, i, o, s) {
          f(this, t),
            (this.e = e),
            (this.pos = r),
            (this.style = n),
            (this.fontSize = i),
            (this.isSDF = o),
            (this.getLabelSize = s);
        }
        return (
          n(t, [
            {
              key: 'getTextPos',
              value: function(t, e) {
                var r = this.e.x,
                  n = this.e.y,
                  i = void 0,
                  o = void 0,
                  s = void 0,
                  a = void 0;
                (i = s = r), (o = a = n);
                var u = this.isSDF
                    ? this.getLabelSize(t, this.style.label || {})
                    : this.fontSize,
                  f = u / this.fontSize;
                0 === u && (f = 0);
                var h = 0.5 * t.nodeSize,
                  c = [10, 10, -10, -10];
                return (
                  this.pos.forEach(function(u) {
                    var l =
                      (2 *
                        (function(t, e) {
                          return e < t ? 0 : 1;
                        })(n, 0.5) -
                        1) *
                      h;
                    (i = r + (e * (u.dx * f)) / t.width / 2),
                      (o = n + (e * (u.dy * f + l)) / t.height / 2),
                      (s = r + (e * ((u.dx + u.width) * f)) / t.width / 2),
                      (a =
                        n + (e * ((u.dy + u.height) * f + l)) / t.height / 2),
                      (c[0] = Math.min(i, c[0])),
                      (c[1] = Math.min(o, c[1])),
                      (c[2] = Math.max(s, c[2])),
                      (c[3] = Math.max(a, c[3]));
                  }),
                  c
                );
              },
            },
            {
              key: 'getBBox',
              value: function(t) {
                var e = this.getTextPos(t, 1);
                return (
                  (e[0] = Math.min(e[0], this.e.x)),
                  (e[1] = Math.min(e[1], this.e.y)),
                  (e[2] = Math.max(e[2], this.e.x)),
                  (e[3] = Math.max(e[3], this.e.y)),
                  e
                );
              },
            },
            {
              key: 'intersectsRect',
              value: function(t, e, r, n, i, o) {
                var s = this.getTextPos(i, o);
                return (0, a.rectIntersectsRect)(
                  t,
                  e,
                  r,
                  n,
                  s[0],
                  s[1],
                  s[2],
                  s[3]
                );
              },
            },
            {
              key: 'dist2',
              value: function(t, e, r, n) {
                var i = this.getTextPos(r, n);
                return (0, a.pointInRect)(t, e, i[0], i[1], i[2], i[3])
                  ? 0
                  : Math.min(
                      (0, a.distance2)(i[0], i[1]),
                      (0, a.distance2)(i[2], i[3]),
                      (0, a.distance2)(i[0], i[3]),
                      (0, a.distance2)(i[2], i[1]),
                      (0, a.pDistance2)(t, e, i[0], i[1], i[2], i[1]),
                      (0, a.pDistance2)(t, e, i[0], i[3], i[2], i[3]),
                      (0, a.pDistance2)(t, e, i[0], i[1], i[0], i[3]),
                      (0, a.pDistance2)(t, e, i[2], i[1], i[2], i[3])
                    );
              },
            },
            {
              key: 'isLabel',
              get: function() {
                return !0;
              },
            },
          ]),
          t
        );
      })(),
      v = (function() {
        function t(e) {
          f(this, t), (this.e = e);
        }
        return (
          n(t, [
            {
              key: 'getPoints',
              value: function(t, e) {
                var r = void 0,
                  n = void 0,
                  i = void 0,
                  s = void 0,
                  a = o.default.edgeSource(this.e),
                  u = o.default.edgeTarget(this.e);
                return (
                  (r = a.x),
                  (n = a.y),
                  (i = u.x),
                  (s = u.y),
                  c(t, e, a.e, h),
                  (r += h.x),
                  (n += h.y),
                  c(t, e, u.e, h),
                  [r, n, (i += h.x), (s += h.y)]
                );
              },
            },
            {
              key: 'getBBox',
              value: function(t, e) {
                var r = this.getPoints(t, e);
                return [
                  Math.min(r[0], r[2]),
                  Math.min(r[1], r[3]),
                  Math.max(r[0], r[2]),
                  Math.max(r[1], r[3]),
                ];
              },
            },
            {
              key: 'intersectsRect',
              value: function(t, e, r, n, i, o) {
                var s = this.getPoints(i, o);
                return (0, a.lineIntersectsRect)(
                  s[0],
                  s[1],
                  s[2],
                  s[3],
                  t,
                  e,
                  r,
                  n
                );
              },
            },
            {
              key: 'dist2',
              value: function(t, e, r, n) {
                var i = this.getPoints(r, n);
                return (0, a.pDistance2)(t, e, i[0], i[1], i[2], i[3]);
              },
            },
            {
              key: 'isEdge',
              get: function() {
                return !0;
              },
            },
          ]),
          t
        );
      })(),
      g = (function() {
        function t(e) {
          f(this, t), (this.e = e);
        }
        return (
          n(t, [
            {
              key: 'getBezierPoints',
              value: function(t, e) {
                var r,
                  n = void 0,
                  i = void 0;
                (n = (r = o.default.edgeSource(this.e)).x), (i = r.y);
                var s = 2.5 * t.nodeSize * e,
                  a = s / t.width / 2,
                  u = s / t.height / 2,
                  f = r.y < 0.5 ? 1 : -1;
                return (
                  c(t, e, r.e, h),
                  [
                    (n += h.x),
                    (i += h.y),
                    n + 1 * a,
                    i + u * f,
                    n,
                    i + 1.25 * u * f,
                    n - 1 * a,
                    i + u * f,
                  ]
                );
              },
            },
            {
              key: 'getBBox',
              value: function(t, e) {
                var r = this.getBezierPoints(t, e);
                return (0, a.getBBFromPoints)(r);
              },
            },
            {
              key: 'intersectsRect',
              value: function(t, e, r, n, i, o, s) {
                var u = this.getBezierPoints(i, o);
                return (
                  (0, a.bezierIntersectsRect)(
                    u[0],
                    u[1],
                    u[2],
                    u[3],
                    u[4],
                    u[5],
                    t,
                    e,
                    r,
                    n
                  ) ||
                  (0, a.bezierIntersectsRect)(
                    u[2],
                    u[3],
                    u[4],
                    u[5],
                    u[6],
                    u[7],
                    t,
                    e,
                    r,
                    n
                  )
                );
              },
            },
            {
              key: 'dist2',
              value: function(t, e, r, n) {
                var i = this.getBezierPoints(r, n),
                  o = (0, a.distance2ToBezier)(
                    t,
                    e,
                    i[0],
                    i[1],
                    i[2],
                    i[3],
                    i[4],
                    i[5]
                  ),
                  s = (0, a.distance2ToBezier)(
                    t,
                    e,
                    i[2],
                    i[3],
                    i[4],
                    i[5],
                    i[6],
                    i[7]
                  );
                return Math.min(o, s);
              },
            },
            {
              key: 'isEdge',
              get: function() {
                return !0;
              },
            },
          ]),
          t
        );
      })(),
      m = (function() {
        function t(e) {
          f(this, t), (this.e = e);
        }
        return (
          n(t, [
            {
              key: 'getBezierPoints',
              value: function(t, e, r) {
                var n = void 0,
                  i = void 0,
                  s = void 0,
                  a = void 0,
                  u = o.default.edgeSource(this.e),
                  f = o.default.edgeTarget(this.e);
                (n = u.x), (s = u.y), (i = f.x), (a = f.y);
                var l = r(u, f),
                  d = l.y,
                  v = t.aspect2 * -l.x,
                  g = t.width * d,
                  m = t.height * v,
                  p = 2 * Math.sqrt(g * g + m * m);
                return (
                  (d *= (t.curveExc * e) / p),
                  (v *= (t.curveExc * e) / p),
                  c(t, e, u.e, h),
                  (n += h.x),
                  (s += h.y),
                  c(t, e, f.e, h),
                  [
                    n,
                    s,
                    (n + (i += h.x)) / 2 + d,
                    (s + (a += h.y)) / 2 + v,
                    i,
                    a,
                  ]
                );
              },
            },
            {
              key: 'intersectsRect',
              value: function(t, e, r, n, i, o, s) {
                var u = this.getBezierPoints(i, o, s);
                return (0, a.bezierIntersectsRect)(
                  u[0],
                  u[1],
                  u[2],
                  u[3],
                  u[4],
                  u[5],
                  t,
                  e,
                  r,
                  n
                );
              },
            },
            {
              key: 'getBBox',
              value: function(t, e, r) {
                var n = this.getBezierPoints(t, e, r);
                return (0, a.getBBFromPoints)(n);
              },
            },
            {
              key: 'dist2',
              value: function(t, e, r, n, i) {
                var o = this.getBezierPoints(r, n, i);
                return (0, a.distance2ToBezier)(
                  t,
                  e,
                  o[0],
                  o[1],
                  o[2],
                  o[3],
                  o[4],
                  o[5]
                );
              },
            },
            {
              key: 'isEdge',
              get: function() {
                return !0;
              },
            },
          ]),
          t
        );
      })();
    function p(t, e) {
      return t.dist2 - e.dist2;
    }
    var y = { nodes: l, lines: v, circles: g, curves: m, labels: d },
      _ = (function() {
        function t(e, r, n, o, a, u, h, c, p, y, _, x, w, b, M) {
          f(this, t);
          var E = e.size || 1;
          (e.size = 1), (this.texts = r), (this.normalize = x);
          var S = (this.types = {
              nodes: [],
              lines: [],
              circles: [],
              curves: [],
              labels: [],
            }),
            T = 0,
            P = [],
            A = function(t, r, n) {
              return (r[n] = t.getBBox(e, 1, x)), r[n].push(t), t;
            };
          o.forEach(function(t) {
            S.nodes.push(A(new l(t), P, T++));
          }),
            u.forEach(function(t) {
              S.lines.push(A(new v(t), P, T++));
            }),
            y.forEach(function(t) {
              S.circles.push(A(new g(t), P, T++));
            }),
            c.forEach(function(t) {
              S.curves.push(A(new m(t), P, T++));
            });
          var k = {},
            R = {},
            z = function(t) {
              var i = a[t],
                o = (0, s.getPartitionStyle)(n.styles[t], w, 'label'),
                u = r.getEngine(o.font);
              u.setFont(o.font);
              var f = u.fontSize,
                h = u.isSDF,
                c = k[t] || (k[t] = []),
                l = R[t] || (R[t] = 0);
              (e.size = M(e, o.label || {})),
                i.forEach(function(t) {
                  var e = u.get(t.label, t.x, t.y);
                  S.labels.push(A(new d(t, e, o, f, h, b), c, l++));
                }),
                (R[t] = l);
            };
          for (var C in a) z(C);
          for (var C in ((this.rbushtree_s = {}), k)) {
            (this.rbushtree_s[C] = (0, i.default)()).load(k[C]);
          }
          (this.rbushtree = (0, i.default)()),
            this.rbushtree.load(P),
            (e.size = E);
        }
        return (
          n(t, [
            {
              key: '_tryAddEl',
              value: function(t, e, r, n, i, o) {
                n &&
                  e.isNode &&
                  t.nodes.push({ node: e.e, dist: Math.sqrt(r), dist2: r }),
                  i &&
                    e.isEdge &&
                    t.edges.push({ edge: e.e, dist: Math.sqrt(r), dist2: r }),
                  o &&
                    e.isLabel &&
                    t.labels.push({ label: e.e, dist: Math.sqrt(r), dist2: r });
              },
            },
            {
              key: 'findArea',
              value: function(t, e, r, n, i, o, s, u, f) {
                if (e > n) {
                  var h = e;
                  (e = n), (n = h);
                }
                if (r > i) {
                  var c = r;
                  (r = i), (i = c);
                }
                var l = {};
                u && (l.edges = []), s && (l.nodes = []), f && (l.labels = []);
                var d = (e + n) / 2,
                  v = (r + i) / 2,
                  g = this.rbushtree.search([
                    e - a.EPS,
                    r - a.EPS,
                    n + a.EPS,
                    i + a.EPS,
                  ]);
                if (f)
                  for (var m in this.rbushtree_s)
                    g = g.concat(
                      this.rbushtree_s[m].search([
                        e - a.EPS,
                        r - a.EPS,
                        n + a.EPS,
                        i + a.EPS,
                      ])
                    );
                for (var y = 0; y < g.length; y++) {
                  var _ = g[y][4],
                    x = _.dist2(d, v, t, o, this.normalize, this.texts);
                  _.intersectsRect(
                    e,
                    r,
                    n,
                    i,
                    t,
                    o,
                    this.normalize,
                    this.texts
                  ) && this._tryAddEl(l, _, x, s, u, f);
                }
                for (var w in l) l[w].sort(p);
                return l;
              },
            },
            {
              key: 'find',
              value: function(t, e, r, n, i, o, s, a) {
                var u = {};
                s && (u.edges = []), o && (u.nodes = []), a && (u.labels = []);
                var f = n,
                  h = n,
                  c = n * n,
                  l = this.rbushtree.search([e - f, r - h, e + f, r + h]);
                if (a)
                  for (var d in this.rbushtree_s)
                    l = l.concat(
                      this.rbushtree_s[d].search([e - f, r - h, e + f, r + h])
                    );
                for (var v = 0; v < l.length; v++) {
                  var g = l[v][4],
                    m = g.dist2(e, r, t, i, this.normalize, this.texts);
                  m > c || this._tryAddEl(u, g, m, o, s, a);
                }
                for (var y in u) u[y].sort(p);
                return u;
              },
            },
            {
              key: 'update',
              value: function(t, e, r, n) {
                this.rbushtree.remove(this.types[e][r]);
                var i = new y[e](n),
                  o = i.getBBox(t, 1, this.normalize, this.texts);
                o.push(i), this.rbushtree.insert((this.types[e][r] = o));
              },
            },
          ]),
          t
        );
      })();
    e.default = _;
  },
  function(t, e, r) {
    'use strict';
    function n(t, e) {
      if (!(this instanceof n)) return new n(t, e);
      (this._maxEntries = Math.max(4, t || 9)),
        (this._minEntries = Math.max(2, Math.ceil(0.4 * this._maxEntries))),
        e && this._initFormat(e),
        this.clear();
    }
    function i(t, e) {
      t.bbox = o(t, 0, t.children.length, e);
    }
    function o(t, e, r, n) {
      for (var i, o = s(), u = e; u < r; u++)
        (i = t.children[u]), a(o, t.leaf ? n(i) : i.bbox);
      return o;
    }
    function s() {
      return [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    }
    function a(t, e) {
      return (
        (t[0] = Math.min(t[0], e[0])),
        (t[1] = Math.min(t[1], e[1])),
        (t[2] = Math.max(t[2], e[2])),
        (t[3] = Math.max(t[3], e[3])),
        t
      );
    }
    function u(t, e) {
      return t.bbox[0] - e.bbox[0];
    }
    function f(t, e) {
      return t.bbox[1] - e.bbox[1];
    }
    function h(t) {
      return (t[2] - t[0]) * (t[3] - t[1]);
    }
    function c(t) {
      return t[2] - t[0] + (t[3] - t[1]);
    }
    function l(t, e) {
      return (
        (Math.max(e[2], t[2]) - Math.min(e[0], t[0])) *
        (Math.max(e[3], t[3]) - Math.min(e[1], t[1]))
      );
    }
    function d(t, e) {
      var r = Math.max(t[0], e[0]),
        n = Math.max(t[1], e[1]),
        i = Math.min(t[2], e[2]),
        o = Math.min(t[3], e[3]);
      return Math.max(0, i - r) * Math.max(0, o - n);
    }
    function v(t, e) {
      return t[0] <= e[0] && t[1] <= e[1] && e[2] <= t[2] && e[3] <= t[3];
    }
    function g(t, e) {
      return e[0] <= t[2] && e[1] <= t[3] && e[2] >= t[0] && e[3] >= t[1];
    }
    function m(t, e, r, n, i) {
      for (var o, s = [e, r]; s.length; )
        (r = s.pop()) - (e = s.pop()) <= n ||
          (p(t, e, r, (o = e + Math.ceil((r - e) / n / 2) * n), i),
          s.push(e, o, o, r));
    }
    function p(t, e, r, n, i) {
      for (var o, s, a, u, f, h, c; r > e; ) {
        for (
          r - e > 600 &&
            ((o = r - e + 1),
            (s = n - e + 1),
            (a = Math.log(o)),
            (u = 0.5 * Math.exp((2 * a) / 3)),
            (f =
              0.5 *
              Math.sqrt((a * u * (o - u)) / o) *
              (s - o / 2 < 0 ? -1 : 1)),
            p(
              t,
              Math.max(e, Math.floor(n - (s * u) / o + f)),
              Math.min(r, Math.floor(n + ((o - s) * u) / o + f)),
              n,
              i
            )),
            h = t[n],
            s = e,
            c = r,
            y(t, e, n),
            i(t[r], h) > 0 && y(t, e, r);
          s < c;

        ) {
          for (y(t, s, c), s++, c--; i(t[s], h) < 0; ) s++;
          for (; i(t[c], h) > 0; ) c--;
        }
        0 === i(t[e], h) ? y(t, e, c) : y(t, ++c, r),
          c <= n && (e = c + 1),
          n <= c && (r = c - 1);
      }
    }
    function y(t, e, r) {
      var n = t[e];
      (t[e] = t[r]), (t[r] = n);
    }
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (n.prototype = {
        all: function() {
          return this._all(this.data, []);
        },
        search: function(t) {
          var e = this.data,
            r = [],
            n = this.toBBox;
          if (!g(t, e.bbox)) return r;
          for (var i, o, s, a, u = []; e; ) {
            for (i = 0, o = e.children.length; i < o; i++)
              (s = e.children[i]),
                g(t, (a = e.leaf ? n(s) : s.bbox)) &&
                  (e.leaf ? r.push(s) : v(t, a) ? this._all(s, r) : u.push(s));
            e = u.pop();
          }
          return r;
        },
        collides: function(t) {
          var e = this.data,
            r = this.toBBox;
          if (!g(t, e.bbox)) return !1;
          for (var n, i, o, s, a = []; e; ) {
            for (n = 0, i = e.children.length; n < i; n++)
              if (((o = e.children[n]), g(t, (s = e.leaf ? r(o) : o.bbox)))) {
                if (e.leaf || v(t, s)) return !0;
                a.push(o);
              }
            e = a.pop();
          }
          return !1;
        },
        load: function(t) {
          if (!t || !t.length) return this;
          if (t.length < this._minEntries) {
            for (var e = 0, r = t.length; e < r; e++) this.insert(t[e]);
            return this;
          }
          var n = this._build(t.slice(), 0, t.length - 1, 0);
          if (this.data.children.length)
            if (this.data.height === n.height) this._splitRoot(this.data, n);
            else {
              if (this.data.height < n.height) {
                var i = this.data;
                (this.data = n), (n = i);
              }
              this._insert(n, this.data.height - n.height - 1, !0);
            }
          else this.data = n;
          return this;
        },
        insert: function(t) {
          return t && this._insert(t, this.data.height - 1), this;
        },
        clear: function() {
          return (
            (this.data = { children: [], height: 1, bbox: s(), leaf: !0 }), this
          );
        },
        remove: function(t) {
          if (!t) return this;
          for (
            var e, r, n, i, o = this.data, s = this.toBBox(t), a = [], u = [];
            o || a.length;

          ) {
            if (
              (o ||
                ((o = a.pop()), (r = a[a.length - 1]), (e = u.pop()), (i = !0)),
              o.leaf && -1 !== (n = o.children.indexOf(t)))
            )
              return (
                o.children.splice(n, 1), a.push(o), this._condense(a), this
              );
            i || o.leaf || !v(o.bbox, s)
              ? r
                ? (e++, (o = r.children[e]), (i = !1))
                : (o = null)
              : (a.push(o), u.push(e), (e = 0), (r = o), (o = o.children[0]));
          }
          return this;
        },
        toBBox: function(t) {
          return t;
        },
        compareMinX: function(t, e) {
          return t[0] - e[0];
        },
        compareMinY: function(t, e) {
          return t[1] - e[1];
        },
        toJSON: function() {
          return this.data;
        },
        fromJSON: function(t) {
          return (this.data = t), this;
        },
        _all: function(t, e) {
          for (var r = []; t; )
            t.leaf ? e.push.apply(e, t.children) : r.push.apply(r, t.children),
              (t = r.pop());
          return e;
        },
        _build: function(t, e, r, n) {
          var o,
            s = r - e + 1,
            a = this._maxEntries;
          if (s <= a)
            return (
              i(
                (o = {
                  children: t.slice(e, r + 1),
                  height: 1,
                  bbox: null,
                  leaf: !0,
                }),
                this.toBBox
              ),
              o
            );
          n ||
            ((n = Math.ceil(Math.log(s) / Math.log(a))),
            (a = Math.ceil(s / Math.pow(a, n - 1)))),
            (o = { children: [], height: n, bbox: null, leaf: !1 });
          var u,
            f,
            h,
            c,
            l = Math.ceil(s / a),
            d = l * Math.ceil(Math.sqrt(a));
          for (m(t, e, r, d, this.compareMinX), u = e; u <= r; u += d)
            for (
              m(t, u, (h = Math.min(u + d - 1, r)), l, this.compareMinY), f = u;
              f <= h;
              f += l
            )
              (c = Math.min(f + l - 1, h)),
                o.children.push(this._build(t, f, c, n - 1));
          return i(o, this.toBBox), o;
        },
        _chooseSubtree: function(t, e, r, n) {
          for (
            var i, o, s, a, u, f, c, d;
            n.push(e), !e.leaf && n.length - 1 !== r;

          ) {
            for (c = d = 1 / 0, i = 0, o = e.children.length; i < o; i++)
              (u = h((s = e.children[i]).bbox)),
                (f = l(t, s.bbox) - u) < d
                  ? ((d = f), (c = u < c ? u : c), (a = s))
                  : f === d && u < c && ((c = u), (a = s));
            e = a || e.children[0];
          }
          return e;
        },
        _insert: function(t, e, r) {
          var n = this.toBBox,
            i = r ? t.bbox : n(t),
            o = [],
            s = this._chooseSubtree(i, this.data, e, o);
          for (
            s.children.push(t), a(s.bbox, i);
            e >= 0 && o[e].children.length > this._maxEntries;

          )
            this._split(o, e), e--;
          this._adjustParentBBoxes(i, o, e);
        },
        _split: function(t, e) {
          var r = t[e],
            n = r.children.length,
            o = this._minEntries;
          this._chooseSplitAxis(r, o, n);
          var s = this._chooseSplitIndex(r, o, n),
            a = {
              children: r.children.splice(s, r.children.length - s),
              height: r.height,
              bbox: null,
              leaf: !1,
            };
          r.leaf && (a.leaf = !0),
            i(r, this.toBBox),
            i(a, this.toBBox),
            e ? t[e - 1].children.push(a) : this._splitRoot(r, a);
        },
        _splitRoot: function(t, e) {
          (this.data = {
            children: [t, e],
            height: t.height + 1,
            bbox: null,
            leaf: !1,
          }),
            i(this.data, this.toBBox);
        },
        _chooseSplitIndex: function(t, e, r) {
          var n, i, s, a, u, f, c, l;
          for (f = c = 1 / 0, n = e; n <= r - e; n++)
            (a = d(
              (i = o(t, 0, n, this.toBBox)),
              (s = o(t, n, r, this.toBBox))
            )),
              (u = h(i) + h(s)),
              a < f
                ? ((f = a), (l = n), (c = u < c ? u : c))
                : a === f && u < c && ((c = u), (l = n));
          return l;
        },
        _chooseSplitAxis: function(t, e, r) {
          var n = t.leaf ? this.compareMinX : u,
            i = t.leaf ? this.compareMinY : f;
          this._allDistMargin(t, e, r, n) < this._allDistMargin(t, e, r, i) &&
            t.children.sort(n);
        },
        _allDistMargin: function(t, e, r, n) {
          t.children.sort(n);
          var i,
            s,
            u = this.toBBox,
            f = o(t, 0, e, u),
            h = o(t, r - e, r, u),
            l = c(f) + c(h);
          for (i = e; i < r - e; i++)
            (s = t.children[i]), a(f, t.leaf ? u(s) : s.bbox), (l += c(f));
          for (i = r - e - 1; i >= e; i--)
            (s = t.children[i]), a(h, t.leaf ? u(s) : s.bbox), (l += c(h));
          return l;
        },
        _adjustParentBBoxes: function(t, e, r) {
          for (var n = r; n >= 0; n--) a(e[n].bbox, t);
        },
        _condense: function(t) {
          for (var e, r = t.length - 1; r >= 0; r--)
            0 === t[r].children.length
              ? r > 0
                ? (e = t[r - 1].children).splice(e.indexOf(t[r]), 1)
                : this.clear()
              : i(t[r], this.toBBox);
        },
        _initFormat: function(t) {
          var e = ['return a', ' - b', ';'];
          (this.compareMinX = new Function('a', 'b', e.join(t[0]))),
            (this.compareMinY = new Function('a', 'b', e.join(t[1]))),
            (this.toBBox = new Function(
              'a',
              'return [a' + t.join(', a') + '];'
            ));
        },
      }),
      (e.default = n);
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (function(t) {
      return t && t.__esModule ? t : { default: t };
    })(r(11));
    var i = function(t, e) {
      var r,
        i,
        o,
        s = new n.default(t, e),
        a = [],
        u = {};
      t.addEventListener(
        'contextmenu',
        (i = function(t) {
          if (a.length > 0) {
            var e = a.pop();
            (u = e), s.set(u.nodes, u.edges), s.draw();
          }
          t.preventDefault();
        })
      ),
        t.addEventListener(
          'click',
          (o = function(e) {
            var n = t.getBoundingClientRect(),
              i = e.clientX - n.left,
              o = e.clientY - n.top,
              f = s.getLayerCoords({ radius: 5, x: i, y: o }),
              h = s.find(f.x, f.y, f.radius, !0, !1);
            if (h.nodes.length > 0) {
              var c = h.nodes[0].node,
                l = c.layout || r;
              if (
                (c.__computedLayout ? (l = void 0) : (c.__computedLayout = !0),
                c.nodes && c.edges)
              ) {
                var d = c.nodes,
                  v = c.edges;
                a.push(u),
                  (u = { nodes: d, edges: v }),
                  s.set(u.nodes, u.edges, l),
                  s.draw();
              }
            }
          })
        ),
        (this.remove = function() {
          t.removeEventListener('contextmenu', i),
            t.removeEventListener('click', o),
            s.remove();
        }),
        (this.set = function(t, e, n) {
          (u = { nodes: t, edges: e }),
            (a = []),
            (r = n),
            s.set.apply(s, arguments);
        });
      var f = this;
      [
        'find',
        'findArea',
        'getLayerCoords',
        'draw',
        'resetView',
        'setViewport',
        'update',
        'resetView',
      ].forEach(function(t) {
        !(function(t, e) {
          e[t] = function() {
            return s[t].apply(s, arguments);
          };
        })(t, f);
      });
    };
    (window.ccNetVizMultiLevel = i), (e.default = i);
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = g(r(12)),
      i = g(r(7)),
      o = g(r(3)),
      s = g(r(6)),
      a = g(r(1)),
      u = g(r(55)),
      f = g(r(56)),
      h = g(r(57)),
      c = g(r(64)),
      l = g(r(65)),
      d = g(r(8)),
      v = r(4);
    function g(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var m = document.createElement('canvas');
    function p(t) {
      var e = { depth: !1, antialias: !1 };
      return t.getContext('webgl', e) || t.getContext('experimental-webgl', e);
    }
    var y = 0;
    function _(t) {
      void 0 !== t.__uniqid
        ? ((t.uniqid = t.__uniqid), delete t.__uniqid)
        : void 0 === t.uniqid && (t.uniqid = ++y);
    }
    function x(t, e, r) {
      var n = [];
      n.length = t.length + e.length;
      for (var i = 0, o = 0, s = 0; i < t.length && o < e.length; )
        r(t[i], e[o]) < 0 ? (n[s++] = t[i++]) : (n[s++] = e[o++]);
      for (; i < t.length; ) n[s++] = t[i++];
      for (; o < e.length; ) n[s++] = e[o++];
      return n;
    }
    var w = function(t, e) {
      var r = this,
        i = this;
      t = t || m;
      var d = (e.styles.background = e.styles.background || {}),
        g = new s.default(d.color || 'rgb(255, 255, 255)'),
        y = !1,
        w = !1,
        b = (e.styles.node = e.styles.node || {});
      if (
        ((b.minSize = null != b.minSize ? b.minSize : 6),
        (b.maxSize = b.maxSize || 16),
        (b.color = b.color || 'rgb(255, 255, 255)'),
        b.label)
      ) {
        var M = b.label;
        (M.color = M.color || 'rgb(120, 120, 120)'),
          (M.font = M.font || {
            type: 'Arial, Helvetica, sans-serif',
            size: 11,
          });
      }
      var E = (e.styles.edge = e.styles.edge || { arrow: {} });
      (E.width = E.width || 1),
        (E.color = E.color || 'rgb(204, 204, 204)'),
        (E.animateColor = E.animateColor || 'rgb(240, 80, 120)'),
        (E.animateSpeed = E.animateSpeed || 1);
      var S = function() {
        (e.onLoad && !e.onLoad()) || r.draw(!0);
      };
      if (E.arrow && void 0 !== E.arrow.texture) {
        var T = E.arrow;
        (T.minSize = null != T.minSize ? T.minSize : 6),
          (T.maxSize = T.maxSize || 12),
          (T.aspect = 1);
      }
      var P = new c.default(),
        A = {},
        k = void 0,
        R = void 0,
        z = void 0,
        C = void 0,
        O = void 0,
        I = void 0,
        j = {};
      this.cntShownNodes = function() {
        var t = 0;
        for (var e in A) t += A[e].cntShownNodes();
        return t;
      };
      var N = e.getNodesCnt || this.cntShownNodes;
      this.cntShownEdges = function() {
        var t = 0;
        for (var e in A) t += A[e].cntShownEdges();
        return t;
      };
      var F = e.getEdgesCnt || this.cntShownEdges,
        B = P.debounce(function() {
          return i.draw.call(i), !1;
        }, 5);
      function D() {
        return (
          !!y &&
          (console.error('Cannot call any function on graph after remove()'),
          !0)
        );
      }
      var L = void 0,
        q = void 0;
      function U() {
        A.temp ||
          (A.temp = new n.default(
            t,
            j,
            k,
            R,
            C,
            O,
            I,
            P,
            e,
            g,
            b,
            E,
            Y,
            G,
            W,
            $,
            N,
            F,
            B,
            S
          ));
      }
      var V = void 0;
      function X() {
        return V || (V = new l.default(A, U, z, L, q, _)), V;
      }
      (this.set = function(t, n, o) {
        var s =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (D()) return r;
        (L = t || []), (q = n || []), L.forEach(_), q.forEach(_);
        var a = [];
        return (
          'undefined' != typeof ccNetVizPlugins &&
            (void 0 !== ccNetVizPlugins.node &&
              (a = ccNetVizPlugins.node.Integration(e, i).shapes),
            void 0 !== ccNetVizPlugins.arrow &&
              (a = a.concat(ccNetVizPlugins.arrow.Integration(e, i).shapes))),
          Promise.all(
            a.map(function(t) {
              return t.config;
            })
          ).then(function(t) {
            t.map(function(t, r) {
              'arrow' === t.plugin
                ? (e.styles[a[r].name].arrow = t)
                : (e.styles[a[r].name] = t);
            }),
              A.temp && A.temp.set([], [], o, s),
              A.main.set(L, q, o, s);
          }),
          (V = void 0),
          (w = !0),
          r
        );
      }),
        (this.reflow = function() {
          if (!D()) {
            X().applyChanges();
            var t = A.main.getVisibleNodes();
            A.temp && (t = t.concat(A.temp.getVisibleNodes()));
            var e = A.main.getVisibleEdges();
            A.temp && (e = e.concat(A.temp.getVisibleEdges())),
              r.set(t, e),
              r.draw();
          }
        }),
        (this.removeNode = function(t) {
          return D() ? r : (X().removeNode(t), r);
        }),
        (this.removeEdge = function(t) {
          return D() ? r : (X().removeEdge(t), r);
        }),
        (this.addEdge = function(t) {
          return D() ? r : (X().addEdge(t), r);
        }),
        (this.addNode = function(t) {
          return D() ? r : (X().addNode(t), r);
        }),
        (this.updateNode = function(t) {
          return D() ? r : r.removeNode(t).addNode(t);
        }),
        (this.updateEdge = function(t) {
          return D() ? r : r.removeEdge(t).addEdge(t);
        }),
        (this.applyChanges = function() {
          return D() ? r : (X().applyChanges(), r);
        }),
        (this.addEdges = function(t) {
          return D()
            ? r
            : (t.forEach(function(t) {
                r.addEdge(t);
              }),
              r);
        }),
        (this.addNodes = function(t) {
          return D()
            ? r
            : (t.forEach(function(t) {
                r.addNode(t);
              }),
              r);
        }),
        (this.removeEdges = function(t) {
          return D()
            ? r
            : (t.forEach(function(t) {
                r.removeEdge(t);
              }),
              r);
        }),
        (this.removeNodes = function(t) {
          return D()
            ? r
            : (t.forEach(function(t) {
                r.removeNode(t);
              }),
              r);
        }),
        (this.updateNodes = function(t) {
          return D()
            ? r
            : (t.forEach(function(t) {
                r.updateNode(t);
              }),
              r);
        }),
        (this.updateEdges = function(t) {
          return D()
            ? r
            : (t.forEach(function(t) {
                r.updateEdge(t);
              }),
              r);
        });
      var Y = function(t, e, r, n) {
          var i = (n * Math.sqrt((t.width * t.height) / (r + 1))) / k.size;
          if (e) {
            var o = e.size ? e.size : e.minSize,
              s = e.size ? e.size : e.maxSize;
            if ((i = s ? Math.min(s, i) : i) < e.hideSize) return 0;
            i = o ? Math.max(o, i) : i;
          }
          return i;
        },
        G = function(t) {
          return Y(t, t.style, N(), 0.4);
        },
        W = function(t, e) {
          return Y(t, e, N(), 0.25);
        },
        $ = function(t, e) {
          if (e) {
            var r = A.main.cntShownNodes(),
              n = 0.25 * Math.sqrt((t.width * t.height) / (r + 1)),
              i = void 0;
            if (e.hideSize)
              return (
                (i = n / e.hideSize),
                e.maxSize && (i = Math.min(i, n / e.maxSize)),
                i
              );
          }
          return 1;
        },
        H = 0.5 * b.maxSize;
      (this.draw = function(e) {
        if ((!e || (!y && w)) && !D()) {
          var r = t.width,
            n = t.height,
            i = r / n,
            s = 1 === k.size ? H : 0,
            a = s / r,
            u = s / n;
          (j.transform = o.default.ortho(
            k.x - a,
            k.x + k.size + a,
            k.y - u,
            k.y + k.size + u,
            -1,
            1
          )),
            (j.offsetX = a),
            (j.offsetY = u),
            (j.width = 0.5 * r),
            (j.height = 0.5 * n),
            (j.aspect2 = i * i),
            (j.aspect = i),
            (j.count = N()),
            j.style && delete j.style,
            (j.curveExc = Y(j, void 0, F(), 0.5)),
            (j.style = b),
            (j.nodeSize = G(j)),
            R && R.viewport(0, 0, r, n),
            R && R.clear(R.COLOR_BUFFER_BIT);
          var f = Date.now(),
            h = function() {
              for (var t = 0; t < A.main.scene.elements.length; t++)
                A.main.scene.elements[t].draw(j),
                  A.temp && A.temp.scene.elements[t].draw(j);
            };
          E.animateType && 'none' !== E.animateType
            ? (function t() {
                (j.renderTime = (Date.now() - f) / 1e3),
                  h(),
                  requestAnimationFrame(t);
              })()
            : h();
        }
      }),
        (z = this.draw.bind(this)),
        (this.getScreenCoords = function(e) {
          if (!D()) {
            var r = {},
              n = t.getBoundingClientRect();
            return (
              void 0 !== e.x &&
                (r.x =
                  ((e.x - k.x + j.offsetX) / (k.size + 2 * j.offsetX)) *
                    t.width +
                  n.left),
              void 0 !== e.y &&
                (r.y =
                  (1 - (e.y - k.y + j.offsetY) / (k.size + 2 * j.offsetY)) *
                    t.height +
                  n.top),
              r
            );
          }
        }),
        (this.getLayerCoords = function(e) {
          if (!D()) {
            var r = {};
            if (
              (['x', 'x1', 'x2'].forEach(function(n) {
                if (void 0 !== e[n]) {
                  var i = e[n];
                  (i =
                    (i / t.width) * (k.size + 2 * j.offsetX) - j.offsetX + k.x),
                    (r[n] = i);
                }
              }),
              ['y', 'y1', 'y2'].forEach(function(n) {
                if (void 0 !== e[n]) {
                  var i = e[n];
                  (i =
                    (1 - i / t.height) * (k.size + 2 * j.offsetY) -
                    j.offsetY +
                    k.y),
                    (r[n] = i);
                }
              }),
              void 0 !== e.radius)
            ) {
              var n = e.radius,
                i = n / t.height,
                o = n / t.width;
              (n = Math.max(i, o) * k.size), (r.radius = n);
            }
            return r;
          }
        });
      var Q = function(t, e) {
        if (!D() && R) {
          var r = A.main[t].apply(A.main, e);
          if (!A.temp) return r;
          var n = A.temp[t].apply(A.temp, e),
            i = {};
          for (var o in r)
            i[o] = x(r[o], n[o], function(t, e) {
              return t.dist2 - e.dist2;
            });
          return i;
        }
      };
      (this.find = function() {
        return Q('find', arguments);
      }),
        (this.findArea = function() {
          return Q('findArea', arguments);
        }),
        (this.getTextPosition = function(t) {
          if (!D() && R) {
            var r = 0.5 * j.nodeSize,
              n = (2 * (t.y <= 0.5 ? 0 : 1) - 1) * r,
              i = (0, v.getPartitionStyle)(e.styles[t.style], b, 'label'),
              o = I.getEngine(i.font);
            o.setFont(i.font);
            var s = o.isSDF ? W(j, i.label || {}) : o.fontSize,
              a = s / o.fontSize;
            return (
              0 === s && (a = 0),
              { offsetY: n, fontScale: a, chars: o.get(t.label, t.x, t.y) }
            );
          }
        });
      var Z,
        K = function(t, r) {
          for (var n in r || {})
            r[n] && t.addEventListener(n, r[n], { passive: e.passiveEvts });
        },
        J = function(t, e) {
          for (var r in e || {}) e[r] && t.removeEventListener(r, e[r]);
        },
        tt = function(r) {
          var n = this;
          if (1 !== r.which) return;
          var i = function(t) {
            if (!t.touches) return t;
            for (var e = 0, r = 0, n = 0; n < t.touches.length; n++)
              (e += t.touches[n].clientX), (r += t.touches[n].clientY);
            return (
              (t.clientX = e / t.touches.length),
              (t.clientY = r / t.touches.length),
              t
            );
          };
          r = i(r);
          var o = t.width / k.size,
            s = t.height / k.size,
            a = r.clientX,
            u = r.clientY,
            f = k.x + a / o,
            h = u / s - k.y,
            c = e.onDrag,
            l = void 0,
            d = void 0,
            v = !0,
            g = !1,
            m = void 0,
            p = void 0;
          if (2 === (r.touches || []).length) {
            var y = r.touches[0].clientX - r.touches[1].clientX,
              _ = r.touches[0].clientY - r.touches[1].clientY;
            (p = Math.sqrt(y * y + _ * _)), (g = !0);
          }
          var x = function(t) {
              if (((t = i(t)).touches && 1 != t.touches.length && (v = !1), l))
                v &&
                  (d
                    ? c.drag && c.drag(t)
                    : ((k.x = Math.max(
                        0,
                        Math.min(1 - k.size, f - t.clientX / o)
                      )),
                      (k.y = Math.max(
                        0,
                        Math.min(1 - k.size, t.clientY / s - h)
                      )),
                      nt(),
                      n.draw()));
              else {
                var g = void 0,
                  m = void 0;
                t.touches && t.touches.length > 0
                  ? ((g = t.touches[0].clientX), (m = t.touches[0].clientY))
                  : ((g = t.clientX), (m = t.clientY));
                var p = g - a,
                  y = m - u;
                p * p + y * y > 8 &&
                  ((l = !0), (d = c && c.start(r)) && c.drag && c.drag(t));
              }
              e.passiveEvts || t.preventDefault();
            },
            w = function(t) {
              (t = i(t)),
                d && c.stop && c.stop(t),
                l ||
                  (e.onClick && e.onClick(t),
                  new Date().getTime() - it < 250
                    ? (e.onDblClick && e.onDblClick(t), (it = 0))
                    : (it = new Date().getTime())),
                J(window, m);
            },
            b = function(t) {
              if ((t = i(t)).touches && 2 == t.touches.length) {
                var e = t.touches[0].clientX - t.touches[1].clientX,
                  r = t.touches[0].clientY - t.touches[1].clientY,
                  n = Math.sqrt(e * e + r * r);
                (t.deltaY = 5 * -(n - p)), et(t), (p = n);
              }
            };
          K(
            window,
            (m = {
              mouseup: w,
              touchend: w,
              touchcancel: w,
              mousemove: g ? b : x,
              touchmove: g ? b : x,
            })
          );
        }.bind(this),
        et = function r(n) {
          var i = t.getBoundingClientRect();
          e.passiveEvts || n.preventDefault();
          var o = void 0,
            s = void 0;
          var a = n.clientX - i.left;
          var u = n.clientY - i.top;
          if (!r.continuosZoom) {
            r.startView = { size: k.size, x: k.x, y: k.y };
            var f = this.getLayerCoords({
                x1: a - 10,
                y1: u - 10,
                x2: a + 10,
                y2: u - 10,
              }),
              h = this.findArea(f.x1, f.y1, f.x2, f.y2, !0);
            if (h.nodes.length) {
              var c = h.nodes[0],
                l = this.getScreenCoords({ x: c.node.x, y: c.node.y });
              (r.focusX = l.x), (r.focusY = l.y);
            } else (r.focusX = a), (r.focusY = u);
            (r.oldX = k.x),
              (r.oldY = k.y),
              (r.oldSize = k.size),
              r.continuosZoom && clearTimeout(r.continuosZoom),
              (o = k.x),
              (s = k.y);
          }
          r.continuosZoom = setTimeout(function() {
            r.continuosZoom = void 0;
          }, 200);
          var d = Math.min(
            1,
            k.size * (1 + 0.001 * (n.deltaMode ? 33 : 1) * n.deltaY)
          );
          var v = d - r.oldSize;
          k.size = d;
          k.x = Math.max(0, Math.min(1 - d, r.oldX - (v * r.focusX) / t.width));
          k.y = Math.max(
            0,
            Math.min(1 - d, r.oldY - v * (1 - r.focusY / t.height))
          );
          if (e.onZoom && !1 === e.onZoom(k))
            return (k.size = void 0), (k.x = o), void (k.y = s);
          nt();
          this.draw();
        }.bind(this);
      K(
        t,
        (Z = {
          mousedown: tt,
          touchstart: tt,
          wheel: et,
          contextmenu: e.onContextMenu,
        })
      ),
        (this.remove = function() {
          if (!D()) {
            for (var e in A) A[e].remove();
            if (R) {
              R.viewport(0, 0, 2 * j.width, 2 * j.height),
                R.clear(R.COLOR_BUFFER_BIT);
              var r = R.getExtension('WEBGL_lose_context');
              r && r.loseContext();
            }
            J(t, Z), P.disable(), I && I.remove(), (y = !0);
          }
        });
      var rt = {};
      function nt() {
        var t = !1;
        if (rt) for (var r in k) rt[r] !== k[r] && (t = !0);
        a.default.extend(rt, k),
          t && e.onChangeViewport && e.onChangeViewport(k);
      }
      var it = 0;
      (this.image = function() {
        if (!D()) return t.toDataURL();
      }),
        (this.resize = function() {
          D() || ((t.width = t.offsetWidth), (t.height = t.offsetHeight));
        }),
        (this.getViewport = function() {
          return k;
        }),
        (this.setViewport = function(t) {
          D() || (a.default.extend(k, t), nt());
        }),
        (this.resetView = function() {
          return r.setViewport({ size: 1, x: 0, y: 0 });
        }),
        ['update'].forEach(function(t) {
          !(function(t, e) {
            e[t] = function() {
              var r = arguments;
              for (var n in A) {
                var i = A[n];
                i[t].apply(i, r);
              }
              return e;
            };
          })(t, i);
        }),
        (R = p(t)) &&
          (R.clearColor(g.r, g.g, g.b, g.a),
          R.blendEquation(R.FUNC_ADD),
          R.blendFuncSeparate(R.SRC_ALPHA, R.ONE_MINUS_SRC_ALPHA, R.ONE, R.ONE),
          R.enable(R.BLEND)),
        (k = { size: 1, x: 0, y: 0 }),
        this.resize(),
        (C = new u.default(P, S)),
        (O = new f.default(P, S)),
        (I = R && new h.default(R, O, C)),
        (A.main = new n.default(
          t,
          j,
          k,
          R,
          C,
          O,
          I,
          P,
          e,
          g,
          b,
          E,
          Y,
          G,
          W,
          $,
          N,
          F,
          B,
          S
        )),
        R || console.warn('Cannot initialize WebGL context');
    };
    (w.isWebGLSupported = function() {
      return !!p(m);
    }),
      (w.color = s.default),
      (w.spatialSearch = d.default),
      (w.layout = i.default),
      (w.color = s.default),
      (window.ccNetViz = w),
      (e.default = w);
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default = function(
        t,
        e,
        r,
        c,
        l,
        d,
        v,
        g,
        m,
        p,
        y,
        _,
        x,
        w,
        b,
        M,
        E,
        S,
        T,
        P
      ) {
        var A = this;
        (E =
          E ||
          function() {
            return A.nodes.length;
          }),
          (S =
            S ||
            function() {
              return A.edges.length;
            }),
          (this.redraw = T || function() {}),
          ((m = m || {}).styles = m.styles || {}),
          (this.hasEdgeAnimation = !!_.animateType && 'none' !== _.animateType);
        var k = function(t) {
            return {
              set: function(t, e, r, n) {
                var i = e.x,
                  s = e.y;
                if (
                  (o.default.vertices(t.position, r, i, s, i, s, i, s, i, s),
                  o.default.vertices(t.textureCoord, r, 0, 0, 1, 0, 1, 1, 0, 1),
                  t.color)
                ) {
                  var a = e.color;
                  o.default.colors(t.color, r, a, a, a, a);
                }
                o.default.quad(t.indices, r, n);
              },
            };
          },
          R = function(t) {
            return (function(t) {
              var e = v.getEngine(t.font);
              return (
                e.setFont(t.font),
                {
                  set: function(t, r, n, i) {
                    for (
                      var s = r.x,
                        a = r.y,
                        u = !1,
                        f = e.get(r.label || '', s, a, function() {
                          u = !0;
                        }),
                        h = 0;
                      h < f.length;
                      h++, n += 4, i += 6
                    ) {
                      var c = f[h];
                      if (
                        (o.default.vertices(
                          t.position,
                          n,
                          s,
                          a,
                          s,
                          a,
                          s,
                          a,
                          s,
                          a
                        ),
                        0 == h)
                      )
                        var l = c.width / 3,
                          d = c.height / 3;
                      o.default.vertices(
                        t.relative,
                        n,
                        c.dx - l,
                        c.dy - d,
                        c.width + c.dx - l,
                        c.dy - d,
                        c.width + c.dx - l,
                        c.height + c.dy - d,
                        c.dx - l,
                        c.height + c.dy - d
                      ),
                        t.textureCoord &&
                          o.default.vertices(
                            t.textureCoord,
                            n,
                            c.left,
                            c.bottom,
                            c.right,
                            c.bottom,
                            c.right,
                            c.top,
                            c.left,
                            c.top
                          ),
                        o.default.quad(t.indices, n, i);
                    }
                    return u;
                  },
                  size: function(t, r) {
                    return e.steps(r.label || '');
                  },
                }
              );
            })(t);
          },
          z = function(t) {
            return {
              set: function(e, r, n, i) {
                var s = v.getEngine(t.font);
                s.setFont(t.font);
                for (
                  var a = s.get(r.label || '', h, c, function() {
                      !0;
                    }),
                    u = 0,
                    f = 0;
                  f < a.length;
                  f++
                )
                  u = Math.abs(a[u].dx) > Math.abs(a[f].dx) ? u : f;
                var h = r.x,
                  c = r.y,
                  l =
                    h <= 0.5
                      ? Math.abs(a[u].dx) + a[u].width / 4
                      : -Math.abs(a[u].dx),
                  d = h <= 0.5 ? 0 : a[u].width / 4,
                  g =
                    c <= 0.5
                      ? Math.abs(a[a.length - 1].dy)
                      : -Math.abs(a[a.length - 1].dy);
                o.default.vertices(e.position, n, h, c, h, c, h, c, h, c),
                  o.default.vertices(e.relative, n, d, 0, l, 0, l, g, d, g),
                  o.default.quad(e.indices, n, i);
              },
            };
          },
          C = function(t, e) {
            var r = e.x - t.x,
              n = e.y - t.y,
              i = 1 / Math.sqrt(r * r + n * n);
            return { x: i * r, y: i * n };
          },
          O = Math.cos(0.9),
          I = Math.sin(0.9),
          j = {},
          N = {},
          F = {},
          B = function(t, e, r, n) {
            var i, s, u, f, h, c, l, d;
            a.default.getCurveShift(n.e, j),
              (u = j.x),
              (f = j.y),
              (l = j.cx),
              (d = j.cy),
              a.default.getCurveShift(r.e, N),
              (i = N.x),
              (s = N.y),
              (h = N.cx),
              (c = N.cy),
              t.curveShift &&
                o.default.vertices(t.curveShift, e, -s, i, -s, i, -f, u, -f, u),
              t.circleShift &&
                o.default.vertices(
                  t.circleShift,
                  e,
                  -c,
                  h,
                  -c,
                  h,
                  -d,
                  l,
                  -d,
                  l
                );
          },
          D = {
            lines: function(t) {
              return {
                set: function(t, e, r, n) {
                  var i = a.default.edgeSource(e),
                    s = a.default.edgeTarget(e),
                    u = i.x - s.x,
                    f = i.y - s.y,
                    h = C(i, s);
                  B(t, r, i, s),
                    o.default.vertices(
                      t.position,
                      r,
                      i.x,
                      i.y,
                      i.x,
                      i.y,
                      s.x,
                      s.y,
                      s.x,
                      s.y
                    ),
                    o.default.vertices(
                      t.lengthSoFar,
                      r,
                      0,
                      0,
                      0,
                      0,
                      u,
                      f,
                      u,
                      f
                    ),
                    o.default.vertices(
                      t.normal,
                      r,
                      -h.y,
                      h.x,
                      h.y,
                      -h.x,
                      h.y,
                      -h.x,
                      -h.y,
                      h.x
                    ),
                    A.hasEdgeAnimation &&
                      (o.default.vertices(
                        t.startPos,
                        r,
                        i.x,
                        i.y,
                        i.x,
                        i.y,
                        i.x,
                        i.y,
                        i.x,
                        i.y
                      ),
                      o.default.vertices(
                        t.endPos,
                        r,
                        s.x,
                        s.y,
                        s.x,
                        s.y,
                        s.x,
                        s.y,
                        s.x,
                        s.y
                      )),
                    o.default.quad(t.indices, r, n);
                },
              };
            },
            curves: function(t) {
              return {
                numVertices: 3,
                numIndices: 3,
                set: function(t, e, r, n) {
                  var i = a.default.edgeSource(e),
                    s = a.default.edgeTarget(e),
                    u = i.x - s.x,
                    f = i.y - s.y,
                    h = C(i, s);
                  B(t, r, i, s),
                    o.default.vertices(
                      t.position,
                      r,
                      i.x,
                      i.y,
                      0.5 * (s.x + i.x),
                      0.5 * (s.y + i.y),
                      s.x,
                      s.y
                    ),
                    o.default.vertices(
                      t.lengthSoFar,
                      r,
                      0,
                      0,
                      u / 2,
                      f / 2,
                      u,
                      f
                    ),
                    o.default.vertices(t.normal, r, 0, 0, h.y, -h.x, 0, 0),
                    o.default.vertices(t.curve, r, 1, 1, 0.5, 0, 0, 0),
                    o.default.indices(t.indices, r, n, 0, 1, 2);
                },
              };
            },
            circles: function(t) {
              return {
                set: function(t, e, r, n) {
                  var i = a.default.edgeSource(e),
                    s = i.y < 0.5 ? 1 : -1,
                    u = s,
                    f = 1.25 * s,
                    h = 1.5 * s;
                  B(t, r, i, i),
                    o.default.vertices(
                      t.position,
                      r,
                      i.x,
                      i.y,
                      i.x,
                      i.y,
                      i.x,
                      i.y,
                      i.x,
                      i.y
                    ),
                    o.default.vertices(
                      t.lengthSoFar,
                      r,
                      0,
                      0,
                      1,
                      u,
                      2,
                      f,
                      3,
                      h
                    ),
                    o.default.vertices(
                      t.normal,
                      r,
                      0,
                      0,
                      1,
                      s,
                      0,
                      1.25 * s,
                      -1,
                      s
                    ),
                    o.default.vertices(t.curve, r, 1, 1, 0.5, 0, 0, 0, 0.5, 0),
                    o.default.quad(t.indices, r, n);
                },
              };
            },
          },
          L = function(t, e, r, n, i, s, u, f) {
            var h,
              c,
              l,
              d,
              v = n.x,
              g = n.y,
              m = void 0;
            a.default.getCurveShift(n.e, F),
              (h = F.x),
              (c = F.y),
              (l = F.cx),
              (d = F.cy),
              (m = n.is_edge ? 0 : 1),
              t.curveShift &&
                o.default.vertices(t.curveShift, i, -c, h, -c, h, -c, h, -c, h),
              t.circleShift &&
                o.default.vertices(
                  t.circleShift,
                  i,
                  -d,
                  l,
                  -d,
                  l,
                  -d,
                  l,
                  -d,
                  l
                ),
              o.default.singles(t.offsetMul, i, m, m, m, m),
              o.default.vertices(t.position, i, v, g, v, g, v, g, v, g),
              o.default.vertices(t.direction, i, u, f, u, f, u, f, u, f),
              o.default.vertices(t.textureCoord, i, 0, 0, 1, 0, 1, 1, 0, 1),
              o.default.quad(t.indices, i, s);
          },
          q = {
            lineArrows: function(t) {
              return {
                set: function(t, e, r, n) {
                  var i = a.default.edgeSource(e),
                    o = a.default.edgeTarget(e),
                    s = C(i, o);
                  L(t, 0, 0, o, r, n, s.x, s.y);
                },
              };
            },
            curveArrows: function(t) {
              return {
                set: function(t, e, r, n) {
                  var i = a.default.edgeSource(e),
                    o = a.default.edgeTarget(e);
                  return L(
                    t,
                    0,
                    0,
                    o,
                    r,
                    n,
                    0.5 * (o.x - i.x),
                    0.5 * (o.y - i.y)
                  );
                },
              };
            },
            circleArrows: function(t) {
              return {
                set: function(t, e, r, n) {
                  var i = a.default.edgeTarget(e);
                  return L(
                    t,
                    0,
                    0,
                    i,
                    r,
                    n,
                    i.x < 0.5 ? O : -O,
                    i.y < 0.5 ? -I : I
                  );
                },
              };
            },
          };
        (this.getCurrentSpatialSearch = function(t) {
          return (
            void 0 === X &&
              (X = new f.default(
                t,
                v,
                m,
                [],
                {},
                [],
                {},
                [],
                {},
                [],
                {},
                C,
                y,
                b,
                M
              )),
            X
          );
        }),
          (this.remove = function() {});
        var U = void 0,
          V = void 0,
          X = void 0;
        (this.set = function(t, e, r, n) {
          (Y = 0),
            (G = 0),
            (this.nodes = t = t || []),
            (this.edges = e = e ? [].concat(e) : []),
            (X = void 0);
          for (var i = [], o = [], a = [], h = 0; h < e.length; h++) {
            var g = e[h];
            'number' == typeof g.source && (g.source = t[g.source]),
              'number' == typeof g.target && (g.target = t[g.target]);
          }
          var p = function(t) {
            return t.uniqid || -t.index || -t.nidx;
          };
          !(function() {
            for (var r = 0; r < t.length; r++) t[r].index = r;
            for (var n = 0, s = t.length + 10; n < e.length; n++, s++)
              e[n].nidx = s;
            (U = []), (V = new Uint32Array(e.length));
            var u = { k: '_', kArrow: '_', d: [] },
              f = { k: 'circles', kArrow: 'circleArrows', d: a },
              h = { k: 'lines', kArrow: 'lineArrows', d: i },
              c = { k: 'curves', kArrow: 'curveArrows', d: o };
            if (J.OES_standard_derivatives) {
              for (var l = {}, d = 0; d < e.length; d++) {
                var v = e[d],
                  g = p(v.source),
                  y = p(v.target);
                (l[g] || (l[g] = {}))[y] = !0;
              }
              for (
                var _ = 'overlap' === m.bidirectional, x = 0;
                x < e.length;
                x++
              ) {
                var w = void 0,
                  b = e[x],
                  M = p(b.source),
                  E = p(b.target),
                  S = u;
                if (M === E) (b.t = 2), (w = a), (S = f);
                else {
                  var T = l[E];
                  T && T[M] && _
                    ? ((b.t = 1), (w = o), (S = c))
                    : ((b.t = 0), (w = i), (S = h));
                }
                U.push(S), (V[x] = S.d.length), w.push(b);
              }
            } else
              for (var P = 0; P < e.length; P++) {
                var A = e[P],
                  k = u;
                p(A.source) !== p(A.target) && ((k = h), (A.t = 0), i.push(A)),
                  U.push(k),
                  (V[P] = k.d.length);
              }
          })();
          var x = (0, u.partitionByStyle)(t),
            w = (0, u.partitionByStyle)(a),
            E = (0, u.partitionByStyle)(i),
            S = (0, u.partitionByStyle)(o);
          if (
            ((this.getCurrentSpatialSearch = function(e) {
              return (
                void 0 === X &&
                  (X = new f.default(
                    e,
                    v,
                    m,
                    t,
                    x,
                    i,
                    E,
                    o,
                    S,
                    a,
                    w,
                    C,
                    y,
                    b,
                    M
                  )),
                X
              );
            }),
            r && new s.default[r](t, e, n).apply() && s.default.normalize(t),
            c)
          ) {
            for (
              var T = function() {
                var e = !1,
                  r = function(t, e) {
                    'string' == typeof t.style.texture
                      ? (t.style.texture = l.get(c, t.style.texture, e))
                      : e();
                  },
                  n = function(t, e) {
                    var r = (t.style.label || {}).font || {},
                      n = v.getEngine(r);
                    t.style.texture = n.getTexture(r, e);
                  },
                  s = void 0;
                return (
                  (s = t.length && !t[0].color),
                  (e =
                    e ||
                    tt.nodes.set(c, m.styles, r, s ? t : [], s ? x : {}, k)),
                  (s = t.length && t[0].color),
                  (e =
                    e ||
                    tt.nodesColored.set(
                      c,
                      m.styles,
                      r,
                      s ? t : [],
                      s ? x : {},
                      k
                    )),
                  y.label &&
                    (v.clear(),
                    (e =
                      (e =
                        e || tt.labelsOutline.set(c, m.styles, n, t, x, R)) ||
                      tt.labels.set(c, m.styles, n, t, x, R)),
                    y.label.backgroundColor &&
                      (e =
                        e || tt.labelsBackground.set(c, m.styles, n, t, x, z)),
                    v.bind()),
                  (e = e || tt.lines.set(c, m.styles, r, i, E, D.lines)),
                  J.OES_standard_derivatives &&
                    (e =
                      (e =
                        e || tt.curves.set(c, m.styles, r, o, S, D.curves)) ||
                      tt.circles.set(c, m.styles, r, a, w, D.circles)),
                  _.arrow &&
                    ((e =
                      e ||
                      tt.lineArrows.set(c, m.styles, r, i, E, q.lineArrows)),
                    J.OES_standard_derivatives &&
                      (e =
                        (e =
                          e ||
                          tt.curveArrows.set(
                            c,
                            m.styles,
                            r,
                            o,
                            S,
                            q.curveArrows
                          )) ||
                        tt.circleArrows.set(
                          c,
                          m.styles,
                          r,
                          a,
                          w,
                          q.circleArrows
                        ))),
                  e
                );
              };
              T();

            );
            !(function() {
              var t = !1,
                e = function(e) {
                  t && A.set(A.nodes, A.edges);
                };
              d.onLoad(e), l.onLoad(e), (t = !0);
            })();
          }
        }),
          (this.update = function(t, e, r) {
            c &&
              tt[t].update(c, e, r, function(t) {
                return {
                  set: function(t, e, r) {
                    return o.default.colors(t, r, e, e, e, e);
                  },
                };
              });
          }),
          (this.find = function(t, n, i, o, s, a) {
            return A.getCurrentSpatialSearch(e).find(
              e,
              t,
              n,
              i,
              r.size,
              o,
              s,
              a
            );
          }),
          (this.findArea = function(t, n, i, o, s, a, u) {
            return A.getCurrentSpatialSearch(e).findArea(
              e,
              t,
              n,
              i,
              o,
              r.size,
              s,
              a,
              u
            );
          }),
          (this.updateNode = function(t, r) {
            (A.nodes[r] = t),
              X && X.update(e, 'nodes', r, t),
              c &&
                ((A.nodes[0].color ? tt.nodesColored : tt.nodes).updateEl(
                  c,
                  t,
                  r,
                  k
                ),
                tt.labels && tt.labels.updateEl(c, t, r, R),
                tt.labelsOutline && tt.labelsOutline.updateEl(c, t, r, R),
                tt.labelsBackground &&
                  tt.labelsBackground.updateEl(c, t, r, z));
          }),
          (this.updateEdge = function(t, r) {
            var n = U[r],
              i = V[r];
            (n.d[i] = A.edges[r] = t),
              X && X.update(e, n.k, i, t),
              c &&
                (tt[n.k].updateEl(c, t, i, D[n.k]),
                _.arrow && tt[n.kArrow].updateEl(c, t, i, q[n.kArrow]));
          });
        var Y = 0,
          G = 0,
          W = { x: -1, y: -1, title: '' };
        this.removeNodeAtPos = function(t) {
          A.nodes[t] !== W && (Y++, A.updateNode(W, t));
        };
        var $ = { source: { x: -1, y: -1 }, target: { x: -1, y: -1 } };
        (this.removeEdgeAtPos = function(t) {
          A.edges[t] !== $ && (G++, A.updateEdge($, t));
        }),
          (this.getVisibleNodes = function() {
            if (Y <= 0) return A.nodes;
            var t = [];
            return (
              A.nodes.forEach(function(e) {
                e !== W && t.push(e);
              }),
              t
            );
          }),
          (this.getVisibleEdges = function() {
            if (G <= 0) return A.edges;
            var t = [];
            return (
              A.edges.forEach(function(e) {
                e !== $ && t.push(e);
              }),
              t
            );
          }),
          (this.cntShownNodes = function() {
            return A.nodes.length - Y;
          }),
          (this.cntShownEdges = function() {
            return A.edges.length - G;
          });
        var H = function(t) {
            return t.width / 120;
          },
          Q = { line: 0, dashed: 1, 'chain-dotted': 2, dotted: 3 },
          Z = function(t) {
            return (
              void 0 !== t && (t = Q[t]),
              (void 0 !== t && 'number' == typeof t) || (t = 0),
              t
            );
          },
          K = { none: 0, basic: 1, gradient: 2 };
        (this.nodes = []), (this.edges = []);
        var J = c
            ? i.default.initExtensions(c, 'OES_standard_derivatives')
            : {},
          tt = (this.scene = function() {
            return {
              elements: [],
              add: function(t, e) {
                (tt[t] = e), tt.elements.push(e);
              },
            };
          }.call(this)),
          et = !1;
        if (!c) return m.onLoad && !et && (et = !0) && m.onLoad(), this;
        var rt = [
            'precision mediump float;',
            'uniform vec4 color;',
            'uniform sampler2D texture;',
            'varying vec2 tc;',
            'void main(void) {',
            '   gl_FragColor = color * texture2D(texture, vec2(tc.s, tc.t));',
            '}',
          ],
          nt = [
            'precision mediump float;',
            'uniform lowp sampler2D texture;',
            'uniform mediump vec4 color;',
            'uniform mediump float height_font;',
            'uniform float type;',
            'uniform float buffer;',
            'uniform float boldness;',
            'float gamma = 4.0 * 1.4142 * boldness / height_font;',
            'varying mediump vec2 tc;',
            'void main() {',
            '  if(type > 0.5){',
            '    float tx=texture2D(texture, tc).a;',
            '    float a= smoothstep(buffer - gamma, buffer + gamma, tx);',
            '    gl_FragColor=vec4(color.rgb, a*color.a);',
            '  }else{',
            '    gl_FragColor = color * texture2D(texture, vec2(tc.s, tc.t));',
            '  }',
            '}',
          ],
          it = [
            '   if(type >= 2.5){',
            '      part = fract(part*3.0);',
            '      if(part < 0.5) discard;',
            '   }else if(type >= 1.5){',
            '      if(part < 0.15) discard;',
            '      if(part > 0.30 && part < 0.45) discard;',
            '   }else if(type >= 0.5){',
            '      if(part < 0.5) discard;',
            '   }',
          ],
          ot = [
            '#extension GL_OES_standard_derivatives : enable',
            '#ifdef GL_ES',
            'precision highp float;',
            '#endif',
            'uniform float width;',
            'uniform vec4 color;',
            'uniform float type;',
            'uniform float lineStepSize;',
            'uniform float lineSize;',
            'varying vec2 c;',
            'varying vec2 v_lengthSoFar;',
            'void main(void) {',
            '   float part = abs(fract(length(v_lengthSoFar)*lineStepSize*lineSize));',
          ]
            .concat(it)
            .concat([
              '   vec2 px = dFdx(c);',
              '   vec2 py = dFdy(c);',
              '   float fx = 2.0 * c.x * px.x - px.y;',
              '   float fy = 2.0 * c.y * py.x - py.y;',
              '   float sd = (c.x * c.x - c.y) / sqrt(fx * fx + fy * fy);',
              '   float alpha = 1.0 - abs(sd) / width;',
              '   if (alpha < 0.0) discard;',
              '   gl_FragColor = vec4(color.r, color.g, color.b, min(alpha, 1.0));',
              '}',
            ]),
          st = [
            'attribute vec2 curveShift;',
            'vec4 getShiftCurve(void) {',
            '   vec2 shiftN = vec2(curveShift.x, aspect2 * curveShift.y);',
            '   float length = length(screen * shiftN);',
            '   return vec4(exc * (length == 0.0 ? vec2(0, 0) : shiftN * 0.5 / length), 0, 0);',
            '}',
            'attribute vec2 circleShift;',
            'vec4 getShiftCircle(void) {',
            '   return vec4(size*circleShift,0,0);',
            '}',
          ],
          at = ['' + h.easeFunctions[_.animateEase ? _.animateEase : 'linear']];
        if (
          (this.hasEdgeAnimation
            ? tt.add(
                'lines',
                new o.default(
                  c,
                  _,
                  null,
                  [
                    'precision mediump float;',
                    'attribute vec2 position;',
                    'attribute vec2 normal;',
                    'attribute vec2 lengthSoFar;',
                    'attribute vec2 startPos;',
                    'attribute vec2 endPos;',
                    'uniform float time;',
                    'uniform float exc;',
                    'uniform vec2 size;',
                    'uniform vec2 screen;',
                    'uniform float aspect2;',
                    'uniform float aspect;',
                    'uniform vec2 width;',
                    'uniform mat4 transform;',
                    'varying float v_time;',
                    'varying vec2 v_startPos;',
                    'varying vec2 v_endPos;',
                    'varying vec2 v_screen;',
                    'varying vec2 n;',
                    'varying vec2 v_lengthSoFar;',
                  ]
                    .concat(st)
                    .concat([
                      'void main(void) {',
                      '   gl_Position = getShiftCurve() + getShiftCircle() + vec4(width * normal, 0, 0) + transform * vec4(position, 0, 1);',
                      '   vec4 p = transform*vec4(lengthSoFar,0,0);',
                      '   v_lengthSoFar = vec2(p.x, p.y/aspect);',
                      '   v_time = time;',
                      '   v_startPos = startPos;',
                      '   v_endPos = endPos;',
                      '   v_screen = screen;',
                      '   n = normal;',
                      '}',
                    ]),
                  [
                    'precision mediump float;',
                    'uniform float type;',
                    'uniform float animateType;',
                    'uniform vec4 color;',
                    'uniform vec4 animateColor;',
                    'uniform float animateSpeed;',
                    'varying vec2 n;',
                    'varying float v_time;',
                    'varying vec2 v_startPos;',
                    'varying vec2 v_endPos;',
                    'varying vec2 v_screen;',
                    'varying vec2 v_lengthSoFar;',
                    'uniform float lineSize;',
                  ]
                    .concat(at)
                    .concat([
                      'float isAnimateCovered() {',
                      '   vec2 pos = gl_FragCoord.xy;',
                      '   vec2 viewport = 2. * v_screen;',
                      '   float maxLen = length(viewport);',
                      '   vec2 startPos = viewport * v_startPos;',
                      '   vec2 endPos = viewport * v_endPos;',
                      '   float totalLen = distance(startPos, endPos);',
                      '   float len = distance(pos, startPos);',
                      '   // float r = 300.;',
                      '   float r = ease(fract(v_time * animateSpeed * 0.2 * maxLen / totalLen)) * totalLen;',
                      '   // float r = 0.5 * totalLen;',
                      '   float draw = 1. - step(r, len);',
                      '   return draw;',
                      '}',
                    ])
                    .concat([
                      'float isAnimateCoveredGradient() {',
                      '   vec2 pos = gl_FragCoord.xy;',
                      '   vec2 viewport = 2. * v_screen;',
                      '   float maxLen = length(viewport);',
                      '   vec2 startPos = viewport * v_startPos;',
                      '   vec2 endPos = viewport * v_endPos;',
                      '   float totalLen = distance(startPos, endPos);',
                      '   float len = distance(pos, startPos);',
                      '   float gradLen = 180.;',
                      '   float r = ease(fract(v_time * animateSpeed * 0.2 * maxLen / totalLen)) * (totalLen + gradLen / 2.);',
                      '   // float r = 0.5 * totalLen;',
                      '   float draw = fract(smoothstep(r - gradLen, r, len));',
                      '   return draw;',
                      '}',
                    ])
                    .concat([
                      'void main(void) {',
                      '   float part = abs(fract(length(v_lengthSoFar)*lineSize*5.0));',
                    ])
                    .concat(it)
                    .concat([
                      '   if (animateType >= 1.5) {',
                      '       gl_FragColor = isAnimateCoveredGradient() * animateColor + (1. - isAnimateCoveredGradient()) * color;',
                      '   } else if (animateType >= 0.5) {',
                      '       gl_FragColor = isAnimateCovered() * animateColor + (1. - isAnimateCovered()) * color;',
                      '   } else {',
                      '       gl_FragColor = vec4(color.r, color.g, color.b, color.a - length(n));',
                      '   }',
                    ])
                    .concat(['}']),
                  function(t) {
                    var e = t.shader.uniforms;
                    e.exc && c.uniform1f(e.exc, t.curveExc),
                      c.uniform2f(e.screen, t.width, t.height);
                    var r = 2.5 * t.nodeSize;
                    e.size && c.uniform2f(e.size, r / t.width, r / t.height),
                      c.uniform1f(e.lineSize, H(t)),
                      c.uniform1f(e.aspect2, t.aspect2),
                      c.uniform1f(e.aspect, t.aspect),
                      c.uniform2f(
                        e.width,
                        t.style.width / t.width,
                        t.style.width / t.height
                      ),
                      c.uniform1f(e.type, Z(t.style.type)),
                      c.uniform1f(
                        e.animateType,
                        (function(t) {
                          return (
                            void 0 !== t && (t = K[t]),
                            (void 0 !== t && 'number' == typeof t) || (t = 0),
                            t
                          );
                        })(t.style.animateType)
                      ),
                      c.uniform1f(e.animateSpeed, t.style.animateSpeed),
                      i.default.uniformColor(c, e.color, t.style.color),
                      i.default.uniformColor(
                        c,
                        e.animateColor,
                        t.style.animateColor
                      );
                  }
                )
              )
            : tt.add(
                'lines',
                new o.default(
                  c,
                  _,
                  null,
                  [
                    'precision mediump float;',
                    'attribute vec2 position;',
                    'attribute vec2 normal;',
                    'attribute vec2 lengthSoFar;',
                    'uniform float exc;',
                    'uniform vec2 size;',
                    'uniform vec2 screen;',
                    'uniform float aspect2;',
                    'uniform float aspect;',
                    'uniform vec2 width;',
                    'uniform mat4 transform;',
                    'varying vec2 n;',
                    'varying vec2 v_lengthSoFar;',
                  ]
                    .concat(st)
                    .concat([
                      'void main(void) {',
                      '   gl_Position = getShiftCurve() + getShiftCircle() + vec4(width * normal, 0, 0) + transform * vec4(position, 0, 1);',
                      '   vec4 p = transform*vec4(lengthSoFar,0,0);',
                      '   v_lengthSoFar = vec2(p.x, p.y/aspect);',
                      '   n = normal;',
                      '}',
                    ]),
                  [
                    'precision mediump float;',
                    'uniform float type;',
                    'uniform vec4 color;',
                    'varying vec2 n;',
                    'varying vec2 v_lengthSoFar;',
                    'uniform float lineSize;',
                    'void main(void) {',
                    '   float part = abs(fract(length(v_lengthSoFar)*lineSize*5.0));',
                  ]
                    .concat(it)
                    .concat([
                      '   gl_FragColor = vec4(color.r, color.g, color.b, color.a - length(n));',
                      '}',
                    ]),
                  function(t) {
                    var e = t.shader.uniforms;
                    e.exc && c.uniform1f(e.exc, t.curveExc),
                      c.uniform2f(e.screen, t.width, t.height);
                    var r = 2.5 * t.nodeSize;
                    e.size && c.uniform2f(e.size, r / t.width, r / t.height),
                      c.uniform1f(e.lineSize, H(t)),
                      c.uniform1f(e.aspect2, t.aspect2),
                      c.uniform1f(e.aspect, t.aspect),
                      c.uniform2f(
                        e.width,
                        t.style.width / t.width,
                        t.style.width / t.height
                      ),
                      c.uniform1f(e.type, Z(t.style.type)),
                      i.default.uniformColor(c, e.color, t.style.color);
                  }
                )
              ),
          J.OES_standard_derivatives &&
            (tt.add(
              'curves',
              new o.default(
                c,
                _,
                null,
                [
                  'precision highp float;',
                  'attribute vec2 position;',
                  'attribute vec2 normal;',
                  'attribute vec2 curve;',
                  'attribute vec2 lengthSoFar;',
                  'uniform vec2 size;',
                  'uniform float exc;',
                  'uniform vec2 screen;',
                  'uniform float aspect2;',
                  'uniform float aspect;',
                  'uniform mat4 transform;',
                  'varying vec2 v_lengthSoFar;',
                  'varying vec2 c;',
                ]
                  .concat(st)
                  .concat([
                    'void main(void) {',
                    '   vec2 n = vec2(normal.x, aspect2 * normal.y);',
                    '   float length = length(screen * n);',
                    '   n = length == 0.0 ? vec2(0, 0) : n / length;',
                    '   gl_Position = getShiftCurve() + getShiftCircle() + vec4(exc * n, 0, 0) + transform * vec4(position, 0, 1);',
                    '   c = curve;',
                    '   vec4 p = transform*vec4(lengthSoFar,0,0);',
                    '   v_lengthSoFar = vec2(p.x, p.y/aspect);',
                    '}',
                  ]),
                ot,
                function(t) {
                  var e = t.shader.uniforms;
                  c.uniform1f(e.width, t.style.width),
                    c.uniform1f(e.exc, t.curveExc),
                    c.uniform2f(e.screen, t.width, t.height);
                  var r = 2.5 * t.nodeSize;
                  e.size && c.uniform2f(e.size, r / t.width, r / t.height),
                    c.uniform1f(e.lineSize, H(t)),
                    c.uniform1f(e.aspect2, t.aspect2),
                    c.uniform1f(e.aspect, t.aspect),
                    c.uniform1f(e.type, Z(t.style.type)),
                    e.lineStepSize && c.uniform1f(e.lineStepSize, 5),
                    i.default.uniformColor(c, e.color, t.style.color);
                }
              )
            ),
            tt.add(
              'circles',
              new o.default(
                c,
                _,
                null,
                [
                  'precision highp float;',
                  'attribute vec2 position;',
                  'attribute vec2 normal;',
                  'attribute vec2 curve;',
                  'attribute vec2 lengthSoFar;',
                  'uniform float exc;',
                  'uniform vec2 screen;',
                  'uniform float aspect2;',
                  'uniform float aspect;',
                  'uniform vec2 size;',
                  'uniform mat4 transform;',
                  'varying vec2 c;',
                  'varying vec2 v_lengthSoFar;',
                ]
                  .concat(st)
                  .concat([
                    'void main(void) {',
                    '   gl_Position = getShiftCurve() + getShiftCircle() + vec4(size * normal, 0, 0) + transform * vec4(position, 0, 1);',
                    '   c = curve;',
                    '   vec4 p = transform*vec4(size * lengthSoFar,0,0);',
                    '   v_lengthSoFar = vec2(p.x, p.y/aspect);',
                    '}',
                  ]),
                ot,
                function(t) {
                  var e = t.shader.uniforms;
                  e.exc && c.uniform1f(e.exc, t.curveExc),
                    c.uniform1f(e.width, t.style.width),
                    c.uniform1f(e.type, Z(t.style.type)),
                    c.uniform2f(e.screen, t.width, t.height);
                  var r = 2.5 * t.nodeSize;
                  e.size && c.uniform2f(e.size, r / t.width, r / t.height),
                    c.uniform1f(e.lineSize, H(t)),
                    c.uniform1f(e.aspect2, t.aspect2),
                    c.uniform1f(e.aspect, t.aspect),
                    e.lineStepSize && c.uniform1f(e.lineStepSize, 5 / 3),
                    i.default.uniformColor(c, e.color, t.style.color);
                }
              )
            )),
          _.arrow)
        ) {
          var ut = { attribute: { offsetMul: 1 } },
            ft = function(t) {
              var e = x(t, t.style, S(), 0.2);
              if (!e) return !0;
              var n = t.shader.uniforms;
              c.uniform1f(n.offset, 0.5 * t.nodeSize),
                c.uniform2f(n.arrowsize, e, t.style.aspect * e),
                c.uniform1f(n.exc, t.curveExc),
                n.cexc && c.uniform1f(n.cexc, 0.5 * r.size * t.curveExc),
                n.size &&
                  ((e = 2.5 * t.nodeSize),
                  n.size && c.uniform2f(n.size, e / t.width, e / t.height)),
                c.uniform2f(n.screen, t.width, t.height),
                c.uniform1f(n.aspect2, t.aspect2),
                i.default.uniformColor(c, n.color, t.style.color);
            };
          tt.add(
            'lineArrows',
            new o.default(
              c,
              _,
              'arrow',
              [
                'attribute vec2 position;',
                'attribute vec2 direction;',
                'attribute vec2 textureCoord;',
                'attribute float offsetMul;',
                'uniform float offset;',
                'uniform vec2 arrowsize;',
                'uniform vec2 size;',
                'uniform vec2 screen;',
                'uniform float exc;',
                'uniform float aspect2;',
                'uniform mat4 transform;',
                'varying vec2 tc;',
              ]
                .concat(st)
                .concat([
                  'void main(void) {',
                  '   vec2 u = direction / length(screen * direction);',
                  '   vec2 v = vec2(u.y, -aspect2 * u.x);',
                  '   v = v / length(screen * v);',
                  '   gl_Position = getShiftCurve() + getShiftCircle()  + vec4(arrowsize.x * (0.5 - textureCoord.x) * v - arrowsize.y * textureCoord.y * u - offset * offsetMul * u, 0, 0) + transform * vec4(position, 0, 1);',
                  '   tc = textureCoord;',
                  '}',
                ]),
              rt,
              ft,
              ut
            )
          ),
            J.OES_standard_derivatives &&
              (tt.add(
                'curveArrows',
                new o.default(
                  c,
                  _,
                  'arrow',
                  [
                    'attribute vec2 position;',
                    'attribute vec2 direction;',
                    'attribute vec2 textureCoord;',
                    'attribute float offsetMul;',
                    'uniform float offset;',
                    'uniform vec2 arrowsize;',
                    'uniform vec2 size;',
                    'uniform float exc;',
                    'uniform float cexc;',
                    'uniform vec2 screen;',
                    'uniform float aspect2;',
                    'uniform mat4 transform;',
                    'varying vec2 tc;',
                  ]
                    .concat(st)
                    .concat([
                      'void main(void) {',
                      '   vec2 u = normalize(vec2(direction.y, -aspect2 * direction.x));',
                      '   u = normalize(direction - cexc * u / length(screen * u));',
                      '   u = u / length(screen * u);',
                      '   vec2 v = vec2(u.y, -aspect2 * u.x);',
                      '   v = v / length(screen * v);',
                      '   gl_Position = getShiftCurve() + getShiftCircle() + vec4(arrowsize.x * (0.5 - textureCoord.x) * v - arrowsize.y * textureCoord.y * u - offset * offsetMul * u, 0, 0) + transform * vec4(position, 0, 1);',
                      '   tc = textureCoord;',
                      '}',
                    ]),
                  rt,
                  ft,
                  ut
                )
              ),
              tt.add(
                'circleArrows',
                new o.default(
                  c,
                  _,
                  'arrow',
                  [
                    'attribute vec2 position;',
                    'attribute vec2 direction;',
                    'attribute vec2 textureCoord;',
                    'attribute float offsetMul;',
                    'uniform float offset;',
                    'uniform vec2 arrowsize;',
                    'uniform vec2 size;',
                    'uniform vec2 screen;',
                    'uniform float exc;',
                    'uniform float aspect2;',
                    'uniform mat4 transform;',
                    'varying vec2 tc;',
                  ]
                    .concat(st)
                    .concat([
                      'void main(void) {',
                      '   vec2 u = direction;',
                      '   vec2 v = vec2(direction.y, -direction.x);',
                      '   gl_Position = getShiftCurve() + getShiftCircle() + vec4((arrowsize.x * (0.5 - textureCoord.x) * v - arrowsize.y * textureCoord.y * u - offset * offsetMul * u) / screen, 0, 0) + transform * vec4(position, 0, 1);',
                      '   tc = textureCoord;',
                      '}',
                    ]),
                  rt,
                  ft,
                  ut
                )
              ));
        }
        tt.add(
          'nodes',
          new o.default(
            c,
            y,
            null,
            [
              'attribute vec2 position;',
              'attribute vec2 textureCoord;',
              'uniform vec2 size;',
              'uniform mat4 transform;',
              'varying vec2 tc;',
              'void main(void) {',
              '   gl_Position = vec4(size * (textureCoord - vec2(0.5, 0.5)), 0, 0) + transform * vec4(position, 0, 1);',
              '   tc = textureCoord;',
              '}',
            ],
            rt,
            function(t) {
              var e = w(t),
                r = t.shader.uniforms;
              c.uniform2f(r.size, e / t.width, e / t.height),
                i.default.uniformColor(c, r.color, t.style.color);
            }
          )
        ),
          tt.add(
            'nodesColored',
            new o.default(
              c,
              y,
              null,
              [
                'attribute vec2 position;',
                'attribute vec2 textureCoord;',
                'attribute vec4 color;',
                'uniform vec2 size;',
                'uniform mat4 transform;',
                'varying vec2 tc;',
                'varying vec4 c;',
                'void main(void) {',
                '   gl_Position = vec4(size * (textureCoord - vec2(0.5, 0.5)), 0, 0) + transform * vec4(position, 0, 1);',
                '   tc = textureCoord;',
                '   c = color;',
                '}',
              ],
              [
                'precision mediump float;',
                'uniform sampler2D texture;',
                'varying vec2 tc;',
                'varying vec4 c;',
                'void main(void) {',
                '   gl_FragColor = c * texture2D(texture, vec2(tc.s, tc.t));',
                '}',
              ],
              function(t) {
                var e = w(t),
                  r = t.shader.uniforms;
                c.uniform2f(r.size, e / t.width, e / t.height);
              }
            )
          ),
          tt.add(
            'labelsBackground',
            new o.default(
              c,
              y,
              'label',
              [
                'attribute vec2 position;',
                'attribute vec2 relative;',
                'uniform vec2 scale;',
                'uniform mat4 transform;',
                'uniform float fontScale;',
                'uniform float offset;',
                'void main(void) {',
                '   gl_Position = vec4(scale * (relative*fontScale + vec2(0, (2.0 * step(position.y, 0.5) - 1.0) * offset)), 0, 0) + transform * vec4(position, 0, 1);',
                '}',
              ],
              [
                'precision mediump float;',
                'uniform vec4 backgroundColor;',
                'void main() {',
                '   gl_FragColor = vec4(backgroundColor.r, backgroundColor.g, backgroundColor.b,1);',
                '}',
              ],
              function(t) {
                var r = t.shader.uniforms,
                  o = t.style.label,
                  s = o.font,
                  a = v.getEngine(s);
                a.setFont(s);
                var u = 1,
                  f = a.fontSize,
                  h = a.isSDF ? b(e, o || {}) : f;
                0 === h && (u = 0),
                  h && f && (u *= h / f),
                  c.uniform1f(r.offset, 0.5 * t.nodeSize),
                  c.uniform2f(r.scale, 1 / t.width, 1 / t.height),
                  c.uniform1f(r.fontScale, u);
                var l = new n.default(o.backgroundColor || l);
                i.default.uniformColor(c, r.backgroundColor, l);
              }
            )
          );
        var ht = [
            'attribute vec2 position;',
            'attribute vec2 relative;',
            'attribute vec2 textureCoord;',
            'uniform float offset;',
            'uniform vec2 scale;',
            'uniform float fontScale;',
            'uniform mat4 transform;',
            'varying vec2 tc;',
            'void main(void) {',
            '   gl_Position = vec4(scale * (relative*fontScale + vec2(0, (2.0 * step(position.y, 0.5) - 1.0) * offset)), 0, 0) + transform * vec4(position, 0, 1);',
            '   tc = textureCoord;',
            '}',
          ],
          ct = function(t) {
            return function(r) {
              if (!w(r)) return !0;
              var o = r.style.label,
                s = o.font,
                a = r.shader.uniforms;
              c.uniform1f(
                a.type,
                (function(t) {
                  return v.isSDF(t) ? 1 : 0;
                })(s)
              );
              var u = v.getEngine(s);
              u.setFont(s);
              var f = 1,
                h = u.fontSize,
                l = u.isSDF ? b(e, o || {}) : h;
              0 === l && (f = 0),
                l && h && (f *= l / h),
                t && !u.isSDF && (f = 0),
                c.uniform1f(a.buffer, t ? 0.25 : 0.75),
                c.uniform1f(a.boldness, (s ? s.boldness : void 0) || 1),
                c.uniform1f(a.fontScale, f),
                c.uniform1f(a.height_font, h),
                c.uniform1f(a.offset, 0.5 * r.nodeSize),
                c.uniform2f(a.scale, 1 / r.width, 1 / r.height);
              var d = void 0;
              (d =
                t && s
                  ? new n.default(s.outlineColor || o.backgroundColor || p)
                  : r.style.color),
                i.default.uniformColor(c, a.color, d);
            };
          };
        if (
          (y.label &&
            tt.add(
              'labelsOutline',
              new o.default(c, y, 'label', ht, nt, ct(!0))
            ),
          y.label &&
            tt.add('labels', new o.default(c, y, 'label', ht, nt, ct(!1))),
          m.onLoad)
        ) {
          var lt = m.styles;
          for (var dt in lt) {
            var vt = lt[dt];
            vt.texture && l.get(c, vt.texture, P),
              vt.arrow && vt.arrow.texture && l.get(c, vt.arrow.texture);
          }
        }
      });
    var n = c(r(6)),
      i = c(r(3)),
      o = c(r(13)),
      s = c(r(7)),
      a = c(r(5)),
      u = (c(r(1)), r(4)),
      f = c(r(8)),
      h = r(28);
    function c(t) {
      return t && t.__esModule ? t : { default: t };
    }
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      i = s(r(14)),
      o = (s(r(1)), r(4));
    function s(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var a = (function() {
      function t(e, r, n, s, a, u, f) {
        var h = this;
        !(function(t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, t);
        var c = new i.default(e, s.join('\n'), a.join('\n'), f),
          l = [],
          d = [],
          v = {},
          g = {},
          m = void 0,
          p = void 0,
          y = 0,
          _ = 0,
          x = function(t, e) {
            if (t.size) {
              var r = 0;
              return (
                e.forEach(function(e) {
                  r += t.size(g, e);
                }),
                r
              );
            }
            return e.length;
          },
          w = function(e, r) {
            m = p = 0;
            var n = Math.floor(t.maxBufferSize / e.numVertices),
              i = Math.min(n, r - (_ - y) * n),
              o = i * e.numIndices;
            if (!g.indices || g.indices.length !== o)
              for (var s in ((g.indices = new Uint16Array(o)),
              (i *= e.numVertices),
              c.attributes))
                g[s] = new Float32Array(c.attributes[s].size * i);
          },
          b = function(e, r, n, i, o) {
            for (var s = [e.indices, r, n], a = 0; a < o; a++) s.push(0);
            for (var u = [void 0, r, n], f = 0; f < i; f++) u.push(0);
            for (var c in e)
              'indices' === c
                ? t.indices.apply(h, s)
                : ((u[0] = e[c]), t.vertices.apply(h, u));
          };
        this.set = function(e, i, s, a, u, f) {
          var b = !1;
          (y = 0),
            (_ = 0),
            (h._iIs = new Uint32Array(a.length)),
            (h._iVs = new Uint32Array(a.length)),
            (h._iBs = new Uint8Array(a.length)),
            (h._sizes = new Uint8Array(a.length));
          var M = function(t) {
            var r = l[_];
            if (!r) for (var n in ((l[_] = r = {}), g)) r[n] = e.createBuffer();
            for (var i in c.attributes)
              e.bindBuffer(e.ARRAY_BUFFER, r[i]),
                e.bufferData(e.ARRAY_BUFFER, g[i], e.STATIC_DRAW);
            e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, r.indices),
              e.bufferData(e.ELEMENT_ARRAY_BUFFER, g.indices, e.STATIC_DRAW),
              (r.numIndices = p),
              (r.numVertices = m),
              t.buffers.push(r),
              _++;
          };
          for (var E in ((d = []), u)) {
            y = _;
            var S = {
                style: (0, o.getPartitionStyle)(i[E], r, n),
                buffers: [],
                styleName: E,
              },
              T = f(S.style);
            (T.numVertices = T.numVertices || 4),
              (T.numIndices = T.numIndices || 6);
            var P = u[E],
              A = x(T, P);
            w(T, A);
            for (var k = t.maxBufferSize, R = 0; R < P.length; R++) {
              var z = T.size ? T.size(g, P[R]) : 1,
                C = m + z * T.numVertices,
                O = p + z * T.numIndices;
              C >= k && (M(S), w(T, A), (C = m), (O = p)),
                T.set(g, P[R], m, p) && (b = !0);
              var I = P.idx[R];
              (h._iIs[I] = p),
                (h._iVs[I] = m),
                (h._iBs[I] = _),
                (h._sizes[I] = z),
                (p = O),
                (m = C);
            }
            M(S);
            var j = function() {
              d.push(this), (v[this.styleName] = this);
            }.bind(S);
            s ? s(S, j) : j();
          }
          return b;
        };
        var M = void 0;
        (this.update = function(t, e, r, n) {
          var i = 0,
            o = c.attributes[e].size;
          d.forEach(function(s) {
            var a = n(s.style);
            (a.numVertices = a.numVertices || 4),
              s.buffers.forEach(function(n) {
                (!M || M.length !== o * n.numVertices) &&
                  (M = new Float32Array(o * n.numVertices));
                for (
                  var s = 0;
                  s < n.numVertices;
                  s += (a.size ? a.size(n, r[i]) : 1) * a.numVertices
                )
                  a.set(M, r[i++], s);
                t.bindBuffer(t.ARRAY_BUFFER, n[e]),
                  t.bufferData(t.ARRAY_BUFFER, M, t.DYNAMIC_DRAW);
              });
          });
        }),
          (this.updateEl = function(t, e, r, n) {
            var i = v[e.style],
              o = n(i.style);
            (o.numVertices = o.numVertices || 4),
              (o.numIndices = o.numIndices || 6),
              (_ = y = 0);
            var s = i.buffers[h._iBs[r]],
              a = o.size ? o.size(s, e) : 1,
              u = h._sizes[r];
            if (a > u)
              console.error(
                'Cannot set primitive to new value which has greater size (' +
                  a +
                  ' > ' +
                  u +
                  ') - no enough empty space to fill in GL buffer'
              );
            else {
              for (w(o, u), o.set(g, e, 0, 0); a < u; a++)
                b(
                  g,
                  a * o.numVertices,
                  a * o.numIndices,
                  o.numVertices,
                  o.numIndices
                );
              !(function(e, r, n) {
                for (var i in c.attributes)
                  t.bindBuffer(t.ARRAY_BUFFER, e[i]),
                    t.bufferSubData(
                      t.ARRAY_BUFFER,
                      c.attributes[i].size * r * g[i].BYTES_PER_ELEMENT,
                      g[i]
                    );
                t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, e.indices),
                  t.bufferSubData(
                    t.ELEMENT_ARRAY_BUFFER,
                    n * g.indices.BYTES_PER_ELEMENT,
                    g.indices
                  );
              })(s, h._iVs[r], h._iIs[r]);
            }
          }),
          (this.draw = function(t) {
            (t.shader = c),
              c.bind(),
              e.uniformMatrix4fv(c.uniforms.transform, !1, t.transform),
              e.uniform1f(c.uniforms.time, t.renderTime),
              d.forEach(function(r) {
                r.style.texture &&
                  (r.style.texture.update && r.style.texture.update(),
                  e.activeTexture(e.TEXTURE0),
                  e.bindTexture(e.TEXTURE_2D, r.style.texture),
                  e.uniform1i(c.uniforms.texture, 0)),
                  (t.style = r.style),
                  u(t) ||
                    r.buffers.forEach(function(t) {
                      for (var r in (e.bindBuffer(
                        e.ELEMENT_ARRAY_BUFFER,
                        t.indices
                      ),
                      c.attributes)) {
                        var n = c.attributes[r];
                        e.bindBuffer(e.ARRAY_BUFFER, t[r]),
                          e.vertexAttribPointer(
                            n.index,
                            n.size,
                            e.FLOAT,
                            !1,
                            0,
                            0
                          );
                      }
                      e.drawElements(
                        e.TRIANGLES,
                        t.numIndices,
                        e.UNSIGNED_SHORT,
                        0
                      );
                    });
              }),
              c.unbind();
          });
      }
      return (
        n(t, null, [
          {
            key: 'vertices',
            value: function(t, e) {
              for (var r = 2, n = 2 * e, i = arguments.length; r < i; r++, n++)
                t[n] = arguments[r];
            },
          },
          {
            key: 'singles',
            value: function(t, e) {
              for (var r = 2, n = 1 * e, i = arguments.length; r < i; r++, n++)
                t[n] = arguments[r];
            },
          },
          {
            key: 'colors',
            value: function(t, e) {
              for (var r = 2, n = 4 * e, i = arguments.length; r < i; r++) {
                var o = arguments[r];
                (t[n++] = o.r), (t[n++] = o.g), (t[n++] = o.b), (t[n++] = o.a);
              }
            },
          },
          {
            key: 'indices',
            value: function(t, e, r) {
              for (var n = 3, i = r, o = arguments.length; n < o; n++, i++)
                t[i] = e + arguments[n];
            },
          },
          {
            key: 'quad',
            value: function(e, r, n) {
              t.indices(e, r, n, 0, 1, 2, 2, 3, 0);
            },
          },
          {
            key: 'maxBufferSize',
            get: function() {
              return 65536;
            },
          },
        ]),
        t
      );
    })();
    e.default = a;
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      i = (function(t) {
        return t && t.__esModule ? t : { default: t };
      })(r(3));
    var o = { color: 4 },
      s = (function() {
        function t(e, r, n, o) {
          !(function(t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this._gl = e),
            (this._vs = r),
            (this._fs = n);
          var s = (this._program = e.createProgram());
          e.attachShader(s, i.default.createShader(e, e.VERTEX_SHADER, r)),
            e.attachShader(s, i.default.createShader(e, e.FRAGMENT_SHADER, n)),
            e.linkProgram(s),
            (this.uniforms = {});
          for (
            var a = e.getProgramParameter(s, e.ACTIVE_UNIFORMS), u = 0;
            u < a;
            u++
          ) {
            var f = e.getActiveUniform(s, u).name;
            this.uniforms[f] = e.getUniformLocation(s, f);
          }
          var h = (o || {}).attribute || {};
          (this.attributes = {}),
            (a = e.getProgramParameter(s, e.ACTIVE_ATTRIBUTES));
          for (var c = 0; c < a; c++) {
            var l = e.getActiveAttrib(s, c).name;
            this.attributes[l] = {
              index: c,
              size: h[l] || t.attribute[l] || 2,
            };
          }
        }
        return (
          n(
            t,
            [
              {
                key: 'bind',
                value: function() {
                  this._gl.useProgram(this._program);
                  for (
                    var t = this._gl.getProgramParameter(
                        this._program,
                        this._gl.ACTIVE_ATTRIBUTES
                      ),
                      e = 0;
                    e < t;
                    e++
                  )
                    this._gl.enableVertexAttribArray(e);
                },
              },
              {
                key: 'unbind',
                value: function() {
                  for (
                    var t = this._gl.getProgramParameter(
                        this._program,
                        this._gl.ACTIVE_ATTRIBUTES
                      ),
                      e = 0;
                    e < t;
                    e++
                  )
                    this._gl.disableVertexAttribArray(e);
                },
              },
            ],
            [
              {
                key: 'attribute',
                get: function() {
                  return o;
                },
              },
            ]
          ),
          t
        );
      })();
    e.default = s;
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default = function(t, e) {
        var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          i = 0.9,
          o = -30,
          s = 0.4,
          a = 0.64,
          u = [1, 1],
          f = 1 / 0,
          h = void 0,
          c = [],
          l = [],
          d = [];
        function v(t) {
          return function(e, r, n, i) {
            if (e.point !== t) {
              var o = e.cx - t.x,
                s = e.cy - t.y,
                u = i - r,
                h = o * o + s * s;
              if ((u * u) / a < h) {
                if (h < f) {
                  var c = e.charge / h;
                  (t.px -= o * c), (t.py -= s * c);
                }
                return !0;
              }
              if (e.point && h && h < f) {
                var l = e.pointCharge / h;
                (t.px -= o * l), (t.py -= s * l);
              }
            }
            return !e.charge;
          };
        }
        function g() {
          if ((h *= 0.99) < 0.05) return (h = 0), !0;
          for (
            var a = void 0,
              f = void 0,
              g = void 0,
              m = void 0,
              p = void 0,
              y = void 0,
              _ = void 0,
              x = void 0,
              w = t.length,
              b = e.length,
              M = 0;
            M < b;
            M++
          )
            (g = (f = e[M]).source),
              (p = (_ = (m = f.target).x - g.x) * _ + (x = m.y - g.y) * x) &&
                ((_ *= p = (h * l[M] * ((p = Math.sqrt(p)) - c[M])) / p),
                (x *= p),
                (m.x -= _ * (y = g.weight / (m.weight + g.weight))),
                (m.y -= x * y),
                (g.x += _ * (y = 1 - y)),
                (g.y += x * y));
          if ((y = h * s)) {
            (_ = u[0] / 2), (x = u[1] / 2);
            for (var E = 0; E < w; E++)
              ((f = t[E]).x += (_ - f.x) * y), (f.y += (x - f.y) * y);
          }
          if (o) {
            !(function t(e, r, n) {
              var i = 0,
                o = 0;
              if (((e.charge = 0), !e.leaf))
                for (
                  var s = e.nodes, a = void 0, u = s.length, f = 0;
                  f < u;
                  f++
                )
                  null != (a = s[f]) &&
                    (t(a, r, n),
                    (e.charge += a.charge),
                    (i += a.charge * a.cx),
                    (o += a.charge * a.cy));
              if (e.point) {
                e.leaf ||
                  ((e.point.x += Math.random() - 0.5),
                  (e.point.y += Math.random() - 0.5));
                var h = r * n[e.point.index];
                (e.charge += e.pointCharge = h),
                  (i += h * e.point.x),
                  (o += h * e.point.y);
              }
              (e.cx = i / e.charge), (e.cy = o / e.charge);
            })((a = (0, n.default)(t)), h, d);
            for (var S = 0; S < w; S++) {
              var T = t[S];
              !T.fixed && a.visit(v(T));
            }
          }
          for (
            var P = function(t, e) {
                return Math.random() * (e - t) + t;
              },
              A = 0;
            A < w;
            A++
          )
            (f = t[A]).fixed || f.fixed2
              ? ((f.x = f.px), (f.y = f.py))
              : ((f.x -= (f.px - (f.px = f.x)) * i),
                (f.y -= (f.py - (f.py = f.y)) * i),
                r &&
                  void 0 !== r.minX &&
                  ((f.x < r.minX || f.x > r.maxX) && (f.x = P(r.minX, r.maxX)),
                  (f.y < r.minY || f.y > r.maxY) && (f.y = P(r.minY, r.maxY))));
        }
        this.apply = function() {
          for (
            var r = t.length, n = Math.sqrt(r), i = 0.3 / n, s = 0;
            s < r;
            s++
          ) {
            var a = t[s];
            (a.weight = 0),
              (a.x = void 0 !== a.x ? a.x : i + (s % n) / n),
              (a.y = void 0 !== a.y ? a.y : i + Math.floor(s / n) / n),
              (a.px = a.x),
              (a.py = a.y),
              (d[s] = o);
          }
          for (var u = 0; u < e.length; u++) {
            var f = e[u];
            f.source.weight++, f.target.weight++, (c[u] = 15), (l[u] = 1);
          }
          for (h = 0.1; !g(); );
          return !0;
        };
      });
    var n = (function(t) {
      return t && t.__esModule ? t : { default: t };
    })(r(16));
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default = function(t) {
        var e,
          r = void 0,
          n = void 0,
          i = void 0,
          o = void 0,
          s = void 0,
          a = void 0,
          u = void 0,
          f = void 0;
        for (
          u = f = -(s = a = 1 / 0), n = [], i = [], e = t.length, o = 0;
          o < e;
          ++o
        )
          (r = t[o]).x < s && (s = r.x),
            r.y < a && (a = r.y),
            r.x > u && (u = r.x),
            r.y > f && (f = r.y),
            n.push(r.x),
            i.push(r.y);
        var h = u - s,
          c = f - a;
        function l(t, e, r, n, i, o, s, a) {
          if (t.leaf) {
            var u = t.x,
              f = t.y;
            if (null !== u)
              if (u === r && f === n) d(t, e, r, n, i, o, s, a);
              else {
                var h = t.point;
                (t.x = t.y = t.point = null),
                  d(t, h, u, f, i, o, s, a),
                  d(t, e, r, n, i, o, s, a);
              }
            else (t.x = r), (t.y = n), (t.point = e);
          } else d(t, e, r, n, i, o, s, a);
        }
        function d(t, e, r, n, i, o, s, a) {
          var u = 0.5 * (i + s),
            f = 0.5 * (o + a),
            h = r >= u,
            c = n >= f,
            d = (c << 1) | h;
          (t.leaf = !1),
            (t =
              t.nodes[d] ||
              (t.nodes[d] = {
                leaf: !0,
                nodes: [],
                point: null,
                x: null,
                y: null,
              })),
            h ? (i = u) : (s = u),
            c ? (o = f) : (a = f),
            l(t, e, r, n, i, o, s, a);
        }
        h > c ? (f = a + h) : (u = s + c);
        var v = { leaf: !0, nodes: [], point: null, x: null, y: null };
        for (
          v.visit = function(t) {
            return (function t(e, r, n, i, o, s) {
              if (!e(r, n, i, o, s)) {
                var a = 0.5 * (n + o),
                  u = 0.5 * (i + s),
                  f = r.nodes;
                f[0] && t(e, f[0], n, i, a, u),
                  f[1] && t(e, f[1], a, i, o, u),
                  f[2] && t(e, f[2], n, u, a, s),
                  f[3] && t(e, f[3], a, u, o, s);
              }
            })(t, v, s, a, u, f);
          },
            v.find = function(t, e) {
              return (function(t, e, r, n, i, o, s) {
                var a = 1 / 0,
                  u = void 0;
                return (
                  (function t(f, h, c, l, d) {
                    if (!(h > o || c > s || l < n || d < i)) {
                      var v;
                      if ((v = f.point)) {
                        var g = e - f.x,
                          m = r - f.y,
                          p = g * g + m * m;
                        if (p < a) {
                          var y = Math.sqrt((a = p));
                          (n = e - y),
                            (i = r - y),
                            (o = e + y),
                            (s = r + y),
                            (u = v);
                        }
                      }
                      for (
                        var _ = f.nodes,
                          x = 0.5 * (h + l),
                          w = 0.5 * (c + d),
                          b = ((r >= w) << 1) | (e >= x),
                          M = b + 4;
                        b < M;
                        ++b
                      )
                        if ((f = _[3 & b]))
                          switch (3 & b) {
                            case 0:
                              t(f, h, c, x, w);
                              break;
                            case 1:
                              t(f, x, c, l, w);
                              break;
                            case 2:
                              t(f, h, w, x, d);
                              break;
                            case 3:
                              t(f, x, w, l, d);
                          }
                    }
                  })(t, n, i, o, s),
                  u
                );
              })(v, t, e, s, a, u, f);
            },
            o = 0;
          o < e;
          o++
        )
          l(v, t[o], n[o], i[o], s, a, u, f);
        return --o, (n = i = t = r = null), v;
      });
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (function() {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      return function(e, r, n) {
        return r && t(e.prototype, r), n && t(e, n), e;
      };
    })();
    var i = (function() {
      function t(e) {
        !(function(t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, t),
          (this._nodes = e);
      }
      return (
        n(t, [
          {
            key: 'apply',
            value: function() {
              for (var t = 0, e = this._nodes.length; t < e; t++) {
                var r = this._nodes[t];
                (r.x = Math.random()), (r.y = Math.random());
              }
            },
          },
        ]),
        t
      );
    })();
    e.default = i;
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      i = r(0);
    var o = (function() {
      function t(e, r) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        !(function(t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, t),
          (this._nodes = e),
          (this._edges = r),
          (this._angle_step = (2 * Math.PI) / e.length),
          null == n.starting_angle
            ? (this._starting_angle = 0)
            : (this._starting_angle = n.starting_angle);
      }
      return (
        n(t, [
          {
            key: 'apply',
            value: function() {
              for (
                var t = (0, i.degrees)(this._nodes, this._edges), e = 0;
                e < this._nodes.length;
                ++e
              )
                (this._nodes[t.nodes[e].index].x =
                  0.05 +
                  0.45 *
                    (1 +
                      Math.cos(this._starting_angle + e * this._angle_step))),
                  (this._nodes[t.nodes[e].index].y =
                    0.05 +
                    0.45 *
                      (1 +
                        Math.sin(this._starting_angle + e * this._angle_step))),
                  (this._nodes[t.nodes[e].index].weight = t.degrees[e]);
            },
          },
        ]),
        t
      );
    })();
    e.default = o;
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      i = r(0);
    var o = (function() {
      function t(e, r) {
        !(function(t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, t),
          (this._nodes = e),
          (this._edges = r);
      }
      return (
        n(t, [
          {
            key: 'drawTreeCentered',
            value: function(t) {
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0,
                r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 1;
              (t.centered = !0), (t.depth_visited = !1);
              for (var n = 0, i = 0; i < t.children.length; i++) {
                var o = t.children[i];
                1 != o.centered &&
                  (n += this.drawTreeCentered(o, n + e, r + 1));
              }
              return (
                0 == t.children && n++,
                (t.y = this.stepy * (e + (n - 1) / 2) + this.alphay),
                (t.x = (r - 1) * this.stepx + this.alphax),
                n
              );
            },
          },
          {
            key: 'apply',
            value: function() {
              var t = this._nodes;
              t.forEach(function(t, e) {
                (t.parents = []), (t.children = []), (t.centered = !1);
              }),
                this._edges.forEach(function(t, e) {
                  t.source.children.push(t.target),
                    t.target.parents.push(t.source);
                });
              for (var e = 0; e < t.length; e++)
                if (0 == t[e].parents.length) {
                  var r = t[e];
                  break;
                }
              var n = (0, i.getDepth)(r),
                o = (0, i.getRanges)(n);
              (this.alphax = o.start), (this.stepx = o.step);
              var s = 0;
              t.forEach(function(t) {
                0 == t.children.length && s++;
              }),
                (o = (0, i.getRanges)(s)),
                (this.alphay = o.start),
                (this.stepy = o.step),
                this.drawTreeCentered(r);
            },
          },
        ]),
        t
      );
    })();
    e.default = o;
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      i = r(0);
    var o = (function() {
      function t(e, r) {
        !(function(t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, t),
          (this._nodes = e),
          (this._edges = r);
      }
      return (
        n(t, [
          {
            key: 'drawTreeTop',
            value: function(t) {
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0,
                r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 1;
              (t.visited = !0),
                (t.depth_visited = !1),
                (t.x = this.alphax + this.stepx * (r - 1)),
                (t.y = 1 - (this.alphay + this.stepy * e));
              for (var n = 0, i = 0; i < t.children.length; i++) {
                var o = t.children[i];
                1 != o.centered && (n += this.drawTreeTop(o, n + e, r + 1));
              }
              return 0 == t.children.length && n++, n;
            },
          },
          {
            key: 'apply',
            value: function() {
              var t = this._nodes;
              t.forEach(function(t, e) {
                (t.parents = []), (t.children = []), (t.centered = !1);
              }),
                this._edges.forEach(function(t, e) {
                  t.source.children.push(t.target),
                    t.target.parents.push(t.source);
                });
              for (var e = 0; e < t.length; e++)
                if (0 == t[e].parents.length) {
                  var r = t[e];
                  break;
                }
              var n = (0, i.getDepth)(r),
                o = (0, i.getRanges)(n);
              (this.alphax = o.start), (this.stepx = o.step);
              var s = 0;
              t.forEach(function(t) {
                0 == t.children.length && s++;
              }),
                (o = (0, i.getRanges)(s)),
                (this.alphay = o.start),
                (this.stepy = o.step),
                this.drawTreeTop(r);
            },
          },
        ]),
        t
      );
    })();
    e.default = o;
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (function() {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      return function(e, r, n) {
        return r && t(e.prototype, r), n && t(e, n), e;
      };
    })();
    var i = (function() {
      function t(e, r) {
        !(function(t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, t),
          (this._nodes = e),
          (this._edges = r),
          (this.alphay = 0.05),
          (this.alphax = 0.05);
      }
      return (
        n(t, [
          {
            key: 'makeLayers',
            value: function(t, e) {
              if (t.length > 1)
                for (
                  var r = (1 - 2 * this.alphay) / (t.length - 1), n = 0;
                  n < t.length;
                  ++n
                )
                  (t[n].visited = !0),
                    (t[n].layer = e),
                    (t[n].y = this.alphay + n * r);
              else (t[0].visited = !0), (t[0].layer = e), (t[0].y = 0.5);
              for (var i = [], o = 0; o < t.length; o++)
                for (
                  var s = t[o].parents.concat(t[o].children), a = 0;
                  a < s.length;
                  a++
                )
                  0 != s[a].visited || i.includes(s[a]) || i.push(s[a]);
              return 0 == i.length ? e : this.makeLayers(i, e + 1);
            },
          },
          {
            key: 'apply',
            value: function() {
              var t = this._nodes;
              t.forEach(function(t, e) {
                (t.parents = []), (t.children = []), (t.visited = !1);
              }),
                this._edges.forEach(function(t, e) {
                  t.source.children.push(t.target),
                    t.target.parents.push(t.source);
                });
              for (var e = [], r = 0; r < t.length; r++)
                1 == t[r].isroot && e.push(t[r]);
              if (0 == e.length)
                for (var n = 0; n < t.length; n++)
                  0 == t[n].parents.length && e.push(t[n]);
              if (0 == e.length) {
                var i = 0;
                t.forEach(function(t) {
                  t.children.length > i && (i = t.children.length);
                }),
                  t.forEach(function(t) {
                    t.children.length == i && e.push(t);
                  });
              }
              for (
                var o = this.makeLayers(e, 1),
                  s = (1 - 2 * this.alphax) / (o - 1),
                  a = 0;
                a < this._nodes.length;
                ++a
              )
                this._nodes[a].x = this.alphax + s * (this._nodes[a].layer - 1);
            },
          },
        ]),
        t
      );
    })();
    e.default = i;
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      i = r(66),
      o = r(0);
    var s = (function() {
      function t(e, r) {
        !(function(t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, t),
          (this._nodes = e),
          (this._edges = r);
      }
      return (
        n(t, [
          {
            key: 'apply',
            value: function() {
              for (
                var t = (0, o.create2dArray)(
                    this._nodes.length,
                    this._nodes.length
                  ),
                  e = 0;
                e < this._edges.length;
                ++e
              ) {
                var r = this._edges[e].source.index,
                  n = this._edges[e].target.index;
                (t[r][n] = -1), (t[n][r] = -1);
              }
              for (var s = 0; s < this._nodes.length; ++s)
                t[s][s] = -t[s].reduce(function(t, e) {
                  return t + e;
                }, 0);
              var a = new i.EigenvalueDecomposition(t),
                u = (function(t) {
                  var e = Math.min.apply(null, t);
                  t[t.indexOf(e)] = 1 / 0;
                  var r = Math.min.apply(null, t),
                    n = t.indexOf(r);
                  t[n] = 1 / 0;
                  var i = Math.min.apply(null, t);
                  return [n, t.indexOf(i)];
                })(a.realEigenvalues),
                f = a.eigenvectorMatrix.transpose(),
                h = (function(t, e) {
                  for (
                    var r = Math.max.apply(null, t.map(Math.abs)),
                      n = Math.max.apply(null, e.map(Math.abs)),
                      i = Math.min.apply(null, t),
                      o = Math.min.apply(null, e),
                      s = 0;
                    s < t.length;
                    ++s
                  )
                    (t[s] = 0.1 + (t[s] - i) / (1.25 * (r - i))),
                      (e[s] = 0.1 + (e[s] - o) / (1.25 * (n - o)));
                  return [t, e];
                })(f[u[0]], f[u[1]]);
              this._nodes.forEach(function(t, e) {
                (t.x = h[0][e]), (t.y = h[1][e]);
              });
            },
          },
        ]),
        t
      );
    })();
    e.default = s;
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      i = r(0);
    var o = (function() {
      function t(e, r) {
        !(function(t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, t),
          (this._nodes = e),
          (this._edges = r),
          (this._epsilon = 1e-8),
          (this._MAX_ITTERATIONS = 100),
          (this._num_elements = e.length),
          (this._dims = 2);
      }
      return (
        n(t, [
          {
            key: 'apply',
            value: function() {
              for (
                var t = (0, i.create2dArray)(
                    this._nodes.length,
                    this._nodes.length
                  ),
                  e = 0;
                e < this._edges.length;
                ++e
              ) {
                var r = this._edges[e].source.index,
                  n = this._edges[e].target.index;
                t[r][n] = 1;
              }
              var o = (function(t) {
                  for (var e = f(t.length), r = 0; r < t.length; r++) {
                    for (var n = 0, i = 0; i < t[r].length; i++) n += t[r][i];
                    e[r] = n + 1;
                  }
                  return e;
                })(t),
                c = this._dims + 1,
                l = new Array(c);
              l[0] = a(
                (function(t) {
                  for (var e = new Array(t), r = 0; r < t; r++) e[r] = 1;
                  return e;
                })(this._num_elements)
              );
              for (var d = 1; d < c; d++) l[d] = f(this._num_elements);
              for (var v = 1; v < c; v++) {
                for (var g = a(u(this._num_elements)), m = 0, p = !1; !p; ) {
                  for (var y = g.slice(), _ = 0; _ < v; _++) {
                    for (var x = l[_], w = 0, b = 0, M = 0; M < y.length; M++)
                      (w += y[M] * o[M] * x[M]), (b += x[M] * o[M] * x[M]);
                    for (var E = w / b, S = 0; S < y.length; S++)
                      y[S] = y[S] - E * x[S];
                  }
                  for (var T = 0; T < g.length; T++)
                    g[T] = 0.5 * (y[T] + s(t[T], y) / o[T]);
                  (g = a(g)),
                    (p = ((m += 1) > 100) | !(s(g, y) < 1 - this._epsilon));
                }
                l[v] = g.slice();
              }
              var P = h(l[1]),
                A = h(l[2]);
              this._nodes.forEach(function(t, e) {
                (t.x = P[e]), (t.y = A[e]);
              });
            },
          },
        ]),
        t
      );
    })();
    function s(t, e) {
      for (var r = 0, n = 0; n < t.length; n++) r += t[n] * e[n];
      return r;
    }
    function a(t) {
      for (
        var e = (function(t) {
            for (var e = 0, r = 0; r < t.length; r++) e += Math.pow(t[r], 2);
            return Math.sqrt(e);
          })(t),
          r = new Array(t.length),
          n = 0;
        n < t.length;
        n++
      )
        r[n] = t[n] / e;
      return r;
    }
    function u(t) {
      for (var e = new Array(t), r = 0; r < t; r++) e[r] = Math.random();
      return e;
    }
    function f(t) {
      for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;
      return e;
    }
    function h(t) {
      for (
        var e = Math.max.apply(null, t.map(Math.abs)),
          r = Math.min.apply(null, t),
          n = 0;
        n < t.length;
        ++n
      )
        t[n] = 0.1 + (t[n] - r) / (1.25 * (e - r));
      return t;
    }
    e.default = o;
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      i = r(0);
    var o = (function() {
      function t(e, r) {
        !(function(t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, t),
          (this._nodes = e),
          (this._edges = r),
          (this._margin = 0.05),
          (this._radius = 0.05),
          (this._nlines = 5);
      }
      return (
        n(t, [
          {
            key: 'apply',
            value: function() {
              for (
                var t = (0, i.degrees)(this._nodes, this._edges),
                  e = this._nodes.length / this._nlines,
                  r = (0.5 - (this._margin + this._radius)) / e,
                  n = (2 * Math.PI) / this._nlines,
                  o = 0,
                  s = 0;
                s < this._nodes.length;
                ++s
              ) {
                var a = t.nodes[s].index;
                (this._nodes[a].x =
                  0.5 +
                  (this._radius + r * (s - o * e)) *
                    Math.cos(n * o + Math.PI / 2)),
                  (this._nodes[a].y =
                    0.5 +
                    (this._radius + r * (s - o * e)) *
                      Math.sin(n * o + Math.PI / 2)),
                  (o = Math.floor(s / e));
              }
            },
          },
        ]),
        t
      );
    })();
    e.default = o;
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      i = r(0);
    var o = (function() {
      function t(e, r) {
        !(function(t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, t),
          (this._nodes = e),
          (this._edges = r),
          (this._margin = 0.05);
      }
      return (
        n(t, [
          {
            key: 'apply',
            value: function() {
              var t = (0, i.degrees)(this._nodes, this._edges),
                e = Math.sqrt(this._nodes.length);
              if (e - Math.floor(e) > 0) var r = Math.floor(e) + 1;
              else r = e;
              var n = (1 - 2 * this._margin) / r,
                o = this._nodes.length / r;
              if (o - Math.floor(o) > 0) var s = Math.floor(o) + 1;
              else s = o;
              for (
                var a = (1 - 2 * this._margin) / (s - 2), u = 0;
                u < this._nodes.length;
                ++u
              ) {
                var f = Math.floor(u / (r + 1));
                (this._nodes[t.nodes[u].index].x =
                  this._margin + n * (u - f * (r + 1))),
                  (this._nodes[t.nodes[u].index].y = this._margin + a * f),
                  (this._nodes[t.nodes[u].index].weight = t.degrees[u]);
              }
            },
          },
        ]),
        t
      );
    })();
    e.default = o;
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      i = r(0);
    var o = (function() {
      function t(e, r) {
        !(function(t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, t),
          (this._nodes = e),
          (this._edges = r),
          (this._margin = 0.05),
          (this._hubs = 0.1),
          (this._intermediary = 0.2);
      }
      return (
        n(t, [
          {
            key: 'apply',
            value: function() {
              for (
                var t = (0, i.degrees)(this._nodes, this._edges),
                  e = Math.floor(
                    this._nodes.length * (this._hubs + this._intermediary)
                  ),
                  r = Math.floor(this._nodes.length * this._hubs),
                  n = (1 - 2 * this._margin) / 2 / (r - 1),
                  o = Math.PI / (r - 1),
                  s = 0;
                s < r;

              )
                (this._nodes[t.nodes[s].index].x = this._margin + n * s),
                  (this._nodes[t.nodes[s].index].y =
                    this._margin + 0.4 + 0.4 * Math.sin(s * o)),
                  ++s;
              var a = e - r,
                u = Math.PI / a,
                f = (1 - 2 * this._margin) / 2 / a;
              for (s = 0; s < a; )
                (this._nodes[t.nodes[s + r].index].x = 0.5 + f * (s + 1)),
                  (this._nodes[t.nodes[s + r].index].y =
                    this._margin + 0.4 + 0.4 * Math.sin(Math.PI + (s + 1) * u)),
                  ++s;
              var h = [0.85, 0.75],
                c = [0.4, 1 - this._margin],
                l = this._nodes.length - e,
                d = (c[0] - h[0]) / (l - 1),
                v = (c[1] - h[1]) / (l - 1);
              for (s = 0; s < l; )
                (this._nodes[t.nodes[s + e].index].x = h[0] + d * s),
                  (this._nodes[t.nodes[s + e].index].y = h[1] + v * s),
                  ++s;
            },
          },
        ]),
        t
      );
    })();
    e.default = o;
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.neq = e.eq = e.getBBFromPoints = e.pDistance2 = e.distance2 = e.distance2ToBezier = e.pointInRect = e.rectIntersectsRect = e.lineIntersectsRect = e.bezierIntersectsLine = e.bezierIntersectsRect = e.EPS = void 0);
    n(r(9)), n(r(5)), r(4);
    function n(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var i = Number.EPSILON || 1e-14;
    function o(t) {
      var e = Math.pow(Math.abs(t), 1 / 3);
      return t < 0 ? -e : e;
    }
    function s(t, e, r, n, i, s, u, f) {
      for (
        var h = (function(t, e, r, n) {
            if (Math.abs(t) < 1e-8) {
              if (((t = e), (e = r), (r = n), Math.abs(t) < 1e-8))
                return (t = e), (e = r), Math.abs(t) < 1e-8 ? [] : [-e / t];
              var i = e * e - 4 * t * r;
              return Math.abs(i) < 1e-8
                ? [-e / (2 * t)]
                : i > 0
                ? [(-e + Math.sqrt(i)) / (2 * t), (-e - Math.sqrt(i)) / (2 * t)]
                : [];
            }
            var s = (3 * t * r - e * e) / (3 * t * t),
              a =
                (2 * e * e * e - 9 * t * e * r + 27 * t * t * n) /
                (27 * t * t * t),
              u = void 0;
            if (Math.abs(s) < 1e-8) u = [o(-a)];
            else if (Math.abs(a) < 1e-8)
              u = [0].concat(s < 0 ? [Math.sqrt(-s), -Math.sqrt(-s)] : []);
            else {
              var f = (a * a) / 4 + (s * s * s) / 27;
              if (Math.abs(f) < 1e-8) u = [(-1.5 * a) / s, (3 * a) / s];
              else if (f > 0) {
                var h = o(-a / 2 - Math.sqrt(f));
                u = [h - s / (3 * h)];
              } else {
                var c = 2 * Math.sqrt(-s / 3),
                  l = Math.acos((3 * a) / s / c) / 3,
                  d = (2 * Math.PI) / 3;
                u = [
                  c * Math.cos(l),
                  c * Math.cos(l - d),
                  c * Math.cos(l - 2 * d),
                ];
              }
            }
            for (var v = 0; v < u.length; v++) u[v] -= e / (3 * t);
            return u;
          })(
            4 * r * r -
              16 * r * i +
              8 * r * u +
              16 * i * i -
              16 * i * u +
              4 * u * u +
              4 * n * n -
              16 * n * s +
              8 * n * f +
              16 * s * s -
              16 * s * f +
              4 * f * f,
            -12 * r * r +
              36 * r * i -
              12 * r * u -
              24 * i * i +
              12 * i * u -
              12 * n * n +
              36 * n * s -
              12 * n * f -
              24 * s * s +
              12 * s * f,
            12 * r * r -
              24 * r * i +
              4 * r * u -
              4 * r * t +
              8 * i * i +
              8 * i * t -
              4 * u * t +
              12 * n * n -
              24 * n * s +
              4 * n * f -
              4 * n * e +
              8 * s * s +
              8 * s * e -
              4 * f * e,
            -4 * r * r +
              4 * r * i +
              4 * r * t -
              4 * i * t -
              4 * n * n +
              4 * n * s +
              4 * n * e -
              4 * s * e
          ),
          c = 1 / 0,
          l = 0;
        l < h.length;
        l++
      ) {
        var d = h[l];
        if (!(d < 0 || d > 1)) {
          var v = a(
            t,
            e,
            r * (1 - d) * (1 - d) + 2 * i * d * (1 - d) + u * d * d,
            n * (1 - d) * (1 - d) + 2 * s * d * (1 - d) + f * d * d
          );
          v < c && (c = v);
        }
      }
      return c;
    }
    function a(t, e, r, n) {
      var i = t - r,
        o = e - n;
      return i * i + o * o;
    }
    function u(t, e, r, n, i, o, s, a) {
      var u = (e - o) * (s - i) - (t - i) * (a - o),
        f = (r - t) * (a - o) - (n - e) * (s - i);
      if (0 == f) return !1;
      var h = u / f,
        c = (u = (e - o) * (r - t) - (t - i) * (n - e)) / f;
      return !(h < 0 || h > 1 || c < 0 || c > 1);
    }
    function f(t, e, r, n, o, s) {
      return t >= r - i && t <= o + i && e >= n - i && e <= s + i;
    }
    function h(t, e) {
      return t >= e - i && t <= e + i;
    }
    function c(t, e) {
      return !h(t, e);
    }
    function l(t, e, r, n, i, o, s, a, u, f, h) {
      if (s < 0 || s > 1) return !1;
      if (c(h - u, 0)) {
        var l =
          (e * (1 - s) * (1 - s) + 2 * n * s * (1 - s) + o * s * s) / (h - u);
        if (l < 0 || l > 1) return !1;
      }
      return !0;
    }
    function d(t, e, r, n, i, o, s, a, u, f) {
      var d = void 0,
        v =
          -t * a +
          t * f +
          2 * r * a -
          2 * r * f -
          i * a +
          i * f +
          e * s -
          e * u -
          2 * n * s +
          2 * n * u +
          o * s -
          o * u;
      if (c(v, 0) && c(s - u, 0)) {
        var g =
            2 * t * a -
            2 * t * f -
            2 * r * a +
            2 * r * f -
            2 * e * u +
            2 * n * s -
            2 * n * u,
          m =
            g * g -
            4 *
              (-t * a + t * f + e * s - e * u - s * f + u * a) *
              (-t * a +
                t * f +
                2 * r * a -
                2 * r * f -
                i * a +
                i * f +
                e * s -
                e * u -
                2 * n * s +
                2 * n * u +
                o * s -
                o * u);
        if (m >= 0) {
          var p = t * a - t * f - r * a + r * f - e * s + e * u + n * s - n * u;
          if (
            l(0, e, 0, n, 0, o, s, 0, u, 0, (d = (p - 0.5 * Math.sqrt(m)) / v))
          )
            return !0;
          if (
            l(0, e, 0, n, 0, o, s, 0, u, 0, (d = (p + 0.5 * Math.sqrt(m)) / v))
          )
            return !0;
        }
      }
      if (
        ((v = -r * a + r * f + i * a - i * f + n * s - n * u - o * s + o * u),
        h(e, 2 * n - o) &&
          h(t, 2 * r - i) &&
          c(v, 0) &&
          c(s * a - s * f - u * a + u * f, 0) &&
          ((d =
            -2 * r * a +
            2 * r * f +
            i * a -
            i * f +
            2 * n * s -
            2 * n * u -
            o * s +
            o * u -
            s * f +
            u * a),
          l(0, e, 0, n, 0, o, s, 0, u, 0, (d /= 2 * v))))
      )
        return !0;
      if (
        h(a, f) &&
        h(e, 2 * n - o) &&
        c(n - o, 0) &&
        c(s - u, 0) &&
        l(0, e, 0, n, 0, o, s, 0, u, 0, (d = (2 * n - o - f) / (2 * (n - o))))
      )
        return !0;
      var y =
        r * e * a -
        r * e * f -
        2 * r * n * a +
        2 * r * n * f +
        r * o * a -
        r * o * f -
        i * e * a +
        i * e * f +
        2 * i * n * a -
        2 * i * n * f -
        i * o * a +
        i * o * f -
        e * n * s +
        e * n * u +
        e * o * s -
        e * o * u +
        2 * n * n * s -
        2 * n * n * u -
        3 * n * o * s +
        3 * n * o * u +
        o * o * s -
        o * o * u;
      return !!(
        h(
          t,
          (2 * r * a -
            2 * r * f -
            i * a +
            i * f +
            e * s -
            e * u -
            2 * n * s +
            2 * n * u +
            o * s -
            o * u) /
            (a - f)
        ) &&
        c(y, 0) &&
        c(s - u, 0) &&
        l(
          0,
          e,
          0,
          n,
          0,
          o,
          s,
          0,
          u,
          0,
          (d =
            (2 * r * a -
              2 * r * f -
              i * a +
              i * f -
              2 * n * s +
              2 * n * u +
              o * s -
              o * u +
              s * f -
              u * a) /
            (2 *
              (r * a - r * f - i * a + i * f - n * s + n * u + o * s - o * u)))
        )
      );
    }
    (e.EPS = i),
      (e.bezierIntersectsRect = function(t, e, r, n, i, o, a, u, h, c) {
        if (f(t, e, a, u, h, c) || f(i, o, a, u, h, c)) return !0;
        var l = a - h,
          v = u - c,
          g = l * l + v * v,
          m = s((a + h) / 2, (u + c) / 2, t, e, r, n, i, o);
        return (
          !(4 * m > g) &&
          (4 * m <= Math.min(l * l, v * v) ||
            d(t, e, r, n, i, o, u, h, u, u) ||
            d(t, e, r, n, i, o, h, u, h, c) ||
            d(t, e, r, n, i, o, h, c, a, c) ||
            d(t, e, r, n, i, o, a, c, a, u))
        );
      }),
      (e.bezierIntersectsLine = d),
      (e.lineIntersectsRect = function(t, e, r, n, i, o, s, a) {
        return (
          !(!f(t, e, i, o, s, a) && !f(r, n, i, o, s, a)) ||
          u(t, e, r, n, i, o, s, o) ||
          u(t, e, r, n, s, o, s, a) ||
          u(t, e, r, n, s, a, i, a) ||
          u(t, e, r, n, i, a, i, o)
        );
      }),
      (e.rectIntersectsRect = function(t, e, r, n, i, o, s, a) {
        return t <= s && e <= a && r >= i && n >= o;
      }),
      (e.pointInRect = f),
      (e.distance2ToBezier = s),
      (e.distance2 = a),
      (e.pDistance2 = function(t, e, r, n, i, o) {
        var s = i - r,
          u = o - n,
          f = s * s + u * u,
          h = -1;
        0 != f && (h = ((t - r) * s + (e - n) * u) / f);
        var c = void 0,
          l = void 0;
        return (
          h < 0
            ? ((c = r), (l = n))
            : h > 1
            ? ((c = i), (l = o))
            : ((c = r + h * s), (l = n + h * u)),
          a(t, e, c, l)
        );
      }),
      (e.getBBFromPoints = function(t) {
        for (
          var e = 1 / 0, r = -e, n = 1 / 0, i = -n, o = 0;
          o < t.length;
          o += 2
        ) {
          var s = t[o];
          s < e && (e = s), s > r && (r = s);
        }
        for (var a = 1; a < t.length; a += 2) {
          var u = t[a];
          u < n && (n = u), u > i && (i = u);
        }
        return [e, n, r, i];
      }),
      (e.eq = h),
      (e.neq = c);
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.easeFunctions = void 0);
    var n = r(29);
    e.easeFunctions = n.easeFunctions;
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.easeFunctions = void 0);
    var n = A(r(30)),
      i = A(r(31)),
      o = A(r(32)),
      s = A(r(33)),
      a = A(r(34)),
      u = A(r(35)),
      f = A(r(36)),
      h = A(r(37)),
      c = A(r(38)),
      l = A(r(39)),
      d = A(r(40)),
      v = A(r(41)),
      g = A(r(42)),
      m = A(r(43)),
      p = A(r(44)),
      y = A(r(45)),
      _ = A(r(46)),
      x = A(r(47)),
      w = A(r(48)),
      b = A(r(49)),
      M = A(r(50)),
      E = A(r(51)),
      S = A(r(52)),
      T = A(r(53)),
      P = A(r(54));
    function A(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var k = {
      linear: n.default,
      'sin-in': i.default,
      'sin-out': o.default,
      'sin-inout': s.default,
      'exp-in': a.default,
      'exp-out': u.default,
      'exp-inout': f.default,
      'bounce-in': h.default,
      'bounce-out': c.default,
      'bounce-inout': l.default,
      'circular-in': d.default,
      'circular-out': v.default,
      'circular-inout': g.default,
      'quad-in': m.default,
      'quad-out': p.default,
      'quad-inout': y.default,
      'cubic-in': _.default,
      'cubic-out': x.default,
      'cubic-inout': w.default,
      'quart-in': b.default,
      'quart-out': M.default,
      'quart-inout': E.default,
      'quint-in': S.default,
      'quint-out': T.default,
      'quint-inout': P.default,
    };
    e.easeFunctions = k;
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default = 'float ease(float t) {\r\n  return t;\r\n}\r\n');
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default =
        '#ifndef HALF_PI\r\n#define HALF_PI 1.5707963267948966\r\n#endif\r\n\r\nfloat ease(float t) {\r\n  return sin((t - 1.0) * HALF_PI) + 1.0;\r\n}\r\n');
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default =
        '#ifndef HALF_PI\r\n#define HALF_PI 1.5707963267948966\r\n#endif\r\n\r\nfloat ease(float t) {\r\n  return sin(t * HALF_PI);\r\n}');
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default =
        '#ifndef PI\r\n#define PI 3.141592653589793\r\n#endif\r\n\r\nfloat ease(float t) {\r\n  return -0.5 * (cos(PI * t) - 1.0);\r\n}');
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default =
        'float ease(float t) {\r\n  return t == 0.0 ? t : pow(2.0, 10.0 * (t - 1.0));\r\n}');
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default =
        'float ease(float t) {\r\n  return t == 1.0 ? t : 1.0 - pow(2.0, -10.0 * t);\r\n}\r\n');
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default =
        'float ease(float t) {\r\n  return t == 0.0 || t == 1.0\r\n    ? t\r\n    : t < 0.5\r\n      ? +0.5 * pow(2.0, (20.0 * t) - 10.0)\r\n      : -0.5 * pow(2.0, 10.0 - (t * 20.0)) + 1.0;\r\n}');
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default =
        '#ifndef PI\r\n#define PI 3.141592653589793\r\n#endif\r\n\r\nfloat bounceOut(float t) {\r\n  const float a = 4.0 / 11.0;\r\n  const float b = 8.0 / 11.0;\r\n  const float c = 9.0 / 10.0;\r\n\r\n  const float ca = 4356.0 / 361.0;\r\n  const float cb = 35442.0 / 1805.0;\r\n  const float cc = 16061.0 / 1805.0;\r\n\r\n  float t2 = t * t;\r\n\r\n  return t < a\r\n    ? 7.5625 * t2\r\n    : t < b\r\n      ? 9.075 * t2 - 9.9 * t + 3.4\r\n      : t < c\r\n        ? ca * t2 - cb * t + cc\r\n        : 10.8 * t * t - 20.52 * t + 10.72;\r\n}\r\n\r\n\r\nfloat ease(float t) {\r\n  return 1.0 - bounceOut(1.0 - t);\r\n}');
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default =
        '#ifndef PI\r\n#define PI 3.141592653589793\r\n#endif\r\n\r\nfloat ease(float t) {\r\n  const float a = 4.0 / 11.0;\r\n  const float b = 8.0 / 11.0;\r\n  const float c = 9.0 / 10.0;\r\n\r\n  const float ca = 4356.0 / 361.0;\r\n  const float cb = 35442.0 / 1805.0;\r\n  const float cc = 16061.0 / 1805.0;\r\n\r\n  float t2 = t * t;\r\n\r\n  return t < a\r\n    ? 7.5625 * t2\r\n    : t < b\r\n      ? 9.075 * t2 - 9.9 * t + 3.4\r\n      : t < c\r\n        ? ca * t2 - cb * t + cc\r\n        : 10.8 * t * t - 20.52 * t + 10.72;\r\n}\r\n');
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default =
        '#ifndef PI\r\n#define PI 3.141592653589793\r\n#endif\r\n\r\nfloat bounceOut(float t) {\r\n  const float a = 4.0 / 11.0;\r\n  const float b = 8.0 / 11.0;\r\n  const float c = 9.0 / 10.0;\r\n\r\n  const float ca = 4356.0 / 361.0;\r\n  const float cb = 35442.0 / 1805.0;\r\n  const float cc = 16061.0 / 1805.0;\r\n\r\n  float t2 = t * t;\r\n\r\n  return t < a\r\n    ? 7.5625 * t2\r\n    : t < b\r\n      ? 9.075 * t2 - 9.9 * t + 3.4\r\n      : t < c\r\n        ? ca * t2 - cb * t + cc\r\n        : 10.8 * t * t - 20.52 * t + 10.72;\r\n}\r\n\r\nfloat ease(float t) {\r\n  return t < 0.5\r\n    ? 0.5 * (1.0 - bounceOut(1.0 - t * 2.0))\r\n    : 0.5 * bounceOut(t * 2.0 - 1.0) + 0.5;\r\n}');
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default =
        'float ease(float t) {\r\n  return 1.0 - sqrt(1.0 - t * t);\r\n}');
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default =
        'float ease(float t) {\r\n  return sqrt((2.0 - t) * t);\r\n}');
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default =
        'float ease(float t) {\r\n  return t < 0.5\r\n    ? 0.5 * (1.0 - sqrt(1.0 - 4.0 * t * t))\r\n    : 0.5 * (sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0);\r\n}');
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default = 'float ease(float t) {\r\n  return t * t;\r\n}');
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default = 'float ease(float t) {\r\n  return -t * (t - 2.0);\r\n}');
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default =
        'float ease(float t) {\r\n  return t < 0.5\r\n    ? +8.0 * pow(t, 4.0)\r\n    : -8.0 * pow(t - 1.0, 4.0) + 1.0;\r\n}');
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default = 'float ease(float t) {\r\n  return t * t * t;\r\n}');
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default =
        'float ease(float t) {\r\n  float f = t - 1.0;\r\n  return f * f * f + 1.0;\r\n}');
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default =
        'float ease(float t) {\r\n  return t < 0.5\r\n    ? 4.0 * t * t * t\r\n    : 0.5 * pow(2.0 * t - 2.0, 3.0) + 1.0;\r\n}');
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default = 'float ease(float t) {\r\n  return pow(t, 4.0);\r\n}');
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default =
        'float ease(float t) {\r\n  return pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;\r\n}');
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default =
        'float ease(float t) {\r\n  return t < 0.5\r\n    ? +8.0 * pow(t, 4.0)\r\n    : -8.0 * pow(t - 1.0, 4.0) + 1.0;\r\n}');
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default = 'float ease(float t) {\r\n  return pow(t, 5.0);\r\n}');
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default =
        "float ease(float t) {\r\n  return 1.0 + (pow(t - 1.0, 5.0)); // NOTE: fix original bug '-' -> '+'\r\n}");
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default =
        "float ease(float t) {\r\n  return t < 0.5\r\n    ? +16.0 * pow(t, 5.0)\r\n    : 0.5 * pow(2.0 * t - 2.0, 5.0) + 1.0; // NOTE: fix original bug, no '-'\r\n}\r\n");
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      i = s(r(1)),
      o = s(r(3));
    function s(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var a = (function() {
      function t(e, r) {
        !(function(t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, t),
          (this._load = [e.debounce(r, 5)]),
          (this._textures = {}),
          (this._pending = {}),
          (this._n = 0);
      }
      return (
        n(t, [
          {
            key: 'get',
            value: function(t, e, r, n) {
              var i = this,
                s = this._pending[e],
                a = this._textures[e];
              return (
                s
                  ? s.push(r)
                  : a
                  ? r && r()
                  : ((s = this._pending[e] = [r]),
                    this._n++,
                    (this._textures[e] = a = o.default.createTexture(
                      t,
                      e,
                      function() {
                        s.forEach(function(t) {
                          return t && t();
                        }),
                          delete i._pending[e],
                          --i._n ||
                            i._load.forEach(function(t) {
                              return t();
                            });
                      },
                      n
                    ))),
                a
              );
            },
          },
          {
            key: 'onLoad',
            value: function(t) {
              this.allLoaded() ? t() : this._load.push(t);
            },
          },
          {
            key: 'allLoaded',
            value: function() {
              return i.default.emptyObject(this._pending);
            },
          },
        ]),
        t
      );
    })();
    e.default = a;
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      i = o(r(1));
    o(r(3));
    function o(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var s = (function() {
      function t(e, r) {
        !(function(t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, t),
          (this._load = [e.debounce(r || function() {}, 5)]),
          (this._files = {}),
          (this._pending = {}),
          (this._n = 0);
      }
      return (
        n(t, [
          {
            key: '_transformFile',
            value: function(t, e) {
              return 'json' === e ? JSON.parse(t) : t;
            },
          },
          {
            key: 'get',
            value: function(t) {
              return this._files[t];
            },
          },
          {
            key: 'load',
            value: function(t, e, r) {
              var n = this,
                o = this._pending[t],
                s = this._files[t];
              return (
                o
                  ? o.push(e)
                  : s
                  ? e && e()
                  : ((o = this._pending[t] = [e]),
                    this._n++,
                    i.default.ajax(
                      t,
                      function(e) {
                        (n._files[t] = n._transformFile(e, r)),
                          o.forEach(function(e) {
                            return e && e(n._files[t]);
                          }),
                          delete n._pending[t],
                          --n._n ||
                            n._load.forEach(function(t) {
                              return t();
                            });
                      },
                      'arraybuffer' == r ? r : void 0
                    )),
                s
              );
            },
          },
          {
            key: 'onLoad',
            value: function(t) {
              this.allLoaded() ? t() : this._load.push(t);
            },
          },
          {
            key: 'allLoaded',
            value: function() {
              return i.default.emptyObject(this._pending);
            },
          },
        ]),
        t
      );
    })();
    e.default = s;
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      i = a(r(58)),
      o = a(r(59)),
      s = a(r(1));
    function a(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var u = (function() {
      function t(e, r, n) {
        !(function(t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, t),
          (this._gl = e),
          (this._modules = {
            default: new i.default(e, r, n),
            sdf: new o.default(e, r, n),
          });
      }
      return (
        n(t, [
          {
            key: 'clear',
            value: function() {
              for (var t in this._modules) this._modules[t].clear();
            },
          },
          {
            key: 'isSDF',
            value: function(t) {
              return !(!s.default.isObject(t) || 'sdf' !== t.type);
            },
          },
          {
            key: 'getEngine',
            value: function(t) {
              return this.isSDF(t) ? this._modules.sdf : this._modules.default;
            },
          },
          {
            key: 'bind',
            value: function() {
              for (var t in this._modules) this._modules[t].bind();
            },
          },
          {
            key: 'remove',
            value: function() {
              for (var t in this._modules)
                this._modules[t].remove && this._modules[t].remove();
            },
          },
        ]),
        t
      );
    })();
    e.default = u;
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (function() {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      return function(e, r, n) {
        return r && t(e.prototype, r), n && t(e, n), e;
      };
    })();
    var i = (function() {
      function t(e, r, n) {
        !(function(t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, t),
          (this._gl = e),
          (this._size = 1024),
          (this._canvas = document.createElement('canvas')),
          (this._canvas.width = this._canvas.height = this._size),
          (this._canvas.style.width = this._canvas.style.height =
            this._size + 'px'),
          (this._canvas.style.display = 'none'),
          (this._el = document.body.appendChild(this._canvas)),
          (this._context = this._canvas.getContext('2d')),
          (this._context.fillStyle = 'white'),
          (this._context.textAlign = 'left'),
          (this._context.textBaseline = 'top'),
          (this._rendered = this._texts = this._x = this._y = this._height = void 0),
          (this.texture = this._gl.createTexture());
      }
      return (
        n(t, [
          {
            key: 'clear',
            value: function() {
              (this._rendered = {}),
                this._context.clearRect(0, 0, this._size, this._size),
                (this._height = this._x = this._y = 0);
            },
          },
          {
            key: 'setFont',
            value: function(t) {
              var e = t ? t.size + 'px ' + t.type : void 0;
              (this._rendered[e] = this._texts = this._rendered[e] || {}),
                (this._context.font = e),
                (this._x = 0),
                (this._y += this._height),
                (this._height = t ? t.size + 1 : NaN);
            },
          },
          {
            key: 'getTexture',
            value: function(t, e) {
              return e(), this.texture;
            },
          },
          {
            key: '_getText',
            value: function(t) {
              var e = this._texts[t];
              if (!e) {
                var r = this._context.measureText(t).width;
                this._x + r > this._size &&
                  ((this._x = 0), (this._y += this._height)),
                  this._context.fillText(t, this._x, this._y),
                  (this._texts[t] = e = {
                    width: r,
                    height: this._height,
                    left: this._x / this._size,
                    right: (this._x + r) / this._size,
                    top: this._y / this._size,
                    bottom: (this._y + this._height) / this._size,
                  }),
                  (this._x += r);
              }
              return e;
            },
          },
          {
            key: 'get',
            value: function(t, e, r) {
              var n = this._getText(t),
                i = e <= 0.5 ? 0 : -n.width,
                o = r <= 0.5 ? 0 : -n.height;
              return [
                {
                  width: n.width,
                  height: n.height,
                  left: n.left,
                  right: n.right,
                  top: n.top,
                  bottom: n.bottom,
                  dx: i,
                  dy: o,
                },
              ];
            },
          },
          {
            key: 'steps',
            value: function(t) {
              return 1;
            },
          },
          {
            key: 'bind',
            value: function() {
              this._gl.bindTexture(this._gl.TEXTURE_2D, this.texture),
                this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, !1),
                this._gl.texParameteri(
                  this._gl.TEXTURE_2D,
                  this._gl.TEXTURE_MAG_FILTER,
                  this._gl.NEAREST
                ),
                this._gl.texParameteri(
                  this._gl.TEXTURE_2D,
                  this._gl.TEXTURE_MIN_FILTER,
                  this._gl.NEAREST
                ),
                this._gl.texImage2D(
                  this._gl.TEXTURE_2D,
                  0,
                  this._gl.RGBA,
                  this._gl.RGBA,
                  this._gl.UNSIGNED_BYTE,
                  this._canvas
                ),
                this._gl.bindTexture(this._gl.TEXTURE_2D, null);
            },
          },
          {
            key: 'remove',
            value: function() {
              this._context && this._el.parentNode.removeChild(this._el);
            },
          },
          {
            key: 'fontSize',
            get: function() {
              return this._height - 1;
            },
          },
        ]),
        t
      );
    })();
    e.default = i;
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      i = s(r(60)),
      o = s(r(62));
    function s(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function a(t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    }
    var u = 512,
      f = (function() {
        function t(e, r, n) {
          var o = this;
          a(this, t),
            (this.width = u),
            (this.height = u),
            this.clear(),
            (this._files = r),
            (this._gl = e),
            (this.atlas = new i.default(this._gl, function() {
              o._cachedGlyphs = {};
            })),
            (this._glyphs = {}),
            (this._rects = {}),
            (this._cachedGlyphs = {});
        }
        return (
          n(t, [
            { key: 'clear', value: function() {} },
            {
              key: 'setFont',
              value: function(t) {
                (this.fontStyle = t), (this.curFont = JSON.stringify(t));
              },
            },
            {
              key: 'getWidthAndHeight',
              value: function(t, e, r) {
                var n = 0,
                  i = 0,
                  o = 0,
                  s = [];
                t = t.replace(/\s+/g, ' ');
                for (var a = 0; a < t.length; a++) {
                  var u = this._getChar(t[a], e, r),
                    f = u.rect || {};
                  (o = Math.max(o, f.h - u.top)),
                    (n += ' ' === t[a] ? 0 : u.advance + 3),
                    (' ' !== t[a] && a != t.length - 1) ||
                      ((i = n > i ? n : i), s.push(n), (n = 0));
                }
                return { width: i, height: o, widthArray: s };
              },
            },
            {
              key: 'getTexture',
              value: function(t, e) {
                for (var r = 0; r < 128; r++)
                  this._getChar(String.fromCharCode(r), t);
                return e && e.apply(this, arguments), this.atlas.texture;
              },
            },
            {
              key: '_getCharArray',
              value: function(t, e, r, n, i, o) {
                var s = e.rect || {};
                return (
                  t.push({
                    width: s.w,
                    height: s.h,
                    left: s.x / this.atlas.width,
                    right: (s.x + s.w) / this.atlas.width,
                    bottom: (s.y + s.h) / this.atlas.height,
                    top: s.y / this.atlas.height,
                    dx: n,
                    dy: i + e.top + (r - s.h),
                    advance: e.advance,
                  }),
                  t
                );
              },
            },
            {
              key: 'alignText',
              value: function(t, e, r, n, i, o, s, a, u, f) {
                var h = e.split(' '),
                  c = 0,
                  l = n <= 0.5 ? (o / 3) * (h.length - 1) : -o / 3,
                  d = [];
                switch (t) {
                  case 'right':
                    for (var v = 0; v < h.length; v++) {
                      (c = r <= 0.5 ? 0 : -i), (c += u - a[v]), (e = h[v]);
                      for (var g = 0; g < e.length; g++) {
                        var m = this._getChar(e[g], f, s);
                        (c += 3),
                          (d = this._getCharArray(d, m, o, c, l, s)),
                          (c += m.advance);
                      }
                      l -= Math.floor(o / 3);
                    }
                    break;
                  case 'center':
                    for (v = 0; v < h.length; v++) {
                      (c = r <= 0.5 ? 0 : -i),
                        (c += (u - a[v]) / 2),
                        (e = h[v]);
                      for (g = 0; g < e.length; g++) {
                        var p = this._getChar(e[g], f, s);
                        (c += 3),
                          (d = this._getCharArray(d, p, o, c, l, s)),
                          (c += p.advance);
                      }
                      l -= Math.floor(o / 3);
                    }
                    break;
                  default:
                    c = r <= 0.5 ? 0 : -i;
                    for (v = 0; v < e.length; v++)
                      if (' ' !== e[v] || (0 == v && v == e.length - 1)) {
                        var y = this._getChar(e[v], f, s);
                        y.rect;
                        (c += 3),
                          (d = this._getCharArray(d, y, o, c, l, s)),
                          (c += y.advance);
                      } else (c = r <= 0.5 ? 0 : -i), (l -= Math.floor(o / 3));
                }
                return d;
              },
            },
            {
              key: '_getChar',
              value: function(t, e, r) {
                var n = this.curFont,
                  i = new o.default(e),
                  s = t.charCodeAt(0),
                  u = this._cachedGlyphs[n] || (this._cachedGlyphs[n] = {}),
                  f = (u[s] && u[s].glyph) || i.draw(t),
                  h = i.fontSize;
                this._rects[n] || (this._rects[n] = {});
                var c = (this._rects[n][t] = this.atlas.addGlyph(
                  s,
                  this.curFont,
                  f,
                  0,
                  h,
                  r
                ));
                return (
                  u[s] ||
                  (u[s] = new (function t(e, r, n, i) {
                    a(this, t);
                    (this.advance = e.advance),
                      (this.left = e.left - n - 1),
                      (this.top = e.top + n + 1),
                      (this.rect = r);
                  })(f, c, 0))
                );
              },
            },
            {
              key: 'get',
              value: function(t, e, r, n) {
                var i = this.fontStyle,
                  o = i.alignment;
                t = t.replace(/\s+/g, ' ');
                var s = this.getWidthAndHeight(t, i, n),
                  a = s.height,
                  u = s.width,
                  f = s.widthArray;
                return this.alignText(o, t, e, r, u, a, n, f, u, i);
              },
            },
            {
              key: 'steps',
              value: function(t) {
                return t.length;
              },
            },
            {
              key: 'bind',
              value: function() {
                this.atlas.updateTexture(this._gl);
              },
            },
            {
              key: 'isSDF',
              get: function() {
                return !0;
              },
            },
            {
              key: 'fontSize',
              get: function() {
                return 24;
              },
            },
          ]),
          t
        );
      })();
    e.default = f;
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      i = (function(t) {
        return t && t.__esModule ? t : { default: t };
      })(r(61));
    var o = 1024,
      s = (function() {
        function t(e, r) {
          !(function(t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this.width = o),
            (this.height = o),
            (this._resetCache = r),
            (this.bin = new i.default(this.width, this.height)),
            (this.index = {}),
            (this.ids = {}),
            (this.gl = e),
            (this.data = new Uint8Array(this.width * this.height));
        }
        return (
          n(t, [
            {
              key: '_createTexture',
              value: function() {
                this.dirty = !1;
                var t = this.gl,
                  e = t.createTexture();
                return (
                  t.bindTexture(t.TEXTURE_2D, e),
                  t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !1),
                  t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR),
                  t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR),
                  t.texParameteri(
                    t.TEXTURE_2D,
                    t.TEXTURE_WRAP_S,
                    t.CLAMP_TO_EDGE
                  ),
                  t.texParameteri(
                    t.TEXTURE_2D,
                    t.TEXTURE_WRAP_T,
                    t.CLAMP_TO_EDGE
                  ),
                  t.texImage2D(
                    t.TEXTURE_2D,
                    0,
                    t.ALPHA,
                    this.width,
                    this.height,
                    0,
                    t.ALPHA,
                    t.UNSIGNED_BYTE,
                    this.data
                  ),
                  t.bindTexture(t.TEXTURE_2D, null),
                  e
                );
              },
            },
            {
              key: 'getGlyphs',
              value: function() {
                var t = {},
                  e = void 0,
                  r = void 0,
                  n = void 0;
                for (var i in this.ids)
                  (r = (e = i.split('#'))[0]),
                    (n = e[1]),
                    t[r] || (t[r] = []),
                    t[r].push(n);
                return t;
              },
            },
            {
              key: 'getRects',
              value: function() {
                var t = {},
                  e = void 0,
                  r = void 0,
                  n = void 0;
                for (var i in this.ids)
                  (r = (e = i.split('#'))[0]),
                    (n = e[1]),
                    t[r] || (t[r] = {}),
                    (t[r][n] = this.index[i]);
                return t;
              },
            },
            {
              key: 'addGlyph',
              value: function(t, e, r, n, i, o) {
                if (!r) return null;
                var s = e + '#' + r.id;
                if (this.index[s])
                  return (
                    this.ids[s].indexOf(t) < 0 && this.ids[s].push(t),
                    this.index[s]
                  );
                var a = r.width + 2 * n,
                  u = r.height + 2 * n,
                  f = Math.floor(Math.pow(Math.ceil(i / 7), 2)),
                  h = a + 2 * f,
                  c = u + 2 * f;
                (h += 4 - (h % 4)), (c += 4 - (c % 4));
                var l = this.bin.packOne(h, c);
                if (
                  (l || (this.resize(), (l = this.bin.packOne(h, c)), o && o()),
                  !l)
                )
                  return null;
                if (((this.index[s] = l), (this.ids[s] = [t]), r.bitmap))
                  for (var d = this.data, v = r.bitmap, g = 0; g < u; g++)
                    for (
                      var m = this.width * (l.y + g + f) + l.x + f,
                        p = a * g,
                        y = 0;
                      y < a;
                      y++
                    )
                      d[m + y] = v[p + y];
                return (this.dirty = !0), l;
              },
            },
            {
              key: 'resize',
              value: function() {
                var t = this.width,
                  e = this.height;
                if (!(t >= 2048 || e >= 2048)) {
                  this._texture &&
                    (this.gl && this.gl.deleteTexture(this._texture),
                    (this._texture = null)),
                    (this.width *= 4),
                    (this.height *= 4),
                    this.bin.resize(this.width, this.height);
                  for (
                    var r = new ArrayBuffer(this.width * this.height), n = 0;
                    n < e;
                    n++
                  ) {
                    var i = new Uint8Array(this.data.buffer, e * n, t);
                    new Uint8Array(r, e * n * 4, t).set(i);
                  }
                  (this.data = new Uint8Array(r)), this._resetCache();
                }
              },
            },
            { key: 'bind', value: function(t) {} },
            {
              key: 'updateTexture',
              value: function() {
                var t = this.gl;
                return (
                  this._texture || (this._texture = this._createTexture()),
                  this.dirty &&
                    (t.bindTexture(t.TEXTURE_2D, this._texture),
                    t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !1),
                    t.texSubImage2D(
                      t.TEXTURE_2D,
                      0,
                      0,
                      0,
                      this.width,
                      this.height,
                      t.ALPHA,
                      t.UNSIGNED_BYTE,
                      this.data
                    ),
                    t.bindTexture(t.TEXTURE_2D, null),
                    (this.dirty = !1)),
                  this._texture
                );
              },
            },
            {
              key: 'texture',
              get: function() {
                return this._texture;
              },
            },
          ]),
          t
        );
      })();
    e.default = s;
  },
  function(t, e, r) {
    t.exports = (function() {
      function t(t, e, r) {
        (r = r || {}),
          (this.w = t || 64),
          (this.h = e || 64),
          (this.autoResize = !!r.autoResize),
          (this.shelves = []),
          (this.freebins = []),
          (this.stats = {}),
          (this.bins = {}),
          (this.maxId = 0);
      }
      function e(t, e, r) {
        (this.x = 0), (this.y = t), (this.w = this.free = e), (this.h = r);
      }
      return (
        (t.prototype.pack = function(t, e) {
          (t = [].concat(t)), (e = e || {});
          for (var r, n, i, o, s = [], a = 0; a < t.length; a++)
            if (
              ((r = t[a].w || t[a].width),
              (n = t[a].h || t[a].height),
              (i = t[a].id),
              r && n)
            ) {
              if (!(o = this.packOne(r, n, i))) continue;
              e.inPlace && ((t[a].x = o.x), (t[a].y = o.y), (t[a].id = o.id)),
                s.push(o);
            }
          if (this.shelves.length > 0) {
            for (var u = 0, f = 0, h = 0; h < this.shelves.length; h++) {
              var c = this.shelves[h];
              (f += c.h), (u = Math.max(c.w - c.free, u));
            }
            this.resize(u, f);
          }
          return s;
        }),
        (t.prototype.packOne = function(t, r, n) {
          var i,
            o,
            s,
            a,
            u,
            f,
            h,
            c,
            l = { freebin: -1, shelf: -1, waste: 1 / 0 },
            d = 0;
          if ('string' == typeof n || 'number' == typeof n) {
            if ((i = this.getBin(n))) return this.ref(i), i;
            'number' == typeof n && (this.maxId = Math.max(n, this.maxId));
          } else n = ++this.maxId;
          for (a = 0; a < this.freebins.length; a++) {
            if (r === (i = this.freebins[a]).maxh && t === i.maxw)
              return this.allocFreebin(a, t, r, n);
            r > i.maxh ||
              t > i.maxw ||
              (r <= i.maxh &&
                t <= i.maxw &&
                (s = i.maxw * i.maxh - t * r) < l.waste &&
                ((l.waste = s), (l.freebin = a)));
          }
          for (a = 0; a < this.shelves.length; a++)
            if (((d += (o = this.shelves[a]).h), !(t > o.free))) {
              if (r === o.h) return this.allocShelf(a, t, r, n);
              r > o.h ||
                (r < o.h &&
                  (s = (o.h - r) * t) < l.waste &&
                  ((l.freebin = -1), (l.waste = s), (l.shelf = a)));
            }
          return -1 !== l.freebin
            ? this.allocFreebin(l.freebin, t, r, n)
            : -1 !== l.shelf
            ? this.allocShelf(l.shelf, t, r, n)
            : r <= this.h - d && t <= this.w
            ? ((o = new e(d, this.w, r)),
              this.allocShelf(this.shelves.push(o) - 1, t, r, n))
            : this.autoResize
            ? ((u = f = this.h),
              ((h = c = this.w) <= u || t > h) && (c = 2 * Math.max(t, h)),
              (u < h || r > u) && (f = 2 * Math.max(r, u)),
              this.resize(c, f),
              this.packOne(t, r, n))
            : null;
        }),
        (t.prototype.allocFreebin = function(t, e, r, n) {
          var i = this.freebins.splice(t, 1)[0];
          return (
            (i.id = n),
            (i.w = e),
            (i.h = r),
            (i.refcount = 0),
            (this.bins[n] = i),
            this.ref(i),
            i
          );
        }),
        (t.prototype.allocShelf = function(t, e, r, n) {
          var i = this.shelves[t].alloc(e, r, n);
          return (this.bins[n] = i), this.ref(i), i;
        }),
        (t.prototype.getBin = function(t) {
          return this.bins[t];
        }),
        (t.prototype.ref = function(t) {
          if (1 == ++t.refcount) {
            var e = t.h;
            this.stats[e] = 1 + (0 | this.stats[e]);
          }
          return t.refcount;
        }),
        (t.prototype.unref = function(t) {
          return 0 === t.refcount
            ? 0
            : (0 == --t.refcount &&
                (this.stats[t.h]--,
                delete this.bins[t.id],
                this.freebins.push(t)),
              t.refcount);
        }),
        (t.prototype.clear = function() {
          (this.shelves = []),
            (this.freebins = []),
            (this.stats = {}),
            (this.bins = {}),
            (this.maxId = 0);
        }),
        (t.prototype.resize = function(t, e) {
          (this.w = t), (this.h = e);
          for (var r = 0; r < this.shelves.length; r++)
            this.shelves[r].resize(t);
          return !0;
        }),
        (e.prototype.alloc = function(t, e, r) {
          if (t > this.free || e > this.h) return null;
          var n = this.x;
          return (
            (this.x += t),
            (this.free -= t),
            new (function(t, e, r, n, i) {
              (this.id = t),
                (this.x = e),
                (this.y = r),
                (this.w = n),
                (this.h = i),
                (this.maxw = n),
                (this.maxh = i),
                (this.refcount = 0);
            })(r, n, this.y, t, e)
          );
        }),
        (e.prototype.resize = function(t) {
          return (this.free += t - this.w), (this.w = t), !0;
        }),
        t
      );
    })();
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      i = (function(t) {
        return t && t.__esModule ? t : { default: t };
      })(r(63));
    var o = (function() {
      function t(e) {
        !(function(t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, t);
        var r = e.size || 23;
        (this.fontSize = 4 * Math.round(r / 4)),
          (this.buffer = this.fontSize / 8),
          (this.radius = this.fontSize / 3),
          (this.cutoff = 0.25),
          (this.strokeText = e.strokeText || !1),
          (this.fontFamily = e.family || 'sans-serif'),
          (this.fontWeight = e.weight || 'normal');
        var n = (this.size = this.fontSize + 2 * this.buffer);
        (this.canvas = document.createElement('canvas')),
          (this.canvas.width = this.canvas.height = n),
          (this.ctx = this.canvas.getContext('2d')),
          (this.ctx.font =
            this.fontWeight + ' ' + this.fontSize + 'px ' + this.fontFamily),
          (this.ctx.textBaseline = 'middle'),
          (this.ctx.fillStyle = 'black'),
          (this.middle = Math.round(
            (n / 2) * (navigator.userAgent.indexOf('Gecko/') >= 0 ? 1.2 : 1)
          )),
          (this.gridOuter = new Float64Array(n * n)),
          (this.gridInner = new Float64Array(n * n)),
          (this.f = new Float64Array(n)),
          (this.z = new Float64Array(n + 1)),
          (this.v = new Uint16Array(n)),
          (this.trimmer = new i.default(0)),
          (this.count = 1);
      }
      return (
        n(t, [
          {
            key: '_makeRGBAImageData',
            value: function(t, e, r) {
              for (
                var n = this.ctx.createImageData(e, r), i = n.data, o = 0;
                o < t.length;
                o++
              )
                (i[4 * o + 0] = t[o]),
                  (i[4 * o + 1] = t[o]),
                  (i[4 * o + 2] = t[o]),
                  (i[4 * o + 3] = 255);
              return n;
            },
          },
          {
            key: 'draw',
            value: function(t) {
              this.ctx.clearRect(0, 0, this.size, this.size),
                this.strokeText
                  ? this.ctx.strokeText(t, this.buffer, this.middle)
                  : this.ctx.fillText(t, this.buffer, this.middle);
              for (
                var e = this.ctx.getImageData(0, 0, this.size, this.size),
                  r = new Uint8ClampedArray(this.size * this.size),
                  n = 0;
                n < this.size * this.size;
                n++
              ) {
                var i = e.data[4 * n + 3] / 255;
                (this.gridOuter[n] =
                  1 === i
                    ? 0
                    : 0 === i
                    ? 1e20
                    : Math.pow(Math.max(0, 0.5 - i), 2)),
                  (this.gridInner[n] =
                    1 === i
                      ? 1e20
                      : 0 === i
                      ? 0
                      : Math.pow(Math.max(0, i - 0.5), 2));
              }
              this._edt(
                this.gridOuter,
                this.size,
                this.size,
                this.f,
                this.v,
                this.z
              ),
                this._edt(
                  this.gridInner,
                  this.size,
                  this.size,
                  this.f,
                  this.v,
                  this.z
                );
              for (var o = 0; o < this.size * this.size; o++) {
                var s =
                  Math.sqrt(this.gridOuter[o]) - Math.sqrt(this.gridInner[o]);
                r[o] = Math.max(
                  0,
                  Math.min(
                    255,
                    Math.round(255 - 255 * (s / this.radius + this.cutoff))
                  )
                );
              }
              var a = {
                id: t.charCodeAt(0),
                bitmap: r,
                left: 0,
                top: 0,
                width: this.size,
                height: this.size,
                advance: 4,
              };
              if (
                (32 !== a.id && this.trimmer.process(a),
                65 == a.id && this.count)
              ) {
                for (
                  var u = a.bitmap, f = a.width, h = [], c = 0;
                  c < u.length;
                  c += f
                )
                  h.push(Array.from(u.slice(c, c + f)));
                this.count--;
              }
              return a;
            },
          },
          {
            key: '_edt',
            value: function(t, e, r, n, i, o) {
              for (var s = 0; s < e; s++) this._edt1d(t, s, e, r, n, i, o);
              for (var a = 0; a < r; a++) this._edt1d(t, a * e, 1, e, n, i, o);
            },
          },
          {
            key: '_edt1d',
            value: function(t, e, r, n, i, o, s) {
              var a, u, f, h;
              for (o[0] = 0, s[0] = -1e20, s[1] = 1e20, a = 0; a < n; a++)
                i[a] = t[e + a * r];
              for (a = 1, u = 0, f = 0; a < n; a++) {
                do {
                  (h = o[u]), (f = (i[a] - i[h] + a * a - h * h) / (a - h) / 2);
                } while (f <= s[u--]);
                (o[(u += 2)] = a), (s[u] = f), (s[u + 1] = 1e20);
              }
              for (a = 0, u = 0; a < n; a++) {
                for (; s[u + 1] < a; ) u++;
                (h = o[u]), (t[e + a * r] = i[h] + (a - h) * (a - h));
              }
            },
          },
        ]),
        t
      );
    })();
    e.default = o;
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (function() {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      return function(e, r, n) {
        return r && t(e.prototype, r), n && t(e, n), e;
      };
    })();
    function i(t) {
      if (Array.isArray(t)) {
        for (var e = 0, r = Array(t.length); e < t.length; e++) r[e] = t[e];
        return r;
      }
      return Array.from(t);
    }
    var o = (function() {
      function t(e) {
        !(function(t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, t),
          (this.buffer = void 0 == e ? 0 : e);
      }
      return (
        n(t, [
          {
            key: '_findRowBounds',
            value: function(t) {
              for (var e = 0, r = 0, n = 0; n < t.length; n++)
                if (t[n] > 170) {
                  e = n;
                  break;
                }
              e || (e = t.length);
              for (var i = t.length; i > -1; i--)
                if (t[i] > 170) {
                  r = i;
                  break;
                }
              return r || (r = -1), [e, r];
            },
          },
          {
            key: '_findGlyphBounds',
            value: function(t) {
              for (
                var e = t.bitmap,
                  r = t.width,
                  n = [],
                  i = [],
                  o = [],
                  s = (e.length, 0);
                s < e.length;
                s += r
              ) {
                n = e.slice(s, s + r);
                var a = this._findRowBounds(n);
                i.push(a[0]), o.push(a[1]);
              }
              return [Math.min.apply(Math, i), Math.max.apply(Math, o)];
            },
          },
          {
            key: 'process',
            value: function(t) {
              for (
                var e = t.bitmap,
                  r = t.width,
                  n = this._findGlyphBounds(t),
                  o = n[0],
                  s = n[1],
                  a = this.buffer,
                  u = [],
                  f = s - o + 1 + 2 * a,
                  h = [],
                  c = 0;
                c < e.length;
                c += r
              ) {
                h = e.slice(c, c + r);
                var l = Array.apply(null, Array(a)).map(
                  Number.prototype.valueOf,
                  0
                );
                u.push.apply(u, i(l).concat(i(h.slice(o, s + 1)), i(l)));
              }
              (t.bitmap = new Uint8ClampedArray(u)),
                (t.width = f),
                (t.advance = f);
            },
          },
        ]),
        t
      );
    })();
    e.default = o;
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (function() {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      return function(e, r, n) {
        return r && t(e.prototype, r), n && t(e, n), e;
      };
    })();
    var i = (function() {
      function t() {
        !(function(t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, t),
          (this._enable = !0);
      }
      return (
        n(t, [
          {
            key: 'debounce',
            value: function(t, e, r) {
              var n = this,
                i = arguments,
                o = void 0,
                s = void 0,
                a = void 0,
                u = void 0,
                f = void 0,
                h = function i() {
                  var h = Date.now - u;
                  h < e && h > 0
                    ? (o = setTimeout(i, e - h))
                    : ((o = null),
                      r ||
                        (n._enable && (f = t.apply(a, s)),
                        o || (a = s = null)));
                };
              return function() {
                (a = n), (s = i), (u = Date.now);
                var c = r && !o;
                return (
                  o || (o = setTimeout(h, e)),
                  c && (n._enable && (f = t.apply(a, s)), (a = s = null)),
                  f
                );
              };
            },
          },
          {
            key: 'disable',
            value: function() {
              this._enable = !1;
            },
          },
        ]),
        t
      );
    })();
    e.default = i;
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      i = (function(t) {
        return t && t.__esModule ? t : { default: t };
      })(r(5));
    function o(t, e) {
      t.indexOf(e) >= 0 || t.push(e);
    }
    var s = (function() {
      function t(e, r, n, o, s, a) {
        var u = this;
        !(function(t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, t),
          (this._layers = e),
          (this._insertTempLayer = r),
          (this._draw = n),
          (this._nodes = o),
          (this._edges = s),
          (this._checkUniqId = a),
          (this._toAddEdges = []),
          (this._toAddNodes = []),
          (this._toRemoveEdges = []),
          (this._toRemoveNodes = []),
          (this._nPos = {}),
          (this._ePos = {}),
          (this._eDirs = {}),
          o.forEach(function(t, e) {
            (u._nPos[t.uniqid] = e), (u._eDirs[t.uniqid] = {});
          }),
          s.forEach(function(t, e) {
            var r = i.default.edgeSource(t),
              n = i.default.edgeTarget(t),
              o = r.uniqid || r.__uniqid,
              s = n.uniqid || n.__uniqid;
            ((u._eDirs[o] || (u._eDirs[o] = {}))[s] = t),
              (u._ePos[t.uniqid] = e);
          }),
          (this._actualTempNodes = []),
          (this._actualTempEdges = []);
      }
      return (
        n(t, [
          {
            key: '_doRemoveNodes',
            value: function(t) {
              var e = this;
              t.forEach(function(t) {
                if (void 0 !== t.uniqid) {
                  if (void 0 !== e._nPos[t.uniqid]) {
                    var r = e._nPos[t.uniqid];
                    e._layers.main.removeNodeAtPos(r), delete e._nPos[t.uniqid];
                  } else
                    for (var n = 0; n < e._actualTempNodes.length; n++)
                      if (e._actualTempNodes[n] === t) {
                        e._actualTempNodes.splice(n, 1);
                        break;
                      }
                  (t.__uniqid = t.uniqid), delete t.uniqid;
                }
              });
            },
          },
          {
            key: '_doRemoveEdges',
            value: function(t) {
              var e = this;
              t.forEach(function(t) {
                if (void 0 !== t.uniqid) {
                  var r = i.default.edgeSource(t),
                    n = i.default.edgeTarget(t);
                  if (
                    (delete (e._eDirs[r.uniqid || r.__uniqid] || {})[
                      n.uniqid || n.__uniqid
                    ],
                    void 0 !== e._ePos[t.uniqid])
                  ) {
                    var o = e._ePos[t.uniqid];
                    e._layers.main.removeEdgeAtPos(o), delete e._ePos[t.uniqid];
                  } else
                    for (var s = 0; s < e._actualTempEdges.length; s++)
                      if (e._actualTempEdges[s] === t) {
                        e._actualTempEdges.splice(s, 1);
                        break;
                      }
                  (t.__uniqid = t.uniqid), delete t.uniqid;
                }
              });
            },
          },
          {
            key: '_doAddEdges',
            value: function() {
              var t = this;
              this._toAddEdges.forEach(function(e) {
                if (
                  (void 0 !== t._ePos[e.uniqid] && t._doRemoveEdges([e]),
                  void 0 !== e.uniqid)
                )
                  return (
                    console.error(e),
                    void console.error(
                      'This edge has been already added, if you want to add same edge twice, create new object with same properties'
                    )
                  );
                t._checkUniqId(e), o(t._actualTempEdges, e);
              });
            },
          },
          {
            key: '_doAddNodes',
            value: function(t) {
              var e = this;
              this._toAddNodes.forEach(function(t) {
                if (
                  (void 0 !== e._nPos[t.uniqid] && e._doRemoveNodes([t]),
                  void 0 !== t.uniqid)
                )
                  return (
                    console.error(t),
                    void console.error(
                      'This node has been already added, if you want to add same node twice, create new object with same properties'
                    )
                  );
                e._checkUniqId(t),
                  (e._eDirs[t.uniqid] = {}),
                  o(e._actualTempNodes, t);
              });
            },
          },
          {
            key: 'addEdge',
            value: function(t) {
              var e = i.default.edgeSource(t),
                r = i.default.edgeTarget(t),
                n = r.uniqid || r.__uniqid,
                o = e.uniqid || e.__uniqid;
              return (
                (this._eDirs[o] || {})[n] && this._doRemoveEdges([t]),
                (this._eDirs[n] || {})[o]
                  ? (this._toAddEdges.push(this._eDirs[n][o]),
                    this._doRemoveEdges([this._eDirs[n][o]]),
                    this._toAddEdges.push((this._eDirs[o][n] = t)),
                    this)
                  : (this._toAddEdges.push(t), this)
              );
            },
          },
          {
            key: 'addNode',
            value: function(t) {
              return this._toAddNodes.push(t), this;
            },
          },
          {
            key: 'removeNode',
            value: function(t) {
              return this._toRemoveNodes.push(t), this;
            },
          },
          {
            key: 'removeEdge',
            value: function(t) {
              return this._toRemoveEdges.push(t), this;
            },
          },
          {
            key: 'applyChanges',
            value: function() {
              return 0 === this._toRemoveEdges.length &&
                0 === this._toRemoveNodes.length &&
                0 === this._toAddEdges.length &&
                0 === this._toAddNodes.length
                ? this
                : ((this._actualTempNodes = this._layers.temp
                    ? this._layers.temp.nodes
                    : []),
                  (this._actualTempEdges = this._layers.temp
                    ? this._layers.temp.edges
                    : []),
                  this._doRemoveEdges(this._toRemoveEdges),
                  this._doRemoveNodes(this._toRemoveNodes),
                  this._doAddNodes(),
                  this._doAddEdges(),
                  (this._toAddEdges = []),
                  (this._toAddNodes = []),
                  (this._toRemoveEdges = []),
                  (this._toRemoveNodes = []),
                  this._insertTempLayer(),
                  this._layers.temp.set(
                    this._actualTempNodes,
                    this._actualTempEdges
                  ),
                  this._draw(),
                  this);
            },
          },
        ]),
        t
      );
    })();
    e.default = s;
  },
  function(t, e, r) {
    'use strict';
    r.r(e);
    var n = r(2),
      i = r.n(n);
    var o = function(t) {
      if (!i()(t)) throw new TypeError('input must be an array');
      if (0 === t.length) throw new TypeError('input must not be empty');
      for (var e = t[0], r = 1; r < t.length; r++) t[r] > e && (e = t[r]);
      return e;
    };
    var s = function(t) {
      if (!i()(t)) throw new TypeError('input must be an array');
      if (0 === t.length) throw new TypeError('input must not be empty');
      for (var e = t[0], r = 1; r < t.length; r++) t[r] < e && (e = t[r]);
      return e;
    };
    var a = function(t) {
      var e,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if (!i()(t)) throw new TypeError('input must be an array');
      if (0 === t.length) throw new TypeError('input must not be empty');
      if (void 0 !== r.output) {
        if (!i()(r.output))
          throw new TypeError('output option must be an array if specified');
        e = r.output;
      } else e = new Array(t.length);
      var n = s(t),
        a = o(t);
      if (n === a)
        throw new RangeError(
          'minimum and maximum input values are equal. Cannot rescale a constant array'
        );
      var u = r.min,
        f = void 0 === u ? (r.autoMinMax ? n : 0) : u,
        h = r.max,
        c = void 0 === h ? (r.autoMinMax ? a : 1) : h;
      if (f >= c)
        throw new RangeError('min option must be smaller than max option');
      for (var l = (c - f) / (a - n), d = 0; d < t.length; d++)
        e[d] = (t[d] - n) * l + f;
      return e;
    };
    class u {
      constructor(t) {
        var e,
          r,
          n,
          i,
          o,
          s,
          a,
          u,
          f,
          h = (t = I.checkMatrix(t)).clone(),
          c = h.rows,
          l = h.columns,
          d = new Array(c),
          v = 1;
        for (e = 0; e < c; e++) d[e] = e;
        for (u = new Array(c), r = 0; r < l; r++) {
          for (e = 0; e < c; e++) u[e] = h.get(e, r);
          for (e = 0; e < c; e++) {
            for (f = Math.min(e, r), o = 0, n = 0; n < f; n++)
              o += h.get(e, n) * u[n];
            (u[e] -= o), h.set(e, r, u[e]);
          }
          for (i = r, e = r + 1; e < c; e++)
            Math.abs(u[e]) > Math.abs(u[i]) && (i = e);
          if (i !== r) {
            for (n = 0; n < l; n++)
              (s = h.get(i, n)), h.set(i, n, h.get(r, n)), h.set(r, n, s);
            (a = d[i]), (d[i] = d[r]), (d[r] = a), (v = -v);
          }
          if (r < c && 0 !== h.get(r, r))
            for (e = r + 1; e < c; e++) h.set(e, r, h.get(e, r) / h.get(r, r));
        }
        (this.LU = h), (this.pivotVector = d), (this.pivotSign = v);
      }
      isSingular() {
        for (var t = this.LU, e = t.columns, r = 0; r < e; r++)
          if (0 === t[r][r]) return !0;
        return !1;
      }
      solve(t) {
        t = C.checkMatrix(t);
        var e = this.LU;
        if (e.rows !== t.rows) throw new Error('Invalid matrix dimensions');
        if (this.isSingular()) throw new Error('LU matrix is singular');
        var r,
          n,
          i,
          o = t.columns,
          s = t.subMatrixRow(this.pivotVector, 0, o - 1),
          a = e.columns;
        for (i = 0; i < a; i++)
          for (r = i + 1; r < a; r++)
            for (n = 0; n < o; n++) s[r][n] -= s[i][n] * e[r][i];
        for (i = a - 1; i >= 0; i--) {
          for (n = 0; n < o; n++) s[i][n] /= e[i][i];
          for (r = 0; r < i; r++)
            for (n = 0; n < o; n++) s[r][n] -= s[i][n] * e[r][i];
        }
        return s;
      }
      get determinant() {
        var t = this.LU;
        if (!t.isSquare()) throw new Error('Matrix must be square');
        for (var e = this.pivotSign, r = t.columns, n = 0; n < r; n++)
          e *= t[n][n];
        return e;
      }
      get lowerTriangularMatrix() {
        for (
          var t = this.LU, e = t.rows, r = t.columns, n = new C(e, r), i = 0;
          i < e;
          i++
        )
          for (var o = 0; o < r; o++)
            n[i][o] = i > o ? t[i][o] : i === o ? 1 : 0;
        return n;
      }
      get upperTriangularMatrix() {
        for (
          var t = this.LU, e = t.rows, r = t.columns, n = new C(e, r), i = 0;
          i < e;
          i++
        )
          for (var o = 0; o < r; o++) n[i][o] = i <= o ? t[i][o] : 0;
        return n;
      }
      get pivotPermutationVector() {
        return this.pivotVector.slice();
      }
    }
    function f(t, e) {
      var r = 0;
      return Math.abs(t) > Math.abs(e)
        ? ((r = e / t), Math.abs(t) * Math.sqrt(1 + r * r))
        : 0 !== e
        ? ((r = t / e), Math.abs(e) * Math.sqrt(1 + r * r))
        : 0;
    }
    function h(t, e, r) {
      for (var n = new Array(t), i = 0; i < t; i++) {
        n[i] = new Array(e);
        for (var o = 0; o < e; o++) n[i][o] = r;
      }
      return n;
    }
    class c {
      constructor(t, e = {}) {
        var r = (t = I.checkMatrix(t)).rows,
          n = t.columns;
        const {
          computeLeftSingularVectors: i = !0,
          computeRightSingularVectors: o = !0,
          autoTranspose: s = !1,
        } = e;
        var a,
          u = Boolean(i),
          c = Boolean(o),
          l = !1;
        if (r < n)
          if (s) {
            (r = (a = t.transpose()).rows), (n = a.columns), (l = !0);
            var d = u;
            (u = c), (c = d);
          } else
            (a = t.clone()),
              console.warn(
                'Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose'
              );
        else a = t.clone();
        var v = Math.min(r, n),
          g = Math.min(r + 1, n),
          m = new Array(g),
          p = h(r, v, 0),
          y = h(n, n, 0),
          _ = new Array(n),
          x = new Array(r),
          w = new Array(g);
        for (let t = 0; t < g; t++) w[t] = t;
        var b = Math.min(r - 1, n),
          M = Math.max(0, Math.min(n - 2, r)),
          E = Math.max(b, M);
        for (let t = 0; t < E; t++) {
          if (t < b) {
            m[t] = 0;
            for (let e = t; e < r; e++) m[t] = f(m[t], a[e][t]);
            if (0 !== m[t]) {
              a[t][t] < 0 && (m[t] = -m[t]);
              for (let e = t; e < r; e++) a[e][t] /= m[t];
              a[t][t] += 1;
            }
            m[t] = -m[t];
          }
          for (let e = t + 1; e < n; e++) {
            if (t < b && 0 !== m[t]) {
              let n = 0;
              for (let i = t; i < r; i++) n += a[i][t] * a[i][e];
              n = -n / a[t][t];
              for (let i = t; i < r; i++) a[i][e] += n * a[i][t];
            }
            _[e] = a[t][e];
          }
          if (u && t < b) for (let e = t; e < r; e++) p[e][t] = a[e][t];
          if (t < M) {
            _[t] = 0;
            for (let e = t + 1; e < n; e++) _[t] = f(_[t], _[e]);
            if (0 !== _[t]) {
              _[t + 1] < 0 && (_[t] = 0 - _[t]);
              for (let e = t + 1; e < n; e++) _[e] /= _[t];
              _[t + 1] += 1;
            }
            if (((_[t] = -_[t]), t + 1 < r && 0 !== _[t])) {
              for (let e = t + 1; e < r; e++) x[e] = 0;
              for (let e = t + 1; e < r; e++)
                for (let r = t + 1; r < n; r++) x[e] += _[r] * a[e][r];
              for (let e = t + 1; e < n; e++) {
                let n = -_[e] / _[t + 1];
                for (let i = t + 1; i < r; i++) a[i][e] += n * x[i];
              }
            }
            if (c) for (let e = t + 1; e < n; e++) y[e][t] = _[e];
          }
        }
        let S = Math.min(n, r + 1);
        if (
          (b < n && (m[b] = a[b][b]),
          r < S && (m[S - 1] = 0),
          M + 1 < S && (_[M] = a[M][S - 1]),
          (_[S - 1] = 0),
          u)
        ) {
          for (let t = b; t < v; t++) {
            for (let e = 0; e < r; e++) p[e][t] = 0;
            p[t][t] = 1;
          }
          for (let t = b - 1; t >= 0; t--)
            if (0 !== m[t]) {
              for (let e = t + 1; e < v; e++) {
                let n = 0;
                for (let i = t; i < r; i++) n += p[i][t] * p[i][e];
                n = -n / p[t][t];
                for (let i = t; i < r; i++) p[i][e] += n * p[i][t];
              }
              for (let e = t; e < r; e++) p[e][t] = -p[e][t];
              p[t][t] = 1 + p[t][t];
              for (let e = 0; e < t - 1; e++) p[e][t] = 0;
            } else {
              for (let e = 0; e < r; e++) p[e][t] = 0;
              p[t][t] = 1;
            }
        }
        if (c)
          for (let t = n - 1; t >= 0; t--) {
            if (t < M && 0 !== _[t])
              for (let e = t + 1; e < n; e++) {
                let r = 0;
                for (let i = t + 1; i < n; i++) r += y[i][t] * y[i][e];
                r = -r / y[t + 1][t];
                for (let i = t + 1; i < n; i++) y[i][e] += r * y[i][t];
              }
            for (let e = 0; e < n; e++) y[e][t] = 0;
            y[t][t] = 1;
          }
        for (var T = S - 1, P = Number.EPSILON; S > 0; ) {
          let t, e;
          for (t = S - 2; t >= -1 && -1 !== t; t--) {
            const e =
              Number.MIN_VALUE + P * Math.abs(m[t] + Math.abs(m[t + 1]));
            if (Math.abs(_[t]) <= e || Number.isNaN(_[t])) {
              _[t] = 0;
              break;
            }
          }
          if (t === S - 2) e = 4;
          else {
            let r;
            for (r = S - 1; r >= t && r !== t; r--) {
              let e =
                (r !== S ? Math.abs(_[r]) : 0) +
                (r !== t + 1 ? Math.abs(_[r - 1]) : 0);
              if (Math.abs(m[r]) <= P * e) {
                m[r] = 0;
                break;
              }
            }
            r === t ? (e = 3) : r === S - 1 ? (e = 1) : ((e = 2), (t = r));
          }
          switch ((t++, e)) {
            case 1: {
              let e = _[S - 2];
              _[S - 2] = 0;
              for (let r = S - 2; r >= t; r--) {
                let i = f(m[r], e),
                  o = m[r] / i,
                  s = e / i;
                if (
                  ((m[r] = i),
                  r !== t && ((e = -s * _[r - 1]), (_[r - 1] = o * _[r - 1])),
                  c)
                )
                  for (let t = 0; t < n; t++)
                    (i = o * y[t][r] + s * y[t][S - 1]),
                      (y[t][S - 1] = -s * y[t][r] + o * y[t][S - 1]),
                      (y[t][r] = i);
              }
              break;
            }
            case 2: {
              let e = _[t - 1];
              _[t - 1] = 0;
              for (let n = t; n < S; n++) {
                let i = f(m[n], e),
                  o = m[n] / i,
                  s = e / i;
                if (((m[n] = i), (e = -s * _[n]), (_[n] = o * _[n]), u))
                  for (let e = 0; e < r; e++)
                    (i = o * p[e][n] + s * p[e][t - 1]),
                      (p[e][t - 1] = -s * p[e][n] + o * p[e][t - 1]),
                      (p[e][n] = i);
              }
              break;
            }
            case 3: {
              const e = Math.max(
                  Math.abs(m[S - 1]),
                  Math.abs(m[S - 2]),
                  Math.abs(_[S - 2]),
                  Math.abs(m[t]),
                  Math.abs(_[t])
                ),
                i = m[S - 1] / e,
                o = m[S - 2] / e,
                s = _[S - 2] / e,
                a = m[t] / e,
                h = _[t] / e,
                l = ((o + i) * (o - i) + s * s) / 2,
                d = i * s * (i * s);
              let v = 0;
              (0 === l && 0 === d) ||
                (v =
                  d /
                  (l +
                    (v =
                      l < 0
                        ? 0 - Math.sqrt(l * l + d)
                        : Math.sqrt(l * l + d))));
              let g = (a + i) * (a - i) + v,
                x = a * h;
              for (let e = t; e < S - 1; e++) {
                let i = f(g, x);
                0 === i && (i = Number.MIN_VALUE);
                let o = g / i,
                  s = x / i;
                if (
                  (e !== t && (_[e - 1] = i),
                  (g = o * m[e] + s * _[e]),
                  (_[e] = o * _[e] - s * m[e]),
                  (x = s * m[e + 1]),
                  (m[e + 1] = o * m[e + 1]),
                  c)
                )
                  for (let t = 0; t < n; t++)
                    (i = o * y[t][e] + s * y[t][e + 1]),
                      (y[t][e + 1] = -s * y[t][e] + o * y[t][e + 1]),
                      (y[t][e] = i);
                if (
                  (0 === (i = f(g, x)) && (i = Number.MIN_VALUE),
                  (o = g / i),
                  (s = x / i),
                  (m[e] = i),
                  (g = o * _[e] + s * m[e + 1]),
                  (m[e + 1] = -s * _[e] + o * m[e + 1]),
                  (x = s * _[e + 1]),
                  (_[e + 1] = o * _[e + 1]),
                  u && e < r - 1)
                )
                  for (let t = 0; t < r; t++)
                    (i = o * p[t][e] + s * p[t][e + 1]),
                      (p[t][e + 1] = -s * p[t][e] + o * p[t][e + 1]),
                      (p[t][e] = i);
              }
              (_[S - 2] = g), 1;
              break;
            }
            case 4:
              if (m[t] <= 0 && ((m[t] = m[t] < 0 ? -m[t] : 0), c))
                for (let e = 0; e <= T; e++) y[e][t] = -y[e][t];
              for (; t < T && !(m[t] >= m[t + 1]); ) {
                let e = m[t];
                if (((m[t] = m[t + 1]), (m[t + 1] = e), c && t < n - 1))
                  for (let r = 0; r < n; r++)
                    (e = y[r][t + 1]), (y[r][t + 1] = y[r][t]), (y[r][t] = e);
                if (u && t < r - 1)
                  for (let n = 0; n < r; n++)
                    (e = p[n][t + 1]), (p[n][t + 1] = p[n][t]), (p[n][t] = e);
                t++;
              }
              0, S--;
          }
        }
        if (l) {
          var A = y;
          (y = p), (p = A);
        }
        (this.m = r), (this.n = n), (this.s = m), (this.U = p), (this.V = y);
      }
      solve(t) {
        var e = t,
          r = this.threshold,
          n = this.s.length,
          i = C.zeros(n, n);
        for (let t = 0; t < n; t++)
          Math.abs(this.s[t]) <= r ? (i[t][t] = 0) : (i[t][t] = 1 / this.s[t]);
        var o = this.U,
          s = this.rightSingularVectors,
          a = s.mmul(i),
          u = s.rows,
          f = o.length,
          h = C.zeros(u, f);
        for (let t = 0; t < u; t++)
          for (let e = 0; e < f; e++) {
            let r = 0;
            for (let i = 0; i < n; i++) r += a[t][i] * o[e][i];
            h[t][e] = r;
          }
        return h.mmul(e);
      }
      solveForDiagonal(t) {
        return this.solve(C.diag(t));
      }
      inverse() {
        var t = this.V,
          e = this.threshold,
          r = t.length,
          n = t[0].length,
          i = new C(r, this.s.length);
        for (let o = 0; o < r; o++)
          for (let r = 0; r < n; r++)
            Math.abs(this.s[r]) > e
              ? (i[o][r] = t[o][r] / this.s[r])
              : (i[o][r] = 0);
        var o = this.U,
          s = o.length,
          a = o[0].length,
          u = new C(r, s);
        for (let t = 0; t < r; t++)
          for (let e = 0; e < s; e++) {
            let r = 0;
            for (let n = 0; n < a; n++) r += i[t][n] * o[e][n];
            u[t][e] = r;
          }
        return u;
      }
      get condition() {
        return this.s[0] / this.s[Math.min(this.m, this.n) - 1];
      }
      get norm2() {
        return this.s[0];
      }
      get rank() {
        for (
          var t = Math.max(this.m, this.n) * this.s[0] * Number.EPSILON,
            e = 0,
            r = this.s,
            n = 0,
            i = r.length;
          n < i;
          n++
        )
          r[n] > t && e++;
        return e;
      }
      get diagonal() {
        return this.s;
      }
      get threshold() {
        return (Number.EPSILON / 2) * Math.max(this.m, this.n) * this.s[0];
      }
      get leftSingularVectors() {
        return C.isMatrix(this.U) || (this.U = new C(this.U)), this.U;
      }
      get rightSingularVectors() {
        return C.isMatrix(this.V) || (this.V = new C(this.V)), this.V;
      }
      get diagonalMatrix() {
        return C.diag(this.s);
      }
    }
    function l(t, e, r) {
      var n = r ? t.rows : t.rows - 1;
      if (e < 0 || e > n) throw new RangeError('Row index out of range');
    }
    function d(t, e, r) {
      var n = r ? t.columns : t.columns - 1;
      if (e < 0 || e > n) throw new RangeError('Column index out of range');
    }
    function v(t, e) {
      if ((e.to1DArray && (e = e.to1DArray()), e.length !== t.columns))
        throw new RangeError(
          'vector size must be the same as the number of columns'
        );
      return e;
    }
    function g(t, e) {
      if ((e.to1DArray && (e = e.to1DArray()), e.length !== t.rows))
        throw new RangeError(
          'vector size must be the same as the number of rows'
        );
      return e;
    }
    function m(t, e, r) {
      return { row: p(t, e), column: y(t, r) };
    }
    function p(t, e) {
      if ('object' != typeof e)
        throw new TypeError('unexpected type for row indices');
      if (e.some(e => e < 0 || e >= t.rows))
        throw new RangeError('row indices are out of range');
      return Array.isArray(e) || (e = Array.from(e)), e;
    }
    function y(t, e) {
      if ('object' != typeof e)
        throw new TypeError('unexpected type for column indices');
      if (e.some(e => e < 0 || e >= t.columns))
        throw new RangeError('column indices are out of range');
      return Array.isArray(e) || (e = Array.from(e)), e;
    }
    function _(t, e, r, n, i) {
      if (5 !== arguments.length) throw new RangeError('expected 4 arguments');
      if (
        (x('startRow', e),
        x('endRow', r),
        x('startColumn', n),
        x('endColumn', i),
        e > r ||
          n > i ||
          e < 0 ||
          e >= t.rows ||
          r < 0 ||
          r >= t.rows ||
          n < 0 ||
          n >= t.columns ||
          i < 0 ||
          i >= t.columns)
      )
        throw new RangeError('Submatrix indices are out of range');
    }
    function x(t, e) {
      if ('number' != typeof e) throw new TypeError(`${t} must be a number`);
    }
    class w extends z() {
      constructor(t, e, r) {
        super(), (this.matrix = t), (this.rows = e), (this.columns = r);
      }
      static get [Symbol.species]() {
        return C;
      }
    }
    class b extends w {
      constructor(t) {
        super(t, t.columns, t.rows);
      }
      set(t, e, r) {
        return this.matrix.set(e, t, r), this;
      }
      get(t, e) {
        return this.matrix.get(e, t);
      }
    }
    class M extends w {
      constructor(t, e) {
        super(t, 1, t.columns), (this.row = e);
      }
      set(t, e, r) {
        return this.matrix.set(this.row, e, r), this;
      }
      get(t, e) {
        return this.matrix.get(this.row, e);
      }
    }
    class E extends w {
      constructor(t, e, r, n, i) {
        _(t, e, r, n, i),
          super(t, r - e + 1, i - n + 1),
          (this.startRow = e),
          (this.startColumn = n);
      }
      set(t, e, r) {
        return (
          this.matrix.set(this.startRow + t, this.startColumn + e, r), this
        );
      }
      get(t, e) {
        return this.matrix.get(this.startRow + t, this.startColumn + e);
      }
    }
    class S extends w {
      constructor(t, e, r) {
        var n = m(t, e, r);
        super(t, n.row.length, n.column.length),
          (this.rowIndices = n.row),
          (this.columnIndices = n.column);
      }
      set(t, e, r) {
        return (
          this.matrix.set(this.rowIndices[t], this.columnIndices[e], r), this
        );
      }
      get(t, e) {
        return this.matrix.get(this.rowIndices[t], this.columnIndices[e]);
      }
    }
    class T extends w {
      constructor(t, e) {
        super(t, (e = p(t, e)).length, t.columns), (this.rowIndices = e);
      }
      set(t, e, r) {
        return this.matrix.set(this.rowIndices[t], e, r), this;
      }
      get(t, e) {
        return this.matrix.get(this.rowIndices[t], e);
      }
    }
    class P extends w {
      constructor(t, e) {
        (e = y(t, e)), super(t, t.rows, e.length), (this.columnIndices = e);
      }
      set(t, e, r) {
        return this.matrix.set(t, this.columnIndices[e], r), this;
      }
      get(t, e) {
        return this.matrix.get(t, this.columnIndices[e]);
      }
    }
    class A extends w {
      constructor(t, e) {
        super(t, t.rows, 1), (this.column = e);
      }
      set(t, e, r) {
        return this.matrix.set(t, this.column, r), this;
      }
      get(t) {
        return this.matrix.get(t, this.column);
      }
    }
    class k extends w {
      constructor(t) {
        super(t, t.rows, t.columns);
      }
      set(t, e, r) {
        return this.matrix.set(this.rows - t - 1, e, r), this;
      }
      get(t, e) {
        return this.matrix.get(this.rows - t - 1, e);
      }
    }
    class R extends w {
      constructor(t) {
        super(t, t.rows, t.columns);
      }
      set(t, e, r) {
        return this.matrix.set(t, this.columns - e - 1, r), this;
      }
      get(t, e) {
        return this.matrix.get(t, this.columns - e - 1);
      }
    }
    function z(t) {
      void 0 === t && (t = Object);
      class e extends t {
        static get [Symbol.species]() {
          return this;
        }
        static from1DArray(t, e, r) {
          if (t * e !== r.length)
            throw new RangeError('Data length does not match given dimensions');
          for (var n = new this(t, e), i = 0; i < t; i++)
            for (var o = 0; o < e; o++) n.set(i, o, r[i * e + o]);
          return n;
        }
        static rowVector(t) {
          for (var e = new this(1, t.length), r = 0; r < t.length; r++)
            e.set(0, r, t[r]);
          return e;
        }
        static columnVector(t) {
          for (var e = new this(t.length, 1), r = 0; r < t.length; r++)
            e.set(r, 0, t[r]);
          return e;
        }
        static empty(t, e) {
          return new this(t, e);
        }
        static zeros(t, e) {
          return this.empty(t, e).fill(0);
        }
        static ones(t, e) {
          return this.empty(t, e).fill(1);
        }
        static rand(t, e, r) {
          void 0 === r && (r = Math.random);
          for (var n = this.empty(t, e), i = 0; i < t; i++)
            for (var o = 0; o < e; o++) n.set(i, o, r());
          return n;
        }
        static randInt(t, e, r, n) {
          void 0 === r && (r = 1e3), void 0 === n && (n = Math.random);
          for (var i = this.empty(t, e), o = 0; o < t; o++)
            for (var s = 0; s < e; s++) {
              var a = Math.floor(n() * r);
              i.set(o, s, a);
            }
          return i;
        }
        static eye(t, e, r) {
          void 0 === e && (e = t), void 0 === r && (r = 1);
          for (var n = Math.min(t, e), i = this.zeros(t, e), o = 0; o < n; o++)
            i.set(o, o, r);
          return i;
        }
        static diag(t, e, r) {
          var n = t.length;
          void 0 === e && (e = n), void 0 === r && (r = e);
          for (
            var i = Math.min(n, e, r), o = this.zeros(e, r), s = 0;
            s < i;
            s++
          )
            o.set(s, s, t[s]);
          return o;
        }
        static min(t, e) {
          (t = this.checkMatrix(t)), (e = this.checkMatrix(e));
          for (
            var r = t.rows, n = t.columns, i = new this(r, n), o = 0;
            o < r;
            o++
          )
            for (var s = 0; s < n; s++)
              i.set(o, s, Math.min(t.get(o, s), e.get(o, s)));
          return i;
        }
        static max(t, e) {
          (t = this.checkMatrix(t)), (e = this.checkMatrix(e));
          for (
            var r = t.rows, n = t.columns, i = new this(r, n), o = 0;
            o < r;
            o++
          )
            for (var s = 0; s < n; s++)
              i.set(o, s, Math.max(t.get(o, s), e.get(o, s)));
          return i;
        }
        static checkMatrix(t) {
          return e.isMatrix(t) ? t : new this(t);
        }
        static isMatrix(t) {
          return null != t && 'Matrix' === t.klass;
        }
        get size() {
          return this.rows * this.columns;
        }
        apply(t) {
          if ('function' != typeof t)
            throw new TypeError('callback must be a function');
          for (var e = this.rows, r = this.columns, n = 0; n < e; n++)
            for (var i = 0; i < r; i++) t.call(this, n, i);
          return this;
        }
        to1DArray() {
          for (var t = new Array(this.size), e = 0; e < this.rows; e++)
            for (var r = 0; r < this.columns; r++)
              t[e * this.columns + r] = this.get(e, r);
          return t;
        }
        to2DArray() {
          for (var t = new Array(this.rows), e = 0; e < this.rows; e++) {
            t[e] = new Array(this.columns);
            for (var r = 0; r < this.columns; r++) t[e][r] = this.get(e, r);
          }
          return t;
        }
        isRowVector() {
          return 1 === this.rows;
        }
        isColumnVector() {
          return 1 === this.columns;
        }
        isVector() {
          return 1 === this.rows || 1 === this.columns;
        }
        isSquare() {
          return this.rows === this.columns;
        }
        isSymmetric() {
          if (this.isSquare()) {
            for (var t = 0; t < this.rows; t++)
              for (var e = 0; e <= t; e++)
                if (this.get(t, e) !== this.get(e, t)) return !1;
            return !0;
          }
          return !1;
        }
        set(t, e, r) {
          throw new Error('set method is unimplemented');
        }
        get(t, e) {
          throw new Error('get method is unimplemented');
        }
        repeat(t, e) {
          (t = t || 1), (e = e || 1);
          for (
            var r = new this.constructor[Symbol.species](
                this.rows * t,
                this.columns * e
              ),
              n = 0;
            n < t;
            n++
          )
            for (var i = 0; i < e; i++)
              r.setSubMatrix(this, this.rows * n, this.columns * i);
          return r;
        }
        fill(t) {
          for (var e = 0; e < this.rows; e++)
            for (var r = 0; r < this.columns; r++) this.set(e, r, t);
          return this;
        }
        neg() {
          return this.mulS(-1);
        }
        getRow(t) {
          l(this, t);
          for (var e = new Array(this.columns), r = 0; r < this.columns; r++)
            e[r] = this.get(t, r);
          return e;
        }
        getRowVector(t) {
          return this.constructor.rowVector(this.getRow(t));
        }
        setRow(t, e) {
          l(this, t), (e = v(this, e));
          for (var r = 0; r < this.columns; r++) this.set(t, r, e[r]);
          return this;
        }
        swapRows(t, e) {
          l(this, t), l(this, e);
          for (var r = 0; r < this.columns; r++) {
            var n = this.get(t, r);
            this.set(t, r, this.get(e, r)), this.set(e, r, n);
          }
          return this;
        }
        getColumn(t) {
          d(this, t);
          for (var e = new Array(this.rows), r = 0; r < this.rows; r++)
            e[r] = this.get(r, t);
          return e;
        }
        getColumnVector(t) {
          return this.constructor.columnVector(this.getColumn(t));
        }
        setColumn(t, e) {
          d(this, t), (e = g(this, e));
          for (var r = 0; r < this.rows; r++) this.set(r, t, e[r]);
          return this;
        }
        swapColumns(t, e) {
          d(this, t), d(this, e);
          for (var r = 0; r < this.rows; r++) {
            var n = this.get(r, t);
            this.set(r, t, this.get(r, e)), this.set(r, e, n);
          }
          return this;
        }
        addRowVector(t) {
          t = v(this, t);
          for (var e = 0; e < this.rows; e++)
            for (var r = 0; r < this.columns; r++)
              this.set(e, r, this.get(e, r) + t[r]);
          return this;
        }
        subRowVector(t) {
          t = v(this, t);
          for (var e = 0; e < this.rows; e++)
            for (var r = 0; r < this.columns; r++)
              this.set(e, r, this.get(e, r) - t[r]);
          return this;
        }
        mulRowVector(t) {
          t = v(this, t);
          for (var e = 0; e < this.rows; e++)
            for (var r = 0; r < this.columns; r++)
              this.set(e, r, this.get(e, r) * t[r]);
          return this;
        }
        divRowVector(t) {
          t = v(this, t);
          for (var e = 0; e < this.rows; e++)
            for (var r = 0; r < this.columns; r++)
              this.set(e, r, this.get(e, r) / t[r]);
          return this;
        }
        addColumnVector(t) {
          t = g(this, t);
          for (var e = 0; e < this.rows; e++)
            for (var r = 0; r < this.columns; r++)
              this.set(e, r, this.get(e, r) + t[e]);
          return this;
        }
        subColumnVector(t) {
          t = g(this, t);
          for (var e = 0; e < this.rows; e++)
            for (var r = 0; r < this.columns; r++)
              this.set(e, r, this.get(e, r) - t[e]);
          return this;
        }
        mulColumnVector(t) {
          t = g(this, t);
          for (var e = 0; e < this.rows; e++)
            for (var r = 0; r < this.columns; r++)
              this.set(e, r, this.get(e, r) * t[e]);
          return this;
        }
        divColumnVector(t) {
          t = g(this, t);
          for (var e = 0; e < this.rows; e++)
            for (var r = 0; r < this.columns; r++)
              this.set(e, r, this.get(e, r) / t[e]);
          return this;
        }
        mulRow(t, e) {
          l(this, t);
          for (var r = 0; r < this.columns; r++)
            this.set(t, r, this.get(t, r) * e);
          return this;
        }
        mulColumn(t, e) {
          d(this, t);
          for (var r = 0; r < this.rows; r++)
            this.set(r, t, this.get(r, t) * e);
          return this;
        }
        max() {
          for (var t = this.get(0, 0), e = 0; e < this.rows; e++)
            for (var r = 0; r < this.columns; r++)
              this.get(e, r) > t && (t = this.get(e, r));
          return t;
        }
        maxIndex() {
          for (var t = this.get(0, 0), e = [0, 0], r = 0; r < this.rows; r++)
            for (var n = 0; n < this.columns; n++)
              this.get(r, n) > t &&
                ((t = this.get(r, n)), (e[0] = r), (e[1] = n));
          return e;
        }
        min() {
          for (var t = this.get(0, 0), e = 0; e < this.rows; e++)
            for (var r = 0; r < this.columns; r++)
              this.get(e, r) < t && (t = this.get(e, r));
          return t;
        }
        minIndex() {
          for (var t = this.get(0, 0), e = [0, 0], r = 0; r < this.rows; r++)
            for (var n = 0; n < this.columns; n++)
              this.get(r, n) < t &&
                ((t = this.get(r, n)), (e[0] = r), (e[1] = n));
          return e;
        }
        maxRow(t) {
          l(this, t);
          for (var e = this.get(t, 0), r = 1; r < this.columns; r++)
            this.get(t, r) > e && (e = this.get(t, r));
          return e;
        }
        maxRowIndex(t) {
          l(this, t);
          for (var e = this.get(t, 0), r = [t, 0], n = 1; n < this.columns; n++)
            this.get(t, n) > e && ((e = this.get(t, n)), (r[1] = n));
          return r;
        }
        minRow(t) {
          l(this, t);
          for (var e = this.get(t, 0), r = 1; r < this.columns; r++)
            this.get(t, r) < e && (e = this.get(t, r));
          return e;
        }
        minRowIndex(t) {
          l(this, t);
          for (var e = this.get(t, 0), r = [t, 0], n = 1; n < this.columns; n++)
            this.get(t, n) < e && ((e = this.get(t, n)), (r[1] = n));
          return r;
        }
        maxColumn(t) {
          d(this, t);
          for (var e = this.get(0, t), r = 1; r < this.rows; r++)
            this.get(r, t) > e && (e = this.get(r, t));
          return e;
        }
        maxColumnIndex(t) {
          d(this, t);
          for (var e = this.get(0, t), r = [0, t], n = 1; n < this.rows; n++)
            this.get(n, t) > e && ((e = this.get(n, t)), (r[0] = n));
          return r;
        }
        minColumn(t) {
          d(this, t);
          for (var e = this.get(0, t), r = 1; r < this.rows; r++)
            this.get(r, t) < e && (e = this.get(r, t));
          return e;
        }
        minColumnIndex(t) {
          d(this, t);
          for (var e = this.get(0, t), r = [0, t], n = 1; n < this.rows; n++)
            this.get(n, t) < e && ((e = this.get(n, t)), (r[0] = n));
          return r;
        }
        diag() {
          for (
            var t = Math.min(this.rows, this.columns), e = new Array(t), r = 0;
            r < t;
            r++
          )
            e[r] = this.get(r, r);
          return e;
        }
        sum(t) {
          switch (t) {
            case 'row':
              return (function(t) {
                for (var e = C.zeros(t.rows, 1), r = 0; r < t.rows; ++r)
                  for (var n = 0; n < t.columns; ++n)
                    e.set(r, 0, e.get(r, 0) + t.get(r, n));
                return e;
              })(this);
            case 'column':
              return (function(t) {
                for (var e = C.zeros(1, t.columns), r = 0; r < t.rows; ++r)
                  for (var n = 0; n < t.columns; ++n)
                    e.set(0, n, e.get(0, n) + t.get(r, n));
                return e;
              })(this);
            default:
              return (function(t) {
                for (var e = 0, r = 0; r < t.rows; r++)
                  for (var n = 0; n < t.columns; n++) e += t.get(r, n);
                return e;
              })(this);
          }
        }
        mean() {
          return this.sum() / this.size;
        }
        prod() {
          for (var t = 1, e = 0; e < this.rows; e++)
            for (var r = 0; r < this.columns; r++) t *= this.get(e, r);
          return t;
        }
        norm(t = 'frobenius') {
          var e = 0;
          if ('max' === t) return this.max();
          if ('frobenius' === t) {
            for (var r = 0; r < this.rows; r++)
              for (var n = 0; n < this.columns; n++)
                e += this.get(r, n) * this.get(r, n);
            return Math.sqrt(e);
          }
          throw new RangeError(`unknown norm type: ${t}`);
        }
        cumulativeSum() {
          for (var t = 0, e = 0; e < this.rows; e++)
            for (var r = 0; r < this.columns; r++)
              (t += this.get(e, r)), this.set(e, r, t);
          return this;
        }
        dot(t) {
          e.isMatrix(t) && (t = t.to1DArray());
          var r = this.to1DArray();
          if (r.length !== t.length)
            throw new RangeError('vectors do not have the same size');
          for (var n = 0, i = 0; i < r.length; i++) n += r[i] * t[i];
          return n;
        }
        mmul(t) {
          (t = this.constructor.checkMatrix(t)),
            this.columns !== t.rows &&
              console.warn(
                'Number of columns of left matrix are not equal to number of rows of right matrix.'
              );
          for (
            var e = this.rows,
              r = this.columns,
              n = t.columns,
              i = new this.constructor[Symbol.species](e, n),
              o = new Array(r),
              s = 0;
            s < n;
            s++
          ) {
            for (var a = 0; a < r; a++) o[a] = t.get(a, s);
            for (var u = 0; u < e; u++) {
              var f = 0;
              for (a = 0; a < r; a++) f += this.get(u, a) * o[a];
              i.set(u, s, f);
            }
          }
          return i;
        }
        strassen2x2(t) {
          var e = new this.constructor[Symbol.species](2, 2);
          const r = this.get(0, 0),
            n = t.get(0, 0),
            i = this.get(0, 1),
            o = t.get(0, 1),
            s = this.get(1, 0),
            a = t.get(1, 0),
            u = this.get(1, 1),
            f = t.get(1, 1),
            h = (r + u) * (n + f),
            c = (s + u) * n,
            l = r * (o - f),
            d = u * (a - n),
            v = (r + i) * f,
            g = h + d - v + (i - u) * (a + f),
            m = l + v,
            p = c + d,
            y = h - c + l + (s - r) * (n + o);
          return (
            e.set(0, 0, g), e.set(0, 1, m), e.set(1, 0, p), e.set(1, 1, y), e
          );
        }
        strassen3x3(t) {
          var e = new this.constructor[Symbol.species](3, 3);
          const r = this.get(0, 0),
            n = this.get(0, 1),
            i = this.get(0, 2),
            o = this.get(1, 0),
            s = this.get(1, 1),
            a = this.get(1, 2),
            u = this.get(2, 0),
            f = this.get(2, 1),
            h = this.get(2, 2),
            c = t.get(0, 0),
            l = t.get(0, 1),
            d = t.get(0, 2),
            v = t.get(1, 0),
            g = t.get(1, 1),
            m = t.get(1, 2),
            p = t.get(2, 0),
            y = t.get(2, 1),
            _ = t.get(2, 2),
            x = (r - o) * (-l + g),
            w = (-r + o + s) * (c - l + g),
            b = (o + s) * (-c + l),
            M = r * c,
            E = (-r + u + f) * (c - d + m),
            S = (-r + u) * (d - m),
            T = (u + f) * (-c + d),
            P = (-i + f + h) * (g + p - y),
            A = (i - h) * (g - y),
            k = i * p,
            R = (f + h) * (-p + y),
            z = (-i + s + a) * (m + p - _),
            C = (i - a) * (m - _),
            O = (s + a) * (-p + _),
            I = M + k + n * v,
            j = (r + n + i - o - s - f - h) * g + w + b + M + P + k + R,
            N = M + E + T + (r + n + i - s - a - u - f) * m + k + z + O,
            F = x + s * (-c + l + v - g - m - p + _) + w + M + k + z + C,
            B = x + w + b + M + a * y,
            D = k + z + C + O + o * d,
            L = M + E + S + f * (-c + d + v - g - m - p + y) + P + A + k,
            q = P + A + k + R + u * l,
            U = M + E + S + T + h * _;
          return (
            e.set(0, 0, I),
            e.set(0, 1, j),
            e.set(0, 2, N),
            e.set(1, 0, F),
            e.set(1, 1, B),
            e.set(1, 2, D),
            e.set(2, 0, L),
            e.set(2, 1, q),
            e.set(2, 2, U),
            e
          );
        }
        mmulStrassen(t) {
          var r = this.clone(),
            n = r.rows,
            i = r.columns,
            o = t.rows,
            s = t.columns;
          function a(t, r, n) {
            var i = t.rows,
              o = t.columns;
            if (i === r && o === n) return t;
            var s = e.zeros(r, n);
            return (s = s.setSubMatrix(t, 0, 0));
          }
          i !== o &&
            console.warn(
              `Multiplying ${n} x ${i} and ${o} x ${s} matrix: dimensions do not match.`
            );
          var u = Math.max(n, o),
            f = Math.max(i, s);
          return (function t(r, n, i, o) {
            if (i <= 512 || o <= 512) return r.mmul(n);
            i % 2 == 1 && o % 2 == 1
              ? ((r = a(r, i + 1, o + 1)), (n = a(n, i + 1, o + 1)))
              : i % 2 == 1
              ? ((r = a(r, i + 1, o)), (n = a(n, i + 1, o)))
              : o % 2 == 1 && ((r = a(r, i, o + 1)), (n = a(n, i, o + 1)));
            var s = parseInt(r.rows / 2, 10),
              u = parseInt(r.columns / 2, 10),
              f = r.subMatrix(0, s - 1, 0, u - 1),
              h = n.subMatrix(0, s - 1, 0, u - 1),
              c = r.subMatrix(0, s - 1, u, r.columns - 1),
              l = n.subMatrix(0, s - 1, u, n.columns - 1),
              d = r.subMatrix(s, r.rows - 1, 0, u - 1),
              v = n.subMatrix(s, n.rows - 1, 0, u - 1),
              g = r.subMatrix(s, r.rows - 1, u, r.columns - 1),
              m = n.subMatrix(s, n.rows - 1, u, n.columns - 1),
              p = t(e.add(f, g), e.add(h, m), s, u),
              y = t(e.add(d, g), h, s, u),
              _ = t(f, e.sub(l, m), s, u),
              x = t(g, e.sub(v, h), s, u),
              w = t(e.add(f, c), m, s, u),
              b = t(e.sub(d, f), e.add(h, l), s, u),
              M = t(e.sub(c, g), e.add(v, m), s, u),
              E = e.add(p, x);
            E.sub(w), E.add(M);
            var S = e.add(_, w),
              T = e.add(y, x),
              P = e.sub(p, y);
            P.add(_), P.add(b);
            var A = e.zeros(2 * E.rows, 2 * E.columns);
            return (A = (A = (A = (A = A.setSubMatrix(E, 0, 0)).setSubMatrix(
              S,
              E.rows,
              0
            )).setSubMatrix(T, 0, E.columns)).setSubMatrix(
              P,
              E.rows,
              E.columns
            )).subMatrix(0, i - 1, 0, o - 1);
          })((r = a(r, u, f)), (t = a(t, u, f)), u, f);
        }
        scaleRows(t, e) {
          if ((t = void 0 === t ? 0 : t) >= (e = void 0 === e ? 1 : e))
            throw new RangeError('min should be strictly smaller than max');
          for (
            var r = this.constructor.empty(this.rows, this.columns), n = 0;
            n < this.rows;
            n++
          ) {
            var i = a(this.getRow(n), { min: t, max: e });
            r.setRow(n, i);
          }
          return r;
        }
        scaleColumns(t, e) {
          if ((t = void 0 === t ? 0 : t) >= (e = void 0 === e ? 1 : e))
            throw new RangeError('min should be strictly smaller than max');
          for (
            var r = this.constructor.empty(this.rows, this.columns), n = 0;
            n < this.columns;
            n++
          ) {
            var i = a(this.getColumn(n), { min: t, max: e });
            r.setColumn(n, i);
          }
          return r;
        }
        kroneckerProduct(t) {
          t = this.constructor.checkMatrix(t);
          for (
            var e = this.rows,
              r = this.columns,
              n = t.rows,
              i = t.columns,
              o = new this.constructor[Symbol.species](e * n, r * i),
              s = 0;
            s < e;
            s++
          )
            for (var a = 0; a < r; a++)
              for (var u = 0; u < n; u++)
                for (var f = 0; f < i; f++)
                  o[n * s + u][i * a + f] = this.get(s, a) * t.get(u, f);
          return o;
        }
        transpose() {
          for (
            var t = new this.constructor[Symbol.species](
                this.columns,
                this.rows
              ),
              e = 0;
            e < this.rows;
            e++
          )
            for (var r = 0; r < this.columns; r++) t.set(r, e, this.get(e, r));
          return t;
        }
        sortRows(t) {
          void 0 === t && (t = r);
          for (var e = 0; e < this.rows; e++)
            this.setRow(e, this.getRow(e).sort(t));
          return this;
        }
        sortColumns(t) {
          void 0 === t && (t = r);
          for (var e = 0; e < this.columns; e++)
            this.setColumn(e, this.getColumn(e).sort(t));
          return this;
        }
        subMatrix(t, e, r, n) {
          _(this, t, e, r, n);
          for (
            var i = new this.constructor[Symbol.species](e - t + 1, n - r + 1),
              o = t;
            o <= e;
            o++
          )
            for (var s = r; s <= n; s++) i[o - t][s - r] = this.get(o, s);
          return i;
        }
        subMatrixRow(t, e, r) {
          if (
            (void 0 === e && (e = 0),
            void 0 === r && (r = this.columns - 1),
            e > r || e < 0 || e >= this.columns || r < 0 || r >= this.columns)
          )
            throw new RangeError('Argument out of range');
          for (
            var n = new this.constructor[Symbol.species](t.length, r - e + 1),
              i = 0;
            i < t.length;
            i++
          )
            for (var o = e; o <= r; o++) {
              if (t[i] < 0 || t[i] >= this.rows)
                throw new RangeError(`Row index out of range: ${t[i]}`);
              n.set(i, o - e, this.get(t[i], o));
            }
          return n;
        }
        subMatrixColumn(t, e, r) {
          if (
            (void 0 === e && (e = 0),
            void 0 === r && (r = this.rows - 1),
            e > r || e < 0 || e >= this.rows || r < 0 || r >= this.rows)
          )
            throw new RangeError('Argument out of range');
          for (
            var n = new this.constructor[Symbol.species](r - e + 1, t.length),
              i = 0;
            i < t.length;
            i++
          )
            for (var o = e; o <= r; o++) {
              if (t[i] < 0 || t[i] >= this.columns)
                throw new RangeError(`Column index out of range: ${t[i]}`);
              n.set(o - e, i, this.get(o, t[i]));
            }
          return n;
        }
        setSubMatrix(t, e, r) {
          _(
            this,
            e,
            e + (t = this.constructor.checkMatrix(t)).rows - 1,
            r,
            r + t.columns - 1
          );
          for (var n = 0; n < t.rows; n++)
            for (var i = 0; i < t.columns; i++)
              this[e + n][r + i] = t.get(n, i);
          return this;
        }
        selection(t, e) {
          for (
            var r = m(this, t, e),
              n = new this.constructor[Symbol.species](t.length, e.length),
              i = 0;
            i < r.row.length;
            i++
          )
            for (var o = r.row[i], s = 0; s < r.column.length; s++) {
              var a = r.column[s];
              n[i][s] = this.get(o, a);
            }
          return n;
        }
        trace() {
          for (
            var t = Math.min(this.rows, this.columns), e = 0, r = 0;
            r < t;
            r++
          )
            e += this.get(r, r);
          return e;
        }
        transposeView() {
          return new b(this);
        }
        rowView(t) {
          return l(this, t), new M(this, t);
        }
        columnView(t) {
          return d(this, t), new A(this, t);
        }
        flipRowView() {
          return new k(this);
        }
        flipColumnView() {
          return new R(this);
        }
        subMatrixView(t, e, r, n) {
          return new E(this, t, e, r, n);
        }
        selectionView(t, e) {
          return new S(this, t, e);
        }
        rowSelectionView(t) {
          return new T(this, t);
        }
        columnSelectionView(t) {
          return new P(this, t);
        }
        det() {
          var t, e, r, n, i, o;
          if (this.isSquare())
            return 2 === this.columns
              ? ((t = this.get(0, 0)),
                (e = this.get(0, 1)),
                (r = this.get(1, 0)),
                t * this.get(1, 1) - e * r)
              : 3 === this.columns
              ? ((n = this.selectionView([1, 2], [1, 2])),
                (i = this.selectionView([1, 2], [0, 2])),
                (o = this.selectionView([1, 2], [0, 1])),
                (t = this.get(0, 0)),
                (e = this.get(0, 1)),
                (r = this.get(0, 2)),
                t * n.det() - e * i.det() + r * o.det())
              : new u(this).determinant;
          throw Error(
            'Determinant can only be calculated for a square matrix.'
          );
        }
        pseudoInverse(t) {
          void 0 === t && (t = Number.EPSILON);
          for (
            var e = new c(this, { autoTranspose: !0 }),
              r = e.leftSingularVectors,
              n = e.rightSingularVectors,
              i = e.diagonal,
              o = 0;
            o < i.length;
            o++
          )
            Math.abs(i[o]) > t ? (i[o] = 1 / i[o]) : (i[o] = 0);
          return (
            (i = this.constructor[Symbol.species].diag(i)),
            n.mmul(i.mmul(r.transposeView()))
          );
        }
        clone() {
          for (
            var t = new this.constructor[Symbol.species](
                this.rows,
                this.columns
              ),
              e = 0;
            e < this.rows;
            e++
          )
            for (var r = 0; r < this.columns; r++) t.set(e, r, this.get(e, r));
          return t;
        }
      }
      function r(t, e) {
        return t - e;
      }
      (e.prototype.klass = 'Matrix'),
        (e.random = e.rand),
        (e.diagonal = e.diag),
        (e.prototype.diagonal = e.prototype.diag),
        (e.identity = e.eye),
        (e.prototype.negate = e.prototype.neg),
        (e.prototype.tensorProduct = e.prototype.kroneckerProduct),
        (e.prototype.determinant = e.prototype.det);
      var n,
        i =
          '\n(function %name%(matrix, %args%) {\n    var newMatrix = new this[Symbol.species](matrix);\n    return newMatrix.%name%(%args%);\n})\n',
        o = eval;
      for (var s of [
        ['+', 'add'],
        ['-', 'sub', 'subtract'],
        ['*', 'mul', 'multiply'],
        ['/', 'div', 'divide'],
        ['%', 'mod', 'modulus'],
        ['&', 'and'],
        ['|', 'or'],
        ['^', 'xor'],
        ['<<', 'leftShift'],
        ['>>', 'signPropagatingRightShift'],
        ['>>>', 'rightShift', 'zeroFillRightShift'],
      ]) {
        var f = o(
            V(
              "\n(function %name%(value) {\n    if (typeof value === 'number') return this.%name%S(value);\n    return this.%name%M(value);\n})\n",
              { name: s[1], op: s[0] }
            )
          ),
          h = o(
            V(
              '\n(function %name%S(value) {\n    for (var i = 0; i < this.rows; i++) {\n        for (var j = 0; j < this.columns; j++) {\n            this.set(i, j, this.get(i, j) %op% value);\n        }\n    }\n    return this;\n})\n',
              { name: `${s[1]}S`, op: s[0] }
            )
          ),
          p = o(
            V(
              "\n(function %name%M(matrix) {\n    matrix = this.constructor.checkMatrix(matrix);\n    if (this.rows !== matrix.rows ||\n        this.columns !== matrix.columns) {\n        throw new RangeError('Matrices dimensions must be equal');\n    }\n    for (var i = 0; i < this.rows; i++) {\n        for (var j = 0; j < this.columns; j++) {\n            this.set(i, j, this.get(i, j) %op% matrix.get(i, j));\n        }\n    }\n    return this;\n})\n",
              { name: `${s[1]}M`, op: s[0] }
            )
          ),
          y = o(
            V(
              '\n(function %name%(matrix, value) {\n    var newMatrix = new this[Symbol.species](matrix);\n    return newMatrix.%name%(value);\n})\n',
              { name: s[1] }
            )
          );
        for (n = 1; n < s.length; n++)
          (e.prototype[s[n]] = f),
            (e.prototype[`${s[n]}S`] = h),
            (e.prototype[`${s[n]}M`] = p),
            (e[s[n]] = y);
      }
      var x = [['~', 'not']];
      for (var w of ([
        'abs',
        'acos',
        'acosh',
        'asin',
        'asinh',
        'atan',
        'atanh',
        'cbrt',
        'ceil',
        'clz32',
        'cos',
        'cosh',
        'exp',
        'expm1',
        'floor',
        'fround',
        'log',
        'log1p',
        'log10',
        'log2',
        'round',
        'sign',
        'sin',
        'sinh',
        'sqrt',
        'tan',
        'tanh',
        'trunc',
      ].forEach(function(t) {
        x.push([`Math.${t}`, t]);
      }),
      x)) {
        var z = o(
            V(
              '\n(function %name%() {\n    for (var i = 0; i < this.rows; i++) {\n        for (var j = 0; j < this.columns; j++) {\n            this.set(i, j, %method%(this.get(i, j)));\n        }\n    }\n    return this;\n})\n',
              { name: w[1], method: w[0] }
            )
          ),
          O = o(
            V(
              '\n(function %name%(matrix) {\n    var newMatrix = new this[Symbol.species](matrix);\n    return newMatrix.%name%();\n})\n',
              { name: w[1] }
            )
          );
        for (n = 1; n < w.length; n++) (e.prototype[w[n]] = z), (e[w[n]] = O);
      }
      for (var I of [['Math.pow', 1, 'pow']]) {
        var j = 'arg0';
        for (n = 1; n < I[1]; n++) j += `, arg${n}`;
        if (1 !== I[1]) {
          var N = o(
              V(
                '\n(function %name%(%args%) {\n    for (var i = 0; i < this.rows; i++) {\n        for (var j = 0; j < this.columns; j++) {\n            this.set(i, j, %method%(this.get(i, j), %args%));\n        }\n    }\n    return this;\n})\n',
                { name: I[2], method: I[0], args: j }
              )
            ),
            F = o(V(i, { name: I[2], args: j }));
          for (n = 2; n < I.length; n++) (e.prototype[I[n]] = N), (e[I[n]] = F);
        } else {
          var B = { name: I[2], args: j, method: I[0] },
            D = o(
              V(
                "\n(function %name%(value) {\n    if (typeof value === 'number') return this.%name%S(value);\n    return this.%name%M(value);\n})\n",
                B
              )
            ),
            L = o(
              V(
                '\n(function %name%S(value) {\n    for (var i = 0; i < this.rows; i++) {\n        for (var j = 0; j < this.columns; j++) {\n            this.set(i, j, %method%(this.get(i, j), value));\n        }\n    }\n    return this;\n})\n',
                B
              )
            ),
            q = o(
              V(
                "\n(function %name%M(matrix) {\n    matrix = this.constructor.checkMatrix(matrix);\n    if (this.rows !== matrix.rows ||\n        this.columns !== matrix.columns) {\n        throw new RangeError('Matrices dimensions must be equal');\n    }\n    for (var i = 0; i < this.rows; i++) {\n        for (var j = 0; j < this.columns; j++) {\n            this.set(i, j, %method%(this.get(i, j), matrix.get(i, j)));\n        }\n    }\n    return this;\n})\n",
                B
              )
            ),
            U = o(
              V(
                '\n(function %name%(matrix, %args%) {\n    var newMatrix = new this[Symbol.species](matrix);\n    return newMatrix.%name%(%args%);\n})\n',
                B
              )
            );
          for (n = 2; n < I.length; n++)
            (e.prototype[I[n]] = D),
              (e.prototype[`${I[n]}M`] = q),
              (e.prototype[`${I[n]}S`] = L),
              (e[I[n]] = U);
        }
      }
      function V(t, e) {
        for (var r in e) t = t.replace(new RegExp(`%${r}%`, 'g'), e[r]);
        return t;
      }
      return e;
    }
    class C extends z(Array) {
      constructor(t, e) {
        var r;
        if (1 === arguments.length && 'number' == typeof t) return new Array(t);
        if (C.isMatrix(t)) return t.clone();
        if (Number.isInteger(t) && t > 0) {
          if ((super(t), !(Number.isInteger(e) && e > 0)))
            throw new TypeError('nColumns must be a positive integer');
          for (r = 0; r < t; r++) this[r] = new Array(e);
        } else {
          if (!Array.isArray(t))
            throw new TypeError(
              'First argument must be a positive number or an array'
            );
          {
            const n = t;
            if (
              ((t = n.length), 'number' != typeof (e = n[0].length) || 0 === e)
            )
              throw new TypeError(
                'Data must be a 2D array with at least one element'
              );
            for (super(t), r = 0; r < t; r++) {
              if (n[r].length !== e)
                throw new RangeError('Inconsistent array dimensions');
              this[r] = [].concat(n[r]);
            }
          }
        }
        return (this.rows = t), (this.columns = e), this;
      }
      set(t, e, r) {
        return (this[t][e] = r), this;
      }
      get(t, e) {
        return this[t][e];
      }
      removeRow(t) {
        if ((l(this, t), 1 === this.rows))
          throw new RangeError('A matrix cannot have less than one row');
        return this.splice(t, 1), (this.rows -= 1), this;
      }
      addRow(t, e) {
        return (
          void 0 === e && ((e = t), (t = this.rows)),
          l(this, t, !0),
          (e = v(this, e)),
          this.splice(t, 0, e),
          (this.rows += 1),
          this
        );
      }
      removeColumn(t) {
        if ((d(this, t), 1 === this.columns))
          throw new RangeError('A matrix cannot have less than one column');
        for (var e = 0; e < this.rows; e++) this[e].splice(t, 1);
        return (this.columns -= 1), this;
      }
      addColumn(t, e) {
        void 0 === e && ((e = t), (t = this.columns)),
          d(this, t, !0),
          (e = g(this, e));
        for (var r = 0; r < this.rows; r++) this[r].splice(t, 0, e[r]);
        return (this.columns += 1), this;
      }
    }
    class O extends z() {
      constructor(t, e = {}) {
        const { rows: r = 1 } = e;
        if (t.length % r != 0)
          throw new Error(
            'the data length is not divisible by the number of rows'
          );
        super(),
          (this.rows = r),
          (this.columns = t.length / r),
          (this.data = t);
      }
      set(t, e, r) {
        var n = this._calculateIndex(t, e);
        return (this.data[n] = r), this;
      }
      get(t, e) {
        var r = this._calculateIndex(t, e);
        return this.data[r];
      }
      _calculateIndex(t, e) {
        return t * this.columns + e;
      }
      static get [Symbol.species]() {
        return C;
      }
    }
    class I extends z() {
      constructor(t) {
        super(),
          (this.data = t),
          (this.rows = t.length),
          (this.columns = t[0].length);
      }
      set(t, e, r) {
        return (this.data[t][e] = r), this;
      }
      get(t, e) {
        return this.data[t][e];
      }
      static get [Symbol.species]() {
        return C;
      }
    }
    function j(t, e) {
      if (Array.isArray(t))
        return t[0] && Array.isArray(t[0]) ? new I(t) : new O(t, e);
      throw new Error('the argument is not an array');
    }
    class N {
      constructor(t) {
        var e,
          r,
          n,
          i,
          o = (t = I.checkMatrix(t)).clone(),
          s = t.rows,
          a = t.columns,
          u = new Array(a);
        for (n = 0; n < a; n++) {
          var h = 0;
          for (e = n; e < s; e++) h = f(h, o.get(e, n));
          if (0 !== h) {
            for (o.get(n, n) < 0 && (h = -h), e = n; e < s; e++)
              o.set(e, n, o.get(e, n) / h);
            for (o.set(n, n, o.get(n, n) + 1), r = n + 1; r < a; r++) {
              for (i = 0, e = n; e < s; e++) i += o.get(e, n) * o.get(e, r);
              for (i = -i / o.get(n, n), e = n; e < s; e++)
                o.set(e, r, o.get(e, r) + i * o.get(e, n));
            }
          }
          u[n] = -h;
        }
        (this.QR = o), (this.Rdiag = u);
      }
      solve(t) {
        t = C.checkMatrix(t);
        var e = this.QR,
          r = e.rows;
        if (t.rows !== r) throw new Error('Matrix row dimensions must agree');
        if (!this.isFullRank()) throw new Error('Matrix is rank deficient');
        var n,
          i,
          o,
          s,
          a = t.columns,
          u = t.clone(),
          f = e.columns;
        for (o = 0; o < f; o++)
          for (i = 0; i < a; i++) {
            for (s = 0, n = o; n < r; n++) s += e[n][o] * u[n][i];
            for (s = -s / e[o][o], n = o; n < r; n++) u[n][i] += s * e[n][o];
          }
        for (o = f - 1; o >= 0; o--) {
          for (i = 0; i < a; i++) u[o][i] /= this.Rdiag[o];
          for (n = 0; n < o; n++)
            for (i = 0; i < a; i++) u[n][i] -= u[o][i] * e[n][o];
        }
        return u.subMatrix(0, f - 1, 0, a - 1);
      }
      isFullRank() {
        for (var t = this.QR.columns, e = 0; e < t; e++)
          if (0 === this.Rdiag[e]) return !1;
        return !0;
      }
      get upperTriangularMatrix() {
        var t,
          e,
          r = this.QR,
          n = r.columns,
          i = new C(n, n);
        for (t = 0; t < n; t++)
          for (e = 0; e < n; e++)
            i[t][e] = t < e ? r[t][e] : t === e ? this.Rdiag[t] : 0;
        return i;
      }
      get orthogonalMatrix() {
        var t,
          e,
          r,
          n,
          i = this.QR,
          o = i.rows,
          s = i.columns,
          a = new C(o, s);
        for (r = s - 1; r >= 0; r--) {
          for (t = 0; t < o; t++) a[t][r] = 0;
          for (a[r][r] = 1, e = r; e < s; e++)
            if (0 !== i[r][r]) {
              for (n = 0, t = r; t < o; t++) n += i[t][r] * a[t][e];
              for (n = -n / i[r][r], t = r; t < o; t++) a[t][e] += n * i[t][r];
            }
        }
        return a;
      }
    }
    function F(t, e = !1) {
      return (
        (t = I.checkMatrix(t)), e ? new c(t).inverse() : B(t, C.eye(t.rows))
      );
    }
    function B(t, e, r = !1) {
      return (
        (t = I.checkMatrix(t)),
        (e = I.checkMatrix(e)),
        r
          ? new c(t).solve(e)
          : t.isSquare()
          ? new u(t).solve(e)
          : new N(t).solve(e)
      );
    }
    function D(t, e) {
      for (var r = [], n = 0; n < t; n++) n !== e && r.push(n);
      return r;
    }
    function L(t, e, r, n = 1e-9, i = 1e-9) {
      if (t > i) return new Array(e.rows + 1).fill(0);
      for (var o = e.addRow(r, [0]), s = 0; s < o.rows; s++)
        Math.abs(o.get(s, 0)) < n && o.set(s, 0, 0);
      return o.to1DArray();
    }
    function q(t, e = {}) {
      const { thresholdValue: r = 1e-9, thresholdError: n = 1e-9 } = e;
      for (var i = t.rows, s = new C(i, i), a = 0; a < i; a++) {
        var u = C.columnVector(t.getRow(a)),
          f = t.subMatrixRow(D(i, a)).transposeView(),
          h = new c(f).solve(u),
          l = o(
            C.sub(u, f.mmul(h))
              .abs()
              .to1DArray()
          );
        s.setRow(a, L(l, h, a, r, n));
      }
      return s;
    }
    class U {
      constructor(t, e = {}) {
        const { assumeSymmetric: r = !1 } = e;
        if (!(t = I.checkMatrix(t)).isSquare())
          throw new Error('Matrix is not a square matrix');
        var n,
          i,
          o = t.columns,
          s = h(o, o, 0),
          a = new Array(o),
          u = new Array(o),
          c = t;
        if (!!r || t.isSymmetric()) {
          for (n = 0; n < o; n++) for (i = 0; i < o; i++) s[n][i] = c.get(n, i);
          !(function(t, e, r, n) {
            var i, o, s, a, u, f, h, c;
            for (u = 0; u < t; u++) r[u] = n[t - 1][u];
            for (a = t - 1; a > 0; a--) {
              for (c = 0, s = 0, f = 0; f < a; f++) c += Math.abs(r[f]);
              if (0 === c)
                for (e[a] = r[a - 1], u = 0; u < a; u++)
                  (r[u] = n[a - 1][u]), (n[a][u] = 0), (n[u][a] = 0);
              else {
                for (f = 0; f < a; f++) (r[f] /= c), (s += r[f] * r[f]);
                for (
                  i = r[a - 1],
                    o = Math.sqrt(s),
                    i > 0 && (o = -o),
                    e[a] = c * o,
                    s -= i * o,
                    r[a - 1] = i - o,
                    u = 0;
                  u < a;
                  u++
                )
                  e[u] = 0;
                for (u = 0; u < a; u++) {
                  for (
                    i = r[u], n[u][a] = i, o = e[u] + n[u][u] * i, f = u + 1;
                    f <= a - 1;
                    f++
                  )
                    (o += n[f][u] * r[f]), (e[f] += n[f][u] * i);
                  e[u] = o;
                }
                for (i = 0, u = 0; u < a; u++) (e[u] /= s), (i += e[u] * r[u]);
                for (h = i / (s + s), u = 0; u < a; u++) e[u] -= h * r[u];
                for (u = 0; u < a; u++) {
                  for (i = r[u], o = e[u], f = u; f <= a - 1; f++)
                    n[f][u] -= i * e[f] + o * r[f];
                  (r[u] = n[a - 1][u]), (n[a][u] = 0);
                }
              }
              r[a] = s;
            }
            for (a = 0; a < t - 1; a++) {
              if (
                ((n[t - 1][a] = n[a][a]), (n[a][a] = 1), 0 !== (s = r[a + 1]))
              ) {
                for (f = 0; f <= a; f++) r[f] = n[f][a + 1] / s;
                for (u = 0; u <= a; u++) {
                  for (o = 0, f = 0; f <= a; f++) o += n[f][a + 1] * n[f][u];
                  for (f = 0; f <= a; f++) n[f][u] -= o * r[f];
                }
              }
              for (f = 0; f <= a; f++) n[f][a + 1] = 0;
            }
            for (u = 0; u < t; u++) (r[u] = n[t - 1][u]), (n[t - 1][u] = 0);
            (n[t - 1][t - 1] = 1), (e[0] = 0);
          })(o, u, a, s),
            (function(t, e, r, n) {
              var i, o, s, a, u, h, c, l, d, v, g, m, p, y, _, x;
              for (s = 1; s < t; s++) e[s - 1] = e[s];
              e[t - 1] = 0;
              var w = 0,
                b = 0,
                M = Number.EPSILON;
              for (h = 0; h < t; h++) {
                for (
                  b = Math.max(b, Math.abs(r[h]) + Math.abs(e[h])), c = h;
                  c < t && !(Math.abs(e[c]) <= M * b);

                )
                  c++;
                if (c > h) {
                  0;
                  do {
                    for (
                      1,
                        i = r[h],
                        l = (r[h + 1] - i) / (2 * e[h]),
                        d = f(l, 1),
                        l < 0 && (d = -d),
                        r[h] = e[h] / (l + d),
                        r[h + 1] = e[h] * (l + d),
                        v = r[h + 1],
                        o = i - r[h],
                        s = h + 2;
                      s < t;
                      s++
                    )
                      r[s] -= o;
                    for (
                      w += o,
                        l = r[c],
                        m = g = 1,
                        p = g,
                        y = e[h + 1],
                        _ = 0,
                        x = 0,
                        s = c - 1;
                      s >= h;
                      s--
                    )
                      for (
                        p = m,
                          m = g,
                          x = _,
                          i = g * e[s],
                          o = g * l,
                          d = f(l, e[s]),
                          e[s + 1] = _ * d,
                          _ = e[s] / d,
                          l = (g = l / d) * r[s] - _ * i,
                          r[s + 1] = o + _ * (g * i + _ * r[s]),
                          u = 0;
                        u < t;
                        u++
                      )
                        (o = n[u][s + 1]),
                          (n[u][s + 1] = _ * n[u][s] + g * o),
                          (n[u][s] = g * n[u][s] - _ * o);
                    (l = (-_ * x * p * y * e[h]) / v),
                      (e[h] = _ * l),
                      (r[h] = g * l);
                  } while (Math.abs(e[h]) > M * b);
                }
                (r[h] = r[h] + w), (e[h] = 0);
              }
              for (s = 0; s < t - 1; s++) {
                for (u = s, l = r[s], a = s + 1; a < t; a++)
                  r[a] < l && ((u = a), (l = r[a]));
                if (u !== s)
                  for (r[u] = r[s], r[s] = l, a = 0; a < t; a++)
                    (l = n[a][s]), (n[a][s] = n[a][u]), (n[a][u] = l);
              }
            })(o, u, a, s);
        } else {
          var l = h(o, o, 0),
            d = new Array(o);
          for (i = 0; i < o; i++) for (n = 0; n < o; n++) l[n][i] = c.get(n, i);
          !(function(t, e, r, n) {
            var i,
              o,
              s,
              a,
              u,
              f,
              h,
              c = t - 1;
            for (f = 1; f <= c - 1; f++) {
              for (h = 0, a = f; a <= c; a++) h += Math.abs(e[a][f - 1]);
              if (0 !== h) {
                for (s = 0, a = c; a >= f; a--)
                  (r[a] = e[a][f - 1] / h), (s += r[a] * r[a]);
                for (
                  o = Math.sqrt(s),
                    r[f] > 0 && (o = -o),
                    s -= r[f] * o,
                    r[f] = r[f] - o,
                    u = f;
                  u < t;
                  u++
                ) {
                  for (i = 0, a = c; a >= f; a--) i += r[a] * e[a][u];
                  for (i /= s, a = f; a <= c; a++) e[a][u] -= i * r[a];
                }
                for (a = 0; a <= c; a++) {
                  for (i = 0, u = c; u >= f; u--) i += r[u] * e[a][u];
                  for (i /= s, u = f; u <= c; u++) e[a][u] -= i * r[u];
                }
                (r[f] = h * r[f]), (e[f][f - 1] = h * o);
              }
            }
            for (a = 0; a < t; a++)
              for (u = 0; u < t; u++) n[a][u] = a === u ? 1 : 0;
            for (f = c - 1; f >= 1; f--)
              if (0 !== e[f][f - 1]) {
                for (a = f + 1; a <= c; a++) r[a] = e[a][f - 1];
                for (u = f; u <= c; u++) {
                  for (o = 0, a = f; a <= c; a++) o += r[a] * n[a][u];
                  for (o = o / r[f] / e[f][f - 1], a = f; a <= c; a++)
                    n[a][u] += o * r[a];
                }
              }
          })(o, l, d, s),
            (function(t, e, r, n, i) {
              var o,
                s,
                a,
                u,
                f,
                h,
                c,
                l,
                d,
                v,
                g,
                m,
                p,
                y,
                _,
                x = t - 1,
                w = t - 1,
                b = Number.EPSILON,
                M = 0,
                E = 0,
                S = 0,
                T = 0,
                P = 0,
                A = 0,
                k = 0,
                R = 0;
              for (o = 0; o < t; o++)
                for (
                  (o < 0 || o > w) && ((r[o] = i[o][o]), (e[o] = 0)),
                    s = Math.max(o - 1, 0);
                  s < t;
                  s++
                )
                  E += Math.abs(i[o][s]);
              for (; x >= 0; ) {
                for (
                  u = x;
                  u > 0 &&
                  (0 === (A = Math.abs(i[u - 1][u - 1]) + Math.abs(i[u][u])) &&
                    (A = E),
                  !(Math.abs(i[u][u - 1]) < b * A));

                )
                  u--;
                if (u === x)
                  (i[x][x] = i[x][x] + M),
                    (r[x] = i[x][x]),
                    (e[x] = 0),
                    x--,
                    (R = 0);
                else if (u === x - 1) {
                  if (
                    ((c = i[x][x - 1] * i[x - 1][x]),
                    (S = (i[x - 1][x - 1] - i[x][x]) / 2),
                    (T = S * S + c),
                    (k = Math.sqrt(Math.abs(T))),
                    (i[x][x] = i[x][x] + M),
                    (i[x - 1][x - 1] = i[x - 1][x - 1] + M),
                    (l = i[x][x]),
                    T >= 0)
                  ) {
                    for (
                      k = S >= 0 ? S + k : S - k,
                        r[x - 1] = l + k,
                        r[x] = r[x - 1],
                        0 !== k && (r[x] = l - c / k),
                        e[x - 1] = 0,
                        e[x] = 0,
                        l = i[x][x - 1],
                        A = Math.abs(l) + Math.abs(k),
                        S = l / A,
                        T = k / A,
                        P = Math.sqrt(S * S + T * T),
                        S /= P,
                        T /= P,
                        s = x - 1;
                      s < t;
                      s++
                    )
                      (k = i[x - 1][s]),
                        (i[x - 1][s] = T * k + S * i[x][s]),
                        (i[x][s] = T * i[x][s] - S * k);
                    for (o = 0; o <= x; o++)
                      (k = i[o][x - 1]),
                        (i[o][x - 1] = T * k + S * i[o][x]),
                        (i[o][x] = T * i[o][x] - S * k);
                    for (o = 0; o <= w; o++)
                      (k = n[o][x - 1]),
                        (n[o][x - 1] = T * k + S * n[o][x]),
                        (n[o][x] = T * n[o][x] - S * k);
                  } else
                    (r[x - 1] = l + S),
                      (r[x] = l + S),
                      (e[x - 1] = k),
                      (e[x] = -k);
                  (x -= 2), (R = 0);
                } else {
                  if (
                    ((l = i[x][x]),
                    (d = 0),
                    (c = 0),
                    u < x &&
                      ((d = i[x - 1][x - 1]), (c = i[x][x - 1] * i[x - 1][x])),
                    10 === R)
                  ) {
                    for (M += l, o = 0; o <= x; o++) i[o][o] -= l;
                    (A = Math.abs(i[x][x - 1]) + Math.abs(i[x - 1][x - 2])),
                      (l = d = 0.75 * A),
                      (c = -0.4375 * A * A);
                  }
                  if (30 === R && (A = (A = (d - l) / 2) * A + c) > 0) {
                    for (
                      A = Math.sqrt(A),
                        d < l && (A = -A),
                        A = l - c / ((d - l) / 2 + A),
                        o = 0;
                      o <= x;
                      o++
                    )
                      i[o][o] -= A;
                    (M += A), (l = d = c = 0.964);
                  }
                  for (
                    R += 1, f = x - 2;
                    f >= u &&
                    ((k = i[f][f]),
                    (S =
                      ((P = l - k) * (A = d - k) - c) / i[f + 1][f] +
                      i[f][f + 1]),
                    (T = i[f + 1][f + 1] - k - P - A),
                    (P = i[f + 2][f + 1]),
                    (A = Math.abs(S) + Math.abs(T) + Math.abs(P)),
                    (S /= A),
                    (T /= A),
                    (P /= A),
                    f !== u) &&
                    !(
                      Math.abs(i[f][f - 1]) * (Math.abs(T) + Math.abs(P)) <
                      b *
                        (Math.abs(S) *
                          (Math.abs(i[f - 1][f - 1]) +
                            Math.abs(k) +
                            Math.abs(i[f + 1][f + 1])))
                    );

                  )
                    f--;
                  for (o = f + 2; o <= x; o++)
                    (i[o][o - 2] = 0), o > f + 2 && (i[o][o - 3] = 0);
                  for (
                    a = f;
                    a <= x - 1 &&
                    ((y = a !== x - 1),
                    a !== f &&
                      ((S = i[a][a - 1]),
                      (T = i[a + 1][a - 1]),
                      (P = y ? i[a + 2][a - 1] : 0),
                      0 !== (l = Math.abs(S) + Math.abs(T) + Math.abs(P)) &&
                        ((S /= l), (T /= l), (P /= l))),
                    0 !== l);
                    a++
                  )
                    if (
                      ((A = Math.sqrt(S * S + T * T + P * P)),
                      S < 0 && (A = -A),
                      0 !== A)
                    ) {
                      for (
                        a !== f
                          ? (i[a][a - 1] = -A * l)
                          : u !== f && (i[a][a - 1] = -i[a][a - 1]),
                          l = (S += A) / A,
                          d = T / A,
                          k = P / A,
                          T /= S,
                          P /= S,
                          s = a;
                        s < t;
                        s++
                      )
                        (S = i[a][s] + T * i[a + 1][s]),
                          y &&
                            ((S += P * i[a + 2][s]),
                            (i[a + 2][s] = i[a + 2][s] - S * k)),
                          (i[a][s] = i[a][s] - S * l),
                          (i[a + 1][s] = i[a + 1][s] - S * d);
                      for (o = 0; o <= Math.min(x, a + 3); o++)
                        (S = l * i[o][a] + d * i[o][a + 1]),
                          y &&
                            ((S += k * i[o][a + 2]),
                            (i[o][a + 2] = i[o][a + 2] - S * P)),
                          (i[o][a] = i[o][a] - S),
                          (i[o][a + 1] = i[o][a + 1] - S * T);
                      for (o = 0; o <= w; o++)
                        (S = l * n[o][a] + d * n[o][a + 1]),
                          y &&
                            ((S += k * n[o][a + 2]),
                            (n[o][a + 2] = n[o][a + 2] - S * P)),
                          (n[o][a] = n[o][a] - S),
                          (n[o][a + 1] = n[o][a + 1] - S * T);
                    }
                }
              }
              if (0 === E) return;
              for (x = t - 1; x >= 0; x--)
                if (((S = r[x]), 0 === (T = e[x])))
                  for (u = x, i[x][x] = 1, o = x - 1; o >= 0; o--) {
                    for (c = i[o][o] - S, P = 0, s = u; s <= x; s++)
                      P += i[o][s] * i[s][x];
                    if (e[o] < 0) (k = c), (A = P);
                    else if (
                      ((u = o),
                      0 === e[o]
                        ? (i[o][x] = 0 !== c ? -P / c : -P / (b * E))
                        : ((l = i[o][o + 1]),
                          (d = i[o + 1][o]),
                          (T = (r[o] - S) * (r[o] - S) + e[o] * e[o]),
                          (h = (l * A - k * P) / T),
                          (i[o][x] = h),
                          (i[o + 1][x] =
                            Math.abs(l) > Math.abs(k)
                              ? (-P - c * h) / l
                              : (-A - d * h) / k)),
                      (h = Math.abs(i[o][x])),
                      b * h * h > 1)
                    )
                      for (s = o; s <= x; s++) i[s][x] = i[s][x] / h;
                  }
                else if (T < 0)
                  for (
                    u = x - 1,
                      Math.abs(i[x][x - 1]) > Math.abs(i[x - 1][x])
                        ? ((i[x - 1][x - 1] = T / i[x][x - 1]),
                          (i[x - 1][x] = -(i[x][x] - S) / i[x][x - 1]))
                        : ((_ = V(0, -i[x - 1][x], i[x - 1][x - 1] - S, T)),
                          (i[x - 1][x - 1] = _[0]),
                          (i[x - 1][x] = _[1])),
                      i[x][x - 1] = 0,
                      i[x][x] = 1,
                      o = x - 2;
                    o >= 0;
                    o--
                  ) {
                    for (v = 0, g = 0, s = u; s <= x; s++)
                      (v += i[o][s] * i[s][x - 1]), (g += i[o][s] * i[s][x]);
                    if (((c = i[o][o] - S), e[o] < 0))
                      (k = c), (P = v), (A = g);
                    else if (
                      ((u = o),
                      0 === e[o]
                        ? ((_ = V(-v, -g, c, T)),
                          (i[o][x - 1] = _[0]),
                          (i[o][x] = _[1]))
                        : ((l = i[o][o + 1]),
                          (d = i[o + 1][o]),
                          (m = (r[o] - S) * (r[o] - S) + e[o] * e[o] - T * T),
                          (p = 2 * (r[o] - S) * T),
                          0 === m &&
                            0 === p &&
                            (m =
                              b *
                              E *
                              (Math.abs(c) +
                                Math.abs(T) +
                                Math.abs(l) +
                                Math.abs(d) +
                                Math.abs(k))),
                          (_ = V(
                            l * P - k * v + T * g,
                            l * A - k * g - T * v,
                            m,
                            p
                          )),
                          (i[o][x - 1] = _[0]),
                          (i[o][x] = _[1]),
                          Math.abs(l) > Math.abs(k) + Math.abs(T)
                            ? ((i[o + 1][x - 1] =
                                (-v - c * i[o][x - 1] + T * i[o][x]) / l),
                              (i[o + 1][x] =
                                (-g - c * i[o][x] - T * i[o][x - 1]) / l))
                            : ((_ = V(
                                -P - d * i[o][x - 1],
                                -A - d * i[o][x],
                                k,
                                T
                              )),
                              (i[o + 1][x - 1] = _[0]),
                              (i[o + 1][x] = _[1]))),
                      (h = Math.max(Math.abs(i[o][x - 1]), Math.abs(i[o][x]))),
                      b * h * h > 1)
                    )
                      for (s = o; s <= x; s++)
                        (i[s][x - 1] = i[s][x - 1] / h),
                          (i[s][x] = i[s][x] / h);
                  }
              for (o = 0; o < t; o++)
                if (o < 0 || o > w) for (s = o; s < t; s++) n[o][s] = i[o][s];
              for (s = t - 1; s >= 0; s--)
                for (o = 0; o <= w; o++) {
                  for (k = 0, a = 0; a <= Math.min(s, w); a++)
                    k += n[o][a] * i[a][s];
                  n[o][s] = k;
                }
            })(o, u, a, s, l);
        }
        (this.n = o), (this.e = u), (this.d = a), (this.V = s);
      }
      get realEigenvalues() {
        return this.d;
      }
      get imaginaryEigenvalues() {
        return this.e;
      }
      get eigenvectorMatrix() {
        return C.isMatrix(this.V) || (this.V = new C(this.V)), this.V;
      }
      get diagonalMatrix() {
        var t,
          e,
          r = this.n,
          n = this.e,
          i = this.d,
          o = new C(r, r);
        for (t = 0; t < r; t++) {
          for (e = 0; e < r; e++) o[t][e] = 0;
          (o[t][t] = i[t]),
            n[t] > 0 ? (o[t][t + 1] = n[t]) : n[t] < 0 && (o[t][t - 1] = n[t]);
        }
        return o;
      }
    }
    function V(t, e, r, n) {
      var i, o;
      return Math.abs(r) > Math.abs(n)
        ? [(t + (i = n / r) * e) / (o = r + i * n), (e - i * t) / o]
        : [((i = r / n) * t + e) / (o = n + i * r), (i * e - t) / o];
    }
    class X {
      constructor(t) {
        if (!(t = I.checkMatrix(t)).isSymmetric())
          throw new Error('Matrix is not symmetric');
        var e,
          r,
          n,
          i = t,
          o = i.rows,
          s = new C(o, o),
          a = !0;
        for (r = 0; r < o; r++) {
          var u = s[r],
            f = 0;
          for (n = 0; n < r; n++) {
            var h = s[n],
              c = 0;
            for (e = 0; e < n; e++) c += h[e] * u[e];
            (u[n] = c = (i.get(r, n) - c) / s[n][n]), (f += c * c);
          }
          for (
            a &= (f = i.get(r, r) - f) > 0,
              s[r][r] = Math.sqrt(Math.max(f, 0)),
              n = r + 1;
            n < o;
            n++
          )
            s[r][n] = 0;
        }
        if (!a) throw new Error('Matrix is not positive definite');
        this.L = s;
      }
      solve(t) {
        t = I.checkMatrix(t);
        var e = this.L,
          r = e.rows;
        if (t.rows !== r) throw new Error('Matrix dimensions do not match');
        var n,
          i,
          o,
          s = t.columns,
          a = t.clone();
        for (o = 0; o < r; o++)
          for (i = 0; i < s; i++) {
            for (n = 0; n < o; n++) a[o][i] -= a[n][i] * e[o][n];
            a[o][i] /= e[o][o];
          }
        for (o = r - 1; o >= 0; o--)
          for (i = 0; i < s; i++) {
            for (n = o + 1; n < r; n++) a[o][i] -= a[n][i] * e[n][o];
            a[o][i] /= e[o][o];
          }
        return a;
      }
      get lowerTriangularMatrix() {
        return this.L;
      }
    }
    r.d(e, 'default', function() {
      return C;
    }),
      r.d(e, 'Matrix', function() {
        return C;
      }),
      r.d(e, 'abstractMatrix', function() {
        return z;
      }),
      r.d(e, 'wrap', function() {
        return j;
      }),
      r.d(e, 'WrapperMatrix2D', function() {
        return I;
      }),
      r.d(e, 'WrapperMatrix1D', function() {
        return O;
      }),
      r.d(e, 'solve', function() {
        return B;
      }),
      r.d(e, 'inverse', function() {
        return F;
      }),
      r.d(e, 'linearDependencies', function() {
        return q;
      }),
      r.d(e, 'SingularValueDecomposition', function() {
        return c;
      }),
      r.d(e, 'SVD', function() {
        return c;
      }),
      r.d(e, 'EigenvalueDecomposition', function() {
        return U;
      }),
      r.d(e, 'EVD', function() {
        return U;
      }),
      r.d(e, 'CholeskyDecomposition', function() {
        return X;
      }),
      r.d(e, 'CHO', function() {
        return X;
      }),
      r.d(e, 'LuDecomposition', function() {
        return u;
      }),
      r.d(e, 'LU', function() {
        return u;
      }),
      r.d(e, 'QrDecomposition', function() {
        return N;
      }),
      r.d(e, 'QR', function() {
        return N;
      });
  },
]);
//# sourceMappingURL=ccNetViz.js.map
