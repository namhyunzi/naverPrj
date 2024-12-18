
/**
Constructor
Do not call Function in Constructor.
*/
function subcard()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(subcard, AView);


subcard.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

subcard.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

subcard.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
