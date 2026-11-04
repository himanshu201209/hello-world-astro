/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

var rl = Object.create;
var Ht = Object.defineProperty;
var ol = Object.getOwnPropertyDescriptor;
var sl = Object.getOwnPropertyNames;
var il = Object.getPrototypeOf,
  al = Object.prototype.hasOwnProperty;
var cl = (n, e, t) =>
  e in n
    ? Ht(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (n[e] = t);
var O = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var ll = (n, e, t, r) => {
  if ((e && typeof e == "object") || typeof e == "function")
    for (let o of sl(e))
      !al.call(n, o) &&
        o !== t &&
        Ht(n, o, {
          get: () => e[o],
          enumerable: !(r = ol(e, o)) || r.enumerable,
        });
  return n;
};
var hs = (n, e, t) => (
  (t = n != null ? rl(il(n)) : {}),
  ll(
    e || !n || !n.__esModule
      ? Ht(t, "default", { value: n, enumerable: !0 })
      : t,
    n
  )
);
var it = (n, e, t) => (cl(n, typeof e != "symbol" ? e + "" : e, t), t);
var ms = O((Qt) => {
  "use strict";
  Object.defineProperty(Qt, "__esModule", { value: !0 });
  function ul(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  ul(Qt, {
    CORE_OPERATORS: function () {
      return Yt;
    },
    DEFAULTS: function () {
      return Kt;
    },
    DEFAULT_CUSTOM_EASE: function () {
      return gl;
    },
    EASE_DEFAULTS: function () {
      return gs;
    },
    PERCENT_CANVAS_DURATION_S: function () {
      return hl;
    },
    RELATIONSHIP_TYPES: function () {
      return Xt;
    },
    STANDARD_TRIGGER_ALLOWED_CONTROLS: function () {
      return ml;
    },
    TimelineControlType: function () {
      return zt;
    },
    TweenType: function () {
      return Wt;
    },
    isValidControlType: function () {
      return fl;
    },
    tweenTypeFromName: function () {
      return dl;
    },
    tweenTypeToName: function () {
      return pl;
    },
  });
  var zt;
  (function (n) {
    (n.STANDARD = "standard"),
      (n.SCROLL = "scroll"),
      (n.LOAD = "load"),
      (n.CONTINUOUS = "continuous");
  })(zt || (zt = {}));
  function fl(n) {
    return (
      n === "standard" || n === "scroll" || n === "load" || n === "continuous"
    );
  }
  var Wt;
  (function (n) {
    (n[(n.To = 0)] = "To"),
      (n[(n.From = 1)] = "From"),
      (n[(n.FromTo = 2)] = "FromTo"),
      (n[(n.Set = 3)] = "Set");
  })(Wt || (Wt = {}));
  function dl(n) {
    switch (n) {
      case "to":
        return 0;
      case "from":
        return 1;
      case "both":
        return 2;
      case "set":
        return 3;
    }
  }
  function pl(n) {
    switch (n) {
      case 0:
        return "to";
      case 1:
        return "from";
      case 2:
        return "both";
      case 3:
        return "set";
      default:
        return null;
    }
  }
  var Yt;
  (function (n) {
    (n.AND = "wf:and"), (n.OR = "wf:or");
  })(Yt || (Yt = {}));
  var Kt;
  (function (n) {
    n[(n.DURATION = 0.5)] = "DURATION";
  })(Kt || (Kt = {}));
  var hl = 1,
    Xt;
  (function (n) {
    (n.NONE = "none"),
      (n.WITHIN = "within"),
      (n.DIRECT_CHILD_OF = "direct-child-of"),
      (n.CONTAINS = "contains"),
      (n.DIRECT_PARENT_OF = "direct-parent-of"),
      (n.NEXT_TO = "next-to"),
      (n.NEXT_SIBLING_OF = "next-sibling-of"),
      (n.PREV_SIBLING_OF = "prev-sibling-of");
  })(Xt || (Xt = {}));
  var gs = {
      back: { type: "back", curve: "out", power: 1.7 },
      elastic: { type: "elastic", curve: "out", amplitude: 1, period: 0.3 },
      steps: { type: "steps", stepCount: 6 },
      rough: {
        type: "rough",
        templateCurve: "none.inOut",
        points: 20,
        strength: 1,
        taper: "none",
        randomizePoints: !0,
        clampPoints: !1,
      },
      slowMo: { type: "slowMo", linearRatio: 0.7, power: 0.7, yoyoMode: !1 },
      expoScale: {
        type: "expoScale",
        startingScale: 0.05,
        endingScale: 1,
        templateCurve: "none.inOut",
      },
      customWiggle: {
        type: "customWiggle",
        wiggles: 10,
        wiggleType: "easeOut",
      },
      customBounce: {
        type: "customBounce",
        strength: 0.7,
        squash: 1,
        endAtStart: !1,
      },
      customEase: {
        type: "customEase",
        bezierCurve: "M0,160 C40,160 24,96 80,96 136,96 120,0 160,0",
      },
    },
    gl = gs.back,
    ml = [
      "restart",
      "play",
      "reverse",
      "reverseFlipEase",
      "pause",
      "resume",
      "togglePlayReverse",
      "togglePlayReverseFlipEase",
      "stop",
      "none",
    ];
});
var ys = O((Zt) => {
  "use strict";
  Object.defineProperty(Zt, "__esModule", { value: !0 });
  function yl(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  yl(Zt, {
    claimPageLevelTriggerWin: function () {
      return bl;
    },
    getPageLevelTriggerState: function () {
      return vl;
    },
    hasPageLevelTriggerWon: function () {
      return Tl;
    },
    releasePageLevelTriggerFired: function () {
      return Sl;
    },
    resetPageLevelTriggerState: function () {
      return El;
    },
  });
  var Re = new WeakMap();
  function vl(n) {
    let e = Re.get(n);
    return (
      e || ((e = { fired: !1, won: !1, deadline: void 0 }), Re.set(n, e)), e
    );
  }
  function Tl(n) {
    return Re.get(n)?.won === !0;
  }
  function bl(n) {
    let e = Re.get(n);
    e && (e.won = !0);
  }
  function El(n) {
    Re.delete(n);
  }
  function Sl(n) {
    let e = Re.get(n);
    e && ((e.fired = !1), (e.won = !1));
  }
});
var vs = O((en) => {
  "use strict";
  Object.defineProperty(en, "__esModule", { value: !0 });
  Object.defineProperty(en, "RuntimeBuilder", {
    enumerable: !0,
    get: function () {
      return Jt;
    },
  });
  var Jt = class {
    baseInfo;
    extensions = [];
    lifecycle = {};
    constructor(e) {
      this.baseInfo = e;
    }
    addTrigger(e, t) {
      let r = `${this.baseInfo.namespace}:${e}`;
      return (
        this.extensions.push({
          extensionPoint: "trigger",
          id: r,
          triggerType: r,
          implementation: t,
        }),
        this
      );
    }
    addRoleActivationObserver(e, t) {
      let r = `${this.baseInfo.namespace}:${e}`;
      return (
        this.extensions.push({
          extensionPoint: "roleActivationObserver",
          id: r,
          implementation: t,
        }),
        this
      );
    }
    addRoleAppliedQuery(e, t) {
      let r = `${this.baseInfo.namespace}:${e}`;
      return (
        this.extensions.push({
          extensionPoint: "roleAppliedQuery",
          id: r,
          implementation: t,
        }),
        this
      );
    }
    addTriggerContract(e, t) {
      let r = `${this.baseInfo.namespace}:${e}`;
      return (
        this.extensions.push({
          extensionPoint: "triggerContract",
          id: r,
          implementation: t,
        }),
        this
      );
    }
    addAction(e, t) {
      let r = `${this.baseInfo.namespace}:${e}`;
      return (
        this.extensions.push({
          extensionPoint: "action",
          id: r,
          actionType: r,
          implementation: t,
        }),
        this
      );
    }
    addTargetResolver(e, t) {
      let r = `${this.baseInfo.namespace}:${e}`;
      return (
        this.extensions.push({
          extensionPoint: "targetResolver",
          id: r,
          resolverType: r,
          implementation: t,
        }),
        this
      );
    }
    addCondition(e, t) {
      let r = `${this.baseInfo.namespace}:${e}`;
      return (
        this.extensions.push({
          extensionPoint: "condition",
          id: r,
          conditionType: r,
          implementation: t,
        }),
        this
      );
    }
    onInitialize(e) {
      return (this.lifecycle.initialize = e), this;
    }
    onActivate(e) {
      return (this.lifecycle.activate = e), this;
    }
    onDeactivate(e) {
      return (this.lifecycle.deactivate = e), this;
    }
    onDispose(e) {
      return (this.lifecycle.dispose = e), this;
    }
    createManifest() {
      let e = this.extensions.map((t) => `${t.extensionPoint}:${t.id}`);
      return {
        id: [this.baseInfo.namespace, this.baseInfo.pluginId],
        version: this.baseInfo.version,
        name: this.baseInfo.displayName || this.baseInfo.pluginId,
        description: this.baseInfo.description || "",
        dependencies: this.baseInfo.dependencies,
        features: e,
      };
    }
    buildRuntime() {
      return {
        manifest: this.createManifest(),
        extensions: this.extensions,
        ...this.lifecycle,
      };
    }
  };
});
var Ts = O((on) => {
  "use strict";
  Object.defineProperty(on, "__esModule", { value: !0 });
  function wl(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  wl(on, {
    ConditionCategoryBuilder: function () {
      return lt;
    },
    DesignBuilder: function () {
      return rn;
    },
    TargetCategoryBuilder: function () {
      return at;
    },
    TriggerCategoryBuilder: function () {
      return ct;
    },
  });
  var tn = class {
      categoryBuilder;
      groupConfig;
      properties;
      constructor(e, t) {
        (this.categoryBuilder = e),
          (this.groupConfig = t),
          (this.properties = []);
      }
      addProperty(e, t, r) {
        return (
          this.properties.push({
            id: e,
            schema: { ...t, description: r?.description || t.description },
          }),
          this
        );
      }
      addGroup(e) {
        return (
          this.categoryBuilder.finalizeGroup({
            ...this.groupConfig,
            properties: this.properties,
          }),
          this.categoryBuilder.clearCurrentGroupBuilder(),
          this.categoryBuilder.addGroup(e)
        );
      }
      getGroupData() {
        return { ...this.groupConfig, properties: this.properties };
      }
    },
    nn = class {
      categoryId;
      config;
      displayGroups;
      currentGroupBuilder;
      constructor(e, t) {
        (this.categoryId = e),
          (this.config = t),
          (this.displayGroups = []),
          (this.currentGroupBuilder = null);
      }
      addGroup(e) {
        return (
          this.currentGroupBuilder &&
            this.finalizeGroup(this.currentGroupBuilder.getGroupData()),
          (this.currentGroupBuilder = new tn(this, e)),
          this.currentGroupBuilder
        );
      }
      finalizeGroup(e) {
        this.displayGroups.push(e);
      }
      clearCurrentGroupBuilder() {
        this.currentGroupBuilder = null;
      }
      getDefinition() {
        this.currentGroupBuilder &&
          (this.finalizeGroup(this.currentGroupBuilder.getGroupData()),
          (this.currentGroupBuilder = null));
        let e = this.displayGroups.flatMap((t) => t.properties);
        return {
          id: this.categoryId,
          properties: e,
          propertyType: this.config.propertyType || "tween",
          displayGroups: this.displayGroups,
        };
      }
    },
    at = class {
      categoryId;
      config;
      targets;
      constructor(e, t) {
        (this.categoryId = e), (this.config = t), (this.targets = []);
      }
      addTargetSchema(e, t) {
        return this.targets.push({ id: e, schema: t }), this;
      }
      getDefinition() {
        return {
          id: this.categoryId,
          label: this.config.label,
          order: this.config.order,
          targets: this.targets,
        };
      }
    },
    ct = class {
      categoryId;
      config;
      triggers;
      constructor(e, t) {
        (this.categoryId = e), (this.config = t), (this.triggers = []);
      }
      addTriggerSchema(e, t) {
        return this.triggers.push({ id: e, schema: t }), this;
      }
      getDefinition() {
        return {
          id: this.categoryId,
          label: this.config.label,
          order: this.config.order,
          triggers: this.triggers,
        };
      }
    },
    lt = class {
      categoryId;
      config;
      conditions;
      constructor(e, t) {
        (this.categoryId = e), (this.config = t), (this.conditions = []);
      }
      addConditionSchema(e, t) {
        return this.conditions.push({ id: e, schema: t }), this;
      }
      getDefinition() {
        return {
          id: this.categoryId,
          label: this.config.label,
          order: this.config.order,
          conditions: this.conditions,
        };
      }
    },
    rn = class {
      baseInfo;
      categories = new Map();
      targetCategories = new Map();
      triggerCategories = new Map();
      conditionCategories = new Map();
      actionPresets = new Map();
      reducerHooks = [];
      constructor(e) {
        this.baseInfo = e;
      }
      addCategory(e, t = {}) {
        let r = new nn(e, t);
        return this.categories.set(e, r), r;
      }
      addTargetCategory(e, t) {
        let r = new at(e, t);
        return this.targetCategories.set(e, r), r;
      }
      addTriggerCategory(e, t) {
        let r = new ct(e, t);
        return this.triggerCategories.set(e, r), r;
      }
      addConditionCategory(e, t) {
        let r = new lt(e, t);
        return this.conditionCategories.set(e, r), r;
      }
      addActionPreset(e, t) {
        let r = `${this.baseInfo.namespace}:${e}`;
        return (
          this.actionPresets.set(r, {
            id: r,
            name: t.name,
            description: t.description,
            icon: t.icon,
            timelineIcon: t.timelineIcon,
            type: "plugin",
            categoryId: t.categoryId,
            action: t.action,
            customEditor: t.customEditor,
            targetFilter: t.targetFilter,
            designerTargetFilter: t.designerTargetFilter,
            customTargetComponent: t.customTargetComponent,
          }),
          this
        );
      }
      addReducerHooks(e) {
        return this.reducerHooks.push(e), this;
      }
      buildDesign() {
        let e = [];
        for (let [, i] of this.categories) e.push(i.getDefinition());
        let t = [];
        for (let [, i] of this.targetCategories) t.push(i.getDefinition());
        let r = [];
        for (let [, i] of this.triggerCategories) r.push(i.getDefinition());
        let o = [];
        for (let [, i] of this.conditionCategories) o.push(i.getDefinition());
        let s = [];
        for (let [, i] of this.actionPresets) s.push(i);
        return {
          namespace: this.baseInfo.namespace,
          pluginId: this.baseInfo.pluginId,
          version: this.baseInfo.version,
          displayName: this.baseInfo.displayName,
          description: this.baseInfo.description,
          categories: e.length > 0 ? e : void 0,
          targetCategories: t.length > 0 ? t : void 0,
          triggerCategories: r.length > 0 ? r : void 0,
          conditionCategories: o.length > 0 ? o : void 0,
          actionPresets: s.length > 0 ? s : void 0,
          reducerHooks:
            this.reducerHooks.length > 0 ? [...this.reducerHooks] : void 0,
        };
      }
    };
});
var bs = O((an) => {
  "use strict";
  Object.defineProperty(an, "__esModule", { value: !0 });
  Object.defineProperty(an, "TransformBuilder", {
    enumerable: !0,
    get: function () {
      return sn;
    },
  });
  var sn = class {
    baseInfo;
    triggerTransforms = new Map();
    targetTransforms = new Map();
    conditionTransforms = new Map();
    actionTransforms = new Map();
    constructor(e) {
      this.baseInfo = e;
    }
    addTargetTransform(e, t) {
      return (
        this.targetTransforms.set(
          this.createExtensionKey(e),
          function (o, s, i) {
            return t(o, s, i);
          }
        ),
        this
      );
    }
    addTriggerTransform(e, t) {
      return (
        this.triggerTransforms.set(
          this.createExtensionKey(e),
          function (o, s, i) {
            return t(o, s, i);
          }
        ),
        this
      );
    }
    addConditionTransform(e, t) {
      return (
        this.conditionTransforms.set(
          this.createExtensionKey(e),
          function (o, s, i) {
            return t(o, s, i);
          }
        ),
        this
      );
    }
    addActionTransform(e, t) {
      return (
        this.actionTransforms.set(
          this.createExtensionKey(e),
          function (o, s, i) {
            return t(o, s, i);
          }
        ),
        this
      );
    }
    createExtensionKey(e) {
      return `${this.baseInfo.namespace}:${e}`;
    }
    buildTransform() {
      return {
        namespace: this.baseInfo.namespace,
        pluginId: this.baseInfo.pluginId,
        version: this.baseInfo.version,
        displayName: this.baseInfo.displayName,
        description: this.baseInfo.description,
        triggerTransforms: this.triggerTransforms,
        targetTransforms: this.targetTransforms,
        conditionTransforms: this.conditionTransforms,
        actionTransforms: this.actionTransforms,
      };
    }
  };
});
var Ss = O((Es) => {
  "use strict";
  Object.defineProperty(Es, "__esModule", { value: !0 });
});
var Y = O((ye) => {
  "use strict";
  Object.defineProperty(ye, "__esModule", { value: !0 });
  function Ol(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Ol(ye, {
    CORE_OPERATORS: function () {
      return Z.CORE_OPERATORS;
    },
    DEFAULTS: function () {
      return Z.DEFAULTS;
    },
    DEFAULT_CUSTOM_EASE: function () {
      return Z.DEFAULT_CUSTOM_EASE;
    },
    EASE_DEFAULTS: function () {
      return Z.EASE_DEFAULTS;
    },
    PERCENT_CANVAS_DURATION_S: function () {
      return Z.PERCENT_CANVAS_DURATION_S;
    },
    RELATIONSHIP_TYPES: function () {
      return Z.RELATIONSHIP_TYPES;
    },
    STANDARD_TRIGGER_ALLOWED_CONTROLS: function () {
      return Z.STANDARD_TRIGGER_ALLOWED_CONTROLS;
    },
    TimelineControlType: function () {
      return Z.TimelineControlType;
    },
    TweenType: function () {
      return Z.TweenType;
    },
    claimPageLevelTriggerWin: function () {
      return je.claimPageLevelTriggerWin;
    },
    getPageLevelTriggerState: function () {
      return je.getPageLevelTriggerState;
    },
    hasPageLevelTriggerWon: function () {
      return je.hasPageLevelTriggerWon;
    },
    isValidControlType: function () {
      return Z.isValidControlType;
    },
    releasePageLevelTriggerFired: function () {
      return je.releasePageLevelTriggerFired;
    },
    resetPageLevelTriggerState: function () {
      return je.resetPageLevelTriggerState;
    },
    tweenTypeFromName: function () {
      return Z.tweenTypeFromName;
    },
    tweenTypeToName: function () {
      return Z.tweenTypeToName;
    },
  });
  var Z = ms(),
    je = ys();
  ut(vs(), ye);
  ut(Ts(), ye);
  ut(bs(), ye);
  ut(Ss(), ye);
  function ut(n, e) {
    return (
      Object.keys(n).forEach(function (t) {
        t !== "default" &&
          !Object.prototype.hasOwnProperty.call(e, t) &&
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return n[t];
            },
          });
      }),
      n
    );
  }
});
var ne = O((cn) => {
  "use strict";
  Object.defineProperty(cn, "__esModule", { value: !0 });
  function Al(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Al(cn, {
    DEFAULT_ROOT_FONT_SIZE_PX: function () {
      return Il;
    },
    EASING_NAMES: function () {
      return Vl;
    },
    buildCustomEaseId: function () {
      return Dl;
    },
    buildEaseContextId: function () {
      return Fl;
    },
    debounce: function () {
      return Ll;
    },
    defaultSplitClass: function () {
      return kl;
    },
    hasResolvableScrollUnit: function () {
      return Pl;
    },
    isValidControlType: function () {
      return _l;
    },
    resolveScrollUnits: function () {
      return xl;
    },
    throttle: function () {
      return Nl;
    },
    toSeconds: function () {
      return Rl;
    },
  });
  var ft = Y();
  function _l(n) {
    return (
      n === ft.TimelineControlType.STANDARD ||
      n === ft.TimelineControlType.SCROLL ||
      n === ft.TimelineControlType.LOAD ||
      n === ft.TimelineControlType.CONTINUOUS
    );
  }
  function Rl(n) {
    return typeof n == "string" ? parseFloat(n) / 1e3 : n;
  }
  var Il = 16,
    ws = "vh|vw|rem",
    Os = "\\d+(?:\\.\\d+)?",
    Ml = new RegExp(`${Os}(?:${ws})`),
    Cl = new RegExp(`(${Os})(${ws})`, "g");
  function Pl(n) {
    return Ml.test(n);
  }
  function xl(n, e) {
    return n.replace(Cl, (t, r, o) =>
      String(Math.round(parseFloat(r) * e[o] * 100) / 100)
    );
  }
  function kl(n) {
    return `gsap_split_${n}++`;
  }
  var Ll = (
      n,
      e = 0,
      { leading: t = !1, trailing: r = !0, maxWait: o } = {}
    ) => {
      let s,
        i = 0,
        a,
        c,
        l = () => {
          (i = 0), (s = void 0), r && n.apply(a, c);
        };
      function u(...f) {
        (a = this), (c = f), i || ((i = performance.now()), t && n.apply(a, c));
        let d = performance.now() - i;
        if (o && d >= o) {
          clearTimeout(s), l();
          return;
        }
        clearTimeout(s), (s = setTimeout(l, e));
      }
      return (
        (u.cancel = () => {
          clearTimeout(s), (s = void 0), (i = 0);
        }),
        u
      );
    },
    Nl = (n, e = 0, { leading: t = !0, trailing: r = !0, maxWait: o } = {}) => {
      let s = 0,
        i,
        a,
        c,
        l = (f) => {
          (s = f), (i = void 0), n.apply(a, c);
        };
      function u(...f) {
        let d = performance.now();
        !s && !t && (s = d);
        let p = e - (d - s);
        (a = this),
          (c = f),
          p <= 0 || (o && d - s >= o)
            ? (i && (clearTimeout(i), (i = void 0)), l(d))
            : r && !i && (i = setTimeout(() => l(performance.now()), p));
      }
      return (
        (u.cancel = () => {
          clearTimeout(i), (i = void 0), (s = 0);
        }),
        u
      );
    };
  function Fl(n, e) {
    return `${n}-${e}`;
  }
  function Dl(n, e) {
    return e ? `${n}-${e}` : n;
  }
  var Vl = [
    "none",
    "power1.in",
    "power1.out",
    "power1.inOut",
    "power2.in",
    "power2.out",
    "power2.inOut",
    "power3.in",
    "power3.out",
    "power3.inOut",
    "power4.in",
    "power4.out",
    "power4.inOut",
    "back.in",
    "back.out",
    "back.inOut",
    "bounce.in",
    "bounce.out",
    "bounce.inOut",
    "circ.in",
    "circ.out",
    "circ.inOut",
    "elastic.in",
    "elastic.out",
    "elastic.inOut",
    "expo.in",
    "expo.out",
    "expo.inOut",
    "sine.in",
    "sine.out",
    "sine.inOut",
  ];
});
var As = O((ln) => {
  "use strict";
  Object.defineProperty(ln, "__esModule", { value: !0 });
  Object.defineProperty(ln, "EventManager", {
    enumerable: !0,
    get: function () {
      return dt;
    },
  });
  var Ge = ne(),
    Ie = class {
      elementHandlers = new WeakMap();
      eventTypeHandlers = new Map();
      customEventTypes = new Map();
      delegatedHandlers = new Map();
      batchedEvents = new Map();
      batchFrameId = null;
      defaultMaxBatchSize = 10;
      defaultMaxBatchAge = 100;
      defaultErrorHandler = (e, t) =>
        console.error("[EventManager] Error handling event:", e, t);
      constructor() {}
      static getInstance() {
        return Ie.instance || (Ie.instance = new Ie()), Ie.instance;
      }
      addEventListener(e, t, r, o) {
        try {
          let s = o?.kind === "custom",
            i = {
              ...(s ? { delegate: !1, passive: !0, batch: !1 } : jl[t] || {}),
              ...o,
              errorHandler: o?.errorHandler || this.defaultErrorHandler,
            };
          if (!s && t === "load" && "complete" in e && e.complete)
            return (
              setTimeout(() => {
                try {
                  r(new Event("load"), e);
                } catch (u) {
                  i.errorHandler?.(u, new Event("load"));
                }
              }, 0),
              () => {}
            );
          if (!e || !e.addEventListener)
            throw new Error("Invalid element provided to addEventListener");
          let a = this.createWrappedHandler(r, i, e),
            c = this.registerHandler(e, t, r, a.handler, i, s, a.cleanup);
          if (s)
            return () => {
              this.removeHandler(e, t, r, !0), c.cleanup?.();
            };
          let l = new AbortController();
          return (
            i.delegate
              ? this.ensureDelegatedHandler(t)
              : (Bl(i) || e).addEventListener(t, c.wrappedHandler, {
                  passive: i.passive,
                  capture: i.capture,
                  signal: l.signal,
                }),
            () => {
              l.abort(), this.removeHandler(e, t, r, !1);
            }
          );
        } catch (s) {
          return o?.errorHandler?.(s, new Event(t)), () => {};
        }
      }
      emit(e, t, r, o) {
        try {
          let s = this.customEventTypes.get(e);
          if (!s?.size) return;
          let i = new CustomEvent(e, {
            detail: t,
            bubbles: o?.bubbles ?? !0,
            cancelable: !0,
          });
          for (let a of s)
            if (!r || r === a.element || a.element.contains(r))
              try {
                a.wrappedHandler(i);
              } catch (c) {
                console.error(`[EventManager] Error emitting ${e}:`, c);
              }
        } catch (s) {
          console.error(`[EventManager] Error emitting custom event ${e}:`, s);
        }
      }
      dispose() {
        this.batchFrameId !== null &&
          (cancelAnimationFrame(this.batchFrameId),
          (this.batchFrameId = null),
          this.batchedEvents.clear());
        for (let [, e] of this.delegatedHandlers) e.controller.abort();
        for (let [, e] of this.eventTypeHandlers)
          for (let t of e) t.cleanup?.();
        for (let [, e] of this.customEventTypes) for (let t of e) t.cleanup?.();
        this.delegatedHandlers.clear(),
          (this.elementHandlers = new WeakMap()),
          this.eventTypeHandlers.clear(),
          this.customEventTypes.clear();
      }
      createWrappedHandler(e, t, r) {
        let o = (s) => {
          try {
            let i =
              t.target === "window"
                ? window
                : t.target === "document"
                ? document
                : r;
            e(s, i);
          } catch (i) {
            (t.errorHandler || this.defaultErrorHandler)(i, s);
          }
        };
        if (t.batch) {
          let s = (i) => {
            let a = i.type || "unknown";
            this.batchedEvents.has(a) || this.batchedEvents.set(a, []),
              this.batchedEvents
                .get(a)
                .push({
                  event: i,
                  target: r,
                  timestamp: i.timeStamp || performance.now(),
                }),
              this.batchFrameId == null &&
                (this.batchFrameId = requestAnimationFrame(() =>
                  this.processBatchedEvents()
                ));
          };
          if (t.throttleMs && t.throttleMs > 0) {
            let i = (0, Ge.throttle)(o, t.throttleMs);
            return { handler: s, cleanup: i.cancel };
          }
          if (t.debounceMs && t.debounceMs > 0) {
            let i = (0, Ge.debounce)(o, t.debounceMs);
            return { handler: s, cleanup: i.cancel };
          }
          return { handler: s };
        }
        if (t.throttleMs && t.throttleMs > 0) {
          let s = (0, Ge.throttle)(o, t.throttleMs);
          if (t.debounceMs && t.debounceMs > 0) {
            let i = (0, Ge.debounce)(s, t.debounceMs);
            return {
              handler: i,
              cleanup: () => {
                i.cancel?.(), s.cancel?.();
              },
            };
          }
          return { handler: s, cleanup: s.cancel };
        }
        if (t.debounceMs && t.debounceMs > 0) {
          let s = (0, Ge.debounce)(o, t.debounceMs);
          return { handler: s, cleanup: s.cancel };
        }
        return { handler: o };
      }
      processBatchedEvents() {
        if (this.batchFrameId === null) return;
        this.batchFrameId = null;
        let e = performance.now();
        for (let [t, r] of this.batchedEvents) {
          let o = this.eventTypeHandlers.get(t);
          if (!o?.size) continue;
          let s = r.filter((a) => e - a.timestamp < this.defaultMaxBatchAge);
          if (!s.length) continue;
          s.sort((a, c) => a.timestamp - c.timestamp);
          let i =
            s.length <= this.defaultMaxBatchSize
              ? s
              : s.slice(-this.defaultMaxBatchSize);
          for (let { event: a, target: c } of i) {
            let l = a;
            (l.batchTimestamp = e), (l.batchSize = i.length);
            for (let u of o)
              try {
                (u.config.delegate ||
                  u.config.target === "window" ||
                  u.config.target === "document" ||
                  c === a.target ||
                  c.contains(a.target)) &&
                  u.wrappedHandler(l);
              } catch (f) {
                (u.config.errorHandler || this.defaultErrorHandler)(f, l);
              }
          }
        }
        this.batchedEvents.clear();
      }
      ensureDelegatedHandler(e) {
        if (this.delegatedHandlers.has(e)) return;
        let t = new AbortController(),
          r = (s) => {
            let i = this.eventTypeHandlers.get(e);
            if (!i?.size) return;
            let a = s.composedPath
              ? s.composedPath()
              : s.target
              ? [s.target]
              : [];
            for (let c of a)
              if (c instanceof Element) {
                for (let l of i) {
                  if (!l.config.delegate) continue;
                  if (l.element === c || l.element.contains(c))
                    try {
                      l.wrappedHandler(s);
                    } catch (f) {
                      console.error(`[EventDelegator] Error for ${e}:`, f);
                    }
                }
                if (!s.bubbles) break;
              }
          },
          o = [
            "focus",
            "blur",
            "focusin",
            "focusout",
            "mouseenter",
            "mouseleave",
          ].includes(e);
        document.addEventListener(e, r, {
          passive: !1,
          capture: o,
          signal: t.signal,
        }),
          this.delegatedHandlers.set(e, { handler: r, controller: t });
      }
      registerHandler(e, t, r, o, s, i, a) {
        let c = {
          element: e,
          originalHandler: r,
          wrappedHandler: o,
          config: s,
          cleanup: a,
        };
        if (i) {
          let l = this.customEventTypes.get(t) || new Set();
          l.add(c), this.customEventTypes.set(t, l);
        } else {
          let l = this.elementHandlers.get(e) || new Set();
          l.add(c), this.elementHandlers.set(e, l);
          let u = this.eventTypeHandlers.get(t) || new Set();
          u.add(c), this.eventTypeHandlers.set(t, u);
        }
        return c;
      }
      removeHandler(e, t, r, o) {
        if (o) {
          let s = this.customEventTypes.get(t);
          if (!s?.size) return;
          for (let i of s)
            if (i.element === e && i.originalHandler === r) {
              s.delete(i),
                s.size || this.customEventTypes.delete(t),
                i.cleanup?.();
              break;
            }
        } else {
          let s = this.eventTypeHandlers.get(t);
          if (!s?.size) return;
          let i = this.elementHandlers.get(e);
          if (!i?.size) return;
          let a;
          for (let c of i)
            if (c.originalHandler === r) {
              a = c;
              break;
            }
          if (a) {
            if ((i.delete(a), s.delete(a), !s.size)) {
              this.eventTypeHandlers.delete(t);
              let c = this.delegatedHandlers.get(t);
              c && (c.controller.abort(), this.delegatedHandlers.delete(t));
            }
            a.cleanup?.();
          }
        }
      }
    },
    dt = Ie;
  it(dt, "instance");
  function Bl(n) {
    return n.target === "window"
      ? window
      : n.target === "document"
      ? document
      : null;
  }
  var jl = {
    load: { delegate: !1, passive: !0 },
    DOMContentLoaded: { target: "document", passive: !0 },
    readystatechange: { target: "document", passive: !0 },
    beforeunload: { target: "window", passive: !1 },
    unload: { target: "window", passive: !1 },
    pageshow: { target: "window", passive: !0 },
    pagehide: { target: "window", passive: !0 },
    click: { delegate: !0, passive: !1 },
    dblclick: { delegate: !0, passive: !0 },
    mousedown: { delegate: !0, passive: !0 },
    mouseup: { delegate: !0, passive: !0 },
    mousemove: { delegate: !0, batch: !0, passive: !0 },
    mouseenter: { delegate: !1, passive: !0 },
    mouseleave: { delegate: !1, passive: !0 },
    mouseout: { delegate: !0, passive: !0 },
    contextmenu: { delegate: !0, passive: !1 },
    wheel: { delegate: !0, throttleMs: 16, passive: !0, batch: !0 },
    touchstart: { delegate: !0, passive: !0 },
    touchend: { delegate: !0, passive: !1 },
    touchmove: { delegate: !0, batch: !0, passive: !0 },
    touchcancel: { delegate: !0, passive: !0 },
    pointerdown: { delegate: !0, passive: !0 },
    pointerup: { delegate: !0, passive: !0 },
    pointermove: { delegate: !0, batch: !0, passive: !0 },
    pointerenter: { delegate: !1, passive: !0 },
    pointerleave: { delegate: !1, passive: !0 },
    pointercancel: { delegate: !0, passive: !0 },
    keydown: { delegate: !0, passive: !1 },
    keyup: { delegate: !0, passive: !1 },
    keypress: { delegate: !0, passive: !1 },
    input: { delegate: !0, passive: !1 },
    change: { delegate: !0, passive: !1 },
    focus: { delegate: !1, passive: !0 },
    blur: { delegate: !1, passive: !0 },
    focusin: { delegate: !0, passive: !0 },
    focusout: { delegate: !0, passive: !0 },
    submit: { delegate: !0, passive: !1 },
    reset: { delegate: !0, passive: !1 },
    select: { delegate: !0, passive: !0 },
    selectionchange: { target: "document", passive: !0 },
    dragstart: { delegate: !0, passive: !1 },
    drag: { delegate: !0, passive: !0 },
    dragenter: { delegate: !0, passive: !1 },
    dragleave: { delegate: !0, passive: !0 },
    dragover: { delegate: !0, passive: !1 },
    drop: { delegate: !0, passive: !1 },
    dragend: { delegate: !0, passive: !0 },
    play: { delegate: !0, passive: !0 },
    pause: { delegate: !0, passive: !0 },
    ended: { delegate: !0, passive: !0 },
    timeupdate: { delegate: !0, batch: !0, passive: !0 },
    canplay: { delegate: !0, passive: !0 },
    canplaythrough: { delegate: !0, passive: !0 },
    loadeddata: { delegate: !0, passive: !0 },
    animationstart: { delegate: !0, passive: !0 },
    animationend: { delegate: !0, passive: !0 },
    animationiteration: { delegate: !0, passive: !0 },
    transitionstart: { delegate: !0, passive: !0 },
    transitionend: { delegate: !0, passive: !0 },
    transitionrun: { delegate: !0, passive: !0 },
    transitioncancel: { delegate: !0, passive: !0 },
    scroll: { delegate: !1, throttleMs: 16, passive: !0 },
    resize: { target: "window", throttleMs: 16, passive: !0 },
    intersection: { delegate: !1, passive: !0 },
    orientationchange: { target: "window", passive: !0 },
    visibilitychange: { target: "document", passive: !0 },
    storage: { target: "window", passive: !0 },
    online: { target: "window", passive: !0 },
    offline: { target: "window", passive: !0 },
    hashchange: { target: "window", passive: !0 },
    popstate: { target: "window", passive: !0 },
    copy: { delegate: !0, passive: !1 },
    cut: { delegate: !0, passive: !1 },
    paste: { delegate: !0, passive: !1 },
    compositionstart: { delegate: !0, passive: !1 },
    compositionupdate: { delegate: !0, passive: !1 },
    compositionend: { delegate: !0, passive: !1 },
    beforeinput: { delegate: !0, passive: !1 },
  };
});
var _s = O((fn) => {
  "use strict";
  Object.defineProperty(fn, "__esModule", { value: !0 });
  Object.defineProperty(fn, "PluginRuntimeBridge", {
    enumerable: !0,
    get: function () {
      return un;
    },
  });
  var un = class {
    intervalHandlers = new Map();
    channelSubscribers = new Map();
    registerIntervalHandler(e, t) {
      let r = this.intervalHandlers.get(e);
      r !== t &&
        (r !== void 0 &&
          console.warn(
            "IX3: registerIntervalHandler called twice. The previous handler is being replaced; verify the plugin is registered exactly once (or use a unique pluginKey per concurrent handler).",
            { pluginKey: e }
          ),
        this.intervalHandlers.set(e, t));
    }
    fireInterval(e) {
      for (let [t, r] of this.intervalHandlers)
        try {
          r(e);
        } catch (o) {
          console.error(
            "IX3: interval handler threw. Continuing with the remaining handlers. Investigate the plugin to prevent silent data drift.",
            { pluginKey: t },
            o
          );
        }
    }
    publish(e, t, r) {
      let o = this.channelSubscribers.get(e);
      if (o) {
        for (let s of o.values())
          for (let i of s.slice())
            if (!(i.element && r && i.element !== r))
              try {
                i.cb(t);
              } catch (a) {
                console.error(
                  "IX3: channel subscriber threw. Continuing with remaining subscribers.",
                  { channel: e },
                  a
                );
              }
      }
    }
    subscribe(e, t, r, o) {
      let s = this.channelSubscribers.get(t);
      s || ((s = new Map()), this.channelSubscribers.set(t, s));
      let i = s.get(e) ?? [],
        a = { element: r, cb: o };
      return (
        i.push(a),
        s.set(e, i),
        () => {
          let c = this.channelSubscribers.get(t)?.get(e);
          if (!c) return;
          let l = c.indexOf(a);
          l !== -1 && c.splice(l, 1),
            c.length === 0 &&
              (this.channelSubscribers.get(t)?.delete(e),
              this.channelSubscribers.get(t)?.size === 0 &&
                this.channelSubscribers.delete(t));
        }
      );
    }
    destroyTimeline(e) {
      for (let [t, r] of this.channelSubscribers)
        r.delete(e), r.size === 0 && this.channelSubscribers.delete(t);
    }
  };
});
var Rs = O((pn) => {
  "use strict";
  Object.defineProperty(pn, "__esModule", { value: !0 });
  Object.defineProperty(pn, "RuntimeMotionDriver", {
    enumerable: !0,
    get: function () {
      return dn;
    },
  });
  var dn = class {
    env;
    constructor(e) {
      this.env = e;
    }
    hasGsap() {
      return this.env.win.gsap != null;
    }
    hasObserver() {
      return this.env.win.Observer != null;
    }
    timeline() {
      return this.env.win.gsap?.timeline() ?? null;
    }
    to(...e) {
      return this.env.win.gsap?.to(...e) ?? null;
    }
    set(...e) {
      this.env.win.gsap?.set(...e);
    }
    getProperty(...e) {
      return this.env.win.gsap?.getProperty(...e) ?? 0;
    }
    quickSetter(...e) {
      return this.env.win.gsap?.quickSetter(...e) ?? null;
    }
    quickTo(...e) {
      return this.env.win.gsap?.quickTo(...e) ?? null;
    }
    addTicker(e) {
      let t = this.env.win.gsap;
      if (t?.ticker)
        return (
          t.ticker.add(e),
          () => {
            try {
              t.ticker?.remove(e);
            } catch {}
          }
        );
      let r = this.env.win,
        o = 0,
        s = !0,
        i = () => {
          s && (e(), s && (o = r.requestAnimationFrame(i)));
        };
      return (
        (o = r.requestAnimationFrame(i)),
        () => {
          (s = !1), r.cancelAnimationFrame(o);
        }
      );
    }
    createObserver(...e) {
      return this.env.win.Observer?.create(...e) ?? null;
    }
  };
});
var ht = O((hn) => {
  "use strict";
  Object.defineProperty(hn, "__esModule", { value: !0 });
  function Gl(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Gl(hn, {
    getContractContainerSelector: function () {
      return ql;
    },
    getTriggerContract: function () {
      return $l;
    },
    registerTriggerContract: function () {
      return Ul;
    },
    resetTriggerContracts: function () {
      return Hl;
    },
  });
  var pt = new Map();
  function Ul(n, e) {
    pt.set(n, e);
  }
  function $l(n) {
    return pt.get(n);
  }
  function ql() {
    let n = "";
    return (
      pt.forEach(({ container: e }) => {
        e && (n += (n ? "," : "") + e);
      }),
      n
    );
  }
  function Hl() {
    pt.clear();
  }
});
var Tn = O((vn) => {
  "use strict";
  Object.defineProperty(vn, "__esModule", { value: !0 });
  function zl(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  zl(vn, {
    analyzeSharedTimelineGroups: function () {
      return Yl;
    },
    triggerEmitsCallbackRole: function () {
      return gu;
    },
    triggerRoutesByCallbackRole: function () {
      return Ue;
    },
  });
  var gn = Y(),
    mn = ht(),
    Wl = 10;
  function Yl(n, e, t, r, o, s) {
    let i = n.timelineIds ?? [];
    if (i.length < 2) return [];
    let a = !0,
      c = !1,
      l = 0,
      u = 0;
    for (let T of n.triggers) {
      let [v, E, _] = T;
      if (E?.controlType === gn.TimelineControlType.CONTINUOUS) return [];
      if (
        (E?.controlType !== void 0 &&
          E.controlType !== gn.TimelineControlType.STANDARD &&
          (a = !1),
        lu(v, E) && (c = !0),
        cu(v, E))
      )
        return [];
      if (Ue(v, E)) {
        let A = _ ? new Set(t(_, { trigger: T }, n)).size : 0;
        (u += A), A > 0 && l++;
      }
    }
    let f =
        a &&
        n.triggers.some(
          ([T]) => (0, mn.getTriggerContract)(T)?.ownsRoleSet === !0
        )
          ? Kl(
              i,
              e,
              r,
              (T) => t(T, {}, n),
              o ? (T) => o(T, n) : void 0,
              u > 1,
              s
            )
          : void 0,
      d = f ? [f] : [],
      p = new Set(f?.members);
    if (
      i.some((T) => {
        let v = e.get(T),
          E = v?.settings?.control;
        return v?.triggerMetadata?.role != null && E != null && iu.has(E);
      })
    )
      return [];
    if (c) return d;
    if (l > 1) return [];
    let h = u > 1;
    if (mu(n.triggers, t, n)) return d;
    let g = [],
      y = new Map();
    for (let T of i) {
      if (p.has(T)) continue;
      let v = e.get(T);
      if (!v || v.reuse || !v.actions?.length || vu(v, r)) continue;
      if (o?.(v, n)) {
        let _ = v.triggerMetadata?.role ? Jl(v, s) : void 0;
        if (_ !== void 0) {
          let A = y.get(_);
          A ? A.push(T) : y.set(_, [T]);
        }
        continue;
      }
      if (h) continue;
      let E = new Set();
      for (let _ of v.actions)
        if (_.targets)
          for (let A of _.targets) for (let I of t(A, {}, n)) E.add(I);
      g.push({ id: T, targets: E });
    }
    let S = [],
      b = (T) => {
        let v = T;
        for (let E = 0; E <= Wl; E++) {
          let _ = e.get(v)?.reuse?.sourceTimelineId;
          if (!_) return v;
          v = _;
        }
        return v;
      },
      m = (T, v) => {
        let E = new Set(T),
          _ = new Set(),
          A = new Set(),
          I = (R) => {
            let k = R?.groupId;
            if (k != null) {
              if (_.has(k)) return !1;
              _.add(k);
            }
            let F = R?.triggerMetadata?.role;
            if (F != null) {
              if (A.has(F)) return !1;
              A.add(F);
            }
            return !0;
          };
        for (let R of T) if (!I(e.get(R))) return;
        for (let R of i) {
          if (E.has(R)) continue;
          let k = e.get(R);
          if (k?.reuse && E.has(b(R)) && !I(k)) return;
        }
        if (Ms(T, e, (R) => t(R, {}, n), v)) return;
        let M = new Map(T.map((R) => [R, tu(e.get(R), r, v)])),
          P = new Map();
        for (let R of i) for (let [k, F] of M.get(R) ?? []) P.set(k, F);
        if (P.size > 0) {
          let R = T.find((F) => {
            let H = M.get(F);
            if (H.size !== P.size) return !1;
            for (let [Q, V] of H) if (P.get(Q) !== V) return !1;
            return !0;
          });
          if (!R) return;
          let k = T.indexOf(R);
          if (k > 0) {
            let [F] = T.splice(k, 1);
            T.unshift(F);
          }
        }
        S.push({ primary: T[0], members: T });
      },
      w = new Set();
    for (let T = 0; T < g.length; T++) {
      if (w.has(T)) continue;
      let v = [g[T].id],
        E = new Set(g[T].targets);
      w.add(T);
      let _ = !0;
      for (; _; ) {
        _ = !1;
        for (let A = T + 1; A < g.length; A++)
          if (!w.has(A) && xs(E, g[A].targets)) {
            v.push(g[A].id);
            for (let I of g[A].targets) E.add(I);
            w.add(A), (_ = !0);
          }
      }
      v.length >= 2 && m(v);
    }
    for (let [T, v] of y) v.length >= 2 && m(v, T);
    return [...d, ...S];
  }
  function Kl(n, e, t, r, o, s = !1, i) {
    let a = [],
      c = new Set();
    for (let u of n) {
      let f = e.get(u),
        d = f?.triggerMetadata?.role;
      if (d) {
        if (c.has(d)) return;
        c.add(d), !f?.reuse && a.push(u);
      }
    }
    if (a.length < 2 || Ms(a, e, r, void 0, i)) return;
    let l = Xl(a, e, t, o);
    if (s) {
      let u = e.get(l.primary);
      if (!u || o?.(u) !== !0) return;
    }
    return l;
  }
  function Xl(n, e, t, r) {
    let o = (a) => Ql(e.get(a), t),
      s = (a) => {
        let c = e.get(a);
        return c != null && r?.(c) === !0;
      },
      i = r ? n.findIndex((a) => s(a) && o(a)) : -1;
    if (
      (i < 0 && r && (i = n.findIndex(s)), i < 0 && (i = n.findIndex(o)), i > 0)
    ) {
      let [a] = n.splice(i, 1);
      n.unshift(a);
    }
    return { primary: n[0], members: n };
  }
  function Ql(n, e) {
    if (!n?.actions) return !1;
    let t = new Map();
    for (let r of n.actions) {
      if (!r) continue;
      let o = r.tt ?? 0,
        s = r.splitText
          ? typeof r.splitText == "string"
            ? r.splitText
            : r.splitText.type
          : "none",
        i =
          s === "none"
            ? JSON.stringify(r.targets)
            : `${JSON.stringify(r.targets)}_split_${s}`,
        a = t.get(i) ?? new Set();
      t.set(i, a);
      let c = !1;
      for (let l of Object.values(r.properties ?? {}))
        for (let u of Object.keys(l || {})) a.has(u) ? (c = !0) : a.add(u);
      if ((o === 1 || o === 2) && !c && Zl(r, e)) return !0;
    }
    return !1;
  }
  function Zl(n, e) {
    for (let t in n.properties) {
      let r = e(t),
        o = n.properties[t];
      if (!(!r?.createTweenConfig || !o))
        try {
          let s = r.createTweenConfig(o);
          if (Object.keys(s.from ?? {}).length > 0) return !0;
        } catch {}
    }
    return !1;
  }
  function Jl(n, e) {
    if (!e || !n.actions?.length) return;
    let t;
    for (let r of n.actions) {
      if (!r.targets?.length) return;
      for (let o of r.targets) {
        let s = e(o);
        if (s === void 0) return;
        if (t === void 0) t = s;
        else if (t !== s) return;
      }
    }
    return t;
  }
  function Ms(n, e, t, r, o) {
    let s = new Map();
    for (let i of n)
      for (let [a, c] of eu(e.get(i), t, r, o)) {
        let l = s.get(a);
        if (l !== void 0 && l !== c) return !0;
        s.set(a, c);
      }
    return !1;
  }
  function eu(n, e, t, r) {
    let o = [];
    for (let s of n?.actions ?? []) {
      if (!s?.splitText) continue;
      let i = typeof s.splitText == "string" ? void 0 : s.splitText.mask,
        a = i ? `mask_${i}` : "none";
      if (t !== void 0) {
        o.push([t, a]);
        continue;
      }
      for (let c of s.targets ?? []) {
        let l = e(c);
        if (l.length === 0) o.push([r?.(c) ?? JSON.stringify(c), a]);
        else for (let u of l) o.push([u, a]);
      }
    }
    return o;
  }
  function tu(n, e, t) {
    let r = new Map();
    if (!n?.actions) return r;
    let o = new Map();
    for (let s of n.actions) {
      if (!s) continue;
      let i = s.tt ?? 0,
        a = s.splitText
          ? typeof s.splitText == "string"
            ? s.splitText
            : s.splitText.type
          : "none",
        c = a === "none" ? "" : `_split_${a}`,
        l = JSON.stringify(s.targets) + c,
        u =
          s.splitText && typeof s.splitText != "string"
            ? s.splitText.mask
            : void 0,
        f = u ? `_mask_${u}` : "",
        d = o.get(l) ?? new Set();
      o.set(l, d);
      let p = !1;
      for (let h of Object.values(s.properties ?? {}))
        for (let g of Object.keys(h || {})) d.has(g) ? (p = !0) : d.add(g);
      if ((i === 1 || i === 2) && !p) {
        let h = (t === void 0 ? l : t + c) + f;
        for (let [g, y] of nu(s, e)) r.set(`${h} ${g}`, y);
      }
    }
    return r;
  }
  function nu(n, e) {
    let t = [];
    for (let r in n.properties) {
      let o = e(r),
        s = n.properties[r];
      if (!(!o?.createTweenConfig || !s))
        try {
          let i = o.createTweenConfig(s);
          for (let [a, c] of Object.entries(i.from ?? {}))
            t.push([a, ou(c, s)]);
        } catch {}
    }
    return t;
  }
  var ru = 0;
  function ou(n, e) {
    if (typeof n == "number" && Number.isNaN(n))
      return `NaN(${JSON.stringify(e) ?? ""})`;
    if (typeof n == "function") {
      let { legacyExpression: t } = n;
      return typeof t == "string" ? `fn(${t})` : `fn#${ru++}`;
    }
    return JSON.stringify(n) ?? "undefined";
  }
  var su = new Set(["resume", "reverse", "reverseFlipEase", "pause", "stop"]),
    iu = new Set(["resume", "pause", "stop"]),
    au = new Set(["togglePlayReverse", "togglePlayReverseFlipEase"]);
  function cu(n, e) {
    if (!e) return !1;
    let t = Ue(n, e),
      r = (i) => !!(i && (su.has(i) || (!t && au.has(i))));
    if (r(e.control)) return !0;
    let { ifTrue: o, ifFalse: s } = e.conditionalLogic ?? {};
    return r(o?.control) || r(s?.control);
  }
  function lu(n, e) {
    return !e ||
      (e.controlType !== void 0 &&
        e.controlType !== gn.TimelineControlType.STANDARD)
      ? !0
      : !(
          (e.assignedGroupId !== void 0 && e.assignedGroupId !== "") ||
          e.assignedTimelineRole ||
          Ue(n, e)
        );
  }
  function uu(n, e) {
    return (
      n === yn && typeof e == "object" && e !== null && e.multiTimeline === !0
    );
  }
  var yn = "wf:hover",
    fu = new Set(["wf:navbar", "wf:dropdown"]),
    Is = new Set(["wf:focus", "wf:blur"]),
    du = new Map([
      [yn, new Set(["mouseEnter", "mouseLeave"])],
      ["wf:navbar", new Set(["open", "close"])],
      ["wf:dropdown", new Set(["open", "close"])],
    ]);
  function Cs(n) {
    return fu.has(n) || (0, mn.getTriggerContract)(n)?.emitsRolesAlways === !0;
  }
  function Ue(n, e) {
    return Cs(n) || uu(n, e?.pluginConfig);
  }
  function pu(n) {
    return typeof n?.assignedGroupId == "string" && n.assignedGroupId !== ""
      ? n.assignedGroupId
      : void 0;
  }
  function hu(n) {
    let e = pu(n);
    return e !== void 0
      ? `group:${e}`
      : n?.assignedTimelineRole
      ? `role:${n.assignedTimelineRole}`
      : void 0;
  }
  function Ps(n, e) {
    if (n !== yn) return;
    let t = e?.pluginConfig;
    if (typeof t == "object" && t !== null) {
      let r = t.eventMode;
      return r === "enter" || r === "leave" ? r : void 0;
    }
  }
  function gu(n, e, t) {
    let r = (0, mn.getTriggerContract)(n),
      o = du.get(n);
    if (o ? !o.has(t) : r && !r.roles.includes(t)) return !1;
    if (Cs(n)) {
      let i = e?.pluginConfig,
        a = typeof i == "object" && i !== null ? i.event : void 0;
      return a === "open" || a === "close" || r?.roles.includes(a)
        ? t === a
        : !0;
    }
    let s = Ps(n, e);
    return s === "enter"
      ? t !== "mouseLeave"
      : s === "leave"
      ? t !== "mouseEnter"
      : !0;
  }
  function mu(n, e, t) {
    let r = [];
    for (let o of n) {
      let [s, i, a] = o,
        c = Ue(s, i) ? `callback:${r.length}` : hu(i);
      c !== void 0 &&
        r.push({
          route: c,
          key: s,
          eventMode: Ps(s, i),
          reactive: i.conditionalLogic != null,
          elements: a ? new Set(e(a, { trigger: o }, t)) : new Set(),
        });
    }
    for (let o = 0; o < r.length; o++)
      for (let s = o + 1; s < r.length; s++) {
        if (r[o].route === r[s].route) continue;
        let i = r[o].eventMode,
          a = r[s].eventMode,
          c = xs(r[o].elements, r[s].elements),
          l = i !== void 0 && a !== void 0,
          u = r[o].reactive || r[s].reactive,
          f = r[o].reactive && r[s].reactive,
          d = r[o].key !== r[s].key && Is.has(r[o].key) && Is.has(r[s].key);
        if (c) {
          if (!(l && i !== a && !u)) return !0;
        } else if (l || d || f || yu(r[o].elements, r[s].elements)) return !0;
      }
    return !1;
  }
  function xs(n, e) {
    let [t, r] = n.size <= e.size ? [n, e] : [e, n];
    for (let o of t) if (r.has(o)) return !0;
    return !1;
  }
  function yu(n, e) {
    for (let t of n)
      for (let r of e)
        if (t !== r && (t.contains(r) || r.contains(t))) return !0;
    return !1;
  }
  function vu(n, e) {
    for (let t of n.actions ?? [])
      for (let r in t.properties) if (e(r)?.createCustomTween) return !0;
    return !1;
  }
});
var Fs = O((bn) => {
  "use strict";
  Object.defineProperty(bn, "__esModule", { value: !0 });
  function Tu(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Tu(bn, {
    MAX_ALIAS_DEPTH: function () {
      return Ls;
    },
    resolveSourceTimelineId: function () {
      return Ns;
    },
    shouldFlipEaseForTimeline: function () {
      return bu;
    },
  });
  var ks = Tn(),
    Ls = 10;
  function Ns(n, e) {
    let t = e;
    for (let r = 0; r <= Ls; r++) {
      let s = n.get(t)?.reuse?.sourceTimelineId;
      if (!s) return t;
      t = s;
    }
    return (
      console.warn(
        `IX3: Timeline reuse chain exceeded max depth for "${e}". Possible circular reference.`
      ),
      t
    );
  }
  function bu(n, e, t, r) {
    let {
        getInteractionsForTimelines: o,
        getReuseAliasesForSource: s,
        timelineGroupsEnabled: i,
      } = r,
      a = Ns(n, t),
      c = new Set([a, ...s(a)]),
      l = !1,
      u = (d) => {
        if (d === "reverseFlipEase" || d === "togglePlayReverseFlipEase")
          l = !0;
        else if (d === "reverse" || d === "togglePlayReverse") return !0;
        return !1;
      },
      f = new Map();
    if (i) for (let d of o(c)) f.set(d.id, d);
    else
      for (let d of c) {
        let p = e(d);
        p && f.set(p.id, p);
      }
    for (let d of f.values()) {
      let p = d.timelineIds ?? [];
      for (let [h, g] of d.triggers) {
        let y = g?.assignedGroupId,
          S = (0, ks.triggerRoutesByCallbackRole)(h, g);
        if (y === null && !S) continue;
        let b = g?.assignedTimelineRole,
          m =
            b != null
              ? p.filter((E) => n.get(E)?.triggerMetadata?.role === b)
              : null,
          w;
        if (S)
          w = p.filter((E) => {
            let _ = n.get(E)?.triggerMetadata?.role;
            return _ != null && (0, ks.triggerEmitsCallbackRole)(h, g, _);
          });
        else if (y != null) {
          let E = p.filter((_) => n.get(_)?.groupId === y);
          if (E.length === 0) continue;
          w = E;
        } else w = m;
        let T = (E) =>
            (E != null ? [E] : p).filter(
              (A) => (w == null || w.includes(A)) && c.has(A)
            ),
          v = g?.conditionalLogic;
        if (v) {
          for (let E of [v.ifTrue, v.ifFalse])
            if (E && T(E.targetTimelineId ?? void 0).length > 0 && u(E.control))
              return !1;
        } else
          for (let E of T()) {
            let _ = n.get(E),
              A = (i ? _?.triggerMetadata?.role != null : _?.triggerMetadata)
                ? _?.settings?.control
                : g?.control;
            if (u(A)) return !1;
          }
      }
    }
    return l;
  }
});
var On = O((wn) => {
  "use strict";
  Object.defineProperty(wn, "__esModule", { value: !0 });
  function Eu(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Eu(wn, {
    SplitTextManager: function () {
      return Sn;
    },
    getSplitTextType: function () {
      return Ds;
    },
  });
  var En = ne(),
    Su = ht(),
    Sn = class {
      collectTargets;
      onAutoSplit;
      onSplitExtended;
      onSplitReused;
      globalSplitRegistry;
      constructor(e, t, r, o) {
        (this.collectTargets = e),
          (this.onAutoSplit = t),
          (this.onSplitExtended = r),
          (this.onSplitReused = o),
          (this.globalSplitRegistry = new Map());
      }
      splitForActions(e, t, r, o, s, i) {
        let a = this.analyzeSplitRequirements(e, t, r, i);
        for (let [c, { types: l, masks: u }] of a)
          this.doSplitText({ type: wu(l), mask: Ou(u) }, [c], o, s);
      }
      analyzeSplitRequirements(e, t, r, o) {
        let s = new Map();
        for (let i of e) {
          let a = Ds(i);
          if (a === "none") continue;
          let c = typeof i.splitText == "object" ? i.splitText.mask : void 0;
          for (let l of this.collectTargets(i, t, r, o)) {
            if (l === document.body) continue;
            let u = s.get(l) || { types: new Set(), masks: new Set() };
            s.set(l, u), u.types.add(a), c && u.masks.add(c);
          }
        }
        return s;
      }
      doSplitText(e, t, r, o) {
        try {
          let s = gt(e.type);
          for (let i of t) {
            let a = this.globalSplitRegistry.get(i);
            if (a) {
              let p = new Set(gt(a.splitTextConfig.type));
              if (s.every((g) => p.has(g))) {
                (a.owner = r),
                  p.has("lines") &&
                    (this.onSplitReused(r), (r.timeline.data.splitLines = !0));
                continue;
              }
              a.splitInstance.revert(),
                this.globalSplitRegistry.delete(i),
                (e = {
                  type: [...new Set([...p, ...s])].join(", "),
                  mask: e.mask || a.splitTextConfig.mask,
                });
            }
            let c = {
                splitInstance: void 0,
                splitTextConfig: e,
                owner: r,
                lineSplit: void 0,
              },
              l = { type: e.type, tag: "span" },
              u = gt(e.type),
              { mask: f } = e;
            if (u.includes("lines")) {
              (r.timeline.data.splitLines = !0),
                (l.linesClass = (0, En.defaultSplitClass)("line")),
                (l.autoSplit = !0);
              let p = { vars: l, width: 0 },
                h = (0, Su.getContractContainerSelector)();
              h && i.closest(h) && (c.lineSplit = p),
                (l.onSplit = (g) => {
                  (p.width = i.offsetWidth),
                    this.applySplitElementStyles(g, f),
                    this.onAutoSplit(c.owner, i);
                });
            }
            u.includes("words") &&
              (l.wordsClass = (0, En.defaultSplitClass)("word")),
              u.includes("chars") &&
                (l.charsClass = (0, En.defaultSplitClass)("letter")),
              f && (l.mask = f);
            let d = new o([i], l);
            this.applySplitElementStyles(d, f),
              (c.splitInstance = d),
              this.globalSplitRegistry.set(i, c),
              a && this.onSplitExtended(i);
          }
        } catch (s) {
          console.error("Error splitting text:", s);
        }
      }
      applySplitElementStyles(e, t) {
        let r = [
          [e.lines, "block"],
          [e.words, "inline-block"],
          [e.chars, "inline-block"],
        ];
        t && r.push([e.masks, t === "lines" ? "block" : "inline-block"]);
        for (let [o, s] of r)
          for (let i of o) {
            let { style: a } = i;
            (a.position = "relative"), (a.display = s);
          }
      }
      getSplitElements(e, t) {
        let r = [];
        for (let o of e) {
          let s = this.globalSplitRegistry.get(o);
          if (s && gt(s.splitTextConfig.type).includes(t)) {
            let a = s.splitInstance[t];
            a?.length && r.push(...a);
          }
        }
        return r.length > 0 ? r : e;
      }
      refreshLineSplits(e) {
        for (let [t, { splitInstance: r, lineSplit: o }] of this
          .globalSplitRegistry) {
          if (!o || !e.has(t)) continue;
          let s = t.offsetWidth;
          s && s !== o.width && r.split(o.vars);
        }
      }
      revertAll() {
        for (let [, e] of this.globalSplitRegistry) e.splitInstance.revert();
        this.globalSplitRegistry.clear();
      }
    };
  function wu(n) {
    return (
      n.has("chars") && !n.has("words") && (n = new Set([...n, "words"])),
      ["lines", "words", "chars"].filter((r) => n.has(r)).join(", ")
    );
  }
  function Ou(n) {
    if (n.size !== 0) {
      if (n.has("lines")) return "lines";
      if (n.has("words")) return "words";
      if (n.has("chars")) return "chars";
    }
  }
  function Ds(n) {
    return n.splitText
      ? typeof n.splitText == "string"
        ? n.splitText
        : n.splitText.type
      : "none";
  }
  function gt(n) {
    return n.split(", ");
  }
});
var _n = O((An) => {
  "use strict";
  Object.defineProperty(An, "__esModule", { value: !0 });
  function Au(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Au(An, {
    convertEaseConfigToGSAP: function () {
      return Bs;
    },
    convertEaseConfigToLinear: function () {
      return Ru;
    },
    isAdvancedEase: function () {
      return Iu;
    },
    isBasicEase: function () {
      return Mu;
    },
  });
  var $e = ne();
  function Vs() {
    return {
      gsap: window.gsap,
      CustomEase: window.CustomEase,
      CustomWiggle: window.CustomWiggle,
      CustomBounce: window.CustomBounce,
    };
  }
  function Bs(n, e = Vs(), t) {
    return n == null
      ? "none"
      : typeof n == "number"
      ? $e.EASING_NAMES[n] || "none"
      : _u(n, e, t);
  }
  function _u(n, e, t) {
    switch (n.type) {
      case "back":
        return `back.${n.curve}(${n.power})`;
      case "elastic":
        return `elastic.${n.curve}(${n.amplitude}, ${n.period})`;
      case "steps":
        return `steps(${n.stepCount})`;
      case "rough": {
        let {
          templateCurve: r,
          points: o,
          strength: s,
          taper: i,
          randomizePoints: a,
          clampPoints: c,
        } = n;
        return `rough({ template: ${r}, strength: ${s}, points: ${o}, taper: ${i}, randomize: ${a}, clamp: ${c} })`;
      }
      case "slowMo":
        return `slow(${n.linearRatio}, ${n.power}, ${n.yoyoMode})`;
      case "expoScale":
        return `expoScale(${n.startingScale}, ${n.endingScale}, ${n.templateCurve})`;
      case "customWiggle": {
        let { CustomWiggle: r } = e;
        return r
          ? r.create((0, $e.buildCustomEaseId)("customIX3Wiggle", t), {
              wiggles: n.wiggles,
              type: n.wiggleType,
            })
          : null;
      }
      case "customBounce": {
        let { CustomBounce: r } = e;
        return r
          ? r.create((0, $e.buildCustomEaseId)("customIX3Bounce", t), {
              strength: n.strength,
              endAtStart: n.endAtStart,
              squash: n.squash,
              squashID: (0, $e.buildCustomEaseId)("customIX3Squash", t),
            })
          : null;
      }
      case "customEase": {
        let { CustomEase: r } = e;
        return r
          ? r.create(
              (0, $e.buildCustomEaseId)("customIX3Ease", t),
              n.bezierCurve
            )
          : null;
      }
      default:
        return "none";
    }
  }
  function Ru(n, e = Vs(), t = 20) {
    if (n == null) return "linear";
    let r = Bs(n, e);
    if (r === null) return "linear";
    if (typeof n == "object" && n.type === "steps")
      return `steps(${n.stepCount})`;
    let { gsap: o } = e;
    if (!o) return "linear";
    let s = o.parseEase(r);
    if (typeof s != "function") return "linear";
    let i = [];
    for (let a = 0; a <= t; a++) {
      let c = a / t,
        l = s(c);
      i.push({ t: Number(c.toFixed(4)), value: Number(l.toFixed(4)) });
    }
    return (
      "linear(" +
      i.map((a) => `${a.value} ${Math.round(a.t * 100)}%`).join(", ") +
      ")"
    );
  }
  function Iu(n) {
    return typeof n == "object" && n !== null;
  }
  function Mu(n) {
    return typeof n == "number";
  }
});
var Mn = O((In) => {
  "use strict";
  Object.defineProperty(In, "__esModule", { value: !0 });
  function Cu(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Cu(In, {
    applyEase: function () {
      return Rn;
    },
    configHasVolatileValue: function () {
      return xu;
    },
    convertToGsapDefaults: function () {
      return ku;
    },
    getStaggerConfig: function () {
      return Gs;
    },
    isVolatileGsapValue: function () {
      return js;
    },
  });
  var ve = ne(),
    Pu = _n();
  function js(n) {
    return (
      typeof n == "function" ||
      (typeof n == "string" &&
        (n.startsWith("+=") || n.startsWith("-=") || n.startsWith("random(")))
    );
  }
  function xu(n) {
    for (let e of [n.to, n.from])
      if (e) {
        for (let t in e) if (js(e[t])) return !0;
      }
    return !1;
  }
  function Rn(n, e, t) {
    let r = (0, Pu.convertEaseConfigToGSAP)(e, void 0, t);
    r != null && (n.ease = r);
  }
  var Gs = (n, e) => {
    if (!n) return;
    let { ease: t, amount: r, from: o, grid: s, axis: i, each: a } = n,
      c = {};
    return (
      r != null && (c.amount = (0, ve.toSeconds)(r)),
      a != null && (c.each = (0, ve.toSeconds)(a)),
      o != null && (c.from = o),
      s != null && (c.grid = s),
      i != null && (c.axis = i),
      t != null && Rn(c, t, e),
      c
    );
  };
  function ku(n, e) {
    let t = {},
      r = e ? (0, ve.buildEaseContextId)(e, "defaults") : void 0,
      o = e ? (0, ve.buildEaseContextId)(e, "defaults-stagger") : void 0;
    if (
      (n.duration != null && (t.duration = (0, ve.toSeconds)(n.duration)),
      n.ease != null && Rn(t, n.ease, r),
      n.delay != null &&
        (t.delay =
          typeof n.delay == "number" ? n.delay : (0, ve.toSeconds)(n.delay)),
      n.repeat != null && (t.repeat = n.repeat),
      n.repeatDelay != null &&
        (t.repeatDelay = (0, ve.toSeconds)(n.repeatDelay)),
      n.stagger != null)
    ) {
      let s = Gs(n.stagger, o);
      s && (t.stagger = s);
    }
    return n.yoyo != null && (t.yoyo = n.yoyo), t;
  }
});
var Ws = O((Pn) => {
  "use strict";
  Object.defineProperty(Pn, "__esModule", { value: !0 });
  Object.defineProperty(Pn, "ScrollMarkerFocusManager", {
    enumerable: !0,
    get: function () {
      return Cn;
    },
  });
  var Lu =
      ".gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end",
    Hs = "wf-ix3-marker-focus",
    zs = "wf-ix3-marker-owned",
    Us = "wf-ix3-marker-focus-style",
    $s = "marker-",
    Nu = `.${zs}{opacity:.4;pointer-events:auto!important;transition:opacity .15s ease;}.${Hs}{opacity:1!important;}`;
  function qs(n) {
    for (let e of Array.from(n.classList))
      if (e.startsWith($s)) return e.slice($s.length);
    return null;
  }
  var Cn = class {
    env;
    setsByStId;
    orderedStIds;
    stickyIId;
    hoverIId;
    stickyPinned;
    initialized;
    styleEl;
    constructor(e) {
      (this.env = e),
        (this.setsByStId = new Map()),
        (this.orderedStIds = []),
        (this.stickyIId = null),
        (this.hoverIId = null),
        (this.stickyPinned = !1),
        (this.initialized = !1),
        (this.styleEl = null),
        (this.onMouseOver = (t) => {
          let r = this.interactionForTarget(t.target);
          r != null && ((this.hoverIId = r), this.applyFocus());
        }),
        (this.onMouseOut = (t) => {
          let r = t.relatedTarget;
          this.interactionForTarget(r) == null &&
            this.hoverIId != null &&
            ((this.hoverIId = null), this.applyFocus());
        }),
        (this.onClick = (t) => {
          let r = this.interactionForTarget(t.target);
          r != null &&
            (t.stopPropagation(),
            (this.stickyIId = r),
            (this.stickyPinned = !0),
            this.applyFocus());
        }),
        (this.onRefresh = () => {
          this.applyFocus();
        });
    }
    register(e, t) {
      this.setsByStId.has(e) || this.orderedStIds.push(e),
        this.setsByStId.set(e, t),
        this.initialized || this.init(),
        this.stickyPinned || (this.stickyIId = this.computeDefaultSticky()),
        this.applyFocus();
    }
    unregister(e) {
      if (this.setsByStId.has(e)) {
        if (
          (this.setsByStId.delete(e),
          (this.orderedStIds = this.orderedStIds.filter((t) => t !== e)),
          this.setsByStId.size === 0)
        ) {
          this.destroy();
          return;
        }
        this.stickyPinned
          ? this.stickyIId != null &&
            !this.hasInteraction(this.stickyIId) &&
            ((this.stickyPinned = !1),
            (this.stickyIId = this.computeDefaultSticky()))
          : (this.stickyIId = this.computeDefaultSticky()),
          this.hoverIId != null &&
            !this.hasInteraction(this.hoverIId) &&
            (this.hoverIId = null),
          this.applyFocus();
      }
    }
    destroy() {
      if (this.initialized) {
        let { doc: e } = this.env;
        e.removeEventListener("mouseover", this.onMouseOver, !0),
          e.removeEventListener("mouseout", this.onMouseOut, !0),
          e.removeEventListener("click", this.onClick, !0),
          this.env.win.ScrollTrigger?.removeEventListener?.(
            "refresh",
            this.onRefresh
          ),
          this.styleEl?.remove(),
          (this.styleEl = null);
      }
      this.setsByStId.clear(),
        (this.orderedStIds = []),
        (this.stickyIId = null),
        (this.hoverIId = null),
        (this.stickyPinned = !1),
        (this.initialized = !1);
    }
    init() {
      let { doc: e } = this.env,
        t = e.getElementById(Us);
      if (t?.tagName === "STYLE") this.styleEl = t;
      else {
        let r = e.createElement("style");
        (r.id = Us),
          (r.textContent = Nu),
          (e.head || e.documentElement).appendChild(r),
          (this.styleEl = r);
      }
      e.addEventListener("mouseover", this.onMouseOver, !0),
        e.addEventListener("mouseout", this.onMouseOut, !0),
        e.addEventListener("click", this.onClick, !0),
        this.env.win.ScrollTrigger?.addEventListener?.(
          "refresh",
          this.onRefresh
        ),
        (this.initialized = !0);
    }
    get focusedIId() {
      return this.hoverIId ?? this.stickyIId;
    }
    hasInteraction(e) {
      for (let t of this.setsByStId.values()) if (t === e) return !0;
      return !1;
    }
    computeDefaultSticky() {
      let e = this.env.win.__wf_ix3_marker_focus;
      if (e != null && this.hasInteraction(e)) return e;
      let t = this.orderedStIds[0];
      return t != null ? this.setsByStId.get(t) ?? null : null;
    }
    reapplyFocus() {
      this.applyFocus();
    }
    applyFocus() {
      if (!this.initialized) return;
      let e = this.focusedIId,
        t = this.env.doc.querySelectorAll(Lu);
      for (let r of Array.from(t)) {
        let o = qs(r),
          s = o != null ? this.setsByStId.get(o) : void 0;
        r.classList.toggle(zs, s != null),
          r.classList.toggle(Hs, s != null && s === e);
      }
    }
    interactionForTarget(e) {
      if (!(e instanceof Element)) return null;
      let t = qs(e);
      return t == null ? null : this.setsByStId.get(t) ?? null;
    }
    onMouseOver;
    onMouseOut;
    onClick;
    onRefresh;
  };
});
var kn = O((xn) => {
  "use strict";
  Object.defineProperty(xn, "__esModule", { value: !0 });
  function Fu(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Fu(xn, {
    createSharedOutOfViewReset: function () {
      return Vu;
    },
    setupOutOfViewReset: function () {
      return Du;
    },
  });
  function Du(n, e, t, r, o) {
    let s = n.outOfViewReset;
    if (!s || s === "none") return;
    let i = t.IntersectionObserver;
    if (!i) return;
    let a = n.horizontal || !1,
      c = null,
      l = new i((u) => {
        for (let f of u) {
          let d = f.boundingClientRect,
            p = a ? d.left : d.top,
            h = c;
          (c = p),
            !f.isIntersecting &&
              (Ks(d, a, t) ||
                (r.totalProgress() === 0 && r.paused()) ||
                (Xs(s, p, h) && r.pause(0)));
        }
      });
    l.observe(e), o(() => l.disconnect());
  }
  function Ks(n, e, t) {
    return e
      ? n.right > 0 && n.left < t.innerWidth
      : n.bottom > 0 && n.top < t.innerHeight;
  }
  function Xs(n, e, t) {
    if (n === "both") return !0;
    if (t === null) return !1;
    let r = e > t,
      o = e < t;
    return (n === "scrollingDown" && o) || (n === "scrollingUp" && r);
  }
  function Vu(n, e, t) {
    let r = n.outOfViewReset;
    if (!r || r === "none") return null;
    let o = e.IntersectionObserver;
    if (!o) return null;
    let s = n.horizontal || !1,
      i = new Map(),
      a = new o((c) => {
        for (let l of c) {
          let u = l.target,
            f = i.get(u);
          if (!f) continue;
          let d = l.boundingClientRect,
            p = s ? d.left : d.top,
            h = f.lastPos;
          if (((f.lastPos = p), l.isIntersecting)) {
            f.crossAxisClipped = !1;
            continue;
          }
          let g = Ks(d, s, e);
          if (((f.crossAxisClipped = g), g)) {
            !f.timeline.paused() &&
              Ys(u, f.timeline) &&
              (f.timeline.reversed() === !0
                ? f.timeline.progress() > 0 && f.timeline.progress(0)
                : f.timeline.progress() < 1 && f.timeline.progress(1));
            continue;
          }
          Xs(r, p, h) &&
            (t(u),
            !(f.timeline.totalProgress() === 0 && f.timeline.paused()) &&
              f.timeline.pause(0));
        }
      });
    return {
      observe: (c, l) => {
        i.set(c, { timeline: l, lastPos: null, crossAxisClipped: !1 }),
          a.observe(c);
      },
      unobserve: (c) => {
        a.unobserve(c), i.delete(c), i.size === 0 && a.disconnect();
      },
      isCrossAxisClipped: (c) => {
        let l = i.get(c);
        return l?.crossAxisClipped === !0 && Ys(c, l.timeline);
      },
    };
  }
  function Ys(n, e) {
    for (let t of e.getChildren(!0, !0, !1))
      for (let r of t.targets()) {
        let o = r;
        if (o?.nodeType !== 1 || !n.contains(o)) return !1;
      }
    return !0;
  }
});
var Qs = O((Ln) => {
  "use strict";
  Object.defineProperty(Ln, "__esModule", { value: !0 });
  Object.defineProperty(Ln, "wireScrollDirection", {
    enumerable: !0,
    get: function () {
      return Bu;
    },
  });
  function Bu(n, e, t, r, o, s = !1) {
    r && (r.pause(), r.revert({ kill: !1 }), r.clear());
    let i = (d, p) => {
        p.pause(), p.clear(), !d.isActive() && (o?.(d), d.play(0));
      },
      a = {
        down: () => {
          if (r) return i(t, r);
          s && t.progress() === 0 && t.invalidate(), t.play();
        },
        up: () => (r ? i(r, t) : t.reverse()),
      },
      c = null,
      l = (d) => {
        d !== c && ((c = d), a[d]());
      },
      u = () => l("down"),
      f = () => l("up");
    if (((n.onEnter = u), e.directionEdgesOnly)) {
      n.onEnterBack = f;
      return;
    }
    (n.onLeave = u),
      (n.onEnterBack = f),
      (n.onLeaveBack = f),
      (n.onUpdate = (d) => l(d.direction > 0 ? "down" : "up"));
  }
});
var Fn = O((Nn) => {
  "use strict";
  Object.defineProperty(Nn, "__esModule", { value: !0 });
  function ju(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  ju(Nn, {
    createToggleActionHandlers: function () {
      return Gu;
    },
    makeScrollActionHandler: function () {
      return qe;
    },
  });
  function qe(n, e) {
    let { timeline: t, hasVolatileValues: r } = e;
    return () => {
      if (n !== void 0)
        switch (n) {
          case "play":
            r && t.progress() === 0 && t.invalidate(), t.play();
            break;
          case "pause":
            t.pause();
            break;
          case "resume":
            r && t.progress() === 0 && t.invalidate(), t.resume();
            break;
          case "reverse":
            t.reverse();
            break;
          case "restart":
            r && t.invalidate(), t.restart();
            break;
          case "reset":
            t.pause(0);
            break;
          case "complete":
            r && t.progress() === 0 && t.invalidate(), t.progress(1);
            break;
          case "none":
            break;
          default: {
            let o = n;
            break;
          }
        }
    };
  }
  function Gu(n, e) {
    let [t, r, o, s] = n,
      i = {};
    return (
      t !== "none" && (i.onEnter = qe(t, e)),
      r !== "none" && (i.onLeave = qe(r, e)),
      o !== "none" && (i.onEnterBack = qe(o, e)),
      s !== "none" && (i.onLeaveBack = qe(s, e)),
      i
    );
  }
});
var Js = O((Vn) => {
  "use strict";
  Object.defineProperty(Vn, "__esModule", { value: !0 });
  function Uu(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Uu(Vn, {
    buildGSAPConfig: function () {
      return Ku;
    },
    composeScrollPosition: function () {
      return Dn;
    },
    hasBatchStagger: function () {
      return zu;
    },
  });
  var He = ne(),
    $u = kn(),
    qu = Qs(),
    Hu = Fn();
  function zu(n) {
    return n
      ? ((0, He.toSeconds)(n.amount) ?? 0) > 0 ||
          ((0, He.toSeconds)(n.each) ?? 0) > 0
      : !1;
  }
  function Wu(n) {
    let e = parseFloat(n.getComputedStyle(n.document.documentElement).fontSize);
    return {
      vh: n.innerHeight / 100,
      vw: n.innerWidth / 100,
      rem: e || He.DEFAULT_ROOT_FONT_SIZE_PX,
    };
  }
  function Dn(n, e, t) {
    let r = (o) => (e ? `clamp(${o})` : o);
    return (0, He.hasResolvableScrollUnit)(n)
      ? () => r((0, He.resolveScrollUnits)(n, Wu(t)))
      : r(n);
  }
  function Zs(n, e, t) {
    return t ? `clamp(${n})` : n || e;
  }
  function Yu(n, e, t, r) {
    let o = {},
      s = (i) =>
        i && (i === document.body || (!r && i.parentElement === document.body));
    if (n.pin !== void 0) {
      if (typeof n.pin == "boolean") n.pin && !s(e) && (o.pin = n.pin);
      else {
        let i = t(n.pin, { triggerElement: e });
        i.length > 0 && !s(i[0]) && (o.pin = i[0]);
      }
      r &&
        o.pin !== void 0 &&
        ((o.anticipatePin = 0),
        (o.pinReparent = !1),
        (o.pinSpacing = n.pinSpacing !== !1));
    }
    if (n.endTrigger) {
      let i = t(n.endTrigger, { triggerElement: e });
      i.length > 0 && (o.endTrigger = i[0]);
    }
    if (n.scroller) {
      let i = t(n.scroller, { triggerElement: e });
      i.length > 0 ? (o.scroller = i[0]) : (o.scroller = window);
    }
    return o;
  }
  function Ku(n, e, t, r, o, s = !1, i, a, c, l) {
    let u = n.split === !0,
      f = Yu(n, e, o, u),
      d = [
        n.enter || "none",
        n.leave || "none",
        n.enterBack || "none",
        n.leaveBack || "none",
      ],
      p = {
        trigger: e,
        markers: n.showMarkers ?? !1,
        start: u
          ? Dn(n.start || "top bottom", n.clamp, i)
          : Zs(n.start, "top bottom", n.clamp),
        end: u
          ? Dn(n.end || "bottom top", n.clamp, i)
          : Zs(n.end, "bottom top", n.clamp),
        scrub: n.scrub ?? !1,
        horizontal: n.horizontal || !1,
        toggleActions: d.join(" "),
        id: t,
        ...f,
      };
    if (p.scrub !== !1) p.animation = r;
    else {
      if (u && n.scrollDirection)
        return (0, qu.wireScrollDirection)(p, n, r, c, l, s), p;
      let h = { timeline: r, hasVolatileValues: s },
        g = (0, Hu.createToggleActionHandlers)(d, h);
      Object.assign(p, g), u && (0, $u.setupOutOfViewReset)(n, e, i, r, a);
    }
    return p;
  }
});
var ti = O((Gn) => {
  "use strict";
  Object.defineProperty(Gn, "__esModule", { value: !0 });
  Object.defineProperty(Gn, "ScrollController", {
    enumerable: !0,
    get: function () {
      return jn;
    },
  });
  var Xu = ne(),
    Qu = Ws(),
    Zu = On(),
    Ju = Mn(),
    mt = Js(),
    ef = kn(),
    tf = Fn(),
    jn = class {
      env;
      host;
      scrollTriggers;
      scrollTriggerDisposers;
      markerFocus;
      constructor(e, t) {
        (this.env = e),
          (this.host = t),
          (this.scrollTriggers = new Map()),
          (this.scrollTriggerDisposers = new Map()),
          (this.markerFocus = new Qu.ScrollMarkerFocusManager(e));
      }
      setupScrollControl(e, t, r, o, s) {
        if (typeof this.env.win.ScrollTrigger > "u") {
          console.warn("ScrollTrigger plugin is not available.");
          return;
        }
        let i = ei(e, t, o);
        this.cleanupScrollTrigger(i);
        let a = this.host.getTimeline(e, o);
        if (!a) {
          console.warn(`Timeline ${e} not found`);
          return;
        }
        let c = s ? this.host.getTimeline(s, o) ?? void 0 : void 0,
          l = (0, mt.buildGSAPConfig)(
            r,
            o,
            i,
            a,
            this.host.resolveFn,
            this.host.getSubOrNull(e, o)?.hasVolatileValues ?? !1,
            this.env.win,
            (f) => this.addDisposer(i, f),
            c,
            c && ((f) => this.host.rebuildGroup(f === c ? s : e, o))
          ),
          u =
            l.animation === void 0 &&
            r.split === !0 &&
            r.scrollDirection !== void 0;
        u && s && c && this.host.drainGroup(s, o);
        try {
          let f = this.env.win.ScrollTrigger.create(l);
          this.scrollTriggers.set(i, f),
            r.showMarkers && this.markerFocus.register(i, t);
          let d = this.host.getSub(e, o);
          Bn(d, i);
          let p = s ? this.host.getSubOrNull(s, o) : void 0;
          p &&
            (Bn(p, i),
            p.scrollTriggerConfigs || (p.scrollTriggerConfigs = new Map())),
            d.scrollTriggerConfigs || (d.scrollTriggerConfigs = new Map()),
            u || d.scrollTriggerConfigs.set(i, l);
        } catch (f) {
          console.error("Failed to create ScrollTrigger:", f),
            this.cleanupScrollTrigger(i);
        }
      }
      setupScrollDirectionPair(e, t, r, o, s) {
        let a = this.host.timelineDefs.get(this.host.resolveAlias(t))?.actions
          ?.length
          ? t
          : void 0;
        for (let c of s) this.setupScrollControl(e, r, o, c, a);
      }
      setupScrollControls(e, t, r, o) {
        if (
          (this.maybePromoteReanchoredTimeline(e, r, o),
          this.shouldBatchScrollReveal(e, r, o))
        )
          this.setupScrollBatch(e, t, r, o);
        else for (let s of o) this.setupScrollControl(e, t, r, s);
      }
      shouldBatchScrollReveal(e, t, r) {
        return (
          this.passesScrollBatchGuards(t, r) &&
          this.host.isDynamic(this.host.resolveAlias(e))
        );
      }
      passesScrollBatchGuards(e, t) {
        return !(
          (e.scrub ?? !1) !== !1 ||
          !(0, mt.hasBatchStagger)(e.stagger) ||
          t.length <= 1 ||
          typeof this.env.win.ScrollTrigger?.batch != "function" ||
          e.pin ||
          e.endTrigger ||
          e.scroller ||
          e.scrollDirection
        );
      }
      maybePromoteReanchoredTimeline(e, t, r) {
        let o = this.host.resolveAlias(e);
        this.host.isReanchored(o) ||
          this.host.isDynamic(o) ||
          (this.passesScrollBatchGuards(t, r) &&
            (this.host.getInteractionForTimeline(o)?.triggers?.length !== 1 ||
              this.host.hasAlias(o) ||
              this.host.hasForeignOwner(o) ||
              (this.isReanchorEligible(o, r) &&
                this.host.promoteToPerElement(o))));
      }
      isReanchorEligible(e, t) {
        let r = this.host.timelineDefs.get(e);
        if (!r?.actions?.length) return !1;
        let o = this.host.getInteractionForTimeline(e),
          s = new Map(),
          i = new Set(t),
          a = !1;
        for (let c of r.actions) {
          if (!c.targets?.length || (0, Zu.getSplitTextType)(c) === "lines")
            return !1;
          for (let l of c.targets) {
            a = !0;
            let u = l.length === 3 ? l[2] : void 0;
            if (
              !u ||
              u.relationship === "none" ||
              !u.filterBy ||
              u.firstMatchOnly
            )
              return !1;
            let f = this.host.resolveFn(u.filterBy, {}, o);
            if (!f.length) return !1;
            let d = new Set(f);
            if (d.size !== i.size || !t.every((p) => d.has(p))) return !1;
            for (let p of t) {
              let h = this.host.resolveFn(
                l,
                { triggerElement: p, anchorFilterToTrigger: !0 },
                o
              );
              for (let g of h) {
                let y = s.get(g);
                if (y && y !== p) return !1;
                s.set(g, p);
              }
            }
          }
        }
        return a;
      }
      setupScrollBatch(e, t, r, o) {
        let s = this.env.win,
          i = s.ScrollTrigger,
          a = s.gsap;
        if (typeof i?.batch != "function" || !a) {
          for (let v of o) this.setupScrollControl(e, t, r, v);
          return;
        }
        i.register?.(a);
        let c = (0, Ju.getStaggerConfig)(
            r.stagger,
            (0, Xu.buildEaseContextId)(`${e}-${t}-batch`, "stagger")
          ),
          [l, u, f, d] = [
            r.enter || "none",
            r.leave || "none",
            r.enterBack || "none",
            r.leaveBack || "none",
          ],
          p = new Map(),
          h = new Map(),
          g = (v) => {
            h.get(v)?.kill(), h.delete(v);
          },
          y = new Set(),
          S = (0, ef.createSharedOutOfViewReset)(r, s, g);
        for (let v of o) {
          let E = ei(e, t, v);
          this.cleanupScrollTrigger(E), p.set(v, E);
          let _ = this.host.getTimeline(e, v);
          this.addDisposer(E, () => {
            y.add(v), g(v);
          }),
            _ &&
              S &&
              (S.observe(v, _), this.addDisposer(E, () => S.unobserve(v)));
        }
        let b = (v, E) => {
            if (E === "none") return;
            let _ = this.host.getTimeline(e, v);
            if (!_) return;
            let A = this.host.getSubOrNull(e, v)?.hasVolatileValues ?? !1;
            (0, tf.makeScrollActionHandler)(E, {
              timeline: _,
              hasVolatileValues: A,
            })();
          },
          m = (v) => {
            let E = this.host.getTimeline(e, v);
            !E ||
              E.progress() >= 1 ||
              (E.reversed() && E.reversed(!1), b(v, "complete"));
          },
          w = (v, E, _ = !1) => {
            let A = v.filter((R) => !y.has(R));
            if (A.length === 0) return;
            let I = [],
              M = 1 / 0,
              P = c ? a.utils.distribute(c) : void 0;
            A.forEach((R, k) => {
              if ((g(R), E === "none")) return;
              if (_ && E === "play" && S?.isCrossAxisClipped(R)) {
                m(R);
                return;
              }
              let F = P ? P(k, R, A) : 0;
              F < M && (M = F), I.push({ el: R, offset: F });
            });
            for (let { el: R, offset: k } of I) {
              let F = k - M;
              if (F > 0) {
                let H = a.delayedCall(F, () => {
                  if ((h.delete(R), E === "play" && S?.isCrossAxisClipped(R))) {
                    m(R);
                    return;
                  }
                  b(R, E);
                });
                h.set(R, H);
              } else b(R, E);
            }
          },
          T = {
            start: (0, mt.composeScrollPosition)(
              r.start || "top bottom",
              r.clamp,
              this.env.win
            ),
            end: (0, mt.composeScrollPosition)(
              r.end || "bottom top",
              r.clamp,
              this.env.win
            ),
            horizontal: r.horizontal || !1,
            onEnter: (v) => w(v, l, !0),
          };
        f !== "none" && (T.onEnterBack = (v) => w(v, f, !0)),
          u !== "none" && (T.onLeave = (v) => w(v, u)),
          d !== "none" && (T.onLeaveBack = (v) => w(v, d));
        try {
          let v = i.batch(o, T);
          for (let A of v) {
            let I = A.trigger;
            if (!I) continue;
            let M = p.get(I);
            if (!M) continue;
            this.scrollTriggers.set(M, A);
            let P = this.host.getSub(e, I);
            P && Bn(P, M);
          }
          let E = o[0],
            _ = E ? p.get(E) : void 0;
          if (r.showMarkers && E && _) {
            let A = `${_}_markers`,
              I = {
                trigger: E,
                start: T.start,
                end: T.end,
                horizontal: T.horizontal,
                markers: !0,
                id: A,
              },
              M = i.create(I);
            this.scrollTriggers.set(A, M),
              this.markerFocus.register(A, t),
              this.addDisposer(_, () => {
                M.kill(),
                  this.scrollTriggers.delete(A),
                  this.markerFocus.unregister(A);
              });
          }
        } catch (v) {
          console.error("Failed to create ScrollTrigger batch:", v);
          for (let E of p.values()) this.cleanupScrollTrigger(E);
        }
      }
      rebindScrollTriggers(e) {
        if (!(!e.scrollTriggerIds || !e.scrollTriggerConfigs))
          for (let t of e.scrollTriggerIds) {
            let r = this.scrollTriggers.get(t),
              o = e.scrollTriggerConfigs.get(t);
            if (r && o) {
              let s = { ...o, animation: e.timeline };
              if ((r.kill(), this.env.win.ScrollTrigger)) {
                let i = this.env.win.ScrollTrigger.create(s);
                this.scrollTriggers.set(t, i), this.markerFocus.reapplyFocus();
              }
            }
          }
      }
      cleanupSubScrollTriggers(e) {
        if (e.scrollTriggerIds) {
          for (let t of e.scrollTriggerIds) this.cleanupScrollTrigger(t);
          e.scrollTriggerIds.clear();
        }
        e.scrollTriggerConfigs?.clear();
      }
      cleanupScrollTrigger(e) {
        this.markerFocus.unregister(e);
        let t = this.scrollTriggers.get(e);
        t && (t.kill(), this.scrollTriggers.delete(e));
        let r = this.scrollTriggerDisposers.get(e);
        if (r) {
          for (let o of r) o();
          this.scrollTriggerDisposers.delete(e);
        }
      }
      addDisposer(e, t) {
        let r = this.scrollTriggerDisposers.get(e);
        r || ((r = new Set()), this.scrollTriggerDisposers.set(e, r)), r.add(t);
      }
      getScrollTriggers() {
        return this.scrollTriggers;
      }
      releaseScrollTrigger(e) {
        this.cleanupScrollTrigger(e);
      }
      destroyMarkerFocus() {
        this.markerFocus.destroy();
      }
    };
  function ei(n, e, t) {
    return `st_${n}_${e}_${t.id || window.crypto.randomUUID().slice(0, 8)}`;
  }
  function Bn(n, e) {
    n.scrollTriggerIds || (n.scrollTriggerIds = new Set()),
      n.scrollTriggerIds.add(e);
  }
});
var oi = O((qn) => {
  "use strict";
  Object.defineProperty(qn, "__esModule", { value: !0 });
  Object.defineProperty(qn, "AnimationCoordinator", {
    enumerable: !0,
    get: function () {
      return $n;
    },
  });
  var yt = Y(),
    Me = ne(),
    nf = _s(),
    rf = Rs(),
    Un = Fs(),
    ni = On(),
    ze = Mn(),
    of = ti(),
    $n = class {
      timelineDefs;
      getHandler;
      getTargetResolver;
      resolveFn;
      getInteractionForTimeline;
      getInteractionsForTimelines;
      env;
      subs;
      dynamicFlags;
      reanchoredTimelines;
      causeTriggers;
      cleanupFns;
      scroll;
      aliases;
      flipEaseBySource;
      pluginRuntimeBridge;
      animation;
      sharedGroups;
      rewindSharedRefire;
      timelineGroupsEnabled;
      resolveAlias(e, t = 0) {
        if (t > Un.MAX_ALIAS_DEPTH)
          return (
            console.warn(
              `IX3: Timeline alias chain exceeded max depth for "${e}". Possible circular reference.`
            ),
            e
          );
        let r = this.aliases.get(e);
        return r ? this.resolveAlias(r, t + 1) : e;
      }
      reuseAliasIndex;
      invalidateReuseAliasIndex() {
        this.reuseAliasIndex = null;
      }
      buildReuseAliasIndex() {
        let e = new Map();
        for (let [t] of this.timelineDefs) {
          let r = this.resolveSourceTimelineId(t);
          if (r === t) continue;
          let o = e.get(r);
          o ? o.push(t) : e.set(r, [t]);
        }
        return e;
      }
      getReuseAliasesForSource(e) {
        return (
          this.reuseAliasIndex ||
            (this.reuseAliasIndex = this.buildReuseAliasIndex()),
          this.reuseAliasIndex.get(e) ?? []
        );
      }
      hasAlias(e) {
        if (this.getReuseAliasesForSource(e).length > 0) return !0;
        for (let t of this.aliases.values()) if (t === e) return !0;
        return !1;
      }
      shouldFlipEaseForTimeline(e) {
        return (0, Un.shouldFlipEaseForTimeline)(
          this.timelineDefs,
          this.getInteractionForTimeline,
          e,
          {
            getInteractionsForTimelines: this.getInteractionsForTimelines,
            getReuseAliasesForSource: (t) => this.getReuseAliasesForSource(t),
            timelineGroupsEnabled: this.timelineGroupsEnabled,
          }
        );
      }
      recomputeFlipEaseForSource(e) {
        let t = this.resolveSourceTimelineId(e),
          r = this.subs.get(t);
        if (!r) return;
        let o = this.shouldFlipEaseForTimeline(t);
        if (o !== this.flipEaseBySource.get(t)) {
          this.flipEaseBySource.set(t, o);
          for (let s of r.values()) this.scheduleRebuild(s);
        }
      }
      resolveSourceTimelineId(e) {
        return (0, Un.resolveSourceTimelineId)(this.timelineDefs, e);
      }
      splitText;
      timelineTargetsCache;
      constructor(e, t, r, o, s, i, a) {
        (this.timelineDefs = e),
          (this.getHandler = t),
          (this.getTargetResolver = r),
          (this.resolveFn = o),
          (this.getInteractionForTimeline = s),
          (this.getInteractionsForTimelines = i),
          (this.env = a),
          (this.subs = new Map()),
          (this.dynamicFlags = new Map()),
          (this.reanchoredTimelines = new Set()),
          (this.causeTriggers = new Map()),
          (this.cleanupFns = new Map()),
          (this.aliases = new Map()),
          (this.flipEaseBySource = new Map()),
          (this.pluginRuntimeBridge = new nf.PluginRuntimeBridge()),
          (this.sharedGroups = new Map()),
          (this.rewindSharedRefire = !1),
          (this.timelineGroupsEnabled = !1),
          (this.reuseAliasIndex = null),
          (this.splitText = new ni.SplitTextManager(
            (c, l, u, f) => this.collectTargets(c, l, u, f),
            (c, l) => {
              c.rebuildState !== "init"
                ? this.scheduleRebuildForElement(l)
                : (c.rebuildState = "idle");
            },
            (c) => this.scheduleRebuildForElement(c),
            (c) => {
              c.rebuildState = "idle";
            }
          )),
          (this.timelineTargetsCache = new WeakMap()),
          (this.animation = new rf.RuntimeMotionDriver(a)),
          (this.scroll = new of.ScrollController(a, {
            timelineDefs: e,
            resolveFn: o,
            getInteractionForTimeline: s,
            resolveAlias: (c) => this.resolveAlias(c),
            getTimeline: (c, l) => this.getTimeline(c, l),
            getSub: (c, l) => this.getSub(c, l),
            getSubOrNull: (c, l) => this.getSubOrNull(c, l),
            isDynamic: (c) => !!this.dynamicFlags.get(c),
            isReanchored: (c) => this.reanchoredTimelines.has(c),
            hasAlias: (c) => this.hasAlias(c),
            hasForeignOwner: (c) =>
              this.getInteractionsForTimelines(new Set([c])).length > 1,
            promoteToPerElement: (c) => this.promoteToPerElement(c),
            rebuildGroup: (c, l) => this.rebuildScrollDirectionGroup(c, l),
            drainGroup: (c, l) => re(this.getSubOrNull(c, l)?.cleanupFns),
          }));
      }
      registerSharedGroup(e, t) {
        if (t.length < 2) return;
        let r = new Set();
        for (let s of t) {
          let i = this.sharedGroups.get(s);
          i && r.add(i);
        }
        if (r.size > 0) {
          for (let s of r) this.dissolveSharedGroup(s);
          return;
        }
        let o = { primary: e };
        for (let s of t)
          this.sharedGroups.set(s, o), s !== e && this.aliases.set(s, e);
      }
      dissolveSharedGroupForTimeline(e) {
        let t = this.sharedGroups.get(e);
        return t ? this.dissolveSharedGroup(t) : [];
      }
      dissolveSharedGroup(e) {
        let t = [];
        for (let [c, l] of this.sharedGroups) l === e && t.push(c);
        let r = t.indexOf(e.primary);
        r >= 0 && t.push(...t.splice(r, 1));
        let o = [],
          s = this.subs.get(e.primary);
        if (s)
          for (let [c, l] of s) {
            let u = l.timeline.totalProgress(),
              f = l.timeline.paused() === !0,
              d = u <= 0 && f,
              p = l.timeline.timeScale();
            o.push({
              id: l.timelineId,
              el: c,
              progress: u,
              reversed: l.timeline.reversed() === !0,
              paused: f,
              timeScale: typeof p == "number" && p !== 0 ? Math.abs(p) : 1,
              controlTypes: l.controlTypes,
              owningInteraction: l.owningInteraction,
              dormant: d,
            });
          }
        for (let c of t)
          this.sharedGroups.delete(c),
            this.aliases.get(c) === e.primary && this.aliases.delete(c);
        let i = [];
        for (let c of t) {
          let l = this.getInteractionForTimeline(c);
          l &&
            (this.createTimeline(c, l, { revertGlobalSplits: !1 }), i.push(c));
        }
        for (let { el: c, controlTypes: l, owningInteraction: u } of o)
          if (c != null)
            for (let f of t) {
              if (this.dynamicFlags.get(f) !== !0) continue;
              let d = this.ensureSubs(f);
              if (d.has(c)) continue;
              let p = this.buildSubTimeline(f, c, l, u);
              p && d.set(c, p);
            }
        let a = new Set(i);
        for (let {
          id: c,
          el: l,
          progress: u,
          reversed: f,
          paused: d,
          timeScale: p,
          dormant: h,
        } of o) {
          if (h) continue;
          let g = this.getSubOrNull(c, l)?.timeline;
          g &&
            (g.timeScale(p),
            g.reversed(f),
            g.totalProgress(u),
            a.add(c),
            !d && (f ? g.reverse() : g.play()));
        }
        return [...a];
      }
      createTimeline(e, t, r) {
        let o = this.timelineDefs.get(e);
        if (this.aliases.has(e)) return;
        let s = this.sharedGroups.get(e);
        if (
          (this.destroy(e, {
            reassignSharedPrimary: !1,
            revertGlobalSplits: r?.revertGlobalSplits,
          }),
          !o)
        )
          return;
        if ((s && this.sharedGroups.set(e, s), o.reuse?.sourceTimelineId)) {
          this.aliases.set(e, o.reuse.sourceTimelineId),
            this.recomputeFlipEaseForSource(o.reuse.sourceTimelineId);
          return;
        }
        let i = this.isDynamicTimeline(o, t);
        this.dynamicFlags.set(e, i), this.reanchoredTimelines.delete(e);
        let a = new Set(),
          c = new Set(),
          l = new Map();
        for (let u of t.triggers) {
          let [, f, d] = u;
          if (d)
            for (let h of this.resolveFn(d, { trigger: u }, t))
              c.add(h), l.has(h) || l.set(h, u);
          let p = f?.controlType;
          p && (0, Me.isValidControlType)(p) && a.add(p),
            p === yt.TimelineControlType.LOAD && !l.has(null) && l.set(null, u);
        }
        if ((this.causeTriggers.set(e, l), !c.size || !i)) {
          let u = this.buildSubTimeline(e, null, a, t);
          u && this.ensureSubs(e).set(null, u);
        }
        if (c.size) {
          let u = this.ensureSubs(e);
          for (let f of c)
            if (!u.has(f)) {
              let d = i
                ? this.buildSubTimeline(e, f, a, t)
                : this.getSub(e, null);
              i && d && u.set(f, d);
            }
        }
        this.flipEaseBySource.set(e, this.shouldFlipEaseForTimeline(e));
      }
      getTimeline(e, t) {
        return this.prepareIfShared(e, t), this.getSub(e, t)?.timeline;
      }
      prepareIfShared(e, t, r = !1) {
        let o = this.sharedGroups.get(e);
        if (!o) {
          let f = this.resolveSourceTimelineId(e);
          f !== e && this.sharedGroups.has(f) && this.prepareIfShared(f, t, r);
          return;
        }
        let s = this.timelineDefs.get(e);
        if (!s) return;
        let i = this.getSub(o.primary, t);
        if (!i) return;
        if (i.timelineId === e) {
          r && this.rewindExhausted(i);
          return;
        }
        let a = i.timelineId;
        re(i.cleanupFns);
        for (let f of [...(i.swapCleanupFns ?? [])].reverse()) f();
        i.swapCleanupFns?.clear(), re(this.cleanupFns.get(a));
        let c = i.timeline;
        c.clear(), c.progress(0);
        let l = (0, ze.convertToGsapDefaults)(s.settings || {}, e);
        c.repeat(typeof l.repeat == "number" ? l.repeat : 0),
          c.repeatDelay(typeof l.repeatDelay == "number" ? l.repeatDelay : 0),
          c.yoyo(l.yoyo === !0);
        let u = typeof l.delay == "number" ? l.delay : 0;
        if (
          (c.delay(u),
          c.reversed(!!s.playInReverse),
          c.timeScale(
            typeof s.settings?.speed == "number" ? s.settings.speed : 1
          ),
          u > 0 && this.rewindSharedRefire && c.totalTime(-u),
          (i.timelineDef = { ...s, actions: s.actions || [] }),
          (i.timelineId = e),
          this.timelineTargetsCache.delete(i),
          this.env.win.SplitText && s.actions?.length)
        ) {
          let f = i.rebuildState;
          (i.rebuildState = "building"),
            this.splitText.splitForActions(
              s.actions,
              t,
              e,
              i,
              this.env.win.SplitText,
              i.owningInteraction
            );
          let d = i.rebuildState;
          i.rebuildState = d === "rebuild_pending" || d === "idle" ? "idle" : f;
        }
        (i.hasVolatileValues = !1), this.buildTimeline(i);
      }
      rewindExhausted(e) {
        if (!(e.timeline.totalProgress() >= 1)) return;
        e.hasVolatileValues && e.timeline.invalidate(),
          e.timeline.totalProgress(0);
        let r = e.timeline.delay();
        r > 0 && e.timeline.totalTime(-r);
      }
      getAllTimelines(e) {
        let t = this.resolveAlias(e),
          r = this.subs.get(t);
        if (!r) return [];
        for (let o of r.keys()) this.prepareIfShared(e, o);
        return Array.from(r.values()).map((o) => o.timeline);
      }
      invalidateVolatileFromStart(e, t) {
        let r = t != null ? t === 0 : e.timeline.progress() === 0;
        e.hasVolatileValues && r && e.timeline.invalidate();
      }
      setTimelineGroups(e) {
        this.timelineGroupsEnabled = e;
      }
      setRewindSharedRefire(e) {
        this.rewindSharedRefire = e;
      }
      play(e, t, r) {
        this.prepareIfShared(e, t, r == null && this.rewindSharedRefire);
        let o = this.getSub(e, t);
        o &&
          (this.refreshLineSplits(o),
          this.invalidateVolatileFromStart(o, r),
          o.timeline.play(r ?? void 0));
      }
      pause(e, t, r) {
        this.prepareIfShared(e, t);
        let o = this.getSubOrNull(e, t);
        o && (r !== void 0 ? o.timeline.pause(r) : o.timeline.pause());
      }
      resume(e, t, r) {
        this.prepareIfShared(e, t);
        let o = this.getSubOrNull(e, t);
        o &&
          (this.refreshLineSplits(o),
          this.invalidateVolatileFromStart(o, r),
          o.timeline.resume(r));
      }
      reverse(e, t, r) {
        this.prepareIfShared(e, t);
        let o = this.getSub(e, t);
        o && (this.refreshLineSplits(o), o.timeline.reverse(r));
      }
      restart(e, t) {
        this.prepareIfShared(e, t);
        let r = this.getSub(e, t);
        r &&
          (this.refreshLineSplits(r),
          r.hasVolatileValues && r.timeline.invalidate(),
          r.timeline.restart());
      }
      getTriggerMetadata(e) {
        return this.timelineDefs.get(e)?.triggerMetadata ?? null;
      }
      hasActions(e) {
        return (this.getTimelineDef(e)?.actions?.length ?? 0) > 0;
      }
      fireInterval(e, t, r = {}) {
        this.pluginRuntimeBridge.fireInterval({
          coordinator: this,
          timelineId: e,
          element: t,
          options: r,
          animation: this.animation,
        });
      }
      registerIntervalHandler(e, t) {
        this.pluginRuntimeBridge.registerIntervalHandler(e, t);
      }
      getOneShotTimelineContext(e) {
        let t = this.getTimelineDef(e);
        return t
          ? {
              timelineId: e,
              timelineDef: t,
              getFirstActionTargets: (r) => this.getFirstActionTargets(e, r),
              getActionTweenConfig: (r, o, s) =>
                this.getActionTweenConfig(r, o, s),
              buildActionTimeline: (r) => this.buildOneShotActionTimeline(e, r),
              registerCleanup: (r) => this.registerCleanup(e, r),
            }
          : null;
      }
      getTimelineDef(e) {
        return this.timelineDefs.get(this.resolveAlias(e));
      }
      getFirstActionTargets(e, t) {
        let o = this.getTimelineDef(e)?.actions?.[0];
        return o ? this.collectTargets(o, t, e) : [];
      }
      getActionTweenConfig(e, t, r) {
        let o = this.getHandler(t);
        if (!o?.createTweenConfig) return null;
        let s = e.properties[t] || {};
        return o.createTweenConfig(s, r);
      }
      registerCleanup(e, t, r) {
        let o = r === void 0 ? void 0 : this.getSubOrNull(e, r);
        if (o) {
          let i = o.swapCleanupFns ?? new Set();
          return (
            (o.swapCleanupFns = i),
            i.add(t),
            () => {
              i.delete(t);
            }
          );
        }
        let s = this.cleanupFns.get(e) ?? new Set();
        return (
          this.cleanupFns.set(e, s),
          s.add(t),
          () => {
            s.delete(t);
          }
        );
      }
      publishChannel(e, t, r) {
        this.pluginRuntimeBridge.publish(e, t, r);
      }
      subscribeChannel(e, t, r, o) {
        return this.pluginRuntimeBridge.subscribe(e, t, r, o);
      }
      buildOneShotActionTimeline(e, t) {
        let r = this.getTimelineDef(e);
        if (!r?.actions?.length) return null;
        let o = this.animation.timeline();
        if (!o) return null;
        t.beforeTweens?.(o);
        for (let s of r.actions)
          this.buildTweensForAction(
            s,
            t.targets,
            o,
            e,
            !1,
            t.varsTransform,
            void 0,
            void 0,
            void 0,
            t.cleanupBucket
          );
        return o;
      }
      togglePlayReverse(e, t) {
        this.prepareIfShared(e, t);
        let r = this.getSub(e, t);
        if (!r) return;
        this.refreshLineSplits(r);
        let o = r.timeline,
          s = o.progress();
        this.invalidateVolatileFromStart(r),
          s === 0
            ? o.play()
            : s === 1
            ? o.reverse()
            : o.reversed()
            ? o.play()
            : o.reverse();
      }
      seek(e, t, r) {
        this.getSubOrNull(e, r)?.timeline.seek(t);
      }
      setTimeScale(e, t, r) {
        this.prepareIfShared(e, r),
          (this.timelineGroupsEnabled
            ? this.getSub(e, r)
            : this.getSubOrNull(e, r)
          )?.timeline.timeScale(t);
      }
      setTotalProgress(e, t, r) {
        let o = this.getSubOrNull(e, r);
        o && (this.refreshLineSplits(o), o.timeline.totalProgress(t));
      }
      setContinuousProgress(e, t, r) {
        this.getSub(e, r)?.timeline.progress(Math.max(0, Math.min(1, t)));
      }
      isPlaying(e, t) {
        return !!this.getSubOrNull(e, t)?.timeline.isActive();
      }
      isPaused(e, t) {
        return !!this.getSubOrNull(e, t)?.timeline.paused();
      }
      destroy(e, t) {
        this.aliases.delete(e);
        let r = this.sharedGroups.get(e);
        if ((t?.reassignSharedPrimary ?? !0) && r && r.primary === e) {
          let a;
          for (let [c, l] of this.sharedGroups)
            if (l === r && c !== e) {
              a = c;
              break;
            }
          if (a) {
            (r.primary = a), this.aliases.delete(a);
            for (let [u, f] of this.sharedGroups)
              f === r && u !== e && u !== a && this.aliases.set(u, a);
            let c = this.timelineDefs.get(a),
              l = this.getInteractionForTimeline(a);
            this.dynamicFlags.set(
              a,
              !!(c && l && this.isDynamicTimeline(c, l))
            );
          }
        }
        let o = r && r.primary !== e ? r.primary : void 0;
        if (o) {
          let a = this.subs.get(o);
          if (a) {
            for (let c of a.values())
              if (c.timelineId === e) {
                for (let l of c.cleanupFns ?? []) l();
                c.cleanupFns?.clear();
                for (let l of [...(c.swapCleanupFns ?? [])].reverse()) l();
                c.swapCleanupFns?.clear(),
                  c.timeline.revert({ kill: !1 }),
                  c.timeline.clear(),
                  (c.rebuildState = c.timeline.data?.splitLines
                    ? "idle"
                    : "init"),
                  this.timelineTargetsCache.delete(c);
              }
          }
        }
        this.pluginRuntimeBridge.destroyTimeline(e);
        let s = this.subs.get(e),
          i = new Set();
        if (s) {
          for (let [, a] of s)
            a.timelineId !== e && i.add(a.timelineId), this.disposeSub(a);
          (t?.revertGlobalSplits ?? !0) && this.splitText.revertAll();
        }
        re(this.cleanupFns.get(e));
        for (let a of i) re(this.cleanupFns.get(a)), this.cleanupFns.delete(a);
        if (
          (this.cleanupFns.delete(e),
          this.subs.delete(e),
          this.dynamicFlags.delete(e),
          this.reanchoredTimelines.delete(e),
          this.causeTriggers.delete(e),
          this.flipEaseBySource.delete(e),
          this.sharedGroups.delete(e),
          (t?.reassignSharedPrimary ?? !0) && r)
        ) {
          let a,
            c = 0;
          for (let [l, u] of this.sharedGroups)
            if (u === r && ((a = l), ++c > 1)) break;
          if (c === 1 && a !== void 0) {
            let l = this.subs.get(a);
            if (l)
              for (let [u, f] of l)
                f.timelineId !== a && this.prepareIfShared(a, u);
            this.sharedGroups.delete(a);
          }
        }
      }
      isDynamicTimeline(e, t) {
        let r = t.triggers.some(
          ([, s]) => s?.controlType !== yt.TimelineControlType.LOAD
        );
        if (t.scope?.type === "component" && r) return !0;
        let o = e.actions;
        if (!o?.length) return !1;
        for (let s of o) {
          for (let i of s.targets ?? []) {
            if (this.getTargetResolver(i)?.isDynamic) return !0;
            if (i.length === 3 && i[2]) {
              let c = i[2];
              if (
                c.filterBy &&
                c.relationship !== "none" &&
                this.getTargetResolver(c.filterBy)?.isDynamic
              )
                return !0;
            }
          }
          if (r) {
            for (let i in s.properties)
              if (this.getHandler(i)?.requiresTriggerElementContext) return !0;
          }
        }
        return !1;
      }
      ensureSubs(e) {
        return (
          this.subs.has(e) || this.subs.set(e, new Map()), this.subs.get(e)
        );
      }
      getSub(e, t) {
        let r = this.resolveAlias(e),
          o = this.ensureSubs(r),
          s = this.dynamicFlags.get(r),
          i = o.get(s ? t : null);
        return (
          i || ((i = this.buildSubTimeline(r, t)), i && o.set(s ? t : null, i)),
          i
        );
      }
      getSubOrNull(e, t) {
        let r = this.resolveAlias(e),
          o = this.dynamicFlags.get(r);
        return this.subs.get(r)?.get(o ? t ?? null : null);
      }
      buildSubTimeline(e, t, r, o) {
        let s = this.timelineDefs.get(e),
          i = s?.actions,
          a = s?.settings,
          c = this.env.win.gsap;
        if (!c) return;
        let l = c.timeline({
            ...(0, ze.convertToGsapDefaults)(a || {}, e),
            paused: !0,
            reversed: !!s?.playInReverse,
            data: { id: e, triggerEl: t || void 0 },
          }),
          u = s
            ? { ...s, actions: i || [] }
            : { id: e, pageId: "", deleted: !1, actions: [] },
          f = {
            timeline: l,
            timelineId: e,
            elementContext: t,
            timelineDef: u,
            rebuildState: "init",
            controlTypes: r,
            owningInteraction: o,
          };
        return (
          i?.length &&
            (this.env.win.SplitText &&
              this.splitText.splitForActions(
                i,
                t,
                e,
                f,
                this.env.win.SplitText,
                o
              ),
            this.buildTimeline(f),
            this.padTimelineToCanvas(f)),
          f
        );
      }
      padTimelineToCanvas(e) {
        let { canvasDuration: t } = e.timelineDef;
        if (t == null) return;
        let r = e.timeline;
        r.duration() < t && r.to({}, { duration: 0 }, t);
      }
      buildTimeline(e) {
        let t = e.timelineDef,
          r = e.elementContext,
          o = e.timeline,
          s = e.timelineId,
          i = new Map();
        for (let a = 0; a < t.actions.length; a++) {
          let c = t.actions[a];
          if (!c) continue;
          let l = JSON.stringify(c.targets),
            u = !0,
            f = (0, ni.getSplitTextType)(c),
            d = f === "none" ? l : `${l}_split_${f}`,
            p = (c.tt ?? 0) !== 0;
          for (let m of Object.values(c.properties ?? {})) {
            let w = i.get(d) || new Set();
            i.set(d, w);
            for (let T of Object.keys(m || {}))
              w.has(T) ? p && (u = !1) : w.add(T);
          }
          let h = this.collectTargetGroups(c, r, s, e.owningInteraction),
            g = h.flatMap((m) => m.elements);
          if (!g.length) {
            let m = !1;
            for (let w in c.properties)
              if (this.getHandler(w)?.createCustomTween) {
                m = !0;
                break;
              }
            if (!m) continue;
          }
          let y = this.collectDelegatedTargets(h, g),
            S = y ? y.plain : g,
            b = y ? g : void 0;
          (f !== "none" &&
            S.length > 0 &&
            this.env.win.SplitText &&
            ((S = this.splitText.getSplitElements(S, f)),
            (b = void 0),
            S.length === 0 && !y?.groups.length)) ||
            this.buildTweensForAction(
              c,
              S,
              o,
              s,
              u,
              void 0,
              r,
              t.triggerMetadata?.role,
              e,
              void 0,
              y?.groups,
              b
            );
        }
      }
      collectTargets(e, t, r, o) {
        return this.collectTargetGroups(e, t, r, o).flatMap((s) => s.elements);
      }
      collectTargetGroups(e, t, r, o) {
        let s = [];
        if (!e.targets) return s;
        let i = o ?? this.getInteractionForTimeline(r),
          a = t != null && this.reanchoredTimelines.has(this.resolveAlias(r)),
          c = (
            this.causeTriggers.get(r) ??
            this.causeTriggers.get(this.sharedGroups.get(r)?.primary ?? r)
          )?.get(t);
        for (let l of e.targets ?? []) {
          let u = this.resolveFn(
            l,
            t
              ? { triggerElement: t, anchorFilterToTrigger: a, causeTrigger: c }
              : { causeTrigger: c },
            i
          );
          s.push({ td: l, elements: u });
        }
        return s;
      }
      collectDelegatedTargets(e, t) {
        let r = null,
          o = new Set();
        for (let { td: i, elements: a } of e) {
          let c = this.getTargetResolver(i);
          if (c?.buildTween) {
            r ??= new Map();
            let l = r.get(c);
            l || r.set(c, (l = { resolver: c, targets: [] })),
              l.targets.push(...a);
          } else for (let l of a) o.add(l);
        }
        if (!r) return null;
        let s = new Set();
        for (let i of r.values()) for (let a of i.targets) s.add(a);
        return {
          groups: [...r.values()].filter((i) => i.targets.length > 0),
          plain: t.filter((i) => o.has(i) || !s.has(i)),
        };
      }
      buildTweensForAction(e, t, r, o, s, i, a, c, l, u, f, d) {
        let p = this.shouldFlipEaseForTimeline(o),
          h = l?.timelineDef.canvasDuration != null;
        for (let g in e.properties) {
          let y = g,
            S = this.getHandler(y);
          if (!S) continue;
          let b = e.properties[y] || {};
          try {
            let m = e.timing?.position;
            if (
              ((m =
                typeof m == "string" && m.endsWith("ms")
                  ? (0, Me.toSeconds)(m)
                  : m ?? 0),
              f?.length && typeof m == "string")
            ) {
              let A = `ix3-position-${e.id}-${g}`;
              r.addLabel(A, m), (m = A);
            }
            let w = e.timing?.duration ?? yt.DEFAULTS.DURATION,
              T = (0, ze.getStaggerConfig)(
                e.timing?.stagger,
                (0, Me.buildEaseContextId)(e.id, "stagger")
              );
            T && w === 0 && (w = 0.001);
            let v = { id: e.id, presetId: e.presetId, color: e.color },
              E = {
                force3D: !0,
                ...(!s && { immediateRender: s }),
                data: v,
                ...(e.tt !== 3 && { duration: (0, Me.toSeconds)(w) }),
                ...(e.timing?.repeat != null && {
                  repeat: h && e.timing.repeat < 0 ? 0 : e.timing.repeat,
                }),
                ...(e.timing?.repeatDelay != null && {
                  repeatDelay: (0, Me.toSeconds)(e.timing.repeatDelay),
                }),
                ...(e.timing?.yoyo != null && { yoyo: e.timing.yoyo }),
                ...(T && { stagger: T }),
              };
            e.timing?.ease != null &&
              (0, ze.applyEase)(
                E,
                e.timing.ease,
                (0, Me.buildEaseContextId)(e.id, "timing")
              ),
              p && (E.easeReverse = !0);
            let _ = f?.length ? d ?? t.concat(...f.map((A) => A.targets)) : t;
            if (S.createTweenConfig) {
              let A = S.createTweenConfig(b, _);
              i?.(y, e, A),
                A.modifiers &&
                  (E.modifiers = { ...E.modifiers, ...A.modifiers }),
                ri(l, A);
              let I = Object.keys(A.from || {}).length > 0,
                M = Object.keys(A.to || {}).length > 0,
                P = e.tt ?? 0;
              if (P === 0 && !M) continue;
              if (P === 1 && !I) continue;
              if (P === 2 && !I && !M) continue;
              if (P === 3 && !M) continue;
              (f?.length && t.length === 0) ||
                (P === 1
                  ? r.from(t, { ...E, ...A.from }, m)
                  : P === 2
                  ? r.fromTo(t, { ...A.from }, { ...E, ...A.to }, m)
                  : P === 3
                  ? r.set(t, { ...E, ...A.to }, m)
                  : r.to(t, { ...E, ...A.to }, m));
              for (let R of f ?? []) {
                let k = R.resolver.buildTween({
                  timeline: r,
                  action: e,
                  tweenType: P,
                  config: A,
                  vars: { ...E },
                  targets: R.targets,
                  position: m ?? 0,
                });
                k && this.routeCleanup(k, o, l, u);
              }
            } else if (S.createCustomTween) {
              let A = S.createCustomTween(r, e, b, E, _, m || 0, {
                triggerElement: a ?? null,
                timelineRole: c,
                subscribeChannel: (I, M) =>
                  this.subscribeChannel(o, I, a ?? null, M),
                flagVolatileValues: (I) => ri(l, I),
                animation: this.animation,
              });
              A && this.routeCleanup(A, o, l, u);
            }
          } catch (m) {
            console.error("Error building tween:", m);
          }
        }
      }
      routeCleanup(e, t, r, o) {
        if (o != null) o.add(e);
        else if (r != null) {
          let s = r.cleanupFns ?? new Set();
          (r.cleanupFns = s), s.add(e);
        } else this.registerCleanup(t, e);
      }
      scheduleRebuild(e) {
        if (
          e.rebuildState === "building" ||
          e.rebuildState === "rebuild_pending"
        ) {
          e.rebuildState = "rebuild_pending";
          return;
        }
        (e.rebuildState = "building"),
          this.timelineTargetsCache.delete(e),
          this.rebuildTimelineOnTheFly(e);
      }
      rebuildTimelineOnTheFly(e) {
        let t = e.timeline.totalProgress(),
          r = e.controlTypes?.has(yt.TimelineControlType.LOAD) && t !== 1,
          o = e.timeline.isActive() || r,
          s = e.timeline.reversed() === !0;
        e.timeline.pause(),
          e.timeline.revert({ kill: !1 }),
          e.timeline.clear(),
          re(e.cleanupFns),
          this.buildTimeline(e),
          this.padTimelineToCanvas(e),
          e.timeline.totalProgress(t),
          e.scrollTriggerIds && e.scrollTriggerConfigs
            ? this.scroll.rebindScrollTriggers(e)
            : o && (s ? e.timeline.reverse() : e.timeline.play()),
          e.rebuildState === "rebuild_pending"
            ? ((e.rebuildState = "building"), this.rebuildTimelineOnTheFly(e))
            : (e.rebuildState = "idle");
      }
      disposeSub(e) {
        (e.rebuildState = "init"),
          e.timeline && (e.timeline.revert(), e.timeline.kill()),
          this.scroll.cleanupSubScrollTriggers(e),
          re(e.cleanupFns),
          re(e.swapCleanupFns),
          this.timelineTargetsCache.delete(e);
      }
      promoteToPerElement(e) {
        this.reanchoredTimelines.add(e),
          this.dynamicFlags.set(e, !0),
          this.discardBuiltSubs(e);
      }
      discardBuiltSubs(e) {
        let t = this.subs.get(e);
        if (t) {
          for (let [, r] of t) this.disposeSub(r);
          t.clear();
        }
        re(this.cleanupFns.get(e)), this.cleanupFns.delete(e);
      }
      rebuildScrollDirectionGroup(e, t) {
        let r = this.getSubOrNull(e, t);
        r &&
          (r.timeline.pause(),
          r.timeline.clear(),
          re(r.cleanupFns),
          this.timelineTargetsCache.delete(r),
          this.buildTimeline(r));
      }
      setupScrollControl(e, t, r, o, s) {
        this.scroll.setupScrollControl(e, t, r, o, s);
      }
      setupScrollDirectionPair(e, t, r, o, s) {
        this.scroll.setupScrollDirectionPair(e, t, r, o, s);
      }
      setupScrollControls(e, t, r, o) {
        this.scroll.setupScrollControls(e, t, r, o);
      }
      getScrollTriggers() {
        return this.scroll.getScrollTriggers();
      }
      releaseScrollTrigger(e) {
        this.scroll.releaseScrollTrigger(e);
      }
      destroyMarkerFocus() {
        this.scroll.destroyMarkerFocus();
      }
      refreshLineSplits(e) {
        e.timeline.data?.splitLines &&
          this.splitText.refreshLineSplits(this.getTimelineTargets(e));
      }
      getTimelineTargets(e) {
        let t = this.timelineTargetsCache.get(e);
        if (t) return t;
        t = new WeakSet();
        for (let r of e.timelineDef.actions ?? [])
          for (let o of this.collectTargets(
            r,
            e.elementContext,
            e.timelineId,
            e.owningInteraction
          ))
            t.add(o);
        return this.timelineTargetsCache.set(e, t), t;
      }
      scheduleRebuildForElement(e) {
        for (let [, t] of this.subs)
          for (let [, r] of t)
            this.getTimelineTargets(r).has(e) && this.scheduleRebuild(r);
      }
    };
  function ri(n, e) {
    n &&
      !n.hasVolatileValues &&
      (0, ze.configHasVolatileValue)(e) &&
      (n.hasVolatileValues = !0);
  }
  function re(n) {
    if (n) {
      for (let e of n) e();
      n.clear();
    }
  }
});
var si = O((zn) => {
  "use strict";
  Object.defineProperty(zn, "__esModule", { value: !0 });
  Object.defineProperty(zn, "ConditionEvaluator", {
    enumerable: !0,
    get: function () {
      return Hn;
    },
  });
  var Ce = Y(),
    Hn = class {
      getConditionEvaluator;
      sharedObservers = new Map();
      conditionCache = new Map();
      CACHE_TTL = 100;
      constructor(e) {
        this.getConditionEvaluator = e;
      }
      evaluateConditionsForTrigger = async (e, t) => {
        if (!e?.length) return !0;
        let r = e.some(([o]) => o === Ce.CORE_OPERATORS.OR);
        return this.evaluateCondition(
          [r ? Ce.CORE_OPERATORS.OR : Ce.CORE_OPERATORS.AND, { conditions: e }],
          t
        );
      };
      observeConditionsForTrigger = (e, t) => {
        if (!e?.length) return () => {};
        let r = [],
          o = [];
        for (let i of e)
          this.getConditionEvaluator(i)?.isReactive ?? !1
            ? r.push(i)
            : o.push(i[0]);
        if (r.length === 0) return () => {};
        let s = r.map((i) => this.getOrCreateSharedObserver(i, t));
        return () => {
          for (let i of s) i();
        };
      };
      disposeSharedObservers = () => {
        for (let [e, t] of this.sharedObservers)
          try {
            t.cleanup();
          } catch (r) {
            console.error("Error disposing shared observer: %s", e, r);
          }
        this.sharedObservers.clear(), this.conditionCache.clear();
      };
      observeCondition = (e, t) => {
        let r = this.getEvaluator(e);
        if (r?.observe)
          try {
            return r.observe(e, t);
          } catch (o) {
            console.error("Error setting up condition observer:", o);
          }
      };
      getEvaluator = (e) => {
        let [t] = e;
        return t === Ce.CORE_OPERATORS.AND || t === Ce.CORE_OPERATORS.OR
          ? this.getLogicalEvaluator(t)
          : this.getConditionEvaluator(e);
      };
      getLogicalEvaluator = (e) => ({
        evaluate: async (t, r) => {
          let [, o, s] = t,
            { conditions: i } = o || {};
          if (!Array.isArray(i)) return !1;
          if (!i.length) return !0;
          let a = e === Ce.CORE_OPERATORS.OR,
            c = s === 1;
          for (let l of i) {
            let u = await this.evaluateCondition(l, r);
            if (a ? u : !u) return a ? !c : !!c;
          }
          return a ? !!c : !c;
        },
        observe: (t, r) => {
          let [, o] = t,
            { conditions: s } = o || {};
          if (!Array.isArray(s)) return () => {};
          let i = s.map((a) =>
            this.observeCondition(a, async () =>
              r(await this.evaluateCondition(t))
            )
          );
          return () => i.forEach((a) => a && a());
        },
      });
      evaluateCondition = async (e, t) => {
        let r = this.generateConditionCacheKey(e, t),
          o = Date.now(),
          s = this.conditionCache.get(r);
        if (s && o - s.timestamp < this.CACHE_TTL) return s.result;
        let i = this.getEvaluator(e);
        if (!i)
          return (
            console.warn(`No evaluator found for condition type '${e[0]}'`), !1
          );
        try {
          let a = await i.evaluate(e, t);
          return this.conditionCache.set(r, { result: a, timestamp: o }), a;
        } catch (a) {
          return console.error("Error evaluating condition:", a), !1;
        }
      };
      generateConditionCacheKey = (e, t) => {
        let [r, o, s] = e,
          i = o ? JSON.stringify(o) : "",
          a = s ? ":negate" : "",
          c = t ? `:ctx:${t.id}` : "";
        return `${r}:${i}${a}${c}`;
      };
      invalidateConditionCache = (e) => {
        let [t] = e,
          r = [];
        for (let o of this.conditionCache.keys())
          o.startsWith(`${t}:`) && r.push(o);
        r.forEach((o) => this.conditionCache.delete(o));
      };
      generateObserverKey = (e) => {
        let [t, r, o] = e,
          s = r ? JSON.stringify(r) : "";
        return `${t}:${s}${o ? ":negate" : ""}`;
      };
      getOrCreateSharedObserver = (e, t) => {
        let r = this.generateObserverKey(e),
          o = this.sharedObservers.get(r);
        if (!o) {
          let s = this.getEvaluator(e);
          if (!s?.observe) return () => {};
          let i = new Set(),
            a = s.observe(e, async () => {
              this.invalidateConditionCache(e);
              let c = Array.from(i, async (l) => {
                try {
                  await l();
                } catch (u) {
                  console.error("Error in shared observer callback:", u);
                }
              });
              await Promise.allSettled(c);
            });
          if (!a) return () => {};
          (o = { cleanup: a, refCount: 0, callbacks: i }),
            this.sharedObservers.set(r, o);
        }
        return (
          o.callbacks.add(t),
          o.refCount++,
          () => this.releaseSharedObserver(r, t)
        );
      };
      releaseSharedObserver = (e, t) => {
        let r = this.sharedObservers.get(e);
        if (
          !(!r || !r.callbacks.delete(t)) &&
          ((r.refCount = Math.max(0, r.refCount - 1)),
          r.refCount <= 0 && r.callbacks.size === 0)
        ) {
          try {
            r.cleanup();
          } catch (s) {
            console.error("Error cleaning up shared observer:", s);
          }
          this.sharedObservers.delete(e);
        }
      };
    };
});
var ii = O((Yn) => {
  "use strict";
  Object.defineProperty(Yn, "__esModule", { value: !0 });
  Object.defineProperty(Yn, "ConditionalPlaybackManager", {
    enumerable: !0,
    get: function () {
      return Wn;
    },
  });
  var sf = Y(),
    Wn = class {
      matchMediaInstances = new Map();
      setupConditionalContext = (e, t, r) => {
        let { conditionalPlayback: o, triggers: s, id: i } = e;
        if (!o || o.length === 0) {
          t(null);
          return;
        }
        this.cleanup(i);
        let a = window.gsap?.matchMedia();
        if (!a) {
          t(null);
          return;
        }
        this.matchMediaInstances.set(i, a);
        let c = !0,
          l = s.some(
            ([, { controlType: u }]) => u === sf.TimelineControlType.LOAD
          );
        a.add(this.buildConditionsObject(o), (u) => {
          if (l && !c) return !1;
          c = !1;
          let f = this.evaluateConditions(u.conditions || {}, o);
          return (!f || f.behavior === "skip-to-end") && t(f), r;
        });
      };
      cleanup = (e) => {
        let t = this.matchMediaInstances.get(e);
        t && (t.revert(), this.matchMediaInstances.delete(e));
      };
      destroy = () => {
        for (let [e] of this.matchMediaInstances) this.cleanup(e);
        this.matchMediaInstances.clear();
      };
      buildConditionsObject = (e) => {
        let t = {};
        for (let r of e)
          switch (r.type) {
            case "prefers-reduced-motion": {
              t.prefersReduced = "(prefers-reduced-motion: reduce)";
              break;
            }
            case "breakpoint": {
              (r.breakpoints || []).forEach((s) => {
                let i = af[s];
                i && (t[`breakpoint_${s}`] = i);
              });
              break;
            }
            default:
              break;
          }
        return (t.fallback = "(min-width: 0px)"), t;
      };
      evaluateConditions(e, t) {
        let r = [];
        for (let i of t)
          i.type === "prefers-reduced-motion" &&
            e.prefersReduced &&
            r.push({ condition: i, type: "prefers-reduced-motion" }),
            i.type === "breakpoint" &&
              (i.breakpoints || []).some((l) => e[`breakpoint_${l}`]) &&
              r.push({ condition: i, type: "breakpoint" });
        if (r.length === 0) return null;
        let o = r.find(({ condition: i }) => i.behavior === "dont-animate");
        if (o)
          return {
            behavior: "dont-animate",
            matchedConditions: {
              prefersReduced: o.type === "prefers-reduced-motion",
              breakpointMatched: o.type === "breakpoint",
            },
          };
        let s = r[0];
        return {
          behavior: s.condition.behavior,
          matchedConditions: {
            prefersReduced: s.type === "prefers-reduced-motion",
            breakpointMatched: s.type === "breakpoint",
          },
        };
      }
    },
    af = {
      tiny: "(max-width: 479px) and (min-width: 0px)",
      small: "(max-width: 767px) and (min-width: 480px)",
      medium: "(max-width: 991px) and (min-width: 768px)",
      main: "(min-width: 992px)",
    };
});
var ci = O((Xn) => {
  "use strict";
  Object.defineProperty(Xn, "__esModule", { value: !0 });
  Object.defineProperty(Xn, "PluginRegistry", {
    enumerable: !0,
    get: function () {
      return Kn;
    },
  });
  var cf = ht(),
    Kn = class {
      plugins = new Map();
      extensionsByPoint = new Map();
      activePlugins = new Set();
      pluginStorage = new Map();
      constructor() {
        [
          "trigger",
          "action",
          "targetResolver",
          "condition",
          "roleActivationObserver",
          "roleAppliedQuery",
          "triggerContract",
        ].forEach((e) => this.extensionsByPoint.set(e, new Map()));
      }
      async registerPlugin(e) {
        let t = ai(e.manifest.id);
        if (this.plugins.has(t))
          throw new Error(`Plugin ${t} is already registered`);
        let r = Object.entries(e.manifest.dependencies ?? {});
        for (let [o] of r)
          if (!this.plugins.has(o))
            throw new Error(`Missing dependency: ${o} required by ${t}`);
        this.plugins.set(t, e), e.initialize && (await e.initialize());
        for (let o of e.extensions) this.registerExtension(o);
        r.length || (await this.activatePlugin(t));
      }
      registerExtension(e) {
        this.extensionsByPoint.has(e.extensionPoint) ||
          this.extensionsByPoint.set(e.extensionPoint, new Map());
        let t = this.extensionsByPoint.get(e.extensionPoint),
          r = e.id;
        if (t.has(r))
          throw new Error(
            `Extension ${r} is already registered for point ${e.extensionPoint}`
          );
        t.set(r, e),
          e.extensionPoint === "triggerContract" &&
            (0, cf.registerTriggerContract)(r, e.implementation);
      }
      async activatePlugin(e) {
        if (this.activePlugins.has(e)) return;
        let t = this.plugins.get(e);
        if (!t) throw new Error(`Cannot activate unknown plugin: ${e}`);
        let r = Object.keys(t.manifest.dependencies ?? {});
        for (let o of r) await this.activatePlugin(o);
        t.activate && (await t.activate()), this.activePlugins.add(e);
      }
      async deactivatePlugin(e) {
        if (!this.activePlugins.has(e)) return;
        let t = this.plugins.get(e);
        if (!t) throw new Error(`Cannot deactivate unknown plugin: ${e}`);
        t.deactivate && (await t.deactivate()), this.activePlugins.delete(e);
      }
      async unregisterPlugin(e, t) {
        let r = ai([e, t]),
          o = this.plugins.get(r);
        if (o) {
          this.activePlugins.has(r) && (await this.deactivatePlugin(r));
          for (let s of o.extensions)
            s.extensionPoint === "condition" &&
              s.implementation.dispose &&
              (await s.implementation.dispose()),
              this.extensionsByPoint
                .get(s.extensionPoint)
                ?.delete(`${r}:${s.id}`);
          o.dispose && (await o.dispose()),
            this.plugins.delete(r),
            this.pluginStorage.delete(r);
        }
      }
      getExtensions(e) {
        return this.extensionsByPoint.get(e) || new Map();
      }
      getExtensionImpl(e, t) {
        return this.getExtensions(t).get(e)?.implementation;
      }
      getTriggerHandler([e]) {
        return this.getExtensionImpl(e, "trigger");
      }
      getRoleActivationObserver(e) {
        return this.getExtensionImpl(e, "roleActivationObserver");
      }
      getRoleAppliedQuery(e) {
        return this.getExtensionImpl(e, "roleAppliedQuery");
      }
      getActionHandler(e) {
        return this.getExtensionImpl(e, "action");
      }
      getTargetResolver([e]) {
        return this.getExtensionImpl(e, "targetResolver");
      }
      getConditionEvaluator([e]) {
        return this.getExtensionImpl(e, "condition");
      }
      getAllPlugins() {
        return this.plugins.values();
      }
    };
  function ai(n) {
    return `${n[0]}:${n[1]}`;
  }
});
var We = O((Zn) => {
  "use strict";
  Object.defineProperty(Zn, "__esModule", { value: !0 });
  Object.defineProperty(Zn, "BaseTriggerStrategy", {
    enumerable: !0,
    get: function () {
      return Qn;
    },
  });
  var Qn = class {
    runTrigger;
    runTimelineAction;
    skipToEndState;
    constructor(e, t, r) {
      (this.runTrigger = e),
        (this.runTimelineAction = t),
        (this.skipToEndState = r);
    }
  };
});
var ui = O((nr) => {
  "use strict";
  Object.defineProperty(nr, "__esModule", { value: !0 });
  Object.defineProperty(nr, "StandardTriggerStrategy", {
    enumerable: !0,
    get: function () {
      return tr;
    },
  });
  var Jn = Y(),
    lf = We();
  function li(n) {
    if (!n || typeof n != "object") return !1;
    let e = n;
    return e.type === "timeline-role" && typeof e.role == "string";
  }
  function uf(n) {
    if (!n || typeof n != "object") return !1;
    let e = n;
    return e.type === "playback-control" && typeof e.control == "string";
  }
  function er(n) {
    if (!n || typeof n != "object") return !1;
    let e = n;
    return e.target instanceof HTMLElement && typeof e.type != "string";
  }
  var tr = class extends lf.BaseTriggerStrategy {
    getTimelineIdsForRole;
    resolveAssignedTimelineIds;
    notifyRoleActivationObservers;
    isInInteractionScope;
    isRoleApplied;
    constructor(e, t, r, o, s, i, a, c) {
      super(e, t, r),
        (this.getTimelineIdsForRole = o),
        (this.resolveAssignedTimelineIds = s),
        (this.notifyRoleActivationObservers = i),
        (this.isInInteractionScope = a),
        (this.isRoleApplied = c);
    }
    bind(e, t, r) {
      let {
          interactionId: o,
          elements: s,
          triggerHandler: i,
          eventManager: a,
          conditionalContext: c,
          cleanupMap: l,
          delay: u,
        } = r,
        f = e[1];
      for (let d of s) {
        if (!d) continue;
        let p = l.get(d);
        p || ((p = new Set()), l.set(d, p));
        let h = new Map(),
          g = (b) => {
            let m = b.settles;
            return (
              (b.settles = []),
              m.length
                ? () => {
                    for (let w of m)
                      try {
                        w();
                      } catch (T) {
                        console.error(
                          "Error in activation completion callback:",
                          T
                        );
                      }
                  }
                : void 0
            );
          },
          y = (b) => {
            if (b)
              try {
                b();
              } catch (m) {
                console.error("Error in activation completion callback:", m);
              }
          },
          S = i(e, d, a, (b) => {
            let m = er(b) ? b.target : d;
            if (m !== d && !this.isInInteractionScope(t, m)) return;
            let w = uf(b) ? b.control : void 0,
              T = li(b) ? b.onComplete : void 0,
              v,
              E;
            if (li(b))
              (v = b.role), (E = this.getTimelineIdsForRole(t, b.role));
            else {
              let { assignedGroupId: I, assignedTimelineRole: M } = e[1];
              (v = I === null || I ? void 0 : M),
                (E = this.resolveAssignedTimelineIds(e, t));
            }
            let _ = () =>
              er(b) &&
              b.skipIfActive === !0 &&
              v !== void 0 &&
              this.isRoleApplied(t, v, e, m);
            if (er(b)) {
              let I =
                  b.firstWins === !0 &&
                  t.triggers.some(
                    (P) => P !== e && (0, Jn.hasPageLevelTriggerWon)(P)
                  ),
                M =
                  (E?.length === 0 && v === void 0) ||
                  c?.behavior === "dont-animate";
              if ((!I && !M && (0, Jn.claimPageLevelTriggerWin)(e), I || _())) {
                y(T);
                return;
              }
            }
            if (E?.length === 0) {
              this.runTrigger(e, m, o, E, void 0, {
                onComplete: T,
                role: v,
              }).catch((I) => {
                console.error("Error in trigger execution:", I), y(T);
              });
              return;
            }
            if (c !== null) {
              if (c.behavior === "skip-to-end") {
                let I = [],
                  M = !1,
                  P = () => {
                    M ||
                      !v ||
                      ((M = !0),
                      this.notifyRoleActivationObservers(t, v, I, e, m));
                  };
                this.skipToEndState(t, m, f, E, w, P);
                for (let R of I)
                  try {
                    R();
                  } catch (k) {
                    console.error(
                      "Error in role activation settle callback:",
                      k
                    );
                  }
              }
              y(T);
              return;
            }
            let A = (I) => {
              this.runTrigger(e, m, o, E, w, { onComplete: I, role: v }).catch(
                (M) => {
                  console.error("Error in trigger execution:", M), I?.();
                }
              );
            };
            if (f.conditionalLogic || !u) A(T);
            else {
              let I = h.get(m);
              if (I && w === I.control && v === I.role) T && I.settles.push(T);
              else {
                I && (clearTimeout(I.timer), g(I)?.(), h.delete(m));
                let M = {
                  control: w,
                  role: v,
                  settles: T ? [T] : [],
                  timer: setTimeout(() => {
                    if ((h.delete(m), _())) {
                      g(M)?.();
                      return;
                    }
                    A(g(M));
                  }, u * 1e3),
                };
                h.set(m, M);
              }
            }
          });
        S && p.add(S),
          p.add(() => {
            for (let b of h.values()) clearTimeout(b.timer), g(b)?.();
            h.size > 0 && (0, Jn.releasePageLevelTriggerFired)(e), h.clear();
          });
      }
    }
  };
});
var fi = O((or) => {
  "use strict";
  Object.defineProperty(or, "__esModule", { value: !0 });
  Object.defineProperty(or, "LoadTriggerStrategy", {
    enumerable: !0,
    get: function () {
      return rr;
    },
  });
  var ff = We(),
    rr = class extends ff.BaseTriggerStrategy {
      loadInteractions;
      getTimeline;
      constructor(e, t, r, o, s) {
        super(e, t, r), (this.loadInteractions = o), (this.getTimeline = s);
      }
      bind(e, t, r) {
        if (window.__wf_ix3) return;
        let { conditionalContext: o, delay: s } = r,
          i = e[1];
        this.loadInteractions.push(() => {
          if (o !== null) {
            o.behavior === "skip-to-end" && this.skipToEndState(t, null);
            return;
          }
          let a = () => {
            for (let c of t.timelineIds ?? []) {
              let l = this.getTimeline(c, null);
              l &&
                (l.data.splitLines
                  ? document.fonts.ready.then(() => {
                      this.runTimelineAction(c, i, null);
                    })
                  : this.runTimelineAction(c, i, null));
            }
          };
          s ? setTimeout(a, s * 1e3) : a();
        });
      }
    };
});
var di = O((ir) => {
  "use strict";
  Object.defineProperty(ir, "__esModule", { value: !0 });
  Object.defineProperty(ir, "ScrollTriggerStrategy", {
    enumerable: !0,
    get: function () {
      return sr;
    },
  });
  var df = We(),
    sr = class extends df.BaseTriggerStrategy {
      setupScrollControls;
      setupScrollDirectionPair;
      constructor(e, t, r, o, s) {
        super(e, t, r),
          (this.setupScrollControls = o),
          (this.setupScrollDirectionPair = s);
      }
      bind(e, t, r) {
        let { interactionId: o, elements: s, conditionalContext: i } = r,
          a = e[1].scrollTriggerConfig;
        if (!a) return;
        if (i !== null) {
          if (i.behavior === "skip-to-end")
            for (let d of s) d && this.skipToEndState(t, d);
          return;
        }
        let c = s.filter((d) => !!d);
        if (!c.length) return;
        if (a.split !== !0) {
          for (let d of c)
            for (let p of t.timelineIds ?? [])
              this.setupScrollControls(p, o, a, [d]);
          return;
        }
        let l = t.timelineIds ?? [],
          [u, f] = l;
        if (a.scrollDirection != null && u && f && l.length === 2) {
          this.setupScrollDirectionPair(u, f, o, a, c);
          return;
        }
        for (let d of l) this.setupScrollControls(d, o, a, c);
      }
    };
});
var pi = O((lr) => {
  "use strict";
  Object.defineProperty(lr, "__esModule", { value: !0 });
  Object.defineProperty(lr, "ContinuousChannelManager", {
    enumerable: !0,
    get: function () {
      return ar;
    },
  });
  var ar = class {
      coordinator;
      resolveRole;
      channels;
      animation;
      constructor(e, t) {
        (this.coordinator = e),
          (this.resolveRole = t),
          (this.channels = new Map()),
          (this.animation = e.animation);
      }
      isPreviewEnabled() {
        return !(window.__wf_ix3 && window.__wf_ix3_continuous_preview === !1);
      }
      registerChannel(e) {
        let t = this.resolveRole(e.role);
        if (!t)
          return (
            console.warn(
              `IX3 Continuous: Failed to resolve role '${e.role}' to timeline ID. Channel registration skipped.`
            ),
            null
          );
        let r = new cr(
          {
            timelineId: t,
            initialValue: e.initialValue,
            element: e.element,
            smoothing: e.smoothing,
            animation: this.animation,
            isPreviewEnabled: () => this.isPreviewEnabled(),
          },
          this.coordinator
        );
        return this.channels.set(t, r), r;
      }
      fireInterval(e, t) {
        let r = this.resolveRole(e);
        r &&
          this.coordinator.fireInterval(r, t.element ?? null, {
            targetIndex: t.targetIndex,
            pluginPayload: t.pluginPayload,
          });
      }
      registerIntervalHandler(e, t) {
        this.coordinator.registerIntervalHandler(e, t);
      }
      getMetadata(e) {
        let t = this.resolveRole(e);
        return t ? this.coordinator.getTriggerMetadata(t) : null;
      }
      hasActions(e) {
        let t = this.resolveRole(e);
        return t ? this.coordinator.hasActions(t) : !1;
      }
      publishChannel(e, t, r) {
        this.coordinator.publishChannel(e, t, r);
      }
      cleanup() {
        for (let e of this.channels.values()) e.destroy();
        this.channels.clear();
      }
    },
    pf = "power2.out",
    cr = class {
      coordinator;
      proxy;
      setter;
      timelineId;
      element;
      isPreviewEnabled;
      constructor(e, t) {
        (this.coordinator = t),
          (this.proxy = { p: e.initialValue }),
          (this.timelineId = e.timelineId),
          (this.element = e.element ?? null),
          (this.isPreviewEnabled = e.isPreviewEnabled);
        let r = (e.smoothing ?? 0) / 1e3;
        (this.setter =
          r > 0
            ? e.animation.quickTo(this.proxy, "p", {
                duration: r,
                ease: pf,
                onUpdate: () => this.updateTimeline(this.proxy.p),
              })
            : null),
          this.updateTimeline(e.initialValue);
      }
      setProgress(e) {
        this.setter
          ? this.setter(e)
          : ((this.proxy.p = e), this.updateTimeline(e));
      }
      setImmediate(e) {
        this.setter
          ? this.setter(e, e)
          : ((this.proxy.p = e), this.updateTimeline(e));
      }
      destroy() {
        this.setter?.tween.kill();
      }
      updateTimeline(e) {
        this.isPreviewEnabled() &&
          this.coordinator.setContinuousProgress(
            this.timelineId,
            e,
            this.element
          );
      }
    };
});
var hi = O((fr) => {
  "use strict";
  Object.defineProperty(fr, "__esModule", { value: !0 });
  Object.defineProperty(fr, "ContinuousTriggerStrategy", {
    enumerable: !0,
    get: function () {
      return ur;
    },
  });
  var hf = We(),
    gf = pi();
  function mf(n) {
    return n != null && "type" in n && n.type === "continuous";
  }
  var ur = class extends hf.BaseTriggerStrategy {
    continuousCleanups;
    triggerCleanupFunctions;
    coordinator;
    getTimelineIdForRole;
    constructor(e, t, r, o, s, i, a) {
      super(e, t, r),
        (this.continuousCleanups = o),
        (this.triggerCleanupFunctions = s),
        (this.coordinator = i),
        (this.getTimelineIdForRole = a);
    }
    bind(e, t, r) {
      let {
        interactionId: o,
        elements: s,
        triggerHandler: i,
        conditionalContext: a,
      } = r;
      for (let c of s) {
        if (!c) continue;
        if (a !== null) {
          a.behavior === "skip-to-end" && this.skipToEndState(t, c);
          continue;
        }
        let l = (d) => this.getTimelineIdForRole(t, d),
          u = new gf.ContinuousChannelManager(this.coordinator, l),
          f = i(e, c, r.eventManager, (d) => {
            if (mf(d)) {
              let p = d.setup(u),
                h = this.continuousCleanups.get(o);
              h || ((h = new Map()), this.continuousCleanups.set(o, h)),
                h.set(c, () => {
                  p(), u.cleanup();
                });
            }
          });
        if (f) {
          let d = this.triggerCleanupFunctions.get(o);
          d || ((d = new Map()), this.triggerCleanupFunctions.set(o, d));
          let p = d.get(c);
          p || ((p = new Set()), d.set(c, p)), p.add(f);
        }
      }
    }
  };
});
var vi = O((dr) => {
  "use strict";
  Object.defineProperty(dr, "__esModule", { value: !0 });
  Object.defineProperty(dr, "IX3", {
    enumerable: !0,
    get: function () {
      return vt;
    },
  });
  var fe = Y(),
    yf = As(),
    vf = oi(),
    gi = Tn(),
    Tf = si(),
    bf = ii(),
    Ef = ci(),
    J = ne(),
    Sf = ui(),
    wf = fi(),
    Of = di(),
    Af = hi();
  function _f(n) {
    if (n === !0) return !0;
    if (!Array.isArray(n)) return !1;
    let e = n[1];
    return (typeof e == "string" || Array.isArray(e)) && e.length > 0;
  }
  function Rf(n) {
    let e = n[1].scrollTriggerConfig;
    return e?.split === !0 && _f(e.pin);
  }
  var If = 200,
    mi = 210,
    yi = "tl_pinonly_",
    pr = class {
      env;
      pluginReg;
      timelineDefs;
      interactions;
      triggeredElements;
      features;
      lastRoutedTimelineIds;
      lastActivatedRoles;
      releasedByTeardown;
      resolversHeld;
      triggerCleanupFunctions;
      continuousCleanups;
      conditionalPlaybackManager;
      triggerStrategies;
      windowSize;
      prevWindowSize;
      windowResizeSubscribers;
      debouncedWindowResize;
      bodyResizeObserver;
      triggerObservers;
      timelineRefCounts;
      interactionTimelineRefs;
      timelineToInteractionId;
      activeInteractionIds;
      reactiveCallbackQueues;
      debouncedReactiveCallback;
      pendingReactiveUpdates;
      reactiveExecutionContext;
      componentScopeSelectors;
      eventMgr;
      loadInteractions;
      coordinator;
      conditionEval;
      constructor(e) {
        (this.env = e),
          (this.pluginReg = new Ef.PluginRegistry()),
          (this.timelineDefs = new Map()),
          (this.interactions = new Map()),
          (this.triggeredElements = new Map()),
          (this.features = {}),
          (this.lastRoutedTimelineIds = new WeakMap()),
          (this.lastActivatedRoles = new WeakMap()),
          (this.releasedByTeardown = new Set()),
          (this.resolversHeld = new Set()),
          (this.triggerCleanupFunctions = new Map()),
          (this.continuousCleanups = new Map()),
          (this.windowSize = { w: 0, h: 0 }),
          (this.prevWindowSize = { w: 0, h: 0 }),
          (this.windowResizeSubscribers = new Set()),
          (this.debouncedWindowResize = (0, J.debounce)(() => {
            for (let t of this.windowResizeSubscribers) t();
          }, If)),
          (this.bodyResizeObserver = null),
          (this.triggerObservers = new Map()),
          (this.timelineRefCounts = new Map()),
          (this.interactionTimelineRefs = new Map()),
          (this.timelineToInteractionId = new Map()),
          (this.activeInteractionIds = new Set()),
          (this.reactiveCallbackQueues = new Map()),
          (this.pendingReactiveUpdates = new Map()),
          (this.reactiveExecutionContext = new Set()),
          (this.componentScopeSelectors = new Map()),
          (this.eventMgr = yf.EventManager.getInstance()),
          (this.loadInteractions = []),
          (this.addEventListener = this.eventMgr.addEventListener.bind(
            this.eventMgr
          )),
          (this.emit = this.eventMgr.emit.bind(this.eventMgr)),
          (this.resolveTargets = (t, r, o) => {
            let s = o?.scope?.type === "component" ? o.scope : null,
              i = s?.componentId
                ? this.getComponentScopeSelector(s.componentId)
                : null,
              a = s?.variants?.length ? s.variants : null,
              c = o && r.interaction !== o ? { ...r, interaction: o } : r,
              l = this.resolveTargetsImpl(t, c, o, i),
              u = i ? !!this.pluginReg.getTargetResolver(t)?.isPageLevel : !1,
              f =
                i && r.triggerElement && !u
                  ? this.filterByInstance(l, i, r.triggerElement)
                  : l;
            return a && i && !u ? this.filterByVariant(f, i, a) : f;
          }),
          (this.isTargetDynamic = (t) =>
            !!this.pluginReg.getTargetResolver(t)?.isDynamic),
          (this.getInteractionForTimeline = (t) => {
            let r = this.timelineToInteractionId.get(t);
            if (r) return this.interactions.get(r);
          }),
          (this.getInteractionsForTimelines = (t) => {
            let r = [];
            for (let [o, s] of this.interactionTimelineRefs) {
              if (!this.activeInteractionIds.has(o)) continue;
              let i = !1;
              for (let c of t)
                if (s.has(c)) {
                  i = !0;
                  break;
                }
              if (!i) continue;
              let a = this.interactions.get(o);
              a && r.push(a);
            }
            return r;
          }),
          window.addEventListener("resize", this.debouncedWindowResize),
          (this.coordinator = new vf.AnimationCoordinator(
            this.timelineDefs,
            this.pluginReg.getActionHandler.bind(this.pluginReg),
            this.pluginReg.getTargetResolver.bind(this.pluginReg),
            this.resolveTargets,
            this.getInteractionForTimeline,
            this.getInteractionsForTimelines,
            e
          )),
          (this.conditionEval = new Tf.ConditionEvaluator(
            this.pluginReg.getConditionEvaluator.bind(this.pluginReg)
          )),
          (this.conditionalPlaybackManager =
            new bf.ConditionalPlaybackManager()),
          (this.triggerStrategies = new Map([
            [
              fe.TimelineControlType.STANDARD,
              new Sf.StandardTriggerStrategy(
                this.runTrigger.bind(this),
                this.runTimelineAction.bind(this),
                this.skipToEndState.bind(this),
                this.getTimelineIdsForRole.bind(this),
                this.resolveAssignedTimelineIds.bind(this),
                this.notifyRoleActivationObservers.bind(this),
                this.isInInteractionScope.bind(this),
                this.isRoleApplied.bind(this)
              ),
            ],
            [
              fe.TimelineControlType.LOAD,
              new wf.LoadTriggerStrategy(
                this.runTrigger.bind(this),
                this.runTimelineAction.bind(this),
                this.skipToEndState.bind(this),
                this.loadInteractions,
                this.coordinator.getTimeline.bind(this.coordinator)
              ),
            ],
            [
              fe.TimelineControlType.SCROLL,
              new Of.ScrollTriggerStrategy(
                this.runTrigger.bind(this),
                this.runTimelineAction.bind(this),
                this.skipToEndState.bind(this),
                this.coordinator.setupScrollControls.bind(this.coordinator),
                this.coordinator.setupScrollDirectionPair.bind(this.coordinator)
              ),
            ],
            [
              fe.TimelineControlType.CONTINUOUS,
              new Af.ContinuousTriggerStrategy(
                this.runTrigger.bind(this),
                this.runTimelineAction.bind(this),
                this.skipToEndState.bind(this),
                this.continuousCleanups,
                this.triggerCleanupFunctions,
                this.coordinator,
                this.getTimelineIdForRole.bind(this)
              ),
            ],
          ])),
          (this.debouncedReactiveCallback = (0, J.debounce)(
            () => this.processPendingReactiveUpdates(),
            16,
            { leading: !1, trailing: !0, maxWait: 100 }
          ));
      }
      getCoordinator() {
        return this.coordinator;
      }
      setFeatures(e) {
        (this.features = { ...this.features, ...e }),
          this.coordinator.setRewindSharedRefire(
            this.features.timelineGroups === !0
          ),
          this.coordinator.setTimelineGroups(
            this.features.timelineGroups === !0
          );
      }
      addEventListener;
      emit;
      static async init(e) {
        return (this.instance = new pr(e)), this.instance;
      }
      async registerPlugin(e) {
        await this.pluginReg.registerPlugin(e);
      }
      register(e, t) {
        if (t?.length) {
          for (let r of t) this.timelineDefs.set(r.id, r);
          this.coordinator.invalidateReuseAliasIndex();
        }
        if (e?.length) {
          for (let r of e) {
            if (this.interactions.has(r.id)) {
              console.warn(
                `Interaction with ID ${r.id} already exists. Use update() to modify it.`
              );
              continue;
            }
            let o = this.withPinOnlyTimeline(r);
            this.interactions.set(o.id, o);
            let s = new Set();
            this.interactionTimelineRefs.set(o.id, s),
              this.conditionalPlaybackManager.setupConditionalContext(
                o,
                (i) => {
                  this.resolversHeld.add(o.id),
                    i?.behavior !== "skip-to-end" &&
                      this.activeInteractionIds.add(o.id);
                  for (let p of o.timelineIds ?? [])
                    s.add(p),
                      this.incrementTimelineRefCount(p),
                      this.timelineToInteractionId.set(p, o.id);
                  let a = new Set(),
                    c = new Set(),
                    l = new Set(o.timelineIds ?? []),
                    u = (p) =>
                      this.coordinator.getReuseAliasesForSource(p).some((h) => {
                        let g = this.timelineRefCounts.get(h) ?? 0,
                          y = l.has(h) ? 1 : 0;
                        return g - y > 0;
                      }),
                    f = (p) => {
                      if (
                        !(
                          (this.timelineRefCounts.get(p) ?? 0) <=
                            (l.has(p) ? 1 : 0) && !u(p)
                        )
                      ) {
                        a.add(p);
                        for (let g of this.coordinator.dissolveSharedGroupForTimeline(
                          p
                        ))
                          c.add(g);
                      }
                    };
                  for (let p of l) {
                    f(p);
                    let h = this.coordinator.resolveSourceTimelineId(p);
                    h !== p && f(h);
                  }
                  let d = (0, gi.analyzeSharedTimelineGroups)(
                    o,
                    this.timelineDefs,
                    this.resolveTargets,
                    this.pluginReg.getActionHandler.bind(this.pluginReg),
                    this.coordinator.isDynamicTimeline.bind(this.coordinator),
                    this.features.timelineGroups
                      ? (p) =>
                          this.pluginReg
                            .getTargetResolver(p)
                            ?.instanceSharingKey?.(p)
                      : void 0
                  );
                  for (let p of d)
                    p.members.some((h) => a.has(h)) ||
                      this.coordinator.registerSharedGroup(
                        p.primary,
                        p.members
                      );
                  for (let p of o.timelineIds ?? [])
                    c.has(p) || this.coordinator.createTimeline(p, o);
                  for (let p of o.triggers ?? []) this.bindTrigger(p, o, i);
                  this.recomputeFlipEaseForOwnSources(o);
                },
                () => {
                  this.cleanupInteractionAnimations(o.id);
                }
              );
          }
          for (let r of this.loadInteractions) r();
          if (
            ((this.loadInteractions.length = 0),
            this.coordinator.getScrollTriggers().size > 0)
          ) {
            this.windowResizeSubscribers.add(() => {
              (this.windowSize.h = window.innerHeight),
                (this.windowSize.w = window.innerWidth);
            });
            let r = (0, J.debounce)(
                () => {
                  (this.prevWindowSize.h = this.windowSize.h),
                    (this.prevWindowSize.w = this.windowSize.w);
                },
                mi,
                { leading: !0, trailing: !1 }
              ),
              o = (0, J.debounce)(() => {
                if (
                  !(
                    this.windowSize.h !== this.prevWindowSize.h ||
                    this.windowSize.w !== this.prevWindowSize.w
                  )
                )
                  for (let a of this.coordinator.getScrollTriggers().values())
                    a.refresh();
              }, mi),
              s = (i) => {
                for (let a of i) a.target === document.body && (r(), o());
              };
            (this.bodyResizeObserver = new ResizeObserver(s)),
              document.body && this.bodyResizeObserver.observe(document.body);
          }
        }
        return this;
      }
      withPinOnlyTimeline(e) {
        if (e.timelineIds?.length || !e.triggers?.some(Rf)) return e;
        let t = `${yi}${e.id}`;
        return (
          this.timelineDefs.has(t) ||
            (this.timelineDefs.set(t, {
              id: t,
              deleted: !1,
              pageId: "",
              actions: [],
            }),
            this.coordinator.invalidateReuseAliasIndex()),
          { ...e, timelineIds: [t] }
        );
      }
      remove(e) {
        let t = Array.isArray(e) ? e : [e];
        for (let r of t) {
          if (!this.interactions.has(r)) {
            console.warn(
              `Interaction with ID ${r} not found, skipping removal.`
            );
            continue;
          }
          this.cleanupTriggerObservers(r),
            this.unbindAllTriggers(r),
            this.cleanupContinuousControlsForInteraction(r);
          let o = this.decrementTimelineReferences(r);
          this.cleanupUnusedTimelines(o),
            this.timelineDefs.delete(`${yi}${r}`) &&
              this.coordinator.invalidateReuseAliasIndex();
          let s = this.interactions.get(r);
          for (let c of s?.triggers ?? [])
            this.lastRoutedTimelineIds.delete(c),
              this.lastActivatedRoles.delete(c),
              (0, fe.resetPageLevelTriggerState)(c);
          this.interactions.delete(r),
            this.triggeredElements.delete(r),
            this.interactionTimelineRefs.delete(r),
            this.activeInteractionIds.delete(r),
            s && this.recomputeFlipEaseForOwnSources(s),
            this.conditionalPlaybackManager.cleanup(r);
          let i = this.resolversHeld.delete(r),
            a = this.releasedByTeardown.delete(r);
          i && !a && this.releaseTargetResolvers(r);
        }
        return this;
      }
      releaseTargetResolvers(e) {
        for (let { implementation: t } of this.pluginReg
          .getExtensions("targetResolver")
          .values())
          try {
            t.release?.(e);
          } catch (r) {
            console.error("Error releasing target resolver:", e, r);
          }
      }
      update(e, t) {
        let r = Array.isArray(e) ? e : [e],
          o = t ? (Array.isArray(t) ? t : [t]) : [];
        o.length && this.register([], o);
        for (let s of r) {
          let { id: i } = s;
          if (!this.interactions.has(i)) {
            console.warn(
              `Interaction with ID ${i} not found, registering as new.`
            ),
              this.register([s], []);
            continue;
          }
          this.remove(i), this.register([s], []);
        }
        return this;
      }
      destroyTimelineInstance(e) {
        this.coordinator.destroy(e);
        let t = `st_${e}_`;
        for (let r of [...this.coordinator.getScrollTriggers().keys()])
          r.startsWith(t) && this.coordinator.releaseScrollTrigger(r);
      }
      cleanupUnusedTimelines(e) {
        let t = new Set();
        for (let r of e)
          this.timelineDefs.get(r)?.reuse?.sourceTimelineId &&
            t.add(this.coordinator.resolveSourceTimelineId(r));
        for (let r of e)
          this.destroyTimelineInstance(r), this.timelineDefs.delete(r);
        this.coordinator.invalidateReuseAliasIndex();
        for (let r of t)
          e.has(r) || this.coordinator.recomputeFlipEaseForSource(r);
      }
      destroy() {
        let e = Array.from(this.interactions.keys());
        this.remove(e),
          (this.loadInteractions.length = 0),
          this.env.win.ScrollTrigger &&
            (this.env.win.ScrollTrigger.getAll().forEach((t) => t.kill()),
            this.bodyResizeObserver?.disconnect(),
            (this.bodyResizeObserver = null)),
          this.coordinator.destroyMarkerFocus(),
          window.removeEventListener("resize", this.debouncedWindowResize),
          this.cleanupAllContinuousControls();
        try {
          this.debouncedReactiveCallback.cancel();
        } catch (t) {
          console.error(
            "Error canceling debounced callback during destroy:",
            t
          );
        }
        this.pendingReactiveUpdates.clear(),
          this.reactiveCallbackQueues.clear(),
          this.reactiveExecutionContext.clear(),
          this.conditionEval.disposeSharedObservers(),
          this.conditionalPlaybackManager.destroy(),
          this.windowResizeSubscribers.clear(),
          this.timelineDefs.clear(),
          this.coordinator.invalidateReuseAliasIndex(),
          this.interactions.clear(),
          this.triggeredElements.clear(),
          this.triggerCleanupFunctions.clear(),
          this.triggerObservers.clear(),
          this.interactionTimelineRefs.clear(),
          this.activeInteractionIds.clear(),
          this.releasedByTeardown.clear(),
          this.resolversHeld.clear(),
          this.timelineToInteractionId.clear(),
          this.componentScopeSelectors.clear();
      }
      bindTrigger(e, t, r) {
        let o = t.id,
          s = this.pluginReg.getTriggerHandler(e),
          i = e[1];
        if (!s) {
          console.warn("No trigger handler:", e[0]);
          return;
        }
        let a = this.triggerCleanupFunctions.get(o) || new Map();
        this.triggerCleanupFunctions.set(o, a);
        let { delay: c = 0, controlType: l } = i,
          u = (0, J.toSeconds)(c),
          f = this.eventMgr,
          d = e[2],
          p = [];
        d && (p = this.resolveTargets(d, { trigger: e }, t));
        let h =
            l && (0, J.isValidControlType)(l)
              ? l
              : fe.TimelineControlType.STANDARD,
          g = this.triggerStrategies.get(h);
        g
          ? g.bind(e, t, {
              interactionId: o,
              elements: p,
              triggerHandler: s,
              eventManager: f,
              conditionalContext: r,
              cleanupMap: a,
              delay: u || 0,
            })
          : console.warn("No strategy found for control type:", l),
          i.conditionalLogic && this.setupTriggerReactiveMonitoring(e, t);
      }
      setupTriggerReactiveMonitoring(e, t) {
        let { conditionalLogic: r } = e[1];
        if (!r) return;
        let o = `${t.id}:${t.triggers.indexOf(e)}`;
        try {
          let s = this.conditionEval.observeConditionsForTrigger(
              r.conditions,
              async () => {
                await this.executeReactiveCallbackSafely(t.id, o, async () => {
                  if (
                    e[1].assignedInstances !== void 0 &&
                    !this.lastRoutedTimelineIds.has(e)
                  )
                    return;
                  let c =
                    (await this.conditionEval.evaluateConditionsForTrigger(
                      r.conditions,
                      t
                    ))
                      ? r.ifTrue
                      : r.ifFalse;
                  if (c) {
                    let l = this.triggeredElements.get(t.id);
                    if (!l) return;
                    let u = this.features.timelineGroups === !0,
                      f =
                        u && (0, gi.triggerRoutesByCallbackRole)(e[0], e[1])
                          ? void 0
                          : this.resolveAssignedTimelineIds(e, t);
                    if (f?.length === 0) return;
                    let d = u ? this.lastRoutedTimelineIds.get(e) : void 0,
                      p = (g) => (u ? d?.get(g) : f ?? t.timelineIds ?? []),
                      h = [];
                    for (let g of l)
                      for (let y of p(g) ?? [])
                        h.push({
                          timelineId: y,
                          element: g,
                          action: "pause-reset",
                        });
                    await this.executeTimelineOperationsAsync(h),
                      l.forEach((g) => {
                        let y = u ? p(g) : f;
                        if (u && !y) return;
                        let { notifyObservers: S, settle: b } =
                          this.makeRoleActivationHooks(t, e, g);
                        this.executeConditionalOutcome(c, g, t, y, b, S);
                      });
                  }
                });
              }
            ),
            i = this.triggerObservers.get(t.id);
          i || ((i = new Map()), this.triggerObservers.set(t.id, i)),
            i.set(o, s);
        } catch (s) {
          console.error("Error setting up trigger reactive monitoring:", s);
        }
      }
      async executeReactiveCallbackSafely(e, t, r) {
        this.reactiveExecutionContext.has(t) ||
          (this.pendingReactiveUpdates.set(t, r),
          this.debouncedReactiveCallback());
      }
      async processPendingReactiveUpdates() {
        if (this.pendingReactiveUpdates.size === 0) return;
        let e = new Map(this.pendingReactiveUpdates);
        this.pendingReactiveUpdates.clear();
        let t = new Map();
        for (let [r, o] of e) {
          let s = r.split(":")[0];
          t.has(s) || t.set(s, []),
            t.get(s).push({ triggerKey: r, callback: o });
        }
        for (let [r, o] of t)
          await this.processInteractionReactiveUpdates(r, o);
      }
      async processInteractionReactiveUpdates(e, t) {
        let r = this.reactiveCallbackQueues.get(e);
        if (r)
          try {
            await r;
          } catch (s) {
            console.error("Error waiting for pending reactive callback:", s);
          }
        let o = this.executeInteractionUpdates(t);
        this.reactiveCallbackQueues.set(e, o);
        try {
          await o;
        } finally {
          this.reactiveCallbackQueues.get(e) === o &&
            this.reactiveCallbackQueues.delete(e);
        }
      }
      async executeInteractionUpdates(e) {
        for (let { triggerKey: t, callback: r } of e) {
          this.reactiveExecutionContext.add(t);
          try {
            await r();
          } catch (o) {
            console.error("Error in reactive callback for %s:", t, o);
          } finally {
            this.reactiveExecutionContext.delete(t);
          }
        }
      }
      async executeTimelineOperationsAsync(e) {
        if (e.length)
          return new Promise((t) => {
            Promise.resolve().then(() => {
              e.forEach(({ timelineId: r, element: o, action: s }) => {
                try {
                  if (!this.timelineDefs.has(r)) {
                    console.warn(`Timeline ${r} not found, skipping operation`);
                    return;
                  }
                  if (!o.isConnected) {
                    console.warn(
                      "Element no longer in DOM, skipping timeline operation"
                    );
                    return;
                  }
                  switch (s) {
                    case "pause-reset":
                      this.coordinator.pause(r, o, 0);
                      break;
                    default:
                      console.warn(`Unknown timeline action: ${s}`);
                  }
                } catch (i) {
                  console.error(
                    "Error executing timeline operation: %s, %s",
                    s,
                    r,
                    i
                  );
                }
              }),
                t();
            });
          });
      }
      getTimelineIdsForRole(e, t) {
        let r = e.timelineIds ?? [],
          o = r.filter(
            (s) => this.timelineDefs.get(s)?.triggerMetadata?.role === t
          );
        if (o.length === 0 && r.length > 0) {
          let s = r
            .map(
              (i) => this.timelineDefs.get(i)?.triggerMetadata?.role || "none"
            )
            .join(", ");
          console.warn(
            `IX3: No timelines found for role '${t}' in interaction '${e.id}'. Available roles: [${s}]`
          );
        }
        return o;
      }
      getTimelineIdForRole(e, t) {
        return this.getTimelineIdsForRole(e, t)[0];
      }
      getTimelineIdsForGroup(e, t) {
        return (e.timelineIds ?? []).filter(
          (r) => this.timelineDefs.get(r)?.groupId === t
        );
      }
      resolveAssignedTimelineIds(e, t) {
        let r = e[1];
        if (r.assignedGroupId === null) return [];
        if (r.assignedGroupId)
          return this.getTimelineIdsForGroup(t, r.assignedGroupId);
        if (r.assignedTimelineRole)
          return this.getTimelineIdsForRole(t, r.assignedTimelineRole);
      }
      hasRoleActivationObserver(e) {
        for (let t of e.triggers ?? [])
          if (this.pluginReg.getRoleActivationObserver(t[0])) return !0;
        return !1;
      }
      notifyRoleActivationObservers(e, t, r, o, s, i) {
        let a = this.triggerCleanupFunctions.get(e.id);
        if (!(!a || (i && a !== i)))
          for (let c of e.triggers ?? []) {
            let l = this.pluginReg.getRoleActivationObserver(c[0]);
            if (l)
              try {
                let u = c[2],
                  f = u
                    ? this.resolveTargets(
                        u,
                        s ? { trigger: c, triggerElement: s } : { trigger: c },
                        e
                      )
                    : [];
                if (f.length === 0) continue;
                let d = l(t, {
                  elements: f,
                  trigger: c,
                  causeTrigger: o,
                  causeElement: s,
                });
                d && r.push(d);
              } catch (u) {
                console.error(
                  "Error notifying role activation observer (target resolution or observer):",
                  c[0],
                  u
                );
              }
          }
      }
      isRoleApplied(e, t, r, o) {
        let s = !1;
        for (let i of e.triggers ?? []) {
          let a = this.pluginReg.getRoleAppliedQuery(i[0]),
            c = i[2];
          if (!(!a || !c))
            try {
              let l = this.resolveTargets(
                c,
                { trigger: i, triggerElement: o },
                e
              );
              if (l.length === 0) continue;
              let u = a(t, {
                elements: l,
                trigger: i,
                causeTrigger: r,
                causeElement: o,
              });
              if (u === !1) return !1;
              u === !0 && (s = !0);
            } catch (l) {
              return (
                console.error(
                  "Error asking role applied query (target resolution or query):",
                  i[0],
                  l
                ),
                !1
              );
            }
        }
        return s;
      }
      makeRoleActivationHooks(e, t, r) {
        let { assignedGroupId: o, assignedTimelineRole: s } = t[1],
          i =
            this.lastActivatedRoles.get(t)?.get(r) ??
            (o === null || o ? void 0 : s);
        if (!i || !this.hasRoleActivationObserver(e)) return {};
        let a = [],
          c = this.triggerCleanupFunctions.get(e.id);
        return {
          notifyObservers: () => {
            this.notifyRoleActivationObservers(e, i, a, t, r, c);
          },
          settle: () => {
            for (let l of a)
              try {
                l();
              } catch (u) {
                console.error("Error in role activation settle callback:", u);
              }
          },
        };
      }
      async runTrigger(e, t, r, o, s, i) {
        let a = i?.onComplete,
          c = i?.role,
          l = 0,
          u = !1,
          f = [],
          d = () => {
            if (!u) {
              u = !0;
              try {
                a?.();
              } catch (_) {
                console.error("Error in activation completion callback:", _);
              }
              for (let _ of f)
                try {
                  _();
                } catch (A) {
                  console.error("Error in role activation settle callback:", A);
                }
            }
          };
        if (window.__wf_ix3) {
          d();
          return;
        }
        if (o?.length === 0) {
          this.lastRoutedTimelineIds.get(e)?.delete(t),
            this.lastActivatedRoles.get(e)?.delete(t),
            d();
          return;
        }
        let p = e[1],
          h = this.triggeredElements.get(r);
        h || this.triggeredElements.set(r, (h = new Set())), h.add(t);
        let g = this.interactions.get(r);
        if (!g || !g.triggers.includes(e)) {
          d();
          return;
        }
        let y = o ?? g.timelineIds ?? [];
        if (y.length === 0) {
          d();
          return;
        }
        l = y.length;
        let S = this.lastRoutedTimelineIds.get(e);
        S || this.lastRoutedTimelineIds.set(e, (S = new WeakMap())),
          S.set(t, y);
        let b = this.lastActivatedRoles.get(e);
        b || this.lastActivatedRoles.set(e, (b = new WeakMap())),
          c ? b.set(t, c) : b.delete(t);
        let m = !1,
          w = this.triggerCleanupFunctions.get(g.id),
          T = () => {
            m ||
              !c ||
              ((m = !0), this.notifyRoleActivationObservers(g, c, f, e, t, w));
          },
          v = a != null || (c != null && this.hasRoleActivationObserver(g)),
          E = () =>
            v
              ? () => {
                  --l <= 0 && d();
                }
              : void 0;
        try {
          if (p.conditionalLogic)
            try {
              let A = (await this.conditionEval.evaluateConditionsForTrigger(
                p.conditionalLogic.conditions,
                g
              ))
                ? p.conditionalLogic.ifTrue
                : p.conditionalLogic.ifFalse;
              A
                ? this.executeConditionalOutcome(A, t, g, y, v ? d : void 0, T)
                : d();
            } catch (_) {
              console.error("Error evaluating trigger conditional logic:", _);
              let A = E();
              y.forEach((I) => this.runTimelineAction(I, p, t, s, A, T));
            }
          else {
            let _ = E();
            y.forEach((A) => this.runTimelineAction(A, p, t, s, _, T));
          }
        } catch (_) {
          console.error("Error in trigger execution:", _), d();
        }
      }
      skipToEndState(e, t, r, o, s, i) {
        (o ?? e.timelineIds ?? []).forEach((c) => {
          let l =
              s ?? (r ? this.getEffectivePlaybackConfig(c, r).control : void 0),
            u = this.features.timelineGroups === !0,
            f = u ? void 0 : this.coordinator.getTimeline(c, t);
          if (
            (!u && !f) ||
            l === "pause" ||
            l === "stop" ||
            l === "none" ||
            ((f ??= this.coordinator.getTimeline(c, t)), !f)
          )
            return;
          let d;
          switch (l) {
            case "reverse":
            case "reverseFlipEase":
              d = 0;
              break;
            case "togglePlayReverse":
            case "togglePlayReverseFlipEase":
              d = Math.round(1 - f.totalProgress());
              break;
            case "resume":
              d = f.reversed() ? 0 : 1;
              break;
            case "play":
            case "restart":
            case void 0:
              d = 1;
              break;
            default: {
              let p = l;
              d = 1;
              break;
            }
          }
          i?.(), this.coordinator.setTotalProgress(c, d, t ?? null);
        });
      }
      executeConditionalOutcome(e, t, r, o, s, i) {
        let {
            control: a,
            targetTimelineId: c,
            speed: l,
            jump: u,
            delay: f = 0,
          } = e,
          d = (0, J.toSeconds)(f);
        if (a === "none") {
          s?.();
          return;
        }
        let p = r.timelineIds ?? [],
          h;
        if (c) {
          if (!p.includes(c)) {
            console.warn(
              `Target timeline '${c}' not found in interaction '${
                r.id
              }'. Available timelines: ${p.join(", ")}`
            ),
              s?.();
            return;
          }
          h = [c];
        } else h = p;
        if (o) {
          let b = new Set(o);
          h = h.filter((m) => b.has(m));
        }
        if (h.length === 0) {
          s?.();
          return;
        }
        let g = h.length,
          y = s
            ? () => {
                --g <= 0 && s();
              }
            : void 0,
          S = () => {
            a !== "pause" && a !== "stop" && i?.(),
              h.forEach((b) => {
                l !== void 0 &&
                  (this.features.timelineGroups !== !0 ||
                    (a !== "pause" && a !== "stop")) &&
                  this.coordinator.setTimeScale(b, l, t);
                let m = (0, J.toSeconds)(u);
                switch (a) {
                  case "play":
                    this.coordinator.play(b, t, m);
                    break;
                  case "pause":
                    this.coordinator.pause(b, t, m);
                    break;
                  case "resume":
                    this.coordinator.resume(b, t, m);
                    break;
                  case "reverse":
                  case "reverseFlipEase":
                    this.coordinator.reverse(b, t, m);
                    break;
                  case "restart":
                    this.coordinator.restart(b, t);
                    break;
                  case "stop":
                    this.coordinator.pause(b, t, m);
                    break;
                  case "togglePlayReverse":
                  case "togglePlayReverseFlipEase":
                    this.coordinator.togglePlayReverse(b, t);
                    break;
                  default: {
                    this.coordinator.restart(b, t);
                    let w = a;
                    break;
                  }
                }
                y && this.notifyOnTimelineSettled(b, t, a, y);
              });
          };
        d
          ? setTimeout(() => {
              S();
            }, d * 1e3)
          : S();
      }
      getEffectivePlaybackConfig(e, t) {
        let r = this.timelineDefs.get(e);
        if (
          r &&
          (this.features.timelineGroups === !0
            ? r.triggerMetadata?.role != null
            : r.triggerMetadata)
        ) {
          let s = r.settings;
          return {
            control: s?.control,
            delay: s?.delay,
            jump: s?.jump,
            speed: s?.speed,
          };
        }
        let o =
          t.controlType && (0, J.isValidControlType)(t.controlType)
            ? t.controlType
            : fe.TimelineControlType.STANDARD;
        if (r?.groupId && o === fe.TimelineControlType.STANDARD) {
          let s = r.settings;
          return {
            control: t.control,
            delay: void 0,
            jump: s?.jump,
            speed: s?.speed,
          };
        }
        return {
          control: t.control,
          delay: void 0,
          jump: t.jump,
          speed: t.speed,
        };
      }
      runTimelineAction(e, t, r, o, s, i) {
        let {
            control: a,
            delay: c,
            jump: l,
            speed: u,
          } = this.getEffectivePlaybackConfig(e, t),
          f = o ?? a,
          d = this.timelineDefs.get(e);
        if (d?.reuse) {
          let y = d.reuse.sourceTimelineId;
          if (!this.timelineDefs.has(y)) {
            console.warn(`Timeline reuse: source '${y}' not found for '${e}'`),
              s?.();
            return;
          }
          e = y;
        }
        let p = () => {
            let y = this.features.timelineGroups === !0;
            if (y && f === "none") return;
            (!y || (f !== "pause" && f !== "stop")) &&
              this.coordinator.setTimeScale(e, u ?? 1, r);
            let S = (0, J.toSeconds)(l);
            switch (f) {
              case "play":
                this.coordinator.play(e, r, S);
                break;
              case "pause":
                this.coordinator.pause(e, r, S);
                break;
              case "resume":
                this.coordinator.resume(e, r, S);
                break;
              case "reverse":
              case "reverseFlipEase":
                this.coordinator.reverse(e, r, S);
                break;
              case "restart":
                this.coordinator.restart(e, r);
                break;
              case "togglePlayReverse":
              case "togglePlayReverseFlipEase":
                this.coordinator.togglePlayReverse(e, r);
                break;
              case "stop":
                this.coordinator.pause(e, r, S);
                break;
              case "none":
                break;
              case void 0:
                this.coordinator.restart(e, r);
                break;
              default: {
                let b = f;
                this.coordinator.restart(e, r);
                break;
              }
            }
          },
          h =
            s || i
              ? () => {
                  f !== "none" && f !== "pause" && f !== "stop" && i?.(),
                    p(),
                    s && this.notifyOnTimelineSettled(e, r, f, s);
                }
              : p,
          g = (0, J.toSeconds)(c);
        g && g > 0 ? setTimeout(h, g * 1e3) : h();
      }
      notifyOnTimelineSettled(e, t, r, o) {
        if (r === "pause" || r === "stop" || r === "none") {
          o();
          return;
        }
        let s = this.coordinator.getTimeline(e, t);
        if (!s) {
          o();
          return;
        }
        let i = s.reversed() ? "onReverseComplete" : "onComplete",
          a = i === "onReverseComplete" ? 0 : 1;
        if (!s.isActive() && s.totalProgress() === a) {
          o();
          return;
        }
        let c = s.eventCallback(i),
          l = !1,
          u,
          f = function (...d) {
            if (l) {
              c?.apply(this, d);
              return;
            }
            (l = !0), u?.(), s.eventCallback(i, c ?? null);
            try {
              c?.apply(this, d);
            } catch (p) {
              console.error(
                "Error in chained timeline completion callback:",
                p
              );
            }
            o();
          };
        s.eventCallback(i, f),
          (u = this.coordinator.registerCleanup(
            e,
            () => {
              l ||
                ((l = !0),
                s.eventCallback(i) === f && s.eventCallback(i, c ?? null),
                o());
            },
            t
          ));
      }
      resolveTargets;
      isTargetDynamic;
      getComponentScopeSelector(e) {
        let t = this.componentScopeSelectors.get(e);
        return (
          t ||
            ((t = `[data-wf-component-id="${CSS.escape(e)}"]`),
            this.componentScopeSelectors.set(e, t)),
          t
        );
      }
      resolveTargetsImpl(e, t, r, o) {
        let [s, i, a] = e;
        if (i === "*" && a && a.filterBy) {
          let d = this.resolveUniversalSelectorOptimized(a, t, r, o);
          if (d) return d;
        }
        let c = this.pluginReg.getTargetResolver([s, i]);
        if (!c) return [];
        let l = c.resolve([s, i], t),
          u = o && !c.isPageLevel ? this.filterByScope(l, o) : l;
        if (!u.length || !a || a.relationship === "none" || !a.filterBy)
          return u;
        let f =
          t.anchorFilterToTrigger && t.triggerElement
            ? [t.triggerElement]
            : this.resolveTargetsImpl(a.filterBy, t, r, o);
        return this.applyRelationshipFilter(
          u,
          a.relationship,
          f,
          a.firstMatchOnly
        );
      }
      resolveUniversalSelectorOptimized(e, t, r, o) {
        if (!e.filterBy) return null;
        let s =
            t.anchorFilterToTrigger && t.triggerElement
              ? [t.triggerElement]
              : this.resolveTargetsImpl(e.filterBy, t, r, o),
          i = s.length;
        if (!i) return [];
        let a = !!e.firstMatchOnly;
        switch (e.relationship) {
          case "direct-child-of": {
            let c = [];
            for (let l = 0; l < i; l++) {
              let u = s[l];
              if (!u) continue;
              let f = u.children;
              for (let d = 0; d < f.length; d++)
                if ((c.push(f[d]), a)) return c;
            }
            return c;
          }
          case "within": {
            let c = [];
            for (let l = 0; l < i; l++) {
              let u = s[l];
              if (!u) continue;
              let f = u.querySelectorAll("*");
              for (let d = 0; d < f.length; d++)
                if ((c.push(f[d]), a)) return c;
            }
            return c;
          }
          case "direct-parent-of": {
            let c = new Set(),
              l = [];
            for (let u = 0; u < i; u++) {
              let f = s[u];
              if (!f) continue;
              let d = f.parentElement;
              if (d && !c.has(d) && (c.add(d), l.push(d), a)) break;
            }
            return o ? this.filterByScope(l, o) : l;
          }
          case "next-sibling-of": {
            let c = [];
            for (let l = 0; l < i; l++) {
              let u = s[l];
              if (!u) continue;
              let f = u.nextElementSibling;
              if (f && (c.push(f), a)) break;
            }
            return o ? this.filterByScope(c, o) : c;
          }
          case "prev-sibling-of": {
            let c = [];
            for (let l = 0; l < i; l++) {
              let u = s[l];
              if (!u) continue;
              let f = u.previousElementSibling;
              if (f && (c.push(f), a)) break;
            }
            return o ? this.filterByScope(c, o) : c;
          }
          case "next-to": {
            let c = new Set(),
              l = [];
            for (let u = 0; u < i; u++) {
              let f = s[u];
              if (!f) continue;
              let d = f.parentElement;
              if (d) {
                let p = d.children;
                for (let h = 0; h < p.length; h++) {
                  let g = p[h];
                  if (g !== f && !c.has(g) && (c.add(g), l.push(g), a)) break;
                }
                if (a && l.length) break;
              }
            }
            return o ? this.filterByScope(l, o) : l;
          }
          case "contains": {
            let c = new Set(),
              l = [];
            for (let u = 0; u < i; u++) {
              let f = s[u];
              if (!f) continue;
              let d = f.parentElement;
              for (; d && !(c.has(d) || (c.add(d), l.push(d), a)); )
                d = d.parentElement;
              if (a && l.length) break;
            }
            return o ? this.filterByScope(l, o) : l;
          }
          default:
            return null;
        }
      }
      applyRelationshipFilter(e, t, r, o) {
        if (!e.length || !r.length) return [];
        if (t === "none") return e;
        let s = [],
          i = new Set();
        switch (t) {
          case "direct-child-of": {
            let a = new Set(r);
            for (let c = 0; c < e.length; c++) {
              let l = e[c];
              if (
                !i.has(l) &&
                l.parentElement &&
                a.has(l.parentElement) &&
                (i.add(l), s.push(l), o)
              )
                return s;
            }
            return s;
          }
          case "direct-parent-of": {
            let a = new Set();
            for (let c = 0; c < r.length; c++) {
              let l = r[c].parentElement;
              l && a.add(l);
            }
            for (let c = 0; c < e.length; c++) {
              let l = e[c];
              if (!i.has(l) && a.has(l) && (i.add(l), s.push(l), o)) return s;
            }
            return s;
          }
          case "next-sibling-of": {
            let a = new Set(r);
            for (let c = 0; c < e.length; c++) {
              let l = e[c];
              if (i.has(l)) continue;
              let u = l.previousElementSibling;
              if (u && a.has(u) && (i.add(l), s.push(l), o)) return s;
            }
            return s;
          }
          case "prev-sibling-of": {
            let a = new Set(r);
            for (let c = 0; c < e.length; c++) {
              let l = e[c];
              if (i.has(l)) continue;
              let u = l.nextElementSibling;
              if (u && a.has(u) && (i.add(l), s.push(l), o)) return s;
            }
            return s;
          }
          case "next-to": {
            let a = new Set(r),
              c = new Map();
            for (let l = 0; l < r.length; l++) {
              let u = r[l].parentElement;
              u && c.set(u, (c.get(u) ?? 0) + 1);
            }
            for (let l = 0; l < e.length; l++) {
              let u = e[l];
              if (i.has(u) || !u.parentElement) continue;
              let f = c.get(u.parentElement);
              if (f && !(a.has(u) && f <= 1) && (i.add(u), s.push(u), o))
                return s;
            }
            return s;
          }
          case "within": {
            let a = new Set(r);
            for (let c = 0; c < e.length; c++) {
              let l = e[c];
              if (i.has(l)) continue;
              let u = l.parentElement;
              for (; u; ) {
                if (a.has(u)) {
                  if ((i.add(l), s.push(l), o)) return s;
                  break;
                }
                u = u.parentElement;
              }
            }
            return s;
          }
          case "contains": {
            let a = new Set();
            for (let c = 0; c < r.length; c++) {
              let l = r[c].parentElement;
              for (; l && !a.has(l); ) a.add(l), (l = l.parentElement);
            }
            for (let c = 0; c < e.length; c++) {
              let l = e[c];
              if (!i.has(l) && a.has(l) && (i.add(l), s.push(l), o)) return s;
            }
            return s;
          }
          default:
            return [];
        }
      }
      filterByInstance(e, t, r) {
        if (!e.length) return e;
        let o = r.closest(t);
        if (!o) return e;
        let s = -1;
        for (let a = 0; a < e.length; a++)
          if (e[a]?.closest(t) !== o) {
            s = a;
            break;
          }
        if (s === -1) return e;
        let i = e.slice(0, s);
        for (let a = s + 1; a < e.length; a++) {
          let c = e[a];
          c?.closest(t) === o && i.push(c);
        }
        return i;
      }
      filterByScope(e, t) {
        if (!e.length) return e;
        let r = -1;
        for (let s = 0; s < e.length; s++)
          if (!e[s]?.closest(t)) {
            r = s;
            break;
          }
        if (r === -1) return e;
        let o = e.slice(0, r);
        for (let s = r + 1; s < e.length; s++) {
          let i = e[s];
          i?.closest(t) && o.push(i);
        }
        return o;
      }
      filterByVariant(e, t, r) {
        if (!e.length) return e;
        let o = (a) => {
            let c = a.closest(t);
            if (!c) return !1;
            let l = c.getAttribute("data-wf-variant-state");
            return l != null && r.includes(l);
          },
          s = -1;
        for (let a = 0; a < e.length; a++) {
          let c = e[a];
          if (!c || !o(c)) {
            s = a;
            break;
          }
        }
        if (s === -1) return e;
        let i = e.slice(0, s);
        for (let a = s + 1; a < e.length; a++) {
          let c = e[a];
          c && o(c) && i.push(c);
        }
        return i;
      }
      isInInteractionScope(e, t) {
        let r = e.scope;
        if (r?.type !== "component" || !r.componentId) return !0;
        let o = this.getComponentScopeSelector(r.componentId);
        return (
          (r.variants?.length
            ? this.filterByVariant([t], o, r.variants)
            : this.filterByScope([t], o)
          ).length > 0
        );
      }
      getInteractionForTimeline;
      getInteractionsForTimelines;
      recomputeFlipEaseForOwnSources(e) {
        if (this.features.timelineGroups !== !0) return;
        let t = new Set();
        for (let r of e.timelineIds ?? [])
          this.timelineDefs.has(r) &&
            t.add(this.coordinator.resolveSourceTimelineId(r));
        for (let r of t) this.coordinator.recomputeFlipEaseForSource(r);
      }
      incrementTimelineRefCount(e) {
        let t = this.timelineRefCounts.get(e) || 0;
        this.timelineRefCounts.set(e, t + 1);
      }
      decrementTimelineRefCount(e) {
        let t = this.timelineRefCounts.get(e) || 0,
          r = Math.max(0, t - 1);
        return this.timelineRefCounts.set(e, r), r;
      }
      decrementTimelineReferences(e) {
        let t = new Set(),
          r = this.interactionTimelineRefs.get(e);
        if (!r) return t;
        for (let o of r) this.decrementTimelineRefCount(o) === 0 && t.add(o);
        return t;
      }
      unbindAllTriggers(e) {
        let t = this.triggerCleanupFunctions.get(e);
        if (t) {
          for (let [, r] of t)
            for (let o of r)
              try {
                o();
              } catch (s) {
                console.error("Error during trigger cleanup:", s);
              }
          this.triggerCleanupFunctions.delete(e);
        }
      }
      cleanupTriggerObservers(e) {
        let t = this.triggerObservers.get(e);
        if (t) {
          for (let [r, o] of t) {
            try {
              o();
            } catch (s) {
              console.error("Error during trigger observer cleanup:", s);
            }
            this.pendingReactiveUpdates.delete(r),
              this.reactiveExecutionContext.delete(r);
          }
          this.reactiveCallbackQueues.delete(e),
            this.triggerObservers.delete(e);
        }
      }
      cleanupContinuousControlsForInteraction(e) {
        let t = this.continuousCleanups.get(e);
        if (t) {
          for (let [, r] of t)
            try {
              r();
            } catch (o) {
              console.error("Error during continuous control cleanup:", o);
            }
          this.continuousCleanups.delete(e);
        }
      }
      cleanupAllContinuousControls() {
        for (let [, e] of this.continuousCleanups)
          for (let [, t] of e)
            try {
              t();
            } catch (r) {
              console.error("Error during continuous control cleanup:", r);
            }
        this.continuousCleanups.clear();
      }
      cleanupInteractionAnimations(e) {
        this.unbindAllTriggers(e),
          this.activeInteractionIds.delete(e),
          this.cleanupContinuousControlsForInteraction(e);
        let t = this.interactionTimelineRefs.get(e);
        if (t)
          for (let o of t)
            this.decrementTimelineRefCount(o) === 0 &&
              this.destroyTimelineInstance(o);
        let r = this.interactions.get(e);
        r && this.recomputeFlipEaseForOwnSources(r),
          this.resolversHeld.delete(e) &&
            (this.releaseTargetResolvers(e), this.releasedByTeardown.add(e)),
          this.triggeredElements.delete(e);
        for (let o of this.interactions.get(e)?.triggers ?? [])
          this.lastRoutedTimelineIds.delete(o),
            this.lastActivatedRoles.delete(o);
      }
    },
    vt = pr;
  it(vt, "instance");
});
var bi = O((hr) => {
  "use strict";
  Object.defineProperty(hr, "__esModule", { value: !0 });
  function Mf(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Mf(hr, {
    EASING_NAMES: function () {
      return Pf.EASING_NAMES;
    },
    IX3: function () {
      return Cf.IX3;
    },
    convertEaseConfigToGSAP: function () {
      return Ti.convertEaseConfigToGSAP;
    },
    convertEaseConfigToLinear: function () {
      return Ti.convertEaseConfigToLinear;
    },
  });
  var Cf = vi(),
    Pf = ne(),
    Ti = _n();
});
var Si = O((gr) => {
  "use strict";
  Object.defineProperty(gr, "__esModule", { value: !0 });
  function xf(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  xf(gr, {
    BETA_FEATURES: function () {
      return Ye;
    },
    adminRequired: function () {
      return C;
    },
    betaFeaturesTestingLib: function () {
      return Nf;
    },
    getBetaFeatureDefinition: function () {
      return kf;
    },
    isBetaFeatureFlag: function () {
      return Lf;
    },
  });
  var C = [],
    Ei = [],
    Ye = {
      figma: { shortcut: C, scope: ["user"] },
      rssUrl: { shortcut: ["* r s s u r l"], scope: ["user"] },
      disableBlockers: { shortcut: ["* z o o m"], scope: ["user"] },
      peek: { shortcut: Ei, scope: ["user"] },
      ecShipStation: { shortcut: C, scope: ["user"] },
      betaception: { shortcut: Ei, scope: ["user"] },
      fileUpload: { shortcut: C, scope: ["user"] },
      customClassInRichText: { shortcut: ["* c c c"], scope: ["user"] },
      allowCustomSiteHeader: { shortcut: C, scope: ["site"] },
      showFastlyAsEdgeIPs: { shortcut: C, scope: ["site"] },
      useNewBillingSystem: { shortcut: C, scope: ["user"] },
      useUserTaxCollection: { shortcut: C, scope: ["user"] },
      useTeamTaxCollection: { shortcut: C, scope: ["workspace"] },
      auditCorruptedCheckout: { shortcut: ["* a e c o m"], scope: ["user"] },
      auditLazyImage: { shortcut: ["* a l a z y"], scope: ["user"] },
      lab: { shortcut: ["* l a b"], scope: ["user"] },
      logicFlowsV2: { shortcut: C, scope: ["user"] },
      logicDev: { shortcut: C, scope: ["user"] },
      logicEventTriggers: { shortcut: C, scope: ["site"] },
      disableWorkspaceAnnotationEmailNotifications: {
        shortcut: C,
        scope: ["workspace"],
      },
      hasEnterpriseSite: { shortcut: C, scope: ["workspace"] },
      isEnterprisePartner: { shortcut: C, scope: ["workspace"] },
      isEnterprise: { shortcut: C, scope: ["workspace"] },
      isEnterprisePro: { shortcut: C, scope: ["workspace"] },
      isEnterpriseLite: { shortcut: C, scope: ["workspace"] },
      isEnterpriseSite: { shortcut: C, scope: ["site"] },
      disableWorkspaceReviewEmailNotifications: {
        shortcut: C,
        scope: ["workspace"],
      },
      enableUnlimitedWorkspaceLibraries: { shortcut: C, scope: ["workspace"] },
      isEnterpriseLiteSite: { shortcut: C, scope: ["site"] },
      enterpriseCustomSslCert: { shortcut: C, scope: ["site"] },
      pageBuilderRole: { shortcut: C, scope: ["workspace"] },
      testSiteBeta: { shortcut: ["* t s"], scope: ["site"] },
      testWorkspaceBeta: { shortcut: C, scope: ["workspace"] },
      testUserAndWorkspaceBeta: { shortcut: C, scope: ["user", "workspace"] },
      dl: { shortcut: C, scope: ["user", "workspace"], open: !0 },
      rolesNWorkspaces: { shortcut: C, scope: ["user"] },
      reactQueryDevtools: { shortcut: C, scope: ["user"] },
      auditInputLabels: { shortcut: ["* l a b e l"], scope: ["user"] },
      auditFocusStyles: { shortcut: ["* f o c u s"], scope: ["user"] },
      dns01CertValidation: { shortcut: C, scope: ["site"] },
      enableReactDashboard: { shortcut: C, scope: ["user"] },
      focusWithin: { shortcut: ["* w i t h i n"], scope: ["user"] },
      trialSubscription: { shortcut: C, scope: ["site"] },
      pluginComponents: { shortcut: C, scope: ["site"] },
      thirdPartyLibrariesAuthoring: { shortcut: C, scope: ["site"] },
      localization: { shortcut: C, scope: ["site"] },
      localizationCanPublishLocales: { shortcut: C, scope: ["site"] },
      jank: { shortcut: ["* j a n k"], scope: ["user"] },
      aiHelpFollowUps: { shortcut: C, scope: ["workspace"] },
      enterpriseSiteActivityLogBeta: { shortcut: C, scope: ["workspace"] },
      marketplacePaymentsCreator: { shortcut: C, scope: ["workspace"] },
      disableBS: { shortcut: ["* d b s"], scope: ["user"] },
      optimize: { shortcut: C, scope: ["site"] },
      optimizeStandalone: { shortcut: C, scope: ["workspace"] },
      analyze: { shortcut: C, scope: ["site"] },
      testUserBeta: { shortcut: C, scope: ["user"] },
      testUserBeta2: { shortcut: C, scope: ["user"] },
      testOAuthAppBeta: { shortcut: C, scope: ["oauthApplication"] },
    },
    kf = (n) => Ye[n];
  function Lf(n) {
    return n in Ye;
  }
  var Nf = {
    addBetaFlag: function (e, t) {
      Ye[e] = t;
    },
    removeBetaFlag: function (e) {
      delete Ye[e];
    },
  };
});
var wi = O((mr) => {
  "use strict";
  Object.defineProperty(mr, "__esModule", { value: !0 });
  function Ff(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Ff(mr, {
    createConstantsStore: function () {
      return Df;
    },
    selectAppName: function () {
      return Vf;
    },
    selectReadOnly: function () {
      return Bf;
    },
  });
  var Df = (n) => {
      function e() {
        return n;
      }
      return { initialState: n, reducer: e };
    },
    Vf = (n) => n.ConstantsStore.appName,
    Bf = (n) => n.ConstantsStore.readOnly;
});
var Oi = O((yr) => {
  "use strict";
  Object.defineProperty(yr, "__esModule", { value: !0 });
  Object.defineProperty(yr, "WebflowEnvironments", {
    enumerable: !0,
    get: function () {
      return jf;
    },
  });
  var jf = Object.freeze({
    DESIGNER: "designer",
    SSR: "ssr",
    EXPORT: "export",
    LLM: "llm",
  });
});
var _i = O((Ai) => {
  "use strict";
  Object.defineProperty(Ai, "__esModule", { value: !0 });
});
var Ri = O((vr) => {
  "use strict";
  Object.defineProperty(vr, "__esModule", { value: !0 });
  Object.defineProperty(vr, "TARGET_AI_SITE_GEN_LIBRARY_SLUG", {
    enumerable: !0,
    get: function () {
      return Gf;
    },
  });
  var Gf = "ai-gen-82921b10-4b39-48f0-b346-808cf4903d29";
});
var xi = O((Tr) => {
  "use strict";
  Object.defineProperty(Tr, "__esModule", { value: !0 });
  function Uf(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Uf(Tr, {
    instPathKey: function () {
      return Mi;
    },
    instPathSetKey: function () {
      return qf;
    },
    parseInstPathKey: function () {
      return Ci;
    },
    parseInstPathSetKey: function () {
      return Hf;
    },
    readInstPath: function () {
      return Ii;
    },
    readInstPathsFromTriggers: function () {
      return $f;
    },
  });
  function Ii(n) {
    if (!Array.isArray(n)) return null;
    let e = Array.isArray(n[0]) ? n[0] : n;
    if (!Array.isArray(e)) return null;
    let [t, r] = e;
    return typeof t == "string" && t !== "" && typeof r == "string" && r !== ""
      ? [t, r]
      : null;
  }
  function $f(n, e, t) {
    let r = [];
    for (let o of n ?? []) {
      if (o[0] !== e) continue;
      let s = o[2];
      if (!Array.isArray(s) || s[0] !== t) continue;
      let i = Ii(s[1]);
      i && r.push(i);
    }
    return r;
  }
  function Mi(n, e) {
    return `${n} ${e}`;
  }
  function Ci(n) {
    let e = n.split(" ");
    return e.length === 2 && e[0] && e[1] ? [e[0], e[1]] : null;
  }
  var Pi = "|";
  function qf(n) {
    return n.map(([e, t]) => Mi(e, t)).join(Pi);
  }
  function Hf(n) {
    if (n === "") return [];
    let e = [];
    for (let t of n.split(Pi)) {
      let r = Ci(t);
      if (!r) return null;
      e.push(r);
    }
    return e;
  }
});
var ki = O((br) => {
  "use strict";
  Object.defineProperty(br, "__esModule", { value: !0 });
  function zf(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  zf(br, {
    POPOVER_ANIMATED_ATTRIBUTE: function () {
      return Jf;
    },
    POPOVER_ANIMATION_CLOSE_COMMAND: function () {
      return rd;
    },
    POPOVER_ANIMATION_OPEN_COMMAND: function () {
      return nd;
    },
    POPOVER_BACKDROP_ANIMATED_ATTRIBUTE: function () {
      return Kf;
    },
    POPOVER_BACKDROP_ANIMATION_PROPERTY: function () {
      return Yf;
    },
    POPOVER_BACKDROP_KEYFRAMES_PREFIX: function () {
      return Xf;
    },
    POPOVER_CLASS: function () {
      return Wf;
    },
    POPOVER_COMMAND_EVENT: function () {
      return td;
    },
    POPOVER_MASK_CLASS: function () {
      return Qf;
    },
    POPOVER_MASK_FOR_ATTRIBUTE: function () {
      return Zf;
    },
    POPOVER_MODE_ATTRIBUTE: function () {
      return ed;
    },
  });
  var Wf = "w-popover",
    Yf = "--w-backdrop-animation",
    Kf = "data-w-popover-backdrop-animated",
    Xf = "w-bd-",
    Qf = "w-popover-mask",
    Zf = "data-w-popover-mask-for",
    Jf = "data-w-popover-animated",
    ed = "data-w-popover-mode",
    td = "webflow:popover-command",
    nd = "animation-open",
    rd = "animation-close";
});
var Li = O((Er) => {
  "use strict";
  Object.defineProperty(Er, "__esModule", { value: !0 });
  function od(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  od(Er, {
    MODAL_ANIMATED_ATTRIBUTE: function () {
      return cd;
    },
    MODAL_ANIMATION_CLOSE_COMMAND: function () {
      return fd;
    },
    MODAL_ANIMATION_OPEN_COMMAND: function () {
      return ud;
    },
    MODAL_CLASS: function () {
      return sd;
    },
    MODAL_COMMAND_EVENT: function () {
      return ld;
    },
    MODAL_LOCK_SCROLL_ATTRIBUTE: function () {
      return ad;
    },
    MODAL_TRIGGER_CLASS: function () {
      return id;
    },
  });
  var sd = "w-modal",
    id = "w-modal-trigger",
    ad = "data-w-modal-lock-scroll",
    cd = "data-w-modal-animated",
    ld = "webflow:modal-command",
    ud = "animation-open",
    fd = "animation-close";
});
var Ke = O((oe) => {
  "use strict";
  Object.defineProperty(oe, "__esModule", { value: !0 });
  de(Si(), oe);
  de(wi(), oe);
  de(Oi(), oe);
  de(_i(), oe);
  de(Ri(), oe);
  de(xi(), oe);
  de(ki(), oe);
  de(Li(), oe);
  function de(n, e) {
    return (
      Object.keys(n).forEach(function (t) {
        t !== "default" &&
          !Object.prototype.hasOwnProperty.call(e, t) &&
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return n[t];
            },
          });
      }),
      n
    );
  }
});
var _r = O((Ar) => {
  "use strict";
  Object.defineProperty(Ar, "__esModule", { value: !0 });
  function dd(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  dd(Ar, {
    COMPONENT_INSTANCE_TRIGGER_KEYS: function () {
      return Di;
    },
    COMPONENT_TIMELINE_ROLES: function () {
      return Fd;
    },
    DEFAULT_DURATION_TRIGGER_MODE: function () {
      return Td;
    },
    DEFAULT_DURATION_TRIGGER_SECONDS: function () {
      return bd;
    },
    DEFAULT_MOUSE_FOLLOW_ANCHOR: function () {
      return md;
    },
    DEFAULT_MOUSE_MOVE_INTERVAL_DISTANCE: function () {
      return yd;
    },
    DURATION_TRIGGER_MODES: function () {
      return vd;
    },
    DURATION_TRIGGER_SECONDS_RANGE: function () {
      return Or;
    },
    HOVER_TIMELINE_ROLES: function () {
      return Vd;
    },
    INST_PATH_TARGET_KEYS: function () {
      return Fi;
    },
    IX3_MODAL_STATE_EVENT: function () {
      return wd;
    },
    IX3_POPOVER_STATE_EVENT: function () {
      return Sd;
    },
    IX3_WF_EXTENSION_KEYS: function () {
      return Sr;
    },
    MODAL_ANIMATED_ATTRIBUTE: function () {
      return Ni.MODAL_ANIMATED_ATTRIBUTE;
    },
    MODAL_TIMELINE_ROLES: function () {
      return Dd;
    },
    MOUSE_MOVE_CHANNELS: function () {
      return Ld;
    },
    MOUSE_MOVE_TIMELINE_ROLES: function () {
      return _d;
    },
    POPOVER_ANIMATED_ATTRIBUTE: function () {
      return Ni.POPOVER_ANIMATED_ATTRIBUTE;
    },
    POPOVER_TIMELINE_ROLES: function () {
      return Bi;
    },
    TIMELINE_ROLE_NAMES: function () {
      return j;
    },
    TargetScope: function () {
      return wr;
    },
    VELOCITY_CAPABLE_PROPS: function () {
      return Vi;
    },
    canUseVelocityInfluenceProperty: function () {
      return Id;
    },
    getEffectiveFollowMode: function () {
      return hd;
    },
    getMouseFollowConfig: function () {
      return pd;
    },
    getMouseMoveTimelineContext: function () {
      return Tt;
    },
    getOppositeMouseFollowAxis: function () {
      return Pd;
    },
    getSingleAxisMouseFollowMode: function () {
      return gd;
    },
    isComponentInstanceTriggerKey: function () {
      return Ad;
    },
    isInstPathTargetKey: function () {
      return Od;
    },
    isMouseMoveIntervalRole: function () {
      return Md;
    },
    isVelocityInfluenceEnabled: function () {
      return Rd;
    },
    minimumDurationSeconds: function () {
      return Ed;
    },
    mouseFollowAxisToRole: function () {
      return xd;
    },
    mouseFollowRoleToAxis: function () {
      return Cd;
    },
    mouseFollowRoleToSiblingRole: function () {
      return kd;
    },
    narrowMouseMoveIntervalPayload: function () {
      return Nd;
    },
  });
  var Ni = Ke(),
    Sr;
  (function (n) {
    (n.CLASS = "wf:class"),
      (n.BODY = "wf:body"),
      (n.ID = "wf:id"),
      (n.TRIGGER_ONLY = "wf:trigger-only"),
      (n.TRIGGER_ONLY_PARENT = "wf:trigger-only-parent"),
      (n.SELECTOR = "wf:selector"),
      (n.ATTRIBUTE = "wf:attribute"),
      (n.INST = "wf:inst"),
      (n.ANY_ELEMENT = "wf:any-element"),
      (n.VIEWPORT = "wf:viewport"),
      (n.POPOVER_ELEMENT = "wf:popover-element"),
      (n.POPOVER_BACKDROP = "wf:popover-backdrop"),
      (n.MODAL_ELEMENT = "wf:modal-element"),
      (n.MODAL_BACKDROP = "wf:modal-backdrop"),
      (n.STYLE = "wf:style"),
      (n.TRANSFORM = "wf:transform"),
      (n.CUSTOM_PROPERTY = "wf:custom-property"),
      (n.LOTTIE = "wf:lottie"),
      (n.SPLINE = "wf:spline"),
      (n.VARIABLE = "wf:variable"),
      (n.RIVE = "wf:rive"),
      (n.ANIMATE_RIVE = "wf:animate-rive"),
      (n.MOUSE_FOLLOW = "wf:mouse-follow"),
      (n.CLICK = "wf:click"),
      (n.HOVER = "wf:hover"),
      (n.LOAD = "wf:load"),
      (n.FOCUS = "wf:focus"),
      (n.BLUR = "wf:blur"),
      (n.SCROLL = "wf:scroll"),
      (n.SCROLL_SCRUB = "wf:scroll-scrub"),
      (n.SCROLL_ACTIONS = "wf:scroll-actions"),
      (n.SCROLL_DIRECTION = "wf:scroll-direction"),
      (n.CUSTOM = "wf:custom"),
      (n.CHANGE = "wf:change"),
      (n.MOUSE_MOVE = "wf:mouse-move"),
      (n.NAVBAR = "wf:navbar"),
      (n.DROPDOWN = "wf:dropdown"),
      (n.POPOVER = "wf:popover"),
      (n.MODAL = "wf:modal"),
      (n.EXIT_INTENT = "wf:exit-intent"),
      (n.DURATION = "wf:duration"),
      (n.PREFERS_REDUCED_MOTION = "wf:prefersReducedMotion"),
      (n.WEBFLOW_BREAKPOINTS = "wf:webflowBreakpoints"),
      (n.CUSTOM_MEDIA_QUERY = "wf:customMediaQuery"),
      (n.COLOR_SCHEME = "wf:colorScheme"),
      (n.ELEMENT_DATA_ATTRIBUTE = "wf:elementDataAttribute"),
      (n.CURRENT_TIME = "wf:currentTime"),
      (n.ELEMENT_STATE = "wf:elementState");
  })(Sr || (Sr = {}));
  var wr;
  (function (n) {
    (n.ALL = "all"),
      (n.PARENT = "parent"),
      (n.CHILDREN = "children"),
      (n.SIBLINGS = "siblings"),
      (n.NEXT = "next"),
      (n.PREVIOUS = "previous"),
      (n.FIRST_ANCESTOR = "first-ancestor"),
      (n.FIRST_DESCENDANT = "first-descendant"),
      (n.DESCENDANTS = "descendants"),
      (n.ANCESTORS = "ancestors");
  })(wr || (wr = {}));
  function pd(n) {
    let e = n?.properties?.["wf:mouse-follow"];
    if (!(typeof e != "object" || e === null || Array.isArray(e))) return e;
  }
  function hd(n) {
    return n?.followMode ?? "full";
  }
  function gd(n) {
    return n === "x" ? "x-only" : "y-only";
  }
  var md = "50% 50%",
    yd = 100,
    vd = ["idle", "timeOnSite"],
    Td = "timeOnSite",
    bd = 5,
    Or = { min: 0, max: 3600 },
    Ed = (n) => (n === "idle" ? Math.max(1, Or.min) : Or.min),
    Sd = "webflow:popover-state",
    wd = "webflow:modal-state",
    Fi = [
      "wf:inst",
      "wf:popover-element",
      "wf:popover-backdrop",
      "wf:modal-element",
      "wf:modal-backdrop",
    ];
  function Od(n) {
    return Fi.includes(n);
  }
  var Di = ["wf:popover", "wf:modal"];
  function Ad(n) {
    return Di.includes(n);
  }
  var j = {
    MOUSE_X: "mouseX",
    MOUSE_Y: "mouseY",
    INTERVAL: "interval",
    OPEN: "open",
    CLOSE: "close",
    MOUSE_ENTER: "mouseEnter",
    MOUSE_LEAVE: "mouseLeave",
  };
  function Tt(n) {
    return n === j.MOUSE_X
      ? { kind: "mouse-x", role: n, axis: "x", siblingRole: j.MOUSE_Y }
      : n === j.MOUSE_Y
      ? { kind: "mouse-y", role: n, axis: "y", siblingRole: j.MOUSE_X }
      : n === j.INTERVAL
      ? { kind: "interval", role: n }
      : { kind: "other", role: n ?? void 0 };
  }
  var _d = {
      MOUSE_X: { role: j.MOUSE_X, label: "Mouse X", usePercentCanvas: !0 },
      MOUSE_Y: { role: j.MOUSE_Y, label: "Mouse Y", usePercentCanvas: !0 },
      INTERVAL: { role: j.INTERVAL, label: "Interval" },
    },
    Vi = new Set([
      "x",
      "y",
      "scale",
      "scaleX",
      "scaleY",
      "rotation",
      "skewX",
      "skewY",
      "opacity",
    ]);
  function Rd(n) {
    return (
      n?.pluginConfig?.type === "mouseMove" &&
      !!n.pluginConfig.velocityInfluence
    );
  }
  function Id(n) {
    return Vi.has(n);
  }
  function Md(n) {
    return Tt(n).kind === "interval";
  }
  function Cd(n) {
    let e = Tt(n);
    return e.kind === "mouse-x" || e.kind === "mouse-y" ? e.axis : null;
  }
  function Pd(n) {
    return n === "x" ? "y" : "x";
  }
  function xd(n) {
    return n === "x" ? j.MOUSE_X : j.MOUSE_Y;
  }
  function kd(n) {
    let e = Tt(n);
    return e.kind === "mouse-x" || e.kind === "mouse-y" ? e.siblingRole : null;
  }
  var Ld = { POSITION: "wf:mouse-move:position", LEAVE: "wf:mouse-move:leave" };
  function Nd(n) {
    if (typeof n != "object" || n === null) return {};
    let e = n,
      t = {},
      r = e.cursorPos;
    return (
      typeof r == "object" &&
        r !== null &&
        typeof r.x == "number" &&
        typeof r.y == "number" &&
        (t.cursorPos = { x: r.x, y: r.y }),
      typeof e.velocityFactor == "number" &&
        (t.velocityFactor = e.velocityFactor),
      typeof e.dirX == "number" && (t.dirX = e.dirX),
      typeof e.dirY == "number" && (t.dirY = e.dirY),
      t
    );
  }
  var Fd = {
      OPEN: {
        role: j.OPEN,
        label: "Open",
        allowedControls: ["play", "restart"],
        defaultControl: "play",
      },
      CLOSE: {
        role: j.CLOSE,
        label: "Close",
        allowedControls: ["play", "restart", "reverse", "reverseFlipEase"],
        allowedControlsWhenReusing: ["reverse", "reverseFlipEase"],
        defaultControl: "play",
        defaultControlWhenReusing: "reverseFlipEase",
        autoReusesRole: j.OPEN,
      },
    },
    Bi = {
      OPEN: {
        role: j.OPEN,
        label: "Open actions",
        allowedControls: ["restart"],
        defaultControl: "restart",
      },
      CLOSE: {
        role: j.CLOSE,
        label: "Close actions",
        allowedControls: ["restart"],
        defaultControl: "restart",
      },
    },
    Dd = Bi,
    Vd = {
      MOUSE_ENTER: {
        role: j.MOUSE_ENTER,
        label: "Hover in actions",
        allowedControls: ["play", "restart"],
        defaultControl: "play",
      },
      MOUSE_LEAVE: {
        role: j.MOUSE_LEAVE,
        label: "Hover out actions",
        allowedControls: ["play", "restart", "reverse", "reverseFlipEase"],
        defaultControl: "play",
      },
    };
});
var qi = O((Mr) => {
  "use strict";
  Object.defineProperty(Mr, "__esModule", { value: !0 });
  function Bd(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Bd(Mr, {
    createLoadedMouseFollowActionNormalizer: function () {
      return Wd;
    },
    forTestSuite: function () {
      return Yd;
    },
    getGroupedMouseFollowConfig: function () {
      return Ir;
    },
    getUnpairedMouseFollowAction: function () {
      return Ud;
    },
    getUnpairedMouseFollowConfig: function () {
      return ji;
    },
    remapMouseFollowActionGroupsInTimelines: function () {
      return zd;
    },
    setGroupedMouseFollowActionConfig: function () {
      return Gd;
    },
    setMouseFollowActionConfig: function () {
      return Gi;
    },
    stripMouseFollowActionInstanceIds: function () {
      return $d;
    },
    stripMouseFollowConfigInstanceIds: function () {
      return Rr;
    },
  });
  var bt = _r();
  function Rr(n) {
    let { groupId: e, syncedActionId: t, ...r } = n;
    return r;
  }
  function jd(n, e) {
    return { ...Rr(n), groupId: e };
  }
  function Ir(n, e, t) {
    let r = jd(n, e);
    return (
      t?.axis !== void 0 && (r.axis = t.axis),
      t?.followMode !== void 0 && (r.followMode = t.followMode),
      r
    );
  }
  function ji(n, e = n.axis) {
    let { syncedActionId: t, ...r } = n,
      o =
        r.followMode === "full" && e
          ? (0, bt.getSingleAxisMouseFollowMode)(e)
          : r.followMode;
    return { ...r, ...(o !== void 0 ? { followMode: o } : {}) };
  }
  function Et(n, e) {
    let t = (0, bt.getMouseFollowConfig)(n);
    if (!t) return n;
    let r = e(t);
    return r === t
      ? n
      : {
          ...n,
          properties: {
            ...n.properties,
            [bt.IX3_WF_EXTENSION_KEYS.MOUSE_FOLLOW]: r,
          },
        };
  }
  function Gi(n, e) {
    return {
      ...n,
      properties: {
        ...n.properties,
        [bt.IX3_WF_EXTENSION_KEYS.MOUSE_FOLLOW]: e,
      },
    };
  }
  function Gd(n, e, t, r) {
    return Gi(n, Ir(e, t, r));
  }
  function Ud(n, e) {
    return Et(n, (t) => ji(t, e));
  }
  function $d(n) {
    return Et(n, Rr);
  }
  function qd(n, e, t) {
    return t[e] ? [n, e].sort().join(":") : `single:${n}`;
  }
  function Hd(n, e, t) {
    return (
      e.groupId ??
      (e.syncedActionId ? qd(n, e.syncedActionId, t) : `single:${n}`)
    );
  }
  function Ui(n, e) {
    let t = {};
    return (r, o = r.id) =>
      Et(r, (s) => {
        let i = Hd(o, s, e),
          a = t[i] ?? n(i);
        return (t[i] = a), Ir(s, a);
      });
  }
  function $i(n, e, t) {
    let r = t ?? Object.fromEntries(n.map((s) => [s.id, s.id])),
      o = Ui(() => e(), r);
    return (s, i) => o(s, i ?? s.id);
  }
  function zd(
    n,
    { generateGroupId: e, actionIdMap: t, mapAction: r = (o) => o }
  ) {
    let o = $i(
      n.flatMap((s) => s.actions ?? []),
      e,
      t
    );
    return n.map((s) => {
      let i = !1,
        a = s.actions?.map((c) => {
          let l = c.id,
            u = r(c),
            f = o(u, l);
          return (i = i || f !== c), f;
        });
      return i && a ? { ...s, actions: a } : s;
    });
  }
  function Wd(n) {
    let e = Object.fromEntries(n.map((r) => [r.id, r.id])),
      t = Ui((r) => r, e);
    return (r, o) => {
      let s = t(r);
      return o ? Et(s, (i) => (i.axis ? i : { ...i, axis: o })) : s;
    };
  }
  var Yd = { createMouseFollowActionGroupRemapper: $i };
});
var zi = O((Cr) => {
  "use strict";
  Object.defineProperty(Cr, "__esModule", { value: !0 });
  function Kd(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Kd(Cr, {
    TRANSIENT_IX3_CLONE_ATTR: function () {
      return Hi;
    },
    isTransientIX3Clone: function () {
      return Xd;
    },
  });
  var Hi = "data-ix3-clone",
    Xd = (n) => !!n.closest?.(`[${Hi}]`);
});
var ee = O((Pe) => {
  "use strict";
  Object.defineProperty(Pe, "__esModule", { value: !0 });
  Object.defineProperty(Pe, "CORE_PLUGIN_INFO", {
    enumerable: !0,
    get: function () {
      return Qd;
    },
  });
  Pr(_r(), Pe);
  Pr(qi(), Pe);
  Pr(zi(), Pe);
  function Pr(n, e) {
    return (
      Object.keys(n).forEach(function (t) {
        t !== "default" &&
          !Object.prototype.hasOwnProperty.call(e, t) &&
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return n[t];
            },
          });
      }),
      n
    );
  }
  var Qd = { namespace: "wf", pluginId: "core", version: "1.0.0" };
});
var Xe = O((kr) => {
  "use strict";
  Object.defineProperty(kr, "__esModule", { value: !0 });
  function Zd(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Zd(kr, {
    getScrollY: function () {
      return tp;
    },
    initScrollCache: function () {
      return ep;
    },
    noop: function () {
      return Jd;
    },
  });
  var Jd = () => {},
    xr = 0,
    St = 0,
    xe = null;
  function ep() {
    (St += 1),
      xe ||
        ((xe = () => {
          xr = window.scrollY;
        }),
        (xr = window.scrollY),
        window.addEventListener("scroll", xe, { passive: !0 }));
    let n = !1;
    return () => {
      n ||
        ((n = !0),
        (St = Math.max(0, St - 1)),
        St === 0 &&
          xe &&
          (window.removeEventListener("scroll", xe), (xe = null)));
    };
  }
  function tp() {
    return xr;
  }
});
var Wi = O((Lr) => {
  "use strict";
  Object.defineProperty(Lr, "__esModule", { value: !0 });
  function np(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  np(Lr, {
    getFirst: function () {
      return rp;
    },
    getSecond: function () {
      return op;
    },
    pair: function () {
      return sp;
    },
  });
  var rp = (n) => n[0],
    op = (n) => n[1],
    sp = (n, e) => [n, e];
});
var wt = O((Nr) => {
  "use strict";
  Object.defineProperty(Nr, "__esModule", { value: !0 });
  function ip(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  ip(Nr, {
    TRANSIENT_IX3_CLONE_ATTR: function () {
      return Yi.TRANSIENT_IX3_CLONE_ATTR;
    },
    isTransientIX3Clone: function () {
      return Yi.isTransientIX3Clone;
    },
  });
  var Yi = ee();
});
var Dr = O((Fr) => {
  "use strict";
  Object.defineProperty(Fr, "__esModule", { value: !0 });
  function ap(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  ap(Fr, {
    elementTargetSelector: function () {
      return pp;
    },
    safeClosest: function () {
      return fp;
    },
    safeGetElementById: function () {
      return cp;
    },
    safeMatches: function () {
      return dp;
    },
    safeQuerySelector: function () {
      return up;
    },
    safeQuerySelectorAll: function () {
      return lp;
    },
  });
  var Ot = wt(),
    cp = (n) => {
      try {
        let e = document.getElementById(n);
        return e && !(0, Ot.isTransientIX3Clone)(e) ? e : null;
      } catch {
        return null;
      }
    },
    lp = (n, e) => {
      try {
        let t = e.querySelectorAll(n);
        if (t.length === 0) return [];
        let r = [];
        for (let o of t) (0, Ot.isTransientIX3Clone)(o) || r.push(o);
        return r;
      } catch {
        return null;
      }
    },
    up = (n, e) => {
      try {
        let t = e.querySelector(n);
        if (!t) return null;
        if (!(0, Ot.isTransientIX3Clone)(t)) return t;
        let r = e.querySelectorAll(n);
        for (let o of r) if (!(0, Ot.isTransientIX3Clone)(o)) return o;
        return null;
      } catch {
        return null;
      }
    },
    fp = (n, e) => {
      try {
        return n.closest(e);
      } catch {
        return null;
      }
    },
    dp = (n, e) => {
      try {
        return n.matches(e);
      } catch {
        return null;
      }
    },
    pp = (n) => `[data-wf-target*="${CSS.escape(`[${JSON.stringify(n)}`)}"]`;
});
var Ki = O((Vr) => {
  "use strict";
  Object.defineProperty(Vr, "__esModule", { value: !0 });
  Object.defineProperty(Vr, "applyScope", {
    enumerable: !0,
    get: function () {
      return gp;
    },
  });
  var le = ee(),
    At = Dr(),
    hp = wt(),
    se = (n) => n.filter((e) => !(0, hp.isTransientIX3Clone)(e)),
    gp = (n, e) => {
      let t = se(n);
      if (!e) return t;
      if (Array.isArray(e)) {
        let [r, o] = e,
          s = [];
        switch (r) {
          case le.TargetScope.FIRST_ANCESTOR:
            for (let i of t) {
              let a = o ? (0, At.safeClosest)(i, o) : null;
              a && s.push(a);
            }
            return se(s);
          case le.TargetScope.FIRST_DESCENDANT:
            for (let i of t) {
              let a = o ? (0, At.safeQuerySelector)(o, i) : i.firstElementChild;
              a && s.push(a);
            }
            return se(s);
          case le.TargetScope.DESCENDANTS:
            for (let i of t)
              s.push(...((0, At.safeQuerySelectorAll)(o, i) || []));
            return se(s);
          case le.TargetScope.ANCESTORS:
            for (let i of t) {
              let a = i.parentElement;
              for (; a; )
                (!o || (0, At.safeMatches)(a, o)) && s.push(a),
                  (a = a.parentElement);
            }
            return se(s);
        }
      }
      switch (e) {
        case le.TargetScope.CHILDREN:
          return se(t.flatMap((r) => [...r.children]));
        case le.TargetScope.PARENT:
          return se(t.map((r) => r.parentElement).filter(Boolean));
        case le.TargetScope.SIBLINGS:
          return se(
            t.flatMap((r) =>
              r.parentElement
                ? [...r.parentElement.children].filter((o) => o !== r)
                : []
            )
          );
        case le.TargetScope.NEXT:
          return se(t.flatMap((r) => r.nextElementSibling || []));
        case le.TargetScope.PREVIOUS:
          return se(t.flatMap((r) => r.previousElementSibling || []));
        default:
          return t;
      }
    };
});
var ea = O(($r) => {
  "use strict";
  Object.defineProperty($r, "__esModule", { value: !0 });
  function mp(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  mp($r, {
    backdropDeclarations: function () {
      return Ur;
    },
    buildBackdropTween: function () {
      return Ji;
    },
    buildModalBackdropTween: function () {
      return wp;
    },
  });
  var Qe = Y(),
    Br = ee(),
    pe = Ke(),
    Ze = null,
    yp = 0,
    Gr = new WeakMap(),
    Xi = /random\(|[+\-*/]=|\/\*|[;{}]/,
    ke = (n, e) => (typeof n == "number" ? n + e : n),
    Qi = { rotation: "", rotationZ: "", rotationX: "x ", rotationY: "y " };
  function Ur(n) {
    let e = "",
      t = [[], [], []],
      r = [],
      o = [],
      s,
      i,
      a;
    for (let l in n) {
      let u = n[l];
      if (
        (typeof u != "number" && typeof u != "string") ||
        (typeof u == "string" && Xi.test(u))
      )
        continue;
      let f = l[0] === "y" ? 1 : l[0] === "z" ? 2 : 0;
      if (l === "x" || l === "y" || l === "z") t[f].push(ke(u, "px"));
      else if (l === "xPercent" || l === "yPercent") t[f].push(ke(u, "%"));
      else if (l === "scale") r[2] = u;
      else if (l === "scaleX" || l === "scaleY") r[l === "scaleY" ? 1 : 0] = u;
      else if (l === "skewX" || l === "skewY")
        o[l === "skewY" ? 1 : 0] = ke(u, "deg");
      else if (l === "transformPerspective") s = ke(u, "px");
      else if (Object.prototype.hasOwnProperty.call(Qi, l))
        a ??= { axis: Qi[l], angle: ke(u, "deg") };
      else if (l === "width" || l === "height") e += `${l}:${ke(u, "px")};`;
      else {
        let d =
          l === "autoAlpha"
            ? "opacity"
            : l.replace(/[A-Z]/g, (p) => "-" + p.toLowerCase());
        if (Xi.test(d)) continue;
        e += `${d}:${u};`;
      }
    }
    if (t.some((l) => l.length)) {
      let l = t.map((d) =>
          d.length > 1 ? `calc(${d.join(" + ")})` : d[0] ?? "0"
        ),
        u = t[2].length > 0,
        f = (u ? l : l.slice(0, 2)).join(" ");
      u && s ? (i = `translate3d(${l.join(", ")})`) : (e += `translate:${f};`);
    }
    r.length && (e += `scale:${r[0] ?? r[2] ?? 1} ${r[1] ?? r[2] ?? 1};`),
      a && !s && (e += `rotate:${a.axis}${a.angle};`);
    let c = [
      s && `perspective(${s})`,
      i,
      s && a && `rotate${a.axis.trim().toUpperCase()}(${a.angle})`,
      o.length && `skew(${o[0] ?? 0}, ${o[1] ?? 0})`,
    ]
      .filter(Boolean)
      .join(" ");
    return c && (e += `transform:${c};`), e;
  }
  function vp() {
    return (
      Ze?.isConnected ||
        ((Ze = document.createElement("style")), document.head.appendChild(Ze)),
      Ze.sheet
    );
  }
  function Tp(n) {
    let e = Ze?.sheet;
    if (e)
      for (let t = e.cssRules.length - 1; t >= 0; t--)
        e.cssRules[t].name === n && e.deleteRule(t);
  }
  function bp(n, e, t) {
    let r = vp();
    if (!r) return !1;
    let o = `@keyframes ${n}{${e ? `from{${e}}` : ""}${t ? `to{${t}}` : ""}}`;
    try {
      r.insertRule(o, r.cssRules.length);
    } catch {
      return !1;
    }
    return !0;
  }
  var Ep = (n) => `${n} 1s linear calc(var(--${n}, 1) * -1s) both paused`;
  function Zi(n, e) {
    e.length
      ? (n.style.setProperty(
          pe.POPOVER_BACKDROP_ANIMATION_PROPERTY,
          e.map(Ep).join(", ")
        ),
        n.setAttribute(pe.POPOVER_BACKDROP_ANIMATED_ATTRIBUTE, ""))
      : (n.style.removeProperty(pe.POPOVER_BACKDROP_ANIMATION_PROPERTY),
        n.removeAttribute(pe.POPOVER_BACKDROP_ANIMATED_ATTRIBUTE));
  }
  function Sp(n, e, t) {
    let r = Gr.get(n);
    r || Gr.set(n, (r = []));
    let o = r.indexOf(e);
    if (o !== -1) {
      if (!t || o === r.length - 1) return;
      r.splice(o, 1);
    }
    r.push(e), Zi(n, r);
  }
  function jr(n, e) {
    let t = Gr.get(n),
      r = t ? t.indexOf(e) : -1;
    !t || r === -1 || (t.splice(r, 1), Zi(n, t));
  }
  function Ji(
    { timeline: n, tweenType: e, config: t, vars: r, targets: o, position: s },
    i = !1
  ) {
    let a =
        e === Qe.TweenType.From || e === Qe.TweenType.FromTo ? Ur(t.from) : "",
      c = e === Qe.TweenType.From ? "" : Ur(t.to);
    if (!a && !c) return;
    let l = `${pe.POPOVER_BACKDROP_KEYFRAMES_PREFIX}${++yp}`;
    if (!bp(l, a, c)) return;
    let u = `--${l}`,
      f = (m) => {
        for (let w of o)
          w.style.getPropertyValue(u) || w.style.setProperty(u, "0"),
            Sp(w, l, m);
      },
      d = 0,
      p = !1,
      { force3D: h, ...g } = r,
      y = {
        ...g,
        onStart() {
          (p = !1), (d = this.progress?.() ?? d), f(!0);
        },
        onUpdate() {
          let m = this.progress?.() ?? d,
            w = m !== d && p !== m < d;
          m !== d && (p = m < d), (d = m), f(w || e === Qe.TweenType.Set);
        },
      };
    e === Qe.TweenType.Set
      ? n.set(o, { ...y, [u]: 1 }, s)
      : n.fromTo(o, { [u]: 0 }, { ...y, [u]: 1 }, s);
    let S = (m) => {
        m.newState === "open" && jr(m.currentTarget, l);
      },
      b = (m) => {
        let w = m.detail;
        (w?.state !== Br.TIMELINE_ROLE_NAMES.OPEN &&
          w?.type !== pe.MODAL_ANIMATION_OPEN_COMMAND) ||
          jr(m.currentTarget, l);
      };
    for (let m of o)
      m.addEventListener("beforetoggle", S),
        i &&
          (m.addEventListener(Br.IX3_MODAL_STATE_EVENT, b),
          m.addEventListener(pe.MODAL_COMMAND_EVENT, b));
    return () => {
      for (let m of o)
        m.removeEventListener("beforetoggle", S),
          i &&
            (m.removeEventListener(Br.IX3_MODAL_STATE_EVENT, b),
            m.removeEventListener(pe.MODAL_COMMAND_EVENT, b)),
          jr(m, l),
          m.style.removeProperty(u);
      Tp(l);
    };
  }
  var wp = (n) => Ji(n, !0);
});
var Xr = O((Kr) => {
  "use strict";
  Object.defineProperty(Kr, "__esModule", { value: !0 });
  function Op(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Op(Kr, {
    build: function () {
      return _p;
    },
    modalFromTriggerElement: function () {
      return ca;
    },
    popoverFromTriggerElement: function () {
      return aa;
    },
    popoversByPath: function () {
      return Le;
    },
  });
  var ie = Wi(),
    Ne = ee(),
    G = Ke(),
    q = Dr(),
    he = Ki(),
    ta = ea();
  function aa(n, e) {
    if (!n) return null;
    let t = n.closest("." + G.POPOVER_MASK_CLASS);
    if (t) {
      let a = t.getAttribute(G.POPOVER_MASK_FOR_ATTRIBUTE),
        c = a ? (0, q.safeGetElementById)(a) : null;
      return c && e(c) ? c : null;
    }
    let o = n.closest("[popovertarget]")?.getAttribute("popovertarget"),
      s = o ? (0, q.safeGetElementById)(o) : null;
    if (s && e(s)) return s;
    let i = n.closest("." + G.POPOVER_CLASS);
    for (; i instanceof HTMLElement; ) {
      if (e(i)) return i;
      i = i.parentElement?.closest("." + G.POPOVER_CLASS) ?? null;
    }
    return null;
  }
  function ca(n, e) {
    if (!n) return null;
    let r = n.closest("[commandfor]")?.getAttribute("commandfor"),
      o = r ? (0, q.safeGetElementById)(r) : null;
    if (o?.classList.contains(G.MODAL_CLASS) && e(o)) return o;
    let s = n.closest("." + G.MODAL_CLASS);
    for (; s instanceof HTMLElement; ) {
      if (e(s)) return s;
      s = s.parentElement?.closest("." + G.MODAL_CLASS) ?? null;
    }
    return null;
  }
  var na = (n, e) =>
      (0, G.readInstPathsFromTriggers)(
        n?.triggers,
        e,
        Ne.IX3_WF_EXTENSION_KEYS.INST
      ),
    ra = {
      triggerKey: Ne.IX3_WF_EXTENSION_KEYS.POPOVER,
      fromTriggerElement: aa,
    },
    oa = { triggerKey: Ne.IX3_WF_EXTENSION_KEYS.MODAL, fromTriggerElement: ca };
  function Ap(n) {
    let e = [];
    for (let t of n?.triggers ?? []) {
      if (
        t[2]?.[0] !== Ne.IX3_WF_EXTENSION_KEYS.POPOVER_BACKDROP ||
        t[1]?.assignedGroupId === null
      )
        continue;
      let r = t[1]?.conditionalLogic;
      (!(r
        ? (r.ifTrue != null && r.ifTrue.control !== "none") ||
          (r.ifFalse != null && r.ifFalse.control !== "none")
        : t[1]?.control !== "none") &&
        (r != null || typeof t[1]?.assignedGroupId == "string")) ||
        e.push(t[1]?.assignedInstances);
    }
    return e;
  }
  var Je = new WeakMap(),
    zr = new Set();
  function Wr(n) {
    let e = n.nextElementSibling;
    return e instanceof HTMLElement &&
      e.classList.contains(G.POPOVER_MASK_CLASS) &&
      e.getAttribute(G.POPOVER_MASK_FOR_ATTRIBUTE) === n.id
      ? e
      : null;
  }
  function sa(n) {
    let e = document.createElement("div");
    return (
      (e.className = G.POPOVER_MASK_CLASS),
      e.setAttribute("popover", "manual"),
      e.setAttribute(G.POPOVER_MASK_FOR_ATTRIBUTE, n.id),
      e.setAttribute("aria-hidden", "true"),
      n.after(e),
      e
    );
  }
  function qr(n, e) {
    if (!n || !zr.has(n)) return;
    let t = (0, q.safeQuerySelectorAll)("." + G.POPOVER_MASK_CLASS, document);
    if (t?.length)
      for (let r of t) {
        let o = r.previousElementSibling;
        if (!(o instanceof HTMLElement) || Wr(o) !== r) {
          if (r.hasAttribute(G.POPOVER_MASK_FOR_ATTRIBUTE)) {
            let s = r.getAttribute(G.POPOVER_MASK_FOR_ATTRIBUTE),
              i = s ? (0, q.safeGetElementById)(s) : null;
            i && !Wr(i) && Je.get(i)?.clear(), r.remove();
          }
          continue;
        }
        e.indexOf(o) === -1 && Je.get(o)?.has(n) && la(o, n, !1);
      }
    (!e.length || !e.some((r) => Je.get(r)?.has(n))) && zr.delete(n);
  }
  function la(n, e, t) {
    let r = Wr(n);
    if (!e) return r ?? (t ? sa(n) : null);
    let o = Je.get(n) ?? new Set();
    return (
      Je.set(n, o),
      t ? (o.add(e), zr.add(e)) : o.delete(e),
      o.size > 0 ? r ?? sa(n) : (r?.remove(), null)
    );
  }
  function Le(n, e) {
    let t = (0, q.safeQuerySelectorAll)(
      (0, q.elementTargetSelector)((0, ie.pair)(n, e)),
      document
    );
    return t?.length ? [...t] : [];
  }
  var Yr = (n) => JSON.stringify(n === Ne.TargetScope.ALL ? null : n ?? null),
    Hr = (n) => !!n?.filterBy && n?.relationship !== "none",
    ia = (n) => `trigger-parent|${Yr(n)}`;
  function _p(n) {
    let e = [],
      t = (u) => {
        let f = new Set(),
          d = [];
        for (let [p, h] of u)
          for (let g of Le(p, h)) f.has(g) || (f.add(g), d.push(g));
        return d;
      },
      r = (u, f) =>
        f != null &&
        (0, q.safeMatches)(
          u,
          (0, q.elementTargetSelector)((0, ie.pair)(f[0], f[1]))
        ) === !0,
      o = (u, f) => u.some((d) => r(f, [d[0], d[1]])),
      s = (u, f, d, p, h, g) => {
        if (d || p || !h || h[0] === g || f.length <= 1) return null;
        let y = new Set(),
          S = [];
        for (let [b, m] of f) {
          let w = r(u, [b, m]) ? [u] : Le(b, m);
          for (let T of w) y.has(T) || (y.add(T), S.push(T));
        }
        return S;
      },
      i = (u, f, d, p, h, g) => {
        let y = na(d, g.triggerKey),
          S = (0, G.readInstPath)(u),
          b =
            S && (!y.length || y.some((T) => T[0] === S[0] && T[1] === S[1]))
              ? S
              : null,
          m = (p ?? h)?.[1]?.assignedInstances,
          w = g.fromTriggerElement(
            f,
            (T) => (!m || o(m, T)) && (r(T, b) || y.some((v) => r(T, v)))
          );
        return w
          ? s(w, y, m, p, h, g.triggerKey) ?? [w]
          : m
          ? (y.length ? t(y) : b ? Le(b[0], b[1]) : e).filter((v) => o(m, v))
          : !p && h && h[0] !== g.triggerKey && y.length
          ? t(y)
          : b
          ? Le(b[0], b[1])
          : t(y);
      },
      a = (u, f, d, p, h, g, y) => {
        let S = na(p, u.triggerKey),
          b = u.fromTriggerElement(
            d,
            (w) => (!h || o(h, w)) && S.some((T) => r(w, T))
          );
        if (b) return s(b, S, h, g, y, u.triggerKey) ?? [b];
        if (S.length) return t(S);
        let m = (0, G.readInstPath)(f);
        return m ? Le(m[0], m[1]) : e;
      },
      c = (u, f) => {
        let d = f?.scope;
        if (d?.type !== "component" || !d.componentId) return !0;
        let p = (0, q.safeClosest)(
          u.parentElement ?? u,
          `[data-wf-component-id="${CSS.escape(d.componentId)}"]`
        );
        if (!p) return !1;
        if (!d.variants?.length) return !0;
        let h = p.getAttribute("data-wf-variant-state");
        return h != null && d.variants.includes(h);
      };
    n.addTargetResolver("id", {
      resolve: ([, u]) => {
        let [f, d] = Array.isArray(u) ? u : [u],
          p = f ? (0, q.safeGetElementById)(f) : null;
        return p ? (0, he.applyScope)([p], d) : e;
      },
    })
      .addTargetResolver("trigger-only", {
        resolve: ([, u], { triggerElement: f }) =>
          f ? (0, he.applyScope)([f], Array.isArray(u) ? u[1] : void 0) : e,
        isDynamic: !0,
        instanceSharingKey: ([, u, f]) => {
          if (Hr(f)) return;
          let d = Array.isArray(u) ? u[1] : void 0;
          return d === Ne.TargetScope.PARENT ? ia(void 0) : `trigger|${Yr(d)}`;
        },
      })
      .addTargetResolver("trigger-only-parent", {
        resolve: ([, u], { triggerElement: f }) => {
          if (!f) return e;
          let d = f.parentElement;
          return d instanceof HTMLElement
            ? (0, he.applyScope)([d], Array.isArray(u) ? u[1] : void 0)
            : e;
        },
        isDynamic: !0,
        instanceSharingKey: ([, u, f]) =>
          Hr(f) ? void 0 : ia(Array.isArray(u) ? u[1] : void 0),
      })
      .addTargetResolver("inst", {
        resolve: ([, u], { triggerElement: f }) => {
          if (!Array.isArray(u)) return e;
          let [d, p] = u,
            h = Array.isArray(d),
            g = h ? (0, ie.pair)(d[0], d[1]) : (0, ie.pair)(d, p),
            y = (0, q.safeQuerySelectorAll)(
              (0, q.elementTargetSelector)(g),
              document
            );
          if (!y?.length) return e;
          let S = [...y];
          if (!f) return (0, he.applyScope)(S, h ? p : void 0);
          let b = f.dataset.wfTarget;
          if (!b) return S;
          try {
            let m = JSON.parse(b),
              w = (0, ie.getFirst)(g),
              T = m.find((v) => (0, ie.getFirst)((0, ie.getFirst)(v)) === w);
            return T
              ? (0, he.applyScope)(
                  S.filter((v) =>
                    (v.dataset.wfTarget || "").includes(
                      `${JSON.stringify((0, ie.getSecond)(T))}]`
                    )
                  ),
                  h ? p : void 0
                )
              : e;
          } catch {
            return e;
          }
        },
        isDynamic: !0,
        instanceSharingKey: ([, u, f]) => {
          if (Hr(f) || !Array.isArray(u)) return;
          let [d, p] = u,
            h = Array.isArray(d),
            g = h ? (0, ie.pair)(d[0], d[1]) : (0, ie.pair)(d, p);
          return `inst|${JSON.stringify(g)}|${Yr(h ? p : void 0)}`;
        },
      })
      .addTargetResolver("class", {
        resolve: ([, u]) => {
          let [f, d] = Array.isArray(u) ? u : [u],
            p = f ? (0, q.safeQuerySelectorAll)(`.${f}`, document) : null;
          return p ? (0, he.applyScope)([...p], d) : e;
        },
      })
      .addTargetResolver("selector", {
        resolve: ([, u]) => {
          let [f, d] = Array.isArray(u) ? u : [u],
            p = f ? (0, q.safeQuerySelectorAll)(f, document) : null;
          return p ? (0, he.applyScope)([...p], d) : e;
        },
      })
      .addTargetResolver("body", {
        resolve: () => [document.body],
        isPageLevel: !0,
      })
      .addTargetResolver("attribute", {
        resolve: ([, u]) => {
          let [f, d] = Array.isArray(u) ? u : [u],
            p = f ? (0, q.safeQuerySelectorAll)(f, document) : null;
          return p ? (0, he.applyScope)([...p], d) : e;
        },
      })
      .addTargetResolver("any-element", { resolve: () => e })
      .addTargetResolver("viewport", {
        resolve: () => [document.documentElement],
        isPageLevel: !0,
      });
    let l = {
      popover: {
        targets: ra,
        backdropResolver: {
          resolve: (
            [, u],
            { triggerElement: f, interaction: d, trigger: p, causeTrigger: h }
          ) => {
            let g = (p ?? h)?.[1]?.assignedInstances,
              y = a(ra, u, f, d, g, p, h);
            if (!y.length) return f || qr(d?.id, []), e;
            let S = Ap(d),
              b = [],
              m = [];
            for (let w of y) {
              if (!w.id || !c(w, d)) continue;
              b.push(w);
              let T = S.some((E) => !E || o(E, w)),
                v = la(w, d?.id, T);
              v && (!g || o(g, w)) && m.push(v);
            }
            return (
              f || qr(d?.id, b),
              p ? (m.length ? m : e) : g ? y.filter((w) => o(g, w)) : y
            );
          },
          buildTween: ta.buildBackdropTween,
          release: (u) => qr(u, []),
          isDynamic: !0,
        },
      },
      modal: {
        targets: oa,
        backdropResolver: {
          resolve: (
            [, u],
            { triggerElement: f, interaction: d, trigger: p, causeTrigger: h }
          ) => {
            let g = (p ?? h)?.[1]?.assignedInstances,
              y = a(oa, u, f, d, g, p, h);
            return g ? y.filter((S) => o(g, S)) : y;
          },
          buildTween: ta.buildModalBackdropTween,
          isDynamic: !0,
        },
      },
    };
    for (let u of Object.keys(l)) {
      let { targets: f, backdropResolver: d } = l[u];
      n.addTargetResolver(`${u}-element`, {
        resolve: (
          [, p],
          { triggerElement: h, interaction: g, trigger: y, causeTrigger: S }
        ) => i(p, h, g, y, S, f),
        isDynamic: !0,
      }).addTargetResolver(`${u}-backdrop`, d);
    }
  }
});
var fa = O((Zr) => {
  "use strict";
  Object.defineProperty(Zr, "__esModule", { value: !0 });
  Object.defineProperty(Zr, "TouchScrollGuard", {
    enumerable: !0,
    get: function () {
      return Qr;
    },
  });
  var ua = Xe();
  function Rp(n) {
    let e = n;
    for (; e && e !== document.body && e !== document.documentElement; ) {
      if (e instanceof HTMLElement) {
        let t = getComputedStyle(e).overflowY;
        if (
          (t === "auto" || t === "scroll" || t === "overlay") &&
          e.scrollHeight > e.clientHeight
        )
          return e;
      }
      e = e.parentElement;
    }
    return null;
  }
  var Qr = class {
    isScrolling = !1;
    toleranceDeg;
    refX = 0;
    refY = 0;
    lastY = 0;
    locked = null;
    effectFromBoundary = !1;
    scroller = null;
    maxScroll = 0;
    constructor(e, t, r) {
      this.toleranceDeg = r?.tolerance ?? 18;
      let o = (0, ua.initScrollCache)();
      t.addEventListener("abort", o);
      let s = (c) => {
          let l = c.touches[0];
          l &&
            ((this.refX = l.clientX),
            (this.refY = l.clientY),
            (this.lastY = l.clientY),
            (this.locked = null),
            (this.effectFromBoundary = !1),
            (this.isScrolling = !1),
            (this.scroller = Rp(c.target ?? e)),
            (this.maxScroll = this.scroller
              ? this.scroller.scrollHeight - this.scroller.clientHeight
              : document.documentElement.scrollHeight - window.innerHeight));
        },
        i = (c) => {
          let l = c.touches[0];
          if (!l) return;
          let u = l.clientY,
            f = l.clientX - this.refX,
            d = u - this.refY,
            p = u > this.lastY,
            h = u < this.lastY,
            g = this.scroller ? this.scroller.scrollTop : (0, ua.getScrollY)(),
            y = this.maxScroll,
            S = g <= 1 && p,
            b = y > 0 && g >= y - 1 && h;
          this.locked === null && this.decide(f, d, S || b),
            this.locked === "scroll" &&
              (S || b) &&
              ((this.refX = l.clientX),
              (this.refY = u),
              (this.locked = "effect"),
              (this.effectFromBoundary = !0)),
            this.locked === "effect" &&
              this.effectFromBoundary &&
              !(S || b) &&
              ((this.refX = l.clientX),
              (this.refY = u),
              (this.locked = null),
              (this.effectFromBoundary = !1)),
            (this.lastY = u),
            (this.isScrolling =
              this.locked === "scroll" ||
              this.locked === null ||
              (this.locked === "effect" && !c.cancelable && !(S || b))),
            this.locked === "effect" && c.cancelable && c.preventDefault();
        },
        a = () => {
          (this.locked = null), (this.isScrolling = !1);
        };
      e.addEventListener("touchstart", s, { passive: !0, signal: t }),
        e.addEventListener("touchmove", i, { passive: !1, signal: t }),
        e.addEventListener("touchend", a, { passive: !0, signal: t }),
        e.addEventListener("touchcancel", a, { passive: !0, signal: t });
    }
    decide(e, t, r) {
      if (Math.abs(e) < 10 && Math.abs(t) < 10) return;
      Math.atan2(Math.abs(e), Math.abs(t)) * (180 / Math.PI) > this.toleranceDeg
        ? ((this.locked = "effect"), (this.effectFromBoundary = !1))
        : r
        ? ((this.locked = "effect"), (this.effectFromBoundary = !0))
        : (this.locked = "scroll");
    }
  };
});
var da = O((eo) => {
  "use strict";
  Object.defineProperty(eo, "__esModule", { value: !0 });
  Object.defineProperty(eo, "VelocityController", {
    enumerable: !0,
    get: function () {
      return Jr;
    },
  });
  var Ip = {
    adaptiveMax: 2800,
    adaptAlpha: 0.05,
    adaptDecay: 0.99,
    hardMin: 600,
    hardMax: 4e3,
  };
  function Mp(n, e) {
    let t = Math.max(e.hardMin, Math.min(e.hardMax, n));
    (e.adaptiveMax = Math.max(t, e.adaptiveMax * e.adaptDecay)),
      (e.adaptiveMax += (t - e.adaptiveMax) * e.adaptAlpha),
      (e.adaptiveMax = Math.max(e.hardMin, Math.min(e.hardMax, e.adaptiveMax)));
  }
  var Cp = (n) => n * n;
  function Pp(n, e, t, r) {
    let o = Math.hypot(n, e);
    Mp(o, t);
    let s = Math.max(1, t.adaptiveMax),
      i = Cp(Math.min(1, o / s)),
      a = 0,
      c = 0;
    return (
      r.x && r.y
        ? o > 0 && ((a = n / o), (c = e / o))
        : r.x
        ? n !== 0 && (a = Math.sign(n))
        : r.y && e !== 0 && (c = Math.sign(e)),
      { n: i, dirX: a, dirY: c }
    );
  }
  var Jr = class {
    config;
    velState;
    lastDirX;
    lastDirY;
    lastNormVelocity;
    get dirX() {
      return this.lastDirX;
    }
    get dirY() {
      return this.lastDirY;
    }
    constructor(e) {
      (this.config = e),
        (this.velState = { ...Ip }),
        (this.lastDirX = 0),
        (this.lastDirY = 0),
        (this.lastNormVelocity = 0);
    }
    update(e, t) {
      let {
        n: r,
        dirX: o,
        dirY: s,
      } = Pp(e, t, this.velState, this.config.axes);
      (this.lastNormVelocity = r), (this.lastDirX = o), (this.lastDirY = s);
    }
    reset() {
      (this.lastDirX = 0), (this.lastDirY = 0), (this.lastNormVelocity = 0);
    }
    destroy() {
      this.reset();
    }
  };
});
var pa = O((no) => {
  "use strict";
  Object.defineProperty(no, "__esModule", { value: !0 });
  Object.defineProperty(no, "IntervalController", {
    enumerable: !0,
    get: function () {
      return to;
    },
  });
  var xp = ee(),
    kp = 16,
    to = class {
      config;
      accum;
      lastX;
      lastY;
      initialized;
      cycleIndex;
      destroyed;
      constructor(e) {
        (this.config = e),
          (this.accum = 0),
          (this.lastX = 0),
          (this.lastY = 0),
          (this.initialized = !1),
          (this.cycleIndex = 0),
          (this.destroyed = !1),
          document.addEventListener(
            "visibilitychange",
            () => {
              document.visibilityState === "visible" && this.reset();
            },
            { signal: this.config.signal }
          );
      }
      get isActive() {
        return this.config.distance > 0;
      }
      update(e) {
        if (this.destroyed || !this.isActive) return;
        let { x: t, y: r, velocityFactor: o, dirX: s, dirY: i } = e;
        if (!this.initialized) {
          (this.lastX = t), (this.lastY = r), (this.initialized = !0);
          return;
        }
        let a = t - this.lastX,
          c = r - this.lastY;
        (this.lastX = t), (this.lastY = r);
        let { axes: l, distance: u } = this.config;
        l.x && l.y
          ? (this.accum += Math.hypot(a, c))
          : l.x
          ? (this.accum += Math.abs(a))
          : l.y && (this.accum += Math.abs(c));
        let f = 0;
        for (; this.accum >= u && f < kp; ) {
          this.accum -= u;
          let d = {
            cursorPos: { x: t, y: r },
            velocityFactor: o,
            dirX: s,
            dirY: i,
          };
          this.config.channelManager.fireInterval?.(
            xp.TIMELINE_ROLE_NAMES.INTERVAL,
            {
              targetIndex: this.cycleIndex++,
              element: this.config.element,
              pluginPayload: d,
            }
          ),
            f++;
        }
        this.accum >= u && (this.accum %= u);
      }
      reset() {
        (this.accum = 0), (this.initialized = !1), (this.cycleIndex = 0);
      }
      destroy() {
        (this.destroyed = !0), this.reset();
      }
    };
});
var Sa = O((oo) => {
  "use strict";
  Object.defineProperty(oo, "__esModule", { value: !0 });
  Object.defineProperty(oo, "fireMouseMoveInterval", {
    enumerable: !0,
    get: function () {
      return Wp;
    },
  });
  var Lp = ee(),
    Ea = wt(),
    ro = new Set(["x", "y"]),
    Np = new Set(["scale", "scaleX", "scaleY"]),
    ha = new WeakMap(),
    ga = new WeakMap();
  function Fp(n) {
    let e = ha.get(n);
    return (
      e ||
        ((e = {
          activeIntervalEls: new Map(),
          intervalClones: new Set(),
          baselineValues: new Map(),
        }),
        ha.set(n, e)),
      e
    );
  }
  function Dp(n, e, t, r) {
    let o = ga.get(n);
    o || ((o = new Set()), ga.set(n, o)),
      !o.has(t) &&
        (o.add(t),
        r(() => {
          let s = e.activeIntervalEls.get(t);
          if (s)
            for (let i of s)
              e.intervalClones.has(i) &&
                (i.isConnected && i.remove(), e.intervalClones.delete(i));
          e.activeIntervalEls.delete(t),
            e.baselineValues.delete(t),
            o.delete(t);
        }));
  }
  function ma(n) {
    if (n)
      for (let e in n) {
        if (!ro.has(e)) continue;
        let t = n[e];
        (typeof t == "string" && (t.startsWith("+=") || t.startsWith("-="))) ||
          ((typeof t == "number" || typeof t == "string") && (n[e] = `+=${t}`));
      }
  }
  var Vp = /^random\((.*)\)([a-z%]*)$/i,
    Bp = /^-?\d*\.?\d+$/;
  function jp(n, e) {
    let t = Vp.exec(n);
    if (!t) return null;
    let r = t[1] ?? "",
      o = t[2] ?? "",
      s = r.startsWith("[") && r.endsWith("]"),
      a = (s ? r.slice(1, -1) : r).split(",").map((l) => l.trim());
    if (!a.every((l) => Bp.test(l))) return null;
    let c = a
      .map((l, u) => {
        let f = Number(l);
        return !s && u >= 2 ? Math.abs(e(f) - e(0)) : e(f);
      })
      .join(", ");
    return `random(${s ? `[${c}]` : c})${o}`;
  }
  function ya(n, e, t, r) {
    if (n)
      for (let o in n) {
        let s = n[o];
        if (typeof s != "number" && typeof s != "string") continue;
        let i = !1,
          a = typeof s == "string" ? s : "";
        typeof s == "string" &&
          (s.startsWith("+=") || s.startsWith("-=")) &&
          ((i = !0), (a = (s.startsWith("-=") ? "-" : "") + s.slice(2)));
        let c, l;
        if (ro.has(o)) {
          let p = o === "y" ? r : t;
          (c = (h) => h * e * p), (l = !0);
        } else if (o === "rotation") {
          let p = Math.abs(t) >= Math.abs(r) ? t : -r;
          (c = (h) => h * e * p), (l = i);
        } else
          Np.has(o)
            ? ((c = i ? (p) => p * e : (p) => 1 + (p - 1) * e), (l = i))
            : ((c = (p) => p * e), (l = i));
        if (typeof s == "string" && a.startsWith("random(")) {
          let p = jp(a, c);
          if (p == null) continue;
          n[o] = l ? `+=${p}` : p;
          continue;
        }
        let u,
          f = "";
        if (typeof s == "number") u = s;
        else {
          if (((u = parseFloat(a)), isNaN(u))) continue;
          f = a.replace(/^-?[\d.]+/, "");
        }
        let d = c(u);
        n[o] = l ? `+=${d}${f}` : d;
      }
  }
  function Gp(n, e) {
    let t = n.getOneShotTimelineContext(e),
      r = t?.timelineDef;
    if (!t || !r?.actions?.length) return null;
    let o = r.triggerMetadata,
      s = o?.pluginConfig?.type === "mouseMove" ? o.pluginConfig : void 0;
    return o?.role !== "interval" && !s
      ? null
      : {
          oneShot: t,
          mouseMoveMeta: s ?? { type: "mouseMove" },
          axes: o?.axes,
        };
  }
  function Up(n, e, t, r, o) {
    let s = n.cloneNode(!0);
    s.removeAttribute("style"),
      s.removeAttribute("id"),
      s.removeAttribute("data-w-id"),
      s.setAttribute(Ea.TRANSIENT_IX3_CLONE_ATTR, "true"),
      (s.style.position = "absolute"),
      (s.style.margin = "0"),
      (s.style.pointerEvents = "none"),
      n.insertAdjacentElement("beforebegin", s);
    let i = e.baselineValues.get(o)?.get(n);
    return i && r.set(s, { ...i }), e.intervalClones.add(s), t.add(s), s;
  }
  function $p(n, e) {
    let t = [],
      r = new Set();
    for (let o of n.timelineDef.actions)
      for (let s in o.properties) {
        let i = n.getActionTweenConfig(o, s, [e]);
        if (i) {
          for (let a of [i.to, i.from])
            if (a)
              for (let c of Object.keys(a)) ro.has(c) ? t.push(c) : r.add(c);
        }
      }
    return { clearProps: t, baselineProps: r };
  }
  function qp(n, e, t, r, o) {
    let { clearProps: s, baselineProps: i } = $p(n, t);
    if (i.size > 0) {
      let a = {};
      for (let l of i) a[l] = e.getProperty(t, l);
      let c = r.baselineValues.get(o);
      c || ((c = new WeakMap()), r.baselineValues.set(o, c)), c.set(t, a);
    }
    s.length !== 0 && e.set(t, { clearProps: s.join(",") });
  }
  function va(n) {
    if (n)
      for (let e in n) {
        let t = n[e];
        typeof t == "function" &&
          "legacyExpression" in t &&
          (n[e] = t.legacyExpression);
      }
  }
  function Hp(n, e, t) {
    return (r, o, s) => {
      va(s.to),
        va(s.from),
        (
          o.pluginConfig?.type === "mouseMove"
            ? o.pluginConfig.velocityInfluence
            : !1
        )
          ? n != null && (ya(s.to, n, e, t), s.from && ya(s.from, n, e, t))
          : (ma(s.to), s.from && ma(s.from));
    };
  }
  function zp(n, e, t, r, o, s, i, a) {
    let [c] = t;
    if (c && (n.set(c, { zIndex: r + 1 + o }, 0), !(!s || (!i && !a))))
      for (let l of t) {
        let u = l.getBoundingClientRect(),
          f = {};
        if (i) {
          let d = Number(e.getProperty(l, "x")) || 0;
          f.x = s.x - (u.left + u.width / 2 - d);
        }
        if (a) {
          let d = Number(e.getProperty(l, "y")) || 0;
          f.y = s.y - (u.top + u.height / 2 - d);
        }
        n.set(l, f, 0);
      }
  }
  function Ta(n) {
    for (let e of n) e();
    n.clear();
  }
  function ba(n, e, t) {
    n.activeIntervalEls.get(e)?.delete(t),
      n.intervalClones.has(t) &&
        (t.isConnected && t.remove(), n.intervalClones.delete(t));
  }
  var Wp = ({
    coordinator: n,
    timelineId: e,
    element: t,
    options: r,
    animation: o,
  }) => {
    if (!o.hasGsap()) return;
    let s = r.targetIndex;
    if (s == null) return;
    let i = Gp(n, e);
    if (!i) return;
    let { oneShot: a, mouseMoveMeta: c, axes: l } = i,
      u = Fp(n),
      f = a
        .getFirstActionTargets(t)
        .filter((k) => !(0, Ea.isTransientIX3Clone)(k));
    if (!f.length) return;
    let d = [f[s % f.length]],
      p = d,
      h = d[0],
      g = u.activeIntervalEls.get(e);
    g || ((g = new Set()), u.activeIntervalEls.set(e, g)),
      g.has(h) ? (p = [Up(h, u, g, o, e)]) : (qp(a, o, h, u, e), g.add(h));
    let y = p[0],
      S = l?.x === !1 && l?.y === !1,
      b = S || (l?.x ?? c?.setMouseX ?? !0),
      m = S || (l?.y ?? c?.setMouseY ?? !0),
      w = (0, Lp.narrowMouseMoveIntervalPayload)(r.pluginPayload),
      T = w.cursorPos,
      v = w.velocityFactor,
      E = w.dirX ?? 0,
      _ = w.dirY ?? 0,
      A = new Set(),
      I = a.buildActionTimeline({
        targets: p,
        cleanupBucket: A,
        varsTransform: Hp(v, E, _),
        beforeTweens: (k) => {
          zp(k, o, p, f.length, s, T, b, m);
        },
      });
    if (!I) {
      Ta(A), ba(u, e, y);
      return;
    }
    let M = null,
      P = !1,
      R = (k) => {
        P || ((P = !0), M?.(), k && I.kill(), Ta(A), ba(u, e, y));
      };
    (M = a.registerCleanup(() => R(!0))),
      I.eventCallback("onComplete", () => {
        R(!1);
      }),
      Dp(n, u, e, a.registerCleanup);
  };
});
var Ia = O((ao) => {
  "use strict";
  Object.defineProperty(ao, "__esModule", { value: !0 });
  Object.defineProperty(ao, "buildMouseMove", {
    enumerable: !0,
    get: function () {
      return rh;
    },
  });
  var ae = ee(),
    et = Xe(),
    Yp = fa(),
    Kp = da(),
    Xp = pa(),
    Qp = Sa(),
    Zp = 50,
    wa = 50,
    so = null;
  function Jp() {
    return (
      so === null &&
        (so = "ontouchstart" in window || navigator.maxTouchPoints > 0),
      so
    );
  }
  var _a = 0,
    Ra = 0,
    _t = 0,
    Te = null;
  function eh() {
    (_t += 1),
      Te ||
        ((Te = () => {
          (_a = window.innerWidth), (Ra = window.innerHeight);
        }),
        Te(),
        window.addEventListener("resize", Te));
    let n = !1;
    return () => {
      n ||
        ((n = !0),
        (_t = Math.max(0, _t - 1)),
        _t === 0 &&
          Te &&
          (window.removeEventListener("resize", Te), (Te = null)));
    };
  }
  var Rt = (n) => Math.max(0, Math.min(1, n));
  function th(n, e, t) {
    return e === t || n === t || (n < t && e > t) || (n > t && e < t);
  }
  function Fe(n, e, t) {
    let r = n.tween;
    (n.tween = null),
      (n.takeoverTarget = null),
      (n.proxy.value = e),
      (n.lastValue = e),
      n.channel?.setProgress(e),
      t && r?.kill();
  }
  function Oa(n, e) {
    if (n.tween) {
      if (n.proxy.value === e) {
        Fe(n, e, !0);
        return;
      }
      let t = n.tweenTarget - n.proxy.value,
        r = e - n.proxy.value;
      if (t * r < 0) {
        Fe(n, e, !0);
        return;
      }
      if (Math.abs(r) > 2 * Math.abs(t)) {
        Fe(n, e, !0);
        return;
      }
      n.takeoverTarget = e;
      return;
    }
    (n.proxy.value = e), (n.lastValue = e), n.channel?.setProgress(e);
  }
  function io(n) {
    let e = n.tween;
    (n.tween = null), (n.takeoverTarget = null), e?.kill();
  }
  function Aa(n, e, t, r) {
    io(e), (e.lastValue = e.proxy.value), (e.tweenTarget = t);
    let o = n.to(e.proxy, {
      value: t,
      duration: r,
      ease: "power2.out",
      onUpdate: () => {
        let s = e.proxy.value,
          i = e.takeoverTarget;
        if (i != null && th(e.lastValue, s, i)) {
          Fe(e, i, !0);
          return;
        }
        (e.lastValue = s), e.channel?.setImmediate(s);
      },
      onComplete: () => {
        let s = e.takeoverTarget;
        (e.tween = null), (e.takeoverTarget = null), s != null && Fe(e, s, !1);
      },
    });
    if (!o) {
      Fe(e, t, !1);
      return;
    }
    e.tween = o;
  }
  function nh(n, e) {
    let t = Math.max(n, e);
    return 0.1 + Math.min(t / 0.5, 1) * 0.5;
  }
  function rh(n) {
    n.addTrigger("mouse-move", (e, t, r, o) => {
      let s = e[1].pluginConfig,
        i = e[2]?.[0] === ae.IX3_WF_EXTENSION_KEYS.VIEWPORT;
      return (
        o({
          type: "continuous",
          setup: (a) => {
            let { animation: c } = a;
            if (!c.hasGsap() || !c.hasObserver()) return et.noop;
            let l = i ? eh() : et.noop;
            a.registerIntervalHandler(
              ae.IX3_WF_EXTENSION_KEYS.MOUSE_MOVE,
              Qp.fireMouseMoveInterval
            );
            let u = s?.smoothness ?? Zp,
              f = (s?.restingState?.x ?? wa) / 100,
              d = (s?.restingState?.y ?? wa) / 100,
              p = a.registerChannel({
                role: ae.TIMELINE_ROLE_NAMES.MOUSE_X,
                initialValue: f,
                element: t,
                smoothing: u,
              }),
              h = a.registerChannel({
                role: ae.TIMELINE_ROLE_NAMES.MOUSE_Y,
                initialValue: d,
                element: t,
                smoothing: u,
              }),
              g = new AbortController(),
              { signal: y } = g,
              S = a.getMetadata(ae.TIMELINE_ROLE_NAMES.INTERVAL),
              b = {
                x: S?.axes?.x !== !1 || S?.axes?.y === !1,
                y: S?.axes?.y !== !1 || S?.axes?.x === !1,
              },
              m = S
                ? new Xp.IntervalController({
                    distance:
                      S.distance ?? ae.DEFAULT_MOUSE_MOVE_INTERVAL_DISTANCE,
                    axes: b,
                    channelManager: a,
                    element: t,
                    signal: y,
                  })
                : null,
              w = m ? new Kp.VelocityController({ axes: b }) : null,
              T = {
                proxy: { value: f },
                channel: p,
                tween: null,
                takeoverTarget: null,
                lastValue: f,
                tweenTarget: f,
              },
              v = {
                proxy: { value: d },
                channel: h,
                tween: null,
                takeoverTarget: null,
                lastValue: d,
                tweenTarget: d,
              },
              E = !1,
              _ = (V, X) => !!V.channel && a.hasActions(X),
              A = (V, X) => {
                let z = nh(
                  _(T, ae.TIMELINE_ROLE_NAMES.MOUSE_X)
                    ? Math.abs(V - T.proxy.value)
                    : 0,
                  _(v, ae.TIMELINE_ROLE_NAMES.MOUSE_Y)
                    ? Math.abs(X - v.proxy.value)
                    : 0
                );
                Aa(c, T, V, z), Aa(c, v, X, z);
              },
              I = Jp(),
              M = i ? document.documentElement : t,
              P = null;
            I && (P = new Yp.TouchScrollGuard(M, y));
            let R = null,
              k = () => {
                R = null;
              },
              F = () => (R || (R = t.getBoundingClientRect()), R);
            if (!i) {
              let V = new ResizeObserver(k);
              V.observe(t),
                y.addEventListener("abort", () => V.disconnect()),
                window.addEventListener("scroll", k, {
                  passive: !0,
                  capture: !0,
                  signal: y,
                }),
                window.visualViewport &&
                  window.visualViewport.addEventListener("resize", k, {
                    signal: y,
                  });
            }
            let H;
            try {
              if (
                ((H = c.createObserver({
                  target: M,
                  type: I ? "pointer,touch" : "pointer",
                  tolerance: 0,
                  onMove: (V) => {
                    if (P?.isScrolling || !a.isPreviewEnabled()) return;
                    let X = V.x ?? 0,
                      z = V.y ?? 0,
                      Ae,
                      ce;
                    if (i)
                      (Ae = Rt(X / Math.max(1, _a))),
                        (ce = Rt(z / Math.max(1, Ra)));
                    else {
                      let me = F();
                      (Ae = Rt((X - me.left) / Math.max(1, me.width))),
                        (ce = Rt((z - me.top) / Math.max(1, me.height)));
                    }
                    E ? (Oa(T, Ae), Oa(v, ce)) : ((E = !0), A(Ae, ce)),
                      a.publishChannel(
                        ae.MOUSE_MOVE_CHANNELS.POSITION,
                        { x: X, y: z, triggerEl: t, isViewport: i },
                        t
                      ),
                      w &&
                        (w.update(V.velocityX, V.velocityY),
                        m.update({
                          x: X,
                          y: z,
                          velocityFactor: w.lastNormVelocity,
                          dirX: w.dirX,
                          dirY: w.dirY,
                        }));
                  },
                })),
                !H)
              )
                return m?.destroy(), w?.destroy(), g.abort(), l(), et.noop;
            } catch {
              return m?.destroy(), w?.destroy(), g.abort(), l(), et.noop;
            }
            let Q = () => {
              a.isPreviewEnabled() &&
                ((E = !1),
                A(f, d),
                w?.reset(),
                a.publishChannel(ae.MOUSE_MOVE_CHANNELS.LEAVE, void 0, t),
                m?.reset());
            };
            return (
              i
                ? (M.addEventListener("mouseleave", Q, { signal: y }),
                  window.addEventListener("blur", Q, { signal: y }))
                : t.addEventListener("mouseleave", Q, { signal: y }),
              M.addEventListener("touchend", Q, { signal: y, passive: !0 }),
              M.addEventListener("touchcancel", Q, { signal: y, passive: !0 }),
              () => {
                H.kill(),
                  g.abort(),
                  io(T),
                  io(v),
                  m?.destroy(),
                  w?.destroy(),
                  l();
              }
            );
          },
        }),
        et.noop
      );
    });
  }
});
var ja = O((fo) => {
  "use strict";
  Object.defineProperty(fo, "__esModule", { value: !0 });
  function oh(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  oh(fo, {
    COMPONENT_RUNTIMES: function () {
      return Mt;
    },
    MODAL_TRIGGER_CONTRACT: function () {
      return Fa;
    },
    POPOVER_TRIGGER_CONTRACT: function () {
      return Na;
    },
    build: function () {
      return ih;
    },
    buildTriggerContracts: function () {
      return hh;
    },
  });
  var tt = Y(),
    N = ee(),
    ge = Ke(),
    De = Xe(),
    uo = Xr(),
    sh = Ia();
  function ih(n) {
    ah(n), ch(n), (0, sh.buildMouseMove)(n), lh(n), uh(n);
    for (let { overlay: t } of Object.values(Mt)) yh(n, t), bh(n, t);
    wh(n),
      _h(n),
      n.addTrigger("load", (t, r, o, s) => {
        let i = t[1],
          a = !1,
          c = () => {
            a || ((a = !0), s({ target: r }));
          };
        switch (i.pluginConfig?.triggerPoint) {
          case "immediate":
            return c(), De.noop;
          case "fullyLoaded":
            return document.readyState === "complete"
              ? (c(), De.noop)
              : o.addEventListener(window, "load", c);
          case "DOMContentLoaded":
          default:
            return document.readyState === "complete" ||
              document.readyState === "interactive"
              ? (c(), De.noop)
              : o.addEventListener(document, "DOMContentLoaded", c);
        }
      }),
      n.addTrigger("focus", (t, r, o, s) => {
        let i = t[1];
        return o.addEventListener(
          r,
          i.pluginConfig?.useFocusWithin ? "focusin" : "focus",
          s,
          { delegate: !i.pluginConfig?.useFocusWithin }
        );
      }),
      n.addTrigger("blur", (t, r, o, s) => {
        let i = t[1];
        return o.addEventListener(
          r,
          i.pluginConfig?.useFocusWithin ? "focusout" : "blur",
          s,
          { delegate: !i.pluginConfig?.useFocusWithin }
        );
      });
    let e = (t, r, o, s) => (s({ target: r }), De.noop);
    n.addTrigger("scroll", e),
      n.addTrigger("scroll-scrub", e),
      n.addTrigger("scroll-actions", e),
      n.addTrigger("scroll-direction", e),
      n.addTrigger("custom", (t, r, o, s) => {
        let a = t[1].pluginConfig?.eventName;
        return a
          ? o.addEventListener(r, a, s, { delegate: !1, kind: "custom" })
          : De.noop;
      }),
      n.addTrigger("change", (t, r, o, s) =>
        o.addEventListener(r, "change", s)
      );
  }
  function ah(n) {
    let e = new WeakMap();
    n.addTrigger("click", (t, r, o, s) => {
      let [, i] = t,
        a = t[2]?.[0],
        c = Object.values(Mt).some(({ elementBackdropKey: d }) => d === a),
        l = !1,
        u = c
          ? o.addEventListener(r, "pointerdown", (d) => {
              l = Ma(d, r);
            })
          : De.noop,
        f = o.addEventListener(
          r,
          "click",
          (d) => {
            if (c) {
              let S = l;
              if (((l = !1), !S || d.detail === 0 || !Ma(d, r))) return;
            }
            let p = i.pluginConfig?.click,
              h = e.get(r) || new WeakMap();
            e.set(r, h);
            let y = (h.get(t) || 0) + 1;
            switch ((h.set(t, y), p)) {
              case "each": {
                s(d);
                break;
              }
              case "first": {
                y === 1 && s(d);
                break;
              }
              case "second": {
                y === 2 && s(d);
                break;
              }
              case "odd": {
                y % 2 === 1 && s(d);
                break;
              }
              case "even": {
                y % 2 === 0 && s(d);
                break;
              }
              case "custom": {
                let S = i.pluginConfig?.custom;
                S && y === S && s(d);
                break;
              }
              default:
                s(d);
            }
          },
          { delegate: !0 }
        );
      return () => {
        f(), u(), e.delete(r);
      };
    });
  }
  function Ma(n, e) {
    if (n.target !== e) return !1;
    let { clientX: t, clientY: r } = n,
      o = e.getBoundingClientRect();
    return t < o.left || t > o.right || r < o.top || r > o.bottom;
  }
  function ch(n) {
    let e = new WeakMap();
    n.addTrigger("hover", (t, r, o, s) => {
      let [, i] = t,
        a = [],
        c = i.pluginConfig?.multiTimeline,
        l = i.pluginConfig?.eventMode,
        u = l !== "leave",
        f = l !== "enter";
      if (c === !0)
        return (
          u &&
            a.push(
              o.addEventListener(r, "mouseenter", () =>
                s({
                  type: "timeline-role",
                  role: N.TIMELINE_ROLE_NAMES.MOUSE_ENTER,
                })
              )
            ),
          f &&
            a.push(
              o.addEventListener(r, "mouseleave", () =>
                s({
                  type: "timeline-role",
                  role: N.TIMELINE_ROLE_NAMES.MOUSE_LEAVE,
                })
              )
            ),
          () => {
            a.forEach((p) => p()), (a.length = 0);
          }
        );
      if (c === !1) {
        if (
          i.control === void 0 ||
          i.control === "togglePlayReverse" ||
          i.control === "togglePlayReverseFlipEase"
        ) {
          let h =
            i.control === "togglePlayReverseFlipEase"
              ? "reverseFlipEase"
              : "reverse";
          if (
            (u &&
              a.push(
                o.addEventListener(r, "mouseenter", () =>
                  s({ type: "playback-control", control: "play" })
                )
              ),
            f)
          ) {
            let g = u ? h : "play";
            a.push(
              o.addEventListener(r, "mouseleave", () =>
                s({ type: "playback-control", control: g })
              )
            );
          }
        } else
          u && a.push(o.addEventListener(r, "mouseenter", (h) => s(h))),
            f && a.push(o.addEventListener(r, "mouseleave", (h) => s(h)));
        return () => {
          a.forEach((h) => h()), (a.length = 0);
        };
      }
      let d = (p, h) => {
        if ((i.pluginConfig?.type ?? "mouseenter") !== h) return;
        let y = i.pluginConfig?.hover || "each",
          S = e.get(r) || new Map();
        e.set(r, S);
        let m = (S.get(h) || 0) + 1;
        switch ((S.set(h, m), y)) {
          case "each": {
            s(p);
            break;
          }
          case "first": {
            m === 1 && s(p);
            break;
          }
          case "second": {
            m === 2 && s(p);
            break;
          }
          case "odd": {
            m % 2 === 1 && s(p);
            break;
          }
          case "even": {
            m % 2 === 0 && s(p);
            break;
          }
          case "custom": {
            let w = i.pluginConfig?.custom;
            w && m === w && s(p);
            break;
          }
          default:
            s(p);
        }
      };
      return (
        a.push(
          o.addEventListener(r, "mouseenter", (p) => {
            d(p, "mouseenter");
          })
        ),
        a.push(
          o.addEventListener(r, "mouseover", (p) => {
            d(p, "mouseover");
          })
        ),
        a.push(
          o.addEventListener(r, "mouseleave", (p) => {
            d(p, "mouseleave");
          })
        ),
        () => {
          a.forEach((p) => p()), (a.length = 0), e.delete(r);
        }
      );
    });
  }
  function ka(n, e) {
    n.addTrigger(e, (t, r, o, s) => {
      let i = t[1].pluginConfig?.event,
        a =
          i === N.TIMELINE_ROLE_NAMES.OPEN || i === N.TIMELINE_ROLE_NAMES.CLOSE
            ? i
            : void 0,
        c = "IX3_COMPONENT_STATE_CHANGE";
      return o.addEventListener(r, c, (l) => {
        let u = l.detail;
        if (!u || typeof u != "object") return;
        let { component: f, state: d } = u;
        f !== e ||
          !d ||
          (a && d !== a) ||
          s({ type: "timeline-role", role: d });
      });
    });
  }
  function lh(n) {
    ka(n, "navbar");
  }
  function uh(n) {
    ka(n, "dropdown");
  }
  var be = new WeakMap();
  function fh(n, e) {
    let t = (be.get(n) ?? 0) + 1;
    be.set(n, t), n.setAttribute(e, "");
  }
  function dh(n, e) {
    let t = (be.get(n) ?? 1) - 1;
    if (t > 0) {
      be.set(n, t);
      return;
    }
    be.delete(n), n.removeAttribute(e);
  }
  var ph = {
      key: "popover",
      stateEvent: N.IX3_POPOVER_STATE_EVENT,
      animatedAttribute: N.POPOVER_ANIMATED_ATTRIBUTE,
      commandEvent: ge.POPOVER_COMMAND_EVENT,
      isShowing: Th,
      fromTriggerElement: uo.popoverFromTriggerElement,
    },
    La = (n) => ({
      roles: [N.TIMELINE_ROLE_NAMES.OPEN, N.TIMELINE_ROLE_NAMES.CLOSE],
      emitsRolesAlways: !0,
      ownsRoleSet: !0,
      container: n,
    }),
    Na = La("[popover]"),
    Fa = La("." + ge.MODAL_CLASS);
  function hh(n) {
    for (let { overlay: e, contract: t } of Object.values(Mt))
      n.addTriggerContract(e.key, t);
  }
  var gh = {
      key: "modal",
      stateEvent: N.IX3_MODAL_STATE_EVENT,
      animatedAttribute: N.MODAL_ANIMATED_ATTRIBUTE,
      commandEvent: ge.MODAL_COMMAND_EVENT,
      isShowing: (n) => n.open === !0,
      fromTriggerElement: uo.modalFromTriggerElement,
    },
    Mt = {
      popover: { overlay: ph, contract: Na },
      modal: {
        overlay: gh,
        contract: Fa,
        elementBackdropKey: N.IX3_WF_EXTENSION_KEYS.MODAL_BACKDROP,
      },
    },
    Ca = new WeakMap();
  function Da(n) {
    n.released || ((n.released = !0), n.done?.());
  }
  function mh(n, e) {
    let t = Ca.get(n);
    if (t) return t;
    let r = { claims: 0, released: !1, dispatching: !0, done: e };
    return (
      Ca.set(n, r),
      Promise.resolve().then(() => {
        (r.dispatching = !1), r.claims === 0 && Da(r);
      }),
      r
    );
  }
  function Va(n) {
    n.claims++;
    let e = !1;
    return () => {
      e || ((e = !0), --n.claims <= 0 && !n.dispatching && Da(n));
    };
  }
  function yh(n, e) {
    n.addTrigger(e.key, (t, r, o, s) => {
      let i = t[1].pluginConfig?.event,
        a =
          i === N.TIMELINE_ROLE_NAMES.OPEN || i === N.TIMELINE_ROLE_NAMES.CLOSE
            ? i
            : void 0;
      fh(r, e.animatedAttribute);
      let c = () => dh(r, e.animatedAttribute),
        l = new Set(),
        u = o.addEventListener(r, e.stateEvent, (f) => {
          let d = f.detail;
          if (!d || typeof d != "object") return;
          let { state: p, done: h } = d,
            g = mh(f, typeof h == "function" ? h : void 0);
          if (
            p !== N.TIMELINE_ROLE_NAMES.OPEN &&
            p !== N.TIMELINE_ROLE_NAMES.CLOSE
          )
            return;
          if (p === N.TIMELINE_ROLE_NAMES.OPEN) K.delete(r), Ee.delete(r);
          else {
            let S = K.get(r);
            S?.delete(t), S && S.size === 0 && K.delete(r);
          }
          if (a && p !== a) return;
          p === N.TIMELINE_ROLE_NAMES.CLOSE && Ee.set(r, g);
          let y = Va(g);
          l.add(y),
            s({
              type: "timeline-role",
              role: p,
              onComplete: () => {
                l.delete(y), y();
              },
            });
        });
      return () => {
        be.get(r) === 1 &&
          (K.has(r) || e.isShowing(r)) &&
          (K.delete(r), lo(e, r, ge.POPOVER_ANIMATION_CLOSE_COMMAND)),
          be.get(r) === 1 && Ee.delete(r),
          c(),
          u();
        for (let f of l) f();
        l.clear();
      };
    });
  }
  function Pa(n, e, t) {
    let r = e.length > 1 ? n.fromTriggerElement(t, (o) => e.includes(o)) : null;
    return r ? [r] : e;
  }
  function vh(n, e) {
    if (!n.isShowing(e) || K.has(e)) return !1;
    let t = Ee.get(e);
    return !t || t.released;
  }
  function Th(n) {
    try {
      return n.matches(":popover-open");
    } catch {
      return !1;
    }
  }
  function lo(n, e, t, r) {
    let o = e.ownerDocument.defaultView;
    if (!o) return;
    let s =
      t === ge.POPOVER_ANIMATION_OPEN_COMMAND
        ? { type: t, source: r }
        : { type: t };
    e.dispatchEvent(new o.CustomEvent(n.commandEvent, { detail: s }));
  }
  function bh(n, e) {
    n.addRoleAppliedQuery(
      e.key,
      (t, { elements: r, trigger: o, causeTrigger: s, causeElement: i }) => {
        if (!xa(s, o)) return;
        let a = Pa(e, r, i),
          c = (l) => vh(e, l);
        if (t === N.TIMELINE_ROLE_NAMES.OPEN) return a.every(c);
        if (t === N.TIMELINE_ROLE_NAMES.CLOSE) return !a.some(c);
      }
    ),
      n.addRoleActivationObserver(
        e.key,
        (t, { elements: r, trigger: o, causeTrigger: s, causeElement: i }) => {
          if (!xa(s, o)) return;
          let a = Pa(e, r, i);
          if (t === N.TIMELINE_ROLE_NAMES.OPEN) {
            for (let f of a)
              K.delete(f),
                Ee.delete(f),
                (!e.isShowing(f) || (s !== void 0 && s !== o)) &&
                  lo(e, f, ge.POPOVER_ANIMATION_OPEN_COMMAND, i);
            return;
          }
          if (t !== N.TIMELINE_ROLE_NAMES.CLOSE) return;
          if (s === o) {
            for (let f of a) {
              let d = K.get(f);
              d?.delete(o), d && d.size === 0 && K.delete(f);
            }
            return;
          }
          let c = a.filter(e.isShowing);
          if (c.length === 0) return;
          let l = {},
            u = c.map((f) => {
              let d = Ee.get(f);
              return d && !d.released ? Va(d) : void 0;
            });
          for (let f of c) {
            let d = K.get(f);
            d || ((d = new Map()), K.set(f, d)), d.set(o, l);
          }
          return () => {
            for (let [f, d] of c.entries()) {
              let p = u[f];
              p && Promise.resolve().then(p);
              let h = K.get(d);
              h?.get(o) === l &&
                (h.delete(o),
                !(h.size > 0) &&
                  Promise.resolve().then(() => {
                    if (K.get(d) !== h || h.size > 0) return;
                    K.delete(d);
                    let g = Ee.get(d);
                    (g && !g.released) ||
                      lo(e, d, ge.POPOVER_ANIMATION_CLOSE_COMMAND);
                  }));
            }
          };
        }
      );
  }
  var K = new WeakMap(),
    Ee = new WeakMap();
  function xa(n, e) {
    if (!n || n === e) return !0;
    if (n[0] === e[0]) return !1;
    let t = n[1]?.assignedInstances;
    if (!t) return !0;
    let r = e[2],
      o = (0, ge.readInstPath)(r?.[1]);
    return o ? t.some(([s, i]) => s === o[0] && i === o[1]) : !1;
  }
  function Eh(n, e) {
    let t = n[1]?.assignedInstances;
    return t
      ? t.length
        ? [...new Set(t.flatMap(([r, o]) => (0, uo.popoversByPath)(r, o)))]
        : []
      : [e];
  }
  function Ba(n, e, t) {
    let r = n[1]?.pluginConfig?.firstWins === !0;
    for (let o of Eh(n, e)) t({ target: o, skipIfActive: !0, firstWins: r });
  }
  var Sh = 10;
  function wh(n) {
    n.addTrigger("exit-intent", (e, t, r, o) => {
      if ((0, tt.getPageLevelTriggerState)(e).fired) return () => {};
      let s = !1,
        i,
        a = () => {
          i?.(), (i = void 0);
        };
      return (
        (i = r.addEventListener(
          t,
          "mouseout",
          (c) => {
            if (s) return;
            let l = c;
            l.relatedTarget == null &&
              (l.clientY > Sh ||
                (l.clientY > 0 &&
                  typeof l.movementY == "number" &&
                  l.movementY >= 0) ||
                ((s = !0),
                ((0, tt.getPageLevelTriggerState)(e).fired = !0),
                a(),
                Ba(e, t, o)));
          },
          {
            target: "document",
            delegate: !1,
            batch: !1,
            capture: !0,
            passive: !0,
          }
        )),
        a
      );
    });
  }
  var Oh = [
      "pointermove",
      "pointerdown",
      "keydown",
      "scroll",
      "wheel",
      "touchstart",
      "touchmove",
    ],
    co = 100,
    It = new WeakMap();
  function Ah(n, e) {
    let t = It.get(e);
    if (!t) {
      let o = {
          waiters: new Set(),
          cleanups: [],
          lastResetAt: -co,
          trailing: void 0,
        },
        s = () => {
          (o.trailing = void 0), (o.lastResetAt = performance.now());
          for (let a of o.waiters) a.restart();
        },
        i = () => {
          let a = performance.now() - o.lastResetAt;
          if (a >= co) {
            o.trailing !== void 0 && clearTimeout(o.trailing), s();
            return;
          }
          o.trailing === void 0 && (o.trailing = setTimeout(s, co - a));
        };
      (o.cleanups = Oh.map((a) =>
        e.addEventListener(document.documentElement, a, () => i(), {
          target: "document",
          delegate: !1,
          batch: !1,
          capture: !0,
          passive: !0,
        })
      )),
        It.set(e, o),
        (t = o);
    }
    let r = t;
    return (
      r.waiters.add(n),
      () => {
        if ((r.waiters.delete(n), !(r.waiters.size > 0))) {
          for (let o of r.cleanups) o();
          (r.cleanups.length = 0),
            r.trailing !== void 0 && clearTimeout(r.trailing),
            (r.trailing = void 0),
            It.get(e) === r && It.delete(e);
        }
      }
    );
  }
  function _h(n) {
    n.addTrigger("duration", (e, t, r, o) => {
      if ((0, tt.getPageLevelTriggerState)(e).fired) return () => {};
      let s = e[1]?.pluginConfig,
        i = s?.mode,
        a =
          i === "idle" || i === "timeOnSite"
            ? i
            : N.DEFAULT_DURATION_TRIGGER_MODE,
        c = s?.duration ?? N.DEFAULT_DURATION_TRIGGER_SECONDS,
        u =
          (Number.isFinite(c)
            ? Math.min(
                Math.max(c, (0, N.minimumDurationSeconds)(a)),
                N.DURATION_TRIGGER_SECONDS_RANGE.max
              )
            : N.DEFAULT_DURATION_TRIGGER_SECONDS) * 1e3,
        f,
        d = !1,
        p = () => {},
        h = () => {
          d ||
            ((d = !0),
            ((0, tt.getPageLevelTriggerState)(e).fired = !0),
            (f = void 0),
            p(),
            Ba(e, t, o));
        };
      if (a === "timeOnSite") {
        let b = Date.now(),
          m = (0, tt.getPageLevelTriggerState)(e),
          w = m.deadline,
          T = typeof window.__wf_design < "u",
          v = w ?? (T ? b + u : b - performance.now() + u);
        return (
          w === void 0 && (m.deadline = v),
          (f = setTimeout(h, Math.max(0, v - b))),
          () => {
            f !== void 0 && clearTimeout(f);
          }
        );
      }
      let g = () => {
        d || (f !== void 0 && clearTimeout(f), (f = setTimeout(h, u)));
      };
      f = setTimeout(h, u);
      let y = Ah({ restart: g }, r),
        S = !1;
      return (
        (p = () => {
          S || ((S = !0), y());
        }),
        () => {
          f !== void 0 && clearTimeout(f), p();
        }
      );
    });
  }
});
var Ve = O((po) => {
  "use strict";
  Object.defineProperty(po, "__esModule", { value: !0 });
  function Rh(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Rh(po, {
    resolveToNumber: function () {
      return Ih;
    },
    resolveToString: function () {
      return Mh;
    },
  });
  function Ih(n, e) {
    if (typeof n == "number") return n;
    if (typeof n == "string") {
      let t = n;
      if (t.startsWith("var(")) {
        let o = t.slice(4, -1).split(",")[0]?.trim() ?? "";
        if (!o || ((t = getComputedStyle(e).getPropertyValue(o).trim()), !t))
          return;
      }
      let r = parseFloat(t);
      return isNaN(r) ? void 0 : r;
    }
  }
  function Mh(n, e) {
    if (typeof n == "string") {
      if (n.startsWith("var(")) {
        let t = n.slice(4, -1).split(",")[0]?.trim() ?? "";
        return (t && getComputedStyle(e).getPropertyValue(t).trim()) || void 0;
      }
      return n;
    }
  }
});
var qa = O((mo) => {
  "use strict";
  Object.defineProperty(mo, "__esModule", { value: !0 });
  function Ch(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Ch(mo, {
    buildMouseFollowAction: function () {
      return Fh;
    },
    forTestSuite: function () {
      return Lh;
    },
  });
  var ho = ee(),
    Ct = Xe(),
    Ph = 0.5,
    Pt = 50;
  function xh(n) {
    let e = 2166136261;
    for (let t = 0; t < n.length; t++)
      (e ^= n.charCodeAt(t)), (e = Math.imul(e, 16777619));
    return e >>> 0;
  }
  function kh(n) {
    let e = n >>> 0;
    return () => {
      e = (e + 1831565813) | 0;
      let t = Math.imul(e ^ (e >>> 15), 1 | e);
      return (
        (t ^= t + Math.imul(t ^ (t >>> 7), 61 | t)),
        ((t ^ (t >>> 14)) >>> 0) / 4294967296
      );
    };
  }
  function Ga(n, e, t) {
    if (n <= 1) return [0];
    if (typeof e == "number") {
      let r = Math.max(0, Math.min(n - 1, Math.floor(e))),
        o = [r];
      for (let s = 1; o.length < n; s++)
        r + s < n && o.push(r + s), r - s >= 0 && o.push(r - s);
      return o;
    }
    switch (e) {
      case "start":
        return Array.from({ length: n }, (r, o) => o);
      case "center": {
        let r = [],
          o = Math.floor((n - 1) / 2);
        r.push(o);
        for (let s = 1; r.length < n; s++)
          o + s < n && r.push(o + s), o - s >= 0 && r.push(o - s);
        return r;
      }
      case "random": {
        let r = t != null && t !== "" ? kh(xh(t)) : Math.random,
          o = Array.from({ length: n }, (s, i) => i);
        for (let s = n - 1; s > 0; s--) {
          let i = Math.floor(r() * (s + 1));
          [o[s], o[i]] = [o[i], o[s]];
        }
        return o;
      }
      case "edges": {
        let r = [],
          o = 0,
          s = n - 1;
        for (; o <= s; ) r.push(o), o !== s && r.push(s), o++, s--;
        return r;
      }
      case "end":
      default:
        return Array.from({ length: n }, (r, o) => n - 1 - o);
    }
  }
  function go(n) {
    if (n == null) return Pt;
    let e = typeof n == "number" ? n * 1e3 : parseFloat(n);
    return Number.isFinite(e) && e >= 0 ? e : Pt;
  }
  var nt = (n) => {
      if (typeof n != "string") return 0.5;
      let e = /^(-?\d+(?:\.\d+)?)%$/.exec(n.trim());
      if (e) return Math.max(0, Math.min(1, parseFloat(e[1]) / 100));
      let t = n.trim().toLowerCase();
      return t === "left" || t === "top"
        ? 0
        : t === "right" || t === "bottom"
        ? 1
        : 0.5;
    },
    Ua = (n, e) => {
      if (n?.amount != null) {
        let t = go(n.amount),
          r = e > 1 ? t / (e - 1) : Pt;
        return Math.max(1, r);
      }
      return n?.each != null ? Math.max(1, go(n.each)) : 1;
    },
    $a = (n) => {
      if (!n) return { x: 0.5, y: 0.5 };
      if (typeof n == "string") {
        let [e, t] = n.trim().split(/\s+/);
        return { x: nt(e ?? "50%"), y: nt(t ?? "50%") };
      }
      return { x: nt(n.x), y: nt(n.y) };
    },
    Lh = {
      DEFAULT_STAGGER_MS: Pt,
      computeMouseFollowSmoothingMs: Ua,
      getChainOrder: Ga,
      parseAnchor: $a,
      parseAnchorAxis: nt,
      staggerEachToMs: go,
    };
  function Nh(n, e, t, r) {
    if (!t.length) return;
    let o = r?.animation;
    if (!o?.hasGsap()) return;
    let s =
        typeof window < "u" &&
        typeof window.matchMedia == "function" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      i = e,
      a = i?.leaveBehavior ?? "return",
      c = i?.onEnter ?? "animate",
      l = r?.timelineRole,
      u = l === "mouseX" ? "x" : l === "mouseY" ? "y" : i?.axis ?? "x",
      f = u,
      d = i?.followMode;
    if (
      d != null &&
      d !== "full" &&
      d !== (0, ho.getSingleAxisMouseFollowMode)(u)
    )
      return;
    let p = $a(i?.anchor),
      h = u === "x" ? p.x : p.y,
      g = t.map((x) => o.getProperty(x, f)),
      y = t.map((x) => o.quickSetter(x, f, "px"));
    if (y.some((x) => x == null)) return;
    let S = y,
      b = (0, Ct.initScrollCache)(),
      m = t.map((x) => {
        let L = x.getBoundingClientRect();
        return u === "x"
          ? L.left + L.width * h
          : L.top + L.height * h + (0, Ct.getScrollY)();
      }),
      w = n.timing?.stagger,
      T = t.length,
      v = Ua(w, T),
      E = w?.from,
      A = Ga(
        T,
        typeof E == "number" ||
          E === "start" ||
          E === "center" ||
          E === "edges" ||
          E === "end" ||
          E === "random"
          ? E
          : "end",
        i?.groupId ?? i?.syncedActionId
      );
    if (A.length === 0) return;
    let I = new Float64Array(T),
      M = A[0],
      P = { value: m[M] ?? 0 },
      R = null,
      k = !1,
      F = 0,
      H = null,
      Q = !1,
      V = null,
      X = performance.now(),
      z = 0,
      Ae = () => {
        let x = performance.now(),
          L = Math.min(x - X, 100);
        X = x;
        let W = 1 - Math.exp(-L / v),
          U = !1;
        for (let $ = 0; $ < A.length; $++) {
          let B = A[$],
            _e;
          if ($ === 0) _e = P.value;
          else {
            let ps = A[$ - 1];
            _e = m[ps] + I[ps];
          }
          let ds = _e - m[B],
            qt = ds - I[B];
          Math.abs(qt) > Ph
            ? ((I[B] = I[B] + qt * W), S[B](I[B]), (U = !0))
            : qt !== 0 && ((I[B] = ds), S[B](I[B]));
        }
        R?.isActive() && (U = !0), U || ce();
      },
      ce = () => {
        Q && (V?.(), (V = null), (Q = !1));
      },
      me = (x) => {
        R?.kill(), (R = null), (z = 0), (P.value = x);
        for (let L = 0; L < A.length; L++) {
          let W = A[L],
            U = x - m[W];
          (I[W] = U), S[W](U);
        }
        ce();
      },
      Kc = () => {
        R?.kill(), (R = null), (z = 0), (P.value = m[M] ?? 0);
        for (let x = 0; x < A.length; x++) {
          let L = A[x];
          (I[L] = 0), S[L](0);
        }
        ce();
      },
      ue = () => {
        Q || ((X = performance.now()), (V = o.addTicker(Ae)), (Q = !0));
      },
      Xc = (x, L) => {
        (H = x),
          (F = L
            ? u === "x"
              ? window.innerWidth
              : window.innerHeight
            : u === "x"
            ? x.offsetWidth
            : x.offsetHeight);
      },
      Qc = (x) => {
        H || Xc(x.triggerEl, x.isViewport);
        let L = u === "x" ? x.x : x.y + (0, Ct.getScrollY)();
        if (s) {
          (k = !0), me(L);
          return;
        }
        if (k)
          if (R) {
            let W = Math.max(z - performance.now(), 50);
            R.kill();
            let U = o.to(P, {
              value: L,
              duration: W / 1e3,
              ease: "power2.out",
              onUpdate: ue,
              onComplete: () => {
                R === U && ((R = null), (z = 0));
              },
            });
            if (!U) {
              (P.value = L), ue();
              return;
            }
            R = U;
          } else P.value = L;
        else {
          if (((k = !0), c === "snap")) {
            me(L);
            return;
          }
          let W = Math.abs(L - P.value),
            $ = 0.1 + Math.min(W / (F || 1), 1) * 0.5;
          (z = performance.now() + $ * 1e3), R?.kill();
          let B = o.to(P, {
            value: L,
            duration: $,
            ease: "power2.out",
            onUpdate: ue,
            onComplete: () => {
              R === B && ((R = null), (z = 0));
            },
          });
          if (!B) {
            (P.value = L), ue();
            return;
          }
          R = B;
        }
        ue();
      },
      Zc = () => {
        if (((k = !1), a === "stay")) {
          ue();
          return;
        }
        if (s) {
          Kc();
          return;
        }
        let x = m[M] ?? 0,
          L = Math.abs(P.value - x),
          U = 0.1 + Math.min(L / (F || 1), 1) * 0.5;
        R?.kill();
        let $ = o.to(P, {
          value: x,
          duration: U,
          ease: "power2.out",
          onUpdate: ue,
          onComplete: () => {
            R === $ && (R = null);
          },
        });
        if (!$) {
          (P.value = x), ue();
          return;
        }
        R = $;
      },
      Jc = r?.subscribeChannel?.(ho.MOUSE_MOVE_CHANNELS.POSITION, Qc),
      el = r?.subscribeChannel?.(ho.MOUSE_MOVE_CHANNELS.LEAVE, Zc),
      fs = new AbortController(),
      { signal: tl } = fs,
      $t = 0,
      nl = () => {
        clearTimeout($t),
          ($t = window.setTimeout(() => {
            H && (F = u === "x" ? H.offsetWidth : H.offsetHeight);
            for (let x = 0; x < t.length; x++) {
              let L = t[x],
                W = o.getProperty(L, f),
                U = typeof W == "number" ? W : parseFloat(String(W)),
                $ = Number.isFinite(U) ? U : 0,
                B = L.getBoundingClientRect(),
                _e = u === "x" ? B.left + B.width * h : B.top + B.height * h;
              (m[x] = u === "x" ? _e - $ : _e - $ + (0, Ct.getScrollY)()),
                (I[x] = $);
            }
            if (!k) {
              let x = m[M];
              x !== void 0 &&
                (R?.isActive() && (R.kill(), (R = null)), (P.value = x));
            }
          }, 250));
      };
    return (
      window.addEventListener("resize", nl, { signal: tl }),
      () => {
        R?.kill(), ce(), clearTimeout($t), fs.abort(), Jc?.(), el?.(), b();
        for (let x = 0; x < t.length; x++) o.set(t[x], { [f]: g[x] });
      }
    );
  }
  function Fh(n) {
    n.addAction("mouse-follow", {
      requiresTriggerElementContext: !0,
      createCustomTween: (e, t, r, o, s, i, a) => Nh(t, r, s, a),
    });
  }
});
var Ya = O((To) => {
  "use strict";
  Object.defineProperty(To, "__esModule", { value: !0 });
  function Dh(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Dh(To, {
    applyAdditive: function () {
      return $h;
    },
    formatRandom: function () {
      return vo;
    },
    formatRandomArray: function () {
      return za;
    },
    isAdditiveValue: function () {
      return Vh;
    },
    isRandomArrayValue: function () {
      return Bh;
    },
    isRandomValue: function () {
      return yo;
    },
    makeClamp: function () {
      return qh;
    },
    makeRandomArrayPicker: function () {
      return Uh;
    },
    makeRandomPicker: function () {
      return Gh;
    },
  });
  function yo(n) {
    if (typeof n != "object" || n === null) return !1;
    let e = n;
    return (
      e.type === "ix3-random" &&
      typeof e.min == "number" &&
      typeof e.max == "number" &&
      (e.step === void 0 || typeof e.step == "number") &&
      (e.unit === void 0 || typeof e.unit == "string")
    );
  }
  function Vh(n) {
    if (typeof n != "object" || n === null) return !1;
    let e = n;
    return (
      e.type === "ix3-additive" &&
      (typeof e.value == "number" || yo(e.value)) &&
      (e.unit === void 0 || typeof e.unit == "string")
    );
  }
  function Bh(n) {
    if (typeof n != "object" || n === null) return !1;
    let e = n;
    return (
      e.type === "ix3-random-array" &&
      Array.isArray(e.values) &&
      e.values.every((t) => typeof t == "number" || typeof t == "string") &&
      (e.unit === void 0 || typeof e.unit == "string")
    );
  }
  function vo(n, e) {
    let t = n.unit ?? e ?? "",
      r = n.step != null ? `, ${n.step}` : "";
    return `random(${n.min}, ${n.max}${r})${t}`;
  }
  function za(n, e) {
    let t = n.unit ?? e ?? "";
    return `random([${n.values.join(", ")}])${t}`;
  }
  function Ha(n) {
    let [e = "", t] = String(n).split("e"),
      r = (e.split(".")[1] || "").length;
    return t === void 0 ? r : Math.max(0, r - Number(t));
  }
  function jh(n, e) {
    if (n <= 1) return 0;
    if (e === void 0) return Math.floor(Math.random() * n);
    let t = Math.floor(Math.random() * (n - 1));
    return t < e ? t : t + 1;
  }
  function Wa(n, e, t) {
    let r = new WeakMap(),
      o = (s, i) => {
        let a = jh(n, r.get(i));
        return r.set(i, a), e(a);
      };
    return (o.legacyExpression = t), o;
  }
  function Gh(n) {
    let e = n.unit ?? "",
      t = (u) => (e ? `${u}${e}` : u),
      r = vo(n);
    if (!n.step) {
      let { min: u, max: f } = n,
        d = (p, h) => t(u + Math.random() * (f - u));
      return (d.legacyExpression = r), d;
    }
    let o = Math.abs(n.step),
      s = Math.min(n.min, n.max),
      i = Math.max(n.min, n.max),
      a = Math.round((i - s) / o),
      c = Math.max(Ha(s), Ha(o)),
      l = 10 ** c;
    return Wa(
      a + 1,
      (u) => {
        let f = s + u * o,
          d = c ? Math.round(f * l) / l : f;
        return t(Math.min(i, Math.max(s, d)));
      },
      r
    );
  }
  function Uh(n) {
    let e = n.unit ?? "",
      t = [...new Set(n.values)];
    return Wa(
      t.length,
      (r) => {
        let o = t[r] ?? 0;
        return typeof o == "number" && e ? `${o}${e}` : o;
      },
      za(n)
    );
  }
  function $h(n, e) {
    let t = n.unit ?? e ?? "";
    return yo(n.value) ? `+=${vo(n.value, t)}` : `+=${n.value}${t}`;
  }
  function qh(n, e) {
    let t = (r) => (r < n ? n : r > e ? e : r);
    return (r) => {
      if (typeof r == "number") return t(r);
      let o = parseFloat(r);
      if (Number.isNaN(o)) return r;
      let s = t(o);
      return s === o
        ? r
        : `${s}${r.replace(/^\s*[+-]?[\d.]+(?:e[+-]?\d+)?/i, "")}`;
    };
  }
});
var Eo = O((bo) => {
  "use strict";
  Object.defineProperty(bo, "__esModule", { value: !0 });
  function Hh(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Hh(bo, {
    build: function () {
      return Xh;
    },
    createStyleTweenConfig: function () {
      return Za;
    },
  });
  var rt = Ve(),
    zh = qa(),
    D = Ya();
  function Ka(n, e) {
    return e != null && typeof n == "string" && n.startsWith("var(")
      ? (0, rt.resolveToString)(n, e) ?? n
      : n;
  }
  var Xa = new Set(["opacity", "autoAlpha"]),
    Wh = new Set(["scale", "scaleX", "scaleY", "z", "transformPerspective"]),
    Yh = new Set(["xPercent", "yPercent"]),
    Qa = new Set(["width", "height"]);
  function xt(n) {
    return n.startsWith("+=") || n.startsWith("-=") || n.startsWith("random(");
  }
  function Kh(n) {
    if (Xa.has(n)) return (0, D.makeClamp)(0, 1);
    if (Wh.has(n) || Qa.has(n)) return (0, D.makeClamp)(0, Number.MAX_VALUE);
  }
  function kt(n) {
    return (
      (0, D.isRandomValue)(n) ||
      (0, D.isAdditiveValue)(n) ||
      (0, D.isRandomArrayValue)(n)
    );
  }
  function Lt(n, e) {
    let t = Xa.has(n) ? 100 : 1,
      r = t !== 1 || Yh.has(n),
      o = (s) => ({
        type: "ix3-random",
        min: s.min / t,
        max: s.max / t,
        step: s.step != null ? s.step / t : void 0,
      });
    if ((0, D.isRandomArrayValue)(e)) {
      let s = r
        ? {
            type: "ix3-random-array",
            values: e.values.map((i) => (typeof i == "number" ? i / t : i)),
          }
        : e;
      return (0, D.makeRandomArrayPicker)(s);
    }
    if ((0, D.isRandomValue)(e)) return (0, D.makeRandomPicker)(r ? o(e) : e);
    if (r) {
      let s = (0, D.isRandomValue)(e.value) ? o(e.value) : e.value / t;
      return (0, D.applyAdditive)({ type: "ix3-additive", value: s });
    }
    return (0, D.applyAdditive)(e);
  }
  function Za(n, e) {
    let t = { to: {}, from: {} },
      r = e?.[0];
    for (let o in n) {
      let s = n[o],
        i = Array.isArray(s) ? s[1] : s,
        a = Array.isArray(s) ? s[0] : void 0,
        c = kt(i) ? Lt(o, i) : Ka(i, r),
        l = kt(a) ? Lt(o, a) : a !== void 0 ? Ka(a, r) : void 0;
      c != null && (t.to[o] = c),
        l != null && !(0, D.isAdditiveValue)(i) && (t.from[o] = l),
        Qa.has(o) &&
          (kt(i) || kt(a)) &&
          (t.modifiers || (t.modifiers = {}),
          (t.modifiers[o] = (0, D.makeClamp)(0, Number.MAX_VALUE)));
    }
    return t;
  }
  function Xh(n) {
    (0, zh.buildMouseFollowAction)(n),
      n
        .addAction("class", {
          createCustomTween: (e, t, r, o, s, i) => {
            let a = r.class,
              c = a?.selectors || [],
              l = a?.operation,
              u = c
                ? s.map((d) => ({ element: d, classList: [...d.classList] }))
                : [],
              f = () => {
                if (!(!l || !c))
                  for (let d of s)
                    l === "addClass"
                      ? c.forEach((p) => d.classList.add(p))
                      : l === "removeClass"
                      ? c.forEach((p) => d.classList.remove(p))
                      : l === "toggleClass" &&
                        c.forEach((p) => d.classList.toggle(p));
              };
            return (
              e.to(
                {},
                { duration: 0.001, onComplete: f, onReverseComplete: f },
                !i || i === 0 ? 0.001 : i
              ),
              () => {
                if (c) {
                  for (let d of u)
                    if (
                      d.element &&
                      (d.element instanceof HTMLElement &&
                        (d.element.className = ""),
                      d.element.classList)
                    )
                      for (let p of d.classList) d.element.classList.add(p);
                }
              }
            );
          },
        })
        .addAction("style", { createTweenConfig: Za })
        .addAction("transform", {
          createTweenConfig: (e, t) => {
            let r = { to: {}, from: {} },
              o = t?.[0];
            for (let s in e) {
              let i = e[s],
                a = Array.isArray(i) ? i[1] : i,
                c = Array.isArray(i) ? i[0] : void 0,
                l = (0, D.isAdditiveValue)(a),
                u =
                  (0, D.isRandomValue)(a) || (0, D.isRandomArrayValue)(a) || l,
                f =
                  (0, D.isRandomValue)(c) ||
                  (0, D.isRandomArrayValue)(c) ||
                  (0, D.isAdditiveValue)(c);
              if (u || f) {
                let d = Kh(s);
                d &&
                  (r.modifiers || (r.modifiers = {}),
                  (r.modifiers[s] = d),
                  s === "autoAlpha" && (r.modifiers.opacity = d),
                  s === "scale" &&
                    ((r.modifiers.scaleX = d), (r.modifiers.scaleY = d))),
                  u && (a = Lt(s, a)),
                  f && (c = Lt(s, c));
              }
              switch (s) {
                case "autoAlpha":
                case "opacity": {
                  if (a != null && typeof a == "string" && !xt(a)) {
                    let d = o ? (0, rt.resolveToNumber)(a, o) : parseFloat(a);
                    a = d !== void 0 ? d / 100 : a;
                  }
                  if (c != null && typeof c == "string" && !xt(c)) {
                    let d = o ? (0, rt.resolveToNumber)(c, o) : parseFloat(c);
                    c = d !== void 0 ? d / 100 : c;
                  }
                  break;
                }
                case "transformOrigin": {
                  typeof i == "string"
                    ? ((a = a || i), (c = a))
                    : typeof c == "string"
                    ? (a = c)
                    : typeof a == "string" && (c = a);
                  break;
                }
                case "xPercent":
                case "yPercent": {
                  if (a != null && typeof a == "string" && !xt(a)) {
                    let d = o ? (0, rt.resolveToNumber)(a, o) : parseFloat(a);
                    a = d !== void 0 ? d : a;
                  }
                  if (c != null && typeof c == "string" && !xt(c)) {
                    let d = o ? (0, rt.resolveToNumber)(c, o) : parseFloat(c);
                    c = d !== void 0 ? d : c;
                  }
                  break;
                }
              }
              a != null && (r.to[s] = a), c != null && !l && (r.from[s] = c);
            }
            return r;
          },
        });
  }
});
var tc = O((So) => {
  "use strict";
  Object.defineProperty(So, "__esModule", { value: !0 });
  Object.defineProperty(So, "buildLottieAction", {
    enumerable: !0,
    get: function () {
      return Zh;
    },
  });
  var Qh = Ve();
  function Zh(n) {
    n.addAction("lottie", {
      createCustomTween: (e, t, r, o, s, i) => {
        let a = r.lottie;
        if (!a || !s.length || !window.Webflow) return;
        let c = window.Webflow.require?.("lottie");
        if (!c) return;
        let l = [],
          u = !1;
        for (let f of s) {
          let d = ec(a.from, f, Ja.FROM),
            p = ec(a.to, f, Ja.TO),
            h = c.createInstance(f);
          if (!h) continue;
          l.push(h);
          let g = () => {
            if (u) return;
            let y = h.frames,
              S = Math.round(d * y),
              b = Math.round(p * y);
            h.gsapFrame === null && (h.gsapFrame = S);
            let m = o;
            m.ease || (m = { ...m, ease: "none" }),
              e.fromTo(h, { gsapFrame: S }, { gsapFrame: b, ...m }, i || 0);
          };
          h.isLoaded ? g() : h.onDataReady(g);
        }
        return () => {
          u = !0;
          for (let f of l) f.goToFrameAndStop(0), (f.gsapFrame = null);
        };
      },
    });
  }
  var Ja = { DURATION: 1, FROM: 0, TO: 1 };
  function ec(n, e, t) {
    if (typeof n == "number") return n;
    let r = (0, Qh.resolveToNumber)(n, e);
    return r !== void 0 ? r / 100 : t;
  }
});
var Oo = O((wo) => {
  "use strict";
  Object.defineProperty(wo, "__esModule", { value: !0 });
  Object.defineProperty(wo, "RIVE_CONSTANTS", {
    enumerable: !0,
    get: function () {
      return Jh;
    },
  });
  var Jh = { MINIMUM_TIME: 0.001, MAX_BYTE_VALUE: 255 };
});
var Ro = O((_o) => {
  "use strict";
  Object.defineProperty(_o, "__esModule", { value: !0 });
  function eg(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  eg(_o, {
    clearSurfaceCache: function () {
      return tg;
    },
    surfaceCache: function () {
      return Ao;
    },
  });
  var Ao = new WeakMap();
  function tg(n, e) {
    if (!e) return;
    let t = `${e.name}:${e.instanceName ?? ""}`,
      r = Ao.get(n);
    r && (r.delete(t), r.size === 0 && Ao.delete(n));
  }
});
var ot = O((Io) => {
  "use strict";
  Object.defineProperty(Io, "__esModule", { value: !0 });
  function ng(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  ng(Io, {
    parseVmKey: function () {
      return sg;
    },
    vmKey: function () {
      return rg;
    },
  });
  function rg(n, e, t) {
    return `vm:${n}:${e}:${t}`;
  }
  var og = new Set([
    "string",
    "number",
    "boolean",
    "color",
    "enum",
    "trigger",
    "artboard",
  ]);
  function sg(n) {
    if (!n.startsWith("vm:")) return null;
    let e = n.lastIndexOf(":"),
      t = n.slice(e + 1);
    if (!og.has(t)) return null;
    let r = n.slice(3, e),
      o = r.indexOf(":");
    return o === -1
      ? null
      : { vmName: r.slice(0, o), propName: r.slice(o + 1), propType: t };
  }
});
var Nt = O((Mo) => {
  "use strict";
  Object.defineProperty(Mo, "__esModule", { value: !0 });
  function ig(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  ig(Mo, {
    getVmiProperty: function () {
      return nc;
    },
    storeOriginalValues: function () {
      return cg;
    },
  });
  var ag = ot();
  function cg(n, e) {
    let t = { viewModelProperties: {} };
    for (let r of n) lg(e, r.propertyName, r.propertyType, t);
    return t;
  }
  function lg(n, e, t, r) {
    let o = (0, ag.vmKey)(n.name, e, t);
    if (!(o in r.viewModelProperties)) {
      if (t === "artboard") {
        let i = n.riveInstance.viewModelInstance?.artboard?.(e)?.name;
        i != null && (r.viewModelProperties[o] = i);
        return;
      }
      let s = n.riveInstance.viewModelInstance
        ? ug(n.riveInstance.viewModelInstance, t, e)
        : null;
      s != null && (r.viewModelProperties[o] = s);
    }
  }
  function nc(n, e, t) {
    switch (e) {
      case "number":
        return n.number(t);
      case "boolean":
        return n.boolean(t);
      case "string":
        return n.string(t);
      case "color":
        return n.color(t);
      case "enum":
        return n.enum(t);
      default:
        return null;
    }
  }
  function ug(n, e, t) {
    let r = nc(n, e, t);
    return r ? r.value : void 0;
  }
});
var Po = O((Co) => {
  "use strict";
  Object.defineProperty(Co, "__esModule", { value: !0 });
  Object.defineProperty(Co, "parseColorToAARRGGBB", {
    enumerable: !0,
    get: function () {
      return dg;
    },
  });
  var fg = Oo();
  function dg(n) {
    let e = n.trim();
    if (!e) return null;
    try {
      let { red: t, green: r, blue: o, alpha: s } = hg(e);
      return t === void 0 || r === void 0 || o === void 0
        ? null
        : ((Math.round(s * fg.RIVE_CONSTANTS.MAX_BYTE_VALUE) << 24) |
            (t << 16) |
            (r << 8) |
            o) >>>
            0;
    } catch {
      return null;
    }
  }
  var Se = null;
  function pg(n) {
    if (!Se) {
      let e = document.createElement("canvas");
      if (((e.width = 1), (e.height = 1), (Se = e.getContext("2d")), !Se))
        return null;
    }
    return (
      (Se.fillStyle = "#000000"),
      (Se.fillStyle = n),
      Se.fillStyle === "#000000" && n.toLowerCase() !== "black"
        ? null
        : Se.fillStyle
    );
  }
  function rc(n, e, t) {
    let r = (1 - Math.abs(2 * t - 1)) * e,
      o = r * (1 - Math.abs(((n / 60) % 2) - 1)),
      s = t - r / 2,
      i,
      a,
      c;
    return (
      n >= 0 && n < 60
        ? ((i = r), (a = o), (c = 0))
        : n >= 60 && n < 120
        ? ((i = o), (a = r), (c = 0))
        : n >= 120 && n < 180
        ? ((i = 0), (a = r), (c = o))
        : n >= 180 && n < 240
        ? ((i = 0), (a = o), (c = r))
        : n >= 240 && n < 300
        ? ((i = o), (a = 0), (c = r))
        : ((i = r), (a = 0), (c = o)),
      {
        red: Math.round((i + s) * 255),
        green: Math.round((a + s) * 255),
        blue: Math.round((c + s) * 255),
      }
    );
  }
  function hg(n) {
    let e,
      t,
      r,
      o = 1,
      s = n.replace(/\s/g, "").toLowerCase(),
      i = s;
    if (!i.startsWith("#") && !i.startsWith("rgb") && !i.startsWith("hsl")) {
      let a = pg(s);
      a && (i = a);
    }
    if (i.startsWith("#")) {
      let a = i.substring(1);
      a.length === 3 || a.length === 4
        ? ((e = parseInt(a.charAt(0) + a.charAt(0), 16)),
          (t = parseInt(a.charAt(1) + a.charAt(1), 16)),
          (r = parseInt(a.charAt(2) + a.charAt(2), 16)),
          a.length === 4 && (o = parseInt(a.charAt(3) + a.charAt(3), 16) / 255))
        : (a.length === 6 || a.length === 8) &&
          ((e = parseInt(a.substring(0, 2), 16)),
          (t = parseInt(a.substring(2, 4), 16)),
          (r = parseInt(a.substring(4, 6), 16)),
          a.length === 8 && (o = parseInt(a.substring(6, 8), 16) / 255));
    } else if (i.startsWith("rgba")) {
      let a = i.match(/rgba\(([^)]+)\)/)?.[1]?.split(",");
      (e = parseInt(a?.[0] ?? "", 10)),
        (t = parseInt(a?.[1] ?? "", 10)),
        (r = parseInt(a?.[2] ?? "", 10)),
        (o = parseFloat(a?.[3] ?? ""));
    } else if (i.startsWith("rgb")) {
      let a = i.match(/rgb\(([^)]+)\)/)?.[1]?.split(",");
      (e = parseInt(a?.[0] ?? "", 10)),
        (t = parseInt(a?.[1] ?? "", 10)),
        (r = parseInt(a?.[2] ?? "", 10));
    } else if (i.startsWith("hsla")) {
      let a = i.match(/hsla\(([^)]+)\)/)?.[1]?.split(","),
        c = parseFloat(a?.[0] ?? ""),
        l = parseFloat(a?.[1]?.replace("%", "") ?? "") / 100,
        u = parseFloat(a?.[2]?.replace("%", "") ?? "") / 100;
      (o = parseFloat(a?.[3] ?? "")),
        ({ red: e, green: t, blue: r } = rc(c, l, u));
    } else if (i.startsWith("hsl")) {
      let a = i.match(/hsl\(([^)]+)\)/)?.[1]?.split(","),
        c = parseFloat(a?.[0] ?? ""),
        l = parseFloat(a?.[1]?.replace("%", "") ?? "") / 100,
        u = parseFloat(a?.[2]?.replace("%", "") ?? "") / 100;
      ({ red: e, green: t, blue: r } = rc(c, l, u));
    }
    if (
      Number.isNaN(e) ||
      Number.isNaN(t) ||
      Number.isNaN(r) ||
      Number.isNaN(o)
    )
      throw new Error(`Invalid color value: '${n}'`);
    return { red: e, green: t, blue: r, alpha: o };
  }
});
var ko = O((xo) => {
  "use strict";
  Object.defineProperty(xo, "__esModule", { value: !0 });
  Object.defineProperty(xo, "setVmiValue", {
    enumerable: !0,
    get: function () {
      return vg;
    },
  });
  var gg = ot(),
    mg = Nt(),
    yg = Po();
  function vg(n, e, t, r, o, s) {
    let i = n.riveInstance.viewModelInstance;
    if (e === "trigger") {
      if (s) return;
      i?.trigger?.(t)?.fire?.();
      return;
    }
    if (!i) return;
    let a = (0, mg.getVmiProperty)(i, e, t);
    if (!a) return;
    let c = o?.viewModelProperties[(0, gg.vmKey)(n.name, t, e)],
      l = s ? c ?? r : r,
      u = `${e}:${t}`;
    switch (e) {
      case "number":
        typeof l == "number" && ((a.value = l), (n.currentValues[u] = l));
        return;
      case "boolean":
        typeof l == "boolean" && ((a.value = l), (n.currentValues[u] = l));
        return;
      case "string":
        typeof l == "string" && ((a.value = l), (n.currentValues[u] = l));
        return;
      case "enum":
        typeof l == "string" && ((a.value = l), (n.currentValues[u] = l));
        return;
      case "color": {
        let f =
          typeof l == "number"
            ? l
            : typeof l == "string"
            ? (0, yg.parseColorToAARRGGBB)(l)
            : null;
        f != null && ((a.value = f), (n.currentValues[u] = f));
        return;
      }
      default:
        return;
    }
  }
});
var sc = O((Lo) => {
  "use strict";
  Object.defineProperty(Lo, "__esModule", { value: !0 });
  function Tg(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Tg(Lo, {
    createCleanupFunction: function () {
      return wg;
    },
    restoreViewModelProperties: function () {
      return oc;
    },
  });
  var bg = ot(),
    Eg = ko(),
    Sg = Ro();
  function oc(n, e, t) {
    let r = n.viewModelInstance ?? null;
    if (r)
      for (let [o, s] of Object.entries(t.viewModelProperties)) {
        let i = (0, bg.parseVmKey)(o);
        if (!i || i.vmName !== e) continue;
        let a = { name: e, riveInstance: n, currentValues: {} };
        if (i.propType === "artboard") {
          if (typeof s != "string") continue;
          let c = r.artboard?.(i.propName),
            l = n.getArtboard?.(s);
          c && l && (c.value = l);
          continue;
        }
        (0, Eg.setVmiValue)(a, i.propType, i.propName, s);
      }
  }
  function wg(n, e, t) {
    return () => {
      !e || !n || (oc(n, e.name, t), (0, Sg.clearSurfaceCache)(n, e));
    };
  }
});
var cc = O((No) => {
  "use strict";
  Object.defineProperty(No, "__esModule", { value: !0 });
  function Og(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Og(No, {
    interpolateAARRGGBB: function () {
      return ac;
    },
    setupAnimateTimeline: function () {
      return Rg;
    },
  });
  var Ag = Nt(),
    _g = Po(),
    ic = Ve();
  function ac(n, e, t) {
    let r = (n >>> 24) & 255,
      o = (n >>> 16) & 255,
      s = (n >>> 8) & 255,
      i = n & 255,
      a = (e >>> 24) & 255,
      c = (e >>> 16) & 255,
      l = (e >>> 8) & 255,
      u = e & 255,
      f = Math.round(r + (a - r) * t),
      d = Math.round(o + (c - o) * t),
      p = Math.round(s + (l - s) * t),
      h = Math.round(i + (u - i) * t);
    return ((f << 24) | (d << 16) | (p << 8) | h) >>> 0;
  }
  function Rg(n, e, t, r, o, s) {
    if (t.length === 0) return;
    let i = e.riveInstance.viewModelInstance;
    if (i)
      for (let a of t) {
        if (
          a.value === null ||
          a.value === void 0 ||
          !(0, Ag.getVmiProperty)(i, a.propertyType, a.propertyName)
        )
          continue;
        let l,
          u = a.value;
        if (typeof u == "string" && u.startsWith("var(")) {
          if (
            (a.propertyType === "number"
              ? (l = (0, ic.resolveToNumber)(u, s))
              : a.propertyType === "color" &&
                (l = (0, ic.resolveToString)(u, s)),
            l === void 0)
          )
            continue;
        } else l = u;
        a.propertyType === "number"
          ? Ig(e, n, a.propertyName, l, r, o)
          : a.propertyType === "color" && Mg(e, n, a.propertyName, l, r, o);
      }
  }
  function Ig(n, e, t, r, o, s) {
    let i = n.riveInstance.viewModelInstance;
    if (!i) return;
    let a = i.number(t);
    if (!a) return;
    let c = typeof r == "number" ? r : parseFloat(String(r));
    if (isNaN(c)) return;
    let l = { v: a.value };
    e.to(
      l,
      {
        ...o,
        v: c,
        onStart() {
          let u = n.currentValues[`number:${t}`];
          (l.v = typeof u == "number" ? u : a.value), this.invalidate();
        },
        onUpdate: () => {
          a.value = l.v;
        },
      },
      s ?? 0
    );
  }
  function Mg(n, e, t, r, o, s) {
    let i = n.riveInstance.viewModelInstance;
    if (!i) return;
    let a = i.color(t);
    if (!a) return;
    let c = typeof r == "number" ? r : (0, _g.parseColorToAARRGGBB)(String(r));
    if (c == null) return;
    let l = { fromPacked: a.value },
      u = { t: 0 };
    e.fromTo(
      u,
      { t: 0 },
      {
        ...o,
        t: 1,
        onStart() {
          let f = n.currentValues[`color:${t}`];
          (l.fromPacked = typeof f == "number" ? f : a.value),
            this.invalidate();
        },
        onUpdate: () => {
          a.value = ac(l.fromPacked, c, u.t);
        },
      },
      s ?? 0
    );
  }
});
var pc = O((Vo) => {
  "use strict";
  Object.defineProperty(Vo, "__esModule", { value: !0 });
  function Cg(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Cg(Vo, {
    resolveSurfaceArea: function () {
      return Do;
    },
    setupAnimateAnimation: function () {
      return Fg;
    },
    setupAnimation: function () {
      return Ng;
    },
    setupTimeline: function () {
      return dc;
    },
  });
  var lc = Oo(),
    Fo = Ro(),
    uc = Nt(),
    fc = sc(),
    Pg = ko(),
    xg = cc(),
    kg = ot(),
    Ft = Ve();
  function Do(n, e) {
    if (!e) return null;
    let t = `${e.name}:${e.instanceName ?? ""}`,
      r = Fo.surfaceCache.get(n)?.get(t);
    if (r) return r;
    let s =
      (n.viewModelByName?.(e.name) ?? void 0)?.instanceByName?.(
        e.instanceName ?? ""
      ) ?? null;
    n.bindViewModelInstance?.(s);
    let i = { name: e.name, riveInstance: n, currentValues: {} },
      a = Fo.surfaceCache.get(n);
    return a || ((a = new Map()), Fo.surfaceCache.set(n, a)), a.set(t, i), i;
  }
  function dc(n, e, t, r, o, s) {
    if (t.length === 0) return;
    for (let c of t) {
      if (
        c.propertyType === "trigger" ||
        c.propertyType === "artboard" ||
        c.value === null ||
        c.value === void 0
      )
        continue;
      let l = c.value,
        u;
      typeof l == "string" && l.startsWith("var(")
        ? (u =
            c.propertyType === "number"
              ? (0, Ft.resolveToNumber)(l, s)
              : c.propertyType === "color"
              ? (0, Ft.resolveToString)(l, s)
              : void 0)
        : (u = l),
        u !== void 0 &&
          (e.currentValues[`${c.propertyType}:${c.propertyName}`] = u);
    }
    let i = (c) => {
        for (let l of t) {
          if (
            (l.propertyType !== "trigger" && l.value === null) ||
            l.value === void 0
          )
            continue;
          let u,
            f = l.value;
          if (typeof f == "string" && f.startsWith("var(")) {
            if (
              (l.propertyType === "number"
                ? (u = (0, Ft.resolveToNumber)(f, s))
                : l.propertyType === "color" &&
                  (u = (0, Ft.resolveToString)(f, s)),
              u === void 0)
            )
              continue;
          } else u = f;
          Lg(e, l.propertyName, l.propertyType, u, r, c);
        }
      },
      a = { int: 0 };
    n.to(
      a,
      {
        int: 1,
        duration: lc.RIVE_CONSTANTS.MINIMUM_TIME,
        onStart: () => {
          i(!1);
        },
        onReverseComplete: () => {
          i(!0);
        },
      },
      o ?? lc.RIVE_CONSTANTS.MINIMUM_TIME
    );
  }
  function Lg(n, e, t, r, o, s) {
    if (t === "artboard") {
      if (typeof r != "string") return;
      let i = n.riveInstance.viewModelInstance?.artboard?.(e);
      if (!i) return;
      if (s) {
        let c = (0, kg.vmKey)(n.name, e, t),
          l = o?.viewModelProperties[c];
        if (typeof l == "string") {
          let u = n.riveInstance.getArtboard?.(l);
          u && (i.value = u);
        }
        return;
      }
      let a = n.riveInstance.getArtboard?.(r);
      if (!a) return;
      i.value = a;
      return;
    }
    (0, Pg.setVmiValue)(n, t, e, r, o, s);
  }
  function Ng(n, e, t, r, o) {
    let s = e.animationSource,
      i = Do(n, s);
    if (!i) return;
    let a = e.addedProperties ?? {},
      c = Object.values(a),
      l = (0, uc.storeOriginalValues)(c, i);
    return dc(t, i, c, l, r, o), (0, fc.createCleanupFunction)(n, s, l);
  }
  function Fg(n, e, t, r, o, s) {
    let i = e.animationSource,
      a = Do(n, i);
    if (!a) return;
    let c = e.addedProperties ?? {},
      l = Object.values(c),
      u = (0, uc.storeOriginalValues)(l, a);
    return (
      (0, xg.setupAnimateTimeline)(t, a, l, r, o, s),
      (0, fc.createCleanupFunction)(n, i, u)
    );
  }
});
var Tc = O((Bo) => {
  "use strict";
  Object.defineProperty(Bo, "__esModule", { value: !0 });
  function Dg(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Dg(Bo, {
    buildAnimateRiveAction: function () {
      return jg;
    },
    buildRiveAction: function () {
      return Bg;
    },
  });
  var mc = pc();
  function hc(n) {
    return (
      typeof n == "object" &&
      n !== null &&
      "loaded" in n &&
      typeof n.loaded == "boolean"
    );
  }
  function gc(n) {
    !n.isPlaying && n.play && n.play();
  }
  function Vg(n, e, t) {
    let o = e.getInstance(n)?.rive,
      s = hc(o) ? o : null;
    if (s?.loaded) return gc(s), t(s, n);
    let i,
      a = !1,
      c = () => {
        if (a || !n.isConnected) return;
        let u = e.getInstance(n)?.rive,
          f = hc(u) ? u : null;
        f?.loaded && (gc(f), (i = t(f, n))),
          n.removeEventListener("w-rive-load", c);
      };
    return (
      n.addEventListener("w-rive-load", c),
      () => {
        (a = !0), n.removeEventListener("w-rive-load", c), i?.();
      }
    );
  }
  function yc(n, e, t) {
    let r = [];
    for (let o of n) {
      let s = Vg(o, e, t);
      s && r.push(s);
    }
    if (r.length !== 0)
      return () => {
        for (let o of r) o();
      };
  }
  function vc() {
    return window.Webflow ? window.Webflow.require?.("rive") ?? null : null;
  }
  function Bg(n) {
    n.addAction("rive", {
      createCustomTween: (e, t, r, o, s, i) => {
        let a = r.rive;
        if (!a || !s.length) return;
        let c = vc();
        if (c) return yc(s, c, (l, u) => (0, mc.setupAnimation)(l, a, e, i, u));
      },
    });
  }
  function jg(n) {
    n.addAction("animate-rive", {
      createCustomTween: (e, t, r, o, s, i) => {
        let a = r.rive;
        if (!a || !s.length) return;
        let c = vc();
        if (c)
          return yc(s, c, (l, u) =>
            (0, mc.setupAnimateAnimation)(l, a, e, o, i, u)
          );
      },
    });
  }
});
var we = O((jo) => {
  "use strict";
  Object.defineProperty(jo, "__esModule", { value: !0 });
  function Gg(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Gg(jo, {
    checkTt: function () {
      return zg;
    },
    hasBBoxUpdate: function () {
      return qg;
    },
    hasIntensity: function () {
      return Ug;
    },
    hasMatrixUpdate: function () {
      return Hg;
    },
    hasRenderOrder: function () {
      return $g;
    },
  });
  var Dt = Y(),
    Ug = (n) => "intensity" in n,
    $g = (n) => "renderOrder" in n,
    qg = (n) => "singleBBoxNeedsUpdate" in n && "recursiveBBoxNeedsUpdate" in n,
    Hg = (n) => "updateMatrix" in n && "updateMatrixWorld" in n,
    zg = (n, e) =>
      e === "from"
        ? n === Dt.TweenType.From || n === Dt.TweenType.FromTo
        : n === Dt.TweenType.To || n === Dt.TweenType.FromTo;
});
var Uo = O((Go) => {
  "use strict";
  Object.defineProperty(Go, "__esModule", { value: !0 });
  Object.defineProperty(Go, "colorDataToCss", {
    enumerable: !0,
    get: function () {
      return Wg;
    },
  });
  var Wg = ({ r: n, g: e, b: t, a: r }) => {
    let o = (l) => Math.round(Math.min(1, Math.max(0, l)) * 255),
      s = o(n),
      i = o(e),
      a = o(t);
    if (r === void 0 || r >= 1) return `rgba(${s}, ${i}, ${a}, 1)`;
    let c = Math.min(1, Math.max(0, r));
    return `rgba(${s}, ${i}, ${a}, ${c})`;
  };
});
var bc = O(($o) => {
  "use strict";
  Object.defineProperty($o, "__esModule", { value: !0 });
  Object.defineProperty($o, "storeOriginalState", {
    enumerable: !0,
    get: function () {
      return Xg;
    },
  });
  var Yg = we(),
    Kg = Uo(),
    Xg = (n, e, t) => {
      let r = n.material,
        o = Array.isArray(r) ? r : r ? [r] : [],
        s = e.spline._scene.entityByUuid[t]?.color,
        i = s ? (0, Kg.colorDataToCss)(s) : void 0,
        a = n.rotation;
      return {
        position: { ...n.position },
        rotation: { x: a._x ?? 0, y: a._y ?? 0, z: a._z ?? 0 },
        scale: { ...n.scale },
        ...(i ? { color: i } : {}),
        intensity: n.intensity,
        renderOrder: (0, Yg.hasRenderOrder)(n) ? n.renderOrder : void 0,
        materials: o?.map((c) => ({
          transparent: c.transparent,
          depthWrite: c.depthWrite,
          alpha: c.alpha,
          layers: (c.layers ?? []).map((l) => ({
            visible: l.visible,
            alpha: l.alpha,
            alphaOverride: l.alphaOverride,
            ior: l.ior,
            thickness: l.thickness,
          })),
        })),
      };
    };
});
var st = O((qo) => {
  "use strict";
  Object.defineProperty(qo, "__esModule", { value: !0 });
  Object.defineProperty(qo, "SPLINE_CONSTANTS", {
    enumerable: !0,
    get: function () {
      return Qg;
    },
  });
  var Qg = {
    OPACITY_RENDER_ORDER: 999,
    TRANSITION_END_OFFSET: 0.001,
    DEFAULT_TRANSITION_DURATION: 0.5,
    OPACITY_TRANSPARENCY_THRESHOLD: 0.01,
    DEFAULT_TRANSMISSION_IOR: 1.3,
    DEFAULT_TRANSMISSION_THICKNESS: 10,
    MIN_ZOOM_VALUE: 1e-4,
  };
});
var Vt = O((Ho) => {
  "use strict";
  Object.defineProperty(Ho, "__esModule", { value: !0 });
  function Zg(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Zg(Ho, {
    getAppZoom: function () {
      return em;
    },
    setAppZoom: function () {
      return tm;
    },
  });
  var Jg = st(),
    em = (n) => {
      let e = n._camera;
      return e._cameraType === "OrthographicCamera"
        ? e.orthoCamera.zoom
        : e.perspCamera.zoom;
    },
    tm = (n, e) => {
      let t = e > 0 ? e : Jg.SPLINE_CONSTANTS.MIN_ZOOM_VALUE;
      n.setZoom?.(t);
    };
});
var Wo = O((zo) => {
  "use strict";
  Object.defineProperty(zo, "__esModule", { value: !0 });
  Object.defineProperty(zo, "createCleanupFunction", {
    enumerable: !0,
    get: function () {
      return rm;
    },
  });
  var nm = Vt(),
    Bt = we(),
    rm = (n, e, t, r, o, s) => () => {
      if (!(!n || !t)) {
        if (
          (s && (n.state = void 0),
          Object.assign(n.position, t.position),
          Object.assign(n.rotation, {
            x: t.rotation.x,
            y: t.rotation.y,
            z: t.rotation.z,
          }),
          Object.assign(n.scale, t.scale),
          t.color && (n.color = t.color),
          r.spline?.intensity &&
            typeof r.spline.intensity == "object" &&
            t.intensity !== void 0 &&
            (0, Bt.hasIntensity)(n) &&
            (n.intensity = t.intensity),
          r.spline?.zoom && typeof r.spline.zoom == "object")
        ) {
          let i = e.spline;
          typeof i?.setZoom == "function" && (0, nm.setAppZoom)(i, o ?? 1);
        }
        if (t.materials) {
          let i = n.material,
            a = Array.isArray(i) ? i : i ? [i] : [];
          (0, Bt.hasRenderOrder)(n) && (n.renderOrder = t.renderOrder ?? 0);
          let c = Math.min(a.length, t.materials.length);
          for (let l = 0; l < c; l++) {
            let u = a[l],
              f = t.materials[l];
            if (!u || !f) continue;
            (u.transparent = f.transparent),
              (u.depthWrite = f.depthWrite),
              f.alpha !== void 0 && (u.alpha = f.alpha);
            let d = u.layers ?? [];
            for (let p = 0; p < d.length; p++) {
              let h = d[p],
                g = f.layers[p];
              !h ||
                !g ||
                ((h.visible = g.visible),
                g.alpha !== void 0 && (h.alpha = g.alpha),
                g.alphaOverride !== void 0 &&
                  (h.alphaOverride = g.alphaOverride),
                g.ior !== void 0 && (h.ior = g.ior),
                g.thickness !== void 0 && (h.thickness = g.thickness));
            }
          }
        }
        (0, Bt.hasMatrixUpdate)(n) &&
          (n.updateMatrix(), n.updateMatrixWorld(!0)),
          (0, Bt.hasBBoxUpdate)(n) &&
            ((n.singleBBoxNeedsUpdate = !0), (n.recursiveBBoxNeedsUpdate = !0)),
          e.spline.requestRender();
      }
    };
});
var Ec = O((Yo) => {
  "use strict";
  Object.defineProperty(Yo, "__esModule", { value: !0 });
  function om(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  om(Yo, {
    warnNoObjectId: function () {
      return sm;
    },
    warnNoObjectsFound: function () {
      return am;
    },
    warnObjectNotFound: function () {
      return im;
    },
  });
  var sm = () => {},
    im = (n) => {},
    am = (n) => {};
});
var Oc = O((Ko) => {
  "use strict";
  Object.defineProperty(Ko, "__esModule", { value: !0 });
  Object.defineProperty(Ko, "animateStateTransitions", {
    enumerable: !0,
    get: function () {
      return lm;
    },
  });
  var Sc = st(),
    cm = Wo(),
    wc = we(),
    lm = (n, e, t, r, o, s, i, a, c, l) => {
      let u = [];
      n.forEach((d) => {
        if (!d.transition) {
          u.push(null);
          return;
        }
        let p = c.duration ?? Sc.SPLINE_CONSTANTS.DEFAULT_TRANSITION_DURATION,
          h = d.transition({
            from:
              e.stateName?.from && (0, wc.checkTt)(a, "from")
                ? e.stateName.from
                : void 0,
            to:
              e.stateName?.to && (0, wc.checkTt)(a, "to")
                ? e.stateName.to
                : null,
            autoPlay: !1,
            duration: p,
            delay: 0,
          });
        u.push(h);
        let g = { time: 0 };
        i.fromTo(
          g,
          { time: 0 },
          {
            ...c,
            time: p - Sc.SPLINE_CONSTANTS.TRANSITION_END_OFFSET,
            onUpdate: () => {
              h.seek(g.time);
            },
          },
          l || 0
        );
      });
      let f = n.map((d, p) =>
        (0, cm.createCleanupFunction)(d, t, r[p], o, s, u[p])
      );
      return () => f.forEach((d) => d?.());
    };
});
var _c = O((Xo) => {
  "use strict";
  Object.defineProperty(Xo, "__esModule", { value: !0 });
  function um(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  um(Xo, {
    animateColor: function () {
      return hm;
    },
    animateIntensity: function () {
      return dm;
    },
    animateZoom: function () {
      return pm;
    },
  });
  var Ac = Vt(),
    fm = Uo(),
    Oe = we(),
    dm = (n, e, t, r, o, s) => {
      let i = e.intensity;
      if (!i || typeof i != "object") return;
      let a = n.intensity ?? 0,
        c = i.from && (0, Oe.checkTt)(r, "from") ? i.from : a,
        l = i.to && (0, Oe.checkTt)(r, "to") ? i.to : a,
        u = { v: c };
      t.fromTo(
        u,
        { v: c },
        {
          ...o,
          v: l,
          onUpdate: () => {
            (0, Oe.hasIntensity)(n) && (n.intensity = u.v);
          },
        },
        s || 0
      );
    },
    pm = (n, e, t, r, o, s) => {
      let i = e.zoom;
      if (!i || typeof i != "object" || typeof n.spline?.setZoom != "function")
        return;
      let a = (0, Ac.getAppZoom)(n.spline),
        c = i.from && (0, Oe.checkTt)(r, "from") ? i.from : a,
        l = i.to && (0, Oe.checkTt)(r, "to") ? i.to : a,
        u = { v: c };
      t.fromTo(
        u,
        { v: c },
        {
          ...o,
          v: l,
          onUpdate: () => {
            (0, Ac.setAppZoom)(n.spline, u.v);
          },
        },
        s || 0
      );
    },
    hm = (n, e, t, r, o, s, i, a) => {
      let c = e.color;
      if (!c || typeof c != "object" || (!c.from && !c.to)) return;
      let l = i.spline._scene.entityByUuid[a]?.color,
        u = (0, fm.colorDataToCss)(l ?? { r: 255, g: 255, b: 255 }),
        f = c.from && (0, Oe.checkTt)(r, "from") ? c.from : u,
        d = c.to && (0, Oe.checkTt)(r, "to") ? c.to : u,
        p = window.gsap.utils.interpolate(f, d),
        h = { t: 0 };
      t.fromTo(
        h,
        { t: 0 },
        {
          ...o,
          t: 1,
          onUpdate: function () {
            n.color = p(h.t);
          },
        },
        s || 0
      );
    };
});
var Ic = O((Qo) => {
  "use strict";
  Object.defineProperty(Qo, "__esModule", { value: !0 });
  function gm(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  gm(Qo, {
    createPropertyObject: function () {
      return Rc;
    },
    createTransformTargets: function () {
      return mm;
    },
  });
  var Rc = (n, e, t) => {
      let r = {},
        o = t[e];
      return (
        ["X", "Y", "Z"].forEach((s) => {
          let i = `${e}${s}`,
            a = n[i],
            c = s.toLowerCase(),
            l = o[c];
          a &&
            typeof a == "object" &&
            (r[c] = { from: a.from ?? l, to: a.to ?? l });
        }),
        { props: r }
      );
    },
    mm = (n, e) => {
      let t = ["position", "rotation", "scale"],
        r = [];
      return (
        t.forEach((o) => {
          let { props: s } = Rc(e, o, n);
          Object.keys(s).length > 0 && r.push({ object: n[o], props: s });
        }),
        r
      );
    };
});
var Mc = O((Jo) => {
  "use strict";
  Object.defineProperty(Jo, "__esModule", { value: !0 });
  Object.defineProperty(Jo, "fadeObject", {
    enumerable: !0,
    get: function () {
      return Em;
    },
  });
  var jt = st(),
    Zo = we(),
    ym = (n, e, t, r, o, s) => {
      r.fromTo(n, { alpha: e }, { ...o, alpha: t }, s);
    },
    vm = (n, e, t, r, o, s) => {
      let i = n.ior ?? jt.SPLINE_CONSTANTS.DEFAULT_TRANSMISSION_IOR,
        a = n.thickness ?? jt.SPLINE_CONSTANTS.DEFAULT_TRANSMISSION_THICKNESS;
      r.fromTo(
        n,
        { alpha: e, ior: i, thickness: a },
        {
          ...o,
          alpha: 1 - t,
          ior: window.gsap.utils.interpolate(i, 1, 1 - t),
          thickness: window.gsap.utils.interpolate(a, 0, 1 - t),
          onUpdate: () => {
            n.visible =
              n.alpha > jt.SPLINE_CONSTANTS.OPACITY_TRANSPARENCY_THRESHOLD;
          },
        },
        s
      );
    },
    Tm = (n, e, t, r, o, s) => {
      n.alphaOverride !== void 0 &&
        r.fromTo(n, { alphaOverride: e }, { ...o, alphaOverride: t }, s);
    },
    bm = (n, e, t, r, o, s) => {
      if (!n.visible) return;
      let i = n.type;
      i === "color" || i === "depth" || i === "outline"
        ? ym(n, e, t, r, o, s)
        : i === "transmission"
        ? vm(n, e, t, r, o, s)
        : i === "light" && Tm(n, e, t, r, o, s);
    },
    Em = (n, e, t, r, o, s) => {
      if (!n) return;
      let i = n.material,
        a = i?.layers;
      if (a) {
        (i.transparent = !0),
          (0, Zo.hasRenderOrder)(n) &&
            (n.renderOrder = jt.SPLINE_CONSTANTS.OPACITY_RENDER_ORDER);
        for (let c of a) {
          let l = c.type === "light" ? c.alphaOverride ?? 1 : c.alpha ?? 1,
            u = e.from !== void 0 && (0, Zo.checkTt)(r, "from") ? e.from : l,
            f = e.to !== void 0 && (0, Zo.checkTt)(r, "to") ? e.to : l;
          bm(c, u, f, t, o, s);
        }
      }
    };
});
var Pc = O((ns) => {
  "use strict";
  Object.defineProperty(ns, "__esModule", { value: !0 });
  Object.defineProperty(ns, "setupAnimation", {
    enumerable: !0,
    get: function () {
      return Im;
    },
  });
  var Sm = bc(),
    wm = Wo(),
    Om = Vt(),
    es = Ec(),
    Am = Oc(),
    ts = _c(),
    _m = Ic(),
    Rm = Mc(),
    Gt = we(),
    Cc = st(),
    Im = (n, e, t, r, o, s) => {
      t.ease || (t = { ...t, ease: "none" });
      let { force3D: i, ...a } = t;
      if (((t = { ...a }), !n.spline?.findObjectById)) return;
      let c = e.spline,
        l = (e.objectId || "").split(",").filter(Boolean);
      if (l.length === 0) {
        (0, es.warnNoObjectId)();
        return;
      }
      let u = l.flatMap((g) => {
        let y = n.spline.findObjectById?.(g);
        return y || ((0, es.warnObjectNotFound)(g), []);
      });
      if (u.length === 0) {
        (0, es.warnNoObjectsFound)(l);
        return;
      }
      let f = u.map((g) => (0, Sm.storeOriginalState)(g, n, l[0] ?? "")),
        d = (0, Om.getAppZoom)(n.spline);
      if (
        e.animatingState &&
        c?.stateName &&
        (c.stateName.from || c.stateName.to)
      )
        return (0, Am.animateStateTransitions)(u, c, n, f, e, d, r, o, t, s);
      if (!c) return;
      let p = Object.keys(c);
      if (p.length === 0 || (p.length === 1 && p[0] === "stateName")) return;
      u.forEach((g) => {
        (0, ts.animateIntensity)(g, c, r, o, t, s),
          (0, ts.animateZoom)(n, c, r, o, t, s),
          (0, ts.animateColor)(g, c, r, o, t, s, n, l[0] ?? "");
        let y = c.opacity && typeof c.opacity == "object" ? c.opacity : void 0;
        if (y !== void 0) {
          let b = {
              from: y.from !== void 0 ? y.from / 100 : void 0,
              to: y.to !== void 0 ? y.to / 100 : void 0,
            },
            m =
              t.immediateRender !== !1 &&
              b.from !== void 0 &&
              (0, Gt.checkTt)(o, "from")
                ? b.from
                : void 0;
          if (((0, Rm.fadeObject)(g, b, r, o, t, s), m !== void 0)) {
            let w = g.material,
              T = Array.isArray(w) ? w : w ? [w] : [];
            for (let v of T)
              (v.transparent = !0),
                (v.depthWrite =
                  m > Cc.SPLINE_CONSTANTS.OPACITY_TRANSPARENCY_THRESHOLD);
            (0, Gt.hasRenderOrder)(g) &&
              (g.renderOrder = Cc.SPLINE_CONSTANTS.OPACITY_RENDER_ORDER);
          }
        }
        (0, _m.createTransformTargets)(g, c).forEach(
          ({ object: b, props: m }) => {
            if (Object.keys(m).length === 0) return;
            let w = {},
              T = {};
            Object.keys(m).forEach((v) => {
              let E = m[v];
              E &&
                typeof E == "object" &&
                ((w[v] =
                  (0, Gt.checkTt)(o, "from") && E.from ? E.from : b[v] ?? 0),
                (T[v] = (0, Gt.checkTt)(o, "to") && E.to ? E.to : b[v] ?? 0));
            }),
              !(Object.keys(w).length === 0 && Object.keys(T).length === 0) &&
                r.fromTo(b, w, { ...t, ...T }, s || 0);
          }
        );
      });
      let h = u.map((g, y) => (0, wm.createCleanupFunction)(g, n, f[y], e, d));
      return () => h.forEach((g) => g?.());
    };
});
var Lc = O((rs) => {
  "use strict";
  Object.defineProperty(rs, "__esModule", { value: !0 });
  Object.defineProperty(rs, "buildSplineAction", {
    enumerable: !0,
    get: function () {
      return km;
    },
  });
  var xc = Pc(),
    Ut = Ve(),
    Mm = new Set(["color", "stateName"]),
    Cm = new Set(["rotationX", "rotationY", "rotationZ"]),
    kc = Math.PI / 180;
  function Pm(n, e) {
    if (!n.spline) return n;
    let t = n.spline,
      r = {},
      o = !1;
    for (let [s, i] of Object.entries(t)) {
      if (!i || typeof i != "object") {
        r[s] = i;
        continue;
      }
      let a = i;
      if (Mm.has(s)) {
        let c = a.from !== void 0 ? (0, Ut.resolveToString)(a.from, e) : void 0,
          l = a.to !== void 0 ? (0, Ut.resolveToString)(a.to, e) : void 0;
        (c !== a.from || l !== a.to) && (o = !0), (r[s] = { from: c, to: l });
      } else {
        let c = a.from !== void 0 ? (0, Ut.resolveToNumber)(a.from, e) : void 0,
          l = a.to !== void 0 ? (0, Ut.resolveToNumber)(a.to, e) : void 0,
          u = c !== a.from,
          f = l !== a.to;
        (u || f) && (o = !0),
          Cm.has(s)
            ? (r[s] = {
                from: c !== void 0 && u ? c * kc : c,
                to: l !== void 0 && f ? l * kc : l,
              })
            : (r[s] = { from: c, to: l });
      }
    }
    return o ? { ...n, spline: r } : n;
  }
  function xm(n, e, t, r, o, s, i) {
    let a = e.getInstance(n);
    if (a) return (0, xc.setupAnimation)(a, t, r, o, s, i);
    let c,
      l = () => {
        let u = e.getInstance(n);
        u && (c = (0, xc.setupAnimation)(u, t, r, o, s, i)),
          n.removeEventListener("w-spline-load", l);
      };
    return (
      n.addEventListener("w-spline-load", l),
      () => {
        n.removeEventListener("w-spline-load", l), c?.();
      }
    );
  }
  function km(n) {
    n.addAction("spline", {
      createCustomTween: (e, t, r, o, s, i) => {
        let a = t.tt ?? 0;
        if (!s.length || !window.Webflow || !r.objectId) return;
        let c = window.Webflow.require?.("spline");
        if (!c) return;
        let l = [];
        for (let u of s) {
          let f = Pm(r, u),
            d = xm(u, c, f, o, e, a, i);
          d && l.push(d);
        }
        if (l.length !== 0)
          return () => {
            for (let u of l) u?.();
          };
      },
    });
  }
});
var ss = O((os) => {
  "use strict";
  Object.defineProperty(os, "__esModule", { value: !0 });
  Object.defineProperty(os, "clearInlineCustomProperties", {
    enumerable: !0,
    get: function () {
      return Lm;
    },
  });
  function Lm(n, e) {
    let t = n.length,
      r = e.length,
      o = new Array(t);
    for (let s = 0; s < t; s++) {
      let i = n[s].style,
        a = new Array(r);
      for (let c = 0; c < r; c++) {
        let l = e[c];
        (a[c] = i.getPropertyValue(l)), i.removeProperty(l);
      }
      o[s] = a;
    }
    return () => {
      for (let s = 0; s < t; s++) {
        let i = n[s].style,
          a = o[s];
        for (let c = 0; c < r; c++) {
          let l = a[c];
          l ? i.setProperty(e[c], l) : i.removeProperty(e[c]);
        }
      }
    };
  }
});
var Gc = O((as) => {
  "use strict";
  Object.defineProperty(as, "__esModule", { value: !0 });
  Object.defineProperty(as, "buildVariableAction", {
    enumerable: !0,
    get: function () {
      return Fm;
    },
  });
  var is = Y(),
    Nm = ss();
  function Fm(n) {
    n.addAction("variable", {
      createCustomTween: (e, t, r, o, s, i) => {
        let a = r.variable;
        if (!a) return;
        let c = Object.keys(a),
          l = c.length;
        if (l === 0) return;
        let u = (t.targets?.length ?? 0) > 0;
        if (u && s.length === 0) return;
        let f = u ? Array.from(new Set(s)) : Dm(c),
          d = f.length,
          p = (0, Nm.clearInlineCustomProperties)(f, c),
          h = t.tt ?? is.TweenType.To,
          g = i || 0,
          { force3D: y, ...S } = o,
          b = c.some((w) => a[w].startsWith("var(")),
          m = (w) => {
            let T = {};
            for (let v = 0; v < l; v++) {
              let E = c[v],
                _ = a[E];
              T[E] = Dc(
                (w &&
                  _.startsWith("var(") &&
                  w.getPropertyValue(_.slice(4, -1)).trim()) ||
                  _
              );
            }
            return T;
          };
        if (u)
          for (let w = 0; w < d; w++) {
            let T = f[w],
              v = m(b ? getComputedStyle(T) : null);
            Nc(e, h, T, { ...v, ...S }, g, c);
          }
        else {
          let T = {
            ...m(b ? getComputedStyle(document.documentElement) : null),
            ...S,
          };
          for (let v = 0; v < d; v++) Nc(e, h, f[v], T, g, c);
        }
        return p;
      },
    });
  }
  function Dm(n) {
    let e = [document.documentElement];
    if (n.length === 0) return e;
    let t = Bm(n) ?? jm(n);
    for (let r = 0; r < t.length; r++) e.push(t[r]);
    return e;
  }
  function Dc(n) {
    return n.replace(/(^|[^\d.])\.(\d)/g, "$10.$2");
  }
  function Vm(n, e) {
    let t = getComputedStyle(n),
      r = null;
    for (let o = 0; o < e.length; o++) {
      let s = e[o],
        i = t.getPropertyValue(s).trim(),
        a = Dc(i);
      a !== i && ((r ??= {})[s] = a);
    }
    return r;
  }
  function Nc(n, e, t, r, o, s) {
    e === is.TweenType.From
      ? n.from(t, r, o)
      : e === is.TweenType.Set
      ? n.set(t, r, o)
      : (n.add(() => {
          let i = Vm(t, s);
          i && window.gsap.set(t, i);
        }, o),
        n.to(t, r, o));
  }
  function Bm(n) {
    let e = new Set([document.documentElement]),
      t = [],
      r = new Map();
    try {
      let o = document.styleSheets;
      for (let s = 0; s < o.length; s++) Vc(o[s].cssRules, n, t, e, r);
      return t;
    } catch {
      return null;
    }
  }
  function Vc(n, e, t, r, o) {
    for (let s = 0; s < n.length; s++) {
      let i = n[s];
      if (i instanceof CSSMediaRule) {
        let c = i.conditionText,
          l = o.get(c);
        l === void 0 && ((l = matchMedia(c).matches), o.set(c, l)),
          l && Vc(i.cssRules, e, t, r, o);
        continue;
      }
      if (!(i instanceof CSSStyleRule)) continue;
      let a = i.style;
      for (let c = 0; c < e.length; c++)
        if (a.getPropertyValue(e[c])) {
          try {
            let l = document.querySelectorAll(i.selectorText);
            for (let u = 0; u < l.length; u++) {
              let f = l[u];
              r.has(f) || (r.add(f), t.push(f));
            }
          } catch {}
          break;
        }
    }
  }
  var Bc = "__ix3__";
  function jm(n) {
    let e = document.documentElement,
      t = document.body,
      r = [],
      o = n.length,
      s = [],
      i = [];
    jc(e, n, o, s, i), Fc(t, n, o, r, s, i);
    let a = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT),
      c;
    for (; (c = a.nextNode()); ) Fc(c, n, o, r, s, i);
    for (let l = 0; l < s.length; l++) {
      let u = s[l].style,
        f = i[l];
      for (let d = 0; d < o; d++) {
        let p = f[d];
        p ? u.setProperty(n[d], p) : u.removeProperty(n[d]);
      }
    }
    return r;
  }
  function jc(n, e, t, r, o) {
    let s = n.style,
      i = new Array(t);
    for (let a = 0; a < t; a++) {
      let c = e[a];
      (i[a] = s.getPropertyValue(c)), s.setProperty(c, Bc);
    }
    r.push(n), o.push(i);
  }
  function Fc(n, e, t, r, o, s) {
    let i = getComputedStyle(n);
    for (let a = 0; a < t; a++)
      if (i.getPropertyValue(e[a]) !== Bc) {
        r.push(n), jc(n, e, t, o, s);
        return;
      }
  }
});
var Uc = O((cs) => {
  "use strict";
  Object.defineProperty(cs, "__esModule", { value: !0 });
  Object.defineProperty(cs, "buildCustomPropertyAction", {
    enumerable: !0,
    get: function () {
      return $m;
    },
  });
  var Be = Y(),
    Gm = Eo(),
    Um = ss();
  function $m(n) {
    n.addAction("custom-property", {
      createCustomTween: (e, t, r, o, s, i, a) => {
        let c = Object.keys(r);
        if (c.length === 0 || s.length === 0) return;
        let l = Array.from(new Set(s)),
          u = c.filter(qm),
          f = u.length > 0 ? (0, Um.clearInlineCustomProperties)(l, u) : void 0,
          d = (0, Gm.createStyleTweenConfig)(r, l),
          p = t.tt ?? Be.TweenType.To,
          h = Object.keys(d.from).length > 0,
          g = Object.keys(d.to).length > 0;
        if (
          p === Be.TweenType.From
            ? !h
            : p === Be.TweenType.FromTo
            ? !h && !g
            : !g
        ) {
          f?.();
          return;
        }
        a?.flagVolatileValues?.(d);
        let y = u.length === c.length ? Hm(o) : { ...o };
        return (
          p === Be.TweenType.From
            ? e.from(l, { ...y, ...d.from }, i)
            : p === Be.TweenType.FromTo
            ? e.fromTo(l, { ...d.from }, { ...y, ...d.to }, i)
            : p === Be.TweenType.Set
            ? e.set(l, { ...y, ...d.to }, i)
            : e.to(l, { ...y, ...d.to }, i),
          f
        );
      },
    });
  }
  function qm(n) {
    return n.charCodeAt(0) === 45 && n.charCodeAt(1) === 45;
  }
  function Hm(n) {
    let { force3D: e, ...t } = n;
    return t;
  }
});
var Hc = O((ls) => {
  "use strict";
  Object.defineProperty(ls, "__esModule", { value: !0 });
  Object.defineProperty(ls, "plugin", {
    enumerable: !0,
    get: function () {
      return ey;
    },
  });
  var $c = ja(),
    zm = Eo(),
    Wm = tc(),
    qc = Tc(),
    Ym = Lc(),
    Km = Gc(),
    Xm = Uc(),
    Qm = Xr(),
    Zm = Y(),
    Jm = ee(),
    te = new Zm.RuntimeBuilder(Jm.CORE_PLUGIN_INFO);
  (0, $c.build)(te);
  (0, $c.buildTriggerContracts)(te);
  (0, zm.build)(te);
  (0, Wm.buildLottieAction)(te);
  (0, qc.buildRiveAction)(te);
  (0, qc.buildAnimateRiveAction)(te);
  (0, Ym.buildSplineAction)(te);
  (0, Km.buildVariableAction)(te);
  (0, Xm.buildCustomPropertyAction)(te);
  (0, Qm.build)(te);
  var ey = te.buildRuntime();
});
var zc = O((us) => {
  "use strict";
  Object.defineProperty(us, "__esModule", { value: !0 });
  Object.defineProperty(us, "plugin", {
    enumerable: !0,
    get: function () {
      return ty.plugin;
    },
  });
  var ty = Hc();
});
var Wc = hs(bi()),
  Yc = hs(zc());
async function ny() {
  try {
    let n = await Wc.IX3.init({ doc: document, win: window });
    return (
      await n.registerPlugin(Yc.plugin),
      { register: (e, t) => n.register(e, t), destroy: () => n.destroy() }
    );
  } catch (n) {
    throw (console.error("[Devlink IX3] Engine initialization failed:", n), n);
  }
}
var zv = { createIX3Engine: ny };
export { ny as createIX3Engine, zv as default };
