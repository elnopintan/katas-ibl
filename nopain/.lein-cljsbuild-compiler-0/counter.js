goog.provide('nopain.counter');
goog.require('cljs.core');
goog.require('nopain.execs');
goog.require('enfocus.core');
goog.require('goog.Timer');
goog.require('goog.events');
nopain.counter.num = cljs.core.atom.call(null,1);
nopain.counter.timer = (new goog.Timer(20));
nopain.counter.change_count = (function change_count(c){
return ((c + c) % 1000000);
});
nopain.counter.paint = (function paint(){
return enfocus.core.at.call(null,document,cljs.core.PersistentVector.fromArray(["#counter"], true),enfocus.core.en_content.call(null,[cljs.core.str(cljs.core.swap_BANG_.call(null,nopain.counter.num,nopain.counter.change_count))].join('')));
});
nopain.counter.count = (function count(){
nopain.counter.timer.start();
return goog.events.listen(nopain.counter.timer,goog.Timer.TICK,nopain.counter.paint);
});
nopain.counter.stop_count = (function stop_count(){
return nopain.counter.timer.stop();
});
nopain.execs.add_f.call(null,"counter",nopain.counter.count,nopain.counter.stop_count);
