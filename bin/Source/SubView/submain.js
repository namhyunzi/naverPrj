
/**
Constructor
Do not call Function in Constructor.
*/
function submain()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(submain, AView);


submain.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

submain.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

submain.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
