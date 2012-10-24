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
if((void 0 === domina.css.t12240))
{
/**
* @constructor
*/
domina.css.t12240 = (function (expr,base,sel,meta12241){
this.expr = expr;
this.base = base;
this.sel = sel;
this.meta12241 = meta12241;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.css.t12240.cljs$lang$type = true;
domina.css.t12240.cljs$lang$ctorPrSeq = (function (this__2315__auto__){
return cljs.core.list.call(null,"domina.css/t12240");
});
domina.css.t12240.prototype.domina$DomContent$ = true;
domina.css.t12240.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var this__12243 = this;
return cljs.core.mapcat.call(null,(function (p1__12231_SHARP_){
return domina.normalize_seq.call(null,goog.dom.query(this__12243.expr,p1__12231_SHARP_));
}),domina.nodes.call(null,this__12243.base));
});
domina.css.t12240.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var this__12244 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.mapcat.call(null,(function (p1__12232_SHARP_){
return domina.normalize_seq.call(null,goog.dom.query(this__12244.expr,p1__12232_SHARP_));
}),domina.nodes.call(null,this__12244.base))));
});
domina.css.t12240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12242){
var this__12245 = this;
return this__12245.meta12241;
});
domina.css.t12240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12242,meta12241){
var this__12246 = this;
return (new domina.css.t12240(this__12246.expr,this__12246.base,this__12246.sel,meta12241));
});
domina.css.t12240;
} else
{}
return (new domina.css.t12240(expr,base,sel,null));
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
