// Compiled by ClojureScript 1.7.170 {}
goog.provide('spa.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
spa.core.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),false], null));
spa.core.set_value_BANG_ = (function spa$core$set_value_BANG_(id,value){
cljs.core.swap_BANG_.call(null,spa.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),false);

return cljs.core.swap_BANG_.call(null,spa.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"doc","doc",1913296891),id], null),value);
});
spa.core.get_value = (function spa$core$get_value(id){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,spa.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"doc","doc",1913296891),id], null));
});
spa.core.row = (function spa$core$row(var_args){
var args__5736__auto__ = [];
var len__5729__auto___5975 = arguments.length;
var i__5730__auto___5976 = (0);
while(true){
if((i__5730__auto___5976 < len__5729__auto___5975)){
args__5736__auto__.push((arguments[i__5730__auto___5976]));

var G__5977 = (i__5730__auto___5976 + (1));
i__5730__auto___5976 = G__5977;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((1) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((1)),(0))):null);
return spa.core.row.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5737__auto__);
});

spa.core.row.cljs$core$IFn$_invoke$arity$variadic = (function (label,body){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-2","div.col-md-2",-138798418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-3","div.col-md-3",1386112129),body], null)], null);
});

spa.core.row.cljs$lang$maxFixedArity = (1);

spa.core.row.cljs$lang$applyTo = (function (seq5973){
var G__5974 = cljs.core.first.call(null,seq5973);
var seq5973__$1 = cljs.core.next.call(null,seq5973);
return spa.core.row.cljs$core$IFn$_invoke$arity$variadic(G__5974,seq5973__$1);
});
spa.core.text_input = (function spa$core$text_input(id,label){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spa.core.row,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"value","value",305978217),spa.core.get_value.call(null,id),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__5978_SHARP_){
return spa.core.set_value_BANG_.call(null,id,p1__5978_SHARP_.target.value);
})], null)], null)], null);
});
spa.core.list_item = (function spa$core$list_item(id,k,v,selections){
var handle_click_BANG_ = (function spa$core$list_item_$_handle_click_BANG_(){
cljs.core.swap_BANG_.call(null,selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.not);

return spa.core.set_value_BANG_.call(null,id,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.second,cljs.core.deref.call(null,selections))));
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("list-group-item"),cljs.core.str((cljs.core.truth_(k.call(null,cljs.core.deref.call(null,selections)))?" active":null))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),handle_click_BANG_], null),v], null);
});
spa.core.selection_list = (function spa$core$selection_list(var_args){
var args__5736__auto__ = [];
var len__5729__auto___5992 = arguments.length;
var i__5730__auto___5993 = (0);
while(true){
if((i__5730__auto___5993 < len__5729__auto___5992)){
args__5736__auto__.push((arguments[i__5730__auto___5993]));

var G__5994 = (i__5730__auto___5993 + (1));
i__5730__auto___5993 = G__5994;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((2) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((2)),(0))):null);
return spa.core.selection_list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5737__auto__);
});

spa.core.selection_list.cljs$core$IFn$_invoke$arity$variadic = (function (id,label,items){
var selections = reagent.core.atom.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__5982){
var vec__5983 = p__5982;
var k = cljs.core.nth.call(null,vec__5983,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null);
}),items)));
return ((function (selections){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-2","div.col-md-2",-138798418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-5","div.col-md-5",1167007965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),(function (){var iter__5443__auto__ = ((function (selections){
return (function spa$core$iter__5984(s__5985){
return (new cljs.core.LazySeq(null,((function (selections){
return (function (){
var s__5985__$1 = s__5985;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__5985__$1);
if(temp__4425__auto__){
var s__5985__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5985__$2)){
var c__5441__auto__ = cljs.core.chunk_first.call(null,s__5985__$2);
var size__5442__auto__ = cljs.core.count.call(null,c__5441__auto__);
var b__5987 = cljs.core.chunk_buffer.call(null,size__5442__auto__);
if((function (){var i__5986 = (0);
while(true){
if((i__5986 < size__5442__auto__)){
var vec__5990 = cljs.core._nth.call(null,c__5441__auto__,i__5986);
var k = cljs.core.nth.call(null,vec__5990,(0),null);
var v = cljs.core.nth.call(null,vec__5990,(1),null);
cljs.core.chunk_append.call(null,b__5987,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [spa.core.list_item,id,k,v,selections], null));

var G__5995 = (i__5986 + (1));
i__5986 = G__5995;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5987),spa$core$iter__5984.call(null,cljs.core.chunk_rest.call(null,s__5985__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5987),null);
}
} else {
var vec__5991 = cljs.core.first.call(null,s__5985__$2);
var k = cljs.core.nth.call(null,vec__5991,(0),null);
var v = cljs.core.nth.call(null,vec__5991,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [spa.core.list_item,id,k,v,selections], null),spa$core$iter__5984.call(null,cljs.core.rest.call(null,s__5985__$2)));
}
} else {
return null;
}
break;
}
});})(selections))
,null,null));
});})(selections))
;
return iter__5443__auto__.call(null,items);
})()], null)], null)], null);
});
;})(selections))
});

spa.core.selection_list.cljs$lang$maxFixedArity = (2);

spa.core.selection_list.cljs$lang$applyTo = (function (seq5979){
var G__5980 = cljs.core.first.call(null,seq5979);
var seq5979__$1 = cljs.core.next.call(null,seq5979);
var G__5981 = cljs.core.first.call(null,seq5979__$1);
var seq5979__$2 = cljs.core.next.call(null,seq5979__$1);
return spa.core.selection_list.cljs$core$IFn$_invoke$arity$variadic(G__5980,G__5981,seq5979__$2);
});
spa.core.handler = (function spa$core$handler(response){
return console.log([cljs.core.str(response)].join(''));
});
spa.core.error_handler = (function spa$core$error_handler(p__5996){
var map__5999 = p__5996;
var map__5999__$1 = ((((!((map__5999 == null)))?((((map__5999.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5999.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5999):map__5999);
var status = cljs.core.get.call(null,map__5999__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__5999__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log([cljs.core.str("something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
spa.core.save_doc = (function spa$core$save_doc(){
return ajax.core.GET.call(null,"/save",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (res){
return cljs.core.swap_BANG_.call(null,spa.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),res);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),spa.core.error_handler], null));
});
spa.core.home = (function spa$core$home(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-header","div.page-header",-18181304),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Reagent Form"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spa.core.text_input,new cljs.core.Keyword(null,"first-name","first-name",-1559982131),"First name"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spa.core.text_input,new cljs.core.Keyword(null,"last-name","last-name",-1695738974),"Last name"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [spa.core.selection_list,new cljs.core.Keyword(null,"favorite-drinks","favorite-drinks",-1752184854),"Favorite drinks",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coffee","coffee",23772871),"Coffee"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beer","beer",1742036006),"Beer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"crab-juice","crab-juice",-1168836952),"Crab juice"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"saved?","saved?",-2027163192).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,spa.core.state)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Saved"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),spa.core.save_doc], null),"Submit"], null))], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spa.core.home], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map