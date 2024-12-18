
/**
Constructor
Do not call Function in Constructor.
*/
function footer()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(footer, AView);


footer.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

footer.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

footer.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
