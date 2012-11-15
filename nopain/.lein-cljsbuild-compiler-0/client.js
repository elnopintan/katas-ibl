goog.provide('nopain.client');
goog.require('cljs.core');
goog.require('nopain.counter');
goog.require('nopain.execs');
goog.require('enfocus.core');
goog.require('goog.Timer');
goog.require('goog.events');
goog.require('fetch.remotes');
nopain.client.timer = (new goog.Timer(2000));
nopain.client.timer.start();
nopain.client.curr_slide = cljs.core.atom.cljs$lang$arity$1(cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'pos"],{"\uFDD0'name":"","\uFDD0'pos":-1}));
nopain.client.refreshSlides = (function refreshSlides(){
var map__12642__12643 = cljs.core.deref(nopain.client.curr_slide);
var map__12642__12644 = ((cljs.core.seq_QMARK_(map__12642__12643))?cljs.core.apply.cljs$lang$arity$2(cljs.core.hash_map,map__12642__12643):map__12642__12643);
var pos__12645 = cljs.core._lookup.cljs$lang$arity$3(map__12642__12644,"\uFDD0'pos",null);
var name__12646 = cljs.core._lookup.cljs$lang$arity$3(map__12642__12644,"\uFDD0'name",null);
return fetch.remotes.remote_callback("get-slide",cljs.core.PersistentVector.fromArray([name__12646,pos__12645], true),(function (r){
if(cljs.core.truth_(r))
{var temp__3971__auto____12647 = (new cljs.core.Keyword("\uFDD0'run")).call(null,cljs.core.deref(nopain.client.curr_slide));
if(cljs.core.truth_(temp__3971__auto____12647))
{var f__12648 = temp__3971__auto____12647;
(nopain.execs.stop.cljs$lang$arity$1 ? nopain.execs.stop.cljs$lang$arity$1(f__12648) : nopain.execs.stop.call(null,f__12648));
} else
{}
cljs.core.reset_BANG_(nopain.client.curr_slide,cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'pos","\uFDD0'run"],{"\uFDD0'name":(new cljs.core.Keyword("\uFDD0'name")).call(null,r),"\uFDD0'pos":(new cljs.core.Keyword("\uFDD0'pos")).call(null,r),"\uFDD0'run":(new cljs.core.Keyword("\uFDD0'run")).call(null,r)}));
enfocus.core.at.cljs$lang$arity$variadic(document,cljs.core.array_seq([cljs.core.PersistentVector.fromArray(["#main"], true),enfocus.core.en_content.cljs$lang$arity$variadic(cljs.core.array_seq([(new cljs.core.Keyword("\uFDD0'html")).call(null,r)], 0))], 0));
var temp__3971__auto____12649 = (new cljs.core.Keyword("\uFDD0'run")).call(null,r);
if(cljs.core.truth_(temp__3971__auto____12649))
{var f__12650 = temp__3971__auto____12649;
(nopain.execs.run.cljs$lang$arity$1 ? nopain.execs.run.cljs$lang$arity$1(f__12650) : nopain.execs.run.call(null,f__12650));
} else
{}
return SyntaxHighlighter.highlight();
} else
{return null;
}
}));
});
goog.events.listen(nopain.client.timer,goog.Timer.TICK,nopain.client.refreshSlides);
