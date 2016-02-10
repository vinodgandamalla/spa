// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.dom !== 'undefined'){
} else {
reagent.dom.dom = (function (){var or__4671__auto__ = (function (){var and__4659__auto__ = typeof ReactDOM !== 'undefined';
if(and__4659__auto__){
return ReactDOM;
} else {
return and__4659__auto__;
}
})();
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
var and__4659__auto__ = typeof require !== 'undefined';
if(and__4659__auto__){
return require("react-dom");
} else {
return and__4659__auto__;
}
}
})();
}
if(cljs.core.truth_(reagent.dom.dom)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Could not find ReactDOM"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"dom","dom",403993605,null)))].join('')));
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.dom["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_6314 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.dom["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_6314){
return (function (){
var _STAR_always_update_STAR_6315 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_6315;
}});})(_STAR_always_update_STAR_6314))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_6314;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args6316 = [];
var len__5729__auto___6319 = arguments.length;
var i__5730__auto___6320 = (0);
while(true){
if((i__5730__auto___6320 < len__5729__auto___6319)){
args6316.push((arguments[i__5730__auto___6320]));

var G__6321 = (i__5730__auto___6320 + (1));
i__5730__auto___6320 = G__6321;
continue;
} else {
}
break;
}

var G__6318 = args6316.length;
switch (G__6318) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6316.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.dom["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
var seq__6327_6331 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__6328_6332 = null;
var count__6329_6333 = (0);
var i__6330_6334 = (0);
while(true){
if((i__6330_6334 < count__6329_6333)){
var v_6335 = cljs.core._nth.call(null,chunk__6328_6332,i__6330_6334);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_6335);

var G__6336 = seq__6327_6331;
var G__6337 = chunk__6328_6332;
var G__6338 = count__6329_6333;
var G__6339 = (i__6330_6334 + (1));
seq__6327_6331 = G__6336;
chunk__6328_6332 = G__6337;
count__6329_6333 = G__6338;
i__6330_6334 = G__6339;
continue;
} else {
var temp__4425__auto___6340 = cljs.core.seq.call(null,seq__6327_6331);
if(temp__4425__auto___6340){
var seq__6327_6341__$1 = temp__4425__auto___6340;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6327_6341__$1)){
var c__5474__auto___6342 = cljs.core.chunk_first.call(null,seq__6327_6341__$1);
var G__6343 = cljs.core.chunk_rest.call(null,seq__6327_6341__$1);
var G__6344 = c__5474__auto___6342;
var G__6345 = cljs.core.count.call(null,c__5474__auto___6342);
var G__6346 = (0);
seq__6327_6331 = G__6343;
chunk__6328_6332 = G__6344;
count__6329_6333 = G__6345;
i__6330_6334 = G__6346;
continue;
} else {
var v_6347 = cljs.core.first.call(null,seq__6327_6341__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_6347);

var G__6348 = cljs.core.next.call(null,seq__6327_6341__$1);
var G__6349 = null;
var G__6350 = (0);
var G__6351 = (0);
seq__6327_6331 = G__6348;
chunk__6328_6332 = G__6349;
count__6329_6333 = G__6350;
i__6330_6334 = G__6351;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map