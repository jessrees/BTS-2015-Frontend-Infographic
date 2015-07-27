
(function() {
    var w = this;
    var k = w._;
    var D = {};
    var C = Array.prototype,
        f = Object.prototype,
        r = Function.prototype;
    var H = C.push,
        o = C.slice,
        y = C.concat,
        d = f.toString,
        j = f.hasOwnProperty;
    var L = C.forEach,
        q = C.map,
        E = C.reduce,
        c = C.reduceRight,
        b = C.filter,
        B = C.every,
        p = C.some,
        n = C.indexOf,
        l = C.lastIndexOf,
        u = Array.isArray,
        e = Object.keys,
        F = r.bind;
    var M = function(N) {
        if (N instanceof M) {
            return N;
        }
        if (!(this instanceof M)) {
            return new M(N);
        }
        this._wrapped = N;
    };
    if (typeof exports !== "undefined") {
        if (typeof module !== "undefined" && module.exports) {
            exports = module.exports = M;
        }
        exports._ = M;
    } else {
        w._ = M;
    }
    M.VERSION = "1.5.2";
    var I = M.each = M.forEach = function(S, P, O) {
        if (S == null) {
            return;
        }
        if (L && S.forEach === L) {
            S.forEach(P, O);
        } else {
            if (S.length === +S.length) {
                for (var N = 0, R = S.length; N < R; N++) {
                    if (P.call(O, S[N], N, S) === D) {
                        return;
                    }
                }
            } else {
                var Q = M.keys(S);
                for (var N = 0, R = Q.length; N < R; N++) {
                    if (P.call(O, S[Q[N]], Q[N], S) === D) {
                        return;
                    }
                }
            }
        }
    };
    M.map = M.collect = function(Q, P, O) {
        var N = [];
        if (Q == null) {
            return N;
        }
        if (q && Q.map === q) {
            return Q.map(P, O);
        }
        I(Q, function(T, R, S) {
            N.push(P.call(O, T, R, S));
        });
        return N;
    };
    var g = "Reduce of empty array with no initial value";
    M.reduce = M.foldl = M.inject = function(R, Q, N, P) {
        var O = arguments.length > 2;
        if (R == null) {
            R = [];
        }
        if (E && R.reduce === E) {
            if (P) {
                Q = M.bind(Q, P);
            }
            return O ? R.reduce(Q, N) : R.reduce(Q);
        }
        I(R, function(U, S, T) {
            if (!O) {
                N = U;
                O = true;
            } else {
                N = Q.call(P, N, U, S, T);
            }
        });
        if (!O) {
            throw new TypeError(g);
        }
        return N;
    };
    M.reduceRight = M.foldr = function(T, Q, N, P) {
        var O = arguments.length > 2;
        if (T == null) {
            T = [];
        }
        if (c && T.reduceRight === c) {
            if (P) {
                Q = M.bind(Q, P);
            }
            return O ? T.reduceRight(Q, N) : T.reduceRight(Q);
        }
        var S = T.length;
        if (S !== +S) {
            var R = M.keys(T);
            S = R.length;
        }
        I(T, function(W, U, V) {
            U = R ? R[--S] : --S;
            if (!O) {
                N = T[U];
                O = true;
            } else {
                N = Q.call(P, N, T[U], U, V);
            }
        });
        if (!O) {
            throw new TypeError(g);
        }
        return N;
    };
    M.find = M.detect = function(Q, P, O) {
        var N;
        A(Q, function(T, R, S) {
            if (P.call(O, T, R, S)) {
                N = T;
                return true;
            }
        });
        return N;
    };
    M.filter = M.select = function(Q, P, O) {
        var N = [];
        if (Q == null) {
            return N;
        }
        if (b && Q.filter === b) {
            return Q.filter(P, O);
        }
        I(Q, function(T, R, S) {
            if (P.call(O, T, R, S)) {
                N.push(T);
            }
        });
        return N;
    };
    M.reject = function(P, O, N) {
        return M.filter(P, function(S, Q, R) {
            return !O.call(N, S, Q, R);
        }, N);
    };
    M.every = M.all = function(Q, P, O) {
        P || (P = M.identity);
        var N = true;
        if (Q == null) {
            return N;
        }
        if (B && Q.every === B) {
            return Q.every(P, O);
        }
        I(Q, function(T, R, S) {
            if (!(N = N && P.call(O, T, R, S))) {
                return D;
            }
        });
        return !!N;
    };
    var A = M.some = M.any = function(Q, P, O) {
        P || (P = M.identity);
        var N = false;
        if (Q == null) {
            return N;
        }
        if (p && Q.some === p) {
            return Q.some(P, O);
        }
        I(Q, function(T, R, S) {
            if (N || (N = P.call(O, T, R, S))) {
                return D;
            }
        });
        return !!N;
    };
    M.contains = M.include = function(O, N) {
        if (O == null) {
            return false;
        }
        if (n && O.indexOf === n) {
            return O.indexOf(N) != -1;
        }
        return A(O, function(P) {
            return P === N;
        });
    };
    M.invoke = function(P, Q) {
        var N = o.call(arguments, 2);
        var O = M.isFunction(Q);
        return M.map(P, function(R) {
            return (O ? Q : R[Q]).apply(R, N);
        });
    };
    M.pluck = function(O, N) {
        return M.map(O, function(P) {
            return P[N];
        });
    };
    M.where = function(O, N, P) {
        if (M.isEmpty(N)) {
            return P ? void 0 : [];
        }
        return M[P ? "find" : "filter"](O, function(R) {
            for (var Q in N) {
                if (N[Q] !== R[Q]) {
                    return false;
                }
            }
            return true;
        });
    };
    M.findWhere = function(O, N) {
        return M.where(O, N, true);
    };
    M.max = function(Q, P, O) {
        if (!P && M.isArray(Q) && Q[0] === +Q[0] && Q.length < 65535) {
            return Math.max.apply(Math, Q);
        }
        if (!P && M.isEmpty(Q)) {
            return -Infinity;
        }
        var N = {
            computed: -Infinity,
            value: -Infinity
        };
        I(Q, function(U, R, T) {
            var S = P ? P.call(O, U, R, T) : U;
            S > N.computed && (N = {
                value: U,
                computed: S
            });
        });
        return N.value;
    };
    M.min = function(Q, P, O) {
        if (!P && M.isArray(Q) && Q[0] === +Q[0] && Q.length < 65535) {
            return Math.min.apply(Math, Q);
        }
        if (!P && M.isEmpty(Q)) {
            return Infinity;
        }
        var N = {
            computed: Infinity,
            value: Infinity
        };
        I(Q, function(U, R, T) {
            var S = P ? P.call(O, U, R, T) : U;
            S < N.computed && (N = {
                value: U,
                computed: S
            });
        });
        return N.value;
    };
    M.shuffle = function(Q) {
        var P;
        var O = 0;
        var N = [];
        I(Q, function(R) {
            P = M.random(O++);
            N[O - 1] = N[P];
            N[P] = R;
        });
        return N;
    };
    M.sample = function(O, P, N) {
        if (arguments.length < 2 || N) {
            return O[M.random(O.length - 1)];
        }
        return M.shuffle(O).slice(0, Math.max(0, P));
    };
    var a = function(N) {
        return M.isFunction(N) ? N : function(O) {
            return O[N];
        };
    };
    M.sortBy = function(Q, P, N) {
        var O = a(P);
        return M.pluck(M.map(Q, function(T, R, S) {
            return {
                value: T,
                index: R,
                criteria: O.call(N, T, R, S)
            };
        }).sort(function(U, T) {
            var S = U.criteria;
            var R = T.criteria;
            if (S !== R) {
                if (S > R || S === void 0) {
                    return 1;
                }
                if (S < R || R === void 0) {
                    return -1;
                }
            }
            return U.index - T.index;
        }), "value");
    };
    var t = function(N) {
        return function(S, R, P) {
            var O = {};
            var Q = R == null ? M.identity : a(R);
            I(S, function(V, T) {
                var U = Q.call(P, V, T, S);
                N(O, U, V);
            });
            return O;
        };
    };
    M.groupBy = t(function(N, O, P) {
        (M.has(N, O) ? N[O] : (N[O] = [])).push(P);
    });
    M.indexBy = t(function(N, O, P) {
        N[O] = P;
    });
    M.countBy = t(function(N, O) {
        M.has(N, O) ? N[O]++ : N[O] = 1;
    });
    M.sortedIndex = function(U, T, Q, P) {
        Q = Q == null ? M.identity : a(Q);
        var S = Q.call(P, T);
        var N = 0,
            R = U.length;
        while (N < R) {
            var O = (N + R) >>> 1;
            Q.call(P, U[O]) < S ? N = O + 1 : R = O;
        }
        return N;
    };
    M.toArray = function(N) {
        if (!N) {
            return [];
        }
        if (M.isArray(N)) {
            return o.call(N);
        }
        if (N.length === +N.length) {
            return M.map(N, M.identity);
        }
        return M.values(N);
    };
    M.size = function(N) {
        if (N == null) {
            return 0;
        }
        return (N.length === +N.length) ? N.length : M.keys(N).length;
    };
    M.first = M.head = M.take = function(P, O, N) {
        if (P == null) {
            return void 0;
        }
        return (O == null) || N ? P[0] : o.call(P, 0, O);
    };
    M.initial = function(P, O, N) {
        return o.call(P, 0, P.length - ((O == null) || N ? 1 : O));
    };
    M.last = function(P, O, N) {
        if (P == null) {
            return void 0;
        }
        if ((O == null) || N) {
            return P[P.length - 1];
        } else {
            return o.call(P, Math.max(P.length - O, 0));
        }
    };
    M.rest = M.tail = M.drop = function(P, O, N) {
        return o.call(P, (O == null) || N ? 1 : O);
    };
    M.compact = function(N) {
        return M.filter(N, M.identity);
    };
    var x = function(O, P, N) {
        if (P && M.every(O, M.isArray)) {
            return y.apply(N, O);
        }
        I(O, function(Q) {
            if (M.isArray(Q) || M.isArguments(Q)) {
                P ? H.apply(N, Q) : x(Q, P, N);
            } else {
                N.push(Q);
            }
        });
        return N;
    };
    M.flatten = function(O, N) {
        return x(O, N, []);
    };
    M.without = function(N) {
        return M.difference(N, o.call(arguments, 1));
    };
    M.uniq = M.unique = function(T, S, R, Q) {
        if (M.isFunction(S)) {
            Q = R;
            R = S;
            S = false;
        }
        var O = R ? M.map(T, R, Q) : T;
        var P = [];
        var N = [];
        I(O, function(V, U) {
            if (S ? (!U || N[N.length - 1] !== V) : !M.contains(N, V)) {
                N.push(V);
                P.push(T[U]);
            }
        });
        return P;
    };
    M.union = function() {
        return M.uniq(M.flatten(arguments, true));
    };
    M.intersection = function(O) {
        var N = o.call(arguments, 1);
        return M.filter(M.uniq(O), function(P) {
            return M.every(N, function(Q) {
                return M.indexOf(Q, P) >= 0;
            });
        });
    };
    M.difference = function(O) {
        var N = y.apply(C, o.call(arguments, 1));
        return M.filter(O, function(P) {
            return !M.contains(N, P);
        });
    };
    M.zip = function() {
        var P = M.max(M.pluck(arguments, "length").concat(0));
        var O = new Array(P);
        for (var N = 0; N < P; N++) {
            O[N] = M.pluck(arguments, "" + N);
        }
        return O;
    };
    M.object = function(R, O) {
        if (R == null) {
            return {};
        }
        var N = {};
        for (var P = 0, Q = R.length; P < Q; P++) {
            if (O) {
                N[R[P]] = O[P];
            } else {
                N[R[P][0]] = R[P][1];
            }
        }
        return N;
    };
    M.indexOf = function(R, P, Q) {
        if (R == null) {
            return -1;
        }
        var N = 0,
            O = R.length;
        if (Q) {
            if (typeof Q == "number") {
                N = (Q < 0 ? Math.max(0, O + Q) : Q);
            } else {
                N = M.sortedIndex(R, P);
                return R[N] === P ? N : -1;
            }
        }
        if (n && R.indexOf === n) {
            return R.indexOf(P, Q);
        }
        for (; N < O; N++) {
            if (R[N] === P) {
                return N;
            }
        }
        return -1;
    };
    M.lastIndexOf = function(R, P, Q) {
        if (R == null) {
            return -1;
        }
        var N = Q != null;
        if (l && R.lastIndexOf === l) {
            return N ? R.lastIndexOf(P, Q) : R.lastIndexOf(P);
        }
        var O = (N ? Q : R.length);
        while (O--) {
            if (R[O] === P) {
                return O;
            }
        }
        return -1;
    };
    M.range = function(S, P, R) {
        if (arguments.length <= 1) {
            P = S || 0;
            S = 0;
        }
        R = arguments[2] || 1;
        var Q = Math.max(Math.ceil((P - S) / R), 0);
        var N = 0;
        var O = new Array(Q);
        while (N < Q) {
            O[N++] = S;
            S += R;
        }
        return O;
    };
    var G = function() {};
    M.bind = function(Q, O) {
        var N, P;
        if (F && Q.bind === F) {
            return F.apply(Q, o.call(arguments, 1));
        }
        if (!M.isFunction(Q)) {
            throw new TypeError;
        }
        N = o.call(arguments, 2);
        return P = function() {
            if (!(this instanceof P)) {
                return Q.apply(O, N.concat(o.call(arguments)));
            }
            G.prototype = Q.prototype;
            var S = new G;
            G.prototype = null;
            var R = Q.apply(S, N.concat(o.call(arguments)));
            if (Object(R) === R) {
                return R;
            }
            return S;
        };
    };
    M.partial = function(O) {
        var N = o.call(arguments, 1);
        return function() {
            return O.apply(this, N.concat(o.call(arguments)));
        };
    };
    M.bindAll = function(O) {
        var N = o.call(arguments, 1);
        if (N.length === 0) {
            throw new Error("bindAll must be passed function names");
        }
        I(N, function(P) {
            O[P] = M.bind(O[P], O);
        });
        return O;
    };
    M.memoize = function(P, O) {
        var N = {};
        O || (O = M.identity);
        return function() {
            var Q = O.apply(this, arguments);
            return M.has(N, Q) ? N[Q] : (N[Q] = P.apply(this, arguments));
        };
    };
    M.delay = function(O, P) {
        var N = o.call(arguments, 2);
        return setTimeout(function() {
            return O.apply(null, N);
        }, P);
    };
    M.defer = function(N) {
        return M.delay.apply(M, [N, 1].concat(o.call(arguments, 1)));
    };
    M.throttle = function(O, Q, U) {
        var N, S, V;
        var T = null;
        var R = 0;
        U || (U = {});
        var P = function() {
            R = U.leading === false ? 0 : new Date;
            T = null;
            V = O.apply(N, S);
        };
        return function() {
            var W = new Date;
            if (!R && U.leading === false) {
                R = W;
            }
            var X = Q - (W - R);
            N = this;
            S = arguments;
            if (X <= 0) {
                clearTimeout(T);
                T = null;
                R = W;
                V = O.apply(N, S);
            } else {
                if (!T && U.trailing !== false) {
                    T = setTimeout(P, X);
                }
            }
            return V;
        };
    };
    M.debounce = function(R, U, O) {
        var T, P, Q, S, N;
        return function() {
            Q = this;
            P = arguments;
            S = new Date();
            var W = function() {
                var X = (new Date()) - S;
                if (X < U) {
                    T = setTimeout(W, U - X);
                } else {
                    T = null;
                    if (!O) {
                        N = R.apply(Q, P);
                    }
                }
            };
            var V = O && !T;
            if (!T) {
                T = setTimeout(W, U);
            }
            if (V) {
                N = R.apply(Q, P);
            }
            return N;
        };
    };
    M.once = function(P) {
        var N = false,
            O;
        return function() {
            if (N) {
                return O;
            }
            N = true;
            O = P.apply(this, arguments);
            P = null;
            return O;
        };
    };
    M.wrap = function(N, O) {
        return function() {
            var P = [N];
            H.apply(P, arguments);
            return O.apply(this, P);
        };
    };
    M.compose = function() {
        var N = arguments;
        return function() {
            var O = arguments;
            for (var P = N.length - 1; P >= 0; P--) {
                O = [N[P].apply(this, O)];
            }
            return O[0];
        };
    };
    M.after = function(O, N) {
        return function() {
            if (--O < 1) {
                return N.apply(this, arguments);
            }
        };
    };
    M.keys = e || function(P) {
        if (P !== Object(P)) {
            throw new TypeError("Invalid object");
        }
        var O = [];
        for (var N in P) {
            if (M.has(P, N)) {
                O.push(N);
            }
        }
        return O;
    };
    M.values = function(R) {
        var Q = M.keys(R);
        var P = Q.length;
        var N = new Array(P);
        for (var O = 0; O < P; O++) {
            N[O] = R[Q[O]];
        }
        return N;
    };
    M.pairs = function(R) {
        var P = M.keys(R);
        var O = P.length;
        var Q = new Array(O);
        for (var N = 0; N < O; N++) {
            Q[N] = [P[N], R[P[N]]];
        }
        return Q;
    };
    M.invert = function(R) {
        var N = {};
        var Q = M.keys(R);
        for (var O = 0, P = Q.length; O < P; O++) {
            N[R[Q[O]]] = Q[O];
        }
        return N;
    };
    M.functions = M.methods = function(P) {
        var O = [];
        for (var N in P) {
            if (M.isFunction(P[N])) {
                O.push(N);
            }
        }
        return O.sort();
    };
    M.extend = function(N) {
        I(o.call(arguments, 1), function(O) {
            if (O) {
                for (var P in O) {
                    N[P] = O[P];
                }
            }
        });
        return N;
    };
    M.pick = function(O) {
        var P = {};
        var N = y.apply(C, o.call(arguments, 1));
        I(N, function(Q) {
            if (Q in O) {
                P[Q] = O[Q];
            }
        });
        return P;
    };
    M.omit = function(P) {
        var Q = {};
        var O = y.apply(C, o.call(arguments, 1));
        for (var N in P) {
            if (!M.contains(O, N)) {
                Q[N] = P[N];
            }
        }
        return Q;
    };
    M.defaults = function(N) {
        I(o.call(arguments, 1), function(O) {
            if (O) {
                for (var P in O) {
                    if (N[P] === void 0) {
                        N[P] = O[P];
                    }
                }
            }
        });
        return N;
    };
    M.clone = function(N) {
        if (!M.isObject(N)) {
            return N;
        }
        return M.isArray(N) ? N.slice() : M.extend({}, N);
    };
    M.tap = function(O, N) {
        N(O);
        return O;
    };
    var J = function(U, T, O, P) {
        if (U === T) {
            return U !== 0 || 1 / U == 1 / T;
        }
        if (U == null || T == null) {
            return U === T;
        }
        if (U instanceof M) {
            U = U._wrapped;
        }
        if (T instanceof M) {
            T = T._wrapped;
        }
        var R = d.call(U);
        if (R != d.call(T)) {
            return false;
        }
        switch (R) {
            case "[object String]":
                return U == String(T);
            case "[object Number]":
                return U != +U ? T != +T : (U == 0 ? 1 / U == 1 / T : U == +T);
            case "[object Date]":
            case "[object Boolean]":
                return +U == +T;
            case "[object RegExp]":
                return U.source == T.source && U.global == T.global && U.multiline == T.multiline && U.ignoreCase == T.ignoreCase;
        }
        if (typeof U != "object" || typeof T != "object") {
            return false;
        }
        var N = O.length;
        while (N--) {
            if (O[N] == U) {
                return P[N] == T;
            }
        }
        var S = U.constructor,
            Q = T.constructor;
        if (S !== Q && !(M.isFunction(S) && (S instanceof S) && M.isFunction(Q) && (Q instanceof Q))) {
            return false;
        }
        O.push(U);
        P.push(T);
        var X = 0,
            W = true;
        if (R == "[object Array]") {
            X = U.length;
            W = X == T.length;
            if (W) {
                while (X--) {
                    if (!(W = J(U[X], T[X], O, P))) {
                        break;
                    }
                }
            }
        } else {
            for (var V in U) {
                if (M.has(U, V)) {
                    X++;
                    if (!(W = M.has(T, V) && J(U[V], T[V], O, P))) {
                        break;
                    }
                }
            }
            if (W) {
                for (V in T) {
                    if (M.has(T, V) && !(X--)) {
                        break;
                    }
                }
                W = !X;
            }
        }
        O.pop();
        P.pop();
        return W;
    };
    M.isEqual = function(O, N) {
        return J(O, N, [], []);
    };
    M.isEmpty = function(O) {
        if (O == null) {
            return true;
        }
        if (M.isArray(O) || M.isString(O)) {
            return O.length === 0;
        }
        for (var N in O) {
            if (M.has(O, N)) {
                return false;
            }
        }
        return true;
    };
    M.isElement = function(N) {
        return !!(N && N.nodeType === 1);
    };
    M.isArray = u || function(N) {
        return d.call(N) == "[object Array]";
    };
    M.isObject = function(N) {
        return N === Object(N);
    };
    I(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(N) {
        M["is" + N] = function(O) {
            return d.call(O) == "[object " + N + "]";
        };
    });
    if (!M.isArguments(arguments)) {
        M.isArguments = function(N) {
            return !!(N && M.has(N, "callee"));
        };
    }
    if (typeof(/./) !== "function") {
        M.isFunction = function(N) {
            return typeof N === "function";
        };
    }
    M.isFinite = function(N) {
        return isFinite(N) && !isNaN(parseFloat(N));
    };
    M.isNaN = function(N) {
        return M.isNumber(N) && N != +N;
    };
    M.isBoolean = function(N) {
        return N === true || N === false || d.call(N) == "[object Boolean]";
    };
    M.isNull = function(N) {
        return N === null;
    };
    M.isUndefined = function(N) {
        return N === void 0;
    };
    M.has = function(O, N) {
        return j.call(O, N);
    };
    M.noConflict = function() {
        w._ = k;
        return this;
    };
    M.identity = function(N) {
        return N;
    };
    M.times = function(R, Q, P) {
        var N = Array(Math.max(0, R));
        for (var O = 0; O < R; O++) {
            N[O] = Q.call(P, O);
        }
        return N;
    };
    M.random = function(O, N) {
        if (N == null) {
            N = O;
            O = 0;
        }
        return O + Math.floor(Math.random() * (N - O + 1));
    };
    var m = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        }
    };
    m.unescape = M.invert(m.escape);
    var K = {
        escape: new RegExp("[" + M.keys(m.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + M.keys(m.unescape).join("|") + ")", "g")
    };
    M.each(["escape", "unescape"], function(N) {
        M[N] = function(O) {
            if (O == null) {
                return "";
            }
            return ("" + O).replace(K[N], function(P) {
                return m[N][P];
            });
        };
    });
    M.result = function(N, P) {
        if (N == null) {
            return void 0;
        }
        var O = N[P];
        return M.isFunction(O) ? O.call(N) : O;
    };
    M.mixin = function(N) {
        I(M.functions(N), function(O) {
            var P = M[O] = N[O];
            M.prototype[O] = function() {
                var Q = [this._wrapped];
                H.apply(Q, arguments);
                return s.call(this, P.apply(M, Q));
            };
        });
    };
    var z = 0;
    M.uniqueId = function(N) {
        var O = ++z + "";
        return N ? N + O : O;
    };
    M.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var v = /(.)^/;
    var h = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\t": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    };
    var i = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    M.template = function(V, Q, P) {
        var O;
        P = M.defaults({}, P, M.templateSettings);
        var R = new RegExp([(P.escape || v).source, (P.interpolate || v).source, (P.evaluate || v).source].join("|") + "|$", "g");
        var S = 0;
        var N = "__p+='";
        V.replace(R, function(X, Y, W, aa, Z) {
            N += V.slice(S, Z).replace(i, function(ab) {
                return "\\" + h[ab];
            });
            if (Y) {
                N += "'+\n((__t=(" + Y + "))==null?'':_.escape(__t))+\n'";
            }
            if (W) {
                N += "'+\n((__t=(" + W + "))==null?'':__t)+\n'";
            }
            if (aa) {
                N += "';\n" + aa + "\n__p+='";
            }
            S = Z + X.length;
            return X;
        });
        N += "';\n";
        if (!P.variable) {
            N = "with(obj||{}){\n" + N + "}\n";
        }
        N = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + N + "return __p;\n";
        try {
            O = new Function(P.variable || "obj", "_", N);
        } catch (T) {
            T.source = N;
            throw T;
        }
        if (Q) {
            return O(Q, M);
        }
        var U = function(W) {
            return O.call(this, W, M);
        };
        U.source = "function(" + (P.variable || "obj") + "){\n" + N + "}";
        return U;
    };
    M.chain = function(N) {
        return M(N).chain();
    };
    var s = function(N) {
        return this._chain ? M(N).chain() : N;
    };
    M.mixin(M);
    I(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(N) {
        var O = C[N];
        M.prototype[N] = function() {
            var P = this._wrapped;
            O.apply(P, arguments);
            if ((N == "shift" || N == "splice") && P.length === 0) {
                delete P[0];
            }
            return s.call(this, P);
        };
    });
    I(["concat", "join", "slice"], function(N) {
        var O = C[N];
        M.prototype[N] = function() {
            return s.call(this, O.apply(this._wrapped, arguments));
        };
    });
    M.extend(M.prototype, {
        chain: function() {
            this._chain = true;
            return this;
        },
        value: function() {
            return this._wrapped;
        }
    });
}).call(this);
/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], a);
    } else {
        a(jQuery);
    }
}(function(e) {
    var a = /\+/g;

    function d(g) {
        return g;
    }

    function b(g) {
        return decodeURIComponent(g.replace(a, " "));
    }

    function f(g) {
        if (g.indexOf('"') === 0) {
            g = g.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\");
        }
        try {
            return c.json ? JSON.parse(g) : g;
        } catch (h) {}
    }
    var c = e.cookie = function(p, o, u) {
        if (o !== undefined) {
            u = e.extend({}, c.defaults, u);
            if (typeof u.expires === "number") {
                var q = u.expires,
                    s = u.expires = new Date();
                s.setDate(s.getDate() + q);
            }
            o = c.json ? JSON.stringify(o) : String(o);
            return (document.cookie = [c.raw ? p : encodeURIComponent(p), "=", c.raw ? o : encodeURIComponent(o), u.expires ? "; expires=" + u.expires.toUTCString() : "", u.path ? "; path=" + u.path : "", u.domain ? "; domain=" + u.domain : "", u.secure ? "; secure" : ""].join(""));
        }
        var g = c.raw ? d : b;
        var r = document.cookie.split("; ");
        var v = p ? undefined : {};
        for (var n = 0, k = r.length; n < k; n++) {
            var m = r[n].split("=");
            var h = g(m.shift());
            var j = g(m.join("="));
            if (p && p === h) {
                v = f(j);
                break;
            }
            if (!p) {
                v[h] = f(j);
            }
        }
        return v;
    };
    c.defaults = {};
    e.cookie.unset = function(h, g) {
        if (e.cookie(h) !== undefined) {
            e.cookie(h, "", e.extend({}, g, {
                expires: -1
            }));
            return true;
        }
        return false;
    };
}));
if (!jQuery) {
    throw new Error("Bootstrap requires jQuery");
} + function(b) {
    function a() {
        var e = document.createElement("bootstrap");
        var d = {
            "WebkitTransition": "webkitTransitionEnd",
            "MozTransition": "transitionend",
            "OTransition": "oTransitionEnd otransitionend",
            "transition": "transitionend"
        };
        for (var c in d) {
            if (e.style[c] !== undefined) {
                return {
                    end: d[c]
                };
            }
        }
    }
    b.fn.emulateTransitionEnd = function(e) {
        var d = false,
            c = this;
        b(this).one(b.support.transition.end, function() {
            d = true;
        });
        var f = function() {
            if (!d) {
                b(c).trigger(b.support.transition.end);
            }
        };
        setTimeout(f, e);
        return this;
    };
    b(function() {
        b.support.transition = a();
    });
}(window.jQuery); + function(d) {
    var c = '[data-dismiss="alert"]';
    var b = function(e) {
        d(e).on("click", c, this.close);
    };
    b.prototype.close = function(j) {
        var i = d(this);
        var g = i.attr("data-target");
        if (!g) {
            g = i.attr("href");
            g = g && g.replace(/.*(?=#[^\s]*$)/, "");
        }
        var h = d(g);
        if (j) {
            j.preventDefault();
        }
        if (!h.length) {
            h = i.hasClass("alert") ? i : i.parent();
        }
        h.trigger(j = d.Event("close.bs.alert"));
        if (j.isDefaultPrevented()) {
            return;
        }
        h.removeClass("in");

        function f() {
            h.trigger("closed.bs.alert").remove();
        }
        d.support.transition && h.hasClass("fade") ? h.one(d.support.transition.end, f).emulateTransitionEnd(150) : f();
    };
    var a = d.fn.alert;
    d.fn.alert = function(e) {
        return this.each(function() {
            var g = d(this);
            var f = g.data("bs.alert");
            if (!f) {
                g.data("bs.alert", (f = new b(this)));
            }
            if (typeof e == "string") {
                f[e].call(g);
            }
        });
    };
    d.fn.alert.Constructor = b;
    d.fn.alert.noConflict = function() {
        d.fn.alert = a;
        return this;
    };
    d(document).on("click.bs.alert.data-api", c, b.prototype.close);
}(window.jQuery); + function(c) {
    var b = function(e, d) {
        this.$element = c(e);
        this.options = c.extend({}, b.DEFAULTS, d);
    };
    b.DEFAULTS = {
        loadingText: "loading..."
    };
    b.prototype.setState = function(g) {
        var i = "disabled";
        var e = this.$element;
        var h = e.is("input") ? "val" : "html";
        var f = e.data();
        g = g + "Text";
        if (!f.resetText) {
            e.data("resetText", e[h]());
        }
        e[h](f[g] || this.options[g]);
        setTimeout(function() {
            g == "loadingText" ? e.addClass(i).attr(i, i) : e.removeClass(i).removeAttr(i);
        }, 0);
    };
    b.prototype.toggle = function() {
        var d = this.$element.closest('[data-toggle="buttons"]');
        if (d.length) {
            var e = this.$element.find("input").prop("checked", !this.$element.hasClass("active")).trigger("change");
            if (e.prop("type") === "radio") {
                d.find(".active").removeClass("active");
            }
        }
        this.$element.toggleClass("active");
    };
    var a = c.fn.button;
    c.fn.button = function(d) {
        return this.each(function() {
            var g = c(this);
            var f = g.data("bs.button");
            var e = typeof d == "object" && d;
            if (!f) {
                g.data("bs.button", (f = new b(this, e)));
            }
            if (d == "toggle") {
                f.toggle();
            } else {
                if (d) {
                    f.setState(d);
                }
            }
        });
    };
    c.fn.button.Constructor = b;
    c.fn.button.noConflict = function() {
        c.fn.button = a;
        return this;
    };
    c(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(f) {
        var d = c(f.target);
        if (!d.hasClass("btn")) {
            d = d.closest(".btn");
        }
        d.button("toggle");
        f.preventDefault();
    });
}(window.jQuery); + function(b) {
    var c = function(e, d) {
        this.$element = b(e);
        this.$indicators = this.$element.find(".carousel-indicators");
        this.options = d;
        this.paused = this.sliding = this.interval = this.$active = this.$items = null;
        this.options.pause == "hover" && this.$element.on("mouseenter", b.proxy(this.pause, this)).on("mouseleave", b.proxy(this.cycle, this));
    };
    c.DEFAULTS = {
        interval: 5000,
        pause: "hover",
        wrap: true
    };
    c.prototype.cycle = function(d) {
        d || (this.paused = false);
        this.interval && clearInterval(this.interval);
        this.options.interval && !this.paused && (this.interval = setInterval(b.proxy(this.next, this), this.options.interval));
        return this;
    };
    c.prototype.getActiveIndex = function() {
        this.$active = this.$element.find(".item.active");
        this.$items = this.$active.parent().children();
        return this.$items.index(this.$active);
    };
    c.prototype.to = function(f) {
        var e = this;
        var d = this.getActiveIndex();
        if (f > (this.$items.length - 1) || f < 0) {
            return;
        }
        if (this.sliding) {
            return this.$element.one("slid", function() {
                e.to(f);
            });
        }
        if (d == f) {
            return this.pause().cycle();
        }
        return this.slide(f > d ? "next" : "prev", b(this.$items[f]));
    };
    c.prototype.pause = function(d) {
        d || (this.paused = true);
        if (this.$element.find(".next, .prev").length && b.support.transition.end) {
            this.$element.trigger(b.support.transition.end);
            this.cycle(true);
        }
        this.interval = clearInterval(this.interval);
        return this;
    };
    c.prototype.next = function() {
        if (this.sliding) {
            return;
        }
        return this.slide("next");
    };
    c.prototype.prev = function() {
        if (this.sliding) {
            return;
        }
        return this.slide("prev");
    };
    c.prototype.slide = function(k, f) {
        var m = this.$element.find(".item.active");
        var d = f || m[k]();
        var j = this.interval;
        var l = k == "next" ? "left" : "right";
        var g = k == "next" ? "first" : "last";
        var h = this;
        if (!d.length) {
            if (!this.options.wrap) {
                return;
            }
            d = this.$element.find(".item")[g]();
        }
        this.sliding = true;
        j && this.pause();
        var i = b.Event("slide.bs.carousel", {
            relatedTarget: d[0],
            direction: l
        });
        if (d.hasClass("active")) {
            return;
        }
        if (this.$indicators.length) {
            this.$indicators.find(".active").removeClass("active");
            this.$element.one("slid", function() {
                var e = b(h.$indicators.children()[h.getActiveIndex()]);
                e && e.addClass("active");
            });
        }
        if (b.support.transition && this.$element.hasClass("slide")) {
            this.$element.trigger(i);
            if (i.isDefaultPrevented()) {
                return;
            }
            d.addClass(k);
            d[0].offsetWidth;
            m.addClass(l);
            d.addClass(l);
            m.one(b.support.transition.end, function() {
                d.removeClass([k, l].join(" ")).addClass("active");
                m.removeClass(["active", l].join(" "));
                h.sliding = false;
                setTimeout(function() {
                    h.$element.trigger("slid");
                }, 0);
            }).emulateTransitionEnd(600);
        } else {
            this.$element.trigger(i);
            if (i.isDefaultPrevented()) {
                return;
            }
            m.removeClass("active");
            d.addClass("active");
            this.sliding = false;
            this.$element.trigger("slid");
        }
        j && this.cycle();
        return this;
    };
    var a = b.fn.carousel;
    b.fn.carousel = function(d) {
        return this.each(function() {
            var h = b(this);
            var g = h.data("bs.carousel");
            var e = b.extend({}, c.DEFAULTS, h.data(), typeof d == "object" && d);
            var f = typeof d == "string" ? d : e.slide;
            if (!g) {
                h.data("bs.carousel", (g = new c(this, e)));
            }
            if (typeof d == "number") {
                g.to(d);
            } else {
                if (f) {
                    g[f]();
                } else {
                    if (e.interval) {
                        g.pause().cycle();
                    }
                }
            }
        });
    };
    b.fn.carousel.Constructor = c;
    b.fn.carousel.noConflict = function() {
        b.fn.carousel = a;
        return this;
    };
    b(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(j) {
        var i = b(this),
            f;
        var d = b(i.attr("data-target") || (f = i.attr("href")) && f.replace(/.*(?=#[^\s]+$)/, ""));
        var g = b.extend({}, d.data(), i.data());
        var h = i.attr("data-slide-to");
        if (h) {
            g.interval = false;
        }
        d.carousel(g);
        if (h = i.attr("data-slide-to")) {
            d.data("bs.carousel").to(h);
        }
        j.preventDefault();
    });
    b(window).on("load", function() {
        b('[data-ride="carousel"]').each(function() {
            var d = b(this);
            d.carousel(d.data());
        });
    });
}(window.jQuery); + function(b) {
    var c = function(e, d) {
        this.$element = b(e);
        this.options = b.extend({}, c.DEFAULTS, d);
        this.transitioning = null;
        if (this.options.parent) {
            this.$parent = b(this.options.parent);
        }
        if (this.options.toggle) {
            this.toggle();
        }
    };
    c.DEFAULTS = {
        toggle: true
    };
    c.prototype.dimension = function() {
        var d = this.$element.hasClass("width");
        return d ? "width" : "height";
    };
    c.prototype.show = function() {
        if (this.transitioning || this.$element.hasClass("in")) {
            return;
        }
        var e = b.Event("show.bs.collapse");
        this.$element.trigger(e);
        if (e.isDefaultPrevented()) {
            return;
        }
        var h = this.$parent && this.$parent.find("> .panel > .in");
        if (h && h.length) {
            var f = h.data("bs.collapse");
            if (f && f.transitioning) {
                return;
            }
            h.collapse("hide");
            f || h.data("bs.collapse", null);
        }
        var i = this.dimension();
        this.$element.removeClass("collapse").addClass("collapsing")[i](0);
        this.transitioning = 1;
        var d = function() {
            this.$element.removeClass("collapsing").addClass("in")[i]("auto");
            this.transitioning = 0;
            this.$element.trigger("shown.bs.collapse");
        };
        if (!b.support.transition) {
            return d.call(this);
        }
        var g = b.camelCase(["scroll", i].join("-"));
        this.$element.one(b.support.transition.end, b.proxy(d, this)).emulateTransitionEnd(350)[i](this.$element[0][g]);
    };
    c.prototype.hide = function() {
        if (this.transitioning || !this.$element.hasClass("in")) {
            return;
        }
        var e = b.Event("hide.bs.collapse");
        this.$element.trigger(e);
        if (e.isDefaultPrevented()) {
            return;
        }
        var f = this.dimension();
        this.$element[f](this.$element[f]())[0].offsetHeight;
        this.$element.addClass("collapsing").removeClass("collapse").removeClass("in");
        this.transitioning = 1;
        var d = function() {
            this.transitioning = 0;
            this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse");
        };
        if (!b.support.transition) {
            return d.call(this);
        }
        this.$element[f](0).one(b.support.transition.end, b.proxy(d, this)).emulateTransitionEnd(350);
    };
    c.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
    };
    var a = b.fn.collapse;
    b.fn.collapse = function(d) {
        return this.each(function() {
            var g = b(this);
            var f = g.data("bs.collapse");
            var e = b.extend({}, c.DEFAULTS, g.data(), typeof d == "object" && d);
            if (!f) {
                g.data("bs.collapse", (f = new c(this, e)));
            }
            if (typeof d == "string") {
                f[d]();
            }
        });
    };
    b.fn.collapse.Constructor = c;
    b.fn.collapse.noConflict = function() {
        b.fn.collapse = a;
        return this;
    };
    b(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(j) {
        var l = b(this),
            d;
        var k = l.attr("data-target") || j.preventDefault() || (d = l.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "");
        var f = b(k);
        var h = f.data("bs.collapse");
        var i = h ? "toggle" : l.data();
        var m = l.attr("data-parent");
        var g = m && b(m);
        if (!h || !h.transitioning) {
            if (g) {
                g.find('[data-toggle=collapse][data-parent="' + m + '"]').not(l).addClass("collapsed");
            }
            l[f.hasClass("in") ? "addClass" : "removeClass"]("collapsed");
        }
        f.collapse(i);
    });
}(window.jQuery); + function(g) {
    var e = ".dropdown-backdrop";
    var b = "[data-toggle=dropdown]";
    var a = function(i) {
        var h = g(i).on("click.bs.dropdown", this.toggle);
    };
    a.prototype.toggle = function(k) {
        var j = g(this);
        if (j.is(".disabled, :disabled")) {
            return;
        }
        var i = f(j);
        var h = i.hasClass("open");
        d();
        if (!h) {
            if ("ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length) {
                g('<div class="dropdown-backdrop"/>').insertAfter(g(this)).on("click", d);
            }
            i.trigger(k = g.Event("show.bs.dropdown"));
            if (k.isDefaultPrevented()) {
                return;
            }
            i.toggleClass("open").trigger("shown.bs.dropdown");
            j.focus();
        }
        return false;
    };
    a.prototype.keydown = function(l) {
        if (!/(38|40|27)/.test(l.keyCode)) {
            return;
        }
        var k = g(this);
        l.preventDefault();
        l.stopPropagation();
        if (k.is(".disabled, :disabled")) {
            return;
        }
        var j = f(k);
        var i = j.hasClass("open");
        if (!i || (i && l.keyCode == 27)) {
            if (l.which == 27) {
                j.find(b).focus();
            }
            return k.click();
        }
        var m = g("[role=menu] li:not(.divider):visible a", j);
        if (!m.length) {
            return;
        }
        var h = m.index(m.filter(":focus"));
        if (l.keyCode == 38 && h > 0) {
            h--;
        }
        if (l.keyCode == 40 && h < m.length - 1) {
            h++;
        }
        if (!~h) {
            h = 0;
        }
        m.eq(h).focus();
    };

    function d() {
        g(e).remove();
        g(b).each(function(i) {
            var h = f(g(this));
            if (!h.hasClass("open")) {
                return;
            }
            h.trigger(i = g.Event("hide.bs.dropdown"));
            if (i.isDefaultPrevented()) {
                return;
            }
            h.removeClass("open").trigger("hidden.bs.dropdown");
        });
    }

    function f(j) {
        var h = j.attr("data-target");
        if (!h) {
            h = j.attr("href");
            h = h && /#/.test(h) && h.replace(/.*(?=#[^\s]*$)/, "");
        }
        var i = h && g(h);
        return i && i.length ? i : j.parent();
    }
    var c = g.fn.dropdown;
    g.fn.dropdown = function(h) {
        return this.each(function() {
            var j = g(this);
            var i = j.data("dropdown");
            if (!i) {
                j.data("dropdown", (i = new a(this)));
            }
            if (typeof h == "string") {
                i[h].call(j);
            }
        });
    };
    g.fn.dropdown.Constructor = a;
    g.fn.dropdown.noConflict = function() {
        g.fn.dropdown = c;
        return this;
    };
    g(document).on("click.bs.dropdown.data-api", d).on("click.bs.dropdown.data-api", ".dropdown form", function(h) {
        h.stopPropagation();
    }).on("click.bs.dropdown.data-api", b, a.prototype.toggle).on("keydown.bs.dropdown.data-api", b + ", [role=menu]", a.prototype.keydown);
}(window.jQuery); + function(c) {
    var b = function(e, d) {
        this.options = d;
        this.$element = c(e);
        this.$backdrop = this.isShown = null;
        if (this.options.remote) {
            this.$element.load(this.options.remote);
        }
    };
    b.DEFAULTS = {
        backdrop: true,
        keyboard: true,
        show: true
    };
    b.prototype.toggle = function(d) {
        return this[!this.isShown ? "show" : "hide"](d);
    };
    b.prototype.show = function(g) {
        var d = this;
        var f = c.Event("show.bs.modal", {
            relatedTarget: g
        });
        this.$element.trigger(f);
        if (this.isShown || f.isDefaultPrevented()) {
            return;
        }
        this.isShown = true;
        this.escape();
        this.$element.on("click.dismiss.modal", '[data-dismiss="modal"]', c.proxy(this.hide, this));
        this.backdrop(function() {
            var i = c.support.transition && d.$element.hasClass("fade");
            if (!d.$element.parent().length) {
                d.$element.appendTo(document.body);
            }
            d.$element.show();
            if (i) {
                d.$element[0].offsetWidth;
            }
            d.$element.addClass("in").attr("aria-hidden", false);
            d.enforceFocus();
            var h = c.Event("shown.bs.modal", {
                relatedTarget: g
            });
            i ? d.$element.find(".modal-dialog").one(c.support.transition.end, function() {
                d.$element.focus().trigger(h);
            }).emulateTransitionEnd(300) : d.$element.focus().trigger(h);
        });
    };
    b.prototype.hide = function(d) {
        if (d) {
            d.preventDefault();
        }
        d = c.Event("hide.bs.modal");
        this.$element.trigger(d);
        if (!this.isShown || d.isDefaultPrevented()) {
            return;
        }
        this.isShown = false;
        this.escape();
        c(document).off("focusin.bs.modal");
        this.$element.removeClass("in").attr("aria-hidden", true).off("click.dismiss.modal");
        c.support.transition && this.$element.hasClass("fade") ? this.$element.one(c.support.transition.end, c.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal();
    };
    b.prototype.enforceFocus = function() {
        c(document).off("focusin.bs.modal").on("focusin.bs.modal", c.proxy(function(d) {
            if (this.$element[0] !== d.target && !this.$element.has(d.target).length) {
                this.$element.focus();
            }
        }, this));
    };
    b.prototype.escape = function() {
        if (this.isShown && this.options.keyboard) {
            this.$element.on("keyup.dismiss.bs.modal", c.proxy(function(d) {
                d.which == 27 && this.hide();
            }, this));
        } else {
            if (!this.isShown) {
                this.$element.off("keyup.dismiss.bs.modal");
            }
        }
    };
    b.prototype.hideModal = function() {
        var d = this;
        this.$element.hide();
        this.backdrop(function() {
            d.removeBackdrop();
            d.$element.trigger("hidden.bs.modal");
        });
    };
    b.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null;
    };
    b.prototype.backdrop = function(g) {
        var f = this;
        var e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var d = c.support.transition && e;
            this.$backdrop = c('<div class="modal-backdrop ' + e + '" />').appendTo(document.body);
            this.$element.on("click.dismiss.modal", c.proxy(function(h) {
                if (h.target !== h.currentTarget) {
                    return;
                }
                this.options.backdrop == "static" ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this);
            }, this));
            if (d) {
                this.$backdrop[0].offsetWidth;
            }
            this.$backdrop.addClass("in");
            if (!g) {
                return;
            }
            d ? this.$backdrop.one(c.support.transition.end, g).emulateTransitionEnd(150) : g();
        } else {
            if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                c.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(c.support.transition.end, g).emulateTransitionEnd(150) : g();
            } else {
                if (g) {
                    g();
                }
            }
        }
    };
    var a = c.fn.modal;
    c.fn.modal = function(d, e) {
        return this.each(function() {
            var h = c(this);
            var g = h.data("bs.modal");
            var f = c.extend({}, b.DEFAULTS, h.data(), typeof d == "object" && d);
            if (!g) {
                h.data("bs.modal", (g = new b(this, f)));
            }
            if (typeof d == "string") {
                g[d](e);
            } else {
                if (f.show) {
                    g.show(e);
                }
            }
        });
    };
    c.fn.modal.Constructor = b;
    c.fn.modal.noConflict = function() {
        c.fn.modal = a;
        return this;
    };
    c(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
        var h = c(this);
        var f = h.attr("href");
        var d = c(h.attr("data-target") || (f && f.replace(/.*(?=#[^\s]+$)/, "")));
        var g = d.data("modal") ? "toggle" : c.extend({
            remote: !/#/.test(f) && f
        }, d.data(), h.data());
        i.preventDefault();
        d.modal(g, this).one("hide", function() {
            h.is(":visible") && h.focus();
        });
    });
    c(document).on("show.bs.modal", ".modal", function() {
        c(document.body).addClass("modal-open");
    }).on("hidden.bs.modal", ".modal", function() {
        c(document.body).removeClass("modal-open");
    });
}(window.jQuery); + function(c) {
    var b = function(e, d) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null;
        this.init("tooltip", e, d);
    };
    b.DEFAULTS = {
        animation: true,
        placement: "top",
        selector: false,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: false,
        container: false
    };
    b.prototype.init = function(k, h, f) {
        this.enabled = true;
        this.type = k;
        this.$element = c(h);
        this.options = this.getOptions(f);
        var j = this.options.trigger.split(" ");
        for (var g = j.length; g--;) {
            var e = j[g];
            if (e == "click") {
                this.$element.on("click." + this.type, this.options.selector, c.proxy(this.toggle, this));
            } else {
                if (e != "manual") {
                    var l = e == "hover" ? "mouseenter" : "focus";
                    var d = e == "hover" ? "mouseleave" : "blur";
                    this.$element.on(l + "." + this.type, this.options.selector, c.proxy(this.enter, this));
                    this.$element.on(d + "." + this.type, this.options.selector, c.proxy(this.leave, this));
                }
            }
        }
        this.options.selector ? (this._options = c.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        })) : this.fixTitle();
    };
    b.prototype.getDefaults = function() {
        return b.DEFAULTS;
    };
    b.prototype.getOptions = function(d) {
        d = c.extend({}, this.getDefaults(), this.$element.data(), d);
        if (d.delay && typeof d.delay == "number") {
            d.delay = {
                show: d.delay,
                hide: d.delay
            };
        }
        return d;
    };
    b.prototype.getDelegateOptions = function() {
        var d = {};
        var e = this.getDefaults();
        this._options && c.each(this._options, function(f, g) {
            if (e[f] != g) {
                d[f] = g;
            }
        });
        return d;
    };
    b.prototype.enter = function(e) {
        var d = e instanceof this.constructor ? e : c(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        clearTimeout(d.timeout);
        d.hoverState = "in";
        if (!d.options.delay || !d.options.delay.show) {
            return d.show();
        }
        d.timeout = setTimeout(function() {
            if (d.hoverState == "in") {
                d.show();
            }
        }, d.options.delay.show);
    };
    b.prototype.leave = function(e) {
        var d = e instanceof this.constructor ? e : c(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        clearTimeout(d.timeout);
        d.hoverState = "out";
        if (!d.options.delay || !d.options.delay.hide) {
            return d.hide();
        }
        d.timeout = setTimeout(function() {
            if (d.hoverState == "out") {
                d.hide();
            }
        }, d.options.delay.hide);
    };
    b.prototype.show = function() {
        var n = c.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(n);
            if (n.isDefaultPrevented()) {
                return;
            }
            var j = this.tip();
            this.setContent();
            if (this.options.animation) {
                j.addClass("fade");
            }
            var i = typeof this.options.placement == "function" ? this.options.placement.call(this, j[0], this.$element[0]) : this.options.placement;
            var r = /\s?auto?\s?/i;
            var s = r.test(i);
            if (s) {
                i = i.replace(r, "") || "top";
            }
            j.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(i);
            this.options.container ? j.appendTo(this.options.container) : j.insertAfter(this.$element);
            var o = this.getPosition();
            var d = j[0].offsetWidth;
            var l = j[0].offsetHeight;
            if (s) {
                var h = this.$element.parent();
                var g = i;
                var p = document.documentElement.scrollTop || document.body.scrollTop;
                var q = this.options.container == "body" ? window.innerWidth : h.outerWidth();
                var m = this.options.container == "body" ? window.innerHeight : h.outerHeight();
                var k = this.options.container == "body" ? 0 : h.offset().left;
                i = i == "bottom" && o.top + o.height + l - p > m ? "top" : i == "top" && o.top - p - l < 0 ? "bottom" : i == "right" && o.right + d > q ? "left" : i == "left" && o.left - d < k ? "right" : i;
                j.removeClass(g).addClass(i);
            }
            var f = this.getCalculatedOffset(i, o, d, l);
            this.applyPlacement(f, i);
            this.$element.trigger("shown.bs." + this.type);
        }
    };
    b.prototype.applyPlacement = function(i, j) {
        var g;
        var k = this.tip();
        var f = k[0].offsetWidth;
        var n = k[0].offsetHeight;
        var e = parseInt(k.css("margin-top"), 10);
        var h = parseInt(k.css("margin-left"), 10);
        if (isNaN(e)) {
            e = 0;
        }
        if (isNaN(h)) {
            h = 0;
        }
        i.top = i.top + e;
        i.left = i.left + h;
        k.offset(i).addClass("in");
        var d = k[0].offsetWidth;
        var l = k[0].offsetHeight;
        if (j == "top" && l != n) {
            g = true;
            i.top = i.top + n - l;
        }
        if (/bottom|top/.test(j)) {
            var m = 0;
            if (i.left < 0) {
                m = i.left * -2;
                i.left = 0;
                k.offset(i);
                d = k[0].offsetWidth;
                l = k[0].offsetHeight;
            }
            this.replaceArrow(m - f + d, d, "left");
        } else {
            this.replaceArrow(l - n, l, "top");
        }
        if (g) {
            k.offset(i);
        }
    };
    b.prototype.replaceArrow = function(f, e, d) {
        this.arrow().css(d, f ? (50 * (1 - f / e) + "%") : "");
    };
    b.prototype.setContent = function() {
        var e = this.tip();
        var d = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](d);
        e.removeClass("fade in top bottom left right");
    };
    b.prototype.hide = function() {
        var f = this;
        var h = this.tip();
        var g = c.Event("hide.bs." + this.type);

        function d() {
            if (f.hoverState != "in") {
                h.detach();
            }
        }
        this.$element.trigger(g);
        if (g.isDefaultPrevented()) {
            return;
        }
        h.removeClass("in");
        c.support.transition && this.$tip.hasClass("fade") ? h.one(c.support.transition.end, d).emulateTransitionEnd(150) : d();
        this.$element.trigger("hidden.bs." + this.type);
        return this;
    };
    b.prototype.fixTitle = function() {
        var d = this.$element;
        if (d.attr("title") || typeof(d.attr("data-original-title")) != "string") {
            d.attr("data-original-title", d.attr("title") || "").attr("title", "");
        }
    };
    b.prototype.hasContent = function() {
        return this.getTitle();
    };
    b.prototype.getPosition = function() {
        var d = this.$element[0];
        return c.extend({}, (typeof d.getBoundingClientRect == "function") ? d.getBoundingClientRect() : {
            width: d.offsetWidth,
            height: d.offsetHeight
        }, this.$element.offset());
    };
    b.prototype.getCalculatedOffset = function(d, g, e, f) {
        return d == "bottom" ? {
            top: g.top + g.height,
            left: g.left + g.width / 2 - e / 2
        } : d == "top" ? {
            top: g.top - f,
            left: g.left + g.width / 2 - e / 2
        } : d == "left" ? {
            top: g.top + g.height / 2 - f / 2,
            left: g.left - e
        } : {
            top: g.top + g.height / 2 - f / 2,
            left: g.left + g.width
        };
    };
    b.prototype.getTitle = function() {
        var f;
        var d = this.$element;
        var e = this.options;
        f = d.attr("data-original-title") || (typeof e.title == "function" ? e.title.call(d[0]) : e.title);
        return f;
    };
    b.prototype.tip = function() {
        return this.$tip = this.$tip || c(this.options.template);
    };
    b.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
    };
    b.prototype.validate = function() {
        if (!this.$element[0].parentNode) {
            this.hide();
            this.$element = null;
            this.options = null;
        }
    };
    b.prototype.enable = function() {
        this.enabled = true;
    };
    b.prototype.disable = function() {
        this.enabled = false;
    };
    b.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled;
    };
    b.prototype.toggle = function(f) {
        var d = f ? c(f.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        d.tip().hasClass("in") ? d.leave(d) : d.enter(d);
    };
    b.prototype.destroy = function() {
        this.hide().$element.off("." + this.type).removeData("bs." + this.type);
    };
    var a = c.fn.tooltip;
    c.fn.tooltip = function(d) {
        return this.each(function() {
            var g = c(this);
            var f = g.data("bs.tooltip");
            var e = typeof d == "object" && d;
            if (!f) {
                g.data("bs.tooltip", (f = new b(this, e)));
            }
            if (typeof d == "string") {
                f[d]();
            }
        });
    };
    c.fn.tooltip.Constructor = b;
    c.fn.tooltip.noConflict = function() {
        c.fn.tooltip = a;
        return this;
    };
}(window.jQuery); + function(c) {
    var b = function(e, d) {
        this.init("popover", e, d);
    };
    if (!c.fn.tooltip) {
        throw new Error("Popover requires tooltip.js");
    }
    b.DEFAULTS = c.extend({}, c.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    });
    b.prototype = c.extend({}, c.fn.tooltip.Constructor.prototype);
    b.prototype.constructor = b;
    b.prototype.getDefaults = function() {
        return b.DEFAULTS;
    };
    b.prototype.setContent = function() {
        var f = this.tip();
        var e = this.getTitle();
        var d = this.getContent();
        f.find(".popover-title")[this.options.html ? "html" : "text"](e);
        f.find(".popover-content")[this.options.html ? "html" : "text"](d);
        f.removeClass("fade top bottom left right in");
        if (!f.find(".popover-title").html()) {
            f.find(".popover-title").hide();
        }
    };
    b.prototype.hasContent = function() {
        return this.getTitle() || this.getContent();
    };
    b.prototype.getContent = function() {
        var d = this.$element;
        var e = this.options;
        return d.attr("data-content") || (typeof e.content == "function" ? e.content.call(d[0]) : e.content);
    };
    b.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow");
    };
    b.prototype.tip = function() {
        if (!this.$tip) {
            this.$tip = c(this.options.template);
        }
        return this.$tip;
    };
    var a = c.fn.popover;
    c.fn.popover = function(d) {
        return this.each(function() {
            var g = c(this);
            var f = g.data("bs.popover");
            var e = typeof d == "object" && d;
            if (!f) {
                g.data("bs.popover", (f = new b(this, e)));
            }
            if (typeof d == "string") {
                f[d]();
            }
        });
    };
    c.fn.popover.Constructor = b;
    c.fn.popover.noConflict = function() {
        c.fn.popover = a;
        return this;
    };
}(window.jQuery); + function(c) {
    function b(f, e) {
        var d;
        var g = c.proxy(this.process, this);
        this.$element = c(f).is("body") ? c(window) : c(f);
        this.$body = c("body");
        this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", g);
        this.options = c.extend({}, b.DEFAULTS, e);
        this.selector = (this.options.target || ((d = c(f).attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "")) || "") + " .nav li > a";
        this.offsets = c([]);
        this.targets = c([]);
        this.activeTarget = null;
        this.refresh();
        this.process();
    }
    b.DEFAULTS = {
        offset: 10
    };
    b.prototype.refresh = function() {
        var d = this.$element[0] == window ? "offset" : "position";
        this.offsets = c([]);
        this.targets = c([]);
        var e = this;
        var f = this.$body.find(this.selector).map(function() {
            var h = c(this);
            var g = h.data("target") || h.attr("href");
            var i = /^#\w/.test(g) && c(g);
            return (i && i.length && [
                [i[d]().top + (!c.isWindow(e.$scrollElement.get(0)) && e.$scrollElement.scrollTop()), g]
            ]) || null;
        }).sort(function(h, g) {
            return h[0] - g[0];
        }).each(function() {
            e.offsets.push(this[0]);
            e.targets.push(this[1]);
        });
    };
    b.prototype.process = function() {
        var j = this.$scrollElement.scrollTop() + this.options.offset;
        var f = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight;
        var h = f - this.$scrollElement.height();
        var g = this.offsets;
        var d = this.targets;
        var k = this.activeTarget;
        var e;
        if (j >= h) {
            return k != (e = d.last()[0]) && this.activate(e);
        }
        for (e = g.length; e--;) {
            k != d[e] && j >= g[e] && (!g[e + 1] || j <= g[e + 1]) && this.activate(d[e]);
        }
    };
    b.prototype.activate = function(f) {
        this.activeTarget = f;
        c(this.selector).parents(".active").removeClass("active");
        var d = this.selector + '[data-target="' + f + '"],' + this.selector + '[href="' + f + '"]';
        var e = c(d).parents("li").addClass("active");
        if (e.parent(".dropdown-menu").length) {
            e = e.closest("li.dropdown").addClass("active");
        }
        e.trigger("activate");
    };
    var a = c.fn.scrollspy;
    c.fn.scrollspy = function(d) {
        return this.each(function() {
            var g = c(this);
            var f = g.data("bs.scrollspy");
            var e = typeof d == "object" && d;
            if (!f) {
                g.data("bs.scrollspy", (f = new b(this, e)));
            }
            if (typeof d == "string") {
                f[d]();
            }
        });
    };
    c.fn.scrollspy.Constructor = b;
    c.fn.scrollspy.noConflict = function() {
        c.fn.scrollspy = a;
        return this;
    };
    c(window).on("load", function() {
        c('[data-spy="scroll"]').each(function() {
            var d = c(this);
            d.scrollspy(d.data());
        });
    });
}(window.jQuery); + function(c) {
    var b = function(d) {
        this.element = c(d);
    };
    b.prototype.show = function() {
        var j = this.element;
        var g = j.closest("ul:not(.dropdown-menu)");
        var f = j.attr("data-target");
        if (!f) {
            f = j.attr("href");
            f = f && f.replace(/.*(?=#[^\s]*$)/, "");
        }
        if (j.parent("li").hasClass("active")) {
            return;
        }
        var h = g.find(".active:last a")[0];
        var i = c.Event("show.bs.tab", {
            relatedTarget: h
        });
        j.trigger(i);
        if (i.isDefaultPrevented()) {
            return;
        }
        var d = c(f);
        this.activate(j.parent("li"), g);
        this.activate(d, d.parent(), function() {
            j.trigger({
                type: "shown.bs.tab",
                relatedTarget: h
            });
        });
    };
    b.prototype.activate = function(f, e, i) {
        var d = e.find("> .active");
        var h = i && c.support.transition && d.hasClass("fade");

        function g() {
            d.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");
            f.addClass("active");
            if (h) {
                f[0].offsetWidth;
                f.addClass("in");
            } else {
                f.removeClass("fade");
            }
            if (f.parent(".dropdown-menu")) {
                f.closest("li.dropdown").addClass("active");
            }
            i && i();
        }
        h ? d.one(c.support.transition.end, g).emulateTransitionEnd(150) : g();
        d.removeClass("in");
    };
    var a = c.fn.tab;
    c.fn.tab = function(d) {
        return this.each(function() {
            var f = c(this);
            var e = f.data("bs.tab");
            if (!e) {
                f.data("bs.tab", (e = new b(this)));
            }
            if (typeof d == "string") {
                e[d]();
            }
        });
    };
    c.fn.tab.Constructor = b;
    c.fn.tab.noConflict = function() {
        c.fn.tab = a;
        return this;
    };
    c(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(d) {
        d.preventDefault();
        c(this).tab("show");
    });
}(window.jQuery); + function(c) {
    var b = function(e, d) {
        this.options = c.extend({}, b.DEFAULTS, d);
        this.$window = c(window).on("scroll.bs.affix.data-api", c.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", c.proxy(this.checkPositionWithEventLoop, this));
        this.$element = c(e);
        this.affixed = this.unpin = null;
        this.checkPosition();
    };
    b.RESET = "affix affix-top affix-bottom";
    b.DEFAULTS = {
        offset: 0
    };
    b.prototype.checkPositionWithEventLoop = function() {
        setTimeout(c.proxy(this.checkPosition, this), 1);
    };
    b.prototype.checkPosition = function() {
        if (!this.$element.is(":visible")) {
            return;
        }
        var h = c(document).height();
        var i = this.$window.scrollTop();
        var d = this.$element.offset();
        var j = this.options.offset;
        var g = j.top;
        var f = j.bottom;
        if (typeof j != "object") {
            f = g = j;
        }
        if (typeof g == "function") {
            g = j.top();
        }
        if (typeof f == "function") {
            f = j.bottom();
        }
        var e = this.unpin != null && (i + this.unpin <= d.top) ? false : f != null && (d.top + this.$element.height() >= h - f) ? "bottom" : g != null && (i <= g) ? "top" : false;
        if (this.affixed === e) {
            return;
        }
        if (this.unpin) {
            this.$element.css("top", "");
        }
        this.affixed = e;
        this.unpin = e == "bottom" ? d.top - i : null;
        this.$element.removeClass(b.RESET).addClass("affix" + (e ? "-" + e : ""));
        if (e == "bottom") {
            this.$element.offset({
                top: document.body.offsetHeight - f - this.$element.height()
            });
        }
    };
    var a = c.fn.affix;
    c.fn.affix = function(d) {
        return this.each(function() {
            var g = c(this);
            var f = g.data("bs.affix");
            var e = typeof d == "object" && d;
            if (!f) {
                g.data("bs.affix", (f = new b(this, e)));
            }
            if (typeof d == "string") {
                f[d]();
            }
        });
    };
    c.fn.affix.Constructor = b;
    c.fn.affix.noConflict = function() {
        c.fn.affix = a;
        return this;
    };
    c(window).on("load", function() {
        c('[data-spy="affix"]').each(function() {
            var e = c(this);
            var d = e.data();
            d.offset = d.offset || {};
            if (d.offsetBottom) {
                d.offset.bottom = d.offsetBottom;
            }
            if (d.offsetTop) {
                d.offset.top = d.offsetTop;
            }
            e.affix(d);
        });
    });
}(window.jQuery);
(function(h) {
    var c = h(window);

    function k() {
        return new Date(Date.UTC.apply(Date, arguments));
    }

    function e() {
        var n = new Date();
        return k(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate());
    }
    var i = function(o, n) {
        var p = this;
        this._process_options(n);
        this.element = h(o);
        this.isInline = false;
        this.isInput = this.element.is("input");
        this.component = this.element.is(".date") ? this.element.find(".add-on, .btn") : false;
        this.hasInput = this.component && this.element.find("input").length;
        if (this.component && this.component.length === 0) {
            this.component = false;
        }
        this.picker = h(j.template);
        this._buildEvents();
        this._attachEvents();
        if (this.isInline) {
            this.picker.addClass("datepicker-inline").appendTo(this.element);
        } else {
            this.picker.addClass("datepicker-dropdown dropdown-menu");
        }
        if (this.o.rtl) {
            this.picker.addClass("datepicker-rtl");
            this.picker.find(".prev i, .next i").toggleClass("icon-arrow-left icon-arrow-right");
        }
        this.viewMode = this.o.startView;
        if (this.o.calendarWeeks) {
            this.picker.find("tfoot th.today").attr("colspan", function(q, r) {
                return parseInt(r) + 1;
            });
        }
        this._allow_update = false;
        this.setStartDate(this._o.startDate);
        this.setEndDate(this._o.endDate);
        this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);
        this.fillDow();
        this.fillMonths();
        this._allow_update = true;
        this.update();
        this.showMode();
        if (this.isInline) {
            this.show();
        }
    };
    i.prototype = {
        constructor: i,
        _process_options: function(n) {
            this._o = h.extend({}, this._o, n);
            var s = this.o = h.extend({}, this._o);
            var r = s.language;
            if (!b[r]) {
                r = r.split("-")[0];
                if (!b[r]) {
                    r = f.language;
                }
            }
            s.language = r;
            switch (s.startView) {
                case 2:
                case "decade":
                    s.startView = 2;
                    break;
                case 1:
                case "year":
                    s.startView = 1;
                    break;
                default:
                    s.startView = 0;
            }
            switch (s.minViewMode) {
                case 1:
                case "months":
                    s.minViewMode = 1;
                    break;
                case 2:
                case "years":
                    s.minViewMode = 2;
                    break;
                default:
                    s.minViewMode = 0;
            }
            s.startView = Math.max(s.startView, s.minViewMode);
            s.weekStart %= 7;
            s.weekEnd = ((s.weekStart + 6) % 7);
            var p = j.parseFormat(s.format);
            if (s.startDate !== -Infinity) {
                if (!!s.startDate) {
                    if (s.startDate instanceof Date) {
                        s.startDate = this._local_to_utc(this._zero_time(s.startDate));
                    } else {
                        s.startDate = j.parseDate(s.startDate, p, s.language);
                    }
                } else {
                    s.startDate = -Infinity;
                }
            }
            if (s.endDate !== Infinity) {
                if (!!s.endDate) {
                    if (s.endDate instanceof Date) {
                        s.endDate = this._local_to_utc(this._zero_time(s.endDate));
                    } else {
                        s.endDate = j.parseDate(s.endDate, p, s.language);
                    }
                } else {
                    s.endDate = Infinity;
                }
            }
            s.daysOfWeekDisabled = s.daysOfWeekDisabled || [];
            if (!h.isArray(s.daysOfWeekDisabled)) {
                s.daysOfWeekDisabled = s.daysOfWeekDisabled.split(/[,\s]*/);
            }
            s.daysOfWeekDisabled = h.map(s.daysOfWeekDisabled, function(o) {
                return parseInt(o, 10);
            });
            var q = String(s.orientation).toLowerCase().split(/\s+/g),
                t = s.orientation.toLowerCase();
            q = h.grep(q, function(o) {
                return (/^auto|left|right|top|bottom$/).test(o);
            });
            s.orientation = {
                x: "auto",
                y: "auto"
            };
            if (!t || t === "auto") {} else {
                if (q.length === 1) {
                    switch (q[0]) {
                        case "top":
                        case "bottom":
                            s.orientation.y = q[0];
                            break;
                        case "left":
                        case "right":
                            s.orientation.x = q[0];
                            break;
                    }
                } else {
                    t = h.grep(q, function(o) {
                        return (/^left|right$/).test(o);
                    });
                    s.orientation.x = t[0] || "auto";
                    t = h.grep(q, function(o) {
                        return (/^top|bottom$/).test(o);
                    });
                    s.orientation.y = t[0] || "auto";
                }
            }
        },
        _events: [],
        _secondaryEvents: [],
        _applyEvents: function(n) {
            for (var o = 0, p, q; o < n.length; o++) {
                p = n[o][0];
                q = n[o][1];
                p.on(q);
            }
        },
        _unapplyEvents: function(n) {
            for (var o = 0, p, q; o < n.length; o++) {
                p = n[o][0];
                q = n[o][1];
                p.off(q);
            }
        },
        _buildEvents: function() {
            if (this.isInput) {
                this._events = [
                    [this.element, {
                        focus: h.proxy(this.show, this),
                        keyup: h.proxy(this.update, this),
                        keydown: h.proxy(this.keydown, this)
                    }]
                ];
            } else {
                if (this.component && this.hasInput) {
                    this._events = [
                        [this.element.find("input"), {
                            focus: h.proxy(this.show, this),
                            keyup: h.proxy(this.update, this),
                            keydown: h.proxy(this.keydown, this)
                        }],
                        [this.component, {
                            click: h.proxy(this.show, this)
                        }]
                    ];
                } else {
                    if (this.element.is("div")) {
                        this.isInline = true;
                    } else {
                        this._events = [
                            [this.element, {
                                click: h.proxy(this.show, this)
                            }]
                        ];
                    }
                }
            }
            this._secondaryEvents = [
                [this.picker, {
                    click: h.proxy(this.click, this)
                }],
                [h(window), {
                    resize: h.proxy(this.place, this)
                }],
                [h(document), {
                    mousedown: h.proxy(function(n) {
                        if (!(this.element.is(n.target) || this.element.find(n.target).length || this.picker.is(n.target) || this.picker.find(n.target).length)) {
                            this.hide();
                        }
                    }, this)
                }]
            ];
        },
        _attachEvents: function() {
            this._detachEvents();
            this._applyEvents(this._events);
        },
        _detachEvents: function() {
            this._unapplyEvents(this._events);
        },
        _attachSecondaryEvents: function() {
            this._detachSecondaryEvents();
            this._applyEvents(this._secondaryEvents);
        },
        _detachSecondaryEvents: function() {
            this._unapplyEvents(this._secondaryEvents);
        },
        _trigger: function(p, q) {
            var o = q || this.date,
                n = this._utc_to_local(o);
            this.element.trigger({
                type: p,
                date: n,
                format: h.proxy(function(s) {
                    var r = s || this.o.format;
                    return j.formatDate(o, r, this.o.language);
                }, this)
            });
        },
        show: function(n) {
            if (!this.isInline) {
                this.picker.appendTo("body");
            }
            this.picker.show();
            this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
            this.place();
            this._attachSecondaryEvents();
            if (n) {
                n.preventDefault();
            }
            this._trigger("show");
        },
        hide: function(n) {
            if (this.isInline) {
                return;
            }
            if (!this.picker.is(":visible")) {
                return;
            }
            this.picker.hide().detach();
            this._detachSecondaryEvents();
            this.viewMode = this.o.startView;
            this.showMode();
            if (this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val())) {
                this.setValue();
            }
            this._trigger("hide");
        },
        remove: function() {
            this.hide();
            this._detachEvents();
            this._detachSecondaryEvents();
            this.picker.remove();
            delete this.element.data().datepicker;
            if (!this.isInput) {
                delete this.element.data().date;
            }
        },
        _utc_to_local: function(n) {
            return new Date(n.getTime() + (n.getTimezoneOffset() * 60000));
        },
        _local_to_utc: function(n) {
            return new Date(n.getTime() - (n.getTimezoneOffset() * 60000));
        },
        _zero_time: function(n) {
            return new Date(n.getFullYear(), n.getMonth(), n.getDate());
        },
        _zero_utc_time: function(n) {
            return new Date(Date.UTC(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()));
        },
        getDate: function() {
            return this._utc_to_local(this.getUTCDate());
        },
        getUTCDate: function() {
            return this.date;
        },
        setDate: function(n) {
            this.setUTCDate(this._local_to_utc(n));
        },
        setUTCDate: function(n) {
            this.date = n;
            this.setValue();
        },
        setValue: function() {
            var n = this.getFormattedDate();
            if (!this.isInput) {
                if (this.component) {
                    this.element.find("input").val(n).change();
                }
            } else {
                this.element.val(n).change();
            }
        },
        getFormattedDate: function(n) {
            if (n === undefined) {
                n = this.o.format;
            }
            return j.formatDate(this.date, n, this.o.language);
        },
        setStartDate: function(n) {
            this._process_options({
                startDate: n
            });
            this.update();
            this.updateNavArrows();
        },
        setEndDate: function(n) {
            this._process_options({
                endDate: n
            });
            this.update();
            this.updateNavArrows();
        },
        setDaysOfWeekDisabled: function(n) {
            this._process_options({
                daysOfWeekDisabled: n
            });
            this.update();
            this.updateNavArrows();
        },
        place: function() {
            if (this.isInline) {
                return;
            }
            var B = this.picker.outerWidth(),
                x = this.picker.outerHeight(),
                r = 10,
                t = c.width(),
                o = c.height(),
                s = c.scrollTop();
            var z = parseInt(this.element.parents().filter(function() {
                return h(this).css("z-index") != "auto";
            }).first().css("z-index")) + 10;
            var w = this.component ? this.component.parent().offset() : this.element.offset();
            var A = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
            var q = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
            var v = w.left,
                y = w.top;
            this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom " + "datepicker-orient-right datepicker-orient-left");
            if (this.o.orientation.x !== "auto") {
                this.picker.addClass("datepicker-orient-" + this.o.orientation.x);
                if (this.o.orientation.x === "right") {
                    v -= B - q;
                }
            } else {
                this.picker.addClass("datepicker-orient-left");
                if (w.left < 0) {
                    v -= w.left - r;
                } else {
                    if (w.left + B > t) {
                        v = t - B - r;
                    }
                }
            }
            var n = this.o.orientation.y,
                p, u;
            if (n === "auto") {
                p = -s + w.top - x;
                u = s + o - (w.top + A + x);
                if (Math.max(p, u) === u) {
                    n = "top";
                } else {
                    n = "bottom";
                }
            }
            this.picker.addClass("datepicker-orient-" + n);
            if (n === "top") {
                y += A;
            } else {
                y -= x + parseInt(this.picker.css("padding-top"));
            }
            this.picker.css({
                top: y,
                left: v,
                zIndex: z
            });
        },
        _allow_update: true,
        update: function() {
            if (!this._allow_update) {
                return;
            }
            var p = new Date(this.date),
                n, o = false;
            if (arguments && arguments.length && (typeof arguments[0] === "string" || arguments[0] instanceof Date)) {
                n = arguments[0];
                if (n instanceof Date) {
                    n = this._local_to_utc(n);
                }
                o = true;
            } else {
                n = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val();
                delete this.element.data().date;
            }
            this.date = j.parseDate(n, this.o.format, this.o.language);
            if (o) {
                this.setValue();
            } else {
                if (n) {
                    if (p.getTime() !== this.date.getTime()) {
                        this._trigger("changeDate");
                    }
                } else {
                    this._trigger("clearDate");
                }
            }
            if (this.date < this.o.startDate) {
                this.viewDate = new Date(this.o.startDate);
                this.date = new Date(this.o.startDate);
            } else {
                if (this.date > this.o.endDate) {
                    this.viewDate = new Date(this.o.endDate);
                    this.date = new Date(this.o.endDate);
                } else {
                    this.viewDate = new Date(this.date);
                    this.date = new Date(this.date);
                }
            }
            this.fill();
        },
        fillDow: function() {
            var o = this.o.weekStart,
                p = "<tr>";
            if (this.o.calendarWeeks) {
                var n = '<th class="cw">&nbsp;</th>';
                p += n;
                this.picker.find(".datepicker-days thead tr:first-child").prepend(n);
            }
            while (o < this.o.weekStart + 7) {
                p += '<th class="dow">' + b[this.o.language].daysMin[(o++) % 7] + "</th>";
            }
            p += "</tr>";
            this.picker.find(".datepicker-days thead").append(p);
        },
        fillMonths: function() {
            var o = "",
                n = 0;
            while (n < 12) {
                o += '<span class="month">' + b[this.o.language].monthsShort[n++] + "</span>";
            }
            this.picker.find(".datepicker-months td").html(o);
        },
        setRange: function(n) {
            if (!n || !n.length) {
                delete this.range;
            } else {
                this.range = h.map(n, function(o) {
                    return o.valueOf();
                });
            }
            this.fill();
        },
        getClassNames: function(q) {
            var o = [],
                r = this.viewDate.getUTCFullYear(),
                s = this.viewDate.getUTCMonth(),
                n = this.date.valueOf(),
                p = new Date();
            if (q.getUTCFullYear() < r || (q.getUTCFullYear() == r && q.getUTCMonth() < s)) {
                o.push("old");
            } else {
                if (q.getUTCFullYear() > r || (q.getUTCFullYear() == r && q.getUTCMonth() > s)) {
                    o.push("new");
                }
            }
            if (this.o.todayHighlight && q.getUTCFullYear() == p.getFullYear() && q.getUTCMonth() == p.getMonth() && q.getUTCDate() == p.getDate()) {
                o.push("today");
            }
            if (n && q.valueOf() == n) {
                o.push("active");
            }
            if (q.valueOf() < this.o.startDate || q.valueOf() > this.o.endDate || h.inArray(q.getUTCDay(), this.o.daysOfWeekDisabled) !== -1) {
                o.push("disabled");
            }
            if (this.range) {
                if (q > this.range[0] && q < this.range[this.range.length - 1]) {
                    o.push("range");
                }
                if (h.inArray(q.valueOf(), this.range) != -1) {
                    o.push("selected");
                }
            }
            return o;
        },
        fill: function() {
            var F = new Date(this.viewDate),
                w = F.getUTCFullYear(),
                G = F.getUTCMonth(),
                A = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
                E = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
                t = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
                B = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
                u = this.date && this.date.valueOf(),
                q;
            this.picker.find(".datepicker-days thead th.datepicker-switch").text(b[this.o.language].months[G] + " " + w);
            this.picker.find("tfoot th.today").text(b[this.o.language].today).toggle(this.o.todayBtn !== false);
            this.picker.find("tfoot th.clear").text(b[this.o.language].clear).toggle(this.o.clearBtn !== false);
            this.updateNavArrows();
            this.fillMonths();
            var I = k(w, G - 1, 28, 0, 0, 0, 0),
                D = j.getDaysInMonth(I.getUTCFullYear(), I.getUTCMonth());
            I.setUTCDate(D);
            I.setUTCDate(D - (I.getUTCDay() - this.o.weekStart + 7) % 7);
            var n = new Date(I);
            n.setUTCDate(n.getUTCDate() + 42);
            n = n.valueOf();
            var v = [];
            var z;
            while (I.valueOf() < n) {
                if (I.getUTCDay() == this.o.weekStart) {
                    v.push("<tr>");
                    if (this.o.calendarWeeks) {
                        var o = new Date(+I + (this.o.weekStart - I.getUTCDay() - 7) % 7 * 86400000),
                            r = new Date(+o + (7 + 4 - o.getUTCDay()) % 7 * 86400000),
                            p = new Date(+(p = k(r.getUTCFullYear(), 0, 1)) + (7 + 4 - p.getUTCDay()) % 7 * 86400000),
                            x = (r - p) / 86400000 / 7 + 1;
                        v.push('<td class="cw">' + x + "</td>");
                    }
                }
                z = this.getClassNames(I);
                z.push("day");
                if (this.o.beforeShowDay !== h.noop) {
                    var y = this.o.beforeShowDay(this._utc_to_local(I));
                    if (y === undefined) {
                        y = {};
                    } else {
                        if (typeof(y) === "boolean") {
                            y = {
                                enabled: y
                            };
                        } else {
                            if (typeof(y) === "string") {
                                y = {
                                    classes: y
                                };
                            }
                        }
                    }
                    if (y.enabled === false) {
                        z.push("disabled");
                    }
                    if (y.classes) {
                        z = z.concat(y.classes.split(/\s+/));
                    }
                    if (y.tooltip) {
                        q = y.tooltip;
                    }
                }
                z = h.unique(z);
                v.push('<td class="' + z.join(" ") + '"' + (q ? ' title="' + q + '"' : "") + ">" + I.getUTCDate() + "</td>");
                if (I.getUTCDay() == this.o.weekEnd) {
                    v.push("</tr>");
                }
                I.setUTCDate(I.getUTCDate() + 1);
            }
            this.picker.find(".datepicker-days tbody").empty().append(v.join(""));
            var J = this.date && this.date.getUTCFullYear();
            var s = this.picker.find(".datepicker-months").find("th:eq(1)").text(w).end().find("span").removeClass("active");
            if (J && J == w) {
                s.eq(this.date.getUTCMonth()).addClass("active");
            }
            if (w < A || w > t) {
                s.addClass("disabled");
            }
            if (w == A) {
                s.slice(0, E).addClass("disabled");
            }
            if (w == t) {
                s.slice(B + 1).addClass("disabled");
            }
            v = "";
            w = parseInt(w / 10, 10) * 10;
            var H = this.picker.find(".datepicker-years").find("th:eq(1)").text(w + "-" + (w + 9)).end().find("td");
            w -= 1;
            for (var C = -1; C < 11; C++) {
                v += '<span class="year' + (C == -1 ? " old" : C == 10 ? " new" : "") + (J == w ? " active" : "") + (w < A || w > t ? " disabled" : "") + '">' + w + "</span>";
                w += 1;
            }
            H.html(v);
        },
        updateNavArrows: function() {
            if (!this._allow_update) {
                return;
            }
            var p = new Date(this.viewDate),
                n = p.getUTCFullYear(),
                o = p.getUTCMonth();
            switch (this.viewMode) {
                case 0:
                    if (this.o.startDate !== -Infinity && n <= this.o.startDate.getUTCFullYear() && o <= this.o.startDate.getUTCMonth()) {
                        this.picker.find(".prev").css({
                            visibility: "hidden"
                        });
                    } else {
                        this.picker.find(".prev").css({
                            visibility: "visible"
                        });
                    }
                    if (this.o.endDate !== Infinity && n >= this.o.endDate.getUTCFullYear() && o >= this.o.endDate.getUTCMonth()) {
                        this.picker.find(".next").css({
                            visibility: "hidden"
                        });
                    } else {
                        this.picker.find(".next").css({
                            visibility: "visible"
                        });
                    }
                    break;
                case 1:
                case 2:
                    if (this.o.startDate !== -Infinity && n <= this.o.startDate.getUTCFullYear()) {
                        this.picker.find(".prev").css({
                            visibility: "hidden"
                        });
                    } else {
                        this.picker.find(".prev").css({
                            visibility: "visible"
                        });
                    }
                    if (this.o.endDate !== Infinity && n >= this.o.endDate.getUTCFullYear()) {
                        this.picker.find(".next").css({
                            visibility: "hidden"
                        });
                    } else {
                        this.picker.find(".next").css({
                            visibility: "visible"
                        });
                    }
                    break;
            }
        },
        click: function(r) {
            r.preventDefault();
            var s = h(r.target).closest("span, td, th");
            if (s.length == 1) {
                switch (s[0].nodeName.toLowerCase()) {
                    case "th":
                        switch (s[0].className) {
                            case "datepicker-switch":
                                this.showMode(1);
                                break;
                            case "prev":
                            case "next":
                                var n = j.modes[this.viewMode].navStep * (s[0].className == "prev" ? -1 : 1);
                                switch (this.viewMode) {
                                    case 0:
                                        this.viewDate = this.moveMonth(this.viewDate, n);
                                        this._trigger("changeMonth", this.viewDate);
                                        break;
                                    case 1:
                                    case 2:
                                        this.viewDate = this.moveYear(this.viewDate, n);
                                        if (this.viewMode === 1) {
                                            this._trigger("changeYear", this.viewDate);
                                        }
                                        break;
                                }
                                this.fill();
                                break;
                            case "today":
                                var o = new Date();
                                o = k(o.getFullYear(), o.getMonth(), o.getDate(), 0, 0, 0);
                                this.showMode(-2);
                                var p = this.o.todayBtn == "linked" ? null : "view";
                                this._setDate(o, p);
                                break;
                            case "clear":
                                var q;
                                if (this.isInput) {
                                    q = this.element;
                                } else {
                                    if (this.component) {
                                        q = this.element.find("input");
                                    }
                                }
                                if (q) {
                                    q.val("").change();
                                }
                                this._trigger("changeDate");
                                this.update();
                                if (this.o.autoclose) {
                                    this.hide();
                                }
                                break;
                        }
                        break;
                    case "span":
                        if (!s.is(".disabled")) {
                            this.viewDate.setUTCDate(1);
                            if (s.is(".month")) {
                                var v = 1;
                                var t = s.parent().find("span").index(s);
                                var u = this.viewDate.getUTCFullYear();
                                this.viewDate.setUTCMonth(t);
                                this._trigger("changeMonth", this.viewDate);
                                if (this.o.minViewMode === 1) {
                                    this._setDate(k(u, t, v, 0, 0, 0, 0));
                                }
                            } else {
                                var u = parseInt(s.text(), 10) || 0;
                                var v = 1;
                                var t = 0;
                                this.viewDate.setUTCFullYear(u);
                                this._trigger("changeYear", this.viewDate);
                                if (this.o.minViewMode === 2) {
                                    this._setDate(k(u, t, v, 0, 0, 0, 0));
                                }
                            }
                            this.showMode(-1);
                            this.fill();
                        }
                        break;
                    case "td":
                        if (s.is(".day") && !s.is(".disabled")) {
                            var v = parseInt(s.text(), 10) || 1;
                            var u = this.viewDate.getUTCFullYear(),
                                t = this.viewDate.getUTCMonth();
                            if (s.is(".old")) {
                                if (t === 0) {
                                    t = 11;
                                    u -= 1;
                                } else {
                                    t -= 1;
                                }
                            } else {
                                if (s.is(".new")) {
                                    if (t == 11) {
                                        t = 0;
                                        u += 1;
                                    } else {
                                        t += 1;
                                    }
                                }
                            }
                            this._setDate(k(u, t, v, 0, 0, 0, 0));
                        }
                        break;
                }
            }
        },
        _setDate: function(n, p) {
            if (!p || p == "date") {
                this.date = new Date(n);
            }
            if (!p || p == "view") {
                this.viewDate = new Date(n);
            }
            this.fill();
            this.setValue();
            this._trigger("changeDate");
            var o;
            if (this.isInput) {
                o = this.element;
            } else {
                if (this.component) {
                    o = this.element.find("input");
                }
            }
            if (o) {
                o.change();
            }
            if (this.o.autoclose && (!p || p == "date")) {
                this.hide();
            }
        },
        moveMonth: function(n, o) {
            if (!o) {
                return n;
            }
            var r = new Date(n.valueOf()),
                v = r.getUTCDate(),
                s = r.getUTCMonth(),
                q = Math.abs(o),
                u, t;
            o = o > 0 ? 1 : -1;
            if (q == 1) {
                t = o == -1 ? function() {
                    return r.getUTCMonth() == s;
                } : function() {
                    return r.getUTCMonth() != u;
                };
                u = s + o;
                r.setUTCMonth(u);
                if (u < 0 || u > 11) {
                    u = (u + 12) % 12;
                }
            } else {
                for (var p = 0; p < q; p++) {
                    r = this.moveMonth(r, o);
                }
                u = r.getUTCMonth();
                r.setUTCDate(v);
                t = function() {
                    return u != r.getUTCMonth();
                };
            }
            while (t()) {
                r.setUTCDate(--v);
                r.setUTCMonth(u);
            }
            return r;
        },
        moveYear: function(o, n) {
            return this.moveMonth(o, n * 12);
        },
        dateWithinRange: function(n) {
            return n >= this.o.startDate && n <= this.o.endDate;
        },
        keydown: function(u) {
            if (this.picker.is(":not(:visible)")) {
                if (u.keyCode == 27) {
                    this.show();
                }
                return;
            }
            var q = false,
                p, o, t, n, s;
            switch (u.keyCode) {
                case 27:
                    this.hide();
                    u.preventDefault();
                    break;
                case 37:
                case 39:
                    if (!this.o.keyboardNavigation) {
                        break;
                    }
                    p = u.keyCode == 37 ? -1 : 1;
                    if (u.ctrlKey) {
                        n = this.moveYear(this.date, p);
                        s = this.moveYear(this.viewDate, p);
                        this._trigger("changeYear", this.viewDate);
                    } else {
                        if (u.shiftKey) {
                            n = this.moveMonth(this.date, p);
                            s = this.moveMonth(this.viewDate, p);
                            this._trigger("changeMonth", this.viewDate);
                        } else {
                            n = new Date(this.date);
                            n.setUTCDate(this.date.getUTCDate() + p);
                            s = new Date(this.viewDate);
                            s.setUTCDate(this.viewDate.getUTCDate() + p);
                        }
                    }
                    if (this.dateWithinRange(n)) {
                        this.date = n;
                        this.viewDate = s;
                        this.setValue();
                        this.update();
                        u.preventDefault();
                        q = true;
                    }
                    break;
                case 38:
                case 40:
                    if (!this.o.keyboardNavigation) {
                        break;
                    }
                    p = u.keyCode == 38 ? -1 : 1;
                    if (u.ctrlKey) {
                        n = this.moveYear(this.date, p);
                        s = this.moveYear(this.viewDate, p);
                        this._trigger("changeYear", this.viewDate);
                    } else {
                        if (u.shiftKey) {
                            n = this.moveMonth(this.date, p);
                            s = this.moveMonth(this.viewDate, p);
                            this._trigger("changeMonth", this.viewDate);
                        } else {
                            n = new Date(this.date);
                            n.setUTCDate(this.date.getUTCDate() + p * 7);
                            s = new Date(this.viewDate);
                            s.setUTCDate(this.viewDate.getUTCDate() + p * 7);
                        }
                    }
                    if (this.dateWithinRange(n)) {
                        this.date = n;
                        this.viewDate = s;
                        this.setValue();
                        this.update();
                        u.preventDefault();
                        q = true;
                    }
                    break;
                case 13:
                    this.hide();
                    u.preventDefault();
                    break;
                case 9:
                    this.hide();
                    break;
            }
            if (q) {
                this._trigger("changeDate");
                var r;
                if (this.isInput) {
                    r = this.element;
                } else {
                    if (this.component) {
                        r = this.element.find("input");
                    }
                }
                if (r) {
                    r.change();
                }
            }
        },
        showMode: function(n) {
            if (n) {
                this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + n));
            }
            this.picker.find(">div").hide().filter(".datepicker-" + j.modes[this.viewMode].clsName).css("display", "block");
            this.updateNavArrows();
        }
    };
    var m = function(o, n) {
        this.element = h(o);
        this.inputs = h.map(n.inputs, function(p) {
            return p.jquery ? p[0] : p;
        });
        delete n.inputs;
        h(this.inputs).datepicker(n).bind("changeDate", h.proxy(this.dateUpdated, this));
        this.pickers = h.map(this.inputs, function(p) {
            return h(p).data("datepicker");
        });
        this.updateDates();
    };
    m.prototype = {
        updateDates: function() {
            this.dates = h.map(this.pickers, function(n) {
                return n.date;
            });
            this.updateRanges();
        },
        updateRanges: function() {
            var n = h.map(this.dates, function(o) {
                return o.valueOf();
            });
            h.each(this.pickers, function(o, q) {
                q.setRange(n);
            });
        },
        dateUpdated: function(q) {
            var r = h(q.target).data("datepicker"),
                p = r.getUTCDate(),
                o = h.inArray(q.target, this.inputs),
                n = this.inputs.length;
            if (o == -1) {
                return;
            }
            if (p < this.dates[o]) {
                while (o >= 0 && p < this.dates[o]) {
                    this.pickers[o--].setUTCDate(p);
                }
            } else {
                if (p > this.dates[o]) {
                    while (o < n && p > this.dates[o]) {
                        this.pickers[o++].setUTCDate(p);
                    }
                }
            }
            this.updateDates();
        },
        remove: function() {
            h.map(this.pickers, function(n) {
                n.remove();
            });
            delete this.element.data().datepicker;
        }
    };

    function g(q, t) {
        var s = h(q).data(),
            n = {},
            r, p = new RegExp("^" + t.toLowerCase() + "([A-Z])"),
            t = new RegExp("^" + t.toLowerCase());
        for (var o in s) {
            if (t.test(o)) {
                r = o.replace(p, function(v, u) {
                    return u.toLowerCase();
                });
                n[r] = s[o];
            }
        }
        return n;
    }

    function a(p) {
        var n = {};
        if (!b[p]) {
            p = p.split("-")[0];
            if (!b[p]) {
                return;
            }
        }
        var o = b[p];
        h.each(l, function(r, q) {
            if (q in o) {
                n[q] = o[q];
            }
        });
        return n;
    }
    var d = h.fn.datepicker;
    h.fn.datepicker = function(q) {
        var o = Array.apply(null, arguments);
        o.shift();
        var p, n;
        this.each(function() {
            var y = h(this),
                w = y.data("datepicker"),
                s = typeof q == "object" && q;
            if (!w) {
                var u = g(this, "date"),
                    r = h.extend({}, f, u, s),
                    t = a(r.language),
                    v = h.extend({}, f, t, u, s);
                if (y.is(".input-daterange") || v.inputs) {
                    var x = {
                        inputs: v.inputs || y.find("input").toArray()
                    };
                    y.data("datepicker", (w = new m(this, h.extend(v, x))));
                } else {
                    y.data("datepicker", (w = new i(this, v)));
                }
            }
            if (typeof q == "string" && typeof w[q] == "function") {
                p = w[q].apply(w, o);
                if (p !== undefined) {
                    return false;
                }
            }
        });
        if (p !== undefined) {
            return p;
        } else {
            return this;
        }
    };
    var f = h.fn.datepicker.defaults = {
        autoclose: true,
        beforeShowDay: h.noop,
        calendarWeeks: false,
        clearBtn: false,
        daysOfWeekDisabled: [],
        endDate: Infinity,
        forceParse: true,
        format: "mm/dd/yyyy",
        keyboardNavigation: true,
        language: "en",
        minViewMode: 0,
        orientation: "auto",
        rtl: false,
        startDate: -Infinity,
        startView: 0,
        todayBtn: false,
        todayHighlight: false,
        weekStart: 0
    };
    var l = h.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
    h.fn.datepicker.Constructor = i;
    var b = h.fn.datepicker.dates = {
        en: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: "Today",
            clear: "Clear"
        }
    };
    var j = {
        modes: [{
            clsName: "days",
            navFnc: "Month",
            navStep: 1
        }, {
            clsName: "months",
            navFnc: "FullYear",
            navStep: 1
        }, {
            clsName: "years",
            navFnc: "FullYear",
            navStep: 10
        }],
        isLeapYear: function(n) {
            return (((n % 4 === 0) && (n % 100 !== 0)) || (n % 400 === 0));
        },
        getDaysInMonth: function(n, o) {
            return [31, (j.isLeapYear(n) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][o];
        },
        validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
        nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
        parseFormat: function(p) {
            var n = p.replace(this.validParts, "\0").split("\0"),
                o = p.match(this.validParts);
            if (!n || !n.length || !o || o.length === 0) {
                throw new Error("Invalid date format.");
            }
            return {
                separators: n,
                parts: o
            };
        },
        parseDate: function(q, A, u) {
            if (q instanceof Date) {
                return q;
            }
            if (typeof A === "string") {
                A = j.parseFormat(A);
            }
            if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(q)) {
                var C = /([\-+]\d+)([dmwy])/,
                    t = q.match(/([\-+]\d+)([dmwy])/g),
                    n, r;
                q = new Date();
                for (var v = 0; v < t.length; v++) {
                    n = C.exec(t[v]);
                    r = parseInt(n[1]);
                    switch (n[2]) {
                        case "d":
                            q.setUTCDate(q.getUTCDate() + r);
                            break;
                        case "m":
                            q = i.prototype.moveMonth.call(i.prototype, q, r);
                            break;
                        case "w":
                            q.setUTCDate(q.getUTCDate() + r * 7);
                            break;
                        case "y":
                            q = i.prototype.moveYear.call(i.prototype, q, r);
                            break;
                    }
                }
                return k(q.getUTCFullYear(), q.getUTCMonth(), q.getUTCDate(), 0, 0, 0);
            }
            var t = q && q.match(this.nonpunctuation) || [],
                q = new Date(),
                y = {},
                z = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                B = {
                    yyyy: function(F, s) {
                        return F.setUTCFullYear(s);
                    },
                    yy: function(F, s) {
                        return F.setUTCFullYear(2000 + s);
                    },
                    m: function(F, s) {
                        if (isNaN(F)) {
                            return F;
                        }
                        s -= 1;
                        while (s < 0) {
                            s += 12;
                        }
                        s %= 12;
                        F.setUTCMonth(s);
                        while (F.getUTCMonth() != s) {
                            F.setUTCDate(F.getUTCDate() - 1);
                        }
                        return F;
                    },
                    d: function(F, s) {
                        return F.setUTCDate(s);
                    }
                },
                p, w, n;
            B["M"] = B["MM"] = B["mm"] = B["m"];
            B["dd"] = B["d"];
            q = k(q.getFullYear(), q.getMonth(), q.getDate(), 0, 0, 0);
            var x = A.parts.slice();
            if (t.length != x.length) {
                x = h(x).filter(function(s, F) {
                    return h.inArray(F, z) !== -1;
                }).toArray();
            }
            if (t.length == x.length) {
                for (var v = 0, o = x.length; v < o; v++) {
                    p = parseInt(t[v], 10);
                    n = x[v];
                    if (isNaN(p)) {
                        switch (n) {
                            case "MM":
                                w = h(b[u].months).filter(function() {
                                    var s = this.slice(0, t[v].length),
                                        F = t[v].slice(0, s.length);
                                    return s == F;
                                });
                                p = h.inArray(w[0], b[u].months) + 1;
                                break;
                            case "M":
                                w = h(b[u].monthsShort).filter(function() {
                                    var s = this.slice(0, t[v].length),
                                        F = t[v].slice(0, s.length);
                                    return s == F;
                                });
                                p = h.inArray(w[0], b[u].monthsShort) + 1;
                                break;
                        }
                    }
                    y[n] = p;
                }
                for (var v = 0, E, D; v < z.length; v++) {
                    D = z[v];
                    if (D in y && !isNaN(y[D])) {
                        E = new Date(q);
                        B[D](E, y[D]);
                        if (!isNaN(E)) {
                            q = E;
                        }
                    }
                }
            }
            return q;
        },
        formatDate: function(n, r, t) {
            if (typeof r === "string") {
                r = j.parseFormat(r);
            }
            var s = {
                d: n.getUTCDate(),
                D: b[t].daysShort[n.getUTCDay()],
                DD: b[t].days[n.getUTCDay()],
                m: n.getUTCMonth() + 1,
                M: b[t].monthsShort[n.getUTCMonth()],
                MM: b[t].months[n.getUTCMonth()],
                yy: n.getUTCFullYear().toString().substring(2),
                yyyy: n.getUTCFullYear()
            };
            s.dd = (s.d < 10 ? "0" : "") + s.d;
            s.mm = (s.m < 10 ? "0" : "") + s.m;
            var n = [],
                q = h.extend([], r.separators);
            for (var p = 0, o = r.parts.length; p <= o; p++) {
                if (q.length) {
                    n.push(q.shift());
                }
                n.push(s[r.parts[p]]);
            }
            return n.join("");
        },
        headTemplate: "<thead>" + "<tr>" + '<th class="prev">&laquo;</th>' + '<th colspan="5" class="datepicker-switch"></th>' + '<th class="next">&raquo;</th>' + "</tr>" + "</thead>",
        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
        footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
    };
    j.template = '<div class="datepicker">' + '<div class="datepicker-days">' + '<table class=" table-condensed">' + j.headTemplate + "<tbody></tbody>" + j.footTemplate + "</table>" + "</div>" + '<div class="datepicker-months">' + '<table class="table-condensed">' + j.headTemplate + j.contTemplate + j.footTemplate + "</table>" + "</div>" + '<div class="datepicker-years">' + '<table class="table-condensed">' + j.headTemplate + j.contTemplate + j.footTemplate + "</table>" + "</div>" + "</div>";
    h.fn.datepicker.DPGlobal = j;
    h.fn.datepicker.noConflict = function() {
        h.fn.datepicker = d;
        return this;
    };
    h(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(o) {
        var n = h(this);
        if (n.data("datepicker")) {
            return;
        }
        o.preventDefault();
        n.datepicker("show");
    });
    h(function() {
        h('[data-provide="datepicker-inline"]').datepicker();
    });
}(window.jQuery));
/*! Respond.js v1.4.0: min/max-width media query polyfill * Copyright 2013 Scott Jehl
 * Licensed under https://github.com/scottjehl/Respond/blob/master/LICENSE-MIT
 *  */
