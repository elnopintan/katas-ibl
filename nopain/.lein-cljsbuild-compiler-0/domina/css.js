goog.provide('domina.css');
goog.require('cljs.core');
goog.require('goog.dom.query');
goog.require('goog.dom');
goog.require('domina');
domina.css.root_element = (function root_element(){
return (goog.dom.getElementsByTagNameAndClass("html")[0]);
});
/**
* Returns content based on a css selector expression. Takes an optional content as a base; if none is given, uses the HTML element as a base.
*/
domina.css.sel = (function() {
var sel = null;
var sel__1 = (function (expr){
return sel.call(null,domina.css.root_element.call(null),expr);
});
var sel__2 = (function (base,expr){
if((void 0 === domina.css.t8290))
{
/**
* @constructor
*/
domina.css.t8290 = (function (expr,base,sel,meta8291){
this.expr = expr;
this.base = base;
this.sel = sel;
this.meta8291 = meta8291;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.css.t8290.cljs$lang$type = true;
domina.css.t8290.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"domina.css/t8290");
});
domina.css.t8290.prototype.domina$DomContent$ = true;
domina.css.t8290.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var this__8293 = this;
return cljs.core.mapcat.call(null,(function (p1__8281_SHARP_){
return domina.normalize_seq.call(null,goog.dom.query(this__8293.expr,p1__8281_SHARP_));
}),domina.nodes.call(null,this__8293.base));
});
domina.css.t8290.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var this__8294 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.mapcat.call(null,(function (p1__8282_SHARP_){
return domina.normalize_seq.call(null,goog.dom.query(this__8294.expr,p1__8282_SHARP_));
}),domina.nodes.call(null,this__8294.base))));
});
domina.css.t8290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8292){
var this__8295 = this;
return this__8295.meta8291;
});
domina.css.t8290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8292,meta8291){
var this__8296 = this;
return (new domina.css.t8290(this__8296.expr,this__8296.base,this__8296.sel,meta8291));
});
domina.css.t8290;
} else
{}
return (new domina.css.t8290(expr,base,sel,null));
});
sel = function(base,expr){
switch(arguments.length){
case 1:
return sel__1.call(this,base);
case 2:
return sel__2.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
sel.cljs$lang$arity$1 = sel__1;
sel.cljs$lang$arity$2 = sel__2;
return sel;
})()
;
