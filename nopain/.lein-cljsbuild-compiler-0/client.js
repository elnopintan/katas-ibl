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
nopain.client.curr_slide = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'pos"],{"\uFDD0'name":"","\uFDD0'pos":-1}));
nopain.client.refreshSlides = (function refreshSlides(){
var map__7699__7700 = cljs.core.deref.call(null,nopain.client.curr_slide);
var map__7699__7701 = ((cljs.core.seq_QMARK_.call(null,map__7699__7700))?cljs.core.apply.call(null,cljs.core.hash_map,map__7699__7700):map__7699__7700);
var pos__7702 = cljs.core._lookup.call(null,map__7699__7701,"\uFDD0'pos",null);
var name__7703 = cljs.core._lookup.call(null,map__7699__7701,"\uFDD0'name",null);
return fetch.remotes.remote_callback.call(null,"get-slide",cljs.core.PersistentVector.fromArray([name__7703,pos__7702], true),(function (r){
if(cljs.core.truth_(r))
{var temp__3971__auto____7704 = (new cljs.core.Keyword("\uFDD0'run")).call(null,cljs.core.deref.call(null,nopain.client.curr_slide));
if(cljs.core.truth_(temp__3971__auto____7704))
{var f__7705 = temp__3971__auto____7704;
nopain.execs.stop.call(null,f__7705);
} else
{}
cljs.core.reset_BANG_.call(null,nopain.client.curr_slide,cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'pos","\uFDD0'run"],{"\uFDD0'name":(new cljs.core.Keyword("\uFDD0'name")).call(null,r),"\uFDD0'pos":(new cljs.core.Keyword("\uFDD0'pos")).call(null,r),"\uFDD0'run":(new cljs.core.Keyword("\uFDD0'run")).call(null,r)}));
enfocus.core.at.call(null,document,cljs.core.PersistentVector.fromArray(["#main"], true),enfocus.core.en_content.call(null,(new cljs.core.Keyword("\uFDD0'html")).call(null,r)));
var temp__3971__auto____7706 = (new cljs.core.Keyword("\uFDD0'run")).call(null,r);
if(cljs.core.truth_(temp__3971__auto____7706))
{var f__7707 = temp__3971__auto____7706;
nopain.execs.run.call(null,f__7707);
} else
{}
return SyntaxHighlighter.highlight();
} else
{return null;
}
}));
});
goog.events.listen(nopain.client.timer,goog.Timer.TICK,nopain.client.refreshSlides);