;
! function(b) {
    b.matchMedia = b.matchMedia || function(h) {
        var g, l = h.documentElement,
            k = l.firstElementChild || l.firstChild,
            j = h.createElement("body"),
            i = h.createElement("div");
        return i.id = "mq-test-1", i.style.cssText = "position:absolute;top:-100em", j.style.background = "none", j.appendChild(i),
            function(c) {
                return i.innerHTML = '&shy;<style media="' + c + '"> #mq-test-1 { width: 42px; }</style>', l.insertBefore(j, k), g = 42 === i.offsetWidth, l.removeChild(j), {
                    matches: g,
                    media: c
                };
            };
    }(b.document);
}(this),
function(V) {
    function U() {
        B(!0);
    }
    var T = {};
    V.respond = T, T.update = function() {};
    var S = [],
        R = function() {
            var a = !1;
            try {
                a = new V.XMLHttpRequest;
            } catch (d) {
                a = new V.ActiveXObject("Microsoft.XMLHTTP");
            }
            return function() {
                return a;
            };
        }(),
        Q = function(e, d) {
            var f = R();
            f && (f.open("GET", e, !0), f.onreadystatechange = function() {
                4 !== f.readyState || 200 !== f.status && 304 !== f.status || d(f.responseText);
            }, 4 !== f.readyState && f.send(null));
        };
    if (T.ajax = Q, T.queue = S, T.regex = {
            media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
            keyframes: /@.*keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]+\}/gi,
            urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
            findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
            only: /(only\s+)?([a-zA-Z]+)\s?/,
            minw: /\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,
            maxw: /\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/
        }, T.mediaQueriesSupported = V.matchMedia && null !== V.matchMedia("only all") && V.matchMedia("only all").matches, !T.mediaQueriesSupported) {
        var P, O, N, M = V.document,
            L = M.documentElement,
            K = [],
            J = [],
            I = [],
            H = {},
            G = 30,
            F = M.getElementsByTagName("head")[0] || L,
            E = M.getElementsByTagName("base")[0],
            D = F.getElementsByTagName("link"),
            C = function() {
                var h, g = M.createElement("div"),
                    l = M.body,
                    k = L.style.fontSize,
                    j = l && l.style.fontSize,
                    i = !1;
                return g.style.cssText = "position:absolute;font-size:1em;width:1em", l || (l = i = M.createElement("body"), l.style.background = "none"), L.style.fontSize = "100%", l.style.fontSize = "100%", l.appendChild(g), L.insertBefore(l, L.firstChild), h = g.offsetWidth, i ? L.removeChild(l) : l.removeChild(g), L.style.fontSize = k, j && (l.style.fontSize = j), h = N = parseFloat(h);
            },
            B = function(Z) {
                var Y = "clientWidth",
                    X = L[Y],
                    W = "CSS1Compat" === M.compatMode && X || M.body[Y] || X,
                    u = {},
                    t = D[D.length - 1],
                    p = (new Date).getTime();
                if (Z && P && G > p - P) {
                    return V.clearTimeout(O), O = V.setTimeout(B, G), void 0;
                }
                P = p;
                for (var j in K) {
                    if (K.hasOwnProperty(j)) {
                        var i = K[j],
                            h = i.minw,
                            g = i.maxw,
                            a = null === h,
                            s = null === g,
                            q = "em";
                        h && (h = parseFloat(h) * (h.indexOf(q) > -1 ? N || C() : 1)), g && (g = parseFloat(g) * (g.indexOf(q) > -1 ? N || C() : 1)), i.hasquery && (a && s || !(a || W >= h) || !(s || g >= W)) || (u[i.media] || (u[i.media] = []), u[i.media].push(J[i.rules]));
                    }
                }
                for (var n in I) {
                    I.hasOwnProperty(n) && I[n] && I[n].parentNode === F && F.removeChild(I[n]);
                }
                for (var m in u) {
                    if (u.hasOwnProperty(m)) {
                        var l = M.createElement("style"),
                            k = u[m].join("\n");
                        l.type = "text/css", l.media = m, F.insertBefore(l, t.nextSibling), l.styleSheet ? l.styleSheet.cssText = k : l.appendChild(M.createTextNode(k)), I.push(l);
                    }
                }
            },
            A = function(X, W, x) {
                var w = X.replace(T.regex.keyframes, "").match(T.regex.media),
                    v = w && w.length || 0;
                W = W.substring(0, W.lastIndexOf("/"));
                var u = function(b) {
                        return b.replace(T.regex.urls, "$1" + W + "$2$3");
                    },
                    t = !v && x;
                W.length && (W += "/"), t && (v = 1);
                for (var s = 0; v > s; s++) {
                    var r, q, m, l;
                    t ? (r = x, J.push(u(X))) : (r = w[s].match(T.regex.findStyles) && RegExp.$1, J.push(RegExp.$2 && u(RegExp.$2))), m = r.split(","), l = m.length;
                    for (var c = 0; l > c; c++) {
                        q = m[c], K.push({
                            media: q.split("(")[0].match(T.regex.only) && RegExp.$2 || "all",
                            rules: J.length - 1,
                            hasquery: q.indexOf("(") > -1,
                            minw: q.match(T.regex.minw) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                            maxw: q.match(T.regex.maxw) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
                        });
                    }
                }
                B();
            },
            z = function() {
                if (S.length) {
                    var a = S.shift();
                    Q(a.href, function(b) {
                        A(b, a.href, a.media), H[a.href] = !0, V.setTimeout(function() {
                            z();
                        }, 0);
                    });
                }
            },
            y = function() {
                for (var a = 0; a < D.length; a++) {
                    var j = D[a],
                        i = j.href,
                        h = j.media,
                        d = j.rel && "stylesheet" === j.rel.toLowerCase();
                    i && d && !H[i] && (j.styleSheet && j.styleSheet.rawCssText ? (A(j.styleSheet.rawCssText, i, h), H[i] = !0) : (!/^([a-zA-Z:]*\/\/)/.test(i) && !E || i.replace(RegExp.$1, "").split("/")[0] === V.location.host) && ("//" === i.substring(0, 2) && (i = V.location.protocol + i), S.push({
                        href: i,
                        media: h
                    })));
                }
                z();
            };
        y(), T.update = y, T.getEmValue = C, V.addEventListener ? V.addEventListener("resize", U, !1) : V.attachEvent && V.attachEvent("onresize", U);
    }
}(this);
(function() {
    var a = window.Kp = {};
    a.Widget = {};
    a.inherit = function(j, l) {
        var k = this;
        var n;
        if (j && _.has(j, "constructor")) {
            n = j.constructor;
        } else {
            n = function() {
                return k.apply(this, arguments);
            };
        }
        _.extend(n, k, l);
        var m = function() {
            this.constructor = n;
        };
        m.prototype = k.prototype;
        n.prototype = new m;
        if (j) {
            _.extend(n.prototype, j);
        }
        n.__parent__ = k.prototype;

        function i(o, q) {
            var p = q;
            while (p[o] === q[o]) {
                p = p.constructor.__parent__;
            }
            return p;
        }
        n.prototype["parent"] = function(s, q) {
            this.__parentStack || (this.__parentStack = {});
            var p = this.__parentStack[s] || this,
                r = i(s, p);
            this.__parentStack[s] = r;
            var o = r[s].apply(this, q || []);
            delete this.__parentStack[s];
            return o;
        };
        return n;
    };
    var e = /\s+/;
    var h = function(r, p, k, o) {
        if (!k) {
            return true;
        }
        if (typeof k === "object") {
            for (var n in k) {
                r[p].apply(r, [n, k[n]].concat(o));
            }
        } else {
            if (e.test(k)) {
                var q = k.split(e);
                for (var m = 0, j = q.length; m < j; m++) {
                    r[p].apply(r, [q[m]].concat(o));
                }
            } else {
                return true;
            }
        }
    };
    var g = function(n, k) {
        var o, m = -1,
            j = n.length;
        while (++m < j) {
            (o = n[m]).callback.apply(o.ctx, k);
        }
    };
    var b = a.Events = {
        on: function(i, l, j) {
            if (!(h(this, "on", i, [l, j]) && l)) {
                return this;
            }
            this._events || (this._events = {});
            var k = this._events[i] || (this._events[i] = []);
            k.push({
                callback: l,
                context: j,
                ctx: j || this
            });
            return this;
        },
        once: function(j, m, k) {
            if (!(h(this, "once", j, [m, k]) && m)) {
                return this;
            }
            var i = this;
            var l = _.once(function() {
                i.off(j, l);
                m.apply(this, arguments);
            });
            l._callback = m;
            this.on(j, l, k);
            return this;
        },
        off: function(m, v, n) {
            var s, u, w, t, r, o, q, p;
            if (!this._events || !h(this, "off", m, [v, n])) {
                return this;
            }
            if (!m && !v && !n) {
                this._events = {};
                return this;
            }
            t = m ? [m] : _.keys(this._events);
            for (r = 0, o = t.length; r < o; r++) {
                m = t[r];
                if (s = this._events[m]) {
                    w = [];
                    if (v || n) {
                        for (q = 0, p = s.length; q < p; q++) {
                            u = s[q];
                            if ((v && v !== u.callback && v !== u.callback._callback) || (n && n !== u.context)) {
                                w.push(u);
                            }
                        }
                    }
                    this._events[m] = w;
                }
            }
            return this;
        },
        trigger: function(k) {
            if (!this._events) {
                return this;
            }
            var j = [].slice.call(arguments, 1);
            if (!h(this, "trigger", k, j)) {
                return this;
            }
            var l = this._events[k];
            var i = this._events.all;
            if (l) {
                g(l, j);
            }
            if (i) {
                g(i, arguments);
            }
            return this;
        }
    };
    _.extend(a, b);
    var f = a.Widget.Base = function(i) {
        this.cid = _.uniqueId("view");
        this._configure(i || {});
        this._ensureElement();
        this.initialize.apply(this, arguments);
        this.delegateEvents();
        this.$ = function(j) {
            return this.$el.find(j);
        };
    };
    var d = /^(\S+)\s*(.*)$/;
    var c = ["el", "id", "attributes", "className", "tagName", "events"];
    _.extend(f.prototype, b, {
        tagName: "div",
        initialize: function() {},
        render: function() {
            var j = this.template,
                k = this.serialize(),
                i = j;
            if (_.isFunction(j)) {
                i = j(k);
            } else {
                if (_.isString(j) && j.match(/^#/)) {
                    i = _.template($(j).html() || j, k);
                }
            }
            if (i) {
                this.$el.append(i);
            }
            this.delegateSelectors();
            return this;
        },
        renderTo: function(i) {
            this.render.apply(this, _.tail(arguments));
            this.$el.appendTo(i);
        },
        renderAfter: function(i) {
            this.render.apply(this, _.tail(arguments));
            $(i).after(this.$el);
        },
        serialize: function() {
            return {};
        },
        remove: function() {
            this.undelegateEvents();
            this.$el.remove();
            return this;
        },
        setElement: function(i, j) {
            if (this.$el) {
                this.undelegateEvents();
            }
            this.$el = i instanceof $ ? i : $(i);
            this.el = this.$el[0];
            if (j !== false) {
                this.delegateEvents();
                this.delegateSelectors();
            }
            return this;
        },
        delegateEvents: function(m) {
            if (!(m || (m = _.result(this, "events")))) {
                return;
            }
            this.undelegateEvents();
            for (var l in m) {
                var n = m[l];
                if (!_.isFunction(n)) {
                    n = this[m[l]];
                }
                if (!n) {
                    throw new Error('Method "' + m[l] + '" does not exist');
                }
                var k = l.match(d);
                var j = k[1],
                    i = k[2];
                n = _.bind(n, this);
                j += ".delegateEvents" + this.cid;
                if (i === "") {
                    this.$el.on(j, n);
                } else {
                    this.$el.on(j, i, n);
                }
            }
        },
        undelegateEvents: function() {
            this.$el.off(".delegateEvents" + this.cid);
        },
        delegateSelectors: function(i) {
            if (!(i || (i = _.result(this, "selectors")))) {
                return;
            }
            _.each(i, function(k, j) {
                this.$[j] = this.$(k);
            }, this);
        },
        _configure: function(i) {
            if (this.options) {
                i = _.extend({}, _.result(this, "options"), i);
            }
            _.extend(this, _.pick(i, c));
            this.options = i;
        },
        _ensureElement: function() {
            if (!this.el) {
                var i = _.extend({}, _.result(this, "attributes"));
                if (this.id) {
                    i.id = _.result(this, "id");
                }
                if (this.className) {
                    i["class"] = _.result(this, "className");
                }
                var j = $("<" + _.result(this, "tagName") + ">").attr(i);
                this.setElement(j, false);
            } else {
                this.setElement(_.result(this, "el"), false);
            }
        }
    });
    f.inherit = a.inherit;
})();
(function(a) {
    a.Widget.UpcomingEvents = a.Widget.Base.inherit({
        selectors: {
            wrap: ".body"
        },
        render: function() {
            this.delegateSelectors();
            $.ajax({
                url: this.options.serviceUrl,
                success: _.bind(this.onLoadSuccess, this)
            });
        },
        renderResults: function() {
            var b = _.template($("#upcoming-events-widget-ejs").html(), this.serialize());
            this.$.wrap.removeClass("loading");
            this.$.wrap.html(b);
        },
        filterClasses: function(d) {
            var b = this.options,
                g = b.onLineClassesAmount,
                f = b.onSiteClassesAmount,
                c = [],
                e = [];
            _.each(d, function(i) {
                var h = i.liveOnlineClass ? e : c;
                h.push(i);
            });
            c = _.first(c, f);
            e = _.first(e, g + f - c.length);
            return c.concat(e);
        },
        serialize: function() {
            var c = this.json.kaptestClassSearch,
                b = c ? this.filterClasses(c.kaptestClassList) : [];
            return {
                classes: b,
                registerUrl: this.options.registerUrl,
                weekDaysMap: {
                    Su: "Sunday",
                    M: "Monday",
                    T: "Tuesday",
                    W: "Wednesday",
                    Th: "Thursday",
                    F: "Friday",
                    Sa: "Saturday"
                }
            };
        },
        onLoadSuccess: function(b) {
            this.json = b;
            this.renderResults();
        }
    });
})(window.Kp);
/*!
 * enquire.js v2.1.0 - Awesome Media Queries in JavaScript
 * Copyright (c) 2013 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
;
(function(b, c, a) {
    var d = c.matchMedia;
    if (typeof module !== "undefined" && module.exports) {
        module.exports = a(d);
    } else {
        if (typeof define === "function" && define.amd) {
            define(function() {
                return (c[b] = a(d));
            });
        } else {
            c[b] = a(d);
        }
    }
}("enquire", this, function(d) {
    function e(m, k) {
        var j = 0,
            l = m.length,
            h;
        for (j; j < l; j++) {
            h = k(m[j], j);
            if (h === false) {
                break;
            }
        }
    }

    function a(h) {
        return Object.prototype.toString.apply(h) === "[object Array]";
    }

    function g(h) {
        return typeof h === "function";
    }

    function b(h) {
        this.options = h;
        !h.deferSetup && this.setup();
    }
    b.prototype = {
        setup: function() {
            if (this.options.setup) {
                this.options.setup();
            }
            this.initialised = true;
        },
        on: function() {
            !this.initialised && this.setup();
            this.options.match && this.options.match();
        },
        off: function() {
            this.options.unmatch && this.options.unmatch();
        },
        destroy: function() {
            this.options.destroy ? this.options.destroy() : this.off();
        },
        equals: function(h) {
            return this.options === h || this.options.match === h;
        }
    };

    function c(j, i) {
        this.query = j;
        this.isUnconditional = i;
        this.handlers = [];
        this.mql = d(j);
        var h = this;
        this.listener = function(k) {
            h.mql = k;
            h.assess();
        };
        if (this.mql.addListener) {
            this.mql.addListener(this.listener);
        } else {
            if (this.mql.attachEvent) {
                this.mql.attachEvent(this.listener);
            }
        }
    }
    c.prototype = {
        addHandler: function(i) {
            var h = new b(i);
            this.handlers.push(h);
            this.matches() && h.on();
        },
        removeHandler: function(i) {
            var h = this.handlers;
            e(h, function(k, j) {
                if (k.equals(i)) {
                    k.destroy();
                    return !h.splice(j, 1);
                }
            });
        },
        matches: function() {
            return this.mql.matches || this.isUnconditional;
        },
        clear: function() {
            e(this.handlers, function(h) {
                h.destroy();
            });
            this.mql.removeListener(this.listener);
            this.handlers.length = 0;
        },
        assess: function() {
            var h = this.matches() ? "on" : "off";
            e(this.handlers, function(i) {
                i[h]();
            });
        }
    };

    function f() {
        if (!d) {
            throw new Error("matchMedia not present, legacy browsers require a polyfill");
        }
        this.queries = {};
        this.browserIsIncapable = !d("only all").matches;
    }
    f.prototype = {
        register: function(l, j, k) {
            var i = this.queries,
                h = k && this.browserIsIncapable;
            if (!i[l]) {
                i[l] = new c(l, h);
            }
            if (g(j)) {
                j = {
                    match: j
                };
            }
            if (!a(j)) {
                j = [j];
            }
            e(j, function(m) {
                i[l].addHandler(m);
            });
            return this;
        },
        unregister: function(j, h) {
            var i = this.queries[j];
            if (i) {
                if (h) {
                    i.removeHandler(h);
                } else {
                    i.clear();
                    delete this.queries[j];
                }
            }
            return this;
        }
    };
    return new f();
}));
$(function() {
    $.fn.datepicker.defaults.format = "mm/dd/yyyy";
    $.cookie.defaults = {
        path: "/",
        domain: (function() {
            var e = location.hostname,
                d = e.match(/\w*\.\w*$/);
            return d ? "." + d[0] : e;
        })()
    };
    $(document).on("keydown focusout", 'input[name="zip"]', function(d) {
        if (d.type === "focusout" || d.keyCode === 13) {
            var f = $(this),
                e = f.val();
            e = $.trim(e);
            if (e.match(/[ABCEGHJKLMNPRSTVXY]\d[A-Z]\d[A-Z]\d/i)) {
                e = e.replace(/^(.{3})/, "$1 ");
            }
            f.val(e);
        }
    });
    $(document).on("click", ".js-product-wrap .js-load-product-classes", function() {
        var f = $(this),
            d = f.closest(".js-product-wrap"),
            e = $('<div class="loading"/>');
        if (d.find(".js-classes").length) {
            d.find(".js-classes").remove();
            return false;
        }
        var g = $('<div class="js-classes"></div>');
        g.appendTo(d);
        g.append(e);
        g.on("change", 'select[name="filter[sortBy]"]', function() {
            var i = f.attr("href"),
                h = $(this);
            i = decodeURIComponent(i).replace(/filter\[sortBy\]=([^&#]*)/, "") + "&filter[sortBy]=" + h.val();
            f.attr("href", i);
            g.remove();
            f.click();
        });
        g.on("click", ".js-close-class-wrap", function() {
            g.remove();
            return false;
        });
        $.ajax({
            url: f.attr("href"),
            success: function(h) {
                e.replaceWith(h);
            },
            error: function() {
                var h = $('<div class="alert alert-danger alert-dismissable text-center js-classes-error">' + '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + "Failed to load classes</div>");
                e.replaceWith(h);
            }
        });
        return false;
    });
    $(document).on("click", ".js-expand-extra-items", function() {
        var d = $(this),
            e = d.closest(".js-classes-group");
        e.find(".js-collapse-extra-items").show();
        e.find(".js-extra-item:hidden").slice(0, 3).show();
        if (!e.find(".js-extra-item:hidden").length) {
            d.hide();
        }
        return false;
    });
    $(document).on("click", ".js-collapse-extra-items", function() {
        var d = $(this),
            e = d.closest(".js-classes-group");
        e.find(".js-expand-extra-items").show();
        e.find(".js-extra-item:visible").slice(-3).hide();
        if (!e.find(".js-extra-item:visible").length) {
            d.hide();
        }
        return false;
    });
    $(document).on("click.bs.collapse.data-api", "[data-toggle=state]", function(h) {
        var g = $(this),
            d = $(g.attr("data-target")),
            f = g.attr("data-state");
        h.preventDefault();
        d.toggleClass(f);
    });
    $(document).on("click", ".js-classes-wrap .js-load-more", function(h) {
        var g = $('<div class="loading">'),
            e = $(this).replaceWith(g),
            d = g.closest(".js-classes-wrap"),
            f = e.attr("href");
        $.ajax({
            url: e.attr("href"),
            success: function(j) {
                j = $("<div>").append($.parseHTML(j));
                var k = j.find(".js-load-more");
                if (~f.indexOf("filter[sortBy]=distance")) {
                    d.append(j.find(".js-classes-group"));
                } else {
                    var i = j.find(".js-classes-group > li:not(.list-table-header)");
                    d.find(".js-classes-group").append(i);
                }
                d.append(k);
                g.remove();
            },
            error: function() {
                var i = $('<div class="alert alert-danger alert-dismissable text-center">' + '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + "Failed to load classes</div>");
                g.replaceWith(i);
            }
        });
        return false;
    });
    $(window).on("resize", _.debounce(function() {
        $("[data-same-height]").each(function() {
            var f = $(this),
                d = f.find(f.data("same-height"));
            if (f.width() === d.outerWidth(true)) {
                d.css("min-height", "0");
            } else {
                var e = d.map(function() {
                    return $(this).outerHeight();
                }).get();
                d.css("min-height", Math.max.apply(null, e));
            }
        });
    }, 150)).triggerHandler("resize");
    var b = $("#searchwrapper"),
        a = b.find("form"),
        c = b.find(".searchbox");
    a.submit(function() {
        var d = $.trim(c.val());
        if (!d.length) {
            return false;
        }
        if (d.match(/^[A-z]{4,5}\d+[0-9A-z]+$/)) {
            window.location.href = "/class/" + d;
            return false;
        }
        return true;
    });
    $(document).on("hide.bs.modal", "#modal-remote", function(f) {
        var d = $(f.target);
        d.empty();
        d.removeData("bs.modal");
    });
});
var Pager = function(b, a) {
    this.$menu = b;
    this.options = {
        "pageWidth": b.width(),
        "pageClass": "page"
    };
    $.extend(this.options, a);
    this._run();
};
Pager.prototype._run = function() {
    var a = this;
    this._createPager();
    this._addAnimatorToPageWrapper();
    this._createRootPage();
    if (this.$menu.find("." + this.options.pageClass).length) {
        this.$menu.find("." + this.options.pageClass).each(function() {
            var d = $(this),
                c = d.siblings("a"),
                b = d.parents("." + a.options.pageClass).length + 1;
            a._createPage(b);
            a._setSubMenu(d, c, b);
            a._appendSubMenusToPage(d, a._$getLastCreatedPage());
            a._createBackButton(a._$getLastCreatedPage());
            a._callerClickEvent(c, d);
            a.updatePagerWidth((b + 1) * a.options.pageWidth);
            d.hide();
        });
    }
};
Pager.prototype._createPager = function() {
    this.$menu.wrap($('<div class="page-wrapper clearfix"></div>'));
    this.$pager = this.$menu.parent(".page-wrapper");
    this.$pager.css("position", "relative");
};
Pager.prototype._addAnimatorToPageWrapper = function() {
    this.animator = new Slider(this.$pager, this.options.animatorOptions);
};
Pager.prototype._createRootPage = function() {
    this._createPage(0);
    this._appendSubMenusToPage(this.$menu, this._$getLastCreatedPage());
};
Pager.prototype._createPage = function(a) {
    if (this.deeperLevel && a <= this.deeperLevel) {
        return;
    }
    var b = $('<div class="menu-page" data-level="' + a + '">').css({
        "float": "left",
        "width": this.options.pageWidth
    });
    this.$pager.append(b);
    this.deeperLevel = a;
};
Pager.prototype._setSubMenu = function(a, b, c) {
    a.attr("id", "level-" + c + "-" + b.attr("class"));
};
Pager.prototype._createBackButton = function(a) {
    if (a.find(".back-btn").length) {
        return;
    }
    var b = $('<a class="back-btn">Back</a>');
    a.prepend(b);
    this._backBtnClickEvent(b, a);
};
Pager.prototype._backBtnClickEvent = function(c, b) {
    var a = this;
    c.click(function() {
        a.animator.undo(function() {
            a._getPageSubMenus(b).each(function() {
                $(this).hide();
            });
        });
        return false;
    });
};
Pager.prototype._getPageSubMenus = function(a) {
    return a.find("." + this.options.pageClass);
};
Pager.prototype._appendSubMenusToPage = function(b, a) {
    a.append(b);
};
Pager.prototype._$getLastCreatedPage = function() {
    return this.$pager.find('.menu-page[data-level="' + this.deeperLevel + '"]');
};
Pager.prototype._callerClickEvent = function(b, c) {
    var a = this;
    b.click(function() {
        c.show();
        a._moveToPage(a.getPageOf(c));
    });
};
Pager.prototype._moveToPage = function(a) {
    this.animator.to({
        "left": -a.offset().left
    }).go();
};
Pager.prototype.updatePagerHeight = function(a) {
    this.$pager.height(a);
};
Pager.prototype.updatePagerWidth = function(a) {
    this.$pager.width(a);
};
Pager.prototype.getPageOf = function(a) {
    return a.parents(".menu-page");
};
Pager.prototype.$getPager = function() {
    return this.$pager;
};
var ToggleHandler = function(b, a) {
    this.state = false;
    this.lastActive = false;
    this.animatorA = b;
    this.animatorB = a;
    this.animatorA.go();
    this.animatorB.go();
    this.toggleActive(this.animatorB);
};
ToggleHandler.prototype.handle = function() {
    var a = this;
    if (this.callbackBeforeHandle) {
        this.callbackBeforeHandle();
    }
    this.animatorA.undo(function() {
        a.toggleActive(a.animatorA);
    });
    this.animatorB.undo(function() {
        a.toggleActive(a.animatorB);
        if (a.callbackAfterHandle) {
            a.callbackAfterHandle();
        }
    });
};
ToggleHandler.prototype.toggleActive = function(a) {
    if (a.$getSelf().hasClass("toggle-active")) {
        a.$getSelf().removeClass("toggle-active");
    } else {
        a.$getSelf().addClass("toggle-active");
        this.lastActive = a;
    }
};
ToggleHandler.prototype.$getActive = function() {
    return this.lastActive.$getSelf();
};
ToggleHandler.prototype.callBeforeHandle = function(a) {
    this.callbackBeforeHandle = a;
};
ToggleHandler.prototype.callAfterHandle = function(a) {
    this.callbackAfterHandle = a;
};
var DropdownHandler = function() {
    this.state = false;
    this.lastActiveDropdown = null;
    this.dropdownsList = [];
};
DropdownHandler.prototype.handle = function(a) {
    if (!this.state) {
        this._open(a);
    } else {
        if (a == this.lastActiveDropdown) {
            this.close();
        } else {
            this.close();
            this._open(a);
        }
    }
};
DropdownHandler.prototype._open = function(b) {
    var a = this;
    b.animator.go(function() {
        a.state = true;
        a.lastActiveDropdown = b;
    });
};
DropdownHandler.prototype.close = function(b) {
    if (!this.lastActiveDropdown) {
        return;
    }
    var a = this;
    this.lastActiveDropdown.animator.undo(function() {
        a.state = false;
        a.lastActiveDropdown = null;
        if (b != undefined) {
            b();
        }
    });
};
DropdownHandler.prototype.isOpen = function() {
    return this.state;
};
DropdownHandler.prototype.resetToInitialPosition = function(a) {
    a.resetToInitialPosition();
};
var Slider = function(a, b) {
    this.$elm = a;
    this.options = {
        "speed": 500,
        "handleVisibility": false
    };
    this.animationParams = false;
    this.initialParams = this._getCurrentAnimationParams();
    this.initialParamsExplicitSet = false;
    if (b != undefined) {
        $.extend(this.options, b);
    }
    this.$elm.show();
};
Slider.prototype.isActive = function() {
    return this.$elm.hasClass("active");
};
Slider.prototype.from = function(a) {
    this.$elm.css(a);
    this._explicitSetInitialParams(a);
    return this;
};
Slider.prototype._explicitSetInitialParams = function(a) {
    if (!this.initialParamsExplicitSet) {
        this.initialParams = a;
        this.initialParamsExplicitSet = true;
    }
};
Slider.prototype.resetToInitialPosition = function() {
    this.$elm.css(this.initialParams);
};
Slider.prototype.to = function(a) {
    this.animationParams = a;
    return this;
};
Slider.prototype.go = function(a) {
    this._slide(this.animationParams, a);
    this._setActive();
    return this;
};
Slider.prototype.undo = function(a) {
    this.goBack(a);
    return this;
};
Slider.prototype.goBack = function(b) {
    if (this.lastAnimationParams) {
        var a = this;
        this._slide(this.lastAnimationParams, function() {
            a._setInactive();
            if (b != undefined) {
                b();
            }
        });
    }
    return this;
};
Slider.prototype._setActive = function() {
    this.makeVisible();
    this.$elm.addClass("active");
};
Slider.prototype._setInactive = function() {
    this.$elm.removeClass("active");
    this.makeInvisible();
};
Slider.prototype.makeVisible = function() {
    if (!this.options.handleVisibility) {
        return this;
    }
    this.$elm.css("visibility", "visible");
    return this;
};
Slider.prototype.makeInvisible = function() {
    if (!this.options.handleVisibility) {
        return this;
    }
    this.$elm.css("visibility", "hidden");
    return this;
};
Slider.prototype.goLeft = function(a, b) {
    this._slide({
        "left": a
    }, b);
    return this;
};
Slider.prototype.goDown = function(a, b) {
    this._slide({
        "top": a
    }, b);
    return this;
};
Slider.prototype._slide = function(a, c) {
    if (this.isSliding) {
        return;
    }
    this._setLastAnimationParams();
    var b = this;
    this.isSliding = true;
    this.$elm.animate(a, this.options.speed, function() {
        b.isSliding = false;
        if (c != undefined) {
            c();
        }
    });
};
Slider.prototype._setLastAnimationParams = function() {
    this.lastAnimationParams = {
        "top": this._getTop(),
        "left": this._getLeft()
    };
};
Slider.prototype._getCurrentAnimationParams = function() {
    return {
        "top": this._getTop(),
        "left": this._getLeft()
    };
};
Slider.prototype._getTop = function() {
    return (this.$elm.css("top") != "auto") ? this.$elm.css("top") : "0";
};
Slider.prototype._getLeft = function() {
    return (this.$elm.css("left") != "auto") ? this.$elm.css("left") : "0";
};
Slider.prototype.$getSelf = function() {
    return this.$elm;
};
var Accordion = function(a) {
    this.$elm = a;
};
Accordion.prototype.go = function(a) {
    if (this._isActive()) {
        return;
    }
    if (a != undefined) {
        this.$elm.slideDown(a);
    } else {
        this.$elm.slideDown();
    }
    this._setActive();
    return this.$elm;
};
Accordion.prototype.undo = function(a) {
    if (!this._isActive()) {
        return;
    }
    if (a != undefined) {
        this.$elm.slideUp(a);
    } else {
        this.$elm.slideUp();
    }
    this._setInactive();
    return this.$elm;
};
Accordion.prototype._setActive = function() {
    this.$elm.addClass("active");
};
Accordion.prototype._setInactive = function() {
    this.$elm.removeClass("active");
};
Accordion.prototype._isActive = function() {
    return this.$elm.hasClass("active");
};
var Fader = function(a, b) {
    this.$elm = a;
    this.options = {
        "fadeInSpeed": "fast",
        "fadeOutSpeed": "fast"
    };
    this.animationParams = false;
    this.initialParams = this._getCurrentOpacityParams();
    this.initialParamsExplicitSet = false;
    $.extend(this.options, b);
};
Fader.prototype._getCurrentOpacityParams = function() {
    return {
        "opacity": (this.$elm.css("opacity") != "auto") ? this.$elm.css("opacity") : "0"
    };
};
Fader.prototype.go = function(a) {
    if (a != undefined) {
        this.$elm.fadeTo(this.options.fadeInSpeed, 1, a);
    } else {
        this.$elm.fadeTo(this.options.fadeInSpeed, 1);
    }
    this._setActive();
    return this.$elm;
};
Fader.prototype.undo = function(a) {
    if (a != undefined) {
        this.$elm.fadeTo(this.options.fadeOutSpeed, 0, a);
    } else {
        this.$elm.fadeTo(this.options.fadeOutSpeed, 0);
    }
    this._setInactive();
    return this.$elm;
};
Fader.prototype._setActive = function() {
    this.$elm.addClass("active");
};
Fader.prototype._setInactive = function() {
    this.$elm.removeClass("active");
};
Fader.prototype.from = function(a) {
    this.$elm.css("opacity", a);
    this._explicitSetInitialParams({
        "opacity": a
    });
    return this;
};
Fader.prototype._explicitSetInitialParams = function(a) {
    if (!this.initialParamsExplicitSet) {
        this.initialParams = a;
        this.initialParamsExplicitSet = true;
    }
};
Fader.prototype.resetToInitialPosition = function() {
    this.$elm.css(this.initialParams);
};
var GateKeeper = function(a) {
    this.animator = a;
    this.openState = false;
};
GateKeeper.prototype.open = function(a) {
    this.animator.go(a);
    this._setOpenState(true);
    return this;
};
GateKeeper.prototype.close = function(a) {
    this.animator.undo(a);
    this._setOpenState(false);
    return this;
};
GateKeeper.prototype._setOpenState = function(a) {
    this.openState = a;
};
GateKeeper.prototype.getWidth = function() {
    return this.gateKeeperInstance.getWidth();
};
GateKeeper.prototype.isOpened = function() {
    return this.openState;
};
var DesktopMenu = function(a, b) {
    this.$elm = a;
    this.options = {
        "animator": "slider",
        "animatorOptions": {
            "speed": "fast"
        }
    };
    $.extend(this.options, b);
    this._run();
};
DesktopMenu.prototype._run = function() {
    this.$elm.show();
    this._addAnimator();
};
DesktopMenu.prototype._addAnimator = function() {
    switch (this.options.animator) {
        case "slider":
            $.extend(this.options.animatorOptions, {
                "handleVisibility": true
            });
            this.animator = new Slider(this.$elm, this.options.animatorOptions);
            this.animator.from({
                "top": -this.$elm.outerHeight()
            }).to({
                "top": 0
            }).makeInvisible();
            break;
        case "fader":
            this.animator = new Fader(this.$elm, this.options.animatorOptions);
            this.animator.from(0);
            break;
    }
};
DesktopMenu.prototype.$getSelf = function() {
    return this.$elm;
};
DesktopMenu.prototype.resetToInitialPosition = function() {
    this.animator.resetToInitialPosition();
};
var MobileMenu = function(a, b) {
    this.$elm = a;
    this.options = {
        "pager": false,
        "pagerOptions": {
            "pageWidth": 300
        },
        "animator": "slider",
        "animatorOptions": {
            "speed": 500
        }
    };
    $.extend(this.options, b);
    this._run();
};
MobileMenu.prototype._run = function() {
    this.$elm.show();
    if (this.options.pager) {
        this._addPager({
            "pageWidth": this.options.pageWidth
        });
    }
    this._addAnimator();
};
MobileMenu.prototype._addPager = function(a) {
    this.prototype = new Pager(a);
    this.prototype.constructor = this;
};
MobileMenu.prototype._addAnimator = function() {
    switch (this.options.animator) {
        case "slider":
            this.animator = new Slider(this.$elm, this.options.animatorOptions);
            break;
        case "fader":
            this.animator = new Fader(this.$elm, this.options.animatorOptions);
            break;
    }
};
MobileMenu.prototype.$getSelf = function() {
    return this.$elm;
};
$(function() {
    var d = {};
    d.$elm = $(".main-page");
    d.slider = new Slider(d.$elm);
    var b = {};
    b.panel = {};
    b.panel.$elm = $(".mobile-navigation");
    b.panel.animator = new Slider(b.panel.$elm);
    b.panel.animator.from({
        "left": -b.panel.$elm.width()
    }).to({
        "left": 0
    });
    b.panel.gateKeeper = new GateKeeper(b.panel.animator);
    $(".mobile-navigation-btn").click(function() {
        if (!b.panel.gateKeeper.isOpened()) {
            b.open();
        } else {
            b.close();
        }
        return false;
    });
    b.open = function() {
        d.$elm.css("position", "fixed");
        b.panel.gateKeeper.open();
        d.slider.goLeft(b.panel.$elm.width(), function() {});
    };
    b.close = function() {
        b.panel.gateKeeper.close();
        d.slider.goBack(function() {
            d.$elm.css("position", "relative");
        });
    };
    var a = new MobileMenu(b.panel.$elm.find(".main-menu").parents(".menu-wrapper"));
    a.animator.from({
        "top": 0
    }).to({
        "top": -a.$getSelf().outerHeight()
    });
    var c = new MobileMenu(b.panel.$elm.find(".secondary-menu").parents(".menu-wrapper"));
    c.animator.from({
        "top": -c.$getSelf().outerHeight()
    }).to({
        "top": 0
    });
    var f = new ToggleHandler(a.animator, c.animator);
    f.callAfterHandle(function() {
        e.trigger($.Event("resize"));
    });
    var e = b.panel.$elm.find(".menus");
    $(".mainMenu-btn", b.panel.$elm).click(function() {
        f.handle();
        for (var k in b.$accordionList) {
            b.$accordionList[k].gateKeeper.close();
        }
        return false;
    });
    $(".menu-pager", b.panel.$elm).each(function() {
        new Pager($(this), {
            "pageWidth": b.panel.$elm.width(),
            "animator": "slider",
            "animatorOptions": {}
        });
    });
    e.bind("resize", g);

    function g() {
        var k = f.$getActive().height();
        e.css("min-height", k);
    }
    g();
    var j = $(".navigation-dropdowns-container");
    var i = new DropdownHandler();
    var h = [];
    $("a[data-dropdown-id]").each(function() {
        var k = this;
        this.$dropdown = $("#" + $(this).attr("data-dropdown-id"));
        this.dropdown = new DesktopMenu(this.$dropdown, {
            "animator": "slider"
        });
        h.push(this.dropdown);
        $(this).click(function(l) {
            l.stopPropagation();
            i.handle(k.dropdown);
        });
        this.$dropdown.click(function(l) {
            if ($(".open").length) {
                $(".open").removeClass("open");
            }
            l.stopPropagation();
        });
    });
    b.accordion = {};
    b.$accordionList = [];
    $(".accordion", b.panel.$elm).each(function() {
        var k = {};
        k.$elm = $(this), k.animator = new Accordion(k.$elm), k.gateKeeper = new GateKeeper(k.animator);
        $(this).siblings("a").click(function() {
            if (!k.gateKeeper.isOpened()) {
                k.gateKeeper.open(function() {
                    e.trigger($.Event("resize"));
                });
            } else {
                k.gateKeeper.close(function() {
                    e.trigger($.Event("resize"));
                });
            }
            return false;
        });
        b.$accordionList.push(k);
    });
    if (window.enquire != undefined) {
        enquire.register("screen and (max-width:767px)", {
            match: function() {
                if (i.isOpen()) {
                    i.close(function() {
                        j.hide();
                    });
                } else {
                    j.hide();
                }
            },
            unmatch: function() {
                if (b.panel.gateKeeper.isOpened()) {
                    b.panel.gateKeeper.close();
                    d.slider.goBack();
                }
            }
        });
        enquire.register("screen and (min-width:768px)", {
            match: function() {
                j.show();
                for (var k in h) {
                    i.resetToInitialPosition(h[k]);
                }
            }
        });
    }
    $("html").click(function() {
        if (b.panel.gateKeeper.isOpened()) {
            b.close();
        }
        if (i.isOpen()) {
            i.close();
        }
    });
    b.panel.$elm.click(function(k) {
        if ($(".open").length) {
            $(".open").removeClass("open");
        }
        k.stopPropagation();
    });
    $(".dropdown-toggle").dropdown();
});