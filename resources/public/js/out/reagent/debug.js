// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__5882__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__5882 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5883__i = 0, G__5883__a = new Array(arguments.length -  0);
while (G__5883__i < G__5883__a.length) {G__5883__a[G__5883__i] = arguments[G__5883__i + 0]; ++G__5883__i;}
  args = new cljs.core.IndexedSeq(G__5883__a,0);
} 
return G__5882__delegate.call(this,args);};
G__5882.cljs$lang$maxFixedArity = 0;
G__5882.cljs$lang$applyTo = (function (arglist__5884){
var args = cljs.core.seq(arglist__5884);
return G__5882__delegate(args);
});
G__5882.cljs$core$IFn$_invoke$arity$variadic = G__5882__delegate;
return G__5882;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__5885__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__5885 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5886__i = 0, G__5886__a = new Array(arguments.length -  0);
while (G__5886__i < G__5886__a.length) {G__5886__a[G__5886__i] = arguments[G__5886__i + 0]; ++G__5886__i;}
  args = new cljs.core.IndexedSeq(G__5886__a,0);
} 
return G__5885__delegate.call(this,args);};
G__5885.cljs$lang$maxFixedArity = 0;
G__5885.cljs$lang$applyTo = (function (arglist__5887){
var args = cljs.core.seq(arglist__5887);
return G__5885__delegate(args);
});
G__5885.cljs$core$IFn$_invoke$arity$variadic = G__5885__delegate;
return G__5885;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map