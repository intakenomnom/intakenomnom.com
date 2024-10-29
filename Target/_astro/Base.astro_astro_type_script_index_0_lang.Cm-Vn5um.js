const f = "modulepreload",
	h = function (o) {
		return "/" + o;
	},
	l = {},
	E = function (u, a, g) {
		let s = Promise.resolve();
		if (a && a.length > 0) {
			document.getElementsByTagName("link");
			const r = document.querySelector("meta[property=csp-nonce]"),
				e = r?.nonce || r?.getAttribute("nonce");
			s = Promise.allSettled(
				a.map((t) => {
					if (((t = h(t)), t in l)) return;
					l[t] = !0;
					const i = t.endsWith(".css"),
						d = i ? '[rel="stylesheet"]' : "";
					if (document.querySelector(`link[href="${t}"]${d}`)) return;
					const n = document.createElement("link");
					if (
						((n.rel = i ? "stylesheet" : f),
						i || (n.as = "script"),
						(n.crossOrigin = ""),
						(n.href = t),
						e && n.setAttribute("nonce", e),
						document.head.appendChild(n),
						i)
					)
						return new Promise((m, p) => {
							n.addEventListener("load", m),
								n.addEventListener("error", () =>
									p(
										new Error(
											`Unable to preload CSS for ${t}`,
										),
									),
								);
						});
				}),
			);
		}
		function c(r) {
			const e = new Event("vite:preloadError", { cancelable: !0 });
			if (((e.payload = r), window.dispatchEvent(e), !e.defaultPrevented))
				throw r;
		}
		return s.then((r) => {
			for (const e of r || []) e.status === "rejected" && c(e.reason);
			return u().catch(c);
		});
	};
(
	await E(async () => {
		const { initializeApp: o } = await import("./index.esm.CKdHjiUb.js");
		return { initializeApp: o };
	}, [])
).initializeApp({
	apiKey: "AIzaSyDpn058kd0BegNgWJQfu4-Ic3uPcxOo8Ds",
	authDomain: "intakenomnom.firebaseapp.com",
	projectId: "intakenomnom",
	storageBucket: "intakenomnom.appspot.com",
	messagingSenderId: "202279542282",
	appId: "1:202279542282:web:bf1170d8ad82adca2f49f3",
	measurementId: "G-26MC2VW3GM",
});
//# sourceMappingURL=Base.astro_astro_type_script_index_0_lang.Cm-Vn5um.js.map
