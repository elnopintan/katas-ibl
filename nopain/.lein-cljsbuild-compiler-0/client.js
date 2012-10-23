goog.provide('client.cljs');
goog.require('cljs.core');
goog.require('enfocus.core');
goog.require('goog.Timer');
goog.require('goog.events');
goog.require('fetch.remotes');
client.cljs.timer = (new goog.Timer(2000));
client.cljs.timer.start();
client.cljs.curr_slide = cljs.core.atom.cljs$lang$arity$1(cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'pos"],{"\uFDD0'name":"","\uFDD0'pos":-1}));
client.cljs.refreshSlides = (function refreshSlides(){
var map__41400__41401 = cljs.core.deref(client.cljs.curr_slide);
var map__41400__41402 = ((cljs.core.seq_QMARK_(map__41400__41401))?cljs.core.apply.cljs$lang$arity$2(cljs.core.hash_map,map__41400__41401):map__41400__41401);
var pos__41403 = cljs.core._lookup.cljs$lang$arity$3(map__41400__41402,"\uFDD0'pos",null);
var name__41404 = cljs.core._lookup.cljs$lang$arity$3(map__41400__41402,"\uFDD0'name",null);
return fetch.remotes.remote_callback("get-slide",cljs.core.PersistentVector.fromArray([name__41404,pos__41403], true),(function (r){
if(cljs.core.truth_(r))
{cljs.core.reset_BANG_(client.cljs.curr_slide,cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'pos"],{"\uFDD0'name":(new cljs.core.Keyword("\uFDD0'name")).call(null,r),"\uFDD0'pos":(new cljs.core.Keyword("\uFDD0'pos")).call(null,r)}));
return enfocus.core.at.cljs$lang$arity$variadic(document,cljs.core.array_seq([cljs.core.PersistentVector.fromArray(["#main"], true),enfocus.core.en_content.cljs$lang$arity$variadic(cljs.core.array_seq([(new cljs.core.Keyword("\uFDD0'html")).call(null,r)], 0))], 0));
} else
{return null;
}
}));
});
goog.events.listen(client.cljs.timer,goog.Timer.TICK,client.cljs.refreshSlides);
