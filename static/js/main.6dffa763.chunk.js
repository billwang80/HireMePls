(window.webpackJsonpbill_website_v2 = window.webpackJsonpbill_website_v2 || []).push([
    [0],
    [, , , , , , , function(e, t, n) {}, , , , , , , , , , , , , function(e, t, n) { e.exports = n(43) }, , , , , function(e, t, n) {}, function(e, t, n) {
        var a = { "./da_vinci.jpg": 27, "./education_game.png": 28, "./email_icon.png": 29, "./email_icon_hover.png": 30, "./email_icon_hover1.png": 31, "./header2.jpg": 32, "./placeholder.jpg": 33, "./resume_icon.png": 34, "./resume_icon_hover.png": 35 };

        function i(e) { var t = r(e); return n(t) }

        function r(e) { if (!n.o(a, e)) { var t = new Error("Cannot find module '" + e + "'"); throw t.code = "MODULE_NOT_FOUND", t } return a[e] }
        i.keys = function() { return Object.keys(a) }, i.resolve = r, e.exports = i, i.id = 26
    }, function(e, t, n) { e.exports = n.p + "static/media/da_vinci.20adcb4c.jpg" }, function(e, t, n) { e.exports = n.p + "static/media/education_game.5eec8399.png" }, function(e, t, n) { e.exports = n.p + "static/media/email_icon.8e55e432.png" }, function(e, t, n) { e.exports = n.p + "static/media/email_icon_hover.2ae43d4b.png" }, function(e, t, n) { e.exports = n.p + "static/media/email_icon_hover1.602315d3.png" }, function(e, t, n) { e.exports = n.p + "static/media/header2.3fc2f09c.jpg" }, function(e, t, n) { e.exports = n.p + "static/media/placeholder.8710d7fc.jpg" }, function(e, t, n) { e.exports = n.p + "static/media/resume_icon.bdaef046.png" }, function(e, t, n) { e.exports = n.p + "static/media/resume_icon_hover.9cd08e71.png" }, , , , , , , , function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n(0),
            i = n.n(a),
            r = n(6),
            o = n.n(r),
            c = (n(25), n(1)),
            s = n(2),
            l = n(4),
            u = n(3),
            m = n(5),
            d = (n(7), n(8)),
            p = n(9);

        function h() { var e = Object(d.a)(["\n    position: absolute;\n    float: left;\n    height: 378px;\n    width: 540px;\n    background-size: cover;\n    border-radius: 10px;\n    background-image: ", ";\n"]); return h = function() { return e }, e }
        var b = function(e) { var t = {}; return e.keys().map((function(n, a) { t[n.replace("./", "")] = e(n) })), t }(n(26)),
            f = p.a.div(h(), (function(e) { return 1 === e.image ? "url(" + b["da_vinci.jpg"] + ")" : "url(" + b["education_game.png"] + ")" }));

        function g() { var e = Object(d.a)(["\n    display: flex;\n    height: 378px;\n    width: 540px;\n    margin-left: 128px;\n    margin-right: 128px;\n    border-radius: 10px;\n    box-shadow: 0px 16px 32px 3px rgba(0, 0, 0, 0.2);\n    -webkit-box-shadow: 0px 16px 32px 3px rgba(0, 0, 0, 0.2);\n    -moz-box-shadow: 0px 16px 32px 3px rgba(0, 0, 0, 0.2);\n    margin-bottom: ", ";\n    align-self: ", ";\n"]); return g = function() { return e }, e }
        var v = p.a.div(g(), (function(e) { return 2 === e.image ? "96px" : "192px" }), (function(e) { return e.image % 2 == 1 ? "flex-start" : "flex-end" })),
            _ = function(e) {
                function t() { return Object(c.a)(this, t), Object(l.a)(this, Object(u.a)(t).apply(this, arguments)) }
                return Object(m.a)(t, e), Object(s.a)(t, [{ key: "render", value: function() { return i.a.createElement(v, { image: this.props.image }, i.a.createElement(f, { image: this.props.image }), i.a.createElement("div", { className: "project_description" })) } }]), t
            }(i.a.Component),
            x = [1, 2].map((function(e) { return i.a.createElement(_, { image: e }) })),
            j = function(e) {
                function t() {
                    var e, n;
                    Object(c.a)(this, t);
                    for (var a = arguments.length, i = new Array(a), r = 0; r < a; r++) i[r] = arguments[r];
                    return (n = Object(l.a)(this, (e = Object(u.a)(t)).call.apply(e, [this].concat(i)))).state = { image1: 1, image2: 2 }, n
                }
                return Object(m.a)(t, e), Object(s.a)(t, [{ key: "render", value: function() { return i.a.createElement("ul", { class: "sectioning" }, x) } }]), t
            }(i.a.Component),
            E = n(10),
            w = n(17),
            O = n.n(w),
            y = E.a.div({ hidden: { backgroundColor: "rgba(52, 52, 52, 0.0)", duration: 400 }, visible: { backgroundColor: "rgba(52, 52, 52, 0.5)", duration: 400 } }),
            k = function(e) {
                function t(e) { var n; return Object(c.a)(this, t), (n = Object(l.a)(this, Object(u.a)(t).call(this, e))).handleMouseEnter = function(e) { n.changeState() }, n.handleMouseOut = function(e) { n.changeState() }, n.state = { animationClass: "react_unhovered" }, n }
                return Object(m.a)(t, e), Object(s.a)(t, [{ key: "changeState", value: function() { var e = O()(this.state.animationClass); "react_unhovered" === this.state.animationClass ? (e = "react_chroma", this.setState({ animationClass: e })) : (e = "react_unhovered", this.setState({ animationClass: e })) } }, { key: "render", value: function() { return i.a.createElement("ul", null, i.a.createElement("li", null, i.a.createElement("a", { href: "#home", className: this.state.animationClass }, "Home")), i.a.createElement("li", null, i.a.createElement("a", { href: "#projects_section", className: this.state.animationClass }, "Projects")), i.a.createElement("li", null, i.a.createElement("a", { href: "#about", className: this.state.animationClass }, "About")), i.a.createElement("li", null, i.a.createElement("a", { href: "#contact", className: this.state.animationClass }, "Contact"))) } }]), t
            }(i.a.Component),
            C = function(e) {
                function t(e) { var n; return Object(c.a)(this, t), (n = Object(l.a)(this, Object(u.a)(t).call(this, e))).listenScrollEvent = function(e) { window.scrollY > 560 && window.innerHeight + window.scrollY < document.body.offsetHeight - 24 ? n.setState({ isVisible: !0 }) : n.setState({ isVisible: !1 }) }, n.state = { isVisible: !1 }, n }
                return Object(m.a)(t, e), Object(s.a)(t, [{ key: "componentDidMount", value: function() { window.addEventListener("scroll", this.listenScrollEvent) } }, { key: "render", value: function() { var e = this.state.isVisible; return i.a.createElement(y, { class: "navbar", pose: e ? "visible" : "hidden" }, i.a.createElement(k, null)) } }]), t
            }(i.a.Component),
            S = E.a.div({ hidden: { opacity: 0, duration: 300 }, visible: { opacity: 1, duration: 400 } }),
            B = function(e) {
                function t(e) {
                    var n;
                    return Object(c.a)(this, t), (n = Object(l.a)(this, Object(u.a)(t).call(this, e))).listenScrollEvent = function(e) {
                        var t = n.selector.current.getBoundingClientRect();
                        t.top > 64 && t.bottom < window.innerHeight - 16 ? n.setState({ isVisible: !0 }) : n.setState({ isVisible: !1 })
                    }, n.state = { isVisible: !0 }, n.selector = i.a.createRef(), n
                }
                return Object(m.a)(t, e), Object(s.a)(t, [{ key: "componentDidMount", value: function() { window.addEventListener("scroll", this.listenScrollEvent) } }, {
                    key: "render",
                    value: function() {
                        var e = this.props.text,
                            t = this.props.class_name,
                            n = this.state.isVisible;
                        return i.a.createElement(S, { ref: this.selector, className: t, pose: n ? "visible" : "hidden" }, i.a.createElement("h2", null, e))
                    }
                }]), t
            }(i.a.Component);
        Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
        o.a.render(i.a.createElement(C, null), document.getElementById("navigation")), o.a.render(i.a.createElement(j, null), document.getElementById("projects")), o.a.render(i.a.createElement(B, { text: "Most people call me Bill.", class_name: "header_title" }), document.getElementById("page_title")), o.a.render(i.a.createElement(B, { text: "Projects", class_name: "section_title" }), document.getElementById("project_title")), o.a.render(i.a.createElement(B, { text: "About", class_name: "section_title_about" }), document.getElementById("about_title")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function(e) { e.unregister() }))
    }],
    [
        [20, 1, 2]
    ]
]);
//# sourceMappingURL=main.6dffa763.chunk.js.map