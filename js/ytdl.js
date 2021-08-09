"use strict";
! function() {
    return function e(t, r, n) {
        function i(o, s) {
            if (!r[o]) {
                if (!t[o]) {
                    var u = "function" == typeof require && require;
                    if (!s && u) return u(o, !0);
                    if (a) return a(o, !0);
                    var l = new Error("Cannot find module '" + o + "'");
                    throw l.code = "MODULE_NOT_FOUND", l
                }
                var c = r[o] = {
                    exports: {}
                };
                t[o][0].call(c.exports, function(e) {
                    return i(t[o][1][e] || e)
                }, c, c.exports, e, t, r, n)
            }
            return r[o].exports
        }
        for (var a = "function" == typeof require && require, o = 0; o < n.length; o++) i(n[o]);
        return i
    }
}()({
    1: [function(e, t, r) {
        r.byteLength = function(e) {
            var t = l(e),
                r = t[0],
                n = t[1];
            return 3 * (r + n) / 4 - n
        }, r.toByteArray = function(e) {
            var t, r, n = l(e),
                o = n[0],
                s = n[1],
                u = new a(function(e, t, r) {
                    return 3 * (t + r) / 4 - r
                }(0, o, s)),
                c = 0,
                h = s > 0 ? o - 4 : o;
            for (r = 0; r < h; r += 4) t = i[e.charCodeAt(r)] << 18 | i[e.charCodeAt(r + 1)] << 12 | i[e.charCodeAt(r + 2)] << 6 | i[e.charCodeAt(r + 3)], u[c++] = t >> 16 & 255, u[c++] = t >> 8 & 255, u[c++] = 255 & t;
            2 === s && (t = i[e.charCodeAt(r)] << 2 | i[e.charCodeAt(r + 1)] >> 4, u[c++] = 255 & t);
            1 === s && (t = i[e.charCodeAt(r)] << 10 | i[e.charCodeAt(r + 1)] << 4 | i[e.charCodeAt(r + 2)] >> 2, u[c++] = t >> 8 & 255, u[c++] = 255 & t);
            return u
        }, r.fromByteArray = function(e) {
            for (var t, r = e.length, i = r % 3, a = [], o = 0, s = r - i; o < s; o += 16383) a.push(c(e, o, o + 16383 > s ? s : o + 16383));
            1 === i ? (t = e[r - 1], a.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === i && (t = (e[r - 2] << 8) + e[r - 1], a.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "="));
            return a.join("")
        };
        for (var n = [], i = [], a = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, u = o.length; s < u; ++s) n[s] = o[s], i[o.charCodeAt(s)] = s;

        function l(e) {
            var t = e.length;
            if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            var r = e.indexOf("=");
            return -1 === r && (r = t), [r, r === t ? 0 : 4 - r % 4]
        }

        function c(e, t, r) {
            for (var i, a, o = [], s = t; s < r; s += 3) i = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]), o.push(n[(a = i) >> 18 & 63] + n[a >> 12 & 63] + n[a >> 6 & 63] + n[63 & a]);
            return o.join("")
        }
        i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63
    }, {}],
    2: [function(e, t, r) {}, {}],
    3: [function(e, t, r) {
        (function(t) {
            (function() {
                var t = e("base64-js"),
                    n = e("ieee754");
                r.Buffer = o, r.SlowBuffer = function(e) {
                    +e != e && (e = 0);
                    return o.alloc(+e)
                }, r.INSPECT_MAX_BYTES = 50;
                var i = 2147483647;

                function a(e) {
                    if (e > i) throw new RangeError('The value "' + e + '" is invalid for option "size"');
                    var t = new Uint8Array(e);
                    return t.__proto__ = o.prototype, t
                }

                function o(e, t, r) {
                    if ("number" == typeof e) {
                        if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
                        return l(e)
                    }
                    return s(e, t, r)
                }

                function s(e, t, r) {
                    if ("string" == typeof e) return function(e, t) {
                        "string" == typeof t && "" !== t || (t = "utf8");
                        if (!o.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
                        var r = 0 | f(e, t),
                            n = a(r),
                            i = n.write(e, t);
                        i !== r && (n = n.slice(0, i));
                        return n
                    }(e, t);
                    if (ArrayBuffer.isView(e)) return c(e);
                    if (null == e) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
                    if (j(e, ArrayBuffer) || e && j(e.buffer, ArrayBuffer)) return function(e, t, r) {
                        if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
                        if (e.byteLength < t + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
                        var n;
                        n = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, t) : new Uint8Array(e, t, r);
                        return n.__proto__ = o.prototype, n
                    }(e, t, r);
                    if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
                    var n = e.valueOf && e.valueOf();
                    if (null != n && n !== e) return o.from(n, t, r);
                    var i = function(e) {
                        if (o.isBuffer(e)) {
                            var t = 0 | h(e.length),
                                r = a(t);
                            return 0 === r.length ? r : (e.copy(r, 0, 0, t), r)
                        }
                        if (void 0 !== e.length) return "number" != typeof e.length || q(e.length) ? a(0) : c(e);
                        if ("Buffer" === e.type && Array.isArray(e.data)) return c(e.data)
                    }(e);
                    if (i) return i;
                    if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return o.from(e[Symbol.toPrimitive]("string"), t, r);
                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
                }

                function u(e) {
                    if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
                    if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"')
                }

                function l(e) {
                    return u(e), a(e < 0 ? 0 : 0 | h(e))
                }

                function c(e) {
                    for (var t = e.length < 0 ? 0 : 0 | h(e.length), r = a(t), n = 0; n < t; n += 1) r[n] = 255 & e[n];
                    return r
                }

                function h(e) {
                    if (e >= i) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
                    return 0 | e
                }

                function f(e, t) {
                    if (o.isBuffer(e)) return e.length;
                    if (ArrayBuffer.isView(e) || j(e, ArrayBuffer)) return e.byteLength;
                    if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
                    var r = e.length,
                        n = arguments.length > 2 && !0 === arguments[2];
                    if (!n && 0 === r) return 0;
                    for (var i = !1;;) switch (t) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return r;
                        case "utf8":
                        case "utf-8":
                            return P(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * r;
                        case "hex":
                            return r >>> 1;
                        case "base64":
                            return k(e).length;
                        default:
                            if (i) return n ? -1 : P(e).length;
                            t = ("" + t).toLowerCase(), i = !0
                    }
                }

                function d(e, t, r) {
                    var n = e[t];
                    e[t] = e[r], e[r] = n
                }

                function p(e, t, r, n, i) {
                    if (0 === e.length) return -1;
                    if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), q(r = +r) && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
                        if (i) return -1;
                        r = e.length - 1
                    } else if (r < 0) {
                        if (!i) return -1;
                        r = 0
                    }
                    if ("string" == typeof t && (t = o.from(t, n)), o.isBuffer(t)) return 0 === t.length ? -1 : m(e, t, r, n, i);
                    if ("number" == typeof t) return t &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : m(e, [t], r, n, i);
                    throw new TypeError("val must be string, number or Buffer")
                }

                function m(e, t, r, n, i) {
                    var a, o = 1,
                        s = e.length,
                        u = t.length;
                    if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                        if (e.length < 2 || t.length < 2) return -1;
                        o = 2, s /= 2, u /= 2, r /= 2
                    }

                    function l(e, t) {
                        return 1 === o ? e[t] : e.readUInt16BE(t * o)
                    }
                    if (i) {
                        var c = -1;
                        for (a = r; a < s; a++)
                            if (l(e, a) === l(t, -1 === c ? 0 : a - c)) {
                                if (-1 === c && (c = a), a - c + 1 === u) return c * o
                            } else -1 !== c && (a -= a - c), c = -1
                    } else
                        for (r + u > s && (r = s - u), a = r; a >= 0; a--) {
                            for (var h = !0, f = 0; f < u; f++)
                                if (l(e, a + f) !== l(t, f)) {
                                    h = !1;
                                    break
                                } if (h) return a
                        }
                    return -1
                }

                function b(e, t, r, n) {
                    r = Number(r) || 0;
                    var i = e.length - r;
                    n ? (n = Number(n)) > i && (n = i) : n = i;
                    var a = t.length;
                    n > a / 2 && (n = a / 2);
                    for (var o = 0; o < n; ++o) {
                        var s = parseInt(t.substr(2 * o, 2), 16);
                        if (q(s)) return o;
                        e[r + o] = s
                    }
                    return o
                }

                function y(e, t, r, n) {
                    return U(P(t, e.length - r), e, r, n)
                }

                function g(e, t, r, n) {
                    return U(function(e) {
                        for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                        return t
                    }(t), e, r, n)
                }

                function v(e, t, r, n) {
                    return g(e, t, r, n)
                }

                function _(e, t, r, n) {
                    return U(k(t), e, r, n)
                }

                function w(e, t, r, n) {
                    return U(function(e, t) {
                        for (var r, n, i, a = [], o = 0; o < e.length && !((t -= 2) < 0); ++o) r = e.charCodeAt(o), n = r >> 8, i = r % 256, a.push(i), a.push(n);
                        return a
                    }(t, e.length - r), e, r, n)
                }

                function T(e, r, n) {
                    return 0 === r && n === e.length ? t.fromByteArray(e) : t.fromByteArray(e.slice(r, n))
                }

                function E(e, t, r) {
                    r = Math.min(e.length, r);
                    for (var n = [], i = t; i < r;) {
                        var a, o, s, u, l = e[i],
                            c = null,
                            h = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
                        if (i + h <= r) switch (h) {
                            case 1:
                                l < 128 && (c = l);
                                break;
                            case 2:
                                128 == (192 & (a = e[i + 1])) && (u = (31 & l) << 6 | 63 & a) > 127 && (c = u);
                                break;
                            case 3:
                                a = e[i + 1], o = e[i + 2], 128 == (192 & a) && 128 == (192 & o) && (u = (15 & l) << 12 | (63 & a) << 6 | 63 & o) > 2047 && (u < 55296 || u > 57343) && (c = u);
                                break;
                            case 4:
                                a = e[i + 1], o = e[i + 2], s = e[i + 3], 128 == (192 & a) && 128 == (192 & o) && 128 == (192 & s) && (u = (15 & l) << 18 | (63 & a) << 12 | (63 & o) << 6 | 63 & s) > 65535 && u < 1114112 && (c = u)
                        }
                        null === c ? (c = 65533, h = 1) : c > 65535 && (c -= 65536, n.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), n.push(c), i += h
                    }
                    return function(e) {
                        var t = e.length;
                        if (t <= R) return String.fromCharCode.apply(String, e);
                        var r = "",
                            n = 0;
                        for (; n < t;) r += String.fromCharCode.apply(String, e.slice(n, n += R));
                        return r
                    }(n)
                }
                r.kMaxLength = i, o.TYPED_ARRAY_SUPPORT = function() {
                    try {
                        var e = new Uint8Array(1);
                        return e.__proto__ = {
                            __proto__: Uint8Array.prototype,
                            foo: function() {
                                return 42
                            }
                        }, 42 === e.foo()
                    } catch (e) {
                        return !1
                    }
                }(), o.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(o.prototype, "parent", {
                    enumerable: !0,
                    get: function() {
                        if (o.isBuffer(this)) return this.buffer
                    }
                }), Object.defineProperty(o.prototype, "offset", {
                    enumerable: !0,
                    get: function() {
                        if (o.isBuffer(this)) return this.byteOffset
                    }
                }), "undefined" != typeof Symbol && null != Symbol.species && o[Symbol.species] === o && Object.defineProperty(o, Symbol.species, {
                    value: null,
                    configurable: !0,
                    enumerable: !1,
                    writable: !1
                }), o.poolSize = 8192, o.from = function(e, t, r) {
                    return s(e, t, r)
                }, o.prototype.__proto__ = Uint8Array.prototype, o.__proto__ = Uint8Array, o.alloc = function(e, t, r) {
                    return function(e, t, r) {
                        return u(e), e <= 0 ? a(e) : void 0 !== t ? "string" == typeof r ? a(e).fill(t, r) : a(e).fill(t) : a(e)
                    }(e, t, r)
                }, o.allocUnsafe = function(e) {
                    return l(e)
                }, o.allocUnsafeSlow = function(e) {
                    return l(e)
                }, o.isBuffer = function(e) {
                    return null != e && !0 === e._isBuffer && e !== o.prototype
                }, o.compare = function(e, t) {
                    if (j(e, Uint8Array) && (e = o.from(e, e.offset, e.byteLength)), j(t, Uint8Array) && (t = o.from(t, t.offset, t.byteLength)), !o.isBuffer(e) || !o.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                    if (e === t) return 0;
                    for (var r = e.length, n = t.length, i = 0, a = Math.min(r, n); i < a; ++i)
                        if (e[i] !== t[i]) {
                            r = e[i], n = t[i];
                            break
                        } return r < n ? -1 : n < r ? 1 : 0
                }, o.isEncoding = function(e) {
                    switch (String(e).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1
                    }
                }, o.concat = function(e, t) {
                    if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                    if (0 === e.length) return o.alloc(0);
                    var r;
                    if (void 0 === t)
                        for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
                    var n = o.allocUnsafe(t),
                        i = 0;
                    for (r = 0; r < e.length; ++r) {
                        var a = e[r];
                        if (j(a, Uint8Array) && (a = o.from(a)), !o.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                        a.copy(n, i), i += a.length
                    }
                    return n
                }, o.byteLength = f, o.prototype._isBuffer = !0, o.prototype.swap16 = function() {
                    var e = this.length;
                    if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                    for (var t = 0; t < e; t += 2) d(this, t, t + 1);
                    return this
                }, o.prototype.swap32 = function() {
                    var e = this.length;
                    if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                    for (var t = 0; t < e; t += 4) d(this, t, t + 3), d(this, t + 1, t + 2);
                    return this
                }, o.prototype.swap64 = function() {
                    var e = this.length;
                    if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                    for (var t = 0; t < e; t += 8) d(this, t, t + 7), d(this, t + 1, t + 6), d(this, t + 2, t + 5), d(this, t + 3, t + 4);
                    return this
                }, o.prototype.toString = function() {
                    var e = this.length;
                    return 0 === e ? "" : 0 === arguments.length ? E(this, 0, e) : function(e, t, r) {
                        var n = !1;
                        if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                        if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
                        if ((r >>>= 0) <= (t >>>= 0)) return "";
                        for (e || (e = "utf8");;) switch (e) {
                            case "hex":
                                return L(this, t, r);
                            case "utf8":
                            case "utf-8":
                                return E(this, t, r);
                            case "ascii":
                                return S(this, t, r);
                            case "latin1":
                            case "binary":
                                return A(this, t, r);
                            case "base64":
                                return T(this, t, r);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return C(this, t, r);
                            default:
                                if (n) throw new TypeError("Unknown encoding: " + e);
                                e = (e + "").toLowerCase(), n = !0
                        }
                    }.apply(this, arguments)
                }, o.prototype.toLocaleString = o.prototype.toString, o.prototype.equals = function(e) {
                    if (!o.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                    return this === e || 0 === o.compare(this, e)
                }, o.prototype.inspect = function() {
                    var e = "",
                        t = r.INSPECT_MAX_BYTES;
                    return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (e += " ... "), "<Buffer " + e + ">"
                }, o.prototype.compare = function(e, t, r, n, i) {
                    if (j(e, Uint8Array) && (e = o.from(e, e.offset, e.byteLength)), !o.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
                    if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), t < 0 || r > e.length || n < 0 || i > this.length) throw new RangeError("out of range index");
                    if (n >= i && t >= r) return 0;
                    if (n >= i) return -1;
                    if (t >= r) return 1;
                    if (this === e) return 0;
                    for (var a = (i >>>= 0) - (n >>>= 0), s = (r >>>= 0) - (t >>>= 0), u = Math.min(a, s), l = this.slice(n, i), c = e.slice(t, r), h = 0; h < u; ++h)
                        if (l[h] !== c[h]) {
                            a = l[h], s = c[h];
                            break
                        } return a < s ? -1 : s < a ? 1 : 0
                }, o.prototype.includes = function(e, t, r) {
                    return -1 !== this.indexOf(e, t, r)
                }, o.prototype.indexOf = function(e, t, r) {
                    return p(this, e, t, r, !0)
                }, o.prototype.lastIndexOf = function(e, t, r) {
                    return p(this, e, t, r, !1)
                }, o.prototype.write = function(e, t, r, n) {
                    if (void 0 === t) n = "utf8", r = this.length, t = 0;
                    else if (void 0 === r && "string" == typeof t) n = t, r = this.length, t = 0;
                    else {
                        if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                        t >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
                    }
                    var i = this.length - t;
                    if ((void 0 === r || r > i) && (r = i), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                    n || (n = "utf8");
                    for (var a = !1;;) switch (n) {
                        case "hex":
                            return b(this, e, t, r);
                        case "utf8":
                        case "utf-8":
                            return y(this, e, t, r);
                        case "ascii":
                            return g(this, e, t, r);
                        case "latin1":
                        case "binary":
                            return v(this, e, t, r);
                        case "base64":
                            return _(this, e, t, r);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return w(this, e, t, r);
                        default:
                            if (a) throw new TypeError("Unknown encoding: " + n);
                            n = ("" + n).toLowerCase(), a = !0
                    }
                }, o.prototype.toJSON = function() {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    }
                };
                var R = 4096;

                function S(e, t, r) {
                    var n = "";
                    r = Math.min(e.length, r);
                    for (var i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]);
                    return n
                }

                function A(e, t, r) {
                    var n = "";
                    r = Math.min(e.length, r);
                    for (var i = t; i < r; ++i) n += String.fromCharCode(e[i]);
                    return n
                }

                function L(e, t, r) {
                    var n = e.length;
                    (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
                    for (var i = "", a = t; a < r; ++a) i += B(e[a]);
                    return i
                }

                function C(e, t, r) {
                    for (var n = e.slice(t, r), i = "", a = 0; a < n.length; a += 2) i += String.fromCharCode(n[a] + 256 * n[a + 1]);
                    return i
                }

                function O(e, t, r) {
                    if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                    if (e + t > r) throw new RangeError("Trying to access beyond buffer length")
                }

                function x(e, t, r, n, i, a) {
                    if (!o.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (t > i || t < a) throw new RangeError('"value" argument is out of bounds');
                    if (r + n > e.length) throw new RangeError("Index out of range")
                }

                function N(e, t, r, n, i, a) {
                    if (r + n > e.length) throw new RangeError("Index out of range");
                    if (r < 0) throw new RangeError("Index out of range")
                }

                function I(e, t, r, i, a) {
                    return t = +t, r >>>= 0, a || N(e, 0, r, 4), n.write(e, t, r, i, 23, 4), r + 4
                }

                function D(e, t, r, i, a) {
                    return t = +t, r >>>= 0, a || N(e, 0, r, 8), n.write(e, t, r, i, 52, 8), r + 8
                }
                o.prototype.slice = function(e, t) {
                    var r = this.length;
                    (e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e);
                    var n = this.subarray(e, t);
                    return n.__proto__ = o.prototype, n
                }, o.prototype.readUIntLE = function(e, t, r) {
                    e >>>= 0, t >>>= 0, r || O(e, t, this.length);
                    for (var n = this[e], i = 1, a = 0; ++a < t && (i *= 256);) n += this[e + a] * i;
                    return n
                }, o.prototype.readUIntBE = function(e, t, r) {
                    e >>>= 0, t >>>= 0, r || O(e, t, this.length);
                    for (var n = this[e + --t], i = 1; t > 0 && (i *= 256);) n += this[e + --t] * i;
                    return n
                }, o.prototype.readUInt8 = function(e, t) {
                    return e >>>= 0, t || O(e, 1, this.length), this[e]
                }, o.prototype.readUInt16LE = function(e, t) {
                    return e >>>= 0, t || O(e, 2, this.length), this[e] | this[e + 1] << 8
                }, o.prototype.readUInt16BE = function(e, t) {
                    return e >>>= 0, t || O(e, 2, this.length), this[e] << 8 | this[e + 1]
                }, o.prototype.readUInt32LE = function(e, t) {
                    return e >>>= 0, t || O(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
                }, o.prototype.readUInt32BE = function(e, t) {
                    return e >>>= 0, t || O(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
                }, o.prototype.readIntLE = function(e, t, r) {
                    e >>>= 0, t >>>= 0, r || O(e, t, this.length);
                    for (var n = this[e], i = 1, a = 0; ++a < t && (i *= 256);) n += this[e + a] * i;
                    return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n
                }, o.prototype.readIntBE = function(e, t, r) {
                    e >>>= 0, t >>>= 0, r || O(e, t, this.length);
                    for (var n = t, i = 1, a = this[e + --n]; n > 0 && (i *= 256);) a += this[e + --n] * i;
                    return a >= (i *= 128) && (a -= Math.pow(2, 8 * t)), a
                }, o.prototype.readInt8 = function(e, t) {
                    return e >>>= 0, t || O(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                }, o.prototype.readInt16LE = function(e, t) {
                    e >>>= 0, t || O(e, 2, this.length);
                    var r = this[e] | this[e + 1] << 8;
                    return 32768 & r ? 4294901760 | r : r
                }, o.prototype.readInt16BE = function(e, t) {
                    e >>>= 0, t || O(e, 2, this.length);
                    var r = this[e + 1] | this[e] << 8;
                    return 32768 & r ? 4294901760 | r : r
                }, o.prototype.readInt32LE = function(e, t) {
                    return e >>>= 0, t || O(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
                }, o.prototype.readInt32BE = function(e, t) {
                    return e >>>= 0, t || O(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
                }, o.prototype.readFloatLE = function(e, t) {
                    return e >>>= 0, t || O(e, 4, this.length), n.read(this, e, !0, 23, 4)
                }, o.prototype.readFloatBE = function(e, t) {
                    return e >>>= 0, t || O(e, 4, this.length), n.read(this, e, !1, 23, 4)
                }, o.prototype.readDoubleLE = function(e, t) {
                    return e >>>= 0, t || O(e, 8, this.length), n.read(this, e, !0, 52, 8)
                }, o.prototype.readDoubleBE = function(e, t) {
                    return e >>>= 0, t || O(e, 8, this.length), n.read(this, e, !1, 52, 8)
                }, o.prototype.writeUIntLE = function(e, t, r, n) {
                    (e = +e, t >>>= 0, r >>>= 0, n) || x(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                    var i = 1,
                        a = 0;
                    for (this[t] = 255 & e; ++a < r && (i *= 256);) this[t + a] = e / i & 255;
                    return t + r
                }, o.prototype.writeUIntBE = function(e, t, r, n) {
                    (e = +e, t >>>= 0, r >>>= 0, n) || x(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                    var i = r - 1,
                        a = 1;
                    for (this[t + i] = 255 & e; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;
                    return t + r
                }, o.prototype.writeUInt8 = function(e, t, r) {
                    return e = +e, t >>>= 0, r || x(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
                }, o.prototype.writeUInt16LE = function(e, t, r) {
                    return e = +e, t >>>= 0, r || x(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
                }, o.prototype.writeUInt16BE = function(e, t, r) {
                    return e = +e, t >>>= 0, r || x(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
                }, o.prototype.writeUInt32LE = function(e, t, r) {
                    return e = +e, t >>>= 0, r || x(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
                }, o.prototype.writeUInt32BE = function(e, t, r) {
                    return e = +e, t >>>= 0, r || x(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
                }, o.prototype.writeIntLE = function(e, t, r, n) {
                    if (e = +e, t >>>= 0, !n) {
                        var i = Math.pow(2, 8 * r - 1);
                        x(this, e, t, r, i - 1, -i)
                    }
                    var a = 0,
                        o = 1,
                        s = 0;
                    for (this[t] = 255 & e; ++a < r && (o *= 256);) e < 0 && 0 === s && 0 !== this[t + a - 1] && (s = 1), this[t + a] = (e / o >> 0) - s & 255;
                    return t + r
                }, o.prototype.writeIntBE = function(e, t, r, n) {
                    if (e = +e, t >>>= 0, !n) {
                        var i = Math.pow(2, 8 * r - 1);
                        x(this, e, t, r, i - 1, -i)
                    }
                    var a = r - 1,
                        o = 1,
                        s = 0;
                    for (this[t + a] = 255 & e; --a >= 0 && (o *= 256);) e < 0 && 0 === s && 0 !== this[t + a + 1] && (s = 1), this[t + a] = (e / o >> 0) - s & 255;
                    return t + r
                }, o.prototype.writeInt8 = function(e, t, r) {
                    return e = +e, t >>>= 0, r || x(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
                }, o.prototype.writeInt16LE = function(e, t, r) {
                    return e = +e, t >>>= 0, r || x(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
                }, o.prototype.writeInt16BE = function(e, t, r) {
                    return e = +e, t >>>= 0, r || x(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
                }, o.prototype.writeInt32LE = function(e, t, r) {
                    return e = +e, t >>>= 0, r || x(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
                }, o.prototype.writeInt32BE = function(e, t, r) {
                    return e = +e, t >>>= 0, r || x(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
                }, o.prototype.writeFloatLE = function(e, t, r) {
                    return I(this, e, t, !0, r)
                }, o.prototype.writeFloatBE = function(e, t, r) {
                    return I(this, e, t, !1, r)
                }, o.prototype.writeDoubleLE = function(e, t, r) {
                    return D(this, e, t, !0, r)
                }, o.prototype.writeDoubleBE = function(e, t, r) {
                    return D(this, e, t, !1, r)
                }, o.prototype.copy = function(e, t, r, n) {
                    if (!o.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                    if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r) return 0;
                    if (0 === e.length || 0 === this.length) return 0;
                    if (t < 0) throw new RangeError("targetStart out of bounds");
                    if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
                    if (n < 0) throw new RangeError("sourceEnd out of bounds");
                    n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
                    var i = n - r;
                    if (this === e && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(t, r, n);
                    else if (this === e && r < t && t < n)
                        for (var a = i - 1; a >= 0; --a) e[a + t] = this[a + r];
                    else Uint8Array.prototype.set.call(e, this.subarray(r, n), t);
                    return i
                }, o.prototype.fill = function(e, t, r, n) {
                    if ("string" == typeof e) {
                        if ("string" == typeof t ? (n = t, t = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                        if ("string" == typeof n && !o.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
                        if (1 === e.length) {
                            var i = e.charCodeAt(0);
                            ("utf8" === n && i < 128 || "latin1" === n) && (e = i)
                        }
                    } else "number" == typeof e && (e &= 255);
                    if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
                    if (r <= t) return this;
                    var a;
                    if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e)
                        for (a = t; a < r; ++a) this[a] = e;
                    else {
                        var s = o.isBuffer(e) ? e : o.from(e, n),
                            u = s.length;
                        if (0 === u) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                        for (a = 0; a < r - t; ++a) this[a + t] = s[a % u]
                    }
                    return this
                };
                var M = /[^+\/0-9A-Za-z-_]/g;

                function B(e) {
                    return e < 16 ? "0" + e.toString(16) : e.toString(16)
                }

                function P(e, t) {
                    var r;
                    t = t || 1 / 0;
                    for (var n = e.length, i = null, a = [], o = 0; o < n; ++o) {
                        if ((r = e.charCodeAt(o)) > 55295 && r < 57344) {
                            if (!i) {
                                if (r > 56319) {
                                    (t -= 3) > -1 && a.push(239, 191, 189);
                                    continue
                                }
                                if (o + 1 === n) {
                                    (t -= 3) > -1 && a.push(239, 191, 189);
                                    continue
                                }
                                i = r;
                                continue
                            }
                            if (r < 56320) {
                                (t -= 3) > -1 && a.push(239, 191, 189), i = r;
                                continue
                            }
                            r = 65536 + (i - 55296 << 10 | r - 56320)
                        } else i && (t -= 3) > -1 && a.push(239, 191, 189);
                        if (i = null, r < 128) {
                            if ((t -= 1) < 0) break;
                            a.push(r)
                        } else if (r < 2048) {
                            if ((t -= 2) < 0) break;
                            a.push(r >> 6 | 192, 63 & r | 128)
                        } else if (r < 65536) {
                            if ((t -= 3) < 0) break;
                            a.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                        } else {
                            if (!(r < 1114112)) throw new Error("Invalid code point");
                            if ((t -= 4) < 0) break;
                            a.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                        }
                    }
                    return a
                }

                function k(e) {
                    return t.toByteArray(function(e) {
                        if ((e = (e = e.split("=")[0]).trim().replace(M, "")).length < 2) return "";
                        for (; e.length % 4 != 0;) e += "=";
                        return e
                    }(e))
                }

                function U(e, t, r, n) {
                    for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i) t[i + r] = e[i];
                    return i
                }

                function j(e, t) {
                    return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
                }

                function q(e) {
                    return e != e
                }
            }).call(this)
        }).call(this, e("buffer").Buffer)
    }, {
        "base64-js": 1,
        buffer: 3,
        ieee754: 7
    }],
    4: [function(e, t, r) {
        t.exports = {
            100: "Continue",
            101: "Switching Protocols",
            102: "Processing",
            200: "OK",
            201: "Created",
            202: "Accepted",
            203: "Non-Authoritative Information",
            204: "No Content",
            205: "Reset Content",
            206: "Partial Content",
            207: "Multi-Status",
            208: "Already Reported",
            226: "IM Used",
            300: "Multiple Choices",
            301: "Moved Permanently",
            302: "Found",
            303: "See Other",
            304: "Not Modified",
            305: "Use Proxy",
            307: "Temporary Redirect",
            308: "Permanent Redirect",
            400: "Bad Request",
            401: "Unauthorized",
            402: "Payment Required",
            403: "Forbidden",
            404: "Not Found",
            405: "Method Not Allowed",
            406: "Not Acceptable",
            407: "Proxy Authentication Required",
            408: "Request Timeout",
            409: "Conflict",
            410: "Gone",
            411: "Length Required",
            412: "Precondition Failed",
            413: "Payload Too Large",
            414: "URI Too Long",
            415: "Unsupported Media Type",
            416: "Range Not Satisfiable",
            417: "Expectation Failed",
            418: "I'm a teapot",
            421: "Misdirected Request",
            422: "Unprocessable Entity",
            423: "Locked",
            424: "Failed Dependency",
            425: "Unordered Collection",
            426: "Upgrade Required",
            428: "Precondition Required",
            429: "Too Many Requests",
            431: "Request Header Fields Too Large",
            451: "Unavailable For Legal Reasons",
            500: "Internal Server Error",
            501: "Not Implemented",
            502: "Bad Gateway",
            503: "Service Unavailable",
            504: "Gateway Timeout",
            505: "HTTP Version Not Supported",
            506: "Variant Also Negotiates",
            507: "Insufficient Storage",
            508: "Loop Detected",
            509: "Bandwidth Limit Exceeded",
            510: "Not Extended",
            511: "Network Authentication Required"
        }
    }, {}],
    5: [function(e, t, r) {
        var n, i = "object" == typeof Reflect ? Reflect : null,
            a = i && "function" == typeof i.apply ? i.apply : function(e, t, r) {
                return Function.prototype.apply.call(e, t, r)
            };
        n = i && "function" == typeof i.ownKeys ? i.ownKeys : Object.getOwnPropertySymbols ? function(e) {
            return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
        } : function(e) {
            return Object.getOwnPropertyNames(e)
        };
        var o = Number.isNaN || function(e) {
            return e != e
        };

        function s() {
            s.init.call(this)
        }
        t.exports = s, t.exports.once = function(e, t) {
            return new Promise(function(r, n) {
                function i(r) {
                    e.removeListener(t, a), n(r)
                }

                function a() {
                    "function" == typeof e.removeListener && e.removeListener("error", i), r([].slice.call(arguments))
                }
                b(e, t, a, {
                    once: !0
                }), "error" !== t && function(e, t, r) {
                    "function" == typeof e.on && b(e, "error", t, r)
                }(e, i, {
                    once: !0
                })
            })
        }, s.EventEmitter = s, s.prototype._events = void 0, s.prototype._eventsCount = 0, s.prototype._maxListeners = void 0;
        var u = 10;

        function l(e) {
            if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
        }

        function c(e) {
            return void 0 === e._maxListeners ? s.defaultMaxListeners : e._maxListeners
        }

        function h(e, t, r, n) {
            var i, a, o, s;
            if (l(r), void 0 === (a = e._events) ? (a = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== a.newListener && (e.emit("newListener", t, r.listener ? r.listener : r), a = e._events), o = a[t]), void 0 === o) o = a[t] = r, ++e._eventsCount;
            else if ("function" == typeof o ? o = a[t] = n ? [r, o] : [o, r] : n ? o.unshift(r) : o.push(r), (i = c(e)) > 0 && o.length > i && !o.warned) {
                o.warned = !0;
                var u = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = o.length, s = u, console && console.warn && console.warn(s)
            }
            return e
        }

        function f(e, t, r) {
            var n = {
                    fired: !1,
                    wrapFn: void 0,
                    target: e,
                    type: t,
                    listener: r
                },
                i = function() {
                    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
                }.bind(n);
            return i.listener = r, n.wrapFn = i, i
        }

        function d(e, t, r) {
            var n = e._events;
            if (void 0 === n) return [];
            var i = n[t];
            return void 0 === i ? [] : "function" == typeof i ? r ? [i.listener || i] : [i] : r ? function(e) {
                for (var t = new Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
                return t
            }(i) : m(i, i.length)
        }

        function p(e) {
            var t = this._events;
            if (void 0 !== t) {
                var r = t[e];
                if ("function" == typeof r) return 1;
                if (void 0 !== r) return r.length
            }
            return 0
        }

        function m(e, t) {
            for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
            return r
        }

        function b(e, t, r, n) {
            if ("function" == typeof e.on) n.once ? e.once(t, r) : e.on(t, r);
            else {
                if ("function" != typeof e.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
                e.addEventListener(t, function i(a) {
                    n.once && e.removeEventListener(t, i), r(a)
                })
            }
        }
        Object.defineProperty(s, "defaultMaxListeners", {
            enumerable: !0,
            get: function() {
                return u
            },
            set: function(e) {
                if ("number" != typeof e || e < 0 || o(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                u = e
            }
        }), s.init = function() {
            void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
        }, s.prototype.setMaxListeners = function(e) {
            if ("number" != typeof e || e < 0 || o(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
            return this._maxListeners = e, this
        }, s.prototype.getMaxListeners = function() {
            return c(this)
        }, s.prototype.emit = function(e) {
            for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]);
            var n = "error" === e,
                i = this._events;
            if (void 0 !== i) n = n && void 0 === i.error;
            else if (!n) return !1;
            if (n) {
                var o;
                if (t.length > 0 && (o = t[0]), o instanceof Error) throw o;
                var s = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
                throw s.context = o, s
            }
            var u = i[e];
            if (void 0 === u) return !1;
            if ("function" == typeof u) a(u, this, t);
            else {
                var l = u.length,
                    c = m(u, l);
                for (r = 0; r < l; ++r) a(c[r], this, t)
            }
            return !0
        }, s.prototype.addListener = function(e, t) {
            return h(this, e, t, !1)
        }, s.prototype.on = s.prototype.addListener, s.prototype.prependListener = function(e, t) {
            return h(this, e, t, !0)
        }, s.prototype.once = function(e, t) {
            return l(t), this.on(e, f(this, e, t)), this
        }, s.prototype.prependOnceListener = function(e, t) {
            return l(t), this.prependListener(e, f(this, e, t)), this
        }, s.prototype.removeListener = function(e, t) {
            var r, n, i, a, o;
            if (l(t), void 0 === (n = this._events)) return this;
            if (void 0 === (r = n[e])) return this;
            if (r === t || r.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete n[e], n.removeListener && this.emit("removeListener", e, r.listener || t));
            else if ("function" != typeof r) {
                for (i = -1, a = r.length - 1; a >= 0; a--)
                    if (r[a] === t || r[a].listener === t) {
                        o = r[a].listener, i = a;
                        break
                    } if (i < 0) return this;
                0 === i ? r.shift() : function(e, t) {
                    for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                    e.pop()
                }(r, i), 1 === r.length && (n[e] = r[0]), void 0 !== n.removeListener && this.emit("removeListener", e, o || t)
            }
            return this
        }, s.prototype.off = s.prototype.removeListener, s.prototype.removeAllListeners = function(e) {
            var t, r, n;
            if (void 0 === (r = this._events)) return this;
            if (void 0 === r.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== r[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[e]), this;
            if (0 === arguments.length) {
                var i, a = Object.keys(r);
                for (n = 0; n < a.length; ++n) "removeListener" !== (i = a[n]) && this.removeAllListeners(i);
                return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
            }
            if ("function" == typeof(t = r[e])) this.removeListener(e, t);
            else if (void 0 !== t)
                for (n = t.length - 1; n >= 0; n--) this.removeListener(e, t[n]);
            return this
        }, s.prototype.listeners = function(e) {
            return d(this, e, !0)
        }, s.prototype.rawListeners = function(e) {
            return d(this, e, !1)
        }, s.listenerCount = function(e, t) {
            return "function" == typeof e.listenerCount ? e.listenerCount(t) : p.call(e, t)
        }, s.prototype.listenerCount = p, s.prototype.eventNames = function() {
            return this._eventsCount > 0 ? n(this._events) : []
        }
    }, {}],
    6: [function(e, t, r) {
        var n = e("http"),
            i = e("url"),
            a = t.exports;
        for (var o in n) n.hasOwnProperty(o) && (a[o] = n[o]);

        function s(e) {
            if ("string" == typeof e && (e = i.parse(e)), e.protocol || (e.protocol = "https:"), "https:" !== e.protocol) throw new Error('Protocol "' + e.protocol + '" not supported. Expected "https:"');
            return e
        }
        a.request = function(e, t) {
            return e = s(e), n.request.call(this, e, t)
        }, a.get = function(e, t) {
            return e = s(e), n.get.call(this, e, t)
        }
    }, {
        http: 30,
        url: 50
    }],
    7: [function(e, t, r) {
        r.read = function(e, t, r, n, i) {
            var a, o, s = 8 * i - n - 1,
                u = (1 << s) - 1,
                l = u >> 1,
                c = -7,
                h = r ? i - 1 : 0,
                f = r ? -1 : 1,
                d = e[t + h];
            for (h += f, a = d & (1 << -c) - 1, d >>= -c, c += s; c > 0; a = 256 * a + e[t + h], h += f, c -= 8);
            for (o = a & (1 << -c) - 1, a >>= -c, c += n; c > 0; o = 256 * o + e[t + h], h += f, c -= 8);
            if (0 === a) a = 1 - l;
            else {
                if (a === u) return o ? NaN : 1 / 0 * (d ? -1 : 1);
                o += Math.pow(2, n), a -= l
            }
            return (d ? -1 : 1) * o * Math.pow(2, a - n)
        }, r.write = function(e, t, r, n, i, a) {
            var o, s, u, l = 8 * a - i - 1,
                c = (1 << l) - 1,
                h = c >> 1,
                f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                d = n ? 0 : a - 1,
                p = n ? 1 : -1,
                m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, o = c) : (o = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -o)) < 1 && (o--, u *= 2), (t += o + h >= 1 ? f / u : f * Math.pow(2, 1 - h)) * u >= 2 && (o++, u /= 2), o + h >= c ? (s = 0, o = c) : o + h >= 1 ? (s = (t * u - 1) * Math.pow(2, i), o += h) : (s = t * Math.pow(2, h - 1) * Math.pow(2, i), o = 0)); i >= 8; e[r + d] = 255 & s, d += p, s /= 256, i -= 8);
            for (o = o << i | s, l += i; l > 0; e[r + d] = 255 & o, d += p, o /= 256, l -= 8);
            e[r + d - p] |= 128 * m
        }
    }, {}],
    8: [function(e, t, r) {
        "function" == typeof Object.create ? t.exports = function(e, t) {
            t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }))
        } : t.exports = function(e, t) {
            if (t) {
                e.super_ = t;
                var r = function() {};
                r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
            }
        }
    }, {}],
    9: [function(e, t, r) {
        var n, i, a = t.exports = {};

        function o() {
            throw new Error("setTimeout has not been defined")
        }

        function s() {
            throw new Error("clearTimeout has not been defined")
        }

        function u(e) {
            if (n === setTimeout) return setTimeout(e, 0);
            if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
            try {
                return n(e, 0)
            } catch (t) {
                try {
                    return n.call(null, e, 0)
                } catch (t) {
                    return n.call(this, e, 0)
                }
            }
        }! function() {
            try {
                n = "function" == typeof setTimeout ? setTimeout : o
            } catch (e) {
                n = o
            }
            try {
                i = "function" == typeof clearTimeout ? clearTimeout : s
            } catch (e) {
                i = s
            }
        }();
        var l, c = [],
            h = !1,
            f = -1;

        function d() {
            h && l && (h = !1, l.length ? c = l.concat(c) : f = -1, c.length && p())
        }

        function p() {
            if (!h) {
                var e = u(d);
                h = !0;
                for (var t = c.length; t;) {
                    for (l = c, c = []; ++f < t;) l && l[f].run();
                    f = -1, t = c.length
                }
                l = null, h = !1,
                    function(e) {
                        if (i === clearTimeout) return clearTimeout(e);
                        if ((i === s || !i) && clearTimeout) return i = clearTimeout, clearTimeout(e);
                        try {
                            i(e)
                        } catch (t) {
                            try {
                                return i.call(null, e)
                            } catch (t) {
                                return i.call(this, e)
                            }
                        }
                    }(e)
            }
        }

        function m(e, t) {
            this.fun = e, this.array = t
        }

        function b() {}
        a.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
            c.push(new m(e, t)), 1 !== c.length || h || u(p)
        }, m.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = b, a.addListener = b, a.once = b, a.off = b, a.removeListener = b, a.removeAllListeners = b, a.emit = b, a.prependListener = b, a.prependOnceListener = b, a.listeners = function(e) {
            return []
        }, a.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, a.cwd = function() {
            return "/"
        }, a.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, a.umask = function() {
            return 0
        }
    }, {}],
    10: [function(e, t, r) {
        (function(e) {
            (function() {
                ! function(n) {
                    var i = "object" == typeof r && r && !r.nodeType && r,
                        a = "object" == typeof t && t && !t.nodeType && t,
                        o = "object" == typeof e && e;
                    o.global !== o && o.window !== o && o.self !== o || (n = o);
                    var s, u, l = 2147483647,
                        c = 36,
                        h = 1,
                        f = 26,
                        d = 38,
                        p = 700,
                        m = 72,
                        b = 128,
                        y = "-",
                        g = /^xn--/,
                        v = /[^\x20-\x7E]/,
                        _ = /[\x2E\u3002\uFF0E\uFF61]/g,
                        w = {
                            overflow: "Overflow: input needs wider integers to process",
                            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                            "invalid-input": "Invalid input"
                        },
                        T = c - h,
                        E = Math.floor,
                        R = String.fromCharCode;

                    function S(e) {
                        throw new RangeError(w[e])
                    }

                    function A(e, t) {
                        for (var r = e.length, n = []; r--;) n[r] = t(e[r]);
                        return n
                    }

                    function L(e, t) {
                        var r = e.split("@"),
                            n = "";
                        return r.length > 1 && (n = r[0] + "@", e = r[1]), n + A((e = e.replace(_, ".")).split("."), t).join(".")
                    }

                    function C(e) {
                        for (var t, r, n = [], i = 0, a = e.length; i < a;)(t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < a ? 56320 == (64512 & (r = e.charCodeAt(i++))) ? n.push(((1023 & t) << 10) + (1023 & r) + 65536) : (n.push(t), i--) : n.push(t);
                        return n
                    }

                    function O(e) {
                        return A(e, function(e) {
                            var t = "";
                            return e > 65535 && (t += R((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += R(e)
                        }).join("")
                    }

                    function x(e, t) {
                        return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
                    }

                    function N(e, t, r) {
                        var n = 0;
                        for (e = r ? E(e / p) : e >> 1, e += E(e / t); e > T * f >> 1; n += c) e = E(e / T);
                        return E(n + (T + 1) * e / (e + d))
                    }

                    function I(e) {
                        var t, r, n, i, a, o, s, u, d, p, g, v = [],
                            _ = e.length,
                            w = 0,
                            T = b,
                            R = m;
                        for ((r = e.lastIndexOf(y)) < 0 && (r = 0), n = 0; n < r; ++n) e.charCodeAt(n) >= 128 && S("not-basic"), v.push(e.charCodeAt(n));
                        for (i = r > 0 ? r + 1 : 0; i < _;) {
                            for (a = w, o = 1, s = c; i >= _ && S("invalid-input"), ((u = (g = e.charCodeAt(i++)) - 48 < 10 ? g - 22 : g - 65 < 26 ? g - 65 : g - 97 < 26 ? g - 97 : c) >= c || u > E((l - w) / o)) && S("overflow"), w += u * o, !(u < (d = s <= R ? h : s >= R + f ? f : s - R)); s += c) o > E(l / (p = c - d)) && S("overflow"), o *= p;
                            R = N(w - a, t = v.length + 1, 0 == a), E(w / t) > l - T && S("overflow"), T += E(w / t), w %= t, v.splice(w++, 0, T)
                        }
                        return O(v)
                    }

                    function D(e) {
                        var t, r, n, i, a, o, s, u, d, p, g, v, _, w, T, A = [];
                        for (v = (e = C(e)).length, t = b, r = 0, a = m, o = 0; o < v; ++o)(g = e[o]) < 128 && A.push(R(g));
                        for (n = i = A.length, i && A.push(y); n < v;) {
                            for (s = l, o = 0; o < v; ++o)(g = e[o]) >= t && g < s && (s = g);
                            for (s - t > E((l - r) / (_ = n + 1)) && S("overflow"), r += (s - t) * _, t = s, o = 0; o < v; ++o)
                                if ((g = e[o]) < t && ++r > l && S("overflow"), g == t) {
                                    for (u = r, d = c; !(u < (p = d <= a ? h : d >= a + f ? f : d - a)); d += c) T = u - p, w = c - p, A.push(R(x(p + T % w, 0))), u = E(T / w);
                                    A.push(R(x(u, 0))), a = N(r, _, n == i), r = 0, ++n
                                }++ r, ++t
                        }
                        return A.join("")
                    }
                    if (s = {
                            version: "1.4.1",
                            ucs2: {
                                decode: C,
                                encode: O
                            },
                            decode: I,
                            encode: D,
                            toASCII: function(e) {
                                return L(e, function(e) {
                                    return v.test(e) ? "xn--" + D(e) : e
                                })
                            },
                            toUnicode: function(e) {
                                return L(e, function(e) {
                                    return g.test(e) ? I(e.slice(4).toLowerCase()) : e
                                })
                            }
                        }, "function" == typeof define && "object" == typeof define.amd && define.amd) define("punycode", function() {
                        return s
                    });
                    else if (i && a)
                        if (t.exports == i) a.exports = s;
                        else
                            for (u in s) s.hasOwnProperty(u) && (i[u] = s[u]);
                    else n.punycode = s
                }(this)
            }).call(this)
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    11: [function(e, t, r) {
        function n(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        t.exports = function(e, t, r, a) {
            t = t || "&", r = r || "=";
            var o = {};
            if ("string" != typeof e || 0 === e.length) return o;
            var s = /\+/g;
            e = e.split(t);
            var u = 1e3;
            a && "number" == typeof a.maxKeys && (u = a.maxKeys);
            var l = e.length;
            u > 0 && l > u && (l = u);
            for (var c = 0; c < l; ++c) {
                var h, f, d, p, m = e[c].replace(s, "%20"),
                    b = m.indexOf(r);
                b >= 0 ? (h = m.substr(0, b), f = m.substr(b + 1)) : (h = m, f = ""), d = decodeURIComponent(h), p = decodeURIComponent(f), n(o, d) ? i(o[d]) ? o[d].push(p) : o[d] = [o[d], p] : o[d] = p
            }
            return o
        };
        var i = Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
    }, {}],
    12: [function(e, t, r) {
        var n = function(e) {
            switch (typeof e) {
                case "string":
                    return e;
                case "boolean":
                    return e ? "true" : "false";
                case "number":
                    return isFinite(e) ? e : "";
                default:
                    return ""
            }
        };
        t.exports = function(e, t, r, s) {
            return t = t || "&", r = r || "=", null === e && (e = void 0), "object" == typeof e ? a(o(e), function(o) {
                var s = encodeURIComponent(n(o)) + r;
                return i(e[o]) ? a(e[o], function(e) {
                    return s + encodeURIComponent(n(e))
                }).join(t) : s + encodeURIComponent(n(e[o]))
            }).join(t) : s ? encodeURIComponent(n(s)) + r + encodeURIComponent(n(e)) : ""
        };
        var i = Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        };

        function a(e, t) {
            if (e.map) return e.map(t);
            for (var r = [], n = 0; n < e.length; n++) r.push(t(e[n], n));
            return r
        }
        var o = Object.keys || function(e) {
            var t = [];
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
            return t
        }
    }, {}],
    13: [function(e, t, r) {
        r.decode = r.parse = e("./decode"), r.encode = r.stringify = e("./encode")
    }, {
        "./decode": 11,
        "./encode": 12
    }],
    14: [function(e, t, r) {
        var n = e("buffer"),
            i = n.Buffer;

        function a(e, t) {
            for (var r in e) t[r] = e[r]
        }

        function o(e, t, r) {
            return i(e, t, r)
        }
        i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? t.exports = n : (a(n, r), r.Buffer = o), o.prototype = Object.create(i.prototype), a(i, o), o.from = function(e, t, r) {
            if ("number" == typeof e) throw new TypeError("Argument must not be a number");
            return i(e, t, r)
        }, o.alloc = function(e, t, r) {
            if ("number" != typeof e) throw new TypeError("Argument must be a number");
            var n = i(e);
            return void 0 !== t ? "string" == typeof r ? n.fill(t, r) : n.fill(t) : n.fill(0), n
        }, o.allocUnsafe = function(e) {
            if ("number" != typeof e) throw new TypeError("Argument must be a number");
            return i(e)
        }, o.allocUnsafeSlow = function(e) {
            if ("number" != typeof e) throw new TypeError("Argument must be a number");
            return n.SlowBuffer(e)
        }
    }, {
        buffer: 3
    }],
    15: [function(e, t, r) {
        t.exports = i;
        var n = e("events").EventEmitter;

        function i() {
            n.call(this)
        }
        e("inherits")(i, n), i.Readable = e("readable-stream/lib/_stream_readable.js"), i.Writable = e("readable-stream/lib/_stream_writable.js"), i.Duplex = e("readable-stream/lib/_stream_duplex.js"), i.Transform = e("readable-stream/lib/_stream_transform.js"), i.PassThrough = e("readable-stream/lib/_stream_passthrough.js"), i.finished = e("readable-stream/lib/internal/streams/end-of-stream.js"), i.pipeline = e("readable-stream/lib/internal/streams/pipeline.js"), i.Stream = i, i.prototype.pipe = function(e, t) {
            var r = this;

            function i(t) {
                e.writable && !1 === e.write(t) && r.pause && r.pause()
            }

            function a() {
                r.readable && r.resume && r.resume()
            }
            r.on("data", i), e.on("drain", a), e._isStdio || t && !1 === t.end || (r.on("end", s), r.on("close", u));
            var o = !1;

            function s() {
                o || (o = !0, e.end())
            }

            function u() {
                o || (o = !0, "function" == typeof e.destroy && e.destroy())
            }

            function l(e) {
                if (c(), 0 === n.listenerCount(this, "error")) throw e
            }

            function c() {
                r.removeListener("data", i), e.removeListener("drain", a), r.removeListener("end", s), r.removeListener("close", u), r.removeListener("error", l), e.removeListener("error", l), r.removeListener("end", c), r.removeListener("close", c), e.removeListener("close", c)
            }
            return r.on("error", l), e.on("error", l), r.on("end", c), r.on("close", c), e.on("close", c), e.emit("pipe", r), e
        }
    }, {
        events: 5,
        inherits: 8,
        "readable-stream/lib/_stream_duplex.js": 17,
        "readable-stream/lib/_stream_passthrough.js": 18,
        "readable-stream/lib/_stream_readable.js": 19,
        "readable-stream/lib/_stream_transform.js": 20,
        "readable-stream/lib/_stream_writable.js": 21,
        "readable-stream/lib/internal/streams/end-of-stream.js": 25,
        "readable-stream/lib/internal/streams/pipeline.js": 27
    }],
    16: [function(e, t, r) {
        var n = {};

        function i(e, t, r) {
            r || (r = Error);
            var i = function(e) {
                var r, n;

                function i(r, n, i) {
                    return e.call(this, function(e, r, n) {
                        return "string" == typeof t ? t : t(e, r, n)
                    }(r, n, i)) || this
                }
                return n = e, (r = i).prototype = Object.create(n.prototype), r.prototype.constructor = r, r.__proto__ = n, i
            }(r);
            i.prototype.name = r.name, i.prototype.code = e, n[e] = i
        }

        function a(e, t) {
            if (Array.isArray(e)) {
                var r = e.length;
                return e = e.map(function(e) {
                    return String(e)
                }), r > 2 ? "one of ".concat(t, " ").concat(e.slice(0, r - 1).join(", "), ", or ") + e[r - 1] : 2 === r ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0])
            }
            return "of ".concat(t, " ").concat(String(e))
        }
        i("ERR_INVALID_OPT_VALUE", function(e, t) {
            return 'The value "' + t + '" is invalid for option "' + e + '"'
        }, TypeError), i("ERR_INVALID_ARG_TYPE", function(e, t, r) {
            var n, i, o, s;
            if ("string" == typeof t && (i = "not ", t.substr(!o || o < 0 ? 0 : +o, i.length) === i) ? (n = "must not be", t = t.replace(/^not /, "")) : n = "must be", function(e, t, r) {
                    return (void 0 === r || r > e.length) && (r = e.length), e.substring(r - t.length, r) === t
                }(e, " argument")) s = "The ".concat(e, " ").concat(n, " ").concat(a(t, "type"));
            else {
                var u = function(e, t, r) {
                    return "number" != typeof r && (r = 0), !(r + t.length > e.length) && -1 !== e.indexOf(t, r)
                }(e, ".") ? "property" : "argument";
                s = 'The "'.concat(e, '" ').concat(u, " ").concat(n, " ").concat(a(t, "type"))
            }
            return s += ". Received type ".concat(typeof r)
        }, TypeError), i("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), i("ERR_METHOD_NOT_IMPLEMENTED", function(e) {
            return "The " + e + " method is not implemented"
        }), i("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), i("ERR_STREAM_DESTROYED", function(e) {
            return "Cannot call " + e + " after a stream was destroyed"
        }), i("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), i("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), i("ERR_STREAM_WRITE_AFTER_END", "write after end"), i("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), i("ERR_UNKNOWN_ENCODING", function(e) {
            return "Unknown encoding: " + e
        }, TypeError), i("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), t.exports.codes = n
    }, {}],
    17: [function(e, t, r) {
        (function(r) {
            (function() {
                var n = Object.keys || function(e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t
                };
                t.exports = l;
                var i = e("./_stream_readable"),
                    a = e("./_stream_writable");
                e("inherits")(l, i);
                for (var o = n(a.prototype), s = 0; s < o.length; s++) {
                    var u = o[s];
                    l.prototype[u] || (l.prototype[u] = a.prototype[u])
                }

                function l(e) {
                    if (!(this instanceof l)) return new l(e);
                    i.call(this, e), a.call(this, e), this.allowHalfOpen = !0, e && (!1 === e.readable && (this.readable = !1), !1 === e.writable && (this.writable = !1), !1 === e.allowHalfOpen && (this.allowHalfOpen = !1, this.once("end", c)))
                }

                function c() {
                    this._writableState.ended || r.nextTick(h, this)
                }

                function h(e) {
                    e.end()
                }
                Object.defineProperty(l.prototype, "writableHighWaterMark", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.highWaterMark
                    }
                }), Object.defineProperty(l.prototype, "writableBuffer", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState && this._writableState.getBuffer()
                    }
                }), Object.defineProperty(l.prototype, "writableLength", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.length
                    }
                }), Object.defineProperty(l.prototype, "destroyed", {
                    enumerable: !1,
                    get: function() {
                        return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
                    },
                    set: function(e) {
                        void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e)
                    }
                })
            }).call(this)
        }).call(this, e("_process"))
    }, {
        "./_stream_readable": 19,
        "./_stream_writable": 21,
        _process: 9,
        inherits: 8
    }],
    18: [function(e, t, r) {
        t.exports = i;
        var n = e("./_stream_transform");

        function i(e) {
            if (!(this instanceof i)) return new i(e);
            n.call(this, e)
        }
        e("inherits")(i, n), i.prototype._transform = function(e, t, r) {
            r(null, e)
        }
    }, {
        "./_stream_transform": 20,
        inherits: 8
    }],
    19: [function(e, t, r) {
        (function(r, n) {
            (function() {
                var i;
                t.exports = S, S.ReadableState = R;
                e("events").EventEmitter;
                var a = function(e, t) {
                        return e.listeners(t).length
                    },
                    o = e("./internal/streams/stream"),
                    s = e("buffer").Buffer,
                    u = n.Uint8Array || function() {};
                var l, c = e("util");
                l = c && c.debuglog ? c.debuglog("stream") : function() {};
                var h, f, d, p = e("./internal/streams/buffer_list"),
                    m = e("./internal/streams/destroy"),
                    b = e("./internal/streams/state").getHighWaterMark,
                    y = e("../errors").codes,
                    g = y.ERR_INVALID_ARG_TYPE,
                    v = y.ERR_STREAM_PUSH_AFTER_EOF,
                    _ = y.ERR_METHOD_NOT_IMPLEMENTED,
                    w = y.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
                e("inherits")(S, o);
                var T = m.errorOrDestroy,
                    E = ["error", "close", "destroy", "pause", "resume"];

                function R(t, r, n) {
                    i = i || e("./_stream_duplex"), t = t || {}, "boolean" != typeof n && (n = r instanceof i), this.objectMode = !!t.objectMode, n && (this.objectMode = this.objectMode || !!t.readableObjectMode), this.highWaterMark = b(this, t, "readableHighWaterMark", n), this.buffer = new p, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = !1 !== t.emitClose, this.autoDestroy = !!t.autoDestroy, this.destroyed = !1, this.defaultEncoding = t.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, t.encoding && (h || (h = e("string_decoder/").StringDecoder), this.decoder = new h(t.encoding), this.encoding = t.encoding)
                }

                function S(t) {
                    if (i = i || e("./_stream_duplex"), !(this instanceof S)) return new S(t);
                    var r = this instanceof i;
                    this._readableState = new R(t, this, r), this.readable = !0, t && ("function" == typeof t.read && (this._read = t.read), "function" == typeof t.destroy && (this._destroy = t.destroy)), o.call(this)
                }

                function A(e, t, r, n, i) {
                    l("readableAddChunk", t);
                    var a, o = e._readableState;
                    if (null === t) o.reading = !1,
                        function(e, t) {
                            if (l("onEofChunk"), t.ended) return;
                            if (t.decoder) {
                                var r = t.decoder.end();
                                r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length)
                            }
                            t.ended = !0, t.sync ? x(e) : (t.needReadable = !1, t.emittedReadable || (t.emittedReadable = !0, N(e)))
                        }(e, o);
                    else if (i || (a = function(e, t) {
                            var r;
                            n = t, s.isBuffer(n) || n instanceof u || "string" == typeof t || void 0 === t || e.objectMode || (r = new g("chunk", ["string", "Buffer", "Uint8Array"], t));
                            var n;
                            return r
                        }(o, t)), a) T(e, a);
                    else if (o.objectMode || t && t.length > 0)
                        if ("string" == typeof t || o.objectMode || Object.getPrototypeOf(t) === s.prototype || (t = function(e) {
                                return s.from(e)
                            }(t)), n) o.endEmitted ? T(e, new w) : L(e, o, t, !0);
                        else if (o.ended) T(e, new v);
                    else {
                        if (o.destroyed) return !1;
                        o.reading = !1, o.decoder && !r ? (t = o.decoder.write(t), o.objectMode || 0 !== t.length ? L(e, o, t, !1) : I(e, o)) : L(e, o, t, !1)
                    } else n || (o.reading = !1, I(e, o));
                    return !o.ended && (o.length < o.highWaterMark || 0 === o.length)
                }

                function L(e, t, r, n) {
                    t.flowing && 0 === t.length && !t.sync ? (t.awaitDrain = 0, e.emit("data", r)) : (t.length += t.objectMode ? 1 : r.length, n ? t.buffer.unshift(r) : t.buffer.push(r), t.needReadable && x(e)), I(e, t)
                }
                Object.defineProperty(S.prototype, "destroyed", {
                    enumerable: !1,
                    get: function() {
                        return void 0 !== this._readableState && this._readableState.destroyed
                    },
                    set: function(e) {
                        this._readableState && (this._readableState.destroyed = e)
                    }
                }), S.prototype.destroy = m.destroy, S.prototype._undestroy = m.undestroy, S.prototype._destroy = function(e, t) {
                    t(e)
                }, S.prototype.push = function(e, t) {
                    var r, n = this._readableState;
                    return n.objectMode ? r = !0 : "string" == typeof e && ((t = t || n.defaultEncoding) !== n.encoding && (e = s.from(e, t), t = ""), r = !0), A(this, e, t, !1, r)
                }, S.prototype.unshift = function(e) {
                    return A(this, e, null, !0, !1)
                }, S.prototype.isPaused = function() {
                    return !1 === this._readableState.flowing
                }, S.prototype.setEncoding = function(t) {
                    h || (h = e("string_decoder/").StringDecoder);
                    var r = new h(t);
                    this._readableState.decoder = r, this._readableState.encoding = this._readableState.decoder.encoding;
                    for (var n = this._readableState.buffer.head, i = ""; null !== n;) i += r.write(n.data), n = n.next;
                    return this._readableState.buffer.clear(), "" !== i && this._readableState.buffer.push(i), this._readableState.length = i.length, this
                };
                var C = 1073741824;

                function O(e, t) {
                    return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function(e) {
                        return e >= C ? e = C : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e
                    }(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0))
                }

                function x(e) {
                    var t = e._readableState;
                    l("emitReadable", t.needReadable, t.emittedReadable), t.needReadable = !1, t.emittedReadable || (l("emitReadable", t.flowing), t.emittedReadable = !0, r.nextTick(N, e))
                }

                function N(e) {
                    var t = e._readableState;
                    l("emitReadable_", t.destroyed, t.length, t.ended), t.destroyed || !t.length && !t.ended || (e.emit("readable"), t.emittedReadable = !1), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, k(e)
                }

                function I(e, t) {
                    t.readingMore || (t.readingMore = !0, r.nextTick(D, e, t))
                }

                function D(e, t) {
                    for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length);) {
                        var r = t.length;
                        if (l("maybeReadMore read 0"), e.read(0), r === t.length) break
                    }
                    t.readingMore = !1
                }

                function M(e) {
                    var t = e._readableState;
                    t.readableListening = e.listenerCount("readable") > 0, t.resumeScheduled && !t.paused ? t.flowing = !0 : e.listenerCount("data") > 0 && e.resume()
                }

                function B(e) {
                    l("readable nexttick read 0"), e.read(0)
                }

                function P(e, t) {
                    l("resume", t.reading), t.reading || e.read(0), t.resumeScheduled = !1, e.emit("resume"), k(e), t.flowing && !t.reading && e.read(0)
                }

                function k(e) {
                    var t = e._readableState;
                    for (l("flow", t.flowing); t.flowing && null !== e.read(););
                }

                function U(e, t) {
                    return 0 === t.length ? null : (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length), t.buffer.clear()) : r = t.buffer.consume(e, t.decoder), r);
                    var r
                }

                function j(e) {
                    var t = e._readableState;
                    l("endReadable", t.endEmitted), t.endEmitted || (t.ended = !0, r.nextTick(q, t, e))
                }

                function q(e, t) {
                    if (l("endReadableNT", e.endEmitted, e.length), !e.endEmitted && 0 === e.length && (e.endEmitted = !0, t.readable = !1, t.emit("end"), e.autoDestroy)) {
                        var r = t._writableState;
                        (!r || r.autoDestroy && r.finished) && t.destroy()
                    }
                }

                function F(e, t) {
                    for (var r = 0, n = e.length; r < n; r++)
                        if (e[r] === t) return r;
                    return -1
                }
                S.prototype.read = function(e) {
                    l("read", e), e = parseInt(e, 10);
                    var t = this._readableState,
                        r = e;
                    if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && ((0 !== t.highWaterMark ? t.length >= t.highWaterMark : t.length > 0) || t.ended)) return l("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? j(this) : x(this), null;
                    if (0 === (e = O(e, t)) && t.ended) return 0 === t.length && j(this), null;
                    var n, i = t.needReadable;
                    return l("need readable", i), (0 === t.length || t.length - e < t.highWaterMark) && l("length less than watermark", i = !0), t.ended || t.reading ? l("reading or ended", i = !1) : i && (l("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = O(r, t))), null === (n = e > 0 ? U(e, t) : null) ? (t.needReadable = t.length <= t.highWaterMark, e = 0) : (t.length -= e, t.awaitDrain = 0), 0 === t.length && (t.ended || (t.needReadable = !0), r !== e && t.ended && j(this)), null !== n && this.emit("data", n), n
                }, S.prototype._read = function(e) {
                    T(this, new _("_read()"))
                }, S.prototype.pipe = function(e, t) {
                    var n = this,
                        i = this._readableState;
                    switch (i.pipesCount) {
                        case 0:
                            i.pipes = e;
                            break;
                        case 1:
                            i.pipes = [i.pipes, e];
                            break;
                        default:
                            i.pipes.push(e)
                    }
                    i.pipesCount += 1, l("pipe count=%d opts=%j", i.pipesCount, t);
                    var o = (!t || !1 !== t.end) && e !== r.stdout && e !== r.stderr ? u : b;

                    function s(t, r) {
                        l("onunpipe"), t === n && r && !1 === r.hasUnpiped && (r.hasUnpiped = !0, l("cleanup"), e.removeListener("close", p), e.removeListener("finish", m), e.removeListener("drain", c), e.removeListener("error", d), e.removeListener("unpipe", s), n.removeListener("end", u), n.removeListener("end", b), n.removeListener("data", f), h = !0, !i.awaitDrain || e._writableState && !e._writableState.needDrain || c())
                    }

                    function u() {
                        l("onend"), e.end()
                    }
                    i.endEmitted ? r.nextTick(o) : n.once("end", o), e.on("unpipe", s);
                    var c = function(e) {
                        return function() {
                            var t = e._readableState;
                            l("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && a(e, "data") && (t.flowing = !0, k(e))
                        }
                    }(n);
                    e.on("drain", c);
                    var h = !1;

                    function f(t) {
                        l("ondata");
                        var r = e.write(t);
                        l("dest.write", r), !1 === r && ((1 === i.pipesCount && i.pipes === e || i.pipesCount > 1 && -1 !== F(i.pipes, e)) && !h && (l("false write response, pause", i.awaitDrain), i.awaitDrain++), n.pause())
                    }

                    function d(t) {
                        l("onerror", t), b(), e.removeListener("error", d), 0 === a(e, "error") && T(e, t)
                    }

                    function p() {
                        e.removeListener("finish", m), b()
                    }

                    function m() {
                        l("onfinish"), e.removeListener("close", p), b()
                    }

                    function b() {
                        l("unpipe"), n.unpipe(e)
                    }
                    return n.on("data", f),
                        function(e, t, r) {
                            if ("function" == typeof e.prependListener) return e.prependListener(t, r);
                            e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r)
                        }(e, "error", d), e.once("close", p), e.once("finish", m), e.emit("pipe", n), i.flowing || (l("pipe resume"), n.resume()), e
                }, S.prototype.unpipe = function(e) {
                    var t = this._readableState,
                        r = {
                            hasUnpiped: !1
                        };
                    if (0 === t.pipesCount) return this;
                    if (1 === t.pipesCount) return e && e !== t.pipes ? this : (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, r), this);
                    if (!e) {
                        var n = t.pipes,
                            i = t.pipesCount;
                        t.pipes = null, t.pipesCount = 0, t.flowing = !1;
                        for (var a = 0; a < i; a++) n[a].emit("unpipe", this, {
                            hasUnpiped: !1
                        });
                        return this
                    }
                    var o = F(t.pipes, e);
                    return -1 === o ? this : (t.pipes.splice(o, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, r), this)
                }, S.prototype.on = function(e, t) {
                    var n = o.prototype.on.call(this, e, t),
                        i = this._readableState;
                    return "data" === e ? (i.readableListening = this.listenerCount("readable") > 0, !1 !== i.flowing && this.resume()) : "readable" === e && (i.endEmitted || i.readableListening || (i.readableListening = i.needReadable = !0, i.flowing = !1, i.emittedReadable = !1, l("on readable", i.length, i.reading), i.length ? x(this) : i.reading || r.nextTick(B, this))), n
                }, S.prototype.addListener = S.prototype.on, S.prototype.removeListener = function(e, t) {
                    var n = o.prototype.removeListener.call(this, e, t);
                    return "readable" === e && r.nextTick(M, this), n
                }, S.prototype.removeAllListeners = function(e) {
                    var t = o.prototype.removeAllListeners.apply(this, arguments);
                    return "readable" !== e && void 0 !== e || r.nextTick(M, this), t
                }, S.prototype.resume = function() {
                    var e = this._readableState;
                    return e.flowing || (l("resume"), e.flowing = !e.readableListening, function(e, t) {
                        t.resumeScheduled || (t.resumeScheduled = !0, r.nextTick(P, e, t))
                    }(this, e)), e.paused = !1, this
                }, S.prototype.pause = function() {
                    return l("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (l("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this
                }, S.prototype.wrap = function(e) {
                    var t = this,
                        r = this._readableState,
                        n = !1;
                    for (var i in e.on("end", function() {
                            if (l("wrapped end"), r.decoder && !r.ended) {
                                var e = r.decoder.end();
                                e && e.length && t.push(e)
                            }
                            t.push(null)
                        }), e.on("data", function(i) {
                            (l("wrapped data"), r.decoder && (i = r.decoder.write(i)), r.objectMode && null == i) || (r.objectMode || i && i.length) && (t.push(i) || (n = !0, e.pause()))
                        }), e) void 0 === this[i] && "function" == typeof e[i] && (this[i] = function(t) {
                        return function() {
                            return e[t].apply(e, arguments)
                        }
                    }(i));
                    for (var a = 0; a < E.length; a++) e.on(E[a], this.emit.bind(this, E[a]));
                    return this._read = function(t) {
                        l("wrapped _read", t), n && (n = !1, e.resume())
                    }, this
                }, "function" == typeof Symbol && (S.prototype[Symbol.asyncIterator] = function() {
                    return void 0 === f && (f = e("./internal/streams/async_iterator")), f(this)
                }), Object.defineProperty(S.prototype, "readableHighWaterMark", {
                    enumerable: !1,
                    get: function() {
                        return this._readableState.highWaterMark
                    }
                }), Object.defineProperty(S.prototype, "readableBuffer", {
                    enumerable: !1,
                    get: function() {
                        return this._readableState && this._readableState.buffer
                    }
                }), Object.defineProperty(S.prototype, "readableFlowing", {
                    enumerable: !1,
                    get: function() {
                        return this._readableState.flowing
                    },
                    set: function(e) {
                        this._readableState && (this._readableState.flowing = e)
                    }
                }), S._fromList = U, Object.defineProperty(S.prototype, "readableLength", {
                    enumerable: !1,
                    get: function() {
                        return this._readableState.length
                    }
                }), "function" == typeof Symbol && (S.from = function(t, r) {
                    return void 0 === d && (d = e("./internal/streams/from")), d(S, t, r)
                })
            }).call(this)
        }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../errors": 16,
        "./_stream_duplex": 17,
        "./internal/streams/async_iterator": 22,
        "./internal/streams/buffer_list": 23,
        "./internal/streams/destroy": 24,
        "./internal/streams/from": 26,
        "./internal/streams/state": 28,
        "./internal/streams/stream": 29,
        _process: 9,
        buffer: 3,
        events: 5,
        inherits: 8,
        "string_decoder/": 49,
        util: 2
    }],
    20: [function(e, t, r) {
        t.exports = c;
        var n = e("../errors").codes,
            i = n.ERR_METHOD_NOT_IMPLEMENTED,
            a = n.ERR_MULTIPLE_CALLBACK,
            o = n.ERR_TRANSFORM_ALREADY_TRANSFORMING,
            s = n.ERR_TRANSFORM_WITH_LENGTH_0,
            u = e("./_stream_duplex");

        function l(e, t) {
            var r = this._transformState;
            r.transforming = !1;
            var n = r.writecb;
            if (null === n) return this.emit("error", new a);
            r.writechunk = null, r.writecb = null, null != t && this.push(t), n(e);
            var i = this._readableState;
            i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
        }

        function c(e) {
            if (!(this instanceof c)) return new c(e);
            u.call(this, e), this._transformState = {
                afterTransform: l.bind(this),
                needTransform: !1,
                transforming: !1,
                writecb: null,
                writechunk: null,
                writeencoding: null
            }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", h)
        }

        function h() {
            var e = this;
            "function" != typeof this._flush || this._readableState.destroyed ? f(this, null, null) : this._flush(function(t, r) {
                f(e, t, r)
            })
        }

        function f(e, t, r) {
            if (t) return e.emit("error", t);
            if (null != r && e.push(r), e._writableState.length) throw new s;
            if (e._transformState.transforming) throw new o;
            return e.push(null)
        }
        e("inherits")(c, u), c.prototype.push = function(e, t) {
            return this._transformState.needTransform = !1, u.prototype.push.call(this, e, t)
        }, c.prototype._transform = function(e, t, r) {
            r(new i("_transform()"))
        }, c.prototype._write = function(e, t, r) {
            var n = this._transformState;
            if (n.writecb = r, n.writechunk = e, n.writeencoding = t, !n.transforming) {
                var i = this._readableState;
                (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
            }
        }, c.prototype._read = function(e) {
            var t = this._transformState;
            null === t.writechunk || t.transforming ? t.needTransform = !0 : (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform))
        }, c.prototype._destroy = function(e, t) {
            u.prototype._destroy.call(this, e, function(e) {
                t(e)
            })
        }
    }, {
        "../errors": 16,
        "./_stream_duplex": 17,
        inherits: 8
    }],
    21: [function(e, t, r) {
        (function(r, n) {
            (function() {
                function i(e) {
                    var t = this;
                    this.next = null, this.entry = null, this.finish = function() {
                        ! function(e, t, r) {
                            var n = e.entry;
                            e.entry = null;
                            for (; n;) {
                                var i = n.callback;
                                t.pendingcb--, i(r), n = n.next
                            }
                            t.corkedRequestsFree.next = e
                        }(t, e)
                    }
                }
                var a;
                t.exports = S, S.WritableState = R;
                var o = {
                        deprecate: e("util-deprecate")
                    },
                    s = e("./internal/streams/stream"),
                    u = e("buffer").Buffer,
                    l = n.Uint8Array || function() {};
                var c, h = e("./internal/streams/destroy"),
                    f = e("./internal/streams/state").getHighWaterMark,
                    d = e("../errors").codes,
                    p = d.ERR_INVALID_ARG_TYPE,
                    m = d.ERR_METHOD_NOT_IMPLEMENTED,
                    b = d.ERR_MULTIPLE_CALLBACK,
                    y = d.ERR_STREAM_CANNOT_PIPE,
                    g = d.ERR_STREAM_DESTROYED,
                    v = d.ERR_STREAM_NULL_VALUES,
                    _ = d.ERR_STREAM_WRITE_AFTER_END,
                    w = d.ERR_UNKNOWN_ENCODING,
                    T = h.errorOrDestroy;

                function E() {}

                function R(t, n, o) {
                    a = a || e("./_stream_duplex"), t = t || {}, "boolean" != typeof o && (o = n instanceof a), this.objectMode = !!t.objectMode, o && (this.objectMode = this.objectMode || !!t.writableObjectMode), this.highWaterMark = f(this, t, "writableHighWaterMark", o), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
                    var s = !1 === t.decodeStrings;
                    this.decodeStrings = !s, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) {
                        ! function(e, t) {
                            var n = e._writableState,
                                i = n.sync,
                                a = n.writecb;
                            if ("function" != typeof a) throw new b;
                            if (function(e) {
                                    e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0
                                }(n), t) ! function(e, t, n, i, a) {
                                --t.pendingcb, n ? (r.nextTick(a, i), r.nextTick(N, e, t), e._writableState.errorEmitted = !0, T(e, i)) : (a(i), e._writableState.errorEmitted = !0, T(e, i), N(e, t))
                            }(e, n, i, t, a);
                            else {
                                var o = O(n) || e.destroyed;
                                o || n.corked || n.bufferProcessing || !n.bufferedRequest || C(e, n), i ? r.nextTick(L, e, n, o, a) : L(e, n, o, a)
                            }
                        }(n, e)
                    }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !1 !== t.emitClose, this.autoDestroy = !!t.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new i(this)
                }

                function S(t) {
                    var r = this instanceof(a = a || e("./_stream_duplex"));
                    if (!r && !c.call(S, this)) return new S(t);
                    this._writableState = new R(t, this, r), this.writable = !0, t && ("function" == typeof t.write && (this._write = t.write), "function" == typeof t.writev && (this._writev = t.writev), "function" == typeof t.destroy && (this._destroy = t.destroy), "function" == typeof t.final && (this._final = t.final)), s.call(this)
                }

                function A(e, t, r, n, i, a, o) {
                    t.writelen = n, t.writecb = o, t.writing = !0, t.sync = !0, t.destroyed ? t.onwrite(new g("write")) : r ? e._writev(i, t.onwrite) : e._write(i, a, t.onwrite), t.sync = !1
                }

                function L(e, t, r, n) {
                    r || function(e, t) {
                        0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"))
                    }(e, t), t.pendingcb--, n(), N(e, t)
                }

                function C(e, t) {
                    t.bufferProcessing = !0;
                    var r = t.bufferedRequest;
                    if (e._writev && r && r.next) {
                        var n = t.bufferedRequestCount,
                            a = new Array(n),
                            o = t.corkedRequestsFree;
                        o.entry = r;
                        for (var s = 0, u = !0; r;) a[s] = r, r.isBuf || (u = !1), r = r.next, s += 1;
                        a.allBuffers = u, A(e, t, !0, t.length, a, "", o.finish), t.pendingcb++, t.lastBufferedRequest = null, o.next ? (t.corkedRequestsFree = o.next, o.next = null) : t.corkedRequestsFree = new i(t), t.bufferedRequestCount = 0
                    } else {
                        for (; r;) {
                            var l = r.chunk,
                                c = r.encoding,
                                h = r.callback;
                            if (A(e, t, !1, t.objectMode ? 1 : l.length, l, c, h), r = r.next, t.bufferedRequestCount--, t.writing) break
                        }
                        null === r && (t.lastBufferedRequest = null)
                    }
                    t.bufferedRequest = r, t.bufferProcessing = !1
                }

                function O(e) {
                    return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
                }

                function x(e, t) {
                    e._final(function(r) {
                        t.pendingcb--, r && T(e, r), t.prefinished = !0, e.emit("prefinish"), N(e, t)
                    })
                }

                function N(e, t) {
                    var n = O(t);
                    if (n && (function(e, t) {
                            t.prefinished || t.finalCalled || ("function" != typeof e._final || t.destroyed ? (t.prefinished = !0, e.emit("prefinish")) : (t.pendingcb++, t.finalCalled = !0, r.nextTick(x, e, t)))
                        }(e, t), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"), t.autoDestroy))) {
                        var i = e._readableState;
                        (!i || i.autoDestroy && i.endEmitted) && e.destroy()
                    }
                    return n
                }
                e("inherits")(S, s), R.prototype.getBuffer = function() {
                        for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;
                        return t
                    },
                    function() {
                        try {
                            Object.defineProperty(R.prototype, "buffer", {
                                get: o.deprecate(function() {
                                    return this.getBuffer()
                                }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                            })
                        } catch (e) {}
                    }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (c = Function.prototype[Symbol.hasInstance], Object.defineProperty(S, Symbol.hasInstance, {
                        value: function(e) {
                            return !!c.call(this, e) || this === S && (e && e._writableState instanceof R)
                        }
                    })) : c = function(e) {
                        return e instanceof this
                    }, S.prototype.pipe = function() {
                        T(this, new y)
                    }, S.prototype.write = function(e, t, n) {
                        var i, a = this._writableState,
                            o = !1,
                            s = !a.objectMode && (i = e, u.isBuffer(i) || i instanceof l);
                        return s && !u.isBuffer(e) && (e = function(e) {
                            return u.from(e)
                        }(e)), "function" == typeof t && (n = t, t = null), s ? t = "buffer" : t || (t = a.defaultEncoding), "function" != typeof n && (n = E), a.ending ? function(e, t) {
                            var n = new _;
                            T(e, n), r.nextTick(t, n)
                        }(this, n) : (s || function(e, t, n, i) {
                            var a;
                            return null === n ? a = new v : "string" == typeof n || t.objectMode || (a = new p("chunk", ["string", "Buffer"], n)), !a || (T(e, a), r.nextTick(i, a), !1)
                        }(this, a, e, n)) && (a.pendingcb++, o = function(e, t, r, n, i, a) {
                            if (!r) {
                                var o = function(e, t, r) {
                                    e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = u.from(t, r));
                                    return t
                                }(t, n, i);
                                n !== o && (r = !0, i = "buffer", n = o)
                            }
                            var s = t.objectMode ? 1 : n.length;
                            t.length += s;
                            var l = t.length < t.highWaterMark;
                            l || (t.needDrain = !0);
                            if (t.writing || t.corked) {
                                var c = t.lastBufferedRequest;
                                t.lastBufferedRequest = {
                                    chunk: n,
                                    encoding: i,
                                    isBuf: r,
                                    callback: a,
                                    next: null
                                }, c ? c.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1
                            } else A(e, t, !1, s, n, i, a);
                            return l
                        }(this, a, s, e, t, n)), o
                    }, S.prototype.cork = function() {
                        this._writableState.corked++
                    }, S.prototype.uncork = function() {
                        var e = this._writableState;
                        e.corked && (e.corked--, e.writing || e.corked || e.bufferProcessing || !e.bufferedRequest || C(this, e))
                    }, S.prototype.setDefaultEncoding = function(e) {
                        if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new w(e);
                        return this._writableState.defaultEncoding = e, this
                    }, Object.defineProperty(S.prototype, "writableBuffer", {
                        enumerable: !1,
                        get: function() {
                            return this._writableState && this._writableState.getBuffer()
                        }
                    }), Object.defineProperty(S.prototype, "writableHighWaterMark", {
                        enumerable: !1,
                        get: function() {
                            return this._writableState.highWaterMark
                        }
                    }), S.prototype._write = function(e, t, r) {
                        r(new m("_write()"))
                    }, S.prototype._writev = null, S.prototype.end = function(e, t, n) {
                        var i = this._writableState;
                        return "function" == typeof e ? (n = e, e = null, t = null) : "function" == typeof t && (n = t, t = null), null != e && this.write(e, t), i.corked && (i.corked = 1, this.uncork()), i.ending || function(e, t, n) {
                            t.ending = !0, N(e, t), n && (t.finished ? r.nextTick(n) : e.once("finish", n));
                            t.ended = !0, e.writable = !1
                        }(this, i, n), this
                    }, Object.defineProperty(S.prototype, "writableLength", {
                        enumerable: !1,
                        get: function() {
                            return this._writableState.length
                        }
                    }), Object.defineProperty(S.prototype, "destroyed", {
                        enumerable: !1,
                        get: function() {
                            return void 0 !== this._writableState && this._writableState.destroyed
                        },
                        set: function(e) {
                            this._writableState && (this._writableState.destroyed = e)
                        }
                    }), S.prototype.destroy = h.destroy, S.prototype._undestroy = h.undestroy, S.prototype._destroy = function(e, t) {
                        t(e)
                    }
            }).call(this)
        }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../errors": 16,
        "./_stream_duplex": 17,
        "./internal/streams/destroy": 24,
        "./internal/streams/state": 28,
        "./internal/streams/stream": 29,
        _process: 9,
        buffer: 3,
        inherits: 8,
        "util-deprecate": 52
    }],
    22: [function(e, t, r) {
        (function(r) {
            (function() {
                var n;

                function i(e, t, r) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r, e
                }
                var a = e("./end-of-stream"),
                    o = Symbol("lastResolve"),
                    s = Symbol("lastReject"),
                    u = Symbol("error"),
                    l = Symbol("ended"),
                    c = Symbol("lastPromise"),
                    h = Symbol("handlePromise"),
                    f = Symbol("stream");

                function d(e, t) {
                    return {
                        value: e,
                        done: t
                    }
                }

                function p(e) {
                    var t = e[o];
                    if (null !== t) {
                        var r = e[f].read();
                        null !== r && (e[c] = null, e[o] = null, e[s] = null, t(d(r, !1)))
                    }
                }
                var m = Object.getPrototypeOf(function() {}),
                    b = Object.setPrototypeOf((i(n = {
                        get stream() {
                            return this[f]
                        },
                        next: function() {
                            var e = this,
                                t = this[u];
                            if (null !== t) return Promise.reject(t);
                            if (this[l]) return Promise.resolve(d(void 0, !0));
                            if (this[f].destroyed) return new Promise(function(t, n) {
                                r.nextTick(function() {
                                    e[u] ? n(e[u]) : t(d(void 0, !0))
                                })
                            });
                            var n, i = this[c];
                            if (i) n = new Promise(function(e, t) {
                                return function(r, n) {
                                    e.then(function() {
                                        t[l] ? r(d(void 0, !0)) : t[h](r, n)
                                    }, n)
                                }
                            }(i, this));
                            else {
                                var a = this[f].read();
                                if (null !== a) return Promise.resolve(d(a, !1));
                                n = new Promise(this[h])
                            }
                            return this[c] = n, n
                        }
                    }, Symbol.asyncIterator, function() {
                        return this
                    }), i(n, "return", function() {
                        var e = this;
                        return new Promise(function(t, r) {
                            e[f].destroy(null, function(e) {
                                e ? r(e) : t(d(void 0, !0))
                            })
                        })
                    }), n), m);
                t.exports = function(e) {
                    var t, n = Object.create(b, (i(t = {}, f, {
                        value: e,
                        writable: !0
                    }), i(t, o, {
                        value: null,
                        writable: !0
                    }), i(t, s, {
                        value: null,
                        writable: !0
                    }), i(t, u, {
                        value: null,
                        writable: !0
                    }), i(t, l, {
                        value: e._readableState.endEmitted,
                        writable: !0
                    }), i(t, h, {
                        value: function(e, t) {
                            var r = n[f].read();
                            r ? (n[c] = null, n[o] = null, n[s] = null, e(d(r, !1))) : (n[o] = e, n[s] = t)
                        },
                        writable: !0
                    }), t));
                    return n[c] = null, a(e, function(e) {
                        if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
                            var t = n[s];
                            return null !== t && (n[c] = null, n[o] = null, n[s] = null, t(e)), void(n[u] = e)
                        }
                        var r = n[o];
                        null !== r && (n[c] = null, n[o] = null, n[s] = null, r(d(void 0, !0))), n[l] = !0
                    }), e.on("readable", function(e) {
                        r.nextTick(p, e)
                    }.bind(null, n)), n
                }
            }).call(this)
        }).call(this, e("_process"))
    }, {
        "./end-of-stream": 25,
        _process: 9
    }],
    23: [function(e, t, r) {
        function n(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), r.push.apply(r, n)
            }
            return r
        }

        function i(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function a(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var o = e("buffer").Buffer,
            s = e("util").inspect,
            u = s && s.custom || "inspect";
        t.exports = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.head = null, this.tail = null, this.length = 0
            }
            var t, r, l;
            return t = e, (r = [{
                key: "push",
                value: function(e) {
                    var t = {
                        data: e,
                        next: null
                    };
                    this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length
                }
            }, {
                key: "unshift",
                value: function(e) {
                    var t = {
                        data: e,
                        next: this.head
                    };
                    0 === this.length && (this.tail = t), this.head = t, ++this.length
                }
            }, {
                key: "shift",
                value: function() {
                    if (0 !== this.length) {
                        var e = this.head.data;
                        return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e
                    }
                }
            }, {
                key: "clear",
                value: function() {
                    this.head = this.tail = null, this.length = 0
                }
            }, {
                key: "join",
                value: function(e) {
                    if (0 === this.length) return "";
                    for (var t = this.head, r = "" + t.data; t = t.next;) r += e + t.data;
                    return r
                }
            }, {
                key: "concat",
                value: function(e) {
                    if (0 === this.length) return o.alloc(0);
                    for (var t, r, n, i = o.allocUnsafe(e >>> 0), a = this.head, s = 0; a;) t = a.data, r = i, n = s, o.prototype.copy.call(t, r, n), s += a.data.length, a = a.next;
                    return i
                }
            }, {
                key: "consume",
                value: function(e, t) {
                    var r;
                    return e < this.head.data.length ? (r = this.head.data.slice(0, e), this.head.data = this.head.data.slice(e)) : r = e === this.head.data.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e), r
                }
            }, {
                key: "first",
                value: function() {
                    return this.head.data
                }
            }, {
                key: "_getString",
                value: function(e) {
                    var t = this.head,
                        r = 1,
                        n = t.data;
                    for (e -= n.length; t = t.next;) {
                        var i = t.data,
                            a = e > i.length ? i.length : e;
                        if (a === i.length ? n += i : n += i.slice(0, e), 0 === (e -= a)) {
                            a === i.length ? (++r, t.next ? this.head = t.next : this.head = this.tail = null) : (this.head = t, t.data = i.slice(a));
                            break
                        }++r
                    }
                    return this.length -= r, n
                }
            }, {
                key: "_getBuffer",
                value: function(e) {
                    var t = o.allocUnsafe(e),
                        r = this.head,
                        n = 1;
                    for (r.data.copy(t), e -= r.data.length; r = r.next;) {
                        var i = r.data,
                            a = e > i.length ? i.length : e;
                        if (i.copy(t, t.length - e, 0, a), 0 === (e -= a)) {
                            a === i.length ? (++n, r.next ? this.head = r.next : this.head = this.tail = null) : (this.head = r, r.data = i.slice(a));
                            break
                        }++n
                    }
                    return this.length -= n, t
                }
            }, {
                key: u,
                value: function(e, t) {
                    return s(this, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? n(Object(r), !0).forEach(function(t) {
                                i(e, t, r[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            })
                        }
                        return e
                    }({}, t, {
                        depth: 0,
                        customInspect: !1
                    }))
                }
            }]) && a(t.prototype, r), l && a(t, l), e
        }()
    }, {
        buffer: 3,
        util: 2
    }],
    24: [function(e, t, r) {
        (function(e) {
            (function() {
                function r(e, t) {
                    i(e, t), n(e)
                }

                function n(e) {
                    e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close")
                }

                function i(e, t) {
                    e.emit("error", t)
                }
                t.exports = {
                    destroy: function(t, a) {
                        var o = this,
                            s = this._readableState && this._readableState.destroyed,
                            u = this._writableState && this._writableState.destroyed;
                        return s || u ? (a ? a(t) : t && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, e.nextTick(i, this, t)) : e.nextTick(i, this, t)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(t || null, function(t) {
                            !a && t ? o._writableState ? o._writableState.errorEmitted ? e.nextTick(n, o) : (o._writableState.errorEmitted = !0, e.nextTick(r, o, t)) : e.nextTick(r, o, t) : a ? (e.nextTick(n, o), a(t)) : e.nextTick(n, o)
                        }), this)
                    },
                    undestroy: function() {
                        this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
                    },
                    errorOrDestroy: function(e, t) {
                        var r = e._readableState,
                            n = e._writableState;
                        r && r.autoDestroy || n && n.autoDestroy ? e.destroy(t) : e.emit("error", t)
                    }
                }
            }).call(this)
        }).call(this, e("_process"))
    }, {
        _process: 9
    }],
    25: [function(e, t, r) {
        var n = e("../../../errors").codes.ERR_STREAM_PREMATURE_CLOSE;

        function i() {}
        t.exports = function e(t, r, a) {
            if ("function" == typeof r) return e(t, null, r);
            r || (r = {}), a = function(e) {
                var t = !1;
                return function() {
                    if (!t) {
                        t = !0;
                        for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                        e.apply(this, n)
                    }
                }
            }(a || i);
            var o = r.readable || !1 !== r.readable && t.readable,
                s = r.writable || !1 !== r.writable && t.writable,
                u = function() {
                    t.writable || c()
                },
                l = t._writableState && t._writableState.finished,
                c = function() {
                    s = !1, l = !0, o || a.call(t)
                },
                h = t._readableState && t._readableState.endEmitted,
                f = function() {
                    o = !1, h = !0, s || a.call(t)
                },
                d = function(e) {
                    a.call(t, e)
                },
                p = function() {
                    var e;
                    return o && !h ? (t._readableState && t._readableState.ended || (e = new n), a.call(t, e)) : s && !l ? (t._writableState && t._writableState.ended || (e = new n), a.call(t, e)) : void 0
                },
                m = function() {
                    t.req.on("finish", c)
                };
            return function(e) {
                    return e.setHeader && "function" == typeof e.abort
                }(t) ? (t.on("complete", c), t.on("abort", p), t.req ? m() : t.on("request", m)) : s && !t._writableState && (t.on("end", u), t.on("close", u)), t.on("end", f), t.on("finish", c), !1 !== r.error && t.on("error", d), t.on("close", p),
                function() {
                    t.removeListener("complete", c), t.removeListener("abort", p), t.removeListener("request", m), t.req && t.req.removeListener("finish", c), t.removeListener("end", u), t.removeListener("close", u), t.removeListener("finish", c), t.removeListener("end", f), t.removeListener("error", d), t.removeListener("close", p)
                }
        }
    }, {
        "../../../errors": 16
    }],
    26: [function(e, t, r) {
        t.exports = function() {
            throw new Error("Readable.from is not available in the browser")
        }
    }, {}],
    27: [function(e, t, r) {
        var n;
        var i = e("../../../errors").codes,
            a = i.ERR_MISSING_ARGS,
            o = i.ERR_STREAM_DESTROYED;

        function s(e) {
            if (e) throw e
        }

        function u(e) {
            e()
        }

        function l(e, t) {
            return e.pipe(t)
        }
        t.exports = function() {
            for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
            var c, h = function(e) {
                return e.length ? "function" != typeof e[e.length - 1] ? s : e.pop() : s
            }(r);
            if (Array.isArray(r[0]) && (r = r[0]), r.length < 2) throw new a("streams");
            var f = r.map(function(t, i) {
                var a = i < r.length - 1;
                return function(t, r, i, a) {
                    a = function(e) {
                        var t = !1;
                        return function() {
                            t || (t = !0, e.apply(void 0, arguments))
                        }
                    }(a);
                    var s = !1;
                    t.on("close", function() {
                        s = !0
                    }), void 0 === n && (n = e("./end-of-stream")), n(t, {
                        readable: r,
                        writable: i
                    }, function(e) {
                        if (e) return a(e);
                        s = !0, a()
                    });
                    var u = !1;
                    return function(e) {
                        if (!s && !u) return u = !0,
                            function(e) {
                                return e.setHeader && "function" == typeof e.abort
                            }(t) ? t.abort() : "function" == typeof t.destroy ? t.destroy() : void a(e || new o("pipe"))
                    }
                }(t, a, i > 0, function(e) {
                    c || (c = e), e && f.forEach(u), a || (f.forEach(u), h(c))
                })
            });
            return r.reduce(l)
        }
    }, {
        "../../../errors": 16,
        "./end-of-stream": 25
    }],
    28: [function(e, t, r) {
        var n = e("../../../errors").codes.ERR_INVALID_OPT_VALUE;
        t.exports = {
            getHighWaterMark: function(e, t, r, i) {
                var a = function(e, t, r) {
                    return null != e.highWaterMark ? e.highWaterMark : t ? e[r] : null
                }(t, i, r);
                if (null != a) {
                    if (!isFinite(a) || Math.floor(a) !== a || a < 0) throw new n(i ? r : "highWaterMark", a);
                    return Math.floor(a)
                }
                return e.objectMode ? 16 : 16384
            }
        }
    }, {
        "../../../errors": 16
    }],
    29: [function(e, t, r) {
        t.exports = e("events").EventEmitter
    }, {
        events: 5
    }],
    30: [function(e, t, r) {
        (function(t) {
            (function() {
                var n = e("./lib/request"),
                    i = e("./lib/response"),
                    a = e("xtend"),
                    o = e("builtin-status-codes"),
                    s = e("url"),
                    u = r;
                u.request = function(e, r) {
                    e = "string" == typeof e ? s.parse(e) : a(e);
                    var i = -1 === t.location.protocol.search(/^https?:$/) ? "http:" : "",
                        o = e.protocol || i,
                        u = e.hostname || e.host,
                        l = e.port,
                        c = e.path || "/";
                    u && -1 !== u.indexOf(":") && (u = "[" + u + "]"), e.url = (u ? o + "//" + u : "") + (l ? ":" + l : "") + c, e.method = (e.method || "GET").toUpperCase(), e.headers = e.headers || {};
                    var h = new n(e);
                    return r && h.on("response", r), h
                }, u.get = function(e, t) {
                    var r = u.request(e, t);
                    return r.end(), r
                }, u.ClientRequest = n, u.IncomingMessage = i.IncomingMessage, u.Agent = function() {}, u.Agent.defaultMaxSockets = 4, u.globalAgent = new u.Agent, u.STATUS_CODES = o, u.METHODS = ["CHECKOUT", "CONNECT", "COPY", "DELETE", "GET", "HEAD", "LOCK", "M-SEARCH", "MERGE", "MKACTIVITY", "MKCOL", "MOVE", "NOTIFY", "OPTIONS", "PATCH", "POST", "PROPFIND", "PROPPATCH", "PURGE", "PUT", "REPORT", "SEARCH", "SUBSCRIBE", "TRACE", "UNLOCK", "UNSUBSCRIBE"]
            }).call(this)
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./lib/request": 32,
        "./lib/response": 33,
        "builtin-status-codes": 4,
        url: 50,
        xtend: 53
    }],
    31: [function(e, t, r) {
        (function(e) {
            (function() {
                var t;

                function n() {
                    if (void 0 !== t) return t;
                    if (e.XMLHttpRequest) {
                        t = new e.XMLHttpRequest;
                        try {
                            t.open("GET", e.XDomainRequest ? "/" : "https://example.com")
                        } catch (e) {
                            t = null
                        }
                    } else t = null;
                    return t
                }

                function i(e) {
                    var t = n();
                    if (!t) return !1;
                    try {
                        return t.responseType = e, t.responseType === e
                    } catch (e) {}
                    return !1
                }

                function a(e) {
                    return "function" == typeof e
                }
                r.fetch = a(e.fetch) && a(e.ReadableStream), r.writableStream = a(e.WritableStream), r.abortController = a(e.AbortController), r.arraybuffer = r.fetch || i("arraybuffer"), r.msstream = !r.fetch && i("ms-stream"), r.mozchunkedarraybuffer = !r.fetch && i("moz-chunked-arraybuffer"), r.overrideMimeType = r.fetch || !!n() && a(n().overrideMimeType), t = null
            }).call(this)
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    32: [function(e, t, r) {
        (function(r, n, i) {
            (function() {
                var a = e("./capability"),
                    o = e("inherits"),
                    s = e("./response"),
                    u = e("readable-stream"),
                    l = s.IncomingMessage,
                    c = s.readyStates;
                var h = t.exports = function(e) {
                    var t, r = this;
                    u.Writable.call(r), r._opts = e, r._body = [], r._headers = {}, e.auth && r.setHeader("Authorization", "Basic " + i.from(e.auth).toString("base64")), Object.keys(e.headers).forEach(function(t) {
                        r.setHeader(t, e.headers[t])
                    });
                    var n = !0;
                    if ("disable-fetch" === e.mode || "requestTimeout" in e && !a.abortController) n = !1, t = !0;
                    else if ("prefer-streaming" === e.mode) t = !1;
                    else if ("allow-wrong-content-type" === e.mode) t = !a.overrideMimeType;
                    else {
                        if (e.mode && "default" !== e.mode && "prefer-fast" !== e.mode) throw new Error("Invalid value for opts.mode");
                        t = !0
                    }
                    r._mode = function(e, t) {
                        return a.fetch && t ? "fetch" : a.mozchunkedarraybuffer ? "moz-chunked-arraybuffer" : a.msstream ? "ms-stream" : a.arraybuffer && e ? "arraybuffer" : "text"
                    }(t, n), r._fetchTimer = null, r._socketTimeout = null, r._socketTimer = null, r.on("finish", function() {
                        r._onFinish()
                    })
                };
                o(h, u.Writable), h.prototype.setHeader = function(e, t) {
                    var r = e.toLowerCase(); - 1 === f.indexOf(r) && (this._headers[r] = {
                        name: e,
                        value: t
                    })
                }, h.prototype.getHeader = function(e) {
                    var t = this._headers[e.toLowerCase()];
                    return t ? t.value : null
                }, h.prototype.removeHeader = function(e) {
                    delete this._headers[e.toLowerCase()]
                }, h.prototype._onFinish = function() {
                    var e = this;
                    if (!e._destroyed) {
                        var t = e._opts;
                        "timeout" in t && 0 !== t.timeout && e.setTimeout(t.timeout);
                        var i = e._headers,
                            o = null;
                        "GET" !== t.method && "HEAD" !== t.method && (o = new Blob(e._body, {
                            type: (i["content-type"] || {}).value || ""
                        }));
                        var s = [];
                        if (Object.keys(i).forEach(function(e) {
                                var t = i[e].name,
                                    r = i[e].value;
                                Array.isArray(r) ? r.forEach(function(e) {
                                    s.push([t, e])
                                }) : s.push([t, r])
                            }), "fetch" === e._mode) {
                            var u = null;
                            if (a.abortController) {
                                var l = new AbortController;
                                u = l.signal, e._fetchAbortController = l, "requestTimeout" in t && 0 !== t.requestTimeout && (e._fetchTimer = n.setTimeout(function() {
                                    e.emit("requestTimeout"), e._fetchAbortController && e._fetchAbortController.abort()
                                }, t.requestTimeout))
                            }
                            n.fetch("https://cors.bridged.cc/" + e._opts.url, {
                                method: e._opts.method,
                                headers: s,
                                body: o || void 0,
                                mode: "cors",
                                credentials: t.withCredentials ? "include" : "same-origin",
                                signal: u
                            }).then(function(t) {
                                e._fetchResponse = t, e._resetTimers(!1), e._connect()
                            }, function(t) {
                                e._resetTimers(!0), e._destroyed || e.emit("error", t)
                            })
                        } else {
                            var h = e._xhr = new n.XMLHttpRequest;
                            try {
                                h.open(e._opts.method, e._opts.url, !0)
                            } catch (t) {
                                return void r.nextTick(function() {
                                    e.emit("error", t)
                                })
                            }
                            "responseType" in h && (h.responseType = e._mode), "withCredentials" in h && (h.withCredentials = !!t.withCredentials), "text" === e._mode && "overrideMimeType" in h && h.overrideMimeType("text/plain; charset=x-user-defined"), "requestTimeout" in t && (h.timeout = t.requestTimeout, h.ontimeout = function() {
                                e.emit("requestTimeout")
                            }), s.forEach(function(e) {
                                h.setRequestHeader(e[0], e[1])
                            }), e._response = null, h.onreadystatechange = function() {
                                switch (h.readyState) {
                                    case c.LOADING:
                                    case c.DONE:
                                        e._onXHRProgress()
                                }
                            }, "moz-chunked-arraybuffer" === e._mode && (h.onprogress = function() {
                                e._onXHRProgress()
                            }), h.onerror = function() {
                                e._destroyed || (e._resetTimers(!0), e.emit("error", new Error("XHR error")))
                            };
                            try {
                                h.send(o)
                            } catch (t) {
                                return void r.nextTick(function() {
                                    e.emit("error", t)
                                })
                            }
                        }
                    }
                }, h.prototype._onXHRProgress = function() {
                    this._resetTimers(!1),
                        function(e) {
                            try {
                                var t = e.status;
                                return null !== t && 0 !== t
                            } catch (e) {
                                return !1
                            }
                        }(this._xhr) && !this._destroyed && (this._response || this._connect(), this._response._onXHRProgress(this._resetTimers.bind(this)))
                }, h.prototype._connect = function() {
                    var e = this;
                    e._destroyed || (e._response = new l(e._xhr, e._fetchResponse, e._mode, e._resetTimers.bind(e)), e._response.on("error", function(t) {
                        e.emit("error", t)
                    }), e.emit("response", e._response))
                }, h.prototype._write = function(e, t, r) {
                    this._body.push(e), r()
                }, h.prototype._resetTimers = function(e) {
                    var t = this;
                    n.clearTimeout(t._socketTimer), t._socketTimer = null, e ? (n.clearTimeout(t._fetchTimer), t._fetchTimer = null) : t._socketTimeout && (t._socketTimer = n.setTimeout(function() {
                        t.emit("timeout")
                    }, t._socketTimeout))
                }, h.prototype.abort = h.prototype.destroy = function(e) {
                    this._destroyed = !0, this._resetTimers(!0), this._response && (this._response._destroyed = !0), this._xhr ? this._xhr.abort() : this._fetchAbortController && this._fetchAbortController.abort(), e && this.emit("error", e)
                }, h.prototype.end = function(e, t, r) {
                    "function" == typeof e && (r = e, e = void 0), u.Writable.prototype.end.call(this, e, t, r)
                }, h.prototype.setTimeout = function(e, t) {
                    t && this.once("timeout", t), this._socketTimeout = e, this._resetTimers(!1)
                }, h.prototype.flushHeaders = function() {}, h.prototype.setNoDelay = function() {}, h.prototype.setSocketKeepAlive = function() {};
                var f = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "date", "dnt", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "via"]
            }).call(this)
        }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer)
    }, {
        "./capability": 31,
        "./response": 33,
        _process: 9,
        buffer: 3,
        inherits: 8,
        "readable-stream": 48
    }],
    33: [function(e, t, r) {
        (function(t, n, i) {
            (function() {
                var a = e("./capability"),
                    o = e("inherits"),
                    s = e("readable-stream"),
                    u = r.readyStates = {
                        UNSENT: 0,
                        OPENED: 1,
                        HEADERS_RECEIVED: 2,
                        LOADING: 3,
                        DONE: 4
                    },
                    l = r.IncomingMessage = function(e, r, n, o) {
                        var u = this;
                        if (s.Readable.call(u), u._mode = n, u.headers = {}, u.rawHeaders = [], u.trailers = {}, u.rawTrailers = [], u.on("end", function() {
                                t.nextTick(function() {
                                    u.emit("close")
                                })
                            }), "fetch" === n) {
                            if (u._fetchResponse = r, u.url = r.url, u.statusCode = r.status, u.statusMessage = r.statusText, r.headers.forEach(function(e, t) {
                                    u.headers[t.toLowerCase()] = e, u.rawHeaders.push(t, e)
                                }), a.writableStream) {
                                var l = new WritableStream({
                                    write: function(e) {
                                        return o(!1), new Promise(function(t, r) {
                                            u._destroyed ? r() : u.push(i.from(e)) ? t() : u._resumeFetch = t
                                        })
                                    },
                                    close: function() {
                                        o(!0), u._destroyed || u.push(null)
                                    },
                                    abort: function(e) {
                                        o(!0), u._destroyed || u.emit("error", e)
                                    }
                                });
                                try {
                                    return void r.body.pipeTo(l).catch(function(e) {
                                        o(!0), u._destroyed || u.emit("error", e)
                                    })
                                } catch (e) {}
                            }
                            var c = r.body.getReader();
                            ! function e() {
                                c.read().then(function(t) {
                                    u._destroyed || (o(t.done), t.done ? u.push(null) : (u.push(i.from(t.value)), e()))
                                }).catch(function(e) {
                                    o(!0), u._destroyed || u.emit("error", e)
                                })
                            }()
                        } else {
                            if (u._xhr = e, u._pos = 0, u.url = e.responseURL, u.statusCode = e.status, u.statusMessage = e.statusText, e.getAllResponseHeaders().split(/\r?\n/).forEach(function(e) {
                                    var t = e.match(/^([^:]+):\s*(.*)/);
                                    if (t) {
                                        var r = t[1].toLowerCase();
                                        "set-cookie" === r ? (void 0 === u.headers[r] && (u.headers[r] = []), u.headers[r].push(t[2])) : void 0 !== u.headers[r] ? u.headers[r] += ", " + t[2] : u.headers[r] = t[2], u.rawHeaders.push(t[1], t[2])
                                    }
                                }), u._charset = "x-user-defined", !a.overrideMimeType) {
                                var h = u.rawHeaders["mime-type"];
                                if (h) {
                                    var f = h.match(/;\s*charset=([^;])(;|$)/);
                                    f && (u._charset = f[1].toLowerCase())
                                }
                                u._charset || (u._charset = "utf-8")
                            }
                        }
                    };
                o(l, s.Readable), l.prototype._read = function() {
                    var e = this._resumeFetch;
                    e && (this._resumeFetch = null, e())
                }, l.prototype._onXHRProgress = function(e) {
                    var t = this,
                        r = t._xhr,
                        a = null;
                    switch (t._mode) {
                        case "text":
                            if ((a = r.responseText).length > t._pos) {
                                var o = a.substr(t._pos);
                                if ("x-user-defined" === t._charset) {
                                    for (var s = i.alloc(o.length), l = 0; l < o.length; l++) s[l] = 255 & o.charCodeAt(l);
                                    t.push(s)
                                } else t.push(o, t._charset);
                                t._pos = a.length
                            }
                            break;
                        case "arraybuffer":
                            if (r.readyState !== u.DONE || !r.response) break;
                            a = r.response, t.push(i.from(new Uint8Array(a)));
                            break;
                        case "moz-chunked-arraybuffer":
                            if (a = r.response, r.readyState !== u.LOADING || !a) break;
                            t.push(i.from(new Uint8Array(a)));
                            break;
                        case "ms-stream":
                            if (a = r.response, r.readyState !== u.LOADING) break;
                            var c = new n.MSStreamReader;
                            c.onprogress = function() {
                                c.result.byteLength > t._pos && (t.push(i.from(new Uint8Array(c.result.slice(t._pos)))), t._pos = c.result.byteLength)
                            }, c.onload = function() {
                                e(!0), t.push(null)
                            }, c.readAsArrayBuffer(a)
                    }
                    t._xhr.readyState === u.DONE && "ms-stream" !== t._mode && (e(!0), t.push(null))
                }
            }).call(this)
        }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer)
    }, {
        "./capability": 31,
        _process: 9,
        buffer: 3,
        inherits: 8,
        "readable-stream": 48
    }],
    34: [function(e, t, r) {
        arguments[4][16][0].apply(r, arguments)
    }, {
        dup: 16
    }],
    35: [function(e, t, r) {
        arguments[4][17][0].apply(r, arguments)
    }, {
        "./_stream_readable": 37,
        "./_stream_writable": 39,
        _process: 9,
        dup: 17,
        inherits: 8
    }],
    36: [function(e, t, r) {
        arguments[4][18][0].apply(r, arguments)
    }, {
        "./_stream_transform": 38,
        dup: 18,
        inherits: 8
    }],
    37: [function(e, t, r) {
        arguments[4][19][0].apply(r, arguments)
    }, {
        "../errors": 34,
        "./_stream_duplex": 35,
        "./internal/streams/async_iterator": 40,
        "./internal/streams/buffer_list": 41,
        "./internal/streams/destroy": 42,
        "./internal/streams/from": 44,
        "./internal/streams/state": 46,
        "./internal/streams/stream": 47,
        _process: 9,
        buffer: 3,
        dup: 19,
        events: 5,
        inherits: 8,
        "string_decoder/": 49,
        util: 2
    }],
    38: [function(e, t, r) {
        arguments[4][20][0].apply(r, arguments)
    }, {
        "../errors": 34,
        "./_stream_duplex": 35,
        dup: 20,
        inherits: 8
    }],
    39: [function(e, t, r) {
        arguments[4][21][0].apply(r, arguments)
    }, {
        "../errors": 34,
        "./_stream_duplex": 35,
        "./internal/streams/destroy": 42,
        "./internal/streams/state": 46,
        "./internal/streams/stream": 47,
        _process: 9,
        buffer: 3,
        dup: 21,
        inherits: 8,
        "util-deprecate": 52
    }],
    40: [function(e, t, r) {
        arguments[4][22][0].apply(r, arguments)
    }, {
        "./end-of-stream": 43,
        _process: 9,
        dup: 22
    }],
    41: [function(e, t, r) {
        arguments[4][23][0].apply(r, arguments)
    }, {
        buffer: 3,
        dup: 23,
        util: 2
    }],
    42: [function(e, t, r) {
        arguments[4][24][0].apply(r, arguments)
    }, {
        _process: 9,
        dup: 24
    }],
    43: [function(e, t, r) {
        arguments[4][25][0].apply(r, arguments)
    }, {
        "../../../errors": 34,
        dup: 25
    }],
    44: [function(e, t, r) {
        arguments[4][26][0].apply(r, arguments)
    }, {
        dup: 26
    }],
    45: [function(e, t, r) {
        arguments[4][27][0].apply(r, arguments)
    }, {
        "../../../errors": 34,
        "./end-of-stream": 43,
        dup: 27
    }],
    46: [function(e, t, r) {
        arguments[4][28][0].apply(r, arguments)
    }, {
        "../../../errors": 34,
        dup: 28
    }],
    47: [function(e, t, r) {
        arguments[4][29][0].apply(r, arguments)
    }, {
        dup: 29,
        events: 5
    }],
    48: [function(e, t, r) {
        (r = t.exports = e("./lib/_stream_readable.js")).Stream = r, r.Readable = r, r.Writable = e("./lib/_stream_writable.js"), r.Duplex = e("./lib/_stream_duplex.js"), r.Transform = e("./lib/_stream_transform.js"), r.PassThrough = e("./lib/_stream_passthrough.js"), r.finished = e("./lib/internal/streams/end-of-stream.js"), r.pipeline = e("./lib/internal/streams/pipeline.js")
    }, {
        "./lib/_stream_duplex.js": 35,
        "./lib/_stream_passthrough.js": 36,
        "./lib/_stream_readable.js": 37,
        "./lib/_stream_transform.js": 38,
        "./lib/_stream_writable.js": 39,
        "./lib/internal/streams/end-of-stream.js": 43,
        "./lib/internal/streams/pipeline.js": 45
    }],
    49: [function(e, t, r) {
        var n = e("safe-buffer").Buffer,
            i = n.isEncoding || function(e) {
                switch ((e = "" + e) && e.toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                    case "raw":
                        return !0;
                    default:
                        return !1
                }
            };

        function a(e) {
            var t;
            switch (this.encoding = function(e) {
                    var t = function(e) {
                        if (!e) return "utf8";
                        for (var t;;) switch (e) {
                            case "utf8":
                            case "utf-8":
                                return "utf8";
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return "utf16le";
                            case "latin1":
                            case "binary":
                                return "latin1";
                            case "base64":
                            case "ascii":
                            case "hex":
                                return e;
                            default:
                                if (t) return;
                                e = ("" + e).toLowerCase(), t = !0
                        }
                    }(e);
                    if ("string" != typeof t && (n.isEncoding === i || !i(e))) throw new Error("Unknown encoding: " + e);
                    return t || e
                }(e), this.encoding) {
                case "utf16le":
                    this.text = u, this.end = l, t = 4;
                    break;
                case "utf8":
                    this.fillLast = s, t = 4;
                    break;
                case "base64":
                    this.text = c, this.end = h, t = 3;
                    break;
                default:
                    return this.write = f, void(this.end = d)
            }
            this.lastNeed = 0, this.lastTotal = 0, this.lastChar = n.allocUnsafe(t)
        }

        function o(e) {
            return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2
        }

        function s(e) {
            var t = this.lastTotal - this.lastNeed,
                r = function(e, t, r) {
                    if (128 != (192 & t[0])) return e.lastNeed = 0, "�";
                    if (e.lastNeed > 1 && t.length > 1) {
                        if (128 != (192 & t[1])) return e.lastNeed = 1, "�";
                        if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2])) return e.lastNeed = 2, "�"
                    }
                }(this, e);
            return void 0 !== r ? r : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length), void(this.lastNeed -= e.length))
        }

        function u(e, t) {
            if ((e.length - t) % 2 == 0) {
                var r = e.toString("utf16le", t);
                if (r) {
                    var n = r.charCodeAt(r.length - 1);
                    if (n >= 55296 && n <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], r.slice(0, -1)
                }
                return r
            }
            return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1)
        }

        function l(e) {
            var t = e && e.length ? this.write(e) : "";
            if (this.lastNeed) {
                var r = this.lastTotal - this.lastNeed;
                return t + this.lastChar.toString("utf16le", 0, r)
            }
            return t
        }

        function c(e, t) {
            var r = (e.length - t) % 3;
            return 0 === r ? e.toString("base64", t) : (this.lastNeed = 3 - r, this.lastTotal = 3, 1 === r ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - r))
        }

        function h(e) {
            var t = e && e.length ? this.write(e) : "";
            return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
        }

        function f(e) {
            return e.toString(this.encoding)
        }

        function d(e) {
            return e && e.length ? this.write(e) : ""
        }
        r.StringDecoder = a, a.prototype.write = function(e) {
            if (0 === e.length) return "";
            var t, r;
            if (this.lastNeed) {
                if (void 0 === (t = this.fillLast(e))) return "";
                r = this.lastNeed, this.lastNeed = 0
            } else r = 0;
            return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || ""
        }, a.prototype.end = function(e) {
            var t = e && e.length ? this.write(e) : "";
            return this.lastNeed ? t + "�" : t
        }, a.prototype.text = function(e, t) {
            var r = function(e, t, r) {
                var n = t.length - 1;
                if (n < r) return 0;
                var i = o(t[n]);
                if (i >= 0) return i > 0 && (e.lastNeed = i - 1), i;
                if (--n < r || -2 === i) return 0;
                if ((i = o(t[n])) >= 0) return i > 0 && (e.lastNeed = i - 2), i;
                if (--n < r || -2 === i) return 0;
                if ((i = o(t[n])) >= 0) return i > 0 && (2 === i ? i = 0 : e.lastNeed = i - 3), i;
                return 0
            }(this, e, t);
            if (!this.lastNeed) return e.toString("utf8", t);
            this.lastTotal = r;
            var n = e.length - (r - this.lastNeed);
            return e.copy(this.lastChar, 0, n), e.toString("utf8", t, n)
        }, a.prototype.fillLast = function(e) {
            if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
            e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length
        }
    }, {
        "safe-buffer": 14
    }],
    50: [function(e, t, r) {
        var n = e("punycode"),
            i = e("./util");

        function a() {
            this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
        }
        r.parse = v, r.resolve = function(e, t) {
            return v(e, !1, !0).resolve(t)
        }, r.resolveObject = function(e, t) {
            return e ? v(e, !1, !0).resolveObject(t) : t
        }, r.format = function(e) {
            i.isString(e) && (e = v(e));
            return e instanceof a ? e.format() : a.prototype.format.call(e)
        }, r.Url = a;
        var o = /^([a-z0-9.+-]+:)/i,
            s = /:[0-9]*$/,
            u = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
            l = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
            c = ["'"].concat(l),
            h = ["%", "/", "?", ";", "#"].concat(c),
            f = ["/", "?", "#"],
            d = /^[+a-z0-9A-Z_-]{0,63}$/,
            p = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
            m = {
                javascript: !0,
                "javascript:": !0
            },
            b = {
                javascript: !0,
                "javascript:": !0
            },
            y = {
                http: !0,
                https: !0,
                ftp: !0,
                gopher: !0,
                file: !0,
                "http:": !0,
                "https:": !0,
                "ftp:": !0,
                "gopher:": !0,
                "file:": !0
            },
            g = e("querystring");

        function v(e, t, r) {
            if (e && i.isObject(e) && e instanceof a) return e;
            var n = new a;
            return n.parse(e, t, r), n
        }
        a.prototype.parse = function(e, t, r) {
            if (!i.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
            var a = e.indexOf("?"),
                s = -1 !== a && a < e.indexOf("#") ? "?" : "#",
                l = e.split(s);
            l[0] = l[0].replace(/\\/g, "/");
            var v = e = l.join(s);
            if (v = v.trim(), !r && 1 === e.split("#").length) {
                var _ = u.exec(v);
                if (_) return this.path = v, this.href = v, this.pathname = _[1], _[2] ? (this.search = _[2], this.query = t ? g.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this
            }
            var w = o.exec(v);
            if (w) {
                var T = (w = w[0]).toLowerCase();
                this.protocol = T, v = v.substr(w.length)
            }
            if (r || w || v.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                var E = "//" === v.substr(0, 2);
                !E || w && b[w] || (v = v.substr(2), this.slashes = !0)
            }
            if (!b[w] && (E || w && !y[w])) {
                for (var R, S, A = -1, L = 0; L < f.length; L++) {
                    -1 !== (C = v.indexOf(f[L])) && (-1 === A || C < A) && (A = C)
                } - 1 !== (S = -1 === A ? v.lastIndexOf("@") : v.lastIndexOf("@", A)) && (R = v.slice(0, S), v = v.slice(S + 1), this.auth = decodeURIComponent(R)), A = -1;
                for (L = 0; L < h.length; L++) {
                    var C; - 1 !== (C = v.indexOf(h[L])) && (-1 === A || C < A) && (A = C)
                } - 1 === A && (A = v.length), this.host = v.slice(0, A), v = v.slice(A), this.parseHost(), this.hostname = this.hostname || "";
                var O = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                if (!O)
                    for (var x = this.hostname.split(/\./), N = (L = 0, x.length); L < N; L++) {
                        var I = x[L];
                        if (I && !I.match(d)) {
                            for (var D = "", M = 0, B = I.length; M < B; M++) I.charCodeAt(M) > 127 ? D += "x" : D += I[M];
                            if (!D.match(d)) {
                                var P = x.slice(0, L),
                                    k = x.slice(L + 1),
                                    U = I.match(p);
                                U && (P.push(U[1]), k.unshift(U[2])), k.length && (v = "/" + k.join(".") + v), this.hostname = P.join(".");
                                break
                            }
                        }
                    }
                this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), O || (this.hostname = n.toASCII(this.hostname));
                var j = this.port ? ":" + this.port : "",
                    q = this.hostname || "";
                this.host = q + j, this.href += this.host, O && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== v[0] && (v = "/" + v))
            }
            if (!m[T])
                for (L = 0, N = c.length; L < N; L++) {
                    var F = c[L];
                    if (-1 !== v.indexOf(F)) {
                        var H = encodeURIComponent(F);
                        H === F && (H = escape(F)), v = v.split(F).join(H)
                    }
                }
            var V = v.indexOf("#"); - 1 !== V && (this.hash = v.substr(V), v = v.slice(0, V));
            var $ = v.indexOf("?");
            if (-1 !== $ ? (this.search = v.substr($), this.query = v.substr($ + 1), t && (this.query = g.parse(this.query)), v = v.slice(0, $)) : t && (this.search = "", this.query = {}), v && (this.pathname = v), y[T] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                j = this.pathname || "";
                var G = this.search || "";
                this.path = j + G
            }
            return this.href = this.format(), this
        }, a.prototype.format = function() {
            var e = this.auth || "";
            e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@");
            var t = this.protocol || "",
                r = this.pathname || "",
                n = this.hash || "",
                a = !1,
                o = "";
            this.host ? a = e + this.host : this.hostname && (a = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (a += ":" + this.port)), this.query && i.isObject(this.query) && Object.keys(this.query).length && (o = g.stringify(this.query));
            var s = this.search || o && "?" + o || "";
            return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || y[t]) && !1 !== a ? (a = "//" + (a || ""), r && "/" !== r.charAt(0) && (r = "/" + r)) : a || (a = ""), n && "#" !== n.charAt(0) && (n = "#" + n), s && "?" !== s.charAt(0) && (s = "?" + s), t + a + (r = r.replace(/[?#]/g, function(e) {
                return encodeURIComponent(e)
            })) + (s = s.replace("#", "%23")) + n
        }, a.prototype.resolve = function(e) {
            return this.resolveObject(v(e, !1, !0)).format()
        }, a.prototype.resolveObject = function(e) {
            if (i.isString(e)) {
                var t = new a;
                t.parse(e, !1, !0), e = t
            }
            for (var r = new a, n = Object.keys(this), o = 0; o < n.length; o++) {
                var s = n[o];
                r[s] = this[s]
            }
            if (r.hash = e.hash, "" === e.href) return r.href = r.format(), r;
            if (e.slashes && !e.protocol) {
                for (var u = Object.keys(e), l = 0; l < u.length; l++) {
                    var c = u[l];
                    "protocol" !== c && (r[c] = e[c])
                }
                return y[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r
            }
            if (e.protocol && e.protocol !== r.protocol) {
                if (!y[e.protocol]) {
                    for (var h = Object.keys(e), f = 0; f < h.length; f++) {
                        var d = h[f];
                        r[d] = e[d]
                    }
                    return r.href = r.format(), r
                }
                if (r.protocol = e.protocol, e.host || b[e.protocol]) r.pathname = e.pathname;
                else {
                    for (var p = (e.pathname || "").split("/"); p.length && !(e.host = p.shift()););
                    e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== p[0] && p.unshift(""), p.length < 2 && p.unshift(""), r.pathname = p.join("/")
                }
                if (r.search = e.search, r.query = e.query, r.host = e.host || "", r.auth = e.auth, r.hostname = e.hostname || e.host, r.port = e.port, r.pathname || r.search) {
                    var m = r.pathname || "",
                        g = r.search || "";
                    r.path = m + g
                }
                return r.slashes = r.slashes || e.slashes, r.href = r.format(), r
            }
            var v = r.pathname && "/" === r.pathname.charAt(0),
                _ = e.host || e.pathname && "/" === e.pathname.charAt(0),
                w = _ || v || r.host && e.pathname,
                T = w,
                E = r.pathname && r.pathname.split("/") || [],
                R = (p = e.pathname && e.pathname.split("/") || [], r.protocol && !y[r.protocol]);
            if (R && (r.hostname = "", r.port = null, r.host && ("" === E[0] ? E[0] = r.host : E.unshift(r.host)), r.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === p[0] ? p[0] = e.host : p.unshift(e.host)), e.host = null), w = w && ("" === p[0] || "" === E[0])), _) r.host = e.host || "" === e.host ? e.host : r.host, r.hostname = e.hostname || "" === e.hostname ? e.hostname : r.hostname, r.search = e.search, r.query = e.query, E = p;
            else if (p.length) E || (E = []), E.pop(), E = E.concat(p), r.search = e.search, r.query = e.query;
            else if (!i.isNullOrUndefined(e.search)) {
                if (R) r.hostname = r.host = E.shift(), (O = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = O.shift(), r.host = r.hostname = O.shift());
                return r.search = e.search, r.query = e.query, i.isNull(r.pathname) && i.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r
            }
            if (!E.length) return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;
            for (var S = E.slice(-1)[0], A = (r.host || e.host || E.length > 1) && ("." === S || ".." === S) || "" === S, L = 0, C = E.length; C >= 0; C--) "." === (S = E[C]) ? E.splice(C, 1) : ".." === S ? (E.splice(C, 1), L++) : L && (E.splice(C, 1), L--);
            if (!w && !T)
                for (; L--; L) E.unshift("..");
            !w || "" === E[0] || E[0] && "/" === E[0].charAt(0) || E.unshift(""), A && "/" !== E.join("/").substr(-1) && E.push("");
            var O, x = "" === E[0] || E[0] && "/" === E[0].charAt(0);
            R && (r.hostname = r.host = x ? "" : E.length ? E.shift() : "", (O = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = O.shift(), r.host = r.hostname = O.shift()));
            return (w = w || r.host && E.length) && !x && E.unshift(""), E.length ? r.pathname = E.join("/") : (r.pathname = null, r.path = null), i.isNull(r.pathname) && i.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = e.auth || r.auth, r.slashes = r.slashes || e.slashes, r.href = r.format(), r
        }, a.prototype.parseHost = function() {
            var e = this.host,
                t = s.exec(e);
            t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
        }
    }, {
        "./util": 51,
        punycode: 10,
        querystring: 13
    }],
    51: [function(e, t, r) {
        t.exports = {
            isString: function(e) {
                return "string" == typeof e
            },
            isObject: function(e) {
                return "object" == typeof e && null !== e
            },
            isNull: function(e) {
                return null === e
            },
            isNullOrUndefined: function(e) {
                return null == e
            }
        }
    }, {}],
    52: [function(e, t, r) {
        (function(e) {
            (function() {
                function r(t) {
                    try {
                        if (!e.localStorage) return !1
                    } catch (e) {
                        return !1
                    }
                    var r = e.localStorage[t];
                    return null != r && "true" === String(r).toLowerCase()
                }
                t.exports = function(e, t) {
                    if (r("noDeprecation")) return e;
                    var n = !1;
                    return function() {
                        if (!n) {
                            if (r("throwDeprecation")) throw new Error(t);
                            r("traceDeprecation") ? console.trace(t) : console.warn(t), n = !0
                        }
                        return e.apply(this, arguments)
                    }
                }
            }).call(this)
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    53: [function(e, t, r) {
        t.exports = function() {
            for (var e = {}, t = 0; t < arguments.length; t++) {
                var r = arguments[t];
                for (var i in r) n.call(r, i) && (e[i] = r[i])
            }
            return e
        };
        var n = Object.prototype.hasOwnProperty
    }, {}],
    54: [function(e, t, r) {
        t.exports = class extends Map {
            constructor(e = 1e3) {
                super(), this.timeout = e
            }
            set(e, t) {
                this.has(e) && clearTimeout(super.get(e).tid), super.set(e, {
                    tid: setTimeout(this.delete.bind(this, e), this.timeout).unref(),
                    value: t
                })
            }
            get(e) {
                let t = super.get(e);
                return t ? t.value : null
            }
            getOrSet(e, t) {
                if (this.has(e)) return this.get(e); {
                    let r = t();
                    return this.set(e, r), (async () => {
                        try {
                            await r
                        } catch (t) {
                            this.delete(e)
                        }
                    })(), r
                }
            }
            delete(e) {
                let t = super.get(e);
                t && (clearTimeout(t.tid), super.delete(e))
            }
            clear() {
                for (let e of this.values()) clearTimeout(e.tid);
                super.clear()
            }
        }
    }, {}],
    55: [function(e, t, r) {
        const n = e("./utils"),
            i = e("./formats"),
            a = ["mp4a", "mp3", "vorbis", "aac", "opus", "flac"],
            o = ["mp4v", "avc1", "Sorenson H.283", "MPEG-4 Visual", "VP8", "VP9", "H.264"],
            s = e => e.bitrate || 0,
            u = e => o.findIndex(t => e.codecs && e.codecs.includes(t)),
            l = e => e.audioBitrate || 0,
            c = e => a.findIndex(t => e.codecs && e.codecs.includes(t));
        r.sortFormats = ((e, t) => ((e, t, r) => {
            let n = 0;
            for (let i of r)
                if (0 != (n = i(t) - i(e))) break;
            return n
        })(e, t, [e => +!!e.isHLS, e => +!!e.isDashMPD, e => +(e.contentLength > 0), e => +(e.hasVideo && e.hasAudio), e => +e.hasVideo, e => parseInt(e.qualityLabel) || 0, s, l, u, c])), r.addFormatMeta = (e => ((e = Object.assign({}, i[e.itag], e)).hasVideo = !!e.qualityLabel, e.hasAudio = !!e.audioBitrate, e.container = e.mimeType ? e.mimeType.split(";")[0].split("/")[1] : null, e.codecs = e.mimeType ? n.between(e.mimeType, 'codecs="', '"') : null, e.videoCodec = e.hasVideo && e.codecs ? e.codecs.split(", ")[0] : null, e.audioCodec = e.hasAudio && e.codecs ? e.codecs.split(", ").slice(-1)[0] : null, e.isLive = /\bsource[\/=]yt_live_broadcast\b/.test(e.url), e.isHLS = /\/manifest\/hls_(variant|playlist)\//.test(e.url), e.isDashMPD = /\/manifest\/dash\//.test(e.url), e))
    }, {
        "./formats": 56,
        "./utils": 65
    }],
    56: [function(e, t, r) {
        t.exports = {
            5: {
                mimeType: 'video/flv; codecs="Sorenson H.283, mp3"',
                qualityLabel: "240p",
                bitrate: 25e4,
                audioBitrate: 64
            },
            6: {
                mimeType: 'video/flv; codecs="Sorenson H.263, mp3"',
                qualityLabel: "270p",
                bitrate: 8e5,
                audioBitrate: 64
            },
            13: {
                mimeType: 'video/3gp; codecs="MPEG-4 Visual, aac"',
                qualityLabel: null,
                bitrate: 5e5,
                audioBitrate: null
            },
            17: {
                mimeType: 'video/3gp; codecs="MPEG-4 Visual, aac"',
                qualityLabel: "144p",
                bitrate: 5e4,
                audioBitrate: 24
            },
            18: {
                mimeType: 'video/mp4; codecs="H.264, aac"',
                qualityLabel: "360p",
                bitrate: 5e5,
                audioBitrate: 96
            },
            22: {
                mimeType: 'video/mp4; codecs="H.264, aac"',
                qualityLabel: "720p",
                bitrate: 2e6,
                audioBitrate: 192
            },
            34: {
                mimeType: 'video/flv; codecs="H.264, aac"',
                qualityLabel: "360p",
                bitrate: 5e5,
                audioBitrate: 128
            },
            35: {
                mimeType: 'video/flv; codecs="H.264, aac"',
                qualityLabel: "480p",
                bitrate: 8e5,
                audioBitrate: 128
            },
            36: {
                mimeType: 'video/3gp; codecs="MPEG-4 Visual, aac"',
                qualityLabel: "240p",
                bitrate: 175e3,
                audioBitrate: 32
            },
            37: {
                mimeType: 'video/mp4; codecs="H.264, aac"',
                qualityLabel: "1080p",
                bitrate: 3e6,
                audioBitrate: 192
            },
            38: {
                mimeType: 'video/mp4; codecs="H.264, aac"',
                qualityLabel: "3072p",
                bitrate: 35e5,
                audioBitrate: 192
            },
            43: {
                mimeType: 'video/webm; codecs="VP8, vorbis"',
                qualityLabel: "360p",
                bitrate: 5e5,
                audioBitrate: 128
            },
            44: {
                mimeType: 'video/webm; codecs="VP8, vorbis"',
                qualityLabel: "480p",
                bitrate: 1e6,
                audioBitrate: 128
            },
            45: {
                mimeType: 'video/webm; codecs="VP8, vorbis"',
                qualityLabel: "720p",
                bitrate: 2e6,
                audioBitrate: 192
            },
            46: {
                mimeType: 'audio/webm; codecs="vp8, vorbis"',
                qualityLabel: "1080p",
                bitrate: null,
                audioBitrate: 192
            },
            82: {
                mimeType: 'video/mp4; codecs="H.264, aac"',
                qualityLabel: "360p",
                bitrate: 5e5,
                audioBitrate: 96
            },
            83: {
                mimeType: 'video/mp4; codecs="H.264, aac"',
                qualityLabel: "240p",
                bitrate: 5e5,
                audioBitrate: 96
            },
            84: {
                mimeType: 'video/mp4; codecs="H.264, aac"',
                qualityLabel: "720p",
                bitrate: 2e6,
                audioBitrate: 192
            },
            85: {
                mimeType: 'video/mp4; codecs="H.264, aac"',
                qualityLabel: "1080p",
                bitrate: 3e6,
                audioBitrate: 192
            },
            91: {
                mimeType: 'video/ts; codecs="H.264, aac"',
                qualityLabel: "144p",
                bitrate: 1e5,
                audioBitrate: 48
            },
            92: {
                mimeType: 'video/ts; codecs="H.264, aac"',
                qualityLabel: "240p",
                bitrate: 15e4,
                audioBitrate: 48
            },
            93: {
                mimeType: 'video/ts; codecs="H.264, aac"',
                qualityLabel: "360p",
                bitrate: 5e5,
                audioBitrate: 128
            },
            94: {
                mimeType: 'video/ts; codecs="H.264, aac"',
                qualityLabel: "480p",
                bitrate: 8e5,
                audioBitrate: 128
            },
            95: {
                mimeType: 'video/ts; codecs="H.264, aac"',
                qualityLabel: "720p",
                bitrate: 15e5,
                audioBitrate: 256
            },
            96: {
                mimeType: 'video/ts; codecs="H.264, aac"',
                qualityLabel: "1080p",
                bitrate: 25e5,
                audioBitrate: 256
            },
            100: {
                mimeType: 'audio/webm; codecs="VP8, vorbis"',
                qualityLabel: "360p",
                bitrate: null,
                audioBitrate: 128
            },
            101: {
                mimeType: 'audio/webm; codecs="VP8, vorbis"',
                qualityLabel: "360p",
                bitrate: null,
                audioBitrate: 192
            },
            102: {
                mimeType: 'audio/webm; codecs="VP8, vorbis"',
                qualityLabel: "720p",
                bitrate: null,
                audioBitrate: 192
            },
            120: {
                mimeType: 'video/flv; codecs="H.264, aac"',
                qualityLabel: "720p",
                bitrate: 2e6,
                audioBitrate: 128
            },
            127: {
                mimeType: 'audio/ts; codecs="aac"',
                qualityLabel: null,
                bitrate: null,
                audioBitrate: 96
            },
            128: {
                mimeType: 'audio/ts; codecs="aac"',
                qualityLabel: null,
                bitrate: null,
                audioBitrate: 96
            },
            132: {
                mimeType: 'video/ts; codecs="H.264, aac"',
                qualityLabel: "240p",
                bitrate: 15e4,
                audioBitrate: 48
            },
            133: {
                mimeType: 'video/mp4; codecs="H.264"',
                qualityLabel: "240p",
                bitrate: 2e5,
                audioBitrate: null
            },
            134: {
                mimeType: 'video/mp4; codecs="H.264"',
                qualityLabel: "360p",
                bitrate: 3e5,
                audioBitrate: null
            },
            135: {
                mimeType: 'video/mp4; codecs="H.264"',
                qualityLabel: "480p",
                bitrate: 5e5,
                audioBitrate: null
            },
            136: {
                mimeType: 'video/mp4; codecs="H.264"',
                qualityLabel: "720p",
                bitrate: 1e6,
                audioBitrate: null
            },
            137: {
                mimeType: 'video/mp4; codecs="H.264"',
                qualityLabel: "1080p",
                bitrate: 25e5,
                audioBitrate: null
            },
            138: {
                mimeType: 'video/mp4; codecs="H.264"',
                qualityLabel: "4320p",
                bitrate: 135e5,
                audioBitrate: null
            },
            139: {
                mimeType: 'audio/mp4; codecs="aac"',
                qualityLabel: null,
                bitrate: null,
                audioBitrate: 48
            },
            140: {
                mimeType: 'audio/m4a; codecs="aac"',
                qualityLabel: null,
                bitrate: null,
                audioBitrate: 128
            },
            141: {
                mimeType: 'audio/mp4; codecs="aac"',
                qualityLabel: null,
                bitrate: null,
                audioBitrate: 256
            },
            151: {
                mimeType: 'video/ts; codecs="H.264, aac"',
                qualityLabel: "720p",
                bitrate: 5e4,
                audioBitrate: 24
            },
            160: {
                mimeType: 'video/mp4; codecs="H.264"',
                qualityLabel: "144p",
                bitrate: 1e5,
                audioBitrate: null
            },
            171: {
                mimeType: 'audio/webm; codecs="vorbis"',
                qualityLabel: null,
                bitrate: null,
                audioBitrate: 128
            },
            172: {
                mimeType: 'audio/webm; codecs="vorbis"',
                qualityLabel: null,
                bitrate: null,
                audioBitrate: 192
            },
            242: {
                mimeType: 'video/webm; codecs="VP9"',
                qualityLabel: "240p",
                bitrate: 1e5,
                audioBitrate: null
            },
            243: {
                mimeType: 'video/webm; codecs="VP9"',
                qualityLabel: "360p",
                bitrate: 25e4,
                audioBitrate: null
            },
            244: {
                mimeType: 'video/webm; codecs="VP9"',
                qualityLabel: "480p",
                bitrate: 5e5,
                audioBitrate: null
            },
            247: {
                mimeType: 'video/webm; codecs="VP9"',
                qualityLabel: "720p",
                bitrate: 7e5,
                audioBitrate: null
            },
            248: {
                mimeType: 'video/webm; codecs="VP9"',
                qualityLabel: "1080p",
                bitrate: 15e5,
                audioBitrate: null
            },
            249: {
                mimeType: 'audio/webm; codecs="opus"',
                qualityLabel: null,
                bitrate: null,
                audioBitrate: 48
            },
            250: {
                mimeType: 'audio/webm; codecs="opus"',
                qualityLabel: null,
                bitrate: null,
                audioBitrate: 64
            },
            251: {
                mimeType: 'audio/webm; codecs="opus"',
                qualityLabel: null,
                bitrate: null,
                audioBitrate: 160
            },
            264: {
                mimeType: 'video/mp4; codecs="H.264"',
                qualityLabel: "1440p",
                bitrate: 4e6,
                audioBitrate: null
            },
            266: {
                mimeType: 'video/mp4; codecs="H.264"',
                qualityLabel: "2160p",
                bitrate: 125e5,
                audioBitrate: null
            },
            271: {
                mimeType: 'video/webm; codecs="VP9"',
                qualityLabel: "1440p",
                bitrate: 9e6,
                audioBitrate: null
            },
            272: {
                mimeType: 'video/webm; codecs="VP9"',
                qualityLabel: "4320p",
                bitrate: 2e7,
                audioBitrate: null
            },
            278: {
                mimeType: 'video/webm; codecs="VP9"',
                qualityLabel: "144p 30fps",
                bitrate: 8e4,
                audioBitrate: null
            },
            298: {
                mimeType: 'video/mp4; codecs="H.264"',
                qualityLabel: "720p",
                bitrate: 3e6,
                audioBitrate: null
            },
            299: {
                mimeType: 'video/mp4; codecs="H.264"',
                qualityLabel: "1080p",
                bitrate: 55e5,
                audioBitrate: null
            },
            300: {
                mimeType: 'video/ts; codecs="H.264, aac"',
                qualityLabel: "720p",
                bitrate: 1318e3,
                audioBitrate: 48
            },
            302: {
                mimeType: 'video/webm; codecs="VP9"',
                qualityLabel: "720p HFR",
                bitrate: 25e5,
                audioBitrate: null
            },
            303: {
                mimeType: 'video/webm; codecs="VP9"',
                qualityLabel: "1080p HFR",
                bitrate: 5e6,
                audioBitrate: null
            },
            308: {
                mimeType: 'video/webm; codecs="VP9"',
                qualityLabel: "1440p HFR",
                bitrate: 1e7,
                audioBitrate: null
            },
            313: {
                mimeType: 'video/webm; codecs="VP9"',
                qualityLabel: "2160p",
                bitrate: 13e6,
                audioBitrate: null
            },
            315: {
                mimeType: 'video/webm; codecs="VP9"',
                qualityLabel: "2160p HFR",
                bitrate: 2e7,
                audioBitrate: null
            },
            330: {
                mimeType: 'video/webm; codecs="VP9"',
                qualityLabel: "144p HDR, HFR",
                bitrate: 8e4,
                audioBitrate: null
            },
            331: {
                mimeType: 'video/webm; codecs="VP9"',
                qualityLabel: "240p HDR, HFR",
                bitrate: 1e5,
                audioBitrate: null
            },
            332: {
                mimeType: 'video/webm; codecs="VP9"',
                qualityLabel: "360p HDR, HFR",
                bitrate: 25e4,
                audioBitrate: null
            },
            333: {
                mimeType: 'video/webm; codecs="VP9"',
                qualityLabel: "240p HDR, HFR",
                bitrate: 5e5,
                audioBitrate: null
            },
            334: {
                mimeType: 'video/webm; codecs="VP9"',
                qualityLabel: "720p HDR, HFR",
                bitrate: 1e6,
                audioBitrate: null
            },
            335: {
                mimeType: 'video/webm; codecs="VP9"',
                qualityLabel: "1080p HDR, HFR",
                bitrate: 15e5,
                audioBitrate: null
            },
            336: {
                mimeType: 'video/webm; codecs="VP9"',
                qualityLabel: "1440p HDR, HFR",
                bitrate: 5e6,
                audioBitrate: null
            },
            337: {
                mimeType: 'video/webm; codecs="VP9"',
                qualityLabel: "2160p HDR, HFR",
                bitrate: 12e6,
                audioBitrate: null
            }
        }
    }, {}],
    57: [function(e, t, r) {
        const {
            getInfo: n
        } = e("./info");
        window.getInfo = n
    }, {
        "./info": 59
    }],
    58: [function(e, t, r) {
        const n = e("./utils"),
            i = e("querystring"),
            {
                parseTimestamp: a
            } = e("./m3u8stream"),
            o = "https://www.youtube.com/watch?v=",
            s = {
                song: {
                    name: "Music",
                    url: "https://music.youtube.com/"
                }
            },
            u = e => e ? e.runs ? e.runs[0].text : e.simpleText : null;
        r.getMedia = (e => {
            let t = {},
                r = [];
            try {
                r = e.response.contents.twoColumnWatchNextResults.results.results.contents
            } catch (e) {}
            let n = r.find(e => e.videoSecondaryInfoRenderer);
            if (!n) return {};
            try {
                let e = (n.metadataRowContainer || n.videoSecondaryInfoRenderer.metadataRowContainer).metadataRowContainerRenderer.rows;
                for (let r of e)
                    if (r.metadataRowRenderer) {
                        let e = u(r.metadataRowRenderer.title).toLowerCase(),
                            n = r.metadataRowRenderer.contents[0];
                        t[e] = u(n);
                        let i = n.runs;
                        i && i[0].navigationEndpoint && (t[`${e}_url`] = new URL(i[0].navigationEndpoint.commandMetadata.webCommandMetadata.url, o).toString()), e in s && (t.category = s[e].name, t.category_url = s[e].url)
                    } else if (r.richMetadataRowRenderer) {
                    let e = r.richMetadataRowRenderer.contents,
                        n = e.filter(e => "RICH_METADATA_RENDERER_STYLE_BOX_ART" === e.richMetadataRenderer.style);
                    for (let {
                            richMetadataRenderer: e
                        } of n) {
                        let r = e;
                        t.year = u(r.subtitle);
                        let n = u(r.callToAction).split(" ")[1];
                        t[n] = u(r.title), t[`${n}_url`] = new URL(r.endpoint.commandMetadata.webCommandMetadata.url, o).toString(), t.thumbnails = r.thumbnail.thumbnails
                    }
                    let i = e.filter(e => "RICH_METADATA_RENDERER_STYLE_TOPIC" === e.richMetadataRenderer.style);
                    for (let {
                            richMetadataRenderer: e
                        } of i) {
                        let r = e;
                        t.category = u(r.title), t.category_url = new URL(r.endpoint.commandMetadata.webCommandMetadata.url, o).toString()
                    }
                }
            } catch (e) {}
            return t
        });
        const l = e => !(!e || !e.find(e => "Verified" === e.metadataBadgeRenderer.tooltip));
        r.getAuthor = (e => {
            let t, r, i = [],
                a = !1;
            try {
                let s = e.response.contents.twoColumnWatchNextResults.results.results.contents.find(e => e.videoSecondaryInfoRenderer && e.videoSecondaryInfoRenderer.owner && e.videoSecondaryInfoRenderer.owner.videoOwnerRenderer).videoSecondaryInfoRenderer.owner.videoOwnerRenderer;
                t = s.navigationEndpoint.browseEndpoint.browseId, i = s.thumbnail.thumbnails.map(e => (e.url = new URL(e.url, o).toString(), e)), r = n.parseAbbreviatedNumber(u(s.subscriberCountText)), a = l(s.badges)
            } catch (e) {}
            try {
                let s = e.player_response.microformat && e.player_response.microformat.playerMicroformatRenderer,
                    u = s && s.channelId || t || e.player_response.videoDetails.channelId,
                    l = {
                        id: u,
                        name: s ? s.ownerChannelName : e.player_response.videoDetails.author,
                        user: s ? s.ownerProfileUrl.split("/").slice(-1)[0] : null,
                        channel_url: `https://www.youtube.com/channel/${u}`,
                        external_channel_url: s ? `https://www.youtube.com/channel/${s.externalChannelId}` : "",
                        user_url: s ? new URL(s.ownerProfileUrl, o).toString() : "",
                        thumbnails: i,
                        verified: a,
                        subscriber_count: r
                    };
                return i.length && n.deprecate(l, "avatar", l.thumbnails[0].url, "author.avatar", "author.thumbnails[0].url"), l
            } catch (e) {
                return {}
            }
        });
        const c = (e, t) => {
            if (e) try {
                let r = u(e.viewCountText),
                    i = u(e.shortViewCountText),
                    s = t.find(t => t.id === e.videoId);
                /^\d/.test(i) || (i = s && s.short_view_count_text || ""), r = (/^\d/.test(r) ? r : i).split(" ")[0];
                let c = e.shortBylineText.runs[0].navigationEndpoint.browseEndpoint,
                    h = c.browseId,
                    f = u(e.shortBylineText),
                    d = (c.canonicalBaseUrl || "").split("/").slice(-1)[0],
                    p = {
                        id: e.videoId,
                        title: u(e.title),
                        published: u(e.publishedTimeText),
                        author: {
                            id: h,
                            name: f,
                            user: d,
                            channel_url: `https://www.youtube.com/channel/${h}`,
                            user_url: `https://www.youtube.com/user/${d}`,
                            thumbnails: e.channelThumbnail.thumbnails.map(e => (e.url = new URL(e.url, o).toString(), e)),
                            verified: l(e.ownerBadges),
                            [Symbol.toPrimitive]: () => (console.warn("`relatedVideo.author` will be removed in a near future release, use `relatedVideo.author.name` instead."), p.author.name)
                        },
                        short_view_count_text: i.split(" ")[0],
                        view_count: r.replace(/,/g, ""),
                        length_seconds: e.lengthText ? Math.floor(a(u(e.lengthText)) / 1e3) : t && `${t.length_seconds}`,
                        thumbnails: e.thumbnail.thumbnails,
                        richThumbnails: e.richThumbnail ? e.richThumbnail.movingThumbnailRenderer.movingThumbnailDetails.thumbnails : [],
                        isLive: !(!e.badges || !e.badges.find(e => "LIVE NOW" === e.metadataBadgeRenderer.label))
                    };
                return n.deprecate(p, "author_thumbnail", p.author.thumbnails[0].url, "relatedVideo.author_thumbnail", "relatedVideo.author.thumbnails[0].url"), n.deprecate(p, "ucid", p.author.id, "relatedVideo.ucid", "relatedVideo.author.id"), n.deprecate(p, "video_thumbnail", p.thumbnails[0].url, "relatedVideo.video_thumbnail", "relatedVideo.thumbnails[0].url"), p
            } catch (e) {}
        };
        r.getRelatedVideos = (e => {
            let t = [],
                r = [];
            try {
                t = e.response.webWatchNextResponseExtensionData.relatedVideoArgs.split(",").map(e => i.parse(e))
            } catch (e) {}
            try {
                r = e.response.contents.twoColumnWatchNextResults.secondaryResults.secondaryResults.results
            } catch (e) {
                return []
            }
            let n = [];
            for (let e of r || []) {
                let r = e.compactVideoRenderer;
                if (r) {
                    let e = c(r, t);
                    e && n.push(e)
                } else {
                    let r = e.compactAutoplayRenderer || e.itemSectionRenderer;
                    if (!r || !Array.isArray(r.contents)) continue;
                    for (let e of r.contents) {
                        let r = c(e.compactVideoRenderer, t);
                        r && n.push(r)
                    }
                }
            }
            return n
        }), r.getLikes = (e => {
            try {
                let t = e.response.contents.twoColumnWatchNextResults.results.results.contents.find(e => e.videoPrimaryInfoRenderer).videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons.find(e => e.toggleButtonRenderer && "LIKE" === e.toggleButtonRenderer.defaultIcon.iconType);
                return parseInt(t.toggleButtonRenderer.defaultText.accessibility.accessibilityData.label.replace(/\D+/g, ""))
            } catch (e) {
                return null
            }
        }), r.getDislikes = (e => {
            try {
                let t = e.response.contents.twoColumnWatchNextResults.results.results.contents.find(e => e.videoPrimaryInfoRenderer).videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons.find(e => e.toggleButtonRenderer && "DISLIKE" === e.toggleButtonRenderer.defaultIcon.iconType);
                return parseInt(t.toggleButtonRenderer.defaultText.accessibility.accessibilityData.label.replace(/\D+/g, ""))
            } catch (e) {
                return null
            }
        }), r.cleanVideoDetails = ((e, t) => (e.thumbnails = e.thumbnail.thumbnails, delete e.thumbnail, n.deprecate(e, "thumbnail", {
            thumbnails: e.thumbnails
        }, "videoDetails.thumbnail.thumbnails", "videoDetails.thumbnails"), e.description = e.shortDescription || u(e.description), delete e.shortDescription, n.deprecate(e, "shortDescription", e.description, "videoDetails.shortDescription", "videoDetails.description"), e.lengthSeconds = t.player_response.microformat && t.player_response.microformat.playerMicroformatRenderer.lengthSeconds || t.player_response.videoDetails.lengthSeconds, e)), r.getStoryboards = (e => {
            const t = e.player_response.storyboards && e.player_response.storyboards.playerStoryboardSpecRenderer && e.player_response.storyboards.playerStoryboardSpecRenderer.spec && e.player_response.storyboards.playerStoryboardSpecRenderer.spec.split("|");
            if (!t) return [];
            const r = new URL(t.shift());
            return t.map((e, t) => {
                let [n, i, a, o, s, u, l, c] = e.split("#");
                r.searchParams.set("sigh", c), a = parseInt(a, 10), o = parseInt(o, 10), s = parseInt(s, 10);
                const h = Math.ceil(a / (o * s));
                return {
                    templateUrl: r.toString().replace("$L", t).replace("$N", l),
                    thumbnailWidth: parseInt(n, 10),
                    thumbnailHeight: parseInt(i, 10),
                    thumbnailCount: a,
                    interval: parseInt(u, 10),
                    columns: o,
                    rows: s,
                    storyboardCount: h
                }
            })
        }), r.getChapters = (e => {
            const t = e.response && e.response.playerOverlays && e.response.playerOverlays.playerOverlayRenderer,
                r = t && t.decoratedPlayerBarRenderer && t.decoratedPlayerBarRenderer.decoratedPlayerBarRenderer && t.decoratedPlayerBarRenderer.decoratedPlayerBarRenderer.playerBar,
                n = r && r.multiMarkersPlayerBarRenderer && r.multiMarkersPlayerBarRenderer.markersMap,
                i = Array.isArray(n) && n.find(e => e.value && Array.isArray(e.value.chapters));
            return i ? i.value.chapters.map(e => ({
                title: u(e.chapterRenderer.title),
                start_time: e.chapterRenderer.timeRangeStartMillis / 1e3
            })) : []
        })
    }, {
        "./m3u8stream": 60,
        "./utils": 65,
        querystring: 13
    }],
    59: [function(e, t, r) {
        const n = e("querystring"),
            i = e("sax"),
            a = e("./miniget"),
            o = e("./utils"),
            s = e("./format-utils"),
            u = e("./url-utils"),
            l = e("./info-extras"),
            c = e("./sig"),
            h = e("./cache"),
            f = "https://www.youtube.com/watch?v=";
        r.cache = new h, r.cookieCache = new h(864e5), r.watchPageCache = new h;
        let d = "2.20210622.10.00";
        class p extends Error {}
        const m = ["support.google.com/youtube/?p=age_restrictions", "youtube.com/t/community_guidelines"];
        r.getBasicInfo = (async (e, t) => {
            const r = Object.assign({}, a.defaultOptions, t.requestOptions);
            t.requestOptions = Object.assign({}, t.requestOptions, {}), t.requestOptions.headers = Object.assign({}, {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36"
            }, t.requestOptions.headers);
            let n = await T([e, t], e => {
                let t = o.playError(e.player_response, ["ERROR"], p),
                    r = b(e.player_response);
                if (t || r) throw t || r;
                return e && e.player_response && (e.player_response.streamingData || y(e.player_response) || g(e.player_response))
            }, r, [x, O, N]);
            Object.assign(n, {
                formats: I(n.player_response),
                related_videos: l.getRelatedVideos(n)
            });
            const i = l.getMedia(n),
                s = {
                    author: l.getAuthor(n),
                    media: i,
                    likes: l.getLikes(n),
                    dislikes: l.getDislikes(n),
                    age_restricted: !!(i && i.notice_url && m.some(e => i.notice_url.includes(e))),
                    video_url: f + e,
                    storyboards: l.getStoryboards(n),
                    chapters: l.getChapters(n)
                };
            return n.videoDetails = l.cleanVideoDetails(Object.assign({}, n.player_response && n.player_response.microformat && n.player_response.microformat.playerMicroformatRenderer, n.player_response && n.player_response.videoDetails, s), n), n
        });
        const b = e => {
                let t = e && e.playabilityStatus;
                return t && "LOGIN_REQUIRED" === t.status && t.messages && t.messages.filter(e => /This is a private video/.test(e)).length ? new p(t.reason || t.messages && t.messages[0]) : null
            },
            y = e => {
                let t = e.playabilityStatus;
                return t && "UNPLAYABLE" === t.status && t.errorScreen && t.errorScreen.playerLegacyDesktopYpcOfferRenderer
            },
            g = e => {
                let t = e.playabilityStatus;
                return t && "LIVE_STREAM_OFFLINE" === t.status
            },
            v = (e, t) => `${f+e}&hl=${t.lang||"en"}`,
            _ = (e, t) => {
                const n = v(e, t);
                return r.watchPageCache.getOrSet(n, () => o.exposedMiniget(n, t).text())
            },
            w = e => {
                let t = /<script\s+src="([^"]+)"(?:\s+type="text\/javascript")?\s+name="player_ias\/base"\s*>|"jsUrl":"([^"]+)"/.exec(e);
                return t ? t[1] || t[2] : null
            },
            T = async (e, t, r, n) => {
                let i;
                for (let a of n) try {
                    const o = await R(a, e.concat([i]), r);
                    if (o.player_response && (o.player_response.videoDetails = E(i && i.player_response && i.player_response.videoDetails, o.player_response.videoDetails), o.player_response = E(i && i.player_response, o.player_response)), t(i = E(i, o), !1)) break
                } catch (e) {
                    if (e instanceof p || a === n[n.length - 1]) throw e
                }
                return i
            }, E = (e, t) => {
                if (!e || !t) return e || t;
                for (let [r, n] of Object.entries(t)) null != n && (e[r] = n);
                return e
            }, R = async (e, t, r) => {
                let n, i = 0;
                for (; i <= r.maxRetries;) try {
                    n = await e(...t);
                    break
                } catch (e) {
                    if (e instanceof p || e instanceof a.MinigetError && e.statusCode < 500 || i >= r.maxRetries) throw e;
                    let t = Math.min(++i * r.backoff.inc, r.backoff.max);
                    await new Promise(e => setTimeout(e, t))
                }
                return n
            }, S = /^[)\]}'\s]+/, A = (e, t, r) => {
                if (!r || "object" == typeof r) return r;
                try {
                    return r = r.replace(S, ""), JSON.parse(r)
                } catch (r) {
                    throw Error(`Error parsing ${t} in ${e}: ${r.message}`)
                }
            }, L = (e, t, r, n, i, a) => {
                let s = o.between(r, n, i);
                if (!s) throw Error(`Could not find ${t} in ${e}`);
                return A(e, t, o.cutAfterJSON(`${a}${s}`))
            }, C = (e, t) => {
                const r = t && (t.args && t.args.player_response || t.player_response || t.playerResponse || t.embedded_player_response);
                return A(e, "player_response", r)
            }, O = async (e, t) => {
                const n = Object.assign({
                    headers: {}
                }, t.requestOptions);
                let i = n.headers.Cookie || n.headers.cookie;
                n.headers = Object.assign({
                    "x-youtube-client-name": "1",
                    "x-youtube-client-version": d,
                    "x-youtube-identity-token": r.cookieCache.get(i || "browser") || ""
                }, n.headers);
                const a = async (i, a) => {
                    n.headers["x-youtube-identity-token"] || (n.headers["x-youtube-identity-token"] = await ((e, t, n, i) => r.cookieCache.getOrSet(n, async () => {
                        let r = (await _(e, t)).match(/(["'])ID_TOKEN\1[:,]\s?"([^"]+)"/);
                        if (!r && i) throw new p("Cookie header used in request, but unable to find YouTube identity token");
                        return r && r[2]
                    }))(e, t, i, a))
                };
                i && await a(i, !0);
                const s = ((e, t) => `${v(e,t)}&pbj=1`)(e, t),
                    u = await o.exposedMiniget(s, t, n).text();
                let l = A("watch.json", "body", u);
                if ("now" === l.reload && await a("browser", !1), "now" === l.reload || !Array.isArray(l)) throw Error("Unable to retrieve video metadata in watch.json");
                let c = l.reduce((e, t) => Object.assign(t, e), {});
                return c.player_response = C("watch.json", c), c.html5player = c.player && c.player.assets && c.player.assets.js, c
            }, x = async (e, t) => {
                let r = await _(e, t),
                    n = {
                        page: "watch"
                    };
                try {
                    d = o.between(r, '{"key":"cver","value":"', '"}'), n.player_response = L("watch.html", "player_response", r, /\bytInitialPlayerResponse\s*=\s*\{/i, "<\/script>", "{")
                } catch (e) {
                    let t = L("watch.html", "player_response", r, /\bytplayer\.config\s*=\s*{/, "<\/script>", "{");
                    n.player_response = C("watch.html", t)
                }
                return n.response = L("watch.html", "response", r, /\bytInitialData("\])?\s*=\s*\{/i, "<\/script>", "{"), n.html5player = w(r), n
            }, N = async (e, t) => {
                const r = new URL("https://www.youtube.com/get_video_info");
                r.searchParams.set("video_id", e), r.searchParams.set("c", "TVHTML5"), r.searchParams.set("cver", `7${d.substr(1)}`), r.searchParams.set("eurl", "https://youtube.googleapis.com/v/" + e), r.searchParams.set("ps", "default"), r.searchParams.set("gl", "US"), r.searchParams.set("hl", t.lang || "en"), r.searchParams.set("html5", "1");
                const i = await o.exposedMiniget(r.toString(), t).text();
                let a = n.parse(i);
                return a.player_response = C("get_video_info", a), a
            }, I = e => {
                let t = [];
                return e && e.streamingData && (t = t.concat(e.streamingData.formats || []).concat(e.streamingData.adaptiveFormats || [])), t
            };
        r.getInfo = (async (e, t) => {
            let n = await r.getBasicInfo(e, t);
            const i = n.player_response && n.player_response.streamingData && (n.player_response.streamingData.dashManifestUrl || n.player_response.streamingData.hlsManifestUrl);
            let a = [];
            if (n.formats.length) {
                if (n.html5player = n.html5player || w(await _(e, t)) || w(await ((e, t) => {
                        const r = `${"https://www.youtube.com/embed/"+e}?hl=${t.lang||"en"}`;
                        return o.exposedMiniget(r, t).text()
                    })(e, t)), !n.html5player) throw Error("Unable to find html5player file");
                const r = new URL(n.html5player, f).toString();
                a.push(c.decipherFormats(n.formats, r, t))
            }
            if (i && n.player_response.streamingData.dashManifestUrl) {
                let e = n.player_response.streamingData.dashManifestUrl;
                a.push(D(e, t))
            }
            if (i && n.player_response.streamingData.hlsManifestUrl) {
                let e = n.player_response.streamingData.hlsManifestUrl;
                a.push(M(e, t))
            }
            let u = await Promise.all(a);
            return n.formats = Object.values(Object.assign({}, ...u)), n.formats = n.formats.map(s.addFormatMeta), n.formats.sort(s.sortFormats), n.full = !0, n
        });
        const D = (e, t) => new Promise((r, n) => {
                let a = {};
                const s = i.parser(!1);
                let u;
                s.onerror = n, s.onopentag = (t => {
                    if ("ADAPTATIONSET" === t.name) u = t.attributes;
                    else if ("REPRESENTATION" === t.name) {
                        const r = parseInt(t.attributes.ID);
                        isNaN(r) || (a[e] = Object.assign({
                            itag: r,
                            url: e,
                            bitrate: parseInt(t.attributes.BANDWIDTH),
                            mimeType: `${u.MIMETYPE}; codecs="${t.attributes.CODECS}"`
                        }, t.attributes.HEIGHT ? {
                            width: parseInt(t.attributes.WIDTH),
                            height: parseInt(t.attributes.HEIGHT),
                            fps: parseInt(t.attributes.FRAMERATE)
                        } : {
                            audioSampleRate: t.attributes.AUDIOSAMPLINGRATE
                        }))
                    }
                }), s.onend = (() => {
                    r(a)
                });
                const l = o.exposedMiniget(new URL(e, f).toString(), t);
                l.setEncoding("utf8"), l.on("error", n), l.on("data", e => {
                    s.write(e)
                }), l.on("end", s.close.bind(s))
            }),
            M = async (e, t) => {
                e = new URL(e, f);
                const r = await o.exposedMiniget(e.toString(), t).text();
                let n = {};
                return r.split("\n").filter(e => /^https?:\/\//.test(e)).forEach(e => {
                    const t = parseInt(e.match(/\/itag\/(\d+)\//)[1]);
                    n[e] = {
                        itag: t,
                        url: e
                    }
                }), n
            };
        for (let e of ["getBasicInfo", "getInfo"]) {
            const t = r[e];
            r[e] = (async (n, i = {}) => {
                let a = await u.getVideoID(n);
                const o = [e, a, i.lang].join("-");
                return r.cache.getOrSet(o, () => t(a, i))
            })
        }
    }, {
        "./cache": 54,
        "./format-utils": 55,
        "./info-extras": 58,
        "./miniget": 61,
        "./sig": 63,
        "./url-utils": 64,
        "./utils": 65,
        querystring: 13,
        sax: 62
    }],
    60: [function(e, t, r) {
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.parseTimestamp = void 0;
        const n = /^\d+$/,
            i = /^(?:(?:(\d+):)?(\d{1,2}):)?(\d{1,2})(?:\.(\d{3}))?$/,
            a = {
                ms: 1,
                s: 1e3,
                m: 6e4,
                h: 36e5
            };
        r.parseTimestamp = (e => {
            if ("number" == typeof e) return e;
            if (n.test(e)) return +e;
            const t = i.exec(e);
            if (t) return +(t[1] || 0) * a.h + +(t[2] || 0) * a.m + +t[3] * a.s + +(t[4] || 0); {
                let t = 0;
                const r = /(-?\d+)(ms|s|m|h)/g;
                let n;
                for (; null !== (n = r.exec(e));) t += +n[1] * a[n[2]];
                return t
            }
        })
    }, {}],
    61: [function(e, t, r) {
        (function(r) {
            (function() {
                var n = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                const i = n(e("http")),
                    a = n(e("https")),
                    o = e("stream"),
                    s = {
                        "http:": i.default,
                        "https:": a.default
                    },
                    u = new Set([301, 302, 303, 307, 308]),
                    l = new Set([429, 503]),
                    c = ["connect", "continue", "information", "socket", "timeout", "upgrade"],
                    h = ["aborted"];

                function f(e, t = {}) {
                    var n;
                    const i = Object.assign({}, f.defaultOptions, t),
                        a = new o.PassThrough({
                            highWaterMark: i.highWaterMark
                        });
                    let d, p, m;
                    a.destroyed = a.aborted = !1;
                    let b, y, g, v = 0,
                        _ = 0,
                        w = 0,
                        T = !1,
                        E = 0,
                        R = 0;
                    if (null === (n = i.headers) || void 0 === n ? void 0 : n.Range) {
                        let e = /bytes=(\d+)-(\d+)?/.exec(`${i.headers.Range}`);
                        e && (E = parseInt(e[1], 10), g = parseInt(e[2], 10))
                    }
                    i.acceptEncoding && (i.headers = Object.assign({
                        "Accept-Encoding": Object.keys(i.acceptEncoding).join(", ")
                    }, i.headers));
                    const S = e => "HEAD" !== t.method && !(() => !T || R === y)() && w++ < i.maxReconnects && ((e => {
                            m = null, _ = 0;
                            let t = i.backoff.inc,
                                r = Math.min(t, i.backoff.max);
                            b = setTimeout(C, r), a.emit("reconnect", w, e)
                        })(e), !0),
                        A = e => {
                            if (a.destroyed) return !1;
                            if ((() => m && R > 0)()) return S(e.err);
                            if ((!e.err || "ENOTFOUND" === e.err.message) && _++ < i.maxRetries) {
                                let t = e.retryAfter || Math.min(_ * i.backoff.inc, i.backoff.max);
                                return b = setTimeout(C, t), a.emit("retry", _, e.err), !0
                            }
                            return !1
                        },
                        L = (e, t) => {
                            for (let r of t) e.on(r, a.emit.bind(a, r))
                        },
                        C = () => {
                            let t, r = {};
                            try {
                                let n = "string" == typeof e ? new URL(e) : e;
                                r = Object.assign({}, {
                                    host: n.host,
                                    hostname: n.hostname,
                                    path: n.pathname + n.search + n.hash,
                                    port: n.port,
                                    protocol: n.protocol
                                }), n.username && (r.auth = `${n.username}:${n.password}`), t = s[String(r.protocol)]
                            } catch (e) {}
                            if (!t) return void a.emit("error", new f.MinigetError(`Invalid URL: ${e}`));
                            if (Object.assign(r, i), T && R > 0) {
                                let e = R + E,
                                    t = g || "";
                                r.headers = Object.assign({}, r.headers, {
                                    Range: `bytes=${e}-${t}`
                                })
                            }
                            if (i.transform) {
                                try {
                                    r = i.transform(r)
                                } catch (e) {
                                    return void a.emit("error", e)
                                }
                                if ((!r || r.protocol) && !(t = s[String(null == r ? void 0 : r.protocol)])) return void a.emit("error", new f.MinigetError("Invalid URL object from `transform` function"))
                            }
                            const n = e => {
                                    a.destroyed || a.readableEnded || a._readableState.ended || (b(), A({
                                        err: e
                                    }) ? d.removeListener("close", o) : a.emit("error", e))
                                },
                                o = () => {
                                    b(), A({})
                                },
                                b = () => {
                                    d.removeListener("close", o), null == p || p.removeListener("data", _), null == m || m.removeListener("end", w)
                                },
                                _ = e => {
                                    R += e.length
                                },
                                w = () => {
                                    b(), S() || a.end()
                                };
                            (d = t.request(r, t => {
                                if (!a.destroyed)
                                    if (u.has(t.statusCode)) {
                                        if (v++ >= i.maxRedirects) a.emit("error", new f.MinigetError("Too many redirects"));
                                        else {
                                            if (!t.headers.location) {
                                                let e = new f.MinigetError("Redirect status code given with no location", t.statusCode);
                                                return a.emit("error", e), void b()
                                            }
                                            e = t.headers.location, setTimeout(C, 1e3 * parseInt(t.headers["retry-after"] || "0", 10)), a.emit("redirect", e)
                                        }
                                        b()
                                    } else if (l.has(t.statusCode)) {
                                    if (!A({
                                            retryAfter: parseInt(t.headers["retry-after"] || "0", 10)
                                        })) {
                                        let e = new f.MinigetError(`Status code: ${t.statusCode}`, t.statusCode);
                                        a.emit("error", e)
                                    }
                                    b()
                                } else {
                                    if (t.statusCode && (t.statusCode < 200 || t.statusCode >= 400)) {
                                        let e = new f.MinigetError(`Status code: ${t.statusCode}`, t.statusCode);
                                        return t.statusCode >= 500 ? n(e) : a.emit("error", e), void b()
                                    }
                                    if (m = t, i.acceptEncoding && t.headers["content-encoding"])
                                        for (let e of t.headers["content-encoding"].split(", ").reverse()) {
                                            let t = i.acceptEncoding[e];
                                            t && (m = m.pipe(t())).on("error", n)
                                        }
                                    y || (y = parseInt(`${t.headers["content-length"]}`, 10), T = "bytes" === t.headers["accept-ranges"] && y > 0 && i.maxReconnects > 0), t.on("data", _), m.on("end", w), m.pipe(a, {
                                        end: !T
                                    }), p = t, a.emit("response", t), t.on("error", n), L(t, h)
                                }
                            })).on("error", n), d.on("close", o), L(d, c), a.destroyed && x(...O), a.emit("request", d), d.end()
                        };
                    let O;
                    a.abort = (e => {
                        console.warn("`MinigetStream#abort()` has been deprecated in favor of `MinigetStream#destroy()`"), a.aborted = !0, a.emit("abort"), a.destroy(e)
                    });
                    const x = e => {
                        d.destroy(e), null == m || m.unpipe(a), null == m || m.destroy(), clearTimeout(b)
                    };
                    return a._destroy = ((...e) => {
                        a.destroyed = !0, d ? x(...e) : O = e
                    }), a.text = (() => new Promise((e, t) => {
                        let r = "";
                        a.setEncoding("utf8"), a.on("data", e => r += e), a.on("end", () => e(r)), a.on("error", t)
                    })), r.nextTick(C), a
                }
                f.MinigetError = class extends Error {
                    constructor(e, t) {
                        super(e), this.statusCode = t
                    }
                }, f.defaultOptions = {
                    maxRedirects: 10,
                    maxRetries: 2,
                    maxReconnects: 0,
                    backoff: {
                        inc: 100,
                        max: 1e4
                    }
                }, t.exports = f
            }).call(this)
        }).call(this, e("_process"))
    }, {
        _process: 9,
        http: 30,
        https: 6,
        stream: 15
    }],
    62: [function(e, t, r) {
        (function(t) {
            (function() {
                ! function(r) {
                    r.parser = function(e, t) {
                        return new a(e, t)
                    }, r.SAXParser = a, r.SAXStream = s, r.createStream = function(e, t) {
                        return new s(e, t)
                    }, r.MAX_BUFFER_LENGTH = 65536;
                    var n, i = ["comment", "sgmlDecl", "textNode", "tagName", "doctype", "procInstName", "procInstBody", "entity", "attribName", "attribValue", "cdata", "script"];

                    function a(e, t) {
                        if (!(this instanceof a)) return new a(e, t);
                        ! function(e) {
                            for (var t = 0, r = i.length; t < r; t++) e[i[t]] = ""
                        }(this), this.q = this.c = "", this.bufferCheckPosition = r.MAX_BUFFER_LENGTH, this.opt = t || {}, this.opt.lowercase = this.opt.lowercase || this.opt.lowercasetags, this.looseCase = this.opt.lowercase ? "toLowerCase" : "toUpperCase", this.tags = [], this.closed = this.closedRoot = this.sawRoot = !1, this.tag = this.error = null, this.strict = !!e, this.noscript = !(!e && !this.opt.noscript), this.state = S.BEGIN, this.strictEntities = this.opt.strictEntities, this.ENTITIES = this.strictEntities ? Object.create(r.XML_ENTITIES) : Object.create(r.ENTITIES), this.attribList = [], this.opt.xmlns && (this.ns = Object.create(f)), this.trackPosition = !1 !== this.opt.position, this.trackPosition && (this.position = this.line = this.column = 0), L(this, "onready")
                    }
                    r.EVENTS = ["text", "processinginstruction", "sgmldeclaration", "doctype", "comment", "opentagstart", "attribute", "opentag", "closetag", "opencdata", "cdata", "closecdata", "error", "end", "ready", "script", "opennamespace", "closenamespace"], Object.create || (Object.create = function(e) {
                        function t() {}
                        return t.prototype = e, new t
                    }), Object.keys || (Object.keys = function(e) {
                        var t = [];
                        for (var r in e) e.hasOwnProperty(r) && t.push(r);
                        return t
                    }), a.prototype = {
                        end: function() {
                            I(this)
                        },
                        write: function(e) {
                            if (this.error) throw this.error;
                            if (this.closed) return N(this, "Cannot write after close. Assign an onready handler.");
                            if (null === e) return I(this);
                            "object" == typeof e && (e = e.toString());
                            var t = 0,
                                n = "";
                            for (; n = F(e, t++), this.c = n, n;) switch (this.trackPosition && (this.position++, "\n" === n ? (this.line++, this.column = 0) : this.column++), this.state) {
                                case S.BEGIN:
                                    if (this.state = S.BEGIN_WHITESPACE, "\ufeff" === n) continue;
                                    q(this, n);
                                    continue;
                                case S.BEGIN_WHITESPACE:
                                    q(this, n);
                                    continue;
                                case S.TEXT:
                                    if (this.sawRoot && !this.closedRoot) {
                                        for (var a = t - 1; n && "<" !== n && "&" !== n;)(n = F(e, t++)) && this.trackPosition && (this.position++, "\n" === n ? (this.line++, this.column = 0) : this.column++);
                                        this.textNode += e.substring(a, t - 1)
                                    }
                                    "<" !== n || this.sawRoot && this.closedRoot && !this.strict ? (y(n) || this.sawRoot && !this.closedRoot || D(this, "Text data outside of root node."), "&" === n ? this.state = S.TEXT_ENTITY : this.textNode += n) : (this.state = S.OPEN_WAKA, this.startTagPosition = this.position);
                                    continue;
                                case S.SCRIPT:
                                    "<" === n ? this.state = S.SCRIPT_ENDING : this.script += n;
                                    continue;
                                case S.SCRIPT_ENDING:
                                    "/" === n ? this.state = S.CLOSE_TAG : (this.script += "<" + n, this.state = S.SCRIPT);
                                    continue;
                                case S.OPEN_WAKA:
                                    if ("!" === n) this.state = S.SGML_DECL, this.sgmlDecl = "";
                                    else if (y(n));
                                    else if (_(d, n)) this.state = S.OPEN_TAG, this.tagName = n;
                                    else if ("/" === n) this.state = S.CLOSE_TAG, this.tagName = "";
                                    else if ("?" === n) this.state = S.PROC_INST, this.procInstName = this.procInstBody = "";
                                    else {
                                        if (D(this, "Unencoded <"), this.startTagPosition + 1 < this.position) {
                                            var o = this.position - this.startTagPosition;
                                            n = new Array(o).join(" ") + n
                                        }
                                        this.textNode += "<" + n, this.state = S.TEXT
                                    }
                                    continue;
                                case S.SGML_DECL:
                                    (this.sgmlDecl + n).toUpperCase() === u ? (C(this, "onopencdata"), this.state = S.CDATA, this.sgmlDecl = "", this.cdata = "") : this.sgmlDecl + n === "--" ? (this.state = S.COMMENT, this.comment = "", this.sgmlDecl = "") : (this.sgmlDecl + n).toUpperCase() === l ? (this.state = S.DOCTYPE, (this.doctype || this.sawRoot) && D(this, "Inappropriately located doctype declaration"), this.doctype = "", this.sgmlDecl = "") : ">" === n ? (C(this, "onsgmldeclaration", this.sgmlDecl), this.sgmlDecl = "", this.state = S.TEXT) : g(n) ? (this.state = S.SGML_DECL_QUOTED, this.sgmlDecl += n) : this.sgmlDecl += n;
                                    continue;
                                case S.SGML_DECL_QUOTED:
                                    n === this.q && (this.state = S.SGML_DECL, this.q = ""), this.sgmlDecl += n;
                                    continue;
                                case S.DOCTYPE:
                                    ">" === n ? (this.state = S.TEXT, C(this, "ondoctype", this.doctype), this.doctype = !0) : (this.doctype += n, "[" === n ? this.state = S.DOCTYPE_DTD : g(n) && (this.state = S.DOCTYPE_QUOTED, this.q = n));
                                    continue;
                                case S.DOCTYPE_QUOTED:
                                    this.doctype += n, n === this.q && (this.q = "", this.state = S.DOCTYPE);
                                    continue;
                                case S.DOCTYPE_DTD:
                                    this.doctype += n, "]" === n ? this.state = S.DOCTYPE : g(n) && (this.state = S.DOCTYPE_DTD_QUOTED, this.q = n);
                                    continue;
                                case S.DOCTYPE_DTD_QUOTED:
                                    this.doctype += n, n === this.q && (this.state = S.DOCTYPE_DTD, this.q = "");
                                    continue;
                                case S.COMMENT:
                                    "-" === n ? this.state = S.COMMENT_ENDING : this.comment += n;
                                    continue;
                                case S.COMMENT_ENDING:
                                    "-" === n ? (this.state = S.COMMENT_ENDED, this.comment = x(this.opt, this.comment), this.comment && C(this, "oncomment", this.comment), this.comment = "") : (this.comment += "-" + n, this.state = S.COMMENT);
                                    continue;
                                case S.COMMENT_ENDED:
                                    ">" !== n ? (D(this, "Malformed comment"), this.comment += "--" + n, this.state = S.COMMENT) : this.state = S.TEXT;
                                    continue;
                                case S.CDATA:
                                    "]" === n ? this.state = S.CDATA_ENDING : this.cdata += n;
                                    continue;
                                case S.CDATA_ENDING:
                                    "]" === n ? this.state = S.CDATA_ENDING_2 : (this.cdata += "]" + n, this.state = S.CDATA);
                                    continue;
                                case S.CDATA_ENDING_2:
                                    ">" === n ? (this.cdata && C(this, "oncdata", this.cdata), C(this, "onclosecdata"), this.cdata = "", this.state = S.TEXT) : "]" === n ? this.cdata += "]" : (this.cdata += "]]" + n, this.state = S.CDATA);
                                    continue;
                                case S.PROC_INST:
                                    "?" === n ? this.state = S.PROC_INST_ENDING : y(n) ? this.state = S.PROC_INST_BODY : this.procInstName += n;
                                    continue;
                                case S.PROC_INST_BODY:
                                    if (!this.procInstBody && y(n)) continue;
                                    "?" === n ? this.state = S.PROC_INST_ENDING : this.procInstBody += n;
                                    continue;
                                case S.PROC_INST_ENDING:
                                    ">" === n ? (C(this, "onprocessinginstruction", {
                                        name: this.procInstName,
                                        body: this.procInstBody
                                    }), this.procInstName = this.procInstBody = "", this.state = S.TEXT) : (this.procInstBody += "?" + n, this.state = S.PROC_INST_BODY);
                                    continue;
                                case S.OPEN_TAG:
                                    _(p, n) ? this.tagName += n : (M(this), ">" === n ? k(this) : "/" === n ? this.state = S.OPEN_TAG_SLASH : (y(n) || D(this, "Invalid character in tag name"), this.state = S.ATTRIB));
                                    continue;
                                case S.OPEN_TAG_SLASH:
                                    ">" === n ? (k(this, !0), U(this)) : (D(this, "Forward-slash in opening tag not followed by >"), this.state = S.ATTRIB);
                                    continue;
                                case S.ATTRIB:
                                    if (y(n)) continue;
                                    ">" === n ? k(this) : "/" === n ? this.state = S.OPEN_TAG_SLASH : _(d, n) ? (this.attribName = n, this.attribValue = "", this.state = S.ATTRIB_NAME) : D(this, "Invalid attribute name");
                                    continue;
                                case S.ATTRIB_NAME:
                                    "=" === n ? this.state = S.ATTRIB_VALUE : ">" === n ? (D(this, "Attribute without value"), this.attribValue = this.attribName, P(this), k(this)) : y(n) ? this.state = S.ATTRIB_NAME_SAW_WHITE : _(p, n) ? this.attribName += n : D(this, "Invalid attribute name");
                                    continue;
                                case S.ATTRIB_NAME_SAW_WHITE:
                                    if ("=" === n) this.state = S.ATTRIB_VALUE;
                                    else {
                                        if (y(n)) continue;
                                        D(this, "Attribute without value"), this.tag.attributes[this.attribName] = "", this.attribValue = "", C(this, "onattribute", {
                                            name: this.attribName,
                                            value: ""
                                        }), this.attribName = "", ">" === n ? k(this) : _(d, n) ? (this.attribName = n, this.state = S.ATTRIB_NAME) : (D(this, "Invalid attribute name"), this.state = S.ATTRIB)
                                    }
                                    continue;
                                case S.ATTRIB_VALUE:
                                    if (y(n)) continue;
                                    g(n) ? (this.q = n, this.state = S.ATTRIB_VALUE_QUOTED) : (D(this, "Unquoted attribute value"), this.state = S.ATTRIB_VALUE_UNQUOTED, this.attribValue = n);
                                    continue;
                                case S.ATTRIB_VALUE_QUOTED:
                                    if (n !== this.q) {
                                        "&" === n ? this.state = S.ATTRIB_VALUE_ENTITY_Q : this.attribValue += n;
                                        continue
                                    }
                                    P(this), this.q = "", this.state = S.ATTRIB_VALUE_CLOSED;
                                    continue;
                                case S.ATTRIB_VALUE_CLOSED:
                                    y(n) ? this.state = S.ATTRIB : ">" === n ? k(this) : "/" === n ? this.state = S.OPEN_TAG_SLASH : _(d, n) ? (D(this, "No whitespace between attributes"), this.attribName = n, this.attribValue = "", this.state = S.ATTRIB_NAME) : D(this, "Invalid attribute name");
                                    continue;
                                case S.ATTRIB_VALUE_UNQUOTED:
                                    if (!v(n)) {
                                        "&" === n ? this.state = S.ATTRIB_VALUE_ENTITY_U : this.attribValue += n;
                                        continue
                                    }
                                    P(this), ">" === n ? k(this) : this.state = S.ATTRIB;
                                    continue;
                                case S.CLOSE_TAG:
                                    if (this.tagName) ">" === n ? U(this) : _(p, n) ? this.tagName += n : this.script ? (this.script += "</" + this.tagName, this.tagName = "", this.state = S.SCRIPT) : (y(n) || D(this, "Invalid tagname in closing tag"), this.state = S.CLOSE_TAG_SAW_WHITE);
                                    else {
                                        if (y(n)) continue;
                                        w(d, n) ? this.script ? (this.script += "</" + n, this.state = S.SCRIPT) : D(this, "Invalid tagname in closing tag.") : this.tagName = n
                                    }
                                    continue;
                                case S.CLOSE_TAG_SAW_WHITE:
                                    if (y(n)) continue;
                                    ">" === n ? U(this) : D(this, "Invalid characters in closing tag");
                                    continue;
                                case S.TEXT_ENTITY:
                                case S.ATTRIB_VALUE_ENTITY_Q:
                                case S.ATTRIB_VALUE_ENTITY_U:
                                    var s, c;
                                    switch (this.state) {
                                        case S.TEXT_ENTITY:
                                            s = S.TEXT, c = "textNode";
                                            break;
                                        case S.ATTRIB_VALUE_ENTITY_Q:
                                            s = S.ATTRIB_VALUE_QUOTED, c = "attribValue";
                                            break;
                                        case S.ATTRIB_VALUE_ENTITY_U:
                                            s = S.ATTRIB_VALUE_UNQUOTED, c = "attribValue"
                                    }
                                    ";" === n ? (this[c] += j(this), this.entity = "", this.state = s) : _(this.entity.length ? b : m, n) ? this.entity += n : (D(this, "Invalid character in entity name"), this[c] += "&" + this.entity + n, this.entity = "", this.state = s);
                                    continue;
                                default:
                                    throw new Error(this, "Unknown state: " + this.state)
                            }
                            this.position >= this.bufferCheckPosition && function(e) {
                                for (var t = Math.max(r.MAX_BUFFER_LENGTH, 10), n = 0, a = 0, o = i.length; a < o; a++) {
                                    var s = e[i[a]].length;
                                    if (s > t) switch (i[a]) {
                                        case "textNode":
                                            O(e);
                                            break;
                                        case "cdata":
                                            C(e, "oncdata", e.cdata), e.cdata = "";
                                            break;
                                        case "script":
                                            C(e, "onscript", e.script), e.script = "";
                                            break;
                                        default:
                                            N(e, "Max buffer length exceeded: " + i[a])
                                    }
                                    n = Math.max(n, s)
                                }
                                var u = r.MAX_BUFFER_LENGTH - n;
                                e.bufferCheckPosition = u + e.position
                            }(this);
                            return this
                        },
                        resume: function() {
                            return this.error = null, this
                        },
                        close: function() {
                            return this.write(null)
                        },
                        flush: function() {
                            var e;
                            O(e = this), "" !== e.cdata && (C(e, "oncdata", e.cdata), e.cdata = ""), "" !== e.script && (C(e, "onscript", e.script), e.script = "")
                        }
                    };
                    try {
                        n = e("stream").Stream
                    } catch (e) {
                        n = function() {}
                    }
                    var o = r.EVENTS.filter(function(e) {
                        return "error" !== e && "end" !== e
                    });

                    function s(e, t) {
                        if (!(this instanceof s)) return new s(e, t);
                        n.apply(this), this._parser = new a(e, t), this.writable = !0, this.readable = !0;
                        var r = this;
                        this._parser.onend = function() {
                            r.emit("end")
                        }, this._parser.onerror = function(e) {
                            r.emit("error", e), r._parser.error = null
                        }, this._decoder = null, o.forEach(function(e) {
                            Object.defineProperty(r, "on" + e, {
                                get: function() {
                                    return r._parser["on" + e]
                                },
                                set: function(t) {
                                    if (!t) return r.removeAllListeners(e), r._parser["on" + e] = t, t;
                                    r.on(e, t)
                                },
                                enumerable: !0,
                                configurable: !1
                            })
                        })
                    }
                    s.prototype = Object.create(n.prototype, {
                        constructor: {
                            value: s
                        }
                    }), s.prototype.write = function(r) {
                        if ("function" == typeof t && "function" == typeof t.isBuffer && t.isBuffer(r)) {
                            if (!this._decoder) {
                                var n = e("string_decoder").StringDecoder;
                                this._decoder = new n("utf8")
                            }
                            r = this._decoder.write(r)
                        }
                        return this._parser.write(r.toString()), this.emit("data", r), !0
                    }, s.prototype.end = function(e) {
                        return e && e.length && this.write(e), this._parser.end(), !0
                    }, s.prototype.on = function(e, t) {
                        var r = this;
                        return r._parser["on" + e] || -1 === o.indexOf(e) || (r._parser["on" + e] = function() {
                            var t = 1 === arguments.length ? [arguments[0]] : Array.apply(null, arguments);
                            t.splice(0, 0, e), r.emit.apply(r, t)
                        }), n.prototype.on.call(r, e, t)
                    };
                    var u = "[CDATA[",
                        l = "DOCTYPE",
                        c = "http://www.w3.org/XML/1998/namespace",
                        h = "http://www.w3.org/2000/xmlns/",
                        f = {
                            xml: c,
                            xmlns: h
                        },
                        d = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
                        p = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,
                        m = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
                        b = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;

                    function y(e) {
                        return " " === e || "\n" === e || "\r" === e || "\t" === e
                    }

                    function g(e) {
                        return '"' === e || "'" === e
                    }

                    function v(e) {
                        return ">" === e || y(e)
                    }

                    function _(e, t) {
                        return e.test(t)
                    }

                    function w(e, t) {
                        return !_(e, t)
                    }
                    var T, E, R, S = 0;
                    for (var A in r.STATE = {
                            BEGIN: S++,
                            BEGIN_WHITESPACE: S++,
                            TEXT: S++,
                            TEXT_ENTITY: S++,
                            OPEN_WAKA: S++,
                            SGML_DECL: S++,
                            SGML_DECL_QUOTED: S++,
                            DOCTYPE: S++,
                            DOCTYPE_QUOTED: S++,
                            DOCTYPE_DTD: S++,
                            DOCTYPE_DTD_QUOTED: S++,
                            COMMENT_STARTING: S++,
                            COMMENT: S++,
                            COMMENT_ENDING: S++,
                            COMMENT_ENDED: S++,
                            CDATA: S++,
                            CDATA_ENDING: S++,
                            CDATA_ENDING_2: S++,
                            PROC_INST: S++,
                            PROC_INST_BODY: S++,
                            PROC_INST_ENDING: S++,
                            OPEN_TAG: S++,
                            OPEN_TAG_SLASH: S++,
                            ATTRIB: S++,
                            ATTRIB_NAME: S++,
                            ATTRIB_NAME_SAW_WHITE: S++,
                            ATTRIB_VALUE: S++,
                            ATTRIB_VALUE_QUOTED: S++,
                            ATTRIB_VALUE_CLOSED: S++,
                            ATTRIB_VALUE_UNQUOTED: S++,
                            ATTRIB_VALUE_ENTITY_Q: S++,
                            ATTRIB_VALUE_ENTITY_U: S++,
                            CLOSE_TAG: S++,
                            CLOSE_TAG_SAW_WHITE: S++,
                            SCRIPT: S++,
                            SCRIPT_ENDING: S++
                        }, r.XML_ENTITIES = {
                            amp: "&",
                            gt: ">",
                            lt: "<",
                            quot: '"',
                            apos: "'"
                        }, r.ENTITIES = {
                            amp: "&",
                            gt: ">",
                            lt: "<",
                            quot: '"',
                            apos: "'",
                            AElig: 198,
                            Aacute: 193,
                            Acirc: 194,
                            Agrave: 192,
                            Aring: 197,
                            Atilde: 195,
                            Auml: 196,
                            Ccedil: 199,
                            ETH: 208,
                            Eacute: 201,
                            Ecirc: 202,
                            Egrave: 200,
                            Euml: 203,
                            Iacute: 205,
                            Icirc: 206,
                            Igrave: 204,
                            Iuml: 207,
                            Ntilde: 209,
                            Oacute: 211,
                            Ocirc: 212,
                            Ograve: 210,
                            Oslash: 216,
                            Otilde: 213,
                            Ouml: 214,
                            THORN: 222,
                            Uacute: 218,
                            Ucirc: 219,
                            Ugrave: 217,
                            Uuml: 220,
                            Yacute: 221,
                            aacute: 225,
                            acirc: 226,
                            aelig: 230,
                            agrave: 224,
                            aring: 229,
                            atilde: 227,
                            auml: 228,
                            ccedil: 231,
                            eacute: 233,
                            ecirc: 234,
                            egrave: 232,
                            eth: 240,
                            euml: 235,
                            iacute: 237,
                            icirc: 238,
                            igrave: 236,
                            iuml: 239,
                            ntilde: 241,
                            oacute: 243,
                            ocirc: 244,
                            ograve: 242,
                            oslash: 248,
                            otilde: 245,
                            ouml: 246,
                            szlig: 223,
                            thorn: 254,
                            uacute: 250,
                            ucirc: 251,
                            ugrave: 249,
                            uuml: 252,
                            yacute: 253,
                            yuml: 255,
                            copy: 169,
                            reg: 174,
                            nbsp: 160,
                            iexcl: 161,
                            cent: 162,
                            pound: 163,
                            curren: 164,
                            yen: 165,
                            brvbar: 166,
                            sect: 167,
                            uml: 168,
                            ordf: 170,
                            laquo: 171,
                            not: 172,
                            shy: 173,
                            macr: 175,
                            deg: 176,
                            plusmn: 177,
                            sup1: 185,
                            sup2: 178,
                            sup3: 179,
                            acute: 180,
                            micro: 181,
                            para: 182,
                            middot: 183,
                            cedil: 184,
                            ordm: 186,
                            raquo: 187,
                            frac14: 188,
                            frac12: 189,
                            frac34: 190,
                            iquest: 191,
                            times: 215,
                            divide: 247,
                            OElig: 338,
                            oelig: 339,
                            Scaron: 352,
                            scaron: 353,
                            Yuml: 376,
                            fnof: 402,
                            circ: 710,
                            tilde: 732,
                            Alpha: 913,
                            Beta: 914,
                            Gamma: 915,
                            Delta: 916,
                            Epsilon: 917,
                            Zeta: 918,
                            Eta: 919,
                            Theta: 920,
                            Iota: 921,
                            Kappa: 922,
                            Lambda: 923,
                            Mu: 924,
                            Nu: 925,
                            Xi: 926,
                            Omicron: 927,
                            Pi: 928,
                            Rho: 929,
                            Sigma: 931,
                            Tau: 932,
                            Upsilon: 933,
                            Phi: 934,
                            Chi: 935,
                            Psi: 936,
                            Omega: 937,
                            alpha: 945,
                            beta: 946,
                            gamma: 947,
                            delta: 948,
                            epsilon: 949,
                            zeta: 950,
                            eta: 951,
                            theta: 952,
                            iota: 953,
                            kappa: 954,
                            lambda: 955,
                            mu: 956,
                            nu: 957,
                            xi: 958,
                            omicron: 959,
                            pi: 960,
                            rho: 961,
                            sigmaf: 962,
                            sigma: 963,
                            tau: 964,
                            upsilon: 965,
                            phi: 966,
                            chi: 967,
                            psi: 968,
                            omega: 969,
                            thetasym: 977,
                            upsih: 978,
                            piv: 982,
                            ensp: 8194,
                            emsp: 8195,
                            thinsp: 8201,
                            zwnj: 8204,
                            zwj: 8205,
                            lrm: 8206,
                            rlm: 8207,
                            ndash: 8211,
                            mdash: 8212,
                            lsquo: 8216,
                            rsquo: 8217,
                            sbquo: 8218,
                            ldquo: 8220,
                            rdquo: 8221,
                            bdquo: 8222,
                            dagger: 8224,
                            Dagger: 8225,
                            bull: 8226,
                            hellip: 8230,
                            permil: 8240,
                            prime: 8242,
                            Prime: 8243,
                            lsaquo: 8249,
                            rsaquo: 8250,
                            oline: 8254,
                            frasl: 8260,
                            euro: 8364,
                            image: 8465,
                            weierp: 8472,
                            real: 8476,
                            trade: 8482,
                            alefsym: 8501,
                            larr: 8592,
                            uarr: 8593,
                            rarr: 8594,
                            darr: 8595,
                            harr: 8596,
                            crarr: 8629,
                            lArr: 8656,
                            uArr: 8657,
                            rArr: 8658,
                            dArr: 8659,
                            hArr: 8660,
                            forall: 8704,
                            part: 8706,
                            exist: 8707,
                            empty: 8709,
                            nabla: 8711,
                            isin: 8712,
                            notin: 8713,
                            ni: 8715,
                            prod: 8719,
                            sum: 8721,
                            minus: 8722,
                            lowast: 8727,
                            radic: 8730,
                            prop: 8733,
                            infin: 8734,
                            ang: 8736,
                            and: 8743,
                            or: 8744,
                            cap: 8745,
                            cup: 8746,
                            int: 8747,
                            there4: 8756,
                            sim: 8764,
                            cong: 8773,
                            asymp: 8776,
                            ne: 8800,
                            equiv: 8801,
                            le: 8804,
                            ge: 8805,
                            sub: 8834,
                            sup: 8835,
                            nsub: 8836,
                            sube: 8838,
                            supe: 8839,
                            oplus: 8853,
                            otimes: 8855,
                            perp: 8869,
                            sdot: 8901,
                            lceil: 8968,
                            rceil: 8969,
                            lfloor: 8970,
                            rfloor: 8971,
                            lang: 9001,
                            rang: 9002,
                            loz: 9674,
                            spades: 9824,
                            clubs: 9827,
                            hearts: 9829,
                            diams: 9830
                        }, Object.keys(r.ENTITIES).forEach(function(e) {
                            var t = r.ENTITIES[e],
                                n = "number" == typeof t ? String.fromCharCode(t) : t;
                            r.ENTITIES[e] = n
                        }), r.STATE) r.STATE[r.STATE[A]] = A;

                    function L(e, t, r) {
                        e[t] && e[t](r)
                    }

                    function C(e, t, r) {
                        e.textNode && O(e), L(e, t, r)
                    }

                    function O(e) {
                        e.textNode = x(e.opt, e.textNode), e.textNode && L(e, "ontext", e.textNode), e.textNode = ""
                    }

                    function x(e, t) {
                        return e.trim && (t = t.trim()), e.normalize && (t = t.replace(/\s+/g, " ")), t
                    }

                    function N(e, t) {
                        return O(e), e.trackPosition && (t += "\nLine: " + e.line + "\nColumn: " + e.column + "\nChar: " + e.c), t = new Error(t), e.error = t, L(e, "onerror", t), e
                    }

                    function I(e) {
                        return e.sawRoot && !e.closedRoot && D(e, "Unclosed root tag"), e.state !== S.BEGIN && e.state !== S.BEGIN_WHITESPACE && e.state !== S.TEXT && N(e, "Unexpected end"), O(e), e.c = "", e.closed = !0, L(e, "onend"), a.call(e, e.strict, e.opt), e
                    }

                    function D(e, t) {
                        if ("object" != typeof e || !(e instanceof a)) throw new Error("bad call to strictFail");
                        e.strict && N(e, t)
                    }

                    function M(e) {
                        e.strict || (e.tagName = e.tagName[e.looseCase]());
                        var t = e.tags[e.tags.length - 1] || e,
                            r = e.tag = {
                                name: e.tagName,
                                attributes: {}
                            };
                        e.opt.xmlns && (r.ns = t.ns), e.attribList.length = 0, C(e, "onopentagstart", r)
                    }

                    function B(e, t) {
                        var r = e.indexOf(":") < 0 ? ["", e] : e.split(":"),
                            n = r[0],
                            i = r[1];
                        return t && "xmlns" === e && (n = "xmlns", i = ""), {
                            prefix: n,
                            local: i
                        }
                    }

                    function P(e) {
                        if (e.strict || (e.attribName = e.attribName[e.looseCase]()), -1 !== e.attribList.indexOf(e.attribName) || e.tag.attributes.hasOwnProperty(e.attribName)) e.attribName = e.attribValue = "";
                        else {
                            if (e.opt.xmlns) {
                                var t = B(e.attribName, !0),
                                    r = t.prefix,
                                    n = t.local;
                                if ("xmlns" === r)
                                    if ("xml" === n && e.attribValue !== c) D(e, "xml: prefix must be bound to " + c + "\nActual: " + e.attribValue);
                                    else if ("xmlns" === n && e.attribValue !== h) D(e, "xmlns: prefix must be bound to " + h + "\nActual: " + e.attribValue);
                                else {
                                    var i = e.tag,
                                        a = e.tags[e.tags.length - 1] || e;
                                    i.ns === a.ns && (i.ns = Object.create(a.ns)), i.ns[n] = e.attribValue
                                }
                                e.attribList.push([e.attribName, e.attribValue])
                            } else e.tag.attributes[e.attribName] = e.attribValue, C(e, "onattribute", {
                                name: e.attribName,
                                value: e.attribValue
                            });
                            e.attribName = e.attribValue = ""
                        }
                    }

                    function k(e, t) {
                        if (e.opt.xmlns) {
                            var r = e.tag,
                                n = B(e.tagName);
                            r.prefix = n.prefix, r.local = n.local, r.uri = r.ns[n.prefix] || "", r.prefix && !r.uri && (D(e, "Unbound namespace prefix: " + JSON.stringify(e.tagName)), r.uri = n.prefix);
                            var i = e.tags[e.tags.length - 1] || e;
                            r.ns && i.ns !== r.ns && Object.keys(r.ns).forEach(function(t) {
                                C(e, "onopennamespace", {
                                    prefix: t,
                                    uri: r.ns[t]
                                })
                            });
                            for (var a = 0, o = e.attribList.length; a < o; a++) {
                                var s = e.attribList[a],
                                    u = s[0],
                                    l = s[1],
                                    c = B(u, !0),
                                    h = c.prefix,
                                    f = c.local,
                                    d = "" === h ? "" : r.ns[h] || "",
                                    p = {
                                        name: u,
                                        value: l,
                                        prefix: h,
                                        local: f,
                                        uri: d
                                    };
                                h && "xmlns" !== h && !d && (D(e, "Unbound namespace prefix: " + JSON.stringify(h)), p.uri = h), e.tag.attributes[u] = p, C(e, "onattribute", p)
                            }
                            e.attribList.length = 0
                        }
                        e.tag.isSelfClosing = !!t, e.sawRoot = !0, e.tags.push(e.tag), C(e, "onopentag", e.tag), t || (e.noscript || "script" !== e.tagName.toLowerCase() ? e.state = S.TEXT : e.state = S.SCRIPT, e.tag = null, e.tagName = ""), e.attribName = e.attribValue = "", e.attribList.length = 0
                    }

                    function U(e) {
                        if (!e.tagName) return D(e, "Weird empty close tag."), e.textNode += "</>", void(e.state = S.TEXT);
                        if (e.script) {
                            if ("script" !== e.tagName) return e.script += "</" + e.tagName + ">", e.tagName = "", void(e.state = S.SCRIPT);
                            C(e, "onscript", e.script), e.script = ""
                        }
                        var t = e.tags.length,
                            r = e.tagName;
                        e.strict || (r = r[e.looseCase]());
                        for (var n = r; t--;) {
                            if (e.tags[t].name === n) break;
                            D(e, "Unexpected close tag")
                        }
                        if (t < 0) return D(e, "Unmatched closing tag: " + e.tagName), e.textNode += "</" + e.tagName + ">", void(e.state = S.TEXT);
                        e.tagName = r;
                        for (var i = e.tags.length; i-- > t;) {
                            var a = e.tag = e.tags.pop();
                            e.tagName = e.tag.name, C(e, "onclosetag", e.tagName);
                            var o = {};
                            for (var s in a.ns) o[s] = a.ns[s];
                            var u = e.tags[e.tags.length - 1] || e;
                            e.opt.xmlns && a.ns !== u.ns && Object.keys(a.ns).forEach(function(t) {
                                var r = a.ns[t];
                                C(e, "onclosenamespace", {
                                    prefix: t,
                                    uri: r
                                })
                            })
                        }
                        0 === t && (e.closedRoot = !0), e.tagName = e.attribValue = e.attribName = "", e.attribList.length = 0, e.state = S.TEXT
                    }

                    function j(e) {
                        var t, r = e.entity,
                            n = r.toLowerCase(),
                            i = "";
                        return e.ENTITIES[r] ? e.ENTITIES[r] : e.ENTITIES[n] ? e.ENTITIES[n] : ("#" === (r = n).charAt(0) && ("x" === r.charAt(1) ? (r = r.slice(2), i = (t = parseInt(r, 16)).toString(16)) : (r = r.slice(1), i = (t = parseInt(r, 10)).toString(10))), r = r.replace(/^0+/, ""), isNaN(t) || i.toLowerCase() !== r ? (D(e, "Invalid character entity"), "&" + e.entity + ";") : String.fromCodePoint(t))
                    }

                    function q(e, t) {
                        "<" === t ? (e.state = S.OPEN_WAKA, e.startTagPosition = e.position) : y(t) || (D(e, "Non-whitespace before first tag."), e.textNode = t, e.state = S.TEXT)
                    }

                    function F(e, t) {
                        var r = "";
                        return t < e.length && (r = e.charAt(t)), r
                    }
                    S = r.STATE, String.fromCodePoint || (T = String.fromCharCode, E = Math.floor, R = function() {
                        var e, t, r = [],
                            n = -1,
                            i = arguments.length;
                        if (!i) return "";
                        for (var a = ""; ++n < i;) {
                            var o = Number(arguments[n]);
                            if (!isFinite(o) || o < 0 || o > 1114111 || E(o) !== o) throw RangeError("Invalid code point: " + o);
                            o <= 65535 ? r.push(o) : (e = 55296 + ((o -= 65536) >> 10), t = o % 1024 + 56320, r.push(e, t)), (n + 1 === i || r.length > 16384) && (a += T.apply(null, r), r.length = 0)
                        }
                        return a
                    }, Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
                        value: R,
                        configurable: !0,
                        writable: !0
                    }) : String.fromCodePoint = R)
                }(void 0 === r ? this.sax = {} : r)
            }).call(this)
        }).call(this, e("buffer").Buffer)
    }, {
        buffer: 3,
        stream: 15,
        string_decoder: 49
    }],
    63: [function(e, t, r) {
        const n = e("querystring"),
            i = e("./cache"),
            a = e("./utils");
        r.cache = new i, r.getTokens = ((e, t) => r.cache.getOrSet(e, async () => {
            const n = await a.exposedMiniget(e, t).text(),
                i = r.extractActions(n);
            if (!i || !i.length) throw Error("Could not extract signature deciphering actions");
            return r.cache.set(e, i), i
        })), r.decipher = ((e, t) => {
            t = t.split("");
            for (let r = 0, n = e.length; r < n; r++) {
                let n, i = e[r];
                switch (i[0]) {
                    case "r":
                        t = t.reverse();
                        break;
                    case "w":
                        n = ~~i.slice(1);
                        const e = t[0];
                        t[0] = t[n % t.length], t[position] = e;
                        break;
                    case "s":
                        n = ~~i.slice(1), t = t.slice(n);
                        break;
                    case "p":
                        n = ~~i.slice(1), t.splice(0, n)
                }
            }
            return t.join("")
        });
        const o = "[a-zA-Z_\\$][a-zA-Z_0-9]*",
            s = "(?:'[^'\\\\]*(:?\\\\[\\s\\S][^'\\\\]*)*'|\"[^\"\\\\]*(:?\\\\[\\s\\S][^\"\\\\]*)*\")",
            u = `(?:${o}|${s})`,
            l = `(?:\\.${o}|\\[${s}\\])`,
            c = ":function\\(a\\)\\{(?:return )?a\\.reverse\\(\\)\\}",
            h = ":function\\(a,b\\)\\{return a\\.slice\\(b\\)\\}",
            f = ":function\\(a,b\\)\\{a\\.splice\\(0,b\\)\\}",
            d = ":function\\(a,b\\)\\{var c=a\\[0\\];a\\[0\\]=a\\[b(?:%a\\.length)?\\];a\\[b(?:%a\\.length)?\\]=c(?:;return a)?\\}",
            p = new RegExp(`var (${o})=\\{((?:(?:${u}${c}|${u}${h}|${u}${f}|${u}${d}),?\\r?\\n?)+)\\};`),
            m = new RegExp(`${`function(?: ${o})?\\(a\\)\\{`+"a=a\\.split\\((?:''|\"\")\\);\\s*"+`((?:(?:a=)?${o}`}${l}\\(a,\\d+\\);)+)` + "return a\\.join\\((?:''|\"\")\\)\\}"),
            b = new RegExp(`(?:^|,)(${u})${c}`, "m"),
            y = new RegExp(`(?:^|,)(${u})${h}`, "m"),
            g = new RegExp(`(?:^|,)(${u})${f}`, "m"),
            v = new RegExp(`(?:^|,)(${u})${d}`, "m");
        r.extractActions = (e => {
            const t = p.exec(e),
                r = m.exec(e);
            if (!t || !r) return null;
            const n = t[1].replace(/\$/g, "\\$"),
                i = t[2].replace(/\$/g, "\\$"),
                a = r[1].replace(/\$/g, "\\$");
            let o = b.exec(i);
            const s = o && o[1].replace(/\$/g, "\\$").replace(/\$|^'|^"|'$|"$/g, ""),
                u = (o = y.exec(i)) && o[1].replace(/\$/g, "\\$").replace(/\$|^'|^"|'$|"$/g, ""),
                l = (o = g.exec(i)) && o[1].replace(/\$/g, "\\$").replace(/\$|^'|^"|'$|"$/g, ""),
                c = (o = v.exec(i)) && o[1].replace(/\$/g, "\\$").replace(/\$|^'|^"|'$|"$/g, ""),
                h = `(${[s,u,l,c].join("|")})`,
                f = new RegExp(`(?:a=)?${n}(?:\\.${h}|\\['${h}'\\]|\\["${h}"\\])` + "\\(a,(\\d+)\\)", "g"),
                d = [];
            for (; null !== (o = f.exec(a));) {
                switch (o[1] || o[2] || o[3]) {
                    case c:
                        d.push(`w${o[4]}`);
                        break;
                    case s:
                        d.push("r");
                        break;
                    case u:
                        d.push(`s${o[4]}`);
                        break;
                    case l:
                        d.push(`p${o[4]}`)
                }
            }
            return d
        }), r.setDownloadURL = ((e, t) => {
            let r;
            if (!e.url) return;
            r = e.url;
            try {
                r = decodeURIComponent(r)
            } catch (e) {
                return
            }
            const n = new URL(r);
            n.searchParams.set("ratebypass", "yes"), t && n.searchParams.set(e.sp || "signature", t), e.url = n.toString()
        }), r.decipherFormats = (async (e, t, i) => {
            let a = {},
                o = await r.getTokens(t, i);
            return e.forEach(e => {
                let t = e.signatureCipher || e.cipher;
                t && (Object.assign(e, n.parse(t)), delete e.signatureCipher, delete e.cipher);
                const i = o && e.s ? r.decipher(o, e.s) : null;
                r.setDownloadURL(e, i), a[e.url] = e
            }), a
        })
    }, {
        "./cache": 54,
        "./utils": 65,
        querystring: 13
    }],
    64: [function(e, t, r) {
        const n = new Set(["youtube.com", "www.youtube.com", "m.youtube.com", "music.youtube.com", "gaming.youtube.com"]),
            i = /^https?:\/\/(youtu\.be\/|(www\.)?youtube\.com\/(embed|v|shorts)\/)/;
        r.getURLVideoID = (e => {
            const t = new URL(e);
            let a = t.searchParams.get("v");
            if (i.test(e) && !a) {
                const e = t.pathname.split("/");
                a = "youtu.be" === t.host ? e[1] : e[2]
            } else if (t.hostname && !n.has(t.hostname)) throw Error("Not a YouTube domain");
            if (!a) throw Error(`No video id found: ${e}`);
            if (a = a.substring(0, 11), !r.validateID(a)) throw TypeError(`Video id (${a}) does not match expected ` + `format (${o.toString()})`);
            return a
        });
        const a = /^https?:\/\//;
        r.getVideoID = (e => {
            if (r.validateID(e)) return e;
            if (a.test(e)) return r.getURLVideoID(e);
            throw Error(`No video id found: ${e}`)
        });
        const o = /^[a-zA-Z0-9-_]{11}$/;
        r.validateID = (e => o.test(e))
    }, {}],
    65: [function(e, t, r) {
        const n = e("./miniget");
        r.between = ((e, t, r) => {
            let n;
            if (t instanceof RegExp) {
                const r = e.match(t);
                if (!r) return "";
                n = r.index + r[0].length
            } else {
                if (-1 === (n = e.indexOf(t))) return "";
                n += t.length
            }
            return -1 === (n = (e = e.slice(n)).indexOf(r)) ? "" : e = e.slice(0, n)
        }), r.cutAfterJSON = (e => {
            let t, r;
            if ("[" === e[0] ? (t = "[", r = "]") : "{" === e[0] && (t = "{", r = "}"), !t) throw new Error(`Can't cut unsupported JSON (need to begin with [ or { ) but got: ${e[0]}`);
            let n, i = !1,
                a = !1,
                o = 0;
            for (n = 0; n < e.length; n++)
                if ('"' !== e[n] || a) {
                    if (a = "\\" === e[n] && !a, !i && (e[n] === t ? o++ : e[n] === r && o--, 0 === o)) return e.substr(0, n + 1)
                } else i = !i;
            throw Error("Can't cut unsupported JSON (no matching closing bracket found)")
        }), r.playError = ((e, t, r = Error) => {
            let n = e && e.playabilityStatus;
            return n && t.includes(n.status) ? new r(n.reason || n.messages && n.messages[0]) : null
        }), r.exposedMiniget = ((e, t = {}, r) => {
            const i = n(e, r || t.requestOptions);
            return "function" == typeof t.requestCallback && t.requestCallback(i), i
        }), r.deprecate = ((e, t, r, n, i) => {
            Object.defineProperty(e, t, {
                get: () => (console.warn(`\`${n}\` will be removed in a near future release, ` + `use \`${i}\` instead.`), r)
            })
        }), r.parseAbbreviatedNumber = (e => {
            const t = e.replace(",", ".").replace(" ", "").match(/([\d,.]+)([MK]?)/);
            if (t) {
                let [, e, r] = t;
                return e = parseFloat(e), Math.round("M" === r ? 1e6 * e : "K" === r ? 1e3 * e : e)
            }
            return null
        })
    }, {
        "./miniget": 61
    }]
}, {}, [57]);
