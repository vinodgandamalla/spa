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
var len__5729__auto___6035 = arguments.length;
var i__5730__auto___6036 = (0);
while(true){
if((i__5730__auto___6036 < len__5729__auto___6035)){
args__5736__auto__.push((arguments[i__5730__auto___6036]));

var G__6037 = (i__5730__auto___6036 + (1));
i__5730__auto___6036 = G__6037;
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

spa.core.row.cljs$lang$applyTo = (function (seq6033){
var G__6034 = cljs.core.first.call(null,seq6033);
var seq6033__$1 = cljs.core.next.call(null,seq6033);
return spa.core.row.cljs$core$IFn$_invoke$arity$variadic(G__6034,seq6033__$1);
});
spa.core.text_input = (function spa$core$text_input(id,label){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spa.core.row,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"value","value",305978217),spa.core.get_value.call(null,id),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__6038_SHARP_){
return spa.core.set_value_BANG_.call(null,id,p1__6038_SHARP_.target.value);
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
var len__5729__auto___6052 = arguments.length;
var i__5730__auto___6053 = (0);
while(true){
if((i__5730__auto___6053 < len__5729__auto___6052)){
args__5736__auto__.push((arguments[i__5730__auto___6053]));

var G__6054 = (i__5730__auto___6053 + (1));
i__5730__auto___6053 = G__6054;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((2) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((2)),(0))):null);
return spa.core.selection_list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5737__auto__);
});

spa.core.selection_list.cljs$core$IFn$_invoke$arity$variadic = (function (id,label,items){
var selections = reagent.core.atom.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__6042){
var vec__6043 = p__6042;
var k = cljs.core.nth.call(null,vec__6043,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null);
}),items)));
return ((function (selections){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-2","div.col-md-2",-138798418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-5","div.col-md-5",1167007965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),(function (){var iter__5443__auto__ = ((function (selections){
return (function spa$core$iter__6044(s__6045){
return (new cljs.core.LazySeq(null,((function (selections){
return (function (){
var s__6045__$1 = s__6045;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__6045__$1);
if(temp__4425__auto__){
var s__6045__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6045__$2)){
var c__5441__auto__ = cljs.core.chunk_first.call(null,s__6045__$2);
var size__5442__auto__ = cljs.core.count.call(null,c__5441__auto__);
var b__6047 = cljs.core.chunk_buffer.call(null,size__5442__auto__);
if((function (){var i__6046 = (0);
while(true){
if((i__6046 < size__5442__auto__)){
var vec__6050 = cljs.core._nth.call(null,c__5441__auto__,i__6046);
var k = cljs.core.nth.call(null,vec__6050,(0),null);
var v = cljs.core.nth.call(null,vec__6050,(1),null);
cljs.core.chunk_append.call(null,b__6047,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [spa.core.list_item,id,k,v,selections], null));

var G__6055 = (i__6046 + (1));
i__6046 = G__6055;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6047),spa$core$iter__6044.call(null,cljs.core.chunk_rest.call(null,s__6045__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6047),null);
}
} else {
var vec__6051 = cljs.core.first.call(null,s__6045__$2);
var k = cljs.core.nth.call(null,vec__6051,(0),null);
var v = cljs.core.nth.call(null,vec__6051,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [spa.core.list_item,id,k,v,selections], null),spa$core$iter__6044.call(null,cljs.core.rest.call(null,s__6045__$2)));
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

spa.core.selection_list.cljs$lang$applyTo = (function (seq6039){
var G__6040 = cljs.core.first.call(null,seq6039);
var seq6039__$1 = cljs.core.next.call(null,seq6039);
var G__6041 = cljs.core.first.call(null,seq6039__$1);
var seq6039__$2 = cljs.core.next.call(null,seq6039__$1);
return spa.core.selection_list.cljs$core$IFn$_invoke$arity$variadic(G__6040,G__6041,seq6039__$2);
});
spa.core.handler = (function spa$core$handler(response){
return console.log([cljs.core.str(response)].join(''));
});
spa.core.error_handler = (function spa$core$error_handler(p__6056){
var map__6059 = p__6056;
var map__6059__$1 = ((((!((map__6059 == null)))?((((map__6059.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6059.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6059):map__6059);
var status = cljs.core.get.call(null,map__6059__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__6059__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log([cljs.core.str("something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
spa.core.save_doc = (function spa$core$save_doc(){
return ajax.core.GET.call(null,"/save",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (res){
return cljs.core.swap_BANG_.call(null,spa.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),res);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),spa.core.error_handler], null));
});
spa.core.done1 = (function spa$core$done1(){
return ajax.core.POST.call(null,"/send-message",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Hello World",new cljs.core.Keyword(null,"user","user",1532431356),"Bob"], null),new cljs.core.Keyword(null,"handler","handler",-195596612),spa.core.handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),spa.core.error_handler], null));
});
spa.core.done = (function spa$core$done(){
return ajax.core.GET.call(null,"/hello",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),spa.core.handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),spa.core.error_handler], null));
});
spa.core.home = (function spa$core$home(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-header","div.page-header",-18181304),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Reagent Form"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spa.core.text_input,new cljs.core.Keyword(null,"first-name","first-name",-1559982131),"First name"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spa.core.text_input,new cljs.core.Keyword(null,"last-name","last-name",-1695738974),"Last name"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [spa.core.selection_list,new cljs.core.Keyword(null,"favorite-drinks","favorite-drinks",-1752184854),"Favorite drinks",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coffee","coffee",23772871),"Coffee"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beer","beer",1742036006),"Beer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"crab-juice","crab-juice",-1168836952),"Crab juice"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"saved?","saved?",-2027163192).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,spa.core.state)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Saved"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),spa.core.save_doc], null),"Submit"], null))], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spa.core.home], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map