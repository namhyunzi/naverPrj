
/**
Constructor
Do not call Function in Constructor.
*/
function subpannel2()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(subpannel2, AView);


subpannel2.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

subpannel2.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

subpannel2.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
